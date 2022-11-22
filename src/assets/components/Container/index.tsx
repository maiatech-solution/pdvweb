import * as C from './styled-container';
import { BsPersonCircle } from "react-icons/bs";


export const Container = () => {
    return (
        <C.Container>
            <div className='my-24 text-white text-5xl'>
                <p>Entre com sua conta</p>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center w-1/4'>
                <BsPersonCircle className='text-9xl text-white ' />
                <input name="login" id="login" type="text" placeholder='Login' className='p-3 outline-none w-full rounded-md border-none' />
                <input type="password" name="senha" id="senha" placeholder='Senha' className='p-3 outline-none w-full rounded-md border-none' />
                <div className='flex gap-8'>
                    <button className='bg-blue-800 p-3 hover:bg-blue-900 border-solid border border-white text-white rounded-md mt-2' >Login</button>
                    <button className='bg-red-500 p-3 hover:bg-red-600 border-solid border border-white text-white rounded-md mt-2'>Esqueci minha senha</button>
                </div>
            </div>
        </C.Container>
    )
}