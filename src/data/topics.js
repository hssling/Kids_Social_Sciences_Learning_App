export const topics = [
  {
    id: 1,
    title: 'What is History?',
    description: 'Learn about past events and people.',
    lessons: [
      {
        title: 'The First People',
        content: 'Long ago, people lived in caves. They hunted animals and gathered food. This was the Stone Age. People used stone tools and fire for cooking. Families lived together in groups.'
      },
      {
        title: 'Ancient Civilizations',
        content: 'People started farming and building cities. Egypt had pyramids built as tombs for pharaohs. India had rivers that helped people farm and live. These civilizations invented writing, wheels, and art.'
      },
      {
        title: 'Famous Leaders in History',
        content: 'Mahatma Gandhi led India to freedom peacefully. Nelson Mandela fought against unfair rules in South Africa. Mother Teresa helped poor people. Great leaders show courage and kindness.'
      },
      {
        title: 'Inventions that Changed the World',
        content: 'The wheel helped move heavy things. Paper let people write books. Electricity brought light and machines. Computers connect people everywhere today.'
      }
    ]
  },
  {
    id: 2,
    title: 'Geography: Continents',
    description: 'Explore the world\'s continents.',
    lessons: [
      {
        title: 'Asia',
        content: 'Asia is the largest continent. It has the highest mountains (Himalayas) and biggest rivers (Ganges). Countries like China, India, Japan, and Russia are here. It has more people than any other continent!'
      },
      {
        title: 'Africa',
        content: 'Africa has amazing animals like lions, elephants, and giraffes. It has pyramids in Egypt and jungles in Congo. Many languages are spoken here. Africa has 54 countries and the Sahara Desert.'
      },
      {
        title: 'Europe',
        content: 'Europe has many castles and old buildings. Countries like France, Germany, and England. Pizza and pasta come from Italy here. It\'s known for art, music, and science.'
      },
      {
        title: 'North America',
        content: 'Home to the United States and Canada. Has the Grand Canyon and Niagara Falls. Cowboys and Native Americans lived here. Many forests and mountains.'
      },
      {
        title: 'South America',
        content: 'Has the Amazon rainforest and beautiful beaches. Countries like Brazil and Argentina. People dance tango and samba. Has llams, piranhas fish.'
      },
      {
        title: 'Australia',
        content: 'Down under! Kangaroos and koalas live here. The Great Barrier Reef has colorful fish. Aboriginal people have lived here for thousands of years.'
      },
      {
        title: 'Antarctica',
        content: 'The coldest continent with ice everywhere. Penguins and seals live there. No permanent people live there. Scientists study climate here.'
      }
    ]
  },
  {
    id: 3,
    title: 'Civics: Rules and Laws',
    description: 'Understand how societies work.',
    lessons: [
      {
        title: 'What is a Government?',
        content: 'Government makes rules for people to live safely. They build roads, run schools, and keep people safe. Leaders like mayors, presidents, and prime ministers help make decisions.'
      },
      {
        title: 'Our Constitution',
        content: 'A constitution is like a rule book for the country. It says everyone is equal and has rights. No one can take away freedom of speech or religion. It protects children too.'
      },
      {
        title: 'Types of Governments',
        content: 'Democracy where people vote for leaders like India. Monarchy where king or queen rules like some European countries. Dictatorship where one person has all power.'
      },
      {
        title: 'Rights and Responsibilities',
        content: 'Rights are things like going to school, playing safely. Responsibilities are following rules, helping family. Vote when you grow up, follow laws.'
      }
    ]
  },
  {
    id: 4,
    title: 'Economics: Money and Trade',
    description: 'Fun with money basics.',
    lessons: [
      {
        title: 'What is Money?',
        content: 'Money helps us buy things we need. We earn it by working, selling goods, or as gifts. Coins and notes are different kinds of money that people use everywhere.'
      },
      {
        title: 'Trading and Bartering',
        content: 'In old times, people traded goods without money. Carrot for apple, toy for book. Today we use money. Trading between countries brings new things to stores.'
      },
      {
        title: 'Saving and Spending',
        content: 'Save money for later needs like ice cream. Spend on things you need first. Be wise with money. Teach children to save for big things.'
      },
      {
        title: 'Jobs and Earning',
        content: 'Doctors help sick people. Teachers make us smart. Farmers grow food. Every job is important. Money earned helps families.'
      }
    ]
  },
  {
    id: 5,
    title: 'World Cultures and Festivals',
    description: 'Learn about different people around the world.',
    lessons: [
      {
        title: 'Cultural Diversity',
        content: 'Different people celebrate different ways. India has Diwali with lights and sweets. Mexico has Día de los Muertos with colorful art. Learn to respect all cultures.'
      },
      {
        title: 'Traditional Clothing',
        content: 'Saris in India are colorful dresses. Kimonos in Japan are silk robes. African prints show bright patterns. Clothes show culture pride.'
      },
      {
        title: 'Global Festivals',
        content: 'Chinese New Year with dragons and fireworks. Halloween with costumes. Ramadan with fasting. Eid with giving food to poor. Each has special meaning.'
      },
      {
        title: 'Languages Around World',
        content: 'Mandarin Chinese spoken by most people. English used in many countries. Hindi in India. Even signs are in different letters: Arabic, Korean.'
      }
    ]
  }
];

