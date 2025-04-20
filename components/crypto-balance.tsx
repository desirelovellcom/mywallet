import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

interface CryptoBalanceProps {
  name: string
  symbol: string
  balance: string
  value: string
  change: string
  negative?: boolean
}

export function CryptoBalance({ name, symbol, balance, value, change, negative = false }: CryptoBalanceProps) {
  return (
    <Card className="bg-zinc-800 border-zinc-700">
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center text-white font-bold">
              {symbol.substring(0, 1)}
            </div>
            <div>
              <div className="font-medium">{name}</div>
              <div className="text-sm text-zinc-400">{symbol}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">
              {balance} {symbol}
            </div>
            <div className="flex items-center justify-end gap-1">
              <span>${value}</span>
              <span className={negative ? "text-red-500" : "text-emerald-500"}>
                {negative ? <ArrowDownRight className="h-3 w-3 inline" /> : <ArrowUpRight className="h-3 w-3 inline" />}
                {change}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
