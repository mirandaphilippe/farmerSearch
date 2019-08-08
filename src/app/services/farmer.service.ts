import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FarmerSearchAbstractProvider } from './FarmerSearchAbstractProvider';
import { Farmer } from '../model/Farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http: HttpClient) {
   }

  searchFarmers(params): Promise<Farmer[]> {
    console.log('params', params);
    return this.http
            .get(`${environment.apiUrl}`)
            .toPromise<any>();
  }

}
