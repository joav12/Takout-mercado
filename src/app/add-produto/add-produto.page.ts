import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.page.html',
  styleUrls: ['./add-produto.page.scss'],
})
export class AddProdutoPage implements OnInit {

 
  private currentNumber = 0;

  constructor(private rota: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  private mais() {
    this.currentNumber++;
  }
  
  private menos() {
    this.currentNumber--;
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

