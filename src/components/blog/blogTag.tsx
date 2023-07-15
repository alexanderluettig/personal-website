interface TagProps {
    tag: string;
}

const BlogTag = ({ tag: tags }: TagProps) => {
    return (
        <div className="mr-2 mb-1 text-xs p-1 pl-3 pr-3 rounded-xl text-center flex items-center bg-dark-red">
            {tags}
        </div>
    );
};

export default BlogTag;
