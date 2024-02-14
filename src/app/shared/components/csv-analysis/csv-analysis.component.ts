import { Component } from '@angular/core';
import { CsvAnalysisService } from '../../../core/services/csv-analysis.service';

@Component({
  selector: 'app-csv-analysis',
  templateUrl: './csv-analysis.component.html',
  styleUrls: ['./csv-analysis.component.scss']
})
export class CsvAnalysisComponent {
  file: File | undefined;
  analysisResult: any;
  maxState: string = '';
  minState: string = '';
  mostAffectedState: string = '';

  constructor(private csvAnalysisService: CsvAnalysisService) {}

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
  }

  analyzeCsv(): void {
    if (this.file) {
      this.csvAnalysisService.analyzeCsv(this.file).then((result) => {
        this.analysisResult = result;

        // Realiza las operaciones de análisis adicionales
        const { maxState, minState } = this.csvAnalysisService.findMaxAndMin(result);
        this.maxState = maxState;
        this.minState = minState;

        this.mostAffectedState = this.csvAnalysisService.mostAffectedState(result);
      }).catch((error) => {
        console.error('Error al analizar el archivo CSV', error);
      });
    }
  }
}

