import React from 'react'

function Products() {
  return (
    <div>Products</div>
  )
}

export default Products

{/* <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full h-full flex items-center justify-center "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="relative w-auto h-[400px] md:h-[88vh] m-3 "
            >
              <Image
                src={slide}
                alt={`Hero image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl"
                priority={index === 0}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper> */}