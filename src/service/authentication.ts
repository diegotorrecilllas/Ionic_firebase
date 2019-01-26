import {Injectable} from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

const identifier = "token";

@Injectable()
export class Authentication {

public token : string;

  constructor(private angularAuth: AngularFireAuth) {
    this.setUp();
  }

setUp(){
  this.token = this.getTokenFromLS();
  this.angularAuth.authState.subscribe((firebaseUser)=>{
    if (firebaseUser){
      localStorage.setItem(identifier,firebaseUser.uid);
      this.token = firebaseUser.uid;
    }else{
      localStorage.removeItem(identifier);
      this.token = null;
    }
  })

}
getTokenFromLS() :string {
  return localStorage.getItem(identifier);
}

logoutOfGoogle(g){
  return this.angularAuth.auth.signOut().then(()=>{
    this.token = null;
    })
  }

createUserWithEmailAndPassword(email,password){
return  this.angularAuth.auth.createUserWithEmailAndPassword(email,password);
}
createUserWithGoogle(){
  let provider = new firebase.auth.GoogleAuthProvider();


  return this.angularAuth.auth.signInWithRedirect(provider)
  .then( result => {
    return firebase.auth().getRedirectResult;

  });
}
}
