export default function Header(){
    return(
        <>
            <div className="w-screen flex flex-col h-screen justify-center text-center items-center 
                 bg-black">
                    <div className="absolute inset-0 bg-[url('/src/images/Header_Japan.jpg')] bg-cover bg-center opacity-50 z-0"></div>

                    <div className="relative z-10 text-pretty max-sm:text-balance">
                        <p className="text-white pt-[10px] pb-5 text-xl ">МЕРИДИАН ТУР</p>
                        <p className="text-white pt-6 pb-6 text-6xl max-sm:text-5xl max-sm:pb-8 font-medium">Пять древних столиц Японии</p>
                        <button className="bg-[#b81a1a] text-white rounded-full px-6 py-3 h-12 w-[125px] text-center " >
                            <span>Готовы?</span>
                        </button>

                    </div>
            </div>

        </>
    );
}