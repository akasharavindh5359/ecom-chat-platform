import { AfterViewInit, Component, NgZone } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Hero mobile → center
    gsap.fromTo(
      '.mobile-hero',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );

    // Specs mobile → move to right and then off screen
    gsap.fromTo(
      '.mobile-specs',
      { x: 0, opacity: 1 },
      {
        x: 400, // moves out to right
        opacity: 0,
        scrollTrigger: {
          trigger: '.specs-section',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          pin: '.mobile-specs',
        },
      }
    );

    // Bottom mobile → comes back from right → center
    gsap.fromTo(
      '.mobile-bottom',
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.bottom-section',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }
}
