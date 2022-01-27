import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
})
export class LeaguesPage implements OnInit {
  leagues: any[];

  initLoading = false; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];

  constructor(
    private req: RequestService,
    private route: ActivatedRoute,
    private msg: NzMessageService
  ) {}

  ngOnInit() {
    this.leagues = this.route.snapshot.data.leagues;
    console.log(this.leagues);
  }

  getData(callback: (res: any) => void): void {
    // this.http
    //   .get(fakeDataUrl)
    //   .pipe(catchError(() => of({ results: [] })))
    //   .subscribe((res: any) => callback(res));
  }

  onLoadMore(): void {
    // this.loadingMore = true;
    // this.list = this.data.concat(
    //   [...Array(count)].fill({}).map(() => ({ loading: true, name: {} }))
    // );
    // this.http
    //   .get(fakeDataUrl)
    //   .pipe(catchError(() => of({ results: [] })))
    //   .subscribe((res: any) => {
    //     this.data = this.data.concat(res.results);
    //     this.list = [...this.data];
    //     this.loadingMore = false;
    //   });
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }
}
