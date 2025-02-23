export interface Item {
  id: number;
  image: string;
  price: number;
  name: string;
  display_name: string;
  calories: number | null;
  description: string;
  is_category_off: boolean;
  in_cart: boolean;
  in_cart_count: number;
  additional_items: any[];
  dietarySymbols: any[];
  extrasWithOptions: ExtraWithOptions[];
}

export interface ExtraWithOptions {
  extra_id: number;
  extra_type_name: string;
  is_active: 0 | 1;
  is_required: 0 | 1;
  max_options: 0 | 1;
  name: string;
  option: Option[];
}

export interface Option {
  currency: string;
  extrasWithOptions: any[];
  id: number;
  max_qty: number;
  name: string;
  option_has_price: boolean;
  price: number;
  type: string;
}

export interface PaginationLinks {
  total: number;
  first_page_url: string;
  next_page_url: string | null;
  prev_page_url: string | null;
  last_page_url: string;
  last_page: number;
  current_page: number;
}

export interface ItemsData {
  data: Item[];
  links: PaginationLinks;
}

export interface IItemsResponse {
  data: {
    items: ItemsData;
  };
}
