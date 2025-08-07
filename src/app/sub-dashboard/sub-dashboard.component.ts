import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AddProductService } from '../EcommericeService/add-product.service';

@Component({
  selector: 'app-sub-dashboard',
  templateUrl: './sub-dashboard.component.html',
  styleUrls: ['./sub-dashboard.component.scss'],
})
export class SubDashboardComponent {
  totalValue: number = 100;
  intputValue: number = 0;
  preInputValue: number = 0;
  allData: any[] = new Array();
  intputName: string = '';
  buttonName: string = 'add';
  addBtnDisplay: boolean = true;
  saveBtnDisplay: boolean = false;
  editIndex: number = -1;

  // videos = [
  //   { src: 'assets/Images/samsungs24.webm', title: 'Welcome to Our Shop!', description: 'Best deals just for you' } ,
  //   { src: 'assets/Images/98026-646632863.mp4', title: 'Shop the Latest Trends', description: 'New arrivals daily' },
  //   { src: 'assets/Images/samsungs24.webm', title: 'Limited Time Offers', description: 'Hurry up! Shop now' }
  // ];
  // videoUrls: string[] = [
  //   'assets/Images/samsungs24.webm', // Example video paths
  //   'assets/video2.mp4',
  //   'assets/video3.mp4'
  // ];

  intervalId: any;

  currentVideoIndex: number = 0;
  // currentVideoIndex: number = 0;
  videoChangeInterval: any;

  ngOnInit(): void {}

  check() {
    if (
      this.editIndex < 0 &&
      this.intputValue <= this.totalValue &&
      this.intputValue < 0
    ) {
      debugger;
      console.log(this.intputValue);
      this.totalValue = this.totalValue - this.intputValue;
      this.editIndex = -1;
      this.allData.push({
        name: this.intputName,
        value: this.intputValue,
      });
      if (this.totalValue == 0) {
        this.saveBtnDisplay = true;
        this.addBtnDisplay = false;
        this.buttonName = 'save';
      }
    } else if (this.intputValue <= this.totalValue) {
      debugger;
      this.totalValue = this.totalValue - this.intputValue;
      this.allData[this.editIndex].name = this.intputName;
      this.allData[this.editIndex].value = this.intputValue;
      this.buttonName = 'add';
      this.editIndex = -1;
      if (this.totalValue == 0) {
        this.saveBtnDisplay = true;
        this.addBtnDisplay = false;
        this.buttonName = 'save';
      }
    } else {
      alert('check the total value' + this.intputValue);
    }
  }

  totalcheck() {
    if (this.totalValue == 0) this.saveBtnDisplay = true;
    this.addBtnDisplay = false;
    this.buttonName = 'save';
  }

  save() {
    debugger;
  }

  editCall(value: any) {
    debugger;
    this.intputName = this.allData[value].name;
    this.intputValue = this.allData[value].value;
    this.preInputValue = this.totalValue;
    this.editIndex = value;
    if (this.preInputValue >= 0 && this.preInputValue <= 100) {
      this.totalValue = this.totalValue + this.intputValue;
      this.saveBtnDisplay = false;
      this.addBtnDisplay = true;
      this.buttonName = 'Update';
    }
  }

  // images: string[] = [
  //   'img':'assets/Images/ecommercebg_pg.jpg',

  //   'assets/Images/ecommercebg_pg.jpg',
  //   'assets/Images/ecommercebg_pg.jpg'
  // ];
}
