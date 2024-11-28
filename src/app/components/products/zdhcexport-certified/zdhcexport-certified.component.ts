import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zdhcexport-certified',
  templateUrl: './zdhcexport-certified.component.html',
  styleUrls: ['./zdhcexport-certified.component.css']
})
export class ZdhcexportCertifiedComponent implements OnInit {
  // zdhcProductId = 'export-certified';

  constructor (private route: ActivatedRoute){}
  
  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
      // this.zdhcProductId = params.get('zdhcProductId');
      // this.zdhcProductId = 'export-certified';
      // console.log('Route parameter zdhcProductId:', this.zdhcProductId);
    // })
  }
}
