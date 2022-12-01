import {Footer} from '../components/Footer';
import * as C from '../estilos/styled-login';
import { BsPersonCircle } from "react-icons/bs";
import {Inputs} from '../components/inputs/inputs';
import {Buttons} from '../components/button/buttons'
import { Link } from 'react-router-dom';
import { Title } from '../components/Title/title';

const Login = () => {
  return(
    <div >
      <C.Container>
            <Title className={'my-24 text-white text-2xl md:text-5xl'} text={'Entre com sua conta'}></Title> 
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
                    <Link to={'/home'}>
                        <Buttons  
                            text={'Login'} 
                            className={'bg-green-800 p-1 md:p-2 hover:bg-green-900 border-solid border border-white text-white rounded-md mt-2'} 
                        />
                    </Link>
                    
                        <Buttons 
                            text={'Esqueci minha senha'} 
                            className={'bg-red-new p-2 hover:bg-red-500 border-solid border border-white text-white rounded-md mt-2'} 
                        />
                    
                    
                </div>
            </div>
        
        </C.Container>
      <Footer />
    </div>
  );
}

export default Login;
