'use client'
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function Contact(){
    const router = useRouter()
    return <div>
        <h1>contact</h1>
        <Link href="/">Home</Link>
        <Link href={`/blog/kjkjk`}>Post</Link>
        <button type="button" onClick={()=> router.push('/')}>home</button>
    </div>
}