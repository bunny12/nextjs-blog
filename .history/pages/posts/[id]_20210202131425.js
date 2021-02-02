import Layout from '../../components/layout'
import { getAllPostIds } from '../../lib/posts'

export async function getStaticPorps({ params }) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
// export async function getStaticPaths() {
//     const paths = getAllPostIds()
//     return {
//         paths,
//         fallback: false
//     }
// }
export default function Post({ postData }) {
    return (
        <Layout>

        </Layout>
    )
}