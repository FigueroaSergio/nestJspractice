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
import { ConfigService } from '@nestjs/config';
import { ProductsService } from './products.service';
import { ProductsPipe } from './products.pipe';
import { CreateProductDto, UpdateProductDto } from './products.dtos';
@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly serviceConfig: ConfigService,
  ) {}
  @Get()
  find() {
    console.log(this.serviceConfig.get('API_KEY'));
    return this.productsService.find();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.updateOne(id, payload);
  }
  @Delete(':id')
  deleteOne(@Param('id', ProductsPipe) id: number) {
    return this.productsService.deleteOne(id);
  }
}
