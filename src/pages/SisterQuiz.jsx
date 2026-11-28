
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
  Trophy,
  Star,
} from "lucide-react";
import "./SisterQuiz.css";

const questions = [
  {
    question: "Who is the official drama queen? 👑",
    options: [
      "Birthday girl, obviously 😂",
      "Me, obviously 😎",
      "Nobody here 🤭",
      "Everyone equally 🤣",
    ],
    correctAnswer: 0,
    correctMessage: "Of course! The crown belongs to you! 👑",
    wrongMessage: "Wrong answer! Think again, madam! 😂",
  },
  {
    question: "Who can turn a tiny story into a movie? 🎬",
    options: [
      "The neighbours 🤣",
      "Birthday girl 🎭",
      "The family cat 🐱",
      "Nobody knows 🤫",
    ],
    correctAnswer: 1,
    correctMessage: "Bollywood needs to sign you immediately! 😂",
    wrongMessage: "Come on! We all know the answer! 🤭",
  },
  {
    question: "Who deserves the biggest slice of cake? 🎂",
    options: [
      "Me 😋",
      "The dog 🐶",
      "Birthday girl 💗",
      "Everyone gets equal pieces",
    ],
    correctAnswer: 2,
    correctMessage: "Correct! Today, the entire cake is yours! 🎂",
    wrongMessage: "Wrong! It's HER birthday! 😂",
  },
  {
    question: "Who is secretly the boss of the family? 👀",
    options: [
      "Dad 😎",
      "Mum ❤️",
      "Birthday girl 👑",
      "Nobody! 😂",
    ],
    correctAnswer: 2,
    correctMessage: "You know who's really in charge! 🤣",
    wrongMessage: "Nice try! We know who's the boss! 😂",
  },
  {
    question: "Who deserves unlimited love and happiness? 💝",
    options: [
      "Birthday girl 💗",
      "Chocolate 🍫",
      "The Wi-Fi 📶",
      "All of the above 😂",
    ],
    correctAnswer: 0,
    correctMessage: "Absolutely right! You deserve the entire universe! 💗",
    wrongMessage: "Nope! This one's all about you! 🥹",
  },
];

function SisterQuiz() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (index) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === question.correctAnswer) {
      setScore((previous) => previous + 1);
    }
  };

  const handleNext = () => {
    if (!isAnswered) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  const resultMessage =
    score === 5
      ? "Perfect score! You're absolutely fabulous! 👑"
      : score >= 3
      ? "Not bad! But your birthday attitude needs more practice! 😂"
      : "Oops! Looks like someone needs more birthday celebrations! 🤣";

  return (
    <div className="quiz-page">

      <div className="quiz-decoration quiz-heart-one">♡</div>
      <div className="quiz-decoration quiz-heart-two">♥</div>
      <div className="quiz-decoration quiz-star-one">✦</div>
      <div className="quiz-decoration quiz-star-two">✧</div>

      <motion.div
        className="quiz-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <button
          className="quiz-back-button"
          onClick={() => navigate("/funny-memories")}
        >
          <ArrowLeft size={17} />
          Back
        </button>

        <div className="quiz-eyebrow">
          <Sparkles size={15} />
          THE BIRTHDAY CHALLENGE
          <Sparkles size={15} />
        </div>

        <h1 className="quiz-heading">
          Sister
          <span>Quiz! 🎯</span>
        </h1>

        <p className="quiz-subtitle">
          Let's see how well you know your own birthday reputation! 🤭
        </p>

        {!isCompleted ? (
          <>
            <div className="quiz-progress-info">
              <span>QUESTION {currentQuestion + 1} / {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>

            <div className="quiz-progress-track">
              <motion.div
                className="quiz-progress-fill"
                animate={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                className="quiz-question-card"
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -35 }}
                transition={{ duration: 0.3 }}
              >
                <div className="quiz-question-number">
                  QUESTION 0{currentQuestion + 1}
                </div>

                <h2>{question.question}</h2>

                <div className="quiz-options">
                  {question.options.map((option, index) => {
                    const isCorrect = index === question.correctAnswer;
                    const isSelected = selectedAnswer === index;

                    let optionClass = "";

                    if (isAnswered && isCorrect) {
                      optionClass = "quiz-option-correct";
                    } else if (isAnswered && isSelected) {
                      optionClass = "quiz-option-wrong";
                    }

                    return (
                      <motion.button
                        key={index}
                        className={`quiz-option ${optionClass}`}
                        onClick={() => handleAnswer(index)}
                        disabled={isAnswered}
                        whileHover={!isAnswered ? { scale: 1.02 } : {}}
                        whileTap={!isAnswered ? { scale: 0.98 } : {}}
                      >
                        <span className="quiz-option-letter">
                          {String.fromCharCode(65 + index)}
                        </span>

                        <span>{option}</span>

                        {isAnswered && isCorrect && (
                          <span className="quiz-option-status">✓</span>
                        )}

                        {isAnswered && isSelected && !isCorrect && (
                          <span className="quiz-option-status">✕</span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <motion.div
                    className={`quiz-feedback ${
                      selectedAnswer === question.correctAnswer
                        ? "quiz-feedback-correct"
                        : "quiz-feedback-wrong"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {selectedAnswer === question.correctAnswer
                      ? question.correctMessage
                      : question.wrongMessage}
                  </motion.div>
                )}

                {isAnswered && (
                  <motion.button
                    className="quiz-next-button"
                    onClick={handleNext}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {currentQuestion === questions.length - 1
                      ? "See My Result"
                      : "Next Question"}
                    <ArrowRight size={18} />
                  </motion.button>
                )}
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <motion.div
            className="quiz-result-card"
            initial={{ opacity: 0, scale: 0.7, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 14 }}
          >
            <motion.div
              className="quiz-trophy"
              animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🏆
            </motion.div>

            <span className="quiz-result-label">
              YOUR FINAL SCORE
            </span>

            <div className="quiz-score">
              {score}<span> / {questions.length}</span>
            </div>

            <h2>{score === 5 ? "Birthday Superstar!" : "Nice Try!"}</h2>

            <p>{resultMessage}</p>

            <div className="quiz-result-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={23}
                  fill={star <= score ? "currentColor" : "none"}
                />
              ))}
            </div>

            <button
              className="quiz-restart-button"
              onClick={restartQuiz}
            >
              Play Again
            </button>

            <motion.button
              className="quiz-next-button quiz-awards-button"
              onClick={() => navigate("/sister-awards")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Continue to Sister Awards
              <Trophy size={18} />
            </motion.button>
          </motion.div>
        )}

        <div className="quiz-footer">
          A little fun, a lot of love
          <Heart size={14} fill="currentColor" />
        </div>

      </motion.div>
    </div>
  );
}

export default SisterQuiz;
