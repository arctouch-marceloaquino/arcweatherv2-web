import { Observable } from 'rxjs';

/**
 * Base interface for HTTP verbs
 */
export class IProvider {

    constructor() { }
  
    public get(url: string): Observable<any> {
      return Observable.create();
    }
  
  }