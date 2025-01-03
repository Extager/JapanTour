export default function Price(){
    return(
        <div className="flex text-center flex-col w-screen h-[60vh] pt-[135px] pb-[175px] max-sm:h-[80vh] text-pretty max-sm:text-balance">
            <p className="pt-[10px] pb-10 font-semibold">ЦЕНА</p>
            <p className="pt-2 pb-[3px] font-bold text-6xl max-sm:text-5xl ">Стоимость: 50000 рублей</p>
            <p className="pt-10 text-2xl font-thin max-sm:text-xl">Включены трансферы, размещение в гостиницах и виза.</p>
        </div>
    );
}