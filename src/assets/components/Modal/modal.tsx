import React from "react";
import { useState } from "react";
import { BsFillPlusSquareFill,BsFillPeopleFill,BsFillKeyFill,BsTools,BsEye } from "react-icons/bs";
import { Form } from "../Form/forms";
import { Cards } from "../Cards/cards";

export const Modal = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="bg-red-700 hover:bg-red-600 p-8 rounded-lg border border-solid border-white w-60 h-30  flex flex-col items-center justify-center gap-4 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>
        <Cards className={'text-white'} text={"Criar senha"} ></Cards>
        <BsFillPlusSquareFill className="bg-transparent text-white text-4xl" />
      </button>

   
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-blue-500"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-2 border-solid rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                
                {/*header*/}
                <div className="text-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    Registrar nova Senha
                  </h3>
                  
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Form />
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b ">
                  <button
                    className="text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 hover:bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Save Changes
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