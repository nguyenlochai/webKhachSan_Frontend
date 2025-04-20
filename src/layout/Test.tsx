"use client"

import type React from "react"
import { useState } from "react"
import FireworkEffect from "../conponentsHieuUng/FireworkEffect"


type FireworkDemoProps = {}

const Test: React.FC<FireworkDemoProps> = () => {
    const [showFireworks, setShowFireworks] = useState<boolean>(false)

    return (
        <div
        >
            <button
                onClick={() => setShowFireworks(!showFireworks)}
                className="btn btn-lg px-4 py-2 mb-4"
                style={{
                    background: "linear-gradient(to right, #6f42c1, #e83e8c)",
                    color: "white",
                    border: "none",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                {showFireworks ? "Dừng lại đi" : "Xin Chào"}
            </button>

            {showFireworks && <FireworkEffect />}

        </div>
    )
}

export default Test;
