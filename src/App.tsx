
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentage from "./components/TipPercentage"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, addItem, removeItem } = useOrder()
  

  return (
    <>
      <header className="bg-slate-400 py-5">
        <h1 className="text-center text-3xl font-black">Tip calculator</h1>
      </header>

      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black">Menu</h2>

        <div className="mt-5 space-y-3">
          {menuItems.map(item => (
            <MenuItem
            key={item.id}
            item={item}
            addItem={addItem}
            />
          ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-400 p-5 rounded-lg space-y-10 mx-5">
          <OrderContents 
            order={order}
            removeItem={removeItem}
          />

          <TipPercentage
          
          />

          <OrderTotals 
            order={order}/>
        </div>
      </main>

    </>
  )
}

export default App
