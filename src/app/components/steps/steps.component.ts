import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit {
  @Input() translation!: {
    steps: {
      step1: string;
      step2: string;
      step3: string;
    };
  };

  constructor() {}

  ngOnInit(): void {}
}
