import { useEffect, useState } from "react";

const struggles = [
  {
    id: 0,
    icon: "✦",
    label: "Grammar Accuracy",
    detail: "Tense errors, subject-verb mismatches, and article mistakes quietly undermine your credibility — even when your ideas are strong.",
    color: "#E8490F",
    bg: "#FFF4F0",
    border: "#FDDDD3",
    stat: "73%",
    statLabel: "of learners struggle with this",
  },
  {
    id: 1,
    icon: "◈",
    label: "Word Choice & Sentence Structure",
    detail: "Choosing the wrong word or building awkward sentences forces listeners to work harder to understand you. Precision matters.",
    color: "#C48A00",
    bg: "#FFFBEE",
    border: "#FDEFC3",
    stat: "68%",
    statLabel: "make vocabulary errors daily",
  },
  {
    id: 2,
    icon: "◎",
    label: "Clarity & Organization of Ideas",
    detail: "Without clear structure, even great ideas get lost. Your listener should follow your thinking effortlessly, not piece it together.",
    color: "#008F77",
    bg: "#F0FDFB",
    border: "#C5F0E8",
    stat: "81%",
    statLabel: "lose listeners mid-sentence",
  },
  {
    id: 3,
    icon: "◐",
    label: "Pronunciation That Affects Understanding",
    detail: "Speed without clarity creates confusion. The goal isn't fast — it's understood. Every syllable should carry your meaning forward.",
    color: "#6D3FC8",
    bg: "#F8F4FF",
    border: "#E4D6FC",
    stat: "59%",
    statLabel: "are misunderstood due to accent",
  },
];

const pillars = [
  { label: "Clear", icon: "◎", desc: "Every sentence lands with precision" },
  { label: "Natural", icon: "∿", desc: "Rhythm that flows without effort" },
  { label: "Structured", icon: "⊞", desc: "Ideas organized for instant understanding" },
];

