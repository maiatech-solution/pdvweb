export const TableList = () => {
    return (
        <div className="table-venda">

            <table className="table-auto w-full">
                <thead className="theader">
                    <tr className="tr-theader">
                        <th className=" ">Cód Produto</th>
                        <th className=" ">Descrição</th>
                        <th className=" ">Qtde.</th>
                        <th className=" ">Valor Unit.</th>
                        <th className=" ">Valor Total</th>
                        <th className=" text-center">Ação</th>
                    </tr>
                </thead>
                <tbody className="tbody" >
                    <tr>
                        <td className=" ">123</td>
                        <td className=" ">Teclado gamer</td>
                        <td className=" ">2</td>
                        <td className=" ">50,00</td>
                        <td className=" ">100,00</td>
                        <td className="  text-center">X</td>
                    </tr>
                    <tr>
                        <td className=" ">321</td>
                        <td className=" ">Mouse gamer</td>
                        <td className=" ">5</td >
                        <td className=" ">40,00</td>
                        <td className=" ">200,00</td>
                        <td className="  text-center">X</td>
                    </tr>
                    <tr>
                        <td className=" ">100</td>
                        <td className=" ">Monitor Led</td>
                        <td className=" ">10</td>
                        <td className=" ">500,00</td>
                        <td className=" ">5000,00</td>
                        <td className="  text-center">X</td>
                    </tr>

                </tbody>
            </table>

        </div>

    )
}