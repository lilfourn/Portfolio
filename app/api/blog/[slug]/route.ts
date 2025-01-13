import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return new NextResponse(fileContent);
  } catch (error) {
    return new NextResponse('Blog post not found', { status: 404 });
  }
}
