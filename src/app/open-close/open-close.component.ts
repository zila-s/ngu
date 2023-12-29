import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import EditorJS from '@editorjs/editorjs';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: '#023047',
          color: 'white',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: '#ffb703',
          color: 'white',
        })
      ),
      transition('open => closed', [animate('5s')]),
      transition('closed => open', [animate('0.5s')]),
      transition('* => closed', [animate('1s')]),
      transition('* => open', [animate('0.5s')]),
      transition('open <=> closed', [animate('0.5s')]),
      transition('* => open', [
        animate('4s', style({ opacity: '*', backgroundColor: 'red' })),
      ]),
      transition('* => *', [animate('1s')]),
    ]),
  ],
})
export class OpenCloseComponent {
  isOpen = true;

  @ViewChild('editor', { read: ElementRef, static: true })
  editorElement!: ElementRef;

  private editor!: EditorJS;

  editorSave: any = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.initializeEditor();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  initializeEditor() {
    this.editor = new EditorJS({
      minHeight: 200,
      
      holder: this.editorElement.nativeElement,
      onReady: () => {
        console.log('Editor.js is ready to work!');
      },
      onChange: (api, event) => {
        console.log("Now I know that Editor's content changed!", event);
      },
      placeholder: 'Let`s write an awesome story!',
      data: {
        time: 1550476186479,
        blocks: [],
        version: '2.8.1',
      },
    });
    console.log(this.editor);
  }

  showEditorData() {
    this.editor
      .save()
      .then((d) => {
        this.editorSave = d.blocks;
        console.log(this.editorSave);
      })
      .catch((error) => {
        console.log('Saving failed: ', error);
      });
  }
}

//https://www.saashub.com/compare-framer-motion-vs-material-design-for-angular

//