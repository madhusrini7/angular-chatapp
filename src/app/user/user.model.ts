import {uuid} from '../util/uuid';
//user model represent the person sending the message

export class User{
  id:string
  constructor(public name :string,public avatarSrc:string){
    this.id= uuid();
}
  }
  