import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportPage } from './report.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ReportPageRoutingModule } from './report-routing.module';
import { CameraComponent } from './camera/camera.component';
import { FireComponent } from './fire/fire.component';
import { SmokeComponent } from './smoke/smoke.component';
import { ReportfireComponent } from './reportfire/reportfire.component';
import { CommentsComponent } from './comments/comments.component';

import { WebcamModule } from 'ngx-webcam';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ReportPageRoutingModule,
    WebcamModule
  ],
  declarations: [ReportPage, CameraComponent, ReportfireComponent, FireComponent, SmokeComponent, CommentsComponent]
})
export class ReportPageModule {

}
