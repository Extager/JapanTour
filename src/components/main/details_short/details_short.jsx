import Calendar from '../../../images/Calendar.svg';
import City from '../../../images/City.svg';
import Wallet from '../../../images/Wallet.svg';

export default function DS(){
    return(
        <div className="w-[100vw] flex h-[50vh] justify-center items-center max-sm:flex-col max-sm:h-screen">
            <div className="text-center flex flex-col items-center w-[360px] text-pretty max-sm:text-balance max-sm:pb-5 h-full mt-5">
                <img src={Calendar} alt="Image Error" className='w-[100px] h-[100px] mb-[35px] '/>
                <p className='text-2xl mt-3 mb-[25px]'>21 день</p>
                <p className='text-lg sm:text-2xl font-light'>На поездах и автобусах по самым красивым местам Японии</p>
            </div>
            <div className='text-center flex flex-col items-center w-[360px] text-pretty max-sm:text-balance max-sm:pb-5 mx-5 h-full mt-5' >
                <img src={City} alt="Image Error" className='w-[100px] h-[100px] mb-[35px]'  />
                <p className='text-2xl mt-3 mb-[25px]'>8 городов</p>
                <p className='text-lg sm:text-2xl font-light'>Отправляемся из Осаки. Остановимся в Киото, Наре, Ёсино,Канадзаве, Мацумато и Токио.</p>
            </div>
            <div className='flex text-center flex-col items-center w-[360px] text-pretty max-sm:text-balance max-sm:pb-5 h-full mt-5'>
                <img src={Wallet} alt="Image Error" className='w-[100px] h-[100px] mb-[35px]' />
                <p className='text-2xl mt-3 mb-[25px]'>50000 рублей</p>
                <p className='text-lg sm:text-2xl font-light'>В цену включены трансферы, размещение в гостиницах и виза</p>
            </div>
        </div>
    );
}