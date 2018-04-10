import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { attList } from './mock_attendance';
import { AttModel } from './attmodel';
import { Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AttendanceService {
  listOfAtt: AttModel[];

  constructor() { }

  getListAttendance(): Observable<AttModel[]> {
    return of(attList);
  }

  getOneUserAttendance(id: number): Observable<AttModel[]> {
    let listOfAtt: AttModel[] = [];
    let tempo: AttModel[] = attList;
    let j = 0;
    for (let i = 0; i < attList.length; i++) {
      if (tempo[i].fk_user == id) {
          console.log(tempo[i].fk_user)
          listOfAtt[j] = new AttModel();
          listOfAtt[j] = tempo[i];
          j++;
      }
    }
    this.listOfAtt = listOfAtt;
    return of(this.listOfAtt);
  }
}
