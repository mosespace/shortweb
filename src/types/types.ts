export type CardProps = {
  id?: string;
  name: string;
  content: string;
  tag?: string;
  categoryId?: string;
};
export type CategoryProps = {
  name: string;
  slug: string;
  userId: string;
};
