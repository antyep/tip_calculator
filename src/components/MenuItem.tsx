import type { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
};

export default function MenuItem ({item, addItem} : MenuItemProps) {
    return (
        <button
            className="border-2 border-slate-950 hover:bg-slate-200 w-full p-2 flex justify-between rounded-lg" onClick={() => addItem(item)}>
            <p>{item.name}</p>
            <p className="font-black">€{item.price}</p>
        </button>
    )
}
 