import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";
import { StaticImages } from "./images-data";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default async function Photos() {
  // Fetch photos from Unsplash for the user "shricastic"
  const res = await fetch(
    `https://api.unsplash.com/users/shricastic/photos?client_id=gb3YffZyTEkzOaI9vZHChHUWqJj3L5_SvpbZGuJP08U`,
  );

  let images = StaticImages;

  if (!res.ok) {
    throw new Error("Failed to fetch photos from Unsplash");
  } else {
    const data = await res.json();

    images = data.map((photo: any) => ({
      src: photo.urls.regular,
      alt: photo.alt_description || "Unsplash Photo",
      href: photo.links.html,
    }));
  }

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid columns={3} images={images} />
    </section>
  );
}
