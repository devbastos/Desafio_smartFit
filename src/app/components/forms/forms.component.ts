import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})

export class FormsComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();
  results: Location[] = [];
  // filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder){}
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    })
  }

  // ngOnInit(): void {
  //   this.formGroup = this.formBuilder.group({
  //     hour: '',
  //     showClosed: true
  //   })
  //   // this.unitService.getAllUnits().subscribe(data => {
  //   //   this.results = data;
  //   //   this.filteredResults = data;
  //   // });
  // }

  onSubmit(): void {
    console.log(this.formGroup.value) 
  }
  // onSubmit(): void {
  //   let { showClosed, hour } = this.formGroup.value
  //   this.filteredResults = this.filterUnitsService.filter(this.results, showClosed, hour);
  //   this.unitService.setFilteredUnits(this.filteredResults);

  //   this.submitEvent.emit();
  // }

  onClean(): void {
    this.formGroup.reset();
  }
}
