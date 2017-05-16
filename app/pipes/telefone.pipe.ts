import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'telefone'
})
// (31)9609-8689 ou (31)99609-8689
export class TelefonePipe implements PipeTransform {
    transform(value: any): any {
        if (!value) return value;

        let telefone = value.toString();
        if (telefone.length === 9) {
            return `${telefone.substr(0, 5)}-${telefone.substr(5, 4)}`;
        } else if (telefone.length === 8) {
            return `${telefone.substr(0, 4)}-${telefone.substr(4, 4)}`;
        } else if (telefone.length === 10) {
            return `(${telefone.substr(0, 2)}) ${telefone.substr(2, 4)}-${telefone.substr(6, 4)}`;
        } else if (telefone.length === 11) {
            return `(${telefone.substr(0, 2)}) ${telefone.substr(2, 5)}-${telefone.substr(7, 4)}`;
        } else {
            return telefone;
        }
    }
}