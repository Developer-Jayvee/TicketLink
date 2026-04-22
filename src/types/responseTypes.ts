export type RoleTypes = "BASIC" | "ADMIN";

export interface UserInterface {
    first_name : string;
    last_name : string;
    age : number;
    role:RoleTypes;
    password : string;
    email : string;
    username: string;
}
export interface LoginResponseInterface {
    user: UserInterface;
    access: string;
    refresh: string;
}