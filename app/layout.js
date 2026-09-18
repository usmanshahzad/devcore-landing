import "./globals.css";
import "./studio.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "DevCore — Software Development & IT Solutions",
  description:
    "DevCore designs and develops scalable software, websites, POS systems and digital solutions that help businesses operate smarter and grow faster.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try{
                  var t = localStorage.getItem('devcore-theme');
                  if(!t){ t = 'dark'; }
                  document.documentElement.setAttribute('data-theme', t);
                }catch(e){}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}