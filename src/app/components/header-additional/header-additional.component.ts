import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-additional',
  templateUrl: './header-additional.component.html',
  styleUrls: ['./header-additional.component.scss'],
})
export class HeaderAdditionalComponent implements OnInit {
  @Input() translation!: {
    headerAdditional: {
      cards: string;
      fop: string;
      deposits: string;
      obligations: string;
      buyPart: string;
      foreighTransactions: string;
    };
  };

  constructor() {}

  ngOnInit(): void {}
}
