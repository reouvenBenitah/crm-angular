import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;
  headerDescription:string;
  constructor() { }

  ngOnInit() {

    this.headerTitle = 'page not found';
    this.headerIcon = 'fas fa-exclamation-circle';
    this.headerDescription = 'The page tou are looking is not found. Error 404';
  }

}
