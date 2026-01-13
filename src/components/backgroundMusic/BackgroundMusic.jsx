import { useEffect, useRef, useState } from 'react';

export const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const playAudio = () => {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Autoplay bloqueado. Aguardando interação."));
    };

    window.addEventListener('click', playAudio, { once: true });

    return () => window.removeEventListener('click', playAudio);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      <audio ref={audioRef} src="./background-music/BackgroundMusic.ogg" loop />
      <button 
        onClick={togglePlay}
        style={{
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
          background: 'rgba(255, 255, 255, 0.8)',
          border: '1px solid #ccc'
        }}
      >
        {isPlaying ? '🔈 Mutar' : '🔊 Ouvir Música'}
      </button>
    </div>
  );
};