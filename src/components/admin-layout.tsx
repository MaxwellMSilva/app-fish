"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import rfLogo from "../../public/rondo01.png"
import Link from "next/link"
import { User, Fish, BarChart3, Trophy } from "lucide-react"

interface AdminLayoutProps {
  children: React.ReactNode
  activeTab: string
}

export function AdminLayout({ children, activeTab }: AdminLayoutProps) {
  const [hideSidebar, setHideSidebar] = useState(false)

  // Observar mudanças na classe do body para detectar o modo tela cheia
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const bodyClasses = document.body.classList
          setHideSidebar(bodyClasses.contains("hide-sidebar"))
        }
      })
    })

    observer.observe(document.body, { attributes: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white transition-all duration-500 ease-in-out">

      <div className="flex flex-1">
        {/* Sidebar - oculta no modo tela cheia quando estiver na página de ranking */}
        {!(hideSidebar && activeTab === "ranking") && (
          <aside className="w-60 border-r bg-gray-50 transition-all duration-500 ease-in-out">
            <nav className="flex flex-col p-2">
              <div className="flex items-center h-25 transition-transform duration-300 ease-in-out">
                <Image
                  src={rfLogo || "/placeholder.svg"}
                  alt="logoEmpresa"
                  className="flex items-center gap-2 px-3 py-2 rounded-md"
                />
              </div>
              <Link
                href="/operadores"
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ease-in-out ${
                  activeTab === "operadores" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                }`}
              >
                <User size={18} />
                <span>Operadores</span>
              </Link>
              <Link
                href="/cortes"
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ease-in-out ${
                  activeTab === "cortes" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                }`}
              >
                <Fish size={18} />
                <span>Cortes</span>
              </Link>
              <Link
                href="/ranking"
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ease-in-out ${
                  activeTab === "ranking" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                }`}
              >
                <Trophy size={18} />
                <span>Ranking</span>
              </Link>
              <Link
                href="/dashboard"
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ease-in-out ${
                  activeTab === "dashboard" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                }`}
              >
                <BarChart3 size={18} />
                <span>Dashboard</span>
              </Link>
            </nav>
          </aside>
        )}

        {/* Main Content - ajusta para tela cheia quando necessário */}
        <main
          className={`flex-1 p-6 transition-all duration-500 ease-in-out ${
            hideSidebar && activeTab === "ranking" ? "w-full animate-fade-in" : ""
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
