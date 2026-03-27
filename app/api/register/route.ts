import { NextRequest, NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';
import * as XLSX from 'xlsx';

export async function POST(req: NextRequest) {
  try {
    const { name, phone, source } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { message: 'Missing name or phone' },
        { status: 400 }
      );
    }

    // 1. Generate Excel Buffer & Convert to Base64
    const leadData = [
      {
        "Họ và tên": name,
        "Số điện thoại": phone,
        "Ngày đăng ký": new Date().toLocaleString("vi-VN"),
        "Nguồn": source || "Banner Chính"
      },
    ];

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(leadData);
    XLSX.utils.book_append_sheet(wb, ws, 'Leads');
    
    // Write to base64
    const base64Content = XLSX.write(wb, { type: 'base64', bookType: 'xlsx' });

    // 2. Setup EmailJS and Send
    // Get credentials from environment variables
    const serviceId = process.env.EMAILJS_SERVICE_ID || '';
    const templateId = process.env.EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || '';
    const privateKey = process.env.EMAILJS_PRIVATE_KEY || '';

    const templateParams = {
      name: name,
      phone: phone,
      source: source || 'Banner Chính',
      excel_file: base64Content, // Variable attachment name in EmailJS template
    };

    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      {
        publicKey: publicKey,
        privateKey: privateKey,
      }
    );

    if (result.status === 200) {
      return NextResponse.json({ message: 'Success' }, { status: 200 });
    } else {
      throw new Error(`EmailJS responded with status ${result.status}`);
    }
  } catch (error) {
    console.error('Email registration error (EmailJS):', error);
    return NextResponse.json(
      { message: 'Error sending email', error: String(error) },
      { status: 500 }
    );
  }
}
