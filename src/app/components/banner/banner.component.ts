import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() translation!: {
    banner: {
      title: string;
      description: string;
      button: string;
    };
  };

  constructor() {}

  ngOnInit(): void {}
}
