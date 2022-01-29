import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerFormPage } from './player-form.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerFormPageRoutingModule {}
