'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    // Fonction pour observer les éléments
    const observeElements = () => {
      // Désactiver toutes les animations existantes
      const existingElements = document.querySelectorAll('.animate-on-scroll');
      existingElements.forEach((el) => {
        el.classList.remove('animated');
        observer.unobserve(el);
      });

      // Attendre un peu pour que le DOM soit mis à jour
      setTimeout(() => {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.observe(el));
      }, 100);
    };

    // Observer les éléments
    observeElements();

    return () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [pathname]); // Se déclenche à chaque changement de route

  return null;
} 