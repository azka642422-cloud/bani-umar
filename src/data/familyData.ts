import { FamilyData } from '../types';

export const initialFamilyData: FamilyData = {
  familyName: "The Nusantara Family",
  estYear: "1998",
  members: [
    {
      id: "dad",
      name: "Arthur",
      role: "Dad",
      quote: "The one who quietly keeps everything standing.",
      description: "A steady anchor with endless patience, morning coffee mastery, and a knack for fixing anything broken around the house.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
      color: "#ff7a59", // coral
      orbitRadius: 3.5,
      orbitSpeed: 0.2
    },
    {
      id: "mom",
      name: "Elena",
      role: "Mom",
      quote: "The warmth that makes every place feel like home.",
      description: "The beating heart of our universe, whose recipes taste like hugs and whose intuition always guides us through storms.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
      color: "#ffb703", // soft yellow
      orbitRadius: 5.0,
      orbitSpeed: 0.15
    },
    {
      id: "brother",
      name: "Leo",
      role: "Brother",
      quote: "The chaos we would never trade.",
      description: "Always chasing new adventures, late-night guitar strumming, and turning every quiet dinner into a comedy show.",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600",
      color: "#3a86ff", // sky blue
      orbitRadius: 6.8,
      orbitSpeed: 0.12
    },
    {
      id: "sister",
      name: "Maya",
      role: "Sister",
      quote: "A little sunshine in human form.",
      description: "Painter of dreams, collector of polaroids, and the first person to celebrate your smallest victories with unbridled joy.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      color: "#b5179e", // lavender/pink
      orbitRadius: 8.5,
      orbitSpeed: 0.1
    }
  ],
  milestones: [
    {
      year: "1998",
      title: "Where It All Began",
      location: "Old Maple Street Chapel",
      story: "A quiet autumn wedding with two old suitcases, boundless optimism, and a promise written under the stars.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      tag: "Beginning"
    },
    {
      year: "2003",
      title: "Our Family Grew",
      location: "Sunnyside Cottage",
      story: "Tiny footsteps echoing down the hallway, sleepless nights filled with lullabies, and the first laughter in the garden.",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=800",
      tag: "New Additions"
    },
    {
      year: "2008",
      title: "Our First Big Adventure",
      location: "Blue Ridge Mountains",
      story: "Packing an overloaded station wagon for a two-week road trip. Getting lost in the rain and laughing over burnt marshmallows.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
      tag: "Adventure"
    },
    {
      year: "2015",
      title: "A New Chapter",
      location: "The Willow House",
      story: "Moving into the house with the big oak tree. Marking heights on the kitchen doorframe and planting our own garden.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
      tag: "Milestone"
    },
    {
      year: "2020",
      title: "Staying Together Through Everything",
      location: "Home Sweet Home",
      story: "Baking bread from scratch, living room camping during stormy nights, and realizing how strong our bond truly is.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800",
      tag: "Resilience"
    },
    {
      year: "2026",
      title: "Still Writing Our Story",
      location: "Everywhere We Go",
      story: "New dreams taking flight, graduation caps tossed in the air, yet every Sunday dinner brings us right back to where we belong.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
      tag: "Today"
    }
  ],
  memoryRooms: [
    {
      id: "living-room",
      title: "The Living Room",
      subtitle: "Heartbeat of the House",
      description: "Where board games turn into fierce battles, rainy afternoons smell of cinnamon tea, and evening stories stretch past bedtime.",
      atmosphere: "Warm amber & cozy soft lighting",
      items: [
        { title: "Sunday Board Game War", caption: "Monopoly that lasted 6 hours", image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80&w=600" },
        { title: "The Corner Sofa", caption: "Where afternoon naps are sacred", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600" },
        { title: "Fairy Lights & Guitar", caption: "Acoustic jams by Leo", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=600" }
      ]
    },
    {
      id: "family-trips",
      title: "Family Trips",
      subtitle: "Windows Down, Music Up",
      description: "From coastal road trips with sandy car mats to mountain cabins where we counted shooting stars until dawn.",
      atmosphere: "Breezy ocean blue & golden sunset",
      items: [
        { title: "Pacific Coast Highway", caption: "Windows down, singing off-key", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600" },
        { title: "Cabin in the Woods", caption: "Hot cocoa by the stone fireplace", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600" },
        { title: "The Beach Sunset", caption: "Footprints washed away by the tide", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600" }
      ]
    },
    {
      id: "birthday-moments",
      title: "Birthday Moments",
      subtitle: "Wishes & Frosting on Noses",
      description: "Homemade cakes with slightly crooked candles, silly paper crowns, and the annual measuring mark on the wall.",
      atmosphere: "Vibrant confetti pink & soft mint",
      items: [
        { title: "The Leaning Cake of 2012", caption: "Mom's famous strawberry sponge", image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&q=80&w=600" },
        { title: "Candle Blowout", caption: "Making a wish too big to tell", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600" },
        { title: "Paper Crowns", caption: "Royalty for a single day", image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=600" }
      ]
    },
    {
      id: "everyday-things",
      title: "Little Everyday Things",
      subtitle: "Magic in the Mundane",
      description: "The sound of keys dropping in the bowl, morning greetings over coffee, and the gentle chaos of getting out the door.",
      atmosphere: "Warm cream & soothing lavender",
      items: [
        { title: "Morning Coffee Brew", caption: "Arthur's daily ritual at 6 AM", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600" },
        { title: "The Front Porch", caption: "Sneakers piled high by the door", image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=600" },
        { title: "Late Night Kitchen Chats", caption: "Where the deepest secrets are told", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600" }
      ]
    }
  ],
  littleThings: [
    {
      id: "1",
      title: "The Sunday Roast",
      quote: "It was never about the perfect meal. It was the arguments over who got the crispiest potato.",
      iconName: "Utensils",
      color: "#ff7a59"
    },
    {
      id: "2",
      title: "Terrible Dad Jokes",
      quote: "Repeated a thousand times, and somehow still greeted with synchronized groans and smiles.",
      iconName: "Smile",
      color: "#ffb703"
    },
    {
      id: "3",
      title: "The Front Porch Light",
      quote: "Always left on whenever someone was still out, whispering: 'Take your time, but come back safe.'",
      iconName: "Sun",
      color: "#3a86ff"
    },
    {
      id: "4",
      title: "Unplanned Polaroids",
      quote: "Blurry, badly lit, caught mid-laughter—and yet capturing who we really were.",
      iconName: "Camera",
      color: "#b5179e"
    }
  ],
  values: [
    {
      word: "HOME",
      quote: "Home was never just a physical place.",
      detail: "It was the people waiting inside, the comforting smell of dinner, and the safety of knowing you belong.",
      color: "#ff7a59"
    },
    {
      word: "LOVE",
      quote: "Not always spoken aloud in grand gestures.",
      detail: "But quietly shown in a warm blanket left on your lap, a filled gas tank, and unwavering belief in your dreams.",
      color: "#ffb703"
    },
    {
      word: "SUPPORT",
      quote: "Sometimes behind us, sometimes beside us.",
      detail: "Catching us when we stumble, cheering from the front row, and reminding us how capable we are.",
      color: "#3a86ff"
    },
    {
      word: "TOGETHER",
      quote: "No matter how far apart life's paths might lead.",
      detail: "We share an invisible thread across oceans and time zones that pulls us right back home.",
      color: "#b5179e"
    }
  ],
  gallery: [
    {
      id: "g1",
      title: "Golden Hour in the Garden",
      date: "August 2024",
      location: "The Backyard",
      caption: "Laughing over nothing as the sun dipped behind the hills.",
      url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800",
      aspect: "landscape"
    },
    {
      id: "g2",
      title: "First Snow of Winter",
      date: "December 2022",
      location: "Mountain Cabin",
      caption: "Building lopsided snowmen and drinking hot cider.",
      url: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=800",
      aspect: "portrait"
    },
    {
      id: "g3",
      title: "Kitchen Masterclass",
      date: "May 2023",
      location: "Our Kitchen",
      caption: "Flour flying everywhere while Elena taught us her secret pasta dough.",
      url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
      aspect: "square"
    },
    {
      id: "g4",
      title: "Graduation Morning",
      date: "June 2025",
      location: "University Campus",
      caption: "Proud tears, tight hugs, and looking forward to the horizon.",
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      aspect: "landscape"
    },
    {
      id: "g5",
      title: "Coffee & Crosswords",
      date: "Sunday Morning",
      location: "Living Room Window",
      caption: "Quiet mornings where time seemed to stand completely still.",
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
      aspect: "portrait"
    },
    {
      id: "g6",
      title: "Road Trip Pit Stop",
      date: "July 2021",
      location: "Route 66 Diner",
      caption: "Sharing a giant milkshake and arguing about the next playlist.",
      url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
      aspect: "square"
    }
  ]
};
