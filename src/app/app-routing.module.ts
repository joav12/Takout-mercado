import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'info-cad',
    loadChildren: () => import('./info-cad/info-cad.module').then( m => m.InfoCadPageModule)
  },  {
    path: 'dono-cad',
    loadChildren: () => import('./dono-cad/dono-cad.module').then( m => m.DonoCadPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'codigo',
    loadChildren: () => import('./codigo/codigo.module').then( m => m.CodigoPageModule)
  },
  {
    path: 'nova-senha',
    loadChildren: () => import('./nova-senha/nova-senha.module').then( m => m.NovaSenhaPageModule)
  },
  {
    path: 'assinatura',
    loadChildren: () => import('./assinatura/assinatura.module').then( m => m.AssinaturaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
