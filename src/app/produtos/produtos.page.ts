import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  constructor(private rota:Router) { }

  ngOnInit() {
  }

  voltarConta(){
    this.rota.navigateByUrl(`/tabs/conta`)
  }

  abrirPaginaAddProduto(){
    this.rota.navigateByUrl(`/add-produto`)
  }

}
