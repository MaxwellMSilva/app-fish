"use client"

import type React from "react"

import Image from 'next/image'
import rfLogo from '../../public/rondo01.png'

import Link from "next/link"
import { User, Fish, BarChart3, Trophy } from "lucide-react"

interface AdminLayoutProps {
  children: React.ReactNode
  activeTab: string
}

export function AdminLayout({ children, activeTab }: AdminLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      {/* <header className="border-b">
        <div className="container flex items-center h-16">
          <div className="flex items-center">
            
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
      </header> */}

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 border-r bg-gray-50">
          <nav className="flex flex-col p-2">
            <div className="flex items-center h-25">
              <Image src={rfLogo} alt="logoEmpresa" className="flex items-center gap-2 px-3 py-2 rounded-md"/>
            </div>
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
              <Fish size={18} />
              <span>Cortes</span>
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
            <Link
              href="/dashboard"
              className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                activeTab === "dashboard" ? "bg-blue-50 text-blue-600" : "text-gray-700"
              }`}
            >
              <BarChart3 size={18} />
              <span>Dashboard</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
