import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dono-cad',
  templateUrl: './dono-cad.page.html',
  styleUrls: ['./dono-cad.page.scss'],
})
export class DonoCadPage implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {
  }

  voltarInfoCad(){
    this.rota.navigateByUrl(`/info-cad`)
  }

  abrirPaginaAssinatura(){
    this.rota.navigateByUrl(`/assinatura`)
  }

}
