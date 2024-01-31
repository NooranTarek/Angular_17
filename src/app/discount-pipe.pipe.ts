import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPipe',
  standalone: true
})
export class DiscountPipePipe implements PipeTransform {

  transform(originalPrice: number | undefined, discountPercentage: number | undefined): string {
    if (originalPrice === undefined || discountPercentage === undefined) {
      return 'Invalid Price or Discount';
    }

    if (isNaN(originalPrice) || isNaN(discountPercentage)) {
      return 'Invalid Price or Discount';
    }

    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;

    return `After Discount: $${discountedPrice.toFixed(2)}`;
  }

}


