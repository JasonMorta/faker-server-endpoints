
exports.superHeroes = async (req, res) => {

    const heroes = [
            {
                "name": "Batman",
                "powers": ["money", "gadgets", "intelligence"]
            },
            {
                "name": "Superman",
                "powers": ["flight", "super strength", "x-ray vision"]
            },
            {
                "name": "Wonder Woman",
                "powers": ["flight", "super strength", "magic"]
            },
            {
                "name": "Spiderman",
                "powers": ["spider sense", "web slinging", "wall crawling"]
            },
            {
                "name": "Wolverine",
                "powers": ["regeneration", "adamantium claws", "super strength"]
            },
            {
                "name" : "Ironman",
                "powers": ["money", "intelligence", "power suit"]
            },
            {
                "name": "Captain America",
                "powers": ["super strength", "agility", "indestructible shield"]
            },
            {
                "name": "Black Widow",
                "powers": ["martial arts", "intelligence", "weapons"]
            },
            {
                "name": "Hulk",
                "powers": ["super strength", "invulnerability", "anger"]
            },
            {
                "name": "Thor",
                "powers": ["flight", "super strength", "weather control"]
            },
            {
                "name":"Flash",
                "powers": ["super speed", "phasing", "time travel"]
            },
            {
                "name": "Green Lantern",
                "powers": ["flight", "energy constructs", "force field"]
            },
            {
                "name": "Aquaman",
                "powers": ["super strength", "underwater breathing", "telepathy"]
            },
            {
                "name": "Cyborg",
                "powers": ["super strength", "energy weapons", "computer interface"]
            },
            {
                "name": "Shazam",
                "powers": ["flight", "super strength", "magic"]
            },
            {
                "name": "Green Arrow",
                "powers": ["archery", "martial arts", "intelligence"]
            },
            {
                "name": "Black Panther",
                "powers": ["super strength", "agility", "vibranium suit"]
            },
            {
                "name": "Doctor Strange",
                "powers": ["magic", "mystical artifacts", "time manipulation"]
            },
            {
                "name": "Vision",
                "powers": ["intangibility", "flight", "super strength"]
            },
            {
                "name": "Scarlet Witch",
                "powers": ["reality warping", "telekinesis", "energy manipulation"]
            },
            {
                "name": "Ant-Man",
                "powers": ["size manipulation", "strength", "insect communication"]
            }
        ]

    try {
        res.status(200).send(heroes);
    } catch (error) {
        console.log('error', error)
    }
   
};
