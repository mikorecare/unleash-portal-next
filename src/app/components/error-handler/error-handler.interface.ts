interface IErrorHandlerProps {
    signInErrorStatus: boolean;
    title: string,
    subtitle:  string
    statusCode?: number
}

export class ErrorHandlerProps implements IErrorHandlerProps {
    public signInErrorStatus: boolean = false;
    public title: string = "Default Error Title";
    public subtitle:  string = "";
    public statusCode?: number;
}