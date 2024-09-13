
type HeaderData = string[]

type Props = {
    type : "sent" | "received"
}

const TableHeader = ({type} : Props) => {
    return (
        <thead className="bg-gray-50 rounded rounded-tr-lg rounded-tl-lg">
            <tr className="">
                
                    <th
                        scope="col"
                        className="w-12/12 pl-4 text-center text-sm font-semibold text-gray-900 sm:pl-6 p-4 "
                    >
                        {type === "sent" ? "To" : "From"}
                    </th>
                
                    <th
                        scope="col"
                        className="w-12/12 pl-4 text-center text-sm font-semibold text-gray-900 sm:pl-6 p-4 "
                    >
                        date
                    </th>
            
            </tr>
        </thead>
    )
}


export default TableHeader