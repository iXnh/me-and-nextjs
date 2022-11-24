import style from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from './components/Layout';

function blog() {
  return (
    <Layout>
   <div className={style.ListBlog}> 
        <ul >
              
            <Link href="pertama">
                <li>
                    Dive in-to Hooks, React
                </li> 
            </Link>
     

            
            <Link href="kedua">
                <li> Dive in-to Es6, JS </li>
            </Link>
            

            
            <Link href="ketiga">
            
             <li>  Dive in-to Next, JS </li>
            
            </Link>
            
        </ul>
    </div>
    </Layout>



    )
}

export default blog;