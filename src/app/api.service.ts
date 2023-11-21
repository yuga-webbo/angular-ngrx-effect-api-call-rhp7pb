import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, take } from "rxjs/operators";

@Injectable()
export class ApiService {
  ob1$ = of({ one: 1 });
  ob2$ = of({ two: 2 });
  ob3$ = of({ three: 3 });
  ob4$ = of({ four: 4 });
  ob5$ = of({ five: 5 });
  constructor(private http: HttpClient) {}

  getOb1(obj: any): Observable<any> {
    // return this.http.get("");
    return this.ob1$.pipe(map(og => ({ ...og, ...obj })), take(1));
  }

  getOb2(): Observable<any> {
    // return this.http.get("");
    return this.ob2$;
  }
  getOb3(): Observable<any> {
    // return this.http.get("");
    return this.ob3$;
  }
  getOb4(): Observable<any> {
    // return this.http.get("");
    return this.ob4$;
  }
  getOb5(): Observable<any> {
    // return this.http.get("");
    return this.ob5$;
  }
}
