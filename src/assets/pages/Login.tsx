import {Footer} from '../components/Footer';
import * as C from '../estilos/styled-login';
import { BsPersonCircle,BsBoxArrowInRight } from "react-icons/bs";
import {Buttons} from '../components/button/buttons'
import { Link } from 'react-router-dom';
import { Title } from '../components/Title/title';

const Login = () => {
  return(
    <div >
      <C.Container>
            <Title className={'my-24 text-white text-2xl md:text-5xl bg-transparent'} text={'Entre com sua conta'}></Title> 
            
            <form className='flex flex-col gap-4 justify-center items-center w-9/12 lg:w-3/12 mb-9'>
                <BsPersonCircle className='text-7xl md:text-9xl text-white ' />
                <input 
                    className='p-3 outline-none w-full rounded-md bg-white'
                    placeholder='Login'
                    name='login'
                    id='login'
                    type='text'
                />
                <input 
                    className='p-3 outline-none w-full rounded-md bg-white' 
                    placeholder='Senha' 
                    name='senha' id='senha' 
                    type='password' 
                />
                <div className='flex flex-col gap-4 md:gap-8 md:flex-row justify-center text-center'>
                    <Link to={'/home'}>

                    <button type='submit'>
                        <BsBoxArrowInRight className='bg-green-800 h-10 p-2 md:p-2 hover:bg-green-900 border-solid border border-white text-white rounded-md mt-2 text-6xl' />
                    </button>
                    </Link>
                    
                     <Buttons 
                        text={'Esqueci minha senha'} 
                        className={'bg-red-new p-2 md:p-2 hover:bg-red-500 h-10 border-solid border border-white text-white rounded-md mt-2'} 
                    />
            
                </div>
            </form>
        
          <Footer />
        </C.Container>
    </div>
  );
}

export default Login;
