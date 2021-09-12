import { Pipe, PipeTransform } from '@angular/core';
import { Buffer } from "Buffer";

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: Buffer[] | string, ...args: unknown[]): string {
    if (typeof value === 'string'){
      return value;
    }

    return `data:image/jpg;base64,${Buffer.from(value).toString('base64')}`;
  }

}
