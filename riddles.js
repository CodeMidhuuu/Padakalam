// riddlesGroupedPool.js
// Clean 200 Abstract Riddle Database for Padakkalam Game

const riddlesGroupedPool = [
  /* ================= GROUP 1: MYSTERIES & ABSTRACT ================= */
  {
    groupId: 1,
    groupName: "Concepts & Mysteries",
    groupConnection: ["abstract", "concepts", "mysteries", "enigma"],
    riddles: [
      {
        id: 1,
        question: "🔊 + ⛰️ + 🗣️ = ?",
        options: ["Echo", "Voice", "Wind", "Music"],
        correctAnswer: "Echo",
        cleanAnswer: "Echo",
        clues: [
          "The sound you hear bouncing back from a mountain or an empty room. 🔊",
          "A phenomenon that repeats exactly what you say. ⛰️",
          "It is an echo, my friend! 🗣️",
          "Sound reflection back to your ears."
        ]
      },
      {
        id: 2,
        question: "🤫 + 🙊 + 🌌 = ?",
        options: ["Silence", "Sleep", "Darkness", "Thought"],
        correctAnswer: "Silence",
        cleanAnswer: "Silence",
        clues: [
          "What exists when no one is speaking. 🤫",
          "The thing that breaks as soon as you name it. 🙊",
          "It is silence, my friend! 🌌",
          "Absence of all sound."
        ]
      },
      {
        id: 3,
        question: "🔒 + 🤫 + 🗣️ = ?",
        options: ["Secret", "Key", "Story", "Mind"],
        correctAnswer: "Secret",
        cleanAnswer: "Secret",
        clues: [
          "If you tell it to someone, it is no longer what it was. 🔒",
          "Something kept locked safely inside you. 🤫",
          "It is a secret, my friend! 🗣️",
          "Something meant for nobody else to know."
        ]
      },
      {
        id: 4,
        question: "👤 + ☀️ + 🚶 = ?",
        options: ["Shadow", "Reflection", "Walk", "Light"],
        correctAnswer: "Shadow",
        cleanAnswer: "Shadow",
        clues: [
          "It walks with you in the light but disappears in the dark. ☀️",
          "The dark figure that follows right beside you. 🚶",
          "It is a shadow, my friend! 👤",
          "Dark outline following your body."
        ]
      },
      {
        id: 5,
        question: "🤝 + 🗣️ + 💖 = ?",
        options: ["Promise", "Love", "Contract", "Talk"],
        correctAnswer: "Promise",
        cleanAnswer: "Promise",
        clues: [
          "It is easy to give but hard to keep. 🤝",
          "An assurance given by giving your word. 💖",
          "It is a promise, my friend! 🗣️",
          "Word pledged to someone."
        ]
      },
      {
        id: 6,
        question: "🎂 + 📅 + ⬆️ = ?",
        options: ["Age", "Party", "Time", "Year"],
        correctAnswer: "Age",
        cleanAnswer: "Age",
        clues: [
          "Something that only goes up and never goes down. 🎂",
          "It increases for you every passing year. 📅",
          "It is your age, my friend! ⬆️",
          "Number of years you have been alive."
        ]
      },
      {
        id: 7,
        question: "🏷️ + 👶 + 🗣️ = ?",
        options: ["Name", "Baby", "Identity", "Word"],
        correctAnswer: "Name",
        cleanAnswer: "Name",
        clues: [
          "It belongs to you, but others use it more than you do. 🏷️",
          "The sound people use to call you. 🗣️",
          "It is your name, my friend! 👶",
          "What people call you."
        ]
      },
      {
        id: 8,
        question: "🕳️ + 📦 + ✂️ = ?",
        options: ["Hole", "Box", "Space", "Depth"],
        correctAnswer: "Hole",
        cleanAnswer: "Hole",
        clues: [
          "It keeps getting bigger the more you take away from it. 🕳️",
          "Something that increases as you dig. 📦",
          "It is a hole, my friend! ✂️",
          "The more you take away, the bigger it gets."
        ]
      },
      {
        id: 9,
        question: "🌅 + ⏳ + 📜 = ?",
        options: ["Yesterday", "Today", "Future", "Time"],
        correctAnswer: "Yesterday",
        cleanAnswer: "Yesterday",
        clues: [
          "It cannot come today and you cannot go back to it tomorrow. 🌅",
          "The day that has passed, time that will never return. ⏳",
          "It is yesterday, my friend! 📜",
          "The day before today."
        ]
      },
      {
        id: 10,
        question: "🪞 + 👁️ + 👤 = ?",
        options: ["Reflection", "Photo", "Eye", "Picture"],
        correctAnswer: "Reflection",
        cleanAnswer: "Reflection",
        clues: [
          "The figure looking just like you in the mirror. 🪞",
          "A picture that disappears when you look away. 👁️",
          "It is a reflection, my friend! 👤",
          "Mirror image of yourself."
        ]
      }
    ]
  },

  /* ================= GROUP 2: HUMAN BODY & STATES ================= */
  {
    groupId: 2,
    groupName: "Human Experience",
    groupConnection: ["body", "human", "states", "existence"],
    riddles: [
      {
        id: 11,
        question: "🫁 + 💨 + 🫀 = ?",
        options: ["Breath", "Air", "Heartbeat", "Life"],
        correctAnswer: "Breath",
        cleanAnswer: "Breath",
        clues: [
          "The air you take inside and let outside. 🫁",
          "If this stops, it is game over. 💨",
          "It is your breath, my friend! 🫀",
          "Inhale and exhale action."
        ]
      },
      {
        id: 12,
        question: "👣 + 🥾 + 🏖️ = ?",
        options: ["Footsteps", "Path", "Sand", "Walk"],
        correctAnswer: "Footsteps",
        cleanAnswer: "Footsteps",
        clues: [
          "The more of these you take, the more you leave behind. 👣",
          "The marks you see behind you when walking on sand. 🏖️",
          "They are footsteps, my friend! 🥾",
          "Marks left behind by walking."
        ]
      },
      {
        id: 13,
        question: "🧠 + 🧠 + 💭 = ?",
        options: ["Thought", "Memory", "Dream", "Idea"],
        correctAnswer: "Thought",
        cleanAnswer: "Thought",
        clues: [
          "The ideas flashing in your mind. 🧠",
          "The thing you are always pondering in your head. 💭",
          "It is a thought, my friend! ⚡",
          "Mental process happening in head."
        ]
      },
      {
        id: 14,
        question: "🫀 + 💓 + 🔊 = ?",
        options: ["Heartbeat", "Pulse", "Blood", "Sound"],
        correctAnswer: "Heartbeat",
        cleanAnswer: "Heartbeat",
        clues: [
          "The lubb-dubb rhythm you hear in your chest. 🫀",
          "The sound the doctor listens to with a stethoscope. 🔊",
          "It is a heartbeat, my friend! 💓",
          "Rhythmic contraction of the heart."
        ]
      },
      {
        id: 15,
        question: "🗣️ + 🎶 + 👂 = ?",
        options: ["Voice", "Song", "Whisper", "Noise"],
        correctAnswer: "Voice",
        cleanAnswer: "Voice",
        clues: [
          "The sound coming from your throat when you speak. 🗣️",
          "A unique sound that is different for every person. 🎶",
          "It is a voice, my friend! 👂",
          "Sound produced by vocal cords."
        ]
      },
      {
        id: 16,
        question: "🍲 + 🤤 + 🫄 = ?",
        options: ["Hunger", "Thirst", "Food", "Taste"],
        correctAnswer: "Hunger",
        cleanAnswer: "Hunger",
        clues: [
          "The feeling you get when your stomach is completely empty. 🫄",
          "The state that makes you want to eat. 🤤",
          "It is hunger, my friend! 🍲",
          "Physical desire for food."
        ]
      },
      {
        id: 17,
        question: "🥛 + 🏜️ + 🥵 = ?",
        options: ["Thirst", "Hunger", "Heat", "Water"],
        correctAnswer: "Thirst",
        cleanAnswer: "Thirst",
        clues: [
          "What you feel when your throat is dry and you need water. 🥛",
          "The condition you get after walking in the hot sun. 🏜️",
          "It is thirst, my friend! 🥵",
          "Need for drinking liquids."
        ]
      },
      {
        id: 18,
        question: "🥱 + 🥱 + 😴 = ?",
        options: ["Sleepiness", "Dream", "Boredom", "Rest"],
        correctAnswer: "Sleepiness",
        cleanAnswer: "Sleepiness",
        clues: [
          "When you open your mouth wide to yawn as your eyes close. 🥱",
          "Your mind telling you it is time for bed. 😴",
          "It is sleepiness, my friend! 🛏️",
          "Feeling of being ready to sleep."
        ]
      },
      {
        id: 19,
        question: "😗 + 🎶 + 🌬️ = ?",
        options: ["Whistle", "Voice", "Song", "Wind"],
        correctAnswer: "Whistle",
        cleanAnswer: "Whistle",
        clues: [
          "Making a sound by blowing air through puckered lips. 😗",
          "A tune you blow along with a song using your lips. 🎶",
          "It is a whistle, my friend! 🌬️",
          "High-pitched sound made through lips."
        ]
      },
      {
        id: 20,
        question: "🧠 + 💡 + ⚡ = ?",
        options: ["Idea", "Memory", "Thought", "Focus"],
        correctAnswer: "Idea",
        cleanAnswer: "Idea",
        clues: [
          "A great thought that suddenly lights up in your head. 💡",
          "A trick that comes to you to solve a problem. ⚡",
          "It is an idea, my friend! 🧠",
          "Sudden creative spark or solution."
        ]
      }
    ]
  },

  /* ================= GROUP 3: FORCES & PHYSICS ================= */
  {
    groupId: 3,
    groupName: "Natural Forces",
    groupConnection: ["forces", "physics", "nature", "elements"],
    riddles: [
      {
        id: 21,
        question: "🍃 + 💨 + 🌲 = ?",
        options: ["Wind", "Air", "Storm", "Dust"],
        correctAnswer: "Wind",
        cleanAnswer: "Wind",
        clues: [
          "You cannot see it, but it makes the trees move. 🍃",
          "Air running fast through the sky. 💨",
          "It is the wind, my friend! 🌲",
          "Air moving at speed."
        ]
      },
      {
        id: 22,
        question: "🍎 + ⬇️ + 🌍 = ?",
        options: ["Gravity", "Weight", "Fall", "Earth"],
        correctAnswer: "Gravity",
        cleanAnswer: "Gravity",
        clues: [
          "The force that pulls things down when you throw them up. 🍎",
          "The thing that Sir Isaac Newton discovered. 🌍",
          "It is gravity, my friend! ⬇️",
          "Universal downward pulling force."
        ]
      },
      {
        id: 23,
        question: "🏎️ + ⚡ + ⏱️ = ?",
        options: ["Speed", "Time", "Distance", "Force"],
        correctAnswer: "Speed",
        cleanAnswer: "Speed",
        clues: [
          "The measure of how fast you are going. 🏎️",
          "The measurement checked using kilometers per hour. ⏱️",
          "It is speed, my friend! ⚡",
          "Rate of motion or travel."
        ]
      },
      {
        id: 24,
        question: "🔥 + ✋ + 🧱 = ?",
        options: ["Friction", "Heat", "Fire", "Spark"],
        correctAnswer: "Friction",
        cleanAnswer: "Friction",
        clues: [
          "What creates heat when you rub your two hands together. ✋",
          "The material property that helps stop a vehicle when braking. 🧱",
          "It is friction, my friend! 🔥",
          "Resistance between two sliding surfaces."
        ]
      },
      {
        id: 25,
        question: "🎈 + 💥 + 🤏 = ?",
        options: ["Pressure", "Air", "Force", "Weight"],
        correctAnswer: "Pressure",
        cleanAnswer: "Pressure",
        clues: [
          "The reason a balloon pops if you overfill it. 🎈",
          "The force generated per unit area when you squeeze something. 🤏",
          "It is pressure, my friend! 💥",
          "Continuous physical force against an object."
        ]
      },
      {
        id: 26,
        question: "⚖️ + 🏋️ + ⬇️ = ?",
        options: ["Weight", "Mass", "Gravity", "Size"],
        correctAnswer: "Weight",
        cleanAnswer: "Weight",
        clues: [
          "The number shown when you step on a weighing scale. ⚖️",
          "The measurement given to us by gravity. 🏋️",
          "It is weight, my friend! ⬇️",
          "Measure of heavy force on an object."
        ]
      },
      {
        id: 27,
        question: "⚡ + 🔋 + 🔌 = ?",
        options: ["Energy", "Electricity", "Power", "Voltage"],
        correctAnswer: "Energy",
        cleanAnswer: "Energy",
        clues: [
          "The power required to do any work. 🔋",
          "The constant thing that can be converted into forty different forms. ⚡",
          "It is energy, my friend! 🔌",
          "Capacity for doing work."
        ]
      },
      {
        id: 28,
        question: "🌌 + 🕳️ + 🚫 = ?",
        options: ["Vacuum", "Space", "Nothing", "Darkness"],
        correctAnswer: "Vacuum",
        cleanAnswer: "Vacuum",
        clues: [
          "A place with absolutely no air and no sound. 🌌",
          "The complete emptiness found out in space. 🚫",
          "It is a vacuum, my friend! 🕳️",
          "Space entirely devoid of matter."
        ]
      },
      {
        id: 29,
        question: "🧘 + ⚖️ + 🧍 = ?",
        options: ["Balance", "Focus", "Peace", "Control"],
        correctAnswer: "Balance",
        cleanAnswer: "Balance",
        clues: [
          "The state of standing firm without falling over. 🧘",
          "Keeping both sides completely equal. ⚖️",
          "It is balance, my friend! 🧍",
          "State of remaining steady and upright."
        ]
      },
      {
        id: 30,
        question: "🌡️ + ☀️ + 🥵 = ?",
        options: ["Heat", "Fire", "Summer", "Sun"],
        correctAnswer: "Heat",
        cleanAnswer: "Heat",
        clues: [
          "The warmth rising when you stand in the sun or by a fire. ☀️",
          "The feeling you get when the temperature rises. 🥵",
          "It is heat, my friend! 🌡️",
          "Thermal energy flow."
        ]
      }
    ]
  },

  /* ================= GROUP 4: TIME & DURATION ================= */
  {
    groupId: 4,
    groupName: "Temporal Dimensions",
    groupConnection: ["time", "duration", "clock", "periods"],
    riddles: [
      {
        id: 31,
        question: "🌅 + 🔮 + ⏳ = ?",
        options: ["Tomorrow", "Yesterday", "Future", "Hope"],
        correctAnswer: "Tomorrow",
        cleanAnswer: "Tomorrow",
        clues: [
          "It is never here today, it will only arrive later. 🌅",
          "The expectation for the very next day. 🔮",
          "It is tomorrow, my friend! ⏳",
          "The day following today."
        ]
      },
      {
        id: 32,
        question: "🚀 + 🔮 + 🌌 = ?",
        options: ["Future", "Present", "Past", "Dream"],
        correctAnswer: "Future",
        cleanAnswer: "Future",
        clues: [
          "The time that is yet to come. 🔮",
          "The timeline that nobody can accurately predict. 🚀",
          "It is the future, my friend! 🌌",
          "Time that is yet to come."
        ]
      },
      {
        id: 33,
        question: "⚡ + ⏱️ + 🤏 = ?",
        options: ["Moment", "Second", "Minute", "Flash"],
        correctAnswer: "Moment",
        cleanAnswer: "Moment",
        clues: [
          "Gone in the blink of an eye. ⚡",
          "A very tiny measure of time. 🤏",
          "It is a moment, my friend! ⏱️",
          "A brief period of time."
        ]
      },
      {
        id: 34,
        question: "📜 + 🏛️ + ⏳ = ?",
        options: ["History", "Past", "Memory", "Story"],
        correctAnswer: "History",
        cleanAnswer: "History",
        clues: [
          "The records of events from the olden days. 📜",
          "The old stories you study in a textbook. 🏛️",
          "It is history, my friend! ⏳",
          "Study of past events."
        ]
      },
      {
        id: 35,
        question: "💯 + 📅 + ⏳ = ?",
        options: ["Century", "Decade", "Year", "Era"],
        correctAnswer: "Century",
        cleanAnswer: "Century",
        clues: [
          "A combination of one hundred years. 💯",
          "A period similar to scoring 100 runs in cricket. 📅",
          "It is a century, my friend! ⏳",
          "Period of one hundred years."
        ]
      },
      {
        id: 36,
        question: "⏸️ + ⏱️ + ☕ = ?",
        options: ["Pause", "Stop", "Rest", "Break"],
        correctAnswer: "Pause",
        cleanAnswer: "Pause",
        clues: [
          "Stopping an activity right in the middle of it. ⏸️",
          "The status when you press the button while playing a video. ☕",
          "It is a pause, my friend! ⏱️",
          "Temporary stop in action."
        ]
      },
      {
        id: 37,
        question: "⌛ + 🐢 + 🚦 = ?",
        options: ["Delay", "Traffic", "Wait", "Stop"],
        correctAnswer: "Delay",
        cleanAnswer: "Delay",
        clues: [
          "Not arriving at the expected time. 🐢",
          "The situation when a train is running late. 🚦",
          "It is a delay, my friend! ⌛",
          "Period of time spent waiting or lagging."
        ]
      },
      {
        id: 38,
        question: "🏁 + 🟢 + 🎬 = ?",
        options: ["Beginning", "End", "Start", "Birth"],
        correctAnswer: "Beginning",
        cleanAnswer: "Beginning",
        clues: [
          "The exact point where everything starts. 🟢",
          "The very first scene when a movie starts. 🎬",
          "It is the beginning, my friend! 🏁",
          "The point in time where something starts."
        ]
      },
      {
        id: 39,
        question: "🛑 + 🔴 + 🔚 = ?",
        options: ["End", "Beginning", "Finish", "Stop"],
        correctAnswer: "End",
        cleanAnswer: "End",
        clues: [
          "The place where the story finishes. 🛑",
          "When those final words pop up on the screen. 🔴",
          "It is the end, my friend! 🔚",
          "Final point of time or action."
        ]
      },
      {
        id: 40,
        question: "👶 + 👨 + 👴 = ?",
        options: ["Lifetime", "Age", "Growth", "Generation"],
        correctAnswer: "Lifetime",
        cleanAnswer: "Lifetime",
        clues: [
          "The period from birth all the way to death. 👶",
          "The total amount of time a human gets to live. 👴",
          "It is a lifetime, my friend! 👨",
          "Duration of a person's existence."
        ]
      }
    ]
  },

  /* ================= GROUP 5: PERCEPTION & ATMOSPHERE ================= */
  {
    groupId: 5,
    groupName: "Environmental Elements",
    groupConnection: ["atmosphere", "perception", "environment", "climate"],
    riddles: [
      {
        id: 41,
        question: "👀 + 🌅 + 🌌 = ?",
        options: ["Horizon", "Sky", "Sun", "Ocean"],
        correctAnswer: "Horizon",
        cleanAnswer: "Horizon",
        clues: [
          "The line where the sky and the earth seem to touch. 🌅",
          "The place across the ocean where it meets the sky. 👀",
          "It is the horizon, my friend! 🌌",
          "Apparent line where earth meets sky."
        ]
      },
      {
        id: 42,
        question: "🌑 + 🙈 + 🌌 = ?",
        options: ["Darkness", "Night", "Shadow", "Blindness"],
        correctAnswer: "Darkness",
        cleanAnswer: "Darkness",
        clues: [
          "A state completely devoid of light. 🌑",
          "What you see in pitch black when the power goes out. 🙈",
          "It is darkness, my friend! 🌌",
          "Total absence of light."
        ]
      },
      {
        id: 43,
        question: "🧊 + ❄️ + 🥶 = ?",
        options: ["Cold", "Ice", "Winter", "Frost"],
        correctAnswer: "Cold",
        cleanAnswer: "Cold",
        clues: [
          "The chill you find in snow or inside a fridge. 🧊",
          "The shivering feeling you get when there is no heat. 🥶",
          "It is cold, my friend! ❄️",
          "Low temperature state."
        ]
      },
      {
        id: 44,
        question: "🌊 + 🌙 + ⬆️ = ?",
        options: ["Tide", "Wave", "Ocean", "Current"],
        correctAnswer: "Tide",
        cleanAnswer: "Tide",
        clues: [
          "The ocean rising due to the moon's attraction. 🌙",
          "Water rising and falling against the shore. 🌊",
          "It is the tide, my friend! ⬆️",
          "Alternate rising and falling of sea."
        ]
      },
      {
        id: 45,
        question: "🏊 + 🌊 + ➡️ = ?",
        options: ["Current", "Tide", "Wave", "Stream"],
        correctAnswer: "Current",
        cleanAnswer: "Current",
        clues: [
          "A strong flow seen moving through the water. 🌊",
          "The force in the ocean that can sweep people away. 🏊",
          "It is a current, my friend! ➡️",
          "Flow of water moving in a definite direction."
        ]
      },
      {
        id: 46,
        question: "🌧️ + ☀️ + 🍂 = ?",
        options: ["Climate", "Weather", "Season", "Rain"],
        correctAnswer: "Climate",
        cleanAnswer: "Climate",
        clues: [
          "The long-term weather condition of a specific place. 🍂",
          "The state that is changing due to Global Warming. 🌧️",
          "It is the climate, my friend! ☀️",
          "Long term pattern of weather."
        ]
      },
      {
        id: 47,
        question: "🌸 + ☀️ + ❄️ = ?",
        options: ["Season", "Year", "Weather", "Time"],
        correctAnswer: "Season",
        cleanAnswer: "Season",
        clues: [
          "The changing times as months pass by, like Summer or Winter. 🌸",
          "The weather pattern that changes multiple times a year. ☀️",
          "It is a season, my friend! ❄️",
          "Divisions of the year based on weather."
        ]
      },
      {
        id: 48,
        question: "☁️ + 🌌 + 🌬️ = ?",
        options: ["Atmosphere", "Sky", "Space", "Wind"],
        correctAnswer: "Atmosphere",
        cleanAnswer: "Atmosphere",
        clues: [
          "The layer of air surrounding the earth. ☁️",
          "The space containing the oxygen we need to breathe. 🌌",
          "It is the atmosphere, my friend! 🌬️",
          "Envelope of gases surrounding planet."
        ]
      },
      {
        id: 49,
        question: "☀️ + 🌙 + 🌑 = ?",
        options: ["Eclipse", "Shadow", "Night", "Space"],
        correctAnswer: "Eclipse",
        cleanAnswer: "Eclipse",
        clues: [
          "The event where the sun or moon is hidden in shadow. ☀️",
          "A phenomenon where celestial bodies block each other's light. 🌑",
          "It is an eclipse, my friend! 🌙",
          "Obscuration of light from celestial body."
        ]
      },
      {
        id: 50,
        question: "🌧️ + 💧 + ☀️ = ?",
        options: ["Humidity", "Sweat", "Rain", "Mist"],
        correctAnswer: "Humidity",
        cleanAnswer: "Humidity",
        clues: [
          "When there is a high amount of water content in the air. 💧",
          "The reason you sweat so much in tropical places. ☀️",
          "It is humidity, my friend! 🌧️",
          "Amount of water vapor in air."
        ]
      }
    ]
  },

  /* ================= GROUP 6: EMOTIONS & INTERNAL STATES ================= */
  {
    groupId: 6,
    groupName: "Emotions & Mind",
    groupConnection: ["emotions", "feelings", "mind", "sentiments"],
    riddles: [
      {
        id: 51,
        question: "🌈 + 💭 + ✨ = ?",
        options: ["Hope", "Dream", "Wish", "Love"],
        correctAnswer: "Hope",
        cleanAnswer: "Hope",
        clues: [
          "The belief that something good is going to happen. 🌈",
          "The feeling of seeing light in the darkness. ✨",
          "It is hope, my friend! 💭",
          "Feeling of expectation for a good outcome."
        ]
      },
      {
        id: 52,
        question: "😱 + 👻 + 🖤 = ?",
        options: ["Fear", "Shock", "Darkness", "Anger"],
        correctAnswer: "Fear",
        cleanAnswer: "Fear",
        clues: [
          "The state where your heart pounds when seeing a ghost. 😱",
          "The feeling you get standing all alone in the dark. 🖤",
          "It is fear, my friend! 👻",
          "Emotion induced by perceived danger."
        ]
      },
      {
        id: 53,
        question: "😡 + 🔥 + 💥 = ?",
        options: ["Anger", "Heat", "Pain", "Spite"],
        correctAnswer: "Anger",
        cleanAnswer: "Anger",
        clues: [
          "The mood where your face turns red and hot. 😡",
          "Pure wrath and fury. 🔥",
          "It is anger, my friend! 💥",
          "Strong feeling of annoyance or hostility."
        ]
      },
      {
        id: 54,
        question: "🦁 + 🛡️ + ⚔️ = ?",
        options: ["Courage", "Power", "Fight", "Win"],
        correctAnswer: "Courage",
        cleanAnswer: "Courage",
        clues: [
          "The bravery inside you to face your fears. 🦁",
          "The power that motivates you to take a risk. ⚔️",
          "It is courage, my friend! 🛡️",
          "Ability to do something that frightens one."
        ]
      },
      {
        id: 55,
        question: "⏳ + 🧘 + 🕊️ = ?",
        options: ["Patience", "Peace", "Wait", "Silence"],
        correctAnswer: "Patience",
        cleanAnswer: "Patience",
        clues: [
          "Finding peace in waiting for something. 🧘",
          "The ability to hold back your anger. 🕊️",
          "It is patience, my friend! ⏳",
          "Capacity to accept delay without getting angry."
        ]
      },
      {
        id: 56,
        question: "❓ + 🔍 + 🧠 = ?",
        options: ["Curiosity", "Doubt", "Search", "Question"],
        correctAnswer: "Curiosity",
        cleanAnswer: "Curiosity",
        clues: [
          "A strong desire to know more. 🔍",
          "The inquisitive thoughts you always see in children. ❓",
          "It is curiosity, my friend! 🧠",
          "Strong desire to know or learn something."
        ]
      },
      {
        id: 57,
        question: "🐅 + ⚡ + 🧠 = ?",
        options: ["Instinct", "Focus", "Skill", "Reflex"],
        correctAnswer: "Instinct",
        cleanAnswer: "Instinct",
        clues: [
          "A sudden response coming from within without learning it. 🐅",
          "The natural defensive ability animals feel in danger. ⚡",
          "It is instinct, my friend! 🧠",
          "Innate, fixed pattern of behavior."
        ]
      },
      {
        id: 58,
        question: "😔 + 💔 + ⚖️ = ?",
        options: ["Guilt", "Sadness", "Regret", "Pain"],
        correctAnswer: "Guilt",
        cleanAnswer: "Guilt",
        clues: [
          "The heavy feeling inside after making a mistake. 😔",
          "The sharp sting of your conscience. 💔",
          "It is guilt, my friend! ⚖️",
          "Feeling of having done something wrong."
        ]
      },
      {
        id: 59,
        question: "🦚 + 👑 + ✨ = ?",
        options: ["Pride", "Ego", "Joy", "Beauty"],
        correctAnswer: "Pride",
        cleanAnswer: "Pride",
        clues: [
          "The satisfaction you feel in your own achievements. 👑",
          "A feeling inside that spreads like peacock feathers. 🦚",
          "It is pride, my friend! ✨",
          "Feeling of pleasure from one's achievements."
        ]
      },
      {
        id: 60,
        question: "👀 + 😒 + 🐍 = ?",
        options: ["Jealousy", "Anger", "Hate", "Envy"],
        correctAnswer: "Jealousy",
        cleanAnswer: "Jealousy",
        clues: [
          "The bitterness you feel when others succeed. 😒",
          "The green-eyed feeling. 👀",
          "It is jealousy, my friend! 🐍",
          "Envious feeling towards someone's success."
        ]
      }
    ]
  },

  /* ================= GROUP 7: SOCIAL & TRUTH ================= */
  {
    groupId: 7,
    groupName: "Language & Truth",
    groupConnection: ["social", "truth", "language", "communication"],
    riddles: [
      {
        id: 61,
        question: "💎 + ☀️ + 🗣️ = ?",
        options: ["Truth", "Lie", "Fact", "Word"],
        correctAnswer: "Truth",
        cleanAnswer: "Truth",
        clues: [
          "The thing that always comes to light, even if hidden. 💎",
          "The reality told without any deception. ☀️",
          "It is the truth, my friend! 🗣️",
          "State of being in accordance with fact."
        ]
      },
      {
        id: 62,
        question: "🎭 + 🤥 + 🗣️ = ?",
        options: ["Lie", "Truth", "Joke", "Story"],
        correctAnswer: "Lie",
        cleanAnswer: "Lie",
        clues: [
          "The thing that makes Pinocchio's nose grow. 🤥",
          "A topic spoken that is not real. 🎭",
          "It is a lie, my friend! 🗣️",
          "Intentionally false statement."
        ]
      },
      {
        id: 63,
        question: "🗣️ + 👂 + 🤫 = ?",
        options: ["Gossip", "Secret", "News", "Noise"],
        correctAnswer: "Gossip",
        cleanAnswer: "Gossip",
        clues: [
          "Chattering casually about other people. 🗣️",
          "Stories flying around among the locals. 👂",
          "It is gossip, my friend! 🤫",
          "Casual conversation about other people."
        ]
      },
      {
        id: 64,
        question: "🏆 + 👥 + 🌟 = ?",
        options: ["Reputation", "Name", "Fame", "Status"],
        correctAnswer: "Reputation",
        cleanAnswer: "Reputation",
        clues: [
          "Your good standing in society. 🏆",
          "Takes years to build, but only seconds to lose. 🌟",
          "It is your reputation, my friend! 👥",
          "Beliefs or opinions held about someone."
        ]
      },
      {
        id: 65,
        question: "🤝 + 🔒 + 💖 = ?",
        options: ["Trust", "Friendship", "Love", "Promise"],
        correctAnswer: "Trust",
        cleanAnswer: "Trust",
        clues: [
          "A belief that never fades away. 🤝",
          "A bond that is very hard to earn back once broken. 🔒",
          "It is trust, my friend! 💖",
          "Firm belief in reliability of someone."
        ]
      },
      {
        id: 66,
        question: "👫 + 💖 + ☕ = ?",
        options: ["Friendship", "Love", "Bond", "Trust"],
        correctAnswer: "Friendship",
        cleanAnswer: "Friendship",
        clues: [
          "The bond of affection between buddies. 👫",
          "A relationship that grows at the tea shop. ☕",
          "It is friendship, my friend! 💖",
          "Relationship of mutual affection."
        ]
      },
      {
        id: 67,
        question: "🔤 + 🗣️ + 📄 = ?",
        options: ["Word", "Letter", "Name", "Sentence"],
        correctAnswer: "Word",
        cleanAnswer: "Word",
        clues: [
          "Formed by joining letters together. 🔤",
          "What comes out when you speak. 🗣️",
          "It is a word, my friend! 📄",
          "Single distinct meaningful element of speech."
        ]
      },
      {
        id: 68,
        question: "❓ + 🧩 + 🧠 = ?",
        options: ["Riddle", "Secret", "Puzzle", "Question"],
        correctAnswer: "Riddle",
        cleanAnswer: "Riddle",
        clues: [
          "The very item you are playing with right now. ❓",
          "A question designed to test your brain and thinking. 🧩",
          "It is a riddle, my friend! 🧠",
          "Question phrased as a puzzle to be solved."
        ]
      },
      {
        id: 69,
        question: "📖 + 💭 + 🎬 = ?",
        options: ["Story", "Book", "Movie", "Dream"],
        correctAnswer: "Story",
        cleanAnswer: "Story",
        clues: [
          "An entertaining tale told by your grandmother. 📖",
          "A narrative with a beginning and an end. 🎬",
          "It is a story, my friend! 💭",
          "Account of imaginary or real people and events."
        ]
      },
      {
        id: 70,
        question: "🗣️ + 💬 + 🌐 = ?",
        options: ["Language", "Voice", "Word", "Speech"],
        correctAnswer: "Language",
        cleanAnswer: "Language",
        clues: [
          "A medium of speech, like Malayalam or English. 🗣️",
          "The method used to exchange ideas. 🌐",
          "It is language, my friend! 💬",
          "System of communication used by a nation."
        ]
      }
    ]
  },

  /* ================= GROUP 8: LIFE CHOICES & DESTINY ================= */
  {
    groupId: 8,
    groupName: "Choices & Destiny",
    groupConnection: ["life", "choices", "destiny", "fate"],
    riddles: [
      {
        id: 71,
        question: "🚪 + 🔑 + ✨ = ?",
        options: ["Opportunity", "Luck", "Future", "Door"],
        correctAnswer: "Opportunity",
        cleanAnswer: "Opportunity",
        clues: [
          "The door in life that only knocks once. 🚪",
          "A great chance given to you to grow. 🔑",
          "It is an opportunity, my friend! ✨",
          "Set of circumstances that makes it possible to do something."
        ]
      },
      {
        id: 72,
        question: "🤔 + 🔀 + ⚖️ = ?",
        options: ["Decision", "Choice", "Thought", "Action"],
        correctAnswer: "Decision",
        cleanAnswer: "Decision",
        clues: [
          "A firm resolution made after deep thought. 🤔",
          "Determining exactly which path you want to take. 🔀",
          "It is a decision, my friend! ⚖️",
          "Conclusion or resolution reached after consideration."
        ]
      },
      {
        id: 73,
        question: "❌ + 🤦 + 📚 = ?",
        options: ["Mistake", "Regret", "Failing", "Lesson"],
        correctAnswer: "Mistake",
        cleanAnswer: "Mistake",
        clues: [
          "The wrong actions that ultimately help you learn. ❌",
          "An error that slipped out. 🤦",
          "It is a mistake, my friend! 📚",
          "Action or judgment that is misguided or wrong."
        ]
      },
      {
        id: 74,
        question: "🔮 + 📜 + 🌌 = ?",
        options: ["Fate", "Luck", "Future", "Life"],
        correctAnswer: "Fate",
        cleanAnswer: "Fate",
        clues: [
          "The predetermined script supposedly written on your head. 🔮",
          "A timeline script that cannot be altered. 📜",
          "It is fate, my friend! 🌌",
          "Development of events beyond a person's control."
        ]
      },
      {
        id: 75,
        question: "🎲 + 🍀 + ✨ = ?",
        options: ["Luck", "Fate", "Game", "Chance"],
        correctAnswer: "Luck",
        cleanAnswer: "Luck",
        clues: [
          "When things happen surprisingly better than expected. 🎲",
          "The fortune brought by a four-leaf clover. 🍀",
          "It is luck, my friend! ✨",
          "Success or failure brought by chance."
        ]
      },
      {
        id: 76,
        question: "🕊️ + 🔓 + 🌌 = ?",
        options: ["Freedom", "Peace", "Flight", "Choice"],
        correctAnswer: "Freedom",
        cleanAnswer: "Freedom",
        clues: [
          "The ability to live independently without being a slave to anyone. 🕊️",
          "The state of stepping out of a cage. 🔓",
          "It is freedom, my friend! 🌌",
          "Power or right to act, speak, or think as one wants."
        ]
      },
      {
        id: 77,
        question: "⚖️ + 🏛️ + 🔨 = ?",
        options: ["Justice", "Law", "Truth", "Right"],
        correctAnswer: "Justice",
        cleanAnswer: "Justice",
        clues: [
          "The fairness that must be given to truth. ⚖️",
          "The righteousness you receive from a court. 🏛️",
          "It is justice, my friend! 🔨",
          "Just behavior or treatment."
        ]
      },
      {
        id: 78,
        question: "🕊️ + 🌿 + 🧘 = ?",
        options: ["Peace", "Silence", "Freedom", "Calm"],
        correctAnswer: "Peace",
        cleanAnswer: "Peace",
        clues: [
          "A wonderful state without wars or problems. 🕊️",
          "The calmness that settles in your mind. 🧘",
          "It is peace, my friend! 🌿",
          "Freedom from disturbance or war."
        ]
      },
      {
        id: 79,
        question: "💥 + 🌪️ + 🤼 = ?",
        options: ["Chaos", "Noise", "War", "Anger"],
        correctAnswer: "Chaos",
        cleanAnswer: "Chaos",
        clues: [
          "A confusing mess where nothing is really under control. 🌪️",
          "A state lacking any order entirely. 💥",
          "It is chaos, my friend! 🤼",
          "Complete disorder and confusion."
        ]
      },
      {
        id: 80,
        question: "🎶 + ☯️ + 🕊️ = ?",
        options: ["Harmony", "Music", "Peace", "Balance"],
        correctAnswer: "Harmony",
        cleanAnswer: "Harmony",
        clues: [
          "The rhythm where everything flows together perfectly. 🎶",
          "What we call an exchange in perfect sync. ☯️",
          "It is harmony, my friend! 🕊️",
          "State of peaceful agreement and concord."
        ]
      }
    ]
  },

  /* ================= GROUP 9: PERCEPTION & SENSES ================= */
  {
    groupId: 9,
    groupName: "Senses & Illusions",
    groupConnection: ["senses", "perception", "illusions", "awareness"],
    riddles: [
      {
        id: 81,
        question: "👃 + 🌹 + 💨 = ?",
        options: ["Smell", "Taste", "Air", "Flower"],
        correctAnswer: "Smell",
        cleanAnswer: "Smell",
        clues: [
          "The good and bad scents you sense with your nose. 👃",
          "The thing you perceive when you get close to a flower. 🌹",
          "It is smell, my friend! 💨",
          "Faculty of perceiving odors."
        ]
      },
      {
        id: 82,
        question: "👅 + 🍬 + 🌶️ = ?",
        options: ["Taste", "Smell", "Food", "Spicy"],
        correctAnswer: "Taste",
        cleanAnswer: "Taste",
        clues: [
          "The sweetness and spiciness you sense with your tongue. 👅",
          "The flavor you get when eating food. 🍬",
          "It is taste, my friend! 🌶️",
          "Sensation of flavor perceived in mouth."
        ]
      },
      {
        id: 83,
        question: "✋ + 🌵 + 🪨 = ?",
        options: ["Touch", "Pain", "Feel", "Sight"],
        correctAnswer: "Touch",
        cleanAnswer: "Touch",
        clues: [
          "The contact you feel when your hand meets something. ✋",
          "The sensory experience that helps you tell hot from cold. 🌵",
          "It is touch, my friend! 🪨",
          "Sense of physical contact."
        ]
      },
      {
        id: 84,
        question: "👁️ + 🌈 + ☀️ = ?",
        options: ["Sight", "Vision", "Eye", "Light"],
        correctAnswer: "Sight",
        cleanAnswer: "Sight",
        clues: [
          "The view you get when you open your eyes. 👁️",
          "Seeing various colors in the light. 🌈",
          "It is sight, my friend! ☀️",
          "Faculty or power of seeing."
        ]
      },
      {
        id: 85,
        question: "🌀 + 👁️ + 😵 = ?",
        options: ["Illusion", "Dream", "Magic", "Mistake"],
        correctAnswer: "Illusion",
        cleanAnswer: "Illusion",
        clues: [
          "A trick that feels like the truth. 🌀",
          "A visual trick that deceives your eyes. 👁️",
          "It is an illusion, my friend! 😵",
          "False impression or deceptive appearance."
        ]
      },
      {
        id: 86,
        question: "🏜️ + 💧 + ☀️ = ?",
        options: ["Mirage", "Water", "Heat", "Desert"],
        correctAnswer: "Mirage",
        cleanAnswer: "Mirage",
        clues: [
          "The sight that makes you think there is water in the desert. 🏜️",
          "The feeling of seeing water on the road due to heat. ☀️",
          "It is a mirage, my friend! 💧",
          "Optical illusion caused by atmospheric conditions."
        ]
      },
      {
        id: 87,
        question: "🕳️ + 📏 + ⬇️ = ?",
        options: ["Depth", "Height", "Length", "Width"],
        correctAnswer: "Depth",
        cleanAnswer: "Depth",
        clues: [
          "The measurement going down into a well. 🕳️",
          "The distance checked to see how far down the ocean goes. ⬇️",
          "It is depth, my friend! 📏",
          "Distance from top to bottom."
        ]
      },
      {
        id: 88,
        question: "🏔️ + 📏 + ⬆️ = ?",
        options: ["Height", "Depth", "Length", "Size"],
        correctAnswer: "Height",
        cleanAnswer: "Height",
        clues: [
          "The measurement going upwards for mountains or people. 🏔️",
          "Checking how tall something is. ⬆️",
          "It is height, my friend! 📏",
          "Measurement from base to top."
        ]
      },
      {
        id: 89,
        question: "🛣️ + 🚗 + 📍 = ?",
        options: ["Distance", "Speed", "Time", "Path"],
        correctAnswer: "Distance",
        cleanAnswer: "Distance",
        clues: [
          "The length of space between two locations. 🛣️",
          "The gap measured in kilometers. 📍",
          "It is distance, my friend! 🚗",
          "Amount of space between two points."
        ]
      },
      {
        id: 90,
        question: "🧱 + ✋ + 🧶 = ?",
        options: ["Texture", "Feeling", "Touch", "Shape"],
        correctAnswer: "Texture",
        cleanAnswer: "Texture",
        clues: [
          "The surface quality you feel when touching something rough or smooth. 🧱",
          "The surface feel that gives character to a rock or a thread. 🧶",
          "It is texture, my friend! ✋",
          "Feel, appearance, or consistency of a surface."
        ]
      }
    ]
  },

  /* ================= GROUP 10: LOGIC & QUANTITIES ================= */
  {
    groupId: 10,
    groupName: "Patterns & Logic",
    groupConnection: ["logic", "quantities", "math", "patterns"],
    riddles: [
      {
        id: 91,
        question: "0️⃣ + 🚫 + 🕳️ = ?",
        options: ["Zero", "Nothing", "Number", "Empty"],
        correctAnswer: "Zero",
        cleanAnswer: "Zero",
        clues: [
          "The great numeric value discovered by Aryabhata. 0️⃣",
          "The number that represents having nothing at all. 🚫",
          "It is zero, my friend! 🕳️",
          "Numerical digit representing nothing."
        ]
      },
      {
        id: 92,
        question: "♾️ + 🌌 + 🔄 = ?",
        options: ["Infinity", "Space", "Time", "Number"],
        correctAnswer: "Infinity",
        cleanAnswer: "Infinity",
        clues: [
          "An amount that has no end. ♾️",
          "The symbol that looks like an 8 turned sideways. 🔄",
          "It is infinity, my friend! 🌌",
          "State of being limitless or boundless."
        ]
      },
      {
        id: 93,
        question: "🇱🇧 + 🔲 + 🔺 = ?",
        options: ["Pattern", "Shape", "Design", "Order"],
        correctAnswer: "Pattern",
        cleanAnswer: "Pattern",
        clues: [
          "A repeating model of shapes or beads. 🔲",
          "A design that follows a repeating method. 🔺",
          "It is a pattern, my friend! 🇱🇧",
          "Repeated decorative or logical design."
        ]
      },
      {
        id: 94,
        question: "🥁 + 🕺 + ⏱️ = ?",
        options: ["Rhythm", "Music", "Dance", "Beat"],
        correctAnswer: "Rhythm",
        cleanAnswer: "Rhythm",
        clues: [
          "The beat of the percussion and the song. 🥁",
          "The patterned flow you see when playing a drum. 🕺",
          "It is rhythm, my friend! ⏱️",
          "Strong, regular, repeated movement or sound."
        ]
      },
      {
        id: 95,
        question: "🦋 + 🪞 + ⚖️ = ?",
        options: ["Symmetry", "Balance", "Reflection", "Shape"],
        correctAnswer: "Symmetry",
        cleanAnswer: "Symmetry",
        clues: [
          "Perfect equality facing each other on both sides. 🦋",
          "A shape that matches exactly on both sides, like in a mirror. ⚖️",
          "It is symmetry, my friend! 🪞",
          "Quality of being made of exactly similar parts."
        ]
      },
      {
        id: 96,
        question: "➕ + ➖ + 🟰 = ?",
        options: ["Equation", "Math", "Number", "Logic"],
        correctAnswer: "Equation",
        cleanAnswer: "Equation",
        clues: [
          "A mathematical sentence equating two sides. 🟰",
          "The setup where plus and minus signs are put together. ➕",
          "It is an equation, my friend! ➖",
          "Statement that the value of two expressions are equal."
        ]
      },
      {
        id: 97,
        question: "🍕 + 📐 + 🔢 = ?",
        options: ["Ratio", "Fraction", "Part", "Size"],
        correctAnswer: "Ratio",
        cleanAnswer: "Ratio",
        clues: [
          "The proportion between two numbers (e.g., 2:1). 🍕",
          "The proportional measure used for mixing. 🔢",
          "It is a ratio, my friend! 📐",
          "Quantitative relation between two amounts."
        ]
      },
      {
        id: 98,
        question: "🎲 + 🎯 + 📈 = ?",
        options: ["Odds", "Chance", "Luck", "Risk"],
        correctAnswer: "Odds",
        cleanAnswer: "Odds",
        clues: [
          "The measurement of the probability of winning. 🎲",
          "The probability you see on a betting site. 📈",
          "It is the odds, my friend! 🎯",
          "Ratio of probability of event happening."
        ]
      },
      {
        id: 99,
        question: "📊 + ➕ + ➗ = ?",
        options: ["Average", "Total", "Number", "Middle"],
        correctAnswer: "Average",
        cleanAnswer: "Average",
        clues: [
          "The mean obtained by adding everything and dividing by the count. 📊",
          "The standard measurement seen on a mark list. ➗",
          "It is an average, my friend! ➕",
          "Result obtained by adding quantities together and dividing."
        ]
      },
      {
        id: 100,
        question: "🔀 + ➖ + 🔍 = ?",
        options: ["Difference", "Change", "Contrast", "Gap"],
        correctAnswer: "Difference",
        cleanAnswer: "Difference",
        clues: [
          "The variation between two things. ➖",
          "The answer you get when you subtract. 🔀",
          "It is the difference, my friend! 🔍",
          "Point or way in which things are not the same."
        ]
      }
    ]
  },

  /* ================= GROUP 11: DYNAMICS & MOTION ================= */
  {
    groupId: 11,
    groupName: "Physics of Motion",
    groupConnection: ["motion", "physics", "dynamics", "movement"],
    riddles: [
      {
        id: 101,
        question: "📳 + 🔔 + 🔊 = ?",
        options: ["Vibration", "Sound", "Wave", "Frequency"],
        correctAnswer: "Vibration",
        cleanAnswer: "Vibration",
        clues: [
          "The shaking you see when your phone rings. 📳",
          "The movements that create sound when plucking a string. 🔔",
          "It is a vibration, my friend! 🔊",
          "Rapid oscillation back and forth."
        ]
      },
      {
        id: 102,
        question: "🎸 + 🔊 + 🌊 = ?",
        options: ["Resonance", "Tone", "Echo", "Sound"],
        correctAnswer: "Resonance",
        cleanAnswer: "Resonance",
        clues: [
          "A phenomenon where one sound makes another vibrate. 🎸",
          "The way sound amplifies inside a guitar body. 🔊",
          "It is resonance, my friend! 🌊",
          "Reinforcement of sound by reflection."
        ]
      },
      {
        id: 103,
        question: "📻 + 📡 + 〰️ = ?",
        options: ["Frequency", "Signal", "Wave", "Radio"],
        correctAnswer: "Frequency",
        cleanAnswer: "Frequency",
        clues: [
          "The Hertz measure set for FM Radio (like 93.5 FM). 📻",
          "The wave counts in one single second. 〰️",
          "It is frequency, my friend! 📡",
          "Rate at which a vibration occurs."
        ]
      },
      {
        id: 104,
        question: "🏃 + 🚲 + 🏃‍♂️ = ?",
        options: ["Motion", "Speed", "Run", "Walk"],
        correctAnswer: "Motion",
        cleanAnswer: "Motion",
        clues: [
          "The state of moving continuously without stopping. 🏃",
          "The physical activity we call movement. 🚲",
          "It is motion, my friend! 🏃‍♂️",
          "Action or process of moving."
        ]
      },
      {
        id: 105,
        question: "🛋️ + 🛑 + 😴 = ?",
        options: ["Inertia", "Rest", "Sleep", "Stop"],
        correctAnswer: "Inertia",
        cleanAnswer: "Inertia",
        clues: [
          "The laziness to suddenly change from a sitting position. 🛋️",
          "The reason you get pushed forward when the bus brakes. 🛑",
          "It is inertia, my friend! 😴",
          "Tendency to remain unchanged or motionless."
        ]
      },
      {
        id: 106,
        question: "🚀 + 🏎️ + 📈 = ?",
        options: ["Acceleration", "Speed", "Force", "Drive"],
        correctAnswer: "Acceleration",
        cleanAnswer: "Acceleration",
        clues: [
          "What happens when you press the accelerator in a car. 🏎️",
          "The rate of change when your speed keeps increasing. 🚀",
          "It is acceleration, my friend! 📈",
          "Increase in the rate or speed of something."
        ]
      },
      {
        id: 107,
        question: "🌀 + ⚽ + 🔄 = ?",
        options: ["Spin", "Turn", "Circle", "Roll"],
        correctAnswer: "Spin",
        cleanAnswer: "Spin",
        clues: [
          "The way a ball moves while rotating. 🌀",
          "Like a leg spin or an off spin throw. ⚽",
          "It is a spin, my friend! 🔄",
          "Rapid turning movement."
        ]
      },
      {
        id: 108,
        question: "🛏️ + 🧘 + 😴 = ?",
        options: ["Rest", "Sleep", "Peace", "Pause"],
        correctAnswer: "Rest",
        cleanAnswer: "Rest",
        clues: [
          "The relaxation you give your body after work. 🛏️",
          "Lying down for a little while without sleeping. 🧘",
          "It is rest, my friend! 😴",
          "Cease work or movement in order to relax."
        ]
      },
      {
        id: 109,
        question: "💥 + 🌪️ + 🤼 = ?",
        options: ["Chaos", "Noise", "Confusion", "Disorder"],
        correctAnswer: "Chaos",
        cleanAnswer: "Chaos",
        clues: [
          "A complete breakdown with absolutely no system. 💥",
          "A state devoid of sequence or arrangement. 🌪️",
          "It is chaos, my friend! 🤼",
          "Complete disorder and confusion."
        ]
      },
      {
        id: 110,
        question: "📚 + 📐 + 🧹 = ?",
        options: ["Order", "System", "Logic", "Cleanliness"],
        correctAnswer: "Order",
        cleanAnswer: "Order",
        clues: [
          "The method of putting everything exactly in its proper place. 📚",
          "A state of sequence and discipline. 📐",
          "It is order, my friend! 🧹",
          "Arrangement of people or things in sequence."
        ]
      }
    ]
  },

  /* ================= GROUP 12: KNOWLEDGE & LEARNING ================= */
  {
    groupId: 12,
    groupName: "Intellect & Learning",
    groupConnection: ["knowledge", "learning", "intellect", "wisdom"],
    riddles: [
      {
        id: 111,
        question: "👴 + 📚 + 💡 = ?",
        options: ["Wisdom", "Knowledge", "Age", "Thought"],
        correctAnswer: "Wisdom",
        cleanAnswer: "Wisdom",
        clues: [
          "The good judgment you get from life experiences. 👴",
          "The profound depth in the thoughts of the elderly. 💡",
          "It is wisdom, my friend! 📚",
          "Quality of having experience and good judgment."
        ]
      },
      {
        id: 112,
        question: "📖 + 🧠 + 🎒 = ?",
        options: ["Knowledge", "Study", "Brain", "Book"],
        correctAnswer: "Knowledge",
        cleanAnswer: "Knowledge",
        clues: [
          "The insight you gain through reading. 📖",
          "The great wealth you acquire from school. 🎒",
          "It is knowledge, my friend! 🧠",
          "Facts, information, and skills acquired."
        ]
      },
      {
        id: 113,
        question: "⏳ + 🛠️ + 👴 = ?",
        options: ["Experience", "Skill", "Work", "Age"],
        correctAnswer: "Experience",
        cleanAnswer: "Experience",
        clues: [
          "The capability earned by working a job for many years. 🛠️",
          "The lessons given to you by the time that has passed. ⏳",
          "It is experience, my friend! 👴",
          "Practical contact with and observation of facts."
        ]
      },
      {
        id: 114,
        question: "🎯 + 🎨 + 🎸 = ?",
        options: ["Skill", "Talent", "Art", "Focus"],
        correctAnswer: "Skill",
        cleanAnswer: "Skill",
        clues: [
          "The proficiency you achieve through practice. 🎨",
          "The ability to do a specific thing very well. 🎯",
          "It is skill, my friend! 🎸",
          "Ability to do something well."
        ]
      },
      {
        id: 115,
        question: "🧘 + 🎯 + 🔍 = ?",
        options: ["Focus", "Attention", "Mind", "Sight"],
        correctAnswer: "Focus",
        cleanAnswer: "Focus",
        clues: [
          "Centering your mind purely on one single thing. 🧘",
          "The state of keeping your attention strictly on the goal. 🎯",
          "It is focus, my friend! 🔍",
          "Center of interest or activity."
        ]
      },
      {
        id: 116,
        question: "👀 + 👂 + ⚠️ = ?",
        options: ["Attention", "Focus", "Care", "Listen"],
        correctAnswer: "Attention",
        cleanAnswer: "Attention",
        clues: [
          "What you have to give when the teacher is speaking in class. 👀",
          "Giving your careful notice to something. ⚠️",
          "It is attention, my friend! 👂",
          "Notice taken of someone or something."
        ]
      },
      {
        id: 117,
        question: "🙈 + 🚫 + 🧠 = ?",
        options: ["Ignorance", "Darkness", "Blindness", "Folly"],
        correctAnswer: "Ignorance",
        cleanAnswer: "Ignorance",
        clues: [
          "The state of not knowing anything. 🙈",
          "A complete lack of awareness regarding facts. 🚫",
          "It is ignorance, my friend! 🧠",
          "Lack of knowledge or information."
        ]
      },
      {
        id: 118,
        question: "🤔 + ❓ + ⚖️ = ?",
        options: ["Doubt", "Fear", "Question", "Thought"],
        correctAnswer: "Doubt",
        cleanAnswer: "Doubt",
        clues: [
          "The state of being unsure. 🤔",
          "The questioning feeling that arises in your mind. ❓",
          "It is doubt, my friend! ⚖️",
          "Feeling of uncertainty or lack of conviction."
        ]
      },
      {
        id: 119,
        question: "Urpp + 🔒 + 💯 = ?",
        options: ["Certainty", "Truth", "Proof", "Belief"],
        correctAnswer: "Certainty",
        cleanAnswer: "Certainty",
        clues: [
          "A state of being one hundred percent sure. 💯",
          "A condition completely free of doubt. 🔒",
          "It is certainty, my friend! ✨",
          "Firm conviction that something is the case."
        ]
      },
      {
        id: 120,
        question: "🗺️ + 💡 + 🔍 = ?",
        options: ["Discovery", "Search", "Invention", "Truth"],
        correctAnswer: "Discovery",
        cleanAnswer: "Discovery",
        clues: [
          "Finding something that was already there but unknown to everyone. 🗺️",
          "Like how Columbus found America. 🔍",
          "It is a discovery, my friend! 💡",
          "Act of finding something unexpectedly."
        ]
      }
    ]
  },

  /* ================= GROUP 13: SOUNDSCAPE ================= */
  {
    groupId: 13,
    groupName: "Auditory World",
    groupConnection: ["sound", "auditory", "noise", "acoustics"],
    riddles: [
      {
        id: 121,
        question: "🔊 + 📢 + 💥 = ?",
        options: ["Noise", "Sound", "Voice", "Echo"],
        correctAnswer: "Noise",
        cleanAnswer: "Noise",
        clues: [
          "The annoying racket you just do not want to hear. 📢",
          "The loud sounds rising from traffic. 💥",
          "It is noise, my friend! 🔊",
          "Sound, especially one that is loud or unpleasant."
        ]
      },
      {
        id: 122,
        question: "🤫 + 👂 + 🌬️ = ?",
        options: ["Whisper", "Voice", "Silence", "Secret"],
        correctAnswer: "Whisper",
        cleanAnswer: "Whisper",
        clues: [
          "The soft sound spoken directly into an ear. 🤫",
          "Talking while barely moving your lips. 👂",
          "It is a whisper, my friend! 🌬️",
          "Speaking softly using breath rather than vocal cords."
        ]
      },
      {
        id: 123,
        question: "🐝 + 🔊 + 🪰 = ?",
        options: ["Hum", "Buzz", "Voice", "Song"],
        correctAnswer: "Hum",
        cleanAnswer: "Hum",
        clues: [
          "A continuous sound like a drone. 🐝",
          "The low sound created by motors and flies. 🪰",
          "It is a hum, my friend! 🔊",
          "Low, continuous humming sound."
        ]
      },
      {
        id: 124,
        question: "📺 + 📻 + ⚡ = ?",
        options: ["Static", "Noise", "Signal", "Wave"],
        correctAnswer: "Static",
        cleanAnswer: "Static",
        clues: [
          "The shhh-shhh sound when the TV signal drops. 📺",
          "The crackling sound on a radio when you cannot find a channel. 📻",
          "It is static, my friend! ⚡",
          "Crackling or hissing noise on telephone/radio."
        ]
      },
      {
        id: 125,
        question: "👏 + 🎭 + 🎉 = ?",
        options: ["Applause", "Cheer", "Noise", "Praise"],
        correctAnswer: "Applause",
        cleanAnswer: "Applause",
        clues: [
          "Clapping in admiration after a show ends. 👏",
          "The continuous sound made by an approving audience. 🎉",
          "It is applause, my friend! 🎭",
          "Approval expressed by clapping."
        ]
      },
      {
        id: 126,
        question: "🎶 + 🎼 + 🎵 = ?",
        options: ["Melody", "Song", "Tune", "Rhythm"],
        correctAnswer: "Melody",
        cleanAnswer: "Melody",
        clues: [
          "The musical arrangement that cools your mind when you hear it. 🎶",
          "The lovely tune of a song. 🎼",
          "It is a melody, my friend! 🎵",
          "Sequence of single notes that is musically satisfying."
        ]
      },
      {
        id: 127,
        question: "🔊 + ↗️ + 🎶 = ?",
        options: ["Pitch", "Volume", "Tone", "Sound"],
        correctAnswer: "Pitch",
        cleanAnswer: "Pitch",
        clues: [
          "The high or low sharpness of a sound. 🔊",
          "The frequency that changes when you raise your voice. ↗️",
          "It is pitch, my friend! 🎶",
          "Quality of a sound governed by rate of vibrations."
        ]
      },
      {
        id: 128,
        question: "🎨 + 🔊 + 🎶 = ?",
        options: ["Tone", "Voice", "Pitch", "Music"],
        correctAnswer: "Tone",
        cleanAnswer: "Tone",
        clues: [
          "The attitude others feel when you speak (like friendly or harsh). 🔊",
          "The unique quality character of a sound. 🎨",
          "It is tone, my friend! 🎶",
          "Musical or vocal sound with reference to its quality."
        ]
      },
      {
        id: 129,
        question: "🌩️ + 💥 + 🔊 = ?",
        options: ["Clamor", "Thunder", "Roar", "Noise"],
        correctAnswer: "Clamor",
        cleanAnswer: "Clamor",
        clues: [
          "A sudden, very loud sound. 🌩️",
          "A rumble similar to a thunderstrike. 💥",
          "It is clamor, my friend! 🔊",
          "Loud and confused noise."
        ]
      },
      {
        id: 130,
        question: "🦁 + 🔊 + 👑 = ?",
        options: ["Roar", "Voice", "Shout", "Cry"],
        correctAnswer: "Roar",
        cleanAnswer: "Roar",
        clues: [
          "The loud sound a lion makes to shake the forest. 🦁",
          "The sound that shocks the wild. 👑",
          "It is a roar, my friend! 🔊",
          "Full, deep, prolonged cry uttered by a lion."
        ]
      }
    ]
  },

  /* ================= GROUP 14: VALUE & WEALTH ================= */
  {
    groupId: 14,
    groupName: "Economics & Value",
    groupConnection: ["value", "wealth", "money", "economics"],
    riddles: [
      {
        id: 131,
        question: "💎 + ⚖️ + 🌟 = ?",
        options: ["Worth", "Value", "Price", "Cost"],
        correctAnswer: "Worth",
        cleanAnswer: "Worth",
        clues: [
          "The internal value of an item. 💎",
          "Something far more valuable than mere cash. ⚖️",
          "It is worth, my friend! 🌟",
          "Value of something measured by its qualities."
        ]
      },
      {
        id: 132,
        question: "🏷️ + 💵 + 🛒 = ?",
        options: ["Price", "Cost", "Tax", "Value"],
        correctAnswer: "Price",
        cleanAnswer: "Price",
        clues: [
          "The MRP amount asked at a shop. 🏷️",
          "The amount in rupees you have to pay to buy it. 💵",
          "It is the price, my friend! 🛒",
          "Amount of money expected in payment."
        ]
      },
      {
        id: 133,
        question: "💸 + 📉 + 🧾 = ?",
        options: ["Cost", "Expense", "Loss", "Debt"],
        correctAnswer: "Cost",
        cleanAnswer: "Cost",
        clues: [
          "The expense required to complete a task. 💸",
          "The total expense occurred for production. 📉",
          "It is the cost, my friend! 🧾",
          "An amount that has to be paid or spent."
        ]
      },
      {
        id: 134,
        question: "💳 + ⏳ + 🧾 = ?",
        options: ["Debt", "Loan", "Borrow", "Credit"],
        correctAnswer: "Debt",
        cleanAnswer: "Debt",
        clues: [
          "What you take from others and have to return later. 💳",
          "The sum of money that you owe. 🧾",
          "It is debt, my friend! ⏳",
          "Sum of money that is owed or due."
        ]
      },
      {
        id: 135,
        question: "🏰 + 👑 + 💰 = ?",
        options: ["Wealth", "Money", "Luxury", "Gold"],
        correctAnswer: "Wealth",
        cleanAnswer: "Wealth",
        clues: [
          "A state of having plenty of money and assets. 🏰",
          "The assets acquired over a long period of time. 💰",
          "It is wealth, my friend! 👑",
          "An abundance of valuable possessions or money."
        ]
      },
      {
        id: 136,
        question: "🏚️ + 🚫 + 🍞 = ?",
        options: ["Poverty", "Hunger", "Debt", "Need"],
        correctAnswer: "Poverty",
        cleanAnswer: "Poverty",
        clues: [
          "The lack of assets resulting in poor living conditions. 🏚️",
          "The state of not being able to fulfill basic needs. 🍞",
          "It is poverty, my friend! 🚫",
          "State of being extremely poor."
        ]
      },
      {
        id: 137,
        question: "🏎️ + 💎 + 🍾 = ?",
        options: ["Luxury", "Wealth", "Style", "Comfort"],
        correctAnswer: "Luxury",
        cleanAnswer: "Luxury",
        clues: [
          "The extravagance that goes beyond basic needs. 🏎️",
          "A highly expensive, comfortable lifestyle. 🍾",
          "It is luxury, my friend! 💎",
          "State of great comfort and extravagant living."
        ]
      },
      {
        id: 138,
        question: "📉 + 🏷️ + 🤝 = ?",
        options: ["Bargain", "Discount", "Sale", "Trade"],
        correctAnswer: "Bargain",
        cleanAnswer: "Bargain",
        clues: [
          "Going to a shop and asking them to reduce the price. 🤝",
          "A purchase achieved at a very profitable rate. 📉",
          "It is a bargain, my friend! 🏷️",
          "Thing bought or offered for sale more cheaply than usual."
        ]
      },
      {
        id: 139,
        question: "📈 + 💼 + 💰 = ?",
        options: ["Profit", "Income", "Gain", "Growth"],
        correctAnswer: "Profit",
        cleanAnswer: "Profit",
        clues: [
          "The remaining positive balance after business expenses. 📈",
          "The financial gain you get in trading. 💰",
          "It is profit, my friend! 💼",
          "Financial gain from business activity."
        ]
      },
      {
        id: 140,
        question: "📉 + 💸 + 😭 = ?",
        options: ["Loss", "Debt", "Cost", "Risk"],
        correctAnswer: "Loss",
        cleanAnswer: "Loss",
        clues: [
          "Losing money in a business deal. 📉",
          "The financial danger you faced in a new venture. 💸",
          "It is a loss, my friend! 😭",
          "Fact or process of losing something or money."
        ]
      }
    ]
  },

  /* ================= GROUP 15: SAFETY & DANGER ================= */
  {
    groupId: 15,
    groupName: "Safety & Hazards",
    groupConnection: ["safety", "hazard", "risk", "security"],
    riddles: [
      {
        id: 141,
        question: "🎲 + ⚠️ + 🕳️ = ?",
        options: ["Risk", "Danger", "Fear", "Chance"],
        correctAnswer: "Risk",
        cleanAnswer: "Risk",
        clues: [
          "Doing something that has a strong possibility of loss. 🎲",
          "The dangerous chance that you take. ⚠️",
          "It is a risk, my friend! 🕳️",
          "Situation involving exposure to danger."
        ]
      },
      {
        id: 142,
        question: "⚠️ + 🔴 + 🛑 = ?",
        options: ["Danger", "Risk", "Fire", "Stop"],
        correctAnswer: "Danger",
        cleanAnswer: "Danger",
        clues: [
          "The red signal board that shows a threat. 🔴",
          "The threat of things going terribly wrong. ⚠️",
          "It is danger, my friend! 🛑",
          "Possibility of suffering harm or injury."
        ]
      },
      {
        id: 143,
        question: "🛡️ + 🥽 + 🏠 = ?",
        options: ["Safety", "Protection", "Security", "Shelter"],
        correctAnswer: "Safety",
        cleanAnswer: "Safety",
        clues: [
          "The state of staying completely away from accidents. 🛡️",
          "The protection provided by seatbelts and helmets. 🥽",
          "It is safety, my friend! 🏠",
          "Condition of being protected from danger."
        ]
      },
      {
        id: 144,
        question: "🐅 + ⚔️ + 💥 = ?",
        options: ["Threat", "Danger", "Attack", "Fear"],
        correctAnswer: "Threat",
        cleanAnswer: "Threat",
        clues: [
          "An intimidation meant to cause harm. 🐅",
          "A warning that disaster is about to strike. ⚔️",
          "It is a threat, my friend! 💥",
          "Statement of an intention to inflict harm."
        ]
      },
      {
        id: 145,
        question: "🏰 + 💂 + 🛡️ = ?",
        options: ["Protection", "Safety", "Defense", "Guard"],
        correctAnswer: "Protection",
        cleanAnswer: "Protection",
        clues: [
          "Guarding and saving someone from dangers. 💂",
          "A shield standing guard like a fortress. 🛡️",
          "It is protection, my friend! 🏰",
          "Action of protecting or state of being protected."
        ]
      },
      {
        id: 146,
        question: "🚨 + 🔔 + 🔊 = ?",
        options: ["Alarm", "Siren", "Warning", "Sound"],
        correctAnswer: "Alarm",
        cleanAnswer: "Alarm",
        clues: [
          "The sound signal you hear when a fire breaks out. 🚨",
          "The bell set to wake you up in the morning. 🔔",
          "It is an alarm, my friend! 🔊",
          "An anxious awareness of danger or wake call."
        ]
      },
      {
        id: 147,
        question: "🚑 + 🚨 + 🆘 = ?",
        options: ["Emergency", "Danger", "Rescue", "Help"],
        correctAnswer: "Emergency",
        cleanAnswer: "Emergency",
        clues: [
          "A condition needing immediate treatment or rescue. 🚑",
          "The urgent situation where you call an ambulance. 🆘",
          "It is an emergency, my friend! 🚨",
          "Serious, unexpected, and often dangerous situation."
        ]
      },
      {
        id: 148,
        question: "🛟 + 👨‍🚒 + 🆘 = ?",
        options: ["Rescue", "Help", "Safety", "Escape"],
        correctAnswer: "Rescue",
        cleanAnswer: "Rescue",
        clues: [
          "Pulling someone out of the water to save them from drowning. 🛟",
          "The saving operations performed by the fire force. 👨‍🚒",
          "It is a rescue, my friend! 🆘",
          "Save someone from a dangerous situation."
        ]
      },
      {
        id: 149,
        question: "🪤 + 🧀 + 🕸️ = ?",
        options: ["Trap", "Danger", "Trick", "Box"],
        correctAnswer: "Trap",
        cleanAnswer: "Trap",
        clues: [
          "The device set up to catch a mouse. 🧀",
          "Getting caught in a snare with no way out. 🪤",
          "It is a trap, my friend! 🕸️",
          "Device or enclosure designed to catch stray animals."
        ]
      },
      {
        id: 150,
        question: "🏃 + 🚪 + 🔓 = ?",
        options: ["Escape", "Run", "Freedom", "Exit"],
        correctAnswer: "Escape",
        cleanAnswer: "Escape",
        clues: [
          "Breaking out from a jail or a snare. 🏃",
          "Stepping out successfully from danger. 🚪",
          "It is an escape, my friend! 🔓",
          "Break free from confinement or control."
        ]
      }
    ]
  },

  /* ================= GROUP 16: SIGNALS & MESSAGES ================= */
  {
    groupId: 16,
    groupName: "Communication Signals",
    groupConnection: ["signals", "messages", "code", "communication"],
    riddles: [
      {
        id: 151,
        question: "📶 + 🚦 + 📡 = ?",
        options: ["Signal", "Code", "Wave", "Message"],
        correctAnswer: "Signal",
        cleanAnswer: "Signal",
        clues: [
          "The bar setup on your phone showing network range. 📶",
          "The instruction lights you see at traffic lights. 🚦",
          "It is a signal, my friend! 📡",
          "Gesture, action, or sound conveying information."
        ]
      },
      {
        id: 152,
        question: "🔐 + 💻 + 🔣 = ?",
        options: ["Code", "Secret", "Password", "Logic"],
        correctAnswer: "Code",
        cleanAnswer: "Code",
        clues: [
          "The program lines written by software developers. 💻",
          "The symbols used for secret communications. 🔣",
          "It is code, my friend! 🔐",
          "System of words, letters, or symbols used for secrecy."
        ]
      },
      {
        id: 153,
        question: "✉️ + 📲 + 💬 = ?",
        options: ["Message", "Signal", "Letter", "Text"],
        correctAnswer: "Message",
        cleanAnswer: "Message",
        clues: [
          "The note you send on WhatsApp. 💬",
          "Information given from one person to another. 📲",
          "It is a message, my friend! ✉️",
          "Verbal, written, or recorded communication."
        ]
      },
      {
        id: 154,
        question: "💡 + 🧩 + 🔍 = ?",
        options: ["Hint", "Clue", "Idea", "Answer"],
        correctAnswer: "Hint",
        cleanAnswer: "Hint",
        clues: [
          "A small pointer that helps you find the answer. 🧩",
          "The tip you earn in a game when you need help. 🔍",
          "It is a hint, my friend! 💡",
          "Slight or indirect indication or suggestion."
        ]
      },
      {
        id: 155,
        question: "⚠️ + 📢 + 🛑 = ?",
        options: ["Warning", "Alarm", "Signal", "Notice"],
        correctAnswer: "Warning",
        cleanAnswer: "Warning",
        clues: [
          "An alert that danger might happen. ⚠️",
          "The final notice given by a teacher. 📢",
          "It is a warning, my friend! 🛑",
          "Statement or event that indicates possible danger."
        ]
      },
      {
        id: 156,
        question: "📰 + 📺 + 🎙️ = ?",
        options: ["News", "Story", "Report", "Media"],
        correctAnswer: "News",
        cleanAnswer: "News",
        clues: [
          "The recent local events told on TV. 📰",
          "The media reports broadcasted worldwide. 📺",
          "It is the news, my friend! 🎙️",
          "Information about recent events."
        ]
      },
      {
        id: 157,
        question: "🗣️ + 🤫 + 🍃 = ?",
        options: ["Rumor", "Gossip", "Story", "Lie"],
        correctAnswer: "Rumor",
        cleanAnswer: "Rumor",
        clues: [
          "A story flying around town that might not even be true. 🗣️",
          "A fake tale spreading as fast as the wind. 🍃",
          "It is a rumor, my friend! 🤫",
          "Currently circulating story of uncertain truth."
        ]
      },
      {
        id: 158,
        question: "📞 + 📲 + 🔔 = ?",
        options: ["Call", "Ring", "Voice", "Contact"],
        correctAnswer: "Call",
        cleanAnswer: "Call",
        clues: [
          "Dialing on a phone to speak with someone. 📞",
          "When the phone arrives with a ringtone playing. 🔔",
          "It is a call, my friend! 📲",
          "An instance of speaking to someone on the phone."
        ]
      },
      {
        id: 159,
        question: "📡 + 🌐 + ⚡ = ?",
        options: ["Transmission", "Signal", "Radio", "Network"],
        correctAnswer: "Transmission",
        cleanAnswer: "Transmission",
        clues: [
          "Sending a signal through the sky. 📡",
          "The technical process used for a live telecast. 🌐",
          "It is transmission, my friend! ⚡",
          "Process of transmitting something via waves."
        ]
      },
      {
        id: 160,
        question: "👋 + 🙋 + 🖐️ = ?",
        options: ["Gesture", "Wave", "Sign", "Hand"],
        correctAnswer: "Gesture",
        cleanAnswer: "Gesture",
        clues: [
          "A sign shown using your hands or head. 👋",
          "The signs used to communicate without speaking. 🖐️",
          "It is a gesture, my friend! 🙋",
          "Movement of body part to express an idea."
        ]
      }
    ]
  },

  /* ================= GROUP 17: HUMAN BONDS ================= */
  {
    groupId: 17,
    groupName: "Relationships & Bonds",
    groupConnection: ["bonds", "relationships", "unity", "connections"],
    riddles: [
      {
        id: 161,
        question: "🔗 + 🤝 + 💖 = ?",
        options: ["Bond", "Trust", "Union", "Love"],
        correctAnswer: "Bond",
        cleanAnswer: "Bond",
        clues: [
          "The strong, loving attachment between people. 🔗",
          "A sincere connection that does not easily break. 💖",
          "It is a bond, my friend! 🤝",
          "A relationship between people based on shared feelings."
        ]
      },
      {
        id: 162,
        question: "⚔️ + 🤼 + 🥊 = ?",
        options: ["Rivalry", "Fight", "Enemy", "War"],
        correctAnswer: "Rivalry",
        cleanAnswer: "Rivalry",
        clues: [
          "A huge, ongoing conflict between two teams. 🥊",
          "A competitive fight like an India vs Pakistan cricket match. ⚔️",
          "It is a rivalry, my friend! 🤼",
          "Competition for superiority in a field."
        ]
      },
      {
        id: 163,
        question: "✊ + 🤝 + 👥 = ?",
        options: ["Unity", "Peace", "Team", "Group"],
        correctAnswer: "Unity",
        cleanAnswer: "Unity",
        clues: [
          "Everyone standing together as a solid block. ✊",
          "Working collectively with a single mind. 🤝",
          "It is unity, my friend! 👥",
          "State of being united or joined as a whole."
        ]
      },
      {
        id: 164,
        question: "✂️ + 💔 + 🚷 = ?",
        options: ["Separation", "Breakup", "Distance", "End"],
        correctAnswer: "Separation",
        cleanAnswer: "Separation",
        clues: [
          "Two people drifting apart from each other. 💔",
          "The state of breaking away from someone you were with. ✂️",
          "It is separation, my friend! 🚷",
          "Action of moving or being moved apart."
        ]
      },
      {
        id: 165,
        question: "🌐 + 🔌 + 🤝 = ?",
        options: ["Connection", "Link", "Network", "Bond"],
        correctAnswer: "Connection",
        cleanAnswer: "Connection",
        clues: [
          "The link between two things or people. 🔌",
          "A link similar to joining a Wi-Fi network. 🌐",
          "It is a connection, my friend! 🤝",
          "Relationship in which a thing is linked with something else."
        ]
      },
      {
        id: 166,
        question: "🐕 + 👑 + 🛡️ = ?",
        options: ["Loyalty", "Trust", "Love", "Respect"],
        correctAnswer: "Loyalty",
        cleanAnswer: "Loyalty",
        clues: [
          "The trait of standing faithful just like a dog. 🐕",
          "The steadfast trust of someone who always stays by your side. 🛡️",
          "It is loyalty, my friend! 👑",
          "Quality of being loyal to someone or something."
        ]
      },
      {
        id: 167,
        question: "🗡️ + 💔 + 🐍 = ?",
        options: ["Betrayal", "Lie", "Enemy", "Hate"],
        correctAnswer: "Betrayal",
        cleanAnswer: "Betrayal",
        clues: [
          "The act of cheating and stabbing someone in the back. 🗡️",
          "The massive deception you get from someone you trusted. 💔",
          "It is betrayal, my friend! 🐍",
          "Action of betraying one's country, a group, or a person."
        ]
      },
      {
        id: 168,
        question: "🌸 + 💖 + 🤲 = ?",
        options: ["Kindness", "Love", "Care", "Peace"],
        correctAnswer: "Kindness",
        cleanAnswer: "Kindness",
        clues: [
          "The grace you give to others with love. 🌸",
          "Having a very gentle, forgiving mind. 🤲",
          "It is kindness, my friend! 💖",
          "Quality of being friendly, generous, and considerate."
        ]
      },
      {
        id: 169,
        question: "🫡 + 👑 + 🙇 = ?",
        options: ["Respect", "Honor", "Love", "Praise"],
        correctAnswer: "Respect",
        cleanAnswer: "Respect",
        clues: [
          "The honor we give to our elders. 🫡",
          "The admiration you show when seeing someone's great qualities. 👑",
          "It is respect, my friend! 🙇",
          "Feeling of deep admiration for someone."
        ]
      },
      {
        id: 170,
        question: "🙏 + 💖 + 📜 = ?",
        options: ["Gratitude", "Thanks", "Respect", "Love"],
        correctAnswer: "Gratitude",
        cleanAnswer: "Gratitude",
        clues: [
          "The thankfulness you feel inside when you receive help. 🙏",
          "Giving a heartfelt feeling of thanks. 💖",
          "It is gratitude, my friend! 📜",
          "Quality of being thankful."
        ]
      }
    ]
  },

  /* ================= GROUP 18: TIME ERA & CYCLES ================= */
  {
    groupId: 18,
    groupName: "Eras & Cycles",
    groupConnection: ["era", "cycles", "rhythm", "epochs"],
    riddles: [
      {
        id: 171,
        question: "⏳ + 📜 + 🏛️ = ?",
        options: ["Past", "History", "Yesterday", "Era"],
        correctAnswer: "Past",
        cleanAnswer: "Past",
        clues: [
          "The time that has already gone by. ⏳",
          "The old times that will never return. 📜",
          "It is the past, my friend! 🏛️",
          "Gone by in time and no longer existing."
        ]
      },
      {
        id: 172,
        question: "🎁 + ⏱️ + 📍 = ?",
        options: ["Present", "Gift", "Today", "Now"],
        correctAnswer: "Present",
        cleanAnswer: "Present",
        clues: [
          "The time that is happening right now. ⏱️",
          "The beautiful gift that life has given us. 🎁",
          "It is the present, my friend! 📍",
          "Period of time now occurring."
        ]
      },
      {
        id: 173,
        question: "📅 + ⏰ + 🛑 = ?",
        options: ["Deadline", "Time", "Limit", "End"],
        correctAnswer: "Deadline",
        cleanAnswer: "Deadline",
        clues: [
          "The final time allowed to submit your work. ⏰",
          "If you cross this limit, you are in big trouble. 🛑",
          "It is a deadline, my friend! 📅",
          "Latest time or date by which something should be completed."
        ]
      },
      {
        id: 174,
        question: "📝 + ⏰ + 🗓️ = ?",
        options: ["Schedule", "Plan", "Routine", "Time"],
        correctAnswer: "Schedule",
        cleanAnswer: "Schedule",
        clues: [
          "The written order of tasks for your day. 📝",
          "The plan that is often called a time table. 🗓️",
          "It is a schedule, my friend! ⏰",
          "Plan for carrying out a process or procedure."
        ]
      },
      {
        id: 175,
        question: "🦖 + 🏛️ + ⏳ = ?",
        options: ["Era", "Age", "Past", "History"],
        correctAnswer: "Era",
        cleanAnswer: "Era",
        clues: [
          "A vast period of time, like the age of dinosaurs. 🦖",
          "A distinct period noted in history. 🏛️",
          "It is an era, my friend! ⏳",
          "Long and distinct period of history."
        ]
      },
      {
        id: 176,
        question: "🔄 + 🌙 + ☀️ = ?",
        options: ["Cycle", "Season", "Year", "Day"],
        correctAnswer: "Cycle",
        cleanAnswer: "Cycle",
        clues: [
          "The wheel of time that keeps repeating itself. 🔄",
          "The alternating pattern of day and night. 🌙",
          "It is a cycle, my friend! ☀️",
          "Series of events that are regularly repeated in same order."
        ]
      },
      {
        id: 177,
        question: "🌕 + 🌒 + 🌑 = ?",
        options: ["Phase", "Moon", "Cycle", "Night"],
        correctAnswer: "Phase",
        cleanAnswer: "Phase",
        clues: [
          "The different changing sections of the moon's shape. 🌕",
          "The shifting stages in our life. 🌒",
          "It is a phase, my friend! 🌑",
          "Distinct stage in a series of events or process."
        ]
      },
      {
        id: 178,
        question: "🎼 + ⏱️ + 🥁 = ?",
        options: ["Tempo", "Rhythm", "Speed", "Beat"],
        correctAnswer: "Tempo",
        cleanAnswer: "Tempo",
        clues: [
          "The speed measurement of a song. 🎼",
          "The speed measure that is higher in a fast song. 🥁",
          "It is tempo, my friend! ⏱️",
          "Speed of the rhythm of a piece of music."
        ]
      },
      {
        id: 179,
        question: "☀️ + 🌄 + 🌇 = ?",
        options: ["Daytime", "Sun", "Light", "Morning"],
        correctAnswer: "Daytime",
        cleanAnswer: "Daytime",
        clues: [
          "The time when the sun is up in the sky. ☀️",
          "The period of morning filled with light. 🌄",
          "It is daytime, my friend! 🌇",
          "Time between sunrise and sunset."
        ]
      },
      {
        id: 180,
        question: "🌃 + 🌌 + 💤 = ?",
        options: ["Nighttime", "Darkness", "Sleep", "Moon"],
        correctAnswer: "Nighttime",
        cleanAnswer: "Nighttime",
        clues: [
          "When the sun sets and it is time to sleep. 🌃",
          "The time you experience when it gets completely dark. 🌌",
          "It is nighttime, my friend! 💤",
          "Time between sunset and sunrise."
        ]
      }
    ]
  },

  /* ================= GROUP 19: ATMOSPHERIC WEATHER ================= */
  {
    groupId: 19,
    groupName: "Natural Events",
    groupConnection: ["weather", "events", "nature", "phenomena"],
    riddles: [
      {
        id: 181,
        question: "☀️ + 🌾 + 🚫 = ?",
        options: ["Drought", "Heat", "Summer", "Famine"],
        correctAnswer: "Drought",
        cleanAnswer: "Drought",
        clues: [
          "When fields dry up from a severe lack of water. 🌾",
          "The parched condition caused by absolutely no rain. ☀️",
          "It is a drought, my friend! 🚫",
          "Prolonged period of abnormally low rainfall."
        ]
      },
      {
        id: 182,
        question: "🌧️ + 🌊 + 🏠 = ?",
        options: ["Flood", "Rain", "River", "Storm"],
        correctAnswer: "Flood",
        cleanAnswer: "Flood",
        clues: [
          "When heavy rains cause water to invade the land. 🌧️",
          "The massive water overflow Kerala saw back in 2018. 🌊",
          "It is a flood, my friend! 🏠",
          "Overflow of a large amount of water beyond normal limits."
        ]
      },
      {
        id: 183,
        question: "🌋 + 💥 + 🫨 = ?",
        options: ["Tremor", "Earthquake", "Eruption", "Shock"],
        correctAnswer: "Tremor",
        cleanAnswer: "Tremor",
        clues: [
          "The shaking you feel when the ground starts to vibrate. 🫨",
          "A small vibration preceding a major earthquake. 💥",
          "It is a tremor, my friend! 🌋",
          "Involuntary vibration or earth shaking movement."
        ]
      },
      {
        id: 184,
        question: "🍃 + 💨 + 😌 = ?",
        options: ["Breeze", "Wind", "Air", "Storm"],
        correctAnswer: "Breeze",
        cleanAnswer: "Breeze",
        clues: [
          "The gentle wind that touches you near the beach. 🍃",
          "The soft air that brings comfort to your mind. 😌",
          "It is a breeze, my friend! 💨",
          "Gentle light wind."
        ]
      },
      {
        id: 185,
        question: "🧊 + 🌿 + 🌅 = ?",
        options: ["Frost", "Ice", "Dew", "Cold"],
        correctAnswer: "Frost",
        cleanAnswer: "Frost",
        clues: [
          "The frozen layer seen on grass in Munnar mornings. 🌿",
          "A glass-like layer formed in freezing cold. 🧊",
          "It is frost, my friend! 🌅",
          "Small ice crystals formed on freezing surfaces."
        ]
      },
      {
        id: 186,
        question: "💧 + 🌿 + 🌅 = ?",
        options: ["Dew", "Rain", "Mist", "Water"],
        correctAnswer: "Dew",
        cleanAnswer: "Dew",
        clues: [
          "The water drops seen on top of leaves early in the morning. 🌿",
          "The natural moisture drops blooming at dawn. 🌅",
          "It is dew, my friend! 💧",
          "Tiny drops of water formed on cool surfaces at night."
        ]
      },
      {
        id: 187,
        question: "☀️ + 🪞 + 🙈 = ?",
        options: ["Glare", "Light", "Sunlight", "Reflection"],
        correctAnswer: "Glare",
        cleanAnswer: "Glare",
        clues: [
          "The massive light that blinds your eyes. ☀️",
          "The hot light reflecting off a mirror straight into your eyes. 🪞",
          "It is a glare, my friend! 🙈",
          "Strong and dazzling light."
        ]
      },
      {
        id: 188,
        question: "☁️ + 🌫️ + 🚗 = ?",
        options: ["Fog", "Mist", "Cloud", "Smoke"],
        correctAnswer: "Fog",
        cleanAnswer: "Fog",
        clues: [
          "The thick mist on the road hiding the vehicle ahead of you. ☁️",
          "The dark mist seen in Wayanad mornings. 🚗",
          "It is fog, my friend! 🌫️",
          "Thick cloud of tiny water droplets suspended in atmosphere."
        ]
      },
      {
        id: 189,
        question: "🔥 + 💨 + 🌫️ = ?",
        options: ["Smoke", "Fire", "Ash", "Dust"],
        correctAnswer: "Smoke",
        cleanAnswer: "Smoke",
        clues: [
          "What rises into the air when a fire is burning. 🔥",
          "A dark, choking layer of air. 🌫️",
          "It is smoke, my friend! 💨",
          "Visible suspension of carbon particles in air."
        ]
      },
      {
        id: 190,
        question: "🔥 + 🪵 + 🌫️ = ?",
        options: ["Ash", "Smoke", "Dust", "Fire"],
        correctAnswer: "Ash",
        cleanAnswer: "Ash",
        clues: [
          "The powder left behind after firewood completely burns out. 🪵",
          "The white or black colored residue from a fire. 🔥",
          "It is ash, my friend! 🌫️",
          "Powdery residue left after burning a substance."
        ]
      }
    ]
  },

  /* ================= GROUP 20: EXISTENCE & PHILOSOPHY ================= */
  {
    groupId: 20,
    groupName: "Philosophy of Being",
    groupConnection: ["philosophy", "existence", "soul", "being"],
    riddles: [
      {
        id: 191,
        question: "🎯 + 🗺️ + ✨ = ?",
        options: ["Purpose", "Meaning", "Goal", "Life"],
        correctAnswer: "Purpose",
        cleanAnswer: "Purpose",
        clues: [
          "The ultimate goal of why we are living. 🎯",
          "The intention that gives meaning to our life. ✨",
          "It is purpose, my friend! 🗺️",
          "Reason for which something is done or created."
        ]
      },
      {
        id: 192,
        question: "📖 + 💡 + 💖 = ?",
        options: ["Meaning", "Truth", "Reason", "Value"],
        correctAnswer: "Meaning",
        cleanAnswer: "Meaning",
        clues: [
          "The deep, uninterrupted significance of a word or life. 📖",
          "The profound sense that touches your inner core. 💡",
          "It is meaning, my friend! 💖",
          "What is intended to be, or actually is, expressed or indicated."
        ]
      },
      {
        id: 193,
        question: "👻 + ✨ + 🕊️ = ?",
        options: ["Soul", "Mind", "Heart", "Ghost"],
        correctAnswer: "Soul",
        cleanAnswer: "Soul",
        clues: [
          "The spiritual or immaterial part of a human being. 👻",
          "It is said to live on after we are gone. ✨",
          "It is the soul, my friend! 🕊️",
          "The essence of a living being."
        ]
      },
      {
        id: 194,
        question: "🔮 + 🛤️ + 🌌 = ?",
        options: ["Destiny", "Fate", "Path", "Luck"],
        correctAnswer: "Destiny",
        cleanAnswer: "Destiny",
        clues: [
          "The hidden path your life is meant to take. 🛤️",
          "Events that will necessarily happen to you in the future. 🔮",
          "It is destiny, my friend! 🌌",
          "Your ultimate, predetermined fate."
        ]
      },
      {
        id: 195,
        question: "🔄 + ⚖️ + 🧘 = ?",
        options: ["Karma", "Revenge", "Action", "Peace"],
        correctAnswer: "Karma",
        cleanAnswer: "Karma",
        clues: [
          "What goes around, comes around. 🔄",
          "The result of your actions catching up to you in life. ⚖️",
          "It is karma, my friend! 🧘",
          "Action and its subsequent reaction."
        ]
      },
      {
        id: 196,
        question: "🎶 + ⚖️ + 🕊️ = ?",
        options: ["Harmony", "Balance", "Peace", "Music"],
        correctAnswer: "Harmony",
        cleanAnswer: "Harmony",
        clues: [
          "When everything works together perfectly and peacefully. 🎶",
          "A state of peaceful balance in society or nature. ⚖️",
          "It is harmony, my friend! 🕊️",
          "Agreement in action or feeling."
        ]
      },
      {
        id: 197,
        question: "🙏 + 💭 + ✨ = ?",
        options: ["Belief", "Thought", "Dream", "Faith"],
        correctAnswer: "Belief",
        cleanAnswer: "Belief",
        clues: [
          "An acceptance that something exists or is absolutely true. 🙏",
          "A firm opinion held deeply in your mind. 💭",
          "It is a belief, my friend! ✨",
          "Trust, faith, or confidence in someone or something."
        ]
      },
      {
        id: 198,
        question: "🧠 + ⚙️ + 📐 = ?",
        options: ["Logic", "Math", "Smart", "Rule"],
        correctAnswer: "Logic",
        cleanAnswer: "Logic",
        clues: [
          "Thinking with strict rules of reasoning. 🧠",
          "Making decisions based on clear facts, not messy feelings. ⚙️",
          "It is logic, my friend! 📐",
          "A proper or reasonable way of thinking."
        ]
      },
      {
        id: 199,
        question: "👑 + 🦚 + 👤 = ?",
        options: ["Ego", "Pride", "Self", "Power"],
        correctAnswer: "Ego",
        cleanAnswer: "Ego",
        clues: [
          "Your internal sense of self-esteem or self-importance. 👤",
          "When this gets too big, it pushes your friends away. 👑",
          "It is the ego, my friend! 🦚",
          "The part of the mind mediating between conscious and unconscious."
        ]
      },
      {
        id: 200,
        question: "🌍 + 👁️ + 🧱 = ?",
        options: ["Reality", "Life", "Earth", "Truth"],
        correctAnswer: "Reality",
        cleanAnswer: "Reality",
        clues: [
          "The state of things exactly as they actually exist. 🌍",
          "Definitely not a dream or an illusion. 👁️",
          "It is reality, my friend! 🧱",
          "The true situation that exists."
        ]
      }
    ]
  }
];