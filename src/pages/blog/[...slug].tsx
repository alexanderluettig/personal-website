import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';
import matter from 'gray-matter';
import { Remark } from 'react-remark';
import torchlight from 'remark-torchlight';
import remarkGfm from 'remark-gfm';

export interface PostSlugProps extends ParsedUrlQuery {
    title: string;
    year: string;
}

export interface PostProps {
    title: string;
    year: string;
    content: string;
    date: string;
}

export const getStaticProps: GetStaticProps<PostProps> = async ({
    params,
}: {
    params: {
        slug: string[];
    };
}) => {
    var [year, title] = params.slug;
    const folder = './data/blog-posts';
    const file = `${folder}/${year}/${title}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);

    return {
        props: {
            title: matterResult.data.title,
            year: year,
            content: matterResult.content,
            date: matterResult.data.date,
        },
    };
};

export const getStaticPaths: GetStaticPaths<PostSlugProps> = async () => {
    const folder = './data/blog-posts';
    const years = fs.readdirSync(folder);

    var paths = years
        .map((year) => {
            const files = fs.readdirSync(folder + '/' + year);

            return files.map(
                (title) => `/blog/${year}/${title.replace('.md', '')}`,
            );
        })
        .flat();

    return {
        paths,
        fallback: false,
    };
};

const BlogPost = ({
    content,
    date,
    title,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div className="h-full w-full overflow-hidden overflow-y-scroll border-2 rounded border-dark-yellow p-10">
            <div className="mb-5">
                <h1 className="text-center text-4xl font-bold">{title}</h1>
                <h2 className="text-center">{date}</h2>
            </div>
            <article className="prose-invert prose-sm prose-headings:text-center prose-img:mx-auto">
                <Remark remarkPlugins={[torchlight]}>{content}</Remark>
            </article>
        </div>
    );
};

export default BlogPost;
