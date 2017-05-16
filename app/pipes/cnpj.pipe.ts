import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cnpj'
})
// 72006-226
export class CnpjPipe implements PipeTransform {
    transform(value: any): any {
        if (!value) return value;

        let cnpj = value.toString();

        if (cnpj.length === 14) {
            return `${cnpj.substr(0, 2)}.${cnpj.substr(2, 3)}.${cnpj.substr(5, 3)}/${cnpj.substr(8, 4)}.${cnpj.substr(12, 2)}`;
        }

        return cnpj;
    }
}