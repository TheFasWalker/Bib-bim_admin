import { EnumType } from "typescript";

export type IconType = 'users' | 'info' | 'home' | 'help' | 'contacts' | 'exit' | 'left' | 'generate' | 'search' | 'trash' | 'gear';
export type UserRoles = 'RootAdmin' | 'ContentManager' | 'BussinesPartner'
export interface Iuser {
    id: string
    name: string
    surname: string
    login: string
    email: string
    role: Role
  }

  export interface Role {
    id: string
    role: UserRoles
  }
  export interface ICreateUser {
    login:string,
    name:string,
    surname:string,
    role:string,
    email:string,
    password:string
  }