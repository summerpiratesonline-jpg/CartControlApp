import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type Item = {
  id: number
  name: string
  price: number
  emoji: string
}

type ShoppingContextType = {
  budget: number
  setBudget: (v: number) => void
  items: Item[]
  addItem: (item: Omit<Item, 'id'>) => void
  removeItem: (id: number) => void
  totalSpent: number
  remaining: number
  status: 'ok' | 'warning' | 'over'
}

const ShoppingContext = createContext<ShoppingContextType | null>(null)

export function ShoppingProvider({ children }: { children: ReactNode }) {
  const [budget, setBudget] = useState(0)
  const [items, setItems] = useState<Item[]>([])
  const [nextId, setNextId] = useState(1)

  const addItem = useCallback((item: Omit<Item, 'id'>) => {
    setItems(prev => [...prev, { ...item, id: nextId }])
    setNextId(id => id + 1)
  }, [nextId])

  const removeItem = useCallback((id: number) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  const totalSpent = items.reduce((s, i) => s + i.price, 0)
  const remaining = budget - totalSpent

  let status: 'ok' | 'warning' | 'over' = 'ok'
  if (budget > 0) {
    if (totalSpent > budget) status = 'over'
    else if (totalSpent >= budget * 0.8) status = 'warning'
  }

  return (
    <ShoppingContext.Provider value={{ budget, setBudget, items, addItem, removeItem, totalSpent, remaining, status }}>
      {children}
    </ShoppingContext.Provider>
  )
}

export function useShopping() {
  const ctx = useContext(ShoppingContext)
  if (!ctx) throw new Error('useShopping must be used within ShoppingProvider')
  return ctx
}
