import { Component, OnInit } from '@angular/core';
import { Farmer } from './model/Farmer';
import { FarmerService } from './services/farmer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public farmer: Farmer;

  constructor(public farmerService: FarmerService) {

  }

  ngOnInit() {
  }

  selectedFarmer(event){
    console.log('event emmited');
  }
}
