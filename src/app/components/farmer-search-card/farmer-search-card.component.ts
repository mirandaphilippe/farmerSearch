import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FarmerSearchAbstractProvider } from 'src/app/services/FarmerSearchAbstractProvider';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Farmer } from 'src/app/model/Farmer';

@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent implements OnInit {

  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() onPartnerSelectedEvent = new EventEmitter();

  public searchValue: string;
  public searchResults: Observable<any>;
  public farmers: Farmer[];
  constructor() { }

  ngOnInit() {

  }
  searchFarmers(e){
    this.farmerSearchAbstractProvider
        .searchFarmers(e.value)
        .then(res => this.farmers = res);
  }

}
