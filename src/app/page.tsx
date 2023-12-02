import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className='flex justify-center px-36 items-center text-[#3D3D3D] gap-4'>
          <div className='space-y-4'>
            <h1 className='text-[32px] font-medium max-w-md'>Bangun Karirmu Sebagai Developer Profesional</h1>
            <p className='pb-8 text-blue-300'>Mulai belajar terarah dengan learning path</p>
            <button className='bg-[#2d3e50] py-2 px-6 font-semibold rounded text-white'>Belajar Sekarang</button>
          </div>
          <Image src="/homepage-hero.png" alt="hero" width={600} height={600} /> 
        </section>
        <section className='bg-[#f4f4f5] mt-16 grid place-content-center py-16 space-y-4'>
          <h2 className='text-center text-2xl '>Our Profiles</h2>
          <div className='grid grid-cols-4 gap-4 px-32'>
            <div className='flex flex-col bg-white border rounded overflow-hidden h-[450px] w-full'>
              <div className='w-full h-72 relative'>
                <Image src="/beni.jpeg" alt="hero" fill className='object-cover' />
              </div>
              <div className='p-4'>
                <h3 className='font-medium'>Agnes</h3>
                <p className='text-sm'>Frontend Developer</p>
                <p className='text-sm mt-4 italic'>"You can believe in your god, but i believe in satanic"</p>
              </div>
            </div>
            <div className='flex flex-col bg-white border rounded overflow-hidden h-[450px] w-full'>
              <div className='w-full h-72 relative'>
                <Image src="/diyok.jpeg" alt="hero" fill className='object-cover' />
              </div>
              <div className='p-4'>
                <h3 className='font-medium'>Dioba Rizki</h3>
                <p className='text-sm'>Frontend Developer</p>
                <p className='text-sm mt-4 italic'>"Mendengarkan musik dongker!!!"</p>
              </div>
            </div>
            <div className='flex flex-col bg-white border rounded overflow-hidden h-[450px] w-full'>
              <div className='w-full h-72 relative'>
                <Image src="/AL.jpeg" alt="hero" fill className='object-cover' />
              </div>
              <div className='p-4'>
                <h3 className='font-medium'>Raj Alam</h3>
                <p className='text-sm'>Frontend Developer</p>
                <p className='text-sm mt-4 italic'>"Hidup yang keras butuh musik yang keras juga"</p>
              </div>
            </div>
            <div className='flex flex-col bg-white border rounded overflow-hidden h-[450px] w-full'>
              <div className='w-full h-72 relative'>
                <Image src="/akmal.jpeg" alt="hero" fill className='object-cover' />
              </div>
              <div className='p-4'>
                <h3 className='font-medium'>Akmal Aufa Alim</h3>
                <p className='text-sm'>Frontend Developer</p>
                <p className='text-sm mt-4 italic'>"Musik tuh SHOEGAZE!!!"</p>
              </div>
            </div>
            <div>
              <div className='flex flex-col bg-white border rounded overflow-hidden h-[450px] w-full'>
                <div className='w-full h-72 relative'>
                <Image src="/Nandax.jpeg" alt="hero" fill className='object-cover' />
                </div>

              </div>
              <div className="p-4">
                <h3 className='font-medium'> Ananda Putra Andika</h3>
                <p className='text-sm'>Frontend Developer</p>
                <p className='text-sm mt-4 italic'>Iyh ajh</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
