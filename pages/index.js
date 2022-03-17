import React from 'react'
import FirstIntro from '../components/portfolio_secs/Intro1'
import SecondIntro from '../components/portfolio_secs/intro2'
import Message from '../components/portfolio_secs/Message'
import ProjectPresent from '../components/portfolio_secs/ProjectPresent'
import { projects } from '../utils/assets'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  MoveOut,
  Sticky,
  ZoomIn,
} from 'react-scroll-motion'

export default function Home() {
  if (typeof window !== 'undefined') {
    return (
      <main className="font-pop  bg-primary text-primary">
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <article id="about" className="layout-p relative w-screen">
                <FirstIntro />
              </article>
            </Animator>
          </ScrollPage>

          <ScrollPage page={1}>
            <Animator animation={batch(FadeIn(), ZoomIn(), MoveOut(0, -200))}>
              <article id="skills">
                <SecondIntro />
              </article>
            </Animator>
          </ScrollPage>

          <article id="my-works" className="layout-p">
            <h1 className="mt-20 mb-5 text-center text-4xl font-semibold">
              Some of my latest works
            </h1>
            {projects.map((project, index) => (
              <ProjectPresent
                key={`${project.title}${index}`}
                project={project}
                index={index}
              />
            ))}
          </article>

          <div className="layout-p">
            <h1 className="mt-32 text-center text-4xl">Wanna talk?</h1>
            <Message />
          </div>
        </ScrollContainer>
      </main>
    )
  }

  return (
    <main className="font-pop  bg-primary text-primary">
      {/* <div className="h-screen w-full bg-green-600"></div> */}
      <>
        <article id="about">
          <FirstIntro />
        </article>
        <article id="skills">
          <SecondIntro />
        </article>
        <article id="my-works">
          {projects.map((project, index) => (
            <ProjectPresent
              key={`${project.title}${index}`}
              project={project}
            />
          ))}
        </article>
        <Message />
      </>
      )
    </main>
  )
}
