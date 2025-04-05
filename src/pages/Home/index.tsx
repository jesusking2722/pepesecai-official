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
  { label: "SECURITY", imgSrc: "security.svg", path: "security" },
  { label: "WHITEPAPER", imgSrc: "whitepaper.svg" },
  { label: "SOON", imgSrc: "soon1.svg" },
  { label: "SOON", imgSrc: "soon2.svg" },
  { label: "SOON", imgSrc: "soon3.svg" },
];

const mobileDownSections1: SectionCardItemType[] = [
  { label: "SECURITY", imgSrc: "security.svg", path: "security" },
  { label: "WHITEPAPER", imgSrc: "whitepaper.svg" },
];

const mobileDownSections2: SectionCardItemType[] = [
  { label: "SOON", imgSrc: "soon1.svg" },
  { label: "SOON", imgSrc: "soon2.svg" },
  { label: "SOON", imgSrc: "soon3.svg" },
];

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-14">
      <div className="hidden md:hidden lg:flex xl:flex flex-row justify-between">
        <div className="lg:basis-1/4 xl:basis-1/4 md:w-full">
          <img
            src="./assets/intro.gif"
            alt="Introduction"
            className="w-full h-auto z-50"
          />
        </div>
        <div className="lg:basis-1/2 xl:basis-1/2 md:basis-2/3 flex flex-col gap-4">
          <div className="flex flex-row gap-2">
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
            <div className="hidden lg:flex xl:flex">
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
        <div className="xl:basis-1/4 xl:relative">
          <img
            src="./assets/pepe soldier.svg"
            alt="PEPE solider"
            className="w-[400px] h-[400px] absolute -bottom-36 xl:-bottom-24 ml-10 md:hidden lg:flex xl:flex"
          />
        </div>
      </div>
      <div className="h-[400px] hidden md:hidden lg:flex xl:flex lg:flex-row xl:flex-row items-center justify-center gap-14">
        <SectionCardGroup items={downSections} />
      </div>
      <div className="hidden md:flex lg:hidden xl:hidden flex-col items-center justify-center p-4 gap-4">
        <div className="w-full">
          <img
            src="./assets/intro.gif"
            alt="Introduction"
            className="w-full h-auto z-50"
          />
        </div>
        <div className="w-full">
          <div className="flex flex-row items-center justify-between">
            <div className="md:basis-2/3 sm:w-full flex flex-col gap-4 bg-[#8CCFFF] bg-opacity-20 px-1 py-4 rounded-xl">
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
            <div className="basis-1/3 md:flex hidden">
              <img
                src="./assets/pepe judge.svg"
                alt="PEPE judge"
                className="md:flex sm:hidden w-full h-auto object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <SectionCardGroup items={topSections} />
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <SectionCardGroup items={downSections} />
        </div>
      </div>
      <div className="flex md:hidden lg:hidden xl:hidden flex-col items-center justify-center p-4 gap-4">
        <div className="w-full">
          <img
            src="./assets/intro.gif"
            alt="Introduction"
            className="w-full h-auto z-50"
          />
        </div>
        <div className="w-full">
          <div className="flex flex-row items-center justify-between">
            <div className="md:basis-2/3 sm:w-full flex flex-col gap-4 bg-[#8CCFFF] bg-opacity-20 px-1 py-4 rounded-xl">
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
            <div className="basis-1/3 md:flex hidden">
              <img
                src="./assets/pepe judge.svg"
                alt="PEPE judge"
                className="md:flex sm:hidden w-full h-auto object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <SectionCardGroup items={topSections} />
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <SectionCardGroup items={mobileDownSections1} />
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <SectionCardGroup items={mobileDownSections2} />
        </div>
      </div>
    </div>
  );
};

export default Home;
