import "./index.css";

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
  <head>
 <link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css" />
  </head>
            <body>{children}</body>
        </html>
    );
}

export default RootLayout;
