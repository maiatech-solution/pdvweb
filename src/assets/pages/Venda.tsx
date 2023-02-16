import { BsArrowBarRight, BsPlusLg, BsXCircleFill } from "react-icons/bs"
import { Footer } from "../components/Footer/footer"
import { Header } from "../components/Header/header"
import { TableList } from "../components/TaableList/tableList"
import LogoEmpresa from '../imgs/maiatech.png'

export const Venda = () => {
  return (
    <div >
      <Header text="PDV" />

      <div className="container-venda">

        <div className="pesquisa-venda">Pesquisa</div>

        <div className="desc-venda">
          <div className="border w-[150px]">
            <div className="w-[100%]">
              <img src={LogoEmpresa} alt="" />
            </div>
          </div>
          <div className="border w-[35em] grid grid-cols-2 gap-4">
            <button className="w-[100%] border">1</button>
            <button className="w-[100%] border">1</button>
            <button className="w-[100%] border">1</button>
            <button className="w-[100%] border">1</button>
          </div>
          <div className=" flex items-center justify-center w-[25em]">
            <button className="w-[30%] h-[10em] border">
              <BsPlusLg text-9xl bg-transparent/>
            </button>
          </div>
        </div>

        <TableList />

        <div className="botao-venda ">
          <button className="border w-[25em] p-2 bg-emerald-800 hover:bg-emerald-900 rounded-sm text-white flex justify-center items-center gap-4">
            <BsArrowBarRight className="text-4xl bg-transparent" />
            Prosseguir</button>
          <button className="border w-[25em] p-2 bg-red-800 hover:bg-red-900 rounded-sm text-white flex justify-center items-center gap-4">
            <BsXCircleFill className="text-4xl bg-transparent" />
            Cancelar Venda
          </button>
        </div>


      </div>


      <Footer />
    </div>
  )
}