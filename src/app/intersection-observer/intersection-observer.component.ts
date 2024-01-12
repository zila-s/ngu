import { Component } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-intersection-observer',
  templateUrl: './intersection-observer.component.html',
 
  styleUrls: ['./intersection-observer.component.css'],
})
export class IntersectionObserverComponent {
  ra: number = 0.1;

  barba:any;
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

    this.barba.init({
      transitions: [{
        name: 'opacity-transition',
        leave(data:any) {
          return gsap.to(data.current.container, {
            opacity: 0
          });
        },
        enter(data:any) {
          return gsap.from(data.next.container, {
            opacity: 0
          });
        }
      }]
    });
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

  onMove(event:any){
    
    let cursor = document.getElementById('cursor');
    console.log(cursor);
    
    document.addEventListener("mousemove",(event)=>{
     let x = event.clientX;
    let y = event.clientY;
      if(cursor){
         cursor.style.top=x+"px";
         cursor.style.left=y+"px";
      }
     
    })
  }
}

//https://cubic-bezier.com/#.09,.82,.62,1.17

//https://developer.mozilla.org/fr/docs/Web/CSS/@media/prefers-reduced-motion
