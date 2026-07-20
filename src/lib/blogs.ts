import blog1 from "@/assets/oro/blogs/blog1.jpg.asset.json";
import blog2 from "@/assets/oro/blogs/blog2.jpg.asset.json";
import blog3 from "@/assets/oro/blogs/blog3.jpg.asset.json";
import blog4 from "@/assets/oro/blogs/blog4.jpg.asset.json";
import blog5 from "@/assets/oro/blogs/blog5.jpg.asset.json";
import blog6 from "@/assets/oro/blogs/blog6.jpg.asset.json";
import blog7 from "@/assets/oro/blogs/blog7.jpg.asset.json";
import blog8 from "@/assets/oro/blogs/blog8.jpg.asset.json";
import blog9 from "@/assets/oro/blogs/blog9.jpg.asset.json";
import blog10 from "@/assets/oro/blogs/blog10.jpg.asset.json";
import blog11 from "@/assets/oro/blogs/blog11.jpg.asset.json";
import blog12 from "@/assets/oro/blogs/blog12.jpg.asset.json";

export type BlogSection = { heading: string; body: string[] };
export type BlogFaq = { q: string; a: string };
export type BlogFact = { label: string; value: string };
export type Blog = {
  slug: string;
  tag: string;
  date: string;
  updated?: string;
  read: string;
  title: string;
  excerpt: string;
  image: string;
  intro: string;
  sections: BlogSection[];
  pullquote?: string;
  keywords?: string[];
  takeaways?: string[];
  faqs?: BlogFaq[];
  quickFacts?: BlogFact[];
  conclusion?: string[];
  furtherReading?: string[];
};

export const AUTHOR = "Mazhar Khan";

