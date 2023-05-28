import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currency: string = "USD";
  language: string = "English";
  languageArr: string[] = ["English", "French", "Spanish"];
  constructor() { }

  ngOnInit(): void {
  }
  changeCurrency(currency:string) {
    this.currency = currency;
  }
  changeLanguage(language:string) {
    this.language = language;
  }
}
