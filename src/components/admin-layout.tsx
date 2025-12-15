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
  ChevronDown,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import rfLogo from "../../public/rondo01.png"

interface AdminLayoutProps {
  children: React.ReactNode
  activeTab: string
}

const PRODUTIVIDADE_TABS = ["operadores", "cortes", "ranking", "relatorios"]
const FINANCEIRO_TABS = ["caixa", "recebimentos", "pagamentos", "relatorios-financeiros"]

type OpenMenu = "produtividade" | "financeiro" | null

export function AdminLayout({ children, activeTab }: AdminLayoutProps) {
  const [hideSidebar, setHideSidebar] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null)

  /* Detecta hide-sidebar sem MutationObserver */
  useEffect(() => {
    setHideSidebar(document.body.classList.contains("hide-sidebar"))
  }, [])

  /* Abre automaticamente o menu correto conforme rota */
  useEffect(() => {
    if (PRODUTIVIDADE_TABS.includes(activeTab)) {
      setOpenMenu("produtividade")
    } else if (FINANCEIRO_TABS.includes(activeTab)) {
      setOpenMenu("financeiro")
    } else {
      setOpenMenu(null)
    }
  }, [activeTab])

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
          <div className="flex items-center justify-between px-5 border-b">
            <Image src={rfLogo} alt="RONDOFISH" className="h-32 w-32" />
            <button className="sm:hidden" onClick={() => setSidebarOpen(false)}>
              <X size={22} />
            </button>
          </div>

          {/* MENU */}
          <nav className="p-3 space-y-2">

            {/* ================= PRODUTIVIDADE ================= */}
            <button
              onClick={() =>
                setOpenMenu((m) => (m === "produtividade" ? null : "produtividade"))
              }
              className={`
                w-full flex items-center justify-between px-4 py-2.5 rounded-md
                transition-all duration-200
                ${
                  openMenu === "produtividade"
                    ? "bg-green-50 text-green-700 font-semibold shadow-sm"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <BarChart3 size={18} />
                <span className="tracking-wide">Produtividade</span>
              </div>

              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  openMenu === "produtividade" ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openMenu === "produtividade" && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="ml-4 pl-2 border-l space-y-1"
                >
                  <SidebarItem
                    href="/operadores"
                    active={activeTab === "operadores"}
                    icon={<User size={18} />}
                    label="Operadores"
                    onNavigate={() => setSidebarOpen(false)}
                  />
                  <SidebarItem
                    href="/cortes"
                    active={activeTab === "cortes"}
                    icon={<Fish size={18} />}
                    label="Cortes"
                    onNavigate={() => setSidebarOpen(false)}
                  />
                  <SidebarItem
                    href="/ranking"
                    active={activeTab === "ranking"}
                    icon={<Trophy size={18} />}
                    label="Ranking"
                    onNavigate={() => setSidebarOpen(false)}
                  />
                  <SidebarItem
                    href="/relatorios"
                    active={activeTab === "relatorios"}
                    icon={<BarChart3 size={18} />}
                    label="Relatórios"
                    onNavigate={() => setSidebarOpen(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* ================= FINANCEIRO ================= */}
            <button
              onClick={() =>
                setOpenMenu((m) => (m === "financeiro" ? null : "financeiro"))
              }
              className={`
                w-full flex items-center justify-between px-4 py-2.5 rounded-md
                transition-all duration-200
                ${
                  openMenu === "financeiro"
                    ? "bg-green-50 text-green-700 font-semibold shadow-sm"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <BarChart3 size={18} />
                <span className="tracking-wide">Financeiro</span>
              </div>

              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  openMenu === "financeiro" ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openMenu === "financeiro" && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="ml-4 pl-2 border-l space-y-1"
                >
                  <SidebarItem
                    href="/financeiro/caixa"
                    active={activeTab === "caixa"}
                    icon={<BarChart3 size={18} />}
                    label="Caixa"
                    onNavigate={() => setSidebarOpen(false)}
                  />
                  <SidebarItem
                    href="/financeiro/recebimentos"
                    active={activeTab === "recebimentos"}
                    icon={<BarChart3 size={18} />}
                    label="Recebimentos"
                    onNavigate={() => setSidebarOpen(false)}
                  />
                  <SidebarItem
                    href="/financeiro/pagamentos"
                    active={activeTab === "pagamentos"}
                    icon={<BarChart3 size={18} />}
                    label="Pagamentos"
                    onNavigate={() => setSidebarOpen(false)}
                  />
                  <SidebarItem
                    href="/financeiro/relatorios"
                    active={activeTab === "relatorios-financeiros"}
                    icon={<BarChart3 size={18} />}
                    label="Relatórios"
                    onNavigate={() => setSidebarOpen(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>

          </nav>
        </aside>
      )}

      {/* CONTEÚDO */}
      <div className="flex flex-col flex-1">
        <header className="flex items-center gap-3 p-4 border-b sm:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>
          <span className="font-semibold capitalize">{activeTab}</span>
        </header>

        <main className="flex-1 p-4 sm:p-6">{children}</main>
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
  onNavigate,
}: {
  href: string
  icon: React.ReactNode
  label: string
  active: boolean
  onNavigate: () => void
}) {
  return (
    <Link
      href={href}
      prefetch
      onClick={onNavigate}
      className={`
        group relative flex items-center gap-3 px-4 py-2.5 rounded-md
        transition-all duration-150
        active:scale-[0.98]
        ${
          active
            ? "bg-green-50 text-green-700 font-semibold shadow-sm"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }
      `}
    >
      <span
        className={`
          absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r
          transition-all duration-200
          ${active ? "bg-green-500" : "bg-transparent group-hover:bg-gray-300"}
        `}
      />
      <span className={`${active ? "scale-110" : "group-hover:scale-105"} transition-transform`}>
        {icon}
      </span>
      <span className="tracking-wide">{label}</span>
    </Link>
  )
}
