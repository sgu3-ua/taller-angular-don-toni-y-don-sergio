import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Lista } from './lista/lista';
import { FormLista } from './form-lista/form-lista';
import { TareaComponent } from './tarea/tarea';
import { ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [App, Lista, FormLista, TareaComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), NgbModal],
  bootstrap: [App],
})
export class AppModule {}
