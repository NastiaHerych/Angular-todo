import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.scss'],
})
export class TariffsComponent implements OnInit {
  @Input() translation!: {
    tariffs: {
      title: string;
      th1: string;
      th2: string;
      th3: string;
      th4: string;
      thth1: string;
      td11: string;
      td12: string;
      td13: string;
      td14: string;
      thth2: string;
      td21: string;
      td22: string;
      td23: string;
      td24: string;
      thth3: string;
      td31: string;
      td32: string;
      td33: string;
      td34: string;
      description: string;
      details: string;
    };
  };

  constructor() {}

  ngOnInit(): void {}
}
