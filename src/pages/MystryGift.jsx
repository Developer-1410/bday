
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Gift, Heart, Sparkles, ArrowRight } from "lucide-react";
import "./MystryGift.css";

function MysteryGift() {
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);

  const openGift = () => {
    setIsOpened(true);
  };

  return (
    <div className="mystery-page">

      <div className="mystery-decoration mystery-heart-one">♡</div>
      <div className="mystery-decoration mystery-heart-two">♥</div>
      <div className="mystery-decoration mystery-star-one">✦</div>
      <div className="mystery-decoration mystery-star-two">✧</div>

      <motion.div
        className="mystery-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="mystery-eyebrow">
          <Sparkles size={15} />
          A LITTLE SURPRISE FOR YOU
          <Sparkles size={15} />
        </div>

        <h1 className="mystery-heading">
          Your Mystery
          <span>Gift! 🎁</span>
        </h1>

        <p className="mystery-subtitle">
          Someone has prepared something special for you...
        </p>

        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
              key="closed"
              className="mystery-gift-area"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
            >
              <motion.button
                className="mystery-gift-button"
                onClick={openGift}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Gift size={110} strokeWidth={1.4} />
                <span>Tap to Open!</span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              className="mystery-reveal-card"
              initial={{ scale: 0.5, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 12,
              }}
            >
              <motion.div
                className="mystery-reveal-icon"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💝
              </motion.div>

              <h2>A Special Message!</h2>

              <p>
                You are one of the most precious gifts
                life has given to the people around you.
                Keep smiling, keep shining, and never
                stop being the amazing person you are!
              </p>

              <div className="mystery-love">
                Made with lots of love <Heart size={17} fill="currentColor" />
              </div>

              <motion.button
                className="mystery-continue-button"
                onClick={() => navigate("/funny-memories")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpened && (
          <p className="mystery-hint">
            Go on, birthday girl! Don't be shy! 🤭
          </p>
        )}

      </motion.div>
    </div>
  );
}

export default MysteryGift;
