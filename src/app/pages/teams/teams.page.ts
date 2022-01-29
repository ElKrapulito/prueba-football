import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject, takeUntil } from 'rxjs';
import { RequestService } from '../../services/request.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teams: any[];
  leagues: any[];

  @ViewChild('virtualTable', { static: false })
  nzTableComponent?: NzTableComponent<any>;
  private destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private req: RequestService,
    private modal: NzModalService
  ) {}

  ngOnInit() {
    this.teams = this.route.snapshot.data.teams;
    this.leagues = this.route.snapshot.data.leagues;

    this.teams = this.teams.map((team, i) => {
      let leagueName = this.leagues.filter(
        (league) => league['Identificador'] == team['Liga']
      )[0]['Nombre De La Liga'];
      return (team = { ...team, index: i, Liga: leagueName });
    });
  }

  scrollToIndex(index: number): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  trackByIndex(_: number, team: any): number {
    return team.index;
  }

  showDeleteConfirm(team: any): void {
    this.modal.confirm({
      nzTitle: `Are you sure that you want to delete this team?`,
      nzContent: `<b style="color: red;"><p>Team: ${team['Nombre del equipo']}</p><p>League: ${team['Liga']}</p></b>`,
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.req.delete('teams', team['id']).subscribe();
        this.teams = this.teams.filter((item) => item['id'] != team['id']);
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

  ngAfterViewInit(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: number) => {
        console.log('scroll index to', data);
      });
  }

  ngOnDestroy(): void {
    // this.destroy$.next();
    this.destroy$.complete();
  }
}
