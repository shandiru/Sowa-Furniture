import { useRef, useState } from "react";

export default function RestorationVideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayToggle = (e) => {
    // Prevent clicking the mute button from pausing the video
    if (e.target.closest('.mute-btn')) return;

    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="bg-[var(--sowa-white)] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
          <div>
            <p
              data-aos="fade-up"
              className="mb-4 text-[12px] font-semibold uppercase tracking-[0.26em] text-[var(--sowa-gold-deep)] md:text-[13px]"
            >
              Restoration Showcase
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="80"
              className="max-w-xl text-[30px] font-bold leading-[1.12] text-[var(--sowa-ink)] md:text-[42px]"
            >
              Restoring Quality. Preserving Character.
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="120"
              className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--sowa-ink-muted)] md:text-base"
            >
              From worn-out seating to tired tabletops, we help businesses extend
              the life of their furniture through expert restoration and bespoke
              craftsmanship.
            </p>
          </div>

          <div data-aos="fade-down" className="relative">
            <div className="group relative overflow-hidden rounded-[20px] border border-[var(--sowa-gold-soft)] bg-[var(--sowa-white)] shadow-[0_20px_60px_rgba(5,5,5,0.1)]">
              
              <video
                ref={videoRef}
                className="h-[260px] w-full bg-black object-cover sm:h-[340px] lg:h-[460px]"
                src="/new.mp4"
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Hover/Play Custom Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 cursor-pointer
                  ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
                onClick={handlePlayToggle}
              >
                {/* Centered Play/Pause Button */}
                <button
                  type="button"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--sowa-gold-deep)] text-white shadow-lg transition-transform duration-200 hover:scale-110"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 ml-1">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>

                {/* Bottom Corner Custom Sound Button (Hidden native controls replacement) */}
                <button
                  type="button"
                  onClick={handleMuteToggle}
                  className="mute-btn absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-transform duration-200 hover:scale-105"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    /* Muted Icon */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                  ) : (
                    /* Sound On Icon */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}