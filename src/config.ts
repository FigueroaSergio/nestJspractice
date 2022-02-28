import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DBURL,
      port: process.env.DBPORT,
    },
    apiKey: process.env.API_KEY,
  };
});
