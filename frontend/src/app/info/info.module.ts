import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoPage } from './info.page';
import { RouterModule, Routes } from '@angular/router';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TelefonosComponent } from '../telefonos/telefonos.component';

import { TutorialComponent } from '../tutorial/tutorial.component';
import { GuiaIncendiosComponent } from '../guia-incendios/guia-incendios.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';


const routes: Routes = [
  {
    path: '',
    component: InfoPage,
  },
  {
    path: 'telefonos',
    component: TelefonosComponent,
  },
  {
    path: 'tutorial',
    component: TutorialComponent,
  },
  {
    path: 'guia-incendios',
    component: GuiaIncendiosComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  }
];


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    InfoPage,
    TelefonosComponent,
    TutorialComponent,
    GuiaIncendiosComponent,
    NosotrosComponent
  ]
})
export class InfoPageModule {}
