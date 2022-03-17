import { Component,  ElementRef, OnInit, ViewChild } from '@angular/core';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.scss']
})
export class PagethreeComponent implements OnInit {
  @ViewChild('myDOMElement3', { static: true }) MyDOMElement3: ElementRef | undefined;
  @ViewChild('myDOMElement4', { static: true }) MyDOMElement4: ElementRef | undefined;
  @ViewChild('myDOMElement5', { static: true }) MyDOMElement5: ElementRef | undefined;

  constructor() { }

  sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-kjncc", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
  });

  chart = this.sdk.createChart({
    chartId: "62331e36-cb8a-45dc-8c03-1d3209467973", 
  });

  chart2 = this.sdk.createChart({
    chartId: "62331e9a-701f-4ecd-83e7-2ae0d6c94c37", 
  });

  chart3 = this.sdk.createChart({
    chartId: "623348f0-cb8a-4496-84db-1d320965c24b", 
  });

  userParams: any = {};

  renderChart() {
    this.chart.render(this.MyDOMElement3?.nativeElement);
    this.chart2.render(this.MyDOMElement4?.nativeElement);
    this.chart3.render(this.MyDOMElement5?.nativeElement);
  }

  ngOnInit(): void {

    this.renderChart();
  }

}
