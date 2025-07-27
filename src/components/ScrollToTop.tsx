'use client';

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-amber-600 hover:bg-amber-700 text-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Retour en haut de page"
    >
      <svg 
        className="w-6 h-6 md:w-8 md:h-8" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
} 