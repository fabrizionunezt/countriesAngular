import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paises } from 'src/app/shared/service/paises/models/paises';

@Component({
  selector: 'app-input-redirect-wiki',
  templateUrl: './input-redirect-wiki.component.html',
  styleUrls: ['./input-redirect-wiki.component.scss']
})
export class InputRedirectWikiComponent implements OnInit {

  @Input() paisElegido!: Paises;
  @Output() botonClickeado = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  openWikipedia(){
    this.botonClickeado.emit(true);
  }

}
