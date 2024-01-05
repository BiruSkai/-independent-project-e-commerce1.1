import {API_ENDPOINT} from ".";

export const signInData = async(email, password) => {
        try{
                const res = await fetch(`${API_ENDPOINT}/login`, {
                        method: "POST",
                        body: JSON.stringify({email, password}),
                        headers: {"Content-Type": "application/json"}
                });
                console.log(res)
                return res;
        }catch(error){
                return error;
        }
        
}
