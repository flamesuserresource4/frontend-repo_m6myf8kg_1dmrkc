import React, { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'

class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    if (this.props.onError) this.props.onError(error, info)
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || null
    }
    return this.props.children
  }
}

export default function SafeSpline({ scene, className, style, fallback = null, onLoad }) {
  const [unavailable, setUnavailable] = useState(false)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    const controller = new AbortController()
    const check = async () => {
      try {
        const res = await fetch(scene, { method: 'HEAD', signal: controller.signal })
        if (!res.ok) {
          if (mounted.current) setUnavailable(true)
        }
      } catch {
        if (mounted.current) setUnavailable(true)
      }
    }
    check()
    return () => {
      mounted.current = false
      controller.abort()
    }
  }, [scene])

  const Fallback = fallback || (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_10%,#22d3ee,transparent),radial-gradient(600px_200px_at_80%_20%,#e879f9,transparent)] opacity-20" />
      <div className="text-center">
        <div className="mx-auto mb-3 h-10 w-10 animate-pulse rounded-full bg-white/10" />
        <p className="text-sm text-white/60">3D preview unavailable</p>
      </div>
    </div>
  )

  if (unavailable) return Fallback

  return (
    <SplineErrorBoundary fallback={Fallback}>
      <Spline scene={scene} style={style} className={className} onLoad={onLoad} />
    </SplineErrorBoundary>
  )
}
