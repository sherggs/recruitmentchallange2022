interface ArticleSourceData {
  name: string;
  url: any;
}

interface ArticleData {
  
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: Date;
    source: ArticleSourceData
} 


interface apiData {
  totalArticles: number;
  articles: ArticleData[]
}

export type { apiData };
