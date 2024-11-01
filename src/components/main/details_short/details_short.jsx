import Calendar from '../../../images/Calendar.svg';
import City from '../../../images/City.svg';
import Wallet from '../../../images/Wallet.svg';

export default function DS(){
    return(
        <div className="w-full flex h-[50vh] justify-center items-center">
            <div className="text-center flex mx-5 flex-col items-center w-[360px]">
                <img src={Calendar} alt="Image Error" className='w-[100px] h-[100px] mx-32 mb-[35px] '/>
                <p className='text-2xl mt-[18] mb-[25px]'>21 день</p>
                <p className='text-lg'>На поездах и автобусах по самым красивым местам Японии</p>
            </div>
            <div className='text-center flex mx-5 flex-col items-center w-[360px]'>
                <img src={City} alt="Image Error" className='w-[100px] h-[100px] mx-32 mb-[35px]'  />
                <p className='text-2xl mt-[18] mb-[25px]'>8 городов</p>
                <p className='text-lg'>Отправляемся из Осаки. Остановимся в Киото, Осаке, Наре, Ёсино,Канадзаве, Мацумато и Токио</p>
            </div>
            <div className='flex text-center mx-5 flex-col items-center w-[360px]'>
                <img src={Wallet} alt="Image Error" className='w-[100px] h-[100px] mx-32 mb-[35px]' />
                <p className='text-2xl mt-[18] mb-[25px]'>50000 рублей</p>
                <p className='text-lg'>В цену включены трансферы, размещение в гостиницах и виза</p>
            </div>
        </div>
    );
}