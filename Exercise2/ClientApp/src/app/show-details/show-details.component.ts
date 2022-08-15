import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from '../show';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private showService:ShowService) { }
  singleShow:Show = {} as Show;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    console.log(id);
    this.showService.getShowById(id).subscribe((response:Show) => {
      this.singleShow = response;
    })
  }

}
