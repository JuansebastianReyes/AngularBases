import { ListComponent } from './components/list/list.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  imports:[
    CommonModule
  ],
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule{}
