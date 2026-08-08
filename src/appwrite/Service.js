import { Client, Databases,Storage,Query, ID } from "appwrite";
import conf from '../conf/conf'

export class Service{
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectid);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
        }

    async createPost({title,slug,status,featuredImage,content,userid}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                ID.unique(),
                {
                    title,
                    content,
                    slug,
                    status,
                    featuredImage,
                    userid
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title,status,featuredImage,content,userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug,
                {
                    title,
                    content,
                    status,
                    featuredImage
                }
            )
        } catch (error) {
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug,
            )
            return true;
        } catch (error) {
            console.log("error::",error)
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug,
            )
        } catch (error) {
            console.log("error::",error);
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                queries,
            )
        } catch (error) {
            console.log('error::',error);
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucket,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("error::",error)
            return false
        }
    }

    async deleteFile(fileId){
       try {
        await this.storage.deleteFile(
            conf.appwriteBucket,
            fileId
        )
        return true;
       } catch (error) {
        console.log("error::",error);
        return false
       }
    }

    getFileView(fileId){
        return this.storage.getFileView(
            conf.appwriteBucket,
            fileId
        )
    }
}

const service = new Service();
export default service;
