
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('myDOMElement', { static: true }) MyDOMElement: ElementRef | undefined;
  @ViewChild('myDOMElement2', { static: true }) MyDOMElement2: ElementRef | undefined;
  startDate = new Date();
  endDate = new Date();


 

 

  constructor() {
  
  }

  sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-kjncc", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
  });

  chart = this.sdk.createChart({
    chartId: "622f2cad-25fc-42e5-8895-8423ec491219", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  });

  chart2 = this.sdk.createChart({
    chartId: "622f0944-a038-4b69-8fca-c27832b354a0", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  });

  userParams: any = {};

  renderChart() {
    this.chart.render(this.MyDOMElement?.nativeElement);
    this.chart2.render(this.MyDOMElement2?.nativeElement);
  }

  refreshChart() {
    let filter = {
      data: { $gte: this.startDate, $lte: this.endDate }
    };

    this.chart.setFilter(filter);
    this.chart.refresh();
    this.chart2.setFilter(filter);
    this.chart2.refresh();
  }



  ngOnInit(): void {
    this.renderChart();
  }

  

}
