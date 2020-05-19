import { MdContactMail } from 'react-icons/md'
export default () => {
  return (
    <div className="contact flex flex-col sm:flex-row justify-center items-center  text-2xl  sm:text-4xl font-extrabold">
      <MdContactMail className=" w-24 h-24" /> <p className="mt-6 sm:mt-0 sm:ml-6 ">rapribu@gmail.com</p>
    </div>
  )
}
