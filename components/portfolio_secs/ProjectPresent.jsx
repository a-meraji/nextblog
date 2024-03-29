import {
  Animator,
  ScrollPage,
  FadeIn,
  batch,
  MoveIn,
} from 'react-scroll-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectPresent({ project, index }) {
  const { title, description, github, url, image, features } = project
  if (typeof window !== 'undefined') {
    return (
      <ScrollPage page={index + 2}>
        <Animator
          animation={batch(MoveIn(index % 2 === 0 ? -1000 : 1000, 0), FadeIn())}
          >
          <section className="flex flex-col h-screen items-center justify-center">
          {index === 0 && (
            <h1 className="mb-5 text-center text-2xl font-semibold">
              Some of my latest works
            </h1>
          )}
            <div className="mx-auto w-[70vw] max-w-lg">
              <a href={url} target="_blank">
                <img
                  src={image}
                  alt={`Preview Screenshot of ${title}`}
                  className="mx-auto h-auto w-full rounded-xl object-cover"
                />
              </a>
              <div className="mt-4 mb-2 flex justify-center gap-x-4 text-accent">
                <a href={github} target="_blank">
                  <FaGithub />
                </a>
                <a href={url} target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <div className="mx-1">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="my-2">{description}</p>
                <ul className="ml-5 list-disc text-sm">
                  {features.map((feature, index) => (
                    <li key={`${feature}${index}`}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </Animator>
      </ScrollPage>
    )
  }
  return (
    <section className="flex flex-col h-screen items-center justify-center">
          {index === 0 && (
            <h1 className="mb-5 text-center text-2xl font-semibold">
              Some of my latest works
            </h1>
          )}
            <div className="mx-auto w-[70vw] max-w-lg">
              <a href={url} target="_blank">
                <img
                  src={image}
                  alt={`Preview Screenshot of ${title}`}
                  className="mx-auto h-auto w-full rounded-xl object-cover"
                />
              </a>
              <div className="mt-4 mb-2 flex justify-center gap-x-4 text-accent">
                <a href={github} target="_blank">
                  <FaGithub />
                </a>
                <a href={url} target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <div className="mx-1">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="my-2">{description}</p>
                <ul className="ml-5 list-disc text-sm">
                  {features.map((feature, index) => (
                    <li key={`${feature}${index}`}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
  )
}
