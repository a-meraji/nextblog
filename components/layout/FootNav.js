import Link from "next/link"
export default function FootNav() {
  return (
    <>
      <div className="fixed px-5 text-onAccentTr flex justify-between items-center bottom-0 left-[10vw] h-[6vh] max-h-[50px] w-[80vw] rounded-t-full bg-accent md:hidden">
          <ul className="flex justify-between w-full capitalize">
          <li>
            <Link href="#about">
              <a className="link">about</a>
            </Link>
          </li>
          <li>
            <Link href="#my-works">
              <a className="link">my works</a>
            </Link>
          </li>
          <li>
            <Link href="#message">
              <a className="link">message</a>
            </Link>
          </li>
              </ul>
          </div>
    </>
  )
}
