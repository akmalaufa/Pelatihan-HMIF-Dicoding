const Footer = () => {
  return (
    <>
    <div className="flex mx-20 pt-20 pb-7 gap-60">
      <div className="space-y-6">
        <div>
          <img src="/dicoding.png" alt="" />
        </div>
        <div>
          <p>Dicoding Space</p>
          <p>Jl. Batik Kumeli No.50, Sukaluyu,</p>
          <p>Kec. Cibeunying Kaler, Kota Bandung</p>
          <p>Jawa Barat 40123</p>  
        </div>
        <div className="flex gap-8">
          <img className="w-6" src="/logoighitam.png" alt="" />
          <img className="w-6" src="/twitterhitam.png" alt="" />
          <img className="w-8" src="/yutub.png" alt="" />
          <img className="w-8" src="/fb.png" alt="" />
        </div>
        <div className="py-16 space-y-6">
          <p className="font-semibold">Penghargaan</p>
          <img className="w-32" src="/penghargaan.png" alt="" />
        </div>
      </div>

      <div className="space-y-5 ">
        <div className="space-y-3 font-bold text-4xl">
          <p>Decode Ideas</p>
          <p>Discover Potential</p>
        </div>
          <p className="text-xm">Tentang Kami</p>
      </div>

      <div className="space-y-5">
        <p>Blog</p>
        <p>Reward</p>
        <p>Showcase</p>
        <p>Dicoding Elite</p>
      </div>

      <div className="space-y-5">
        <p>Hubungi Kami</p>
        <p>FAQ</p>
      </div>

    </div>

    <div className="w-full px-24 py-4">
      <div className="w-full h-[1px] bg-[#e5e5e5]"></div>
    </div>

    <div className="flex text-sm justify-between px-24 pb-3">
      <p className="mr-64">&copy; 2023 Dicoding | Dicoding adalah merek milik PT Presentologics, perusahaan induk dari PT Dicoding Akademi Indonesia.</p>
      <p>Terms Privacy</p>
    </div>
    </>
  )
}

export default Footer