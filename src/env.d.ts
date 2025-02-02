interface ImportMetaEnv {
    readonly VITE_ADMIN_ROLE_CODE: string
    readonly VITE_MANAGER_ROLE_CODE: string
    readonly VITE_PARTNER_ROLE_CODE: string 
    readonly VITE_API_DB_URL: string  
    readonly VITE_API_PHOTOS_URL: string
    readonly VITE_ROOT_ADMIN_LOGIN?: string
    readonly VITE_ROOT_AMIN_PASSWORD?: string
    readonly VITE_SHOW_TOAST_TIME?:number
    readonly VITE_POST_TO_SHOW_AT_ONCE: number
    readonly VITE_FILE_SIZE_LIMIT:number
}

interface ImportMeta {
    readonly env: ImportMetaEnv
  }