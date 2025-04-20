import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Shield, Eye, Globe, DollarSign, Moon, Smartphone } from "lucide-react"

export function Settings() {
  return (
    <div className="space-y-6">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize how the application looks</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Moon className="h-4 w-4 text-zinc-400" />
              <Label htmlFor="dark-mode">Dark Mode</Label>
            </div>
            <Switch id="dark-mode" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-zinc-400" />
              <Label htmlFor="currency">Display Currency</Label>
            </div>
            <Select defaultValue="usd">
              <SelectTrigger className="w-[180px] bg-zinc-800 border-zinc-700">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectItem value="usd">USD ($)</SelectItem>
                <SelectItem value="eur">EUR (€)</SelectItem>
                <SelectItem value="gbp">GBP (£)</SelectItem>
                <SelectItem value="jpy">JPY (¥)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-zinc-400" />
              <Label htmlFor="language">Language</Label>
            </div>
            <Select defaultValue="en">
              <SelectTrigger className="w-[180px] bg-zinc-800 border-zinc-700">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>Configure your security preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-zinc-400" />
              <Label htmlFor="biometric">Biometric Authentication</Label>
            </div>
            <Switch id="biometric" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-zinc-400" />
              <Label htmlFor="hide-balance">Hide Balance</Label>
            </div>
            <Switch id="hide-balance" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-zinc-400" />
              <Label htmlFor="auto-lock">Auto-Lock (minutes)</Label>
            </div>
            <Select defaultValue="5">
              <SelectTrigger className="w-[180px] bg-zinc-800 border-zinc-700">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectItem value="1">1 minute</SelectItem>
                <SelectItem value="5">5 minutes</SelectItem>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="never">Never</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-2">
            <Label htmlFor="pin" className="mb-2 block">
              Change PIN
            </Label>
            <div className="flex gap-2">
              <Input id="pin" type="password" placeholder="Current PIN" className="bg-zinc-800 border-zinc-700" />
              <Input type="password" placeholder="New PIN" className="bg-zinc-800 border-zinc-700" />
              <Button>Update</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Manage your notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-zinc-400" />
              <Label htmlFor="transaction-alerts">Transaction Alerts</Label>
            </div>
            <Switch id="transaction-alerts" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-zinc-400" />
              <Label htmlFor="price-alerts">Price Alerts</Label>
            </div>
            <Switch id="price-alerts" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-zinc-400" />
              <Label htmlFor="security-alerts">Security Alerts</Label>
            </div>
            <Switch id="security-alerts" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-zinc-400" />
              <Label htmlFor="news-updates">News & Updates</Label>
            </div>
            <Switch id="news-updates" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
