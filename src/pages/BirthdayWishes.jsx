
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
  Star,
  Sun,
  Flower2,
  Rainbow,
} from "lucide-react";
import "./BirthdayWishes.css";

const wishes = [
  {
    id: 1,
    emoji: "🌸",
    title: "Endless Happiness",
    subtitle: "A lifetime of beautiful smiles",
    message:
      "May your life always be filled with happiness, laughter and little moments that make your heart smile. Never stop finding joy in the simplest things!",
    color: "pink",
    icon: Flower2,
  },
  {
    id: 2,
    emoji: "🌟",
    title: "Dreams Come True",
    subtitle: "Everything you've ever wished for",
    message:
      "May every dream you've been chasing slowly become reality. May you always have the courage to follow your heart and the strength to overcome every challenge.",
    color: "lavender",
    icon: Star,
  },
  {
    id: 3,
    emoji: "☀️",
    title: "Bright New Beginnings",
    subtitle: "A beautiful year ahead",
    message:
      "May this new chapter bring exciting adventures, wonderful opportunities and countless reasons to wake up excited every morning!",
    color: "peach",
    icon: Sun,
  },
  {
    id: 4,
    emoji: "🦋",
    title: "Love & Beautiful People",
    subtitle: "Surrounded by genuine love",
    message:
      "May you always be surrounded by people who appreciate you, support your dreams, respect your feelings and remind you how special you are.",
    color: "purple",
    icon: Heart,
  },
  {
    id: 5,
    emoji: "🌈",
    title: "A Magical Year",
    subtitle: "More memories and adventures",
    message:
      "May the coming year be your most memorable one yet. More adventures, more laughter, more achievements and more beautiful memories to treasure forever!",
    color: "rose",
    icon: Rainbow,
  },
];

function BirthdayWishes() {
  const navigate = useNavigate();

  const [openedWishes, setOpenedWishes] = useState([]);

  const revealWish = (id) => {
    setOpenedWishes((previous) =>
      previous.includes(id)
        ? previous.filter((wishId) => wishId !== id)
        : [...previous, id]
    );
  };

  const allOpened = openedWishes.length === wishes.length;

  return (
    <div className="wishes-page">

      <div className="wishes-decoration wishes-heart-one">♡</div>
      <div className="wishes-decoration wishes-heart-two">♥</div>
      <div className="wishes-decoration wishes-star-one">✦</div>
      <div className="wishes-decoration wishes-star-two">✧</div>

      <motion.div
        className="wishes-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <button
          className="wishes-back-button"
          onClick={() => navigate("/special-letter")}
        >
          <ArrowLeft size={17} />
          Back
        </button>

        <motion.div
          className="wishes-main-icon"
          animate={{ y: [0, -9, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🎂
        </motion.div>

        <div className="wishes-eyebrow">
          <Sparkles size={15} />
          WISHING YOU THE VERY BEST
          <Sparkles size={15} />
        </div>

        <h1 className="wishes-heading">
          Birthday
          <span>Wishes! 💗</span>
        </h1>

        <p className="wishes-subtitle">
          Five little wishes, one very special person.
          Let's make your day magical!
        </p>

        <div className="wishes-progress">
          <Heart size={16} fill="currentColor" />
          {openedWishes.length} of {wishes.length} wishes discovered
        </div>

        <div className="wishes-progress-track">
          <motion.div
            className="wishes-progress-fill"
            animate={{
              width: `${(openedWishes.length / wishes.length) * 100}%`,
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <div className="wishes-grid">
          {wishes.map((wish, index) => {
            const isOpened = openedWishes.includes(wish.id);
            const WishIcon = wish.icon;

            return (
              <motion.button
                key={wish.id}
                className={`wish-card ${wish.color} ${
                  isOpened ? "wish-card-opened" : ""
                }`}
                onClick={() => revealWish(wish.id)}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                <AnimatePresence mode="wait">
                  {!isOpened ? (
                    <motion.div
                      key="closed"
                      className="wish-card-closed"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                    >
                      <span className="wish-card-number">
                        WISH 0{wish.id}
                      </span>

                      <div className="wish-card-emoji">
                        {wish.emoji}
                      </div>

                      <h2>{wish.title}</h2>

                      <p>{wish.subtitle}</p>

                      <span className="wish-card-tap">
                        Tap to reveal <Sparkles size={13} />
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="opened"
                      className="wish-card-content"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                    >
                      <WishIcon
                        className="wish-content-icon"
                        size={27}
                      />

                      <h2>{wish.title}</h2>

                      <p>{wish.message}</p>

                      <span className="wish-card-close">
                        Tap to close
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {allOpened && (
            <motion.div
              className="wishes-final-message"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 14 }}
            >
              <div className="wishes-final-emoji">💝</div>

              <h2>One Last Wish!</h2>

              <p>
                May you always have a reason to smile,
                a dream to chase, someone to love,
                and a beautiful life to look forward to.
              </p>

              <strong>Happy Birthday! ❤️</strong>
            </motion.div>
          )}
        </AnimatePresence>

        {allOpened && (
          <motion.button
            className="wishes-continue-button"
            onClick={() => navigate("/surprise-gallery")}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Surprise Gallery
            <ArrowRight size={18} />
          </motion.button>
        )}

        <div className="wishes-footer">
          Every wish comes with lots of love
          <Heart size={14} fill="currentColor" />
        </div>

      </motion.div>
    </div>
  );
}

export default BirthdayWishes;
