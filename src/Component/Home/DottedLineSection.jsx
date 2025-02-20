import { useEffect, useRef } from "react"
import './DottedLineSection.css'

export default function Dashboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return
    // Draw dotted lines
    const drawDottedLine = ({startX: number, startY: number, endX: number, endY: number}) => {
      ctx.beginPath()
      ctx.setLineDash([4, 4])
      ctx.strokeStyle = "#8B5CF6"
      ctx.moveTo(startX, startY)
      ctx.lineTo(endX, endY)
      ctx.stroke()
    }

    // Clear and set canvas size
    canvas.width = 1000
    canvas.height = 400
    drawDottedLine(300, 200, 500, 200)
  }, [])

  return (
    <div className="dashboard">
      <div className="services">
        <div className="service-group">
          <div className="service-card">
            <img src="https://v0.dev/placeholder.svg?height=40&width=40" alt="Gmail" className="service-icon" />
            <span>Emailing</span>
          </div>
          <div className="service-card">
            <img src="https://v0.dev/placeholder.svg?height=40&width=40" alt="PayPal" className="service-icon" />
            <span>Billing</span>
          </div>
          <div className="service-card">
            <img src="https://v0.dev/placeholder.svg?height=40&width=40" alt="Dropbox" className="service-icon" />
            <span>Storage</span>
          </div>
        </div>
        <div className="service-group">
          <div className="service-card">
            <img src="https://v0.dev/placeholder.svg?height=40&width=40" alt="Slack" className="service-icon" />
            <span>Texting</span>
          </div>
          <div className="service-card">
            <img src="https://v0.dev/placeholder.svg?height=40&width=40" alt="Discord" className="service-icon" />
            <span>Voicemail</span>
          </div>
          <div className="service-card">
            <img src="https://v0.dev/placeholder.svg?height=40&width=40" alt="Shopify" className="service-icon" />
            <span>Marketing</span>
          </div>
          <div className="service-card">
            <span>Manage</span>
          </div>
        </div>
      </div>

      <div className="center-icon">
        <div className="purple-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="growth-chart">
        <div className="chart-header">
          <h2>Business Growth</h2>
          <div className="increase-rate">
            <span className="percentage">150%</span>
            <span className="label">Increase Rate</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="chart">
          <div className="chart-bars">
            <div className="bar-group">
              <div className="bar gray" style={{ height: "120px" }}></div>
              <div className="bar purple" style={{ height: "100px" }}></div>
              <span className="date">2 June</span>
            </div>
            <div className="bar-group">
              <div className="bar gray" style={{ height: "200px" }}></div>
              <div className="bar purple" style={{ height: "80px" }}></div>
              <span className="date">9 June</span>
            </div>
            <div className="bar-group">
              <div className="bar gray" style={{ height: "180px" }}></div>
              <div className="bar purple" style={{ height: "160px" }}></div>
              <span className="date">16 June</span>
            </div>
            <div className="bar-group">
              <div className="bar gray" style={{ height: "100px" }}></div>
              <div className="bar purple" style={{ height: "220px" }}></div>
              <span className="date">23 June</span>
            </div>
          </div>
          <div className="y-axis">
            <span>500</span>
            <span>250</span>
            <span>100</span>
            <span>0</span>
          </div>
        </div>
      </div>
      <canvas ref={canvasRef} className="connection-lines" />
    </div>
  )
}

