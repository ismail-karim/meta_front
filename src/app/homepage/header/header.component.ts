import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public faEnveloppe = faEnvelope;
    public navChange: boolean = false;
  constructor(
    private elem: ElementRef
  ) { }

  ngOnInit(): void {
  }

  @HostListener("document:scroll")
  onScroll(){
    let nav = this.elem.nativeElement.querySelector('.nav-bar');
    if(document.documentElement.scrollTop > 90)
    {
      this.navChange = true;
    }
    else{
      this.navChange = false;
    }
  }

}
