import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
export  const supabase = createClient("https://yvwzfokjdgcyvyikzzen.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2d3pmb2tqZGdjeXZ5aWt6emVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDkxODk5OSwiZXhwIjoyMDE2NDk0OTk5fQ.0E4nVMsEougVoDWcHppePn7ehMZPv6WgMA4pVmobZd4")
import  {router} from "./router"


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>
  
)
