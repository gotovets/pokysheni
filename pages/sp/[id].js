import Link from 'next/link';
import useSWR from 'swr';
 
const fetcher = (...args) => fetch(...args).then((res) => res.json())

import { getData } from '../api/data';

export default function Page({ jsonData }) {
    
    if(jsonData) {

        console.log(jsonData);

    }
    else {

        const { data } = useSWR('../api/data', fetcher);
        

        console.log(data);

    }

    return (
        <ul>         
          <li>
            <Link href="/page-1">page-1</Link>
          </li>
          <li>
            <Link href="/page-2">page-2</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/product/111">product/111</Link>
          </li>
        </ul>
      )

}

export async function getServerSideProps({ req, query }) {
    
    const jsonData = await getData();

    console.log(jsonData);
   
    return { props: { jsonData } }

}
