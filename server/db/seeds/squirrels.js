/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('squirrels').del()

  // Inserts seed entries
  await knex('squirrels').insert([
    {
        "id": 1,
        "name": "Fluffy",
        "class": "A",
        "catch_phrase": "Cute and cuddly!",
        "bio": "Fluffy uses her adorable looks to charm humans into giving her treats."
    },
    {
        "id": 2,
        "name": "Peanut",
        "class": "B",
        "catch_phrase": "Always be prepared!",
        "bio": "Peanut loves the simple things—like a quiet evening perched on a branch or sharing a snack with someone who knows how to appreciate the little moments."
    },
    {
        "id": 3,
        "name": "Puddles",
        "class": "B",
        "catch_phrase": "If you can keep up with my speedy sprints and my love for adventure, we’ll get along just fine!",
        "bio": "Puddles is always up for exploring new places with boundless energy and a love for the outdoors."
    },
    {
        "id": 4,
        "name": "Whiskers",
        "class": "C",
        "catch_phrase": "Let’s find the best pinecones together and then race to the top of the tallest tree!",
        "bio": "Confidence is key for Whiskers, who is always climbing trees with flair and finding the best pinecones."
    },
    {
        "id": 5,
        "name": "Scamper",
        "class": "D",
        "catch_phrase": "I may be small, but my heart is big – let’s make every moment feel like a jump from branch to branch!",
        "bio": "Scamper enjoys the thrill of jumping from branch to branch and the quiet moments of just hanging out with a good friend."
    },
    {
        "id": 6,
        "name": "Twiggy",
        "class": "E",
        "catch_phrase": "I’ve got a stash of snacks, a sunny spot in the tree, and all the time in the world to share with someone.",
        "bio": "Twiggy loves a quiet afternoon spent nibbling on snacks but is always up for a playful chase."
    },
    {
        "id": 7,
        "name": "Mr. Nuts",
        "class": "C",
        "catch_phrase": "Life’s better when you’re twirling around in the branches and sharing a few laughs along the way.",
        "bio": "Mr. Nuts is always on the hunt for the next snack or adventure, and loves playing in the treetops."
    },
    {
        "id": 8,
        "name": "Sassy",
        "class": "B",
        "catch_phrase": "Looking for a partner to cuddle in the nest and plan our next daring escapade.",
        "bio": "Sassy is always scanning the forest for the best new hiding spots or the tastiest treats and enjoys quiet moments to recharge."
    },
    {
        "id": 9,
        "name": "Snickers",
        "class": "C",
        "catch_phrase": "My tail’s extra fluffy, my energy’s high, and I’ve got plenty of acorns to go around.",
        "bio": "Snickers is sweet, a bit mischievous, and always up for a good laugh."
    },
    {
        "id": 10,
        "name": "Zippy",
        "class": "E",
        "catch_phrase": "I’m always on the lookout for the perfect spot to bury my secrets – care to share yours?",
        "bio": "Fast and always ready for the next adventure, Zippy loves racing through the trees and sneaking into hidden nooks."
    },
    {
        "id": 11,
        "name": "Chestnut",
        "class": "A",
        "catch_phrase": "Let’s hop around the forest together, collecting memories and snacks along the way.",
        "bio": "Chestnut is all about balance between high-energy fun and quiet, restful moments."
    },
    {
        "id": 12,
        "name": "Pecan",
        "class": "E",
        "catch_phrase": "If you love the thrill of a good tree jump and a little mischief, we might just be the perfect match.",
        "bio": "Pecan is always running, leaping, and finding new places to stash acorns, loving every challenge."
    },
    {
        "id": 13,
        "name": "Monkey",
        "class": "D",
        "catch_phrase": "From sunrise to sunset, I’m all about chasing fun, finding new hiding spots, and sharing my treasures with someone special.",
        "bio": "Monkey is playful, curious, and always looking for new ways to have fun in the trees."
    }
])}


