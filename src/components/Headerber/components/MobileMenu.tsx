
import Link from "next/link"


// 定义 props 类型
interface MobileMenuProps {
  isMobileMenuOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMobileMenuOpen })=>{

   console.log(isMobileMenuOpen)
   const navItems = ['房产', '招聘', '二手车', '二手市场'];
    
    return(
         <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-white px-4 pt-4 pb-8`}
      >
        {/* Mobile Navigation */}
        <nav>
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href="#" className="text-gray-700 hover:text-[#FF5A5F] block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Search Bar */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="搜索职位、房产等"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#FF5A5F] focus:ring-1 focus:ring-[#FF5A5F]"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Login and Register Buttons */}
        <div className="flex items-center space-x-4 mt-4 justify-center">
          <Link
            href="#"
            className="text-gray-700 active:text-white rounded-full px-4 py-2 active:bg-amber-700 hover:text-white  hover:bg-[#FF5A5F] font-medium"
          >
            登录
          </Link>
          <Link
            href="#"
            className=" hover:text-white active:text-white rounded-full active:bg-amber-700  px-4 py-2  hover:bg-[#e6494d] font-medium"
          >
            注册
          </Link>
        </div>
      </div>
    )
}
export default MobileMenu;