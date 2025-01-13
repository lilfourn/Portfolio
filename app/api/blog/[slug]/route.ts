import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

type RouteContext = {
  params: {
    slug: string;
  };
};

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const filePath = path.join(process.cwd(), 'content/blog', `${context.params.slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return new NextResponse(fileContent);
  } catch {
    return new NextResponse('Blog post not found', { status: 404 });
  }
}
