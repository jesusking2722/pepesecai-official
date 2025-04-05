import React, { FC } from "react";
import { Link } from "react-router-dom";

export type SectionCardItemType = {
  label: string;
  imgSrc: string;
  path?: string;
  soon?: boolean;
};

interface SectionCardGroupProps {
  items: SectionCardItemType[];
}

const SectionCardGroup: FC<SectionCardGroupProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          className="lg:w-[250px] xl:w-[250px] md:w-[120px] w-[120px]"
          key={index}
        >
          <div className="p-1 rounded-2xl border-2 border-[#9BD4E2] flex items-center justify-center">
            <Link
              to={item.path ?? "#"}
              className="text-[#9BD4E2] font-sans text-sm font-semibold"
            >
              {item.label}
            </Link>
          </div>
          <div className="w-full rounded-xl">
            <img
              src={`./assets/${item.imgSrc}`}
              alt={item.imgSrc.split(".")[0]}
              className="w-full h-auto rounded-xl"
            />
            {item.soon && (
              <img
                src="./assets/soon.svg"
                alt="soon"
                className="absolute bottom-0"
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionCardGroup;
