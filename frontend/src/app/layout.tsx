'use client';
import StyledJsxRegistry from './registry';
import { createGlobalStyle } from 'styled-components';
import metadata from './components/metadata';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --primary-color: #393e46;
    --secundary-color: #00adb5;
    --terciary-color: #aad8d3;
  }
`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="pt-br">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>
      </head>
      <body>
        <StyledJsxRegistry>
          <GlobalStyles />
          {children}
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
