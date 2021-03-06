import { Component,  ElementRef, OnInit, ViewChild } from '@angular/core';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

@Component({
  selector: 'app-gradimento',
  templateUrl: './gradimento.component.html',
  styleUrls: ['./gradimento.component.scss']
})
export class GradimentoComponent implements OnInit {
  @ViewChild('myDOMElement3', { static: true }) MyDOMElement3: ElementRef | undefined;
  @ViewChild('myDOMElement4', { static: true }) MyDOMElement4: ElementRef | undefined;

  constructor() { }

  sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-kjncc", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
  });

  chart = this.sdk.createChart({
    chartId: "62320a73-0cf8-4df3-8a84-369e324e37fb", 
  });

  chart2 = this.sdk.createChart({
    chartId: "62320ae2-37fd-4406-8b66-995052f1b920", 
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
