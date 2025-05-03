interface IErrorHandlerProps {
    signInErrorStatus: boolean;
    title: string,
    subtitle:  string
}

export class ErrorHandlerProps implements IErrorHandlerProps {
    public signInErrorStatus: boolean = false;
    public title: string = "Default Error Title";
    public subtitle:  string = "";
}