import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportPage } from './report.page';
import { FireComponent} from './fire/fire.component';
import { SmokeComponent } from './smoke/smoke.component';
import { CameraComponent } from './camera/camera.component';

const routes: Routes = [
  {
    path: '',
    component: ReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportPageRoutingModule {}
