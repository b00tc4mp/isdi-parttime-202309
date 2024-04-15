import React, { useState } from'react'

export default function CarouselHome () {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
      'https://t2.ea.ltmcdn.com/es/razas/9/3/3/alaskan-malamute-o-malamute-de-alaska_339_0_orig.jpg',
      'https://i.ytimg.com/vi/5wpjdJB3Cbo/maxresdefault.jpg',
      'https://i.pinimg.com/1200x/c1/72/d3/c172d386dbae7cd1af37cbea5cc47a94.jpg',
      'https://m.vanguardia.com/sites/default/files/foto_interna/2018/03/05/gal_malamute.jpg',
      'https://m.media-amazon.com/images/I/81uQHbForXL.jpg',
      'https://nutritienda-cdn.sirv.com/catalog/big/x/116193-taste-of-the-wild-taste-canine-puppy-pacific-stream-salmon-5-6kg-v2.jpg?scale.width=560'
    ]

    const text = [
        `A long time ago, primitive spheres found themselves embroiled in a war against a more advanced race of triangles. It was a cruel and unbalenced battle.`,
        `The triangles emerged victorious, forcing the spheres to flee and seek refuge underground through a hidden passage that was impossible for the triangles to enter.`,
        `Unwilling to take any chances, the triangles sealed off the passage, leaving the spheres to survive in isolation underground for centuries.`,
        `Unbeknownst to the spheres, the triangles eventually turned against each other, engulfed in their own conflicts. Meanwhile, the spheres thrived in their underground realm, oblivious to the troubles unfolding above.`,
        `With the demise of the triangles, the sealed passage started to deteriorate, allowing fragments of the surface world to seep through to the spheres' subterranean abode.`,
        `Filled with curiosity and a longing to be closer to their spherical deities—the sun and the moons—the spheres made the audacious decision to venture back to the surface.`,
        `As the spheres emerged onto the surface, their underground civilization was gradually forgotten, replaced by a new, peaceful, and round world.`,
        `However, the legend of the ancient city of Ballopolis persisted throughout the centuries, and countless individuals sought to reach it in search of its fabled treasures.`,
        `Building precarious passages, these treasure hunters would launch bombs, uncertain if they would explode or not, to gain access to the lower levels of the subterranean maze. They also dropped first aid kits as a precautionary measure.`,
        `Some adventurers united and formed the rider's guild. A group for those who chose to explore this underground mazes, avoiding bombs, tunneling through layers of dirt, and braving treacherous holes in their relentless pursuit of the treasures of Ballopolis.`,
    ]

    function goToSlide (index) {
        setActiveIndex(index)
    }

    function goToPreviousSlide () {
        if (activeIndex !== 0) {
            const newIndex = (activeIndex - 1)
            setActiveIndex(newIndex)
        }
    }

    function goToNextSlide () {
        if (activeIndex < text.length - 1) {
            const newIndex = (activeIndex + 1)
            setActiveIndex(newIndex)
        }
    }

    return (
        <>
            <div className="flex flex-col w-full bg-dark500 pb-24 myfont font-bold">
                <h2 className="text-primary300 text-4xl font-bold text-center pt-8 text-yellow-600">Alaska Malamute</h2>
                <div className="flex items-center justify-around pt-8">
                    <button
                        type="button"
                        onClick={goToPreviousSlide}
                        className={`border-0 bg-none p-0 ${activeIndex !== 0 ? 'text-primary100 hover:text-primary200' : 'text-dark500 cursor-default'}`}
                    >
                        <i className="text-6xl font-bold bi bi-chevron-left"></i>
                    </button>
                    <div>
                        <img src={images[activeIndex]} alt={`Slide ${activeIndex + 1}`} className="h-52 w-52 sm:h-96 sm:w-96 rounded-lg" />
                        <div className="mt-6 z-10 flex items-center justify-center border-0 self-center">
                            {text.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => goToSlide(index)}
                                    className={`mx-1 w-2 h-2 md:w-4 md:h-4 rounded-full ${index === activeIndex ? 'bg-primary500' : 'bg-light500 hover:bg-primary600'}`}
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={goToNextSlide}
                        className={`border-0 bg-none p-0 ${activeIndex < images.length - 1 ? 'text-primary100 hover:text-primary200' : 'text-dark500 cursor-default'} `}
                    >
                        <i className="text-6xl font-bold opacity-100 bi bi-chevron-right"></i>
                    </button>
                </div>
                <div className="relative h-52 md:h-40 lg:h-28 pt-2 px-4 md:px-24 lg:px-48 z-20 text-lg items-center justify-center flex text-center text-primary600">
                    <p>{text[activeIndex]}</p>
                </div>
            </div>
        </>
    )
}