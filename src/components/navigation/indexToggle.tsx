import { useState } from 'react';
import { BiTerminal } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';

const IndexToggle = () => {
    const [active, setActive] = useState('terminal');

    const changeMode = (mode: 'terminal' | 'website') => {
        setActive(mode);
    };

    return (
        <div className="flex flex-row border-2 rounded-2xl border-light-yellow p-0 overflow-hidden">
            <div
                className={`flex flex-row p-2 border-2 border-transparent rounded transition [&>*]:mr-2 ${
                    active === 'terminal' ? 'bg-light-foreground' : ''
                }`}
                onClick={() => changeMode('terminal')}
            >
                <BiTerminal size={23} />
                Terminal
            </div>
            <div
                className={`flex flex-row p-2 border-2 border-transparent rounded transition [&>*]:mr-2 ${
                    active === 'website' ? 'bg-light-foreground' : ''
                }`}
                onClick={() => changeMode('website')}
            >
                <CgWebsite size={23} />
                Website
            </div>
        </div>
    );
};

export default IndexToggle;
