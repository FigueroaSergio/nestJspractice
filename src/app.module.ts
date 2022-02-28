import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//  la api key solo es validad  y utilizable en el modulo
import { ProductsModule } from './modules/products/products.module';
const API_KEY = '1234324';
@Module({
  controllers: [AppController],
  providers: [AppService, { provide: 'APY_KEY', useValue: API_KEY }],
  imports: [ProductsModule],
})
export class AppModule {}
