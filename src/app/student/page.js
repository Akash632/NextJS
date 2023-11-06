// "use client";
import Link from 'next/link';


export default function Student(){
  return (
    <div>
        <h1>Students List</h1>
      <ul>
        <li>
            <Link href='/student/1'>Akash</Link>
        </li>
        <li>
            <Link href='/student/2'>Bappa</Link>
        </li>
        <li>
            <Link href='/student/3'>Sai</Link>
        </li>
        <li>
            <Link href='/student/4'>Govind</Link>
        </li>
      </ul>
    </div>
  );
}
