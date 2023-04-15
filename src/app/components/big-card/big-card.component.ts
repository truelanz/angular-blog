import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.component.responsive.css']
})
export class BigCardComponent implements OnInit {

  //@Input import from @angular/core
   /* - Com @Input as variáveis criadas tornam-se propriedades da 'tag HTML' crianda em
   '@component/selector'...  */
  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
