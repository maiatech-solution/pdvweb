import { Cards } from "../components/Cards/cards";
import { BsCashCoin, BsLayoutWtf, BsGraphUp, BsGear } from "react-icons/bs";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header/header";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div >
            <Header text="Nome da Empresa" className='text-4xl text-black'/>
            
            <div className="container-home">

                <div className="grid-container-home">
                <Link to='/venda'>
                    <button className="botao-home bg-green-700 hover:bg-green-800">
                        <Cards className={'text-white'} text={"Vendas"} ></Cards>
                        <BsCashCoin className="bg-transparent text-white text-5xl" />
                    </button>
                </Link>
                <Link to='/estoque'>
                    <button className="botao-home bg-cyan-600 hover:bg-cyan-700">
                        <Cards className={'text-white'} text={"Estoque"} ></Cards>
                        <BsLayoutWtf className="bg-transparent text-white text-5xl" />
                    </button>
                </Link>
                    <button className="botao-home bg-teal-600 hover:bg-teal-700">
                        <Cards className={'text-white'} text={"Gerenciador"} ></Cards>
                        <BsGear className="bg-transparent text-white text-5xl" />
                    </button>
                    <button className="botao-home  bg-emerald-800 hover:bg-emerald-900">
                        <Cards className={'text-white'} text={"Financeiro"} ></Cards>
                        <BsGraphUp className="bg-transparent text-white text-5xl" />
                    </button>
                    
                </div>

            </div>
            
           <Footer />
        </div>
    )
}