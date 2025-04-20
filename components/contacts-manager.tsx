"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Plus, MoreVertical, Edit, Trash2, Copy, Send, Download, Upload } from "lucide-react"

// Mock data for contacts
const mockContacts = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    company: "TechCorp",
    walletAddress: "bc1q8c6fshw2dlwun7ekn9qwf37cu2rn755upcp6el",
    tags: ["Friend", "Business"],
  },
  {
    id: "2",
    name: "Sarah Williams",
    email: "sarah@example.com",
    company: "DesignHub",
    walletAddress: "0x8f7dd610c983d0a82a450ab5e20bf9e9e3f8e3a1",
    tags: ["Family"],
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "michael@example.com",
    company: "CryptoVentures",
    walletAddress: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
    tags: ["Business", "VIP"],
  },
  {
    id: "4",
    name: "Emma Davis",
    email: "emma@example.com",
    company: "BlockchainInc",
    walletAddress: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
    tags: ["Friend"],
  },
  {
    id: "5",
    name: "James Wilson",
    email: "james@example.com",
    company: "FinTech Solutions",
    walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    tags: ["Business"],
  },
]

export function ContactsManager() {
  const [searchQuery, setSearchQuery] = useState("")
  const [contacts, setContacts] = useState(mockContacts)

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.walletAddress.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Contact Management</CardTitle>
          <CardDescription>Manage your contacts and their wallet addresses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
              <Input
                type="search"
                placeholder="Search contacts..."
                className="pl-8 bg-zinc-800 border-zinc-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Contact
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-zinc-800">
                  <DialogHeader>
                    <DialogTitle>Add New Contact</DialogTitle>
                    <DialogDescription>Add a new contact to your address book</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Full Name" className="bg-zinc-800 border-zinc-700" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        className="bg-zinc-800 border-zinc-700"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" placeholder="Company Name" className="bg-zinc-800 border-zinc-700" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="wallet">Wallet Address</Label>
                      <Input id="wallet" placeholder="Crypto Wallet Address" className="bg-zinc-800 border-zinc-700" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="tags">Tags (comma separated)</Label>
                      <Input id="tags" placeholder="Friend, Business, Family" className="bg-zinc-800 border-zinc-700" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                      Save Contact
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-zinc-700">
                    <Download className="h-4 w-4 mr-2" />
                    Import/Export
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
                  <DropdownMenuLabel>Contact Data</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-zinc-800" />
                  <DropdownMenuItem className="focus:bg-zinc-800">
                    <Upload className="h-4 w-4 mr-2" />
                    Import from CSV
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-zinc-800">
                    <Upload className="h-4 w-4 mr-2" />
                    Import from vCard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-zinc-800" />
                  <DropdownMenuItem className="focus:bg-zinc-800">
                    <Download className="h-4 w-4 mr-2" />
                    Export to CSV
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-zinc-800">
                    <Download className="h-4 w-4 mr-2" />
                    Export to vCard
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border border-zinc-800 overflow-hidden">
            <Table>
              <TableHeader className="bg-zinc-800">
                <TableRow className="hover:bg-zinc-800/50 border-zinc-700">
                  <TableHead className="text-zinc-400">Name</TableHead>
                  <TableHead className="text-zinc-400">Email</TableHead>
                  <TableHead className="text-zinc-400 hidden md:table-cell">Company</TableHead>
                  <TableHead className="text-zinc-400">Wallet Address</TableHead>
                  <TableHead className="text-zinc-400 hidden md:table-cell">Tags</TableHead>
                  <TableHead className="text-zinc-400 w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContacts.map((contact) => (
                  <TableRow key={contact.id} className="hover:bg-zinc-800/50 border-zinc-700">
                    <TableCell className="font-medium">{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell className="hidden md:table-cell">{contact.company}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <span className="truncate max-w-[120px] md:max-w-[180px]">{contact.walletAddress}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                          <Copy className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex gap-1">
                        {contact.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-zinc-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
                          <DropdownMenuItem className="focus:bg-zinc-800">
                            <Send className="h-4 w-4 mr-2" />
                            Send Crypto
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-zinc-800">
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Address
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-zinc-800" />
                          <DropdownMenuItem className="focus:bg-zinc-800">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Contact
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-zinc-800 text-red-500">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Contact
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-zinc-800 pt-6">
          <div className="text-sm text-zinc-400">
            Showing {filteredContacts.length} of {contacts.length} contacts
          </div>
          <Button variant="outline" className="border-zinc-700">
            View All Contacts
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
