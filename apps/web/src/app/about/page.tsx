// import Image, { StaticImageData } from "next/image";
// import company from "@/assets/company-md.jpg";
// import { IconTruckDelivery, IconUsersGroup, IconHeartHandshake, IconBrandGithub } from "@tabler/icons-react";
// import type { Icon } from "@tabler/icons-react";
// import agis from "@/assets/members/agis.jpg";
// import rayan from "@/assets/members/rayan.jpg";
// import shy from "@/assets/members/shy.jpg";
// import thomas from "@/assets/members/thomas.jpg";
// import tony from "@/assets/members/tony.jpg";
// import myFont from "@/lib/customFont";

export default function AboutPage() {
  return (
    <>
      <p>Hello</p>
    </>
    // <main>
    //   <section className="min-h-screen pb-16 mb-16 pt-24 bg-gradient about-gradient flex px-16 flex-col items-center relative justify-center">
    //     <span className={`${myFont.className}  text-gradient`}>About us</span>
    //     <h1 className="text-6xl font-heading text-center mb-10">Some slogan</h1>
    //     <p style={{ width: "clamp(36ch, 90%, 72ch)" }} className="text-center mx-auto mb-10">
    //       Irure sit elit ad dolor nostrud tempor tempor commodo nostrud do consectetur. Irure excepteur
    //       officia exercitation eu cupidatat. Et anim irure enim magna proident veniam culpa nisi ex ea
    //       consectetur. Proident nulla aliquip proident et anim ipsum excepteur cupidatat et deserunt do id
    //       non. Ex in ullamco ea Lorem mollit anim ex ut exercitation. Ipsum ut aliquip irure non tempor ipsum
    //       reprehenderit Lorem aliquip.
    //     </p>
    //     <Image src={company} alt={""} className="rounded-md" />
    //   </section>
    //   <section className="px-16 mb-52">
    //     <h2 className="text-4xl mb-5 font-heading text-center">Our values</h2>
    //     <p className="text-center mb-20">
    //       Amet non amet do nisi in sit magna eiusmod esse cillum commodo dolor ipsum velit.
    //     </p>

    //     <div className="grid grid-cols-12">
    //       <Value
    //         lineGradient="from-primary-400 to-secondary-400"
    //         title="High quality shipping"
    //         Icon={IconTruckDelivery}
    //         titleGradient="from-primary-300 to-primary-50"
    //         iconGradient="icon-gradient"
    //         iconColor="text-primary-200"
    //       />
    //       <Value
    //         lineGradient="from-secondary-400 to-tertiary-400"
    //         title="Reliability"
    //         Icon={IconUsersGroup}
    //         titleGradient="from-secondary-300 to-secondary-50"
    //         iconGradient="icon-gradient-2"
    //         iconColor="text-secondary-200"
    //       />

    //       <Value
    //         lineGradient="from-tertiary-400 to-primary-400"
    //         titleGradient="from-tertiary-300 to-tertiary-50"
    //         iconGradient="icon-gradient-3"
    //         title="Be supportive"
    //         iconColor="text-tertiary-200"
    //         Icon={IconHeartHandshake}
    //       />
    //     </div>
    //   </section>
    //   <section className="px-16 mb-36">
    //     <h2 className="font-heading text-4xl text-center mb-4">Meet the team</h2>
    //     <p style={{ width: "clamp(36ch, 80%, 72ch)" }} className="text-center mx-auto mb-20">
    //       Enim proident anim esse ex anim ex.
    //     </p>
    //     <div className="flex gap-4 flex-wrap justify-center">
    //       <Member image={rayan} title="Co-Founder & CEO" name="Rayan Louisy" />
    //       <Member image={tony} title="Co-Founder & CTO" name="Anthony Phillis" />
    //       <Member image={thomas} title="Software Engineer" name="Thomas Maaroufi" />
    //       <Member image={agis} title="Front-end Engineer" name="Agis Carty" />
    //       <Member image={shy} title="Eletrical Engineer" name="Shy Emmanuel" />
    //     </div>
    //   </section>
    // </main>
  );
}

// type PropTypes = {
//   title: string;
//   Icon: Icon;
//   iconGradient: string;
//   iconColor: string;
//   titleGradient: string;
//   lineGradient: string;
// };

// function Value({ Icon, iconGradient, title, iconColor, titleGradient, lineGradient }: PropTypes) {
//   return (
//     <>
//       <div className="col-start-1 flex-col gap-2 flex items-center ">
//         <span className="w-12 h-12 flex rounded-full items-center justify-center relative">
//           <div className={`${iconGradient} w-full h-full absolute top-0 left-0  blur-md`}></div>
//           <span className={`relative ${iconColor}`}>
//             <Icon size={36} />
//           </span>
//         </span>
//         <div className={`grow w-1 rounded-sm  bg-gradient-to-b ${lineGradient}`}></div>
//       </div>
//       <div className="col-span-11 pb-20 last-of-type:pb-0">
//         <h3
//           className={`bg-gradient-to-r ${titleGradient} bg-clip-text text-neutral-50/0 font-heading
//           text-2xl mb-4`}
//         >
//           {title}
//         </h3>
//         <p className="w-2/4 text-lg mb-7">
//           Ut aute ipsum est est excepteur. Eu fugiat reprehenderit et elit aliqua eu adipisicing eu. Ex magna
//           sunt enim sit pariatur id ea duis sunt fugiat. Duis eu irure nostrud minim qui ex do laboris quis.
//           Magna aute pariatur et quis excepteur. Officia eu veniam commodo do est sit veniam culpa.
//         </p>
//         <div className="h-64 w-full rounded-xl bg-neutral-800"></div>
//       </div>
//     </>
//   );
// }

// type Props = {
//   name: string;
//   title: string;
//   image: StaticImageData;
// };

// function Member({ image, name, title }: Props) {
//   return (
//     <div className="rounded-xl basis-1/4 justify-center px-4 py-5 bg-neutral-800 flex flex-col items-center">
//       <Image src={image} alt={""} className="w-24 h-24 rounded-full mb-4" />
//       <p className="mb-1 text-lg text-primary-50">{name}</p>
//       <p className="text-neutral-200 mb-4">{title}</p>
//       <div className="flex gap-4 text-neutral-300">
//         <IconBrandGithub />
//       </div>
//     </div>
//   );
// }
