import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: `jumbotron.component.html`,
})
export class JumboTronComponent  {

  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl:string;
  
  constructor() {
    this.jbtHeading = "Hello World";
    this.jbtText = "This is simple hero unit";
    this.jbtBtnText = "Read More";
    this.jbtBtnUrl = "/about";

  }

}