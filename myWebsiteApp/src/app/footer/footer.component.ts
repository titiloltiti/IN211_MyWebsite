import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { IFooterLangSet, ILangSet } from '../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  translation: IFooterLangSet = null;
  constructor(private lang: LangService) { }

  ngOnInit(): void {
    this.lang.translation$.subscribe((t: ILangSet) => {
      this.translation = t.footer
    })
  }
}
