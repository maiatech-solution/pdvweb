import { useState } from "react";
import { BsFillPlusSquareFill, BsFillPeopleFill, BsFillKeyFill, BsTools, BsEye } from "react-icons/bs";

export const Form = () => {

    const [showPass, setShowPass] = useState(false);

    return (
        <form className="flex flex-col gap-4">
            <div className="w-full flex justify-between items-center">
                <label htmlFor="title-pass" className="text-white">Título: </label>
                <input type="text" name="title-pass" id="title-pass" className="outline=none bg-white rounded outline-none p-2" required />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="user-pass" className="text-white">User: </label>
                <input type="text" name="user-pass" id="user-pass" className="outline=none bg-white rounded outline-none p-2" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="pass-pass" className="text-white">Senha: </label>
                <input type={showPass ? "text" : "password"} name="pass-pass" id="pass-pass" className="outline=none bg-white rounded w-8/12 outline-none p-2" required />
                <button type="button" className="text-lg text-white border p-2 rounded" onClick={() => setShowPass(s => !s)}><BsEye /></button>

            </div>
            <div className="w-full flex gap-4 items-center">
                <label htmlFor="group-pass" className="text-white">Categoria: </label>
                <select name="groups" id="groups" className="border rounded p-2 outline-none">
                    <option value="" className="">Selecione...</option>
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
    )
}