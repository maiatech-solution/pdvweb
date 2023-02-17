import { BsArrowBarRight, BsFillArrowLeftCircleFill, BsFillGrid3X3GapFill, BsXCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { Desc } from "../components/Descricao/desc"
import { Footer } from "../components/Footer/footer"
import { Header } from "../components/Header/header"
import ModalPayment from "../components/ModalPayment/modalPayment"
import Modal from "../components/ModalSeach/modal"
import { TableList } from "../components/TableList/tableList"

export const Venda = () => {
  

  return (
    <div >
      <Header text="PDV" />

      <div className="container-venda">

        <div className="pesquisa-venda rounded-md flex justify-center items-center">
          <div className="w-[5%] flex justify-center">
            <Link to='/home'>
              <button >
                <BsFillArrowLeftCircleFill className="text-4xl bg-white text-cyan-500 hover:text-cyan-600 rounded-[50%]" />
              </button>
            </Link>

          </div>
          <div className=" w-[90%]  flex justify-center">
            <input type="text" placeholder="Pesquisar produto" className="bg-white w-full p-2 outline-none rounded-md" />

          </div>
          <Modal />
        </div>

        <Desc />

        <TableList />

        <div className="botao-venda rounded-md">
          <ModalPayment />
          <button className="border w-[25em] p-2 bg-red-800 hover:bg-red-900 rounded-sm text-white flex justify-center items-center gap-4" >
            <BsXCircleFill className="text-4xl bg-transparent" />
            Cancelar Venda
          </button>
        </div>


      </div>


      <Footer />
    </div>
  )
}