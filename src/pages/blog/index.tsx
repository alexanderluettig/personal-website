import Head from 'next/head';
import fs from 'fs';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import matter from 'gray-matter';
import BlogPreview, {
    BlogPostPreviewData,
} from '../../components/blog/blogPreview';

interface PostByYears {
    [year: number]: BlogPostPreviewData[];
}

export const getStaticProps: GetStaticProps<{
    years: PostByYears;
}> = async () => {
    const folder = './data/blog-posts';
    const paths = fs.readdirSync(folder);
    paths.filter((path) => fs.existsSync(folder + '/' + path));

    const posts: PostByYears = {};
    paths.forEach((year) => {
        const files = fs.readdirSync(folder + '/' + year);
        var postInYear = files.map((title) => {
            const file = `${folder}/${year}/${title}`;
            const content = fs.readFileSync(file, 'utf8');
            const matterResult = matter(content);

            return {
                title: matterResult.data.title,
                subtitle: matterResult.data.subtitle,
                date: matterResult.data.date,
                description: matterResult.data.description,
                categories: matterResult.data.category,
                year: year,
                slug: title.replace('.md', ''),
            };
        });

        posts[+year] = postInYear;
    });

    return {
        props: {
            years: posts,
        },
    };
};

const Blog = ({ years }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>

            <div className="overflow-hidden overflow-y-auto h-full border-2 rounded border-dark-yellow w-full flex flex-col">
                {Object.keys(years)
                    .sort((a, b) => +b - +a)
                    .map((year) => (
                        <div key={year}>
                            <h1 className="text-4xl m-4 border-b-2 text-center">
                                {year}
                            </h1>
                            <div className="flex flex-row flex-wrap grow justify-start large:gap-[1%] medium:gap-[3%] pr-10 pl-10">
                                {years[year].map(
                                    (post: BlogPostPreviewData) => (
                                        <BlogPreview
                                            key={post.title}
                                            post={post}
                                        />
                                    ),
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Blog;
