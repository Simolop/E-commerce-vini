import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/model/products';



@Pipe({
  name: 'wineFilter'
})

export class WineFilterPipe implements PipeTransform {
  transform(products: IProduct[], inputFilter: string): IProduct[] {
    console.log("winepipe =", inputFilter);
    if (!inputFilter||inputFilter.length <= 3) //true: se null, stringa vuota o 0, o undefined
    { 
      return products;
    }

    const inputFilteredLowerCase = inputFilter.toLocaleLowerCase();

    return products.filter((product: IProduct, index: number, array: IProduct[]) => {
      return product.name.toLocaleLowerCase().includes(inputFilteredLowerCase);
    });

  }

}