import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Survey API is working', status: 200 });
}
