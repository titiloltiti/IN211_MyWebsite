import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { IStudiesLangSet, ILangSet } from '../constants';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  translation: IStudiesLangSet = null;
  constructor(private lang: LangService) { }

  ngOnInit(): void {
    this.lang.translation$.subscribe((t: ILangSet) => {
      this.translation = t.studies
    })
  }

}
