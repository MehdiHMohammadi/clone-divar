
export enum Category {
  ALL = 'همه آگهی‌ها',
  ELECTRONICS = 'لوازم الکترونیکی',
  HOME = 'خانه و آشپزخانه',
  VEHICLES = 'وسایل نقلیه',
  PERSONAL = 'وسایل شخصی',
  REAL_ESTATE = 'املاک',
}

export interface Product {
  id: number;
  title: string;
  price: string;
  location: string;
  time: string;
  category: Category;
  imageUrl: string;
}
