import React from "react";
import { BsSearch } from "react-icons/bs";
import { Produtos } from "../../../date/produtos";
import LogoEmpresa from '../../imgs/maiatech.png'

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);


  return (
    <>

      <div className="w-[100%] border flex items-center justify-center] m-auto">
        <button type="button" onClick={() => setShowModal(true)} className="text-white bg-cyan-600 hover:bg-cyan-700 w-[100%] p-2">
          Novo Produto
        </button>

      </div>

      {showModal ? (
        <>
          <div
            className="justify-center h-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative  w-[100%] h-[100%] mx-auto max-w-[xl]">
              {/*content*/}
              <div className="h-[100%] rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-emerald-800 font-semibold">
                    Novo Produto
                  </h3>
                </div>
                {/*body*/}


                <div className="h-[30%] border-2 rounded-md bg-cyan-700 flex mb-4">
                  <div className="w-[30%] h-[100%] flex justify-center bg-transparent items-center">
                    <div className="flex flex-col bg-transparent">
                      <label htmlFor="addImg" className="bg-transparent text-white">Adicionar imagem do Produto</label>
                      <input type="file" name="addImg" id="addImg" className="bg-transparent text-white" accept="image/*" />
                    </div>
                  </div>
                  <div className="w-[70%] h-[100%] flex flex-col justify-center gap-4 bg-transparent items-center">
                    <div className=" w-[90%] flex gap-4 bg-transparent" >
                      <div className="w-[25%] flex flex-col">
                        <label htmlFor="codProd" className="bg-gray-600 w-[100%] border pl-2 text-gray-100 ">Cód. Produto: </label>
                        <input type="number" name="codProd" id="codProd" className="bg-white outline-none p-2" />
                      </div>
                      <div className="w-[75%] flex flex-col ">
                        <label htmlFor="descProd" className="bg-gray-600 w-[100%] border pl-2 text-gray-100 ">Descrição do produto: </label>
                        <input type="text" name="descProd" id="descProd" className=" bg-white outline-none p-2" />
                      </div>
                    </div>
                    <div className="w-[90%] gap-4 flex justify-between bg-transparent">
                      <div className=" w-[25%]  flex flex-col bg-transparent">
                        <label htmlFor="catProd" className="bg-gray-600 w-[100%] border pl-2 text-gray-100 ">Categoria: </label>
                        <select name="catProd" id="catProd" className=" outline-none bg-white p-2">
                          <option value="">Selecione...</option>
                          <option value="informatica">Informática</option>
                          <option value="moinitores">Monitores...</option>
                        </select>
                      </div>
                     
                      <div className="w-[25%] flex flex-col bg-transparent ">
                        <label htmlFor="unidProd" className="bg-gray-600 border w-[100%] pl-2 text-gray-100 ">Unidade: </label>
                        <select name="unidProd" id="unidProd" className="outline-none bg-white p-2">
                          <option value="">Selecione...</option>
                          <option value="unidade">UN</option>
                          <option value="metro">M</option>
                          <option value="centimetro">CM</option>
                          <option value="litro">L</option>
                          <option value="pacote">PCT</option>
                        </select>
                      </div>
                      <div className="w-[25%] flex flex-col bg-transparent ">
                        <label htmlFor="saldoProd" className="bg-gray-600 border w-[100%] pl-2 text-gray-100">Saldo: </label>
                        <input type="number" name="saldoProd" id="saldoProd " className="bg-white outline-none p-2" />
                      </div>
                      <div className="w-[25%] flex flex-col bg-transparent ">
                        <label htmlFor="precoProd" className="bg-gray-600 border w-[100%] pl-2 text-gray-100">Preço: </label>
                        <input type="number" name="precoProd" id="precoProd" className="bg-white outline-none p-2" />
                      </div>
                    </div>

                  </div>

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white border-emerald-500 border bg-emerald-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cadastrar
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}