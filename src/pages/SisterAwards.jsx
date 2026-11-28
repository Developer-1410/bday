
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Crown,
  Heart,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";
import "./SisterAwards.css";

const awards = [
  {
    id: 1,
    emoji: "👑",
    title: "The Drama Queen Award",
    subtitle: "For outstanding dramatic performances",
    description:
      "For turning even the smallest situation into a blockbuster movie. Bollywood is definitely missing its biggest star!",
    color: "pink",
  },
  {
    id: 2,
    emoji: "😂",
    title: "The Laughing Legend",
    subtitle: "For spreading unlimited laughter",
    description:
      "For making everyone laugh, even when nobody knows what is so funny. Your laughter is truly contagious!",
    color: "lavender",
  },
  {
    id: 3,
    emoji: "💖",
    title: "The Sweetest Heart Award",
    subtitle: "For being wonderfully caring",
    description:
      "For having a heart full of kindness, warmth and love. Never stop being the beautiful person you are!",
    color: "peach",
  },
  {
    id: 4,
    emoji: "🤣",
    title: "The Family Boss Award",
    subtitle: "For being the unofficial boss",
    description:
      "For managing everyone, giving instructions and somehow always getting the final word. Nobody dares to argue!",
    color: "purple",
  },
];

function SisterAwards() {
  const navigate = useNavigate();

  const [revealedAwards, setRevealedAwards] = useState([]);

  const revealAward = (id) => {
    setRevealedAwards((previous) =>
      previous.includes(id)
        ? previous
        : [...previous, id]
    );
  };

  const allRevealed = revealedAwards.length === awards.length;

  return (
    <div className="awards-page">

      <div className="awards-decoration awards-heart-one">♡</div>
      <div className="awards-decoration awards-heart-two">♥</div>
      <div className="awards-decoration awards-star-one">✦</div>
      <div className="awards-decoration awards-star-two">✧</div>

      <motion.div
        className="awards-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <button
          className="awards-back-button"
          onClick={() => navigate("/sister-quiz")}
        >
          <ArrowLeft size={17} />
          Back
        </button>

        <motion.div
          className="awards-main-trophy"
          animate={{
            y: [0, -9, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🏆
        </motion.div>

        <div className="awards-eyebrow">
          <Sparkles size={15} />
          THE GRAND BIRTHDAY AWARDS
          <Sparkles size={15} />
        </div>

        <h1 className="awards-heading">
          And the Awards
          <span>Go To You! 👑</span>
        </h1>

        <p className="awards-subtitle">
          After careful investigation and absolutely no complaints,
          here are your very special awards! 🤭
        </p>

        <div className="awards-progress">
          <Award size={17} />
          {revealedAwards.length} of {awards.length} awards revealed
        </div>

        <div className="awards-grid">
          {awards.map((award, index) => {
            const isRevealed = revealedAwards.includes(award.id);

            return (
              <motion.div
                key={award.id}
                className={`award-card ${award.color}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -5 }}
              >
                <div className="award-card-top">
                  <span className="award-number">
                    AWARD 0{award.id}
                  </span>

                  <Star size={18} />
                </div>

                <AnimatePresence mode="wait">
                  {!isRevealed ? (
                    <motion.div
                      key="hidden"
                      className="award-hidden-content"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                    >
                      <div className="award-emoji">
                        {award.emoji}
                      </div>

                      <h2>{award.title}</h2>

                      <p>{award.subtitle}</p>

                      <motion.button
                        className="award-reveal-button"
                        onClick={() => revealAward(award.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Reveal Award
                        <Sparkles size={15} />
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="revealed"
                      className="award-revealed-content"
                      initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 160,
                        damping: 13,
                      }}
                    >
                      <motion.div
                        className="award-revealed-emoji"
                        animate={{ rotate: [0, -8, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {award.emoji}
                      </motion.div>

                      <span className="award-winner-label">
                        OFFICIALLY AWARDED TO
                      </span>

                      <h2>{award.title}</h2>

                      <p>{award.description}</p>

                      <div className="award-approved">
                        <Crown size={15} />
                        Award Winner!
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {allRevealed && (
            <motion.div
              className="awards-grand-winner"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 14 }}
            >
              <Trophy size={35} />

              <h2>THE ULTIMATE WINNER!</h2>

              <div className="grand-winner-emoji">👑</div>

              <p>
                All four awards belong to you!
                What a legendary birthday girl! 😂💗
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {allRevealed && (
          <motion.button
            className="awards-continue-button"
            onClick={() => navigate("/special-letter")}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Open Your Special Letter
            <ArrowRight size={18} />
          </motion.button>
        )}

        <div className="awards-footer">
          Made especially for you
          <Heart size={14} fill="currentColor" />
        </div>

      </motion.div>
    </div>
  );
}

export default SisterAwards;
