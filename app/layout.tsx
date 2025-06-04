import Header from '@/components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html>
      <body>
        <Header />
        {children}
        <footer>My Footer</footer>
      </body>
    </html>
  );
}
