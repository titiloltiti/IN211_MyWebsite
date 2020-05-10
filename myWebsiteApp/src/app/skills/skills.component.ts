import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { ISkillsLangSet, ILangSet } from '../constants';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  translation: ISkillsLangSet = null;
  constructor(private lang: LangService) { }

  ngOnInit(): void {
    this.lang.translation$.subscribe((t: ILangSet) => {
      this.translation = t.skills
    })
  }

}