function Card({ item, isActive, isHovered, onClick, onMouseEnter, onMouseLeave, compact }) {
  const lifted = isActive || isHovered;
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        textAlign: "left",
        padding: compact ? "18px" : "24px",
        borderRadius: compact ? "16px" : "20px",
        border: `1.5px solid ${lifted ? item.color : "#E8E0D8"}`,
        background: isActive ? item.bg : isHovered ? `${item.bg}99` : "#FFFFFF",
        transform: compact
          ? isActive
            ? "translateY(-2px)"
            : "none"
          : isActive
          ? "scale(1.03) translateY(-4px)"
          : isHovered
          ? "translateY(-3px)"
          : "scale(1)",
        boxShadow: isActive
          ? `0 16px 48px ${item.color}28, 0 4px 16px ${item.color}18`
          : isHovered
          ? `0 8px 28px ${item.color}18`
          : "0 2px 12px rgba(0,0,0,0.06)",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow streak on hover */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "2px",
        background: `linear-gradient(to right, transparent, ${item.color}, transparent)`,
        opacity: lifted ? 1 : 0,
        transition: "opacity 0.3s ease",
      }} />

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{
          fontSize: compact ? "20px" : "24px",
          color: item.color,
          display: "inline-block",
          transform: lifted ? "rotate(20deg) scale(1.2)" : "rotate(0deg) scale(1)",
          transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}>
          {item.icon}
        </span>
        <div style={{ flex: 1 }}>
          <p style={{
            fontWeight: 800,
            fontSize: compact ? "18px" : "20px",
            marginBottom: "6px",
            color: isActive ? item.color : "#2C2620",
            letterSpacing: "-0.01em",
            transition: "color 0.2s",
          }}>
            {item.label}
          </p>

          {/* Detail expand */}
          <div style={{
            maxHeight: isActive ? (compact ? "280px" : "180px") : "0px",
            opacity: isActive ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.5s ease, opacity 0.4s ease",
          }}>
            <p style={{ fontSize: compact ? "15px" : "16px", lineHeight: 1.6, paddingTop: "8px", color: "#5A5048" }}>
              {item.detail}
            </p>
            <div style={{
              marginTop: "16px",
              display: "flex",
              alignItems: "baseline",
              gap: "10px",
            }}>
              <span style={{ fontSize: compact ? "28px" : "32px", fontWeight: 800, color: item.color, letterSpacing: "-0.02em" }}>
                {item.stat}
              </span>
              <span style={{ fontSize: "14px", color: "#8A7F76", fontWeight: 500 }}>{item.statLabel}</span>
            </div>
          </div>

          {!isActive && (
            <p style={{
              fontSize: compact ? "12px" : "13px",
              marginTop: "6px",
              fontWeight: 600,
              color: isHovered ? item.color : "#B0A89E",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              transition: "color 0.2s",
            }}>
              {isHovered ? "click to explore →" : "tap to expand →"}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}

export default function BrightureLanding() {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const [hoveredPillar, setHoveredPillar] = useState(null);
  const [quoteHovered, setQuoteHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionMaxWidth = "960px";

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 768);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return (
    <div style={{
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      background: "linear-gradient(160deg, #FDF8F3 0%, #F5EFE8 60%, #EEF6F4 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "clamp(40px, 6vw, 72px) clamp(20px, 4vw, 40px)",
    }}>

      {/* Header */}
      <div style={{ maxWidth: sectionMaxWidth, width: "100%", marginBottom: "clamp(32px, 5vw, 48px)", textAlign: "center" }}>
        <h1 style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          color: "#1C1A17",
          marginBottom: "24px",
        }}>
          Why Our Learners
          <br />
          <span style={{ color: "#E8490F", fontStyle: "italic" }}>Choose Brighture</span>
        </h1>
        <div style={{
          height: "2px", width: "96px", margin: "0 auto 28px",
          background: "linear-gradient(to right, #E8490F, transparent)",
        }} />
        <p style={{ fontSize: isMobile ? "18px" : "20px", lineHeight: 1.75, color: "#6B6259" }}>
          Many students can speak English fluently — but still struggle with grammar accuracy, word choice and sentence structure, clarity and organization of ideas, and pronunciation that affects understanding.
        </p>
      </div>

      {/* Cards Grid */}
      <div style={{
        maxWidth: sectionMaxWidth, width: "100%",
        display: "grid",
        gridTemplateColumns: isMobile ? "minmax(0, 1fr)" : "repeat(2, minmax(0, 1fr))",
        gap: isMobile ? "12px" : "16px",
        marginBottom: "clamp(32px, 5vw, 48px)",
      }}>
        {struggles.map((item) => (
          <Card
            key={item.id}
            item={item}
            isActive={activeCard === item.id}
            isHovered={hoveredCard === item.id && activeCard !== item.id}
            compact={isMobile}
            onClick={() => setActiveCard(activeCard === item.id ? null : item.id)}
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          />
        ))}
      </div>

      {/* Quote Block */}
      <div
        onMouseEnter={() => setQuoteHovered(true)}
        onMouseLeave={() => setQuoteHovered(false)}
        style={{
          maxWidth: sectionMaxWidth, width: "100%",
          padding: isMobile ? "24px 16px" : "clamp(32px, 4vw, 48px) clamp(24px, 5vw, 48px)",
          marginBottom: "clamp(28px, 4vw, 40px)",
          position: "relative",
          overflow: "hidden",
          background: "transparent",
          transition: "all 0.4s ease",
          cursor: "default",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Left background quote mark */}
        <span style={{
          position: "absolute",
          top: isMobile ? "-20px" : "-30px",
          left: isMobile ? "8px" : "24px",
          fontSize: isMobile ? "140px" : "220px",
          lineHeight: 1,
          color: quoteHovered ? "rgba(232, 73, 15, 0.08)" : "rgba(28, 26, 23, 0.05)",
          fontFamily: "'Georgia', serif",
          transition: "color 0.4s",
          userSelect: "none",
          pointerEvents: "none",
          fontWeight: 800,
        }}>
          “
        </span>

        {/* Right background quote mark */}
        <span style={{
          position: "absolute",
          bottom: isMobile ? "-50px" : "-90px",
          right: isMobile ? "8px" : "24px",
          fontSize: isMobile ? "140px" : "220px",
          lineHeight: 1,
          color: quoteHovered ? "rgba(232, 73, 15, 0.08)" : "rgba(28, 26, 23, 0.05)",
          fontFamily: "'Georgia', serif",
          transition: "color 0.4s",
          userSelect: "none",
          pointerEvents: "none",
          fontWeight: 800,
        }}>
          ”
        </span>

        <style>{`
          @keyframes quoteDropFast {
            0%, 5% { transform: translateY(-120%); opacity: 0; animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1); }
            20%, 85% { transform: translateY(0); opacity: 1; animation-timing-function: cubic-bezier(0.6, 0, 0.8, 0.2); }
            95%, 100% { transform: translateY(120%); opacity: 0; }
          }
          @keyframes quoteGlowWell {
            0%, 100% { transform: scale(1); color: #1C1A17; text-shadow: 0 0 0 transparent; }
            50% { transform: scale(1.05); color: #008F77; text-shadow: 0 4px 16px rgba(0,143,119,0.3); }
          }
        `}</style>

        <p style={{
          position: "relative",
          zIndex: 1,
          fontSize: isMobile ? "clamp(20px, 6vw, 24px)" : "clamp(26px, 3.5vw, 36px)",
          fontWeight: 500,
          lineHeight: 1.5,
          color: "#4A433D",
          letterSpacing: "-0.01em",
          maxWidth: "800px",
        }}>
          Speaking <span style={{
            position: "relative",
            display: "inline-block",
            fontWeight: 800,
            color: "#E8490F"
          }}>
            {/* Invisible placeholder keeps perfect text baseline & width */}
            <span style={{ visibility: "hidden" }}>fast</span>
            
            {/* The clipping window exactly the size of the text */}
            <span style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
            }}>
              {/* The animating element inside the window */}
              <span style={{ 
                display: "inline-block", 
                animation: "quoteDropFast 3s infinite",
                willChange: "transform, opacity",
              }}>fast</span>
            </span>
          </span> does not always mean speaking <span style={{ 
            display: "inline-block", 
            fontWeight: 800, 
            color: "#1C1A17",
            transformOrigin: "bottom center",
            animation: "quoteGlowWell 2.5s infinite alternate ease-in-out"
          }}>well.</span>
        </p>
      </div>

      {/* CTA Button */}
      <div style={{ maxWidth: sectionMaxWidth, width: "100%", textAlign: "center" }}>
        <button
          onClick={() => setRevealed(!revealed)}
          onMouseEnter={() => setHoveredBtn(true)}
          onMouseLeave={() => setHoveredBtn(false)}
          style={{
            padding: isMobile ? "15px 24px" : "18px 40px",
            borderRadius: "14px",
            fontSize: isMobile ? "16px" : "18px",
            fontWeight: 700,
            letterSpacing: "0.02em",
            fontFamily: "inherit",
            cursor: "pointer",
            border: "none",
            background: "linear-gradient(to right, #e8400a, #ff6a3d)",
            color: "#fff",
            boxShadow: hoveredBtn
              ? "0 12px 30px -5px rgba(232,64,10,0.6)"
              : "0 8px 25px -5px rgba(232,64,10,0.5)",
            transform: hoveredBtn ? "scale(1.02)" : "scale(1)",
            transition: "all 0.3s",
            marginBottom: "28px",
            position: "relative",
            overflow: "hidden",
            width: isMobile ? "100%" : "auto",
            maxWidth: isMobile ? "360px" : "none",
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: 0,
              transform: hoveredBtn ? "translateX(200%) skewX(-20deg)" : "translateX(-100%) skewX(-20deg)",
              background: "rgba(255,255,255,0.2)",
              transition: "transform 0.7s",
              pointerEvents: "none",
            }}
          />
          <span style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            {revealed ? "The Brighture Promise" : "What We Do Differently"}
            <svg
              style={{ width: "16px", height: "16px", transform: hoveredBtn ? "translateX(4px)" : "translateX(0)", transition: "transform 0.3s" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </button>

        {/* Reveal Panel */}
        <div style={{
          overflow: "hidden",
          maxHeight: revealed ? (isMobile ? "760px" : "600px") : "0px",
          opacity: revealed ? 1 : 0,
          transition: "max-height 0.7s ease, opacity 0.5s ease",
        }}>
          <div style={{
            borderRadius: "20px",
            padding: isMobile ? "22px" : "32px",
            textAlign: "left",
            background: "#F0FDFB",
            border: "1.5px solid #C5F0E8",
            boxShadow: "0 4px 24px #008F7711",
          }}>
            <p style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#008F77",
              fontWeight: 800,
              marginBottom: "16px",
            }}>At Brighture</p>
            <p style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              lineHeight: 1.5,
              letterSpacing: "-0.02em",
              color: "#1C1A17",
              marginBottom: "32px",
            }}>
              We focus on{" "}
              <span style={{ color: "#008F77", fontStyle: "italic" }}>proper fluency</span>{" "}
              — speaking clearly, naturally, and with the right structure so your message
              is understood{" "}
              <span style={{ borderBottom: "3px solid #C48A00", paddingBottom: "2px" }}>the first time.</span>
            </p>

            {/* Pillars */}
            <div style={{ display: isMobile ? "grid" : "flex", gap: "12px", flexWrap: "wrap" }}>
              {pillars.map((p) => (
                <div
                  key={p.label}
                  onMouseEnter={() => setHoveredPillar(p.label)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "12px",
                    background: hoveredPillar === p.label ? "#008F77" : "#FFFFFF",
                    border: "1.5px solid #C5F0E8",
                    cursor: "default",
                    transition: "all 0.25s ease",
                    transform: hoveredPillar === p.label ? "translateY(-2px)" : "none",
                    boxShadow: hoveredPillar === p.label ? "0 6px 20px #008F7733" : "none",
                    width: isMobile ? "100%" : "auto",
                  }}
                >
                  <p style={{
                    fontSize: "15px",
                    fontWeight: 800,
                    color: hoveredPillar === p.label ? "#fff" : "#008F77",
                    marginBottom: "4px",
                    transition: "color 0.2s",
                  }}>
                    {p.icon} {p.label}
                  </p>
                  <p style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: hoveredPillar === p.label ? "#C5F0E8" : "#4A433D",
                    transition: "color 0.2s",
                  }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
