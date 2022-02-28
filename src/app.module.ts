import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//  la api key solo es validad  y utilizable en el modulo
import { ProductsModule } from './modules/products/products.module';
import { ConfigModule } from './config/config.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ProductsModule, ConfigModule],
})
export class AppModule {}
