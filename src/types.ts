export interface User {
  login: string;
  id: number;
  avatar_url: string;
  followers: number;
  name: string;
}

export interface UsersApiData {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
