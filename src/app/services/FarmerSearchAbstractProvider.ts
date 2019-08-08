import {Farmer} from '../model/Farmer';
import { Injectable } from '@angular/core';
import { FarmerService } from './farmer.service';

@Injectable()
export declare abstract class FarmerSearchAbstractProvider {
  abstract searchFarmers(params): Promise<Farmer[]>;
}
