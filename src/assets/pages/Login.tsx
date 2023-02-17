

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
      <div className="card-login " >

        <div className="header-login">
          <h2 className='title-login'>Login</h2>
          <h5 className=" subtitle-login">Entre com suas credenciais</h5>
        </div>

        <div className="logo-login">
          <img className="img-login" src={LogoEmpresa} alt="LogoEmpresa" />
        </div>

        <form onSubmit={handleSubmit((handleCreateUser))} className='form-login '>
          <div className="form-container-login">

            <input
              className='inputs-login'
              placeholder='Digite seu login'
              //@ts-ignore
              name='login'
              id='login'
              type='text'
              {...register('login')}
            />

            {errors.login && <span className='errors-login'>{errors.login.message}</span>}

            <input
              className='inputs-login'
              placeholder='Digite sua senha'
              //@ts-ignore
              name='pass'
              id='pass'
              type='password'
              {...register('pass')}
            />
            {errors.pass && <span className='errors-login'>{errors.pass.message}</span>}
          </div>

          <div className='botao-container-login'>

            <button type='submit' className="botao-white-login">
              Login
            </button>

            <button className="botao-red-login ">
              Esqueci minha senha
            </button>

          </div>

          <span className="footer-card-login">Sistema PDV Web</span>

        </form>

      </div>
    </div>
  );
}

export default Login;
