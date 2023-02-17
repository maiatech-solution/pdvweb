import LogoEmpresa from '../../imgs/maiatech.png'
import { BsArrowBarRight, BsPlusLg, BsXCircleFill } from "react-icons/bs"

export const Desc = () => {
    return(
        <div className="desc-venda bg-cyan-800 rounded-md">
          <div className="border w-[10em] rounded-md ">
            <div className="w-[100%] rounded-md">
              <img src={LogoEmpresa} alt="Img do produto" />
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-4 w-[30em] bg-cyan-800">
            <div className="border rounded-t-md rounded-b-md flex flex-col items-center">
              <label htmlFor="cod" className="bg-emerald-600 w-[100%] text-center text-gray-100 rounded-t-md">Cód. Prod.</label>
              <input type="text" name="cod" className="w-[100%] border bg-gray-200 p-2 outline-none text-center rounded-b-md" />
            </div>
            <div className="border rounded-t-md rounded-b-md flex flex-col items-center">
              <label htmlFor="cod" className="bg-emerald-600 w-[100%] text-center text-gray-100 rounded-t-md">Quantidade</label>
              <input type="text" name="cod" className="w-[100%] border bg-gray-200 p-2 outline-none text-center rounded-b-md" />
            </div>
            <div className="border rounded-t-md rounded-b-md flex flex-col items-center">
              <label htmlFor="cod" className="bg-emerald-600 w-[100%] text-center text-gray-100 rounded-t-md">Preço Unitário</label>
              <input type="text" name="cod" className="w-[100%] border bg-gray-200 p-2 outline-none text-center rounded-b-md" />
            </div>
            <div className="border rounded-t-md rounded-b-md flex flex-col items-center">
              <label htmlFor="cod" className="bg-emerald-600 w-[100%] text-center text-gray-100 rounded-t-md">Preço Total</label>
              <input type="text" name="cod" className="w-[100%] border bg-gray-200 p-2 outline-none text-center rounded-b-md" />
            </div>
          </div>
          <div className=" flex items-center justify-center w-[10em] rounded-md">
            <button className="w-[100%] h-[10em] flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 rounded-md">
              <BsPlusLg className='text-7xl bg-transparent text-gray-100 '/>
            </button>
          </div>
        </div>
    )
}