import { LanguageSwitcher } from 'next-export-i18n';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // console.log("🚀 ~ file: Header.jsx:12 ~ Header ~ router", router);
  const { pathname } = router;
  const l = Object.keys(router.query).length;

  const ChangeLang = (lang) => {
    const query = { ...router.query, lang };
    l > 0
      ? router.push({ pathname: '/', query })
      : router.push({ pathname: '/', query: { lang: lang } });
  };

  const ChangeNav = (path) => {
    // console.log('router.query?.lang', router.query?.lang)
    router.query?.lang
      ? router.push({
          pathname: `/${path}`,
          query: { lang: router.query?.lang },
        })
      : router.push({ pathname: `/${path}` });
  };

  return (
    <header className="absolute top-0 right-0 w-full shadow-sm z-10 bg-white">
      <div className="flex justify-between px-2 md:px-8 items-center h-16 bg-white">
        {/* logo */}
        <div>
          <h1
            className="uppercase cursor-pointer mt-[14px] font-bangla-mn text-xl md:text-2xl leading-7"
            onClick={() => ChangeNav('/')}
          >
            mamshouse.
          </h1>
        </div>
        <nav className={`md:block ${isMobile ? 'block' : 'hidden'}`}>
          <ul
            className={`flex font-semibold text-sm gap-20 items-center ${
              isMobile &&
              'bg-white shadow-sm p-8 gap-8 absolute top-16 z-10 w-full left-0 flex-col'
            }`}
          >
            <li
              className={`cursor-pointer ${
                pathname === '/residences' && 'nav_item'
              }`}
              onClick={() => ChangeNav('residences')}
            >
              Résidences
            </li>
            <li
              className={`cursor-pointer ${
                pathname === '/activities' && 'nav_item'
              }`}
              onClick={() => ChangeNav('activities')}
            >
              Activités
            </li>
            <li
              className={`cursor-pointer ${
                pathname === '/contact' && 'nav_item'
              }`}
              onClick={() => ChangeNav('contact')}
            >
              Contact
            </li>
            <li className={`ml-6 cursor-pointer text-lg ${isMobile && 'ml-0'}`}>
              <Link href="https://www.instagram.com/mamshouse" target="_blank">
                <FaInstagram />
              </Link>
            </li>
            <div className="flex gap-4">
              <div onClick={() => ChangeLang('fr')}>
                <div className="hover:underline cursor-pointer">FR</div>
              </div>
              |
              <div onClick={() => ChangeLang('en')}>
                <div className="hover:underline cursor-pointer">EN</div>
              </div>
            </div>
          </ul>
        </nav>
        {/* hamburger */}
        <div className="block md:hidden">
          {isMobile ? (
            <GrClose
              size={26}
              className="pt-1 "
              onClick={() => setIsMobile(false)}
            />
          ) : (
            <FiMenu
              size={30}
              className="pt-1"
              onClick={() => setIsMobile(true)}
            />
          )}
        </div>
      </div>
    </header>
  );
}
