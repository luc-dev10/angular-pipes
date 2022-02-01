import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: unknown, units: string): unknown {
    console.log(value);
    if (units == null || units == '') return 'no no no no';

    return `We have converted this ${value}`;
  }
}
