import { registerAs } from '@nestjs/config';

const config = registerAs('config', () => {
  return {
    database: {
      name: process.env.URL_DB,
      port: process.env.PORT_DB,
    },
    apiKey: process.env.API_KEY,
  };
});

export { config };
