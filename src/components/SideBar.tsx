import ThemeToggle from "./ThemeToggle";

export const SideBar = () => {
    return (
        <div className="bg-gray-800 dark:bg-white w-full lg:w-20 h-20 lg:h-full rounded-xl drop-shadow-lg">
            <div className="flex flex-col items-center justify-center gap-4">
                <ThemeToggle />
            </div>
        </div>
    );
};