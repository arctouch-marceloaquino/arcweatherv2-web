import { IProvider } from "../interfaces/iprovider";
import { Observable } from "rxjs";
import { ApiInfo } from './api-info';
import axios from "axios";

/**
 * The purpose of this class is to serve as the base class for services that may consume REST APIs
 */
export class HttpService implements IProvider {

    ApiInfo: ApiInfo;

    constructor() {
        this.ApiInfo = new ApiInfo();
     }
  
    public get(url: string): Observable<any> {
      return Observable.create((observer: { next: (arg0: any) => void; complete: () => void; }) => {
        axios
          .get<any>(this.ApiInfo.URL + url)
          .then(
            response => {
              observer.next(response);
            },
            () => {
              observer.complete();
            }
          );
      });
    }

  }