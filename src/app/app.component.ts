import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetUnitsService } from './services/get-units.service';
import { BehaviorSubject } from 'rxjs';
import { Location } from "../types/location.interface";
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { LegendComponent } from './components/legend/legend.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardlistComponent } from './components/cardlist/cardlist.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, FooterComponent, HeaderComponent, FormsComponent, LegendComponent,  HttpClientModule, CommonModule, CardlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService: GetUnitsService){ }

  onSubmit(){
    this.unitsList = this.unitService.getFilteredUnits();
    console.log(this.unitsList)
    this.showList.next(true);
  }

  ngOnInit(): void {}
}