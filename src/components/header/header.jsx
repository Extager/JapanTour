export default function Header(){
    return(
            <div className="w-[100vw] flex flex-col h-[100vh] justify-center text-center bg-cover bg-center items-center 
            bg-[url('/src/images/Header_Japan.jpg')]">
                    <p className="text-white pt-[10px] pb-5 text-xl ">Меридиан тур</p>
                    <p className="text-white pt-6 pb-6 text-7xl">«Пять древних столиц Японии»</p>
                    <button className="bg-[#b81a1a] text-white rounded-full px-6 py-3 h-12 w-[125px] text-center " >
                        <span>Готовы?</span>
                    </button>
            </div>
    );
}