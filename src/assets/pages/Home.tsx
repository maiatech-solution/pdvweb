import { Cards } from "../components/Cards/cards";
import { BsCashCoin, BsLayoutWtf, BsGraphUp, BsGear } from "react-icons/bs";
import { Modal } from '../components/Modal/modal'
import { Footer } from "../components/Footer/footer";

export const Home = () => {
    return (
        <div >
            <header className="h-[10vh] items-center flex justify-center">
                <h2 className='text-emerald-800 text-2xl md:text-5xl text-center'>Nome da Empresa</h2>
            </header>
            
            <div className="flex align-center justify-center xl:mb-0 mb-12 mt-8 xl:mt-0 md:h-[85vh]">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-auto">
                    <button className="bg-green-700 hover:bg-green-800 p-8 rounded-lg border border-solid border-white w-60 h-30  flex flex-col items-center justify-center gap-4">
                        <Cards className={'text-white'} text={"Vendas"} ></Cards>
                        <BsCashCoin className="bg-transparent text-white text-5xl" />
                    </button>
                    <button className="bg-emerald-800 hover:bg-emerald-900 p-8 rounded-lg border border-solid border-white w-60 h-30  flex flex-col items-center justify-center gap-4">
                        <Cards className={'text-white'} text={"Estoque"} ></Cards>
                        <BsLayoutWtf className="bg-transparent text-white text-5xl" />
                    </button>
                    <button className="bg-teal-600 hover:bg-teal-700 p-8 rounded-lg border border-solid border-white w-60 h-30  flex flex-col items-center justify-center gap-4">
                        <Cards className={'text-white'} text={"Gerenciador"} ></Cards>
                        <BsGear className="bg-transparent text-white text-5xl" />
                    </button>
                    <button className="bg-cyan-600 hover:bg-cyan-700 p-8 rounded-lg border border-solid border-white w-60 h-30  flex flex-col items-center justify-center gap-4">
                        <Cards className={'text-white'} text={"Financeiro"} ></Cards>
                        <BsGraphUp className="bg-transparent text-white text-5xl" />
                    </button>
                    
                </div>

            </div>
            
           <Footer />
        </div>
    )
}