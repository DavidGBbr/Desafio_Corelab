export interface TodoRequest {
  id?: string;
  title: string;
  description: string;
  completed: boolean;
  color?: string;
  favorite: boolean;
}
