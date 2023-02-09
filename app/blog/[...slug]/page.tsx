
import {delay} from "../../../lib/delay"

const getData = async (slug)=>{
    const post = await delay(5000)
    return {slug}
}

export default async function BlogPost({params}){
    const {slug} = params
    const post = await getData(slug)

    throw new Error('error')
    return <div>{post.slug}</div>
}