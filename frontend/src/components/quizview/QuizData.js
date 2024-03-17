const quizSet = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which of the following is known as brain of computer?",
    correct_answer: "CPU",
    answers: ["CPU", "Mouse", "Moniter", "Printer"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Parent Firm of Facebook",
    correct_answer: "Meta",
    answers: [
      "Alphabet",
      "Meta",
      "Goldman Sach",
      "None",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which one is fastest Memory",
    correct_answer: "Cache",
    answers: ["Cache", "RAM", "HardDisk", "SSD"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which operating system was released first?",
    correct_answer: "Mac OS",
    answers: ["Windows", "Linux", "Mac OS", "OS/2"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    answers: ["CompuServe", "Prodigy", "GEnie", "Quantum Link"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    answers: ["Puma", "Cheetah", "Tiger", "Leopard"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    answers: ["java", "Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "In programming, what do you call functions with the same name but different implementations?",
    correct_answer: "Overloading",
    answers: ["Overriding", "Abstracting", "Inheriting", "Overloading"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What is the number of keys on a standard Windows Keyboard?",
    correct_answer: "104",
    answers: ["64", "94", "104", "76"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Unix Time is defined as the number of seconds that have elapsed since when?",
    correct_answer: "Midnight, January 1, 1970",
    answers: [
      "Midnight, July 4, 1976",
      "Midnight on the creator of Unix&#039;s birthday",
      "Midnight, July 4, 1980",
      "Midnight, January 1, 1970",
    ],
  },
];
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array.slice(0, 5);
}

export const randomSlice = shuffle(quizSet);
