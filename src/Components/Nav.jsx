function Nav() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between text-white px-[2vw] pt-6">
      <div className="nav-left flex gap-[2vw] items-center justify-center">
        <h1 className="text-2xl font-[700] leading-tight">RIVEN</h1>
        <h3 className="font-[500]">WORKS</h3>
        <h3 className="font-[500]">ABOUT</h3>
      </div>
      <div className="nav-right flex gap-[2vw] items-center justify-center">
        <h3 className="font-[500]">CAREERS</h3>
        <h3 className="font-[500]">CONTACT</h3>
        <div className="bar h-[10px] w-[20px] rounded-lg bg-white"></div>
      </div>
    </nav>
  );
}

export default Nav;
