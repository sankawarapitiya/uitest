import { Component, OnInit } from '@angular/core';
import { letterLbl } from './section/data-model';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {


  pass : string = 'tres';
  
  breakpoint: number  = 3 ;

  sections : letterLbl[] = [
    {newLetter: 10, section:'EST', name:'ABC'},
    {newLetter: 20, section:'LAND', name:'BCD'},
    {newLetter: 12, section:'ACC', name:'EER'},
    {newLetter: 12, section:'SD', name:'EER'},
    {newLetter: 12, section:'SOC', name:'EER'},
    {newLetter: 12, section:'DEV', name:'EER'},
    {newLetter: 12, section:'ID', name:'EER'},
    
  ]

  
  constructor() { }

 
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
}
  
onResize(event : any) {
  this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
}

}
