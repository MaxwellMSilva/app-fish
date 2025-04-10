"use client"

import type React from "react"

import Link from "next/link"
import { User, Scissors, BarChart3, Trophy } from "lucide-react"

interface AdminLayoutProps {
  children: React.ReactNode
  activeTab: string
}

export function AdminLayout({ children, activeTab }: AdminLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center h-16">
          <div className="flex items-center mr-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <path d="M19.5 8.5c0 1.5-1.5 2-1.5 2"></path>
                <path d="M19.5 4.5c0 1.5-1.5 2-1.5 2"></path>
                <path d="M19.5 12.5c0 1.5-1.5 2-1.5 2"></path>
                <path d="M15.5 8.5c0 1.5-1.5 2-1.5 2"></path>
                <path d="M15.5 4.5c0 1.5-1.5 2-1.5 2"></path>
                <path d="M15.5 12.5c0 1.5-1.5 2-1.5 2"></path>
                <path d="M4 19h16"></path>
                <path d="M4 15l4-6"></path>
                <path d="M4 9l4 6"></path>
                <path d="M12 9l-4 6"></path>
                <path d="M12 9l4 6"></path>
                <path d="M20 9l-4 6"></path>
              </svg>
              <span className="ml-2 text-xl font-bold">
                Rondo<span className="text-yellow-400">Fish</span>
              </span>
            </div>
          </div>
          <nav className="flex space-x-4">
            <Link
              href="/operadores"
              className={`px-3 py-2 ${activeTab === "operadores" ? "text-black" : "text-gray-500"}`}
            >
              Operadores
            </Link>
            <Link href="/cortes" className={`px-3 py-2 ${activeTab === "cortes" ? "text-black" : "text-gray-500"}`}>
              Cortes
            </Link>
            <Link
              href="/dashboard"
              className={`px-3 py-2 ${activeTab === "dashboard" ? "text-black" : "text-gray-500"}`}
            >
              Dashboard
            </Link>
            <Link href="/ranking" className={`px-3 py-2 ${activeTab === "ranking" ? "text-black" : "text-gray-500"}`}>
              Ranking
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 border-r bg-gray-50">
          <nav className="flex flex-col p-2">
            <Link
              href="/operadores"
              className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                activeTab === "operadores" ? "bg-blue-50 text-blue-600" : "text-gray-700"
              }`}
            >
              <User size={18} />
              <span>Operadores</span>
            </Link>
            <Link
              href="/cortes"
              className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                activeTab === "cortes" ? "bg-blue-50 text-blue-600" : "text-gray-700"
              }`}
            >
              <Scissors size={18} />
              <span>Cortes</span>
            </Link>
            <Link
              href="/dashboard"
              className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                activeTab === "dashboard" ? "bg-blue-50 text-blue-600" : "text-gray-700"
              }`}
            >
              <BarChart3 size={18} />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/ranking"
              className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                activeTab === "ranking" ? "bg-blue-50 text-blue-600" : "text-gray-700"
              }`}
            >
              <Trophy size={18} />
              <span>Ranking</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
