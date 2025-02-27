import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocal, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent { 

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));
  

  nameLower = signal('joan')
  nameUpper = signal('JOAN')
  fullName = signal('JoAn')


  customDate = signal(new Date())
  /*para actualizar las fechas cada segundo*/
  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval( ()=> {
        this.customDate.set(new Date())
    }, 1000);
    onCleanup( () => {
      clearInterval(interval )
    })
  })

  changeLocale(locale: AvailableLocal){
    this.localeService.changeLocal(locale);
  }


}
