import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/sendLeadEmail";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, source } = await req.json();

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { message: "Missing name or phone" },
        { status: 400 }
      );
    }

    await sendLeadEmail({
      name: String(name).trim(),
      phone: String(phone).trim(),
      source: source?.trim() || "Banner Chính",
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("register / send lead email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
