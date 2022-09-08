import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.page.html',
  styleUrls: ['./add-produto.page.scss'],
})
export class AddProdutoPage implements OnInit {

  constructor(private rota: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  voltarProdutos(){
    this.rota.navigateByUrl(`/produtos`)
  }

  async toastCad() {
    const toast = await this.toastController.create({
      message: 'Produto cadastrado com sucesso',
      duration: 1500,
      color: 'success',
      position: 'bottom'
    });

    await toast.present();
  }
}

