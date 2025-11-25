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
  },
};
