import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterPage } from './pages/register/register.page';

const routes: Routes = [


  {
    path: '',
    loadChildren: () => import ('./pages/login/login.module').then(m => m.LoginPageModule)

  },

  {
    path: '',
    loadChildren: () => import ('./components/tabs/tabs.module').then(m => m.TabsPageModule)
  }
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }