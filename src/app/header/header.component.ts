import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticationService } from '../servicios/autentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public islogged:boolean=true;

  constructor(public authS:AutenticationService,
    private router:Router) { }

ngOnInit(): void {
this.authS.$ready?.subscribe()
}

login(){
this.authS.googleLogin()
.then((data)=>{
this.authS.setUser(data);
this.islogged=false;

})
.catch(err=>{
console.log(err);
})

}



}
