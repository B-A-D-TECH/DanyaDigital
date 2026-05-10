"use client"

import { Activity, AlertTriangle, Globe } from "lucide-react"
import Image from "next/image"

export default function DashboardPreview() {
  return (
    <div className="relative">
      {/* Glowing border container */}
      <div className="relative p-100  glassmorphism ">
        {/* Dashboard grid background */}
        <div className="absolute inset-2 opacity-30 ">
          <Image
                    src="/icons.png"
                    alt="BiTech Digital"
                    width={600}
                    height={720}
                    className="object-contain"
                  />
        </div>

        {/* Content */}
          {/* Threat Status Cards */}
          

          {/* Chart Area */}

          {/* Activity List */}
        </div>
      </div>
  )
}
