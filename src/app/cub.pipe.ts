import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cub'
})
export class CubPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value * value * value;
  }

}
