export default function Advices(){
    return(
        <div className="w-screen h-[50vh] flex max-sm:flex-col justify-center text-xl font-light max-sm:h-auto max-sm:mb-20">
            <div className="flex max-w-[560px] pt-2 pb-[5px] mx-10 max-sm:text-[20px] max-sm:max-w-[100vw]
            max-sm:mb-5 text-pretty max-sm:text-balance">
                <p>Дополнительные расходы могут быть связаны с посещением музеев, кафе и магазинов. 
                    В некоторых отелях могут быть платные услуги прачечной и другие. 
                    Туры на речных трамваях и сегвеях включены в стоимость.</p>
            </div>
            <div className="flex max-w-[560px] pt-2 pb-[5px] mx-10 max-sm:text-[20px] max-sm:max-w-[100vw] text-pretty max-sm:text-balance">
                <p>Мы рекомендуем взять с собой дополнительную сумму наличных на карманные расходы, например, на снеки или магазины. 
                    В Японии принято оставлять чаевые в кафе – до 10%</p>
            </div>
        </div>
    );
}