import { Cards } from "../components/Cards/cards";
import { Footer } from "../components/Footer"
import { Title } from "../components/Title/title"
import * as C from '../estilos/styled-login';
import { BsFillPlusSquareFill,BsFillPeopleFill,BsFillKeyFill,BsTools } from "react-icons/bs";
import {Modal} from '../components/Modal/modal'

export const Home = () => {
    return (
        <C.Container>        
            <Title className={'my-24 text-white text-2xl md:text-5xl'} text={'Gerenciador de senhas'}></Title>  

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-9">
                <Modal />
                <button className="bg-yellow-700 hover:bg-yellow-600 p-8 rounded-lg border border-solid border-white w-60 h-30  flex flex-col items-center justify-center gap-4">
                    <Cards className={'text-white'} text={"Gerenciar grupos"} ></Cards>
                    <BsFillPeopleFill className="bg-transparent text-white text-5xl" />
                </button>
                <button className="bg-green-700 hover:bg-green-600 p-8 rounded-lg border border-solid border-white w-60 h-30  flex flex-col items-center justify-center gap-4">
                    <Cards className={'text-white'} text={"Ver senhas"} ></Cards>
                    <BsFillKeyFill className="bg-transparent text-white text-6xl"/>
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 p-8 rounded-lg border border-solid border-white w-60 h-30  flex flex-col items-center justify-center gap-4">
                    <Cards className={'text-white'} text={"Ferramentas"} ></Cards>
                    <BsTools className="bg-transparent text-white text-4xl" />
                </button>
            </div> 

            <Footer />
        </C.Container>
    )
}