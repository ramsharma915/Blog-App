const conf = {
    appwriteUrl :String(import.meta.env.VITE_APPWRITE_ENDPOINT_URL),
    appwriteProjectid :String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabase :String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollection :String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucket :String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymiceApiKeys :String(import.meta.env.VITE_TINYMICE_APIKEYS)
}
export default conf;
