const { GameData } = require('../models');

const games = [
	{
		name: 'Day of Defeat	',
		publisher: 'Valve	',
		platforms: 'PC	',
		categories: 'Multi-player;Valve Anti-Cheat enabled	',
		genres: 'Action	',
		game_type: 'FPS;World War II;Multiplayer	',
		price: 3.99,
		description:
			'Enlist in an intense brand of Axis vs. Allied teamplay set in the WWII European Theatre of Operations. Players assume the role of lightassaultheavy infantry sniper or machine-gunner class each with a unique arsenal of historical weaponry at their disposal. Missions are based on key historical operations. And as war rages players must work together with their squad to accomplish a variety of mission-specific objectives.	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/30/header.jpg?t=1512413490	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Deathmatch Classic	',
		publisher: 'Valve	',
		platforms: 'PC	',
		categories:
			'Multi-player;Online Multi-Player;Local Multi-Player;Valve Anti-Cheat enabled	',
		genres: 'Action	',
		game_type: 'Action;FPS;Multiplayer	',
		price: 3.99,
		description:
			"Enjoy fast-paced multiplayer gaming with Deathmatch Classic (a.k.a. DMC). Valve's tribute to the work of id software DMC invites players to grab their rocket launchers and put their reflexes to the test in a collection of futuristic settings.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/40/header.jpg?t=1528733362	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Half-Life	',
		publisher: 'Valve	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Online Multi-Player;Steam Cloud;Valve Anti-Cheat enabled	',
		genres: 'Action	',
		game_type: 'FPS;Classic;Action	',
		price: 7.19,
		description:
			"Named Game of the Year by over 50 publications Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/70/header.jpg?t=1530045175	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Day of Defeat: Source	',
		publisher: 'Valve	',
		platforms: 'PC	',
		categories:
			'Multi-player;Cross-Platform Multiplayer;Steam Achievements;Steam Trading Cards;Valve Anti-Cheat enabled;Stats;Includes Source SDK	',
		genres: 'Action	',
		game_type: 'FPS;World War II;Multiplayer	',
		price: 7.19,
		description:
			"Day of Defeat offers intense online action gameplay set in Europe during WWII. Assume the role of infantry sniper or machine-gunner classes and more. DoD:S features enhanced graphics and sounds design to leverage the power of Source Valve's new engine technology.	",
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/300/header.jpg?t=1512413758	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Half-Life 2: Deathmatch	',
		publisher: 'Valve	',
		platforms: 'PC	',
		categories: 'Multi-player;Valve Anti-Cheat enabled;Includes Source SDK	',
		genres: 'Action	',
		game_type: 'Action;FPS;Multiplayer	',
		price: 3.99,
		description:
			"Fast multiplayer action set in the Half-Life 2 universe! HL2's physics adds a new dimension to deathmatch play. Play straight deathmatch or try Combine vs. Resistance teamplay. Toss a toilet at your friend today!	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/320/header.jpg?t=1512752170	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Half-Life 2: Lost Coast	',
		publisher: 'Valve	',
		platforms: 'PC	',
		categories: 'Single-player;Commentary available	',
		genres: 'Action	',
		game_type: 'FPS;Action;Singleplayer	',
		price: 0,
		description:
			'Originally planned as a section of the Highway 17 chapter of Half-Life 2 Lost Coast is a playable technology showcase that introduces High Dynamic Range lighting to the Source engine.	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/340/header.jpg?t=1530046348	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Half-Life Deathmatch: Source	',
		publisher: 'Valve	',
		platforms: 'PC	',
		categories: 'Multi-player;Valve Anti-Cheat enabled	',
		genres: 'Action	',
		game_type: 'Action;FPS;Multiplayer	',
		price: 0,
		description:
			'Half-Life Deathmatch: Source is a recreation of the first multiplayer game set in the Half-Life universe. Features all the classic weapons and most-played maps now running on the Source engine.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/360/header.jpg?t=1530046445	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Half-Life 2: Episode One	',
		publisher: 'Valve	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Captions available;Partial Controller Support;Steam Cloud;Stats;Includes Source SDK;Commentary available	',
		genres: 'Action	',
		game_type: 'FPS;Action;Sci-fi	',
		price: 5.79,
		description:
			'Half-Life 2 has sold over 4 million copies worldwide and earned over 35 Game of the Year Awards. Episode One is the first in a series of games that reveal the aftermath of Half-Life 2 and launch a journey beyond City 17. Also features two multiplayer games. Half-Life 2 not required.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/380/header.jpg?t=1530046506	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Portal	',
		publisher: 'Valve	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Captions available;Partial Controller Support;Includes level editor;Includes Source SDK;Commentary available	',
		genres: 'Action	',
		game_type: 'Puzzle;First-Person;Singleplayer	',
		price: 7.19,
		description:
			"Portal&trade; is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay..The game is designed to change the way players approach manipulate and surmise the possibilities in a given environment; similar to how Half-Life&reg; 2's Gravity Gun innovated new ways to leverage an object in any given situation..Players must solve physical puzzles and challenges by opening portals to maneuvering objects and themselves through space..	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/400/header.jpg?t=1512752294	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Half-Life 2: Episode Two	',
		publisher: 'Valve	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Captions available;Partial Controller Support;Steam Cloud;Stats;Includes Source SDK;Commentary available	',
		genres: 'Action	',
		game_type: 'FPS;Action;Sci-fi	',
		price: 5.79,
		description:
			'Half-Life&reg; 2: Episode Two is the second in a trilogy of new games created by Valve that extends the award-winning and best-selling Half-Life&reg; adventure..As Dr. Gordon Freeman you were last seen exiting City 17 with Alyx Vance as the Citadel erupted amidst a storm of unknown proportions. In Episode Two you must battle and race against Combine forces as you traverse the White Forest to deliver a crucial information packet stolen from the Citadel to an enclave of fellow resistance scientists..Episode Two extends the award-winning Half-Life gameplay with unique weapons vehicles and newly-spawned creatures..	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/420/header.jpg?t=1530046627	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Counter-Strike: Global Offensive	',
		publisher: 'Valve	',
		platforms: 'PC	',
		categories:
			'Multi-player;Steam Achievements;Full controller support;Steam Trading Cards;Steam Workshop;In-App Purchases;Valve Anti-Cheat enabled;Stats	',
		genres: 'Action;Free to Play	',
		game_type: 'FPS;Multiplayer;Shooter	',
		price: 0,
		description:
			"Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. . .CS: GO features new maps characters weapons and game modes and delivers updated versions of the classic CS content (de_dust2 etc.). . .&quot;Counter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999&quot; said Doug Lombardi at Valve. &quot;For the past 12 years it has continued to be one of the most-played games in the world headline competitive gaming tournaments and selling over 25 million units worldwide across the franchise. CS: GO promises to expand on CS' award-winning gameplay and deliver it to gamers on the PC as well as the next gen consoles and the Mac.&quot;	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg?t=1554409309	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Rag Doll Kung Fu	',
		publisher: 'Mark Healey	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Indie	',
		game_type: 'Indie;Fighting;Multiplayer	',
		price: 5.99,
		description:
			'Featuring a wide collection of single and multiplayer games either online or with multiple mice Rag Doll Kung Fu provides players with one of the most creative and unique game experiences delivered in years. Additionally between those game rounds the challenges of an aspiring Kung Fu master are revealed via outlandish cut scenes inspired by classic Kung Fu cinema.	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/1002/header.jpg?t=1447350828	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Darwinia	',
		publisher: 'Introversion Software	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Indie;Strategy	',
		game_type: 'Strategy;Indie;RTS	',
		price: 7.19,
		description:
			"Combining fast-paced action with strategic battle planning Darwinia features a novel and intuitive control mechanism a graphical style ripped from 80's retro classics like Tron and Defender and a story concerning a tribe of nomadic sprites trapped in a modern 3D world.	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/1500/header.jpg?t=1460468361	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Uplink	',
		publisher: 'Introversion Software	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Indie;Strategy	',
		game_type: 'Hacking;Indie;Strategy	',
		price: 6.99,
		description:
			'You play an Uplink Agent who makes a living by performing jobs for major corporations. Your tasks involve hacking into rival computer systems stealing research data sabotaging other companies laundering money erasing evidence or framing innocent people. . .You use the money you earn to upgrade your computer systems and to buy new software and tools. As your experience level increases you find more dangerous and profitable missions become available. You can speculate on a fully working stock market (and even influence its outcome). You can modify peoples academic or criminal records. You can divert money from bank transfers into your own accounts. You can even take part in the construction of the most deadly computer virus ever designed.	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/1510/header.jpg?t=1478098895	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Dangerous Waters	',
		publisher: 'Strategy First	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Strategy	',
		game_type: 'Strategy;Simulation;Naval	',
		price: 22.99,
		description:
			"S.C.S. - Dangerous Waters allows you total control over multiple air surface and submarine platforms in a modern-day naval environment. Take direct control of individual crew stations and also plan and execute combined arms naval strategies from a top-down 'Commanders Eye' perspective.	",
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/1600/header.jpg?t=1447350835	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Space Empires IV Deluxe	',
		publisher: 'Strategy First	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Strategy	',
		game_type: 'Strategy;4X;Sci-fi	',
		price: 6.99,
		description:
			'The award-winning Space Empires IV Deluxe is the latest edition in the Space Empires series. A grand strategy title in the space 4X (explore expand exploit and exterminate) genre Space Empires has already found a place in the heart of strategy gamers everywhere. .Research technology design new ships wage war on a tactical level put down rebellions meet and greet new species and much more. All the level and campaign design tools are included allowing anyone to become a part of the expansive Space Empires Mod community.	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/1610/header.jpg?t=1447350836	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Quake III Arena	',
		publisher: 'id Software	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Steam Cloud	',
		genres: 'Action	',
		game_type: 'FPS;Action;Classic	',
		price: 12.99,
		description:
			'Welcome to the Arena where high-ranking warriors are transformed into spineless mush. Abandoning every ounce of common sense and any trace of doubt you lunge onto a stage of harrowing landscapes and veiled abysses. Your new environment rejects you with lava pits and atmospheric hazards as legions of foes surround you testing the gut reaction that brought you here in the first place. Your new mantra: Fight or be finished.	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/2200/header.jpg?t=1543499325	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Quake IV	',
		publisher: 'Bethesda Softworks	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Steam Cloud	',
		genres: 'Action	',
		game_type: 'FPS;Action;Shooter	',
		price: 12.99,
		description:
			'In a desperate war for Earthâ€™s survival against an unrelenting enemy the only way to defeat them is to become one of them. Armed with advanced weaponry and vehicles and aided by an elite squad of marines you take the battle to the heart of the Strogg home planet and become earthâ€™s only hope for victory.<h2 classbb_tagKey features:<h2 classbb_ulBuilt on id Tech 4 (the Doom 3 engine)Sequel to the Quake 2 storylineBattle outdoors using tanks and walkersFight with the support of an elite squadCompete online in fast action arena-style multiplayer	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/2210/header.jpg?t=1543499387	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Wolfenstein 3D	',
		publisher: 'Bethesda-Softworks	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Cloud	',
		genres: 'Action	',
		game_type: 'FPS;Classic;Action	',
		price: 2.99,
		description:
			'Maybe it was the fact that people got to blow away Nazis. Maybe it was the sheer challenge of it all. For whatever reason Wolfenstein 3D and Spear of Destiny pioneered the first-person shooter genre and brought its legendary creators id Software worldwide notoriety and numerous awards. In fact The Computer Gaming World Hall of Fame recognized Wolfenstein 3D as helping to shape the overall direction of the computer gaming industry.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/2270/header.jpg?t=1529533745	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Ultimate Doom	',
		publisher: 'id Software	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Cloud	',
		genres: 'Action	',
		game_type: 'Classic;FPS;Action	',
		price: 3.99,
		description:
			"The complete megahit game that set the world afire. Plus All-New Episode IV: Thy Flesh Consumed. The demons came and the marines died. Except one. You are the last defense against these hell-spawned hordes. Prepare for the most intense mutant-laden blood-splattered action ever! The texture-mapped virtual world is so real you don't just play DOOM - you live it.The Ultimate DOOM takes you beyond anything you've ever experienced. First you get all three original episodes - that's 27 levels of awesome explosive excitement. Then it really blows you away with an all-new episode: Thy Flesh Consumed. Now you're dead meat. Just when you think you're getting pretty good at DOOM you get hit with Perfect Hatred Sever the Wicked and seven other expert levels never seen before! They're so incredibly tough the first 27 levels will seem like a walk in the park!	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/2280/header.jpg?t=1533064907	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Final DOOM	',
		publisher: 'id Software	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Cloud	',
		genres: 'Action	',
		game_type: 'FPS;Action;Classic	',
		price: 3.99,
		description:
			"Two New 32-Level DOOM II Episodes.Evilution:Far from earth the UAC recommenced their experiments on on of the moons of Jupiter. A spaceship mistaken for a supply vexxel on radar hovered above the base. Hideous demons poured out blanketing the base with death. All your comrades were quickly slaughtered or zombified. This time it's not about survival. It's about revenge.The Plutonia Experiment:Every effort has been made by the nation's top scientists to close the seven interdimensional Gates of Hell but one portal remains open. Alone you must infiltrate the ravaged complex defeat the demon Gatekeeper and seal the last Hell-hole before the undead are prepared to once again take over the world.	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/2290/header.jpg?t=1447351098	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'DOOM II	',
		publisher: 'id Software	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Steam Cloud	',
		genres: 'Action	',
		game_type: 'Classic;FPS;Action	',
		price: 3.99,
		description:
			"Let the Obsession begin. Again. This time the entire forces of the netherworld have overrun Earth. To save her you must descend into the stygian depths of Hell itself! Battle mightier nastier deadlier demons and monsters. Use more powerful weapons. Survive more mind-blowing explosions and more of the bloodiest fiercest most awesome blastfest ever! Play DOOM II solo with two people over a modem or with up to four players over a LAN (supporting IPX protocol). No matter which way you choose get ready for adrenaline-pumping action-packed excitement that's sure to give your heart a real workout.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/2300/header.jpg?t=1449848674	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Vampire: The Masquerade - Bloodlines	',
		publisher: 'Activision	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action	',
		game_type: 'RPG;Vampire;Cult Classic	',
		price: 14.99,
		description:
			"VampireÂ®: The Masquerade-Bloodlinesâ„¢ delivers a new type of RPG experience-one that blends all the core elements of a traditional RPG with the graphical richness immediacy and brutal combat of a first-person action game. The game plunges players into the dark and gritty vampire underworld of modern-day L.A. as a creature of the night. Players will develop their character's powers interact with other characters and embark on story-driven quests as they battle mortals and other vampires with an incredible array of vampire powers and weapons. Powered by Valve's Source Technology the game is based on White Wolf's popular Vampire: The Masquerade pen-and-paper RPG series and its official clans.	",
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/2600/header.jpg?t=1447350961	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'X3: Terran Conflict	',
		publisher: 'Egosoft	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Full controller support;Captions available;Steam Cloud	',
		genres: 'Action;Simulation;Strategy	',
		game_type: 'Space;Simulation;Sci-fi	',
		price: 15.99,
		description:
			'It is the year 2938. The long wished-for encounter of the X Universe and the Earth holds both joy and sorrow for the people. Despite flourishing trade the clash of the diverse races cultures and life forms creates new tensions mistrust and open conflict that need to be overcome!Experience the brilliant climax of the legendary X-Trilogy and take your place in the history of the X Universe. classbb_ulLargest X Universe ever.New faction: the Terrans â€“ inhabitants of the Earth.More jobs and non-linear missions than ever before.More than 100 new spaceships new ship classes and weapon systems.Re-designed user interface for comfortable control by mouse keyboard and joystick.New group management tool.Large battleships can be boarded by an outside team.	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/2820/header.jpg?t=1512663827	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Zuma Deluxe	',
		publisher: 'PopCap Games Inc.	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Match 3;Puzzle	',
		price: 4.25,
		description:
			"Survive the ancient temples of Zuma the critically acclaimed action-puzzler from PopCap! Deep in the jungle lie hidden temples bursting with traps and trickery and it's up to you to uncover their treasures. Fire magical balls from your stone frog idol to make matches of three or more and clear the deadly chain before it reaches the golden skull.Explore all the temples â€” if you're good youâ€™ll rack up huge combos and special bonuses that'll help you on your way. But think fast and aim smart or you'll be history in this action-packed puzzle challenge!Key Features classbb_ul3D accelerated graphics and effects.Stunning sounds and tribal tunes.Explore the Adventure mode and test your skills in Gauntlet mode.Over 20 temples to explore! classbb_ul	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/3330/header.jpg?t=1515029472	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Heavy Weapon Deluxe	',
		publisher: 'PopCap Games Inc.	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Arcade;Action	',
		price: 4.25,
		description:
			"It's shoot-'em-up arcade action at its best! Use an incredible assortment of heavy artillery to blast away enemy tanks and planes and fight your way to victory. What are you waiting for? Pull yourself up by your bootstraps and get into the action!. . Blast your way through 19 missions packed with peril.. Two action-packed game modes: Mission and Survival.. Enhanced sound effects and an original soundtrack!.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/3410/header.jpg?t=1447350883	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Peggle Deluxe	',
		publisher: 'PopCap Games Inc.	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Puzzle;Arcade	',
		price: 4.25,
		description:
			"Take your best shot with energizing arcade fun! Aim shoot clear the orange pegs then sit back and cheer as 10 whimsical teachers guide you to Peggle greatness. Conquer 55 fanciful levels with 10 mystical Magic Powers racking up bonus points and shots you'll smile about for weeks. Face off against your friends in Duel Mode or tackle 75 extra-tricky challenges. It's luck and skill and joyous thrills and amidst all this fevered action only one question remains: Can you become a Peggle Master?..Wield 10 miraculous Magic Powers!.Master 55 levels of bouncy delight!.Conquer 75 Master challenges!.Play friends or the computer in Duel Mode!.Revel in breathtaking artwork and music!.Replay and save your best shots!.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/3480/header.jpg?t=1447350989	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Mystery P.I.â„¢ - The Vegas Heist	',
		publisher: 'PopCap Games Inc.	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Hidden Object	',
		price: 4.25,
		description:
			"The heist of the century has just happened! You've been hired by the casino to find & return the stolen money before its grand opening in 16 hours. Search for over 2300 cleverly hidden objects in 25 intriguing locations to solve the Vegas Heist..Two addictive ways to play: Vegas Heist mode and Unlimited Seek &amp; Find mode. Collect all the hidden Keys and Poker Chips to unlock the bonus mode. Find the clues solve the Vegas Heist!..Find over 2300 cleverly hidden objects.Investigate 25 intriguing Vegas locations to locate the stolen money.Two fun game modes: 'Solve the Vegas Heist' and 'Unlimited Seek &amp; Find'.Play 5 unique mini-games: Word Search Tile Rotation Tile Swap Jigsaw and a unique crime solving puzzle	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/3520/header.jpg?t=1447351348	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Peggleâ„¢ Nights	',
		publisher: 'PopCap Games Inc.	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Puzzle;Singleplayer	',
		price: 4.25,
		description:
			"The sun has set at the Peggle Institute but the bouncy delight has just begun! Join the Peggle Masters on a dreamtime adventure of alter egos and peg-tastic action. Stay up late to aim shoot and clear orange pegs and bask in Extreme Fever glory under the silver moon. Then put your Peggle skills to the ultimate test in Challenge mode. If you can master all that fevered action play to your heart's content with Duel mode and Quick Play. Plus you can stock your Trophy Room and revel in clickable replays for even more rebounding joy! . .Explore all 60 levels in Adventure mode .Meet a new Peggle Master and learn a new Magic Power .Test your skills in 60 challenges .Unlock Duel mode to compete against friends and the computer .Celebrate your Peggle prowess with clickable replays and a Trophy Room!	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/3540/header.jpg?t=1447351487	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: "The Wizard's Penâ„¢	",
		publisher: 'PopCap Games Inc.	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Hidden Object	',
		price: 4.25,
		description:
			"The Wizard has vanished and only you can find him in this spellbinding hidden-object adventure! The clues to the Wizard's whereabouts are in his workbook but all the pages are blank. You'll need his magic pen to uncover and guess the image on each page. The better your guesses the better your score &mdash; and every image you uncover brings you closer to finding the Wizard. Plus you can play mystical mini-games unlock special challenges score bonus points and earn potent potions. It's a unique new twist on the seek-and-find genre that you've gotta try! . .Discover over 400 pages of hidden objects .Power up with 10 magic potions .Unlock 16 unique hidden-object mini-games! .Open seven sketchbooks with special challenges	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/3580/header.jpg?t=1447351685	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Advent Rising	',
		publisher: 'Majesco Entertainment	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Trading Cards	',
		genres: 'Action	',
		game_type: 'Action;Sci-fi;Story Rich	',
		price: 7.19,
		description:
			'A common legend pervades the galaxy-that of a powerful highly intelligent ancient race that will one day deliver the universe. They are known as Humans. .Some claim they are the messiah. Others believe they exist only in the imaginations of the young. The Seekers however know Humans exist and believe they are an enemy that must be destroyed. Under the guise of benevolent explorers Seekers comb the universe and eradicate any Human colonies they find. Until now. .Working with award-winning science fiction author Orson Scott Card GlyphX Games has created a gripping storyline that will thrust gamers into an incredible intergalactic saga. .The Advent of Humanity Begins...	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/3800/header.jpg?t=1525292280	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'BloodRayne	',
		publisher: 'Majesco Entertainment	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Trading Cards	',
		genres: 'Action	',
		game_type: 'Action;Vampire;Female Protagonist	',
		price: 6.99,
		description:
			'In the years between the World Wars Agent BloodRayne works as a killing machine for The Brimstone Society--a top secret fraternity that hunts down and destroys supernatural threats. Two missions five years apart turn out to be connected by one man. For years this man has been searching the world for powerful occult relics to bring Germany into a new age of domination. Rayne must face his elite Nazi army and prevent them from releasing horrific creatures in their quest for the artifacts. Starring the super-sexy super-lethal supernatural heroine BloodRayne this original action horror game unleashed the red headed dhampir on the world.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/3810/header.jpg?t=1525292343	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'BloodRayne 2	',
		publisher: 'Majesco Entertainment	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Trading Cards	',
		genres: 'Action	',
		game_type: 'Action;Vampire;Female Protagonist	',
		price: 6.99,
		description:
			"BloodRayne is a dhampir born from the unnatural union of vampire and human. Blessed with the powers of a vampire but cursed with the thirst for blood and a weakness to sunlight Rayne is challenged with her most personal battle yet as she hunts down her siblings. They have banded together and pledged to carry on their father's legacy of creating a new era of vampire supremacy where humans are mere cattle. Rayne's siblings have created 'The Shroud' a mysterious substance that will render the sun's lethal rays harmless to vampires. Now only BloodRayne stands between an unsuspecting humanity and a horrifying vampire dawn.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/3820/header.jpg?t=1525292573	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Psychonauts	',
		publisher: 'Double Fine Productions	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Steam Trading Cards;Partial Controller Support;Steam Cloud	',
		genres: 'Action	',
		game_type: 'Platformer;Comedy;Adventure	',
		price: 6.99,
		description:
			'A Psychic Odyssey Through the Minds of Misfits Monsters and Madmen. . .This classic actionadventure platformer from acclaimed developers Double Fine Productions follows the story of a young psychic named Razputin. In his quest to join the Psychonauts--an elite group of international psychic secret agents--he breaks into their secret training facility: Whispering Rock Psychic Summer Camp. But this is no average psychic summer camp! A mysterious villain has kidnapped Razâ€™s fellow campers and stolen their brains. Now he must use his psychic powers of Telekinesis Levitation and most of all his ability to project himself into the minds of others--to find the loose noodles and keep them from falling into the wrong hands. Fight mental demons! Uncover hidden memories! Sort emotional baggage! Explore the fantastic realm of the inner mind! Join the Psychonauts!	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/3830/header.jpg?t=1489611408	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: "Sid Meier's CivilizationÂ® IV	",
		publisher: '2K	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Includes level editor	',
		genres: 'Strategy	',
		game_type: 'Strategy;Turn-Based Strategy;Turn-Based	',
		price: 9.99,
		description:
			"With over 6 million units sold and unprecedented critical acclaim from fans and press around the world Sid Meier's Civilization is recognized as one of the greatest PC game franchises of all-time. Now Sid Meier and Firaxis Games will take this incredibly fun and addictive game to new heights by adding new ways to play and win new tools to manage and expand your civilization all-new easy to use mod capabilities and intense multiplayer modes and options*. Civilization IV will come to life like never before in a beautifully detailed living 3D world that will elevate the gameplay experience to a whole new level. Civilization IV has already been heralded as one of the top ten games of 2005 and a must-have for gamers around the globe!*Mac version's Online Multiplayer is no longer supported.	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/3900/header.jpg?t=1545236003	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: "Sid Meier's CivilizationÂ® III Complete	",
		publisher: '2K	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Includes level editor	',
		genres: 'Strategy	',
		game_type: 'Strategy;Turn-Based Strategy;Turn-Based	',
		price: 2.99,
		description:
			"Sid Meier's Civilization III: Complete the latest offering in the Sid Meier's Civilization III franchise provides gaming fans with Sid Meier's Civilization III the highly-addictive journey of discovery combined with the updated and enhanced multiplayer expansion pack Sid Meier's Civilization III: Play the World* as well as all of the great new civilizations scenarios and features from Sid Meier's Civilization III: Conquests! Sid Meier's Civilization III: Complete provides more ways to explore more strategies to employ more modes of play and more ways to win all in one box! . .*Online Multiplayer to be suspended as of May 31st 2014 LAN mode still supported	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/3910/header.jpg?t=1534462914	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: "Sid Meier's Pirates!	",
		publisher: '2K	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'RPG	',
		game_type: 'Pirates;Open World;RPG	',
		price: 5.99,
		description:
			'Sail the Caribbean marauding all on the high seas or ally your ship and crew as a privateer in search of riches - the life you choose is up to you. Face dogged enemies raid unsuspecting villages woo fair maidens avoid capture or dig for buried treasure. Discover what it takes to become one of the most famous pirates in history!	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/3920/header.jpg?t=1530035869	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'RACE - The WTCC Game	',
		publisher: 'SimBin	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Racing	',
		game_type: 'Racing;Simulation	',
		price: 25.99,
		description:
			'The Official WTCC Game | RACE is the first ever game to be focused on the hard hitting intense action of the exciting WTCC championship which is exploding in popularity all over the world. Based on WTCC one of only three official FIA world championships next to Formula 1 and WRC RACE features the complete WTCC championship season of 2006 all the cars drivers and locations including several official tracks and cars brand new to the racing game genre.The game recreates the championship as close to real life as possible and simulates the cars and the driving style in a ultra realistic fashion. RACE features various difficulty levels to attract everyone from hardcore simulation gamers to beginners level still featuring the same elements and a highly realistic driving experience.	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/4230/header.jpg?t=1478078220	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'RACE: Caterham Expansion	',
		publisher: 'SimBin	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Racing	',
		game_type: 'Racing;Simulation	',
		price: 3.99,
		description:
			'Celebrating the 50-year anniversary of Caterham Cars Ltd RACE fans can now expand the WTCC Experience with this exceptional series of classic sportscars. RACE: CATERHAM introduces a total of 60 individual new carscar skins based on some of the most exciting models in the Caterham sports car range including the Caterham CSR 200 CSR 260 and the CSR 320 Concept a concept version with a grueling 320hp. .Racers can run the cars on two exciting new tracks: the legendary Imola circuit and the former GP track Estoril. .RACE: CATERHAM includes new features that improve the original RACE game experience: improved performance scalability a performance monitor to help the player find the best possible graphical settings and a new controller interface with more options for joy-pad or keyboardmouse controls.	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/4290/header.jpg?t=1478078209	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'RoboBlitz	',
		publisher: 'Naked Sky Entertainment	',
		platforms: 'PC	',
		categories:
			'Single-player;Partial Controller Support;Includes level editor	',
		genres: 'Action;Indie	',
		game_type: 'Action;Indie;Puzzle	',
		price: 5.99,
		description:
			'RoboBlitz&trade; is a humorous physics-based action game full of inventive gizmos weapons characters and environments. Players take on the role of Blitz a multi-talented robot who must activate an aging Space Cannon to save his world from a band of maladjusted space pirates...19 levels of puzzle-solving and high-intensity action set in 7 unique environments.Humorous characters and unique weapons.Gameplay entirely driven by physics.Advanced robot simulation and control theory.Powered by Unreal&reg; Engine 3	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/4300/header.jpg?t=1447350932	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Rome: Total Warâ„¢ - Alexander	',
		publisher: 'SEGA	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Strategy	',
		game_type: 'Strategy;RTS;Historical	',
		price: 8.99,
		description:
			"Rome: Total War - Alexander is the second official expansion pack to Rome: Total War. classbb_ulAn entirely new campaign map that stretches from Macedonia to Greece and into the heart of the ancient Persian EmpireNew campaign game that tasks players with matching the exploits of Alexander the Great as he swept across Central Asia and dominated the Persian Empire Four new factions including the Macedonians Persians and Indians Over 25 new units including Alexander's own renowned historical troops Historical Alexander the Great campaign with six new historical battles that unlock sequentially telling the story of Alexander and providing a historical backdrop to each of the battles All-new movies to support the Alexander campaign with professional voiceovers by actor Brian Blessed (Alexander Star Wars Episode I: The Phantom Menace)	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/4770/header.jpg?t=1538753204	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Cossacks: Art of War	',
		publisher: 'GSC World Publishing	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Strategy	',
		game_type: 'Strategy;RTS;Historical	',
		price: 3.99,
		description:
			'Cossacks: The Art of War â€“ continues the history of the great battles of XVIIâ€“XVIII centuries and introduces five new campaigns two nations some new units and much more.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/4870/header.jpg?t=1547049419	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Zen of Sudoku	',
		publisher: 'Unknown Worlds Entertainment	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual;Indie	',
		game_type: 'Casual;Indie;Puzzle	',
		price: 0,
		description:
			'From the creators of hrefhttp:store.steampowered.comapp90002 relnoreferrer Natural Selection comes Zen of Sudoku a relaxing easy to play version of Sudoku for your PC. classbb_ulRelax with hand-painted Japanese-styled backgrounds no timer and lush natural soundscapes.Stimulates your brain to keep it healthy and alert.Teaches you the basics of Sudoku through advanced strategies like &quot;naked pairs&quot; &quot;x-wing&quot; and &quot;locked candidates&quot;.Play unlimited puzzles print them to finish offline and enter custom puzzles from other sources.Unlock trophies backgrounds and more.This product includes portions of the hrefhttps:steamcommunity.comlinkfilter?urlhttp:developer.popcap.com relnoopener PopCap Games Framework.	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/4900/header.jpg?t=1513414875	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'STAR WARSâ„¢ Republic Commandoâ„¢	',
		publisher: 'LucasArts;Lucasfilm;Disney Interactive	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Local Multi-Player;Steam Cloud	',
		genres: 'Action	',
		game_type: 'Star Wars;Action;FPS	',
		price: 7.19,
		description:
			'Chaos has erupted throughout the galaxy. As leader of an elite squad of Republic Commandos your mission is to infiltrate dominate and ultimately annihilate the enemy. Your squad will follow your orders and your lead working together as a team - instinctively intelligently instantly. You are their leader. They are your weapon. classbb_ulInnovative Squad Control System - With intuitive and smart squad commands the simple touch of one button easily controls your squad to perform complex commands and strategic maneuvers.Multiple Gaming Mode - Choose the single-player option and command a squad of four that you can dispatch at will. Or choose the multiplayer option and play with up to sixteen players online in different multi-player modes.Prelude to Episode III - Encounter new vehicles locations and enemies from the upcoming film.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/6000/header.jpg?t=1542753029	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Indiana JonesÂ® and the Fate of Atlantisâ„¢	',
		publisher: 'LucasArts;Lucasfilm;Disney Interactive	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Cloud	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click;Classic	',
		price: 4.79,
		description:
			"The Man With The Hat Is Back In His Greatest Adventure Yet!1939 - The eve of World War II. Nazi agents are about to get their hands on a weapon more dangerous than the atom bomb. Only Indy can stop them before they unleash the deadly secret that sank Atlantis. classbb_ulPoint 'nâ€™ click your way through fistfights puzzles balloon rides car chases and Indy one-liners.Explore over 200 spectacular locations.Hear LucasArts' exclusive iMUSE create a musical score that follows your every move.Play and replay - three unique challenging paths to vanquish the Reich.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/6010/header.jpg?t=1554749139	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'FlatOut	',
		publisher: 'Strategy First	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Racing	',
		game_type: 'Racing;Destruction;Driving	',
		price: 4.99,
		description:
			'FlatOut is adrenaline-filled muscle car racing game packed with explosive physics spectacular effects and graphics innovative game play mechanics and good old fun! classbb_ulEight players or AI cars on track for close pack racing Single player Career Quick race and Time trial modes Multiplayer mayhem with up to 8 players 16 different fully upgradeable cars 48 tracks including stunt arenas and destruction bowls Wacky and funny ragdoll mini-games Open environments for taking your own shortcuts Convincing car handling and impressive damage modeling	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/6220/header.jpg?t=1525725940	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'The Longest Journey	',
		publisher: 'Funcom	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action;Adventure;RPG	',
		game_type: 'Adventure;Point & Click;Female Protagonist	',
		price: 5.99,
		description:
			'The Longest Journey is an amazing graphical adventure where the player controls the protagonist April Ryan on her journey between parallel universes. Embark on an exciting and original journey of discovery where you will explore solve puzzles meet new people face terrifying monsters learn grow and live the adventure of a lifetime! classbb_ulOver 150 locations spanning two distinct and detailed worldsMore than 70 speaking characters40+ hours of gameplay20+ minutes of high-resolution pre-rendered video footage Cinematic musical score	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/6310/header.jpg?t=1519300467	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Devil May CryÂ® 3 Special Edition	',
		publisher: 'Capcom	',
		platforms: 'PC	',
		categories: 'Single-player;Partial Controller Support	',
		genres: 'Action	',
		game_type: 'Action;Hack and Slash;Great Soundtrack	',
		price: 15.99,
		description:
			"Dante's past is now revealed as Devil May Cry returns to its roots. Master Dante's multiple fighting styles while battling never before seen demons and new characters as you fight your way towards a brutal confrontation with Dante's mysterious twin brother Vergil.<h2 classbb_tagKey Features:<h2 classbb_ulChoose Dante's fighting style - maximize the impact of close-up blade attacks or blow enemies away from a distance.Huge arsenal of weapons - handguns shotguns swords and more.A horde of demonic enemies - more ferocious than ever - with powerful weapons and abilities to transform and fly.	",
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/6550/header.jpg?t=1554414035	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Commandos: Behind Enemy Lines	',
		publisher: 'Kalypso Media Digital	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Co-op	',
		genres: 'Action	',
		game_type: 'Strategy;Stealth;Action	',
		price: 3.99,
		description:
			"Commandos: Behind Enemy Lines is a real-time tactics game set in World War II that puts you in command of a small squad of elite troopers. Send them behind enemy lines on a series of hazardous missions and bring them back alive. Clever strategy has never been so furiously action-packed. Study the enemy's movements develop a careful plan synchronize your men and launch them on a swift and fierce attack using all your power and skill. classbb_ulYou control 6 individual commandos each with a unique combat skill set. Thwart the German war machine by means of sabotage and tactical genius.Zoomable isometric camera allows for up to 6 simultaneous camera angles.20 missions throughout Europe and Northern Africa.Co-op multiplayer mode on a LAN or over the internet.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/6800/header.jpg?t=1548865157	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Azada	',
		publisher: 'Big Fish Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual;Indie	',
		game_type: 'Casual;Indie;Puzzle	',
		price: 6.99,
		description:
			'Trapped in a magical puzzle book the adventurous Titus needs your help to release him from his spell. To do this you must solve the tricky puzzles of Azadaâ„¢. Crack the series of puzzles and fill in the missing pages of the enchanted book to free Titus from his prison. classbb_ulLoads of unique puzzles to solve.Boss Puzzles and surprises along the way.Hidden clues unlock levels!	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/7340/header.jpg?t=1531434562	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Bone: Out From Boneville	',
		publisher: 'Telltale Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click	',
		price: 0,
		description:
			'After an attack by a swarm of locusts leaves Fone Bone lost in the mountains he sets out to find his cousins with a little help from a mysterious red dragon a couple of talking bugs and a pretty girl named Thorn. But with hungry rat creatures on his tail will Fone Bone ever make his way back to Boneville?	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/8310/header.jpg?t=1447351351	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Bone: The Great Cow Race	',
		publisher: 'Telltale Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click	',
		price: 0,
		description:
			"It's spring fair time and The Great Cow Race is about to begin! Play carnival games. Write love poetry. Outsmart a really big bee. Cheat the locals out of their hard-earned eggs. Bang on some pots and pans. Escape from an angry mob. Oh and dress up like a cow. (Not necessarily in that order.)	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/8320/header.jpg?t=1447351351	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'EVE Online	',
		publisher: 'CCP	',
		platforms: 'PC	',
		categories:
			'Multi-player;Online Multi-Player;MMO;Co-op;Online Co-op;Steam Trading Cards	',
		genres: 'Action;Free to Play;Massively Multiplayer;RPG;Strategy	',
		game_type: 'Space;Massively Multiplayer;Sci-fi	',
		price: 0,
		description:
			'What Steam curators have to say about EVE srchttps:steamcdn-a.akamaihd.netsteamapps8500extras2-Steam-Curator-Image-ColorV_616x600.png?t1554916517 About the Game srchttps:steamcdn-a.akamaihd.netsteamapps8500extrasSteam-Img_EN.jpg?t1554916517	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/8500/header.jpg?t=1554916517	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Freedom Force	',
		publisher: '2K	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'RPG;Strategy	',
		game_type: 'RPG;Strategy;Superhero	',
		price: 2.99,
		description:
			"From a distant corner of the galaxy an evil alien race sets in motion a sinister plan to conquer the Earth. They unleash a powerful catalyst â€” Energy X â€” that imbues the planet's worst miscreants with super-powers to bring the planet to its knees. Now Earth's only hope lies with a new breed of heroes... The Freedom Force! .Command a squad of comic book heroes in the defense of Patriot City. Choose from over a dozen heroes or create your own comic champions. Fight for freedom in over 20 action-packed missions. Restore order in a completely interactive 3D world. Take your heroes online and join the fight in multiplayer mode.* . . .*Multiplayer available in LAN or Direct IP Only.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/8880/header.jpg?t=1526506568	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Freedom Force vs. the Third Reich	',
		publisher: '2K	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'RPG;Strategy	',
		game_type: 'RPG;Strategy;Superhero	',
		price: 2.99,
		description:
			'Freedom is threatened yet again and only Minute Man and his heroic Freedom Force can save the day in the follow up to one of the most critically acclaimed games of 2002. .Freedom Force vs. the Third Reich brings dynamic storytelling fast-paced tactical role-play and larger-than-life characters from the comic book pages to the computer screen. In this title the league of heroes must travel back in time to defeat Blitzkrieg defender of the Reich and his homicidal henchmen. With action spanning from the blasted battlefields of World War II to the dazzling depths of distant dimensions Freedom Force vs. the Third Reich will give Freedom Fans more than they can handle. . .Multiplayer available in LAN or Direct IP Only.	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/8890/header.jpg?t=1526506573	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Spear of Destiny	',
		publisher: 'id Software	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Cloud	',
		genres: 'Action	',
		game_type: 'Action;FPS;Classic	',
		price: 2.49,
		description:
			"It's World War II and you are B.J. Blazkowicz the Allies' most valuable agent. In the midst of the German Blitzkrieg the Spear that pierced the side of Christ is taken from Versailles by the Nazis and secured in the impregnable Castle Wolfenstein. According to legend no man can be defeated when he has the Spear. Hitler believes himself to be invincible with the power of the Spear as his brutal army sweeps across Europe. Your mission is to infiltrate the heavily guarded Nazi stronghold and recapture the Spear from an already unbalanced Hitler. The loss of his most coveted weapon could push him over the edge. It could also get you ripped to pieces.	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/9000/header.jpg?t=1447351109	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'DOOM 3	',
		publisher: 'id Software	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Steam Cloud	',
		genres: 'Action	',
		game_type: 'Horror;FPS;Action	',
		price: 0,
		description:
			"A massive demonic invasion has overwhelmed the Union Aerospace Corporation's (UAC) Mars Research Facility leaving only chaos and horror in its wake. As one of only a few survivors you must fight your way to hell and back against a horde of evil monsters. The path is dark and dangerous but you'll have an array of weapons--including a pistol a chainsaw grenades and more--to use for protection.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/9050/header.jpg?t=1447351113	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Master Levels for Doom II	',
		publisher: 'id Software	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Cloud	',
		genres: 'Action	',
		game_type: 'Action;FPS;Classic	',
		price: 0,
		description:
			'Introducing the Master Levels for DOOM II. Twenty never-before-seen levels all with the same acid drenched hell spawned horror of the originals. Each was created by independent designers and supervised by the demented minds of id Software. You might as well forget about seeing the light of day ever again.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/9160/header.jpg?t=1447351119	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Supreme Commander	',
		publisher: 'Square Enix	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Strategy	',
		game_type: 'Strategy;RTS;Sci-fi	',
		price: 8.99,
		description:
			'For a thousand years three opposing forces have waged war for what they believe is true. There can be no room for compromise: their way is the only way. Dubbed The Infinite War this devastating conflict has taken its toll on a once-peaceful galaxy and has only served to deepen the hatred between the factions. After centuries of struggle the battle for supremacy has at last reached a turning point. Under your strategic command and leadership will your faction reign supreme? Will you be victorious and elevate your race to domination? Or will you lead them into the hell of defeat and ultimate extinction?	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/9350/header.jpg?t=1525193447	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Star Trek Online	',
		publisher: 'Perfect World Entertainment	',
		platforms: 'PC	',
		categories:
			'Multi-player;MMO;Co-op;Steam Achievements;Full controller support;In-App Purchases	',
		genres: 'Free to Play;Massively Multiplayer;RPG	',
		game_type: 'Free to Play;Sci-fi;Space	',
		price: 0,
		description:
			'NEW CONTENT hrefhttps:steamcommunity.comlinkfilter?urlhttps:www.arcgames.comengamesstar-trek-onlinenewsdetail11055643 relnoopener srchttps:steamcdn-a.akamaihd.netsteamapps9900extrasSteam_ContentUpdate_609x215_s16.jpg?t1548262786 About the Game srchttps:steamcdn-a.akamaihd.netsteamapps9900extrasSTO_Fed_Gif_02.png?t1548262786 srchttps:steamcdn-a.akamaihd.netsteamapps9900extrassto_banner_20180711_steam_609x1699.jpg?t1548262786	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/9900/header.jpg?t=1548262786	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Haunted Houseâ„¢	',
		publisher: 'Atari	',
		platforms: 'PC	',
		categories: 'Single-player;Partial Controller Support	',
		genres: 'Adventure	',
		game_type: 'Adventure	',
		price: 4.79,
		description:
			"Dare to be scared! After 30 years Atari's classic groundbreaking game is back - with all-new scream-worthy chills and thrills! With spooky enemies lurking around every corner are you brave enough to enter the Haunted House? KEY FEATURES: classbb_ulExplore the dark depths of Graves Mansion - find your way through 20 dark and eerie levels - just don't let the ghosts send you running scared!Uncover dark secrets - solve the mystery of what happened to your long-lost grandfather!	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/9960/header.jpg?t=1447353580	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'A Stroke of Fate: Operation Valkyrie	',
		publisher: 'Akella	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click	',
		price: 4.99,
		description:
			'Operation Valkyrie is a famous plan of the German Resistance to overthrow the tyrannical Nazi government. Standartenfuhrer Gerhard Mayer a patriot who works in Reich Security Head Office learns that Gestapo has tracked down the conspirators. He does everything possible to make the investigation assigned to him and tries to mislead Gestapo in order to help the Resistance to overthrow the Nazi regime and stop the war..<h2Key Features:<h2..Detective adventure game in historical surroundings. .Photorealistic high-definition graphics. .Full immersion into historical atmosphere with an option to play in black and white movie style. .Wonderfully detailed locations dozens of characters spy mini-games..	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/10240/header.jpg?t=1447354813	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Space Trader: Merchant Marine	',
		publisher: 'Meridian4	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Co-op;Steam Achievements	',
		genres: 'Action;Indie;Strategy	',
		game_type: 'Action;Space;FPS	',
		price: 3.99,
		description:
			'In the far future humanity is ruled by The Ministry of Accounts an oppressive bureaucracy that tracks records and taxes every transaction of daily life. From the depths of Red Tape a new breed of marketeer arises to challenge the authority and make a profit: the Space Trader is born! . .As a Trader you will attempt to amass a fortune beyond your wildest imagination buying and selling commodities and taking up arms against the oppressors or even accepting bounty missions hunting down crime bosses and their thugs.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/11240/header.jpg?t=1511279025	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Obulis	',
		publisher: 'Meridian4	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements	',
		genres: 'Casual;Indie	',
		game_type: 'Puzzle;Casual;Indie	',
		price: 3.99,
		description:
			'Obulis takes things to the next level by fusing highly compelling gameplay with outstanding graphics music and state of the art physics effects. . .The goal in Obulis is simple get the colored ball into the like-colored pot. Easier said than doneâ€¦ Rack your brain through 150+ puzzling levels while listening to a great calming soundtrack.	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/11330/header.jpg?t=1511314799	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Larva Mortus	',
		publisher: 'Meridian4	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements	',
		genres: 'Action;Indie	',
		game_type: 'Action;Indie;Top-Down	',
		price: 3.99,
		description:
			"At the end of 19th Century dark forces overshadow the world once again. A brave agent experienced in exorcism and combat comes to face the oncoming evil and fight loathsome supernatural monsters and horrific spawns of black magic. In the role of the agent it's your quest to combat sinister forces and to face a dark warlock of the ancient times and stop his plan to capture powerful artifacts of black magic.	",
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/11340/header.jpg?t=1516645482	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Chains	',
		publisher: 'Meridian4	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Indie	',
		game_type: 'Indie;Puzzle;Physics	',
		price: 3.99,
		description:
			"Chains is a challenging puzzle game with a unique feel and distinctive vector graphics style. The object of the game is simple - to link adjacent bubbles of the same color into chains. As you progress through the physics-driven stages it becomes increasingly more challenging and players' speed strategy and skill will be put to the test.classbb_ul20 levels each focusing on action strategy or flow Physics-driven gameplay 3 difficulty modes Colorblind option Up to 15 player profiles Unique art direction with beautiful vector graphics Soundtrack from the Belgian electro band Silence Unlimited replayability value 	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/11360/header.jpg?t=1479728118	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Hospital Tycoon	',
		publisher: 'Codemasters	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Simulation	',
		game_type: 'Simulation;Management;Singleplayer	',
		price: 3.49,
		description:
			"Develop your own hospital drama and manipulate the results to your best advantage! In charge of a rapidly expanding hospital your job is to cure the patients with your army of doctors and nurses while successfully managing the facilities and taking care of everyone's needs. .Run the hospital and you influence the outcome in this funny highly accessible and involving game featuring character relationships staff management hilarious diseases and cures and more. Featuring gameplay that's as personable as you want it Hospital Tycoon has engaging locations missions and characters galore! .Hospital Tycoon is easy to start impossible to put down. It's time to start operating!	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/11590/header.jpg?t=1447351434	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Grand Theft Auto III	',
		publisher: 'Rockstar Games	',
		platforms: 'PC	',
		categories: 'Single-player;Partial Controller Support	',
		genres: 'Action	',
		game_type: 'Open World;Action;Classic	',
		price: 5.99,
		description:
			'The sprawling crime epic that changed open-world games forever. .Welcome to Liberty City. Where it all began. . .The critically acclaimed blockbuster Grand Theft Auto III brings to life the dark and seedy underworld of Liberty City. With a massive and diverse open world a wild cast of characters from every walk of life and the freedom to explore at will Grand Theft Auto III puts the dark intriguing and ruthless world of crime at your fingertips. . .With stellar voice acting a darkly comic storyline a stunning soundtrack and revolutionary open-world gameplay Grand Theft Auto III is the game that defined the open world genre for a generation.	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/12100/header.jpg?t=1543431075	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Grand Theft Auto: San Andreas	',
		publisher: 'Rockstar Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action	',
		game_type: 'Open World;Action;Multiplayer	',
		price: 9.99,
		description:
			"Five years ago Carl Johnson escaped from the pressures of life in Los Santos San Andreas... a city tearing itself apart with gang trouble drugs and corruption. Where filmstars and millionaires do their best to avoid the dealers and gangbangers. . .Now it's the early 90s. Carl's got to go home. His mother has been murdered his family has fallen apart and his childhood friends are all heading towards disaster. . .On his return to the neighborhood a couple of corrupt cops frame him for homicide. CJ is forced on a journey that takes him across the entire state of San Andreas to save his family and to take control of the streets.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/12120/header.jpg?t=1543431179	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Manhunt	',
		publisher: 'Rockstar Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action	',
		game_type: 'Gore;Violent;Stealth	',
		price: 5.99,
		description:
			"They just killed Cash. Now they want to kill him again. . .America is full of run down broken rust-belt towns where nobody cares and anything goes. In Carcer City nothing matters anymore and all that's left are cheap thrills. The ultimate rush is the power to grant life and take it away for sport. This time James Earl Cash you are the sport. They gave you your life back. Now they are going to hunt you down. . .You awake to the sound of your own panicked breath. You must run hide and fight to survive. If you can stay alive long enough you may find out who did this to you. . .This is a brutal blood sport.	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/12130/header.jpg?t=1478120404	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Max Payne	',
		publisher: 'Rockstar Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action	',
		game_type: 'Noir;Action;Classic	',
		price: 5.99,
		description:
			"Max Payne is a man with nothing to lose in the violent cold urban night. A fugitive undercover cop framed for murder hunted by cops and the mob Max is a man with his back against the wall fighting a battle he cannot hope to win. Max Payne is a relentless story-driven game about a man on the edge fighting to clear his name while struggling to uncover the truth about his slain family amongst a myriad of plot-twists and twisted thugs in the gritty bowels of New York during the century's worst blizzard. . .The groundbreaking original cinematic action-shooter Max Payne introduced the concept of Bullet TimeÂ® in videogames. Through its stylish slow-motion gunplay combined with a dark and twisted story Max Payne redefined the action-shooter genre.	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/12140/header.jpg?t=1478120506	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Max Payne 2: The Fall of Max Payne	',
		publisher: 'Rockstar Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action	',
		game_type: 'Noir;Action;Third-Person Shooter	',
		price: 5.99,
		description:
			'Max Payne 2: The Fall of Max Payne is a violent film-noir love story. Dark tragic and intense the in-depth story is a thrill-ride of shocking twists and revelations. . .His life in ruins Max Payne finds himself back in the NYPD. During a routine murder investigation he runs into Mona Sax a woman he thought dead a femme fatale murder suspect. She holds the keys to the questions that haunt him. But nothing is simple in the dark and tragic night of New York City. An army of underworld thugs stands between Max and the answers he seeks. His journey deeper into his own personal hell continues. . .Max Payne 2: The Fall of Max Payne delivers an intense gameplay experience. It features fierce yet stylish action sequences and the slow-motion gunplay that has become synonymous with the Max Payne series.	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/12150/header.jpg?t=1478120611	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Grand Theft Auto 2	',
		publisher: 'Rockstar Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action	',
		game_type: 'Action;Classic;Open World	',
		price: 0,
		description:
			'Grand Theft Auto is back. The cars are faster. The streets are busier. The bad guys are nastier. The police are angrier. And now the FBI and the Army are getting involved... .Seven ruthless gangs are involved in a ruthless power struggle and it is up to you to make a name for yourself. .Respect is earned not given.	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/12180/header.jpg?t=1506455619	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Bully: Scholarship Edition	',
		publisher: 'Rockstar Games	',
		platforms: 'PC	',
		categories: 'Single-player;Partial Controller Support	',
		genres: 'Action;Adventure	',
		game_type: 'Open World;Action;Adventure	',
		price: 9.99,
		description:
			'Bully: Scholarship Edition takes place at the fictional New England boarding school Bullworth Academy and tells the story of mischievous 15-year-old Jimmy Hopkins as he goes through the hilarity and awkwardness of adolescence. Beat the jocks at dodge ball play pranks on the preppies save the nerds kiss the girl and ultimately navigate the social hierarchy in the worst school around. Includes the complete soundtrack featuring 26 original tracks. After purchase and download you can locate the soundtrack in your Steam folder here: [Steamsteamappscommonbully scholarship editionBully Original Soundtrack]. The Steam folder is typically found under C:Program FilesSteam	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/12200/header.jpg?t=1478118908	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'FlatOut: Ultimate Carnage	',
		publisher: 'Strategy First	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Racing	',
		game_type: 'Racing;Destruction;Multiplayer	',
		price: 16.99,
		description:
			'The small country of Arulco has been taken over by a merciless dictator - and only you can loosen the iron grip! Jagged Alliance 2 Gold Pack immerses you into an elaborate role-playing universe where you will interact with more than 150 characters recruit your own band of soldiers and create your own custom mercenary to win back Arulco - not once but twice! The perfect blend of strategy role playing and tactical combat!	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/1610/header.jpg?t=1447350836	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Exodus from the Earth	',
		publisher: 'Strategy First	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Partial Controller Support	',
		genres: 'Action	',
		game_type: 'Action;FPS;Shooter	',
		price: 10.99,
		description:
			"The Intelligence Agency has commissioned you Francis Rixon to find out what is happening inside the Corporation's confines and to retrieve information about a secret mineral upon which the very existence of the human race may depend. . .Explore and battle through various locations on two planets each with multiple objectives .Epic environments with cinematic special effects .Innovative physics engine that reflects the real world .Variety of interactive and destructible objects .Supernatural storyline and unpredictable gun-toting gameplay .Diverse selection of weaponry each with its own unique features and melee attack options .Smart and challenging AI which reflect real life behaviors .Multiple modes of transportation at the player's and enemy's disposal .Internet and LAN multiplayer with up to 10 players	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/12390/header.jpg?t=1447351495	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Ankh 3: Battle of the Gods	',
		publisher: 'Strategy First	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click	',
		price: 10.99,
		description:
			'The omens of the Battle of the Gods have been many signaling the impending fight for supremacy over all other gods of Egypt. And of course Assil will be caught in the middle of it all again. Together with his girlfriend Thara he will have to prevent the sinister Seth from winning the battle and subjecting Egypt to his regime of terror. With the typical Ankh humour numerous bizarre characters and gags by the wagonload Ankh - Battle Of The Gods is again a candidate for the adventure gaming throne..Battle Of The Gods feature several new locations including Luxor the gambling capital of ancient Egypt. And an unexpected trip takes Assil to a far-away exotic location where he will have to deal with the entirely unfamiliar conventions of its native people. The new Ankh features even more detailed character models and smoother animations.	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/12450/header.jpg?t=1447352266	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'BC Kings	',
		publisher: 'Strategy First	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Strategy	',
		game_type: 'Strategy;RTS	',
		price: 3.99,
		description:
			"BC Kings features several new elements not commonly found in strategy games. In addition to gathering resources training an army and defeating the enemy you will have to solve adventure and role-playing elements as well..The campaign is built around the epic story of the brave hero Mradin and his trusty old friend Giesnik. As you complete the main objectives you'll run across several side-quests where you can earn Shell-coins that can be spent on upgrading your main characters. Along the way to victory you'll figure out the biggest mysteries of all time like the purpose of Stonehenge and the mystery of the Yeti and much more.....Story driven campaign with side quests and adventure elements.63 unique units .32 unique buildings .84 technologies to research .8 devastating magic spells .	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/12460/header.jpg?t=1447352265	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Ninja Reflex: Steamworks Edition	',
		publisher: 'Nunchuck Games	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Steam Achievements	',
		genres: 'Casual;Indie	',
		game_type: 'Indie;Casual;Ninja	',
		price: 3.99,
		description:
			'Master the Art of Speed and become a Ninja Gamer! Ninja Reflex uses martial arts challenges to test your reflexes sharpen your hand-eye coordination and measure your reaction times to the millisecond. Wield throwing stars katanas nunchucks...even chopsticks! Progress from White Belt all the way to Black Belt 3rd Degree and see if you can complete the 50+ Steam achievements on your journey! classbb_ul300 Ninja challenges to conquer.Go from White Belt to Black Belt 3rd Degree.50+ Steam achievements to complete.Compete in local multiplayer battles with up to 4 players.Receive authentic martial arts wisdom from your Sensei.Create a Ninja Name from over 25000 possibilities.Learn to Meditate to achieve greater mental focus.Find all the Half-Life and Portal Easter Eggs!	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/13000/header.jpg?t=1447351277	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: "Tom Clancy's Ghost ReconÂ® Desert Siegeâ„¢	",
		publisher: 'Ubisoft	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Action	',
		game_type: 'Action;FPS;Tactical	',
		price: 4.29,
		description:
			"East Africa 2009. A 60-year conflict boils over as Ethiopia invades its smaller neighbor Eritrea threatening the world's most vital shipping lanes in the Red Sea. An elite team of U.S. Army Green Berets known as the Ghosts moves in to safeguard the seas and free Eritrea. As the war rages on the Ghosts are drawn from Eritrea's shores to the heart of Ethiopia in their deadliest battles yet...New multiplayer modes - Team-based Siege and Domination modes allow teams to attack or defend territory..Both new modes are fully compatible with your original Ghost Recon game - play for hours on the original maps..8 new single-player missions..4 new dedicated multiplayer spaces..9 new multiplayer weapons including the Bizon submachine gun the M98 sniper rifle and the fearsome M-60 machine gun.	",
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/13620/header.jpg?t=1447351282	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'PetzÂ® HorsezÂ® 2	',
		publisher: 'Ubisoft	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Simulation	',
		game_type: 'Simulation;Horses;Family Friendly	',
		price: 4.29,
		description:
			"Saddle up for fun in a game that combines your passion for horses with thrills and adventure! You'll be rewarded for raising horses training champions and saving the ranch in Petz horsez 2...Raise horses from birth and learn to feed clean and take care of them.Earn money to buy new horses and accessories by entering challenging competitions.Experience life on a horse ranch with different story endings depending on the choices you make	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/15160/header.jpg?t=1447351315	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Cold Fearâ„¢	',
		publisher: 'Ubisoft	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action	',
		game_type: 'Horror;Action;Survival Horror	',
		price: 4.29,
		description:
			"In a ferocious Arctic storm distress signals are sent from a mysterious Russian whaler. As leading Coast Guard veteran Tom Hansen you board to investigate &#151; and discover unthinkable horrors lurking beneath the ship's bloodstained decks...Brave dangerous waters: Rocked by huge breakers you must steady your nerves &#151; and aim &#151; to evade a watery grave..Keep your bearings: Battle against increasingly mutated enemies in treacherous unstable environments..Unleash a torrent of weapons: Create fatal traps and use shotguns flame throwers or any object you can find to survive.	",
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/15270/header.jpg?t=1447351316	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: "Oddworld: Abe's OddyseeÂ®	",
		publisher: 'Oddworld Inhabitants	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Trading Cards	',
		genres: 'Adventure	',
		game_type: 'Adventure;Platformer;Classic	',
		price: 1.99,
		description:
			"Selected by the fickle finger of fate Abeâ„¢ floor-waxer first class for RuptureFarms was catapulted into a life of adventure when he overheard plans by his boss Molluck the Glukkonâ„¢ to turn Abe and his fellow Mudokons into Tasty Treats as part of a last-ditch effort to rescue Molluck's failing meat-packing empire. . During his escape from RuptureFarms Abe received a vision from the mysterious Big Face showing Abe that he must not only rescue his fellow Mudokons but also protect all of Oddworld's creatures from the predatory Magog Cartel. . After completing arduous Temple trials and journeying across a wasteland with his friend Elum Abe was granted the awesome power of the Shrykull. Returning to RuptureFarms Abe destroyed the foul slaughterhouse rescued his buddies and brought down some righteous lightning on top of Molluck's pointy head.	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/15700/header.jpg?t=1548161184	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Planet Busters	',
		publisher: 'Slam	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements;Partial Controller Support	',
		genres: 'Indie;Casual	',
		game_type: 'Indie;Casual	',
		price: 5.99,
		description:
			'Planet Busters is a new single-player game from Slam combining puzzle-solving action with awesome firepower and spectacular explosions..The mysterious Scourge have destroyed Earth. Now itâ€™s payback time. With most of the fleet killed in the attack itâ€™s up to you and your fellow ensigns to eradicate the Scourge and make the galaxy safe for humankind once more..Use the tactical grid to solve puzzles and match rockets by color to trigger attacks on enemy ships moons or planets. Deploy EMP measures; use missiles for extra fire-power; and collect power-ups to assist you in your mission â€“ to defeat the Scourge. At all costs..Planet Busters supports Steam Achievements: show off your progress through your Steam Community profile page...9 Steam Achievements to collect.Supports Xbox controller.Over 50 levels	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/15800/header.jpg?t=1447351377	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: '7 Wonders II	',
		publisher: 'MumboJumbo	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Puzzle;Match 3	',
		price: 6.99,
		description:
			'Journey back in time with the 7 Wonders series to when magnificent structures were being built in far away lands. Enjoy challenging match-3 gameplay in a newly enhanced interactive environment where you not only learn about marvelous new wonders such as Stonehenge and Taj Mahal but also watch them come to life piece by piece before your very eyes. ..Incredibly enhanced animation.New explosive power-ups such as the Single Cell Bomb Chameleon and Timer Freeze.Seven all new locations to explore and Wonders to learn about.Take part in the construction by choosing what section of the Wonders to build first and visually see the progress on the screen and the game board.Strategically match using a limited number to get critical pieces down the board.Utilize a new shuffle option to refresh the board and keep the game moving	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/15900/header.jpg?t=1447351342	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Luxor Amun Rising	',
		publisher: 'MumboJumbo	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual	',
		price: 5.99,
		description:
			'Glory and adventure await as you return to save ancient Egypt from certain doom in Luxor: Amun Rising. The sequel to the runaway hit game you must defeat the rebellious princes of Megiddo before they overthrow the pharaoh and plunge the two lands into chaos! Once again the challenge will not be an easy one as you battle through 88 awesome all-new levels. You must use your mystical winged scarab to destroy the approaching colored spheres. Stop them all before they can reach the pyramids at the ends of the paths&#133; or all of Egypt is doomed!..88 explosive new levels.All new quest map of Egyptian locations.Exciting new Scorpion power-up.3 difficulty levels for players of different skill sets	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/15910/header.jpg?t=1447351187	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Luxor	',
		publisher: 'MumboJumbo	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Match 3	',
		price: 5.99,
		description:
			"Addictive and exciting Luxor is an action-puzzler that takes you on a thrilling adventure across Ancient Egypt. Isis has enlisted you to battle Set and his evil minions. Use your scarab to shoot and destroy the approaching spheres before they reach the pyramids. Use Isis&#146; magic by catching talismans gems and Ankh coins. Featuring a rousing soundtrack and full of exhilarating action the only question is: Can you thwart Set's diabolical plans?..88 Challenging Levels.Innovative Game play.Exciting Power-Ups.Individualized Personal Profiles	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/15970/header.jpg?t=1447351185	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Discovery! A Seek and Find Adventure	',
		publisher: 'MumboJumbo	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Hidden Object	',
		price: 6.99,
		description:
			"Break out your magnifying glass and passport-It's time for Discovery! the seek-and-find game show with your host Jerry Landers and the beautiful Jill Summers. Step up to the wheel and choose today's adventure! Will it be Spain China Australia or one of three other fabulous international hot spots? . Enjoy the sights sounds and hidden-object adventures around the globe and across the U.S. Hunt for the more than 1000 hidden objects and compete against 20 eagle-eyed contestants for a chance at the U.S. Roadtrip Jackpot Round. Play five different game modes and four fun mini-games in this seek-and-find adventure!	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/16000/header.jpg?t=1447351379	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: '7 Wonders: Treasures of Seven	',
		publisher: 'MumboJumbo	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Match 3;Puzzle	',
		price: 6.99,
		description:
			"It's time to build nine of the most intriguing structures throughout history! Match runes to break blocks and uncover the lock and keystone for each round. Rotate the cube face to move your keystone along the pathways you've created to reach each level's lock and conquer all six sides! .Once you've mastered the faces of the outer cube move to the inner cube where you'll attain pieces to build your compass. Build all nine amazing wonders and you'll uncover the hidden city with the help of your map and compass. Don't miss this incredible and innovative chapter in 7 Wonders! . .Ground-breaking rotatable game board! .Cool pathway puzzles to solve on each level .Revolving board enhances power-up strength .Nine all-new Wonders to build	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/16030/header.jpg?t=1447351553	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Virtual Villagers: A New Home	',
		publisher: 'Last Day of Work	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual;Simulation	',
		game_type: 'Casual;Simulation	',
		price: 5.99,
		description:
			"Care for and nurture a tribe of little people by teaching them the basics of survival. They need to become farmers builders scientists parents and make decisions about unpredictable 'island events'! Guide their day-to-day lives and help them explore and restore their new home. As your village grows and prospers your villagers become curious about their mysterious new island home and the secrets it holds. HOW WILL YOU LEAD YOUR TRIBE?..Real-Time: new surprises every time you turn the game on.Hundreds of unique villagers.Unique and unpredictable Island Events to keep you on your toes.Breed your villagers and raise your own tribe	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/16100/header.jpg?t=1447351300	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Fish Tycoon	',
		publisher: 'Last Day of Work	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual;Simulation	',
		game_type: 'Casual;Simulation;Management	',
		price: 5.99,
		description:
			'Fish Tycoon is a virtual fish breeding game. The object is to breed and cross breed fish until you find the 7 Magic Fish and solve the genetic puzzle. You will have to buy supplies like meds eggs and special plants and then sell some of your fish in your virtual pet store. If you have enough money you can buy new supplies and customize your virtual aquarium. ..Real-Time gameplay: new surprises every time you turn the game on..Over 400 different species of fish to discover. .Genetic Puzzle: discover which breeding combinations will create the 7 Magic Fish. .Virtual Pet: care for your fish breed them and make baby fish. .Simulation Game: virtual fish in a persistent world. .Screensaver Mode: breed and choose your own fish for your built-in screensaver. .Customizable Tanks: place your ornaments where you like most!	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/16130/header.jpg?t=1447351298	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Virtual Families	',
		publisher: 'Last Day of Work	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual;Simulation	',
		game_type: 'Simulation;Casual	',
		price: 7.49,
		description:
			"From the developer of the smash-hit Virtual Villagers series comes the new casual game that captures the drama of life&#151;Virtual Families! Virtual Families is a casual family sim that runs in true-real time. Adopt and nurture a needy person in the computer. Help them meet a mate and start a family. Pass on the house to the next generations.. . Unique and fascinating adoptees from 1000's of combinations. Fully trainable people: shapeadapt their personalities through praising and scolding!. Dynamic illness system. Play doctor!. Over 100 trophies. Hidden puzzles around the house. Weather daynight cycles (synchronized to the player's system clock so it is nighttime in the game when it is nighttime where you are. Uses the technology behind Virtual Villagers for an accessible and stable player experience.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/16200/header.jpg?t=1447351831	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Chaos Theory	',
		publisher: 'blurredVision	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements	',
		genres: 'Casual;Indie	',
		game_type: 'Indie;Casual;Puzzle	',
		price: 1.99,
		description:
			'Meet Chaos Theory! A balanced mix of arcade gameplay and challenging physics-based puzzle solving.The main objective in Chaos Theory is to fill &quot;Collectors&quot; with magnetically charged particles. Those particles move freely in the environment and are influenced by other objects and their magnetic forces. Attract free particles bind them to objects and shoot them onto the Collectors to finish a level. classbb_ulPhysics-based puzzlerMore than 50 LevelsIncludes Steam AchievementsLevel editor: Build your own levels and share them with your friendsTutorials that introduce every new game element	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/16500/header.jpg?t=1447351330	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Trials 2: Second Edition	',
		publisher: 'RedLynx Ltd.	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Steam Achievements	',
		genres: 'Indie;Racing;Sports	',
		game_type: 'Racing;Indie;Sports	',
		price: 5.99,
		description:
			'RedLynx Trials 2 Second Edition is a spectacular motorcycle game featuring stunning graphics and addictive gameplay!..4 game types (race flip wheelie dynamic)Race: Race against other players to compete levels as fast as possibleFlip: Try to make as many backflips or frontflips with your bikeWheelie: Drive on your backwheel for longest distance possibleDynamic: Navigate through tracks with various dynamic obstacles and puzzles.Over 51 tracks to play.Global highscores.Ghost challenge. Play against the ghost of any other player in high score list.Online player profiles with team country and player statistics.25 achievements to unlock	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/16600/header.jpg?t=1447351307	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Monster Trucks Nitro	',
		publisher: 'Miniclip.com	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Indie;Racing;Sports	',
		game_type: 'Racing;Indie;Sports	',
		price: 16.99,
		description:
			'Race jump and nitroboost your way pass thrilling dynamic levels with your monster trucks. Earn medals and unlock new levels and vehicles. . .Lots of brilliant tracks .Be fast but use also your wits to pass the tracks .Improve your times and earn medals .Collect the Nitro tanks to unleash special powers! .Unlock extra trucks! .In-game leaderboards .Rock solid playability .Real Monster Truck physics	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/16620/header.jpg?t=1447351670	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'SPOREâ„¢ Creepy & Cute Parts Pack	',
		publisher: 'Electronic Arts	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Simulation	',
		game_type: 'Simulation;Adventure;Open World	',
		price: 9.99,
		description:
			'Add horror and humor to your universe. Make grotesque beasts or cuddly critters then watch them do the robot zombie walk break dance and more! Includes over 100 new items...60 New parts.48 New paint options.24 New animations	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/17440/header.jpg?t=1447351596	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Dead Space	',
		publisher: 'Electronic Arts	',
		platforms: 'PC	',
		categories: 'Single-player;Full controller support	',
		genres: 'Action	',
		game_type: 'Horror;Action;Sci-fi	',
		price: 14.99,
		description:
			"srchttps:steamcdn-a.akamaihd.netsteamapps17470extrasDEDSPlogoPRIMARYcmykLYRD.png?t1511287106 Only the Dead Survive. A massive deep-space mining ship goes dark after unearthing a strange artifact on a distant planet. Engineer Isaac Clarke embarks on the repair mission only to uncover a nightmarish blood bath Â— the ship's crew horribly slaughtered and infected by alien scourge. Now Isaac is cut off trapped and engaged in a desperate fight for survival. classbb_ulStrategically dismember the Necromorph enemies limb by bloody limb. Zero gravity combat means terror can strike from anywhere. Uncover the horrific truth of this shocking thriller.	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/17470/header.jpg?t=1511287106	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Spectraball	',
		publisher: 'Shorebound Studios	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Steam Trading Cards;Partial Controller Support	',
		genres: 'Casual;Indie	',
		game_type: 'Casual;Indie;Puzzle	',
		price: 3.99,
		description:
			'Spectraball combines elements of platforming puzzle solving addictive gameplay and stunning visuals to deliver an experience that sets a new standard for the genre. In addition Spectraball utilizes Steamworks offering full support for achievements and stat tracking. classbb_ul Roll jump and launch your way through several diverse and detailed environments Addictive fast-paced gameplay Online leaderboards (see how you rank against players around the world!) Achievement system Unlock new abilities maps mini-games and skins Enjoy free content updates that include new maps abilities mini-games zones and achievements Engage in some quick fun with a variety of mini-games Xbox 360 and standard controller support Included Map Editor with online sharing (make your own maps and share them with friends!)	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/18300/header.jpg?t=1447351501	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Crazy Machines	',
		publisher: 'Viva Media	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual;Strategy	',
		game_type: 'Casual;Strategy;Puzzle	',
		price: 6.99,
		description:
			'Turn the crank rotate the gears push the levers Use the catapult explode it or fly it...From grilling sausages with a pulley gears rubberbands and a candle to firing a cannon with a basketball these wacky brain-teasers will light up your imagination with creative and addictive fun. <h2 classbb_tagKey Features:<h2 classbb_ul70+ Elements Addictive Fun! 200+ Challenges Design your own Puzzles with the Building Editor Multiple Solutions! 3D Graphics &amp; Real Time Shadows 	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/18420/header.jpg?t=1447351615	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Mata Hari	',
		publisher: 'Viva Media	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click;Female Protagonist	',
		price: 3.99,
		description:
			"TRUST NO ONE BUT YOURSELF as you adventure into the dark world of espionage amidst the volatile atmosphere of impending war. As a double agent you must find clever ways to pit enemy factions against each other while eluding pursuers in each of your increasingly dangerous missions. As a femme fatale your notorious charm can entice any man. Yet will the one man who holds the key to your heart ever be yours?<h2 classbb_tagFeatures<h2 classbb_ulBased on the true events leading to World War IBreak code tap phones use your ingenuity and the era's latest gadgets!Risk it all as you take on dangerous missions8 challenging mini-games in 4 thrilling chaptersA variety of endings based on the choices you make in the game	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/18480/header.jpg?t=1447352353	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Zero Gear	',
		publisher: 'Brian Cronin	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Steam Achievements;Steam Trading Cards;Partial Controller Support;Steam Cloud;Stats	',
		genres: 'Action;Indie;Racing;Sports	',
		game_type: 'Racing;Indie;Action	',
		price: 3.99,
		description:
			'Zero Gear is physically-fueled online multiplayer kart combat madness.Deck out your kart and character before jumping into one of many different game modes. Outrageous kinematic gameplay and weapons make every round a blast. The potential for tiny vehicular mayhem has never been so humongous! Boost flip spin and slide your way to victory! classbb_ulUp to 8 players. Customizable karts and characters. Multiple game modes to compete in including Race Tag Goal and Target modes. Over 15 maps to compete in. Non-stop physics driven action. Ridiculous weapons and power-ups including tornadoes repulsor shields and love-seeking L.U.V. bots. 	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/18820/header.jpg?t=1447352797	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: "Eternity's Child	",
		publisher: 'Silver Sphere Studios	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Partial Controller Support;Includes level editor	',
		genres: 'Adventure;Indie	',
		game_type: 'Indie;Adventure;Platformer	',
		price: 2.99,
		description:
			"Eternity's Child a quirky hand drawn next generation 2D platformer is based on a fairy tale by Luc Bernard. It arrives on Steam with exclusive Steam Only levels and HD Resolution. .Features: . .Beautiful 2D graphics with one of the most unique art direction done in a videogame .Orchestral Soundtrack .Game to be updated with new levels and chapters for free .Exclusive levels and HD resolution for the Steam version .Exclusive BETA level editor for the Steam version .Exclusive Steam Achievements	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/19500/header.jpg?t=1447351403	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Shatter	',
		publisher: 'PikPok	',
		platforms: 'PC	',
		categories:
			'Single-player;SharedSplit Screen;Steam Achievements;Partial Controller Support;Steam Cloud;Steam Leaderboards	',
		genres: 'Action;Indie	',
		game_type: 'Great Soundtrack;Indie;Arcade	',
		price: 6.99,
		description:
			'Shatter is a retro-inspired brick-breaking game that merges familiar action with unique twists and a modern crafted production approach. classbb_ulInnovative controls physics effects power-ups special attacks and boss battles which combine to provide an experience that is always interactive.Includes Story Endless Boss Rush Time Attack Endless Co-op multiplayer and Time Attack Co-op multiplayer modes with leaderboards and achievements.A Vibrant 3D Style presented across 10 distinct worlds in up to Full HD.A fully scored soundtrack featuring over 90 minutes of award winning original music.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/20820/header.jpg?t=1526952956	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'LEGOÂ® Batmanâ„¢: The Videogame	',
		publisher: 'Warner Bros. Interactive Entertainment	',
		platforms: 'PC	',
		categories: 'Single-player;SharedSplit Screen;Full controller support	',
		genres: 'Action;Adventure	',
		game_type: 'LEGO;Action;Adventure	',
		price: 14.99,
		description:
			'When all the villains in Arkham Asylum team up and break loose only the dynamic duo is bold enough to take them on to save Gotham City. The fun of LEGO the drama of Batman and the uniqueness of the combination makes for a comical and exciting adventure in LEGO Batman: The Videogame. Play as Batman and his sidekick Robin as you build drive swing and fight your way through Gotham City capturing escaped villains including The Joker Penguin Scarecrow and more. Then jump into the story from the other side and play as Batmans foes! Enjoy the power you wield and battle Batman while spreading chaos throughout the city. There is no rest for the good (or evil!).	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/21000/header.jpg?t=1552479011	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'LEGOÂ® Harry Potter: Years 1-4	',
		publisher: 'Warner Bros. Interactive Entertainment	',
		platforms: 'PC	',
		categories: 'Single-player;SharedSplit Screen;Full controller support	',
		genres: 'Action;Adventure	',
		game_type: 'LEGO;Adventure;Action	',
		price: 9.99,
		description:
			'Build the adventure from Privet Drive to the Triwizard Tournament and experience the magic of the first four Harry Potter stories â€“ LEGO style! Explore Hogwartsâ„¢ School of Witchcraft and Wizardry learn spells brew potions and relive the adventures like never before with tongue-in-cheek humor and creative customization that is unique to LEGO videogames!Key Features: classbb_ulThe Magic is Building!Connect the bricks from the Privet Drive to the Triwizard Tournament and experience the magic of the Harry Potterâ„¢ adventures â€“ LEGO style.Play as Harry Ron and Hermione as well as other favorite characters.Explore Hogwartsâ„¢ castle Diagon Alleyâ„¢ the forbidden Forest the village of Hogsmeadeâ„¢ and more.Cast a spell with a friend and play through the first four stories as a team with Co-op play.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/21130/header.jpg?t=1552479923	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Gravitron 2	',
		publisher: 'Dark Castle Software	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements	',
		genres: 'Indie;Casual	',
		game_type: 'Arcade	',
		price: 2.99,
		description:
			'Gravitron 2 is a retro styled arcade gravity shooter in which you must pilot your way through some of the most devious terrains ever devised. .Key Features: . .40+ stages packed full of enemies and traps .3D sound in a 2D enviroment .Online highscores .Configurable controls .Stylized neon vector graphics .Bucket load full of particle effects .Dramatic musical scores .10 Achievement awards (Steam version exclusive)	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/21300/header.jpg?t=1447351483	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Mount & Blade	',
		publisher: 'TaleWorlds Entertainment	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Trading Cards;Includes level editor	',
		genres: 'Indie;RPG	',
		game_type: 'RPG;Medieval;Open World	',
		price: 7.99,
		description:
			'Calradia is a land at war offering great riches and even greater dangers to adventurers and mercenaries that flock to shed their blood on its soil. With courage and a strong sword an unknown stranger can make a name as a warrior.classbb_ulFree-form sand-box gameplay. You are free to go anywhere in a world with more than a hundred unique locations including villages castles and towns. Groundbreaking horseback combat. Highly advanced and intuitive sword-fighting systems. Fight on horseback and foot using a vast variety of medieval weapons each with unique characteristics. You can be anything from a lonesome adventurer to a commander of armies or an owner of villages castles or towns. Sophisticated AI will challenge you in combat and in your strategic plans. Freedom to interact with hundreds of characters.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/22100/header.jpg?t=1511533242	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Fluttabyes	',
		publisher: 'Red Chain Games Ltd.	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements	',
		genres: 'Casual;Indie	',
		game_type: 'Indie;Casual	',
		price: 1.59,
		description:
			'Fluttabyes is a bright cheerful and fun take on a &quot;Match 3&quot; game. Easy to pick up and play and thoroughly addictive! Your aim is to help the butterflies fly away by matching 4 or more of the same colour. Earn score multipliers by creating matches very quickly. If you match more than 6 butterflies you will earn a ladybird. If you match more than 9 butterflies you will earn the magical rainbow butterfly! . .There are different modes of play: . .SURVIVAL - Race against the dandelion clock and earn more time by freeing butterflies. .ENDLESS - There is no time limit so you can perfect your match-making skills. . .There are online leaderboards for each mode so you can compete with other &quot;Fluttabytes&quot; around the world! Can you beat the number 1?	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/23150/header.jpg?t=1501811524	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Puzzle Quest: Galactrix	',
		publisher: 'D3Publisher of America Inc.	',
		platforms: 'PC	',
		categories: 'Multi-player;Steam Cloud	',
		genres: 'Casual;RPG	',
		game_type: 'RPG;Casual;Match 3	',
		price: 6.99,
		description:
			'The puzzle game of the future has arrived! The original best-selling new Puzzle franchise is back in an all new dimension with its signature Match-3 turn based battles in an insanely addictive and masterful hybrid of RPG and Puzzle genres. Take on the role of a rogue pilot scouring the galaxy to uncover clues in an intergalactic mystery that affects the fate of the entire universe. Build up a fleet of ships discover hundreds of different weapons and master the new puzzle board! Key features:classbb_ulOver 30 hours of gameplay! All new redesigned Puzzle board Over 150 different weapons to use to control the board Customize and build a fleet of ships to master the galaxy Hundreds of missions within single player game	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/23500/header.jpg?t=1478043305	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Puzzle Kingdoms	',
		publisher: 'Strategy First	',
		platforms: 'PC	',
		categories: 'Multi-player;Steam Cloud	',
		genres: 'Casual	',
		game_type: 'Casual;Puzzle;Match 3	',
		price: 10.99,
		description:
			'Puzzle Kingdoms challenges players to plan out strategic attacks in order to defeat their opponents. Order troops across the map conquering cities through innovative puzzle gameplay. Players build and manage armies led by heroic commanders to save the world of Etheria from the brink of destruction. By matching corresponding gems on the game board players will both inflict damage on enemy forces while building mana that can be used to perform devastating attacks that will cripple their opponents.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/23700/header.jpg?t=1447351782	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'PAYDAYâ„¢ The Heist	',
		publisher: 'Daybreak Game Company	',
		platforms: 'PC	',
		categories:
			'Single-player;Co-op;Steam Achievements;Steam Trading Cards;Steam Cloud;Stats	',
		genres: 'Action	',
		game_type: 'FPS;Action;Co-op	',
		price: 10.99,
		description:
			'PAYDAYâ„¢ The Heist is an action filled first person shooter that lets players take on the role of a hardened career criminal executing intense dynamic heists in constant pursuit of the next â€œbig scoreâ€. Load out with an array of weaponry and equipment. Navigate six high-stake heists with three other live or A.I. Co-Op partners in crime.Time for a PAYDAYâ„¢ - Cash in Before you Cash Out!<h2 classbb_tagKey Features<h2 classbb_ulSix High-Intensity HeistsInteractive 4-Player Co-Op playEndless ReplayabilityMassive Character Progression TreeBuild Your Skills to Fit Your Preferred Form of ViolenceHostage TradingMore DLC: Additional heists weapons and equipment means PAYDAYâ„¢â€”a digitally distributed AAA quality title for less than half the price of a retail gameâ€”is total OVERKILL	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/24240/header.jpg?t=1516099628	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Aquaria	',
		publisher: 'Bit Blot LLC	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements;Partial Controller Support	',
		genres: 'Indie	',
		game_type: 'Metroidvania;Indie;Female Protagonist	',
		price: 6.99,
		description:
			"Aquaria is an award-winning action-adventure game set in a massive underwater world teeming with life and filled with ancient secrets. Join Naija a lone underwater adventurer as she travels from hidden caves shrouded in darkness to beautiful sunlit oases in search of her past. She'll uncover hidden treasures explore uncharted waters and do battle with massive underwater beasts to learn the truth about her family and reveal the secret of Aquaria.classbb_ulMassive beautiful world to explore Compelling story woven through beautiful visuals music and voice-overs Innovative mouse-based control scheme and magic-based combat 175 unique creatures to discover interact and do battle with Dozens of treasures to attain Cooking system for creation of powerful items Unlock all the Steam Achievements	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/24420/header.jpg?t=1447351632	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'SPOREâ„¢ Galactic Adventures	',
		publisher: 'Electronic Arts	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action;Simulation	',
		game_type: 'Simulation;Action;Space	',
		price: 9.99,
		description:
			'Take Your Creature From Zero To Galactic HeroGet out of your starship and turn your Spore creatures into legendary Space Captains. For the first time beam down with your allies to take on action-packed planetside adventures. Complete quests collect rewards and even create and share your own missions classbb_ulPLAY a variety of Maxis-created missions as you explore planets all over the galaxy!LEVEL UP your Space Captain and earn more than 30 powerful new accessories!CREATE your own missions with the all-new Adventure Creator then share them online!	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/24720/header.jpg?t=1473276099	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Medal of Honor: Airborne	',
		publisher: 'Electronic Arts	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Action	',
		game_type: 'Action;World War II;FPS	',
		price: 9.99,
		description:
			'.Step into the boots of Boyd Travers Private First Class of the â€œAll-Americanâ€ 82nd Airborne Division and revolutionize the way the war is fought. From a rocky beginning in Sicily to war winning triumphs in the heart of Germany fight the epic WWII battles that turned Americaâ€™s first paratroopers into combat legends. Begin each mission from the air and behind enemy lines then jump immediately into the action. On the ground tackle objectives in any order across an expansive free-roaming environment using a wide variety of upgradeable weapons to your strategic advantage...Open battlefields.Vertical combat.Affordance AI.Upgradeable weapons..**For instructions on how to switch language in-game after initial launch see the README file available in game Support file.**.	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/24840/header.jpg?t=1447352551	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Eschalon: Book II	',
		publisher: 'Basilisk Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Indie;RPG	',
		game_type: 'RPG;Indie;Isometric	',
		price: 4.79,
		description:
			"Return to the world of Eschalon in the sequel to 2007's award-winning RPG. The blight of war now threatens all of Eschalon and the only hope for peace lies in the secret of your past. Don't miss this second chapter in the epic Eschalon trilogy given &quot;5 Stars&quot; by RPGWatch and called &quot;immensely appealing&quot; by The Huffington Post. classbb_ul<h2 classbb_tagKey Features:<h2 classbb_ulA huge world to explore; you are free to go anywhere and do anything.Thousands of items monsters puzzles and traps await your discovery.Turn-based action happens at your pace- play it fast and furious or slow and tactical.No experience with Eschalon: Book I is needed to enjoy Book II.	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/25620/header.jpg?t=1447353212	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Elven Legacy	',
		publisher: '1C Entertainment	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Steam Cloud;Includes level editor	',
		genres: 'RPG;Strategy	',
		game_type: 'Strategy;RPG;Turn-Based Strategy	',
		price: 3.99,
		description:
			'The shadows of destruction begin to loom on the horizon once a human mage uncovers a dark and powerful secret dating back to the remote past of the Elven race.However the Elves cannot allow this forbidden knowledge to fall into the hands of others and thus imperil the world. For the first time in countless years this ancient race must venture forth and interfere with events transpiring in the lands of man. With the renegade mage in their sights the sorceress Gilwen and ranger-lord Seagate set off together unaware that beliefs and friendships alike will soon be tested... classbb_ulClassic turn-based strategy gameplay Multiplayer combat in 16 different scenarios Multiple endings which depend on your choices Powerful built-in game editor	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/25850/header.jpg?t=1553188605	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Majesty Gold HD	',
		publisher: 'Paradox Interactive	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Strategy;Simulation	',
		game_type: 'Strategy;Simulation;Fantasy	',
		price: 7.99,
		description:
			'The High Definition edition of Majesty Gold contains main game the Northern Expansion Pack as well as 2 new quests and several other graphics and gameplay updates..Majesty is a Real-time strategy game with indirect control â€“ your heroes have a will of their own! Your rule is not absolute as you face subjects that are independent stubborn - and greedy. They will need a great deal of persuasion (ok gold) before they carry out your wishes....<h2Key features:<h2..Two additional quests The Wrath of Krolm and The Balance of Twilight.The game can now be set to run at all common resolutions.Compatible with Windows 7 Vista and XP operating systems.Many other gameplay bug fixes improvements and refinements .	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/25990/header.jpg?t=1447352469	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Drug Wars	',
		publisher: 'Paleo Entertainment	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Action;Indie	',
		game_type: 'Action;Indie	',
		price: 3.99,
		description:
			'Drug Wars is a gritty gory romp through a futuristic New York City circa 3100 where severe global warming conditions have resulted in a harsh divide between upper-class Brooklyn gang bosses and a booming population of engineered Neanderthal bottom-dwellers.. Using the powerful Crytek 2 Engine Paleo Entertainment offers players of Drug Wars a collection of varied maps rife for fast-paced multiplayer chaos featuring a deadly variety of weapons including everything from a biomechanical arm to environmental objects - including the severed limbs of your foes - to gain control of the coveted drug trade. Add in several brand-new vehicles to both traverse across the detailed landscapes and mow down your opponents and Drug Wars offers up a slew of game options to keep players addicted to the bloody fun.	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/26300/header.jpg?t=1447351710	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Crayon Physics Deluxe	',
		publisher: 'Kloonigames	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual;Indie	',
		game_type: 'Indie;Casual;Puzzle	',
		price: 15.99,
		description:
			'Crayon Physics Deluxe is a 2D physics puzzle sandbox game in which you get to experience what it would be like if your drawings would be magically transformed into real physical objects. Solve puzzles with your artistic vision and creative use of physics. Key features:classbb_ulAwesome physics Over 70 levels Easy to use level editor Rockets ropes and hinges	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/26900/header.jpg?t=1528554532	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'The Graveyard	',
		publisher: 'Tale of Tales	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Indie;Simulation	',
		game_type: 'Walking Simulator;Indie;Short	',
		price: 3.99,
		description:
			"The Graveyard is a very short computer game. You play an old lady who visits a graveyard. You walk around sit on a bench and listen to a song. It's more like an explorable painting than an actual game. An experiment with poetry and storytelling but without words. . .Buying the full version of The Graveyard adds only one feature the possibility of death. The full version of the game is exactly the same as the trial except every time you play she may die.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/27020/header.jpg?t=1447351711	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Space Giraffe	',
		publisher: 'Llamasoft LTD	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Indie	',
		game_type: 'Indie;Psychedelic;Arcade	',
		price: 6.99,
		description:
			"Space Giraffe is an abstract action arcade style game that takes place in a succession of beautiful environments generated by an advanced graphics synthesizer. It presents itself as a shooter but the more you play the more you discover the hidden depths and strategies that make the gameplay satisfyingly rich and rewarding. This is the boldest evolution of the trance-shooter created by the company that helped to define the genre with the groundbreaking &#147;Tempest 2000&#148;. . .200 levels of trancetastic action. .Beautiful abstract graphics that respond to audio input. .Deep gameplay that rewards strategic and thoughtful play. .Accessible enough to entertain a novice player but deep enough to satisfy the arcade expert. .Intense satisfying synaesthesiac shooting action that you'll return to again and again in search of ever higher scores.	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/27800/header.jpg?t=1447351752	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Yumsters 2: Around the World	',
		publisher: 'KranX Productions	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Indie;Casual	',
		game_type: 'Casual;Indie	',
		price: 3.99,
		description:
			'.Not only are these Yumsters crazy for strawberries they can rock the bongos. For the love of fruity music help them earn money by cleaning gardens to promote their band. To really skyrocket Yumsters need the best equipment to win the ultimate grand prize at the fairy town music showdown. Get fruitilicious in five vibrant locations of Yumsters 2 a sweet Match 3 puzzler. .Key Features: . .Match 3 drag-n-drop .Rhythm-based gameplay .Adorable characters .Win the grand prize!	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/29120/header.jpg?t=1447351724	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Musaic Box	',
		publisher: 'KranX Productions	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Indie;Casual	',
		game_type: 'Indie;Casual;Puzzle	',
		price: 3.99,
		description:
			".Uncover all of your grandfather's sheet music hidden in his home amongst a treasure trove of gorgeous antiques and musical relics. Melodious music box games will let you piece these special compositions together and unleash their symphonious secrets. Unlock Creative Mode and write your own outstanding arrangements. With a house full of secrets and a box full of music the aural excitement never ends. . .Beautifully rendered graphics .Entrancing musical score .Unlock musical mysteries!	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/29130/header.jpg?t=1447351749	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Caster	',
		publisher: 'Elecorn	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Trading Cards;Partial Controller Support	',
		genres: 'Action;Adventure;Casual;Indie;RPG;Strategy	',
		game_type: 'Action;Indie;Adventure	',
		price: 0.99,
		description:
			'Dash across Scenic Locations destroying bug like creatures called the Flanx using 6 Unique Attacks that include Massive Terrain Deformation and High Speed Barrages of Energy Blasts! Caster is an intense 3rd person action shooter experience with pulse pounding music that will keep you wanting more!classbb_ulMassive terrain deformation! Use strategy to destroy hordes of bugs with a variety of unique behaviors and attacks Bring trees back to life and collect energy to purchase upgrades Upgrade your skills to run on water and jump hundreds of feet into the air Pulse pounding music by Trance Emerson 3 levels of play (Casual Normal and Extreme) 2 playable characters 6 unique attacks	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/29800/header.jpg?t=1462569292	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'LUXOR: Mah Jong	',
		publisher: 'MumboJumbo	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Puzzle;Singleplayer	',
		price: 5.99,
		description:
			'Embark on an epic quest to recover the stolen treasures of Ancient Egypt in LUXOR: Mah Jong. The fun and challenge is unending with 200 unique layouts available in 3 awesome play modes; Adventure Single and Traditional. Three difficulty settings ensure that any player will find a challenge and 3 exotic tile sets make LUXOR: Mah Jong a truly custom experience. Can you work your way up from a lowly farm hand to become the Pharaoh of all Egypt?..200 Unique Mah Jong Layouts.3 Exotic Tile Sets.5 Magical Power-Ups.3 Difficulty Settings.3 Modes of Play - Adventure Single Traditional.Unique Player Ranking system.All New Adventures in the Land of Egypt.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/32110/header.jpg?t=1447352269	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Chainz 2: Relinked	',
		publisher: 'MumboJumbo	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Puzzle;Match 3	',
		price: 6.99,
		description:
			'Itâ€™s link-matching madness with Chainz 2: Relinked. Rotate the colored links to make matches of three or more in Classic Mode. Pit your link-matching skills against the clock in Arcade Mode. Ponder every precious move in Strategy Mode. Twist your brain and clear all the links in Puzzle Mode. Add in awesome sound effects a zippy new music score and sensationally updated visuals and Chainz 2: Relinked is sure to keep you chained to your seat!..4 Awesome Gameplay Modes .200 Challenging Levels .Exciting New Power-Ups .Individualized Personal Profiles.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/32120/header.jpg?t=1447352269	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Indiana JonesÂ® and the Last Crusadeâ„¢	',
		publisher: 'LucasArts;Lucasfilm;Disney Interactive	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click;Classic	',
		price: 4.79,
		description:
			"Europe 1938: The lost Ark was just a warm-up! Now Adolf Hitler is after the most powerful talisman of all - the Holy Grail. A few brave men stand in his way. Fortunately one of them is Indiana Jones and this time he has his dad with him.The bad guys are in your face all the way â€“ mercenaries traitors and spies. Not to mention everything the Luftwaffe can throw at you.... Can you handle the heat?If you can you just might earn a higher I.Q. (Indy Quotient) than the man with the whip and the hat. classbb_ulVisit dozens of locations you never saw in the movie!No typing to slow you downâ€¦. Just point 'n'click!Outstanding high resolution 3d graphics.Over 100 sound effectsâ€¦. Plus movie theme music.	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/32310/header.jpg?t=1550616723	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'LEGOÂ® Indiana Jonesâ„¢: The Original Adventures	',
		publisher: 'LucasArts;Lucasfilm;Disney Interactive	',
		platforms: 'PC	',
		categories:
			'Single-player;Local Co-op;SharedSplit Screen;Partial Controller Support;Steam Cloud	',
		genres: 'Action;Adventure	',
		game_type: 'Adventure;Action;LEGO	',
		price: 15.49,
		description:
			"Build Battle and Brawl your way out of trouble!Play through all three classic Indiana Jonesâ„¢ movies and relive your favorite Indy adventures in the tongue-in-cheek worlds of LEGOÂ®. classbb_ulExplore and Discover - Battle enemies solve puzzles and seek out the world's greatest treasures.More Than 60 Playable Characters - Take control of Indy his friends and even his enemies. Team up with a friend and together search for fortune and glory.Whip Into Action! - Attack and disarm enemies swing over perilous pits and interact with LEGOÂ® objects and puzzles!	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/32330/header.jpg?t=1542757188	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'STAR WARSâ„¢ Starfighterâ„¢	',
		publisher: 'LucasArts;Lucasfilm;Disney Interactive	',
		platforms: 'PC	',
		categories: 'Single-player;Partial Controller Support;Steam Cloud	',
		genres: 'Action;Simulation	',
		game_type: 'Action;Simulation;Star Wars	',
		price: 4.79,
		description:
			'Join three heroic starfighter pilots in harrowing deep space and planetary missions to save the planet of Naboo. Rookie Naboo pilot Rhys Dallows mercenary Vana Sage and alien pirate Nym form an unlikely alliance as they join together against an unexpected assault on the peaceful planet. classbb_ulPilot three unique starfighters: the sleek Naboo starfighter nimble Guardian Mantis and lethal Havoc.Engage in over 14 challenging missions to save Naboo: deep space dogfights attack runs escort missions and more.Vast environments take you deep into Star Wars worlds: from enormous open plains of Naboo to the furthest reaches of space to the interior corridors of the Droid Control Ship.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/32350/header.jpg?t=1542757300	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'STAR WARSâ„¢ - Dark Forces	',
		publisher: 'LucasArts;Lucasfilm;Disney Interactive	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Cloud	',
		genres: 'Action	',
		game_type: 'FPS;Star Wars;Action	',
		price: 4.79,
		description:
			"Behind a veil of secrecy the evil Empire is creating a doomsday army - one that if finished will become the final cog in the Empire's arsenal of terror and domination.Your Mission? Join the Rebel Alliance's covert operations division infiltrate the Empire then battle every man and machine the Imperial Forces can muster. Search a vast galaxy for clues attack enemy bases-all in a desperate attempt to stop the activation of this fearsome new weapon. classbb_ulFully interactive environments - morphing walls and floors moving platforms and conveyors realistic lighting and atmospheric effects.First-person ground combat. Call on 10 weapons to fight twenty types of enemies.Explore the virtual Star Wars universe up close and personal.Climb catwalks look and shoot up and down jump off ledges wade through garbage.	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/32400/header.jpg?t=1542757668	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Delta Force 2	',
		publisher: 'NovaLogic;THQ Nordic	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Action	',
		game_type: 'Action;FPS;Classic	',
		price: 3.99,
		description:
			"You're a member of the U.S. Army's best kept secret: the elite SPECIAL OPERATIONS unit known as Delta Force formed to BATTLE TERRORISM throughout the world. When the best of the rest can't handle the op YOU are called into action. Can you handle THE JOB?<h2 classbb_tagFeatures<h2classbb_ulFREE NovaWorldâ„¢: online gaming supporting up to 50 players. APPROACH THE OBJECTIVE via parachute and use tall grass water and rolling terrain to move undetected. TAKE CHARGE with the new Commander's Screen directing your teammates in single and multiplayer action. CREATE YOUR OWN single or multiplayer battles with the Mission Editor PLUS Over 40 new missions. TERRORIZE THE TERRORISTS with new weapons new equipment and fixed machine gun and grenade-launcher emplacements. 	",
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/32630/header.jpg?t=1531308074	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Delta Force Land Warrior	',
		publisher: 'NovaLogic;THQ Nordic	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Action	',
		game_type: 'Action;FPS;Tactical	',
		price: 6.99,
		description:
			"Engage the enemy across vast outdoor environments and expansive indoor environments as you take control of the US Army's elite anti-terrorist unit. Delta Force Land Warriorâ„¢ introduces new weapons and characters for both single player and intense online multiplayer via NovaWorld. classbb_ulSelect from a team of diverse characters each with their own special abilities. (Sniper Demolitions Close Quarters Battle Aquatics and Heavey Gunner)Advanced new rifles systems machine guns and grenade launcher Developed from the same engine used to train the US ARMY elite Land Warrior Soldiers Wage war on the massive battlefields of NovaWorld with up to 50 players simultaneouslyRank Yourself against your enemies and allies on NovaWorld	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/32640/header.jpg?t=1531308432	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'F-22 Lightning 3	',
		publisher: 'NovaLogic;THQ Nordic	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player	',
		genres: 'Simulation	',
		game_type: 'Simulation;Flight	',
		price: 6.99,
		description:
			"Mass Destruction! Use tactical nuclear weapons to level entire city regions. The most realistic weather environments ever created. Changing weather effects including: rain snow hail and wind. Extreme temperatures affect flight performance. Fly it yourself or let the world's most advanced fighter do it for you!Featuresclassbb_ulExtreme temperatures affect flight performance. Changing weather effects including: rain snow hail and wind. Fly it yourself or use the Auto-Options: Auto-landings Auto-taxi Auto-takeoff Auto-shoot list Auto-formation Auto-in-flight refueling. The most realistic weather environments ever created. Mass Destruction! Use tactical nuclear weapons to level entire city regions. Voice-Over-Net technology allows players to talk to each other during Novaworld multiplayer combat. 	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/32730/header.jpg?t=1477991999	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Broken Sword 3 - the Sleeping Dragon	',
		publisher: 'Revolution Software Ltd	',
		platforms: 'PC	',
		categories: 'Single-player;Partial Controller Support	',
		genres: 'Adventure	',
		game_type: 'Adventure;Mystery;Point & Click	',
		price: 4.99,
		description:
			'An ancient conspiracy. A broken code. An unsolved murder. Welcome to Broken Sword â€“ The Sleeping Dragon the multi BAFTA-nominated adventure. Once more George and Nico must travel the world wrestling danger and piecing together the clues that will unravel the secrets of the Sleeping Dragon.Powerful seismic events are shaking the world. Something sinister is emerging. An Ancient Conspiracy the Secret of the Templars and a fiendish source of pure Evil are responsible. The death of a back bedroom computer hacker in Paris is just the beginning of another extraordinary adventure for George Stobbart and Nico Collard. Welcome to the world of Broken Sword.Key Features: classbb_ulIncludes breathtaking 3D graphicsA powerful and unique interfaceSubmerge yourself into Broken Sword universe with The Sleeping Dragonâ€™s unique visual style.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/33610/header.jpg?t=1485515156	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'The Search for Amelia Earhart	',
		publisher: 'ValuSoft;Retroism	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Hidden Object	',
		price: 4.99,
		description:
			'Follow Amelia Earhartâ€™s life through space and time to learn about her accomplishments and discover what could have really happened to her on her last flight. Only you can discover the truth of what really happened on that long flight so many years ago!<h2 classbb_tagFeatures:<h2 classbb_ulUncover history as you search for actual memorabilia left behind by Amelia.Locate and assemble the hidden clues to help unfold Ameliaâ€™s story and ultimately unlock her mystery.Plot coordinates using the Coordinator Locator to discover the places Amelia visited around the world. Find the missing clues in this exciting Hidden Object Adventure game!Solve 5 mind-bending mini-games including spot the difference and plot the coordinates.Explore 32 scenes in order to find clues and reveal the missing links to Ameliaâ€™s disappearance.	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/33760/header.jpg?t=1467158554	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Elizabeth Find M.D. - Diagnosis Mystery - Season 2	',
		publisher: 'ValuSoft	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Hidden Object	',
		price: 14.99,
		description:
			'Unravel the Medical Mysteries in this Dramatic Puzzle Adventure! Follow Elizabeth through an engaging storyline with her fellow doctors staff and some interesting sales reps.! Search for clues to diagnose and solve medical problems for a variety of patients in this enjoyable seek & find game. Study X-rays blood tests and 4 more medical mini games add to the fun and future health of your patients!.<h2Key features:<h2.3 new medical cases..New characters & storylines â€“ travel to farms boating piers vet clinics etc. to find clues..Interactive inventory items â€“ Pull out drawers move curtains and more to find clues!.After reviewing the evidence you make the diagnosis..6 new mini-games â€“ X-rays blood tests heart rate monitors and more!.Over 20 unique hidden object scenes.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/33790/header.jpg?t=1447354308	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Pound of Ground	',
		publisher: 'Bohemia Interactive	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements;Steam Cloud;Stats	',
		genres: 'Action	',
		game_type: 'Action;Zombies;Third-Person Shooter	',
		price: 8.99,
		description:
			"Pound of Ground story driven crazy shoot 'em up with red car and LOTS of zombies.The game combines action elements - a wide range of advanced weapons fights with various bosses and spectacular endless battles with the crowds of the undead - with a gripping story full of unexpected disclosures and peculiar characters.<h2 classbb_tagKey features:<h2 classbb_ulA well-written story full of turns of events; it's mainly about putting things right about love and ultimately about saving the whole cityDuels with variously designed bosses but also with the crowds of undead enemiesScenes from 'behind the shut curtain' that add flavour and humour to the storyA number of different tasks ensures extended and variegated playabilityUnique gameplay elements	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/33980/header.jpg?t=1521642649	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Alternativa	',
		publisher: 'Bohemia Interactive	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Cloud	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click;Sci-fi	',
		price: 9.99,
		description:
			"Alternativa is a story that will take you to a world much different to what you'd expect in 2045. To a world destroyed by war and revolutions a world led by an oppressive and cruel dictatorship.Classic point&amp;click adventure game based on the original sci-ficyber-punk script which is composed of a number of shorter stories that lead us through the lives of individual characters as well as the fictional world of the future.Murder of one power of a few betrayal of all!<h2 classbb_tagKey features:<h2 classbb_ulClassic point&amp;click adventure gameMore than 120 backgrounds modeled in detailPlay as up to 4 different characters in the storyOriginal sci-fi story in an elaborate worldSimple and easy controls using just a mouseRendered video sequences2 levels of difficultyInteractive dialogues with choicesOriginal soundtrack	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/33990/header.jpg?t=1521640173	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Alpha Protocolâ„¢	',
		publisher: 'SEGA	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action;RPG	',
		game_type: 'RPG;Stealth;Action	',
		price: 9.99,
		description:
			'Loyalty carries a price and no one knows this more than agent Michael Thorton. A talented young agent cast out by his government Thorton is the only one with the information needed to stop an impending international catastrophe. To do so means he must cut himself off from the very people he is sworn to protect. As players determine how to accomplish different objectives the decisions made and actions taken in each mission will ultimately transform the type of secret agent Michael Thorton will become. Every choice the player makes as Michael Thorton will carry consequences for his future and the fate of the world.	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/34010/header.jpg?t=1521734862	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Massive Assault	',
		publisher: 'Matrix GamesGMX Media	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Strategy	',
		game_type: 'Strategy;Turn-Based;Turn-Based Strategy	',
		price: 6.99,
		description:
			'Take the command of Free Nations Union forces and defeat the Phantom League on one of six distant planets. The rebels decided to seize the power on Earth by first conquering the space colonies which provide vital energy resources to AOG. The war for global domination unrolls on continents at sea and in the air. With secret allies you can disclose and provide troops at any moment surprisingly shifting the power balance in a particular region. Lead your divisions fleets and air squadrons against those who dared threaten our freedom and democracy. classbb_ulOriginal political system based on &quot;Secret Allies&quot; providing endless replayability Smooth and Dynamic Gameplay Full 3D Graphic Engine Huge 3D Landscapes 26 Detailed 3D Units Realistic Lighting Explosions and Effects 3D Sound 6 Different Worlds (planets)	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/34630/header.jpg?t=1447352616	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Chronicles of Mystery: The Scorpio Ritual	',
		publisher: 'City Interactive S.A.	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click;Female Protagonist	',
		price: 3.99,
		description:
			"Uncover the darkest secret of humanity!Young archeologist Sylvie Leroux accidentally stumbles upon an ancient secret. What she doesn't realize is that her research will put her in deadly peril. Who wants to prevent her from finishing her research? Are mere humans standing in her way or is it a supernatural power? classbb_ulDramatic story with many twists and turns Mystical atmosphere with breathtaking graphicsChallenging and intense puzzles	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/34800/header.jpg?t=1551951642	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: "Bad Rats: the Rats' Revenge	",
		publisher: 'Strategy First	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements;Steam Trading Cards	',
		genres: 'Indie	',
		game_type: 'Cult Classic;Physics;Indie	',
		price: 0.79,
		description:
			'Bad Rats is a physics puzzle game where rats finally get their bloody revenge on their new prisoners: The cats. Come up with creative solutions for each puzzle using physics functional objects and your specially trained Rats. Try different ways of solving each puzzle to finish faster or earn higher scores. Revel in your success as the cat meets a violent demise in any number of humorous ways at the hands of Bad Rats. classbb_ulComic cartoon violence and cartoon blood Realistic physics simulation 10 Specialist Rats anxious for revenge 11 different and bloody deaths for cats 10 other functional objects to help you 44 Maps from easy to very hard Internet and local records Original cartoon styled characters Challenge your creativity intelligence and logic Unlock all the Steam Achievements	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/34900/header.jpg?t=1447352325	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Mini Ninjas	',
		publisher: 'Square Enix	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action;Adventure	',
		game_type: 'Adventure;Action;Ninja	',
		price: 7.99,
		description:
			'Mini Ninjas is a game that combines furious action with stealth and exploration for an experience that appeals to a wide audience across age groups and preferences. Itâ€™s an action-adventure with a strong focus on allowing the player freedom to explore the world and has the depth to allow for very varied gameplay and approaches to getting through the game.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/35000/header.jpg?t=1478904152	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Clutch	',
		publisher: 'Game Factory Interactive	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action;Racing	',
		game_type: 'Racing;Action;Zombies	',
		price: 6.99,
		description:
			"Clutch is a fast-paced arcade racing game which will challenge the resilience of anyone's nerves. You play as a person who has survived a catastrophe of the Large Hadron Collider (LHC) while everyone else in the city has been transformed into a bloodthirsty zombie. You return to the abandoned city looking for a way to change the zombies back into humans. The only way to survive is to move on fast armored vehicles. The player will complete different missions: racing rescue and more to finally learn the truth.Key features:classbb_ulA multitude of drivable vehicles and upgradesMany ways to destroy zombiesThe LHC campus is a complete city open for exploration sandbox style8 game modes of racing and combatAdvanced collision and damage physicsDiversity of artifacts that affect the player and rivals	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/35310/header.jpg?t=1447352299	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Big Brain Wolf	',
		publisher: 'Frima	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements	',
		genres: 'Adventure;Casual;Strategy	',
		game_type: 'Adventure;Casual;Strategy	',
		price: 3.99,
		description:
			'Big Brain Wolf is a hilarious point and click adventure game for puzzle lovers. The player takes upon the role of an asthmatic vegetarian wolf studying to become a genie. In the course of his adventures the player will encounter a large cast of famous funny characters and solve sixty different puzzles. Six neuroscientist designed highly replayable brain training exercises will earn the player precious hints to help solve the more difficult puzzles. classbb_ul60 Different challenging puzzles and enigmas to solve20 Puzzle filled scenes spanning a 5 chapters captivating storyA funny new take on universal characters that will appeal to all6 brain training exercises designed and approved by the neuroscientists of Brain Center International10 Original STEAM achievementsGreat original soundtrack by a jazz quartet	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/35600/header.jpg?t=1478100887	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Monster Mash	',
		publisher: 'Sandlot Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Tower Defense	',
		price: 3.49,
		description:
			'In a distant fairy-tale world the villagers of Curly Valley are being attacked by legions of quirky and bizarre monsters. Fortify villages with various towers upgrades and unusual defensive armaments to repel these mysterious invaders and protect the grateful villagers who cheer your every conquest! Get ready for the coming onslaught in this addictive strategic adventure.. . Hours of challenging game play. 20 quirky and bizarre monsters. 9 Unique Scenes. Storybook style art. 11 Power-ups and level-altering items.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/36210/header.jpg?t=1447352334	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Kuros	',
		publisher: 'Sandlot Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Hidden Object	',
		price: 4.99,
		description:
			'When Katya a young explorer with no memory of her past awakens on Kurosâ„¢ she finds a mysterious alien world teetering on the brink of destruction. Determined to piece together her forgotten life she sets out to explore her strange surroundings. With the guidance of six unique allies help Katya explore five elemental realms and restore balance to Kuros in this hidden object adventure!. . Over 25 unique locations in 5 magical realms. Over 30 mini-game puzzles. More than 100 hidden objects to be uncovered. 6 unique allies providing guidance in your quest.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/36240/header.jpg?t=1447352333	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Cake Mania Main Streetâ„¢	',
		publisher: 'Sandlot Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Time Management	',
		price: 4.99,
		description:
			"Take a trip back to Jill Evans'&trade; hometown of Bakersfield in Cake Mania Main Street&trade; the highly anticipated fourth chapter in one of the most popular time management series of all time!.Help Jill and her closest friends earn enough money to revitalize Main Street by opening managing and upgrading four unique downtown shops and building must-see tourist attractions. With all-new shop mechanics 50 shop equipment upgrades 40 unique mouth-watering recipes and hilarious new customers Cake Mania Main Street offers players four truly addictive time management games in one!..100 levels of fast-paced action.Purchase and upgrade 4 different shops all with new gameplay mechanics.Buy and sell over 50 unique shop upgrades.Unlock and purchase 40 delicious mouth-watering recipes which include over 35 unique ingredients.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/36300/header.jpg?t=1447352908	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'WestwardÂ® IV: All Aboard	',
		publisher: 'Sandlot Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Strategy;Casual	',
		game_type: 'Strategy;Casual	',
		price: 4.99,
		description:
			'Ride the rails to fun and adventure in Westward&reg; IV: All Aboard a thrilling real-time strategy adventure from Sandlot Games!.When the patriarchal owner of the Turner Railroad Company goes missing his children Anne and Henry are called upon to uncover the truth behind his disappearance. Protect the family business from greedy bandits as you help the Turners expand their railway to neighboring towns. Rescue kidnapped citizens being held for exorbitant ransoms battle greedy bandits and guide your town to fortune and prosperity in Westward IV: All Aboard!..36 buildings including all-new upgrades and features.Train skilled workers to add building bonuses.Produce town goods to sell at the train station.Unlock secret items and characters hidden throughout Westward IV.	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/36310/header.jpg?t=1447352909	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Iron Roses	',
		publisher: 'Sandlot Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure;Casual	',
		game_type: 'Adventure;Casual	',
		price: 4.99,
		description:
			'Help Alex navigate a bustling urban landscape as she frantically searches for her former Iron Roses&trade; band mates and tries to convince them to enter the upcoming Battle of the Bands. Track down lost equipment interact with intriguing characters and use all of your problem solving skills as you make the long hard climb to the top!..Intriguing characters with fully voiced audio.Original music and songs by the band Megasapien.Over a dozen unique urban locations to explore.Get the band back together using your problem-solving skills and witty repartee.Solve dozens of mini-game activities along the way to stardom..	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/36320/header.jpg?t=1447352910	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'ChocolatierÂ®: Decadence by Designâ„¢	',
		publisher: 'PlayFirst	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Simulation	',
		game_type: 'Simulation;Casual	',
		price: 7.49,
		description:
			'Travel the globe in search of flavorful and exotic ingredients to customize your own chocolate creations. Youâ€™ll use post-World War II economic and technological advances to customize your very own chocolate creations assist the Baumiesters and strive to become CEO of your very own chocolate empire! classbb_ulFor the first time ever you have complete control over the ingredients look name and description of your customized recipesHow you customize your chocolates has an economic impact on your successTravel to ports around the globe to discover ingredients build your empire and follow the continuing saga of the Baumeister familyEconomic sim focused on mouth-watering chocolateLatest installment of the award-winning ChocolatierÂ® franchise	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/37210/header.jpg?t=1447352388	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Cooking DashÂ®	',
		publisher: 'PlayFirst	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Simulation	',
		game_type: 'Simulation;Time Management;Casual	',
		price: 7.49,
		description:
			"When Cookie the Chef leaves Flo's Diner to pursue a career on a popular reality cooking TV show there is a shortage of chefs in DinerTown as Cookie invites them all to appear as guest stars. Flo with her grandmother help out at all four DinerTown restaurants and ends up hosting with Cookie on a Hollywood set of Flo's Diner! classbb_ulOver 50 levels of game play!Master the art of perfectly prepared meals in five different restaurants!Each new restaurant features a different variety of food to delight customers!3D rendered characters add dimension to the animation. Upgrades upgrades upgrades! The game features decorative upgrades functional upgrades and upgrades awarded for successful completion of the levels. 	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/37220/header.jpg?t=1531175379	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Diaper DashÂ®	',
		publisher: 'PlayFirst	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Simulation	',
		game_type: 'Simulation	',
		price: 7.49,
		description:
			".It's a girl! And a boy! In fact it's every adorable baby in DinerTown all bundled up for you to lavish with love. Keep these DinerTown darlings cooing by helping out Wilson who's in over his head running the local daycare. Now's the time to make a play date with the game that's literally crawling with fun! ..50 baby-filled levels of cuteness &mdash; that's like a bazillion baby toes! .Tend to your babies' every need with five priceless inventions beyond every mother's dream .Over 20 upgrades to buy from stain-free walls to auto-rocking cradles..	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/37230/header.jpg?t=1447352390	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Diner Dash:Â® Hometown Heroâ„¢	',
		publisher: 'PlayFirst	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Simulation	',
		game_type: 'Time Management;Casual	',
		price: 7.49,
		description:
			".On a visit to her hometown Flo and her Grandma Florence take a stroll down memory lane. Bring five restaurants back to life and meet new customers like the Hungry Man and the Celebrity. Take special care of customers with reservations and place flowers at tables in order to make diners happier. Stuck with a 4-person group and no 4-person tables? Now you can move tables together to create a larger table. Help restore Flo's hometown now! ...50 New Story Mode Levels.6 new customers.New Reservations feature.New Moving Tables feature.'Train' new waiters for each restaurant..	",
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/37240/header.jpg?t=1447352391	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Emerald City Confidentialâ„¢	',
		publisher: 'PlayFirst	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click;Noir	',
		price: 7.49,
		description:
			".Work with the world's most cunning detective in the shadowy underbelly of the Emerald City of Oz! As Petra you'll be lured deep into mysteries involving new foes and familiar faces; Scarecrow Lion and Toto included. This is Oz as you've never seen it before! Solve your detective's quest and unravel a conspiracy of magic and intrigue! Follow a case through five chapters full of puzzles witnesses suspects and allies...Over 50 beautiful and detailed environments to explore .First PlayFirst game with full voiceover &mdash; 36 characters and over 6000 lines of spoken dialog.A new story and twist on the timeless world and classic characters of Oz..	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/37260/header.jpg?t=1447352394	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Wandering Willowsâ„¢	',
		publisher: 'PlayFirst	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure;RPG	',
		game_type: 'Casual;Adventure;Cute	',
		price: 10.99,
		description:
			".Ready for a new adventure? Welcome to <iWandering Willows&trade; a whimsical world full of wondrous wildlife and engaging quests. With over forty enchanting pets for you to befriend and train you're sure to find just the right help completing quests for the land's amusing inhabitants who range from gruff pirates to rocket ship commanders. Garden bake and create clothing and bouquets with the treasures your pet fetches for you. You might even find a new pet egg to hatch! Spend some time in <iWandering Willows today! ..Over 40 different adorable pets to collect and train.Over 150 quests to complete across two continents.Customize your avatar with over 150 pieces of clothing that you can make.More than 200 food recipes to collect and make..	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/37270/header.jpg?t=1447352394	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Wedding DashÂ® 2: Rings Around the World	',
		publisher: 'PlayFirst	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Simulation	',
		game_type: 'Time Management	',
		price: 7.49,
		description:
			".Quinn is back on a new whirlwind adventure joined by Flo&reg; and Joe Wright wedding photographer. Help Quinn become the world's top wedding planner in this hilarious sequel to the hit game <iWedding Dash&reg;. Visit beautiful exotic locations while managing new guests fulfilling bride and groom requests and tackling comedic disasters. Do you have what it takes to help Quinn win the honor of planning the most exclusive wedding of the year? ..2 modes: Story and Endless Game.50 new levels of riotous game play.Bridezilla now joined by the all-new Groom-Kong!.Photographer on hand to take pictures on request!.5 exciting new environments..	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/37280/header.jpg?t=1447352396	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'DinerTown Tycoon	',
		publisher: 'PlayFirst	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Simulation	',
		game_type: 'Casual;Management	',
		price: 6.99,
		description:
			'.The evil Grub Burger fast food chain has bribed their way into DinerTownâ„¢ and is threatening to drive out the local diners with their cheap prices sneaky tactics and the mysterious Ingredient X! It is up to you to take charge and help Flo and the people of DinerTown before itâ€™s too late. Use your restaurant savvy and business smarts to stock the right ingredients set fair menu prices and purchase new dÃ©cor and advertising to make the diners successful again. Bring wholesome food and local eateries back to DinerTown to give Grub Burger the boot once and for all!..5 different neighborhoods to save.Over 90 recipes to add to restaurant menus.More than 70 delicious ingredients to stock.Over a dozen unique restaurants to manage.8 new DinerTown chefs.25+ beloved characters from the Diner DashÂ® series..	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/37300/header.jpg?t=1447352518	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'The Nightshift Codeâ„¢	',
		publisher: 'PlayFirst	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Hidden Object	',
		price: 4.99,
		description:
			'The Nightshift Code is a hidden object adventure game that takes players on mysterious and sometimes dangerous journeys from an ancient history museum in Chicago all the way to a secret location in the Greek Isles. You will search for hidden objects and piece together clues to unlock challenging puzzles ultimately digging for a lost treasure..6 Chapters with more than 5 levels per chapter.18 beautiful search locations.6 Challenging locked puzzles.Special Tools.Multiple layered Scavenger Hunts.Arcade Mode with hundreds of hidden objects.Immersive story unfolds with game play..	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/37320/header.jpg?t=1447353110	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: "Nightshift Legacy: The Jaguar's Eyeâ„¢	",
		publisher: 'PlayFirst	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Hidden Object	',
		price: 4.99,
		description:
			"Nightshift Legacy takes you on a historical adventure full of romance and intrigue with The Nightshift Code heroes Mike and Isabel. You'll travel from the jungles of Guatemala to the streets of Moscow from present day back to the history of the Spanish Civil War brush elbows with historical luminaries such as Frida Kahlo and Diego Rivera while hunting for stolen artifacts across multiple continents. Can you find the mysterious Jaguar's Eye before it's too late?.A new rich and exciting story featuring 6 full chapters with 7 or more levels each!.More fun and witty interactions with and between the main characters Mike and Isabel.Over 20 unique search locations from around the globe.All New Puzzles.Sequel to Nightshift Code's..	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/37330/header.jpg?t=1447353110	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Time Gentlemen Please! and Ben There Dan That! Special Edition Double Pack	',
		publisher: 'Size Five Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure;Indie	',
		game_type: 'Point & Click;Adventure;Indie	',
		price: 2.99,
		description:
			".<iBen There Dan That! and <iTime Gentlemen Please! are a couple of rip-roaring point-and-click adventure games . With tongue firmly in cheek sit back relax and put your mind to work solving puzzles and reading some very funny dialogue. It's like a book only good!.From an horrific and untimely death in deep dark Peru via preposterous-and-suspect alien invasions to whipping back-and-forth in time to stop Hitler and his army of robot Nazi dinosaur clones this is one set of adventures you're unlikely to forget..Key features:..Funny words that'll actually probably make you laugh out loud!.Graphics AND sound effects!.Thousands of unique responses for almost every action you can think of!.NAZI DINOSAURS!.	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/37400/header.jpg?t=1447352433	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Magnetis	',
		publisher: 'Yullaby	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Co-op;Steam Achievements;Steam Leaderboards	',
		genres: 'Indie;Casual	',
		game_type: 'Indie;Casual;Puzzle	',
		price: 1.49,
		description:
			'.Magnetisâ„¢ is all about attraction! Connect the magnets to create electric explosions. Solving this frantic puzzle will require quick thinking and foresight anticipating connections in order to generate massive chain reactions to win the highest number of points! Team up with your friends in cooperative mode or play against them in battle mode with up to 4 players competing for the highest score...Intense action & reflexion for 1 to 4 players.3 solo game modes: Normal Time Attack and Block Attack.3 multiplayer modes: Battle Teamplay and Cooperative.40 achievements to unlock!.Online leaderboards.Delicious oldschool 8bit-esque soundtrack!..	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/37500/header.jpg?t=1447352672	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Windosill	',
		publisher: 'Vectorpark	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure;Casual;Indie	',
		game_type: 'Casual;Point & Click;Indie	',
		price: 1.99,
		description:
			'Explore a dream-like world of impossible wonders... classbb_ulExplore 10 different immersive animated environmentsInteract with dozens of physics-based creatures and objectsSolve brain-tickling puzzles to unlock new rooms and reveal new surprises	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/37600/header.jpg?t=1555830228	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Coconut Queen	',
		publisher: 'iWin	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual;Simulation	',
		game_type: 'Casual;Simulation	',
		price: 6.99,
		description:
			"In Coconut Queen the island of Lui Lui beckons you to bask amid miles of sun-drenched coastline. Disembark into its floral air and discover that you are the island's much-awaited Coconut Queen. Your own private getaway is devoid of females so find company among the brawny native gents who welcome you with succulent fruits. What's the catch to this all-inclusive extended vacation? One little thing: Re-invent Lui Lui into an idyllic tourist locale or risk its demise...7 Beautiful locations around the Island of Lui-Lui .Over 55 entertaining levels .Build and customize your paradise resort.Over 30 buildings and landscape elements.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/38070/header.jpg?t=1447352794	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Build-A-Lot 3: Passport to Europe	',
		publisher: 'iWin	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Simulation	',
		game_type: 'Simulation;Building	',
		price: 6.99,
		description:
			'Build-a-lot 3 is your passport to fun! Travel all over Europe as you restore rundown houses develop friendly services and beautify neighborhoods with picturesque landmarks. The changing needs of the neighborhood will sure keep you busy--you may need to brave the rain and snow deal with noisy neighbors or even put out a small fire to get the job done on time! Pack your bags and let the fun take flight in the exciting sequel to Build-a-lot 1 & 2!..Restore rundown houses for big profits.Build picturesque landmarks to beautify neighborhoods.Construct friendly service buildings.Paint and landscape houses to increase curb appeal.Improve a neighborhood at your own pace in Casual mode..	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/38100/header.jpg?t=1447352798	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Farm Frenzy: Pizza Party	',
		publisher: 'iWin	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Agriculture	',
		price: 3.99,
		description:
			"Pizza lovers unite! It's time to return to the farm to create your favorite food! You'll start out by growing grass feeding animals and collecting produce. Then you'll turn your goods into the ingredients you need to make different pizzas! From China to Germany and from Italy to New York City -- where pizza is considered one of the main food groups -- your mouth-watering creations will be enjoyed around the world! .As you strive to master the fast-paced point-and-click gameplay you'll fend off bears purchase buildings that produce different ingredients and upgrade your vehicles so you can transport more goods. You'll also enjoy some of the zaniest animations ever created for a casual game! Don't miss all the fun in Farm Frenzy: Pizza Party!..90 levels.Ten animals.28 goods to produce.15 buildings.Upgradeable truck and plane.	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/38140/header.jpg?t=1447352918	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Farm Frenzy 3	',
		publisher: 'iWin	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Puzzle;Agriculture	',
		price: 6.99,
		description:
			"Manage five farms around the world and try your hand at penguin-breeding and jewelry-making in Farm Frenzy 3! Features 95 outrageously fun levels 30 wacky animals and more upgrades than there are ears in a corn field! What's more as you grow crops feed animals collect produce and manufacture goods you'll be treated to some of the zaniest animation to ever grace a casual game! Will you help Scarlett become the president of the farmerâ€™s union by earning the votes of the people she helps? Find out when you go back to the farm in Farm Frenzy 3!..95 levels in five countries .30 animals including five enemies .33 products to make .17 buildings and vehicles .16 trophies and achievements .Colorful comic book interludes.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/38150/header.jpg?t=1447352917	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Farm Frenzy 3: American Pie	',
		publisher: 'iWin	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Agriculture	',
		price: 6.99,
		description:
			"Can you keep up with Scarlett and the latest advancements in technology as you grow crops feed animals collect produce and manufacture goods? Of course you can! Just don't let the zany new animations distract you from the task at hand. Featuring 90 all-new levels packed with never-before-seen characters buildings and challenges Farm Frenzy 3: American Pie promises a bumper crop of fun!..90 all-new levels.New characters.New buildings.Never-before-seen Endless Mode.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/38160/header.jpg?t=1447352918	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Toki Tori	',
		publisher: 'Two Tribes Publishing	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Partial Controller Support;Steam Cloud;Includes level editor	',
		genres: 'Casual;Indie	',
		game_type: 'Puzzle;Indie;Casual	',
		price: 3.99,
		description:
			"The gameplay in Toki Tori is a blend of two genres. While it looks like a platform game it's a puzzle game at heart. To progress through the game the player must pick up each egg in a level using a set number of tools. Players will have to look and plan ahead carefully while using items such as the Telewarp Freeze-o-Matic and InstantRockâ„¢. Additional tools are gradually introduced as the player progresses through the game's 80+ levels covering four unique worlds. classbb_ulA wide variety of items and weapons80 levels spread over 4 large worldsDozens of hours of gameplayFor all ages - accessible and hard levels availableCatchy music and sound effectsSteam AchievementsFull screen HD graphicsShader effects5.1 Surround SoundtrackControls designed for mouse keyboard as well as joypad	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/38700/header.jpg?t=1488471030	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'RUSH	',
		publisher: 'Two Tribes Publishing	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements;Steam Cloud	',
		genres: 'Casual;Indie;Strategy	',
		game_type: 'Puzzle;Indie;Casual	',
		price: 3.99,
		description:
			"From the twisted puzzle minds behind the award winning Toki Tori comes a new game simply called RUSH.Fortunately for fans of high quality puzzle games RUSH is anything but simple. In the game's fully three dimensional levels players need to guide cubes to color coded exit points using Conveyor belts Warps Stops Signs Splits and more! The game can be easily controlled with just the mouse allowing your brain to fully focus on the solutions!<h2 classbb_tagKey features:<h2 classbb_ulUnique 3D puzzle solving gameplay with Conveyor Belts Warps Stop Signs Splits and more. Over 70 levels of increasing difficulty Hint system when your brain needs a break Drag and Drop control system Highly stylized environments Steam Achievements Multiple profiles For Mac &amp; PC (uses Steam Play)	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/38720/header.jpg?t=1488470929	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'EDGE	',
		publisher: 'Two Tribes Publishing	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Partial Controller Support;Steam Cloud;Steam Leaderboards	',
		genres: 'Action;Indie	',
		game_type: 'Puzzle;Indie;Action	',
		price: 4.99,
		description:
			"EDGE the award winning retro-styled platform game has been extended!Download the free EDGE Extended DLC containing over 40 brand new levels additional music and all-new races against the notorious Dark Cube!In EDGE players take direct control of the cube and roll their way around the game's dozens of levels. Search for all the prisms find the shortcuts to improve your times and compete through the Steam leaderboards!<h2 classbb_tagKey Features:<h2 classbb_ulRetro styled platformerClassic 8-bit inspired soundtrackover 100 levels (original bonus and extended levels) Free 'EDGE extended' DLC Now Available!Steam leaderboards40+ AchievementsFor Mac &amp; PC (uses SteamPlay)	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/38740/header.jpg?t=1488470838	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'SEASON OF MYSTERY: The Cherry Blossom Murders	',
		publisher: 'Square Enix	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements	',
		genres: 'Casual	',
		game_type: 'Casual;Hidden Object;Adventure	',
		price: 2.99,
		description:
			'.Your husband Richard lies dead beneath the cherry blossoms of Old Japan and the police are of no help. Step into history and uncover the truth when no one else will. Find devilishly hidden clues explore exotic locales and bring the killer to justice!..The hidden object genre meets historical fiction for the first time.Over 1200 cleverly hidden objects.Over 20 handpainted backgrounds.Stirring Japanese-themed soundtrack..	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/39110/header.jpg?t=1479332567	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Dungeon Siege	',
		publisher: 'Square Enix	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'RPG	',
		game_type: 'RPG;Fantasy;Action RPG	',
		price: 4.99,
		description:
			'Dungeon SiegeÂ® combines the immersive elements of a role-playing game with over-the-top intensity and non-stop action. Dungeon Siege plunges you into a continuous 3D fantasy world where you face off against an army of evil that has been unleashed. . You begin as a humble farmer and as you travel through the world and gain new skills you can gather a party of up to eight characters to aid you. Dungeon Siege impels the player into one over-the-top battle after the other as the storyline unfolds and a larger plot begins to reveal itself. . A world of adventure where you can explore sprawling landscapes in a seamlessly unfolding story awaits...	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/39190/header.jpg?t=1479402440	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Gothic II: Gold Edition	',
		publisher: 'THQ Nordic	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action;RPG	',
		game_type: 'RPG;Classic;Open World	',
		price: 8.99,
		description:
			'Gothic II: Gold Edition brings together the excitement of Gothic II and the add-on Night of the Raven to your fingertips!You have torn down the magical barrier and released the prisoners of the Mine Valley. Now the former criminals of the forests and mountains are causing trouble around the capital of Khorinis. The town militia is powerless due to their low amount of forceâ€“outside of the town everyone is helpless against the attacks of the bandits. classbb_ulOver 100 thrilling missions on the different settingsA detailed lively game environment with over 500 individual characters (each with their own daily routine)The player determines the course of the story himselfFight with more than 200 different weapons and magical spellsOver 12 hours of complete English voice outputIncludes the Night of the Raven add-on	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/39510/header.jpg?t=1533039612	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'The Guild II - Pirates of the European Seas	',
		publisher: 'THQ Nordic	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Simulation;Strategy	',
		game_type: 'Simulation;Strategy;Medieval	',
		price: 8.99,
		description:
			'The first true life simulation series set in the fascinating medieval Europe!The Addon expands and transforms the game into an even greater experience by adding a huge area including the cities of &quot;The Hanse&quot; located at the shores of the European seas. Sea battles and naval trading are added to the gameplay and a new campaign mode provides more than 10 hours of additional fun.<h2 classbb_tagKey features:<h2 classbb_ulNaval trading sea battles4 new maps 5 different types of ships each one can be equipped according to your needsCampaign mode including more than 10 hours of pure medieval funNew buildings (harbour fishermans hut pirate outpost) trading station as upgradeNew professions: Pirate and Medicus!3 new offices and titles of nobility with new privileges	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/39660/header.jpg?t=1533042500	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Risen	',
		publisher: 'Deep Silver	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Trading Cards	',
		genres: 'RPG	',
		game_type: 'RPG;Open World;Gothic	',
		price: 7.99,
		description:
			'The island Faranga needs a new hero you!Delve into a gritty raw and atmospheric fantasy world in which every action has a consequence. In the epic world of Risen filled with mysterious earthquakes fearsome monsters and unimaginable treasures forge your path with the sword learn the art of staff fighting or become a powerful mage. classbb_ulCountless side quests and creatures to discover.Over 60 hours of Immersive open world gameplay.Alter the destiny of the island by the actions you take.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/40300/header.jpg?t=1535468752	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Secret Files 2: Puritas Cordis	',
		publisher: 'Deep Silver	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click;Female Protagonist	',
		price: 7.99,
		description:
			'The sequel to the award winning adventure hit Secret Files Tunguska. Famine in Africa floods in Southeast Asia economic crisis in Europe and civil wars in South America the world is on the brink of disaster. Nina Kalenkow is trying to escape all of this as well as her failed relationship with Max Gruber on a nostalgic cruise to Portugal.Nina becomes a witness to murder in the Hamburg docks and is soon thrust into the spotlight of events that encompass not only continents but also centuries. classbb_ul&quot;Facial animation&quot; for visualizing emotions and speechInnovative puzzle design that always remains logical and fairDetailed and impressive pre-rendered backgroundsReal-time light and shadow effects of 3D characters and environments	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/40340/header.jpg?t=1479893923	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Samorost 2	',
		publisher: 'Amanita Design	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure;Casual;Indie	',
		game_type: 'Adventure;Point & Click;Indie	',
		price: 3.99,
		description:
			'Samorost 2 the sequel to free web-browser game Samorost 1 is a short point-and-click adventure in which you help a little space gnome save his dog kidnapped by aliens. classbb_ulAdventure full of surprising creatures and locations.Beautiful ambient music by Tomas &quot;Floex&quot; Dvorak.Relaxing and peaceful game with intuitive gameplay accesible even for non-experienced players of all ages.	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/40720/header.jpg?t=1527759981	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'The Misadventures of P.B. Winterbottom	',
		publisher: '2K	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Partial Controller Support;Steam Cloud;Steam Leaderboards	',
		genres: 'Adventure;Indie	',
		game_type: 'Indie;Puzzle;Platformer	',
		price: 3.99,
		description:
			'Create your own paradoxâ€¦ for the love of pie .Enter a macabre and comical silent world filled with mischief time travel and delicious pie. Record yourself and harness your time bending abilities to cooperate compete against and disrupt your past present and future selves. Winterbottomâ€™s debut misadventures present a whimsical spin on the notions of time space and play. .Join Winterbottom on his award winning debut Misadventures as he travels through over 80 unique puzzles. Winterbottom causes mischief and mayhem in pursuit of the mysterious and elusive Chronoberry Pie on his spectacular journey through space-time.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/40930/header.jpg?t=1526579479	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Hammerfight	',
		publisher: 'KranX Productions	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action;Indie	',
		game_type: 'Action;Indie;Physics	',
		price: 3.99,
		description:
			"Hammerfight is about 2D battles of flying machines equipped with various slashing piercing and blunt weaponry.A unique combat system is based on realistic physics simulation and it ties the movements of the rider to the movements of your mouse. As you wave the mouse your rider swings his warhammer smashing the foe into the wall!This creates an unequaled feel of the real strike a feel of the mass of the weapon in your hands. Simulated physics and direct mouse control creates a huge variety of possible battle techniques and an unlimited field for perfecting one's fighting skill. classbb_ulIntuitive mouse controlRealistic physics breakable objectsGreat storylineHigh quality artMore that 50 weapons3 additional modes up to 4 players	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/41100/header.jpg?t=1447352589	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Tommy Tronic	',
		publisher: 'Interplay Inc.	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action;Adventure;Indie	',
		game_type: 'Action;Adventure;Indie	',
		price: 6.99,
		description:
			"Tommy Tronic - an old-skool platformer that isn't trying to be anything else! Jumping shooting dodging and exploring is all that's required to help get Tommy to his destination and free his tiny puppy from the clutches of an insane genius school-kid and his brutal sidekick 'Biffa'. It would be straight forward too if it wasn't for the fact that this journey will take Tommy through Gnarly wood; a twisted and eerie forest that adults avoid let alone tiny children! Imagination runs amok as Tommy confronts his childish fears head on all in a bid to be reunited with his beloved pal 'Yapz'!..<h2Key features:<h2.Colorful cartoony 3D graphics and smoothly animated 3D characters..Simple controls & game-play with non-linear level designs..Secrets & bonuses!. Amusing plot that is suitable for children or adults.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/41660/header.jpg?t=1447353664	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Death and the Fly	',
		publisher: 'Interplay Inc.	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Indie	',
		game_type: 'Indie	',
		price: 6.99,
		description:
			'Players will control two very different characters Death and the Fly. Each character has special skills that must be used to navigate the many traps and puzzles contained in each level. With many interesting ways to die and numerous opponents to face the player will be challenged and entertained for hours. ..<h2Key features:<h2.Unique grotesque design..Unique graphics..Unique music..Two different characters to control each with his own skills..Traps and bonuses..Side-scrolling 2D platform puzzle game..Earn gold for the in-game shop.Power-up skills..Many deaths..Many flies..Many different opponents..Many hours of play.	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/41680/header.jpg?t=1447354251	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Trino	',
		publisher: 'LoadComplete	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Partial Controller Support;Steam Leaderboards	',
		genres: 'Casual;Indie	',
		game_type: 'Indie;Casual	',
		price: 3.49,
		description:
			"Trino an evolving alien must escape the Nanites an insidious nano-robot swarm that have imprisoned Trino for his powers. Use Trino's powerful triangle trap to defeat the Nanites and break free from their Laser Prison! .<h2Key Features:<h2..Outwit trap and puzzle your enemies with quick moves and cunning triangle powers.Conquer over 48 deadly stages.Engage 18 clever deceptive and unpredictable enemies.Topple three Nanite swarm leaders across 3 realms.Power up your triangle abilities.Soothing music sound and graphics.Selected as one of the 2009 PAX 10.Listed top 20 in DreamBuildPlay 2008.	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/42000/header.jpg?t=1447353865	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Nancy DrewÂ®: Secrets Can Kill REMASTERED	',
		publisher: 'HeR Interactive	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click;Mystery	',
		price: 5.19,
		description:
			'Nancy DrewÂ®: Secrets Can Kill REMASTERED is a first-person perspective point-and-click adventure game. The player is Nancy Drew and has to solve a mystery. Explore rich environments for clues interrogate suspects and solve puzzles and mini-games.<h2 classbb_tagKey features:<h2 classbb_ulPlay as Nancy Drew and investigate a murder at a local school.3D animated characters each with a secret to protect.New puzzles and storyline twists await you in the high school halls.Vintage Nancy Drew references celebrating the brandâ€™s 80th anniversary.Take risks without starting over â€“ the game will automatically return the player to the point before the fatal mistake. Choose from Junior or Senior Detective difficulty levels	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/42210/header.jpg?t=1489514764	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Nancy DrewÂ®: The Captive Curse	',
		publisher: 'HeR Interactive	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click;Mystery	',
		price: 5.19,
		description:
			'A terrifying myth comes alive in Germany! Many years ago a monster stalked the German forest surrounding Castle Finster. According to locals and storytellers the monster disappeared when it claimed a victim. Now everyone is frightened by the sights and sounds of something large stumbling through the darkness. Can you solve the mystery before the monster adds another chapter to this legend?<h2 classbb_tagKey features:<h2 classbb_ulPlay as Nancy Drew and Explore a German CastlePlug into Castle Security CamerasUncover Hidden Rooms and Secret PassagesSearch for Suspects and Spy on the MonsterPlay a German Folk Tale Game	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/42220/header.jpg?t=1490217425	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Nancy DrewÂ®: Trail of the Twister	',
		publisher: 'HeR Interactive	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click;Female Protagonist	',
		price: 4.99,
		description:
			'$100000000 is at stake in this competition to discover a formula to predict tornado touchdowns. But when equipment starts failing and crew members are injured you as Nancy Drew must join the team to keep them in the competition. Is it just bad luck thatâ€™s plaguing the storm chasers or is someone sabotaging their chances of winning?<h2 classbb_tagKey features:<h2 classbb_ulPlay as Nancy Drew and go undercover as a storm chaser.Immerse yourself in meteorology by studying clouds reading Doppler data and surviving tornadoesDrive the Doppler truck catch prairie dogs and maintain weather equipmentCollect pennies by playing arcade games to purchase collectible goodies from the store.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/42230/header.jpg?t=1490219451	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'The Haunted: Hells Reach	',
		publisher: 'Signo & Arte	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Co-op;Steam Achievements;Partial Controller Support;Steam Leaderboards	',
		genres: 'Action;Indie	',
		game_type: 'Action;Indie;Co-op	',
		price: 5.99,
		description:
			'All Hell Has Broken Loose!!! The Haunted is a fast paced third person action horror game that focuses on delivering an intense multiplayer experience. Your goal is to liberate cursed places and survive the assault from the minions of Hell. The game features several multiplayer modes such as co-op survival demons vs. humans and demonizer.<h2 classbb_tagKey features:<h2 classbb_ulAddictive cooperative online and offline gameplay for up to 4 players!Multiplayer versus mode! Humans vs Demons in exhilarating and distinct game modes â€œBattleâ€ and â€œDemonizerâ€. 8 larger environments with unique level events such as meteor showers and lightning storms which affect the gameplay. Over 30 upgradeable weapons and hidden special weapons and items.Free future updates and DLC!Custom level and modification support!Powered by Unreal Engine 3.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/43190/header.jpg?t=1447354670	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Super Laser Racer	',
		publisher: 'New Star Games Ltd	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Steam Achievements;Partial Controller Support	',
		genres: 'Action;Indie;Racing	',
		game_type: 'Racing;Indie;Action	',
		price: 2.99,
		description:
			'Super Laser Racer is an exciting combat racing game set in outer geometric space. Blast your way to the top of the leaderboards using lasers missiles bombs and more! 24 exhilarating tracks 12 racers 8 challenging tournaments online multi-player and a track editor..24 exhilirating tracks.12 racers to unlock.8 challenging tournaments.Bombs cannons lasers mines missiles plasmas!.Online leaderboards.Eliminator and Survival race modes.Create your own tracks.	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/44100/header.jpg?t=1447352743	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Fortix 2	',
		publisher: 'Nemesys Games	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Steam Trading Cards;Partial Controller Support;Steam Cloud;Stats;Steam Leaderboards	',
		genres: 'Casual;Indie	',
		game_type: 'Indie;Casual;Puzzle	',
		price: 1.59,
		description:
			'Fortix 2 is best described as a reverse turret defense game. As Sir Fortix the knight you must conquer castles while dodging tower turrets and evil monsters.Fight your way across the shires of the island Artalom storming from castle to castle. Use cunning strategy to succeed against the maze-like levels and defeat the evil mage Xitrof.You are the lone Knight who must fight against the entire infested continent!<h2 classbb_tagKey Features:<h2 classbb_ulEntertaining and Addictive Game Play30 levels to master3 unique lands to exploreUpcoming DLCs and monthly updates Indie Game Challenge finalist	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/45450/header.jpg?t=1447354185	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Ultra Street FighterÂ® IV	',
		publisher: 'Capcom	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Steam Achievements;Full controller support;Steam Trading Cards;Steam Cloud;Steam Leaderboards	',
		genres: 'Action	',
		game_type: 'Fighting;Arcade;Competitive	',
		price: 22.99,
		description:
			'The worldâ€™s greatest fighting game evolves to a whole new level with Ultra Street Fighter IV. Continuing the tradition of excellence the series is known for five new characters and six new stages have been added for even more fighting mayhem with rebalanced gameplay and original modes topping off this ultimate offering. . .As an additional bonus enjoy all previously released DLC costumes from Super Street Fighter IV Arcade Edition! Get Ultra! (Note: Digital Upgrade does not include any additional DLC costumes.)	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/45760/header.jpg?t=1550108726	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Bob Came in Pieces	',
		publisher: 'Ludosity	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Partial Controller Support;Steam Cloud;Steam Leaderboards	',
		genres: 'Adventure;Indie	',
		game_type: 'Indie;Adventure;Puzzle	',
		price: 3.99,
		description:
			'Bob has crashed on a strange planet lost a bunch of parts for his ship and above all is late for work!Find the lost parts and rebuild your ship along the way to solve challenging physics-based puzzles. You can build your ship any way you like in the ship builder â€“ try to find the coolest ship-design for the puzzle at hand! classbb_ulRebuild your ship any way You likeFind the lost parts and tools for Your ship â€“ Youâ€™ll need them to solve puzzles!25 Chapters of solid level design and clever puzzlesMany hours of replayability with secrets Achievements Leaderboards and more	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/46000/header.jpg?t=1447352831	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Avencast: Rise of the Mage	',
		publisher: 'Meridian4	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action;Indie;RPG	',
		game_type: 'RPG;Action;Action RPG	',
		price: 6.99,
		description:
			'In a world of wizardry wonder and untold mystery you must undertake some of the most diverse quests to hone your skills in spell casting weaponry and melee combat. Your martial skills are soon put to the test as demonic monsters descend upon Avencast turning the academy into a state of chaos and destruction. . .Armed with countless combat moves and spells and a vast arsenal of equipment you must uncover the source of this evil by vanquishing an onslaught of enemies. Treachery and deceit reveal themselves as the vicious army threatens Avencastâ€™s very existence. Amidst the mayhem an astonishing truth unfolds which will forever change the battle scarred Wizard.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/46410/header.jpg?t=1511293818	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Swarm Arena	',
		publisher: 'Dedication Games	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Steam Achievements;Partial Controller Support;Steam Leaderboards	',
		genres: 'Action;Casual;Indie	',
		game_type: 'Indie;Casual;Action	',
		price: 2.89,
		description:
			'Get ready for a brand new experience! Take control of a virtual organism develop your moves and become one with the swarm â€“ then the game has only just begun. Swarm Arenaâ€™s fresh and deep gameplay is a journey from relaxing aesthetics over mind-blowing action to pure tactics. Be fast. Be precise. Or simply enjoy the experience..Play it YOUR way. .<h2Key features:<h2..Brand new gameplay experience.Ranked online multiplayer battles.2 independent gameplay modes.5 unique A.I.s.Evolutionary learning A.I..Multiplayer battles on a single PC.Unlockable rewards.15 achievements.Adaptive music.Customizable rules.Global leaderboard.Multiple mouse & generic gamepad support.Beautiful visuals. .	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/46600/header.jpg?t=1447352835	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Ironclads: Schleswig War 1864	',
		publisher: 'Strategy First	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Strategy	',
		game_type: 'Strategy;Naval	',
		price: 34.95,
		description:
			"The Danish government wanted to annex the duchy of Schleswig to the Danish kingdom while the Prussian government for internal political and strategic reasons wanted Schleswig to finally became a part of Germany..A key element of Denmark's war strategy was the blockade of Germany's Baltic sea ports thereby disrupting German overseas trade and hindering Prussian naval operations in support the Prussian army. The supreme commander of the Prussian army insisted that the navy attempt to breach the blockade.	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/46760/header.jpg?t=1447353826	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Book of Legends	',
		publisher: 'iWin	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Hidden Object	',
		price: 6.99,
		description:
			'If the Book of Legends should ever fall into the wrong hands the consequences could be devastating. Follow Zoe and Charleston Black as they follow the clues found in the long forgotten Book of Legendsâ€¦clues that lead them on a hunt for one of the worldâ€™s most mysterious legends of all Excalibur! Is it real? And can they find it before their enemies do? Find out as you unravel a mystery that could change the balance of power forever..Key features:..Travel 5 countries.Captivating adventure.6 different modes of game-play.	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/47130/header.jpg?t=1447353297	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'LIMBO	',
		publisher: 'Playdead	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Full controller support;Steam Cloud	',
		genres: 'Adventure;Indie	',
		game_type: 'Indie;Platformer;Puzzle	',
		price: 6.99,
		description: "Uncertain of his sister's fate a boy enters LIMBO	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/48000/header.jpg?t=1478090357	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Hotel Dashâ„¢ Suite Successâ„¢	',
		publisher: 'PlayFirst	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Time Management	',
		price: 4.99,
		description:
			"When Quinn's new travel business hits a snag she needs Flo's patented elbow grease to help renovate and run hotels all over DinerTown&trade;! As Flo you will deliver guest's luggage drop off room service and provide extra towels blankets and anything else they may need to stay happy and leave big tips! Along the way you will use your tips to decorate and restore each hotel back to its original charm. Watch out for the mysterious mishaps and accidents that threaten your progress! Do you have what it takes to keep everyone happy or will the mysterious troublemaker halt your success?.Over 90 upgrades to purchase for bigger tips!.50 levels to try and master.5 hotels to renovate for Quinn's guests.5 VIP rooms to decorate to make guests happier.5 new DinerTown characters..	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/49000/header.jpg?t=1447353015	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Magic: The Gathering - Duels of the Planeswalkers 2012	',
		publisher: 'Wizards of the Coast LLC	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Co-op;Steam Achievements;Partial Controller Support;Steam Cloud;Stats;Steam Leaderboards	',
		genres: 'Strategy	',
		game_type: 'Card Game;Strategy;Trading Card Game	',
		price: 0,
		description:
			'All-new and redesigned Magic: The Gathering â€” Duels of the Planeswalkers 2012 takes last yearâ€™s massive hit game to even greater heights with better graphics more options and new challenges!.Face off against the AI or gather your allies for the new multiplayer format: Archenemy where you team up to take down a boss opponent. And if one of your fellow Planeswalkers drops out no problemâ€“the AI will drop in for uninterrupted action!.Featuring ten unique decks Duels of the Planeswalkers 2012 also lets you customize those decks. As you progress in the game you can enhance your deck by swapping in new unlockable cards!.Gather your allies. A challenge awaits.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/49470/header.jpg?t=1447354038	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Nimbus	',
		publisher: 'Noumenon Games	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Partial Controller Support;Steam Cloud;Stats;Steam Leaderboards	',
		genres: 'Indie;Racing	',
		game_type: 'Indie;Racing;Puzzle	',
		price: 5.99,
		description:
			'Nimbus is a unique combination of racing & puzzling. The player controls a craft with no means of directly propelling itself and needs to use whatever is scattered around the levels to acquire thrust and reach the goal. Traverse a world map with several distinct islands in order to recover your lost love. Light on story but heavy on gameplay Nimbus offers several hours of increasingly harder challenges..<h2Key features:<h2.Over 50 levels available on the main campaign.Unique game play that is easy to understand but hard to master.A varied blend of levels that requires a combination of skill & puzzle solving.Plenty of opportunity for optimizing how you approach each level in order to beat the best times.Several trails levels and ships to unlock.Loads of secrets & tricks	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/50000/header.jpg?t=1447353658	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Professor Fizzwizzle and the Molten Mystery	',
		publisher: 'Big Fish Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Puzzle	',
		price: 4.99,
		description:
			"While on a well deserved vacation Professor Fizzwizzle's investigation of a strange volcano has landed him in a Molten Mystery! Now it's up to you to master exciting new gadgets outwit the Bat-Bots and vanquish a truly cunning villain! Can the professor count on you to help? With over 200 levels spanning 3 difficulties (kids regular and advanced) Professor Fizzwizzle can keep an entire family occupied for hours of skill-building and problem-solving!..Create your own levels..More than 200 levels..3 difficulty settings...	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/50910/header.jpg?t=1447352875	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Hidden Expedition: Amazon	',
		publisher: 'Big Fish Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual;Indie	',
		game_type: 'Casual;Indie;Hidden Object	',
		price: 6.99,
		description:
			'Big Fish Games Studios takes you on an Adventure into the stunning world of the Amazon with the Hidden Expedition team in search of a missing professor. A tattered map referencing the legendary Beetle Temple is your only clue as you begin your adventure deep into the Amazon Rain forest. Explore cities temples and ruins while unlocking the secrets of an ancient yet advanced civilization. This adventure is the largest yet for the Hidden Expedition team and the discovery of the Beetle Temple is just the beginning. classbb_ulUnlock the greatest secret of the AmazonMore scenes puzzles and adventureIntricately woven mini-games	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/50920/header.jpg?t=1531501873	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Mystery Case Files: Return to Ravenhearstâ„¢	',
		publisher: 'Big Fish Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual	',
		game_type: 'Casual;Hidden Object;Puzzle	',
		price: 6.99,
		description:
			'Emma`s soul is free. But her ghost has delivered a dire warning: evil still lurks in Ravenhearst Manor. Big Fish Games Studios takes you deep inside the cursed estate in Mystery Case Files: Return to Ravenhearstâ„¢ the thrilling sequel. Experience Ravenhearst`s spectral halls as never before with new immersive adventure-style gameplay and an epic original soundtrack. Feel the floorboards creak as you move from room to room solving puzzles and seeking out clues in over 150 detailed scenes. classbb_ulThe biggest MCF game to dateImmersive gameplay	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/51000/header.jpg?t=1531503530	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Atlantis Sky Patrol	',
		publisher: 'Big Fish Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual;Indie	',
		game_type: 'Casual;Indie;Match 3	',
		price: 6.99,
		description:
			'This frenetic marble-popping adventure puts you in charge of how fast each level will end. Knock out doomsday devices on each of the 100 levels in the game by matching marble colors in sets of three. To finish off the device and move on to the next round simply destroy the cleverly-placed static orbs that continually allow additional chains to fill the track. Easy to learn but difficult to master this puzzler is nearly impossible to put down!..More than 100 challenging levels..Earn coins for unique upgrades..Features 2-player option..Fun mini-game between levels..Stunning art deco visuals...	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/51030/header.jpg?t=1447352865	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'DrawnÂ®: The Painted Tower	',
		publisher: 'Big Fish Games	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements;Steam Trading Cards	',
		genres: 'Adventure;Casual	',
		game_type: 'Adventure;Casual;Point & Click	',
		price: 6.99,
		description:
			'Enter the world of Drawn and unravel the secrets of the Painted Tower. Overcome challenging puzzles on your quest to save Iris. A curse has locked each floor of the tower and only the most creative adventurer can find a way through. Enter lush painted worlds and meet fantastic characters who will help youâ€¦and sometimes try to stop you on your quest through the dream world of The Painted Tower.Beware! Darkness approaches the tower. Can you save her in time?<h2 classbb_tagKey features:<h2 classbb_ulA cinematic adventureExplore enchanted worldsSolve elaborate and cunning puzzles!	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/51060/header.jpg?t=1531436636	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Doc Clock: The Toasted Sandwich of Time	',
		publisher: 'Stickmen Studios	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements	',
		genres: 'Adventure;Casual;Indie	',
		game_type: 'Casual;Indie;Adventure	',
		price: 2.99,
		description:
			"Fallen off a cliff? Burning in lava? Just had your latest invention crushed by a frozen polar bear? Avoid all this with Doc Clock's amazing Time Slider. Enjoy the first Doc Clock time travelling adventure! Invent almost anything out of everything you find from catapults to incredible flying machines. Travel through time as Doc Clock battles mad misguided robots to save his beloved cat and invent the perfect toasted sandwich machine. <h2 classbb_tagKey features:<h2 classbb_ulBuild amazing contraptions from scattered objectsRewind time with the Docâ€™s incredible TimesliderHarbour Sackâ€™s sarcastic wit as he helps the Doc on his journeyComplete all the achievements of varying difficulties in order to master the game	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/57800/header.jpg?t=1447352833	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Turba	',
		publisher: 'Binary Takeover	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements;Stats;Steam Leaderboards	',
		genres: 'Casual;Indie	',
		game_type: 'Casual;Indie;Music	',
		price: 3.49,
		description:
			'Turba provides a gameplay experience unlike any you have encountered before. Load in music from your PC and combo blocks to your favorite tunes in this unique new twist on the â€œmatch-3â€ style game!..The blocks on the game board generate and move to the beat of the song you choose. Clear blocks in time with the beat and make expert combos to maximize your score while you compete in online leaderboards for any and every song you play....Key features: ..Three modes of play.Seven Special Powers to change up how you play.Online leaderboards for each song you play.Supported file types: Mp3 Music CDs Flac Ogg Wma Ape Mpc.Last.fm Scrobbling support.In-depth stat tracking and unlock system.20 Steam achievements 50+ Steam stats Steam leaderboards..	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/58400/header.jpg?t=1447353254	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Power of Defense	',
		publisher: '4sdk	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Steam Achievements	',
		genres: 'Strategy;Indie	',
		game_type: 'Strategy;Indie;Tower Defense	',
		price: 6.99,
		description:
			'Power Of Defense provides a new strategy and defense mix game experience. Defend your world from upcoming evil and oil-smelling robots. They come from the platform between both parallel universes you have to fight on by producing own robots to send them back to their native world. You as the last hero on earth and the only one your government could find (and pay) only you can save the world..<h2Key Features:<h2..3 different arenas.Highly replayable game levels.13 individual robots.Combine robots to extend strategical possibilities.Upgrade robots to increase their force.Play against other people in Multiplayer Mode.NEW! Levels with double bridges and traps.NEW! 9 bonus levels added in singleplayer.NEW! 7 levels added in multiplayer..	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/60700/header.jpg?t=1447353405	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Fractal: Make Blooms Not War	',
		publisher: 'Cipher Prime Studios	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Indie;Casual	',
		game_type: 'Casual;Indie;Puzzle	',
		price: 4.99,
		description:
			'From the award-winning team that brought you Auditorium and Pulse: Volume One comes <bFractal<b an enthralling music puzzler experience. Push Combo and Chain your way through a pulsing technicolor dreamscape all the while expanding your consciousness at 130 BPM..With 3 unique and challenging game modes amazing HD-Quality graphics and an ever-evolving soundtrack Fractal is sure to destroy what little productivity you have left..<h2Key Features:<h2..3 Distinct modes of play: Campaign Puzzle and Arcade.All-new Musicbox Audio Engine composes music based on how you play.Colors! Hexagons! Particle Effects! Ridiculous Callouts!.	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/61310/header.jpg?t=1447354040	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Riven: The Sequel to MYST	',
		publisher: 'Cyan Worlds	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure;Casual	',
		game_type: 'Adventure;Puzzle;Point & Click	',
		price: 3.99,
		description:
			"Prepare to enter a world &quot;torn asunder&quot; by timeless unresolved conflicts--a world of incomparable beauty intrigue and betrayal. Prepare to go to Riven. Journey through vast awe-inspiring landscapes where clouds sit nestled in a deep blue sky and the rolling sea waters shimmer from bright morning sunlight. But be forewarned: nothing is quite as it seems.Reclusive beings and mysterious creatures populate the land. Deep dark secrets lay hidden at every turn. Your utmost powers of observation and reason are required to complete a most elusive task. You must let Riven become your world. Only then may the truth be discovered and a world saved. Riven stands as a story for all time a story that evokes a sense of awe wonder and profound purpose. Prepare to go to Riven--a world unlike any you've ever known.	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/63610/header.jpg?t=1540235503	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Myst: Masterpiece Edition	',
		publisher: 'Cyan Worlds	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure;Casual	',
		game_type: 'Adventure;Point & Click;Puzzle	',
		price: 3.99,
		description:
			'Enter a world where nothing is as it seems... and adventure knows no bounds! .Journey to an island world eerily tinged with mystery... where every rock every scrap of paper every fleeting sound holds a clue to an ancient mystery. Enter if you dare a starkly beautiful landscape shrouded in intrigue and injustice. Only your wits and imagination hold the power to unlock the shocking betrayal of ages past! .Lose yourself in fantastic virtual exploration now more compelling than ever in the stunning MystÂ® Masterpiece Edition. Breathtaking graphical realism blurs the line between fantasy and reality challenging your wits instincts and powers of observation like never before. The fantasy beckons... can you resist its call?	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/63660/header.jpg?t=1540235431	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'BIT.TRIP BEAT	',
		publisher: 'Gaijin Games	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Partial Controller Support;Steam Cloud;Steam Leaderboards	',
		genres: 'Action;Casual;Indie	',
		game_type: 'Indie;Rhythm;Music	',
		price: 6.99,
		description:
			"From gameplay to visuals to music and imagination BIT.TRIP BEAT is inspired by classic games in every way. Get sucked into a whole new world of sight and sound as you juggle beats and ride the vibe in this modern look at the beginning of it all.BIT.TRIP BEAT for Steam is a brand-new version of the critically adored console game and it marks the beginning of CommanderVideo's epic journey of the soul with: classbb_ulClassic Gameplay! Brain-Melting Visuals! Crazy Boss Battles! Intriguing Cutscenes! A Rockinâ€™ Chiptune-Inspired Soundtrack! Special Chiptune Guest Star Bit Shifter!Download BIT.TRIP BEAT and start your own BIT.TRIP today!Key features: classbb_ulLeaderboards! Achievements! Brand New Easy Mode! Ultra-Precise Razer Sixense Controller Motion Controls!	",
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/63700/header.jpg?t=1478114726	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Kaptain Brawe: A Brawe New World	',
		publisher: 'Libredia Entertainment	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click;Sci-fi	',
		price: 3.99,
		description:
			"Step into the world of interstellar travel where Space Pirates lurk at every corner. Kaptain Brawe a Space Police officer will embark on a journey filled with quests conspiracies and general chaos as he follows the lead of two kidnapped alien scientists. Set in a beautiful hand drawn alternative 19th century world Kaptain Brawe's cartoon appearance will suit younger as well as mature players who enjoy games filled with humorous storyline and challenging puzzles.<h2 classbb_tagFeatures:<h2 classbb_ulReveal the greatest conspiracy in the Space AgeTravel and explore 4 planetsPlay with 3 different characters (Brawe Luna and Danny)Two game-play modes: Hard-Core and CasualMeet the space pirates Interstellar government secret agents and more srchttps:media.st.dl.bscstorage.netsteamapps65080extrasBrawe_Laren.png?t1529671756 crossoriginanonymous	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/65080/header.jpg?t=1529671756	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'The Bureau: XCOM Declassified	',
		publisher: '2K	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Full controller support;Steam Trading Cards;Steam Cloud	',
		genres: 'Action	',
		game_type: 'Action;Tactical;Sci-fi	',
		price: 14.99,
		description:
			'The year is 1962 and the Cold War has the nation gripped by fear. Â A top-secret government unit called The Bureau begins investigating a series of mysterious attacks by an enemy more powerful than communism. Â As agent Carter call the shots pull the trigger and lead your squad in a gripping third-person tactical shooter set within a covert war to protect humanity from an otherworldly enemy.Â 	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/65930/header.jpg?t=1533334450	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'VVVVVV	',
		publisher: 'Terry Cavanagh	',
		platforms: 'PC	',
		categories: 'Single-player;Full controller support	',
		genres: 'Action;Indie	',
		game_type: 'Platformer;Indie;Great Soundtrack	',
		price: 3.99,
		description:
			"Help! Everyone has been teleported away randomly! As the heroic Captain Viridian it's up to you to find your friends bring them back to safety and save the universe!VVVVVV is a platform game all about exploring one simple mechanical idea - what if you reversed gravity instead of jumping?The game is designed not to artificially gate your progress. In VVVVVV there are no locks no power-ups no switches nothing to stop you progressing except the challenges themselves.<h2 classbb_tagKey features:<h2 classbb_ulElegant minimalistic level design. Challenging fast and fun gameplay. Frequent checkpoints mean you never have to replay challenges you've already beaten. Over half an hour of chiptune music by composer Magnus PÃ¥lsson. Special game modes including time trials and a no death mode.	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/70300/header.jpg?t=1555981211	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Crazy Taxi	',
		publisher: 'SEGA	',
		platforms: 'PC	',
		categories: 'Single-player;Partial Controller Support	',
		genres: 'Action;Racing	',
		game_type: 'Racing;Action;Arcade	',
		price: 5.59,
		description:
			'Hey hey come on over and have some fun with Crrrrrazy Taxi! Barrel through traffic packed streets hurdle off parking garages and Crazy Combo your way to Crazy Money in a wild frantic race to scare up the most fares. In Crazy Taxi time is money and only the Craziest Cabbies come out victorious.<h2 classbb_tagFeatures<h2 classbb_ulTwo Game Modes â€“ Arcade Mode and Original Mode for a variety of gameplay and 16 Mini Games to hone your taxi driving skills. Extra large hills for extra long hang time Parked transporters with conveniently angled ramps Tall cliffs and parking garages with steep drops Painfully slow buses and cable cars to frustrate and annoy Occasional deep sea exploration opportunities!	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/71230/header.jpg?t=1521806866	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'SEGA Bass Fishing	',
		publisher: 'SEGA	',
		platforms: 'PC	',
		categories: 'Single-player;Partial Controller Support	',
		genres: 'Simulation;Sports	',
		game_type: 'Simulation;Sports;Fishing	',
		price: 5.59,
		description:
			'Explore the exciting sport of Bass fishing! Based on the Dreamcast hit motor out to eight different fishing locations to catch the biggest and baddest Bass possible! Choose between fourteen different lures and compete in four tournaments. Start off as an amateur and work your way up to the pros in the Masters Classic tournament. Get hooked!<h2 classbb_tagFeatures<h2Hone your fishing skills: classbb_ulVariable weather and water conditions will affect the fishesâ€™ behaviour so youâ€™ll need to master a wide variety of special lures and angling techniques to catch the one that got away. Are you fishing in the morning? Try a surface lure. Is it hot out? Better drop to cooler water.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/71240/header.jpg?t=1522061802	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Space Channel 5: Part 2	',
		publisher: 'SEGA	',
		platforms: 'PC	',
		categories: 'Single-player;Multi-player;Co-op;Partial Controller Support	',
		genres: 'Action	',
		game_type: 'Rhythm;Action;Female Protagonist	',
		price: 5.59,
		description:
			'Hey there SpaceCats â€“ meet Ulala the grooviest reporter in the galaxy! Sheâ€™s got attitude and sheâ€™s got moves. Help her get the scoop on an unidentified Dance Troupe that has captured thousands of people and is forcing them to dance! Will you be able to free the hostages and uncover whoâ€™s behind the kidnappings all while bustinâ€™ some groovy moves to sweet beats? <h2 classbb_tagFeatures<h2Battle It Out With Funky Rhythms classbb_ulShow Ulalaâ€™s enemies whoâ€™s boss by swankily executing stylish dance moves that destroy robots free hostages and just look plain groovy. Test out your rhythm today!	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/71260/header.jpg?t=1522077186	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Closure	',
		publisher: 'Eyebrow Interactive	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Full controller support;Steam Trading Cards;Steam Cloud;Commentary available	',
		genres: 'Indie	',
		game_type: 'Puzzle;Platformer;Indie	',
		price: 6.99,
		description:
			'In the dark and mysterious world of Closure only what you see exists. Manipulate lights to phase objects in and out of reality in this multiple-award-winning puzzle game. Play as a strange spider-like demon who explores the stories of three human characters through beautiful eerie environments such as a decrepit factory a murky forest an abandoned carnival and the strange surreal realm that connects them together.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/72000/header.jpg?t=1477770595	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Gemini Rue	',
		publisher: 'Wadjet Eye Games	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Steam Trading Cards;Steam Cloud	',
		genres: 'Adventure;Indie	',
		game_type: 'Point & Click;Adventure;Sci-fi	',
		price: 6.99,
		description:
			'Azriel Odin ex-assassin arrives on the rain-drenched planet of Barracus. When things go horribly wrong he can only seek help from the very criminals he used to work for.Meanwhile across the galaxy a man called Delta-Six wakes up in a hospital with no memory. Without knowing where to turn or who to trust he vows to escape before he loses his identity completely.As fate brings these two closer together we discover a world where life is cheap identities are bought and sold and a quest for redemption can change the fate of a whole galaxy.<h2 classbb_tagKey Features:<h2 classbb_ulOver 60 hand-drawn backgroundsA moody film noir atmosphereControl both Azriel and Delta-SixAn innovative investigation systemA gripping sci-fi mysteryDVD-style commentary track	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/80310/header.jpg?t=1447354936	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'The Blackwell Legacy	',
		publisher: 'Wadjet Eye Games	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements;Steam Trading Cards	',
		genres: 'Adventure;Indie	',
		game_type: 'Point & Click;Adventure;Indie	',
		price: 3.99,
		description:
			"When Rosa Blackwell's only relative dies after twenty years in a coma she thinks the worst is over. Â This all changes when Joey Mallone a sardonic ghost from the 1930s blows into her life and tells her that she is a medium. Â Whether they like it or not it is up to them to cure the supernatural ills of New York in this critically-acclaimed series of point-and-click adventure games. .When three NYU students kill themselves one after the other nobody thinks that a sinister force is at work. Â Nobody but fledgling medium Rosa Blackwell and her new spirit guide Joey Mallone. Â It's trial by fire as they set these troubled spirits to rest.	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/80330/header.jpg?t=1447355127	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Blackwell Unbound	',
		publisher: 'Wadjet Eye Games	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements;Steam Trading Cards	',
		genres: 'Adventure;Indie	',
		game_type: 'Adventure;Point & Click;Indie	',
		price: 3.99,
		description:
			'The year is 1973. The sound of a lone ethereal saxophone drifts over the Roosevelt Island promenade while a series of accidents plague a midtown construction site. The citizens of Manhattan take no notice of these events let alone think they are connected. . .Embittered medium Lauren Blackwell and her spirit guide Joey Mallone are the only ones who believe that there is anything strange going on and they are the only ones who can stop an enigmatic killer from striking again...	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/80340/header.jpg?t=1471190539	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Blackwell Convergence	',
		publisher: 'Wadjet Eye Games	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements;Steam Trading Cards	',
		genres: 'Adventure;Indie	',
		game_type: 'Point & Click;Adventure;Indie	',
		price: 3.99,
		description:
			'A new film opens to rave reviews despite its bloody history. A beautiful uptown office remains unoccupied despite its prime location. A downtown artist berates himself for selling out while a Wall Street investor congratulates himself on a job well done. Just normal life in the big city? Or is somthing more sinister binding these events together Bizarre connections are a dime a dozen for the Blackwell family but just how far back to they go? Â Medium Rosa Blackwell and her spirit guide Joey Mallone are about to find out.	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/80350/header.jpg?t=1483440497	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Blackwell Deception	',
		publisher: 'Wadjet Eye Games	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements;Steam Trading Cards	',
		genres: 'Adventure;Indie	',
		game_type: 'Point & Click;Adventure;Indie	',
		price: 6.99,
		description:
			'Street psychics. Their blinking neon signs are everywhere promising love and wealth and happiness. They make a fortune preying on the gullible and milking them dry. So when these victims begin dying and leaving confused spirits behind it can only take a genuine psychic (and her wayward spirit guide) to clean up the mess. . .From seedy downtown nightclubs to penthouse apartments to a luxury yacht on the Hudson River Rosa and Joey will unearth the truth about the underground world of street psychics. Including some secrets that Joey would rather be left buried.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/80360/header.jpg?t=1471190469	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Sanctum	',
		publisher: 'Coffee Stain Publishing	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Co-op;Cross-Platform Multiplayer;Steam Achievements;Partial Controller Support;Steam Cloud;Steam Leaderboards	',
		genres: 'Action;Casual;Indie;Strategy	',
		game_type: 'Tower Defense;Strategy;FPS	',
		price: 7.19,
		description:
			'You think Tower Defense games are all about building? You thought wrong. Sanctum is not your average Tower Defense title. When the havoc starts you get to join the fray! As one of the worldâ€™s first First Person Shooter - Tower Defense games Sanctum has taken the best of both worlds to deliver an epic one-of-a-kind experience.<h2 classbb_tagKey Features:<h2 classbb_ulDonâ€™t just build towers. Build mazes!Your way or the highway? The Customization System lets you have it all!4-player co-op support; why double the trouble when you can quadruple it?87 Achievements Hidden Secrets &amp; Easter Eggs. Have meta with your metal!	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/91600/header.jpg?t=1514905404	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'DETOUR	',
		publisher: "Geoff 'Zag' Keene	",
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Online Multi-Player;Co-op;Steam Achievements;Steam Trading Cards	',
		genres: 'Indie;Strategy	',
		game_type: 'Strategy;Indie;Singleplayer	',
		price: 0.79,
		description:
			'A true test your wits and spatial reasoning. . .The goal of the game is simple: forge a path for your convoy of trucks to reach its destination but obtaining your goal often requires a mix of smart resource allocation clever route planning and strategic thinking. Your AI and human enemies will try to stop your progress with routes of their own. . .DETOUR sports endless amounts of unique strategies Adaptive AI opponents 5 distinct modes of play dozens of singleplayer maps unlockables online play an epic soundtrack and much much more!	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/92100/header.jpg?t=1545364420	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'SpaceChem	',
		publisher: 'Zachtronics	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Steam Cloud;Steam Leaderboards	',
		genres: 'Indie;Simulation	',
		game_type: 'Puzzle;Difficult;Programming	',
		price: 6.99,
		description:
			'Zachtronics is back with an ambitious new design-based puzzle game. Take on the role of a Reactor Engineer working for SpaceChem the leading chemical synthesizer for frontier colonies. Construct elaborate factories to transform raw materials into valuable chemical products! Streamline your designs to meet production quotas and survive encounters with the sinister threats that plague SpaceChem.<h2 classbb_tagKEY FEATURES:<h2 classbb_ulOver Fifty Mind-bending Puzzles!An original soundtrack by Evan Le Ny whose music was featured in The Codex of Alchemical Engineering!Twenty challenging achievements!	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/92800/header.jpg?t=1548803761	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Hector: Badge of Carnage - Full Series	',
		publisher: 'Telltale Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure;Casual	',
		game_type: 'Adventure;Point & Click;Casual	',
		price: 14.99,
		description:
			'Detective Inspector Hector â€“ the hard-nosed soft-bellied lawman of Clappers Wreake a town that took the â€œGreatâ€ out of Britain. Heâ€™s violent drunken and has a taste for all things criminal corrupt or smothered in curry.All 3 episodes available now - get the full season! classbb_ulEpisode 1 â€“ We Negotiate with Terrorists:When a hostage crisis erupts in the centre of Clappers Wreake Hector has to make a choice: carry out a terroristâ€™s demands or let innocent hostages die. Hectorâ€™s still on the fence.Episode 2 â€“ Senseless Acts of Justice:Hunting a psychopath Hector is pulled down a twisted trail of meat sin sleaze and more meat.Episode 3 â€“ Beyond Reasonable Doom:Can Hector escape his squalid demise and stagger back to Clappers Wreake to save it from extinction?	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/94620/header.jpg?t=1495053608	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'ibb & obb	',
		publisher: 'Sparpweed	',
		platforms: 'PC	',
		categories:
			'Multi-player;Co-op;SharedSplit Screen;Cross-Platform Multiplayer;Steam Achievements;Full controller support;Steam Trading Cards;Steam Cloud;Steam Leaderboards	',
		genres: 'Action;Adventure;Indie	',
		game_type: 'Co-op;Puzzle;Local Co-Op	',
		price: 8.99,
		description:
			'ibb &amp; obb is a two player cooperative game set in a puzzle filled world where gravity goes both up and down. You can only succeed by working closely together.Find a friend for some true local co-op couch fun or match up online.Fall up and jump down through 15 levels filled with double gravity puzzles and discover 8 hidden worlds that will test your new non-Newtonian skills to the maximum.All levels have their own unique music composed by Kettel known for his warm melodic electronica.<h2 classbb_tagKey Features<h2 classbb_ulLocal and online co-opWarm electronic soundtrack by KettelSteam achievements leaderboards multiplayer cloud saving and trading cardsSecret levels that will test your skills to the max	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/95400/header.jpg?t=1544780854	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'The Cat and the Coup	',
		publisher: 'Peter Brinson and Kurosh ValaNejad	',
		platforms: 'PC	',
		categories: 'Single-player;Partial Controller Support	',
		genres: 'Free to Play;Indie	',
		game_type: 'Indie;Free to Play;Cats	',
		price: 0,
		description:
			'In The Cat and the Coup you play the cat of Dr. Mohammed Mossadegh the first democratically elected Prime Minister of Iran. During the summer of 1953 the CIA engineered a coup to bring about his downfall. As a player you coax Mossadegh back through significant events of his life by knocking objects off shelves scattering his papers and scratching him. .The game situated within the traditions of Persian miniature art form and cold war foreign policy asks players to consider their connection to Iranian history. The Cat and the Coup is both about the relationship between the Western video game player and Mossadegh and by extension the United States and Iran. It lays a foundation for todayâ€™s critical question -- how do the people know when their democracy is threatened?	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/95700/header.jpg?t=1553475273	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Trauma	',
		publisher: 'Krystian Majewski	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure;Indie;Casual	',
		game_type: 'Indie;Adventure;Casual	',
		price: 4.39,
		description:
			'TRAUMA tells a story of a young woman who survives a car accident. Recovering at the hospital she has dreams that shed light on different aspects of her identity - such as the way she deals with the loss of her parents. TRAUMA lets you experience those dreams in an interactive way reminiscent of Point-and-Click Adventure Games. It builds upon this established formula by introducing a gesture-based interface real-time 3D technology for dynamic level layouts unique photographic visuals and a level design philosophy that focuses on creating a rich experience rather than an elaborate puzzle challenge. Combined with the unconventional story it is aimed to be a compact and deep game for a literate and mature audience.	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/98100/header.jpg?t=1447354498	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Hard Reset Extended Edition	',
		publisher: 'Good Shepherd Entertainment	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Partial Controller Support;Stats;Steam Leaderboards	',
		genres: 'Action;Indie	',
		game_type: 'FPS;Cyberpunk;Action	',
		price: 9.99,
		description:
			"In the only remaining human city of Bezoar Major Fletcher an Army Combat Veteran and soldier of the CLN is dragged into a conflict between two of mankind's greatest enemies. He is to discover that nothing is what it seems to be.Hard Reset is an action-packed single-player shooter for the PC. With over-the-top destruction loads of enemies great weapon variety and a beautifully realized cyberpunk setting Hard Reset is sure to shake up the shooter scene.<h2 classbb_tagKey features:<h2 classbb_ulA haunting cyberpunk dark sci-fi settingFast-paced old-school shooter gameplayHordes of enemies to destroyEpic boss fights A deep experience-based weapon upgrade systemHigh-fidelity graphics with full dynamic lightingExtensive use of physics and dynamic environments	",
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/98400/header.jpg?t=1505118773	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Renegade Ops	',
		publisher: 'SEGA	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Co-op;SharedSplit Screen;Steam Achievements;Full controller support;Steam Leaderboards	',
		genres: 'Action	',
		game_type: 'Action;Twin Stick Shooter;Top-Down	',
		price: 9.99,
		description:
			'Destruction just got awesome.In Renegade Ops you must defeat Inferno a madman intent on global domination. Destroy enemies across a range of stunning environments using a wide variety of vehicles. Players have the choice to fight alone in single player mode team up offline with two-player split screen or join the dynamic 4-player online co-op experience. Blast your way through enemy lines by working together or compete for achievements as you and your friends aim to top the online leader boards.<h2 classbb_tagFeatures<h2 classbb_ulSingle player campaign across varied luscious levels Four playable vehicles each with unique special weapons Two player split-screen co-operative play Up to four player online competitive co-op Level up your character to increase your weaponry Fight to top online leaderboards	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/99300/header.jpg?t=1522061011	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Garshasp: Temple of the Dragon	',
		publisher: 'Digital Dragon	',
		platforms: 'PC	',
		categories: 'Single-player;Partial Controller Support	',
		genres: 'Action;Indie	',
		game_type: 'Action;Indie;Hack and Slash	',
		price: 3.99,
		description:
			'The mighty mythological hero Garshasp travels into distant lands in search for the secrets hidden in the temple of the dragon unaware of the hidden dangers and creatures awaiting him in the cursed lands. You play as the mighty Garshasp in this hack and slash expansion pack for the original â€œGarshasp: The Monster Slayerâ€ game taking place before the original story.<h2 classbb_tagKey features<h2 classbb_ulDeep hack and slash combat system with various combo movesCinematic in-game camera following the epic journeyFantasy mythological world filled with ferocious monsters from ancient literature and Persian MythologyEpic environmentsMythology based story	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/99410/header.jpg?t=1496227377	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'NightSky	',
		publisher: 'Nicalis Inc.	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual;Indie;Strategy	',
		game_type: 'Indie;Platformer;Casual	',
		price: 6.99,
		description:
			'Nominated as a IGF Seamus McNally Finalist NightSky is an ambient action-puzzle game that offers a gameplay experience unlike any otherâ€”cerebral challenges fill uniquely designed picturesque worlds. The player must maneuver a sphere by using realistic physics to advance; each of these worlds is broken into different areas. The original soundtrack by experimental jazz musician Chris Schlarb will further heighten the surreal experience.<h2 classbb_tagKey features:<h2 classbb_ul2D platformpuzzle-based gameplayAdvanced 2D physics modelMultiple difficulties with unique topography11 massive levels each with expansive areas to exploreMultiple â€œvehiclesâ€ each with specific uses and dynamics physicsAdditional secrets and unlockables	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/99700/header.jpg?t=1466790646	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Vertex Dispenser	',
		publisher: 'Michael Brough	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Co-op;Cross-Platform Multiplayer;Steam Achievements;Steam Cloud;Stats	',
		genres: 'Action;Indie;Strategy	',
		game_type: 'Strategy;Action;Indie	',
		price: 6.99,
		description:
			'Vertex Dispenser is an abstract real-time strategy game with mathematical puzzle elements. Move around a geometric surface and lay claim to your territory. Protect it by capturing solid faces for defense. Manipulate the colours of your vertices to gain power for special abilities. Balance your time between attacking defending expanding and colouring to survive and defeat your enemies.<h2 classbb_tagKey Features:<h2 classbb_ulSingle-player campaign modeSingle-player puzzle modeTeam-based multi-playerCross-platform multi-player - Play with both your PC and Mac friends	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/102400/header.jpg?t=1447354189	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Storm in a Teacup	',
		publisher: 'Cobra Mobile	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements	',
		genres: 'Casual;Indie	',
		game_type: 'Indie;Casual;Platformer	',
		price: 2.99,
		description:
			"Take Storm on a wonderful adventure in his magical teacup. Storm's brother Cloud has created an amazing dream-like world for you to explore! Solve puzzles avoid pitfalls and beat the bad guys in this imaginative and unique platformer!<h2 classbb_tagKey Features:<h2 classbb_ulWonderful rich rewarding game-play with physics based puzzlesExplore and discover 50 magical levels5 Survival mode levels to compete againstCustomize in-game Storm character optionsRich gorgeous graphicsFull Joypad support	",
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/104020/header.jpg?t=1447355249	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Lume	',
		publisher: 'State of Play Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure;Casual;Indie	',
		game_type: 'Adventure;Indie;Point & Click	',
		price: 4.79,
		description:
			'Lume: An illuminating puzzle adventure!With a set built entirely out of paper and cardboard and sumptuously filmed Lume is a game with a style unlike any other.Power to your grandadâ€™s house has failed. Whatâ€™s more heâ€™s nowhere to be seen. Immerse yourself in Lumeâ€™s photoreal world solve perplexing paper puzzles to help restore the power and uncover a deeper mystery behind the blackout. This game forms Part 1 of a larger ongoing story.	',
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/105100/header.jpg?t=1447354205	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Critical Mass	',
		publisher: 'Manic Game Studios	',
		platforms: 'PC	',
		categories: 'Single-player;Steam Achievements	',
		genres: 'Casual;Indie	',
		game_type: 'Casual;Indie;Puzzle	',
		price: 1.59,
		description:
			'Critical Mass is an action puzzle game that takes traditional match 3 and brings it into the world of 3D. We combine fast addictive game play with strategy to create a new and innovative experience.<h2 classbb_tagKey features:<h2 classbb_ulFast Addictive Gameplay4 Unique Game ModesOnline Leaderboards &amp; Ranking SystemsAchievements &amp; Skillpoint RewardsAccessible to EveryoneExciting Colorful Art StyleGreat Music &amp; Sound Effects.	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/105300/header.jpg?t=1447354297	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Ms. Splosion Man	',
		publisher: 'Microsoft Studios	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Co-op;SharedSplit Screen;Steam Achievements;Full controller support;Partial Controller Support;Steam Cloud;Steam Leaderboards	',
		genres: 'Action;Indie	',
		game_type: 'Action;Indie;Platformer	',
		price: 6.99,
		description:
			'You got a problem? Yo sheâ€™ll splode it. At the Big Science after-party celebrating the capture of Splosion Man a spill of champagne shorts out the safety protocols on the splosionatrix and from it emerges Ms. Splosion Man. The latest creation from Twisted Pixel Games the creators of Splosion Man The Maw and Comic Jumper Ms. Splosion man comes packed with fifty levels of single player and a separate fifty level co-op multiplayer campaign. Expanded map features tons of unlockables ghost replays and countless other improvements make this the definitive edition for any splosion connoisseur.	',
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/105420/header.jpg?t=1447357495	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: "Tobe's Vertical Adventure	",
		publisher: 'Secret Base	',
		platforms: 'PC	',
		categories:
			'Single-player;SharedSplit Screen;Steam Achievements;Partial Controller Support;Steam Cloud;Steam Leaderboards	',
		genres: 'Action;Adventure;Indie	',
		game_type: 'Indie;Action;Adventure	',
		price: 0.79,
		description:
			"Tobe's Vertical Adventure is an indie retro platformer starring Tobe the overly devoted gamer who's been forced on a treasure hunt by his materialistic crush Nana. The big headed duo will travel back and forth in the crumbling caves in search of treasures while rescuing fluffy animals making you scream kawaii ne~ along the way. With 2 unique characters and a total of 4 islands and 16 levels to explore Tobe's Vertical Adventure shall bring you back to the 16-bit era..<h2Key features:<h2..Hours of classic platforming action through 16 levels across 4 islands .Play as Tobe or Nana each with a unique storyline and move sets.Co-op Mode with a friend as both Tobe and Nana.16 bit graphical retro goodness.Experience the story through cutscenes and unlock the collectable soundtracks and artbook.	",
		rating: 1,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/105700/header.jpg?t=1447354389	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Breath of Death VII	',
		publisher: 'Zeboyd Games	',
		platforms: 'PC	',
		categories: 'Single-player;Full controller support	',
		genres: 'RPG;Indie	',
		game_type: 'RPG;Indie;JRPG	',
		price: 0,
		description:
			'Steam Big Picture hrefhttp:store.steampowered.combigpicture srchttps:steamcdn-a.akamaihd.netsteamapps108500extrascheck_it_out.pngAbout the GameResurrect the classic era of RPGs with the retro parody RPG Breath of Death VII: The Beginning. Join Dem the Skeleton Knight Sara the ghost historian Lita the vampire techie and Erik the zombie prince as they explore an undead world in search of the secrets of the past. Laugh! Cry! Laugh some more!. <h2Key features:<h2. . Old school RPG style mixed with modern design sensibilities!. Fast-paced turn based combat!. 4-6 hour quest with multiple game modes & difficulty levels for added replay value.. Easy to understand branching character customization system with frequent LV-Ups.. Multi-character unite techniques and combo break system for added depth!. .	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/107300/header.jpg?t=1447354366	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Legend of Fae	',
		publisher: 'Endlessfluff Games	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Casual;Indie	',
		game_type: 'Indie;Casual;Female Protagonist	',
		price: 6.99,
		description:
			"Sea Cross Island was a quiet haven just off the mainland but recently strange things have been happening! Mysterious creatures known as Fae have started appearing and are wreaking havoc. A young girl named Claudia is thrust into adventure as she searches for her missing uncle amongst the chaos. It's a dangerous journey but she's not without friends. Four elementals are drawn to her aid as Claudia finds out that sheâ€™s actually a sorceress! Embark on a journey to discover the secret behind the mysterious Faery Gates.<h2 classbb_tagKey features:<h2 classbb_ul50 + levels Upgrade customization Cute Monsters! Active time puzzle combat! Boss Battles!	",
		rating: 5,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/109200/header.jpg?t=1447354420	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Fowl Space	',
		publisher: 'Pixelante Game Studios	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Action;Indie	',
		game_type: 'Action;Indie;Memes	',
		price: 3.99,
		description:
			'A heroic rooster sets forth on a ridiculous space adventure to DESTROY THE SUN! Unfortunately for him a legion of lingerie-loving Vikings has turned it into their headquarters and theyâ€™re big fans of fried chicken. Full of high tech weaponry constant non sequitur terrible gaming humor and a wanton disregard for anything wholesome; Fowl Space is a crazy journey youâ€™ll never forget... to say the least...<h2 Key Features<h2..5 insane weapons including exploding kittens unspecified white goo and a killer whale flail..5 stages of complete and utter randomness in the center of the sun..9 challenge levels that are homages to other awesome indie games..Terrible gaming humour and relentless abuse of memes throughout....	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/109500/header.jpg?t=1447355433	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Neverwinter	',
		publisher: 'Perfect World Entertainment	',
		platforms: 'PC	',
		categories:
			'Multi-player;MMO;Co-op;Steam Trading Cards;In-App Purchases;Includes level editor	',
		genres: 'Adventure;Free to Play;Massively Multiplayer;RPG	',
		game_type: 'Free to Play;MMORPG;RPG	',
		price: 0,
		description:
			'NEW CONTENT hrefhttps:steamcommunity.comlinkfilter?urlhttps:www.arcgames.comengamesneverwinternewsdetail11144803-patch-notes%3A-version%3A-nw.110.20190411b.6 relnoopener srchttps:steamcdn-a.akamaihd.netsteamapps109600extrasNW_Steam_20190415_M16_Content-Update_609x215_EN.jpg?t1556096221 About the Game srchttps:steamcdn-a.akamaihd.netsteamapps109600extrasSteamProductPage_609x1900.jpg?t1556096221	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/109600/header.jpg?t=1556096221	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: "Monaco: What's Yours Is Mine	",
		publisher: 'Pocketwatch Games	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Co-op;SharedSplit Screen;Cross-Platform Multiplayer;Steam Achievements;Full controller support;Steam Trading Cards;Steam Workshop;Steam Cloud;Steam Leaderboards;Includes level editor	',
		genres: 'Action;Adventure;Casual;Indie;Strategy	',
		game_type: 'Co-op;Stealth;Indie	',
		price: 10.99,
		description:
			"Monaco: What's Yours Is Mine is a single player or co-op heist game. Assemble a crack team of thieves case the joint and pull off the perfect heist. classbb_ulThe Locksmith: Blue-collar infiltration expertThe Lookout: She can see and hear everything... a natural leaderThe Pickpocket: A hobo with a monkey and a penchant for crimeThe Cleaner: A silent psychopath... Jack The Ripper in pinkThe Mole: Big and dumb... likes to tunnelThe Gentleman: He doesn't always wear a disguise but when he does he looks fantasticThe Hacker: Armies of viruses shut down security... a modern day warlockThe Redhead: Manipulative and murderous... a lady always gets what she wantsPlay with up to four people online or on the same screen. Compete with others via daily leaderboards. Find out why it won the 2010 IGF and has been described by PCGamer as &quot;one of the best co-op games of all time.&quot;	",
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/113020/header.jpg?t=1529598648	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Costume Quest	',
		publisher: 'Double Fine Productions	',
		platforms: 'PC	',
		categories:
			'Single-player;Steam Achievements;Steam Trading Cards;Partial Controller Support;Steam Cloud	',
		genres: 'Adventure;Casual;RPG	',
		game_type: 'RPG;Adventure;Comedy	',
		price: 6.99,
		description:
			"Costume Quest is a Halloween adventure from Tim Schafer's Double Fine Productions. In this charming role-playing game choose your hero and trick-or-treat through three beautiful environments full of Double Fine humor and story. Complete quests build your party and collect costumes along the way that allow you to transform into powerful champions and take down the evil Repugians. This heroic holiday tale will capture the imaginations of kids and kids-at-heart.Continue the Costume Quest adventure with the Grubbins on Ice DLC pack included free in the PC version! Face new enemies while collecting additional quests costumes battle stamps and creepy treat cards. Help the monsters overthrow Araxia to bring peace back to Repugia!	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/115100/header.jpg?t=1479167596	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Iron Brigade	',
		publisher: 'Double Fine Productions	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Co-op;Steam Achievements;Full controller support;Captions available;Steam Cloud;Steam Leaderboards	',
		genres: 'Action;Strategy	',
		game_type: 'Tower Defense;Action;Mechs	',
		price: 10.99,
		description:
			"Join The Mobile Trench Brigade and protect humanity from the evil Monovision menace in this Tower Defense Shooter from Tim Schafer's Double Fine Productions. Use a combination of mobile firepower and stationary defenses to turn the tide of war in our favor. Customize your trench with thousands of possible loadouts. March side-by-side with allies from around the world as you fight your way through Europe Africa and the Pacific. . .After defeating the monovision threat across Europe Africa and The Pacific continue your service in the mobile trenches with Iron Brigade: Rise of the Martian Bear. Face Vladâ€™s most horrific new Monovision Constructs in a brand new Martian Campaign. Unlock over 80 new pieces of loot to battle the Tubes in 4 defense missions 2 survival missions and an all new Boss mission!	",
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/115120/header.jpg?t=1479171014	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: "Nancy DrewÂ®: Shadow at the Water's Edge	",
		publisher: 'HeR Interactive	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Adventure	',
		game_type: 'Adventure;Point & Click;Mystery	',
		price: 5.19,
		description:
			'Nancy Drew heads for Japan where sheâ€™s staying at a traditional ryokan (inn) for a little R&amp;R with Bess and George but when reports of a vengeful ghost start scaring away the guests Nancyâ€™s vacation takes a turn for terror! Itâ€™ll be up to you as Nancy Drew to uncover the secret that lies beneath the surface before the ghost can take its revenge!<h2 classbb_tagKey features:<h2 classbb_ulPlay as Nancy Drew and investigate a haunting at a traditional Japanese inn.3D animated characters each with a secret to protect.Immerse yourself in Japanese culture by learning about origami tea ceremonies calligraphy. Take pictures of possible evidence and play games on your cell phone.Be prepared for the scariest Nancy Drew game in the series.	',
		rating: 2,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/200080/header.jpg?t=1524079594	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Oil Rush	',
		publisher: 'Unigine Corp.	',
		platforms: 'PC	',
		categories:
			'Single-player;Multi-player;Cross-Platform Multiplayer;Steam Achievements;Steam Cloud;Stats;Steam Leaderboards	',
		genres: 'Indie;Strategy	',
		game_type: 'Strategy;Indie;RTS	',
		price: 5.59,
		description:
			'Oil Rush is a naval strategy game that takes place in a world where nuclear war has melted the ice caps changing the face of the planet forever. Oil Rush offers unique gameplay avoiding micromanagement of every single unit while still providing full control over all important aspects of strategy and economy.Capture upgrade and defend floating production platforms and oil rigs. Discover new technologies and send squads of naval and air units into the battle!<h2 classbb_tagKey Features:<h2 classbb_ulState-of-the-art visuals powered by UNIGINE engineDynamic and fun gameplay â€“ furious enemies massive battles rampant attacks!16 missions of single-player campaign from the half-flooded jungles to northern seas15 maps for multiplayer battles each with multiple winning strategiesMultiplayer over LAN and Internet	',
		rating: 3,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/200390/header.jpg?t=1447355261	',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Geneforge 1	',
		publisher: 'Spiderweb Software	',
		platforms: 'PC	',
		categories: 'Single-player	',
		genres: 'Strategy;RPG;Indie	',
		game_type: 'RPG;Indie;Strategy	',
		price: 0,
		description:
			'Geneforge is an Indie fantasy role-playing game the first game in the five-part Geneforge Saga. It features an enormous world the ability to create your own army of lethal totally obedient creatures and a cunning enemy AI with foes who can go on patrols stalk you and run for help. .Geneforge has a huge and open storyline. You have the freedom to choose your own path and decide how the story will turn out. You can fight the evil overlord or you can join him. You can help the peasants or you can torment them. You can be the bold hero or you can just try to get away. No matter what you choose Geneforge offers an enormous adventure with plenty of replay value.	',
		rating: 4,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/200960/header.jpg?t=1447354714	',
		website: 'http://www.dayofdefeat.com/',
	},
];

const gameData = () => GameData.bulkCreate(games);
module.exports = gameData;
