import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { post } from "@/utils/axios.utils";
import { useNavigate } from "react-router-dom";
import cookies from 'js-cookie';


const Login = ()=>{

    const navigate = useNavigate();

    const [username, setUsername] = useState({ data: "", error: "" });
    const [password, setPassword] = useState({ data: "", error: "" });
    const [loadingState, setLoadingState] = useState<boolean>(false);

    const onLogin = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoadingState(true);
       try {
            
            setUsername((prev) => ({ ...prev, error: "" }));
            setPassword((prev) => ({ ...prev, error: "" }));

            const usernameValue: string = username.data;
            const passwordValue: string = password.data;

            if (!usernameValue || !passwordValue) {
                if (!usernameValue) setUsername((prev) => ({ ...prev, error: "Username is required" }));
                if (!passwordValue) setPassword((prev) => ({ ...prev, error: "Password is required" }));
                setLoadingState(false);
                return;
            }

            const result:any = await post("/user/login",{username:usernameValue,password:passwordValue});
            if(result.success){
                if(result.token){
                    cookies.set('jwt', result.token,{expires:1/24})
                    navigate("/dashboard");
                }
            }
            else{
                if(result.field == "username"){
                    setUsername((prev)=>({...prev,error:result.message}))
                }
                if(result.field == "password"){
                    setPassword((prev)=>({...prev,error:result.message}))
                }
            }
        } catch (error:any) {
            const { success, field, message } = error.response.data;
            if(!success){
                if(field == "username"){
                    setUsername((prev)=>({...prev,error:message}))
                }

                if(field == "password"){
                    setPassword((prev)=>({...prev,error: message}))
                }
            }
        }
        setLoadingState(false);

    }

    return(
        <>
            <section className="h-screen  grid place-content-center" >
                <form onSubmit={onLogin} className="p-5 bg-white" >
                    <h1 className="text-center font-semibold mb-3 text-[20px]" >ADMINISTRATOR</h1>
                    <div className="mb-3" >
                        <Input className="" disabled={loadingState} placeholder="Username"  value={username.data} onChange={(e)=>setUsername((prev)=>({...prev,data:e.target.value}))}  />
                        { username.error !="" && (
                            <small className="text-red-400" >{username.error}</small>
                        ) }
                    </div>
                    <div className="mb-3" >
                        <Input className="" disabled={loadingState} type="password" placeholder="Password"  value={password.data} onChange={(e)=>setPassword((prev)=>({...prev,data:e.target.value}))}  />
                        { password.error !="" && (
                            <small className="text-red-400" >{password.error}</small>
                        ) }
                    </div>
                    <Button type="submit" disabled={loadingState} className="p-4 bg-blue-500 w-full transition-all duration-500 hover:bg-blue-400" >
                        <CiLogin />
                        <span>LOGIN</span>
                    </Button>
                </form>
            </section>
        </>
    )

}

export default Login;