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
      "Fais un compliment sincère que tu n'as jamais dit.",
      "Regarde l'autre dans les yeux 20 secondes sans parler.",
      "Raconte un souvenir que tu n'as jamais partagé.",
      "Prends 30 secondes pour décrire exactement ce que tu ressens maintenant.",
      "Fais un câlin comme si vous ne vous étiez pas vus depuis 1 mois.",
      "Partage un désir que tu n'oses jamais dire.",
      "Décris ce que tu admires le plus chez l'autre.",
      "Dis 3 choses que tu veux vivre avec elle cette année.",
      "Cache ton visage et laisse l'autre deviner ton expression.",
      "Imite ton/ta partenaire pendant 10 secondes.",
      "Offre un compliment physique précis et sincère.",
      "Partage une chose que tu veux améliorer dans ta façon d'aimer.",
      "Raconte ton premier souvenir gênant en amour.",
      "Partage une chose que tu regrettes mais qui t'a appris quelque chose.",
      "Choisis un mot pour décrire votre relation, explique.",
      "Partage un rêve que tu veux absolument réaliser.",
      "Dis ce que tu ressens quand tu la regardes maintenant.",
      "Chante une phrase d'une chanson qui vous représente.",
      "Décris le moment où tu as su qu'elle comptait vraiment.",
      "Donne une qualité que tu veux développer grâce à votre relation.",
    ],
  },
};

function drawCard() {
  const categories = Object.keys(questions);
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const category = questions[randomCategory];
  const randomQuestion =
    category.list[Math.floor(Math.random() * category.list.length)];

  const cardHTML = `
                <div class="card ${randomCategory}">
                    <div class="card-header">
                        <div class="category-badge">${category.name}</div>
                        <div class="icon">${category.icon}</div>
                    </div>
                    <div class="question">${randomQuestion}</div>
                    <div class="card-footer">Prenez votre temps pour répondre 💕</div>
                </div>
            `;

  document.getElementById("cardContainer").innerHTML = cardHTML;
}
