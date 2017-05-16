import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cep'
})
// 72006-226
export class CepPipe implements PipeTransform {
    transform(value: any): any {
        if (!value) return value;

        let cep = value.toString();

        if (cep.length === 8) {
            return `${cep.substr(0, 5)}-${cep.substr(5, 3)}`;
        }

        return cep;
    }
}