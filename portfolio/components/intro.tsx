import Image from "next/image";
import React from "react";

export default function intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=60&w=1400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fCVFQyU5RCVCQyVFQiU5RiVBQyVFQyU4QSVBNCVFRCU4QSVCOHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Hanseul portrait"
            width={192}
            height={192}
            quality={95}
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />

          <span className="absolute bottom-0 right-0 text-4xl">👋🏻</span>
        </div>
      </div>
    </section>
  );
}
