
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Heart,
    Sparkles,
    Gift,
    ArrowLeft,
    Smile,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./AreYouSure.css";

const funnyMessages = [
    "Arey ruko! Itni bhi kya jaldi hai? 😂",
    "Button dabane se kuch nahi hoga madam! 🤣",
    "Pehle surprise dekh lo, phir jaana! 😜",
    "Bhaagne ki koshish band karo! 😂",
    "Itni mehnat se banaya hai, dekh toh lo! 🥹",
    "Exit nahi milega, ab toh phas gayi! 🤭",
    "Arey didi, thoda pyaar toh dikhao! ❤️",
    "Continue dabao, warna main ro dunga! 😭",
    "Itna attitude? Birthday girl ho ya celebrity? 😂",
    "are bauni, chup chap continue daba! 😂",
];

function AreYouSure() {
    const navigate = useNavigate();
    const buttonAreaRef = useRef(null);

    const [exitPosition, setExitPosition] = useState(null);
    const [funnyIndex, setFunnyIndex] = useState(0);
    const [attempts, setAttempts] = useState(0);

    





const lastEscapeQuadrant = useRef(-1);

const moveExitButton = (event) => {
  const area = buttonAreaRef.current;
  if (!area) return;

  const rect = area.getBoundingClientRect();
  const buttonRect = event.currentTarget.getBoundingClientRect();

  const cursorX = event.clientX - rect.left;
  const cursorY = event.clientY - rect.top;

  const buttonWidth = buttonRect.width;
  const buttonHeight = buttonRect.height;

  const maxX = area.clientWidth - buttonWidth;
  const maxY = area.clientHeight - buttonHeight;

  const centerX = area.clientWidth / 2;
  const centerY = area.clientHeight / 2;

  const quadrants = [0, 1, 2, 3];
  const candidates = [];

  for (let x = 0; x <= maxX; x += 5) {
    for (let y = 0; y <= maxY; y += 5) {
      const buttonCenterX = x + buttonWidth / 2;
      const buttonCenterY = y + buttonHeight / 2;

      const quadrant =
        (buttonCenterY < centerY ? 0 : 2) +
        (buttonCenterX < centerX ? 0 : 1);

      const distance = Math.hypot(
        buttonCenterX - cursorX,
        buttonCenterY - cursorY
      );

      candidates.push({ x, y, quadrant, distance });
    }
  }

  // Randomize the order of available directions
  const directions = quadrants
    .filter((q) => q !== lastEscapeQuadrant.current)
    .sort(() => Math.random() - 0.5);

  let selected = null;

  for (const quadrant of directions) {
    const positions = candidates.filter(
      (p) => p.quadrant === quadrant && p.distance >= 200
    );

    if (positions.length > 0) {
      selected = positions[
        Math.floor(Math.random() * positions.length)
      ];
      break;
    }
  }

  // If 200px is impossible, choose the farthest position
  // in a randomly selected different direction.
  if (!selected) {
    for (const quadrant of directions) {
      const positions = candidates.filter(
        (p) => p.quadrant === quadrant
      );

      if (positions.length > 0) {
        const farthest = Math.max(
          ...positions.map((p) => p.distance)
        );

        const best = positions.filter(
          (p) => p.distance >= farthest - 15
        );

        selected = best[
          Math.floor(Math.random() * best.length)
        ];
        break;
      }
    }
  }

  if (!selected) return;

  lastEscapeQuadrant.current = selected.quadrant;

  setExitPosition({ x: selected.x, y: selected.y });
  setFunnyIndex((previous) => (previous + 1) % funnyMessages.length);
  setAttempts((previous) => previous + 1);
};


    return (
        <main className="sure-page">

            <div className="sure-glow sure-glow-one" />
            <div className="sure-glow sure-glow-two" />

            {/* Floating Decorations */}
            <div className="sure-decoration decoration-one">♡</div>
            <div className="sure-decoration decoration-two">✦</div>
            <div className="sure-decoration decoration-three">♡</div>
            <div className="sure-decoration decoration-four">✧</div>

            {/* Back Button */}
            <button
                className="sure-back-button"
                onClick={() => navigate("/secret-pin")}
            >
                <ArrowLeft size={18} />
                Back
            </button>

            {/* Main Content */}
            <motion.section
                className="sure-container"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >

                <motion.div
                    className="sure-gift-icon"
                    animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    🎁
                </motion.div>

                <div className="sure-eyebrow">
                    <Sparkles size={17} />
                    ONE LAST THING...
                    <Sparkles size={17} />
                </div>

                <h1 className="sure-heading">
                    Are You
                    <span>Sure? 😂</span>
                </h1>

                <p className="sure-subtitle">
                    Itni jaldi kahan? Thoda sabr rakho madam! 🤭
                </p>

                <div className="sure-message-card">
                    <Heart size={23} fill="currentColor" />

                    <p>
                        You've unlocked the secret!
                        But are you really ready for the surprises
                        waiting ahead?
                    </p>
                </div>

                {/* Funny Dynamic Message */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={funnyIndex}
                        className="sure-funny-message"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <Smile size={19} />
                        {attempts === 0
                            ? "Choose wisely... 😏"
                            : funnyMessages[funnyIndex]}
                    </motion.div>
                </AnimatePresence>

                {/* Buttons */}
                <div className="sure-button-area" ref={buttonAreaRef}>

                    <motion.button
                        className="sure-continue-button"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={() => navigate("/mystery-gift")}
                    >
                        <Gift size={19} />
                        Continue
                        <Heart size={17} fill="currentColor" />
                    </motion.button>

                    
<motion.button
  className="sure-exit-button"
  animate={
    exitPosition
      ? {
          left: exitPosition.x,
          top: exitPosition.y,
        }
      : {}
  }
  transition={{
    type: "spring",
    stiffness: 450,
    damping: 22,
  }}
  onPointerEnter={moveExitButton}
  onTouchStart={(event) => {
    event.preventDefault();
    moveExitButton();
  }}
  onClick={moveExitButton}
>
  Exit 😏
</motion.button>


                </div>

                <p className="sure-attempts">
                    {attempts > 0
                        ? `Exit attempts: ${attempts} 😂`
                        : "Try clicking Exit... if you can! 🤭"}
                </p>

                <p className="sure-footer">
                    Made with lots of love, just for you
                    <Heart size={13} fill="currentColor" />
                </p>

            </motion.section>
        </main>
    );
}

export default AreYouSure;
