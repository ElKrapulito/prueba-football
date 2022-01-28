import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsPage } from './teams.page';
import { TeamsResolver } from '../../helpers/resolvers/list-teams.resolver';
import { LeaguesResolver } from '../../helpers/resolvers/list-leagues.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      teams: TeamsResolver,
      leagues: LeaguesResolver,
    },
    component: TeamsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsPageRoutingModule {}
