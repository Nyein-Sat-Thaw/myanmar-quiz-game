// Myanmar Quiz Questions Database
const QUESTIONS = {
  history: [
    {
      q: "In which year did Myanmar gain independence from Britain?",
      options: ["1945", "1948", "1952", "1962"],
      answer: 1
    },
    {
      q: "Who was the first President of independent Burma?",
      options: ["Aung San", "Sao Shwe Thaik", "U Nu", "Ne Win"],
      answer: 1
    },
    {
      q: "The ancient city of Bagan was the capital of which kingdom?",
      options: ["Pagan Kingdom", "Toungoo Dynasty", "Konbaung Dynasty", "Ava Kingdom"],
      answer: 0
    },
    {
      q: "General Aung San was assassinated in which year?",
      options: ["1945", "1947", "1948", "1950"],
      answer: 1
    },
    {
      q: "What was Myanmar formerly known as before 1989?",
      options: ["Siam", "Burma", "Ceylon", "Indochina"],
      answer: 1
    },
    {
      q: "The Shwedagon Pagoda is believed to be over how many years old?",
      options: ["500 years", "1,000 years", "2,600 years", "3,500 years"],
      answer: 2
    },
    {
      q: "Which dynasty built the Mandalay Palace?",
      options: ["Toungoo Dynasty", "Konbaung Dynasty", "Pagan Kingdom", "Ava Kingdom"],
      answer: 1
    },
    {
      q: "Invasions by which empire destroyed the Pagan Kingdom in 1287?",
      options: ["Chinese (Mongol)", "Thai (Siam)", "Indian (Mughal)", "British"],
      answer: 0
    },
    {
      q: "The Panglong Agreement was signed in which year?",
      options: ["1945", "1947", "1948", "1950"],
      answer: 1
    },
    {
      q: "Who was the last king of Myanmar before British colonization?",
      options: ["Mindon Min", "Thibaw Min", "Bagyidaw", "Bodawpaya"],
      answer: 1
    }
  ],

  culture: [
    {
      q: "What is the traditional Myanmar New Year festival called?",
      pw: "Thingyan",
      options: ["Thingyan", "Thadingyut", "Tazaungdaing", "Kason"],
      answer: 0
    },
    {
      q: "What is the national sport of Myanmar?",
      options: ["Soccer", "Chinlone", "Boxing", "Swimming"],
      answer: 1
    },
    {
      q: "The traditional Myanmar dress for men is called?",
      options: ["Longyi", "Lungyi", "Paso", "Htamein"],
      answer: 2
    },
    {
      q: "What is the traditional Myanmar string puppet theater called?",
      options: ["Yoke thé", "Anyeint", "Zat pwe", "Nat pwe"],
      answer: 0
    },
    {
      q: "Which festival involves lighting balloons filled with hot air?",
      options: ["Thingyan", "Tazaungdaing", "Thadingyut", "Kason"],
      answer: 1
    },
    {
      q: "What is htamein?",
      options: ["A men's skirt", "A women's skirt", "A type of food", "A dance"],
      answer: 1
    },
    {
      q: "The Myanmar traditional dance-drama is called?",
      options: ["Yoke thé", "Anyeint", "Zat pwe", "All of these"],
      answer: 3
    },
    {
      q: "What flower is considered sacred in Myanmar Buddhism?",
      options: ["Rose", "Lotus", "Jasmine", "Orchid"],
      answer: 1
    },
    {
      q: "Thanaka is a traditional Myanmar cosmetic made from?",
      options: ["Clay", "Tree bark", "Rice powder", "Coconut oil"],
      answer: 1
    },
    {
      q: "The Thadingyut festival celebrates what?",
      options: ["New Year", "Buddha's return from heaven", "Harvest", "Independence"],
      answer: 1
    }
  ],

  geography: [
    {
      q: "What is the capital city of Myanmar?",
      options: ["Yangon", "Mandalay", "Naypyidaw", "Bagan"],
      answer: 2
    },
    {
      q: "What is the longest river in Myanmar?",
      options: ["Sittaung River", "Irrawaddy River", "Chindwin River", "Salween River"],
      answer: 1
    },
    {
      q: "Which mountain is the highest peak in Myanmar?",
      options: ["Mount Victoria", "Hkakabo Razi", "Popa Mountain", "Loi Leng"],
      answer: 1
    },
    {
      q: "Inle Lake is located in which state?",
      options: ["Shan State", "Kachin State", "Chin State", "Kayin State"],
      answer: 0
    },
    {
      q: "How many states and regions does Myanmar have?",
      options: ["12", "14", "16", "18"],
      answer: 1
    },
    {
      q: "Myanmar shares borders with how many countries?",
      options: ["4", "5", "6", "7"],
      answer: 1
    },
    {
      q: "The Mergui Archipelago is located in which body of water?",
      options: ["Bay of Bengal", "Andaman Sea", "Gulf of Thailand", "Indian Ocean"],
      answer: 1
    },
    {
      q: "What is the largest city in Myanmar by population?",
      options: ["Mandalay", "Naypyidaw", "Yangon", "Bago"],
      answer: 2
    },
    {
      q: "Which lake is famous for its floating gardens?",
      options: ["Kandawgyi Lake", "Inle Lake", "Indawgyi Lake", "Meiktila Lake"],
      answer: 1
    },
    {
      q: "Myanmar was renamed from Burma in which year?",
      options: ["1987", "1989", "1991", "1995"],
      answer: 1
    }
  ],

  food: [
    {
      q: "What is the national dish of Myanmar?",
      options: ["Mohinga", "Shan noodles", "Ohn no khao swè", "Tea leaf salad"],
      answer: 0
    },
    {
      q: "Mohinga is traditionally eaten for what meal?",
      options: ["Lunch", "Dinner", "Breakfast", "Snack"],
      answer: 2
    },
    {
      q: "What is lahpet?",
      options: ["Fried rice", "Fermented tea leaves", "Noodle soup", "Curry paste"],
      answer: 1
    },
    {
      q: "Ohn no khao swè is a type of?",
      options: ["Fried noodle", "Coconut chicken noodle soup", "Rice dish", "Salad"],
      answer: 1
    },
    {
      q: "What is the popular Myanmar snack made from sticky rice?",
      options: ["Mont lone yay paw", "Sanwin makin", "Htou moun", "All of these"],
      answer: 3
    },
    {
      q: "Shan noodles originate from which region?",
      options: ["Yangon", "Shan State", "Mandalay", "Mon State"],
      answer: 1
    },
    {
      q: "What is a common ingredient in Myanmar curry that makes it unique?",
      options: ["Turmeric and fermented fish/shrimp paste", "Coconut milk only", "Soy sauce", "Chili powder only"],
      answer: 0
    },
    {
      q: "What is mont pyar zalay?",
      options: ["A sweet cake", "A savory pancake", "A type of curry", "A noodle dish"],
      answer: 1
    },
    {
      q: "Myanmar tea shop culture centers around drinking?",
      options: ["Green tea", "Black tea with condensed milk", "Coffee", "Herbal tea"],
      answer: 1
    },
    {
      q: "What is tohu thoke?",
      options: ["Chickpea tofu salad", "Green papaya salad", "Noodle salad", "Rice salad"],
      answer: 0
    }
  ]
};
