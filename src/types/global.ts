export type QuoteStoreState = {
  text: string;
  loading: boolean;
  getRandomQuote: () => Promise<void>;
};
