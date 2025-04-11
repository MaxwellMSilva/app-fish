"use client"

import { useState, useEffect } from "react"
import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"
import { toast } from "sonner"

interface EtiquetaModalProps {
  operador: {
    id: string
    nome: string
  }
  onCancel: () => void
  isOpen: boolean
}

export function EtiquetaModal({ operador, onCancel, isOpen }: EtiquetaModalProps) {
  const [quantidade, setQuantidade] = useState(1)

  useEffect(() => {
    if (!isOpen) {
      // Resetar para o valor padrão quando o modal fechar
      setQuantidade(1)
    }
  }, [isOpen])

  const handlePrint = () => {
    onCancel()

    // Depois abre a janela de impressão
    const printWindow = window.open("", "_blank")

    if (!printWindow) {
      toast.error(
        "Não foi possível abrir a janela de impressão. Verifique se o bloqueador de pop-ups está desativado.",
        {
          duration: 2000,
        },
      )
      return
    }

    const style = `
      <style>
        @page {
          size: 108mm 150mm;
          margin: 0;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          width: 108mm;
          height: 150mm;
        }
        .etiqueta-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10mm;
          box-sizing: border-box;
        }
        .nome {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 5mm;
          text-align: center;
          width: 88mm; /* 108mm - 20mm de padding */
        }
        .id {
          font-size: 18px;
          margin-bottom: 10mm;
          text-align: center;
        }
        .barcode {
          margin-bottom: 5mm;
          text-align: center;
        }
        .barcode-text {
          font-size: 14px;
          text-align: center;
        }
        @media print {
          html, body {
            width: 108mm;
            height: 150mm;
          }
        }
      </style>
    `

    const etiquetaHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Etiqueta - ${operador.nome}</title>
        ${style}
        <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
      </head>
      <body>
        ${Array(quantidade)
          .fill(0)
          .map(
            (_, index) => `
          <div class="etiqueta-container">
            <div class="nome">${operador.nome}</div>
            <div class="id">ID: ${operador.id}</div>
            <div class="barcode">
              <svg id="barcode-${index}"></svg>
            </div>
          </div>
          ${index < quantidade - 1 ? '<div style="page-break-after: always;"></div>' : ""}
        `,
          )
          .join("")}
        
        <script>
          // Gerar código de barras para cada etiqueta
          ${Array(quantidade)
            .fill(0)
            .map(
              (_, index) => `
            JsBarcode("#barcode-${index}", "${operador.id}", {
              format: "CODE128",
              width: 2,
              height: 50,
              displayValue: false,
              margin: 0
            });
          `,
            )
            .join("")}
          
          // Imprimir automaticamente
          window.onload = function() {
            setTimeout(() => {
              window.print();
              window.onafterprint = function() {
                window.close(); // fecha a janela depois da impressão
              };
            }, 500);

            // Fallback para fechar a janela após alguns segundos
            setTimeout(() => {
              window.close();
            }, 3000); // 3 segundos de fallback
          };
        </script>
      </body>
      </html>
    `

    printWindow.document.open()
    printWindow.document.write(etiquetaHTML)
    printWindow.document.close()

    toast.success(`Preparando ${quantidade} etiqueta(s) para impressão`, {
      duration: 2000,
    })
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault()
        handlePrint()
      } else if (e.key === "Escape") {
        e.preventDefault()
        onCancel()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [quantidade])

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="font-bold">Imprimir Etiqueta</DialogTitle>
      </DialogHeader>

      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="nome" className="text-right font-semibold">
            Operador:
          </Label>
          <div className="col-span-3 font-medium ml-2">{operador.nome}</div>
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="id" className="text-right font-semibold">
            ID:
          </Label>
          <div className="col-span-3 ml-2">{operador.id}</div>
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="quantidade" className="text-right font-semibold">
            Quantidade:
          </Label>
          <Input
            id="quantidade"
            type="number"
            min="1"
            max="100"
            value={quantidade}
            onChange={(e) => setQuantidade(Number.parseInt(e.target.value) || 1)}
            className="col-span-3"
            onKeyDown={(e) => {
              if ([".", ",", "-", "+"].includes(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={onCancel} className="font-semibold h-10 w-25 cursor-pointer">
          Cancelar
        </Button>
        <Button
          onClick={handlePrint}
          className="font-semibold bg-green-500 hover:bg-green-600 h-10 w-25 cursor-pointer"
        >
          <Printer className="mr-2 h-4 w-4" />
          Imprimir
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
