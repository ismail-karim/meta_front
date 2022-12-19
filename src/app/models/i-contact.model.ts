export interface IContact {
    firstname: string;
    email:string;
    subject: string;
    message: string;


    sendDatasForContact(): any;
}
