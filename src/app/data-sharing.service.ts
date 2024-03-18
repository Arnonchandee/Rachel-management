import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private dataSource = new BehaviorSubject<any[]>([]);
  data = this.dataSource.asObservable();

  constructor() { }

  updateData(data: any[]) {
    this.dataSource.next(data);
  }
}