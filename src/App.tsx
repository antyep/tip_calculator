
import { menuItems } from "./data/db"
function App() {
  console.log(menuItems);
  

  return (
    <>
      <header className="bg-slate-400 py-5">
        <h1 className="text-center text-3xl font-black">Tip calculator</h1>
      </header>

      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
        <div>
          <h2>Menu</h2>
        </div>

        <div>
          <h2>Count</h2>
        </div>
      </main>

    </>
  )
}

export default App
