import { Component, OnInit } from '@angular/core';
import { ContentFetchService } from 'src/app/service/content-fetch.service';

@Component({
  selector: 'app-get-json',
  templateUrl: './get-json.component.html',
  styleUrls: ['./get-json.component.css']
})
export class GetJSONComponent implements OnInit {

  content_data;
  is_data_present = false;

  constructor(
    private contentFetchSErvice: ContentFetchService
  ) { }


  ngOnInit(): void {
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
    this.getData();
  }


  getData() {
    this.contentFetchSErvice.getContent().subscribe(res => {
      this.content_data = res;
      if (JSON.stringify(this.content_data) === "{}") {
        this.is_data_present = false;
      } else {
        this.is_data_present = true;
      }
      Object.keys(res).forEach(function (key) {
        var value = res[key];
        //this.is_data_present = true;
      });
      // Object.keys(this.content_data).forEach(function (key) {
      //   var value = this.content_data[key];
      //   debugger;
      //   //this.is_data_present = true;
      // });
    }), error => {
      debugger;
    }
  }

}
