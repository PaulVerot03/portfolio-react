import { useEffect, useRef, useState } from "react";
import { Location } from "react-router-dom";

type Props = {
  mainContentId: string;
  location: Location;
};


//
function extractHeadingsFromDOM(element: HTMLElement | null) {
  if (!element) return [];
  const colors = [
    '#274e13', // h1
    '#38761d', // h2
    '#6aa84f', // h3
    '#93c47d', // h4
  ];
  const sizes = [16, 14, 12, 11];
  const headings: { id: string; text: string; level: number; color: string; size: number }[] = [];
  let idCounter = 0;
  element.querySelectorAll('h1, h2, h3, h4').forEach((el) => {
    let id = el.id;
    if (!id) {
      id = `minimap-heading-${idCounter++}`;
      el.id = id;
    }
    const level = parseInt(el.tagName[1], 10) - 1;
    headings.push({
      id,
      text: el.textContent?.trim() || '',
      level,
      color: colors[level] || colors[colors.length - 1],
      size: sizes[level] || 11,
    });
  });
  return headings;
}


export function TextMinimap({ mainContentId, location }: Props) {
  const minimapRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<ReturnType<typeof extractHeadingsFromDOM>>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const main = document.getElementById(mainContentId);
      setHeadings(extractHeadingsFromDOM(main));
    }, 100); 
    return () => clearTimeout(timeout);
  }, [mainContentId, location]);

  useEffect(() => {
    const main = document.getElementById(mainContentId);
    if (!main || !headings.length) return;
    const onScroll = () => {
      let found: string | null = null;
      for (let i = headings.length - 1; i >= 0; i--) {
        const h = document.getElementById(headings[i].id);
        if (h) {
          const rect = h.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.2) {
            found = headings[i].id;
            break;
          }
        }
      }
      setActiveId(found);
      if (found && minimapRef.current) {
        const el = minimapRef.current.querySelector(`[data-minimap-id='${found}']`);
        if (el) {
          const elRect = (el as HTMLElement).getBoundingClientRect();
          const minimapRect = minimapRef.current.getBoundingClientRect();
          if (elRect.top < minimapRect.top) {
            (el as HTMLElement).scrollIntoView({ block: 'nearest' });
          } else if (elRect.bottom > minimapRect.bottom) {
            (el as HTMLElement).scrollIntoView({ block: 'nearest' });
          }
        }
      }
    };
    main.addEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => {
      main.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainContentId, headings]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // taller/shorter - note that it should work but does not appear to be working  :/
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="text-minimap vscode-minimap"
      ref={minimapRef}
      style={{
        fontFamily: '"JetBrains Mono", "Fira Mono", "Consolas", monospace',
        background: 'transparent',
        width: 170,
        minWidth: 170,
        maxWidth: 170,
        height: 'fit-content',
        maxHeight: '90vh',
        overflow: "auto",
        borderLeft: "1px solid #2222226b",
        padding: 4,
        lineHeight: 1.2,
        fontSize: 7,
        userSelect: "none",
        position: "sticky",
        top: 50,
        zIndex: 10,
        cursor: "pointer",
        right: 10,
      }}
      tabIndex={-1}
      aria-label="Minimap"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {headings.map(h => (
          <div
            key={h.id}
            data-minimap-id={h.id}
            onClick={() => handleClick(h.id)}
            style={{
              color: h.color,
              fontSize: 13,
              fontWeight: h.id === activeId ? 'bold' : 'normal',
              marginLeft: 0,
              paddingLeft: 6,
              background: h.id === activeId ? 'rgba(39, 78, 19, 0.08)' : 'none',
              borderRadius: 3,
              padding: '2px 4px',
              outline: h.id === activeId ? `1px solid ${h.color}44` : 'none',
              borderLeft: h.id === activeId ? `4px solid ${h.color}` : '4px solid transparent',
              transition: 'background 0.2s, border-left 0.2s, font-weight 0.2s',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minHeight: '16px',
              lineHeight: '16px',
            }}
            title={h.text}
          >
            {h.text}
          </div>
        ))}
      </div>
    </div>
  );
}
