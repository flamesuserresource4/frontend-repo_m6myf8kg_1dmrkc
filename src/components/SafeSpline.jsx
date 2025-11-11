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

// Global 3D kill-switch via Vite env. Set VITE_ENABLE_3D="true" to enable requests.
const enable3D = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_ENABLE_3D === 'true'

// Safer Spline wrapper.
export default function SafeSpline({ scene, className, style, fallback = null, onLoad, precheck = true, timeoutMs = 2500 }) {
  const [status, setStatus] = useState(enable3D ? (precheck ? 'checking' : 'ok') : 'blocked') // 'checking' | 'ok' | 'blocked'
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true

    if (!enable3D) {
      setStatus('blocked')
      return () => { mounted.current = false }
    }

    if (!precheck) {
      setStatus('ok')
      return () => { mounted.current = false }
    }

    const controller = new AbortController()
    const timer = setTimeout(() => {
      if (mounted.current && status === 'checking') setStatus('blocked')
    }, timeoutMs)

    const check = async () => {
      try {
        const res = await fetch(scene, { method: 'HEAD', mode: 'cors', signal: controller.signal })
        if (!mounted.current) return
        if (res && res.ok) {
          setStatus('ok')
        } else {
          setStatus('blocked')
        }
      } catch {
        if (mounted.current) setStatus('blocked')
      } finally {
        clearTimeout(timer)
      }
    }

    check()

    return () => {
      mounted.current = false
      controller.abort()
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene, precheck, timeoutMs])

  const Fallback = fallback || (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_10%,#22d3ee,transparent),radial-gradient(600px_200px_at_80%_20%,#e879f9,transparent)] opacity-20" />
      <div className="text-center">
        <div className="mx-auto mb-3 h-10 w-10 animate-pulse rounded-full bg-white/10" />
        <p className="text-sm text-white/60">3D preview unavailable</p>
      </div>
    </div>
  )

  if (status !== 'ok') return Fallback

  return (
    <SplineErrorBoundary fallback={Fallback}>
      <Spline scene={scene} style={style} className={className} onLoad={onLoad} />
    </SplineErrorBoundary>
  )
}
