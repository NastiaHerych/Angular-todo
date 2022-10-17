import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-common',
  templateUrl: './header-common.component.html',
  styleUrls: ['./header-common.component.scss'],
})
export class HeaderCommonComponent implements OnInit {
  @Input() translation!: {
    headerCommon: {
      dashboard: string;
      api: string;
      contacts: string;
      option1: string;
      option2: string;
    };
  };

  constructor() {}

  ngOnInit(): void {}
}
