// vendors
import { Metadata } from 'next';

// fonts
import { inter, lusitana } from '@/app/ui/fonts';

// styles
import '@/app/ui/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lusitana.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
