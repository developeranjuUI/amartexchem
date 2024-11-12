import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dyeing-auxillaries',
  templateUrl: './dyeing-auxillaries.component.html',
  styleUrls: ['./dyeing-auxillaries.component.css']
})
export class DyeingAuxillariesComponent implements OnInit {
  dyeingProductId: string|null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.dyeingProductId = params.get('dyeingProductId');
    })
  }

}
