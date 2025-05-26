



interface RootLayoutProps {
  children: React.ReactNode;
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-CN">
      <body className={` flex flex-col min-h-screen`}>
  
        
        {children}
      
      </body>
    </html>
  );
}