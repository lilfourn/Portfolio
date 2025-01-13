export interface BlogAuthor {
  name: string;
  image: string;
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  author: BlogAuthor;
  tags: string[];
  image: string;
  slug: string;
  content: string;
  excerpt?: string;  // Optional excerpt for search functionality
}

export interface BlogFrontMatter {
  title: string;
  description: string;
  date: string;
  author: BlogAuthor;
  tags: string[];
  image: string;
}
