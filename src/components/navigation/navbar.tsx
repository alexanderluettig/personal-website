import { useRouter } from 'next/router';
import IndexToggle from './indexToggle';
import Link from 'next/link';

const Navigation: React.FC = () => {
    var router = useRouter();
    var isIndex = router.pathname === '/';

    return (
        <div className="h-[100px] flex flex-row justify-between items-center mb-2 pl-3 pt-5 pb-5 border-2 rounded dark:border-dark-red">
            <div className="flex flex-row items-center">
                <span className="mr-5 ml-5">Logo</span>
                {isIndex ? <IndexToggle /> : ''}
            </div>
            <div className="w-[50%]">
                <ul className="w-full flex flex-row justify-between [&>*]:mr-[20px]">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
