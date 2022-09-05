import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {
  }

  voltarLogin(){
    this.rota.navigateByUrl(`/login`)
  }

  abrirPaginaCodigo(){
    this.rota.navigateByUrl(`/codigo`)
  }

}
