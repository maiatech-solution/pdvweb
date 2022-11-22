import * as C from './styled-container';
import { BsPersonCircle } from "react-icons/bs";


export const Container = () => {
    return (
        <C.Container>
            <C.H1>
                <p>Entre com sua conta</p>
            </C.H1>
            <C.Inputs>
                <C.Icons >
                    <BsPersonCircle />
                </C.Icons>
                <input name="login" id="login" type="text" placeholder='Login' />
                <input type="password" name="senha" id="senha" placeholder='Senha' />
                <C.Buttons>
                    <button>Login</button>
                    <button >Esqueci minha senha</button>
                </C.Buttons>
            </C.Inputs>
        </C.Container>
    )
}