const catalog = [
  {
    name: "Coldplay",
    Month: "January",
    zodiac: "Capricorn",
    genre: "Alt Rock/Pop",
    vibe: "Hopeful & cosmic",
    image: "images/coldplay.jpg",
    bio: "Zodiac: Capricorn. Coldplay is classic Capricorn energy — grounded, intentional, and always evolving. From their early anthems to stadium-filling ballads, they’ve stayed true to their emotional core while reaching for something bigger. Their new album, Moon Music, feels like the next step in that journey: dreamy, reflective, and full of cosmic ambition."
  },
  {
    name: "The Weeknd",
    Month: "February",
    zodiac: "Aquarius",
    genre: "R&B/Pop",
    vibe: "Mysterious & magnetic",
    image: "images/weeknd.jpg",
    bio: "Born February 16, 1990 — Aquarius. True to his Aquarius sign, The Weeknd is magnetic, unpredictable, and always pushing the edge of what music can feel like. Whether he’s leading us through neon-soaked heartbreak or cinematic storylines, he moves through eras ahead of his time and makes music that sticks with the soul. He is Abel to do all things — 😉 get it?"
  },
  {
    name: "Rihanna",
    Month: "March",
    zodiac: "Pisces",
    genre: "Pop/R&B",
    vibe: "Unbothered & iconic",
    image: "images/rihanna.jpg",
    bio: "Born February 20, 1988 — Big Rihanna puts the B in billionaire. She is pure Pisces magic; imaginative, creative, and passionate. No one embodies the sign more. From music to fashion, beauty, and now motherhood, there’s no challenge too big. She leads with heart, reinvents on her own terms, and makes Pisces power look iconic."
  },
  {
    name: "Lady Gaga",
    Month: "April",
    zodiac: "Aries",
    genre: "Pop/Dance",
    vibe: "Bold & theatrical",
    image: "images/gaga.jpg",
    bio: "Born March 28, 1986 — Lady Gaga is the ultimate Aries. Bold, fearless, and unapologetically original, she doesn’t just perform — she transforms. Whether she’s delivering raw vocals at a piano or serving a full-blown fashion moment, Gaga leads with passion and intensity. Aries energy is all about blazing trails, and no one sets the stage on fire quite like her."
  },
  {
    name: "Ed Sheeran",
    Month: "May",
    zodiac: "Taurus",
    genre: "Acoustic Pop",
    vibe: "Humble & heartfelt",
    image: "images/ed sheeran.jpg",
    bio: "Born February 17, 1991 — Although Ed wasn’t born in May, his music is classic Taurus; warm, grounded, and quietly powerful. It feels like a handwritten letter: personal, timeless, and full of heart. With his signature acoustic sound and poetic lyrics, Ed doesn’t chase trends, he builds emotional connection, one song at a time. Reliable, romantic, and real… it’s giving Taurus."
  },
  {
    name: "Kendrick Lamar",
    Month: "June",
    zodiac: "Gemini ♊",
    genre: "Hip-Hop",
    vibe: "Genius & grounded",
    image: "images/kdot.jpg",
    bio: "Born June 17, 1987 — Kendrick Lamar is Gemini brilliance in full effect. Thoughtful, poetic, and always two steps ahead, he blends sharp lyricism with layered storytelling that hits the mind and the soul. Gemini energy is all about duality, and Kendrick flows between vulnerability and power, personal truth and cultural commentary, with masterful precision. A true voice of a generation."
  },
  {
    name: "Ariana Grande",
    Month: "July",
    zodiac: "Cancer",
    genre: "Pop/R&B",
    vibe: "Sweet & sassy",
    image: "images/grande.jpg",
    bio: "Born June 26, 1993 — Ariana Grande is giving full Cancer core: emotional, intuitive, and soft with a steel spine. Her music blends dreamy vocals with real vulnerability, wrapped in a glossy pop shell. Cancers feel everything, and Ariana turns those feelings into anthems that heal, empower, and hit every note. She’s sweet, she’s sassy, and she’s got layers, just like her sign."
  },
  {
    name: "Bad Bunny",
    Month: "August",
    zodiac: "Leo 🦁",
    genre: "Reggaeton/Latin Trap",
    vibe: "Unfiltered & cultural",
    image: "images/badbunny.jpg",
    bio: "Born March 10, 1994 — He wasn’t born in August, but Bad Bunny is pure Leo energy bold, loud, and completely unbothered. From fashion to flow, he commands attention without ever asking for it. Leos are all about presence, pride, and passion and Benito’s got all three on lock. He breaks rules, builds culture, and owns every room he walks into. It’s giving fuego, it’s giving main character, it’s giving Leo."
  },
  {
    name: "Beyoncé",
    Month: "September",
    zodiac: "Virgo ♍",
    genre: "Pop/R&B",
    vibe: "Flawless & empowering",
    image: "images/beyonce.jpg",
    bio: "Born September 4, 1981 — Virgo. Bow in the presence of The Queen. A cultural icon, a creative force, and the symbol of divine feminine energy. Queen Beyoncé Knowles-Carter rules the world. As the complete archetype of Virgo, she’s intentional, disciplined, and always evolving. Every harmony, every visual, every move is executed with precision and purpose. Bey doesn’t follow trends, she is the trend."
  },
  {
    name: "Bruno Mars",
    Month: "October",
    zodiac: "Libra",
    genre: "Pop/Funk",
    vibe: "Smooth & stylish",
    image: "images/bruno.jpg",
    bio: "Born October 8, 1985 — Bruno Mars is a true Libra vibe. Cool, stylish, and effortlessly magnetic, he brings balance to every beat and feel-good energy to every stage. Libras are ruled by Venus, the planet of beauty and love — and Bruno embodies that with his smooth vocals, polished performances, and timeless flair. Known for their romantic side and charm, Libras know how to light up a room — and Bruno does it all with a wink and a smile."
  },
  {
    name: "SZA",
    Month: "November",
    zodiac: "Scorpio",
    genre: "Alt R&B",
    vibe: "Soft & striking",
    image: "images/sza.jpg",
    bio: "Born November 8, 1989 — SZA is pure Scorpio energy. Mysterious, emotional, and fiercely authentic, she writes from the heart and never holds back. Scorpios feel everything deeply, and SZA channels that into lyrics that cut, soothe, and reveal. Her sound floats, but her words hit. With her ethereal voice and quiet intensity, she pulls you into her world… and you don’t want to leave."
  },
  {
    name: "Taylor Swift",
    Month: "December",
    zodiac: "Sagittarius",
    genre: "Pop/Folk",
    vibe: "Nostalgic & fearless",
    image: "images/swift.jpg",
    bio: "Born December 13, 1989 — Taylor Swift is Sagittarius energy in motion. Honest, independent, and constantly evolving, she writes her truth and owns every era. Sagittarians are seekers of meaning, of connection, of growth and Taylor turns those themes into music that defines generations. From country roots to global pop icon, she reminds us that reinvention is power… and storytelling is magic."
  }
];

