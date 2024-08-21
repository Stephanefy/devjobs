import TableHeader from './TableHeader';

type Props = {
  headerData: string[]
}

const Table = ({headerData}: Props) => {
  return (
    <table className="md:min-w-full divide-y divide-gray-300 rounded-lg">
        <TableHeader headerData={headerData}/>
    </table>
  )
}

export default Table