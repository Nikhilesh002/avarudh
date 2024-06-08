// Background script

const obsceneWords = ["69","anal","fucking" ,"asslick","anus", "ballsack", "blowjob", "blow job", "boner", "clitoris", "cock", "cunt", "dick", "dildo", "dyke", "fag", "fuck", "jizz", "labia", "muff", "nigger", "nigga", "porn","penis", "piss","nude", "Nudity", "pussy", "scrotum", "sex", "shit", "slut", "smegma", "spunk", "twat", "vagina", "wank", "whore" ,"@55", "@ssfcker", "@ssfucker", "@ssfvcker", "@sshole", "0ral seks", "0ral sex", "0rg@sm", "0rgasms", "3jakulating", "4r5e", "4r5ed", "4r5es", "4skin", "5h17","pornhat","porno","pornhub","xxx","xhamster","superporn", "5h1t", "5kank", "a_s_s", "abbie", "abeed", "aboe", "anal", "anal hole", "anal hore", "anal pirate", "analingus", "analplug", "analplugs", "anilingus", "animal fucker", "anus", "anus plug", "ape shit", "ape shite", "apeshit", "apeshite", "ar5e", "ar5ehole", "arse", "arse gobbler", "arse hole", "arse-bandit", "arse-bandits", "arse-fucker", "arse-fuckers", "arse-hole", "arse-shagger", "arsefuck", "arsefucker", "arsehole", "arseshit", "arsewipe", "ashole", "ass", "ass bandit", "ass eating boiolas", "ass eating nob jokeys", "ass fecker", "ass fuck", "ass fucker", "ass fucking boiolas", "ass fucking nob jokeys", "ass hole", "ass kisser", "ass licking", "ass muncher", "ass-bandit", "ass-fucker", "ass-fuckers", "ass-hole", "asses", "assface", "assfck", "assfcker", "assfk", "assfkcer", "assfker", "assfkr", "assfook", "assfuccer", "assfuck", "assfuck3r", "assfucker", "assfuckers", "assfuckerz", "assfukah", "assfukka", "assfukker", "assfukkerz", "assfvck3r", "assfvcker", "asshat", "asshol3", "asshole", "asshole fucker", "assholes", "assmunch", "assmuncher", "asswhole", "asswipe", "axe wound", "azz", "azzhole"]


chrome.runtime.onInstalled.addListener(function () {
    console.log("Obscenity Filter installed!");
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "filterText") {
        let filteredText = filterText(request.text);
        sendResponse({ filteredText: filteredText });
    }
});

function filterText(text) {
    // Replace obscene words with asterisks
    let filteredText = text;
    obsceneWords.forEach(word => {
        const regex = new RegExp("\\b" + word + "\\b", "gi");
        filteredText = filteredText.replace(regex, '*'.repeat(word.length));
    });

    return filteredText;
}