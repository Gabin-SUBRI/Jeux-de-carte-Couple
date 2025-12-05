const questions = {
  fun: {
    name: "Fun",
    icon: "😄",
    list: [
      "Quelle est la chose la plus débile que tu as faite enfant ?",
      "Si tu étais un animal, lequel serais-tu et pourquoi ?",
      "Quel super-pouvoir 100% inutile aimerais-tu avoir ?",
      "Quel est ton plat « honteux » préféré ?",
      "Qu'est-ce qui te fait rire à chaque fois, même pour rien ?",
      "Quelle célébrité me ressemble le plus selon toi (même si c'est faux) ?",
      "Raconte un fail amoureux que tu as vécu avant nous.",
      "Si tu avais une téléportation maintenant, tu irais où ?",
      "Entre nous deux, qui gagne au Monopoly ?",
      "Si tu pouvais me donner un nouveau surnom absurde, ce serait quoi ?",
      "Quel est ton talent secret ?",
      "Quel personnage de film me ressemble le plus ?",
      "Une manie que tu as et dont tu te moques toi-même ?",
      "Quelle est ta pire habitude que j'accepte trop ?",
      "Quel est ton dernier fou rire et pourquoi ?",
      "Si tu devais vivre dans un dessin animé ?",
      "Un truc que tu ne comprends toujours pas chez les humains ?",
      "Quelle appli tu utilises trop ?",
      "Quelle est ta pire habitude du matin ?",
      "Quel est le meilleur meme que tu as vu récemment ?",
    ],
  },
  love: {
    name: "Love",
    icon: "❤️",
    list: [
      "Quel geste d'amour que je fais te touche le plus ?",
      "Quel compliment de ma part t'a marqué ?",
      "Quand t'es-tu sentie la plus amoureuse récemment ?",
      "Quel est le premier souvenir mignon que tu gardes de nous ?",
      "Qu'est-ce que tu trouves adorable chez moi mais que je ne remarque pas ?",
      "À quoi ressemble notre « moment parfait » selon toi ?",
      "Quand est-ce que tu t'es dit : « Cette relation est spéciale » ?",
      "Qu'est-ce que tu admires dans ma façon d'aimer ?",
      "Quel moment du quotidien tu préfères avec moi ?",
      "Quelle petite attention aimerais-tu recevoir plus souvent ?",
      "Ce que j'ai fait pour toi dont tu es reconnaissante ?",
      "Quel est le souvenir romantique que tu veux qu'on recrée ?",
      "Quand est-ce que je te fais rire le plus ?",
      "Qu'est-ce que tu trouves irrésistible chez moi ?",
      "Qu'est-ce que j'ai changé dans ta vie ?",
      "Quelle est la plus belle chose qu'on se soit dite ?",
      "Une chose que tu adores mais que je ne fais pas assez ?",
      "Ton meilleur souvenir de couple de cette année ?",
      "Qu'est-ce que tu voudrais qu'on fasse plus souvent ensemble ?",
      "Quelle qualité chez moi te donne envie d'être meilleure ?",
    ],
  },
  deep: {
    name: "Deep",
    icon: "✨",
    list: [
      "Qu'est-ce qui te fait sentir vraiment en sécurité dans une relation ?",
      "Quelle peur tu n'oses pas souvent partager ?",
      "Quel est ton plus grand rêve perso pour les années à venir ?",
      "De quoi as-tu le plus besoin dans une relation ?",
      "Quelle partie de ton passé t'a le plus construite ?",
      "Qu'est-ce que tu veux vraiment que je comprenne sur toi ?",
      "Qu'est-ce qui te rend le plus vulnérable ?",
      "Quelle habitude émotionnelle voudrais-tu changer ?",
      "Comment sais-tu que quelqu'un t'aime vraiment ?",
      "Qu'est-ce qui t'empêche parfois d'être toi-même ?",
      "Une vérité que tu as mis du temps à accepter ?",
      "Qu'est-ce qui pourrait vraiment améliorer notre communication ?",
      "Quelle valeur est la plus importante pour toi en amour ?",
      "De quoi as-tu peur pour l'avenir et pourquoi ?",
      "Comment aimerais-tu que je te soutienne davantage ?",
      "Quel manque ou difficulté t'a marqué dans ton enfance ?",
      "Quelle est une conviction que tu as changée avec le temps ?",
      "Qu'est-ce qui t'aide à faire confiance ?",
      "Qu'aimerais-tu apprendre sur toi cette année ?",
      "Quel est le plus beau cadeau émotionnel qu'on puisse t'offrir ?",
    ],
  },
  defis: {
    name: "Défis",
    icon: "🎯",
    list: [
      {
        text: "Fais un compliment sincère que tu n'as jamais dit.",
        timer: null,
      },
      {
        text: "Regarde l'autre dans les yeux 20 secondes sans parler.",
        timer: 20,
      },
      { text: "Raconte un souvenir que tu n'as jamais partagé.", timer: null },
      {
        text: "Prends 30 secondes pour décrire exactement ce que tu ressens maintenant.",
        timer: 30,
      },
      {
        text: "Fais un câlin comme si vous ne vous étiez pas vus depuis 1 mois.",
        timer: null,
      },
      { text: "Partage un désir que tu n'oses jamais dire.", timer: null },
      { text: "Décris ce que tu admires le plus chez l'autre.", timer: null },
      {
        text: "Dis 3 choses que tu veux vivre avec elle cette année.",
        timer: null,
      },
      {
        text: "Cache ton visage et laisse l'autre deviner ton expression.",
        timer: 10,
      },
      { text: "Imite ton/ta partenaire pendant 10 secondes.", timer: 10 },
      { text: "Offre un compliment physique précis et sincère.", timer: null },
      {
        text: "Partage une chose que tu veux améliorer dans ta façon d'aimer.",
        timer: null,
      },
      { text: "Raconte ton premier souvenir gênant en amour.", timer: null },
      {
        text: "Partage une chose que tu regrettes mais qui t'a appris quelque chose.",
        timer: null,
      },
      {
        text: "Choisis un mot pour décrire votre relation, explique.",
        timer: null,
      },
      { text: "Partage un rêve que tu veux absolument réaliser.", timer: null },
      {
        text: "Dis ce que tu ressens quand tu la regardes maintenant.",
        timer: null,
      },
      {
        text: "Chante une phrase d'une chanson qui vous représente.",
        timer: null,
      },
      {
        text: "Décris le moment où tu as su qu'elle comptait vraiment.",
        timer: null,
      },
      {
        text: "Donne une qualité que tu veux développer grâce à votre relation.",
        timer: null,
      },
    ],
  },
  hot: {
    name: "Hot",
    icon: "🔥",
    list: [
      "Qu'est-ce qui t'excite le plus chez moi sans être physique ?",
      "Quel type de moment intime te donne le plus de papillons ?",
      "Quelle phrase douce ou provocante t'allume toujours ?",
      "Quelle situation du quotidien te met dans un mood chaud ?",
      "Quelle est la fantaisie soft que tu aimerais essayer un jour ?",
      "Quel geste simple te rend instantanément réceptive ?",
      "Comment aimes-tu que je te regarde quand on est proches ?",
      "À quel moment de la journée tu es le plus réceptive à un moment intime ?",
      "Quelle tenue ou style te fait craquer chez moi ?",
      "Quelle ambiance te met le plus en confiance pour être sensuelle ?",
      "Qu'est-ce qui te fait perdre tous tes repères (dans le bon sens) ?",
      "Quel souvenir intime te revient souvent en tête ?",
      "Quelle est ta zone non évidente qui te rend sensible ?",
      "Qu'aimerais-tu que j'ose plus souvent ?",
      "Quel type de baiser te fait fondre le plus ?",
      "Quelle est une limite que tu aimerais repousser doucement ?",
      "Quel compliment sensuel te toucherait vraiment ?",
      "Quelle idée tu trouves sexy mais que tu n'as jamais dite ?",
      "Qu'est-ce qui te mettrait dans un mood chaud immédiatement ?",
      "Quel moment intime tu voudrais absolument qu'on vive bientôt ?",
    ],
  },
};

