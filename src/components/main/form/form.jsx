import { useState } from "react";
import { useEffect } from "react";

export default function Form(){
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [remark, setRemark] = useState('');
    useEffect( ()=>{
        const fetchData = async ()=> {
            try{
                const res = await fetch('YOUR_API'); // Ваш API
                if (res.status !== 200){
                    throw new Error("Ошибка")
                }
                const data = await res.json();
                setEmail(data.email)
                setName(data.name)
                setPhone(data.phone)
                setRemark(data.remark)
            }
            catch(error){
                console.error(error);
            }
        };
        fetchData();
    },[]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log({email,name,phone,remark});
        // Функция, чтобы отправить данные на ваш сервер 
    }
    return(
        <div className="flex flex-col justify-center items-center text-center w-screen h-screen">
            <p className="text-4xl font-medium mb-6 max-sm:text-3xl">Забронируйте тур сейчас</p>
            <div className="w-[40%] flex flex-col text-center text-2xl max-sm:w-[70%]">
                <div className="flex max-w-[50vw] font-extralight mb-[74px] max-sm:text-base max-sm:max-w-[100vw]">
                    <p>Комиссия за тур составит 100 рублей. 
                        Тур можно забронировать на гибкие даты и с бесплатной отменой.</p>

                </div>

                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <input type="text" 
                    placeholder="Почта" 
                    className="placeholder:text-lg
                    bg-[#f0f0f0] focus:outline-none mb-5" 
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                    <hr className="mb-12 border-0 bg-gray-300 h-[0.5px]"/>
                    
                    <input type="text"
                     placeholder="Ваше имя" 
                     className="placeholder:text-lg
                    bg-[#f0f0f0] focus:outline-none mb-5"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                    <hr className="mb-12 border-0 bg-gray-300 h-[0.5px]" required/>

                    <input type="tel"
                     placeholder="Номер телефона" 
                     className="placeholder:text-lg 
                     bg-[#f0f0f0] focus:outline-none mb-5" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                    required
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}/>
                    <hr className="mb-12 border-0 bg-gray-300 h-[0.5px]"/>

                    <input type="text"
                     placeholder="Комментарий"
                      className="placeholder:text-lg 
                      bg-[#f0f0f0] focus:outline-none mb-5"
                    value={remark}
                    onChange={(e)=>setRemark(e.target.value)}/>
                    <hr className="mb-12 border-0 bg-gray-300 h-[0.5px]" required/>

                <div className="flex justify-center text-center">
                    <button className="bg-red-700 text-white w-[50%] text-base h-10 rounded-[30px] max-sm:w-[100%]
                    min-w-[165px]"
                    onClick={handleSubmit} type="submit">
                            <span className="py-[1px] px-11">Отправить</span>
                    </button>
                </div>
                </form>
            </div>
        </div>
    );
}