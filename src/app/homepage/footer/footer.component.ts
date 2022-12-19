import { Component, OnInit } from '@angular/core';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
    public iconLocationDot = faLocationDot;
    public iconPhone = faPhone;
    public iconEnvelope = faEnvelope;
    public urlCGV: string = "CGV";

    public linkTwitter: string = "https://twitter.com/RTahzima?s=20&t=5_R9c559RSYOiv8YlvAvFA";
    public linkUniversity: string = "https://www.gembloux.uliege.be/cms/c_4039827/en/gembloux-agro-bio-tech";
  constructor() { }

  ngOnInit(): void {
  }

}
