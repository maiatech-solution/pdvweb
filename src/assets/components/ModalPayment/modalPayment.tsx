import React from "react";
import { BsArrowBarRight, BsFillArrowLeftCircleFill, BsFillGrid3X3GapFill, BsPlusLg, BsXCircleFill } from "react-icons/bs";
import { Select, Option } from "@material-tailwind/react";

export default function ModalPayment() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>

      <div className="w-[50%] flex justify-center" >
        <button className="border w-[25em] p-2 bg-emerald-800 hover:bg-emerald-900 rounded-sm text-white flex justify-center items-center gap-4" type="button" onClick={() => setShowModal(true)}>
          <BsArrowBarRight className="text-4xl bg-transparent" />
          Prosseguir
        </button>
      </div>


      {
        showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none"
            >
              <div className="relative w-[50%] h-[70%] mx-auto max-w-[xl]">
                {/*content*/}
                <div className="h-[100%] rounded-xl shadow-lg border relative flex flex-col w-full  bg-blue-700 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-center p-5 rounded-t bg-transparent">
                    <h3 className="text-4xl text-white font-semibold text-center bg-transparent">
                      Finalizar Venda
                    </h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto w-[50%] bg-transparent m-auto">
                   

                    <div className="border rounded-t-md rounded-b-md flex flex-col items-center mb-4">
                      <label htmlFor="cod" className="bg-gray-500 w-[100%] text-center text-gray-100 rounded-t-md">Total a pagar</label>
                      <input type="text" name="cod" className="w-[100%] border bg-gray-200 p-2 outline-none text-center rounded-b-md" />
                    </div>

                    <div className="border rounded-t-md rounded-b-md flex flex-col items-center mb-4">
                      <label htmlFor="cod" className="bg-gray-500 w-[100%] text-center text-gray-100 rounded-t-md">Valor Recebido</label>
                      <input type="text" name="cod" className="w-[100%] border bg-gray-200 p-2 outline-none text-center rounded-b-md" />
                    </div>

                    <div className="border rounded-t-md rounded-b-md flex flex-col items-center mb-8">
                      <label htmlFor="cod" className="bg-gray-500 w-[100%] text-center text-gray-100 rounded-t-md">Troco</label>
                      <input type="text" name="cod" className="w-[100%] border bg-gray-200 p-2 outline-none text-center rounded-b-md" />
                    </div>

                    <label htmlFor="" className="block bg-transparent mb-2 text-md font-medium text-white">Selecione a forma de pagamento</label>
                    <select id="countries" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Dinheiro</option>
                      <option>Crédito</option>
                      <option>Débito</option>
                      <option>PIX</option>
                    </select>

                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b bg-blue-700 ">
                    <button
                      className="text-white  w-[30em] bg-emerald-600 hover:bg-emerald-700 font-bold uppercase px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Finalizar
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null
      }
    </>
  );
}