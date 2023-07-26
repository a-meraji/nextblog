import HTMLTag from '../svgs/HtmlTag'

export default function Skills() {
  return (
    <section className="flex mx-[8vw] h-screen items-center justify-center text-center">
      <div>
        <div>
          <p className="text-2xl lg:text-3xl">
            Currently I’m focused on <b>Next.js</b> & <b>Node JS</b> 
          </p>
          <div className="mt-10 flex items-center justify-center">
            <HTMLTag />
          </div>
          <p className="mt-10 text-base lg:text-lg">
            I am also familiar with <b>Express </b>
            and <b>MongoDB</b>
            <br />
          </p>
        </div>
      </div>
    </section>
  )
}
