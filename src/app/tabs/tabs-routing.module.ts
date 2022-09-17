import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'conta',
        loadChildren: () => import('../tabs/conta/conta.module').then( m => m.ContaPageModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('../tabs/pedidos/pedidos.module').then( m => m.PedidosPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
