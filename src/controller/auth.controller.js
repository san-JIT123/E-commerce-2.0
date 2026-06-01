import { registerService } from "../service/auth.service.js"

 export const registerController =async ()=>{

    const data = await registerService()
}

