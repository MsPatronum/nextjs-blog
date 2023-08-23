import Layout from '../../components/layouts';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({params}){
    const postData = await getPostData(params.id);
    return{
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false, //If fallback is false, then any paths not returned by 
                         // getStaticPaths will result in a 404 page
    };
}

export default function Post({postData}) {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
            <Date dateString={postData.date}/>
        </div>
        
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
    </Layout>;
}