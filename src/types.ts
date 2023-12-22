export interface User {
  login: string;
  id: number;
  avatar_url: string;
  followers_url: string;
}

export interface ApiData {
  total_count: number;
  incomplete_results: boolean;
  items: Partial<User[]>;
}
