import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = '';
  choicesArray = [];
  choicesArray2 = [];
  selectedItems1 = [];
  selectedItems2 = [];
  choiceSettings = {};
  choiceSettings2 = {};

ngOnInit() {
    this.choicesArray = [
      {"id":1,"itemName":"Banglore"},
      {"id":2,"itemName":"Mumbai"},
      {"id":3,"itemName":"Delhi"},
      {"id":4,"itemName":"Kolkata"},
      {"id":5,"itemName":"Chennai"}
    ];

    this.choicesArray2 = [
      {"id":1,"itemName":"Banglore"},
      {"id":2,"itemName":"Mumbai"},
      {"id":3,"itemName":"Delhi"},
      {"id":4,"itemName":"Kolkata"},
      {"id":5,"itemName":"Chennai"}
    ];

    this.choiceSettings = {
      singleSelection: false,
      enableSearchFilter: true,
      badgeShowLimit: 3
    };

    this.choiceSettings2 = {
      singleSelection: false,
      enableSearchFilter: true,
      badgeShowLimit: 3,
      limitSelection: 2
    };


    this.selectedItems1 = [
      {"id":1,"itemName":"Banglore"},
    ];

    this.selectedItems2 = [
      {"id":2,"itemName":"Mumbai"},
    ];

  }
}
