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
  StickyIn,
  MoveIn,
  Sticky,
  ZoomIn,
} from 'react-scroll-motion'

export default function Home() {
  if (typeof window !== 'undefined') {
    return (
      <main className="font-pop bg-primary text-primary  transition-colors duration-700">
        <div id="about"></div>
        <ScrollContainer id="scrollContainer" style={{ zIndex: -100 }}>
          <ScrollPage page={0}>
            <Animator animation={batch(Fade(), StickyIn())}>
              <article className="layout-p relative w-screen">
                <FirstIntro />
              </article>
            </Animator>
          </ScrollPage>

          <ScrollPage page={1}>
            <Animator animation={batch(FadeIn(), ZoomIn())}>
              <article id="skills">
                <SecondIntro />
              </article>
            </Animator>
          </ScrollPage>

          <article id="my-works" className="layout-p">
            {projects.map((project, index) => (
              <ProjectPresent
                key={`${project.title}${index}`}
                project={project}
                index={index}
              />
            ))}
          </article>

          <div id="message" className="layout-p">
            <Message />
          </div>
        </ScrollContainer>
      </main>
    )
  }

  return (
    <main className="font-pop bg-primary text-primary  transition-colors duration-700">
      <h1>
        This is Poprtpholio of Amin Meraji A programmer. A front-end-developer
        expert in React.js and Next.js
      </h1>
      <article id="about">
        <h1>I am a font-end developer based in Mashad, Iran</h1>
        <h3>My name Is Amin Meraji</h3>
        <p>develop E-commerce web application</p>
        <p>develop react application</p>
        <p>develop next.js application</p>
      </article>
      <article id="skills">
        <h1>My Skills in programming as a font-end developer</h1>
        <p>
          React.js, Next.js ,jquery, CSS, HTML, JavaScript, NodeJS, Express,
          MongoDB, Mongoose, NMP, WebPack
        </p>
      </article>
      )
    </main>
  )
}
