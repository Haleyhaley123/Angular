import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //Authorization: 'my-auth-token'
    }),
  
  };
  private REST_API_SERVER ='http://localhost:8899/';
  //private _url = 'api/OPD/JointConsultationForApprovalOfSurgery/OPD/B13AC44D-9D10-4D7D-9798-00295DB1FCC7';
  constructor(private httpClient: HttpClient) { }
  //get
  public getProfile():Observable<any>{
    const url = `${this.REST_API_SERVER}/api/OPD/JointConsultationForApprovalOfSurgery/OPD/B13AC44D-9D10-4D7D-9798-00295DB1FCC7`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  //post
  public addPosts(){
    const url = `${this.REST_API_SERVER}/api/OPD/JointConsultationForApprovalOfSurgery/Create/OPD/B13AC44D-9D10-4D7D-9798-00295DB1FCC7`;
    return this.httpClient
    .post<any>(url,'' ,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Có lỗi xảy ra', error.error.message);
    }else{
      console.error(`Backend returned code ${error.status},`+ `body was: ${error.error}`);
    }
    return 'Có lỗi xảy ra';
  }
  //api/OPD/JointConsultationForApprovalOfSurgery/Create/{type}/{visitId}
}
