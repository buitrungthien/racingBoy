import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any, filterString: string, field: string): any {
        let propertyName = '';
        switch (field.toLowerCase().trim()) {
            case 'position':
                propertyName = 'position';
                break;
            case 'nationality':
                propertyName = 'nationality';
                break;
            case 'fullname':
                propertyName = 'fullName';
                break;
            case 'team':
                propertyName = 'team';
                break;
            case 'points':
                propertyName = 'points';
                break;
        }
        let result = [];
        if (filterString === '') {
            return value;
        }
        result = value.filter((person) => {
            return person[propertyName].toLowerCase().includes(filterString.trim());
        });
        return result;
    }
}