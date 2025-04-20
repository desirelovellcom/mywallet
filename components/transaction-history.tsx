import { ArrowUpRight, ArrowDownLeft } from "lucide-react"

const transactions = [
  {
    id: "tx1",
    type: "received",
    amount: "0.0215 BTC",
    value: "$574.32",
    from: "bc1q...3f8j",
    date: "Today, 10:42 AM",
  },
  {
    id: "tx2",
    type: "sent",
    amount: "0.0054 BTC",
    value: "$144.21",
    to: "3FZbgi...8Cuomm",
    date: "Yesterday, 6:30 PM",
  },
  {
    id: "tx3",
    type: "received",
    amount: "0.1245 ETH",
    value: "$210.87",
    from: "0x8f7...e3a1",
    date: "Apr 18, 2:15 PM",
  },
  {
    id: "tx4",
    type: "sent",
    amount: "0.0078 BTC",
    value: "$208.45",
    to: "bc1q...7yhp",
    date: "Apr 17, 9:20 AM",
  },
]

export function TransactionHistory() {
  return (
    <div className="space-y-4">
      {transactions.map((tx) => (
        <div key={tx.id} className="flex items-center justify-between p-3 rounded-lg bg-zinc-800">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                tx.type === "received" ? "bg-emerald-900/50" : "bg-blue-900/50"
              }`}
            >
              {tx.type === "received" ? (
                <ArrowDownLeft className="h-5 w-5 text-emerald-500" />
              ) : (
                <ArrowUpRight className="h-5 w-5 text-blue-500" />
              )}
            </div>
            <div>
              <div className="font-medium">
                {tx.type === "received" ? "Received" : "Sent"} {tx.amount}
              </div>
              <div className="text-sm text-zinc-400">
                {tx.type === "received" ? `From: ${tx.from}` : `To: ${tx.to}`}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">{tx.value}</div>
            <div className="text-sm text-zinc-400">{tx.date}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
