# Hero video slot

The current hero uses an optimized cinematic image-transition sequence (crossfade + Ken Burns + WebGL camera movement) rather than an autoplay video, which is an allowed fallback in the brief.

To use a final MP4/WebM commercial, place compressed files here and swap `components/hero/CinematicBackdrop.tsx` for a muted, looping, `playsInline` video element. Keep a static/mobile fallback.
