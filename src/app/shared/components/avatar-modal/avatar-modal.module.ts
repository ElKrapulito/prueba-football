import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModalComponent } from './avatar-modal.component';
import { NgZorroAntdModule } from '../../ng-zorro-antd/ng-zorro-antd.module';

@NgModule({
  declarations: [AvatarModalComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [AvatarModalComponent],
})
export class AvatarModalModule {}
