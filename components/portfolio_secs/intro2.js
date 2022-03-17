import HTMLTag from '../svgs/HtmlTag'

export default function SecondIntro() {
  return (
    <section className="flex mx-[8vw] h-screen items-center justify-center text-center">
      <div>
        <div>
          <p className="text-2xl lg:text-3xl">
            Currently I’m concentrated on <b>React.js</b> and <b>Next.js</b>
          </p>
          <div className="mt-10 flex items-center justify-center">
            <HTMLTag />
          </div>
          <p className="mt-10 text-base lg:text-lg">
            I am also familiar with <b>Node.js</b>, <b>Express </b>
            and <b>MongoDB</b>
            <br />
            <apn className="text-base lg:text-lg">
              (as much as a front-end developer needs to know back-end)
            </apn>
          </p>
        </div>
      </div>
    </section>
  )
}
