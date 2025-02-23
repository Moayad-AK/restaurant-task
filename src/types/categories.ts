export interface ICategoriesResponse {
  data: { categories: Category[] };
}

export interface Category {
  id: number;
  name: string;
  display_name: string;
  image: string;
  is_closed: boolean;
  opens_at: string | null;
  count_sub_categories: number;
}
