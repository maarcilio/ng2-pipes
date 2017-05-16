import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpf'
})
// 019.642.561-19
export class CpfPipe implements PipeTransform {
    transform(value: any): any {
        if (!value) return value;

        let cpf = value.toString();

        if (cpf.length === 11) {
            return `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.substr(9, 2)}`
        }

        return cpf;
    }
}