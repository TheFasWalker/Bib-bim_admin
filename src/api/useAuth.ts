import { ref } from "vue"

const loading = ref(false)
const url = import.meta.env.VITE_API_DB_URL
const error = ref('')
const userData = ref(null)

// export default function(){
//     const auth = async (email:string, password:string)=>{
//         loading.value = true
//         try{
//             const res = await fetch(url + '/admin_auth',{
//                 method:'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'login':email,
//                     'password':password
//                   }
//             })
//             if (res.ok) {
//               const userData = await res.json();
//               console.log(userData)
//               router.push({ name: 'home' })

//           } else {
//             const errorData = await res.json()
//             alert('error')
//             error.value = errorData.message;
//           }
//         }catch(e:any){
//             loading.value = false
//             error.value = e.message;
//             console.log(e)
//         }finally{
//             loading.value = false
//         }
//     }
//     return{ loading,error, auth};
// }

export default function () {
    const auth = (email: string, password: string) => {
        loading.value = true
        setTimeout(() => {
            loading.value = false

        }, 1000)
    }
    return{loading,error, auth}
}