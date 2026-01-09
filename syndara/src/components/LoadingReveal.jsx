// src/components/LoadingReveal.jsx
import React, { useState, useEffect } from 'react';

const LoadingReveal = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [prevProgress, setPrevProgress] = useState(0);
  const [stage, setStage] = useState('loading');
  const [slicePhase, setSlicePhase] = useState('idle');
   
  useEffect(() => {
    const failsafe = setTimeout(() => {
      console.log('Failsafe triggered - forcing completion');
      onComplete();
    }, 10000);

    return () => clearTimeout(failsafe);
  }, [onComplete]);
    
  useEffect(() => {
    let checkInterval;
    let lastImageCount = 0;
    let stableChecks = 0;
    
    const loadImages = () => {
      const images = Array.from(document.images);
      const totalImages = images.length;
      
      console.log(`Found ${totalImages} images in the document`);
      
      // If no images found yet, keep checking
      if (totalImages === 0) {
        return false;
      }

      let loadedImages = 0;

      const updateProgress = () => {
        loadedImages++;
        const newProgress = Math.round((loadedImages / totalImages) * 100);
        setPrevProgress(prev => prev);
        setProgress(newProgress);
        
        console.log(`Image loaded: ${loadedImages}/${totalImages} (${newProgress}%)`);
        
        if (loadedImages === totalImages) {
          setTimeout(() => setStage('brandReveal'), 500);
        }
      };

      // Check each image
      images.forEach(img => {
        if (img.complete && img.naturalHeight !== 0) {
          updateProgress();
        } else {
          img.addEventListener('load', updateProgress);
          img.addEventListener('error', updateProgress);
        }
      });
      
      return true; // Images found and being tracked
    };

    // Keep checking for new images until the DOM stabilizes
    checkInterval = setInterval(() => {
      const currentImageCount = document.images.length;
      
      // Check if image count has stabilized
      if (currentImageCount === lastImageCount) {
        stableChecks++;
        
        // If stable for 3 checks (600ms), start tracking
        if (stableChecks >= 3) {
          clearInterval(checkInterval);
          const success = loadImages();
          
          // If still no images after stabilization, complete immediately
          if (!success) {
            console.log('No images found after DOM stabilized');
            setProgress(100);
            setTimeout(() => setStage('brandReveal'), 500);
          }
        }
      } else {
        stableChecks = 0;
        lastImageCount = currentImageCount;
      }
    }, 200);

    return () => clearInterval(checkInterval);
  }, []);

  useEffect(() => {
    if (stage === 'brandReveal') {
      setTimeout(() => {
        setStage('slicing');
        setSlicePhase('dropping');
      }, 1200);
    } else if (stage === 'slicing' && slicePhase === 'dropping') {
      setTimeout(() => setSlicePhase('splitting'), 700);
    } else if (slicePhase === 'splitting') {
      setTimeout(() => setStage('complete'), 1200);
    } else if (stage === 'complete') {
      setTimeout(onComplete, 100);
    }
  }, [stage, slicePhase, onComplete]);

  if (stage === 'complete') return null;

  const currentDigits = progress.toString().split('');
  const prevDigits = prevProgress.toString().split('');

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Left curtain */}
      <div
        className="absolute top-0 left-0 h-full w-1/2 bg-white z-20"
        style={{
          transform: slicePhase === 'splitting' ? 'translateX(-100%)' : 'translateX(0)',
          transition: slicePhase === 'splitting' ? 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
        }}
      />
      
      {/* Right curtain */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 bg-white z-20"
        style={{
          transform: slicePhase === 'splitting' ? 'translateX(100%)' : 'translateX(0)',
          transition: slicePhase === 'splitting' ? 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
        }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        {stage === 'loading' && (
          <div 
            className="flex"
            style={{
              height: 'clamp(80px, 15vw, 180px)',
              opacity: stage === 'brandReveal' ? 0 : 1,
              transition: 'opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {currentDigits.map((digit, index) => {
              const positionFromRight = currentDigits.length - 1 - index;
              const prevPositionFromRight = prevDigits.length - 1 - positionFromRight;
              const prevDigit = prevPositionFromRight >= 0 ? prevDigits[prevPositionFromRight] : null;
              const hasChanged = digit !== prevDigit;
              
              return (
                <div
                  key={`${progress}-${index}`}
                  className="relative inline-block overflow-hidden"
                  style={{
                    width: 'clamp(48px, 9vw, 108px)',
                    height: 'clamp(80px, 15vw, 180px)',
                  }}
                >
                  {hasChanged && prevDigit !== null && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        fontSize: 'clamp(80px, 15vw, 180px)',
                        lineHeight: 1,
                        fontWeight: 900,
                        animation: 'slideOutUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                        textAlign: 'center'
                      }}
                      className="tabular-nums select-none"
                    >
                      {prevDigit}
                    </div>
                  )}
                  
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      fontSize: 'clamp(80px, 15vw, 180px)',
                      lineHeight: 1,
                      fontWeight: 900,
                      animation: hasChanged ? 'slideInUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards' : 'none',
                      textAlign: 'center'
                    }}
                    className="tabular-nums select-none"
                  >
                    {digit}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {stage === 'brandReveal' && (
          <h1
            style={{
              fontSize: 'clamp(2rem, 8vw, 6rem)',
              letterSpacing: '0.2em',
              fontWeight: 700,
              opacity: 1,
              transform: 'scale(1)',
              animation: 'fadeScale 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards'
            }}
          >
            SYNDARA
          </h1>
        )}
      </div>

      {/* Dropping line */}
      {stage === 'slicing' && slicePhase === 'dropping' && (
        <div 
          className="absolute left-1/2 bg-black z-50"
          style={{
            width: '4px',
            marginLeft: '-2px',
            top: 0,
            height: '0',
            animation: 'dropLineDown 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
        />
      )}

      {/* Splitting lines */}
      {stage === 'slicing' && slicePhase === 'splitting' && (
        <>
          <div
            className="absolute top-0 bg-black z-40"
            style={{
              left: '50%',
              width: '2px',
              height: '100vh',
              transform: 'translateX(-100vw)',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
          <div
            className="absolute top-0 bg-black z-40"
            style={{
              left: '50%',
              width: '2px',
              height: '100vh',
              transform: 'translateX(100vw)',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        </>
      )}

      <style>{`
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes dropLineDown {
          from { height: 0; }
          to { height: 100vh; }
        }
        @keyframes slideInUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideOutUp {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(-100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default LoadingReveal;