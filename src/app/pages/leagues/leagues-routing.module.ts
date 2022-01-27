import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaguesPage } from './leagues.page';
import { LeaguesResolver } from '../../helpers/resolvers/list-leagues.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      leagues: LeaguesResolver,
    },
    component: LeaguesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaguesPageRoutingModule {}
