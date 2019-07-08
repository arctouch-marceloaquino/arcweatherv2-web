import { Observable } from "rxjs";
import axios from "axios";
import ApiInfo from "./ApiInfo";

/**
 * The purpose of this class is to serve as the base class for services that may consume REST APIs
 */
export class HttpService {

    public get(url: string): Observable<any> {
      return Observable.create((observer: { next: (arg0: any) => void; complete: () => void; }) => {
        axios
          .get<any>(ApiInfo.URL + url)
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
