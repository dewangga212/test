import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {Http,Response,Headers,RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private loginUrl='http://dev.qeponsquare.com/api/login';
  constructor(public http:Http,public router:Router){

    if(Cookie.get('username') && Cookie.get('password')){
        this.login(Cookie.get('username'),Cookie.get('password'));
    }

  }


    addArticle(event,title:HTMLInputElement,link:HTMLInputElement):void{
      event.preventDefault();
      this.login(title.value,link.value);
     }

    login(username:string,password:string):void{
         let body = JSON.stringify({username,password});
         let headers = new Headers({'Content-Type':'application/json','Authorization':'JS4EHTa8gJnbZF2rl7vmiCXRrpRojT'});
         let options = new RequestOptions({headers:headers});
     

         this.http.post(this.loginUrl,body,options)
                .subscribe(response=>{
                  let objectResponse=JSON.parse(JSON.stringify(response.json()));

                  Cookie.set('username', 'opr1sm');
                  Cookie.set('password', '123123');
                  localStorage.setItem('token', objectResponse.data.token);
                  localStorage.setItem('name',objectResponse.data.profile.first_name);
                  localStorage.setItem('img',objectResponse.data.profile.imgpath);
                  this.router.navigate(['comments']);
                },
                error => {
                  alert(error.text());
                     console.log(error.text());
                     }
                )
                
      }
}
