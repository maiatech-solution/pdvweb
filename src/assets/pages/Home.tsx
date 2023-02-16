import { Cards } from "../components/Cards/cards";
import { BsCashCoin, BsLayoutWtf, BsGraphUp, BsGear } from "react-icons/bs";
import { Modal } from '../components/Modal/modal'
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header/header";

export const Home = () => {
    return (
        <div >
            <Header text="Nome da empresa" />
            
            <div className="container-home">

                <div className="grid-container-home">
                    <button className="botao-home bg-green-700 hover:bg-green-800">
                        <Cards className={'text-white'} text={"Vendas"} ></Cards>
                        <BsCashCoin className="bg-transparent text-white text-5xl" />
                    </button>
                    <button className="botao-home bg-emerald-800 hover:bg-emerald-900">
                        <Cards className={'text-white'} text={"Estoque"} ></Cards>
                        <BsLayoutWtf className="bg-transparent text-white text-5xl" />
                    </button>
                    <button className="botao-home bg-teal-600 hover:bg-teal-700">
                        <Cards className={'text-white'} text={"Gerenciador"} ></Cards>
                        <BsGear className="bg-transparent text-white text-5xl" />
                    </button>
                    <button className="botao-home bg-cyan-600 hover:bg-cyan-700">
                        <Cards className={'text-white'} text={"Financeiro"} ></Cards>
                        <BsGraphUp className="bg-transparent text-white text-5xl" />
                    </button>
                    
                </div>

            </div>
            
           <Footer />
        </div>
    )
}