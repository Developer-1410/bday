import "../App.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music2,
  Sparkles,
  Heart,
  Gift,
  Star,
  ChevronRight,
  Cake,
  PartyPopper,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const [started, setStarted] = useState(false);
    const navigate = useNavigate();


    return (
        <main className="birthday-page">

            {/* Background Decorations */}
            <div className="background-glow glow-one" />
            <div className="background-glow glow-two" />

            {Array.from({ length: 18 }).map((_, index) => (
                <motion.div
                    key={index}
                    className="floating-heart"
                    initial={{
                        y: "110vh",
                        x: `${(index * 17) % 100}vw`,
                        opacity: 0,
                    }}
                    animate={{
                        y: "-15vh",
                        opacity: [0, 0.7, 0],
                        rotate: [0, 25, -25, 0],
                    }}
                    transition={{
                        duration: 12 + (index % 7) * 2,
                        repeat: Infinity,
                        delay: index * 0.8,
                        ease: "linear",
                    }}
                >
                    {index % 2 === 0 ? "♡" : "✦"}
                </motion.div>
            ))}

            {/* Top Bar */}
            <header className="top-bar">
                <div className="brand">
                    <Heart size={19} fill="currentColor" />
                    <span>A Little Surprise</span>
                </div>

                <div className="music-status">
                    <Music2 size={18} />
                    <span>Music coming soon</span>
                </div>
            </header>

            {/* Main Birthday Content */}
            <section className="hero-section">

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >

                    <div className="top-decoration">
                        <Sparkles size={20} />
                        <span>TODAY IS YOUR SPECIAL DAY</span>
                        <Sparkles size={20} />
                    </div>

                    <motion.div
                        className="birthday-heading"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <p className="small-heading">A Special Birthday Surprise</p>

                        <h1>
                            For My
                            <span>Dear Sister</span>
                        </h1>

                        <p className="heading-subtitle">
                            Today is filled with smiles, surprises and lots of love!
                        </p>
                    </motion.div>

                    {/* Birthday Illustration */}
                    <div className="birthday-illustration">
                        <div className="illustration-sparkle sparkle-one">✦</div>
                        <div className="illustration-sparkle sparkle-two">♡</div>
                        <div className="illustration-sparkle sparkle-three">✧</div>

                        <div className="teddy">🧸</div>

                        <div className="gift gift-left">🎁</div>
                        <div className="gift gift-right">🎀</div>

                        <div className="cake-decoration">🎂</div>

                        <div className="illustration-caption">
                            Made with lots of love ♡
                        </div>
                    </div>

                    {/* Welcome Message */}
                    <motion.div
                        className="welcome-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <Heart size={18} fill="currentColor" />

                        <p>
                            Someone very special deserves something extraordinary.
                            Get ready for a little surprise!
                        </p>
                    </motion.div>

                    {/* Birthday Date Message */}
                    <motion.div
                        className="birthday-date-card"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Sparkles size={18} />
                        <span>Today is all about YOU!</span>
                        <Heart size={18} fill="currentColor" />
                    </motion.div>

                    {/* Start Button */}
                    <motion.button
                        className="start-button"
                        onClick={() => navigate("/secret-pin")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.94 }}
                    >
                        <Gift size={21} />
                        Let's Begin
                        <ChevronRight size={21} />
                    </motion.button>

                    <AnimatePresence>
                        {started && (
                            <motion.div
                                className="coming-soon"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <PartyPopper size={22} />
                                Your surprise journey is getting ready! 💗
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <p className="bottom-note">
                        Made with ♡ especially for you
                    </p>

                </motion.div>
            </section>
        </main>
    );
}

export default Welcome;