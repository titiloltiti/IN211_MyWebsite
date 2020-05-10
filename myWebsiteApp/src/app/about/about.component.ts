import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { IAboutLangSet, ILangSet } from '../constants';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  translation: IAboutLangSet = null;
  constructor(private lang: LangService) { }

  ngOnInit(): void {
    this.lang.translation$.subscribe((t: ILangSet) => {
      this.translation = t.about
    })
  }

}
