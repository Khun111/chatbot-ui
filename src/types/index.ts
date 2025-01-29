export interface ScrapingProgress {
  total: number;
  scraped: number;
  pending: number;
}

export interface WebsitePage {
  url: string;
  status: 'scraped' | 'pending';
  chunks: string[];
}

export interface SetupProps {
    onComplete: () => void;
  }
  
  