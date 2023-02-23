import React from "react";
import { BsSearch} from "react-icons/bs";
import { Produtos } from "../../../date/produtos";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);


  return (
    <>

      <div className="w-[5%] flex justify-center bg-transparent">
        <button type="button" onClick={() => setShowModal(true)}>
          <BsSearch className="text-4xl text-gray-200 hover:text-gray-300 bg-transparent" />
        </button>

      </div>


      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative  w-[100%] h-[100%] mx-auto max-w-[xl]">
              {/*content*/}
              <div className="h-[100%] rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border border-red-900">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-emerald-800 font-semibold">
                    Todos os Produtos
                  </h3>
                </div>
                {/*body*/}


                <div className="relative p-6 flex-auto">



                    <ul>
                     {Produtos.map(item => (
                      <a href="" className="bg-white w-screen text-red-900">
                        <li key={item.cod} className="bg-white hover:bg-gray-200 text-gray-800 p-2 mb-2 rounded-md">
                          id: <span className="bg-transparent text-xl">{item.cod}</span> || 
                          Valor: R$ <span className="bg-transparent text-xl">{item.valorUni.toFixed(2)}</span> ||
                          Saldo: <span style={item.saldo > 0 ? { color: "green" } : { color: "red" }} className='bg-transparent text-xl'>{item.saldo}</span>  <br />
                          Descrição: <span className="text-2xl bg-transparent">{item.desc}</span> <br /> 
                        </li>
                      </a>
                    ))}
                    </ul>


                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white border-red-500 border bg-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fechar
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