import { I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";


const client1 = {
  name: 'joan',
  gender: 'male',
  age: 23,
  address: 'Ottawa, Canada'
}

const client2 = {
  name: 'ana',
  gender: 'female',
  age: 25,
  address: 'Toronto, Canada'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe],
  templateUrl: './uncommon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPageComponent {

  //i18nselect
    client = signal(client1);

    //el pipe i18n funciona con un map
    invitationMap = {
      male: 'invitarlo',
      female: 'invitarla'
    }

    changeClient(){
      if(this.client() == client1){
        this.client.set(client2)
        return;
      }
      this.client.set(client1);
    }

    //i18n plural funciona cuando tenemos muchos datos es decir colecciones o diferentes numeros de elementos
    clientsMap = signal({
      '=0' : 'no tenemos ningun cliente esperando',
      '=1' : 'tenemos un cliente esperando',
      '=2' : 'tenemos dos clientes esperando',
      other :'tenemos # clientes esperando'
    })
    
    clients = signal([
      'ana',
      'maria',
      'andrea',
      'juan',
      'carlos',
      'pedro'
    ]);

    deleteClient(){
      this.clients.update ( prev => prev.slice(1));
    }

    //keyvaluepipe
    profile = {
      name: 'joan v',
      age: 25,
      address: 'barcelona, españa'
    }
    


}
