import { UserSecurityQuestion } from "./model.UserSecurityQuestion";

export class User {
  id : number;
email: string="";
firstName: string="";
lastName: string="";
  username: string="";
  password: string="";
 listOfQuestion: UserSecurityQuestion[]=[];

}