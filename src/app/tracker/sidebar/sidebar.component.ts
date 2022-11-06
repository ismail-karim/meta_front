import { Component, OnInit } from '@angular/core';
import { faBars, faSearch, faPencil, faUser, faArchive, faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    /* ICONS */
    public iconBars = faBars;
    public iconSearch = faSearch;
    public iconPencil = faPencil;
    public iconUser = faUser;
    public iconArchive = faArchive;
    public iconEnvelope = faEnvelope;
    /* END ICONS */


    
    public showMenuBtn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public showMenu()
  {
    this.showMenuBtn = !this.showMenuBtn;
  }

}
