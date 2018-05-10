import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { MoedaService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConversorComponent
  ],
  exports:[
    ConversorComponent
  ],
  providers:[
    MoedaService
  ]
})
export class ConversorModule { }
