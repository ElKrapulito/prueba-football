import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
})
export class LeaguesPage implements OnInit {
  leagues: any[];
  teams: any[];
  filteredLeagueTeams: any[];
  selectedLeagueName: string;
  isVisible = false;

  initLoading = false; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];

  constructor(
    private req: RequestService,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.leagues = this.route.snapshot.data.leagues;
    this.teams = this.route.snapshot.data.teams;
  }

  details(league: any): void {
    this.filteredLeagueTeams = this.teams.filter(
      (item) => item['Liga'] == league['Identificador']
    );
    this.selectedLeagueName = `League ${league['Nombre De La Liga']}`;
    this.createComponentModal();
    // console.log(league);

    // console.log(this.filteredLeagueTeams);
    // this.isVisible = true;
  }

  createComponentModal(): void {
    this.modal.create({
      nzTitle: this.selectedLeagueName,
      nzContent: DetailModalComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        teams: this.filteredLeagueTeams,
      },
      nzFooter: [],
    });
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
