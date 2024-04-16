import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from "../../../types/location.interface";
import { CardComponent } from '../card/card.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-cardlist',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.scss'
})
export class CardlistComponent implements OnInit {
  @Input() unitsList: Location[] = [];

  constructor() {}

  ngOnInit(): void {}

}
