import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelefonosComponent } from './telefonos.component';

const routes: Routes = [
  {
    path: '',
    component: TelefonosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelefonosComponentRoutingModule {}