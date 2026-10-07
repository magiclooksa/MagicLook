/** Product tile: 4:5 photo, Arabic name, optional subtitle/badge/price. */
export interface ProductCardProps { image?: string; name: string; subtitle?: string; badge?: string; price?: string; onClick?: () => void; }
export function ProductCard(props: ProductCardProps): JSX.Element;
