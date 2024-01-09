import { Component } from '@angular/core';

@Component({
  selector: 'app-intersection-observer',
  templateUrl: './intersection-observer.component.html',
  styleUrls: ['./intersection-observer.component.css'],
})
export class IntersectionObserverComponent {
  ra: number = 0.1;
  options = {
    root: null,
    rootMargin: '0px',
    threshold: this.ra,
  };

  observer!: IntersectionObserver;

  ngOnInit(): void {
    console.log(this.ra);
    this.observer = new IntersectionObserver(
      this.handelIntersect,
      this.options
    );
    let test = document.querySelectorAll('[class*="reveal-"]')!;
    document.querySelectorAll('[class*="reveal-"]')!.forEach((element) => {
      console.log(element);
      this.observer.observe(element);
    });

    console.log(test);
  }

  handelIntersect(entries: any, observer: any) {
    this.ra = 0.1;
    entries.forEach((element: any) => {
      if (element.intersectionRatio > this.ra) {
        console.log('visible');
        //observer.unobserve(element.target)
        opacity: 1;
        element.target.classList.add('reveal-visible');
      } else {
        console.log('invisible');
        element.target.classList.remove('reveal-visible');
      }
      console.log(element.intersectionRatio);
    });
    console.log('handleObseve');
  }
}

//https://cubic-bezier.com/#.09,.82,.62,1.17

//https://developer.mozilla.org/fr/docs/Web/CSS/@media/prefers-reduced-motion
