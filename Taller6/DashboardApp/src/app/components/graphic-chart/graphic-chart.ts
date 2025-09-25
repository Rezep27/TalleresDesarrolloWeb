import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-graphic-chart',
  imports: [],
  templateUrl: './graphic-chart.html',
  styleUrl: './graphic-chart.css'
})
export class GraphicChart implements AfterViewInit{
  ngAfterViewInit() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        datasets: [{
          data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
          tension: 0,                     // updated: "lineTension" is deprecated
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: { boxPadding: 3 }
        }
      }
    });
  }
}
