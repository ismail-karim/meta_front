import { Component, OnInit, HostListener, EnvironmentInjector } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faCheckCircle, faBookOpen, faIndustry, faHome, faVirus, faChalkboard, faVials, faDatabase, faMicrochip, faUser, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
@HostListener("window:scroll", ['$event'])
export class HomepageComponent implements OnInit {
    /* ICONS */
    public iconCheckCircle = faCheckCircle;
    public iconBookOpen = faBookOpen;
    public iconIndustry = faIndustry;
    public iconHome = faHome;
    public iconChalkboard = faChalkboard;
    public iconDatabase = faDatabase;
    public iconMicrochip = faMicrochip;
    public iconMarketAlt = faMapMarkerAlt;
    public iconUser = faUser;
    public iconVials = faVials;
    public iconVirus = faVirus;
  constructor() { }

  customOptions: OwlOptions = {
    autoplay: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 40000,
    items: 1,
    dots: true,
    loop: false,
    nav : false,
    navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
  };

  carouselPartners: OwlOptions = {
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 40000,
    margin:10,
    items: 4,
    dots: false,
    loop: false,
    nav : false,
    responsive: {
      600: {items:4}
    }
  };
  ngOnInit(): void {
    console.log(environment.name);
  }

}
