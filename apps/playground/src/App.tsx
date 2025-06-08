import { useState } from 'react'
import { Button } from '@components-library/ui'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-background text-foreground p-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold">Component Library Playground</h1>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Button Variants</h2>
            
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setCount(count + 1)}>
                Primary Button (Count: {count})
              </Button>
              
              <Button variant="secondary">
                Secondary
              </Button>
              
              <Button variant="outline">
                Outline
              </Button>
              
              <Button variant="destructive">
                Destructive
              </Button>
              
              <Button variant="ghost">
                Ghost
              </Button>
              
              <Button variant="link">
                Link
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🚀</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App