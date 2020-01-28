

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanName'//name of pipe
})
export class CleanNamePipe implements PipeTransform {

  transform(value: string): string {
    return value.trim().replace(/[^a-zA-Z\s]/g,'');
  }

}
