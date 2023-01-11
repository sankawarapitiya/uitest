import { Component, Input, OnInit } from '@angular/core';
import { letterLbl } from './data-model';

@Component({
  selector: 'letter-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  // @Input('data')
  // data: letterLbl = { name: '', newLetter: 0, section: '' };

  @Input() data : any | undefined;

 
  
  constructor() {
    console.log(this.data);
    
  }

  ngOnInit(): void {
  }

}
