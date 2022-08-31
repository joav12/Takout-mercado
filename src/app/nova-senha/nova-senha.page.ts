import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.page.html',
  styleUrls: ['./nova-senha.page.scss'],
})
export class NovaSenhaPage implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {
  }

  abrirPaginaLogin(){
    this.rota.navigateByUrl(`/login`)
  }

}
