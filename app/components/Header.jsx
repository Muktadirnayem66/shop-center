import Image from 'next/image';
import menuImage from '@/public/assets/svg/menu.svg'
import logo from '@/public/assets/logo.png'
import Avater from '@/public/assets/svg/avatar.svg'
import ShoppingCart from '@/public/assets/svg/shopping-Cart.svg'
import Link from 'next/link';



const Header = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image src={menuImage} className="lg:hidden w-5 h-5" alt=" menu image" />
          <Link href="/">
            <Image src={logo} className="h-10 w-12" alt="logo" />
          </Link>
        </div>
        <div >
          <ul className="flex items-center font-bold justify-center gap-2 lg:gap-5 ">
            <Link href="/"><li>Home</li></Link>
            <Link href="/products"><li>Products</li></Link>
            <Link href="/category"><li>Category</li></Link>
            <Link href="/contact"><li>Contact us</li></Link>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Link href="/">
        <Image
          src={Avater}
          className="hidden lg:block w-[18px] h-[18px]"
          alt="login acount avatar"
        />
        </Link>
        <Link href="/">
        <Image
          src={ShoppingCart}
          className="block w-5 h-5"
          alt="shopping cart icon"
        />
        </Link>
       
      </div>
    </nav>
  );
};

export default Header;



