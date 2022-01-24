import Image from "next/image"
import chat from '../../img/chat.svg';


export const AskQuestion = () => {

  return (
    <button className="btn askQuestion">
      <Image src={chat} layout="fixed" alt="" width={47} height={47} />
    </button>
  )
}