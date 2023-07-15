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
        <div className="overflow-hidden h-[100px] flex flex-row justify-between items-center mb-2 pl-3 pt-5 pb-5 border-2 rounded border-dark-red">
            <div className="flex flex-row items-center hover:cursor-pointer">
                <Link href="/">
                    <span className="mr-5 ml-5">
                        <Logo
                            color="white"
                            height={200}
                            width={100}
                            className="mr-6"
                        />
                    </span>
                </Link>
                {isIndex ? <IndexToggle /> : ''}
            </div>
            <div className="">
                <ul className="w-full flex flex-row justify-between [&>li]:mr-[20px] [&>li]:pb-1 [&>li]:hover:cursor-pointer [&>li]:border-b-2">
                    <li className="hover:text-dark-yellow">
                        <Link href={'/'}>
                            <span className="flex flex-row">
                                <BiHomeAlt2 size={20} className="mr-2" />
                                Home
                            </span>
                        </Link>
                    </li>
                    <li className="hover:text-dark-yellow">
                        <Link href={'/about'}>
                            <span className="flex flex-row">
                                <BsFilePerson size={20} className="mr-2" />
                                About
                            </span>
                        </Link>
                    </li>
                    <li className="hover:text-dark-yellow">
                        <Link href="/projects">
                            <span className="flex flex-row">
                                <BsCodeSquare size={20} className="mr-2" />
                                Projects
                            </span>
                        </Link>
                    </li>
                    <li className="hover:text-dark-yellow">
                        <Link href="/blog">
                            <span className="flex flex-row">
                                <BsVectorPen size={20} className="mr-2" />
                                Blog
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
                                Contact
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
