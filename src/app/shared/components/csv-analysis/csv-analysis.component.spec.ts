import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvAnalysisComponent } from './csv-analysis.component';

describe('CsvAnalysisComponent', () => {
  let component: CsvAnalysisComponent;
  let fixture: ComponentFixture<CsvAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsvAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsvAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
