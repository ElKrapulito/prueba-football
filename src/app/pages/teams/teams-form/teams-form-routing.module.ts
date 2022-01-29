import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsFormPage } from './teams-form.page';
import { ListLeaguesResolver } from '../../../helpers/resolvers/list-leagues.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      leagues: ListLeaguesResolver,
    },
    component: TeamsFormPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsFormPageRoutingModule {}
