/** Social handle + mono icon row from the brand's own SVGs. */
export interface SocialLinksProps {
  handle?: string | null;
  /** Icon size in px; handle text scales with it */
  size?: number;
  color?: string;
  /** stacked = handle above icons (story); inline = icons then handle (post footer bar) */
  layout?: 'stacked' | 'inline';
  networks?: Array<'facebook' | 'twitter' | 'instagram' | 'whatsapp' | 'telegram'>;
}
export function SocialLinks(props: SocialLinksProps): JSX.Element;
export interface SocialIconProps { name: 'facebook' | 'twitter' | 'instagram' | 'whatsapp' | 'telegram'; size?: number; color?: string; }
export function SocialIcon(props: SocialIconProps): JSX.Element;
