import { Component, OnInit } from '@angular/core';
import { Show } from '../show';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  constructor(private showService:ShowService) { }
  Shows:Show[] = [];

  ngOnInit(): void {
    this.showService.getShows().subscribe((response:Show[]) => {
      this.Shows = response;
      console.log(response);
    })
  }

}
