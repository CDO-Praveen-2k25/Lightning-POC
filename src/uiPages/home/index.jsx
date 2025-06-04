import React from "react";
import ImageGallery from "./section/ImageGallery";

export default function HomePage() {
  return (
    <main className="md:h-[calc(100dvh-64px)] flex items-center justify-center bg-blue-400">
      <ImageGallery />
    </main>
  );
}
