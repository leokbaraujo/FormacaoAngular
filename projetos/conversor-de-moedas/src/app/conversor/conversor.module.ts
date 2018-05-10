import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    ConversorComponent
  ],
  exports:[
    ConversorComponent
  ],
  providers:[
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
