export interface News {
  id: string;        // Unique identifier for the news article
  title: string;     // Title of the news
  body: string;      // Short description or content
  url: string;       // Link to the full article
  imageurl?: string; // Optional: URL of the thumbnail/image
  source: string;    // News source (e.g., "CryptoCompare")
  published_on: number; // Unix timestamp of when it was published
}
