import React, { useState } from 'react';
import { Heart, ArrowLeft, CheckCircle, Brain, Sparkles, Moon, Sun } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "When someone feels overwhelmed for a long time, the best first step is:",
    options: [
      "Ignore it and stay busy",
      "Keep it a secret",
      "Talk to someone they trust",
      "Blame themselves"
    ],
    correct: 2
  },
  {
    id: 2,
    question: "Which of the following is a healthy coping strategy during stress?",
    options: [
      "Isolating yourself completely",
      "Deep breathing or grounding exercises",
      "Using alcohol to forget",
      "Overworking without rest"
    ],
    correct: 1
  },
  {
    id: 3,
    question: "Asking for help means:",
    options: [
      "You are weak",
      "You failed in life",
      "You are brave and self-aware",
      "You are a burden"
    ],
    correct: 2
  },
  {
    id: 4,
    question: "If a friend seems withdrawn and hopeless, what should you do?",
    options: [
      "Ignore it, it will pass",
      "Make fun to cheer them up",
      "Listen without judging and encourage help",
      "Scold them for being negative"
    ],
    correct: 2
  },
  {
    id: 5,
    question: "Which statement is TRUE?",
    options: [
      "Strong people never feel low",
      "Mental health struggles are rare",
      "Feelings change and help works",
      "Talking about problems makes them worse"
    ],
    correct: 2
  },
  {
    id: 6,
    question: "When negative thoughts repeat in your mind, what helps most?",
    options: [
      "Fighting yourself",
      "Writing them down and reframing",
      "Believing every thought",
      "Suppressing emotions"
    ],
    correct: 1
  },
  {
    id: 7,
    question: "What is a sign of good emotional awareness?",
    options: [
      "Pretending everything is fine",
      "Recognizing when you need rest or support",
      "Never crying",
      "Avoiding people always"
    ],
    correct: 1
  },
  {
    id: 8,
    question: "If you fail or make a mistake, the healthiest thought is:",
    options: [
      "My life is useless",
      "Everyone will judge me",
      "I can learn and try again",
      "I deserve pain"
    ],
    correct: 2
  },
  {
    id: 9,
    question: "Which action can improve mental well-being over time?",
    options: [
      "Regular sleep and routine",
      "Constant comparison with others",
      "Bottling emotions",
      "Skipping meals"
    ],
    correct: 0
  },
  {
    id: 10,
    question: "In difficult times, remembering which thought is helpful?",
    options: [
      "I am alone forever",
      "This pain will never end",
      "Support is available, I can reach out",
      "I should disappear"
    ],
    correct: 2
  }
];


