import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  // date
  toDate=new Date();
  //upper and lower case
  message='WeLcOme To Angular'
  //currency
  price=200;
  //number
  num=23543.54457;
  n=-2.5;
  //percentage
  per=2/4;
  //title
  title="jemima kathar"
  //object pipe
  obj={name:'jemima',age:21}
  arr=[1,2,3,4]
  //custom pipe
  value="jemima"
}
