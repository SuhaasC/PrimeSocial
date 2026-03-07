'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackScrollDepth, trackSectionView } from '../utils/analytics';

const depthMilestones = [25, 50, 75, 90];

const sectionIdsByPath: Record<string, string[]> = {
  '/': ['top', 'gap', 'services', 'process', 'fifteen-day', 'thirty-day', 'outcomes'],
  '/apply': ['application-form'],
};

const EngagementTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const trackedDepth = new Set<number>();
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const maxScrollable = Math.max(fullHeight - viewportHeight, 1);
      const percentage = Math.min(100, Math.round((scrollTop / maxScrollable) * 100));

      depthMilestones.forEach((milestone) => {
        if (percentage >= milestone && !trackedDepth.has(milestone)) {
          trackedDepth.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const trackedSections = new Set<string>();
    const sectionIds = sectionIdsByPath[pathname] ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (!id || trackedSections.has(id)) return;
          trackedSections.add(id);
          trackSectionView(id);
        });
      },
      { threshold: 0.55 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export default EngagementTracker;
