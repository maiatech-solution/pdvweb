import React from "react";
import { BsArrowBarRight, BsFillArrowLeftCircleFill, BsFillGrid3X3GapFill, BsPlusLg, BsXCircleFill } from "react-icons/bs";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>

      <div className="w-[5%] flex justify-center" >
        <button type="button" onClick={() => setShowModal(true)}>
          <BsFillGrid3X3GapFill className="text-4xl text-cyan-500 hover:text-cyan-600" />
        </button>

      </div>
  

      {
        showModal ? (
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
                    <ul className="list-none">

                      <a href="#" onClick={() => setShowModal(false)}>
                        <li className="border bg-white p-2 mb-4 rounded-md hover:bg-gray-200">
                          Teclado Gamer
                        </li>
                      </a>

                      <a href="#" onClick={() => setShowModal(false)}>
                        <li className="border bg-white p-2 mb-4 rounded-md hover:bg-gray-200">
                          Mouse Gamer
                        </li>
                      </a>
                      <a href="#" onClick={() => setShowModal(false)}>
                        <li className="border bg-white p-2 mb-4 rounded-md hover:bg-gray-200">
                          Monitor LED 27POL
                        </li>
                      </a>
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
        ) : null
      }
    </>
  );
}