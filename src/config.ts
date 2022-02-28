import { registerAs } from '@nestjs/config';

const config = registerAs('config', () => {
  return {
    database: {
      name: process.env.DBURL,
      port: process.env.DBPORT,
    },
    apiKey: process.env.API_KEY,
  };
});

export { config };
