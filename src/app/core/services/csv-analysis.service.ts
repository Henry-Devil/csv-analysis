import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class CsvAnalysisService {
  analyzeCsv(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          resolve(result.data);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  }

  findMaxAndMin(statesData: any[]): { maxState: string, minState: string } {
    // Implementa la lógica para encontrar el estado con mayor y menor acumulado
    // ...

    return { maxState: 'California', minState: 'Wyoming' }; // Ejemplo, reemplazar con la lógica real
  }

  mostAffectedState(statesData: any[]): string {
    // Implementa la lógica para encontrar el estado más afectado
    // ...

    return 'Florida'; // Ejemplo, reemplazar con la lógica real
  }
}