function searchByMonth() {
  const input = document.getElementById("monthInput").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");
  const loadingImg = document.getElementById("loadingImage");
  const match = catalog.find(artist => artist.Month.toLowerCase() === input);

  resultDiv.innerHTML = "";
  loadingImg.style.display = "block";

  setTimeout(() => {
    loadingImg.style.display = "none";

    if (match) {
      resultDiv.innerHTML = `
        <div class="card">
          <img src="${match.image}" alt="${match.name}">
          <h2>${match.name}</h2>
          <p><strong>Month:</strong> ${match.Month}</p>
          <p><strong>Zodiac Sign:</strong> ${match.zodiac}</p>
          <p><strong>Genre:</strong> ${match.genre}</p>
          <p><strong>Vibe:</strong> ${match.vibe}</p>
          <p>${match.bio}</p>
        </div>
      `;
    } else {
      resultDiv.innerHTML = `
        <div class="#">
          <p>🚫 Sorry, no artist found for that month. Try another!</p>
        </div>
      `;
    }
  }, 2000);
}

function displayAllArtists() {
  const resultDiv = document.getElementById("result");
  const loadingImg = document.getElementById("loadingImage");
  loadingImg.style.display = "none";
  resultDiv.innerHTML = "";

  catalog.forEach(artist => {
    const card = `
      <div class="card">
        <img src="${artist.image}" alt="${artist.name}">
        <h2>${artist.name}</h2>
        <p><strong>Month:</strong> ${artist.Month}</p>
        <p><strong>Zodiac Sign:</strong> ${artist.zodiac}</p>
        <p><strong>Genre:</strong> ${artist.genre}</p>
        <p><strong>Vibe:</strong> ${artist.vibe}</p>
        <p>${artist.bio}</p>
      </div>
    `;
    resultDiv.innerHTML += card;
  });
}

  