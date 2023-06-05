// components
import FeaturedProduct from '../Components/Home/FeaturedProduct'
import CategoryCard from '../Components/Shared/CategoryCard'
import BestGear from '../Components/Shared/BestGear'

export default function Home() {
  return (
    <section className='bg-lotion'>

      <div className="bg-[url('/home/mobile/image-header.jpg')] h-[37.5rem] w-full bg-no-repeat bg-cover bg-fixed bg-center flex flex-col items-center justify-center">
        <p className='text-white uppercase tracking-[0.625rem] opacity-50 mb-4'>
          New Product
        </p>
        <h1 className='mb-6 text-4xl text-center text-white'>
          xx99 mark ii headphones
        </h1>
        <p className='leading-[1.563rem] text-center text-white opacity-75 max-w-xs mb-8'>
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <button className='px-6 py-3 text-sm font-bold tracking-widest text-white uppercase bg-raw-siena'>
          see product
        </button>
      </div>

      <div className='flex flex-col px-6 mt-10 gap-y-8'>
        <CategoryCard category='headphones' image="/shared/desktop/image-category-thumbnail-headphones.png" />
        <CategoryCard category='speakers' image="/shared/desktop/image-category-thumbnail-speakers.png" />
        <CategoryCard category='earphones' image="/shared/desktop/image-category-thumbnail-earphones.png" />
      </div>

      <FeaturedProduct />

      <div className="bg-[url('/home/mobile/image-speaker-zx7.jpg')] bg-no-repeat bg-cover h-80 mx-6 rounded-lg mt-6 flex flex-col justify-center pl-6 gap-y-6">
        <h4>
          zx7 speaker
        </h4>
        <button className='w-40 py-3 text-xs font-bold uppercase border border-black tracking-[0.0625rem]'>
          see product
        </button>
      </div>

      <div className='flex flex-col mx-6 mt-6 gap-y-6'>
        <img src="/home/mobile/image-earphones-yx1.jpg" alt="earphones" className="rounded-lg"/>
        <div className='flex flex-col justify-center pl-6 rounded-lg h-52 bg-sea-shell gap-y-6'>
          <h4>
            yx1 earphones
          </h4>
          <button className='w-40 py-3 text-xs font-bold uppercase border border-black tracking-[0.0625rem]'>
            see product
          </button>
        </div>
      </div>

      <BestGear />
    </section>
  )
}