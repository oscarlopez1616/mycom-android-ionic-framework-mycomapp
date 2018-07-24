export interface CommandHandler {
    handle(command: any): any;
}