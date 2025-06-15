import Link from 'next/link';
import BlogTag from './blogTag';

export interface BlogPostPreviewData {
    year: string;
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    description: string;
    tags: string | string[];
}

export interface BlogPostPreview {
    post: BlogPostPreviewData;
}

const BlogPreview: React.FC<BlogPostPreview> = ({ post }) => {
    return (
        <div key={post.title} className="w-[45%] grow">
            <Link href={`/blog/${post.year}/${post.slug}`}>
                <div className=" flex flex-col hover:cursor-pointer border-2 rounded-sm border-light-yellow p-2 m-2">
                    <div className="mb-2">
                        <h1 className="text-2xl">{post.title}</h1>
                        <h2 className="text-sm">{post.subtitle}</h2>
                    </div>
                    <div className=" overflow-hidden overflow-x-auto flex flex-row mb-1 h-7">
                        {typeof post.tags === 'string' ? (
                            <BlogTag tag={post.tags} />
                        ) : (
                            post.tags.map((category) => (
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
