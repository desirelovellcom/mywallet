"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WalletOverview } from "@/components/wallet-overview"
import { ContactsManager } from "@/components/contacts-manager"
import { SecurityKeys } from "@/components/security-keys"
import { Settings } from "@/components/settings"
import { Header } from "@/components/header"
import { Wallet, Users, Shield, SettingsIcon } from "lucide-react"

export function WalletDashboard() {
  const [activeTab, setActiveTab] = useState("wallet")

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container max-w-7xl mx-auto p-4 md:p-6">
        <Tabs defaultValue="wallet" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="wallet" className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">Wallet</span>
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Contacts</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <SettingsIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="wallet">
            <WalletOverview />
          </TabsContent>

          <TabsContent value="contacts">
            <ContactsManager />
          </TabsContent>

          <TabsContent value="security">
            <SecurityKeys />
          </TabsContent>

          <TabsContent value="settings">
            <Settings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
