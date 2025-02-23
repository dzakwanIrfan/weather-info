import ThemeToggle from "./ThemeToggle";
import { Icon } from '@iconify-icon/react';

export const SideBar = () => {
    return (
        <div className="bg-gray-800 dark:bg-white lg:h-full rounded-xl drop-shadow-lg lg:flex">
            <div className="flex lg:flex-col flex-row items-center justify-between gap-4 lg:pr-0 pr-1 lg:pb-2">
                <a href="#" target="_blank" rel="noopener" className="flex items-center gap-4 font-serif">
                    <Icon icon="material-symbols:storm" className="text-2xl bg-blue-600 rounded-xl p-2 text-white" />
                    <p className="text-white dark:text-black lg:hidden">Storm Pulse</p>
                </a>
                <ThemeToggle />
            </div>
        </div>
    );
};

export default SideBar;