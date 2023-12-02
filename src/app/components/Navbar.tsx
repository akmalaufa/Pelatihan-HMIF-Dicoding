const Navbar = () => {
  return (
    <nav>
        <div className="py-4 bg-[#f4f4f5] font-medium flex justify-center text-sm">
            Raih Kompetensi AI, Daftar Bangkit Academy 2024 Sekarang!   
        </div>
        <div className="flex px-36 py-4 items-center text-sm gap-10">
            <div className="flex items-center gap-10">
                <img src="/logo_dicoding.png"/>
                <p className="border text-[#7e8789] rounded-md py-3 pl-4 pr-12">Apa yang ingin anda pelajari?</p>
            </div>
            <div className="flex gap-5 font-medium">
                <p>Learning Path</p>
                <p>Langganan</p>
                <p>Program</p>
                <p>Lainnya</p>
            </div>
            <div className="flex gap-2 font-medium text-base self-end flex-1 justify-end">
                <p className="border-[1px] border-black py-2 px-6 ">Masuk</p>
                <p className="border py-2 px-6 bg-[#2d3e50] text-white">Daftar</p>
            </div>    
        </div>
    </nav>
  )
}

export default Navbar