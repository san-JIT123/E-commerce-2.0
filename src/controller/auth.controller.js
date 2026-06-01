import { registerService } from "../service/auth.service.js"

 export const registerController =async (req,res)=>{

    const data = await registerService()
}

