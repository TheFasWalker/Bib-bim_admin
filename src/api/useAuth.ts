import { ref } from "vue"

const loading = ref(false)
const url = import.meta.env.VITE_API_DB_URL
const error = ref('')
const userData = ref(null)

export default function(){
    const auth = async (email:string, password:string)=>{
        loading.value = true
        try{
            const res = await fetch(url + `/admin_auth?login=${email}&password=${password}`,{
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                  }
            })
            if (res.ok) {
               userData.value = await res.json();


          } else {
            const errorData = await res.json()
            alert('error')
            error.value = errorData.message;
          }
        }catch(e:any){
            loading.value = false
            error.value = e.message;
            console.log(e)
            console.log('catch')
        }finally{
            loading.value = false
        }
    }
    return{ loading,error, auth,userData};
}

// export default function () {
//     const auth = (email: string, password: string) => {
//         loading.value = true
//         setTimeout(() => {
//             loading.value = false

//         }, 1000)
//     }
//     return{loading,error, auth}
// }