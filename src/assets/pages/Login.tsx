

import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form';
import LogoEmpresa from '../imgs/maiatech.png'
import { useState } from 'react';


const Login = () => {

  type CreateUserData = {
    login: string,
    pass: string,
  }


  const createUserFormSchema = yup.object().shape({
    login: yup.string().required('E-mail obrigatório').email('Insira um e-mail válido'),
    pass: yup.string().required('Senha obrigatória').min(6, 'Mínimo de 6 caracteres')
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserData> = async () => {
    location.href = "/home"
  }

  console.log(`Erros: errors`)

  return (
    <div className=" container-login">
      <div className=" card-login " >

        <div className="header-login">
          <h2 className='title-login'>Login</h2>
          <h5 className=" subtitle-login">Entre com suas credenciais</h5>
        </div>

        <div className=" logo-login">
          <img className="img-login" src={LogoEmpresa} alt="LogoEmpresa" />
        </div>

        <form onSubmit={handleSubmit((handleCreateUser))} className='bg-emerald-200 h-[60%] w-full m-auto flex flex-col rounded-b-[2em]'>
          <div className="bg-emerald-200 mt-4 justify-center items-center gap-4 flex flex-col h-[40%]">

            <input
              className='p-3 outline-none w-4/5 rounded-md bg-white'
              placeholder='Digite seu login'
              //@ts-ignore
              name='login'
              id='login'
              type='text'
              {...register('login')}
            />

            {errors.login && <span className='text-orange-500 bg-transparent'>{errors.login.message}</span>}

            <input
              className='p-3 outline-none w-4/5 rounded-md bg-white'
              placeholder='Digite sua senha'
              //@ts-ignore
              name='pass'
              id='pass'
              type='password'
              {...register('pass')}
            />
            {errors.pass && <span className='text-orange-500 bg-transparent'>{errors.pass.message}</span>}
          </div>

          <div className='flex flex-col gap-4 md:flex-col justify-center m-auto text-center w-3/6 bg-emerald-200'>

            <button type='submit' className="p-2 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white">
              Login
            </button>

            <button className="p-2 rounded-md bg-rose-700 hover:bg-rose-800 text-white">
              Esqueci minha senha
            </button>

          </div>

          <span className="bg-emerald-400 text-center text-white text-xs rounded-b-[2em]">Sistema PDV Web</span>

        </form>

      </div>
    </div>
  );
}

export default Login;
