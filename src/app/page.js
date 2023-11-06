'use client'
import Image from 'next/image'
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleRoute=(text)=>{
    router.push(`/${text}`)
  }
  return (
    <main>
      <h1>Home</h1><br/>
      <Link href="/login">Go to login page</Link><br/><br/>
      <Link href="/about">Go to About Page</Link><br/>
      <br/><br/>
      <button onClick={()=>handleRoute('login')}>Go to login page</button><br/><br/>
      <button onClick={()=>handleRoute('about')}>Go to about page</button>
      <br/><br/>
      <button onClick={()=>handleRoute('products')}>Go to products</button>
    </main>
  )
}
