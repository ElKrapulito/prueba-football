import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayersPageRoutingModule } from './players-routing.module';

import { PlayersPage } from './players.page';
import { NgZorroAntdModule } from '../../shared/ng-zorro-antd/ng-zorro-antd.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayersPageRoutingModule,
    NgZorroAntdModule,
  ],
  declarations: [PlayersPage],
})
export class PlayersPageModule {}
