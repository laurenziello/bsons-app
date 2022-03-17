import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('myDOMElement', { static: true }) MyDOMElement: ElementRef | undefined;
  @ViewChild('myDOMElement2', { static: true }) MyDOMElement2: ElementRef | undefined;
  @ViewChild('myDOMElement3', { static: true }) MyDOMElement3: ElementRef | undefined;
  startDate = new Date();
  endDate = new Date();

  formatLabel(value: number) {
    if (value == 0) {
      return 'Tutti';
    }

    return value;
  }

  constructor() {

  }
  voto = 0;
  meseSelezionato: string = 'Tutti';
  mesi: string[] = ['Tutti', 'Giugno', 'Dicembre'];
  selectedRegion = '';
  sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-kjncc", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
  });

  chart = this.sdk.createChart({
    chartId: "622f2cad-25fc-42e5-8895-8423ec491219", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  });

  chart2 = this.sdk.createChart({
    chartId: "622f0944-a038-4b69-8fca-c27832b354a0", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  });

  chart3 = this.sdk.createChart({
    chartId: "6233284a-701f-44bb-8101-2ae0d6cea1b9", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  });

  userParams: any = {};

  renderChart() {
    this.chart.render(this.MyDOMElement?.nativeElement);
    this.chart2.render(this.MyDOMElement2?.nativeElement);
    this.chart3.render(this.MyDOMElement3?.nativeElement);
  }

  refreshChart() {
    console.log(this.selectedRegion);
    let filter = {};
    if (this.voto == 0) {
      if (this.selectedRegion == '') {
        if (this.meseSelezionato == 'Dicembre') {
          filter = {
            data: { $gte: new Date(2021, 11, 1), $lte: new Date(2021, 11, 31) },
          };
        } else if (this.meseSelezionato == 'Giugno') {
          filter = {
            data: { $gte: new Date(2021, 5, 1), $lte: new Date(2021, 5, 30) },
          };
        }
      } else {
        if (this.meseSelezionato == 'Dicembre') {
          filter = {
            data: { $gte: new Date(2021, 11, 1), $lte: new Date(2021, 11, 31) },
            "descrCodGeog.codReg": this.selectedRegion
          };
        } else if (this.meseSelezionato == 'Giugno') {
          filter = {
            data: { $gte: new Date(2021, 5, 1), $lte: new Date(2021, 5, 30) },
            "descrCodGeog.codReg": this.selectedRegion
          };
        } else if (this.meseSelezionato == 'Tutti') {
          filter = {
            "descrCodGeog.codReg": this.selectedRegion
          };
        }
      }
    } else {
      if (this.selectedRegion == '') {
        if (this.meseSelezionato == 'Dicembre') {
          filter = {
            data: { $gte: new Date(2021, 11, 1), $lte: new Date(2021, 11, 31) },
            voto: this.voto,
          };
        } else if (this.meseSelezionato == 'Giugno') {
          filter = {
            data: { $gte: new Date(2021, 5, 1), $lte: new Date(2021, 5, 30) },
            voto: this.voto,
          };
        } else if (this.meseSelezionato == 'Tutti') {
          filter = {
            voto: this.voto,
          };
        }
      } else {
        if (this.meseSelezionato == 'Dicembre') {
          filter = {
            data: { $gte: new Date(2021, 11, 1), $lte: new Date(2021, 11, 31) },
            voto: this.voto,
            "descrCodGeog.codReg": this.selectedRegion
          };
        } else if (this.meseSelezionato == 'Giugno') {
          filter = {
            data: { $gte: new Date(2021, 5, 1), $lte: new Date(2021, 5, 30) },
            voto: this.voto,
            "descrCodGeog.codReg": this.selectedRegion
          };
        } else if (this.meseSelezionato == 'Tutti') {
          filter = {
            voto: this.voto,
            "descrCodGeog.codReg": this.selectedRegion
          };
        }
      }
    } 



      // if (this.voto > 0) {
      //   let filterVoto = {

      //   };
      //   this.chart.setFilter(filterVoto);
      //   this.chart.refresh();
      //   this.chart2.setFilter(filterVoto);
      //   this.chart2.refresh();
      // }

      console.log(filter)
      this.chart.setFilter(filter);
      this.chart.refresh();
      this.chart2.setFilter(filter);
      this.chart2.refresh();
      this.chart3.setFilter(filter);
      this.chart3.refresh();
    }



    ngOnInit(): void {
      this.renderChart();
    }


  }
