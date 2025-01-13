export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  readingTime: string;
  author: {
    name: string;
    image: string;
  };
  category: string;
  tags: string[];
  image: string;
  slug: string;
}
