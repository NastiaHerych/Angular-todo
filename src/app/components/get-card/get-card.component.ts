import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-card',
  templateUrl: './get-card.component.html',
  styleUrls: ['./get-card.component.scss'],
})
export class GetCardComponent implements OnInit {
  @Input() translation!: {
    getCard: {
      title: string;
      description: string;
      button: string;
      secondDescription: string;
    };
  };
  constructor() {}

  ngOnInit(): void {}
}