let timerInterval = null;

function drawCard() {
  // Arrêter le timer précédent s'il existe
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  const categories = Object.keys(questions);
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const category = questions[randomCategory];
  const randomItem =
    category.list[Math.floor(Math.random() * category.list.length)];

  // Gérer les questions avec ou sans timer
  let questionText, timerDuration;
  if (typeof randomItem === "object") {
    questionText = randomItem.text;
    timerDuration = randomItem.timer;
  } else {
    questionText = randomItem;
    timerDuration = null;
  }

  let timerHTML = "";
  if (timerDuration) {
    timerHTML = `
      <div class="timer-container">
        <div class="timer-circle">
          <svg class="timer-svg" width="100" height="100">
            <circle class="timer-bg" cx="50" cy="50" r="45"></circle>
            <circle class="timer-progress" cx="50" cy="50" r="45" id="timerProgress"></circle>
          </svg>
          <div class="timer-text" id="timerText">${timerDuration}</div>
        </div>
        <button class="timer-btn" onclick="startTimer(${timerDuration})">▶️ Lancer</button>
      </div>
    `;
  }

  const cardHTML = `
    <div class="card ${randomCategory}">
      <div class="card-header">
        <div class="category-badge">${category.name}</div>
        <div class="icon">${category.icon}</div>
      </div>
      <div class="question">${questionText}</div>
      ${timerHTML}
      <div class="card-footer">Prenez votre temps pour répondre 💕</div>
    </div>
  `;

  document.getElementById("cardContainer").innerHTML = cardHTML;
}

function startTimer(duration) {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  let timeLeft = duration;
  const timerText = document.getElementById("timerText");
  const timerProgress = document.getElementById("timerProgress");
  const circumference = 2 * Math.PI * 45;

  timerProgress.style.strokeDasharray = circumference;
  timerProgress.style.strokeDashoffset = 0;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerText.textContent = timeLeft;

    const offset = circumference - (timeLeft / duration) * circumference;
    timerProgress.style.strokeDashoffset = offset;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerText.textContent = "✓";
      timerProgress.style.stroke = "#4caf50";
    }
  }, 1000);
}
