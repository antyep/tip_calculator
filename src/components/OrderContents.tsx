import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem["id"]) => void,
}
export default function orderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Count</h2>

        <div className="space-y-3 mt-5">
            {order.length === 0 ? 
            <p className="text-center">Customers have not add anything yet.</p>
            : (
                order.map(item => (
                    <div 
                        key={item.id}
                        className="flex justify-between items-center border-t border-gray-400 py-2 last-of-type:border-b">

                        <div>
                            <p className="text-lg">
                                 {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Quantity: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>

                        <button
                        className="bg-red-700 h-8 w-8 rounded-full text-white font-black"
                        onClick={() => removeItem(item.id)}>
                            X
                        </button>
                    </div>
                ))
            )
            }
        </div>
    </div>
  )
}
