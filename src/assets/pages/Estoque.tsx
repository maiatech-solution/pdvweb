import { BsFillPencilFill, BsXCircleFill } from "react-icons/bs"
import { Produtos } from "../../date/produtos"
import { Footer } from "../components/Footer/footer"
import { Header } from "../components/Header/header"
import { TableList } from "../components/TableList/tableList"
import LogoEmpresa from '../imgs/maiatech.png'

export const Estoque = () => {


  return (
    <div >
      <Header text="Estoque" />
      <main className="h-[85vh] w-[70%] m-auto">

        <div className="h-[30%] border-2 rounded-md bg-cyan-700 flex mb-4">
          <div className="w-[30%] h-[100%] flex justify-center bg-transparent items-center">
            <div className="w-[200px] border">
              <img src={LogoEmpresa} alt="" />
            </div>
          </div>
          <div className="w-[70%] h-[100%] flex flex-col justify-around bg-transparent items-center">
            <div className=" w-[90%] flex gap-4 bg-transparent" >
              <div className="w-[25%] flex flex-col">
                <label htmlFor="codProd" className="bg-gray-600 w-[100%] border pl-2 text-gray-100 ">Cód. Produto: </label>
                <input type="number" name="codProd" id="codProd" className="bg-white outline-none pl-2" />
              </div>
              <div className="w-[75%] flex flex-col ">
                <label htmlFor="descProd" className="bg-gray-600 w-[100%] border pl-2 text-gray-100 ">Descrição do produto: </label>
                <input type="text" name="descProd" id="descProd" className=" bg-white outline-none pl-2" />
              </div>
            </div>
            <div className="w-[90%] flex justify-between bg-transparent">
              <div className=" p-2 w-[30%] flex flex-col bg-transparent">
                <label htmlFor="catProd" className="bg-gray-600 w-[100%] border pl-2 text-gray-100 ">Categoria: </label>
                <select name="catProd" id="catProd" className=" outline-none bg-white">
                  <option value="">Selecione...</option>
                  <option value="enlatado">Enlatados</option>
                  <option value="frios">Frios...</option>
                </select>
              </div>
              <div className="w-[30%] p-2 flex flex-col bg-transparent ">
                <label htmlFor="unidProd" className="bg-gray-600 border w-[100%] pl-2 text-gray-100 ">Unidade: </label>
                <select name="unidProd" id="unidProd" className="outline-none bg-white">
                  <option value="">Selecione...</option>
                  <option value="unidade">UN</option>
                  <option value="metro">M</option>
                  <option value="centimetro">CM</option>
                  <option value="litro">L</option>
                  <option value="pacote">PCT</option>
                </select>
              </div>
              <div className="w-[30%] p-2 flex flex-col bg-transparent ">
                <label htmlFor="precoProd" className="bg-gray-600 border w-[100%] pl-2 text-gray-100">Preço: </label>
                <input type="number" name="precoProd" id="precoProd" className="bg-white outline-none pl-2" />
              </div>
            </div>
            <button className="text-white bg-gray-600 border hover:bg-gray-700 w-[90%] p-2">Salvar</button>
          </div>

        </div>

        
            
              <div className="w-[100%] p-2 h-[10%] gap-2 m-auto mb-4 border flex items-center justify-center bg-transparent">
                <div className="w-[50%]">
                  <input type="text" placeholder="Pesquisar produto" className="bg-white w-[100%] outline-none p-2" />
                </div>

                <div className=" p-2 w-[30%] flex flex-col bg-transparent ">
                  <label htmlFor="catProd" className="bg-gray-600 w-[100%]  pl-2 text-gray-100 ">Categoria: </label>
                  <select name="catProd" id="catProd" className=" outline-none bg-white">
                    <option value="">Selecione...</option>
                    <option value="enlatado">Enlatados</option>
                    <option value="frios">Frios...</option>
                  </select>
                </div>
                <div className="w-[20%] border flex items-center justify-center">
                  <button className="text-white w-[100%] bg-gray-600 border hover:bg-gray-700 p-2">Filtrar</button>
                </div>
              </div>
            
          

        <div className="h-[45%] w-[100%] mb-8 overflow-auto">

          
          <table className="table-auto w-full rounded-md ">
            <thead className="theader">
              <tr className="tr-theader">
                <th>Cód Produto</th>
                <th>Descrição</th>
                <th>Qtde.</th>
                <th>Valor Unit.</th>
                <th>Valor Total</th>
                <th className=" text-center">Ação</th>
              </tr>
            </thead>

            {Produtos.map(item => (

              <tbody className="tbody" >
                <tr key={item.cod}>
                  <td >{item.cod}</td>
                  <td >{item.desc}</td>
                  <td >2</td>
                  <td >{item.valorUni}</td>
                  <td >100,00</td>
                  <td className="h-[100%] text-center justify-center items-center">
                    <BsFillPencilFill className="text-red-700 cursor-pointer bg-transparent text-center" />
                    <BsXCircleFill className="text-red-700 cursor-pointer bg-transparent text-center" />
                  </td>
                </tr>

              </tbody>
            ))}

          </table>
        </div>
        <div className="w-[100%] border flex items-center justify-center] m-auto">
          <button className="text-white bg-cyan-600 hover:bg-cyan-700 w-[100%] p-2">Novo Produto</button>
        </div>
      </main>
      <Footer />
    </div>
  )
}