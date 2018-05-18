import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { TarefaRoutingComponent } from './tarefa-routing.component';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        component: TarefaRoutingComponent,
        children: [
            {
                path: '',
                component: ListarTarefaComponent
            },
            {
                path: 'cadastrar',
                component: CadastrarTarefaComponent
            },
            {
                path: 'editar/:id',
                component: EditarTarefaComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(TarefaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TarefaRoutingModule {}