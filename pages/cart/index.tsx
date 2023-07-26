
import { FiX } from 'react-icons/fi'
import { Cart } from "~/components/cart"
import Layout from '~/components/Layout/step'
const CartPage = () => {
    return (
        <Layout previous='/'>
            <Cart />
        </Layout>
    )
}

export default CartPage
