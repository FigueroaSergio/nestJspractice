import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsPipe } from './products.pipe';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  find() {
    return this.productsService.find();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.productsService.updateOne(id, payload);
  }
  @Delete(':id')
  deleteOne(@Param('id', ProductsPipe) id: number) {
    return this.productsService.deleteOne(id);
  }
}
