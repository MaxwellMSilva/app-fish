"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import rfLogo from "../../public/rondo01.png"
import Link from "next/link"
import { User, Fish, BarChart3, Trophy, Menu, X } from "lucide-react"

interface AdminLayoutProps {
  children: React.ReactNode
  activeTab: string
}

export function AdminLayout({ children, activeTab }: AdminLayoutProps) {
  const [hideSidebar, setHideSidebar] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Observa classe do body (modo tela cheia no ranking)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setHideSidebar(document.body.classList.contains("hide-sidebar"))
    })

    observer.observe(document.body, { attributes: true })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex min-h-screen bg-white">

      {/* OVERLAY MOBILE */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      {!(hideSidebar && activeTab === "ranking") && (
        <aside
          className={`
            fixed z-50 inset-y-0 left-0 w-60 bg-gray-50 border-r
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            sm:translate-x-0 sm:static sm:z-auto
          `}
        >
          {/* HEADER SIDEBAR (mobile) */}
          <div className="flex items-center justify-between p-4 sm:hidden">
            <Image src={rfLogo} alt="logoEmpresa" />
            <button onClick={() => setSidebarOpen(false)}>
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col p-2 gap-1">
            <div className="hidden sm:flex items-center px-3 py-4">
              <Image src={rfLogo} alt="logoEmpresa" />
            </div>

            <NavLink href="/operadores" active={activeTab === "operadores"}>
              <User size={18} />
              Operadores
            </NavLink>

            <NavLink href="/cortes" active={activeTab === "cortes"}>
              <Fish size={18} />
              Cortes
            </NavLink>

            <NavLink href="/ranking" active={activeTab === "ranking"}>
              <Trophy size={18} />
              Ranking
            </NavLink>

            <NavLink href="/relatorios" active={activeTab === "relatorios"}>
              <BarChart3 size={18} />
              Relatórios
            </NavLink>
          </nav>
        </aside>
      )}

      {/* CONTEÚDO */}
      <div className="flex flex-col flex-1">

        {/* TOPBAR MOBILE */}
        <header className="flex items-center gap-3 p-4 border-b sm:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>
          <span className="font-semibold capitalize">{activeTab}</span>
        </header>

        <main
          className={`
            flex-1 p-4 sm:p-6 transition-all duration-500 ease-in-out
            ${hideSidebar && activeTab === "ranking" ? "w-full" : ""}
          `}
        >
          {children}
        </main>
      </div>
    </div>
  )
}

/* COMPONENTE AUXILIAR */
function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-md transition-all
        ${active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}
      `}
    >
      {children}
    </Link>
  )
}
