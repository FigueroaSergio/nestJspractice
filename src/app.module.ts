import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'Joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { enviroments } from './enviroments';
//  la api key solo es validad  y utilizable en el modulo
import { ProductsModule } from './modules/products/products.module';
import { MyConfigModule } from './config/config.module';
import { config } from './config';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        PORT_DB: Joi.number().required(),
        URL_DB: Joi.string().required(),
      }),
    }),
    ProductsModule,
    MyConfigModule,
  ],
})
export class AppModule {}
