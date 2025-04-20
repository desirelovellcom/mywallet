"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, ArrowDownLeft, Copy, ExternalLink, RefreshCw } from "lucide-react"
import { CryptoBalance } from "@/components/crypto-balance"
import { TransactionHistory } from "@/components/transaction-history"

export function WalletOverview() {
  const [activeTab, setActiveTab] = useState("bitcoin")

  return (
    <div className="grid gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1 bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Total Balance</CardTitle>
            <CardDescription>Across all cryptocurrencies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$12,847.32</div>
            <div className="flex items-center mt-1 text-emerald-500 text-sm">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+2.5% ($320.42)</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="flex gap-2">
              <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                <ArrowUpRight className="h-4 w-4 mr-2" />
                Send
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                <ArrowDownLeft className="h-4 w-4 mr-2" />
                Receive
              </Button>
            </div>
          </CardFooter>
        </Card>

        <Card className="flex-1 bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Wallet Address</CardTitle>
            <CardDescription>Your current active address</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-3 bg-zinc-800 rounded-md flex items-center justify-between">
              <div className="text-sm font-mono text-zinc-300 truncate">bc1q8c6fshw2dlwun7ekn9qwf37cu2rn755upcp6el</div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" className="w-full border-zinc-700">
              <RefreshCw className="h-4 w-4 mr-2" />
              Generate New Address
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Crypto Assets</CardTitle>
          <Tabs defaultValue="bitcoin" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="bitcoin">Bitcoin</TabsTrigger>
              <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
              <TabsTrigger value="dogecoin">Dogecoin</TabsTrigger>
              <TabsTrigger value="all">All Assets</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <TabsContent value="bitcoin" className="mt-0">
            <CryptoBalance name="Bitcoin" symbol="BTC" balance="0.3842" value="10,231.45" change="+3.2%" />
          </TabsContent>
          <TabsContent value="ethereum" className="mt-0">
            <CryptoBalance name="Ethereum" symbol="ETH" balance="1.245" value="2,105.87" change="+1.8%" />
          </TabsContent>
          <TabsContent value="dogecoin" className="mt-0">
            <CryptoBalance name="Dogecoin" symbol="DOGE" balance="1,250" value="510.00" change="-0.5%" negative />
          </TabsContent>
          <TabsContent value="all" className="mt-0">
            <div className="space-y-4">
              <CryptoBalance name="Bitcoin" symbol="BTC" balance="0.3842" value="10,231.45" change="+3.2%" />
              <CryptoBalance name="Ethereum" symbol="ETH" balance="1.245" value="2,105.87" change="+1.8%" />
              <CryptoBalance name="Dogecoin" symbol="DOGE" balance="1,250" value="510.00" change="-0.5%" negative />
            </div>
          </TabsContent>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <TransactionHistory />
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full border-zinc-700">
            View All Transactions
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
