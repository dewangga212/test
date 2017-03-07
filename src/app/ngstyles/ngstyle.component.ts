import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
    selector:'sty-example',
    templateUrl:'./ngstyle.component.html',
    styleUrls:['./ngstyle.component.css']
})

export class NgstyleComponent{
    colorinput:string;
    textinput:string;
    constructor(){

    }

    addColor(colorinput:HTMLInputElement,textinput:HTMLInputElement):void{
        this.colorinput=colorinput.value;
        this.textinput=textinput.value;
        
    }
}