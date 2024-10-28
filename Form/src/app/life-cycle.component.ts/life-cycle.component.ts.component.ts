import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle.component.ts',
  templateUrl: './life-cycle.component.ts.component.html',
  styleUrls: ['./life-cycle.component.ts.component.css']
})
export class LifeCycleComponentTsComponent implements OnInit {
  constructor()
  {
      console.log("Constructor!!!");
  }
  ngOnInit():void
  {
    console.log("NgOnInit!!!");
  }
  ngOnChanges():void{
    console.log("NgOnChanges!!!");
    
  }









}