export default function MentalHealthChecker() {
  const [page, setPage] = useState('landing');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleStartQuiz = () => {
    setPage('quiz');
    setCurrentQuestion(0);
    setAnswers({});
    setScore(0);
  };

  const handleAnswer = (optionIndex) => {
    const newAnswers = { ...answers, [currentQuestion]: optionIndex };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        correctCount++;
      }
    });
    setScore((correctCount / questions.length) * 100);
    setPage('results');
  };

  const handleBackToHome = () => {
    setPage('landing');
    setCurrentQuestion(0);
    setAnswers({});
    setScore(0);
  };

  if (page === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <Moon className="w-24 h-24 text-teal-400" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Sun className="w-24 h-24 text-amber-400" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-10">
          <Sparkles className="w-16 h-16 text-cyan-400" />
        </div>
        
        <div className="max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center relative z-10 border border-teal-100">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-5 rounded-full shadow-lg">
              <Brain className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Mental Health Checker
          </h1>
          
          <div className="flex justify-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-rose-400 animate-pulse" />
            <Heart className="w-5 h-5 text-rose-400 animate-pulse" style={{animationDelay: '0.3s'}} />
            <Heart className="w-5 h-5 text-rose-400 animate-pulse" style={{animationDelay: '0.6s'}} />
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Take a moment for yourself. This gentle assessment helps you explore 
            your understanding of mental wellness and healthy coping strategies.
          </p>
          
          <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-8 rounded-r-lg">
            <p className="text-teal-800 text-sm md:text-base">
              <strong>Remember:</strong> Your mental health matters. This quiz is about learning 
              and growing, not judgment. Take your time and be honest with yourself.
            </p>
          </div>
          
          <button
            onClick={handleStartQuiz}
            className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold text-lg px-10 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-teal-600 hover:to-cyan-600"
          >
            Take Quiz
          </button>
          
          <p className="text-sm text-gray-600 mt-6 flex items-center justify-center gap-2">
            
            10 questions • About 2 minutes • Your pace, your space
          </p>
        </div>
      </div>
    );
  }

  if (page === 'quiz') {
    const progress = ((currentQuestion) / questions.length) * 100;
    const currentQ = questions[currentQuestion];
    const isAnswered = answers[currentQuestion] !== undefined;
    const allAnswered = Object.keys(answers).length === questions.length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-4 py-8 relative overflow-hidden">
        {/* Breathing animation circle */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          {/* Breathing reminder */}
          <div className="text-center mb-6">
            <p className="text-teal-600 text-sm font-medium flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
              Take a deep breath before answering
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10 border border-teal-100">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-teal-700">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-semibold text-cyan-600">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <div className="w-full bg-teal-100 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-teal-400 to-cyan-500 h-3 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
              {currentQ.question}
            </h2>

            <div className="space-y-3 mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                    answers[currentQuestion] === index
                      ? 'border-teal-500 bg-gradient-to-r from-teal-50 to-cyan-50 shadow-lg transform scale-[1.02]'
                      : 'border-gray-200 hover:border-teal-300 hover:bg-teal-50/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center">
                    <span className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center mr-4 font-semibold text-sm transition-all duration-300 ${
                      answers[currentQuestion] === index 
                        ? 'border-teal-500 bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-md' 
                        : 'border-gray-300 text-gray-500'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-gray-700 font-medium leading-relaxed">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-teal-100">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${
                  currentQuestion === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-teal-100 text-teal-700 hover:bg-teal-200 hover:shadow-md'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!allAnswered}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    allAnswered
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <CheckCircle className="w-5 h-5" />
                  Complete Assessment
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isAnswered
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue
                </button>
              )}
            </div>
          </div>
          
          {/* Gentle reminder */}
          <div className="text-center mt-6">
            <p className="text-teal-600 text-sm italic">
              There are no wrong answers - this is about self-awareness
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'results') {
    const getScoreMessage = () => {
      if (score === 100) return "Wonderful! You have excellent mental health awareness!";
      if (score >= 80) return "Great work! You understand mental wellness deeply!";
      if (score >= 60) return "You're on the right path! Keep nurturing your awareness!";
      if (score >= 40) return "Every step counts! Continue your mental health journey!";
      return "Thank you for taking this step! Growth starts with awareness!";
    };

    const getScoreColor = () => {
      if (score >= 80) return "from-emerald-400 to-teal-500";
      if (score >= 60) return "from-teal-400 to-cyan-500";
      if (score >= 40) return "from-cyan-400 to-blue-500";
      return "from-blue-400 to-indigo-500";
    };

    const getEncouragementIcon = () => {
      if (score >= 80) return <CheckCircle className="w-16 h-16 text-white" />;
      if (score >= 60) return <Brain className="w-16 h-16 text-white" />;
      return <Heart className="w-16 h-16 text-white" />;
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Celebration elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <Sparkles className="w-20 h-20 text-amber-400 animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Sparkles className="w-20 h-20 text-rose-400 animate-pulse" style={{animationDelay: '0.5s'}} />
        </div>
        
        <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center relative z-10 border border-teal-100">
          <div className="flex justify-center mb-6">
            <div className={`bg-gradient-to-br ${getScoreColor()} p-5 rounded-full shadow-xl animate-pulse`}>
              {getEncouragementIcon()}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Your Wellness Journey
          </h1>

          <div className="mb-8">
            <div className="relative w-56 h-56 mx-auto mb-6">
              <svg className="transform -rotate-90 w-56 h-56">
                <circle
                  cx="112"
                  cy="112"
                  r="100"
                  stroke="#d1fae5"
                  strokeWidth="14"
                  fill="none"
                />
                <circle
                  cx="112"
                  cy="112"
                  r="100"
                  stroke="url(#gradient)"
                  strokeWidth="14"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 100}`}
                  strokeDashoffset={`${2 * Math.PI * 100 * (1 - score / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000 drop-shadow-lg"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={score >= 80 ? "#10b981" : score >= 60 ? "#14b8a6" : score >= 40 ? "#06b6d4" : "#3b82f6"} />
                    <stop offset="100%" stopColor={score >= 80 ? "#14b8a6" : score >= 60 ? "#06b6d4" : score >= 40 ? "#3b82f6" : "#6366f1"} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-6xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  {Math.round(score)}%
                </div>
                <div className="text-sm text-gray-500 mt-2">Awareness Score</div>
              </div>
            </div>

            <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              {getScoreMessage()}
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              You answered {Math.round(score / 10)} out of 10 questions correctly.
              {score < 100 && " Remember, learning is a continuous journey of growth and self-discovery."}
            </p>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-400 p-5 mb-8 rounded-r-xl">
            <p className="text-teal-800 text-sm md:text-base leading-relaxed">
              <strong className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-rose-400" />
                A Gentle Reminder
              </strong>
              Your mental health is a journey, not a destination. Every day is an opportunity 
              to learn, grow, and practice self-compassion. If you're struggling, please reach 
              out to someone you trust or a mental health professional.
            </p>
          </div>

          <button
            onClick={handleBackToHome}
            className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold text-lg px-10 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Return Home
          </button>

          <p className="text-sm text-gray-500 mt-6 italic">
            "Healing is not linear. Be patient with yourself."
          </p>
        </div>
      </div>
    );
  }
}