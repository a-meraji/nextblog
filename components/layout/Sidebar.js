import Link from 'next/link'
import { socials } from '../../utils/assets'

export default function SideSocials() {
  return (
    <aside className="fixed top-[25vh] left-0 h-[50vh] w-10 px-0.5 py-[10vh] text-accent">
      <ul className="flex h-full w-full flex-col justify-between">
        {socials.map((social, index) => (
          <li key={`${social.name}${index}`}>
            <Link href={social.url}>
              <a>
                <social.icon className="h-6 w-6" />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
