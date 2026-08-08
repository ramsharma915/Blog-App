import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf'

export class Authentication{
   client = new Client();
   account;
   constructor(){
    this.client
    .setProject(conf.appwriteProjectid)
    .setEndpoint(conf.appwriteUrl);
    this.account = new Account(this.client);
   }
   async createAccount({ email, password, name }) {
  try {
    const userAccount = await this.account.create(
      ID.unique(),
      email,
      password,
      name
    );

    return userAccount;
  } catch (error) {
    throw error;
  }
}
   async loginAccount ({email,password}){
    try {
    return await this.account.createEmailPasswordSession(email,password);
    }
    catch (error) {
        throw error;
    }
   }
   async getCurrentAccount (){
    try {
        return await this.account.get();
    } catch (error) {
        return null;
    }
   }
   async logoutAccount(){
    try{
        return await this.account.deleteSessions();
    }catch(error){
        throw error;
    }
   }
}
const autheuser = new Authentication();
export default autheuser;
