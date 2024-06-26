export type PostSummary = {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  category: string;
  created_at: number;
  updated_at: number;
};

export type PostDetail = {
  title: string;
  content_url: string;
  cover_url: string;
  category: string;
  created_at: Date;
};
