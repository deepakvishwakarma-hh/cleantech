import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import { formatPrice } from './PriceTag'

type OrderSummaryItemProps = {
    label: string
    value?: string
    children?: React.ReactNode
}

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
    const { label, value, children } = props
    return (
        <Flex justify="space-between" fontSize="sm">
            <Text fontWeight="medium" fontFamily={'heading'} color={mode('gray.600', 'gray.400')}>
                {label}
            </Text>
            {value ? <Text fontWeight="medium">{value}</Text> : children}
        </Flex>
    )
}

export const CartOrderSummary = () => {
    return (
        <Stack spacing="8" rounded="lg" padding="8" width="full">
            <Text fontSize={'2xl'} fontWeight={'medium'} fontFamily={'heading'} mb={10} >Order Details</Text>

            <Stack spacing="6">
                <OrderSummaryItem label="Subtotal" value={formatPrice(597)} />
                <OrderSummaryItem label="Shipping + Tax">
                    <Link href="#" textDecor="underline">
                        Calculate shipping
                    </Link>
                </OrderSummaryItem>
                <OrderSummaryItem label="Coupon Code">
                    <Link href="#" textDecor="underline">
                        Add coupon code
                    </Link>
                </OrderSummaryItem>
                <Flex justify="space-between">
                    <Text fontSize="lg" fontWeight="semibold">
                        Total
                    </Text>
                    <Text fontSize="xl" fontWeight="extrabold">
                        {formatPrice(597)}
                    </Text>
                </Flex>
            </Stack>
            <Button background={'black'} textColor={'white'} size="lg">
                Checkout
            </Button>
        </Stack>
    )
}