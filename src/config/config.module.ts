import { Module, Global } from '@nestjs/common';
const API_KEY = '1234324';
@Global()
@Module({
  providers: [{ provide: 'API_KEY', useValue: API_KEY }],
  exports: ['API_KEY'],
})
export class ConfigModule {}