const RAW_BLOGS: Blog[] = [
  {
    slug: "sunrise-on-siri-paye",
    tag: "Trail",
    date: "May 12, 2026",
    read: "8 min",
    title: "Sunrise on Siri Paye — a photographer's walk",
    excerpt: "How to catch the first light on the meadows without the crowds, and where the wild irises grow after the last snow melts.",
    image: blog1.url,
    intro:
      "The road to Siri Paye is a slow, deliberate climb — a jeep track worn smooth by monsoon runoff and mountain hooves. Leave the retreat at 4:30 am and you'll arrive just as the ridgeline behind the meadow starts to blush a pale, almost embarrassed pink.",
    sections: [
      {
        heading: "The hour before light",
        body: [
          "There is a specific quality to the dark at 12,000 feet in early May. The air is thin and the stars, if the night has been clear, sit closer than they have any right to.",
          "We usually pack a thermos of masala chai and two hard-boiled eggs. You will not want breakfast — you will want warmth in your hands.",
        ],
      },
      {
        heading: "Where to stand",
        body: [
          "Most visitors stop at the first plateau where the jeeps park. Walk another twenty minutes east and drop down into the shallow bowl below the shepherd's stone hut. This is where the wild irises grow — pale violet, ankle-high, and, when the light lands right, entirely worth the cold.",
          "Shoot wide first. The temptation is always to reach for the telephoto and pick out the peaks, but the meadow is the story here.",
        ],
      },
      {
        heading: "A word on the crowds",
        body: [
          "By 9 am the jeep convoys arrive from Naran and the spell breaks a little. Be back at the retreat by then, sitting on the terrace with a proper breakfast and the day still ahead of you.",
        ],
      },
    ],
    pullquote:
      "The meadow is the story here — the peaks are only the frame.",
  },
  {
    slug: "trout-brown-butter-walnut",
    tag: "Recipe",
    date: "April 30, 2026",
    read: "6 min",
    title: "Trout, brown butter, walnut — the valley on a plate",
    excerpt: "Our chef Kamran on the three-ingredient dish that opens most of our dinners, and the small stream that supplies it.",
    image: blog2.url,
    intro:
      "Kamran learnt this from his grandmother, who learnt it from a Kashmiri cook in the 1960s. It is, essentially, a lesson in restraint: three ingredients, one pan, and a willingness to let the fish speak.",
    sections: [
      {
        heading: "The fish",
        body: [
          "We source our trout from a small farm two valleys over, fed by the same glacial stream that runs past our kitchen garden. Ask for whole fish, gutted but head-on — the head is where the flavour lives.",
          "Score the skin three times on each side. Salt generously, twenty minutes before cooking, and pat dry.",
        ],
      },
      {
        heading: "The butter",
        body: [
          "Use more than you think. Half a cup for two fish. Melt over medium heat, swirl until the milk solids at the bottom turn the colour of dark honey, and pull it off the heat the moment it smells like toasted hazelnut.",
          "This is the whole dish. Everything else is delivery.",
        ],
      },
      {
        heading: "The walnut",
        body: [
          "Toast a small handful of walnuts in a dry pan until they smell faintly bitter. Crush roughly with the back of a knife. Scatter over the fish at the very end, with a squeeze of lemon and one turn of black pepper.",
          "Serve with plain steamed rice and a bowl of cold yoghurt. Nothing else.",
        ],
      },
    ],
    pullquote: "Three ingredients, one pan, and a willingness to let the fish speak.",
  },
  {
    slug: "the-night-the-bonfire-stayed-lit",
    tag: "Essay",
    date: "April 14, 2026",
    read: "10 min",
    title: "The night the bonfire stayed lit until dawn",
    excerpt: "A quiet essay on hospitality, silence, and the small ritual of tending a fire long past the point of usefulness.",
    image: blog3.url,
    intro:
      "There is a particular kind of guest who does not want to be entertained. They want a chair, a blanket, and a fire that someone else is quietly keeping alive. Last October we had six such guests in one week.",
    sections: [
      {
        heading: "The ritual",
        body: [
          "We light the bonfire at 6 pm, when the light drops behind the western ridge and the temperature falls with it. By 9 pm most guests have drifted off to bed. By 11 pm the fire is usually a bed of orange embers, glowing but low.",
          "This is the hour we love most. One of us — usually Ismail, our night keeper — sits on the low wall with a shawl and a small pile of deodar wood, feeding the fire one branch at a time.",
        ],
      },
      {
        heading: "Why we bother",
        body: [
          "Nobody asks us to keep the fire going. Nobody would notice if we let it die. But sometimes, at three in the morning, a guest will come out for a glass of water and find the courtyard still lit — and something in their face changes.",
          "That, we have come to believe, is what hospitality actually is. Not the grand gesture, but the quiet decision to keep something small alive for someone who may or may not need it.",
        ],
      },
    ],
    pullquote:
      "Hospitality is the quiet decision to keep something small alive for someone who may or may not need it.",
  },
  {
    slug: "packing-for-a-kaghan-spring",
    tag: "Guide",
    date: "March 22, 2026",
    read: "5 min",
    title: "Packing for a Kaghan spring — a short list",
    excerpt: "Layers, boots, one book and the kind of small camera you'll actually carry. Everything else is here waiting.",
    image: blog4.url,
    intro:
      "Every spring we get the same email: what do we actually need to bring? Here, once and for all, is the honest answer — from a team that watches guests unpack (and repack) every week.",
    sections: [
      {
        heading: "Clothing",
        body: [
          "Three layers, not more. A thermal base, a warm mid-layer (merino if possible), and a proper windproof shell. Days can hit 22°C; nights routinely drop to 4°C.",
          "One pair of walking boots, already broken in. One pair of soft indoor slippers — we provide these, but if you have favourites, bring them.",
        ],
      },
      {
        heading: "Things people forget",
        body: [
          "Sunscreen. The altitude is deceptive.",
          "A cotton scarf. Useful for wind, sun, dust, and reading in bed.",
          "A refillable water bottle. Our spring water is very good.",
        ],
      },
      {
        heading: "Things to leave at home",
        body: [
          "A hair dryer (we have them). A tripod (unless you are working). Formal shoes (there is nowhere formal to wear them).",
        ],
      },
    ],
  },
  {
    slug: "old-shepherds-path-to-sharan",
    tag: "Trail",
    date: "March 04, 2026",
    read: "9 min",
    title: "The old shepherd's path to Sharan Forest",
    excerpt: "A half-day trail few guests know about — deodar cathedrals, a hidden stream and, if you're lucky, a distant monal call.",
    image: blog5.url,
    intro:
      "The Sharan Forest is famous. The path we take to it is not. It leaves the main road about a kilometre before the usual trailhead and climbs, unmarked, through a stand of blue pine.",
    sections: [
      {
        heading: "The climb",
        body: [
          "The first thirty minutes are the hardest — a steady switchback through loose scree. After that the gradient eases and the deodars begin. Some of these trees are over four hundred years old.",
          "Walk quietly. This is monal pheasant country, and if the wind is right you may hear a call from the ridge above — a long, mournful whistle that is unmistakable once you have heard it.",
        ],
      },
      {
        heading: "The hidden stream",
        body: [
          "About two-thirds of the way up, the path crosses a small stream that most maps do not show. Fill your bottle. This water is as cold and as clean as any you will drink in your life.",
        ],
      },
      {
        heading: "Coming back",
        body: [
          "Return the way you came, or loop back via the main forest road — a longer walk but easier on the knees. Either way, be back before 3 pm; the light drops fast in these valleys.",
        ],
      },
    ],
  },
  {
    slug: "first-snowfall-from-the-terrace",
    tag: "Journal",
    date: "February 18, 2026",
    read: "4 min",
    title: "First snowfall — what the valley looks like from the terrace",
    excerpt: "A short letter, written the morning the valley disappeared under six inches of powder and everything at Oro went quiet.",
    image: blog6.url,
    intro:
      "It began sometime after 2 am. By six, when the kitchen team came in to light the ovens, the courtyard was already white and the deodars beyond the wall had turned into hunched, patient figures.",
    sections: [
      {
        heading: "The morning",
        body: [
          "There is a specific silence that comes with heavy snow — not the absence of sound, but the way every sound seems softer, further away. A door closing on the far side of the retreat. A raven, somewhere.",
          "We opened the terrace at 7 am for anyone who wanted coffee outside. Three guests came. Nobody spoke for a long time.",
        ],
      },
      {
        heading: "The rest of the day",
        body: [
          "The road to Naran closed by 10 am. We lit every fire in the retreat, moved the afternoon tea to the library, and asked the kitchen to make khow suey for lunch. Nobody complained.",
          "By evening the sky had cleared and the valley, under a nearly full moon, looked like something out of a much older story.",
        ],
      },
    ],
  },
  {
    slug: "the-kitchen-garden-in-june",
    tag: "Journal",
    date: "June 08, 2026",
    read: "6 min",
    title: "The kitchen garden in June — what's on the plate this week",
    excerpt: "Mint, sorrel, the first of the summer squashes, and a stubborn row of coriander that refuses to bolt. A quick tour of what our chef is picking each morning.",
    image: blog7.url,
    intro:
      "Our kitchen garden is small — three raised beds along the south wall, a herb spiral by the kitchen door, and a narrow strip of squash and beans along the fence. In June, it earns its keep.",
    sections: [
      {
        heading: "What we're picking",
        body: [
          "Mint, in ridiculous quantities. Sorrel, which our chef uses in a cold soup with yoghurt and toasted cumin. The first patty-pan squashes, no bigger than a fist.",
          "A row of coriander that, against all expectation, has held its leaf into the warm weather. We think it is the shade from the walnut tree.",
        ],
      },
      {
        heading: "On the plate this week",
        body: [
          "Cold sorrel soup. Grilled squash with brown butter and mint. A green chutney that we serve with everything — including, quietly, breakfast.",
        ],
      },
    ],
  },
  {
    slug: "how-we-built-the-retreat",
    tag: "Essay",
    date: "January 20, 2026",
    read: "12 min",
    title: "How we built the retreat — three winters, one stubborn stone wall",
    excerpt: "A long essay on what it actually takes to build a small hotel on a mountain — the timelines that lie, the local craftsmen who don't, and the wall we rebuilt three times.",
    image: blog8.url,
    intro:
      "When we first walked the site in the autumn of 2021, there was a stone hut, a spring, and a walnut tree. The plan, on paper, was two years. The reality was closer to four.",
    sections: [
      {
        heading: "The first winter",
        body: [
          "We lost the entire access road in a landslide in February 2022. Everything — cement, timber, the small kitchen sink we had ordered from Lahore — had to be carried the last kilometre by mule.",
          "In retrospect, this was the best thing that could have happened. It forced us to build slowly, and to build with what the mountain would give us.",
        ],
      },
      {
        heading: "The stone wall",
        body: [
          "The long wall along the eastern edge of the courtyard was built three times. The first time, we used the wrong mortar and the first hard frost cracked it top to bottom. The second time we used the right mortar and the wrong stone. The third time, we hired Bashir — a seventy-one-year-old mason from a village near Balakot — and did not interfere.",
          "It has now stood for three winters without a hairline crack.",
        ],
      },
      {
        heading: "What we learnt",
        body: [
          "Everything on a mountain takes twice as long as you think and costs a third more. This is not pessimism, it is arithmetic.",
          "Local craftsmen know things about local weather that no architect in Islamabad does. Listen to them, even when — especially when — they contradict the drawings.",
        ],
      },
    ],
    pullquote:
      "Everything on a mountain takes twice as long as you think and costs a third more. This is not pessimism, it is arithmetic.",
  },
  {
    slug: "a-short-history-of-the-kaghan-valley",
    tag: "Essay",
    date: "November 15, 2025",
    read: "11 min",
    title: "A short history of the Kaghan Valley",
    excerpt: "From the ancient Silk Road spurs to the Gujjar herders who still move up the slopes each summer — a compressed history for the curious guest.",
    image: blog9.url,
    intro:
      "The Kaghan Valley has never been quite as remote as it feels. For at least a thousand years it has been a summer route — for herders, for traders, for the occasional army — moving between the plains of the Punjab and the high pastures of the Deosai.",
    sections: [
      {
        heading: "The Silk Road spurs",
        body: [
          "The main Silk Road passed well to the north, but minor spurs threaded through these valleys, carrying rock salt, dried apricots and, occasionally, lapis lazuli.",
          "You can still find, if you know where to look, small caravanserai foundations along the old routes above Balakot.",
        ],
      },
      {
        heading: "The Gujjar herders",
        body: [
          "Every summer, families of Gujjar herders move their buffalo up the slopes to the high meadows. They have done this, in more or less the same way, for at least four centuries.",
          "If you walk far enough up the ridge behind the retreat in July, you will find them — small clusters of stone-and-wood huts, blue smoke, a kettle always on.",
        ],
      },
      {
        heading: "The modern valley",
        body: [
          "The road up to Naran was paved, in stages, between the 1960s and the early 2000s. The valley you drive through today is, in geological terms, unchanged, and in human terms, almost unrecognisable from what it was fifty years ago.",
        ],
      },
    ],
  },
  {
    slug: "birds-of-the-deodar-forest",
    tag: "Guide",
    date: "October 02, 2025",
    read: "7 min",
    title: "Birds of the deodar forest — a field guide for the terrace",
    excerpt: "The ten birds you'll actually see from your window at Oro Shogran, in order of how often you'll see them.",
    image: blog10.url,
    intro:
      "You do not have to walk far to see remarkable birds in the Kaghan Valley. Most of them will, given time, come to you. Here are the ten most common species around the retreat, ranked by frequency.",
    sections: [
      {
        heading: "The regulars",
        body: [
          "House sparrow. Common myna. Yellow-billed blue magpie — the most theatrical bird in the valley, a long-tailed streak of blue and black that seems to know it is being watched.",
          "Great tit, in every deodar. Coal tit, quieter and higher up.",
        ],
      },
      {
        heading: "The occasionals",
        body: [
          "Himalayan bulbul. Grey-headed woodpecker, most often heard before seen. Rufous-naped tit, if you are lucky.",
        ],
      },
      {
        heading: "The rare and remarkable",
        body: [
          "Himalayan monal, once or twice a season, on the ridge above the retreat. Lammergeier, high overhead in the mornings — a shadow the size of a small kite.",
        ],
      },
    ],
  },
  {
    slug: "chai-at-4000-metres",
    tag: "Recipe",
    date: "September 12, 2025",
    read: "5 min",
    title: "Chai at 4,000 metres — a recipe for the flask",
    excerpt: "The exact chai our jeep drivers make on the road to Lulusar Lake — cardamom-forward, faintly salty, and enough for four cold hands.",
    image: blog11.url,
    intro:
      "There is a specific chai that emerges, always in a battered aluminium flask, halfway up the road to Lulusar. It is not fancy. It is exactly what the cold, the altitude, and the long drive require.",
    sections: [
      {
        heading: "The recipe",
        body: [
          "Four cups of water, four cups of whole milk. Six green cardamom pods, crushed. Four tablespoons of loose black tea (Kenyan, if you can find it). Sugar to taste — start with four tablespoons and adjust up.",
          "A single, contested pinch of salt. Our driver Nazir insists on it. He is right.",
        ],
      },
      {
        heading: "The method",
        body: [
          "Boil the water with the cardamom for two minutes. Add the tea and simmer, hard, for another two. Add the milk and sugar and bring back to a slow boil. Turn the heat down and let it darken for four more minutes.",
          "Strain into a warmed flask. Drink within three hours; after that the tannins turn bitter and you will regret every sip.",
        ],
      },
    ],
  },
  {
    slug: "a-quiet-argument-for-slow-travel",
    tag: "Essay",
    date: "August 24, 2025",
    read: "9 min",
    title: "A quiet argument for slow travel",
    excerpt: "Why we ask guests to stay three nights, at least — and what actually happens on the third morning that does not happen on the first.",
    image: blog12.url,
    intro:
      "Our minimum stay is three nights. This is not, primarily, a commercial decision. It is a hospitality one, and the longer we have run the retreat, the more convinced of it we have become.",
    sections: [
      {
        heading: "The first day",
        body: [
          "You arrive tired. You unpack badly, sleep too little, and spend most of the first afternoon looking at your phone despite the view.",
          "This is normal. Do not fight it. Have an early dinner and sleep for ten hours.",
        ],
      },
      {
        heading: "The second day",
        body: [
          "You wake up and, for the first time, notice the light. You walk somewhere. You have a long lunch. You start reading a book you have been carrying around for three months.",
        ],
      },
      {
        heading: "The third morning",
        body: [
          "This is the morning we work for. You wake up before the alarm. You sit on the terrace with a cup of chai and, for perhaps twenty minutes, you do not think about anything in particular.",
          "This is what the valley gives you, and it does not give it on the first day. Stay three nights. At least.",
        ],
      },
    ],
    pullquote:
      "The third morning is the one we work for — and it does not arrive on the first day.",
  },
];

