import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';

export interface PostSlugProps extends ParsedUrlQuery {
    title: string;
    year: string;
}

export interface PostProps {
    title: string;
    year: string;
    content: MDXRemoteSerializeResult;
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

    const mdxSource = await serialize(matterResult.content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [rehypeCodeTitles, rehypePrism],
        },
        scope: matterResult.data,
    });

    return {
        props: {
            title: matterResult.data.title,
            year: year,
            content: mdxSource,
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
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={title + '| Alexander Lüttig'}
                />
            </Head>
            <div className="h-full w-full overflow-hidden overflow-y-scroll border-2 rounded border-dark-yellow p-10">
                <div className="mb-5">
                    <h1 className="text-center text-4xl font-bold">{title}</h1>
                    <h2 className="text-center">{date}</h2>
                </div>
                <article className="prose-invert prose-sm prose-headings:text-center prose-img:mx-auto">
                    <MDXRemote {...content} />
                </article>
            </div>
        </>
    );
};

export default BlogPost;
