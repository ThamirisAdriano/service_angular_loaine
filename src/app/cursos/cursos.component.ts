import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

type NewType = void;

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos?: string[] = [];
  //cursosService: CursosService;

  //no construtor passamos o service como parâmetro
  constructor( private cursosService: CursosService) { // primeiro método a ser executado pois constrói a classe cria a instancia
    //this.cursosService = new CursosService();
    //this.cursosService = new _cursosService;

  }

  ngOnInit(): NewType {
    this.cursos = this.cursosService?.getCursos();

    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos?.push(curso)
    );

  }

}
