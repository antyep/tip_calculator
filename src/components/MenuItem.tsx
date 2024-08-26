import type { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItem;
};

export default function MenuItem ({item} : MenuItemProps) {
    return (
    <button
    className="border-2 border-slate-950 hover:bg-slate-200 w-full p-2 flex justify-between mb-2">
        <p>{item.name}</p>
        <p className="font-black">€{item.price}</p>
    </button>
    )
}
