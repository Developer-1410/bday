
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
  Gift,
  Flower2,
  Star,
  Cake,
  Crown,
  Smile,
} from "lucide-react";
import "./SurpriseGallery.css";

const galleryItems = [
  {
    id: 1,
    emoji: "🧸",
    title: "A Bundle of Cuteness",
    subtitle: "A little teddy hug",
    message:
      "Sending you the biggest teddy bear hug! May you always feel loved, protected and surrounded by happiness.",
    color: "pink",
    icon: Heart,
  },
  {
    id: 2,
    emoji: "🌸",
    title: "Bloom Beautifully",
    subtitle: "Like a flower in spring",
    message:
      "Just like beautiful flowers, may you keep growing, blooming and becoming an even more wonderful version of yourself.",
    color: "lavender",
    icon: Flower2,
  },
  {
    id: 3,
    emoji: "🎁",
    title: "A Box of Happiness",
    subtitle: "Unexpected little surprises",
    message:
      "May life surprise you with beautiful opportunities, unexpected happiness and everything your heart wishes for.",
    color: "peach",
    icon: Gift,
  },
  {
    id: 4,
    emoji: "⭐",
    title: "Born to Shine",
    subtitle: "Your own little universe",
    message:
      "Never let anyone dim your sparkle. Keep believing in yourself and remember how wonderfully unique you are.",
    color: "purple",
    icon: Star,
  },
  {
    id: 5,
    emoji: "🎂",
    title: "More Cake, Please!",
    subtitle: "Calories don't count today",
    message:
      "Today is your day! Eat more cake, laugh a little louder, dance without worrying and enjoy every single moment!",
    color: "rose",
    icon: Cake,
  },
  {
    id: 6,
    emoji: "👑",
    title: "The Birthday Queen",
    subtitle: "Today, the spotlight is yours",
    message:
      "One crown, one queen and an entire day dedicated to celebrating you. Never forget how special you are!",
    color: "gold",
    icon: Crown,
  },
];

function SurpriseGallery() {
  const navigate = useNavigate();
  const [openedItems, setOpenedItems] = useState([]);

  const revealItem = (id) => {
    setOpenedItems((previous) =>
      previous.includes(id)
        ? previous.filter((itemId) => itemId !== id)
        : [...previous, id]
    );
  };

  const allOpened = openedItems.length === galleryItems.length;

  return (
    <div className="gallery-page">

      <div className="gallery-decoration gallery-heart-one">♡</div>
      <div className="gallery-decoration gallery-heart-two">♥</div>
      <div className="gallery-decoration gallery-star-one">✦</div>
      <div className="gallery-decoration gallery-star-two">✧</div>

      <motion.div
        className="gallery-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <button
          className="gallery-back-button"
          onClick={() => navigate("/birthday-wishes")}
        >
          <ArrowLeft size={17} />
          Back
        </button>

        <motion.div
          className="gallery-main-icon"
          animate={{
            y: [0, -9, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🎀
        </motion.div>

        <div className="gallery-eyebrow">
          <Sparkles size={15} />
          A LITTLE WORLD OF HAPPINESS
          <Sparkles size={15} />
        </div>

        <h1 className="gallery-heading">
          Surprise
          <span>Gallery! ✨</span>
        </h1>

        <p className="gallery-subtitle">
          A few little things, just to make your special day
          even more magical!
        </p>

        <div className="gallery-progress">
          <Heart size={16} fill="currentColor" />
          {openedItems.length} of {galleryItems.length} surprises discovered
        </div>

        <div className="gallery-progress-track">
          <motion.div
            className="gallery-progress-fill"
            animate={{
              width: `${(openedItems.length / galleryItems.length) * 100}%`,
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => {
            const isOpened = openedItems.includes(item.id);
            const ItemIcon = item.icon;

            return (
              <motion.button
                key={item.id}
                className={`gallery-card ${item.color} ${
                  isOpened ? "gallery-card-opened" : ""
                }`}
                onClick={() => revealItem(item.id)}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                layout
              >
                <AnimatePresence mode="wait">
                  {!isOpened ? (
                    <motion.div
                      key="closed"
                      className="gallery-card-closed"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                    >
                      <span className="gallery-card-number">
                        SURPRISE 0{item.id}
                      </span>

                      <div className="gallery-card-emoji">
                        {item.emoji}
                      </div>

                      <h2>{item.title}</h2>

                      <p>{item.subtitle}</p>

                      <span className="gallery-card-tap">
                        Discover surprise <Sparkles size={13} />
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="opened"
                      className="gallery-card-content"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                    >
                      <ItemIcon
                        className="gallery-content-icon"
                        size={30}
                      />

                      <h2>{item.title}</h2>

                      <p>{item.message}</p>

                      <span className="gallery-card-close">
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
              className="gallery-final-message"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 14 }}
            >
              <div className="gallery-final-emoji">💖</div>

              <h2>You've Discovered Everything!</h2>

              <p>
                But wait... the biggest surprise is still waiting
                for you. Are you ready?
              </p>

              <strong>Keep smiling, birthday queen! 👑</strong>
            </motion.div>
          )}
        </AnimatePresence>

        {allOpened && (
          <motion.button
            className="gallery-continue-button"
            onClick={() => navigate("/grand-finale")}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reveal the Grand Finale
            <ArrowRight size={18} />
          </motion.button>
        )}

        <div className="gallery-footer">
          A gallery filled with little reasons to smile
          <Heart size={14} fill="currentColor" />
        </div>

      </motion.div>
    </div>
  );
}

export default SurpriseGallery;
