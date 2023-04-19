import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { localData } from '../../data/localData'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover: string = "image";
  @Input()
  contentTitle: string = "Title";
  @Input()
  contentDescription: string = "Description";
  @Input()
  private id: string | null = "0";

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = (value.get("id"))
      )

      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null | number) {
    const resultFromLocalDB = localData.filter(article => article.id == id)[0]

    this.contentTitle = resultFromLocalDB.title;
    this.contentDescription = resultFromLocalDB.description;
    this.photoCover = resultFromLocalDB.photoCover;
  }

}
