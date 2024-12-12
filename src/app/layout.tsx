import { ReactNode } from 'react';
import '@/app/global.scss';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="jp">
      <body>{children}</body>
    </html>
  );
}
