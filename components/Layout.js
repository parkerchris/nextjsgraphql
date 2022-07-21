import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Layout({children}) {
    return (
        <div>
            <Header></Header>
            <Nav/>
            {children}
            <Footer></Footer>
        </div>
    )
}