import { Component, OnInit } from '@angular/core';
import { ContentFetchService } from 'src/app/service/content-fetch.service';

@Component({
  selector: 'app-get-json',
  templateUrl: './get-json.component.html',
  styleUrls: ['./get-json.component.css']
})
export class GetJSONComponent implements OnInit {

  constructor(
    private contentFetchSErvice: ContentFetchService
  ) { }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
    this.contentFetchSErvice.getContent().subscribe(res => {
      Object.keys(res).forEach(function (key) {
        var value = res[key];
        // ...
        debugger;
      });
      debugger;
    }), error => {
      debugger;
    }
  }

}
