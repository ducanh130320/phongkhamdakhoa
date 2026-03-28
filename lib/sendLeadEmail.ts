import nodemailer from "nodemailer";
import * as XLSX from "xlsx";

export type LeadEmailInput = {
  name: string;
  phone: string;
  source?: string;
  message?: string | null;
};

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const from = process.env.MAIL_FROM;
  const to = process.env.MAIL_TO;

  if (!host || !user || !pass || !from || !to) {
    throw new Error(
      "Missing SMTP env: SMTP_HOST, SMTP_USER, SMTP_PASSWORD, MAIL_FROM, MAIL_TO"
    );
  }

  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === "true";

  return {
    transporter: nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    }),
    from,
    to,
  };
}

export async function sendLeadEmail(input: LeadEmailInput): Promise<void> {
  const { name, phone, source = "Web", message } = input;

  const leadData = [
    {
      "Họ và tên": name,
      "Số điện thoại": phone,
      "Ngày đăng ký": new Date().toLocaleString("vi-VN"),
      Nguồn: source,
      ...(message ? { "Lời nhắn": message } : {}),
    },
  ];

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(leadData);
  XLSX.utils.book_append_sheet(wb, ws, "Leads");
  const buffer = XLSX.write(wb, {
    type: "buffer",
    bookType: "xlsx",
  }) as Buffer;

  const { transporter, from, to } = getTransporter();

  const msgText =
    message && message.trim()
      ? `Nguồn: ${source}\nHọ tên: ${name}\nSĐT: ${phone}\nLời nhắn: ${message}`
      : `Nguồn: ${source}\nHọ tên: ${name}\nSĐT: ${phone}`;

  const msgHtml =
    message && message.trim()
      ? `<p><strong>Nguồn:</strong> ${escapeHtml(source)}</p>
<p><strong>Họ tên:</strong> ${escapeHtml(name)}</p>
<p><strong>SĐT:</strong> ${escapeHtml(phone)}</p>
<p><strong>Lời nhắn:</strong> ${escapeHtml(message)}</p>`
      : `<p><strong>Nguồn:</strong> ${escapeHtml(source)}</p>
<p><strong>Họ tên:</strong> ${escapeHtml(name)}</p>
<p><strong>SĐT:</strong> ${escapeHtml(phone)}</p>`;

  await transporter.sendMail({
    from,
    to,
    subject: `[${source}] Lead mới — ${name}`,
    text: msgText,
    html: msgHtml,
    attachments: [
      {
        filename: "lead.xlsx",
        content: buffer,
        contentType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    ],
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
