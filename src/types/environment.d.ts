export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REGION: string;
            TOKEN: string;
        }
    }
}
