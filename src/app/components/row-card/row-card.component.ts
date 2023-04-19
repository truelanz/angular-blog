import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-card',
  templateUrl: './row-card.component.html',
  styleUrls: ['./row-card.component.css', './row-card.component.responsive.css']
})
export class RowCardComponent implements OnInit {

  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  Id: string = "0";
  
  constructor() { }

  ngOnInit(): void {
  }

}
