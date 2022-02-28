import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ProductsPipe implements PipeTransform {
  transform(value: any) {
    const val = parseInt(value, 10);

    if (isNaN(val)) throw new BadRequestException(`${value} is not a number`);
    return val;
  }
}
