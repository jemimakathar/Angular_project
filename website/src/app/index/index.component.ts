import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  FirstName="jemima";
  LastName="Kathar";
  name="Ashik";
  getMax(first:number,second:number)
  {
    return Math.max(first,second);
  }
  color="blue";
  title="jemi";
  isdisabled=TransformStreamDefaultController;


  clickcount=0;
  clickcount1=1;
  clickMe()
  {
    this.clickcount++;
  }


  value='';
  value1='';
  handleInput(event:any)
  {
    this.value=(event.target as HTMLInputElement).value
  }
}
