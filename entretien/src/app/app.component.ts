import { Component, OnInit } from '@angular/core';
declare var $: any;  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  name = 'Jquery Integration With Angular!';  
  isJqueryWorking: any;  
  ngOnInit()  
  {  
    $(document).ready(() => {  
        this.isJqueryWorking = 'Jquery is working !!!';  
        console.log(this.isJqueryWorking);
    });  
  } }
