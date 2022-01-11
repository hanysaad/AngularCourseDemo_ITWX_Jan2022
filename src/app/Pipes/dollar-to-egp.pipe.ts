import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarToEGP'
})
export class DollarToEGPPipe implements PipeTransform {

  transform(value:number, rate:number=15): number {
    return value*rate;
  }

}
