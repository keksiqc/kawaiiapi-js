declare module "kawaii-api" {
  export class Kawaii {
    public constructor(token: string);

    public static get(main: string, endpoint: string, filter: string[]);
    public static endpoints(main: string);
  }
}

