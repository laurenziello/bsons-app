
  import { Component,  ElementRef, OnInit, ViewChild } from '@angular/core';
  import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
  
  @Component({
    selector: 'app-pagefour',
    templateUrl: './pagefour.component.html',
    styleUrls: ['./pagefour.component.scss']
  })
  export class PagefourComponent implements OnInit {
    @ViewChild('myDOMElement3', { static: true }) MyDOMElement3: ElementRef | undefined;
    @ViewChild('myDOMElement4', { static: true }) MyDOMElement4: ElementRef | undefined;
  
    constructor() { }
  
    sdk = new ChartsEmbedSDK({
      baseUrl: "https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-kjncc", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
    });
  
    chart = this.sdk.createChart({
      chartId: "623325d4-cb8a-4d12-8c59-1d32094bca71", 
    });
  
    chart2 = this.sdk.createChart({
      chartId: "6233265b-a4e5-4c99-86d2-8e686389bca5", 
    });
  
    userParams: any = {};
  
    renderChart() {
      this.chart.render(this.MyDOMElement3?.nativeElement);
      this.chart2.render(this.MyDOMElement4?.nativeElement);
    }
  
    ngOnInit(): void {
  
      this.renderChart();
    }
  
  }
  