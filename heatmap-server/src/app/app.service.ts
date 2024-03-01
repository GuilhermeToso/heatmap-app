import { Injectable } from '@nestjs/common';
import { ApexAxisChartSeries } from './type';

@Injectable()
export class AppService {
  generateRandomNumber(min: number, max: number, decimals: number): number {
    const factor = Math.pow(10, decimals);
    // Generate random number in the range [0.1, 3.0)
    const randomNum = Math.random() * (max - min) + min;
    // Round the number to the specified number of decimal places
    return Math.round(randomNum * factor) / factor;
  }
  generateData() {
    const iterations = 15;
    const xLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const data: ApexAxisChartSeries = [];

    const finalRow = [];
    for (let j = 0; j < xLabels.length; j++) {
      finalRow.push({ x: xLabels[j], y: 0 });
    }
    data.push({ name: '16', data: finalRow });

    for (let i = 0; i < iterations; i++) {
      const row = [];
      for (let j = 0; j < xLabels.length; j++) {
        row.push({ x: xLabels[j], y: this.generateRandomNumber(0.1, 3.0, 2) });
      }
      data.push({ name: (iterations - i).toString(), data: row });
    }

    return data;
  }
}
