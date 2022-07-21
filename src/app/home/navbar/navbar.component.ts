import { Component, OnInit } from '@angular/core';
import { Paises } from 'src/app/shared/service/paises/models/paises';
import { PaisesService } from 'src/app/shared/service/paises/paises.service';
import { SharedService } from 'src/app/shared/service/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  listaPaises: Paises[] = [];
  constructor(private paisesService: PaisesService, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.obtenerPaises();
  }

  obtenerPaises() {
    this.paisesService.obtenerPaises().subscribe(
      (data) => {
        if (data) {
          this.listaPaises = data;
        }
      },
      (err) => {
        console.log(err);
      }
    );
    //usar async en metodo
    //let resultado = await this.paisesService.obtenerPaises().toPromise();
    //let suma = 4 + resultado.length;
    //suma = 104
  }

  seleccionarPais(pais: any){
    let paisSeleccionado = this.listaPaises.find(x => x.name.toLowerCase() == pais.target.value.toLowerCase());
    if(paisSeleccionado){
      this.sharedService.actualizarPaisSeleccionado(paisSeleccionado);
    }
  }
}
