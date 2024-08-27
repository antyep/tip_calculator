import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"


export default function useOrder () {
    const [order, setOrder] = useState<OrderItem[]>([])

    // const addItem = (item: MenuItem) => {
    //     const itemExists = order?.find(orderItem => orderItem.id === item.id);
    
    //     setOrder(itemExists 
    //         ? order.map(orderItem =>
    //             orderItem.id === item.id
    //             ? { ...orderItem, quantity: orderItem.quantity + 1 }
    //             : orderItem
    //           )
    //         : [...order, { ...item, quantity: 1 }]
    //     );
    // }
    
    const addItem = (item: MenuItem) => { 
        const itemExists = order?.find(orderItem => orderItem.id === item.id)
        if(itemExists) {
            const updatedOrder = order.map (orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updatedOrder)
        } else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }
    
        const removeItem = () => {
            console.log("Deleting..."); 
    }

    return {
        removeItem,
        order,
        addItem
    }
}