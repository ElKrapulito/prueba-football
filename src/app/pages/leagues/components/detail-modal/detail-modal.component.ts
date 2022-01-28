import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {
  @Input() teams?: any[];

  constructor(private modal: NzModalRef) {}
  ngOnInit() {
    console.log('Detail moda', this.teams);
  }

  destroyModal(): void {
    this.modal.destroy({ data: 'this the result data' });
  }
}
