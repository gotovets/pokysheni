import { useRouter } from 'next/router';
import Link from 'next/link';
 
export default function Page() {

  const router = useRouter();

  console.log(router);

    return (

        <div>

            <p>Post: {router.query.id}</p>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/page-2">page-2</Link>
                </li>
                <li>
                    <Link href="/about">about</Link>
                </li>
            </ul>

        </div>

    )

}