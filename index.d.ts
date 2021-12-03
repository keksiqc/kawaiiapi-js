declare module "kawaii-api" {
    export class Kawaii {
        public constructor(token: string);

        public get(main: string, endpoint: string, filter: void | string): Promise<string>;
        public endpoints(main: string): Promise<string>;
    }
}