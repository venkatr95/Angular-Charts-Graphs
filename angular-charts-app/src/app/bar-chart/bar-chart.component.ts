import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent {

  constructor (private httpService: HttpClient) { }

  ngOnInit () {
    this.httpService.get('./assets/sales.json', {responseType: 'json'}).subscribe(
        data => {
            this.barChartData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.
        },
        (err: HttpErrorResponse) => {
            console.log (err.message);
        }
    );
}

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  public chartColors: any[] = [
    { 
      backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"] 
    }
  ];
  barChartLabels: Label[] = ['Q1', 'Q2', 'Q3', 'Q4'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  // barChartData: ChartDataSets[] = [
  //   { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  // ];
  barChartData:any = [
    { 
        data: []
    }
];

}
