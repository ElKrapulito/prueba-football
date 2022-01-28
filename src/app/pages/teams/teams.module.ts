import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsPageRoutingModule } from './teams-routing.module';

import { TeamsPage } from './teams.page';
import { NgZorroAntdModule } from '../../shared/ng-zorro-antd/ng-zorro-antd.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsPageRoutingModule,
    NgZorroAntdModule,
  ],
  declarations: [TeamsPage],
})
export class TeamsPageModule {}
