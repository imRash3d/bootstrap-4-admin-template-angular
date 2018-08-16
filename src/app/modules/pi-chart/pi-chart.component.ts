import { Component, OnInit } from "@angular/core";
import { Chart, ChartData, Point } from 'chart.js';
@Component({
  selector: "app-pi-chart",
  templateUrl: "./pi-chart.component.html",
  styleUrls: ["./pi-chart.component.css"]
})
export class PiChartComponent implements OnInit {
  canvas: any;
  ctx: any;

  constructor() {}

  ngOnInit() {
    this.getChart();
  }

  getChart(){
    this.canvas = document.getElementById("piChart");
    this.ctx = this.canvas.getContext("2d");
    let data = new Chart(this.ctx, {
      type: "pie",
      data: {
        labels: ["Buy", "Sale"],
        datasets: [
          {
            label: "Revenue",
            data: ["300", "150"],
            backgroundColor: ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"]
          }
        ]
      },
      options: {}
    });
  }
}
