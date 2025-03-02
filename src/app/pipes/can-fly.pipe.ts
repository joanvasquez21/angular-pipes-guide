import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
    transform(value: boolean): 'puede volar' | 'no puede volar' {
        return value ? 'puede volar' : 'no puede volar';
    }
}