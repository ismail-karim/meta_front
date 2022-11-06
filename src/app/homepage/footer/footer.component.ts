import { Component, OnInit } from '@angular/core';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    /* ICONS */
    public iconYoutube = faYoutube;
    public iconFacebook = faFacebook;
    public iconTwitter = faTwitter;
    public iconLinkedin = faLinkedin;
    public iconMapMarker = faMapMarker;
    public iconPhone = faPhone;
    public iconEnvelope = faEnvelope;
    public urlCGV: string = "CGV";
  constructor() { }

  ngOnInit(): void {
  }

}
