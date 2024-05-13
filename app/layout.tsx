// fonts
import { inter, lusitana } from '@/app/ui/fonts';

// styles
import '@/app/ui/global.css';

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
