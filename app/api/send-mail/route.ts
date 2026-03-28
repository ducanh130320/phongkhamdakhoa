import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/sendLeadEmail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, message, source } = body as {
      name?: string;
      phone?: string;
      message?: string;
      source?: string;
    };

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { message: "Thiếu họ tên hoặc số điện thoại" },
        { status: 400 }
      );
    }

    await sendLeadEmail({
      name: name.trim(),
      phone: phone.trim(),
      message: message?.trim() || undefined,
      source: source?.trim() || "Modal Đặt Lịch",
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("send-mail (Nodemailer):", error);
    return NextResponse.json(
      { message: "Không gửi được email" },
      { status: 500 }
    );
  }
}
