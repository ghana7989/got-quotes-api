import axios from 'axios'

const quotesApi = 'https://game-of-thrones-quotes.herokuapp.com/v1/characters'

export default async function d() {
	const {
		data: {characters},
	} = await axios.get(
		'https://raw.githubusercontent.com/jeffreylancaster/game-of-thrones/master/data/characters.json',
	)
	const {data} = await axios.get(quotesApi)
	const namesFromCharacters = characters.map(
		character => character.characterName,
	)
	const namesFromQuotesApi = data.map(char => char.name)
	namesFromQuotesApi.forEach((name, i) => {
		if (namesFromCharacters.includes(name)) {
			const imageFull =
				characters[namesFromCharacters.indexOf(name)].characterImageFull
			const imageSmall =
				characters[namesFromCharacters.indexOf(name)].characterImageThumb
			data[i].imageFull = imageFull
			data[i].imageSmall = imageSmall
		}
	})
}

const ob = [
	{
		name: 'Jon Snow',
		slug: 'jon',
		house: {
			slug: 'stark',
			name: 'House Stark of Winterfell',
		},
		quotes: [
			"If I fall, don't bring me back.",
			'There is only one war that matters. The Great War. And it is here.',
			'Love is the death of duty.',
			'Everything before the word "but" is horseshit.',
			"The war is not over. And I promise you, friend, the true enemy won't wait out the storm. He brings the storm.",
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwMjUxMDk2OV5BMl5BanBnXkFtZTcwMzg3MTg4OQ@@._V1_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwMjUxMDk2OV5BMl5BanBnXkFtZTcwMzg3MTg4OQ@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Sansa Stark',
		slug: 'sansa',
		house: {
			slug: 'stark',
			name: 'House Stark of Winterfell',
		},
		quotes: [
			'I hate the king more than any of them.',
			"No need to seize the last word, Lord Baelish. I'll assume it was something clever.",
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BNjAwMjE2NDExNF5BMl5BanBnXkFtZTcwODAwODg4OQ@@._V1_SY1000_CR0,0,806,1000_AL_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BNjAwMjE2NDExNF5BMl5BanBnXkFtZTcwODAwODg4OQ@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Eddard Ned Stark',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BODcwMjg0MDQ5MF5BMl5BanBnXkFtZTcwMTk2NDk4OQ@@._V1._SX100_SY140_.jpg',
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BODcwMjg0MDQ5MF5BMl5BanBnXkFtZTcwMTk2NDk4OQ@@._V1_SY1000_CR0,0,827,1000_AL_.jpg',
		slug: 'ned',
		house: {
			slug: 'stark',
			name: 'House Stark of Winterfell',
		},
		quotes: [
			'The man who passes the sentence should swing the sword.',
			'Winter is coming!',
			'I, Eddard of the house Stark, lord of Winterfell and warden of the North, sentence you to die.',
			'A madman sees what he sees.',
			'I grew up with soldiers. I learned how to die a long time ago.',
		],
	},
	{
		name: 'Jaime Lannister',
		slug: 'jaime',
		house: {
			slug: 'lannister',
			name: 'House Lannister of Casterly Rock',
		},
		quotes: [
			'The things I do for love.',
			'Fighting bravely for a losing cause is admirable. Fighting for a winning cause is far more rewarding.',
			"Three victories don't make you a conqueror.",
			'By what right does the wolf judge the lion?',
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMzU1NjM1MF5BMl5BanBnXkFtZTcwMzIxODg4OQ@@._V1_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMzU1NjM1MF5BMl5BanBnXkFtZTcwMzIxODg4OQ@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Tyrion Lannister',
		slug: 'tyrion',
		house: {
			slug: 'lannister',
			name: 'House Lannister of Casterly Rock',
		},
		quotes: [
			'I have a tender spot in my heart for cripples, bastards and broken things.',
			'Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.',
			'The day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth.',
			"That's what I do: I drink and I know things.",
			'I am your son. I have always been your son.',
			"You love your children. It's your one redeeming quality. That and your cheekbones.",
			'That bit of theatre will haunt our family for a generation.',
			'Love is more powerful than reason. We all know that.',
			'A Lannister always pays his debts.',
			'I know that our enemies hate each other almost as much as they hate us.',
			'Well, my brother has his sword, and I have my mind, and a mind needs books like a sword needs a whetstone.',
			"It's not easy being drunk all the time. Everyone would do it, if it were easy.",
			'A ruler who kills those devoted to her is not a ruler who inspires devotion.',
			'Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.',
			"Everyone who makes a joke about a dwarf's height thinks he's the only person ever to make a joke about a dwarf's height.",
			"No matter who you are, no matter how strong you are, sooner or later, you'll face circumstances beyond your control.",
			"I'm a constant disappointment to my own father, and I have learned to live with it.",
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2MDAwOTI0OV5BMl5BanBnXkFtZTcwNjA3NDg1Nw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2MDAwOTI0OV5BMl5BanBnXkFtZTcwNjA3NDg1Nw@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Cersei Lannister',
		slug: 'cersei',
		house: {
			slug: 'lannister',
			name: 'House Lannister of Casterly Rock',
		},
		quotes: [
			'When you play the game of thrones, you win or you die. There is no middle ground.',
			"If you ever call me sister again, I'll have you strangled in your sleep.",
			'If you want a whore, buy one. If you want a Queen, earn her.',
			"Tears aren't a woman's only weapon. The best one's between your legs.",
			'The only way to keep your people loyal is to make certain they fear you more than they do the enemy.',
			"I want our baby to live. Don't let me die, Jaime. Please don't let me die.",
			"I don't care about checking my worst impulses. I don't care about making the world a better place. Hang the world.",
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzNTAxNjExMl5BMl5BanBnXkFtZTcwMDEwNzI4OQ@@._V1._CR954,56,605,670_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzNTAxNjExMl5BMl5BanBnXkFtZTcwMDEwNzI4OQ@@._V1._CR954,56,605,670._SX100_SY140_.jpg',
	},
	{
		name: 'Joffrey Baratheon',
		slug: 'joffrey',
		house: {
			slug: 'baratheon',
			name: 'House Baratheon of Dragonstone',
		},
		quotes: ['Everyone is mine to torment.'],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1NDg5MTAwMl5BMl5BanBnXkFtZTcwOTIwODg4OQ@@._V1_SY1000_CR0,0,818,1000_AL_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1NDg5MTAwMl5BMl5BanBnXkFtZTcwOTIwODg4OQ@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Aerys II Targaryen',
		slug: 'aerys',
		house: {
			slug: 'targaryen',
			name: "House Targaryen of King's Landing",
		},
		quotes: ['Burn them all!'],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMWQzOWViN2ItNDZhOS00MmZlLTkxZTYtZDg5NGUwMGRmYWZjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMWQzOWViN2ItNDZhOS00MmZlLTkxZTYtZDg5NGUwMGRmYWZjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Daenerys Targaryen',
		slug: 'daenerys',
		house: {
			slug: 'targaryen',
			name: "House Targaryen of King's Landing",
		},
		quotes: [
			"I am the dragon's daughter, and I swear to you that those who would harm you will die screaming.",
			'He was no dragon. Fire cannot kill a dragon.',
			'All men must die, but we are not men.',
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MzIxMTQwMF5BMl5BanBnXkFtZTcwMzY2NDg1Nw@@._V1_SY1000_CR0,0,810,1000_AL_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MzIxMTQwMF5BMl5BanBnXkFtZTcwMzY2NDg1Nw@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Tywin Lannister',
		slug: 'tywin',
		house: {
			slug: 'lannister',
			name: 'House Lannister of Casterly Rock',
		},
		quotes: [
			'A lion does not concern himself with the opinion of sheep.',
			"Any man who must say 'I am the King' is no true King.",
			'Every day that he remains a prisoner, the less our name commands respect.',
			'I need you to become the man you were always meant to be. Not next year, not tomorrow, now.',
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BOTA4ODMxMzE1OV5BMl5BanBnXkFtZTcwMTM0ODg4OQ@@._V1_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BOTA4ODMxMzE1OV5BMl5BanBnXkFtZTcwMTM0ODg4OQ@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Ramsay Bolton',
		slug: 'ramsay',
		house: {
			slug: 'bolton',
			name: 'House Bolton of the Dreadfort',
		},
		quotes: [
			"If you think this has a happy ending, you haven't been paying attention.",
		],
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMzM5Nzk3NTU5N15BMl5BanBnXkFtZTgwNzczMjk5NTE@._V1._SX100_SY140_.jpg',
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMzM5Nzk3NTU5N15BMl5BanBnXkFtZTgwNzczMjk5NTE@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
	},
	{
		name: 'Arya Stark',
		slug: 'arya',
		house: {
			slug: 'stark',
			name: 'House Stark of Winterfell',
		},
		quotes: [
			'When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey.',
			"Nothing isn't better or worse than anything. Nothing is just nothing.",
			'Leave one wolf alive and the sheep are never safe.',
			'Fear cuts deeper than swords.',
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5MTYwNDc0OF5BMl5BanBnXkFtZTcwOTg2NDg1Nw@@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5MTYwNDc0OF5BMl5BanBnXkFtZTcwOTg2NDg1Nw@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Robert Baratheon',
		slug: 'robert',
		house: {
			slug: 'baratheon',
			name: 'House Baratheon of Dragonstone',
		},
		quotes: [
			"I'm the King, I get what I want. I never loved my brothers. Sad thing for a man to admit, but it's true. You were the brother I chose.",
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMzQwMDcwNzY5MF5BMl5BanBnXkFtZTcwMzIyMTE5OQ@@._V1_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMzQwMDcwNzY5MF5BMl5BanBnXkFtZTcwMzIyMTE5OQ@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Theon Greyjoy',
		slug: 'theon',
		house: {
			slug: 'greyjoy',
			name: 'House Greyjoy of Pyke',
		},
		quotes: [
			'My sword is yours, in victory and defeat, from this day until my last day.',
			"It's better to be cruel than weak.",
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM3ODUyOTY3N15BMl5BanBnXkFtZTcwNjI4MTg4OQ@@._V1_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM3ODUyOTY3N15BMl5BanBnXkFtZTcwNjI4MTg4OQ@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Samwell Tarly',
		slug: 'samwell',
		house: {
			slug: 'tarly',
			name: 'House Tarly of Horn Hill',
		},
		quotes: [
			"I was nothing at all. And when you're nothing at all, there's no reason to be afraid.",
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyODYyOTczMF5BMl5BanBnXkFtZTcwNjY0ODg4OQ@@._V1_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyODYyOTczMF5BMl5BanBnXkFtZTcwNjY0ODg4OQ@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Lord Varys',
		slug: 'varys',
		house: null,
		quotes: [
			'The storms come and go, the big fish eat the little fish and I keep on paddling.',
			"Power resides where men believe it resides. It's a trick, a shadow on the wall. And a very small man can cast a very large shadow.",
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNDk2MjczM15BMl5BanBnXkFtZTcwODk0ODg4OQ@@._V1_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNDk2MjczM15BMl5BanBnXkFtZTcwODk0ODg4OQ@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Bran Stark',
		slug: 'bran',
		house: {
			slug: 'stark',
			name: 'House Stark of Winterfell',
		},
		quotes: [
			"We don't have time for all this. The Night King has your dragon. He's one of them now. The Wall has fallen. The dead march south.",
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA1NTg0NTI3MTBeQTJeQWpwZ15BbWU3MDEyNjg4OTQ@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA1NTg0NTI3MTBeQTJeQWpwZ15BbWU3MDEyNjg4OTQ@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Brienne of Tarth',
		slug: 'brienne',
		house: {
			slug: 'tarth',
			name: 'House Tarth of Evenfall Hall',
		},
		quotes: [
			'All I ever wanted was to fight for a lord I believed in. But the good lords are dead and the rest are monsters.',
		],
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDY4NzgzOV5BMl5BanBnXkFtZTcwNDM5ODg4OQ@@._V1._SX100_SY140_.jpg',
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDY4NzgzOV5BMl5BanBnXkFtZTcwNDM5ODg4OQ@@._V1_.jpg',
	},
	{
		name: 'Petyr Baelish',
		slug: 'baelish',
		house: {
			slug: 'baelish',
			name: 'House Baelish of Harrenhal',
		},
		quotes: [
			'A man with no motive is a man no one suspects. Always keep your foes confused.',
			"Chaos isn't a pit. Chaos is a ladder.",
			"It doesn't matter what we want. Once we get it, then we want something else.",
			'The fall breaks them. And some are given a chance to climb; they cling to the real or the gods or love.',
			'I have always found revenge to be the purest of motivations.',
			'It doesn???t matter what we want. Once we get it, then we want something else.',
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1MjE3OTc3M15BMl5BanBnXkFtZTcwODgzODg4OQ@@._V1_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1MjE3OTc3M15BMl5BanBnXkFtZTcwODgzODg4OQ@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Tormund',
		slug: 'tormund',
		house: null,
		quotes: ["Gingers are beautiful. We've been kissed by fire."],
	},
	{
		name: 'Melisandre',
		slug: 'melisandre',
		house: null,
		quotes: ['The night is dark and full of terrors.'],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MjI5NjQ2OV5BMl5BanBnXkFtZTcwODI4NDk4OQ@@._V1_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MjI5NjQ2OV5BMl5BanBnXkFtZTcwODI4NDk4OQ@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Olenna Tyrell',
		slug: 'olenna',
		house: {
			slug: 'tyrell',
			name: 'House Tyrell of Highgarden',
		},
		quotes: [
			'The world is overflowing with horrible things, but they???re all a tray of cakes next to death.',
		],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMjgwOTQ3Nl5BMl5BanBnXkFtZTcwMjE2NzE5OQ@@._V1_SY1000_CR0,0,662,1000_AL_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMjgwOTQ3Nl5BMl5BanBnXkFtZTcwMjE2NzE5OQ@@._V1._SX100_SY140_.jpg',
	},
	{
		name: 'Mance Rayder',
		slug: 'mance',
		house: null,
		quotes: ['The freedom to make my own mistakes was all I ever wanted.'],
		imageFull:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3NzQyNjAwNF5BMl5BanBnXkFtZTcwODcyMTEwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
		imageSmall:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3NzQyNjAwNF5BMl5BanBnXkFtZTcwODcyMTEwOQ@@._V1._SX100_SY140_.jpg',
	},
]
