import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { TarefaRoutingComponent } from './tarefa-routing.component';
import { TarefaRoutingModule } from './tarefa-routing.module';

@NgModule({
  imports: [
  CommonModule,
    RouterModule,
    FormsModule,
    TarefaRoutingModule
  ],
  declarations: [
    ListarTarefaComponent, 
    CadastrarTarefaComponent, 
    EditarTarefaComponent, 
    TarefaConcluidaDirective,
    TarefaRoutingComponent
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
