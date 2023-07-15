import Link from 'next/link';
import BlogTag from './blogTag';

export interface BlogPostPreviewData {
    year: string;
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    description: string;
    categories: string | string[];
}

export interface BlogPostPreview {
    post: BlogPostPreviewData;
}

const BlogPreview: React.FC<BlogPostPreview> = ({ post }) => {
    return (
        <div
            key={post.title}
            className="large:max-w-[30vw] w-full medium:max-w-[20vw]"
        >
            <Link href={`/blog/${post.year}/${post.slug}`}>
                <div className=" flex flex-col hover:cursor-pointer border-2 rounded border-light-yellow p-2 m-2">
                    <div className="mb-2">
                        <h1 className="text-2xl">{post.title}</h1>
                        <h2 className="text-sm">{post.subtitle}</h2>
                    </div>
                    <div className=" overflow-hidden overflow-x-auto flex flex-row mb-1 h-7">
                        {typeof post.categories === 'string' ? (
                            <BlogTag tag={post.categories} />
                        ) : (
                            post.categories.map((category) => (
                                <BlogTag key={category} tag={category} />
                            ))
                        )}
                    </div>
                    <div className="mb-4 text-xs">{post.date}</div>
                    <div>{post.description}</div>
                </div>
            </Link>
        </div>
    );
};

export default BlogPreview;
