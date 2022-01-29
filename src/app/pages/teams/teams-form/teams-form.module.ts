import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsFormPageRoutingModule } from './teams-form-routing.module';

import { TeamsFormPage } from './teams-form.page';
import { NgZorroAntdModule } from '../../../shared/ng-zorro-antd/ng-zorro-antd.module';
import { AvatarModalComponent } from './components/avatar-modal/avatar-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TeamsFormPageRoutingModule,
    NgZorroAntdModule,
  ],
  declarations: [TeamsFormPage, AvatarModalComponent],
})
export class TeamsFormPageModule {}
