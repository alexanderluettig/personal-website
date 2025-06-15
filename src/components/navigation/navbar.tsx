import { useRouter } from 'next/router';
import IndexToggle from './indexToggle';
import Link from 'next/link';
import { BiHomeAlt2 } from 'react-icons/bi';
import { BsCodeSquare, BsFilePerson, BsVectorPen } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';
import Logo from '../logo';

const Navigation: React.FC = () => {
    var router = useRouter();
    var isIndex = router.pathname === '/';

    return (
        <div className="overflow-hidden h-[100px] flex flex-row justify-between items-center mb-2 pl-3 pt-5 pb-5 border-2 rounded-sm border-dark-red">
            <div className="flex flex-row items-center hover:cursor-pointer">
                <Link href="/">
                    <span className="">
                        <Logo
                            color="white"
                            height={200}
                            width={100}
                            className="scale-75 sm:scale-100 mr-6 sm:ml-5"
                        />
                    </span>
                </Link>
                {isIndex ? <IndexToggle /> : ''}
            </div>
            <div>
                <ul className="w-full flex flex-row justify-between [&>li]:mr-[20px] [&>li]:pb-1 hover:[&>li]:cursor-pointer sm:[&>li]:border-b-2">
                    <li className="hover:text-dark-yellow">
                        <Link href={'/'}>
                            <div className="flex flex-row">
                                <BiHomeAlt2 size={20} className="mr-2" />
                                <div className="hidden sm:block">Home</div>
                            </div>
                        </Link>
                    </li>
                    <li className="hover:text-dark-yellow">
                        <Link href={'/about'}>
                            <span className="flex flex-row">
                                <BsFilePerson size={20} className="mr-2" />
                                <span className="hidden sm:block">About</span>
                            </span>
                        </Link>
                    </li>
                    <li className="hover:text-dark-yellow">
                        <Link href="/projects">
                            <span className="flex flex-row">
                                <BsCodeSquare size={20} className="mr-2" />
                                <span className="hidden sm:block">
                                    Projects
                                </span>
                            </span>
                        </Link>
                    </li>
                    <li className="hover:text-dark-yellow">
                        <Link href="/blog">
                            <span className="flex flex-row">
                                <BsVectorPen size={20} className="mr-2" />
                                <span className="hidden sm:block">Blog</span>
                            </span>
                        </Link>
                    </li>
                    <li className="hover:text-dark-yellow">
                        <Link href="/contact">
                            <span className="flex flex-row">
                                <MdOutlineMailOutline
                                    size={20}
                                    className="mr-2"
                                />
                                <span className="hidden sm:block">Contact</span>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
