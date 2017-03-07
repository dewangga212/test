import {Component} from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Component({
    templateUrl:'./comment.component.html',
    styleUrls:['./comment.component.css']
})
export class CommentComponent{
        bagus:string;
        image:string;
        constructor(){
            this.bagus=localStorage.getItem('name');
        }
}