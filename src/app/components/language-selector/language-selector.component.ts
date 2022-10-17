import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  @Input() language!: 'UA' | 'EN';

  @Output() languageChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  languageChange(event: any) {
    const language = event.srcElement.value;
    this.languageChanged.emit(language);
  }
}
