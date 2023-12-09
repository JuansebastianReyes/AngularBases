import { Character } from './../../interfaces/character.interface';
import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private bdzServices: DbzService){}

  get characters(): Character[]{
    return [ ...this.bdzServices.characters ];
  }

  onDeleteCharacter(id:string):void{
    this.bdzServices.deleteCharacterById(id);
  }

  onNewCharacter(character:Character): void{
    this.bdzServices.addCharacter(character);
  }
}
