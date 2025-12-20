import Image from 'next/image';
import Link from 'next/link';
import classes from './VeoexpressLogo.module.css';

type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type VeoexpressLogoProps = {
  size?: LogoSize;
  href?: string; // allow override if needed
};

const logo_dimensions_by_size: Record<LogoSize, { width: number; height: number }> = {
  xs: { width: 80, height: 16 },
  sm: { width: 100, height: 20 },
  md: { width: 140, height: 28 },
  lg: { width: 180, height: 36 },
  xl: { width: 240, height: 48 },
};

export function VeoexpressLogo({ size = 'xl', href = '/' }: VeoexpressLogoProps) {
  const { width, height } = logo_dimensions_by_size[size];

  return (
    <Link href={href} aria-label="Go to homepage" className={classes.logo_link}>
      <Image
        className={classes.logo}
        src="/logos/veoteenused_logo.svg"
        alt="veoteenused logo"
        width={width}
        height={height}
        priority
        style={{ height: 'auto' }}
      />
    </Link>
  );
}
