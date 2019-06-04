import { Pipe, PipeTransform } from '@angular/core';
import { utf8Encode } from '@angular/compiler/src/util';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(value: any, property: any, fromLargertoSmaller: boolean): any {
        let result = value.sort((person1, person2) => {
            return fromLargertoSmaller ? person2[property] - person1[property] : person1[property] - person2[property];
        });
        return result;
    }

}
