```jsx
import { useState } from 'react'
import { Button } from '../components/ui/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-800 tracking-tight">
            Hello World!
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Welcome to your React + Vite + Tailwind CSS application
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <Button 
              onClick={() => setCount(count - 1)}
              variant="outline"
              size="lg"
            >
              -
            </Button>
            <span className="text-2xl font-semibold text-gray-700 min-w-[3rem]">
              {count}
            </span>
            <Button 
              onClick={() => setCount(count + 1)}
              size="lg"
            >
              +
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Click the buttons to test the counter
          </p>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-400">
            Built with ⚡ Vite + ⚛️ React + 🎨 Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
```