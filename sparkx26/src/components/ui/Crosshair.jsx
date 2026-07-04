import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const lerp = (a, b, n) => (1 - n) * a + n * b;

const getMousePos = (e, container) => {
  if (container) {
    const bounds = container.getBoundingClientRect();
    return {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top
    };
  }
  return { x: e.clientX, y: e.clientY };
};

const Crosshair = ({ color = 'white', containerRef = null }) => {
  const cursorRef = useRef(null);
  const lineHorizontalRef = useRef(null);
  const lineVerticalRef = useRef(null);
  const filterXRef = useRef(null);
  const filterYRef = useRef(null);

  // Only enable the crosshair on devices with a real pointer (mouse/trackpad).
  const [hasFinePointer, setHasFinePointer] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const onChange = () => setHasFinePointer(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!hasFinePointer) return;
    let mouse = { x: 0, y: 0 };

    const handleMouseMove = ev => {
      mouse = getMousePos(ev, containerRef?.current);

      if (containerRef?.current) {
        const bounds = containerRef.current.getBoundingClientRect();
        if (
          ev.clientX < bounds.left ||
          ev.clientX > bounds.right ||
          ev.clientY < bounds.top ||
          ev.clientY > bounds.bottom
        ) {
          gsap.to([lineHorizontalRef.current, lineVerticalRef.current], { opacity: 0 });
        } else {
          gsap.to([lineHorizontalRef.current, lineVerticalRef.current], { opacity: 1 });
        }
      }
    };

    const target = containerRef?.current || window;
    target.addEventListener('mousemove', handleMouseMove);

    const renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.15 },
      ty: { previous: 0, current: 0, amt: 0.15 }
    };

    gsap.set([lineHorizontalRef.current, lineVerticalRef.current], { opacity: 0 });

    const onMouseMove = () => {
      renderedStyles.tx.previous = renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.previous = renderedStyles.ty.current = mouse.y;

      gsap.to([lineHorizontalRef.current, lineVerticalRef.current], {
        duration: 0.9,
        ease: 'Power3.easeOut',
        opacity: 1
      });

      requestAnimationFrame(render);
      target.removeEventListener('mousemove', onMouseMove);
    };

    target.addEventListener('mousemove', onMouseMove);

    const primitiveValues = { turbulence: 0 };

    const tl = gsap
      .timeline({
        paused: true,
        onStart: () => {
          if (lineHorizontalRef.current) lineHorizontalRef.current.style.filter = `url(#filter-noise-x)`;
          if (lineVerticalRef.current) lineVerticalRef.current.style.filter = `url(#filter-noise-y)`;
        },
        onUpdate: () => {
          filterXRef.current?.setAttribute('baseFrequency', primitiveValues.turbulence);
          filterYRef.current?.setAttribute('baseFrequency', primitiveValues.turbulence);
        },
        onComplete: () => {
          if (lineHorizontalRef.current) lineHorizontalRef.current.style.filter = 'none';
          if (lineVerticalRef.current) lineVerticalRef.current.style.filter = 'none';
        }
      })
      .to(primitiveValues, {
        duration: 0.5,
        ease: 'power1',
        startAt: { turbulence: 1 },
        turbulence: 0
      });

    const enter = () => tl.restart();
    const leave = () => tl.progress(1).kill();

    let rafId;
    const render = () => {
      renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.current = mouse.y;

      for (const key in renderedStyles) {
        renderedStyles[key].previous = lerp(
          renderedStyles[key].previous,
          renderedStyles[key].current,
          renderedStyles[key].amt
        );
      }

      if (lineVerticalRef.current)
        gsap.set(lineVerticalRef.current, { x: renderedStyles.tx.previous });
      if (lineHorizontalRef.current)
        gsap.set(lineHorizontalRef.current, { y: renderedStyles.ty.previous });

      rafId = requestAnimationFrame(render);
    };

    // Target all interactive elements: links AND buttons
    const root = containerRef?.current || document;
    const interactiveEls = root.querySelectorAll('a, button');

    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    // MutationObserver to catch dynamically added elements
    const observer = new MutationObserver(() => {
      const els = root.querySelectorAll('a, button');
      els.forEach(el => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    });

    observer.observe(root === document ? document.body : root, {
      childList: true,
      subtree: true
    });

    return () => {
      target.removeEventListener('mousemove', handleMouseMove);
      target.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
      observer.disconnect();
    };
  }, [containerRef, color, hasFinePointer]);

  if (!hasFinePointer) return null;

  return (
    <div
      ref={cursorRef}
      className={`${containerRef ? 'absolute' : 'fixed'} top-0 left-0 w-full h-full pointer-events-none z-[99999]`}
    >
      <svg className="absolute top-0 left-0 w-full h-full overflow-visible">
        <defs>
          <filter id="filter-noise-x">
            <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves="1" ref={filterXRef} />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
          <filter id="filter-noise-y">
            <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves="1" ref={filterYRef} />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
        </defs>
      </svg>
      <div
        ref={lineHorizontalRef}
        className="absolute w-full h-px pointer-events-none opacity-0"
        style={{ background: color, top: 0, left: 0 }}
      />
      <div
        ref={lineVerticalRef}
        className="absolute h-full w-px pointer-events-none opacity-0"
        style={{ background: color, top: 0, left: 0 }}
      />
    </div>
  );
};

export default Crosshair;
