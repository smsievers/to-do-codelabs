export class NewUser {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    password_confirmation: string;

    constructor(value: any) {
        this.first_name = value.firstName;
        this.last_name = value.lastName;
        this.email = value.email;
        this.username = value.userName;
        this.password = value.password;
        this.password_confirmation = value.passwordConfirmation;
    }
}