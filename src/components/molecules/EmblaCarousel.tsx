import { Children, useCallback, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";

// Lucide Icons
import { ChevronLeft, ChevronRight } from "lucide-react";

type EmblaCarouselProps = {
  children: ReactNode;
  options?: EmblaOptionsType;
};

const buttonClassName = `
    shrink-0 self-center p-2 rounded-xl
    border border-iris-normal/30
    bg-iris-night text-lavender-light
    transition-all hover:bg-iris-normal active:scale-95
    disabled:opacity-40 disabled:hover:bg-iris-night dark:disabled:hover:bg-iris-light
    cursor-pointer disabled:cursor-not-allowed
    dark:bg-iris-light dark:text-iris-shadow
    dark:border-iris-soft/30 dark:hover:bg-iris-soft
`;

export function EmblaCarousel({ children, options }: EmblaCarouselProps) {
  const slides = Children.toArray(children);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: slides.length >= 4,
    align: "center",
    slidesToScroll: 1,
    ...options,
  });

  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!emblaApi) return () => {};

      emblaApi.on("reInit", onChange).on("select", onChange);

      return () => {
        emblaApi.off("reInit", onChange).off("select", onChange);
      };
    },
    [emblaApi],
  );

  const canScrollPrev = useSyncExternalStore(
    subscribe,
    () => emblaApi?.canScrollPrev() ?? false,
    () => false,
  );

  const canScrollNext = useSyncExternalStore(
    subscribe,
    () => emblaApi?.canScrollNext() ?? false,
    () => false,
  );

  const goToPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const goToNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="w-full flex gap-4">
      <button
        type="button"
        onClick={goToPrev}
        disabled={!canScrollPrev}
        aria-label="Anterior"
        className={buttonClassName}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <div className="flex-1 min-w-0 overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {Children.toArray(children).map((child, index) => (
            <div
              key={index}
              className="flex min-w-0 shrink-0 grow-0 basis-full p-4 md:basis-1/2"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={goToNext}
        disabled={!canScrollNext}
        aria-label="Próximo"
        className={buttonClassName}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default EmblaCarousel;
