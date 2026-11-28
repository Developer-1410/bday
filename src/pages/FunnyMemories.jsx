
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
  Laugh,
  Gift,
} from "lucide-react";
import "./FunnyMemories.css";

const memories = [
  {
    id: 1,
    title: "The Laugh Attack",
    emoji: "😂",
    message:
      "Some conversations start normally and somehow end with both of us laughing like crazy!",
    color: "pink",
  },
  {
    id: 2,
    title: "Drama Queen Moments",
    emoji: "🎭",
    message:
      "Every little situation deserves a full dramatic performance. Oscar-worthy, honestly!",
    color: "lavender",
  },
  {
    id: 3,
    title: "The Secret Team",
    emoji: "🤫",
    message:
      "Our little secrets, silly plans and random conversations deserve their own documentary!",
    color: "peach",
  },
  {
    id: 4,
    title: "Unforgettable Chaos",
    emoji: "🤣",
    message:
      "Normal days are overrated. A little madness makes everything memorable!",
    color: "purple",
  },
];

function FunnyMemories() {
  const navigate = useNavigate();
  const [openedMemories, setOpenedMemories] = useState([]);

  const toggleMemory = (id) => {
    setOpenedMemories((previous) =>
      previous.includes(id)
        ? previous.filter((memoryId) => memoryId !== id)
        : [...previous, id]
    );
  };

  const allOpened = openedMemories.length === memories.length;

  return (
    <div className="memories-page">

      <div className="memories-decoration memories-heart-one">♡</div>
      <div className="memories-decoration memories-heart-two">♥</div>
      <div className="memories-decoration memories-star-one">✦</div>
      <div className="memories-decoration memories-star-two">✧</div>

      <motion.div
        className="memories-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <button
          className="memories-back-button"
          onClick={() => navigate("/mystery-gift")}
        >
          <ArrowLeft size={17} />
          Back
        </button>

        <div className="memories-eyebrow">
          <Sparkles size={15} />
          OUR LITTLE MEMORY LANE
          <Sparkles size={15} />
        </div>

        <h1 className="memories-heading">
          Funny
          <span>Memories! 😂</span>
        </h1>

        <p className="memories-subtitle">
          A little collection of laughter, madness and unforgettable moments!
        </p>

        <div className="memories-progress">
          <Heart size={16} fill="currentColor" />
          {openedMemories.length} of {memories.length} memories discovered
        </div>

        <div className="memories-grid">
          {memories.map((memory, index) => {
            const isOpened = openedMemories.includes(memory.id);

            return (
              <motion.button
                key={memory.id}
                className={`memory-card ${memory.color} ${
                  isOpened ? "memory-card-opened" : ""
                }`}
                onClick={() => toggleMemory(memory.id)}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                layout
              >
                <AnimatePresence mode="wait">
                  {!isOpened ? (
                    <motion.div
                      key="closed"
                      className="memory-card-front"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <span className="memory-number">
                        MEMORY 0{memory.id}
                      </span>

                      <span className="memory-emoji">
                        {memory.emoji}
                      </span>

                      <h2>{memory.title}</h2>

                      <span className="memory-tap">
                        Tap to discover ✨
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="opened"
                      className="memory-card-content"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="memory-emoji">
                        {memory.emoji}
                      </span>

                      <h2>{memory.title}</h2>

                      <p>{memory.message}</p>

                      <span className="memory-close">
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
              className="memories-complete"
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
            >
              <Laugh size={21} />
              <p>
                Congratulations! You survived our memory collection!
                Or did you? 😂
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {allOpened && (
          <motion.button
            className="memories-continue-button"
            onClick={() => navigate("/sister-quiz")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next Surprise <ArrowRight size={18} />
          </motion.button>
        )}

        <div className="memories-footer">
          Made with laughter and lots of love
          <Heart size={14} fill="currentColor" />
        </div>

      </motion.div>
    </div>
  );
}

export default FunnyMemories;
