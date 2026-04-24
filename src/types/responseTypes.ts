export type RoleTypes = "BASIC" | "ADMIN";

export interface UserInterface {
    first_name : string;
    last_name : string;
    age : number;
    role:RoleTypes;
    email : string;
    username: string;
}
export interface UserLoginInterface {
    id ?: string;
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

export interface GroupChatResponseInterface {
    id ?: number;
    title : string;
    description ?: string;
}