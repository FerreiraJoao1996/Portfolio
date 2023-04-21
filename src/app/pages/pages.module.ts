import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ProjetosComponent } from './projetos/projetos.component';



@NgModule({
  declarations: [
    IndexComponent,
    ProjetosComponent
  ],
  exports: [
    IndexComponent,
    ProjetosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
