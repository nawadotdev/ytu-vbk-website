import Image from "next/image";
import { sanityUrlFor } from "@/lib/sanity";
import type { PortableTextComponents } from "@portabletext/react";

type ImageValue = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
};

export const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const v = value as ImageValue;
      const url = sanityUrlFor(v).url();

      return (
        <div className="my-6 flex justify-center">
          <Image
            src={url}
            alt={v.alt || "Blog image"}
            width={900}
            height={600}
            className="rounded-xl border object-contain"
          />
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => {
      return <p className="leading-7 my-4">{children}</p>;
    },
    h1: ({ children }) => {
      return <h1 className="text-4xl font-bold my-4">{children}</h1>;
    },
    h2: ({ children }) => {
      return <h2 className="text-3xl font-bold my-4">{children}</h2>;
    },
    h3: ({ children }) => {
      return <h3 className="text-2xl font-bold my-4">{children}</h3>;
    },
    h4: ({ children }) => {
      return <h4 className="text-xl font-bold my-4">{children}</h4>;
    },
    h5: ({ children }) => {
      return <h5 className="text-lg font-bold my-4">{children}</h5>;
    },
    h6: ({ children }) => {
      return <h6 className="text-base font-bold my-4">{children}</h6>;
    },
  },
};
