interface SearchBarProps {
    callback: (query: string) => void;
    placeholderText: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ callback, placeholderText }) => {
    return (
        <>
            <input
                type="text"
                onInput={(e) => callback(e.currentTarget.value)}
                placeholder={placeholderText}
                className="text-ellipsis text-xs medium:text-xl p-3 text-center bg-light-foreground border-none rounded w-full focus:outline-none"
            />
        </>
    );
};

export default SearchBar;
