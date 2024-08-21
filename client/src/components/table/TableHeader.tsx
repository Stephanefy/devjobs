
type HeaderData = string[]

const TableHeader = ({headerData} : {headerData: HeaderData}) => {
    return (
        <thead className="bg-gray-50 rounded-lg">
            <tr className="flex justify-between">
                {headerData.map((d) => (
                    <th
                        scope="col"
                        className="hidden md:inline-block w-32 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                        {d}
                    </th>
                ))}
            </tr>
        </thead>
    )
}


export default TableHeader