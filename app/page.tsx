"use client";

import Image from "next/image";
import { socialLinks } from "./config";
import { FlipWords } from "../src/components/ui/flip-words";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const words = ["Software Engineer", "Writer", "Photographer", "Programmer"];
  const email = "shricse07@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section>
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center">
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <Image
            src="/profile.png"
            alt="Shrikrushna Gundre Profile Photo"
            className="rounded-full bg-gray-100 mb-5 transition duration-300 ease-in-out hover:grayscale-0 grayscale"
            unoptimized
            width={160}
            height={160}
            priority
          />
        </a>
        <h1 className="text-4xl font-bold mb-2">Shrikrushna Gundre</h1>
        <div>
          <FlipWords words={words} className="text-2xl text-foreground" /> <br />
        </div>
      </div>

      {/* Main Content */}
      <div className="prose dark:prose-invert text-foreground px-4 mr-3 ml-3">
        {/* About Section */}
        <section>
          <p>
            Hey, I'm Shrikrushna. I'm a passionate problem solver fueled by my
            love for computer science, and I thrive on challenges.
          </p>
          <p>
            I like machine learning and web3, and especially I like both of them
            together.
          </p>
          <p>
            I am currently working on building full stack applications, AI
            agents, and handling cloud infrastructure at Tecell.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mt-10">
          <div className="text-center font-thin">
            <a href="https://drive.google.com/file/d/12GnO1sORPzmPTiGzQcv5dU0_t-LTFPtR/view">peek into my cv</a>
          </div>
          <div className="flex items-center space-x-2 mt-2 font-mono justify-center">
            contact: <h6 className="ml-2">{email}</h6>
            <button onClick={handleCopy} className="">
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>

            {/* copied && <p className="text-sm text-green-500">Copied!</p> */}
          </div>
        </section>
      </div>
    </section>
  );
}
