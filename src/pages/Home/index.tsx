import React from "react";
import Button from "../../components/common/Button";
import type { SectionCardItemType } from "../../components/common/SectionCardGroup";
import SectionCardGroup from "../../components/common/SectionCardGroup";

const topSections: SectionCardItemType[] = [
  { label: "LIVE CHART", imgSrc: "live chart.svg" },
  { label: "TOKENOMICS", imgSrc: "tokenomics.svg" },
  { label: "ROADMAP", imgSrc: "roadmap.svg" },
];

const downSections: SectionCardItemType[] = [
  { label: "SECURITY", imgSrc: "security.svg", path: "/security" },
  { label: "WHITEPAPER", imgSrc: "whitepaper.svg" },
  { label: "SOON", imgSrc: "soon1.svg" },
  { label: "SOON", imgSrc: "soon2.svg" },
  { label: "SOON", imgSrc: "soon3.svg" },
];

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-14">
      <div className="flex flex-row justify-between">
        <div className="basis-1/4">
          <img
            src="./assets/intro.gif"
            alt="Introduction"
            className="w-full h-auto z-50"
          />
        </div>
        <div className="basis-1/2 flex flex-col gap-4">
          <div className="flex flex-row">
            <div className="flex flex-col gap-10 bg-[#8CCFFF] bg-opacity-20 px-1 py-4 rounded-xl">
              <div>
                <h1 className="text-[#98D3E4] font-semibold text-[60px] font-sans tracking-[0.1em]">
                  PEPESEC AI
                </h1>
                <p className="text-[#98D3E4] text-lg font-sans ml-1">
                  NO PRESALE, NO BULlSHIT
                </p>
              </div>
              <div className="flex flex-row items-center justify-between gap-10">
                <div className="">
                  <p className="text-[#98D3E4] font-sans text-sm">
                    BECAUSE eVEN MeMES DESeRVe JUSTIcE!
                  </p>
                  <p className="text-[#98D3E4] font-sans text-sm">
                    Token-Staking {`>`} Da0-nft Boost
                  </p>
                </div>
                <div>
                  <Button type="primary" label="BUY" width={100} height={50} />
                </div>
              </div>
            </div>
            <div className="">
              <img
                src="./assets/pepe judge.svg"
                alt="PEPE judge"
                className="absolute w-[380px] h-[380px] -mt-14 -ml-10"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gap-10 mt-4">
            <SectionCardGroup items={topSections} />
          </div>
        </div>
        <div className="basis-1/4 relative w-full">
          <img
            src="./assets/pepe soldier.svg"
            alt="PEPE solider"
            className="w-[400px] h-[400px] absolute -bottom-36 ml-10"
          />
        </div>
      </div>
      <div className="h-[400px]">
        <div className="grid grid-cols-5 gap-14 p-20">
          <SectionCardGroup items={downSections} />
        </div>
      </div>
    </div>
  );
};

export default Home;
