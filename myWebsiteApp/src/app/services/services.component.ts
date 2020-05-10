import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { IServicesLangSet, ILangSet } from '../constants';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  translation: IServicesLangSet = null;
  constructor(private lang: LangService) { }

  ngOnInit(): void {
    this.lang.translation$.subscribe((t: ILangSet) => {
      this.translation = t.services
    })
  }
}
