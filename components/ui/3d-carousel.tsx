"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, index: number) => void
    controls: any
    cards: string[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 800 : 1200
    const faceCount = cards.length
    const faceWidth = Math.min(cylinderWidth / faceCount, 300) // Limit max width
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center bg-mauve-dark-2"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((imgUrl, i) => {
            const photo = personalPhotos[i];
            return (
              <motion.div
                key={`key-${imgUrl}-${i}`}
                className="absolute flex h-full origin-center items-center justify-center rounded-2xl bg-mauve-dark-2 p-2 group"
                style={{
                  width: `${faceWidth}px`,
                  maxWidth: "300px",
                  transform: `rotateY(${
                    i * (360 / faceCount)
                  }deg) translateZ(${radius}px)`,
                }}
                onClick={() => handleClick(imgUrl, i)}
              >
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                  <motion.img
                    src={imgUrl}
                    alt={photo.alt}
                    layoutId={`img-${imgUrl}`}
                    className="pointer-events-none w-full h-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                    initial={{ filter: "blur(4px)" }}
                    layout="position"
                    animate={{ filter: "blur(0px)" }}
                    transition={transition}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{photo.title}</h3>
                      <p className="text-sm text-white/90">{photo.description}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    )
  }
)

const personalPhotos = [
  {
    src: "/about me/UT mens lacrosse photo.png",
    alt: "Playing lacrosse at UT Austin, showcasing teamwork and athletic dedication",
    title: "UT Men's Lacrosse",
    description: "Building leadership and teamwork on the field"
  },
  {
    src: "/about me/at Texas OU with my fraternity.png",
    alt: "Celebrating with fraternity brothers at the Texas OU game, highlighting community and friendship",
    title: "Texas OU Weekend",
    description: "Creating lifelong bonds and memories"
  },
  {
    src: "/about me/family photo after climbing moutain.png",
    alt: "Family photo after successfully climbing a mountain, representing adventure and family bonds",
    title: "Mountain Adventures",
    description: "Conquering peaks with family by my side"
  },
  {
    src: "/about me/roux my dog.png",
    alt: "My dog Roux, a loyal companion during coding sessions and adventures",
    title: "Meet Roux",
    description: "My faithful companion and coding buddy"
  }
];

function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  const cards = useMemo(
    () => personalPhotos.map((photo) => photo.src),
    []
  )

  useEffect(() => {
    console.log("Cards loaded:", cards)
  }, [cards])

  const handleClick = (imgUrl: string) => {
    setActiveImg(imgUrl)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative h-full">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.img
              src={activeImg}
              alt="Selected photo"
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
              layoutId={`img-${activeImg}`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Carousel
        handleClick={handleClick}
        controls={controls}
        cards={cards}
        isCarouselActive={isCarouselActive}
      />
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };
