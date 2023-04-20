import myFont from "@/lib/customFont";
import styles from "./styles.module.css";
export default function ServicesPage() {
  return (
    <main>
      <section className=" pt-24 h-screen flex flex-col justify-center items-center px-16 bg-gradient services-gradient">
        <span className={`${myFont.className} text-center block text-gradient`}>Services</span>
        <h1 className="text-6xl font-heading text-center mb-10">Some slogan</h1>
        <p style={{ width: "clamp(36ch, 90%, 72ch)" }} className="text-center mx-auto mb-10">
          Irure sit elit ad dolor nostrud tempor tempor commodo nostrud do consectetur. Irure excepteur
          officia exercitation eu cupidatat. Et anim irure enim magna proident veniam culpa nisi ex ea
          consectetur.{" "}
        </p>
      </section>
      <section className="flex flex-col ">
        <Service title="Full stack development" style={styles.section} />
        <Service title="Full stack development" style={styles.section2} />
        <Service title="Full stack development" style={styles.section3} />
      </section>
      <section className="px-16 cta-gradient py-20 ">
        <h2 className="text-center text-4xl font-heading mb-7">
          Ready to unlock your business's full potential and become a <br />
          <span className="text-gradient">digital game-changer</span>?
        </h2>
        <div>
          <button className="text-xl block mx-auto px-4 py-2 rounded-full bg-primary-200 text-primary-700 font-semibold">
            Contact us
          </button>
        </div>
      </section>
    </main>
  );
}

type PropTypes = {
  title: string;
  style: string;
};

function Service({ style, title }: PropTypes) {
  return (
    <div className={`flex px-16 py-48 border-t even:flex-row-reverse gap-4 border-t-neutral-700 ${style}`}>
      <div className="basis-1/2 grow">
        <header className="w-4/5 mb-10">
          <h2 className="text-4xl font-heading">{title}</h2>
        </header>
        <p className="text-lg">
          Ut esse voluptate ex elit ea excepteur esse occaecat sint dolore. Eu commodo ex deserunt adipisicing
          quis veniam ad et ea cillum nisi ut. Sit cupidatat aute mollit sint ipsum occaecat consequat sint ut
          dolor culpa. Reprehenderit do ullamco velit magna.
        </p>
      </div>
      <div className="basis-1/2 grow bg-neutral-800 h-64"></div>
    </div>
  );
}
