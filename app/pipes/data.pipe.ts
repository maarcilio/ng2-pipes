import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
/*
 * Format date pt-Br
 * How to use:
 *  - DataPipe:
 *      value | data
 *      Example:
 *          {{ Wed Sep 08 1993 00:00:00 GMT-0300 (Hora oficial do Brasil)  | data }}
 *          result: 08/08/1993
 *  - DataPipe:
 *      value | data: 'mascara'
 *      Example:
 *          {{ Wed Sep 08 1993 00:00:00 GMT-0300 (Hora oficial do Brasil)  | data:'dd/MM' }}
 *          result: 08/08
*/

@Pipe({ name: 'data' })
export class DataPipe implements PipeTransform {
    transform(value: number, mascara?: string): string {
        if (!value) return null;

        return new DatePipe('pt-Br').transform(value, mascara ? mascara : 'dd/MM/yyyy');
    }
}