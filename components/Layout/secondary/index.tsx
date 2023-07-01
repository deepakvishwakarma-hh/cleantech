import Footer from "./footer"
import Header from "./header"

interface Props {
    children: any
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default Layout