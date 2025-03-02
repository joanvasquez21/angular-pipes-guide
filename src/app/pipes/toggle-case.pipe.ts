import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase' // 'example' | toggleCase
})

export class ToggleCasePipe implements PipeTransform {

    transform(value: string, upper: boolean = true): string {
            return upper ? value.toUpperCase() : value.toLowerCase();
    }
}