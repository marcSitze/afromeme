declare const _default: {
    app: {
        name: string | undefined;
        port: string | number;
        environment: string | undefined;
        host: string;
    };
    mongo: {
        MONGO_LOCAL: string;
        MONGO_ONLINE: string | undefined;
        MONGO_TEST_DB: string;
    };
    auth: {
        jwt_secret: string;
        saltRounds: number;
    };
};
export default _default;
