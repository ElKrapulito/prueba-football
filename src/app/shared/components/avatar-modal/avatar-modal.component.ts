import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-avatar-modal',
  templateUrl: './avatar-modal.component.html',
  styleUrls: ['./avatar-modal.component.scss'],
})
export class AvatarModalComponent implements OnInit {
  data = [];

  constructor(private modal: NzModalRef) {}

  ngOnInit() {
    for (let i = 0; i < 8; i++) {
      let code = Math.floor(Math.random() * 10000);
      this.data.push(this.createLink(code.toString()));
    }
  }

  avatarSelect(avatar: string) {
    this.modal.destroy({ data: avatar });
  }

  destroyModal(): void {
    this.modal.destroy();
  }

  createLink(code: string) {
    return `https://robohash.org/${code}?size=250x250&set=set1`;
  }
}
