
type HeaderData = string[]

const TableHeader = ({headerData} : {headerData: HeaderData}) => {
    return (
        <thead className="bg-gray-50 rounded-lg">
            <tr className="">
                {headerData.map((d) => (
                    <th
                        scope="col"
                        className="w-12/12 pl-4 text-center text-sm font-semibold text-gray-900 sm:pl-6 p-4"
                    >
                        {d}
                    </th>
                ))}
            </tr>
        </thead>
    )
}


export default TableHeader