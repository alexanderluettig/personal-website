import { useRouter } from 'next/router';
import { useState } from 'react';
import { BiTerminal } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';

export type Modes = 'terminal' | 'website';

const IndexToggle: React.FC = () => {
    const [active, setActive] = useState<Modes>('website');
    const router = useRouter();

    const changeMode = (mode: Modes) => {
        setActive(mode);
        router.push({ pathname: '/', search: `?view=${mode}` });
    };

    return (
        <div className="hidden medium:flex flex-row border-2 rounded-2xl border-light-yellow p-0 overflow-hidden hover:[&>div]:cursor-pointer">
            <div
                className={`flex flex-row p-2 border-2 border-transparent rounded transition *:mr-2 ${
                    active === 'website' ? 'bg-light-foreground' : ''
                }`}
                onClick={() => changeMode('website')}
            >
                <CgWebsite size={23} />
                Website
            </div>
            <div
                className={`flex flex-row p-2 border-2 border-transparent rounded transition *:mr-2 ${
                    active === 'terminal' ? 'bg-light-foreground' : ''
                }`}
                onClick={() => changeMode('terminal')}
            >
                <BiTerminal size={23} />
                Terminal
            </div>
        </div>
    );
};

export default IndexToggle;
