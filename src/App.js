import { useState, useEffect, useRef } from "react";

const HER_NAME = "Su Lin Let Htoo";
const YOUR_NAME = "Izzat Zulqarnain";

// ─── Hero Section Quote ───
const HERO_QUOTE =
  "You have bewitched me, body and soul, and I love... I love... I love you.";

// ─── Love Letters ───
const LOVE_LETTERS = [
  {
    date: "Upon First Sight",
    salutation: `My Darling,`,
    body: `I didn't know it at the time, but meeting you was the best thing that ever happened to me. I still remember that moment so clearly, everyone getting into my car, and then I looked in the mirror and saw you. My first thought was how anyone could be so beautiful. I could stare through that mirror for a million years.`,
    sealColor: "#8B2252",
  },
  {
    date: "A Growing Affection",
    salutation: `My Blub,`,
    body: `I find myself falling for the smallest parts of you. I love how loud you get when we play games together, and how you always seem to know the most random facts, especially when it comes to crime documentaries. I love that you can talk for hours on end and laugh at your own jokes no matter what. I want to be able to experience that for the rest of my life.`,
    sealColor: "#6B4C3B",
  },
  {
    date: "A Declaration Most Sincere",
    salutation: `My Baby,`,
    body: `You are the most precious part of my day and the best part of my life. I didn’t think it was possible to love you more than I did yesterday, yet here I am. You have a kind heart that's gentle and warm. Nothing in this world compares to you. If I could choose any place to rest, it would be right by your side.`,
    sealColor: "#4A5D4A",
  },
];

// ─── Courtship Timeline ───
const COURTSHIP_TIMELINE = [
  {
    date: "[May 2025]",
    title: "The First Conversation",
    preview: "A notification that turned into a lifetime.",
    full: `It started with a simple message and a screen lighting up, but it didn't take long for the conversation to feel different from anything else. I remember the feeling of waiting for your replies, and going to sleep every night realising I had finally found the love of my life.`,
  },
  {
    date: "[June 2025]",
    title: "The First Date",
    preview: "Matching grey outfits and a movie date",
    full: `I still remember our first date. The night before, we planned to wear the same colour. And I found myself video calling my friends, nervously asking which outfit looked better. Grabbing all kinds of clothes for them to see, trying to find the best fit. I fell asleep that night dreaming of how beautiful you will look the next morning. 

    When I picked you up, I was at a loss for words, you're the most breathtaking girl I've ever laid eyes on. I remember the nervous hesitation before gently placing my hand on your waist for our photobooth picture. And sitting across from you at that round table in Rakuzen, i thought to myself, “It would be my deepest wish and the greatest honor of my life to spend the rest of my life with her.”`,
  },
  {
    date: "[July 2025]",
    title: "Making It Official",
    preview: "Sweet celebrations",
    full: `I wanted you to be my girlfriend, my future wife, and I knew I had to make it perfect. I spent weeks researching, looking at ideas online, wanting to ask you in a way you'd never forget.
    That morning, I drove to the florist early to get the freshest bouquet of lilies, making sure everything would be perfect by the time I picked you up that evening. On the drive back to my place, I was so nervous because the wooden frame sign hadn't been delivered yet, and my heart was racing.
    Then you entered the room and smiled. I remember your face when you saw the bracelet. That day is forever burned into my memory.`,
  },
  {
    date: "[Aug 2025]",
    title: "Meeting Your Parents",
    preview: "I embarrassed myself",
    full: `I had never been more nervous. I wanted the flowers to be perfect for you and your mom. I made sure there were plenty of lilies for your shrine, carefully selecting the best lilies I could find. But I took too long and arrived late. I was so embarrassed. Yet your parents greeted me with the warmest smiles.  I was too nervous to eat, I just sat there with my watermelon juice, stealing glances at you. You looked absolutely ethereal no matter how many times I looked at you. And I realized how lucky I am to have you in my life.`,
  },
  {
    date: "[Nov 2025]",
    title: "Our Aquarium Date",
    preview: "Ticking off the bucket list",
    full: `We had been wanting to go to the aquarium for months, and finally in November, we made it happen. Honestly, the aquarium itself wasn't the most exciting thing. But watching you walk to each exhibit, sharing facts about every animal that I never knew, that's what made it so special.
    I remember you dragging me close to the spider enclosure, both of us nervously laughing. Then we saw two otters alone in their exhibit, looked at each other, and just laughed. They were us :D
    We took a million pictures that day, though you only ended up liking a few of them. But I loved every single moment.`,
  },
  {
    date: "The Present Day",
    title: "To The Rest Of Our Lives",
    preview: "Each day more precious than the last",
    full: `Looking back at our journey makes me realize how far we’ve come, but looking at you makes me realize how much further I want to go. You are my one and only, my sweet girl. I can’t wait to build our world together and experience everything life has to offer with you right beside me.`,
  },
];

