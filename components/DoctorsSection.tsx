"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DoctorsSection() {
  return (
    <section
      id="bac-si"
      className="relative overflow-hidden [overflow-x:clip]"
      style={{
        backgroundImage: "url(/images/backdrop_final.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "700px",
        position: "relative",
      }}
    >
      <div className="container mx-auto flex min-h-[700px] lg:min-h-[850px] max-w-6xl items-center justify-center px-4">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="mx-auto flex w-full justify-center"
          >
            <Image
              src="/images/doctor-4.png"
              alt="Doctors"
              width={400}
              height={400}
              sizes="(max-width: 640px) 90vw, 400px"
              className="h-auto w-[90vw] max-w-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
