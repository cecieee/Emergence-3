import React from "react";
import IvCard from "../../Components/Iv-Card/Iv-Card";
function Iv() {
    return (
        <div className="text-white font-montserrat my-36 mx-24 lg:block max-[650px]:mx-8 ">
            <h1 id="Ivs" className="text-4xl text-deep-orange font-bold tracking-wider uppercase lg:text-4xl mt-4 pt-10  max-[650px]:pb-12" data-aos="fade-up" data-aos-duration="1000">
                Industrial Visits
            </h1>
            <div className="flex flex-col items-center">
                <IvCard
                    img="./iv1.png"
                    title="ALIND Switch Gear Division"
                    title2="Mannar"
                    desc="ALIND Switchgear Division is the first RDSO approved Part-I Regular supplier of 25kV Single Pole/2x25 kV Double Pole Vacuum lnterruptors and Circuit Breakers to Indian Railways."
                ></IvCard>
                <IvCard
                    img="./iv2.png"
                    title="ASAP Community Skill Park"
                    title2="Kunnamthanam"
                    desc="The Electric Vehicle Center of Excellence at Kunnamthanam's ASAP Community Skill Park offers a unique chance to learn EV skills, from maintenance to infrastructure installation, for a sustainable transportation future."
                >
                </IvCard>
                <IvCard
                    img="./iv3.png"
                    title="KSEBL Edappon"
                    desc="The 220 KV substation in Edappon, operated by KSEB, plays a vital role in the region's power distribution network. With its advanced equipment and infrastructure, this substation ensures a dependable electricity supply to residential, commercial, and industrial areas."
                ></IvCard>
            </div>
        </div>);
}

export default Iv;