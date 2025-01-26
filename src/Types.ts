export type IconType = 'users' | 'info' | 'home' | 'help' | 'contacts' | 'exit' | 'left' | 'generate' | 'search' | 'trash' | 'gear' | 'download';
export type UserRoles = 'RootAdmin' | 'ContentManager' | 'BussinesPartner'
export interface IRoles {
  id:string,
  role:UserRoles
}

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
  export interface IEditUser {
    user_id:string,
    login:string,
    name:string,
    surname:string,
    role:string,
    email:string,
    password?:string
  }

  export interface IPost {
      id: string
      author: any
      createDate: string
      createTime: string
      isPublished: boolean
      description: string
      images: string[]
    }
    
