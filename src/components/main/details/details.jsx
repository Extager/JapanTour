import Bed from '../../../images/Bed.svg';
import Family from '../../../images/Family.svg';
import Wallet from '../../../images/Wallet.svg';

export default function Details(){
    return(
        <div className="w-[100vw] flex justify-center flex-col items-center pt-[135px] pb-[105px] " >
            <p className='mb-[105px] text-4xl font-medium max-sm:text-5xl max-sm:pb-5'>Детали тура</p>
            <div className='flex justify-center w-[100%] h-[100%] max-sm:flex-col'>
                <div className="flex flex-col text-center items-center mx-5 text-pretty max-w-[360px]
                max-sm:max-w-screen-sm max-sm:mb-10">
                    <img src={Bed} alt="Image Error" className='w-[100px] h-[100px]' />
                    <p className='text-2xl font-medium'>Номера на 1 или 2</p>
                    <p className='font-thin text-base'>Мы останавливаемся в отелях с 3 и 4 звездами. Завтрак включен.</p>
                </div>
                <div className="flex flex-col text-center items-center mx-5 text-pretty max-w-[360px] 
                max-sm:max-w-screen-sm max-sm:mb-10">
                    <img src={Family} alt="Image Error" className='w-[100px] h-[100px]' />
                    <p className='text-2xl font-medium'>Возраст: 16 – 45</p>
                    <p className='font-thin text-base'>Наш тур подходит любому возрасту: и юным, и опытным путешественникам.</p>
                </div>
                <div className="flex flex-col text-center items-center mx-5 text-pretty max-w-[360px] 
                max-sm:max-w-screen-sm">
                    <img src={Wallet} alt="Image error" className='w-[100px] h-[100px]'/>
                    <p className='text-2xl font-medium'>Бесплатная отмена</p>
                    <p className='font-thin text-base'>Забронируйте тур и отмените бесплатно. Бронь будет нельзя отменить начиная с двух недель до поездки.</p>
                </div>
            </div>
        </div>
    );
}