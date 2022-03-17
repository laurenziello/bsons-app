import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GradimentoComponent } from './gradimento/gradimento.component';

const routes: Routes = [
  {
      path: '',
      component: AppComponent
  },
  {
      path: 'gradimento',
      component: GradimentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
