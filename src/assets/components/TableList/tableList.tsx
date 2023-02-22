import { BsXCircleFill } from "react-icons/bs"
import { Produtos } from "../../../date/produtos"

export const TableList = () => {
    return (
        <div className="table-venda rounded-md">


            <table className="table-auto w-full rounded-md">
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
                        <td className="text-center">
                            <BsXCircleFill className="text-red-700 cursor-pointer m-auto " />
                        </td>
                    </tr>
                
                </tbody>
))}

            </table>

        </div>

    )
}