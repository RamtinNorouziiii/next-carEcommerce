import Styles from "./layout.module.css"
import Link from "next/link"
function Layout({children}) {
  return (
    <>
    <header className={Styles.header} >
     <Link href="/" >   <h2>Norouzi Cars</h2>
        <p>Safe Place to Sell & Buy Cars</p>
        </Link>
    </header>
    <div className={Styles.container}> {children} </div>
    <footer className={Styles.footer}>
        <a href="http://localhost:3000" >Norouzi Cars</a>
        All Right Reserved &copy;
    </footer>
    </>
  )
}

export default Layout