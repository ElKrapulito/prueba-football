import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerFormPageRoutingModule } from './player-form-routing.module';

import { PlayerFormPage } from './player-form.page';
import { NgZorroAntdModule } from '../../../shared/ng-zorro-antd/ng-zorro-antd.module';
import { AvatarModalModule } from '../../../shared/components/avatar-modal/avatar-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerFormPageRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    AvatarModalModule,
  ],
  declarations: [PlayerFormPage],
})
export class PlayerFormPageModule {}
