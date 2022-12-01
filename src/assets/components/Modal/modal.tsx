import React from "react";
import { useState } from "react";
import { BsFillPlusSquareFill,BsFillPeopleFill,BsFillKeyFill,BsTools,BsEye } from "react-icons/bs";
import { Cards } from "../Cards/cards";

export const Modal = () => {
  const [showModal, setShowModal] = React.useState(false);
  
  const [showPass, setShowPass] = useState(false);

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
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-900"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-2 border-solid rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="text-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    Registrar nova Senha
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="flex flex-col gap-4">
                    <div className="w-full flex justify-between items-center">
                      <label htmlFor="title-pass" className="text-white">Título: </label>
                      <input type="text" name="title-pass" id="title-pass" className="outline=none bg-white rounded outline-none p-2" required/>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <label htmlFor="user-pass" className="text-white">User: </label>
                      <input type="text" name="user-pass" id="user-pass" className="outline=none bg-white rounded outline-none p-2" />
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <label htmlFor="pass-pass" className="text-white">Senha: </label>
                      <input type={showPass ? "text" : "password"} name="pass-pass" id="pass-pass" className="outline=none bg-white rounded w-8/12 outline-none p-2" required/>
                      <button type="button" className="text-lg text-white" onClick={()=> setShowPass(s => !s)}><BsEye /></button>
                      
                    </div>
                    <div className="w-full flex gap-4 items-center">
                      <label htmlFor="group-pass" className="text-white">Categoria: </label>
                      <select name="groups" id="groups" className="border rounded p-2 outline-none">
                      <option value="">Selecione...</option>
                        <option value="Internet">Internet</option>
                        <option value="Servidores">Servidores</option>
                        <option value="E-mails">E-mails</option>
                        <option value="Outros">Outros</option>
                      </select>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <label htmlFor="url-pass" className="text-white">URL: </label>
                      <input type="text" name="url-pass" id="url-pass" className="outline=none bg-white rounded outline-none p-2" />
                    </div>

                    <div className="w-full flex justify-between items-start">
                      <label htmlFor="text-pass" className="text-white">Obs: </label>
                      <textarea name="text-pas" id="text-pas" className="bg-white outline-none p-2 max-w-xs max-h-24 min-h-full rounded"></textarea>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
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