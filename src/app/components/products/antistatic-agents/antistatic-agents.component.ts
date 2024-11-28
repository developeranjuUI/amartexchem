import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-antistatic-agents',
  templateUrl: './antistatic-agents.component.html',
  styleUrls: ['./antistatic-agents.component.css']
})
export class AntistaticAgentsComponent implements OnInit {
  // antisticProductId: string|null = '';

  constructor (private route: ActivatedRoute){}

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.antisticProductId = params.get('antisticProductId');
    // })
  }

}
