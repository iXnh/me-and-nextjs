import Link from "next/link"
import style from '/styles/Home.module.css'

function Layout(props) {
    return (
        <>
            <div className={style.container}>

                <Link href="/"> Home </Link> /
                <Link href="blog"> Blog </Link>

                <hr />

                {props.children}

                <hr />

                <div>
                    footer
                </div>

            </div>
        </>

    )
}

export default Layout;;