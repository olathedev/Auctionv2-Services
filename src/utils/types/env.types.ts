export interface IEnviroment {
    APP: {
        NODE_ENV: string;
        PORT: number;
        CLIENT_URL?: string;
    };

    DB: {
        MONGO_URI: string
    }

}