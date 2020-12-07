let pronouns = ["our","my", "his", "your"];
let adjs = ["purrfect", "uuuge", "stinky", "antique"];
let nouns = ["kitty-cats","feet", "shoes", "house"];
let exts = [".com", ".net", ".edu", ".gov"]

for (let pronoun of pronouns) {
    for (let adj of adjs) {
        for (let noun of nouns) {
            for (let ext of exts) {
        console.log(`${pronoun + adj + noun + ext}`);
}
    }
        }
            }
console.log("Hello World")