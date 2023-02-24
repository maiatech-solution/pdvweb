import { BsFillPencilFill, BsXCircleFill } from "react-icons/bs";
import { Produtos } from "../../date/produtos";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header/header";
import Modal from "../components/ModalProd/modal";
import { TableList } from "../components/TableList/tableList";
import LogoEmpresa from "../imgs/maiatech.png";

export const Estoque = () => {
  return (
    <div>
      <Header text="Estoque" className="text-4xl text-cyan-700 mb-4" />
      <main className="h-[85vh] w-[70%] m-auto">
        <div className="h-[30%] border-2 rounded-md bg-cyan-700 flex mb-4">
          <div className="w-[30%] h-[100%] flex justify-center bg-transparent items-center">
            <div className="w-[200px] border">
              <img src={LogoEmpresa} alt="" />
            </div>
          </div>
          <div className="w-[70%] h-[100%] flex flex-col justify-center gap-4 bg-transparent items-center">
            <div className=" w-[90%] flex gap-4 bg-transparent">
              <div className="w-[25%] flex flex-col">
                <label
                  htmlFor="codProd"
                  className="bg-gray-600 w-[100%] border pl-2 text-gray-100 "
                >
                  Cód. Produto:{" "}
                </label>
                <input
                  type="number"
                  name="codProd"
                  id="codProd"
                  className="bg-white outline-none pl-2"
                />
              </div>
              <div className="w-[75%] flex flex-col ">
                <label
                  htmlFor="descProd"
                  className="bg-gray-600 w-[100%] border pl-2 text-gray-100 "
                >
                  Descrição do produto:{" "}
                </label>
                <input
                  type="text"
                  name="descProd"
                  id="descProd"
                  className=" bg-white outline-none pl-2"
                />
              </div>
            </div>
            <div className="w-[90%] gap-4 flex justify-between bg-transparent">
              <div className=" w-[25%]  flex flex-col bg-transparent">
                <label
                  htmlFor="catProd"
                  className="bg-gray-600 w-[100%] border pl-2 text-gray-100 "
                >
                  Categoria:{" "}
                </label>
                <select
                  name="catProd"
                  id="catProd"
                  className=" outline-none bg-white p-2"
                >
                  <option value="">Selecione...</option>
                  <option value="informatica">Informática</option>
                  <option value="moinitores">Monitores...</option>
                </select>
              </div>
              <div className="w-[25%] flex flex-col bg-transparent ">
                <label
                  htmlFor="saldoProd"
                  className="bg-gray-600 border w-[100%] pl-2 text-gray-100"
                >
                  Saldo:{" "}
                </label>
                <input
                  type="number"
                  name="saldoProd"
                  id="saldoProd "
                  className="bg-white outline-none p-2"
                />
              </div>
              <div className="w-[25%] flex flex-col bg-transparent ">
                <label
                  htmlFor="unidProd"
                  className="bg-gray-600 border w-[100%] pl-2 text-gray-100 "
                >
                  Unidade:{" "}
                </label>
                <select
                  name="unidProd"
                  id="unidProd"
                  className="outline-none bg-white p-2"
                >
                  <option value="">Selecione...</option>
                  <option value="unidade">UN</option>
                  <option value="metro">M</option>
                  <option value="centimetro">CM</option>
                  <option value="litro">L</option>
                  <option value="pacote">PCT</option>
                </select>
              </div>
              <div className="w-[25%] flex flex-col bg-transparent ">
                <label
                  htmlFor="precoProd"
                  className="bg-gray-600 border w-[100%] pl-2 text-gray-100"
                >
                  Preço:{" "}
                </label>
                <input
                  type="number"
                  name="precoProd"
                  id="precoProd"
                  className="bg-white outline-none p-2"
                />
              </div>
            </div>
            <button className="text-white bg-gray-600 border hover:bg-gray-700 w-[90%] p-2">
              Salvar
            </button>
          </div>
        </div>

        <div className="w-[100%] p-2 h-[10%] gap-2 m-auto mb-4 border border-gray-400 flex items-center justify-center bg-transparent">
          <div className="w-[50%]">
            <input
              type="text"
              placeholder="Pesquisar produto"
              className="bg-white w-[100%] outline-none p-2 border border-gray-400"
            />
          </div>

          <div className=" p-2 w-[30%] flex flex-col bg-transparent ">
            <label
              htmlFor="catProd"
              className="bg-gray-600 w-[100%]  pl-2 text-gray-100 "
            >
              Categoria:{" "}
            </label>
            <select
              name="catProd"
              id="catProd"
              className=" outline-none bg-white"
            >
              <option value="">Selecione...</option>
              <option value="informatica">Informática</option>
              <option value="moinitores">Monitores...</option>
            </select>
          </div>

          <div className="w-[20%] border flex items-center justify-center">
            <button className="text-white w-[100%] bg-gray-600 border hover:bg-gray-700 p-2">
              Filtrar
            </button>
          </div>
        </div>

        <div className="h-[45%] w-[100%] mb-8 overflow-auto bg-cyan-200">
          <table className="table-auto w-full rounded-md ">
            <thead className="theader-estoque">
              <tr className="tr-theader">
                <th>Cód Produto</th>
                <th>Descrição</th>
                <th>Saldo</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th className=" text-center">Ação</th>
              </tr>
            </thead>

            {Produtos.map((item) => (
              <tbody className="tbody-estoque">
                <tr key={item.cod}>
                  <td>{item.cod}</td>
                  <td>{item.desc}</td>
                  <td
                    style={
                      item.saldo > 0 ? { color: "black" } : { color: "red" }
                    }
                    className="bg-transparent text-xl"
                  >
                    {item.saldo}
                  </td>
                  <td>{item.valorUni}</td>
                  <td>{item.cat}</td>
                  <td className="text-center justify-center items-center">
                    <BsFillPencilFill className="text-gray-900 cursor-pointer bg-transparent text-center w-[100%] mb-2" />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <Modal />
      </main>
      <Footer />
    </div>
  );
};
