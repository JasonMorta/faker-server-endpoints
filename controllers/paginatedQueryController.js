exports.paginated = async (req, res) => {
    const villains = [
        { "name": "Venom", "powers": ["symbiote", "super strength", "web slinging"] },
        { "name": "Magneto", "powers": ["magnetism", "genius", "leadership"] },
        { "name": "Loki", "powers": ["magic", "shape shifting", "immortality"] },
        { "name": "Joker", "powers": ["intelligence", "weapons", "fear"] },
        { "name": "Thanos", "powers": ["super strength", "invulnerability", "intelligence"] },
        { "name": "Darkseid", "powers": ["super strength", "invulnerability", "omega beams"] },
        { "name": "Lex Luthor", "powers": ["intelligence", "money", "power suit"] },
        { "name": "Ultron", "powers": ["intelligence", "super strength", "energy blasts"] },
        { "name": "Red Skull", "powers": ["intelligence", "weapons", "leadership"] },
        { "name": "Doctor Doom", "powers": ["intelligence", "magic", "power suit"] },
        { "name": "Sinestro", "powers": ["fear", "energy constructs", "flight"] },
        { "name": "Brainiac", "powers": ["intelligence", "force field", "energy blasts"] },
        { "name": "Mystique", "powers": ["shape shifting", "martial arts", "intelligence"] },
        { "name": "Ra's al Ghul", "powers": ["immortality", "martial arts", "leadership"] },
        { "name": "Black Adam", "powers": ["super strength", "flight", "magic"] },
        { "name": "Bane", "powers": ["super strength", "intelligence", "venom"] },
        { "name": "Harley Quinn", "powers": ["martial arts", "intelligence", "weapons"] },
        { "name": "Poison Ivy", "powers": ["plant control", "toxins", "immunity"] },
        { "name": "Scarecrow", "powers": ["fear", "toxins", "intelligence"] },
        { "name": "Two-Face", "powers": ["intelligence", "weapons", "leadership"] },
        { "name": "Penguin", "powers": ["intelligence", "weapons", "money"] },
        { "name": "Riddler", "powers": ["intelligence", "riddles", "weapons"] },
        { "name": "Mr. Freeze", "powers": ["cryogenics", "intelligence", "weapons"] },
        { "name": "Catwoman", "powers": ["martial arts", "intelligence", "thievery"] },
        { "name": "Killer Croc", "powers": ["super strength", "invulnerability", "underwater breathing"] },
    ];

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || villains.length;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedResults = villains.slice(startIndex, endIndex); // slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.

    try {
        res.status(200).json({
            page: page,
            limit: limit,
            totalVillains: villains.length,
            totalPages: Math.ceil(villains.length / limit),
            data: paginatedResults
        });
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ error: 'An error occurred' });
    }
};
