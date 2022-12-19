import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {

    public pageTitle:string = "Science";
  constructor() { }

  ngOnInit(): void {
  }

}
