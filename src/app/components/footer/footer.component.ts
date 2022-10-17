import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() translation!: {
    footer: {
      description: string;
      ulTitle: string;
      ulTitle2: string;
      ulTitle3: string;
      liItem11: string;
      liItem12: string;
      liItem13: string;
      liItem14: string;
      liItem15: string;
      liItem16: string;
      liItem21: string;
      liItem22: string;
      liItem23: string;
      liItem24: string;
      liItem25: string;
      liItem26: string;
      liItem31: string;
      liItem32: string;
      liItem33: string;
      liItem34: string;
      liItem35: string;
      liItem36: string;
      liItem37: string;
      liItem38: string;
      liItem39: string;
      liItem310: string;
      liItem311: string;
      address: string;
      descriptionSecond: string;
      link: string;
    };
  };
  constructor() {}

  ngOnInit(): void {}
}
