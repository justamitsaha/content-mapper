import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-content-node',
  templateUrl: './content-node.component.html',
  styleUrls: ['./content-node.component.css']
})
export class ContentNodeComponent implements OnInit {

  @Input() content_data: any;

  constructor() { }

  ngOnInit(): void {
    // Object.keys(this.content_data).forEach(function (key) {
    //   var value = this.content_data[key];
    //   debugger;
    // });
  }


  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      if (propName === "content_data") {
        let content = this.content_data;
        Object.keys(content).forEach(function (key) {
          var value = content[key];
          debugger;
        });
      }
    }
  }

}
