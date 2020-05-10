import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { IPortfolioLangSet, ILangSet } from '../constants';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  translation: IPortfolioLangSet = null;
  constructor(private lang: LangService) { }

  ngOnInit(): void {
    this.lang.translation$.subscribe((t: ILangSet) => {
      this.translation = t.portfolio
    })
  }

}
