import Link from "next/link";

export default function About(){
    return (
        <div>
            <h1>About Page</h1><br/>
            <Link href="/">Go to home page</Link><br/><br/>

            <Link href="/about/aboutStudent">Go to about details</Link>
        </div>
    )
}