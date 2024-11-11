import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zdhcexport-certified',
  templateUrl: './zdhcexport-certified.component.html',
  styleUrls: ['./zdhcexport-certified.component.css']
})
export class ZdhcexportCertifiedComponent implements OnInit {
  zdhcProductId: string|null = '';

  constructor (private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.zdhcProductId = params.get('zdhcProductId');
    })
  }
}
