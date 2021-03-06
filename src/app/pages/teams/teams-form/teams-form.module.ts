import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsFormPageRoutingModule } from './teams-form-routing.module';

import { TeamsFormPage } from './teams-form.page';
import { NgZorroAntdModule } from '../../../shared/ng-zorro-antd/ng-zorro-antd.module';
import { AvatarModalModule } from 'src/app/shared/components/avatar-modal/avatar-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TeamsFormPageRoutingModule,
    NgZorroAntdModule,
    AvatarModalModule,
  ],
  declarations: [TeamsFormPage],
})
export class TeamsFormPageModule {}
