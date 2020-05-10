import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { IContactLangSet, ILangSet } from '../constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  translation: IContactLangSet = null;
  constructor(private lang: LangService) { }

  ngOnInit(): void {
    this.lang.translation$.subscribe((t: ILangSet) => {
      this.translation = t.contact
    })
  }

  processForm(form) {
    if (form.invalid) {
      alert("The form is incorrect")
      return;
    }
  }
}
