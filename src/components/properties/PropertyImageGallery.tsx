"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PropertyImageGalleryProps = {
  title: string;
  image: string;
  gallery: string[];
};

export function PropertyImageGallery({
  title,
  image,
  gallery,
}: PropertyImageGalleryProps) {
  const slides = useMemo(() => {
    const all = [image, ...gallery];
    return all.filter((src, i) => all.indexOf(src) === i);
  }, [image, gallery]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [slides]);

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((nextIndex + slides.length) % slides.length);
    },
    [slides.length],
  );

  const goPrev = useCallback(() => {
    setIndex((current) => (current - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext]);

  if (slides.length === 0) {
    return null;
  }

  const safeIndex = Math.min(index, slides.length - 1);
  const secondaryIndex =
    slides.length > 1 ? (safeIndex + 1) % slides.length : safeIndex;
  const currentSrc = slides[safeIndex];
  const secondarySrc = slides[secondaryIndex];

  return (
    <div>
      {slides.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`View image ${i + 1} of ${slides.length}`}
              aria-current={i === safeIndex ? "true" : undefined}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                i === safeIndex
                  ? "border-primary ring-2 ring-primary/40"
                  : "border-border opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt={`${title} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="96px"
                quality={90}
              />
            </button>
          ))}
        </div>
      )}

      {slides.length === 1 ? (
        <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-xl border border-border">
          <Image
            key={currentSrc}
            src={currentSrc}
            alt={`${title} — cover`}
            fill
            className="object-cover"
            sizes="100vw"
            quality={90}
            priority
          />
        </div>
      ) : (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              key={currentSrc}
              src={currentSrc}
              alt={`${title} — photo ${safeIndex + 1}`}
              fill
              className="object-cover"
              sizes="50vw"
              quality={90}
              priority
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              key={secondarySrc}
              src={secondarySrc}
              alt={`${title} — photo ${secondaryIndex + 1}`}
              fill
              className="object-cover"
              sizes="50vw"
              quality={90}
            />
          </div>
        </div>
      )}

      {slides.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-muted transition hover:border-primary hover:text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5">
            {slides.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === safeIndex ? "true" : undefined}
                className={`h-2 w-2 rounded-full transition ${
                  i === safeIndex
                    ? "bg-primary"
                    : "bg-border hover:bg-text-muted"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-muted transition hover:border-primary hover:text-white"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
