import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from "../shared/log.service";

@Injectable() // decorator que indica que essa é uma classe injetável

export class CursosService { //classe

  emitirCursoCriado = new EventEmitter<string>(); //atributo = objeto que emite eventos para que a aplicação escute
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'HTML e CSS', 'JS'] //variável local

  constructor(private logService: LogService){
    console.log('CursoService'); //usamos para verificar quantas vezes essa classe está sendo instanciada
  }

  getCursos(){  // método
    this.logService.consoleLog('Obtendo lista de cursos.')
    return this.cursos;
  }

  addCurso(curso: string){
    this.logService.consoleLog('Criando um novo curso' + curso);
    this.cursos.push(curso); //método push - adição
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso)
  }
}
