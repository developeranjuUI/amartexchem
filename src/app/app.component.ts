import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'amartexchem';

  isSearchHidden = true;
  showScrollToTop = false;
  aos: any;
  zdhcProductId: any|string;
  domesticProductId: any|string;
  isOpen: { [key: string]: boolean } = {};
  isMobile: boolean = false;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        window.scrollTo(0,0);
      }
    });

    this.checkScreenSize();

    AOS.init({disable: 'mobile'});
  }
  toggleSearch(): void{
    this.isSearchHidden = !this.isSearchHidden;
  }
  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  onWindowScroll() {
    this.showScrollToTop = window.pageYOffset > 300;
  }
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  toggleAccordion(section: string) {
    if (this.isMobile) {
      this.isOpen[section] = !this.isOpen[section];
    }
  }
}
