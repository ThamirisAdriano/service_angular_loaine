import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursoModule } from './cursos/cursos.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    CursoModule


  ],
  providers:[LogService],
  //providers: [CursosService], // como está dentro do appmodule, está disponível para toda aplicação
  bootstrap: [AppComponent]
})
export class AppModule { }