const GALLERY_PHOTOS = [
  {
    url: "https://i.imgur.com/hA7bLDy.jpeg",
    caption: "[Girlfriend Day]",
    year: "[Aug 2025]",
  },
  {
    url: "https://i.imgur.com/ccSxvCF.jpeg",
    caption: "[A special night out with our friends]",
    year: "[Oct 2025]",
  },
  {
    url: "https://i.imgur.com/KrNal49.jpeg",
    caption: "[One of our many meals together]",
    year: "[Oct 2025]",
  },
  {
    url: "https://i.imgur.com/4QfG6f6.jpeg",
    caption: "[Hiccup & Astrid - Halloween]",
    year: "[Oct 2025]",
  },
  {
    url: "https://i.imgur.com/XM1J6fJ.jpeg",
    caption: "[Aquarium date with my wife]",
    year: "[Nov 2025]",
  },
  {
    url: "https://i.imgur.com/6YC5ijA.jpeg",
    caption: "[Christmas together - Pt 1]",
    year: "[Dec 2025]",
  },
  {
    url: "https://i.imgur.com/Peyn655.jpeg",
    caption: "[Christmas together - Pt 2]",
    year: "[Dec 2025]",
  },
  {
    url: "https://i.imgur.com/fulenmI.jpeg",
    caption: "[Celebrating new years with my bub]",
    year: "[Jan 2026]",
  },
];

// ─── Final Declaration ───
const FINAL_DECLARATION = {
  title: "A Letter for My Bub",
  body: `My darling,
  I'm not great with fancy words, but I want you to know how much you mean to me.
  You've changed my life in ways I never expected. The little things we do together, the way you make me laugh with the random things you say, how you always have something to yap about for hours, these things mean the world to me, blub. You were the moment I realized what love feels like.
  Every day with you feels special. Even the boring days, the days where we wake up, play, eat, and go back to sleep, the quiet evenings. They're all perfect because you're there.
  You're my best friend, my companion in life, my everything. Meeting you is the greatest thing that's ever happened to me. I promise I'll continue to cherish you every single day baby, both on the good and bad days.
  Thank you for being patient with me. I can't wait for all the adventures we'll have together, all the memories we'll make. I know the world hasn't been kind to us, but it will never break us apart. I'm far from perfect, but for you I'll do anything. Whatever comes next, I want it to be with you.
  Happy Valentine's Day, bub. I love you. Most ardently.`,
  signature: `With all the love in my heart,\n${YOUR_NAME}`,
};

