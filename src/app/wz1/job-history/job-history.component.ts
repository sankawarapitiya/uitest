import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HistoryDetails } from '../land.data.model';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.css']
})
export class JobHistoryComponent implements OnInit {

  @Input('data') data : HistoryDetails | undefined;

  constructor() { 
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.data)
  }

}
