import Link from "next/link";

export default function Navbar() {
  return (
    
    <nav className="z-40 flex justify-between bheader">

      <Link className="font-bold bbtittle" href={"/"}>
      ✟BONUS BUY✟ 
      </Link>
      <div className="winner">
      </div>
    </nav>
    
  );
}
