import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-t',
  templateUrl: './scroll-t.component.html',
  styleUrls: ['./scroll-t.component.css'],
})
export class ScrollTComponent {
  ngOnInit(): void {
    this.onScroll();
  }

  onScroll() {
    let box = document.querySelectorAll('.box');
    console.log(box);

    window.addEventListener('scroll', () => {
      console.log(window.innerHeight/5*2);

      let triggerBottom = window.innerHeight/5*4;

      box.forEach(box=>{
        let boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        if(boxTop < triggerBottom){
          box.classList.add('show');
        } else{
          box.classList.remove('show');
        }
      })
    });
  }

  checkBoxes() {
    console.log(window.innerHeight);
  }
}
