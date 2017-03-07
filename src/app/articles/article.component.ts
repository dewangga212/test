import {Component,Input} from '@angular/core';
import {Article} from './article';
import {NgStyle} from '@angular/common';

@Component({
    selector:'reddit-article',
    host:{
        class:'row'
    },
    templateUrl:'./article.component.html',
    styleUrls: ['./article.component.css']
})

export class ArticleComponent{
    @Input('bagus')
    article: Article;

    voteUp():boolean{
        this.article.voteUp();
        return false;
    }

    voteDown():boolean{
        this.article.voteDown();
        return false;
    }

}