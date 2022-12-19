import { Component, OnInit } from '@angular/core';
import {faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

    public iconPhone = faPhone;
    public iconEnvelope = faEnvelope;
    public iconLocationDot = faLocationDot;
    public pageTitle: string = "Contact"
  constructor() { }

  ngOnInit(): void {
  }

}