/* ─── SVG Components ─── */
const WaxSealSVG = ({ color = "#8B2252", broken = false, size = 80 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className="transition-all duration-700"
  >
    {!broken ? (
      <g>
        <circle
          cx="50"
          cy="50"
          r="42"
          fill={color}
          stroke={`${color}dd`}
          strokeWidth="3"
        />
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="none"
          stroke={`${color}99`}
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <text
          x="50"
          y="46"
          textAnchor="middle"
          fill="#f5e6d3"
          fontFamily="serif"
          fontSize="10"
          fontStyle="italic"
        >
          With
        </text>
        <text
          x="50"
          y="60"
          textAnchor="middle"
          fill="#f5e6d3"
          fontFamily="serif"
          fontSize="10"
          fontStyle="italic"
        >
          Love
        </text>
        <circle cx="50" cy="50" r="42" fill={`${color}22`}>
          <animate
            attributeName="r"
            values="42;44;42"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    ) : (
      <g>
        <path
          d="M20,50 Q30,20 50,25 Q70,30 75,50 Q80,70 50,78 Q25,75 20,50Z"
          fill={color}
          opacity="0.7"
        />
        <path
          d="M45,25 L55,50 L48,78"
          stroke="#f5e6d3"
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M25,45 L50,52 L75,48"
          stroke="#f5e6d3"
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
        />
      </g>
    )}
  </svg>
);

const OrnamentDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 my-8 ${className}`}>
    <div
      className="h-px flex-1 max-w-24"
      style={{ background: "linear-gradient(to right, transparent, #8B6F5E)" }}
    />
    <svg width="30" height="30" viewBox="0 0 30 30">
      <path d="M15,2 Q20,8 15,15 Q10,8 15,2Z" fill="#8B6F5E" opacity="0.6" />
      <path
        d="M15,28 Q20,22 15,15 Q10,22 15,28Z"
        fill="#8B6F5E"
        opacity="0.6"
      />
      <path d="M2,15 Q8,10 15,15 Q8,20 2,15Z" fill="#8B6F5E" opacity="0.4" />
      <path
        d="M28,15 Q22,10 15,15 Q22,20 28,15Z"
        fill="#8B6F5E"
        opacity="0.4"
      />
      <circle cx="15" cy="15" r="2" fill="#B8860B" />
    </svg>
    <div
      className="h-px flex-1 max-w-24"
      style={{ background: "linear-gradient(to left, transparent, #8B6F5E)" }}
    />
  </div>
);

const CornerOrnament = ({ position = "tl" }) => {
  const transforms = {
    tl: "",
    tr: "scale(-1, 1)",
    bl: "scale(1, -1)",
    br: "scale(-1, -1)",
  };
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      className="absolute"
      style={{
        top: position.includes("t") ? 0 : "auto",
        bottom: position.includes("b") ? 0 : "auto",
        left: position.includes("l") ? 0 : "auto",
        right: position.includes("r") ? 0 : "auto",
        transform: transforms[position],
      }}
    >
      <path
        d="M5,5 Q5,30 15,35 Q25,20 40,15 Q25,10 20,5Z"
        fill="none"
        stroke="#B8860B"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M5,5 Q10,15 8,25"
        fill="none"
        stroke="#B8860B"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <circle cx="8" cy="8" r="1.5" fill="#B8860B" opacity="0.6" />
    </svg>
  );
};

/* ─── Rose Petal Animation ─── */
const FallingPetals = () => {
  const [petals] = useState(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 8 + Math.random() * 10,
      size: 10 + Math.random() * 14,
      rotation: Math.random() * 360,
      opacity: 0.15 + Math.random() * 0.25,
      sway: 30 + Math.random() * 60,
    }))
  );

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: "-30px",
            animation: `petalFall ${p.duration}s ${p.delay}s linear infinite`,
            opacity: p.opacity,
          }}
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 20 20"
            style={{
              animation: `petalSpin ${3 + Math.random() * 4}s linear infinite`,
            }}
          >
            <ellipse
              cx="10"
              cy="10"
              rx="5"
              ry="8"
              fill="#C4707A"
              transform={`rotate(${p.rotation} 10 10)`}
              opacity="0.8"
            />
            <ellipse
              cx="10"
              cy="10"
              rx="3"
              ry="6"
              fill="#D4878F"
              transform={`rotate(${p.rotation + 15} 10 10)`}
              opacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

/* ─── Music Player ─── */
const MusicPlayer = ({ isPlaying, onToggle }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/Dawn.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    return () => audioRef.current?.pause();
  }, []);

  const handleToggle = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="fixed top-4 right-4 z-50"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <div
          className="absolute right-0 top-14 px-3 py-2 rounded text-xs whitespace-nowrap"
          style={{
            background: "#2C1810",
            color: "#F5E6D3",
            fontFamily: "'EB Garamond', serif",
          }}
        >
          {isPlaying ? "Silence the music box" : "Play the music box"}
        </div>
      )}
      <button
        onClick={onToggle}
        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110"
        style={{
          background: isPlaying
            ? "linear-gradient(135deg, #8B2252, #6B1A3E)"
            : "linear-gradient(135deg, #4A3728, #2C1810)",
          border: "2px solid #B8860B",
          boxShadow: isPlaying
            ? "0 0 20px #8B225244, inset 0 0 10px #00000033"
            : "0 2px 8px #00000033",
        }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <div className="flex gap-1 items-end h-5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 rounded-full"
                style={{
                  background: "#F5E6D3",
                  animation: `musicBar 0.8s ${
                    i * 0.2
                  }s ease-in-out infinite alternate`,
                  height: "60%",
                }}
              />
            ))}
          </div>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#F5E6D3">
            <polygon points="6,3 20,12 6,21" />
          </svg>
        )}
      </button>
    </div>
  );
};

/* ─── Letter Modal ─── */
const LetterModal = ({ letter, onClose }) => {
  if (!letter) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      style={{
        background: "rgba(20, 12, 8, 0.8)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        className="max-w-lg w-full my-8 relative"
        onClick={(e) => e.stopPropagation()}
        style={{
          background:
            "linear-gradient(170deg, #F8F0E3 0%, #F0E4D0 40%, #EBD9C0 100%)",
          padding: "clamp(24px, 5vw, 48px)",
          borderRadius: "2px",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.5), inset 0 0 80px rgba(139,111,94,0.1)",
          animation: "letterUnfold 0.6s ease-out",
          border: "1px solid #D4C4A8",
        }}
      >
        {/* Fold lines */}
        <div
          className="absolute top-1/3 left-0 right-0 h-px"
          style={{ background: "#D4C4A855" }}
        />
        <div
          className="absolute top-2/3 left-0 right-0 h-px"
          style={{ background: "#D4C4A844" }}
        />

        <p
          className="text-sm mb-1 italic"
          style={{ color: "#8B6F5E", fontFamily: "'EB Garamond', serif" }}
        >
          {letter.date}
        </p>
        <OrnamentDivider />
        <p
          className="text-lg mb-4"
          style={{ color: "#2C1810", fontFamily: "'EB Garamond', serif" }}
        >
          {letter.salutation}
        </p>
        <p
          className="leading-relaxed mb-6 whitespace-pre-line"
          style={{
            color: "#3D2B1F",
            fontFamily: "'EB Garamond', serif",
            fontSize: "1.05rem",
            lineHeight: "1.9",
          }}
        >
          {letter.body}
        </p>
        <p
          className="italic mb-1"
          style={{ color: "#2C1810", fontFamily: "'EB Garamond', serif" }}
        ></p>
        <p
          className="text-lg"
          style={{
            color: "#2C1810",
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.4rem",
          }}
        ></p>
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              color: "#F5E6D3",
              fontFamily: "'EB Garamond', serif",
              background: "linear-gradient(135deg, #4A3728, #2C1810)",
              border: "1px solid #B8860B44",
              letterSpacing: "0.15em",
            }}
          >
            Fold Letter
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─── Photo Modal ─── */
const PhotoModal = ({ photo, onClose }) => {
  if (!photo) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{
        background: "rgba(20, 12, 8, 0.85)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="max-w-2xl w-full relative"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "photoReveal 0.5s ease-out" }}
      >
        <div
          className="p-3"
          style={{
            background: "linear-gradient(135deg, #B8860B, #9A7209)",
            borderRadius: "4px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          }}
        >
          <div className="p-2" style={{ background: "#F5E6D3" }}>
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full object-cover"
              style={{ maxHeight: "60vh", display: "block" }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <p
            className="text-lg italic"
            style={{ color: "#F5E6D3", fontFamily: "'EB Garamond', serif" }}
          >
            {photo.caption}
          </p>
          <p
            className="text-sm mt-1"
            style={{ color: "#B8860B", fontFamily: "'EB Garamond', serif" }}
          >
            {photo.year}
          </p>
        </div>
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: "#2C1810",
            border: "1px solid #B8860B",
            color: "#F5E6D3",
            fontSize: "14px",
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════════
   MAIN APP COMPONENT
   ═══════════════════════════════════════════════════════════════════════════════ */
export default function RegencyValentine() {
  const [openLetter, setOpenLetter] = useState(null);
  const [brokenSeals, setBrokenSeals] = useState(new Set());
  const [expandedTimeline, setExpandedTimeline] = useState(new Set());
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [introFading, setIntroFading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionsRef = useRef({});
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/Dawn.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Scroll-triggered visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(
              (prev) => new Set([...prev, entry.target.dataset.section])
            );
          }
        });
      },
      { threshold: 0.15 }
    );
    Object.values(sectionsRef.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [showIntro]);

  const handleBreakSeal = (index) => {
    setBrokenSeals((prev) => new Set([...prev, index]));
    setTimeout(() => setOpenLetter(LOVE_LETTERS[index]), 400);
  };

  const handleTimelineToggle = (index) => {
    setExpandedTimeline((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };
  const handleEnter = () => {
    setIntroFading(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
    setTimeout(() => setShowIntro(false), 800);
  };

  const pages = ["letters", "courtship", "gallery", "declaration"];

  // ─── INTRO SCREEN (Book opening effect) ───
  if (showIntro) {
    return (
      <>
        <style>{globalStyles}</style>
        <div
          className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at center, #2C1810 0%, #1A0E08 70%)",
            opacity: introFading ? 0 : 1,
            transition: "opacity 0.8s ease-out",
          }}
        >
          <FallingPetals />
          <div
            className="text-center relative"
            style={{ zIndex: 10, animation: "fadeInUp 1.2s ease-out" }}
          >
            <div className="mb-6">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                className="mx-auto"
              >
                <path
                  d="M40,15 Q55,5 65,20 Q75,35 40,65 Q5,35 15,20 Q25,5 40,15Z"
                  fill="none"
                  stroke="#B8860B"
                  strokeWidth="1.5"
                  opacity="0.8"
                >
                  <animate
                    attributeName="stroke-opacity"
                    values="0.5;1;0.5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M40,22 Q50,14 57,24 Q64,34 40,55 Q16,34 23,24 Q30,14 40,22Z"
                  fill="#8B225233"
                  stroke="#8B2252"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
              </svg>
            </div>
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{
                color: "#B8860B",
                fontFamily: "'EB Garamond', serif",
                letterSpacing: "0.3em",
              }}
            ></p>
            <h1
              className="text-4xl md:text-5xl mb-2"
              style={{
                color: "#F5E6D3",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
              }}
            >
              For {HER_NAME}
            </h1>
            <p
              className="text-lg italic mb-8"
              style={{ color: "#C4A882", fontFamily: "'EB Garamond', serif" }}
            >
              A collection of letters and memories
            </p>
            <button
              onClick={handleEnter}
              className="px-8 py-3 text-sm uppercase tracking-widest transition-all duration-500 hover:scale-105 hover:shadow-lg"
              style={{
                color: "#F5E6D3",
                fontFamily: "'EB Garamond', serif",
                background: "linear-gradient(135deg, #8B2252, #6B1A3E)",
                border: "1px solid #B8860B66",
                letterSpacing: "0.2em",
                boxShadow: "0 4px 20px rgba(139,34,82,0.3)",
                cursor: "pointer",
              }}
            >
              Open This Book
            </button>
            <p
              className="mt-6 text-xs italic"
              style={{ color: "#8B6F5E88", fontFamily: "'EB Garamond', serif" }}
            >
              Best experienced with sound, my sweet girl
            </p>
          </div>
        </div>
      </>
    );
  }

  // ─── MAIN SITE ───
  return (
    <>
      <style>{globalStyles}</style>
      <div
        className="min-h-screen relative"
        style={{
          background: "#1A0E08",
          fontFamily: "'EB Garamond', serif",
        }}
      >
        <FallingPetals />
        <MusicPlayer
          isPlaying={isPlaying}
          onToggle={() => {
            if (!audioRef.current) return;
            if (isPlaying) {
              audioRef.current.pause();
            } else {
              audioRef.current.play().catch(() => {});
            }
            setIsPlaying(!isPlaying);
          }}
        />

        {/* ═══ PAGE NAVIGATION ═══ */}
        <nav
          className="sticky top-0 z-30 py-3 px-4"
          style={{
            background:
              "linear-gradient(180deg, #1A0E08 0%, #1A0E08ee 80%, transparent 100%)",
          }}
        >
          <div className="flex justify-center gap-1 md:gap-4 flex-wrap">
            {[
              { label: "Love Letters", page: 0 },
              { label: "Our Journey", page: 1 },
              { label: "Gallery", page: 2 },
              { label: "For You", page: 3 },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentPage(item.page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-3 md:px-5 py-2 text-xs md:text-sm uppercase tracking-wider transition-all duration-300"
                style={{
                  color: currentPage === item.page ? "#F5E6D3" : "#8B6F5E",
                  fontFamily: "'EB Garamond', serif",
                  letterSpacing: "0.15em",
                  borderBottom:
                    currentPage === item.page
                      ? "1px solid #B8860B"
                      : "1px solid transparent",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* ═══ HERO SECTION ═══ */}
        <header
          className="relative py-16 md:py-24 px-4 text-center overflow-hidden"
          style={{
            minHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, #2C181066 0%, transparent 70%)",
            }}
          />
          <div
            className="relative max-w-2xl mx-auto"
            style={{ zIndex: 2, animation: "fadeInUp 1s ease-out" }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="mx-auto mb-6"
              style={{ opacity: 0.6 }}
            >
              <path
                d="M20,8 Q28,2 33,10 Q38,18 20,34 Q2,18 7,10 Q12,2 20,8Z"
                fill="#8B2252"
                opacity="0.5"
              />
              <path
                d="M20,12 Q25,8 28,13 Q31,18 20,28 Q9,18 12,13 Q15,8 20,12Z"
                fill="#8B2252"
                opacity="0.3"
              />
            </svg>
            <blockquote>
              <p
                className="text-2xl md:text-4xl italic leading-relaxed mb-4"
                style={{
                  color: "#F5E6D3",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  lineHeight: 1.5,
                }}
              >
                "{HERO_QUOTE}"
              </p>
              <cite
                className="text-sm uppercase tracking-widest not-italic"
                style={{ color: "#B8860B", letterSpacing: "0.2em" }}
              ></cite>
            </blockquote>
            <OrnamentDivider className="opacity-60" />
            <p className="text-sm italic mt-4" style={{ color: "#8B6F5E" }}>
              To my blub, everything here is only a glimpse of what I feel for
              you
            </p>
          </div>
        </header>

        {/* ═══ PAGE CONTENT ═══ */}
        <main className="relative" style={{ zIndex: 2 }}>
          {/* ──── PAGE 0: LOVE LETTERS ──── */}
          {currentPage === 0 && (
            <section
              className="py-12 md:py-20 px-4"
              style={{ animation: "fadeInUp 0.6s ease-out" }}
            >
              <div
                className="max-w-3xl mx-auto text-center mb-12"
                ref={(el) => (sectionsRef.current.letters = el)}
                data-section="letters"
              >
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: "#B8860B", letterSpacing: "0.3em" }}
                >
                  Sealed With Love
                </p>
                <h2
                  className="text-3xl md:text-4xl mb-4"
                  style={{
                    color: "#F5E6D3",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                  }}
                >
                  Love Letters
                </h2>
                <p className="italic" style={{ color: "#8B6F5E" }}></p>
              </div>

              <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
                {LOVE_LETTERS.map((letter, i) => (
                  <div key={i} className="relative group">
                    <div
                      className="text-center p-6 md:p-8 transition-all duration-500"
                      style={{
                        background: "linear-gradient(135deg, #F8F0E3, #F0E4D0)",
                        border: "1px solid #D4C4A8",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                        minHeight: "220px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        className="text-sm italic mb-4"
                        style={{ color: "#8B6F5E" }}
                      >
                        {letter.date}
                      </p>
                      <button
                        onClick={() => handleBreakSeal(i)}
                        className="transition-all duration-500 hover:scale-110 cursor-pointer"
                        style={{ background: "none", border: "none" }}
                        aria-label={`Break seal to read letter: ${letter.date}`}
                      >
                        <WaxSealSVG
                          color={letter.sealColor}
                          broken={brokenSeals.has(i)}
                        />
                      </button>
                      <p
                        className="text-xs mt-4 uppercase tracking-wider"
                        style={{
                          color: brokenSeals.has(i) ? "#8B2252" : "#8B6F5E",
                          letterSpacing: "0.15em",
                        }}
                      >
                        {brokenSeals.has(i)
                          ? "Click seal to read again"
                          : "Click to break the seal"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ──── PAGE 1: COURTSHIP TIMELINE ──── */}
          {currentPage === 1 && (
            <section
              className="py-12 md:py-20 px-4"
              style={{ animation: "fadeInUp 0.6s ease-out" }}
            >
              <div
                className="max-w-3xl mx-auto text-center mb-12"
                ref={(el) => (sectionsRef.current.courtship = el)}
                data-section="courtship"
              >
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: "#B8860B", letterSpacing: "0.3em" }}
                >
                  Our Moments Together
                </p>
                <h2
                  className="text-3xl md:text-4xl mb-4"
                  style={{
                    color: "#F5E6D3",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                  }}
                >
                  Our Story
                </h2>
                <p className="italic" style={{ color: "#8B6F5E" }}>
                  Click each chapter
                </p>
              </div>

              <div className="max-w-2xl mx-auto relative">
                {/* Timeline line */}
                <div
                  className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
                  style={{ background: "#B8860B33" }}
                />

                {COURTSHIP_TIMELINE.map((event, i) => (
                  <div
                    key={i}
                    className="relative pl-16 md:pl-20 mb-8"
                    style={{
                      animation: `fadeInUp 0.5s ${i * 0.1}s ease-out both`,
                    }}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{
                        background: expandedTimeline.has(i)
                          ? "#8B2252"
                          : "#4A3728",
                        border: "2px solid #B8860B",
                        transition: "all 0.3s",
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#B8860B" }}
                      />
                    </div>

                    <button
                      onClick={() => handleTimelineToggle(i)}
                      className="w-full text-left p-5 md:p-6 transition-all duration-500 cursor-pointer group"
                      style={{
                        background: expandedTimeline.has(i)
                          ? "linear-gradient(135deg, #F8F0E3, #F0E4D0)"
                          : "linear-gradient(135deg, #2C181088, #1A0E0888)",
                        border: `1px solid ${
                          expandedTimeline.has(i) ? "#D4C4A8" : "#B8860B33"
                        }`,
                        boxShadow: expandedTimeline.has(i)
                          ? "0 8px 30px rgba(0,0,0,0.3)"
                          : "none",
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <p
                            className="text-xs uppercase tracking-wider mb-1"
                            style={{
                              color: expandedTimeline.has(i)
                                ? "#8B6F5E"
                                : "#B8860B",
                              letterSpacing: "0.15em",
                            }}
                          >
                            {event.date}
                          </p>
                          <h3
                            className="text-lg md:text-xl mb-1"
                            style={{
                              color: expandedTimeline.has(i)
                                ? "#2C1810"
                                : "#F5E6D3",
                              fontFamily: "'Playfair Display', serif",
                              fontWeight: 400,
                            }}
                          >
                            {event.title}
                          </h3>
                          <p
                            className="text-sm italic"
                            style={{
                              color: expandedTimeline.has(i)
                                ? "#8B6F5E"
                                : "#8B6F5Eaa",
                            }}
                          >
                            {event.preview}
                          </p>
                          {expandedTimeline.has(i) && (
                            <div
                              style={{ animation: "fadeInUp 0.4s ease-out" }}
                            >
                              <OrnamentDivider />
                              <p
                                className="leading-relaxed whitespace-pre-line"
                                style={{
                                  color: "#3D2B1F",
                                  lineHeight: 1.8,
                                  fontSize: "1.02rem",
                                }}
                              >
                                {event.full}
                              </p>
                            </div>
                          )}
                        </div>
                        <span
                          className="text-sm transition-transform duration-300 mt-1"
                          style={{
                            color: expandedTimeline.has(i)
                              ? "#8B6F5E"
                              : "#B8860B",
                            transform: expandedTimeline.has(i)
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        >
                          ▾
                        </span>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ──── PAGE 2: GALLERY ──── */}
          {currentPage === 2 && (
            <section
              className="py-12 md:py-20 px-4"
              style={{ animation: "fadeInUp 0.6s ease-out" }}
            >
              <div
                className="max-w-3xl mx-auto text-center mb-12"
                ref={(el) => (sectionsRef.current.gallery = el)}
                data-section="gallery"
              >
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: "#B8860B", letterSpacing: "0.3em" }}
                >
                  Captured Moments
                </p>
                <h2
                  className="text-3xl md:text-4xl mb-4"
                  style={{
                    color: "#F5E6D3",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                  }}
                >
                  Our Gallery
                </h2>
                <p className="italic" style={{ color: "#8B6F5E" }}>
                  Click each frame, my darling
                </p>
              </div>

              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {GALLERY_PHOTOS.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedPhoto(photo)}
                    className="group relative transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      animation: `fadeInUp 0.5s ${i * 0.15}s ease-out both`,
                    }}
                  >
                    {/* Ornate frame */}
                    <div
                      className="p-3"
                      style={{
                        background:
                          "linear-gradient(135deg, #B8860B, #9A7209, #B8860B)",
                        boxShadow:
                          "0 8px 30px rgba(0,0,0,0.4), inset 0 1px 0 #D4A91766",
                      }}
                    >
                      <div className="p-1" style={{ background: "#2C1810" }}>
                        <div className="p-2" style={{ background: "#F5E6D3" }}>
                          <div
                            className="relative overflow-hidden"
                            style={{ aspectRatio: "4/3" }}
                          >
                            <img
                              src={photo.url}
                              alt={photo.caption}
                              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                              style={{ filter: "sepia(0.2) saturate(0.9)" }}
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#EDE0D0;color:#8B6F5E;font-family:'EB Garamond',serif;font-style:italic;padding:20px;text-align:center">Replace with your photo<br/><small>(see guide)</small></div>`;
                              }}
                            />
                            <div
                              className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 flex items-end"
                              style={{
                                background:
                                  "linear-gradient(transparent 50%, rgba(20,12,8,0.8))",
                              }}
                            >
                              <p
                                className="w-full p-3 text-sm italic text-left"
                                style={{
                                  color: "#F5E6D3",
                                  fontFamily: "'EB Garamond', serif",
                                }}
                              >
                                {photo.caption}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Corner details */}
                    <CornerOrnament position="tl" />
                    <CornerOrnament position="br" />
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* ──── PAGE 3: FINAL DECLARATION ──── */}
          {currentPage === 3 && (
            <section
              className="py-12 md:py-20 px-4"
              style={{ animation: "fadeInUp 0.6s ease-out" }}
            >
              <div className="max-w-3xl mx-auto text-center mb-12">
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: "#B8860B", letterSpacing: "0.3em" }}
                >
                  From My Heart
                </p>
                <h2
                  className="text-3xl md:text-4xl mb-4"
                  style={{
                    color: "#F5E6D3",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                  }}
                >
                  {FINAL_DECLARATION.title}
                </h2>
              </div>

              {!showFinalMessage ? (
                <div
                  className="max-w-md mx-auto text-center"
                  style={{ animation: "fadeInUp 0.6s ease-out" }}
                >
                  <div
                    className="p-10 relative"
                    style={{
                      background:
                        "linear-gradient(135deg, #2C181088, #1A0E0888)",
                      border: "1px solid #B8860B33",
                    }}
                  >
                    <CornerOrnament position="tl" />
                    <CornerOrnament position="tr" />
                    <CornerOrnament position="bl" />
                    <CornerOrnament position="br" />
                    <p className="italic mb-6" style={{ color: "#C4A882" }}></p>
                    <button
                      onClick={() => setShowFinalMessage(true)}
                      className="relative cursor-pointer transition-all duration-500 hover:scale-110"
                      style={{ background: "none", border: "none" }}
                    >
                      <WaxSealSVG color="#8B2252" size={100} />
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          animation: "sealPulse 2s ease-in-out infinite",
                        }}
                      />
                    </button>
                    <p
                      className="text-xs uppercase tracking-wider mt-4"
                      style={{ color: "#B8860B", letterSpacing: "0.15em" }}
                    ></p>
                  </div>
                </div>
              ) : (
                <div
                  className="max-w-2xl mx-auto"
                  style={{ animation: "letterUnfold 0.8s ease-out" }}
                >
                  <div
                    className="relative p-8 md:p-12"
                    style={{
                      background:
                        "linear-gradient(170deg, #F8F0E3 0%, #F0E4D0 40%, #EBD9C0 100%)",
                      border: "1px solid #D4C4A8",
                      boxShadow:
                        "0 20px 60px rgba(0,0,0,0.4), inset 0 0 80px rgba(139,111,94,0.08)",
                    }}
                  >
                    <CornerOrnament position="tl" />
                    <CornerOrnament position="tr" />
                    <CornerOrnament position="bl" />
                    <CornerOrnament position="br" />
                    {/* Fold lines */}
                    <div
                      className="absolute top-1/3 left-0 right-0 h-px"
                      style={{ background: "#D4C4A844" }}
                    />
                    <div
                      className="absolute top-2/3 left-0 right-0 h-px"
                      style={{ background: "#D4C4A833" }}
                    />

                    <OrnamentDivider />
                    <div
                      className="whitespace-pre-line leading-relaxed mb-8"
                      style={{
                        color: "#2C1810",
                        fontSize: "1.1rem",
                        lineHeight: 2,
                      }}
                    >
                      {FINAL_DECLARATION.body}
                    </div>
                    <OrnamentDivider />
                    <div className="text-right mt-6">
                      <p className="italic mb-2" style={{ color: "#3D2B1F" }}>
                        {FINAL_DECLARATION.signature
                          .split("\n")
                          .map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                      </p>
                      <p
                        className="text-2xl"
                        style={{
                          fontFamily: "'Dancing Script', cursive",
                          color: "#2C1810",
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}
        </main>

        {/* ═══ PAGE TURN NAVIGATION ═══ */}
        <div className="flex justify-center gap-6 py-8 px-4">
          {currentPage > 0 && (
            <button
              onClick={() => {
                setCurrentPage((p) => p - 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                color: "#C4A882",
                fontFamily: "'EB Garamond', serif",
                background: "none",
                border: "1px solid #B8860B44",
                letterSpacing: "0.15em",
              }}
            >
              ← Previous Page
            </button>
          )}
          {currentPage < pages.length - 1 && (
            <button
              onClick={() => {
                setCurrentPage((p) => p + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                color: "#F5E6D3",
                fontFamily: "'EB Garamond', serif",
                background: "linear-gradient(135deg, #4A3728, #2C1810)",
                border: "1px solid #B8860B44",
                letterSpacing: "0.15em",
              }}
            >
              Turn the Page →
            </button>
          )}
        </div>

        {/* ═══ FOOTER ═══ */}
        <footer
          className="text-center py-12 px-4"
          style={{ borderTop: "1px solid #B8860B22" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mx-auto mb-3"
          >
            <path
              d="M12,5 Q16,1 19,5 Q22,9 12,19 Q2,9 5,5 Q8,1 12,5Z"
              fill="#8B2252"
              opacity="0.6"
            />
          </svg>
          <p className="text-sm italic" style={{ color: "#8B6F5E" }}>
            Made with love, for {HER_NAME}
          </p>
          <p className="text-xs mt-2" style={{ color: "#8B6F5E66" }}>
            Valentine's Day {new Date().getFullYear()}
          </p>
        </footer>

        {/* ═══ MODALS ═══ */}
        {openLetter && (
          <LetterModal
            letter={openLetter}
            onClose={() => setOpenLetter(null)}
          />
        )}
        {selectedPhoto && (
          <PhotoModal
            photo={selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   GLOBAL STYLES — Animations, fonts, and effects
   ═══════════════════════════════════════════════════════════════════════════════ */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Dancing+Script:wght@400;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  /* Parchment background texture via CSS */
  body {
    background: #1A0E08;
  }

  /* Falling petals */
  @keyframes petalFall {
    0% { transform: translateY(-30px) translateX(0px) rotate(0deg); }
    25% { transform: translateY(25vh) translateX(30px) rotate(90deg); }
    50% { transform: translateY(50vh) translateX(-20px) rotate(180deg); }
    75% { transform: translateY(75vh) translateX(40px) rotate(270deg); }
    100% { transform: translateY(105vh) translateX(10px) rotate(360deg); }
  }

  @keyframes petalSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Entrance animations */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes letterUnfold {
    0% { opacity: 0; transform: scaleY(0.3) rotateX(30deg); }
    50% { opacity: 1; transform: scaleY(0.8) rotateX(10deg); }
    100% { opacity: 1; transform: scaleY(1) rotateX(0deg); }
  }

  @keyframes photoReveal {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes sealPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(139, 34, 82, 0); }
    50% { box-shadow: 0 0 20px 8px rgba(139, 34, 82, 0.2); }
  }

  /* Music bars */
  @keyframes musicBar {
    from { height: 30%; }
    to { height: 100%; }
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: #1A0E08; }
  ::-webkit-scrollbar-thumb { background: #4A3728; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #6B5340; }

  /* Selection color */
  ::selection { background: #8B225244; color: #F5E6D3; }

  /* Focus styles for accessibility */
  button:focus-visible {
    outline: 2px solid #B8860B;
    outline-offset: 2px;
  }

  /* Responsive adjustments */
  @media (max-width: 640px) {
    .text-4xl { font-size: 1.75rem !important; }
  }
`;
