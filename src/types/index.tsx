export type ItemProps = {
  name: string;
  quantity: string;
  purchased?: boolean;
  onItemsPurchased?: () => void;
  onItemsToBuy?: () => void;
};
