import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <title>deno-serverer</title>
      </head>
      <body class="dark:text-white">
        <Component />
      </body>
      <style>
        {`
          :root {
            color-scheme: light dark;
          }
        `}
      </style>
    </html>
  );
}
