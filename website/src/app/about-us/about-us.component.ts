import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  title='List of Movies';
  movies=[
    "batman",
    "the last DAY",
    "batman",
    "final destination"
    ]



    flim=[
      {title:"jemi" ,decorator:"she is a good girl"},
      {title:"jemima",decorator:"she is a beautiful girl"}
    ]


    heading="High light score";
    score=[
      {batsman:"jemima",score:"203",review:"good batsman"},
      {batsman:"kaviya",score:"132",review:"good bowler"},
      {batsman:"nithya",score:"197",review:"good keeper"},
      {batsman:"jemi",score:"120",review:"good fielder"}
    ]


    number='0';




    showme=true;


    value=false;

    express=false;


    enableRed=false;
    enableBig=false;
    enableStyle=false;

    status ="availabl";
    color='pink';
    background='black';
    

   
    

}
