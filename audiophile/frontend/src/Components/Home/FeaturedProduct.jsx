export default function FeaturedProduct() {
  return (
    <section className="bg-[url('/home/desktop/pattern-circles.svg')] bg-no-repeat bg-cover bg-center flex flex-col items-center py-12 mx-6 mt-32 text-white rounded-lg bg-raw-siena">
      <img src="/home/mobile/image-speaker-zx9.png" alt="zx9 speaker" className="h-52"/>
      <h3 className="max-w-[14rem] mt-8 text-4xl text-center mb-6">
        zx9 speaker
      </h3>
      <p className="mb-6 text-center opacity-75">
        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
      </p>
      <button className="py-3 text-sm font-bold tracking-widest uppercase bg-black px-7">
        see product
      </button>
    </section>
  )
}