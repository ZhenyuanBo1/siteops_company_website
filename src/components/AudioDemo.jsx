import { useState, useRef, useEffect } from 'react'

function AudioDemo() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [barHeights, setBarHeights] = useState(Array(40).fill(4))

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setBarHeights(prev => prev.map(() => Math.random() * 28 + 4))
      }, 150)
    } else {
      setBarHeights(Array(40).fill(4))
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const togglePlay = () => {
    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = x / rect.width
    audioRef.current.currentTime = pct * duration
  }

  const formatTime = (s) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <section className="audio-demo" id="demo">
      <div className="container">
        <div className="section-header">
          <h2>Hear SiteOps Voice in Action</h2>
          <p>Listen to a live demo of our AI handling a real customer interaction</p>
        </div>

        <div className="audio-player-card">
          {/* Call header */}
          <div className="audio-call-header">
            <div className="audio-call-status">
              <span className={`audio-call-dot ${isPlaying ? 'active' : ''}`} />
              <span>{isPlaying ? 'Live Demo Playing' : 'Demo Recording'}</span>
            </div>
            <span className="audio-call-duration">{formatTime(currentTime)} / {formatTime(duration)}</span>
          </div>

          {/* Waveform visualizer */}
          <div className="audio-waveform" onClick={handleSeek}>
            <div className="audio-waveform-bars">
              {barHeights.map((h, i) => {
                const barProgress = (i / barHeights.length) * 100
                return (
                  <div
                    key={i}
                    className="audio-bar"
                    style={{
                      height: `${h}px`,
                      background: barProgress < progress
                        ? 'var(--accent)'
                        : 'rgba(255,255,255,0.2)',
                    }}
                  />
                )
              })}
            </div>
            {/* Progress track underneath */}
            <div className="audio-progress-track">
              <div className="audio-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Controls */}
          <div className="audio-controls">
            <button className="audio-play-btn" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            <div className="audio-call-info">
              <div className="audio-call-label">SiteOps Voice AI Demo</div>
              <div className="audio-call-meta">Customer Interaction &middot; Feb 2026</div>
            </div>
          </div>

          <audio
            ref={audioRef}
            src="/demo-audio.mp3"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
            preload="metadata"
          />
        </div>
      </div>
    </section>
  )
}

export default AudioDemo
