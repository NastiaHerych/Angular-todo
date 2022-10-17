import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  a: number = 0.259;
  b: number = 1.3495;
  pi: number = 3.14159265359;
  date = Date.now();
  constructor() {}

  ngOnInit(): void {}
}
