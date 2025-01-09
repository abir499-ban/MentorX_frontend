import { base_url } from "../constants/domain_credentials";
import { checkInvalidResponse } from "./InvalidResponseChecker";

async function getUser(token){
    try{
        const res = await fetch(`${base_url}/users/token`, {
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                token : token
            })
        })
        const response = await res.json();
        if(checkInvalidResponse(response))
            return undefined;

        return response
    }catch(error){
        console.log(error);
        return undefined
    }
}

export default getUser