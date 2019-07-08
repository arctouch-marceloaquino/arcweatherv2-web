import { Observable } from 'rxjs';

export class IProvider {

    constructor() { }
  
    public get(url: string): Observable<any> {
      return Observable.create();
    }
  
  }