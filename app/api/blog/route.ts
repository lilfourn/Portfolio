import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const blogDir = path.join(process.cwd(), 'content/blog');
    const files = fs.readdirSync(blogDir);
    return NextResponse.json(files);
  } catch {
    return new NextResponse('Error listing blog posts', { status: 500 });
  }
}
