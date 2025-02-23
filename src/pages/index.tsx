import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

export type Status = 'all' | 'pending' | 'completed'

const Index = () => {
  const [status, setStatus] = useState<Status>('all')

  const handleTabChange = (value: string) => {
    if (value === 'all' || value === 'pending' || value === 'completed') {
      setStatus(value)
    }
  }

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="p-8 text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root
          defaultValue="all"
          onValueChange={handleTabChange}
          value={status}
        >
          <Tabs.List className="flex gap-2">
            <Tabs.Trigger
              value="all"
              className="rounded-full border px-6 py-3 text-sm font-bold data-[state=active]:border-none data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              value="pending"
              className="rounded-full border px-6 py-3 text-sm font-bold data-[state=active]:border-none data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              value="completed"
              className="rounded-full border px-6 py-3 text-sm font-bold data-[state=active]:border-none data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
        <div className="pt-10">
          <TodoList status={status} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
