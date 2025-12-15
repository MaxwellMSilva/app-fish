"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  User,
  Fish,
  BarChart3,
  Trophy,
  Menu,
  X,
} from "lucide-react"
import rfLogo from "../../public/rondo01.png"

interface AdminLayoutProps {
  children: React.ReactNode
  activeTab: string
}

export function AdminLayout({ children, activeTab }: AdminLayoutProps) {
  const [hideSidebar, setHideSidebar] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      {!(hideSidebar && activeTab === "ranking") && (
        <aside
          className={`
            fixed inset-y-0 left-0 z-50 w-64
            bg-gradient-to-b from-gray-50 to-white
            border-r shadow-sm
            transform transition-transform duration-300 ease-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            sm:translate-x-0 sm:static
          `}
        >
          {/* LOGO */}
          <div className="flex items-center justify-between px-5 border-b bg-red">
            <Image src={rfLogo} alt="RONDOFISH" className="h-32 w-32" />
            <button className="sm:hidden" onClick={() => setSidebarOpen(false)}>
              <X size={22} />
            </button>
          </div>

          {/* MENU */}
          <nav className="p-3 space-y-1">
            <SidebarItem
              href="/operadores"
              active={activeTab === "operadores"}
              icon={<User size={18} />}
              label="Operadores"
            />

            <SidebarItem
              href="/cortes"
              active={activeTab === "cortes"}
              icon={<Fish size={18} />}
              label="Cortes"
            />

            <SidebarItem
              href="/ranking"
              active={activeTab === "ranking"}
              icon={<Trophy size={18} />}
              label="Ranking"
            />

            <SidebarItem
              href="/relatorios"
              active={activeTab === "relatorios"}
              icon={<BarChart3 size={18} />}
              label="Relatórios"
            />
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

        <main className="flex-1 p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

/* ===============================
   ITEM DA SIDEBAR
================================ */
function SidebarItem({
  href,
  icon,
  label,
  active,
}: {
  href: string
  icon: React.ReactNode
  label: string
  active: boolean
}) {
  return (
    <Link
      href={href}
      className={`
        group relative flex items-center gap-3 px-4 py-2.5 rounded-md
        transition-all duration-200 ease-out
        active:scale-[0.98]
        ${
          active
            ? "bg-green-50 text-green-700 font-semibold shadow-sm"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }
      `}
    >
      {/* BARRA ATIVA */}
      <span
        className={`
          absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r
          transition-all duration-300
          ${active ? "bg-green-500" : "bg-transparent group-hover:bg-gray-300"}
        `}
      />

      {/* ÍCONE */}
      <span
        className={`
          transition-transform duration-200
          ${active ? "scale-110" : "group-hover:scale-105"}
        `}
      >
        {icon}
      </span>

      {/* TEXTO */}
      <span className="tracking-wide">{label}</span>
    </Link>
  )
}
