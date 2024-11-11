import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-domestic-oriented',
  templateUrl: './domestic-oriented.component.html',
  styleUrls: ['./domestic-oriented.component.css']
})
export class DomesticOrientedComponent implements OnInit {
  domesticProductId: string|null = '';
  
  constructor (private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.domesticProductId = params.get('domesticProductId');
    })
  }
}
