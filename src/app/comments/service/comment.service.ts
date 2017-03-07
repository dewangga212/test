import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Comment} from '../model/comment';
import {Observable} from 'rxjs/Rx';

import 'rjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService{
    //Resolve HTTP using the constructor
    constructor(private http: Http){}


    private commentUrl='http://localhost:3000/api/comments';
    
    getComments():Observable<Comment[]>{

        return this.http.get(this.commentUrl)
                .map((res:Response)=>res.json())
                .catch((error:any)=>Observable.throw(error.json().error||'Server error'));
    }

    addComment(body:Object):Observable<Comment[]>{
        let bodyString = JSON.stringify(body);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});

        return this.http.post(this.commentUrl,body,options)
                .map((res:Response)=>res.json())
                .catch((error:any)=>Observable.throw(error.json().error)||'Server error');
   
        
         }
    
    updateComment(body:Object):Observable<Comment[]>{
        let bodyString = JSON.stringify(body);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});

        return this.http.put(`${this.commentUrl}/${body['id']}`,body,options)
                    .map((res:Response)=>res.json())
                    .catch((error:any)=>Observable.throw(error.json().error||'Server error');
    }

    removeComment (id:string): Observable<Comment[]> {
        return this.http.delete(`${this.commentUrl}/${id}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

    }