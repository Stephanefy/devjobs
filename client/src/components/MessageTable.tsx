import Table from "./table/Table";

type Props = {}

const headerData = ["from", "to", "message", "date"]

const MessageTable = (props: Props) => {
  return (
    <div>
        <Table headerData={headerData}/>
    </div>
  )
}

export default MessageTable;