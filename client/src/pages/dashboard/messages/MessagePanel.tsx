import MessageTable from '../../../components/MessageTable';

type Props = {}

const MessagePanel = (props: Props) => {
  return (
    <section className='w-8/12 my-3'>
        <h2 className='text-2xl py-2'>Messages</h2>
        <MessageTable/>
    </section>
  )
}


export default MessagePanel