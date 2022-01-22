import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqr'
})
export class SqrPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value*value;
  }

}
