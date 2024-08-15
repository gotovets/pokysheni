import Link from 'next/link';

export default function About() {
    return (
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/page-1">page-1</Link>
          </li>
          <li>
            <Link href="/page-2">page-2</Link>
          </li>
          <li>
            <Link href="/product/111">product/111</Link>
          </li>
        </ul>
      )
}