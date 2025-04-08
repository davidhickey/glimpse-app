import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET /api/users
export async function GET(): Promise<NextResponse> {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({
      success: true,
      data: users,
      message: "Users fetched successfully",
    }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({
        success: false,
        message: error.message,
      }, { status: 500 });
    }
    return NextResponse.json({
      success: false,
      message: "An unknown error occurred",
    }, { status: 500 });
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const user = await prisma.user.create({ data: body });
    return NextResponse.json({ success: true, data: user });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({
        success: false,
        message: error.message,
      }, { status: 500 });
    }
    return NextResponse.json({
      success: false,
      message: "An unknown error occurred",
    }, { status: 500 });
  }
}
