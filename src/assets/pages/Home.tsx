import { Routes, Route } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Title } from "../components/Title/title"
import * as C from '../estilos/styled-login';

export const Home = () => {
    return (
        <C.Container>        
            <Title className={'my-24 text-white text-2xl md:text-5xl'} text={'Gerenciador de senhas'}></Title>

            <div className="grid grid-cols-2 gap-4">
                <div>Criar Senha</div>
                <div>Criar grupo</div>
                <div>Ver Senhas</div>
                <div>Ferramentas</div>
                
                
            </div> 

            <Footer />
        </C.Container>
    )
}