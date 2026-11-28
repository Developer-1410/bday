
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
} from "lucide-react";
import "./SpecialLetter.css";

function SpecialLetter() {
  const navigate = useNavigate();

  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const openLetter = () => {
    if (isOpening || isOpened) return;

    setIsOpening(true);

    setTimeout(() => {
      setIsOpened(true);
    }, 1100);
  };

  return (
    <div className="letter-page">

      <div className="letter-decoration letter-heart-one">♡</div>
      <div className="letter-decoration letter-heart-two">♥</div>
      <div className="letter-decoration letter-star-one">✦</div>
      <div className="letter-decoration letter-star-two">✧</div>

      <motion.div
        className="letter-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <button
          className="letter-back-button"
          onClick={() => navigate("/sister-awards")}
        >
          <ArrowLeft size={17} />
          Back
        </button>

        <div className="letter-eyebrow">
          <Sparkles size={15} />
          A MESSAGE FROM THE HEART
          <Sparkles size={15} />
        </div>

        <h1 className="letter-heading">
          A Little
          <span>Something for You 💌</span>
        </h1>

        <p className="letter-subtitle">
          Some feelings deserve more than just a birthday wish...
        </p>

        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
              key="closed-envelope"
              className="letter-envelope-area"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, y: -20 }}
            >
              <motion.button
                className="letter-envelope-button"
                onClick={openLetter}
                disabled={isOpening}
                animate={{ y: [0, -9, 0] }}
                transition={{
                  y: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <div
                  className={`letter-envelope ${
                    isOpening ? "letter-envelope-opening" : ""
                  }`}
                >
                  <div className="envelope-back">
                    <div className="envelope-paper-preview">
                      <Heart size={24} fill="currentColor" />
                    </div>
                  </div>

                  <div className="envelope-flap"></div>

                  <div className="envelope-front"></div>

                  <div className="envelope-seal">
                    <Heart size={27} fill="currentColor" />
                  </div>
                </div>

                <span>
                  {isOpening ? "Opening your letter..." : "Tap to Open"}
                </span>
              </motion.button>

              {!isOpening && (
                <p className="letter-envelope-hint">
                  A little surprise, written just for you 🤭
                </p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="opened-letter"
              className="letter-paper"
              initial={{ opacity: 0, y: 50, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 16,
              }}
            >
              <div className="letter-paper-decoration">
                <Sparkles size={18} />
                <Heart size={17} fill="currentColor" />
                <Sparkles size={18} />
              </div>

              <div className="letter-paper-content">
                <span className="letter-date-label">
                  A SPECIAL BIRTHDAY LETTER
                </span>

                <h2>To My Lovely Sister,</h2>

                <div className="letter-body">
                  <p>
                    On your birthday, I just want you to know
                    how special you are.
                  </p>

                  <p>
                    Thank you for bringing your own kind of
                    happiness, laughter and warmth into the
                    lives of the people around you.
                  </p>

                  <p>
                    I hope this year brings you new adventures,
                    beautiful memories, confidence to chase
                    your dreams, and countless reasons to smile.
                  </p>

                  <p>
                    No matter how much we tease each other,
                    you will always have a special place in my heart.
                  </p>

                  <p>
                    Keep smiling, keep shining and always
                    be yourself. You deserve all the happiness
                    this world has to offer.
                  </p>
                </div>

                <div className="letter-signature">
                  With lots of love,
                  <span>Someone who cares about you ❤️</span>
                </div>
              </div>

              <motion.div
                className="letter-bottom-heart"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                💗
              </motion.div>

              <motion.button
                className="letter-continue-button"
                onClick={() => navigate("/birthday-wishes")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="letter-footer">
          Written with love, especially for you
          <Heart size={14} fill="currentColor" />
        </div>

      </motion.div>
    </div>
  );
}

export default SpecialLetter;
