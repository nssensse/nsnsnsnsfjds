import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-40 flex justify-between bg-[#4d4d4d] px-60 py-6 bheader">
      <Link className="text-white font-bold text-xl" href={"/"}>
      ✱BONUS BUY✱
      </Link>
    </nav>
    
  );
}
