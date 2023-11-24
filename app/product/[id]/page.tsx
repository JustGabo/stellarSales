'use client'
import NavBar from "@/components/navBar"
interface PageProps {
  params: {
    id: string
  }
}

function Page({params}:PageProps) {
  return (
    <div className="px-10">
      <NavBar/>
    </div>
  )
}

export default Page