export const questions = [
  // Geography Questions
  {
    category: 'Geography',
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    category: 'Geography',
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    category: 'Geography',
    question: "Which is the largest continent?",
    options: ["Africa", "Asia", "Europe", "North America"],
    answer: "Asia"
  },
  {
    category: 'Geography',
    question: "What is the smallest continent?",
    options: ["Australia", "Antarctica", "Europe", "South America"],
    answer: "Australia"
  },
  {
    category: 'Geography',
    question: "Which continent has the most countries?",
    options: ["Europe", "Asia", "Africa", "North America"],
    answer: "Africa"
  },
  {
    category: 'Geography',
    question: "Where is the Sahara Desert?",
    options: ["Australia", "Africa", "Asia", "South America"],
    answer: "Africa"
  },
  // History Questions
  {
    category: 'History',
    question: "Who was the first President of India?",
    options: ["Rajiv Gandhi", "Manmohan Singh", "Dr. B.R. Ambedkar", "Dr. Rajendra Prasad"],
    answer: "Dr. Rajendra Prasad"
  },
  {
    category: 'History',
    question: "What did people use in Stone Age?",
    options: ["Metal tools", "Stone tools", "Computers", "Cars"],
    answer: "Stone tools"
  },
  {
    category: 'History',
    question: "Where are the pyramids of Egypt?",
    options: ["India", "China", "Egypt", "Mexico"],
    answer: "Egypt"
  },
  {
    category: 'History',
    question: "Who led India to freedom peacefully?",
    options: ["Mahatma Gandhi", "Maharaja Ranjit Singh", "Ashoka the Great", "Rani Lakshmibai"],
    answer: "Mahatma Gandhi"
  },
  {
    category: 'History',
    question: "What invention helped move heavy things?",
    options: ["Computer", "The wheel", "Telephone", "Light bulb"],
    answer: "The wheel"
  },
  // Civics Questions
  {
    category: 'Civics',
    question: "What is the largest democracy in the world?",
    options: ["USA", "China", "India", "Russia"],
    answer: "India"
  },
  {
    category: 'Civics',
    question: "What does constitution protect?",
    options: ["Only adults", "Everyone equally", "Only rich people", "Only men"],
    answer: "Everyone equally"
  },
  {
    category: 'Civics',
    question: "What is a democracy?",
    options: ["King rules", "People vote", "One person decides", "Only women"],
    answer: "People vote"
  },
  {
    category: 'Civics',
    question: "Who makes laws in India?",
    options: ["Only President", "Only Prime Minister", "Parliament", "Only King"],
    answer: "Parliament"
  },
  {
    category: 'Civics',
    question: "What are rights?",
    options: ["Things we must do", "Things we can do freely", "Money we earn", "Games we play"],
    answer: "Things we can do freely"
  },
  // Economics Questions
  {
    category: 'Economics',
    question: "What is barter system?",
    options: ["Buying with money", "Exchanging goods", "Saving money", "Trading online"],
    answer: "Exchanging goods"
  },
  {
    category: 'Economics',
    question: "What helps us buy things?",
    options: ["Books", "Money", "Toys", "Food"],
    answer: "Money"
  },
  {
    category: 'Economics',
    question: "What should we do with money?",
    options: ["Spend everything", "Save some, spend some", "Throw away", "Give to friends"],
    answer: "Save some, spend some"
  },
  {
    category: 'Economics',
    question: "Who grows our food?",
    options: ["Doctors", "Teachers", "Drivers", "Farmers"],
    answer: "Farmers"
  },
  {
    category: 'Economics',
    question: "How do we earn money?",
    options: ["Sleeping", "Working", "Playing games", "Eating candy"],
    answer: "Working"
  },
  // Culture Questions
  {
    category: 'Culture',
    question: "What festival has lights and sweets in India?",
    options: ["Christmas", "Diwali", "Eid", "Thanksgiving"],
    answer: "Diwali"
  },
  {
    category: 'Culture',
    question: "Which continent has kangaroos?",
    options: ["Africa", "Europe", "Australia", "Asia"],
    answer: "Australia"
  },
  {
    category: 'Culture',
    question: "What do Chinese people celebrate with fireworks?",
    options: ["Halloween", "Thanksgiving", "Chinese New Year", "Birthday"],
    answer: "Chinese New Year"
  },
  {
    category: 'Culture',
    question: "People speak many languages in which continent?",
    options: ["Europe", "Australia", "Africa", "North America"],
    answer: "Africa"
  },
  {
    category: 'Culture',
    question: "What do people wear as traditional dress in Japan?",
    options: ["Saris", "Kimonos", "Tuxedos", "Shorts"],
    answer: "Kimonos"
  }
];

export const gamesData = {
  matching: [
    { country: "India", continent: "Asia" },
    { country: "China", continent: "Asia" },
    { country: "Japan", continent: "Asia" },
    { country: "Egypt", continent: "Africa" },
    { country: "South Africa", continent: "Africa" },
    { country: "Germany", continent: "Europe" },
    { country: "France", continent: "Europe" },
    { country: "Brazil", continent: "South America" },
    { country: "Argentina", continent: "South America" },
    { country: "USA", continent: "North America" },
    { country: "Mexico", continent: "North America" },
    { country: "Canada", continent: "North America" },
    { country: "Australia", continent: "Australia" },
  ],
  flashcards: [
    { term: "Democracy", definition: "Government by the people" },
    { term: "Economy", definition: "System of producing and trading goods" },
    { term: "Continent", definition: "Large landmass" },
    { term: "Constitution", definition: "Rule book for a country" },
    { term: "Culture", definition: "Way people live and celebrate" },
    { term: "Barter", definition: "Trading goods without money" },
    { term: "Civilization", definition: "Group of people living with rules and cities" },
    { term: "Freedom", definition: "Being able to do things without fear" },
    { term: "Rights", definition: "Things everyone should have" },
    { term: "Responsibility", definition: "Things we must do for others" },
    { term: "Leader", definition: "Person who guides and shows courage" },
    { term: "History", definition: "Stories of what happened in the past" },
    { term: "Geography", definition: "Study of places and lands" },
    { term: "Government", definition: "Group that makes rules for people" },
  ]
};
