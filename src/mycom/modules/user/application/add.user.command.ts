export interface AddUserCommand {
    readonly userId: string;
    readonly emailAddress: string;
    readonly name: string;
    readonly firstLastName?: string;
    readonly secondLastName?: string;
    readonly language: string;
    readonly country: string;
    readonly city: string;
}



