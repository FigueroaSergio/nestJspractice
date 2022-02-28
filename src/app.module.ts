import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { enviroments } from './enviroments';

//  la api key solo es validad  y utilizable en el modulo
import { ProductsModule } from './modules/products/products.module';
import { MyConfigModule } from './config/config.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
    }),
    ProductsModule,
    MyConfigModule,
  ],
})
export class AppModule {}
