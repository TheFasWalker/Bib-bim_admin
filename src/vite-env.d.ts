interface ImportMetaEnv {
    readonly VITE_ADMIN_ROLE_CODE: string
    readonly VITE_MANAGER_ROLE_CODE: string
    readonly VITE_PARTNER_ROLE_CODE: string 
    readonly VITE_API_DB_URL: string  
    readonly VITE_API_PHOTOS_URL: string
    readonly VITE_ROOT_ADMIN_LOGIN?: string
    readonly VITE_ROOT_AMIN_PASSWORD?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
  }