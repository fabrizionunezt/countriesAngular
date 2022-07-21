import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComidaPaises } from 'src/app/shared/service/paises/models/comidaPaises';
import { Paises } from 'src/app/shared/service/paises/models/paises';
import { PaisesService } from 'src/app/shared/service/paises/paises.service';
import { SharedService } from 'src/app/shared/service/shared/shared.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {

  paisElegido!: Paises;
  paisComida!: ComidaPaises;
  subscripcionPaisSeleccionado!: Subscription;
  mostrarMensaje: boolean = false;
  constructor(private sharedService: SharedService, private paisesService: PaisesService) {
    this.paisElegido = this.sharedService.paisElegido;
    this.obtenerComidaPais(this.paisElegido.name);
    this.subscripcionPaisSeleccionado = this.sharedService.paisSeleccionado.subscribe(x =>{
      this.paisElegido = x;
      this.obtenerComidaPais(x.name)
    })
  }
  ngOnDestroy(): void {
    this.subscripcionPaisSeleccionado.unsubscribe();
  }

  ngOnInit(): void {
  }

  mostrarMensajeWikipedia(botonClickeado: boolean){
    this.mostrarMensaje = botonClickeado;
    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 4000);
  }

  obtenerComidaPais(nombrePais: string){
    this.paisesService.obtenerComidaPaises(nombrePais).subscribe(x => {
      if(x){
        this.paisComida = x;
      }
    })
  }

}
