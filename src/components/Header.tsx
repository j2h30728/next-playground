import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/">HOME</Link>
      <Link href="/about">ABOUT</Link>
    </div>
  );
};

export default Header;
