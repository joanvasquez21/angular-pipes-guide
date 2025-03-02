import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { heroes } from '../../data/herores.data';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/heroColor.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPageComponent { 

  name = signal('joan');

  upperCase = signal(true);

  toggleUpperCase() {
    this.upperCase.set(!this.upperCase());
  }

  heroes = signal(heroes);



}