// --- Enrichment: adds SEO-oriented fields (keywords, takeaways, FAQs) and
// two extra deeply-written sections to every post, based on its tag.

const TAG_DEFAULTS: Record<
  string,
  {
    keywords: string[];
    takeaways: string[];
    faqs: BlogFaq[];
    extra: BlogSection[];
  }
> = {
  Trail: {
    keywords: [
      "shogran trekking",
      "kaghan valley trails",
      "siri paye trek",
      "himalayan hiking pakistan",
      "shogran travel guide",
    ],
    takeaways: [
      "Start before first light — the meadows are unrecognisable at dawn.",
      "Carry layered clothing; alpine weather turns within thirty minutes.",
      "Descend before mid-afternoon to avoid convective cloud and cold winds.",
    ],
    faqs: [
      {
        q: "What is the best month to walk this trail?",
        a: "Late May through early October, with June and September offering the clearest light and thinnest crowds.",
      },
      {
        q: "Do I need a local guide?",
        a: "For unmarked shepherd paths, yes. Oro Shogran arranges vetted local guides who know the ground and the weather patterns.",
      },
      {
        q: "How fit do I need to be?",
        a: "A comfortable one-hour uphill walk at sea level translates to roughly two hours here. Pace, not pace-per-kilometre, is the goal.",
      },
    ],
    extra: [
      {
        heading: "What to carry",
        body: [
          "A one-litre bottle, a wind shell even when the sky looks perfect, a small headtorch, and a printed map. Do not rely on phone signal above the retreat — it will come and go.",
          "One handful of dried apricots and a small bar of dark chocolate. Altitude blunts appetite; sugar keeps the legs honest.",
        ],
      },
      {
        heading: "Weather and safety",
        body: [
          "Afternoon storms build fast in July and August. If you see the first anvil cloud rising over the eastern ridge, turn back — the storm will arrive within forty minutes.",
          "Tell the front desk your route and your return time. This is a small, quiet valley, and a check-in on the way out costs you nothing.",
        ],
      },
    ],
  },
  Recipe: {
    keywords: [
      "kaghan valley recipes",
      "trout recipe pakistan",
      "himalayan chai recipe",
      "shogran cuisine",
      "mountain cooking",
    ],
    takeaways: [
      "Fewer ingredients, treated well, will always beat many treated poorly.",
      "Cold-mountain water and unhurried heat change how ingredients behave.",
      "The recipe is a starting point — taste as you go, and trust your pan.",
    ],
    faqs: [
      {
        q: "Can I make this dish at sea level?",
        a: "Yes. Reduce cooking time by roughly ten to fifteen percent and taste for seasoning slightly earlier than the recipe suggests.",
      },
      {
        q: "What can I substitute if I cannot find the exact ingredient?",
        a: "Stay close to the texture and fat content of the original. Substitute a herb for another herb, not a herb for a spice.",
      },
      {
        q: "Do you serve this at the retreat?",
        a: "Most weeks, yes — either on the tasting menu or on request the night before. Ask when you check in.",
      },
    ],
    extra: [
      {
        heading: "The pantry we keep",
        body: [
          "Pink Himalayan salt, whole Kashmiri chillies, green cardamom, jaggery, sun-dried mulberries, and mustard oil pressed twenty kilometres from the kitchen. If you build a pantry around these, most of our menu becomes possible.",
          "We buy walnuts by the sack in October and store them, unshelled, in a cold cupboard. They last, quite honestly, until April.",
        ],
      },
      {
        heading: "How to serve",
        body: [
          "Warm plates. Nothing else undoes careful cooking faster than a cold plate on a cold evening.",
          "One green vegetable, one starch, one thing pickled. This is the shape of most dinners at Oro Shogran, and it is a shape we recommend at home.",
        ],
      },
    ],
  },
  Essay: {
    keywords: [
      "slow travel pakistan",
      "kaghan valley culture",
      "shogran retreat",
      "himalayan hospitality",
      "mountain living",
    ],
    takeaways: [
      "The mountain rewards patience — with weather, with people, with itself.",
      "Small rituals carry more meaning here than large gestures.",
      "Stay long enough for the third morning; that is when the valley speaks.",
    ],
    faqs: [
      {
        q: "How long should I stay to feel the difference?",
        a: "Three nights, minimum. The first is arrival, the second is adjustment, the third is when the retreat and the valley begin to work on you.",
      },
      {
        q: "Is Oro Shogran suitable for solo travellers?",
        a: "Very much so. A great many of our returning guests come alone, and our public spaces are designed for quiet company as much as for conversation.",
      },
      {
        q: "Can I bring my own book / work / camera and just be left alone?",
        a: "Yes — that is, in fact, the version of the stay we most often recommend.",
      },
    ],
    extra: [
      {
        heading: "A note on silence",
        body: [
          "We do not enforce silence at Oro Shogran, but we design for it. The library has no speakers. The dining room has no music before dusk. The corridors are wide enough that footsteps carry, and short enough that they do not accumulate.",
          "The result, most evenings, is that a guest can spend three hours in the public rooms without ever quite being alone, and without ever quite being interrupted.",
        ],
      },
      {
        heading: "What guests tell us afterwards",
        body: [
          "Six months after their stay, we ask returning guests what, specifically, they remember. It is almost never the food, and almost never the view. It is, over and over again, a small detail — the hot water bottle in the bed at turn-down, the second pot of chai that arrived without being asked for, the way the night watchman said goodnight.",
          "This is the retreat we try to run: one where the small things are done, and done again, until they become the whole story of the stay.",
        ],
      },
    ],
  },
  Guide: {
    keywords: [
      "shogran travel guide",
      "kaghan valley tips",
      "what to pack pakistan mountains",
      "shogran birdwatching",
      "himalayan trip planning",
    ],
    takeaways: [
      "Plan lightly — the valley works better with fewer fixed plans.",
      "Bring layers, patience, and something to read on rainy afternoons.",
      "Confirm road conditions the day before you travel from Naran.",
    ],
    faqs: [
      {
        q: "When is the best time to visit Shogran?",
        a: "Late May to early October for meadows and hiking; December to February for snow, when access is limited to jeep and, at times, foot.",
      },
      {
        q: "Is the road to Shogran safe?",
        a: "Yes, in a well-maintained 4x4 with an experienced driver. The retreat can arrange transfers from Islamabad, Balakot or Naran.",
      },
      {
        q: "How is the mobile signal?",
        a: "Intermittent. Jazz and Zong work best around the retreat. We have Wi-Fi in the library and lounge; the rooms are, deliberately, quieter.",
      },
    ],
    extra: [
      {
        heading: "Getting here",
        body: [
          "The most reliable route is Islamabad → Abbottabad → Balakot → Kiwai, then a 4x4 transfer up to Shogran. Total drive time is six to seven hours in fair weather, longer in July and August rain.",
          "Do not attempt the Kiwai–Shogran road in a sedan. It is a proper mountain track — beautiful, but honest about what it requires.",
        ],
      },
      {
        heading: "When to book",
        body: [
          "For a room in July or August, book at least eight weeks ahead. For September, four is usually enough. Winter (December–February) is our quietest, most cinematic season and, ironically, easiest to reserve.",
          "Long weekends around Eid and Independence Day fill first — often three months out.",
        ],
      },
    ],
  },
  Journal: {
    keywords: [
      "oro shogran retreat",
      "shogran diary",
      "kaghan valley journal",
      "mountain retreat pakistan",
      "shogran seasons",
    ],
    takeaways: [
      "Every season at Shogran rewrites the retreat in a different key.",
      "The best days are almost always unplanned.",
      "Keep a small notebook — you will remember more than you expect.",
    ],
    faqs: [
      {
        q: "Can I visit for a day trip?",
        a: "The retreat is designed for overnight stays, but the tea room welcomes daytime visitors with prior booking.",
      },
      {
        q: "Do you have off-season rates?",
        a: "Yes — November, February, and early March carry a considered off-season rate that includes dinner. Ask reservations.",
      },
      {
        q: "Is there a dress code?",
        a: "None. Warm, comfortable and honest — that is the whole code.",
      },
    ],
    extra: [
      {
        heading: "A working day at Oro",
        body: [
          "The kitchen wakes first, at half past four. The bread is in the oven by five, the ovens are cleaned by six, and the first pot of coffee is on the table by seven. This rhythm has not changed since we opened.",
          "The garden is watered before breakfast. The fires are laid before lunch. The rooms are turned down after dinner. Everything else — the walks, the reading, the long afternoons — happens between these small, unbreakable jobs.",
        ],
      },
      {
        heading: "What we learn every year",
        body: [
          "That the weather forecast, on this ridge, is more or less a rumour. That guests remember the small kindnesses long after they forget the grand gestures. That the third snowfall of the season is always the most beautiful, and always the one nobody photographs.",
          "That there is, in every season, at least one week we would happily live through again exactly as it happened.",
        ],
      },
    ],
  },
};

function enrich(b: Blog): Blog {
  const d = TAG_DEFAULTS[b.tag] ?? TAG_DEFAULTS.Journal;
  return {
    ...b,
    updated: b.updated ?? b.date,
    keywords: b.keywords ?? d.keywords,
    takeaways: b.takeaways ?? d.takeaways,
    faqs: b.faqs ?? d.faqs,
    sections: [...b.sections, ...d.extra],
  };
}

export const BLOGS: Blog[] = RAW_BLOGS.map(enrich);

export function getBlog(slug: string): Blog | undefined {
  return BLOGS.find((b) => b.slug === slug);
}