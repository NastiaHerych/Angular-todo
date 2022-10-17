import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.scss'],
})
export class AccountantComponent implements OnInit {
  @Input() translation!: {
    accountant: {
      title: string;
      firstDescription: string;
      secondDescription: string;
      button: string;
      advantagesTitle: string;
      item0: string;
      item1: string;
      itemDesc1: string;
      item2: string;
      itemDesc2: string;
      item3: string;
      item4: string;
      item5: string;
    };
  };
  constructor() {}

  ngOnInit(): void {}
}
