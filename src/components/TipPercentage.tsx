import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPercentageProps = {
    setTip: Dispatch<SetStateAction<number>>
  }

export default function TipPercentage({setTip} : TipPercentageProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Tip:</h3>

        <form>
            <div>
                {tipOptions.map(tip => (
                    <div key={tip.id} className="flex gap-3">
                        <label htmlFor={tip.id}>{tip.label}</label>
                        <input
                            id={tip.id}
                            type="radio"
                            name="tip"
                            value={tip.value}
                            onChange={e => setTip(+e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </form>
    </div>
  )
}
