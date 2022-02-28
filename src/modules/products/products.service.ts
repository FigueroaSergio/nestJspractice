import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.entity';
@Injectable()
export class ProductsService {
  private ids = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'prueba',
      img: 'image',
      price: 2000,
      stock: 12,
      category: 'nada',
    },
  ];
  find() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product)
      throw new NotFoundException(`El producto con id:${id} no existe`);
    return product;
  }

  create(payload: any) {
    this.ids += 1;
    const product = { id: this.ids, ...payload };
    this.products.push(product);
    return product;
  }

  updateOne(id: number, payload: any) {
    const index: number = this.products.findIndex(
      (product) => product.id === id,
    );
    if (index === -1)
      throw new NotFoundException(`El producto con id:${id} no existe`);
    const product = {
      id: id,
      ...this.products[index],
      ...payload,
    };
    this.products[index] = product;
    return product;
  }
  deleteOne(id) {
    this.findOne(id);

    this.products = this.products.filter((product) => product.id != id);
    return { success: true };
  }
}
