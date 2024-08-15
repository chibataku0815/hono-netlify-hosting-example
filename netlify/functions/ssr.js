import { Handler } from '@netlify/functions';
import { renderToString } from 'react-dom/server';
import App from '../../src/App';

const handler = async (event, context) => {
  const html = renderToString(<App />);
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>SSR with Netlify</title>
        </head>
        <body>
          <div id="app">${html}</div>
          <script type="module" src="/src/main.tsx"></script>
        </body>
      </html>
    `,
  };
};

export { handler };
