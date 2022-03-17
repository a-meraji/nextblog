import { useForm } from 'react-hook-form'
import { IoSend } from 'react-icons/io5'
import { BiLoader, BiCheck } from 'react-icons/bi'
import {MdOutlineSmsFailed} from 'react-icons/md'
import { useState } from 'react'

export default function Message() {
  const [isClicked, setIsClicked] = useState(false)
  const [isSent, setIsSent] = useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsClicked(true)
    const req = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const res = await req.json()
    if (res.message === 'Message sent') {
      setIsSent(200)
    } else {
      setIsSent(500)
    }

    setTimeout(() => {
      setIsClicked(false)
      setIsSent(0)
    }, 2500)
  }

  return (
    <section className="flex h-screen items-center justify-center">
      <form
        id="message"
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto w-full max-w-xl px-4"
      >
        <input
          placeholder="Your Name"
          className="mb-4 w-full rounded-full bg-transAccent py-2 px-4 focus:outline-none"
          {...register('userName', { required: true })}
        />
        {errors.userName && <p>Name is required.</p>}
        <input
          placeholder="Your E-mail"
          className="my-4 w-full rounded-full bg-transAccent py-2 px-4 focus:outline-none"
          {...register('userEmail', {
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            required: true,
          })}
        />
        {errors.userEmail && (
          <p>
            {errors.userEmail.type == 'required'
              ? 'Please enter your e-mail.'
              : 'Invalid e-mail'}
          </p>
        )}
        <textarea
          placeholder="Message ..."
          className="my-4 h-[40vh] w-full rounded-2xl bg-transAccent py-2 px-4 focus:outline-none"
          {...register('userMessage', { required: true })}
        />
        {errors.userMessage && <p>Don't be shy! Say something.</p>}
        <button
          type="submit"
          className={`transition-all group relative flex items-center justify-between gap-x-1 rounded-full bg-accent py-2 ${isSent===0?"px-4":isSent===200?"px-10":"px-16 bg-red-600"} text-onAccent focus:outline-none`}
        >
          {/* default */}
          <span
            className={`transition-all ${
              isClicked && '-translate-x-[200%] opacity-0'
            } group-hover:-translate-x-[200%] group-hover:opacity-0`}
          >
            send
          </span>
          <IoSend
            className={`transition-all duration-300  group-hover:-translate-x-[100%] group-hover:scale-150 ${
              isClicked ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* loader */}
          <span
            className={`absolute right-0 left-0 my-auto flex  items-center justify-center transition-all duration-300  ${
              isClicked && isSent === 0 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span>waiting</span>
            <BiLoader />
          </span>
          {/* result */}
          <span
            className={`absolute right-0 left-0 my-auto flex  items-center justify-center transition-all duration-300  ${
              isClicked && isSent !== 0 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {isSent === 200 && (
              <>
                <span>message sent</span>
                <BiCheck />
              </>
            )}
            {isSent === 500 && (<>
              <span className='mr-2' >not sent try again</span>
            <MdOutlineSmsFailed className='scale-150'/></>)}
          </span>
        </button>
      </form>
      <style jsx>{`
        p {
          color: red;
        }
      `}</style>
    </section>
  )
}
