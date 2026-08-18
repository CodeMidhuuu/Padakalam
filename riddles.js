// riddlesGroupedPool.js
// Clean 200 Abstract Riddle Database for Padakkalam Game

 const riddlesGroupedPool = [
  /* ================= GROUP 1: MYSTERIES & ABSTRACT ================= */
  {
    groupId: 1,
    groupName: "Concepts & Mysteries",
    groupConnection: ["abstract", "concepts", "mysteries", "അരൂപ കാര്യങ്ങൾ"],
    riddles: [
      {
        id: 1,
        question: "🔊 + ⛰️ + 🗣️ = ?",
        options: ["Echo", "Voice", "Wind", "Music"],
        correctAnswer: "Echo",
        cleanAnswer: "Echo",
        clues: [
          "Malayil ninno empty roomil ninno vilichal thirichu kettunna shabdam. 🔊",
          "Nammal parayunnathu thanne thirichu parayunna prathibhasa. ⛰️",
          "Prathidhvani aanu mone! 🗣️",
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
          "Onnum mindathirikkumbol ullath. 🤫",
          "Paranjaal udan illathaakunna vasthu. 🙊",
          "Nishabdatha aanu mone! 🌌",
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
          "Oraalodu paranjaal pinne adu ithu allathagum. 🔒",
          "Ullil vechu pootti kaakkunna karyam. 🤫",
          "Rahasyam aanu mone! 🗣️",
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
          "Velichathil koode nadakkum, iruttil kaanilla. ☀️",
          "Nammude appuram thanne nadakkunna karuppu roopam. 🚶",
          "Nizhal aanu mone! 👤",
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
          "Kodukkan eluppamaanu, paalikkaan paadaanuu. 🤝",
          "Vaakku tharunne reethiyilulla urappu. 💖",
          "Sathyam / Vaakku (Promise) aanu mone! 🗣️",
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
          "Koodukayalladhe thazhotthu povatha sangathi. 🎂",
          "Varsham kazhiyumthorum namukku koodunnathu. 📅",
          "Vayassu aanu mone! ⬆️",
          "Number of years you've been alive."
        ]
      },
      {
        id: 7,
        question: "🏷️ + 👶 + 🗣️ = ?",
        options: ["Name", "Baby", "Identity", "Word"],
        correctAnswer: "Name",
        cleanAnswer: "Name",
        clues: [
          "Nammudethaanu, pakshe mattullavaraanu kooduthal use cheyyunnathu. 🏷️",
          "Nammale vilikkan aalukal upayogikkunno shabdham. 🗣️",
          "Perasnu mone! 👶",
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
          "Athil ninnum edukkaadhorum valuthayikondirikkum. 🕳️",
          "Kuzhikkumthorum perugaunna sangathi. 📦",
          "Kuzhi (Hole) aanu mone! ✂️",
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
          "Innu varan pattilla, naale thirichu pokan pattilla. 🌅",
          "Poya divasam, thirichu varatha samayam. ⏳",
          "Innale (Yesterday) aanu mone! 📜",
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
          "Kannaadiyil kaanunna ninne poleulla roopam. 🪞",
          "Nee thirinjus nokkumbol marayunna chithram. 👁️",
          "Prathibhimbam (Reflection) aanu mone! 👤",
          "Mirror image of yourself."
        ]
      }
    ]
  },

  /* ================= GROUP 2: HUMAN BODY & STATES ================= */
  {
    groupId: 2,
    groupName: "Human Experience",
    groupConnection: ["body", "human", "states", "മനുഷ്യാവസ്ഥകൾ"],
    riddles: [
      {
        id: 11,
        question: "🫁 + 💨 + 🫀 = ?",
        options: ["Breath", "Air", "Heartbeat", "Life"],
        correctAnswer: "Breath",
        cleanAnswer: "Breath",
        clues: [
          "Akathokku eduthu purathokku vidunna kaattu. 🫁",
          "Ithu ninnaal katha kazhinju. 💨",
          "Shwaasam aanu mone! 🫀",
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
          "Nee ethra kooduthal edukkinno, athra kooduthal pinneel aakum. 👣",
          "Manalath nadannal pinneel kaanunna aadayalangal. 🏖️",
          "Kaalppadukal (Footsteps) aanu mone! 🥾",
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
          "Manassil minni marayunna chinthakal. 🧠",
          "Thalayil eppozhum aalochikkunna sangathi. 💭",
          "Chintha (Thought) aanu mone! ⚡",
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
          "Lubb-Dubb ennu nenjil kelkunna thudippu. 🫀",
          "Stethoscope vechal doctor kelkunna sound. 🔊",
          "Hridhaya thudippu aanu mone! 💓",
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
          "Samsarikumbol thondayil ninnu varunna shabdam. 🗣️",
          "Oraalkku oru tharam maathram ulla unique sound. 🎶",
          "Shabdam / Sound (Voice) aanu mone! 👂",
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
          "Vayaru kaalikhayaal undaagunna visual & feeling. 🫄",
          "Kazhikkan thonnikkunna avastha. 🤤",
          "Pasi (Hunger) aanu mone! 🍲",
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
          "Thonda varallumbol vellam kudikkan thonnunnathu. 🥛",
          "Veyilath nadannal varunna avastha. 🏜️",
          "Dhaaham (Thirst) aanu mone! 🥵",
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
          "Kannu adayunno tharathil vaay thurannu aambal idunnathu. 🥱",
          "Urangaan time aayi ennu mind parayunnathu. 😴",
          "Urakkatchadaavu / Sleepiness aanu mone! 🛏️",
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
          "Chundu kootti vechu kaattadichu shabdham undakkunnathu. 😗",
          "Paattinte koode chundukondu adikkunna tune. 🎶",
          "Chunduvili / Whistle aanu mone! 🌬️",
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
          "Thalayil pettennu minni udikkunna nalla thondal. 💡",
          "Problem solve cheyyan varunna trick. ⚡",
          "Budhi / Idea aanu mone! 🧠",
          "Sudden creative spark or solution."
        ]
      }
    ]
  },

  /* ================= GROUP 3: FORCES & PHYSICS ================= */
  {
    groupId: 3,
    groupName: "Natural Forces",
    groupConnection: ["forces", "physics", "nature", "പ്രകൃതി ശക്തികൾ"],
    riddles: [
      {
        id: 21,
        question: "🍃 + 💨 + 🌲 = ?",
        options: ["Wind", "Air", "Storm", "Dust"],
        correctAnswer: "Wind",
        cleanAnswer: "Wind",
        clues: [
          "Kaanan pattilla, pakshe marangalkk ilakkam undakkum. 🍃",
          "Vegathil odunna aakaashathile kaattu. 💨",
          "Kaattu (Wind) aanu mone! 🌲",
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
          "Mukaalilekk erinjaal thazhekk thalliyidunna force. 🍎",
          "Newton appooppan kandupidichathu. 🌍",
          "Gurutwaakarshanam (Gravity) aanu mone! ⬇️",
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
          "Etavum vegathil pokunno alavu. 🏎️",
          "KM/H vechu mekkunna measure. ⏱️",
          "Vegatha (Speed) aanu mone! ⚡",
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
          "Rendu kayyugul thammil thekkumbol choodu undaakkunnathu. ✋",
          "Break idumbol vandi nikaan sahayikkunna dravyam. 🧱",
          "Gharshanam (Friction) aanu mone! 🔥",
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
          "Balloon-il kooduthal kettiyaal athu pottan kaaranam. 🎈",
          "Amarthumbol undaagunna force per unit area. 🤏",
          "Mardhanam (Pressure) aanu mone! 💥",
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
          "Weighing machine-il thookki kaanikkunna number. ⚖️",
          "Gurutwaakarshanam namukku nalkunna alavu. 🏋️",
          "Bharam (Weight) aanu mone! ⬇️",
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
          "Pravarthikkan aavashyamaaya shakthi. 🔋",
          "Nalppathu vithathil maattaan pattunna nithya vasthu. ⚡",
          "Oorjam (Energy) aanu mone! 🔌",
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
          "Kaattum shabdam polum illatha sthalam. 🌌",
          "Space-il kaanunna poornnamaya shoonnyatha. 🚫",
          "Shoonnyatha (Vacuum) aanu mone! 🕳️",
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
          "Veena povathe urachu nirkkunna sthithi. 🧘",
          "Rendu pakshavum samamaayi nirthunnatuka. ⚖️",
          "Samathulyatha (Balance) aanu mone! 🧍",
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
          "Veyilathum theeyilum ninnu uyarunna choodu. ☀️",
          "Temperature koodumbol thonnikkunna sangathi. 🥵",
          "Choodu (Heat) aanu mone! 🌡️",
          "Thermal energy flow."
        ]
      }
    ]
  },

  /* ================= GROUP 4: TIME & DURATION ================= */
  {
    groupId: 4,
    groupName: "Temporal Dimensions",
    groupConnection: ["time", "duration", "clock", "കാലഘട്ടം"],
    riddles: [
      {
        id: 31,
        question: "🌅 + 🔮 + ⏳ = ?",
        options: ["Tomorrow", "Yesterday", "Future", "Hope"],
        correctAnswer: "Tomorrow",
        cleanAnswer: "Tomorrow",
        clues: [
          "Innu eppozhum ethilla, naale maathram varum. 🌅",
          "Adutha divasam enna pratheeksha. 🔮",
          "Naale (Tomorrow) aanu mone! ⏳",
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
          "Iniyum varan irikkunna kaalam. 🔮",
          "Aarkkum accurate aayi pravakshikkan pattatha time. 🚀",
          "Bhaavi (Future) aanu mone! 🌌",
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
          "Kannechira thurakkunna samayam kondu poyathu. ⚡",
          "Chiriya oru alavu samayam. 🤏",
          "Kshanam (Moment) aanu mone! ⏱️",
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
          "Pazhaya kaalathile sambhavangalude charithram. 📜",
          "Textbook-il padikkunna pazhaya kathakal. 🏛️",
          "Charithram (History) aanu mone! ⏳",
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
          "Nooru varshangal koodiyath. 💯",
          "Cricket-ile 100 runs poleulla period. 📅",
          "Noottaandu (Century) aanu mone! ⏳",
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
          "Pravarthanam idaykku vechu nirthunnathu. ⏸️",
          "Video play cheyyumbol amarthunna button status. ☕",
          "Idavela / Pause aanu mone! ⏱️",
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
          "Karuthiya samayathil ethaadirikkunnathu. 🐢",
          "Train late aakumbozhe sthithi. 🚦",
          "Vaikal (Delay) aanu mone! ⌛",
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
          "Ellathinum thudakam kurikkunno bindhu. 🟢",
          "Cinema start cheyyunna pradhama scene. 🎬",
          "Thudakkam (Beginning) aanu mone! 🏁",
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
          "Katha avasanikkunna sthalam. 🛑",
          "The End ennu screenil varunnathu. 🔴",
          "Avasanam (End) aanu mone! 🔚",
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
          "Jananam muthal maranam vareyulla kaalam. 👶",
          "Oru manushyanu jeevikkan kittunna motham time. 👴",
          "Jeevitha kaalam (Lifetime) aanu mone! 👨",
          "Duration of a person's existence."
        ]
      }
    ]
  },

  /* ================= GROUP 5: PERCEPTION & ATMOSPHERE ================= */
  {
    groupId: 5,
    groupName: "Environmental Elements",
    groupConnection: ["atmosphere", "perception", "environment", "അന്തരീക്ഷം"],
    riddles: [
      {
        id: 41,
        question: "👀 + 🌅 + 🌌 = ?",
        options: ["Horizon", "Sky", "Sun", "Ocean"],
        correctAnswer: "Horizon",
        cleanAnswer: "Horizon",
        clues: [
          "Aakaashavum bhoomiyum thammil muttunnathayi thonnikkunna rekha. 🌅",
          "Kadalinapuram aakaasham thodunna sthalam. 👀",
          "Kshithijam (Horizon) aanu mone! 🌌",
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
          "Velicham poornnamaayi illathirikkunna sthithi. 🌑",
          "Current poyaal kooriruttil kaanunnathu. 🙈",
          "Iruttu (Darkness) aanu mone! 🌌",
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
          "Manjathilum Fridge-ilum kaanunna vira. 🧊",
          "Choodu illathirikkumbol thonnikkunna thaanppu. 🥶",
          "Thaanppu (Cold) aanu mone! ❄️",
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
          "Chandraneyulla aakarshanam moolam kadal uyarunnathu. 🌙",
          "Vellam karaye nokki uyarukayum thaazhukayum cheyyunnathu. 🌊",
          "Oettavum Erakkavum (Tide) aanu mone! ⬆️",
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
          "Vellathil kaanunna shakthamaaya ozhukku. 🌊",
          "Kadalanathil aalkkaare koodi ozhikki kondu pokunno force. 🏊",
          "Ozhukku (Current) aanu mone! ➡️",
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
          "Oru sthalaththe dherghakaala kaalaavastha. 🍂",
          "Global Warming moolam marunna sthithi. 🌧️",
          "Kaalaavastha (Climate) aanu mone! ☀️",
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
          "Maasangal kazhiyumbol marunna kaalam (Summer, Winter, Monsoon). 🌸",
          "Varshathil 4 thavanayayi marunna weather pattern. ☀️",
          "Rithu / Season aanu mone! ❄️",
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
          "Bhoomiyudey chuttumulla kaattinte paali. ☁️",
          "Nammal shwasikkan aavashyamaaya oxygen ulla space. 🌌",
          "Avanavrutham / Atmosphere aanu mone! 🌬️",
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
          "Surayano Chandrano nillalil marayunna avastha. ☀️",
          "Grahanam ennu vilikkunna prathibhasa. 🌑",
          "Grahanam (Eclipse) aanu mone! 🌙",
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
          "Kaattil vellathinte amsham koodumpol ullath. 💧",
          "Keralathil eppozhum nannayi veyarppikkan kaaranam. ☀️",
          "Aardratha (Humidity) aanu mone! 🌧️",
          "Amount of water vapor in air."
        ]
      }
    ]
  },

  /* ================= GROUP 6: EMOTIONS & INTERNAL STATES ================= */
  {
    groupId: 6,
    groupName: "Emotions & Mind",
    groupConnection: ["emotions", "feelings", "mind", "വികാരങ്ങൾ"],
    riddles: [
      {
        id: 51,
        question: "🌈 + 💭 + ✨ = ?",
        options: ["Hope", "Dream", "Wish", "Love"],
        correctAnswer: "Hope",
        cleanAnswer: "Hope",
        clues: [
          "Nallathu nadakum enna vishwasam. 🌈",
          "Iruttil ninnum velicham kaanunna feeling. ✨",
          "Pratheeksha (Hope) aanu mone! 💭",
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
          "Pretham kaanumbol nenju thudikkunna avastha. 😱",
          "Iruttil ottakku nikkumbol varunna feeling. 🖤",
          "Bhayam (Fear) aanu mone! 👻",
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
          "Mukham chuvannu choodaagunna mood. 😡",
          "Kopam allel Deshyam. 🔥",
          "Deshyam (Anger) aanu mone! 💥",
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
          "Bhayathine neridaan ullil ulla dhyryam. 🦁",
          "Risk edukkan prachodanam nalkunna shakthi. ⚔️",
          "Dhyryam (Courage) aanu mone! 🛡️",
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
          "Kaathirikkaan ullathil samadhanam kaanunnathu. 🧘",
          "Kopam thadayan ulla kazhivu. 🕊️",
          "Kshamatha (Patience) aanu mone! ⏳",
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
          "Kooduthal ariyaan ulla aagraham. 🔍",
          "Kuttikalil eppozhum kaanunna chinthakal. ❓",
          "Kouthukam / Curiosity aanu mone! 🧠",
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
          "Padikaathe thanne ullil ninnum pettennu varunna response. 🐅",
          "Janthukalkku aapatthil thonnikkunna prirodha kazhivu. ⚡",
          "Naisargika vaasan (Instinct) aanu mone! 🧠",
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
          "Thettu cheydha pinne ullil varunna vishamatha. 😔",
          "Manasaakshiyude kuthu. 💔",
          "Kuttabhodham (Guilt) aanu mone! ⚖️",
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
          "Swantham neettathil thonnikkunna abhimaanam. 👑",
          "Mayil peeli thadunnathu pole ullil ulla feeling. 🦚",
          "Abhimaanam (Pride) aanu mone! ✨",
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
          "Mattullavarde valarchayil varunna kshama kedu. 😒",
          "Kungan eye feeling. 👀",
          "Asooya (Jealousy) aanu mone! 🐍",
          "Envious feeling towards someone's success."
        ]
      }
    ]
  },

  /* ================= GROUP 7: SOCIAL & TRUTH ================= */
  {
    groupId: 7,
    groupName: "Language & Truth",
    groupConnection: ["social", "truth", "language", "വാക്കുകളും സത്യവും"],
    riddles: [
      {
        id: 61,
        question: "💎 + ☀️ + 🗣️ = ?",
        options: ["Truth", "Lie", "Fact", "Word"],
        correctAnswer: "Truth",
        cleanAnswer: "Truth",
        clues: [
          "Marachu vechanal polum velichathil varunna sangathi. 💎",
          "Kalla tharathil parayaatha yaathardhyam. ☀️",
          "Sathyam (Truth) aanu mone! 🗣️",
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
          "Pinokio moongiya pole mookku neelunna sangathi. 🤥",
          "Sathya allatha parayunna vishayam. 🎭",
          "Kallam (Lie) aanu mone! 🗣️",
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
          "Mattullavare kurichu charpara samsarikunnathu. 🗣️",
          "Nattar idayil parakkunna kadhakal. 👂",
          "Kudumbasutram / Gossip aanu mone! 🤫",
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
          "Samoohathil ninakku ulla nalla per. 🏆",
          "Undakkan varshangal venam, kalayaan sec matham. 🌟",
          "Sunamaam / Reputation aanu mone! 👥",
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
          "Kanneerodukkaatha vishwasam. 🤝",
          "Bhangapettaal thirichu kittan paadulla vishwasam. 🔒",
          "Vishwasam (Trust) aanu mone! 💖",
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
          "Changathimar thammil ulla sneha bandham. 👫",
          "Tea kadayil valarunna bandham. ☕",
          "Souhrudham (Friendship) aanu mone! 💖",
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
          "Aksharangal koodi cherrnu undaagunnathu. 🔤",
          "Samsarikumbol purathokku varunnathu. 🗣️",
          "Vaakku (Word) aanu mone! 📄",
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
          "Nee ippol kalichukondirikkunna item. ❓",
          "Budhikkum chinthakkum paare vekkunna chodyam. 🧩",
          "Kadamkdha (Riddle) aanu mone! 🧠",
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
          "Muthassi parayu tharunna rasanulla varnana. 📖",
          "Thudakkavum avasanavum ulla katha. 🎬",
          "Katha (Story) aanu mone! 💭",
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
          "Malayalam, English ennorokke parayunna samsara madhyamam. 🗣️",
          "Aashayavinimayathinu upayogikunno reethi. 🌐",
          "Bhasha (Language) aanu mone! 💬",
          "System of communication used by a nation."
        ]
      }
    ]
  },

  /* ================= GROUP 8: LIFE CHOICES & DESTINY ================= */
  {
    groupId: 8,
    groupName: "Choices & Destiny",
    groupConnection: ["life", "choices", "destiny", "വിധിയും തീരുമാനവും"],
    riddles: [
      {
        id: 71,
        question: "🚪 + 🔑 + ✨ = ?",
        options: ["Opportunity", "Luck", "Future", "Door"],
        correctAnswer: "Opportunity",
        cleanAnswer: "Opportunity",
        clues: [
          "Jeevithathil otta thavana maathram muttunna vaathil. 🚪",
          "Valaran kittunna nalla avasaram. 🔑",
          "Avasaram (Opportunity) aanu mone! ✨",
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
          "Aalochichu urappikunna theerumaanam. 🤔",
          "Vazhiyethu venam ennu urappikkkunnathu. 🔀",
          "Theerumaanam (Decision) aanu mone! ⚖️",
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
          "Padikkaan sahayikkunna dhavala pravruthikal. ❌",
          "Patty poya thettu. 🤦",
          "Thettu (Mistake) aanu mone! 📚",
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
          "Head-il ezhuthi vechitund ennu parayunna vidhi. 🔮",
          "Maataan pattatha kaala thirakkadha. 📜",
          "Vidhi (Fate) aanu mone! 🌌",
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
          "Karuthiyathilum kooduthal nallathu pettennu sambhavikkunnathu. 🎲",
          "Four leaf clover tharunna bhagyam. 🍀",
          "Bhagyam (Luck) aanu mone! ✨",
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
          "Aarkkum adimayaakaathe swathanthramaayi jeevikkan ulla kazhivu. 🕊️",
          "Kootil ninnum purath varunna avastha. 🔓",
          "Swathanthriyam (Freedom) aanu mone! 🌌",
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
          "Sathyanikku nalkenna neethi. ⚖️",
          "Court-il ninnum kittunna nyayam. 🏛️",
          "Neethi (Justice) aanu mone! 🔨",
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
          "Yudhavum prashnangalum illatha nalla sthithi. 🕊️",
          "Manassil varunna samadhanam. 🧘",
          "Samadhanam (Peace) aanu mone! 🌿",
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
          "Onnum kaaryamaayi control-il illatha kuzhamachanthy. 🌪️",
          "Order illatha sthithi. 💥",
          "Kuzhapam (Chaos) aanu mone! 🤼",
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
          "Ellam uruppode chernnu pokunna layam. 🎶",
          "Laya vinimayam ennu parayunnathu. ☯️",
          "Layam / Harmony aanu mone! 🕊️",
          "State of peaceful agreement and concord."
        ]
      }
    ]
  },

  /* ================= GROUP 9: PERCEPTION & SENSES ================= */
  {
    groupId: 9,
    groupName: "Senses & Illusions",
    groupConnection: ["senses", "perception", "illusions", "ഇന്ദ്രിയങ്ങൾ"],
    riddles: [
      {
        id: 81,
        question: "👃 + 🌹 + 💨 = ?",
        options: ["Smell", "Taste", "Air", "Flower"],
        correctAnswer: "Smell",
        cleanAnswer: "Smell",
        clues: [
          "Mookku kondu ariyunna sugandhavum durghandhavum. 👃",
          "Poovin aduth pokumbol thonnikkunna vasthu. 🌹",
          "Manam (Smell) aanu mone! 💨",
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
          "Naaku kondu ariyunna madhuravum erivum. 👅",
          "Bhaksanam kazhikkumbol kittunna ruchi. 🍬",
          "Ruchi (Taste) aanu mone! 🌶️",
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
          "Kayyo thodumbol ariyunna sparshanam. ✋",
          "Choodum thaanppum alari tharan sahayikunno sensory experience. 🌵",
          "Sparshanam (Touch) aanu mone! 🪨",
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
          "Kannu thurannal kaanunna kazhcha. 👁️",
          "Velichathil vividha varnangal kaanul. 🌈",
          "Kazhcha (Sight) aanu mone! ☀️",
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
          "Sathyam ennu thonnikkunna maaya. 🌀",
          "Kannukale pattikkunna visual trick. 👁️",
          "Maaya (Illusion) aanu mone! 😵",
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
          "Tharubhoomiyil vellam undu ennu thonnikkunna kazhcha. 🏜️",
          "Choodu moolam road-il vellam kaanunna thondal. ☀️",
          "Marubhoomi jalam / Mirage aanu mone! 💧",
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
          "Kinarinte thazhekk ulla alavu. 🕳️",
          "Kadalinethra aazham undu ennu nokkunno distance. ⬇️",
          "Aazham (Depth) aanu mone! 📏",
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
          "Malakalkkum aalkalkkum mukalilekk ulla alavu. 🏔️",
          "Ethra podakkam undu ennu nokkunnathu. ⬆️",
          "Uyaram (Height) aanu mone! 📏",
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
          "Rendu sthalangal thammil ulla dhooram. 🛣️",
          "Kilometer-il mekkunna gap. 📍",
          "Dhooram (Distance) aanu mone! 🚗",
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
          "Muramurapoo nermayo thodumbozhe ariyunna surface quality. 🧱",
          "Paarakkum noolukkum alankaram tharunna surface feel. 🧶",
          "Neythu feel / Texture aanu mone! ✋",
          "Feel, appearance, or consistency of a surface."
        ]
      }
    ]
  },

  /* ================= GROUP 10: LOGIC & QUANTITIES ================= */
  {
    groupId: 10,
    groupName: "Patterns & Logic",
    groupConnection: ["logic", "quantities", "math", "ഗണിത ചിന്തകൾ"],
    riddles: [
      {
        id: 91,
        question: "0️⃣ + 🚫 + 🕳️ = ?",
        options: ["Zero", "Nothing", "Number", "Empty"],
        correctAnswer: "Zero",
        cleanAnswer: "Zero",
        clues: [
          "Aryabhatta kandupidicha valiya sankhya value. 0️⃣",
          "Onnum illathirikkunna number. 🚫",
          "Pujyam (Zero) aanu mone! 🕳️",
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
          "Avasanam illatha alavu. ♾️",
          "8-ne thirichu vecha symbol. 🔄",
          "Ananthatha (Infinity) aanu mone! 🌌",
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
          "Muthukal aavarthichu varunna maadhiri. 🔲",
          "Aavarthana reethiyil ulla design. 🔺",
          "Maadhiri / Pattern aanu mone! 🇱🇧",
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
          "Melathinteyum paattinteyum thalam. 🥁",
          "Chenda kottumbol kaanunna rhythmic pattern. 🕺",
          "Thalam (Rhythm) aanu mone! ⏱️",
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
          "Rendu pakshavum nerkku ner ottha samathwam. 🦋",
          "Kannaadiyil kaanunnathu pole rendu vazhiyum samamaaya shape. ⚖️",
          "Samamathma / Symmetry aanu mone! 🪞",
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
          "Rendu pakshangal thammil samamaakkunna ganitha vaakaayam. 🟰",
          "Plus-um minus-um cherthu vakkunna equation. ➕",
          "Ganitha samavaakyam (Equation) aanu mone! ➖",
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
          "Rendu sankhyakal thammil ulla anupaatham (e.g., 2:1). 🍕",
          "Mix cheyyan upayogikunno proportion measure. 🔢",
          "Anupaatham (Ratio) aanu mone! 📐",
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
          "Jayikkaan ulla saadhyatha alavu. 🎲",
          "Betting site-il kaanunna probability. 📈",
          "Saadhyatha (Odds) aanu mone! 🎯",
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
          "Ellam koodi kootti ennam kondu vakukkumbol kittunno mean. 📊",
          "Mark list-il kaanunna sadharana alavu. ➗",
          "Saraasari (Average) aanu mone! ➕",
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
          "Rendu kaaryangal thammil ulla vyathyaasam. ➖",
          "Minus cheyumbol kittunno utharu. 🔀",
          "Vyathyaasam (Difference) aanu mone! 🔍",
          "Point or way in which things are not the same."
        ]
      }
    ]
  },

  /* ================= GROUP 11: DYNAMICS & MOTION ================= */
  {
    groupId: 11,
    groupName: "Physics of Motion",
    groupConnection: ["motion", "physics", "dynamics", "ചലന നിയമങ്ങൾ"],
    riddles: [
      {
        id: 101,
        question: "📳 + 🔔 + 🔊 = ?",
        options: ["Vibration", "Sound", "Wave", "Frequency"],
        correctAnswer: "Vibration",
        cleanAnswer: "Vibration",
        clues: [
          "Phone ring cheyyumbol kaanunna ilakkam. 📳",
          "Kambi idumbol shabdam undakkunna chalanangal. 🔔",
          "Kampanam (Vibration) aanu mone! 🔊",
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
          "Oru shabdam mattondine vira kollikkunna prathibhasa. 🎸",
          "Guitar body-il shabdam valuthaagunna reethi. 🔊",
          "Anunaadam (Resonance) aanu mone! 🌊",
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
          "FM Radio set cheyyunna Hertz measure (93.5 FM). 📻",
          "Oru second-ile wave counts. 〰️",
          "Aavruthi (Frequency) aanu mone! 📡",
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
          "Nee nillaathe neengunno sthithi. 🏃",
          "Chalanam ennu parayunna physical activity. 🚲",
          "Chalanam (Motion) aanu mone! 🏃‍♂️",
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
          "Irunnathil ninnum pettennu maaraan ullakeda. 🛋️",
          "Bus break idumbol munnott thallunna kaaranam. 🛑",
          "Jadatha (Inertia) aanu mone! 😴",
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
          "Vandiyude accelerator thakukkumbol varunnathu. 🏎️",
          "Speed koodikondirikkunna rate of change. 🚀",
          "Twarana (Acceleration) aanu mone! 📈",
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
          "Ball thirinjukondu pokunna reethi. 🌀",
          "Leg spin allel Off spin throw. ⚽",
          "Karakkam / Spin aanu mone! 🔄",
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
          "Joli kazhinju sharirathinu nalkunna vishramam. 🛏️",
          "Alpam samayam urangathe thanne kidakkunnathu. 🧘",
          "Vishramam (Rest) aanu mone! 😴",
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
          "System illatha poornnamaaya thakaraaru. 💥",
          "Adukkum chitteriyum illatha sthithi. 🌪️",
          "Kuzhapam (Chaos) aanu mone! 🤼",
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
          "Ellam sthanathu thakkabaadiyil vekkunno reethi. 📚",
          "Adukkum chittayum ulla avastha. 📐",
          "Chitta / Order aanu mone! 🧹",
          "Arrangement of people or things in sequence."
        ]
      }
    ]
  },

  /* ================= GROUP 12: KNOWLEDGE & LEARNING ================= */
  {
    groupId: 12,
    groupName: "Intellect & Learning",
    groupConnection: ["knowledge", "learning", "intellect", "അറിവും ചിന്തയും"],
    riddles: [
      {
        id: 111,
        question: "👴 + 📚 + 💡 = ?",
        options: ["Wisdom", "Knowledge", "Age", "Thought"],
        correctAnswer: "Wisdom",
        cleanAnswer: "Wisdom",
        clues: [
          "Anubhavangalil ninnum kittunna nalla budhi. 👴",
          "Vayassayavarde chinthagalkku ulla aazham. 💡",
          "Jnanam / Wisdom aanu mone! 📚",
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
          "Vayana moolam nedunno arivu. 📖",
          "School-il ninnum kittunna valiya sambath. 🎒",
          "Arivu (Knowledge) aanu mone! 🧠",
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
          "Pala varshangalaayi thozhil cheydhu nediya kazhivu. 🛠️",
          "Kazhinjupoya kaalam nalkiya padangal. ⏳",
          "Parichayasambath (Experience) aanu mone! 👴",
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
          "Abhyaasam kondu nediyanguyya nypunyam. 🎨",
          "Oru kaaryam nannayi cheyyan ulla kazhivu. 🎯",
          "Kazhivu / Nypunyam (Skill) aanu mone! 🎸",
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
          "Oru karyathil maathram manassu urpikkunnathu. 🧘",
          "Lakshyathil ninnum Shradha maarathe nirkkunno sthithi. 🎯",
          "Ekagratha (Focus) aanu mone! 🔍",
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
          "Teacher class-il parayumbol nalkendi varunnathu. 👀",
          "Shradha nalkunnathu. ⚠️",
          "Shradha (Attention) aanu mone! 👂",
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
          "Arivillathirikkunna avastha. 🙈",
          "Kaaryangale kurichu avabodham illayima. 🚫",
          "Ariyayka (Ignorance) aanu mone! 🧠",
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
          "Urppillathirikkunna avastha. 🤔",
          "Manassil varunna samshayam. ❓",
          "Samshayam (Doubt) aanu mone! ⚖️",
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
          "Nooru sathmaanavum urappulla sthithi. 💯",
          "Samshayame illatha avastha. 🔒",
          "Urappu (Certainty) aanu mone! ✨",
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
          "Mumbae ullathum aarkkum ariyaathathumaaya karyam kandupidikkunnathu. 🗺️",
          "Columbus America kandupidichathu pole. 🔍",
          "Kandethal (Discovery) aanu mone! 💡",
          "Act of finding something unexpectedly."
        ]
      }
    ]
  },

  /* ================= GROUP 13: SOUNDSCAPE ================= */
  {
    groupId: 13,
    groupName: "Auditory World",
    groupConnection: ["sound", "auditory", "noise", "ശബ്ദപ്രപഞ്ചം"],
    riddles: [
      {
        id: 121,
        question: "🔊 + 📢 + 💥 = ?",
        options: ["Noise", "Sound", "Voice", "Echo"],
        correctAnswer: "Noise",
        cleanAnswer: "Noise",
        clues: [
          "Kekaam thonnathe veruppikunna bahalam. 📢",
          "Traffic-il ninnum uyarunna kela shabdam. 💥",
          "Bahalam / Noise aanu mone! 🔊",
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
          "Cheviyil thaka thaka adichu parayunna melleshabdam. 🤫",
          "Chundu maathram ilakki parayunna samsaram. 👂",
          "Mellensamsaram / Whisper aanu mone! 🌬️",
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
          "Eenaam moolunnathaaya continuous sound. 🐝",
          "Motor-um eechakalum undakkunna nuna shabdam. 🪰",
          "Moolal (Hum) aanu mone! 🔊",
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
          "TV signal poyaal varunna shhh-shhh shabdam. 📺",
          "Radio-il channel kittatha polulla karakara sound. 📻",
          "Noise / Static aanu mone! ⚡",
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
          "Show kazhinjaal kayyadichu aaraadhikunnathu. 👏",
          "Audience kayyadikkunna continuous sound. 🎉",
          "Kayyadi (Applause) aanu mone! 🎭",
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
          "Kettaal manassu kulirkkunna eenaam. 🎶",
          "Paattinte snehamulla tune. 🎼",
          "Eenaam / Melody aanu mone! 🎵",
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
          "Shabdathinte koortha alavu (High or Low). 🔊",
          "Thonda urakkan parayumbol marunna frequency. ↗️",
          "Pitch aanu mone! 🎶",
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
          "Samsarikumbol ullavarkku thonnikkunna bhavam (Friendly or Harsh). 🔊",
          "Sound-inte unique quality character. 🎨",
          "Bhavam / Tone aanu mone! 🎶",
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
          "Pettennu varunna valiya kela sound. 🌩️",
          "Idi vettunnathu pole ulla mulakkam. 💥",
          "Mulakkam / Clamor aanu mone! 🔊",
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
          "Singam alakadakkumbol varunna valiya shabdam. 🦁",
          "Kaattine nadukkunna sound. 👑",
          "Garbhanam (Roar) aanu mone! 🔊",
          "Full, deep, prolonged cry uttered by a lion."
        ]
      }
    ]
  },

  /* ================= GROUP 14: VALUE & WEALTH ================= */
  {
    groupId: 14,
    groupName: "Economics & Value",
    groupConnection: ["value", "wealth", "money", "മൂല്യവും ധനവും"],
    riddles: [
      {
        id: 131,
        question: "💎 + ⚖️ + 🌟 = ?",
        options: ["Worth", "Value", "Price", "Cost"],
        correctAnswer: "Worth",
        cleanAnswer: "Worth",
        clues: [
          "Oru saadhanathinu ulla aantharika moolyam. 💎",
          "Kaasinekkaal vilapetta sangathi. ⚖️",
          "Moolyam (Worth) aanu mone! 🌟",
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
          "Kadayil chotikunna MRP amount. 🏷️",
          "Vangan nalkendi varunna roopa amount. 💵",
          "Vila (Price) aanu mone! 🛒",
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
          "Oru karyam cheydh theerkan nalkendi varunna chilavu. 💸",
          "Uthpadanathinu aaya motham expense. 📉",
          "Chilavu (Cost) aanu mone! 🧾",
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
          "Mattullavaril ninnum vaangithu thirichu kodukkan ulla kadam. 💳",
          "Thirichu kodukkan ulla thoga. 🧾",
          "Kadam (Debt) aanu mone! ⏳",
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
          "Dhaaralam panavum swathum ulla avastha. 🏰",
          "Kure kaalam kondu nediyanguyya swathu. 💰",
          "Sambhath (Wealth) aanu mone! 👑",
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
          "Muthalkkoottukal illatha dharidryam. 🏚️",
          "Basic aavashyagal polum niraveraan pattatha avastha. 🍞",
          "Dharidryam (Poverty) aanu mone! 🚫",
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
          "Aavashyathinekkal kooduthal ulla aabhajaada. 🏎️",
          "Valiya vilappedutha sugha jeevitham. 🍾",
          "Bhogha sugham / Luxury aanu mone! 💎",
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
          "Kadayil chennu vila kurakkaan parayunnathu. 🤝",
          "Laabhathil kittiya vaanganal. 📉",
          "Vila pesal / Bargain aanu mone! 🏷️",
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
          "Business-il chilavukal kazhinju baakki varunna labham. 📈",
          "Kachavadathil kittunna labham. 💰",
          "Laabham (Profit) aanu mone! 💼",
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
          "Kachavadhathil panam nashtappedunnathu. 📉",
          "Puthiya venture-il pattiya aabhatthu. 💸",
          "Nastar (Loss) aanu mone! 😭",
          "Fact or process of losing something or money."
        ]
      }
    ]
  },

  /* ================= GROUP 15: SAFETY & DANGER ================= */
  {
    groupId: 15,
    groupName: "Safety & Hazards",
    groupConnection: ["safety", "hazard", "risk", "സുരക്ഷയും അപകടവും"],
    riddles: [
      {
        id: 141,
        question: "🎲 + ⚠️ + 🕳️ = ?",
        options: ["Risk", "Danger", "Fear", "Chance"],
        correctAnswer: "Risk",
        cleanAnswer: "Risk",
        clues: [
          "Nashtam sambhavikkan saadhyathayulla karyam cheyyunnathu. 🎲",
          "Nee edukkunna chandi tharakam. ⚠️",
          "Aapadhyalayam / Risk aanu mone! 🕳️",
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
          "Apakadam kaanikkunna red signal board. 🔴",
          "Kaaryangalka thakaraaru varan ulla aapadhu. ⚠️",
          "Apakadam (Danger) aanu mone! 🛑",
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
          "Apakadangalil ninnum maari irikkunna sthithi. 🛡️",
          "Seatbelt-um Helmet-um nalkunno protection. 🥽",
          "Suraksha (Safety) aanu mone! 🏠",
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
          "Upadravikkaan varunna bheeshani. 🐅",
          "Aapathu sambhavikkum enna munariyippu. ⚔️",
          "Bheeshani (Threat) aanu mone! 💥",
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
          "Aapathukalil ninnum kaathu rakshikunnathu. 💂",
          "Kotta maadhiri kaaval nillkkunno shield. 🛡️",
          "Sanrakshanam (Protection) aanu mone! 🏰",
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
          "Thee pidikkumbol kettu kelkkunna sound signal. 🚨",
          "Kaalaththu unaraaan set cheyyunna bell. 🔔",
          "Alaram (Alarm) aanu mone! 🔊",
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
          "Pettennu chikitsho rakshayo aavashyamaaya sthithi. 🚑",
          "Ambulance-il vilikunno urgent situation. 🆘",
          "Avasiyagattam / Emergency aanu mone! 🚨",
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
          "Vellathil munngunnavane puratheduthu rakshikunnathu. 🛟",
          "Fireforce cheyyunna raksha pravarthanam. 👨‍🚒",
          "Rakshappeduthel / Rescue aanu mone! 🆘",
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
          "Elikku vekkunna keni. 🧀",
          "Pinneel purathukadavatha keniyil peduthel. 🪤",
          "Keni (Trap) aanu mone! 🕸️",
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
          "Jail-il ninno keniyil ninno rakshappedunnathu. 🏃",
          "Aapathil ninnum purathukaddakkunnathu. 🚪",
          "Rakshappedal (Escape) aanu mone! 🔓",
          "Break free from confinement or control."
        ]
      }
    ]
  },

  /* ================= GROUP 16: SIGNALS & MESSAGES ================= */
  {
    groupId: 16,
    groupName: "Communication Signals",
    groupConnection: ["signals", "messages", "code", "സന്ദേശങ്ങളും അടയാളങ്ങളും"],
    riddles: [
      {
        id: 151,
        question: "📶 + 🚦 + 📡 = ?",
        options: ["Signal", "Code", "Wave", "Message"],
        correctAnswer: "Signal",
        cleanAnswer: "Signal",
        clues: [
          "Phone-il range kaanikkunna bar setup. 📶",
          "Traffic light-il kaanunna instruction lights. 🚦",
          "Soochana / Signal aanu mone! 📡",
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
          "Software developer-maar ezhuthunna program lines. 💻",
          "Rahashya aashayangalkk upayogikunno symbols. 🔣",
          "Kodu (Code) aanu mone! 🔐",
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
          "WhatsApp-il ayakkunna sandesham. 💬",
          "Oraal mattoraalkku nalkunna Vivaram. 📲",
          "Sandesham (Message) aanu mone! ✉️",
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
          "Utharam kandethaan sahayikkunna chiriya soochana. 🧩",
          "Game-il aavashyam varumbol nedunna clue. 🔍",
          "Soochana (Hint) aanu mone! 💡",
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
          "Apakadam sambhavikkam enna munariyippu. ⚠️",
          "Teacher tharunna final warning. 📢",
          "Munariyippu (Warning) aanu mone! 🛑",
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
          "Naattil sambhavicha puthiya karyangal TV-il parayunnathu. 📰",
          "Vartha ennu vilikkunna media reports. 📺",
          "Vartha (News) aanu mone! 🎙️",
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
          "Sathyam aano ennu urappillatha nattil parakkunna katha. 🗣️",
          "Kaattu pole parakkunna kalla katha. 🍃",
          "Vadanthi / Rumor aanu mone! 🤫",
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
          "Phone-il samsarikkan vilikunnathu. 📞",
          "Ringtone adichu varunna phone vili. 🔔",
          "Vili / Call aanu mone! 📲",
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
          "Signal aakaashathukondu maattunnathu. 📡",
          "Live telecast nadathunna technical process. 🌐",
          "Prasaranam (Transmission) aanu mone! ⚡",
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
          "Kai kondum thala kondum kaanikkunna aadayalam. 👋",
          "Samsarikaathe sancharikkaab kaanikkunna signs. 🖐️",
          "Aangyam / Gesture aanu mone! 🙋",
          "Movement of body part to express an idea."
        ]
      }
    ]
  },

  /* ================= GROUP 17: HUMAN BONDS ================= */
  {
    groupId: 17,
    groupName: "Relationships & Bonds",
    groupConnection: ["bonds", "relationships", "unity", "ബന്ധങ്ങളും ഐക്യവും"],
    riddles: [
      {
        id: 161,
        question: "🔗 + 🤝 + 💖 = ?",
        options: ["Bond", "Trust", "Union", "Love"],
        correctAnswer: "Bond",
        cleanAnswer: "Bond",
        clues: [
          "Aalkkal thammil uracha sneha bandham. 🔗",
          "Potty povatha aathmartha bandham. 💖",
          "Bandham (Bond) aanu mone! 🤝",
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
          "Rendu teams thammil ulla valiya thakkeda kottu. 🥊",
          "India vs Pakistan cricket matche pole ulla porattam. ⚔️",
          "Vairam / Rivalry aanu mone! 🤼",
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
          "Ellavarum orumichu nirkkunna ottakettu. ✊",
          "Otta manassayi pravarthikunna sthithi. 🤝",
          "Aikyam (Unity) aanu mone! 👥",
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
          "Rendu per thammil agalunnathu. 💔",
          "Orumichu undayirunnavar aliyunna sthithi. ✂️",
          "Veyukal (Separation) aanu mone! 🚷",
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
          "Rendu kaaryangalo aalkkalo thammil ulla aadaalam. 🔌",
          "Wi-Fi join cheyyunnathu pole ulla bandham. 🌐",
          "Bandham / Connection aanu mone! 🤝",
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
          "Naye pole vishwasthathayode nirkkunno guna. 🐕",
          "Ennum oppam maathram nillkkunna vishwasam. 🛡️",
          "Vishwasthatha (Loyalty) aanu mone! 👑",
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
          "Chathichu muthugil kuthunno pravruthi. 🗡️",
          "Vishwasikunnathavanal kittunna van chathikkal. 💔",
          "Chathikkal (Betrayal) aanu mone! 🐍",
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
          "Mattullavarkku snehatthode nalkunna dhaya. 🌸",
          "Dhayayulla manassu. 🤲",
          "Dhaya / Kindness aanu mone! 💖",
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
          "Muthiyorrkku nammal nalkunna bahumaanam. 🫡",
          "Aalkkarude guna-ganangal kandu nalkunna aadharam. 👑",
          "Bahumaanam (Respect) aanu mone! 🙇",
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
          "Sahayam kittiyaal ullil varunna nandhi. 🙏",
          "Manassariju tharunno Thanks feeling. 💖",
          "Nandhi (Gratitude) aanu mone! 📜",
          "Quality of being thankful."
        ]
      }
    ]
  },

  /* ================= GROUP 18: TIME ERA & CYCLES ================= */
  {
    groupId: 18,
    groupName: "Eras & Cycles",
    groupConnection: ["era", "cycles", "rhythm", "കാലചക്രം"],
    riddles: [
      {
        id: 171,
        question: "⏳ + 📜 + 🏛️ = ?",
        options: ["Past", "History", "Yesterday", "Era"],
        correctAnswer: "Past",
        cleanAnswer: "Past",
        clues: [
          "Kazhinjupoya samayam. ⏳",
          "Iniyum thirichu varatha pazhaya kaalam. 📜",
          "Bhoothakaalam (Past) aanu mone! 🏛️",
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
          "Ippol nadannukondirikkunna samayam. ⏱️",
          "Jeevitham namukku nalkiya sabhaagya gift. 🎁",
          "Varthamanakaalam (Present) aanu mone! 📍",
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
          "Work submit cheyyan ulla avasana samayam. ⏰",
          "Athinu thazhe poyaal pani paalum. 🛑",
          "Deadline aanu mone! 📅",
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
          "Divasathile jolikal ezhuthi vechitulla samaya kramam. 📝",
          "Time table ennu vilikunna plan. 🗓️",
          "Samayakramam (Schedule) aanu mone! ⏰",
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
          "Dinosaur kaalam pole ulla mahanaya kaalagattom. 🦖",
          "Charithrathile ninaakkalulla period. 🏛️",
          "Yugam / Era aanu mone! ⏳",
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
          "Aavarthichu thirichu varunna kaala chakram. 🔄",
          "Raavum pakalum maari maari varunno pattern. 🌙",
          "Kaalachakram (Cycle) aanu mone! ☀️",
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
          "Chandrante roopam marunna vibhaagangal. 🌕",
          "Jeevithathile maari varunna gattangal. 🌒",
          "Gattam (Phase) aanu mone! 🌑",
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
          "Paattinte vegatha alavu. 🎼",
          "Fast song-il kooduthal ulla speed measure. 🥁",
          "Paattu vegatha / Tempo aanu mone! ⏱️",
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
          "Suryan aakaashathil ulla samayam. ☀️",
          "Velicham ulla prabhadhakaalam. 🌄",
          "Pagal (Daytime) aanu mone! 🌇",
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
          "Suryan marannu urangaan time aagunnathu. 🌃",
          "Iruttaayal kaanunna samayam. 🌌",
          "Raathri (Nighttime) aanu mone! 💤",
          "Time between sunset and sunrise."
        ]
      }
    ]
  },

  /* ================= GROUP 19: ATMOSPHERIC WEATHER ================= */
  {
    groupId: 19,
    groupName: "Natural Events",
    groupConnection: ["weather", "events", "nature", "പ്രകൃതി പ്രതിഭാസങ്ങൾ"],
    riddles: [
      {
        id: 181,
        question: "☀️ + 🌾 + 🚫 = ?",
        options: ["Drought", "Heat", "Summer", "Famine"],
        correctAnswer: "Drought",
        cleanAnswer: "Drought",
        clues: [
          "Vellam kittaathe paadam varandu pokunnathu. 🌾",
          "Mazha illathe varacha varunna avastha. ☀️",
          "Dharidryam / Drought aanu mone! 🚫",
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
          "Kure mazha peydhu nattil vellam kearunnathu. 🌧️",
          "Kerala 2018-il kandathaaya vellapokkam. 🌊",
          "Vellapokkam (Flood) aanu mone! 🏠",
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
          "Bhoomi tharikkan thudangumbol ulla kulukkam. 🫨",
          "Bhoomikulukkatthinte cheriya tharakam vibration. 💥",
          "Bhoomi kulukkam / Tremor aanu mone! 🌋",
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
          "Kadalarikil ninnu thazhukunna cheru kaattu. 🍃",
          "Manassinu sugham tharunna mendha maaruthan. 😌",
          "Ilakaattu / Breeze aanu mone! 💨",
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
          "Munnar-il raavile pulleduthu kaanunna manjuthullikal. 🌿",
          "Thaanppathil ഉറഞ്ഞു koodiya glass layer. 🧊",
          "Manju urayal / Frost aanu mone! 🌅",
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
          "Raavile ilagaludey mukalil kaanunna vellathullikal. 🌿",
          "Pularkalathil viriyunna prakrithi manju thulli. 🌅",
          "Manjuthulli (Dew) aanu mone! 💧",
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
          "Kangal kooshikkunna valiya velicham. ☀️",
          "Kannaadiyil tatthi kannilekk adikkunna choodu light. 🪞",
          "Kannukooshikkal / Glare aanu mone! 🙈",
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
          "Road-il munnil ulla vandi kaanan pattatha tharathil ulla manju. ☁️",
          "Wayanad-il raavile kaanunna kooriruttu manju. 🚗",
          "Manju (Fog) aanu mone! 🌫️",
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
          "Thee kathumbol mukalilekk uyarnnu pokunna puka. 🔥",
          "Chura churappu ulla karutha aavahasa layer. 🌫️",
          "Puka (Smoke) aanu mone! 💨",
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
          "Kattedutha viraku kathithernnal baakki varunna podi. 🪵",
          "Vellutha allel karutha nirathil ulla podi. 🔥",
          "Chaambal (Ash) aanu mone! 🌫️",
          "Powdery residue left after burning a substance."
        ]
      }
    ]
  },

  /* ================= GROUP 20: EXISTENCE & PHILOSOPHY ================= */
  {
    groupId: 20,
    groupName: "Philosophy of Being",
    groupConnection: ["philosophy", "existence", "soul", "തത്ത്വചിന്തയും നിലനിൽപ്പും"],
    riddles: [
      {
        id: 191,
        question: "🎯 + 🗺️ + ✨ = ?",
        options: ["Purpose", "Meaning", "Goal", "Life"],
        correctAnswer: "Purpose",
        cleanAnswer: "Purpose",
        clues: [
          "Nammal enthinu jeevikunnu enna lakshyam. 🎯",
          "Jeevithathinu artham nalkunna uddhesham. ✨",
          "Lakshyam / Purpose aanu mone! 🗺️",
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
          "Oru vaakkinteyo jeevithathinteyo thadassangal illatha artham. 📖",
          "Ullil thodunna aazhamulla artham. 💡",
          "Artham (Meaning) aanu mone! 💖",
          "What is meant by a word, text, concept, or action."
        ]
      },
      {
        id: 193,
        question: "✨ + 👤 + 👻 = ?",
        options: ["Soul", "Life", "Mind", "Spirit"],
        correctAnswer: "Soul",
        cleanAnswer: "Soul",
        clues: [
          "Shariram illathaayaalum marikkaatha athmaavu. ✨",
          "Sharirathinu ullekku urjjam tharunna chitham. 👻",
          "Aathmaavu (Soul) aanu mone! 👤",
          "Spiritual or immaterial part of a human being."
        ]
      },
      {
        id: 194,
        question: "🌍 + 👤 + ⏳ = ?",
        options: ["Existence", "Life", "World", "Being"],
        correctAnswer: "Existence",
        cleanAnswer: "Existence",
        clues: [
          "Nammal bhoomiyil jeevichirikkunna avastha. 🌍",
          "Ulla sthithi (State of being alive/real). ⏳",
          "Nilanillppu (Existence) aanu mone! 👤",
          "Fact or state of living or having objective reality."
        ]
      },
      {
        id: 195,
        question: "🆔 + 👤 + 🏷️ = ?",
        options: ["Identity", "Name", "Face", "Self"],
        correctAnswer: "Identity",
        cleanAnswer: "Identity",
        clues: [
          "Nee aaraanu ennu thirichariyikunno vyakthithwam. 🆔",
          "Ninne mattullavaril ninnum vyathyasthanaakkunnathu. 🏷️",
          "Vyakthithwam (Identity) aanu mone! 👤",
          "Fact of being who or what a person or thing is."
        ]
      },
      {
        id: 196,
        question: "🧠 + 💭 + 🌌 = ?",
        options: ["Mind", "Brain", "Thought", "Soul"],
        correctAnswer: "Mind",
        cleanAnswer: "Mind",
        clues: [
          "Vikaaragalum chinthagalum udikkunna manassu. 🧠",
          "Unseen mental space inside human. 🌌",
          "Manassu (Mind) aanu mone! 💭",
          "Element of a person that enables them to be aware."
        ]
      },
      {
        id: 197,
        question: "🏋️ + 🧠 + ⚡ = ?",
        options: ["Willpower", "Courage", "Power", "Focus"],
        correctAnswer: "Willpower",
        cleanAnswer: "Willpower",
        clues: [
          "Venam ennu urappichaal maattaan pattatha manodhyryam. 🏋️",
          "Thadayukale tharakam cheyyan thonnikkunna mano shakthi. ⚡",
          "Manoshakthi (Willpower) aanu mone! 🧠",
          "Control exerted to do something or restrain impulses."
        ]
      },
      {
        id: 198,
        question: "👁️ + 🧠 + 💡 = ?",
        options: ["Consciousness", "Mind", "Awareness", "Thought"],
        correctAnswer: "Consciousness",
        cleanAnswer: "Consciousness",
        clues: [
          "Booham illathirikkathirikkunna Bodham. 👁️",
          "Chuttum nadakkunnathine kurichu ulla bodham. 💡",
          "Bodham (Consciousness) aanu mone! 🧠",
          "State of being awake and aware of one's surroundings."
        ]
      },
      {
        id: 199,
        question: "🔮 + 🌌 + 👑 = ?",
        options: ["Destiny", "Fate", "Future", "Life"],
        correctAnswer: "Destiny",
        cleanAnswer: "Destiny",
        clues: [
          "Nee ethiyan vendi kaathirikkunna bhabhi destination. 🔮",
          "Jeevitham ninakkayi orukkiyithekkunno mahathaya lakshyam. 👑",
          "Niyogom / Destiny aanu mone! 🌌",
          "Events that will necessarily happen to a person."
        ]
      },
      {
        id: 200,
        question: "🏛️ + 📜 + ✨ = ?",
        options: ["Legacy", "History", "Story", "Honor"],
        correctAnswer: "Legacy",
        cleanAnswer: "Legacy",
        clues: [
          "Nee poyaalum nattukaru orkkunna ninne kurichulla nalla karyangal. 📜",
          "Kaalam thorum nilanilkkunna swathu / smarana. 🏛️",
          "Smarana / Legacy aanu mone! ✨",
          "Amount of money or historic memory left behind."
        ]
      }
    ]
  }
];