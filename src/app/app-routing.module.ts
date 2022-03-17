import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GradimentoComponent } from './gradimento/gradimento.component';
import { MainComponent } from './main/main.component';
import { PagefourComponent } from './pagefour/pagefour.component';
import { PagethreeComponent } from './pagethree/pagethree.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'gradimento',
    component: GradimentoComponent
  },
  {
    path: 'pagethree',
    component: PagethreeComponent
  },
  {
    path: 'pagefour',
    component: PagefourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
