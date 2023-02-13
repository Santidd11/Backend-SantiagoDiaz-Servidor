import { envConfig } from "./envConfig.js"

export const options = {
    fileSystem: {
        path: envConfig.DB_FILE_SYSTEM,
    },
    mongo:{
        path: 'mongodb://127.0.0.1:27017/chat',
    },
    firebase:{
        key: {
            "type": envConfig.DB_F_K_TYPE,
            "project_id": envConfig.DB_F_K_PROJECT_ID,
            "private_key_id": envConfig.DB_F_K_PRIVATE_KEY_ID,
            "private_key": envConfig.DB_F_K_PRIVATE_KEY,
            "client_email": envConfig.DB_F_K_CLIENT_EMAIL,
            "client_id": envConfig.DB_F_K_CLIENT_ID,
            "auth_uri": envConfig.DB_F_K_AUTH_URI,
            "token_uri": envConfig.DB_F_K_TOKEN_URI,
            "auth_provider_x509_cert_url": envConfig.DB_F_K_AUTH_PROVIDER,
            "client_x509_cert_url": envConfig.DB_F_K_CLIENT
        },
        databaseUrl: envConfig.DB_F_URL
    },
    mongoAtlasSessions:{
        url: "mongodb+srv://Santidd11:coder.backend@cluster0.kc4fhea.mongodb.net/sessionsDB?retryWrites=true&w=majority"
    }
}