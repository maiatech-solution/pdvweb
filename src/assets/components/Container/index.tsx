import * as C from './styled-container';
import { BsPersonCircle } from "react-icons/bs";
import {Buttons} from '../button/buttons'
import {Inputs} from '../inputs/inputs'


export const Container = () => {
    return (
        <C.Container>
            <div className='my-24 text-white text-2xl md:text-5xl'>
                <p>Entre com sua conta</p>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center w-9/12 lg:w-3/12'>
                <BsPersonCircle className='text-7xl md:text-9xl text-white ' />
                <Inputs 
                    className={'p-3 outline-none w-full rounded-md bg-white'} 
                    placeholder={'Login'} 
                    name={'login'} 
                    id={'login'} 
                    type={'text'} 
                />
                <Inputs 
                    className={'p-3 outline-none w-full rounded-md bg-white'} 
                    placeholder={'Senha'} 
                    name={'senha'} id={'senha'} 
                    type={'password'} 
                />
                <div className='flex flex-col gap-3 md:flex-row'>
                    <Buttons  
                        text={'Login'} 
                        className={'bg-green-800 p-1 md:p-2 hover:bg-green-900 border-solid border border-white text-white rounded-md mt-2'} 
                    />
                    <Buttons 
                        text={'Esqueci minha senha'} 
                        className={'bg-red-new p-2 hover:bg-red-500 border-solid border border-white text-white rounded-md mt-2'} 
                    />
                </div>
            </div>
        </C.Container>
    )
}