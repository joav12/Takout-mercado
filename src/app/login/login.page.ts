import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {
  }

  abrirPaginaInfoCad(){
    this.rota.navigateByUrl(`/info-cad`)
  }

  abrirPaginaRecuperar(){
    this.rota.navigateByUrl(`/recuperar`)
  }

  abrirPaginaHome(){
    this.rota.navigateByUrl(`/tabs/home`)
  }

}

