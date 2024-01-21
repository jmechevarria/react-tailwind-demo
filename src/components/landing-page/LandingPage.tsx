export default function LandingPage() {
  return (
    <>
      <section
        style={{
          background: 'url("mountain-couple.jpg")',
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="w-full h-dvh"
      >
        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-1/2">
          <h1 className="text-4xl uppercase text-black">
            An
            <br />
            Alnwick
            <br />
            landmark
          </h1>
          <br />
          <p className="text-xl text-white">
            Two distinguished mountains on Hogwarts' iconic doorstep, designed
            by acclaimed architect Bruce Wayne. Strikingly refined residences,
            these condominiums in Hogwarts offer enduring views of the Forbidden
            Forest skyline, over 30,000 square feet of amenities and an
            abundance of outdoor space.
          </p>
          <br />
          <p className="text-xl text-white">
            Even by unfairly high standards, The Hero is truly exceptional.
          </p>
        </div>
      </section>
      <section
        className="w-full bg-stone-500 text-white text-center py-32"
        style={{ height: 500 }}
      >
        <h6 className="uppercase text-lg mb-1">Vision</h6>
        <br />
        <h2 className="text-5xl mb-1">
          Endless
          <br />
          Horizons
        </h2>
        <br />
        <p className="mb-7">
          A graceful masterpiece, a brilliant new lifestyle experience,
          <br /> a true embodiment of the incredible spirit of Alnwick.
        </p>
        <div>
          <a
            href="vision"
            className="border-white border-2 p-2 hover:text-black hover:bg-white transition-colors duration-300"
          >
            Explore our vision
          </a>
        </div>
      </section>
      <section
        style={{
          background: 'url("mountain-man.jpg")',
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="w-full h-dvh"
      >
        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-1/2">
          <h1 className="text-4xl uppercase text-black">
            An
            <br />
            Alnwick
            <br />
            landmark
          </h1>
          <br />
          <p className="text-xl text-white">
            Two distinguished mountains on Hogwarts' iconic doorstep, designed
            by acclaimed architect Bruce Wayne. Strikingly refined residences,
            these condominiums in Hogwarts offer enduring views of the Forbidden
            Forest skyline, over 30,000 square feet of amenities and an
            abundance of outdoor space.
          </p>
          <br />
          <p className="text-xl text-white">
            Even by unfairly high standards, The Hero is truly exceptional.
          </p>
        </div>
      </section>
    </>
  );
}
