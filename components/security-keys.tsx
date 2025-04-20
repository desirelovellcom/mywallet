import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Shield, Smartphone, Server, Download, RefreshCw, Info } from "lucide-react"

export function SecurityKeys() {
  return (
    <div className="space-y-6">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Multi-Signature Security</CardTitle>
          <CardDescription>Your wallet is protected by 2-of-3 multi-signature security</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Smartphone className="h-5 w-5 mr-2 text-emerald-500" />
                    Mobile Key
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center py-6">
                  <div className="w-24 h-40 bg-zinc-900 rounded-xl border border-zinc-700 flex items-center justify-center mb-4">
                    <Shield className="h-10 w-10 text-zinc-600" />
                  </div>
                  <div className="text-sm text-center text-zinc-400">Secured on your mobile device</div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full border-zinc-700">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Rotate Key
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-emerald-500" />
                    Hardware Key
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center py-6">
                  <div className="w-32 h-32 relative mb-4">
                    <Image
                      src="/images/hardware-key.png"
                      alt="Hardware Key"
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-sm text-center text-zinc-400">Stored on your physical device</div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full border-zinc-700">
                    <Info className="h-4 w-4 mr-2" />
                    Device Info
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Server className="h-5 w-5 mr-2 text-emerald-500" />
                    Server Key
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center py-6">
                  <div className="w-32 h-32 bg-zinc-900 rounded-md border border-zinc-700 flex flex-col items-center justify-center mb-4">
                    <div className="w-full border-b border-zinc-700 p-2">
                      <div className="w-full h-3 bg-zinc-700 rounded-full mb-2"></div>
                      <div className="w-full h-3 bg-zinc-700 rounded-full mb-2"></div>
                      <div className="w-full h-3 bg-zinc-700 rounded-full"></div>
                    </div>
                    <div className="w-full p-2">
                      <div className="w-full h-3 bg-zinc-700 rounded-full mb-2"></div>
                      <div className="w-full h-3 bg-zinc-700 rounded-full mb-2"></div>
                      <div className="w-full h-3 bg-zinc-700 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-sm text-center text-zinc-400">Secured in the cloud</div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full border-zinc-700">
                    <Download className="h-4 w-4 mr-2" />
                    Backup Key
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Connection lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500/50 via-amber-500 to-amber-500/50 hidden md:block"></div>

            {/* Security indicator */}
            <div className="flex justify-center">
              <div className="bg-zinc-800 border border-zinc-700 rounded-full px-6 py-2 text-center">
                <span className="text-amber-500 font-medium">2-of-3 Multi-Signature Security</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Recovery Options</CardTitle>
          <CardDescription>Backup and recovery methods for your wallet</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-800/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center">
                  <Download className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Seed Phrase Backup</h3>
                  <p className="text-sm text-zinc-400 mb-3">
                    Your 12-word recovery phrase can be used to restore your wallet on any device. Store it securely
                    offline.
                  </p>
                  <Button variant="outline" className="border-zinc-700">
                    View Recovery Phrase
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-800/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Social Recovery</h3>
                  <p className="text-sm text-zinc-400 mb-3">
                    Designate trusted contacts who can help you recover access to your wallet if you lose your keys.
                  </p>
                  <Button variant="outline" className="border-zinc-700">
                    Set Up Social Recovery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
