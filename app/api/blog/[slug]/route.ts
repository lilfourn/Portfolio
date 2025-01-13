import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface RouteParams {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function GET(
  request: Request,
  { params }: RouteParams
) {
  try {
    const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return new NextResponse(fileContent);
  } catch {
    return new NextResponse('Blog post not found', { status: 404 });
  }
}
