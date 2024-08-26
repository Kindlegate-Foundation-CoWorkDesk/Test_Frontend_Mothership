import CloserToFooter from "../CloserToFooter";
import PartnerBody from "./PartnerBody"

export default function page() {
  return (
    <section>
      <main className="relative overflow-hidden">
        <img
          className="w-full h-[808.14px]"
          src="/close-up-community-concept-with-hands 4.png"
        />
        <div className="absolute top-[100px] right-[164.25px] md:top-[270px] md:w-[589px] z-10  md:ml-[8%]">
          <h1 className="text-zinc-100 text-center uppercase font-calibri font-bold md:text-[50px] mb-4">
            our partners
          </h1>
          <p className="md:text-xl font-normal text-center font-calibri text-zinc-100">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </main>
      <PartnerBody />
      <CloserToFooter />
    </section>
  );
}
