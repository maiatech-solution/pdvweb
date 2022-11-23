import * as C from './styled-container';
import { BsPersonCircle } from "react-icons/bs";
import {Buttons} from '../button/buttons'


export const Container = () => {
    return (
        <C.Container>
            <div className='my-24 text-white text-2xl md:text-5xl'>
                <p>Entre com sua conta</p>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center w-9/12 lg:w-3/12'>
                <BsPersonCircle className='text-7xl md:text-9xl text-white ' />
                <input name="login" id="login" type="text" placeholder='Login' className='p-3 outline-none w-full rounded-md bg-white' />
                <input type="password" name="senha" id="senha" placeholder='Senha' className='p-3 outline-none w-full rounded-md bg-white' />
                <div className='flex flex-col gap-3 md:flex-row'>
                    {/*<Buttons text={'Teste'} className={'text-white'} />*/}
                    <button className='bg-green-800 p-1 md:p-2 hover:bg-green-900 border-solid border border-white text-white rounded-md mt-2' >Login</button>
                    <button className='bg-red-new p-2 hover:bg-red-500 border-solid border border-white text-white rounded-md mt-2'>Esqueci minha senha</button>
                </div>
            </div>
        </C.Container>
    )
}