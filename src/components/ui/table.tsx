import React, { ReactNode } from "react"

interface TableProps {
  children: ReactNode
  className?: string
}

export function Table({ children, className = "" }: TableProps) {
  return (
    <table className={`w-full border-collapse ${className}`}>
      {children}
    </table>
  )
}

export function TableHead({ children }: { children: ReactNode }) {
  return <thead className="bg-gray-100">{children}</thead>
}

export function TableRow({ children }: { children: ReactNode }) {
  return <tr className="border-b hover:bg-gray-50">{children}</tr>
}

export function TableHeader({ children }: { children: ReactNode }) {
  return (
    <th className="text-left py-2 px-4 font-semibold text-gray-700">
      {children}
    </th>
  )
}

export function TableBody({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>
}

export function TableCell({ children }: { children: ReactNode }) {
  return <td className="py-2 px-4">{children}</td>
}
