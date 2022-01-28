import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaguesPageRoutingModule } from './leagues-routing.module';

import { LeaguesPage } from './leagues.page';
import { NgZorroAntdModule } from '../../shared/ng-zorro-antd/ng-zorro-antd.module';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaguesPageRoutingModule,
    NgZorroAntdModule,
  ],
  declarations: [LeaguesPage, DetailModalComponent],
})
export class LeaguesPageModule {}
