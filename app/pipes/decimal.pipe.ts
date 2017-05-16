import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
    name: 'decimal'
})
//  number : '1.2-2'
export class DecimalBrPipe implements PipeTransform {
    transform(value: any): any {
        if (!value) return value;

        return new DecimalPipe('pt-BR').transform(value, '1.2-2');
    }
}