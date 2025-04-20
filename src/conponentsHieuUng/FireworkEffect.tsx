"use client"

import type React from "react"
import { useEffect, useState, useCallback } from "react"
import confetti from "canvas-confetti"

const FireworkEffect: React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(true)

    // Create a realistic firework burst
    const createFireworkBurst = useCallback((originX: number, originY: number, colors: string[]) => {
        // Main burst
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: originX, y: originY },
            colors: colors,
            startVelocity: 30,
            gravity: 0.8,
            shapes: ["circle"],
            scalar: 1.2,
            ticks: 200,
            disableForReducedMotion: true,
        })

        // Secondary smaller bursts (delayed slightly)
        setTimeout(() => {
            confetti({
                particleCount: 50,
                spread: 100,
                origin: { x: originX + 0.05, y: originY + 0.05 },
                colors: colors,
                startVelocity: 25,
                gravity: 0.7,
                scalar: 0.8,
                ticks: 150,
            })
        }, 150)

        // Outer sparkles
        setTimeout(() => {
            confetti({
                particleCount: 30,
                spread: 360,
                origin: { x: originX, y: originY },
                colors: colors,
                startVelocity: 45,
                gravity: 0.9,
                scalar: 0.6,
                drift: 0.2,
                ticks: 200,
            })
        }, 200)
    }, [])

    // Launch a sequence of fireworks
    const launchFireworkSequence = useCallback(() => {
        // Color palettes for different fireworks
        const colorSets = [
            ["#FF5252", "#FFEB3B", "#FF4081", "#FFFFFF"], // Red-gold
            ["#18FFFF", "#00E5FF", "#84FFFF", "#FFFFFF"], // Blue-cyan
            ["#AEEA00", "#C6FF00", "#F4FF81", "#FFFFFF"], // Green-lime
            ["#AA00FF", "#E040FB", "#EA80FC", "#FFFFFF"], // Purple
            ["#FFAB40", "#FFCC80", "#FFD180", "#FFFFFF"], // Orange
            ["#FF4081", "#F50057", "#FF80AB", "#FFFFFF"], // Pink
        ]

        // Launch multiple fireworks with different timings and positions
        const launchFirework = (delay: number) => {
            setTimeout(() => {
                if (!isActive) return

                // Random position with more realistic constraints
                const x = 0.1 + Math.random() * 0.8 // Keep away from edges
                const y = 0.1 + Math.random() * 0.5 // Higher in the sky

                // Random color set
                const colors = colorSets[Math.floor(Math.random() * colorSets.length)]

                createFireworkBurst(x, y, colors)
            }, delay)
        }

        // Launch a series of fireworks with varying delays
        for (let i = 0; i < 3; i++) {
            launchFirework(i * 300) // Staggered primary bursts
        }

        // Add some random additional bursts
        for (let i = 0; i < 2; i++) {
            launchFirework(1200 + Math.random() * 1000)
        }
    }, [createFireworkBurst, isActive])

    useEffect(() => {
        // Initial firework
        launchFireworkSequence()

        // Set up interval for continuous fireworks
        const interval = setInterval(() => {
            if (isActive) {
                launchFireworkSequence()
            }
        }, 2000)

        return () => {
            clearInterval(interval)
            setIsActive(false)
        }
    }, [launchFireworkSequence, isActive])

    return (
        <div className="position-fixed top-0 start-0 end-0 bottom-0" style={{ pointerEvents: "none", zIndex: 50 }}>
            {/* This div is just a container for the canvas-confetti effect */}
        </div>
    )
}

export default FireworkEffect
