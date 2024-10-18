import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  countryList:Country[]=[
    new Country(1,"India"),
    new Country(2,"USA"),
    new Country(3,"Europe"),
  ]

}
class Country
{
  id:number;
  name:string;

  constructor(id:number,name:string)
  {
    this.id=id
    this.name=name
  }
}