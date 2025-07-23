"use client"

import { useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function QRCodeGenerator() {
  const [url, setUrl] = useState("https://qr.xsrazy.web.id")
  const [qrCode, setQRCode] = useState("https://qr.xsrazy.web.id")
  const [color, setColor] = useState("#000000")
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [size, setSize] = useState(200)
  const [errorCorrection, setErrorCorrection] = useState("M")

  const generateQRCode = (e: React.FormEvent) => {
    e.preventDefault()
    setQRCode(url)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">QR Code Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={generateQRCode} className="space-y-4">
            <div>
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                type="url"
                placeholder="Enter a URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="color">QR Code Color</Label>
                <Input
                  id="color"
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full h-10"
                />
              </div>
              <div>
                <Label htmlFor="backgroundColor">Background Color</Label>
                <Input
                  id="backgroundColor"
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-full h-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="size">
                Size: {size}x{size}
              </Label>
              <Slider
                id="size"
                min={100}
                max={400}
                step={10}
                value={[size]}
                onValueChange={(value) => setSize(value[0])}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="errorCorrection">Error Correction Level</Label>
              <Select value={errorCorrection} onValueChange={setErrorCorrection}>
                <SelectTrigger id="errorCorrection">
                  <SelectValue placeholder="Select error correction level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L">Low (7%)</SelectItem>
                  <SelectItem value="M">Medium (15%)</SelectItem>
                  <SelectItem value="Q">Quartile (25%)</SelectItem>
                  <SelectItem value="H">High (30%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Generate QR Code
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          {qrCode && (
            <div className="mt-4">
              <QRCodeSVG
                value={qrCode}
                size={size}
                fgColor={color}
                bgColor={backgroundColor}
                level={errorCorrection}
                includeMargin={true}
              />
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
