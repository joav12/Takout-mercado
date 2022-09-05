import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assinatura',
  templateUrl: './assinatura.page.html',
  styleUrls: ['./assinatura.page.scss'],
})
export class AssinaturaPage implements OnInit {

  constructor(private rota: Router) { }


  ngOnInit() {
  }

  abrirPaginaHome(){
    this.rota.navigateByUrl('/tabs/home')
  }

}
