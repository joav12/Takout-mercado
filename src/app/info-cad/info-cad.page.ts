import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-cad',
  templateUrl: './info-cad.page.html',
  styleUrls: ['./info-cad.page.scss'],
})
export class InfoCadPage implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {
  }

  abrirPaginaLogin(){
    this.rota.navigateByUrl(`/login`)
  }

}
