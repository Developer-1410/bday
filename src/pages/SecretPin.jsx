
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    LockKeyhole,
    Delete,
    RotateCcw,
    Sparkles,
    Heart,
    ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./SecretPin.css";

const CORRECT_PIN = "112004";

const funnyMessages = [
    "Oops! Wrong PIN, birthday detective! 😂",
    "Are you guessing or actually thinking? 🤭",
    "Access denied! Try those brain cells again! 😜",
    "Nice try! The secret is still safe! 🔐",
    "Even Google can't help you with this one! 😂",
];

function SecretPin() {
    const [pin, setPin] = useState("");
    const [message, setMessage] = useState("");
    const [unlocked, setUnlocked] = useState(false);
    const navigate = useNavigate();

    const handleNumber = (number) => {
        if (pin.length >= 6 || unlocked) return;

        const updatedPin = pin + number;
        setPin(updatedPin);
        setMessage("");

        if (updatedPin.length === 6) {
            if (updatedPin === CORRECT_PIN) {
                setUnlocked(true);
                setMessage("Yay! You unlocked the surprise! 💗");

                setTimeout(() => {
                    navigate("/are-you-sure");
                }, 1800);
            } else {
                setMessage(
                    funnyMessages[Math.floor(Math.random() * funnyMessages.length)]
                );

                setTimeout(() => {
                    setPin("");
                }, 900);
            }
        }
    };

    const handleDelete = () => {
        if (!unlocked) {
            setPin((previous) => previous.slice(0, -1));
            setMessage("");
        }
    };

    const handleClear = () => {
        if (!unlocked) {
            setPin("");
            setMessage("");
        }
    };

    return (
        <main className="pin-page">

            <div className="pin-glow pin-glow-one" />
            <div className="pin-glow pin-glow-two" />

            <button className="pin-back-button" onClick={() => navigate("/")}>
                <ArrowLeft size={18} />
                Back
            </button>

            <motion.section
                className="pin-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <motion.div
                    className="pin-lock"
                    animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <LockKeyhole size={48} />
                    <Sparkles className="pin-sparkle" size={20} />
                </motion.div>

                <p className="pin-eyebrow">A LITTLE SECRET FOR YOU</p>

                <h1>
                    Secret <span>Unlock!</span>
                </h1>

                <p className="pin-description">
                    A little surprise is waiting for you.
                    Enter the secret six-digit PIN to continue!
                </p>

                <div className="pin-indicators">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <motion.div
                            key={index}
                            className={`pin-dot ${index < pin.length ? "filled" : ""}`}
                            animate={
                                index < pin.length
                                    ? { scale: [1, 1.2, 1] }
                                    : { scale: 1 }
                            }
                            transition={{ duration: 0.2 }}
                        />
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {message && (
                        <motion.div
                            key={message}
                            className={`pin-message ${unlocked ? "success" : ""}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                        >
                            {message}
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="pin-keypad">
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map(
                        (number) => (
                            <button
                                key={number}
                                className="pin-key"
                                onClick={() => handleNumber(number)}
                                disabled={unlocked}
                            >
                                {number}
                            </button>
                        )
                    )}

                    <button className="pin-key utility-key" onClick={handleClear}>
                        <RotateCcw size={20} />
                    </button>

                    <button
                        className="pin-key"
                        onClick={() => handleNumber("0")}
                        disabled={unlocked}
                    >
                        0
                    </button>

                    <button className="pin-key utility-key" onClick={handleDelete}>
                        <Delete size={20} />
                    </button>
                </div>

                <p className="pin-footer">
                    <Heart size={14} fill="currentColor" />
                    Only special people can enter!
                </p>
            </motion.section>
        </main>
    );
}

export default SecretPin;
