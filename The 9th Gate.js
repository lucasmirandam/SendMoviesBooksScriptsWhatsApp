async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

	
THE NINTH GATE 

A Screenplay by Roman Polanski, John Brownjohn and Enrique Urbizu 

Based on a novel by Arturo Perez-Reverte 

1. TELFER HOUSE: LIBRARY INT/NIGHT 

ANDREW TELFER, a scrawny seventy-year-old, is writing a note at 
his desk in one corner of a big, book-lined room. Dangling from 
the central chandelier is a noose. A chair stands beneath it. 

TELFER looks up for a moment. Blankly, he eyes a framed 
photoportrait on his desk: a beautiful, thirty-something blonde 
returns his gaze with an enigmatic smile. 

He stops writing and folds the sheet, scrawls something on the 
back, and leaves it on the desk. Then he walks to the centre of 
the room and climbs on the chair. He puts his head through the 
noose and tightens it around his neck. 

He kicks away the back of the chair, but it doesn't fall. 
Frantically, he tries again: this time the chair topples over. 
The chandelier squeaks as it swings on its hook, but it holds. 
Fragments of plaster come raining down. 

TELFER's neck isn't broken: he starts to choke. His feet perform 
a convulsive dance in mid-air only six inches above the floor; 
one of his shoes comes off. 

The CAMERA leaves the dying man and MOVES IN on the bookshelves. 
To the accompaniment of choking sounds, it PANS across the 
serried rows of volumes until it reaches a gap that shows where 
one of them has been removed. 

The choking sounds cease. 

The CAMERA enters the black void left by the missing book. 

Absolute, abysmal DARKNESS. 

3. MANHATTAN APARTMENT INT/DAY 

The Manhattan skyline seen through a picture window. Above it, 
reflected in the windowpane, the face of an OLD WOMAN seated with 
her back to the room. Her expression is impassive and self-
absorbed, her twisted mouth suggests she's a stroke victim. She 
seems quite uninvolved in the action behind her. 

CORSO (O.S.) An impressive collection. You have some very rare 
editions here. Sure you want to sell them all? 

We now discover the speaker, BOB CORSO: a tall, lean, rather 
unkempt man in his 30's. Steel-rimmed glasses, crumpled old tweed 
jacket, worn cords, scuffed brown oxfords. He could almost be a 
shabby university teacher if it weren't for the street-wise glint 
in his eye. 

He replaces a book on a shelf. Standing beside him is the Old 
Woman's SON, a middle-aged man with a puffy red face. Her 
DAUGHTER-IN-LAW looks on, one hand cupping her elbow, the fingers 
of the other playing avidly with her lower lip. The SON is 
cuddling a large Scotch on the rocks like it's an integral part 
of his anatomy. His tone is too lugubrious to be true. 

SON: They're no use to Father, not anymore -not now he's passed 
away. His library was his own little world. Now it's just a 
painful memory for Mother here. 

DAUGHTER-IN-LAW: Unbearably painful. 

CORSO glances at them over the top of his glasses, then at the 
OLD WOMAN. It's clear that the OLD WOMAN's true source of pain is 
their rapacious desire to convert her late husband's library into 
hard cash. 

CORSO picks up a notebook, adjusts his glasses with an 
instinctive, habitual movement, taps the notebook with his 
pencil. 

CORSO: Well, at a rough, preliminary estimate, you have a 
collection here worth around two hundred thousand dollars. 

DAUGHTER-IN-LAW (almost jumps): Two hundred thousand?! 

CORSO : Or thereabouts. 

He smiles sweetly at the DAUGHTER-IN-LAW. 

The OLD WOMAN continues to stare blankly at her reflection in the 
window. Behind her, the SON sidles up to CORSO, who indicates the 
volumes in question. 

SON: How much were you thinking of... 

CORSO: Hmm... I couldn't go higher than four grand -- four-and-a-
half tops. (takes an envelope from his shoulder bag and starts 
peeling off some bills) 

4. MANHATTAN APARTMENT HOUSE CORRIDOR INT/DAY 

CORSO strides briskly along the corridor toward the elevator with 
the canvas bag slung from his shoulder. He's grinning to himself. 
The bag is obviously heavier than it was. 

The elevator doors open just as he's about to press the button. 
He almost collides with a bespectacled, briefcase-carrying man in 
a three-piece suit and bow tie (WITKIN) -- a cross between an 
intellectual and a business executive. 

WITKIN (caustically): You here? You didn't waste much time. 

CORSO: Hello, Witkin. There's a small fortune in there. (smiles 
sardonically) Help yourself. 

WITKIN (eyes CORSO's beg suspiciously): You're a vulture, Corso. 

CORSO: Who isn't in our business? 

WITKIN: You'd stoop to anything. 

CORSO brushes past him into the elevator, turns and pats his 
shoulder bag. 

CORSO: For a 'Quixote' by Ybarra? You bet I would. 

WITKIN (indignantly): Unscrupulous, thoroughly unscrupulous! 

CORSO (thumbs the elevator button): Good hunting! 

The doors close on WITKIN's indignant face. 

5. BERNIE'S BOOKSTORE EXT/INT/DAY 

A sign says "CLOSED." CORSO pushes open the door of an old 
fashioned semibasement bookstore -- 'BERNIE'S RARE BOOKS' -- and 
enters. He walks up to the counter and deposits his bag on it. 

BERNIE (O.S.): Witkin just called me. He's spitting blood. 

CORSO looks around. The voice came from ten feet up and three 
bookcases along. BERNIE FELDMAN, a man around CORSO's age with 
dark, curly hair receding at the temples, is perched at the top 
of a spiral staircase. 

CORSO: What's his problem? 

BERNIE (replacing some books): He says you're a double-dealing, 
money grubbing bastard. He says he had that sale tied up, and now 
you've queered his pitch. 

CORSO (grins to himself): He should be quicker off the mark. 

The spiral staircase judders as BERNIE starts to descend. 

CORSO goes over to a wall cupboard and opens it. An assortment of 
bottles and glasses come to light. 

CORSO (cont.): May I? 

BERNIE: Your valuation was way over the odds it's brought those 
people out In a rash. They're now asking twice what the books are 
worth. 

CORSO, still grinning, pours himself a slug of Scotch. BERNIE 
reaches the ground. 

BERNIE (cont.): He's talking about suing you. Well, let's face 
it: you screwed him. That's what it's called. 

CORSO: I know what it's called. 

BERNIE comes up close. 

BERNIE: He also says you snaffled the 'Don Qui ... 

He breaks off as CORSO produces the four volumes of the 
'Quixote', bends over to examine them, whistles appreciatively. 

BERNIE: (cont.): The Ybarra 'Don Quixote', 1780, four volumes. 
Fantastic! (opens one) Sonofabitch, you're the best in the 
business. Definitely. 

CORSO: And the most expensive. (smiles slyly) That client of 
yours, the Swiss, is he still interested in this edition? 

BERNIE smiles back, then redirects his attention to the books. 

BERNIE: Sure, but Witkin will blow a fuse. I told him I had 
nothing to do with this operation. 

CORSO knocks back his Scotch in one. Extracting a crumpled 
cigarette from the pocket of his overcoat, he sticks it in his 
mouth and lights it. 

CORSO: Nothing except your ten percent. 

BERNIE: : Twenty. The Swiss is my client, remember. 

CORSO (shakes his head): No deal. 

BERNIE: Fifteen. (cynically) For my children's sake. 

CORSO: You don't have any. 

BERNIE: I'm still young. Give me time. 

CORSO (expels a lungful of smoke, unmoved): Ten. 

6. BALKAN BUILDING EXT/DUSK 

A taxi pulls up outside an opulent building downtown. CORSO gets 
out, dodges a persistent beggar, and enters. The sign above the 
entrance reads: 'BALKAN PUBLICATIONS'. 

7. BALKAN BUILDING: LOBBY INT/DUSK 

CORSO nods to the SECURITY GUARD at the desk and makes hit way 
across the lobby to a door at the back. Beside it stands an 
easel-mounted announcement: 'Demons and Medieval Literature, by 
Boris Balkan, Ph.D.' It's adorned with a medieval engraving 
depicting an Inquisition torture scene. 

8. BALKAN BUILDING: LECTURE ROOM INT/DUSK 

BORIS BALKAN, standing at a state-of-the-art lecturer's desk, is 
a bulky, imposing figure of a man around 50 years old. His thick 
gray hair is slicked back to reveal a domed forehead. The eyes 
beneath it radiate keen intelligence through a pair of heavy 
hornrims. He speaks in a deep, slow, almost monotonous voice, but 
with great authority. 

BALKAN: Relevant information may be found in Antoine Martin del 
Rio's 'Disquisitionum Magicarum', Louvain 1599, and earlier, in 
1580, in 'De la dＮonomanle des sorciers' by the Frenchman, Jean 
Bodin... 

His eyes flicker in the direction of the door as CORSO enters. 

CORSO's entrance has also been noted by a GIRL in jeans and white 
sneakers: childlike face, short hair and green, feline eyes. 

He sits down in the same row, but on the other side of the aisle, 
settles himself in his chair and scans the AUDIENCE, most of whom 
are middle-aged and female. He gives the GIRL a cursory glance, 
then concentrates on BALKAN. 

BALKAN (cont.): Bodin was probably the first to attempt to 
establish a system - if the term system may be applied to the 
Middle Ages - for classifying the contemporary perceptions of 
evil. In Bodin we find one of the first definitions of the word 
'witch'. I quote: (cocks his head for a better look at the text) 
'A witch is a person who, though cognizant of the laws of God, 
endeavors to act through the medium of a pact with the Devil...' 

As BALKAN's lecture proceeds, CORSO's eyelids begin to droop. We 
PAN over the faces of the AUDIENCE (THE GIRL is still covertly 
observing CORSO). BALKAN's voice drones on, fades away. 

9. BALKAN BUILDING: LECTURE ROOM INT/NIGHT 

CLOSE on CORSO fast asleep. 

BALKAN (O.S.): I see you enjoyed my little talk, Mr. Corso. 

CORSO gives a start and opens his eyes. He takes a moment or two 
to focus on BALKAN, who's standing over him. Peering around 
through his steel-rimmed glasses, he sees that the lecture is 
over. The last of the AUDIENCE are filing out. We glimpse THE 
GIRL making her exit. 

CORSO: Did I snore? 

BALKAN: Nice of you to ask. No, not that I noticed. Shall we go? 

He gestures at the door with a cold and impassive air. CORSO gets 
to his feet. 

10. BALKAN BUILDING: LOBBY INT/NIGHT 

BALKAN walks swiftly across the lobby to the elevators with CORSO 
at his heels. They leave behind a buzz of conversation from 
members of the AUDIENCE who are still discussing the lecture. 

BALKAN: Don't you sleep nights? 

CORSO: Like a baby. 

BALKAN: Strange, I'd have bet a brace of Gutenberg Bibles you 
spend half the night with your eyes peeled. You're one of those 
lean, hungry, restless types that put the wind up Julius Caesar - 
men who'd stab their friends in the back... 

They reach the elevator. BALKAN presses a button and turns to 
CORSO, who yawns. 

BALKAN (cont.) Not, I suspect, that you have many friends, do 
you, Mr. Corso? Your kind seldom does. 

CORSO (calmly): Go to hell. 

BALKAN is unruffled by CORSO's discourtesy. The elevator doors 
open. He stands aside to let CORSO pass, then follows him in. 

11. BALKAN BUILDING: ELEVATOR INT/NIGHT 

BALKAN punches a code number on the elevator's digital keyboard 
With a subdued hiss, the elevator starts to ascend. 

BALKAN: You're right, of course. Your friendships don't concern 
me in the least. Our relations have always been strictly 
commercial, isn't that so? There's no one more reliable than a 
man whose loyalty can be bought for hard cash. 

CORSO: Hey, Balkan, I came here to do some business, not shoot 
the breeze. You want to expound your personal philosophy, write 
another book. 

BALKAN: You don't like me, do you? 

CORSO (shrugs): I don't have to like you. You're a client, and 
you pay well. 

The elevator reaches its destination, the doors open. 

12. BALKAN BUILDING: COLLECTION INT/NIGHT 

The elevator opens straight into a spacious room faced with black 
marble. The walls are bare save for a big, back-lighted 
photograph of a ruined castle overlooking a desolate valley. 

Two huge windows in the right-hand wall extend from floor to 
ceiling. Visible outside on the building's floodlit facade, 
gargoyles gaze out over the city with their monstrous heads 
propped on their claws. 

The centre of the room is occupied by a rectangular block of 
tinted glass resembling a big black monolith. Vaguely discernible 
through the glass are shelves filled with antique books in 
exquisite bindings. 

BALKAN leads CORSO over to the 'monolith' . He gestures at it 
proudly, soliciting admiration. 

BALKAN: Well? 

CORSO: Yup. 

BALKAN: You're privileged, Corso. Very few people have ever set 
foot in here. This Is my private collection. Some bibliophiles 
specialize in Gothic novels, others in Books of Hours. All my own 
rare editions have the same protagonist: the Devil. 

CORSO is impressed but does his best not to show it. 

CORSO: May I take a look? 

BALKAN: That's why I brought you here. 

He goes over to the 'monolith' and punches a keyboard on a 
control panel, gestures to CORSO to come closer. 

CORSO puts out his hand. Before he can touch the glass, it glides 
aside with a faint hum. He adjusts his glasses and glances at 
BALKAN, who looks on calmly. His eyes roam along the spines of 
the books. BALKAN comes and stands beside him. 

BALKAN (cont.): Beautiful, aren't they? That soft sheen, that 
superb gilding... Not to mention the centuries of wisdom they 
contain -- centuries of erudition, of delving Into the secrets of 
the Universe and the hearts of men... I know people who would 
kill for a collection like this. (CORSO shoots him a quick 
glance) The Ars Diavoli! You'll never see as many books on the 
subject anywhere else in the world. They're the rarest, the 
choicest editions in existence. It has taken me a lifetime to 
assemble them. Only the supreme masterpiece was missing. Come... 

He has accompanied CORSO on his tour of the collection. They come 
to the end of the 'monolith'. Gesturing to CORSO to follow him, 
BALKAN goes over to an ultramodern, brushed steel lectern 
standing beside one of the huge picture windows. 

As he approaches the lectern, CORSO briefly glimpses the sheer 
drop beyond the window, the twinkling lights of traffic passing 
in the street far below. 

Reposing on the lectern is a black book adorned with a gold 
pentagram. CORSO opens it at the title page, which displays the 
title in Latin and a pictorial engraving. 

CORSO (not looking at BALKAN) 'The Nine Gates of the Kingdom of 
Shadows... 

BALKAN: You're familiar with it? 

CORSO: Sure. Venice, 1623. The author and printer was Aristide 
Torchia, burned by the Holy Inquisition, together with all his 
works. Only three copies survived. 

BALKAN One. 

CORSO: The catalogs list three copies surviving in private 
ownership: the Fargas, the Kessler, and the Telfer. 

BALKAN: True. You've done your homework, but you're wrong 
nonetheless. According to all the sources I myself have 
consulted, only one is authentic. The author confessed under 
torture that he'd hidden one copy. Only one. 

CORSO: Well, three are known. 

BALKAN: That's the trouble. 

CORSO resumes his inspection of the book. 

CORSO: Where did you get it? 

BALKAN: I bought it from Telfer. 

CORSO (surprised): Telfer? 

BALKAN (looking out the window): Yes, he finally sold it to me. 
The day before he killed himself. 

CORSO: Good timing. 

BALKAN ignores this. CORSO turns the pages with care. He lingers 
over AN ENGRAVING OF A KNIGHT IN ARMOR RIDING TOWARD A CASTLE 
WITH A FINGER TO HIS LIPS as though enjoining the reader to 
silence. Below it is a caption. BALKAN draws closer and reads 
over CORSO's shoulder: 

BALKAN: Nemo pervenit qui non legitime certaverit. 

CORSO: You only succeed if you fight by the rules? 

BALKAN: More or less. Ever heard of the 'Delomelanicon'? 

CORSO: Heard of it, yes. A myth, isn't it? Some horrific book 
reputed to have been written by Satan himself. 

BALKAN: No myth. That book existed. Torchia actually acquired it. 

He returns to the window overlooking the sheer drop. Gazing down, 
he goes on: 

BALKAN (cont.): The engravings you're now admiring were adapted 
by Torchia from the 'Delomelanicon'. They're a form of satanic 
riddle. Correctly interpreted with the aid of the original text 
and sufficient inside information, they're reputed to conjure up 
the Prince of Darkness in person. 

CORSO: You don't say. 

He continues to turn the pages. 

BALKAN: Are you a religious man, Corso? I mean, do you believe in 
the supernatural? 

CORSO: I believe in my percentage. I also believe that books grow 
old and decay like the rest of us... Don't you get dizzy, 
standing there? 

BALKAN continues to stare down at the nocturnal cityscape. CORSO 
changes tack. 

CORSO (cont.): What the hell do you want from me, Balkan? 

BALKAN leaves the window and confronts him. 

BALKAN: I want you to go to Europe and play the detective. The 
other two copies are in Portugal and France. You must find some 
way of comparing them with mine: every page, every engraving, the 
binding - everything. I'm convinced that only one can be 
authentic, and I want to know which one it is. 

CORSO: Could be an expensive trip. 

BALKAN takes a folded check from his pocket and hands it to 
CORSO, who slips it into his breast pocket unexamined. 

BALKAN: That's to get you started. Spend what you need. 

CORSO: What if I find your copy's a forgery? 

BALKAN stares at him coldly for a moment. 

BALKAN: It's quite on the cards. 

CORSO seems mildly surprised. He looks at the book again, 
'listens' to the quality of the paper by putting his ear to the 
pages and riffling them with his thumb. 

CORSO: Really? It doesn't appear to be. Even the paper sounds 
kosher. 

BALKAN: Even so. There may be something wrong with it. 

CORSO continues to examine the book. He smiles ironically. 

CORSO: You mean the Devil won't show up? 

He shuts the book and replaces it on the lectern. 

BALKAN: Don't be flippant. (quotes) 'There are more things in 
heaven and earth than are dreamt of in your philosophy.' 

CORSO: Hamlet believed in ghosts, not demons. 

BALKAN: If all three copies turn out to be bogus or incomplete, 
your work will be done. If one of them proves to be genuine, on 
the other hand, I'll finance you further. 

CORSO stares at him, then unfolds the check and glances at the 
amount - a substantial sum, from the way he raises his eyebrows. 

BALKAN (cont.): 1 shall want you to get it for me at all costs, 
never mind how. 

CORSO: Never mind how sounds illegal. 

BALKAN: It wouldn't be the first time you've done something 
illegal. 

CORSO: Not that illegal. 

BALKAN: Hence the size of the check. Do a good job, and I'll 
double it. 

He picks up 'The Nine Gates' and holds it out. After a moment's 
hesitation, CORSO replaces the check in his pocket and takes the 
book. 

BALKAN (cont.): Be careful, Corso. 

CORSO: What do you mean? (indicates the book) With this? 

BALKAN: Just be careful. 

13. CORSO'S APARTMENT INT/NIGHT 

A diminutive kitchenette. CORSO, one hand wrapped around a 
Scotch, uses the other to remove a TV dinner from the freezer 
compartment of his refrigerator and insert it in a microwave. He 
shuts the door, sets the timer, and strolls out into the living 
room. 

A bleak bachelor pad: no pictures, ornaments or photographs, just 
books on every available shelf and surface. Against one wall, a 
desk with a computer on it. On the floor beside the desk, CORSO's 
shabby canvas bag. On the desk itself, 'The Nine Gates'. 

CORSO goes over to the desk. He stares down at the book for a 
long moment, meditatively sipping his Scotch. Then, without 
putting his glass down, he opens the book one-handed and idly 
turns a few pages, pauses at THE ENGRAVING OF THE KNIGHT IN ARMOR 
RIDING TOWARD THE CASTLE. 

We slowly MOVE IN until the screen is filled with an INSERT of 
the knight with his finger enigmatically raised to his lips. 

14. TELFER HOUSE: SITTING ROOM, LIBRARY INT/DAY 

CORSO, canvas bag on shoulder, is standing in the middle of a 
luxuriously furnished sitting room. The decor, which includes a 
smiling portrait of Andrew Telfer, is extremely opulent. 

CORSO is looking up at the portrait when the door opens. He turns 
to see LIANA TELFER on the threshold with a business card in her 
hand. His appreciation of her looks is evident. 

LIANA (whose photoportralt we saw in Scene 1) is a very sexy, 
thirtyish blonde with milky skin and a figure whose generous 
curves are far from concealed by her ultra chic black costume. 
She gives CORSO the once-over, then enters, closing the door 
behind her. 

CORSO: Mrs. Telfer? (gestures at the business card) Bob Corso. 
Sorry to trouble you at a time like this. 

LIANA comes over and sits down on a sofa, simultaneously 
motioning CORSO into the armchair that faces it over a coffee 
table. She puts his card down, crosses her lovely legs, and 
waits. 

CORSO sits down with his beg between his feet. Opening it, he 
produces 'The Nine Gates'. LIANA involuntarily stiffens at sight 
of it. 

CORSO (cont.): It would be very helpful, ma'am, if you could tell 
me what you know about this book. 

He holds it out. After a momentary pause, LIANA slowly reaches 
for the book, opens it at random, turns a page or two. She speaks 
with a slight French accent. 

LIANA (casually): Isn't this one of my husband's books? 

CORSO: Right. It was in his collection until very recently. He 
sold it to a client of mine. I'm trying to authenticate it. 

LIANA: He sold it, you say? How strange. It was one of his most 
treasured possessions. 

CORSO: He never mentioned the sale? 

LIANA is fractionally late in answering. CORSO spots her 
hesitation. 

LIANA: No. It's news to me. Who bought it? 

CORSO: A private collector. 

LIANA: May I know his name? 

CORSO: I'm afraid that's confidential. 

LIANA: I suppose he has a bill of sale? 

CORSO: No problem there. 

LIANA: Is this your job, authenticating rare books? 

CORSO: And tracking them down. 

LIANA (smiles): You're a book detective. 

CORSO (smiles back): Kind of. (pause) Do you recall when and 
where your husband acquired this book? 

LIANA: In Spain. We were vacationing at Toledo. Andrew got very 
excited -- paid a great deal of money for it. He was a fanatical 
collector. 

CORSO: So I gather. 

LIANA deposits 'The Nine Gates' on the coffee table and rises. 

LIANA: I'll show you. 

CORSO rises likewise. Then a thought strikes him: swiftly 
retrieving 'The Nine Gates' and his bag, he stows one in the 
other as he follows her undulating hips to a door at the far end 
of the room, which she opens. 

LIANA (cont.): Look. 

She walks on ahead into the library in which Andrew Telfer hanged 
himself. CORSO is still eyeing her delectable rear view. 

CORSO: Magnificent... 

Reluctantly, he drags his eyes away from LIANA and surveys the 
crowded shelves. 

CORSO (cont.): Really magnificent... 

He goes over to inspect the bookshelves. In passing he glances up 
at the chandelier, which is still hanging slightly askew. 

LIANA: Andrew used to spend many hours in here.Too many. 

CORSO: Did he ever try it out? 

He asks the question with an air of spurious innocence, looking 
around the room as he does so. LIANA frowns. 

LIANA: I don't understand. 

CORSO (cont.): The book -- did he ever use it to perform some 
kind of ritual intended to... well. produce a supernatural 
effect? 

LIANA: Are you serious? 

CORSO: Absolutely. 

LIANA: A Black Mass, you mean? 

CORSO: More or less. An attempt to conjure up the Devil. 

LIANA: Andrew was a trifle eccentric, Mr. Corso, but he wasn't 
insane. 

She gives a mournful shrug, every inch the recent widow. 

LIANA (cont.): It's true he'd been acting strangely those last 
few days. He shut himself up in here -- seldom emerged except for 
meals. 

She draws a deep breath, glances at the chandelier. 

LIANA (cont.): That morning I was woken by the screams of the 
maid: he'd hanged himself. (pauses, looks at CORSO) Whatever he 
was up to, I certainly can't see him chanting mumbo-jumbo or 
trying to raise the dead. 

The flippant tone of the last few words sounds rather forced. 
CORSO smiles at her faintly over his glasses, pats his shoulder 
bag. 

CORSO: The Devil, Mrs. Telfer. This book is designed to raise the 
Devil. 

15. TELFER HOUSE EXT/DAY 

CORSO crosses the forecourt to the street. A man with a MUSTACHE 
and a scarred face is leaning against a limo parked outside the 
house, smoking a small cigar. They eye each other briefly. 

CORSO reaches the sidewalk just as a cab sails past. He raises 
his hand too late to flag it down, looks around for another. 

The MUSTACHE's cellphone beeps. He reaches into the limo and 
picks up the receiver. 

16. REFERENCE LIBRARY INT/DAY 

The big reference library is divided up by freestanding 
bookshelves and has a gallery running around it at second-floor 
level. NUMEROUS READERS are occupying the rows of tables in the 
central area. 

CORSO is seated at one of the tables with the 'Nine Gates' in 
front of him. Beside it reposes a large catalog and his notebook. 
The 'Nine Gates' is open at the frontispiece, which displays the 
title - 'De Umbrarum Regni Novem Portis'- and the words 'Sic 
Luceat Lux' separated by an emblem consisting of A TREE ENCIRCLED 
BY A SNAKE DEVOURING ITS OWN TAIL. 

As we MOVE IN ON THE COILED SNAKE, we hear CORSO translating to 
himself in a low voice: 

CORSO (O.S.): Sic Luceat Lux ... Thus ... let the light ... 
shine... 

17. REFERENCE LIBRARY INT/DUSK 

Many of the tables are now deserted, and the shaded reading 
lights have been switched on. 

CORSO shuts a catalog and gets up to replace It in the wall of 
books behind his chair, runs his finger along a shelf till he 
comes to another fat tome and removes it. He's startled to see, 
framed in the resulting gap, the face of THE GIRL at Balkan's 
lecture: short hair, green, feline eyes. The face recedes and 
disappears. 

CORSO quickly rounds the end of the bookshelf: no sign of her. He 
looks both ways, but the aisles are deserted. Puzzled, he resumes 
his seat and opens the second catalog. Then, sensing that he's 
being watched, he swings around. 

Nothing outwardly suspicious, just two BESPECTACLED STUDENTS 
comparing notes In sibilant whispers. He looks right: a 
scattering of READERS. He scans the reading-room at large: still 
nothing untoward. 

He turns some pages in 'The Nine Gates', comes to AN ENGRAVING OF 
A NAKED WOMAN RIDING A SEVEN-HEADED DRAGON WITH A CASTLE ABLAZE 
IN THE BACKGROUND. He consults the second catalog, which displays 
a small reproduction of the same scene with text wrapped around 
it, and jots something down in his notebook. 

Wearily, he straightens and stretches, removes his glasses, 
pinches the bridge of his nose. As he Idly scans the reading 
room, his astigmatic vision gives him an unfocused glimpse of THE 
GIRL looking down at him from the gallery overhead. By the time 
he replaces his glasses, she's gone. 

18. CORSO'S APARTMENT HOUSE EXTINIGHT 

It's raining hard. CORSO trudges up the steps of his brownstone 
with the canvas bag on his shoulder and a bag of groceries In his 
arms. 

19. ELEVATOR INT/NIGHT 

CORSO rides the elevator up. 

20. CORSO'S APARTMENT HOUSE: PASSAGE, APARTMENT INT/NIGHT 

CORSO emerges from the elevator and walks down the passage to his 
door. He inserts his key in the mortice lock and tries to turn 
it. Nothing doing: It's unlocked already. 

Next, he inserts his key in the second lock and turns it. Not 
being double-locked, the door opens at once. It takes him a 
moment to digest the significance of this fact. 

Just then he hears a muffled crash from inside the apartment: a 
window has been flung open in a hurry. He bursts into the living 
room. No one there, but the light is on. Dropping his shoulder 
bag and groceries, he dashes into the bedroom. 

The window is open and the curtains are billowing out into the 
room. CORSO darts to the window, flings one leg over the sill and 
climbs out on the fire escape. 

21. FIRE ESCAPE, SIDE STREET. EXT/NIGHT 

Feet can be heard clattering down the fire escape. CORSO peers 
over the rail just in time to see a DARK FIGURE emerge into the 
side street beneath him and sprint off through the rain. 

CORSO (yells half-heartedly): Hey, you! 

He gives up and climbs back inside. 

22. CORSO'S APARTMENT INT/NIGHT 

CORSO scans the living room. The only immediate sign of the 
intruder's presence is that the chair has been pulled away from 
the desk and one of the drawers is open. 

CORSO pushes the chair back into place and shuts the drawer. 

23. BERNIE'S BOOKSTORE INT/DAY 

ON 'The Nine Gates' lying open on BERNIE's desk. He's reverently 
turning the pages with CORSO at his elbow. 

BERNIE: Son of a bitch... Where did you get this? 

CORSO: Balkan. He wants me to research it. 

BERNIE: Balkan owns a 'Nine Gates'? 

CORSO: Recently acquired from the late lamented Andrew Telfer. 

BERNIE: Trust Balkan. What does he need you for? I don't suppose 
he plans to sell it. 

CORSO: He wants me to compare it with the other two surviving 
copies in Portugal and France. I'm off to Europe. 

BERNIE: Compare it? 

CORSO: Yeah. Only one of the three is authentic, he says. 

BERNIE: Well, this one looks genuine enough. Must be worth a 
million. Jesus! Take good care of it. 

CORSO: That's why I'm here. I need you to stash it for me. I'm 
starting to see things. 

BERNIE stares at him. 

BERNIE: Like what? 

CORSO: Uninvited visitors, unfamiliar faces. I don't trust 
anyone, not even Balkan. (reflects for a moment) Come to think of 
it, I don't even trust you. 

BERNIE registers a mixture of affection and cynicism. 

BERNIE: That's mean, buddy. You know I'd never screw you without 
a damn good reason: money, women, business. Anything else, you 
can relax. 

CORSO taps the book with his forefinger. 

CORSO: You'll answer for this with your balls, Bernie. 

BERNIE (still engrossed): Sure, man, sure. You can castrate me 
personally. 

CORSO: I'll pick it up on my way to the airport. 

BERNIE: No problem. 

He continues to pore over the book, turns another page, reads 
aloud: 

BERNIE (cont.): 'Virtue lies vanquished', huh? These engravings 
are terrific. 

CORSO (leans over his shoulder): Or horrific, whichever. 

BERNIE nods absently. He smiles to himself with an air of 
enchantment. 

BERNIE (cont.): Beautiful, just beautiful... 

Visible through the bookstore's semi-basement windows, the legs 
of PASSERSBY accelerate as they scurry past: it has started to 
rain. A pair of MAN'S LEGS in dark slacks come to a halt. The 
butt of a small cigar falls to the sidewalk, the LEGS walk on. 
Two WHITE SNEAKERS come into view. They step on the butt and 
extinguish it. 

24. CORSO'S APARTMENT INT/NIGHT 

CORSO is in the bedroom, packing some articles of clothing and 
toiletries in a small Samsonlte suitcase lying open on the bed. 

The doorbell rings. Fractionally startled, CORSO straightens up, 
dumps a handful of socks on the bed and goes out into the lobby. 
He peers through the spyhole: LIANA TELFER is standing outside. 

CORSO pauses for a moment, thinking hard, then opens the door. 

LIANA: May I come in? 

CORSO, rather bemused, steps aside and ushers her in. 

CORSO: This way. 

He shows her Into the living room. LIANA starts to unbutton her 
coat. 

CORSO (cont.): Allow me. 

He helps her off with her coat and drapes it neatly over a chair. 
She's dressed to kill In a black, lowcut cocktail gown. 

LIANA: Thank you. 

CORSO: Sit down, won't you? 

LIANA sinks gracefully onto the sofa, taking in the decor of his 
bachelor apartment as she does so. 

LIANA: I've come to talk business. 

CORSO: Great. Everyone's talking business to me lately. 

LIANA takes a slim gold cigarette case from her purse, extracts a 
black Russian, and lights it with a gold Dupont. Meantime: 

LIANA: Yesterday, when you came to see me about that book, I was 
too surprised to react as I should have done. I mean, it really 
was one of Andrew's favorites. 

CORSO: So you said. 

LIANA: I'd like to get it back. 

CORSO: That could be a problem. 

LIANA: Not necessarily. it all depends. 

CORSO: On what? 

LIANA: On you. 

CORSO stares at her, absorbing the lines of her figure, the slim 
legs sheathed in sheer, black silk stockings. 

CORSO: I don't understand, Mrs. Telfer. The book isn't mine to 
dispose of. 

She sits back, showing off her superb legs to even better 
advantage. 

LIANA: You work for money, I take it? 

CORSO: What else? 

LIANA: I have a great deal of money. 

CORSO: I'm happy for you. 

LIANA: You could stage a theft. I'm sure your client is well 
insured. 

CORSO: I'm a professional, ma'am. 

LIANA: You're a professional mercenary. Mercenaries work for the 
highest bidder. 

CORSO: I make a living. 

LIANA (huskily): I could throw in a bonus. 

CORSO: This has happened before someplace. 

LIANA: I know. In the movies. 

CORSO: And she had an automatic in her stocking top. 

CORSO watches, mesmerized, as she slowly, very slowly, slides her 
skirt up her thighs to reveal the creamy flesh between her 
stocking tops and black lace garter belt. 

LIANA: No automatic. 

Just as slowly, she smooths her skirt down over her thighs. 

CORSO swallows hard. He rises and goes to his drinks corner, a 
shelf with an array of bottles and glasses on it. Over his 
shoulder: 

CORSO: Want one? 

LIANA: Why not? 

CORSO splashes some Scotch into two tumblers and carries them 
over to her. 

LIANA sits motionless for an instant, looking up at him. Then, 
very slowly, she stubs out her cigarette, extends the same hand, 
and fondles his crotch. 

CORSO, with the tumblers encumbering both his hands, can only 
stand there like a bird hypnotized by a snake. His Adam's apple 
bobs some more. 

Holding his gaze, LIANA withdraws her hand and rises. They're 
only inches apart now. She takes one of the tumblers and clinks 
it against CORSO'S, then drains it. CORSO, in a kind of trance, 
does likewise. 

Very deliberately, LIANA relieves him of his glass and puts it 
down on the table with hers. Then, cupping his face between her 
hands, she proceeds to eat him alive. 

CORSO responds. Re pulls up her skirt, she reaches for his zipper 
and yanks at it. He bears her backward and downward onto the 
sofa. Their bodies coalesce into a heaving mass. The gown slips 
down over 

LIANA's left shoulder, revealing a small tattoo in the shape of a 
snake devouring its own tail. 

25. CORSO'S APARTMENT INT/NIGHT 

ON LIANA's hand reaching across the floor for Corso's canvas bag. 
it gropes in the bag, then inverts it, spilling the contents: a 
couple of packs of Luckies, a notebook, an envelope full of 
bills, a Swiss Army knife, an expert's magnifying glass, some 
pencils, etc. 

We discover CORSO and LIANA on the floor, their clothing 
dishevelled. CORSO is lying back, still panting and sweating from 
his exertions, LIANA is sitting up. 

LIANA: Well, where is it? 

CORSO Where's what? 

LIANA Don't fuck with me, Corso. 

CORSO: I thought that's what we were doing. 

LIANA's eyes narrow. Then, with an animal cry, she goes for his 
face with her nails and teeth. 

CORSO turns his head away just in time and scrambles to his feet, 
pulling up his trousers. LIANA, beside herself with fury, flies 
at him with both hands extended like claws. 

He manages to grab her wrists and immobilize them, so she sinks 
her teeth in his chest. 

With an agonized yell, CORSO releases her wrists, clasps his 
chest and staggers back - hardly a dignified proceeding, because 
he's hobbled by the trousers that have slumped around his ankles. 

LIANA looks around wildly for a weapon of some kind, catches 
sight of the Scotch bottle and seizes it by the neck. 

CORSO, one hand holding his trousers at half mast, the other 
raised in supplication, comes shuffling toward her. 

CORSO: Hey, look, be reasonable... 

Unmoved, LIANA raises the bottle and smashes it over his head. 

26. CORSO'S APARTMENT INT/NIGHT 

CORSO recovers consciousness, gingerly feels his aching head. 
Some blood has trickled down his face. He surveys the room, which 
is in chaos and has obviously been ransacked. 

He goes into the bathroom and inspects himself in the mirror, 
takes a hand towel and gingerly dabs his scalp. 

Holding the towel to his head, he returns to the living room, 
where he picks up the phone and punches out a number. We hear a 
recorded announcement: 

BERNIE (V.O.): Hi, this is Bernie's Rare Books. I'm not available 
right now. If you want to leave a message, please speak after the 
beep... 

CORSO (into phone): Bernie, you there? Bernie? Pick up! 

No response. He replaces the receiver. 

27. BERNIE'S BOOKSTORE EXT/NIGHT 

CORSO, bag on shoulder, is lurking in a doorway across the street 
from the bookstore. The place looks silent and deserted, but a 
dim glow indicates that a light must be on somewhere inside. 

CORSO quits the doorway and hurries across the street. He walks 
down the steps to the door and tries the handle. The door opens. 

28. BERNIE'S BOOKSTORE INT/NIGHT . 

Only Bernie's desk light is on. No sign of Bernle himself. CORSO 
listens intently, looks up at the top of the spiral staircase, 
which is in shadow, calls in a low voice: 

CORSO: Bernie? 

No response. He listens some more: nothing but the sound of a 
passing car. 

He makes his way cautiously along the bookcases and rounds a 
corner, then stops short with a look of horror on his face. 

BERNIE has been lashed upside down to the handrail of the spiral 
staircase. His mouth and eyes are open, and his battered face is 
streaked with blood. 

CORSO (cont.): Jesus Christ! 

He puts out a hand toward BERNIE, but the man is so obviously 
dead that he withdraws it. He looks around in an involuntary, 
apprehensive way. Then, satisfied that he's alone, he starts to 
climb the staircase. Once past BERNIE's corpse, which he 
studiously avoids touching, he climbs faster. The staircase 
creaks and sways. 

Reaching the third tier of bookshelves, he presses a hidden 
button. With a faint click, a panel springs open to disclose a 
recess filled with books. 

CORSO expels a deep breath. There it is, safe and sound: 'The 
Nine Gates'. He looks down at BERNIE. 

CORSO: Thanks, man... I'm sorry... 

29. AIRLINER INT/DAY 

CORSO, ensconced in a window seat, is moodily gazing out at some 
passing cloud-castles. The sun is setting. 

30. SPANISH AIRPORT INT/NIGHT 

The brightly illuminated arrivals hall is thronged with 
PASSENGERS in transit. 

COP.SO, wearing his overcoat and carrying his suitcase, threads 
his way through them with the canvas bag on his shoulder. Weary 
and unshaven, he stares straight ahead with an abstracted 
expression, adjusts his glasses. 

31. TOLEDO STREET, ALLEYWAY EXT/DAY 

CORSO's footsteps echo as he walks, bag on shoulder, along one of 
Toledo's narrow medieval streets. Very few people to be seen. The 
sun is shining brightly, but there's a strong wind blowing. 

Rounding a corner, CORSO heads down an alleyway flanked by 
scaffolding swathed in protective netting and blue tarpaulins. 
it's completely deserted. No sound but that of canvas billowing 
in the wind like a ship's sails. He consults a street sign, turns 
another corner. 

He reaches a doorway leading to an inner courtyard, bumps into a 
BOY who comes running out. We hear the strident cries of a woman. 

BOY: S!, si, mama!!! 

A flight of steps in one corner of the courtyard leads down to 
the basement. CORSO descends them and stops outside a door. A 
grimy window beside it serves to display some old books and 
religious prints. The sign on the door reads HERMANOS CENIZA 
RESTAURACION DE LIBROS. Below it: 'On parle Fran㌢is' and 
'English spoken'. CORSO opens the door, which creaks. 

32. CENIZA BROS. WORKSHOP INT/DAY 

CORSO enters. A gaunt, bent-backed old man (PEDRO CENIZA) with a 
pair of glasses perched on the end of his big nose looks up from 
an old hand press. Everything about him is as gray as the 
cigarette ash that rains down on his clothes and the books he's 
working on. He's a chain-smoker. 

PEDRO: Senor. 

CORSO: Buenas tardes. 

PEDRO: Buenes tardes. 

PABLO (O.S.) Buenas tardes. 

CORSO turns to see another old man (PABLO CENIZA) surface from 
behind some stacks of paper. His resemblance to PEDRO - bent 
back, big nose, spectacles - is such that they can only be twins. 
PABLO wipes his inky hand on a rag before shaking CORSO'S. PEDRO 
follows suit. 

CORSO hesitates briefly, taken aback by this dual apparition. 
PEDRO and PABLO look him up and down with their keen, twinkling 
little eyes. Their movements are slow and serene, their 
expression carries a hint of mockery, and they often exchange 
knowing smiles. They're so in sync that they communicate by means 
of glances and finish off each other's sentences. 

CORSO: You speak English? 

They nod simultaneously. He produces 'The Nine Gates' from his 
shoulder bag. 

CORSO (cont.): I'd appreciate your opinion on this. 

PEDRO takes the book with tremulous hands. PABLO quickly clears 
away some parchments on the workbench to make room for it. 

Some ash from PEDRO's cigarette falls on the cover. 

PABLO clicks his tongue and blows it off. 

PABLO (reprovingly): What a habit for a bookbinder! (smiles at 
CORSO) 'The Nine Gates...' A superb edition. Very rare. 

PEDRO (opens it): The Telfer copy. 

CORSO: You used to own it, right? 

PEDRO: We used to, yes. 

PABLO: We sold it. 

PEDRO: We sold it when the opportunity presented itself. it was 
too... 

PABLO: ... too good to miss. An excellent sale. 

PEDRO: An excellent buy - impeccable condition. 

PABLO: Impeccable. You are the present owner? 

CORSO: A client of mine. 

PABLO (over his glasses): I would never have believed she would 
part with it. 

CORSO: She? 

PABLO (without looking up): Senora Telfer. 

CORSO reaches into his overcoat pocket and extracts a crumpled 
cigarette. He's raising it to his lips when he stops short, 
produces the equally crumpled pack and offers it to PEDRO, who 
has just discarded his butt. 

PEDRO helps himself to a Lucky, breaks off the filter and jams it 
in his mouth. CORSO lights both of them. 

CORSO 1 understood it was Mr. Telfer that bought it. 

PABLO: He paid for it. 

PEDRO: It was the senora who made him buy it. He did not seem 
particularly... (glances at PABLO) 

PABLO: ..interested. 

PEDRO has finished examining the text. He looks at the spine. 

PEDRO: A superb specimen. 

CORSO (hesitates briefly): Could it be a forgery? 

PEDRO (suspiciously, almost indignantly) A forgery? (turns to 
PABLO) You heard that, Pablo? 

PABLO wags his finger reprovingly in CORSO's face. 

PABLO: I took you for a professional, senor. You speak too 
lightly of forgeries. 

PEDRO: Far too lightly. 

PABLO: Forging a book is expensive. Paper of the period, the 
right inks.... (makes a dismissive gesture) Too expensive to be 
profitable. 

PEDRO and PABLO assess the effect of their words on CORSO, who 
digests them. 

CORSO: I'm aware of all that, but could some part of it be 
forged? Restorers have been known to replace missing pages with 
pages taken from another copy of the same edition. Have you never 
done that yourselves? 

The old men look at each other, then turn to CORSO 
simultaneously. PEDRO, looking flattered, nods. 

PEDRO: Of course it can be done. 

PABLO: It requires great skill, naturally, but yes, it can be 
done. 

CORSO: Couldn't that be the case here? 

PABLO: What makes you ask? 

CORSO: My client wishes to satisfy himself of the book's 
authenticity. 

The brothers eye each other over their glasses. CORSO adjusts his 
own. 

CORSO (cont.) : His name is Balkan. Boris Balkan of New York. 

PABLO and PEDRO exchange another glance. CORSO detects the hint 
of a smile that passes between them. 

PEDRO: All books have a destiny of their own. 

PABLO: Even a life of their own. Senor Balkan is a noted 
bibliophile. He's no fool. He must know this book is authentic. 

PEDRO: We know it. 

PABLO: So must he. 

PEDRO: This book was with us for years. 

PABLO: Many years. 

PEDRO: We had ample opportunity to examine it thoroughly. The 
printing and binding are superb examples of 17th century Venetian 
craftsmanship. 

He picks up the book and riffles the pages under CORSO's nose. 

PEDRO (cont.): Finest rag paper, resistant to the passage of 
time! None of your modern wood pulp! 

PABLO: Watermarks, identical shades, ink, type faces... If this 
is a forgery, or a copy with pages restored, it's the work of a 
master. 

PEDRO: A master. 

CORSO contemplates the brothers with a smile. 

CORSO: Did you study the engravings? They seem to form a kind of 
riddle. 

PEDRO and PABLO reopen the book and look at the engravings. 

PABLO: Well, yes... (another glance at PEDRO) Books of this type 
often contain little puzzles. 

PEDRO: Especially in the case of such an illustrious 
collaborator. 

CORSO looks at PEDRO with sudden interest, then at the book, then 
back at PEDRO. 

CORSO: Collaborator? 

PEDRO shrugs, PABLO refocuses on CORSO. 

PEDRO: You cannot have proceeded very far with your research. 
Come, look closely. 

He takes a magnifying glass and holds it over one of the 
engravings, which shows A HERMIT WITH TWO KEYS IN HIS HAND AND A 
DOG AND A LANTERN BESIDE HIM. 

A microscopic inscription can be detected in the bottom right 
corner. 

CORSO bends over it, looking mystified. PEDRO grows impatient. 

PEDRO (cont.): Don't you see? Only seven of the engravings were 
signed by Aristide Torchia. 

CORSO: And the other two? 

PEDRO: This is one of them. Look. 

CORSO peers through the magnifying glass once more. 

We see the INSERT 'Invenit L.F.' 

CORSO: 'L.F.'? Who's that? 

PEDRO: Think. 

CORSO: Lucifer? 

PEDRO and PABLO chuckle heartily. 

PEDRO: You're a clever man, senor. Torchia was not alone when 
they burned him alive. 

CORSO: But that's absurd! You don't honestly believe... 

PEDRO: The man who wrote this did so in alliance with the Devil 
and went to the stake for it. Even Hell has its heroes, senor. 

CORSO looks from one to the other, trying to figure this out. 

33. TOLEDO ALLEYWAY EXT/DAY 

CORSO walks back along the narrow alleyway with the canvas-
covered scaffolding. He glances over his shoulder. Not a soul in 
sight. The blue canvas flaps in the wind, the scaffolding creaks 
and groans. He walks on. 

He hears a sudden rending sound, looks back and up. 

There's little time to react: the scaffolding has come away from 
its mountings. it's starting to buckle and fall out into the 
street. 

Desperately, he breaks into a run. Behind him, collapsing like a 
house of cards, the mass of canvas and metal gains on him as he 
sprints for the end of the alley, summoning up all his energy for 
a final burst. 

The last of the scaffolding hits the ground only inches behind 
him. He looks back at the tangled mass that has only just failed 
to engulf him. 

34. TRAIN EXT/NIGHT 

A train speeds through the darkness. 

35. TRAIN: DINING CAR INT/NIGHT 

The dining car is deserted save for CORSO and a STEWARD, who is 
lolling against the kitchen bulkhead at the far end. 

CORSO, with a coffee cup and a brandy glass at his elbow, has 
'The Nine Gates' lying open in front of him at THE ENGRAVING OF 
THE HERMIT WITH THE KEYS, DOG, AND LANTERN. There's some 
cigarette ash trapped between the pages. Smiling faintly, he 
blows it away. Then he reaches into his bag for his magnifying 
glass, pushes up his steel-rimmed specs, and screws the glass 
into his eye. He examines the engraving at close range. 

We see again the INSERT of the inscription 'Invenit L.F.' 

CORSO straightens up and removes the glass from his eye. He 
finishes his brandy and beckons the STEWARD. 

36. TRAIN: CORRIDOR INT/NIGHT 

The clickety-clack of wheels on tracks swells in volume as CORSO, 
bag on shoulder, crosses the sliding floorplates that connect one 
car to another. 

He enters the next corridor and stops short: there's a lone 
figure leaning against a window, looking out: it's THE GIRL we 
saw at Balkan's lecture: short dark hair, catlike green eyes, 
slim, athletic figure, jeans and white sneakers. 

CORSO sets off along the corridor. When he reaches her, they eye 
each other's reflections in the windowpane. 

THE GIRL (softly): Hi. 

CORSO pauses to look at her, unable to make up his mind. 

CORSO: I've seen you before, haven't I? 

THE GIRL: Have you? 

CORSO: Yes, somewhere. 

A brief silence. 

THE GIRL: Are you traveling in this car? 

CORSO: The next one. 

THE GIRL: The sleeper. (smiles) I travel on the cheap. 

CORSO: Are you a student? 

THE GIRL: Something like that. (looks out the window again) I 
like trains. 

CORSO: Me too. What's your name? 

THE GIRL: Guess. 

CORSO: (shrugs, smiles): Greeneyes. 

THE GIRL: That'll do. What's yours? 

CORSO: Corso. 

THE GIRL: Strange name. 

CORSO: Italian. it means 'I run'. 

THE GIRL: You don't look like a runner to me - more the quiet 
type. 

They look at each other's reflections once more. THE GIRL's gaze 
is direct and unwavering. CORSO terminates their encounter with a 
diffident little nod. 

CORSO: Well, have a good trip. 

THE GIRL: And you. 

CORSO walks on down the corridor. There's something weird about 
this chance encounter, but he can't figure out what. 

THE GIRL (cont.): See you around, maybe. 

CORSO pauses and looks back. She's still leaning against the 
window, staring out. He nods. 

CORSO: Maybe. 

37. SINTRA STATION EXT/DAY 

It's a damp, gray morning. A sign reads: 'SINTRA'. 

CORSO, bag on shoulder and Samsonite suitcase in hand, gets off 
the train. 

38. QUINTA FARGAS GATEWAY EXT/DAY 

One of Sintra's traditional horse-drawn carriages drops CORSO in 
front of a massive gateway flanked by stone walls thick with ivy. 
Some birds peer down at him from a branch. 

The gateposts are surmounted by two mildew-covered female busts 
in gray stone, one of them with its face obscured by ivy. CORSO 
contemplates them for a moment, then pushes open the gate, which 
squeaks protestingly. Beyond it, a neglected drive. 

39. QUINTA FARGAS: DRIVEWAY, GROUNDS EXT/DAY 

A gray, desolate, infinitely melancholy scene. Dead leaves litter 
a gravel driveway flanked by crumbling statues, some of which 
have toppled over onto the long-neglected, weed-infested lawn. 
CORSO's muffled footsteps are the only sound. 

Near the house is a dried-up, dilapidated fountain faced with 
tiles and topped by a mouldering cherub. The waters of the 
ornamental pond beside it are dark as molasses and coated with 
dead leaves and water lilies. 

The Quinta Fargas is a gloomy, four-square, 18th century mansion. 
CORSO walks up the steps and tugs the old-fashioned bellpull. A 
mournful jangling sound issues from the recesses of the house. 
CORSO waits, glances at his watch. 

Echoing footsteps approach. A sound of bolts being withdrawn, and 
the door opens to reveal VICTOR FARGAS. Tall and emaciated as an 
El Greco saint, he has a drooping white mustache. His baggy 
trousers and oversized woollen sweater contrast with a pair of 
old but immaculately polished shoes. His appearance perfectly 
matches his melancholy surroundings. 

FARGAS: Yes? 

CORSO: Bob Corso, Mr. Fargas. (Puts out his hand) How do you do. 

FARGAS hesitates before shaking hands. Then his face clears. 

FARGAS: Corso, ah yes. Please come in. 

40. QUINTA FARGAS: RECEPTION ROOMS, DRAWING ROOM INT/DAY 

FARGAS, who has a slight limp, leads the way through two 
reception rooms, once imposing but now entirely bare and empty. 
By the dim light that filters through their dusty windows, CORSO 
observes the patches on the walls that indicate the former 
location of paintings, curtains, pieces of furniture, etc. 

FARGAS: Home, sweet home! 

He ushers CORSO into a large but sparsely furnished drawing room. 

FARGAS (cont.): You won't say no to a brandy, 1 take it? 

He goes over to a side table and pours some cognac into two fine 
crystal glasses. 

CORSO, meantime, is surveying the room. At the far end, a huge 
open fireplace. Two ill-assorted armchairs, a table, a sideboard, 
some candlesticks, a violin case - and books. They're neatly 
stacked on the floor and the few pieces of furniture. CORSO has 
just discovered them when FARGAS comes over with the glasses. He 
puts his bag down and takes one. 

CORSO: Thanks. (admiringly) Handsome glasses. 

FARGAS: These are the only ones I have left. 

CORSO looks around the room. 

CORSO: Must have been a beautiful place. 

FARGAS: it was, but old families are like ancient civilizations: 
they wither and die. 

He raises his glass in a silent toast. CORSO reciprocates. FARGAS 
gestures at the books. 

FARGAS (cont.): There they are, eight hundred and thirty-four of 
them. A pity you didn't see them in better times, in their 
bookcases. I used to have five thousand. These are the survivors. 

CORSO, runs his fingers caressingly over a book. 

CORSO: So this is the Fargas collection. Not quite as I imagined 
it. 

FARGAS: C'est la vie, my friend. But I keep them in perfect 
condition, safe from damp, light, heat and rats. I dust and air 
them every day. it's all I do do, in fact. 

CORSO: What happened to the rest? 

FARGAS: Sacrificed in a good cause. I had to sell them to 
preserve the others. Five or six books a year. Almost all the 
proceeds go to the state in taxes. 

CORSO: Why don't you sell up? 

FARGAS: Sell the Fargas family estate? it's obvious you're an 
American, my friend. There are things you can't be expected to 
understand. 

CORSO continues to survey the books, fascinated. 

CORSO: If you sold all these your financial problems would be 
over... (picks up a book and examines it) Look at this, 
Poliphilo, for example: a real gem! 

He replaces it. FARGAS leans over and carefully adjusts the book 
until it's precisely in its original position. 

FARGAS: I know, but if I sold them all I'd have no reason to go 
on living. More brandy? 

He heads for the bottle on the side table without waiting for a 
reply. 

CORSO: What about 'The Nine Gates'? 

FARGAS (puzzled): What about it? 

CORSO: That's why I'm here.. I told you on the phone. 

FARGAS: The phone? (pause) Yes, of course, I remember now. 
Forgive me. Of course, 'The Nine Gates'. 

He looks around several times as if trying to collect his 
thoughts, drains his cognac, and limps over to some books on a 
rug near the fireplace. FARGAS and CORSO kneel on the rug side by 
side. CORSO examines the books, which all deal with magic, 
alchemy and demonology. 

FARGAS (cont.): Well, what do you think? 

CORSO: Not bad. 

FARGAS: Not bad indeed. These I will never sell. At least tan of 
them are exceedingly rare. Look, Plancy's 'Dictionary of Hell', 
first edition, 1842, Leonardo Fioravanti's 'Compendi di Secreti' 
of 1571... But this is what interests you, no? 

He picks up a black book with a gold pentacle on the cover - the 
second copy of 'The Nine Gates' - and holds it out. CORSO takes 
it carefully and gets to his feet. FARGAS rises too. 

FARGAS (cont.): There it is, in perfect condition. it has 
travelled the world for three-and-a-half centuries, yet it might 
have been printed yesterday. 

CORSO takes the book over to a window. FARGAS follows. 

CORSO: Is it in order? You haven't detected anything unusual? 

FARGAS: Unusual? No. The text is complete, the engravings too. 
Nine plus the title page, just as the catalogs state - just like 
the Kessler in Paris and the Telfer in New York. 

CORSO: it Isn't the Telfer anymore. Telfer killed himself, but he 
sold his copy to Balkan first. 

FARGAS: Balkan... If he sets his heart on a book, no price is too 
high... 

He reflects for a moment, shaking his head and staring at the 
floor. 

FARGAS (cont.): it's strange he should have sent you here, if he 
already... 

He breaks off as If something has just occurred to him. He points 
to CORSO's bag. 

FARGAS (cont.): You have it with you? May I see it? 

CORSO fetches the book, and they go over to a table. FARGAS 
places the two copies side by side, bends over them. 

FARGAS (cont.): Superb, beautiful, identical. Two of the only 
three that escaped the flames, reunited for the first time in 
over three centuries. 

The shadows are lengthening. FARGAS reverently turns the pages of 
each book In turn, caresses the yellowing paper with his 
fingertips. 

FARGAS (cont.): Look at this imperfection In the fourth line here 
- the damaged S. The same type, the same impression. 

He turns both copies of 'The Nine Gates' over to reveal their 
backboards. 

FARGAS (cont.): You see? If it weren't for this slight 
discoloration on the back of my copy, one couldn't tell them 
apart. 

CORSO: If it's all right with you, I'd like to stay awhile and 
study them in detail. 

FARGAS (eyes him keenly): What are you looking for, Mr. Corso? 

CORSO: I wish I knew. 

FARGAS looks suddenly grave. 

FARGAS: Some books are dangerous. Not to be opened with impunity. 

CORSO (with equal gravity): Very true. 

41. QUINTA FARGAS: DRAWING ROOM INT/DUSK 

A fire is burning on the hearth. FARGAS, seated at a window, is 
practicing the violin. He repeats the same short piece over and 
over again, occasionally pausing to take a sip of brandy. 

CORSO Is sitting at a table with both copies of 'The Nine Gates' 
open in front of him at the engraving of THE KNIGHT WITH A FINGER 
TO HIS LIPS. CORSO compares the two copies with the aid of his 
magnifying glass. They look identical. 

CORSO turns over several pages in each book until he comes to THE 
HERMIT WITH THE KEYS, DOG, AND LANTERN. He compares the two 
copies. Again, no apparent difference. 

He proceeds to a third engraving: A WAYFARER APPROACHING A BRIDGE 
WITH TWO GATE TOWERS AND AN ANGELIC ARCHER IN THE CLOUDS 
OVERHEAD. Another seemingly identical pair. Then he stops short 
and returns to the second engraving. it looks the same, but... 

Then he spots it: in Balkan's copy the keys are In the Hermit's 
right hand, in Fargas's copy In his left! 

Fascinated by this discovery, CORSO peers closely at each 
signature In turn. Balkan's reads 'A.T.', Fargas's... 'L.F.' 

CORSO turns to an engraving of A JESTER OUTSIDE A MAZE WITH TWO 
ENTRANCES. Comparison of the two copies reveals that in Fargas's 
copy one of the doorways is open; in Balkan's it's bricked up. 
The signatures, too, vary: 'A.T.' in one, 'L.F.' in the other. 

CORSO (excitedly, under his breath): Now we're getting somewhere 
... 

An old-fashioned telephone bell starts ringing in the bowels of 
the house. CORSO looks up. 

FARGAS doesn't hear the bell immediately. He plays on for a bar 
or two, then pauses and listens with his head cocked. The 
telephone continues to ring. His chair scrapes the floorboards as 
he gets to his feet. He puts the violin down and limps out. 

42. QUINTA FARGAS: DRAWING ROOM INT/NIGHT 

CORSO's open notebook now displays a chart consisting of two 
horizontal rows of nine boxes. One row is marked 'BALKAN', the 
other 'FARGAS'. 

CORSO is busy filling In the boxes with either 'A.T.' or 'L.F.' 

FARGAS reappears. He gives CORSO a friendly nod, returns to the 
window and launches Into the same old piece on his violin. 

CORSO has now filled in all the boxes. He studies them for a 
moment, then rings all the 'L.F.'s in red. 

43. QUINTA FARGAS: GATEWAY, ROAD EXT/NIGHT 

Under an owl's vigilant gaze, CORSO shuts the gate. His breath Is 
visible as steam In the chilly night air. After a last backward 
look at the statue-bordered driveway and the neglected garden, he 
turns up his overcoat collar, settles his bag on his shoulder, 
and sets off down the road toward the lights of Sintra, which are 
visible in the distance. His footsteps re-echo from the wall that 
bounds the Fargas property. 

Then it happens: he hasn't gone far when two headlights snap on 
behind him. Simultaneously, the car starts up and takes off with 
a squeal of tires. 

CORSO spins around. He stands there transfixed for a moment, then 
dodges behind a projecting buttress as the car hurtles past, 
missing him by a whisker. 

The car, a big dark sedan, skids to a halt some twenty yards 
away. The driver' s door opens and A TALL MAN gets out. He 
momentarily hesitates when he sees CORSO still on his feet. 

Just then we hear a motor vehicle - a noisy one - rounding the 
next bend. The TALL MAN is captured by a beam of light. CORSO has 
seen him before: it's the MUSTACHE. 

The MUSTACHE decides to beat it. He dives back Into the car and 
takes off fast. 

CORSO, trembling with shock, watches the tail lights recede and 
disappear. The sound of the approaching vehicle increases in 
volume. CORSO turns to stare at it. 

Wobbling unsteadily along the road comes a lone PEASANT astride a 
ramshackle motorbike with a blown exhaust. The PEASANT honks as 
he goes by. CORSO retrieves his bag from the roadside. 

44. SINTRA HOTEL EXT/NIGHT 

CORSO enters a small hotel. 

45. SINTRA HOTEL: RECEPTION, LOUNGE INT/NIGHT 

CORSO, still looking pretty rocky, collects his key from the 
reception desk and sets off In the direction of the elevator. 

Visible in the background Is the hotel lounge. TWO ELDERLY FEMALE 
TOURISTS, possibly retired English schoolmarms, are quietly 
conversing at one table while AN OVERWEIGHT GERMAN COUPLE sip 
cocktails at another. 

CORSO, idly scanning the lounge as he makes for the elevator, 
stops short: a pair of legs In jeans and white sneakers are 
jutting from an inglenook fireplace in the far corner. He goes 
over to investigate. 

THE GIRL Is snuggled up In an armchair with a book on her lap. He 
hesitates for a moment. She looks up. 

CORSO: Hi. You didn't say you were bound for Sintra. 

THE GIRL: Neither did you. 

CORSO: What are you doing here? 

THE GIRL Reading. 

CORSO: I can see that. 

THE GIRL: And bumping into people unexpectedly. 

CORSO: Unexpectedly is right. 

THE GIRL: Are you on a business trip? (indicates his shoulder 
bag) Is that why you always carry that thing around? 

CORSO doesn't answer, adjusts his glasses. inquiringly at her 
book. 

THE GIRL hands it to him. We see the title: 'The Devil in Love' 
by Jacques Cazotte. 

CORSO: You like Gothic novels? 

THE GIRL: I like books. I never travel without one. 

CORSO: Been traveling long? 

THE GIRL: Ages. 

CORSO eyes her, intrigued. She uttered the word in the simple, 
natural way that characterizes all her behavior. 

CORSO: You said you were a student? 

THE GIRL: Did I? (shrugs) So I am. In a way. 

CORSO shakes his head and smiles. He's getting nowhere fast. 

THE HOTEL PORTER appears at his elbow. 

HOTEL PORTER: Excuse me, senhor. Phone call. 

CORSO (surprised): For me? Are you sure? 

HOTEL PORTER: Sim, senhor. 

He withdraws. CORSO turns back to THE GIRL. 

CORSO: Well, sorry I disturbed you. 

He hands back the book and turns to go. 

46. SINTRA HOTEL: PHONE BOOTH INT/NIGHT 

CORSO picks up the receiver with a puzzled frown. He gestures 

CORSO: Yes? 

BALKAN (V.O.): Mr. Corso? 

CORSO (startled): Balkan? How did you find me? 

BALKAN (V.O.): Made any progress? 

CORSO: Progress? You could call it that. 

BALKAN (V.O.): Well? 

CORSO: I've examined the Fargas copy. it's authentic. At least it 
looks that way. Like yours. But there are discrepancies. 

BALKAN (V.O.): Discrepancies? 

CORSO: In the engravings. Like keys in different hands, doorways 
open In one copy and bricked up In the other. 

BALKAN (V.O.): 1 see. 

CORSO: And there's another thing. 

BALKAN (V.O.): Yes? 

CORSO: The ones that differ are ail signed 'L.F.' Seems like some 
kind of riddle. 

A long pause. 

CORSO (cont.): Are you still there? Where are you, anyway? 

BALKAN (V.O.): I think you'd better get it for me. 

CORSO: The old man wouldn't sell it to save his life - he said as 
much. 

Another long pause. 

CORSO (cont.): Balkan? 

A click, and the line goes dead. 

47. SINTRA HOTEL: CORSO'S ROOM INT/DAWN 

The curtains are drawn, but there's light enough for us to see 
CORSO lying fast asleep on his back in bed, one limp arm trailing 
over the edge. 

A knock at the door. He grunts and props himself on one elbow. 

CORSO (sleepily): Just a minute. 

He rolls out of bed and wraps the bedspread around his waist. 
Then he opens the door and stands there, a tousled figure with 
Liana's teeth marks clearly visible on his chest. THE GIRL is 
outside. 

THE GIRL: You left your phone off the hook. 

CORSO: Jesus... (peers blearily at his watch): What time is it? 

THE GIRL: Early, but you have to go. 

CORSO (bewildered): Go where, for God's sake? 

THE GIRL: The Fargas place. 

CORSO is at first too bemused to find it odd that she should know 
the name. 

CORSO: Fargas? I already saw Fargas. 

THE GIRL: I think you should see him again. 

CORSO: What is this, a practical joke? Who the hell are you? What 
do you know about Fargas? 

THE GIRL: Better get dressed. I'll wait for you downstairs. 

48. QUINTA FARGAS: DRIVEWAY, HOUSE EXT/DAY 

CORSO and THE GIRL are walking in silence up the driveway, with 
its carpet of dead leaves and avenue of crumbling statues. He 
eyes her, mystified, as she strides briskly along with a blue 
duffel coat over her usual attire. The early morning mist is 
dispersing. 

With another look at THE GIRL, who remains standing at the foot 
of the steps, CORSO goes up to the front door and yanks at the 
bellpull, producing the same muffled jangling sound as before. 

THE GIRL: Don't bother. He isn't there. 

CORSO (sarcastically): Really. So where is he? 

THE GIRL: Over there. 

She points in the direction of the ornamental pond. CORSO stares 
at her, then walks over to it and freezes: VICTOR FARGAS's corpse 
is floating face up among the dead leaves and lily pads. An empty 
brandy bottle is floating alongside. 

CORSO (mutters): God Almighty! 

He emerges from his stupor and walks back to THE GIRL, who's 
still standing outside the front door. Ignoring her, he tries the 
handle, but it's bolted. 

THE GIRL: You want to get inside? 

CORSO nods wordlessly, too shocked to bandy words with her. 

THE GIRL looks up at the facade. Then, with unsuspected agility, 
she shins up a drainpipe beside the door and climbs onto the 
balcony above it. One of the French windows is broken. She 
reaches inside, releases the catch, and disappears from view. 

CORSO waits, casting occasional glances at the ornamental pond 
and its occupant. 

There's the rattle of a bolt being withdrawn, and THE GIRL opens 
the front door from the inside. 

CORSO: Wait here. 

He enters the house. 

49. QUINTA FARGAS: RECEPTION ROOMS, DRAWING ROOM INT/DAY 

CORSO traverses the empty reception rooms and reaches the drawing 
room. His foot crunches on something as he crosses it on his way 
to the rug on which the occult books were stacked: it's the 
remains of one of Fargas's treasured brandy glasses. He pauses 
for long enough to identify it, then walks on. 

The books are lying scattered across the rug: no sign of 'The 
Nine Gates'. 

CORSO: Shit! Shit, shit!!! 

He looks around helplessly. Then he sees it: the last of the fire 
is still smoldering on the hearth, and lying open among the 
ashes, charred around the edges, is Fargas's 'Nine Gates'. 

He picks up,the mutilated volume, looks at it for a moment, 
ruefully shaking his head, and stows it in his canvas bag. 

50. QUINTA FARGAS EXT/DAY 

CORSO emerges from the house. 

THE GIRL: Well, did you find it? 

CORSO: You know too damned much. More than I do. Why do you keep 
following me around? What are you, a groupie or something? IRS, 
CIA, Interpol? Who are you working for? 

THE GIRL: You're wasting time, asking all these questions. We'd 
better get out of here. There's a flight from Lisbon to Paris at 
noon. We should just make it. 

CORSO: What's with the 'we'? 

THE GIRL: There are two of us, aren't there? 

51. AIRLINER CABIN INT/DAY 

A sunlit mountainscape of dazzling white cloud glides past the 
window beside which THE GIRL is drowsing with her head on CORSO's 
shoulder. The cabin is bathed in milky radiance, the atmosphere 
is tranquil and soothing. 

CORSO looks down at THE GIRL. 

CORSO: Somebody's playing a game with me. 

THE GIRL (drowsily): Of course. You're a part of it. 

CORSO: What exactly happened back there? 

THE GIRL: Fargas caught someone stealing, I guess. 

CORSO: And what do you guess happened to him? 

THE GIRL simply): He drowned. 

CORSO: With a little help from who? 

THE GIRL (shrugs): He's dead. Who cares? 

CORSO: I care. I could wind up the same way. 

THE GIRL: Not with me around to take care of you. 

CORSO: I see. You're my guardian angel. 

THE GIRL: Something like that. 

She removes her head from his shoulder, turns away, and snuggles 
up against the window instead. 

52. PARIS AIRPORT ARRIVALS HALL INT/DAY 

CORSO makes his way across the bustling arrivals hall. THE GIRL, 
now with a backpack slung over her blue duffel coat, is trailing 
along in his wake. He glances back at her occasionally. 

The PASSENGERS slow as they reach the bottleneck at immigration 
control. CORSO, shuffling along in line, takes out his US 
passport in readiness to show it. He looks around for THE GIRL, 
but there's no sign of her. 

53. PARIS HOTEL EXT/DAY 

A taxi drops CORSO in front of a modest but respectable three-
star hotel. He hands some money through the driver's window and 
heads for the entrance. 

54. PARIS HOTEL: LOBBY, RECEPTION DESK INT/DAY 

CORSO walks up to the reception desk, which is presided over by a 
desk clerk (GRUBER). A short, squat reincarnation of Erich von 
Stroheim, he wears his uniform like a Prussian grenadier. 

CORSO: Hello, Gruber. 

GRUBER looks up, acknowledges CORSO's presence with a curt, 
faintly military inclination of the head. 

GRUBER: Welcome, Mr. Corso. Delighted to see you again. (consults 
his computer screen) We don't have any vacancies, but I'm sure 
I'll be able to organize something. 

CORSO: Thank you, Gruber. 

Discreetly, he slides a 100 franc bill across the desk. GRUBER 
makes it vanish with elegant alacrity and smiles - almost. 

GRUBER Thank you, sir. 

55. PARIS HOTEL: CORSO'S ROOM INT/DAY 

A bottle of Scotch and a glass repose on a small desk, likewise 
Balkan's 'Nine Gates' and Fargas's charred copy. A Lucky is 
smouldering in the ashtray beside them. 

CORSO is turning the pages of what remains of Fargas's copy. He 
pauses at a page of text bearing a distinctive ornamental 
capital, peers at the gutter, and detects that the page facing it 
has been torn out. Thoughtfully, he runs his finger along the 
rough edge. Then he opens Balkan's copy at the same place. 

What is missing from the charred copy is the engraving of THE 
HERMIT WITH THE KEYS, DOG, AND LANTERN. 

CORSO takes a pull at his Scotch and leans back with the Lucky 
between his lips, thinking hard. Then he glances at his watch and 
stands up. 

56. PONT DES ARTS EXT/DAY 

It's a fine day. CORSO, canvas bag on shoulder as usual, is 
striding across the bridge toward the Left Bank. 

57. KESSLER BUILDING EXT/DAY 

CORSO walks up to the entrance of a tall, well-preserved old 
building overlooking the Seine. 

58. KESSLER BUILDING INT/DAY 

A grim-faced CONCIERGE is sitting in her cubby-hole. She eyes 
CORSO inquiringly. 

CONCIERGE: Monsieur? 

CORSO: The Kessler Foundation. 

CONCIERGE Derni較e Ｕage. 

She jerks her head in the direction of an old-fashioned elevator 
like a gilded cage. 

59. KESSLER BUILDING: LOBBY INT/DAY 

The SECRETARY is a big-bosomed, middle-aged woman with hornrims 
and scraped-back hair. She looks up at CORSO with an 
inquisitorial air. 

CORSO: Bob Corso. I have an appointment with Baroness Kessler. 

Having consulted her appointments book and her watch, the 
SECRETARY rises. She speaks with a French accent. 

SECRETARY: This way. 

She walks ahead of CORSO down a panelled corridor and stops 
outside a heavy wooden door. 

SECRETARY (cont.): You have thirty minutes. 

She knocks on the door and opens it. 

60. KESSLER BUILDING: OFFICE, LIBRARY INT/DAY 

A spacious room filled with luxuriant potted plants. Beside the 
window, a large desk. covered with papers and books, some of them 
open. CORSO follows the SECRETARY in. BARONESS KESSLER, an 
elegant little white-haired old lady with a Hermes scarf draped 
around her shoulders, turns her electric wheelchair to face him. 
She speaks with a pronounced German accent. 

BARONESS KESSLER: Mr. Corso? Come in. I've heard a great deal 
about you. 

She approaches with her left hand extended. We see that her right 
arm has been amputated at the elbow., 

CORSO: Nothing good, I hope. 

They shake hands. 

BARONESS KESSLER (to the SECRETARY): Merci, Simone (to CORSO): 
You hope right. 

The SECRETARY exits, closing the door behind her. 

CORSO (dryly.): I'm reassured, Baroness. In my trade, to be 
spoken well of can be professionally disastrous. 

He surveys the room. Visible through some open double doors on 
the right is a vast library. He focuses on it. BARONESS KESSLER 
follows the direction of his gaze. 

BARONESS KESSLER: Yes, there it is: the Kessler Collection. 

CORSO: Very impressive too. I know your catalog almost by heart. 

BARONESS KESSLER: Strange we haven't met before. Your name is a 
byword among dealers and collectors but I imagine you know your 
own reputation better than I do. 

CORSO: It keeps the wolf from the door. (smiles to change the 
subject) Were you in the middle of something? 

BARONESS KESSLER beckons him over to the desk. CORSO looks at the 
array of books and papers. An elegant fountain pen lies on top of 
some handwritten notes. 

BARONESS KESSLER: My latest work: 'The Devil: History and Myth' - 
a kind of biography. It will be published early next year. 

CORSO: Why the Devil? 

BARONESS KESSLER (laughs): I saw him one day. I was fifteen years 
old, and I saw him as plain as I see you now: cutaway, top hat, 
cane. Very elegant, very handsome. It was love at first sight. 

COP.SO chuckles, doing his best to charm the old lady. 

CORSO: Three hundred years ago they'd have burned you at the 
stake for saying that. 

BARONESS KESSLER: Three hundred years ago I wouldn't have said 
it. 

They both laugh. 

BARONESS KESSLER (cont.) Nor would I have made a million by 
writing about it. (abruptly businesslike) What is it you wish to 
discuss, Mr. Corso? 

COP.SO (adjusts his glasses): There's a book in your collection 
I'd like to examine. 

She smiles as if that were already obvious. 

COP.SO (cont.): It's 'The Book of the Nine Gates of the Kingdom 
of Shadows'. 

BARONESS KESSLER (unsurprised): The Nine Gates? An interesting 
work. Everyone's been asking about it lately. 

CORSO (stiffens almost imperceptibly): Really? 

BARONESS KESSLER eyes him for a moment. 

BARONESS KESSLER: Come with me. 

Swinging her wheelchair around, she steers it toward the double 
doors and into the library beyond them. CORSO follows. 

CORSO (cont.): You really believe in the Devil, Baroness? 

BARONESS KESSLER: Enough to devote my life and my library to him, 
not to mention many years of work. Don't you? 

CORSO: Everyone's been asking me that lately. 

BARONESS KESSLER looks mildly amused. She sends her wheelchair 
gliding over to a bookshelf and removes the third copy of 'The 
Nine Gates'. 

BARONESS KESSLER: This book demands a certain amount of faith. 

CORSO: My faith is in short supply. 

They both go over to a small table in the centre of the room. 
BARONESS KESSLER opens the book and turns a few pages. There are 
handwritten slips of paper inserted throughout. 

BARONESS KESSLER: I know this book extremely well. I studied it 
for years. 

CORSO: Do you have any doubts about its authenticity? 

BARONESS KESSLER (glances at him suspiciously): None whatever. 

CORSO: You're sure? 

BARONESS KESSLER: My knowledge of this book is profound. 1 wrote 
a biography of its author. 

CORSO: Aristide Torchia? 

BARONESS KESSLER: A courageous man. He died for the sake of this 
very book in 1623. He had spent many years in Prague, a centre of 
the occult. While there he studied the black arts and acquired a 
copy of the dread 'Delomelanicon'. This is his adaptation of that 
work, which was written by Lucifer himself. After they burned him 
at the stake, a secret society was founded to perpetuate its 
memory and preserve its secrets: the Brotherhood. 

CORSO: The Brotherhood? 

BARONESS KESSLER: Yes, a kind of witches' coven. For centuries 
they have met to read from this book and worship the Prince of 
Darkness. Today they've degenerated into a social club for bored 
millionaires. I myself belonged to the Brotherhood many years 
ago, but time is too precious at my age. I told them to go to the 
Devil. She titters at her own little joke. 

CORSO: They still meet? 

BARONESS CORSO: Every year. 

CORSO: And you say they read from this book? 

He stares from the book to BARONESS KESSLER. 

BARONESS KESSLER: No, I took mine back when Liana Telfer acquired 
the one in Toledo. Victor Fargas is an unbeliever - he has always 
refused to participate, so naturally they use the Telfer copy. 
Not that it has ever worked. (pause) They never do, to be honest. 

CORSO: So Andrew Telfer never took part? 

BARONESS KESSLER: Never. He knew nothing of these activities 
until that creature Liana de Saint-Damien married him for money. 
She used his dollars to buy the book and renovate her chateau. An 
old and aristocratic family, the Saint-Damiens, but penniless. 
They have dabbled in witchcraft for hundreds of years. 

CORSO: Telfer hanged himself last week. 

A brief silence. She looks stunned for a moment. 

BARONESS KESSLER: I see. And Fargas? 

CORSO looks at her impassively. 

CORSO: He was alive the last time we spoke. 

BARONESS KESSLER: When was that? 

CORSO Two days ago. 

BARONESS KESSLER digests this, looks at him keenly. 

BARONESS KESSLER: Who exactly are you working for, Mr. Corso? 

CORSO: My client's name is irrelevant, Baroness. I'm simply 
trying to authenticate his copy - the one Telfer sold him before 
he died. 

BARONESS KESSLER (catches on): How stupid of me! I should have 
guessed! 

Angry now, she swings her wheelchair around to face him full on. 

BARONESS KESSLER (cont.): You've outstayed your welcome, Mr. 
Corso. 

CORSO: I was hoping to examine your copy in detail. 

BARONESS KESSLER: Certainly not. Tell your client, who can only 
be Boris Balkan, to come and examine it himself - if he dares. 
Tell him not to send any more wolves in sheeps' clothing. And 
now, kindly leave. 

Sternly, she points to the door with her stump. Her wheelchair 
hums as she shepherds CORSO out through the office. He opens the 
door to the corridor. 

BARONESS KESSLER (cont.) You don't know what you're getting 
yourself into, Mr. Corso. Get out before it's too late. 

CORSO: I'm afraid it already is, Baroness. 

BARONESS KESSLER: Some books are dangerous, and this is one. 

CORSO (smiles wryly): So people keep telling me. Thanks s for 
your time. 

BARONESS KESSLER watches him exit. He's hardly out the door when 
she picks up the phone. 

61. KESSLER BUILDING: LOBBY INT/EVENING 

CORSO walks back along the corridor. The SECRETARY, who has been 
peeling an orange, unsuccessfully hides it below desk level and 
gives him a curt nod as he passes. 

62. KESSLER BUILDING, RIVERSIDE STREET EXT/EVENING 

CORSO emerges from the building. As he does so he catches sight 
of the MUSTACHE leaning against the parapet of the riverside 
promenade across the way. 

The MUSTACHE stiffens and straightens up. CORSO, with one eye on 
him, starts walking. The MUSTACHE starts walking too, keeps level 
with him on the other side of the street. 

CORSO comes to a cafe. For want of a better idea, he goes inside. 

63. CAFE/RIVERSIDE STREET INT/EXT/EVENING 

CORSO sits down at a table, orders a drink. Looking out the caf& 
window, he sees the MUSTACHE leaning against the parapet in his 
former pose, watching. 

The MUSTACHE lights a small cigar without taking his eyes off 
CORSO. 

64. CAFE/RIVERSIDE STREET INT/EXT/NIGHT 

CORSO is still sitting at his table, which now has several checks 
on it. The lights come on, blotting out his view of the street 
through the window. All he can now see is a reflection of the 
c'fe's interior, including his own seated figure. He drums on the 
table irresolutely, glances at his watch, deliberates. 

He can't postpone the moment of decision any longer. He adds up 
his checks and puts some money on the table. Then, settling his 
bag on his shoulder, he makes for the door. He peers across the 
street, sees no sign of the Mustache, and exits. 

65. RIVERSIDE STREET, SEINE QUAYSIDE EXT/NIGHT 

CORSO emerges from the cafe. Still no sign of the Mustache. He 
sets of falong the sidewalk, glancing across the street as he 
does so. Then, over his shoulder, he catches sight of a car with 
dipped headlights - a dark-colored sedan - crawling along the 
curb some twenty yards behind him. 

On impulse, he darts across the street to the riverside promenade 
and dashes down the flight of steps that leads to the quay. 

The car's headlights blaze up. it accelerates, tires squealing, 
and swerves across the one-way street in pursuit. 

66. SEINE QUAYSIDE, PROMENADE EXT/NIGHT 

CORSO races down the steps, hears the car skid to a halt, and 
sprints off along the quay with his overcoat flapping and the 
shoulder bag bumping against his flank. it's misty down on the 
quayside, and the streetlights cast a yellowish glow that hinders 
visibility rather than helps it. 

A couple of hundred yards along the quay he runs out of steam and 
slows, turns to look: no sign of the Mustache, no sound of 
pursuing footsteps. Relieved but still wary, he leans against the 
embankment wall to catch his breath and light a cigarette. Then, 
with a final backward look, he walks on to the next flight of 
steps. 

He's halfway up them when the MUSTACHE, a tall, menacing figure, 
appears at the top. He turns to flee, but the MUSTACHE is too 
quick for him. He darts down the steps and punches his retreating 
figure behind the ear. CORSO misses the last couple of steps and 
lands face down on the quayside. 

The MUSTACHE is on him in a flash. He bends down and yanks the 
strap of the bag off his shoulder. CORSO resists, hugs the bag 
protectively, gets kicked in the stomach, doubles up and hangs on 
for dear life. 

As he lies there with the MUSTACHE kicking him repeatedly and 
tugging at the strap, he sees, silhouetted against the yellowish, 
misty glow of the nearest streetlight, a ghostly figure flying 
down the steps: It's THE GIRL, with her duffel coat streaming out 
behind her like Superman's cape. 

The MUSTACHE has finally gotten the bag away from CORSO. Just as 
he straightens up and turns to go, THE GIRL performs a flying 
leap and kicks him in the solar plexus. He grunts and goes 
sprawling on his back, dropping the bag. 

THE GIRL is stooping to retrieve the bag when the MUSTACHE 
scrambles to his feet and lunges at her. He throws a punch at her 
head. Although she neutralizes most of its force by riding it, he 
catches her a glancing blow on the nose. 

THE GIRL reacts like lightning, kicks him in the balls. He yelps 
and goes into a crouch. Then, with a spin kick, she floors him 
once more. He lies there, spitting blood and glaring up at her. 
She seems to have knocked the fight out of him at last. 

With one wary eye on the MUSTACHE, THE GIRL picks up the shoulder 
bag and turns to CORSO, who's struggling to his feet. 

Beyond her, he sees the MUSTACHE get up and make for the steps. 

CORSO: Hey, he's getting away! 

THE GIRL merely turns to look. CORSO sets off after the MUSTACHE, 
who has already started up the steps, and just manages to grab 
one of his legs. The MUSTACHE kicks @ self free and continues up 
the steps with CORSO clumsily following a few feet behind. 

Waiting at the top of the steps, engine idling and passenger door 
open, is the dark sedan, a Mercedes. CORSO reaches street level 
in time to catch a glimpse of the glamorous blonde behind the 
wheel: it's LIANA TELFER. The MUSTACHE jumps in and slams the 
door. The car burns rubber as it accelerates away. 

THE GIRL calmly climbs the last few steps with CORSO, a beg in 
one hand and his glasses in the other. She hands them to him. 

THE GIRL: They're broken. You should be more careful. 

CORSO, leaning back against the promenade wall and breathing 
heavily, stares at her with his mouth open. He slides down the 
wall and subsides into a sitting position on the sidewalk. 

67. RIVERSIDE STREET EXT/NIGHT 

CORSO, one lens of his glasses cracked, is still sitting on the 
sidewalk with his back against the wall. THE GIRL is sitting 
beside him. 

He produces a crumpled Lucky and lights it. it takes him quite a 
while, his hands are shaking so badly. 

THE GIRL's nose is bleeding. She wipes it on her sleeve. CORSO 
produces a handkerchief as crumpled as his cigarette and hands it 
to her. 

CORSO: When did you learn all that? 

THE GIRL: What? 

CORSO aims a feeble kick in the air. 

CORSO: That stuff. 

THE GIRL (casually): Oh, ages ago. 

CORSO: No shit. 

THE GIRL gets up and holds out her hand. CORSO takes it and rises 
with an effort. He flicks his cigarette over the parapet. 

They walk off along the promenade side by side. 

68. PARIS HOTEL: LOBBY, RECEPTION DESK INT/NIGHT 

CORSO goes up to the reception desk, where GRUBER is on duty. 

CORSO: I need a favor, Gruber. 

GRUBER looks up, registers his broken glasses and dishevelled 
condition. THE GIRL is standing in the background. 

GRUBER: Certainly, Mr. Corso. 

CORSO: Liana Telfer, maiden name Saint-Damien. Thirtyish, blond, 
dishy. Probably accompanied by a big man with a Clark Gable 
mustache. 

Impassive as ever, GRUBER make some notes on a pad. 

CORSO (cont.): I want to know if they're staying at some hotel 
here in Paris. 

GRUBER: It could take a little time. 

CORSO: Of course. Start with the five-stars. They're the best 
bet. 

GRUBER: Very good, sir. (pause) Are you feeling all right? 

CORSO: I've felt better. Thanks, Gruber. Let me know if you 
locate them. 

GRUBER watches CORSO and THE GIRL walk to the elevators. 

69. PARIS HOTEL: BEDROOM INT/NIGHT 

CORSO is filling a plastic laundry bag with ice from a tray in 
the minibar. 

THE GIRL is sitting on the bed with her head tilted back and a 
bloodstained handkerchief to her nose. The bedside light bathes 
the room in a subdued glow. 

CORSO: Here, hold this against your neck and lie back. 

He sits down beside her and hands her the improvised ice pack. 
She applies it to the nape of her neck, lies back and shuts her 
eyes. 

CORSO (cont.): You were great down there by the river. I haven't 
really thanked you. 

She opens her eyes and smiles at him. 

CORSO (cont.): Like to tell me what's going on? 

THE GIRL (shrugs faintly): Someone's after your book. 

CORSO: They didn't have to kill Fargas to get it. They didn't 
have to mutilate his copy, either. They tore out the engravings 
and ditched the rest. There's got to be more to it than that. 

Her nose has stopped bleeding. 

THE GIRL: Do you believe in the Devil, Corso? 

CORSO: I'm being paid to. Do you? 

THE GIRL (smiles): I'm a bit of a devil myself... 

She reaches up, removes his glasses, and puts them on the bedside 
table. CORSO eyes her uncertainly. Then the spell is broken: her 
nose starts to bleed again. 

She puts her fingertips to it and inspects the blood on them. 
Very deliberately, she dabbles them in the blood some more, 
reaches up, and gently draws four vertical lines down his face 
from his forehead to his mouth, where her fingertips linger. 

CORSO's face approaches hers. They melt into a passionate kiss, 
Then she pushes W= away, rolls him over on his back, unbuttons 
his shirt, and rests her palms on his chest. Playfully, she runs 
her forefinger over the imprint of Liana's teeth. 

THE GIRL (smiles mischievously): Would you know a devil if you 
saw one? 

70. PARIS HOTEL: STAIRS, LOBBY, RECEPTION DESK INT/DAWN 

CORSO, tieless and unshaven, descends the stairs to the lobby 
carrying his beg. The JUNIOR DESK CLERK, a spotty youth, is 
dozing on a chair behind the reception desk. CORSO goes over and 
reps on the desk. The JUNIOR DESK CLERK springs to his feet like 
a jack-in-a-box. CORSO jerks his chin at the door behind him. 

CORSO: Do you have a photocopier back there? 

JUNIOR DESK CLERK: Er, yes, monsieur. 

CORSO: May I use it? 

JUNIOR DESK CLERK: Are you a guest, monsieur? 

CORSO: You mean I don't look like one? 

JUNIOR DESK CLERK: Of course, monsieur. This way, monsieur. 

He lifts a flap and shows CORSO into the back office. 

CORSO: Room 35. And get them to send up breakfast for two. 

71. PARIS HOTEL: OFFICE INT/DAWN 

CORSO has deposited his bag beside the photocopier and taken out 
Balkan's 'Nine Gates'. He opens it at the first engraving - THE 
KNIGHT WITH A FINGER TO HIS LIPS - and inverts it. Positioning it 
on the photocopier, he shuts the flap and presses the start 
button. 

The photocopy glides out into the tray. 

72. PARIS HOTEL: CORSO'S ROOM INT/DAWN 

CORSO enters, quietly closing the door behind him. THE GIRL is 
lying sprawled among the rumpled sheets, fast asleep. Her clothes 
are draped over a chair with her backpack alongside. 

Stealthily, CORSO takes Balkan's 'Nine Gates' from his bag and 
secretes it behind the minibar, then goes into the bathroom. 

73. PARIS HOTEL: BATHROOM, BEDROOM, CORRIDOR INT/DAY 

CORSO, with his hair damp from the shower and a towel around his 
waist, is halfway through shaving when there's a knock on the 
bathroom door. 

One cheek daubed with foam, he opens it to find himself 
confronted by a FLOOR WAITER, check pad and ballpoint in hand. 

FLOOR WAITER: Bonjour, monsieur. Votre petit dＫeuner. 

CORSO: Oh. Sure. 

Taking the pad, he emerges into the bedroom and scribbles his 
signature, then stops short: there's a breakfast cart in the 
middle of the room, but the bed in empty and The Girl's clothes 
and backpack have disappeared. 

CORSO (cont.): Where is she? 

WAITER: Pardon? 

CORSO: Madame, ou elle est? 

FLOOR WAITER: Je ne sais pas, m'sieur. 

He makes for the door and exits. 

CORSO catches hold of the door just as it's closing, puts his 
head out into the corridor, looks right and left. 

No one in sight but the FLOOR WAITER, who casts a puzzled glance 
over his shoulder as he walks off. 

CORSO steps back into the bedroom and shuts the door. He stands 
there for a moment, frowning at the empty bed. Then, abruptly 
galvanized, he dashes over to the minibar and looks behind it. 
His fears are groundless: 'The Nine Gates' is still there. 

Just then the phone rings. He picks up the receiver and puts it 
to his ear on the clean-shaven side of his face. 

CORSO: Yes? 

BALKAN (V.O.): Come down. I'm in the cafe across the street. 

74. PARIS HOTEL, CAFE. EXT/INT/DAY 

CORSO, wearing his crumpled overcoat and carrying his bag, 
emerges from the hotel and crosses the street to a cafe opposite. 
He enters and looks around, catches sight of BALKAN's sleek gray 
head at a table in the corner. He goes over to him. 

CORSO: You sure as hell get around. 

He sits down with the shoulder bag between his feet. A WAITER 
appears at his elbow. 

CORSO (cont.): (to the WAITER): Un caf� noir, s'il vous plait. 

The WAITER nods and withdraws. BALKAN studies CORSO's face 
through his hornrims, notes the glasses with the cracked lens. 

BALKAN: Problems? 

CORSO: Yeah, like someone tried to total me a couple times. Aside 
from that, three people have died on me since I took this job. 
(thinks for a moment) Well, two. Telfer was dead already. 

BALKAN: 1 don't follow you. 

CORSO: It's simple enough. You give me 'The Nine Gates' and they 
start dropping like flies. I'm thinking of giving it back. 

BALKAN: Who are you talking about? 

CORSO: My pal Bernie Feldman, for one. 

BALKAN: The book dealer? He's dead? 

CORSO: Murdered. He was holding your book for me. Someone was 
after it. He wouldn't give it to them. 

A moment is silence. Then BALKAN emits a wholly incongruous 
chuckle. The chuckle becomes a guffaw, the guffaw gives way to 
peal after peal of uproarious laughter. He slaps his thighs and 
rocks back and forth, his face turns puce, his eyes fill with 
tears. 

His hilarity is so deafening that the cafe's other CUSTOMERS turn 
to stare. CORSO, too, stares at BALKAN as if he's gone crazy. 

BALKAN's mirth gradually subsides. He removes his hornrims and 
mops his eyes. Eventually, still chuckling: 

BALKAN: Poor fellow. Very creditable of him. 

COP.SO refrains from commenting on this outburst. 

CORSO: Then there's Fargas. 

The WAITER brings CORSO'S coffee. BALKAN waits for him to put it 
on the table and retire. 

BALKAN: What about Fargas? 

CORSO: Dead too. 

BALKAN: How do you know? 

CORSO: I saw him - and his copy, or what was left of it. Someone 
had snitched the engravings and tried to burn the rest. 

BALKAN stares at him for a moment. Then: 

BALKAN: How tragic. What about the Kessler copy? 

CORSO: The old woman says it's authentic, but I didn't get a 
chance to look at it closely. As soon as she guessed you were 
behind my visit she threw me out. You aren't her flavor of the 
month. 

BALKAN: You must see her again. You must get me that copy - or 
examine it, at least. 

CORSO (derisively): Are you kidding? I'd have to be the Invisible 
Man. 

BALKAN reaches into his black briefcase and produces a big 
manilla envelope. 

BALKAN: Try this. 

CORSO takes the envelope and looks at it. it's addressed to 
'Baroness Friede Kessler'. 

75. KESSLER BUILDING: LOBBY iNT/DAY 

CORSO, canvas bag on shoulder, hands the envelope to the 
SECRETARY, who takes it and walks off down the corridor. 

76. KESSLER BUILDING: OFFICE iNT/DAY 

A black and white photo fills the screen: it shows a young and 
beautiful BARONESS KESSLER flanked by two men in SS uniform. One 
of them is Heinrich Himmler. 

BARONESS KESSLER is scowling down at a wartime number of 
'Signal', the Nazi propaganda magazine. It's lying open on her 
desk with Balkan's envelope beside it. 

The SECRETARY shows CORSO in. The BARONESS addresses her crisply. 

BARONESS KESSLER: Merci, Simone. 

The SECRETARY nods and exits. Fixing CORSO with a cold, 
challenging stare, BARONESS KESSLER feeds the magazine into a 
shredder beside her desk. She no longer looks such a dear little 
old lady. 

77. KESSLER BUILDING: LIBRARY, OFFICE iNT/DAY 

CORSO is seated at a library table on which reposes the Kessler 
copy of 'The Nine Gates'. Beside it lies his notebook and the 
photocopies of Balkan's engravings. His shoulder bag is hanging 
on the chairback, his overcoat draped over it. He reaches into 
his pocket and produces a Lucky, takes out his lighter. 

BARONESS KESSLER: Blackmail doesn't entitle you to smoke in my 
library, Mr. Corso. 

CORSO stops short and looks back through the double doors into 
her office: she's seated behind her desk like a graven image, 
watching him intently. He reinserts the Lucky in its pack and 
pockets his lighter. Getting down to work, he opens 'The Nine 
Gates' and extracts one of the Baroness's handwritten slips, 
reads it to himself in a low voice. 

CORSO: 'I will recognize your servants, my brethren, by the sign 
that adorns some part of their body, a scar or mark of your 
making...' 

He replaces the slip. BARONESS KESSLER cranes her body largely 
obscures her view of the table. 

CORSO turns some pages and comes to the engraving of THE KNIGHT 
WITH A FINGER TO HIS LIPS. He compares it with the photocopy: the 
castle has three towers instead of four. He examines the margin 
of the engraving through his magnifying glass to ascertain the 
presence of something he already knows will be there: an 'L.F.' 

He turns to the chart in his notebook, which has already acquired 
a third row of nine boxes. He writes 'Kessler' beside it and 
enters an 'L.F' in the first box. 

The second engraving - THE HERMIT WITH THE KEYS - appears to be 
identical and the signature is 'A.T.' An 'A.T.' goes down in the 
second box. 

The third engraving is different: THE ANGELIC ARCHER has an arrow 
in his quiver, whereas the photocopy of Balkan' s counterpart 
does not. This one, too, is signed 'L.F.' CORSO enters an 'L.F.' 
in the third box. 

We MOVE IN until the chart FILLS THE SCREEN. 

78. KESSLER BUILDING: LIBRARY, OFFICE 

LONG SHOT of CORSO from behind. He leans back and stretches, 
glances in the direction of the office: Baroness Kessler is no 
longer at her desk. Absolute silence reigns. 

He resumes work, turns to the ninth engraving: THE NAKED WOMAN 
RIDING THE DRAGON WITH A CASTLE ABLAZE IN THE BACKGROUND. 

There's a loud thud, and the engraving sways and blurs. THE 
SCREEN GOES BLACK. 

79. KESSLER BUILDING: LIBRARY, OFFICE 

FADE IN. An electrical hum, punctuated by a strange, rhythmical 
series of clicks and thuds: click-thud, click-thud, click-thud... 

CORSO, sitting slumped over the table, comes to. He groans and 
laboriously straightens up, feels his head and winces. The 
strange sound impinges on his consciousness: he looks around 
vaguely for its source and discovers it: 

BARONESS KESSLER's wheelchair has been left in forward gear. 
Complete with occupant, it's colliding again and again with the 
wall beneath a window on the other side of the room. CORSO, who 
can just glimpse the top of the old lady's head from behind, sees 
it jerk forward at each impact. He struggles to his feet. 

CORSO: Baroness? 

No answer. Unsteadily, he makes his way over to the wheelchair 
and swivels it around, starts back with a muffled exclamation. 

BARONESS KESSLER has been strangled with her Hermes scarf: her 
cheeks are blue, her eyes and tongue are protruding. 

Unobstructed, the laden wheelchair takes off across the library 
and heads for the double doors, which are now closed. it runs 
into them full tilt, bursts them open, and continues on its way. 

Instantly, smoke comes billowing into the library, accompanied by 
a crackle of flames. The wheelchair disappears into the murk. 

CORSO wildly scans the table for Baroness Kessler's 'Nine Gates', 
but it's gone. Snatching up his notebook and abandoning his 
shoulder bag and overcoat, he makes for the office at a run. 

The office is thick with smoke and illumined by a fiery glow. 
CORSO pauses in the doorway, shielding his face from the heat 
with one hand, and surveys the scene. 

BARONESS KESSLER and her wheelchair have come to rest in the 
midst of a bonfire of books and papers. CORSO can just make out 
her copy of 'The Nine Gates' on top. The flames are already 
engulfing it. 

CORSO takes a last look, then dashes through the smoke to the 
door and exits. 

80. KESSLER BUILDING: CORRIDOR, LOBBY, LANDING INT/DAY 

With smoke billowing after him, CORSO dashes along the corridor, 
through the lobby, which is deserted, and out onto the landing. 

81. KESSLER BUILDING: LANDING, STAIRS, HALLWAY INT/DAY 

On the landing CORSO bumps into the SECRETARY, who has just 
emerged from the elevator. She gives a little shriek and drops a 
paper bag. Half a dozen oranges go bouncing ahead of CORSO as he 
races down the stairs. 

In the hallway he almost upends the CONCIERGE, who's wielding a 
broom in her curlers. Leaping aside with a startled yell, she 
speeds him on his way with some choice imprecations, then peers 
up the stairwell: the upper stories are already wreathed in 
smoke, and sundry TENANTS have debauched onto the landings. The 
SECRETARY comes pelting down the stairs, screaming at the top of 
her lungs. 

82. SMALL PARIS SQUARE EXT/DAY 

CORSO douses his head in the basin of a fountain, shakes off the 
drips and massages his face. Then he leans against the basin and 
looks around. He's all alone in the little square. 

He takes out a crumpled cigarette and inserts it between his lips 
with dripping fingers, gropes for his lighter, and vainly tries 
to light it. Wearily, he removes the cigarette from his lips and 
tosses it away. All at once, he spots a huge Great Dane watching 
him from the mouth of an alleyway. CORSO and the Great Dane stare 
at each other. 

Then the silence is broken by a fire engine's siren, faint at 
first but growing louder. 

83. RIVERSIDE STREET CORNER EXT/DAY 

CORSO reaches an intersection and looks around the corner. 

The Kessler building is ablaze. Tongues of flame and clouds of 
smoke are issuing from the windows of the upper stories. Fire 
engines and squad cars are drawn up outside, FIREMEN are 
directing their hoses onto the flames, GENDARMES cordoning off 
the street and keeping curious SPECTATORS at bay. 

84. PARIS STREET, HOTEL LOBBY EXT/INTIDAY 

CORSO, looking wrung out, crosses the street and makes for the 
hotel entrance. 

He's just going through the revolving doors into the lobby when 
THE GIRL appears on the inside. Hooking her arm through his, she 
steers him around and back outside again in one continuous 
movement. As she does so: 

THE GIRL (mutters): Just keep going. 

Still firmly gripping his arm, she Propels him out onto the 
sidewalk. 

CORSO (baffled): What are you playing at? 

THE GIRL: See those men talking with your friend Gruber? 

CORSO turns to look. inside the lobby, TWO MEN IN TRENCHCOATS are 
standing at the reception desk in conversation with GRUBER. 

THE GIRL (cont.): Police. 

At that moment, GRUBER looks past them at CORSO. He briefly locks 
eyes with him but shows no sign of recognition. 

CORSO: Shit. 

He turns and walks off with THE GIRL at his side. 

85. PHONE BOOTH EXT/INT/DAY 

CORSO is in the act of entering a glass phone booth. 

THE GIRL: You look better without that old bag and coat of yours. 
They didn't do anything for you. 

CORSO shuts the door in her face. He picks up the receiver, 
inserts a coin, punches out a number. THE GIRL pulls a funny face 
at him through the glass. CORSO's only response is to turn away 
and cup his hand around the receiver. 

CORSO (into phone): Gruber? it's me, Corso. Can you talk? 

GRUBER (V.0): No, sir. 

CORSO: But you can listen? 

GRUBER (V.O.): Certainly, sir. 

CORSO: I'd like you to do something for me. 

From outside we see. THE GIRL, arms folded, casually watching 
him. 

86. PARIS BRASSERIE INT/DAY 

GRUBER enters a brasserie crowded with lunchtime CUSTOMERS. He's 
looking distinctly Prussian in spite of the civilian overcoat 
over his uniform. He spots CORSO at the far end of the bar with 
THE GIRL beside him. She's sucking up some colorful beverage 
through a straw. GRUBER acknowledges her presence with a formal 
nod. 

CORSO: You don't have it? 

GRUBER: There was nothing in the place you described, sir. I'm 
sorry. 

CORSO: Goddamit! 

He turns to THE GIRL. 

CORSO (cont.): I suppose you didn't take it? 

THE GIRL: You still don't trust me, do you? 

GRUBER clears his throat. 

GRUBER: I think I may have the answer, sir. Someone visited your 
room earlier on, while my young colleague was on duty: your wife. 

CORSO: My wife? I.don't have any wife. 

GRUBER: That's what I told him . 

CORSO: Could he describe her? 

GRUBER (nods): Thirtyish, blond, dishy. 

CORSO Liana... 

GRUBER: Which reminds me, sir: the lady and gentleman you 
mentioned - they're staying at the Hotel Crillon, Suite 236-238. 

CORSO: Good for you, Gruber. Thanks a lot. 

GRUBER: Always glad to be of service, Mr. Corso. 

CORSO: I owe you one for those cops, too. 

GRUBER: Ah yes, sir. Interpol. 

CORSO: Interpol! What exactly did they want? 

GRUBER: They expressed an interest in your whereabouts. 

CORSO: And? What did you tell them? 

GRUBER: That you were out. 

CORSO: Anything else? 

GRUBER: They asked if I knew whether you had recently visited 
Portugal. 

CORSO: And? 

GRUBER: I said that our guests do not make a habit of providing 
us with their itineraries. 

CORSO extracts a 500 franc bill from his billfold and slips it 
into GRUBER's hand. GRUBER acknowledges this largesse with a 
gracious inclination of the head. 

CORSO: For what it's worth, Gruber: I don't know what they think 
I've done, but I'm innocent. 

GRUBER (impassively): Naturally, Mr. Corso. All our guests are. 

87. HOTEL CRILLON: FORECOURT EXT/DAY 

We OPEN on the luxury hotel's facade, which bears the inscription 
'HOTEL DE CRILLON', then PAN DOWN to the entrance and the 
forecourt, which is accessible from the main road but separated 
from it by a long, narrow island with a cab rank at one end. 

A hive of activity: HOTEL GUESTS come and go, the DOORMAN, a 
majestic figure in his gold-braided uniform, deferentially closes 
the door of a departing Rolls, a BELLHOP backs a guest's car into 
a gap in the already overcrowded forecourt. 

A cab drives up to the entrance. The DOORMAN opens the door, 
CORSO and THE GIRL get out. CORSO turns to pay the CABBY, the 
DOORMAN twitches an eyebrow at THE GIRL's jeans and sneakers. 

CORSO and THE GIRL enter. 

88. HOTEL CRILLON: OUTER LOBBY, MAIN LOBBY INT/DAY 

Visible beyond the outer lobby, which has elevators on one side 
and stairs on the other., is the palatial main lobby, with its 
floor and walls of honey-colored marble. That, too, is buzzing 
with activity. 

CORSO and THE GIRL stand aside as an elevator door opens and some 
camera-toting JAPANESE TOURISTS emerge. Meantime: 

THE GIRL: What'll you do when you see them? 

CORSO (dryly): Hide behind you, probably. 

They enter the elevator. The doors glide shut. 

89. HOTEL CRILLON: CORRIDOR INT/DAY 

CORSO and THE GIRL walk down the corridor, checking numbers as 
they go. They've almost reached the door of Suite 236-238 when it 
opens abruptly. They jump back in alarm. 

A BELLHOP emerges backside first, towing a baggage cart laden 
with smart Vuitton suitcases. 

CORSO and THE GIRL take refuge in a lateral passage a few feet to 
their rear as the BELLHOP sets off down the corridor in the 
opposite direction, leaving the door open. 

CORSO pads silently up to the door and enters with THE GIRL at 
his heels. 

90. HOTEL CRILLON: SUITE INT/DAY 

A deserted sitting room with an old 'Herald Tribune' lying 
abandoned on the floor and two dirty coffee cups on the table. No 
sound, no signs of recent occupation aside from a thin wisp of 
smoke rising from the inefficiently stubbed-out remains of a 
small cigar. 

The bedroom door is ajar. THE GIRL stands watching as CORSO 
tiptoes over pushes it open. The room is empty, the bed unmade. 

CORSO: Downstairs, quick! 

91. HOTEL CRILLON: LOBBY INT/DAY 

CORSO and THE GIRL have used the stairs for speed's sake. 
Panting, they halt at the foot of the last flight and scan the 
spacious but crowded lobby. it's a moment before they catch sight 
of their quarry. 

The MUSTACHE is standing at the cashier's desk with LIANA beside 
him. 

CORSO: C'mon. Better grab a cab or we'll lose them. 

Heads averted, they thread their way across the lobby and make 
for the exit unobserved. 

92. HOTEL CRILLON: CAB RANK EXT/DAY 

CORSO and THE GIRL have stationed themselves at the cab rank on 
the island. CORSO sees a cab approaching amid the stream of 
traffic and tries to flag it down, but it's taken. 

CORSO: Damn! 

93. HOTEL CRILLON: FORECOURT EXT/DAY 

Meantime, in the forecourt, the DOORMAN hands LIANA into the 
passenger seat of the Mercedes sedan while the MUSTACHE 
supervises the BELLHOP as he stows their baggage in the trunk. 

A Rolls pulls up behind the Mercedes, closely followed by a 
yellow Lamborghini driven by a smartly dressed, mustachioed ARAB 
with a BLOND BIMBO beside him. 

The ARAB gets out, leaving his keys in the ignition. Nonchalantly 
signaling to the DOORMAN to park his car, he disappears into the 
hotel with the BIMBO in tow. 

The DOORMAN acknowledges his gesture before smilingly accepting a 
tip from the MUSTACHE, who gets in behind the wheel. 

THE GIRL (O.S.): They're going! 

94. HOTEL CRILLON: CAB RANK, FORECOURT EXT/DAY 

CORSO sights another cab approaching and cavorts into the 
roadway, waving his arms like a madman. 

The cab honks and swerves to avoid him, obstructing some other 
vehicles, which honk in their turn. it's empty. 

CORSO: Bastard! 

Frustrated yet again, he. retreats to the island. 

Beyond his agitated figure in the forecourt, we see the Mercedes 
drive off. 

95. HOTEL CRILLON: FORECOURT, CAB RANK EXT/DAY 

With a screech of tires, the yellow Lamborghini takes off fast in 
reverse. Skirting the island, it backs out into the oncoming 
traffic. Then, slammed into first, it skids to a halt beside the 
curb at CORSO's elbow. The passenger door opens, THE GIRL cranes 
over and looks up at him from behind the wheel. 

THE GIRL: Coming? 

CORSO stares at her for an instant, then jumps in. 

The Lamborghini sets off after the Mercedes, which is not far 
ahead. it threads its way into the stream of traffic, pursued for 
a few yards along the sidewalk by the wildly gesticulating 
DOORMAN. 

96. LAMBORGHINI/PARIS STREETS INT/EXT DAY 

THE GIRL is expertly piloting the Lamborghini through heavy 
traffic. The Mercedes can be seen a few cars ahead. 

CORSO: Couldn't you have pinched something a bit less 
conspicuous? 

THE GIRL: Don't be so picky. Most people would give their 
eyeteeth for a ride in this. 

CORSO surveys the car's luxurious interior, opens the glove 
compartment, removes the contents and inspects them: some CDs, 
the car papers, a pair of expensive wrap-around sunglasses, an 
Arab keffiyeh. 

97. LAMBORGHINI/FREEWAY INT/EXT/LATE AFTERNOON 

Visible through the windshield, the Mercedes is cruising along 
several hundred yards ahead of the Lamborghini. 

CORSO: We can't sit on their tall forever. They're bound to smell 
a rat. 

98. FREEWAY EXT/DUSK 

LONG SHOT of the Lamborghini accelerating to draw level with the 
Mercedes. 

99. MERCEDES/FREEWAY EXT/DUSK 

The MUSTACHE, with LIANA at his elbow, glances sideways. 

100. LAMBORGHINI/FREEWAY EXT/DUSK 

The MUSTACHE's POV: the Lamborghini overtaking with a figure in 
shades and a kefflyeh at the wheel. 

It's THE GIRL. She looks straight ahead as she passes. No sign of 
CORSO. 

101. LAMBORGHINI/ FREEWAY EXT/DUSK 

CORSO, who has been hiding below door level, sits up. After a 
cursory glance over his shoulder, he settles back in his seat and 
lights a Lucky, covertly eyeing THE GIRL. 

THE GIRL: How do I look? 

CORSO: You look a million. A million barrels of oil. 

102. LAMBORGHINI/FREEWAY EXT/DUSK 

The Lamborghini passes an exit. THE GIRL, who has discarded the 
keffiyeh and shades, is driving with one eye on the rearview 
mirror. 

103. FREEWAY EXT/DUSK 

The Mercedes indicates right, slows, and turns off at the exit. 

THE GIRL (O.S.):  Sit tight! 

104. LAMBORGHINI/FREEWAY EXT/DUSK 

THE GIRL pulls over onto the shoulder and stands on the brakes. 
Throwing the car into reverse almost before it's stationary, she 
hurtles backward along the shoulder. 

A couple of cars flash their headlights and blare as the 
Lamborghini reaches the exit and skids to a halt, narrowly 
missing a large truck that has beaten it to the exit. 

105. LAMBORGHINI/EXIT ROAD EXT/DUSK 

The Lamborghini crawls along behind the truck as it grinds up the 
single-lane exit road. 

CORSO (impatiently): C'mon, c'mon! 

THE GIRL blasts the truck with her horn and flashes her 
headlights. The truck's only response is to slow still further 
before pulling up at a T junction. 

CORSO (cont.): What in hell's the matter with him? 

Clearly visible in the glare of the Lamborghini's headlights, an 
arm emerges from the truck's cab window and gives a prolonged, 
one-fingered salute. The arm disappears, the truck moves off at 
last and turns left across the bridge spanning the freeway. The 
Mercedes is nowhere in sight. 

The Lamborghini moves up to the T junction and stands there, 
engine purring. 

THE GIRL: Take your pick. 

CORSO: No, you. You know everything. 

THE GIRL: If you say so. 

She turns off right. 

106. LAMBORGHINI/COUNTRY ROAR) EXT/NIGHT 

It's dark now, and the Lamborghini is speeding along an avenue of 
poplars. No sign of the Mercedes. 

THE GIRL: We lost them. 

CORSO: Not at this speed. They must have gone the other way. 

THE GIRL: You mean I don't know everything after all? 

CORSO: Turn around. 

They pass a small intersection on the right. THE GIRL backs into 
it but doesn't complete the manoeuvre: something catches her eye. 

THE GIRL: Thirtyish, blond, dishy - what was her name again? 

CORSO: Telfer. Liana Telfer. 

THE GIRL: No, her maiden name. 

CORSO: Saint-Damien. 

THE GIRL: Look. 

CORSO's POV: the Lamborghini's headlights have illuminated a 
signpost. One of the signs reads: 'ST.-DAMIEN 2 Km.' It points 
the way they were going. 

THE GIRL turns out into the road and drives on in the original 
direction. 

107. LAMBORGHINI/VILLAGE EXT/NIGHT 

THE GIRL slows as they pass the 'ST.-DAMIEN' sign at the entrance 
to the village itself. 

THE GIRL: Should we drive straight in? 

CORSO: In this thing? We might as well hang a bell around our 
necks. Park here. 

108. ST.-DAMIEN VILLAGE EXT/NIGHT 

CORSO and THE GIRL walk gingerly down the old village street. A 
faint glow emanates from a few windows in the time-worn houses, 
but the street itself is utterly deserted. 

109. VILLAGE SQUARE EXT/NIGHT 

They pause at the mouth of a small, equally deserted square: 
church at one end, mairie across the way, village stores 
shuttered and in darkness, two or three parked cars, none of them 
the Mercedes. 

THE GIRL: So? 

CORSO looks around irresolutely, sees light coming from the 
basement window of a baker's shop. 

110. VILLAGE BAKERY EXT/INT/NIGHT 

Side by side, CORSO and THE GIRL look down through the open 
transom of the basement window. inside, a flour-smeared BAKER is 
deftly preparing a tray of croissants for the oven. 

CORSO: Monsieur? 

The BAKER looks up, wipes his hands on his smock, and walks over 
to the window. 

BAKER M'sieur? 

CORSO: Nous cherchons la maison de Madame de Saint-Damien. 

BAKER: Le chateau, vous voulez dire. 

CORSO: (to THE GIRL):  Chateau! That's it - got to be. (to the 
BAKER):  Ou il est, le chateau? 

BAKER  (gestures):  La route apr郭 ''Ｈllse, m'sieur. 

111. LAMBORGHINI/MINOR ROAD EXT/NIGHT 

THE GIRL is driving slowly along a country road flanked on one 
side by woods. A pair of ornate wrought-iron gates and a 
gatehouse loom up on the left. 

CORSO: Keep going. 

There's a light on in the gatehouse. They glimpse the gatekeeper 
leaning against his door, smoking, as they cruise past. 

112. LAMBORGHINI/MINOR ROAD EXT/NIGHT 

The Lamborghini backs into the mouth of a farm track. THE GIRL 
and CORSO get out, cross the road, and strike off into the woods. 

113. CHATEAU DRIVEWAY EXT/NIGHT 

Hugging the trees that border it on one side, CORSO and THE GIRL 
are making their way up a long, straight, graveled driveway. The 
lighted gatehouse is to their rear, the lights of the ch&teau can 
be seen ahead. 

Hearing the sound of a car behind them, they turn to see its 
headlights swing in through the gates. They quickly take cover in 
the trees and watch the car - a big limo - glide past, then 
emerge and walk on. 

114. CHATEAU ST.-DAMIEN EXT/NIGHT 

CORSO and THE GIRL observe the chateau, a substantial 17th 
century mansion, from the edge of the trees. 

The forecourt, in which come 20 expensive-looking cars are 
parked, one of them the Mercedes, is illuminated by the flambeaux 
on either side of the portico and the lights inside the building. 
The limo has pulled up at the foot of the steps, and the 
occupants, a smartly dressed ELDERLY COUPLE, are being greeted by 
a tuxedoed BUTLER while their suitcases are removed from the 
trunk and carried in after them by a MANSERVANT. 

115. CHATEAU/GREAT HALL EXT/INT/NIGH'r 

CORSO and THE GIRL have worked their way around to the side of 
the chateau. One of the lighted windows gives them a view of the 
upper reaches of the chateau's great hall, with its balustraded 
minstrel gallery and lofty, vaulted ceiling. They climb on a 
stone bench for a better look. 

Inside, overlooked by an array of ancestral portraits, some 50 
GUESTS are inaudibly conversing in groups. Men and women alike 
are attired in long black robes resembling monks' habits, and all 
have silver pentacles suspended from their necks on silver 
chains. Their cowls are thrown back to reveal the heads and faces 
beneath. A motley assortment of people, most of them middle- or 
late middle-aged, one or two of oriental origin. No sign of Liana 
or the Mustache. 

THE GIRL: See them anywhere? 

CORSO: No. 

THE GIRL: They aren't there. 

116. CHATEAU/KITCHEN EXT/INTINIGHT 

CORSO and THE GIRL continue to make their cautious way around the 
house. Peering through a semi-basement window, they see TWO CHEFS 
chopping vegetables at a big kitchen table. 

They pause, at a loss, and look up at the house. Several of the 
second-floor windows are illuminated, and one of them has some 
creeper-covered trelliswork running up to its balcony. 

117. CHATEAU: BALCONY/LIANA'S BOUDOIR EXT/INT/NIGHT 

THE GIRL, with CORSO close behind her, has just reached the top 
of the trelliswork. She clambers over onto the balcony. CORSO 
scales the last few fact, reaches for the balustrade, straddles 
it and joins her. Together, they peer through the French windows. 

With them, we see a bedroom decorated in a very feminine style 
all frills, flounces, and elegant Louis Quinze furniture. Two of 
Liana's Vuitton suitcases are on the floor near the dainty 
fourposter. A third, with her discarded clothes beside it, is 
lying open on the bed itself. 

LIANA has stripped to her panties. CORSO and THE GIRL watch as 
she slips them off, goes to a wardrobe, and takes out a black 
robe and silver pentacle like the ones we saw downstairs . 
Pulling the robe over her head, she smooths it down, dons the 
pentacle, and inspects herself in a cheval mirror in the corner 
of the room. 

COP.SO takes advantage of her preoccupation to try the French 
windows. They won't budge. He turns to THE GIRL and shrugs, then 
raises his foot and kicks the glass in. 

LIANA spins around with a terrified cry and stands there 
transfixed. CORSO reaches inside, turns the knob, opens the 
French windows and steps into the room. THE GIRL follows. 

LIANA: You! 

CORSO: Where is it? 

LIANA: How dare you! 

CORSO: That book isn't yours, Madame. 1 need it. 

LIANA: Get out of here, both of you! 

CORSO goes over to the bed and empties the suitcase onto the 
floor. Among . its contents is 'The Nine Gates'. LIANA 
instinctively lunges for it, but THE GIRL blocks her. 

CORSO (to THE GIRL): Careful, she bites! 

He's stooping to retrieve the book when the door opens and the 
MUSTACHE, robed and barefooted, stands framed in the doorway. 
CORSO turns quickly with the book in his hand, THE GIRL stiffens. 

LIANA makes a dive for the bedside table and produces a chrome-
plated automatic from the drawer, flips the safety catch. 

LIANA (to CORSO and THE GIRL): Don't move, either of you. (to the 
MUSTACHE): Get the book, Bruno. 

CORSO takes a tentative step backward as the MUSTACHE approaches 
him with his left hand extended. He reluctantly surrenders the 
book. 

The MUSTACHE rewards him for his co-operation with a vicious 
right hook to the jaw. CORSO goes down, losing his glasses yet 
again. Groggily, he crawls around in search of them. 

The MUSTACHE joins LIANA, steering well clear of THE GIRL. He 
hands her 'The Nine Gates' and carefully transfers the automatic 
from her hand to his. 

LIANA (cont.): Take them downstairs and lock them up. We'll deal 
with them later, there's no time now. 

MUSTACHE (to CORSO, Italian accent): Turn around. 

CORSO, who has scrambled to his feet, complies. The MUSTACHE 
applies the muzzle of the automatic to the nape of his neck. 

MUSTACHE (cont.): (to THE GIRL): You. Go first. Any trouble, I 
blow his brains. 

THE GIRL makes for the door. The MUSTACHE prods CORSO into 
motion. They exit. 

LIANA stares after them for a moment, clasping 'The Nine Gates' 
to her bosom. 

118. CHATEAU: PASSAGE INT/NIGHT 

A long passage lined with more ancestral portraits. The ancient 
floorboards creek as THE GIRL obediently walks ahead of CORSO and 
the MUSTACHE, whose automatic is levelled at CORSO's back. They 
reach the end of the passage. 

MUSTACHE: Go left. Down the stairs. 

119. CHATEAU: STAIRCASE, PASSAGE INT/NIGHT 

They descend a staircase to ground level. Another long passage 
confronts them, much like the first but floored with marble. 

MUSTACHE Avanti, avanti! 

A door at the end leads into a stone-flagged passage with 
whitewashed walls. They make their way along it until they reach 
a heavy oak door. 

MUSTACHE (cont.): (to THE GIRL): Open it! 

THE GIRL does so to reveal a small landing and a flight of stone 
steps leading downward. She stops short: the steps have no guard 
rail and the cellar beneath is shrouded in darkness. 

120. CHATEAU: WINE CELLAR INT/NIGHT 

The MUSTACHE prods CORSO through the doorway until ALL THREE are 
on the landing, then throws a light switch. 

Bare bulbs shed little light on the steps but illuminate a large 
vaulted chamber below. it's the chateau's wine cellar: oak 
barrels and racks of bottles thick with dust and cobwebs are 
housed behind an iron grille with a door in it. The door is ajar, 
the key in the lock. 

MUSTACHE (to THE GIRL): Move! 

THE GIRL sets off down the steps. CORSO follows with the MUSTACHE 
at his heels. 

Halfway down, CORSO pretends to stumble: he crouches and turns in 
a single movement. The MUSTACHE, following close behind, trips 
over him. CORSO seizes his robe and yanks at it, helping him on 
his way. Simultaneously: 

CORSO (to THE GIRL): Watch out! 

THE GIRL plasters herself against the wall to avoid the 
MUSTACHE's somersaulting body. The automatic escapes from his 
hand and slithers across the flagstones as he comes to rest, with 
a sickening thud, at the foot of the steps. THE GIRL follows him 
down and picks it up. 

CORSO reaches the foot of the steps and rolls the MUSTACHE over 
on his back. He's out cold, with blood oozing from a broken nose. 

THE GIRL (faintly admiring):  I didn't know you had it in you. 

CORSO: Another thing you didn't know? 

He takes hold of the MUSTACHE's ankles and, with THE GIRL's 
assistance, hauls him through the grille into the inner cellar. 
He stares down at the man for a moment. 

CORSO (cont.): Hey, give me a hand. I want his gear. 

He starts to peel of fthe MUSTACHE's robe from the feet up, 
revealing a pair of exceptionally hairy legs. 

121. CHATEAU: WINE CELLAR INT/NIGHT 

CORSO shuts the grille door, locks it, and tosses the key into a 
corner. The MUSTACHE's naked, motionless body can be vaguely 
discerned through the bars. 

122. CHATEAU: PASSAGE INT/NIGHT 

CORSO and THE GIRL cautiously retrace their steps along the 
marble-floored passage. CORSO is wearing the Mustache's robe and 
pentacle over his clothes with his shoes and trouser bottoms 
incongruously visible below the ham. They pass the stairs they 
descended and continue on their way. 

They turn a corner. As they do so, they hear a faint, 
intermittent hum. They pause to listen, then walk on. The sound 
grows louder and more distinct: somewhere in the chateau, voices 
are chanting in unison. 

Turning another corner, they find themselves in an anteroom that 
terminates in two massive double doors. The chanting is coming 
from beyond them. 

CORSO walks over to the doors with THE GIRL at his heels. He 
grasps the handle. 

THE GIRL (hisses): No! Up to the gallery. 

123. CHATEAU: BACK STAIRS, GALLERY INT/NIGHT 

The chanting is even louder now. CORSO and THE GIRL reach the top 
of some uncarpeted stairs and cautiously open a small door. A 
wave of sound hits them. 

124. CHATEAU: GALLERY, GREAT HALL INT/NIGHT . 

They steal through the doorway into the shadowy gallery, which 
runs around three sides of the Great Hall, and peer over the 
balustrade. They've emerged near the top of a spiral staircase 
leading down from the gallery to a point near the double doors at 
the rear of the hall. 

At the far end of the huge room in a dais draped in black with 
some shallow steps leading up to it. On the wall above the dais 
hangs an inverted silver crucifix; on the dais itself, which is 
flanked by a pair of outsize black candles in three-foot silver 
candlesticks, LIANA stands facing the hall from behind a silver 
lectern on which reposes 'The Nine Gates'. Arrayed in the body of 
the hall are the 50 GUESTS, now cowled, each holding a lighted 
black candle. The flickering candle flames bathe the whole scene 
in tremulous chiaroscuro. 

LIANA and the GUESTS are taking it in turns, like priest and 
congregation, to intone passages from the Latin text of 'The Nine 
Gates'. 

CORSO (quietly, to THE GIRL): You stay here and cover me. I'm 
going down. 

Pulling the cowl over his head, he sneaks down the spiral 
staircase, secretes himself in the rear rank of GUESTS, and 
concentrates on LIANA and the book as the litany continues. 

All at once, unseen by us, the doors swing open with a crash and 
BALKAN's deep bass voice punctures the air on a derisive note. 

BALKAN (O.S.): Mumbo-jumbo-mumbo-jumbo-mumbo-jumbo ... 

The GUESTS stop chanting, and fifty cowled heads turn to look for 
the source of this unseemly interruption. Up on the dais, LIANA 
freezes. 

BALKAN: Mumbo-jumbo-mumbo-jumbo-mumbo-jumbo... 

Looking over-life-size in his dark and elegant double-breasted 
suit, he strides toward the dais. Any GUESTS who fail to get out 
of his way in time are brusquely elbowed aside. LIANA watches 
him, transfixed, as he climbs the steps and turns to face the 
bemused GUESTS. 

BALKAN (cont.): Look around you - yes, all of you. What do you 
see? 

The GUESTS involuntarily turn to look at each other. 

BALKAN (cont.): I'll tell you: a bunch of buffoons in fancy 
dress. What are you expecting, an apparition? I'm the only 
apparition you'll see tonight. You really think the Prince of 
Darkness would deign to manifest himself to the likes of you? He 
never has and he never will - never! 

He closes 'The Nine Gates' with a snap and holds it up. 

BALKAN (cont.): You read from his book, yes, but you have no 
conception of its true power. I alone have grasped its secret. I 
alone have fathomed the Master's grand design. I alone am worthy 
to enjoy the fruits of that discovery: absolute power to 
determine my own destiny. 

LIANA finds her voice at last. 

LIANA: You're insane, Boris. (puts out her hand): Give it back at 
once. 

BALKAN rounds on her. 

BALKAN: As for you, Liana de Saint-Damien, you're even guiltier 
than the rest of this pathetic rabble. You have at least some 
idea of what this book can do in the right hands, yet you lend 
yourself to these farcical proceedings, these orgies of ageing 
flesh conducted in the Master's name. You're a charlatan! 

LIANA tries to grab the book, but BALKAN holds it above his head. 

LIANA claws his cheeks in desperation. BALKAN clasps his face, 
dropping the book. 

LIANA makes a dive for it, but BALKAN pounces on her. They roll 
over in a clinch, struggling fiercely. 

BALKAN grabs LIANA by the throat. She tries to break his grip, 
but he redoubles it. Halfway down the dais steps with BALKAN on 
top of her, she fights for breath. Her suffocated, agonized face 
is turned toward the hall. 

The GUESTS shrink back in horror, some of them dropping their 
candles. Hysterical screams rend the air. 

CORSO comes to life. Hampered by his robe, he makes for dais as 
fast as he can, scattering frightened GUESTS in the process. He 
takes hold of BALKAN's shoulders and tries to haul him off LIANA. 

BALKAN, still throttling her, turns to look. He glares at CORSO 
through his heavy hornrims, his features contorted with rage and 
stupefaction. Then, removing one hand from LIANA's throat, he 
deals CORSO a backhanded blow that sends him reeling. 

LIANA seizes the chance to break free. She crawls away and almost 
regains her fact, but BALKAN is too quick for her: grabbing her 
pentacle chain from behind, he proceeds to garrotte her with it. 

LIANA, now on her knees, scrabbles unavailingly at the chain that 
is biting into her neck. Her face turns purple, her tongue begins 
to protrude. 

CORSO looks around wildly for a weapon. He seizes one of the 
three-foot candlesticks and raises it over his head. Suddenly: 

THE GIRL (O.S.): Don't, Corso! 

Startled, he lowers the candlestick and looks up: THE GIRL is 
perched on the gallery balustrade just above him. 

Too preoccupied with Balkan and Liana to wonder what her game is, 
CORSO raises the candlestick once more. 

THE GIRL lands on top of CORSO, bearing him to the ground, and 
immobilizes him with a hammerlock. 

CORSO: Get off me! He'll kill her! 

THE GIRL: Leave them. 

BALKAN completes his grisly work: LIANA's purple face is all too 
reminiscent of Baroness Kessler's. With a final tug at the chain, 
he plants one foot in the small of LIANA's back and sends her 
limp body sprawling across the floor of the hall. 

Screams and cries of horror go up from the GUESTS, who have 
recoiled still further. 

BALKAN straightens up, a somewhat dishevelled but still imposing 
figure despite the scratches on his cheeks. Even his hornrims are 
still in place. He leans fonward, eyes narrowed in a mock 
menacing way, and stamps his foot. 

BALKAN (in a voice like thunder): Boooh! 

With more hysterical screams and cries of dismay, the GUESTS turn 
tall and flee the hall like a herd of panic-stricken cattle, 
jostling each other in their eagerness to get out the door. 

Calmly, without so much as a glance at THE GIRL, CORSO, or 
LIANA's corpse, BALKAN smooths his hair down, picks up 'The Nine 
Gates', and strides majestically after them. 

Silence falls. THE GIRL releases her grip on CORSO's arm, gets 
off him and rises to her knees. He sits up, nursing his elbow and 
staring at her with blank incomprehension. 

CORSO: Why did you do it? 

THE GIRL: Some things are meant to happen. That was one of them. 

CORSO: Don't give me that crap again! You were working for him 
all along! 

THE GIRL: Funny, I thought you were. 

CORSO: You played me for a sucker, the two of you. I don't intend 
to take the rap for that maniac. 

THE GIRL: He just murdered someone with a roomful of witnesses. 
That lets you off the hook for the other killings. You should be 
grateful. 

CORSO: I'm ecstatic. 

He gets to his feet. We hear the sound of cars starting up and 
driving off in a hurry. 

THE GIRL rises too, starts to pat the dust of fhis robe. CORSO 
impatiently evades her hand. 

CORSO (cont.): Where's he off to? 

THE GIRL: What do you care? Your job is done. This is as far as 
you need to go. 

CORSO: The hell it is! The sonofabitch owes me the other half of 
my fee. 

THE GIRL (ironically): Of course, it's just business. I thought 
your curiosity had gotten the better of you. 

CORSO: Okay, so what's meant to happen next? 

THE GIRL: You really want to know? 

125. MERCEDES/MINOR ROAD EXT/DAWN 

THE GIRL, with CORSO red-eyed and unshaven beside her, is driving 
along a country road bordered by rolling fields wreathed in gray 
mist. They've appropriated Liana's Mercedes sedan. 

126. MERCEDES/FREEWAY EXT/DAY 

CORSO has taken over the wheel. THE GIRL is fast asleep with her 
heed on his shoulder. The deserted freeway runs across a viaduct 
that spans a valley hundreds of feet below. The hazy blue shapes 
of mountains can be glimpsed in the distance. 

127. MERCEDES/MOUNTAIN ROAD EXT/SUNSET 

THE GIRL is back behind the wheel, CORSO smoking. Dazzled by the 
setting sun, THE GIRL lowers the visor. The landscape has become 
bleaker and more mountainous. Switchbacks are visible ahead. 

128. MERCEDES/MOUNTAIN ROAD EXT/DUSK 

The Mercedes rounds a bend. 

Visible in the distance, crisply silhouetted against the 
afterglow, is a castle. 

It's the one of which we saw a backlighted photograph on Balkan's 
wall. 

129. CASTLE EXT/DUSK 

THE GIRL pulls up some distance from the archway that was once 
the castle gate. A dark green Range Rover is already parked 
beside it. CORSO and THE GIRL get out and briefly survey the 
derelict building. A glimmer of light is issuing from the arrow 
slits in one of the turrets. 

130. CASTLE COURTYARD EXT/DUSK 

CORSO and THE GIRL cross the deserted courtyard, which is 
littered with fallen masonry. 

131. CASTLE STEPS, BATTLEMENTS EXT/DUSK 

CORSO and THE GIRL climb a dilapidated flight of stone steps to 
the battlements and walk along them to the tower. 

They pause outside the moldering old door and listen. A man's 
voice is faintly audible. 

CORSO puts his hand on the handle. THE GIRL gropes in the pocket 
of her duffel coat and produces the chromium-plated automatic, 
holds it out. 

CORSO hesitates briefly, then stuffs it in his jacket pocket. He 
op ~ the door and enters, followed by THE GIRL. 

132. TURRET CHAMBER INT/NIGHT 

CORSO and THE GIRL are looking down into the interior of the 
turret, which forms a cylindrical chamber. They're on a small 
landing from which a steep flight of unprotected stone steps 
curves down and around the inner wall to the floor of the 
chamber. The floor, littered with debris including worm-eaten 
beams that have fallen from the ceiling far above, consists of 
massive, age-old planks. 

9 1 

A large circle has been chalked in the middle of the floor, and 
within it a square divided into nine boxes numbered 1-9. Each box 
contains some unrelated object: a rusty knife, a piece of cord, a 
stone, a gold ring, a serpentine bracelet, a glass vial, a small 
pile of earth, a quill pen, an hourglass. 

The chamber is illuminated by half a dozen kerosene lamps located 
around the circle but outside it. Also near the circle is a 
camper's collapsible table with various objects on it: a black 
briefcase, 'The Nine Gates', a magnifying glass, a vacuum flask 
and mug. On the floor beside the table are a large jerrican and 
an open suitcase with more books spilling out of it. 

The voice we heard from outside is that of BALKAN, but a BALKAN 
unlike any we have seen before: no jacket or necktie, shirt 
sleeves rolled ' up, vest half unbuttoned, strands of gray hair 
falling over his scratched and sweating face, cheeks flushed, 
eyes ablaze with excitement. 

He's kneeling in front of the numbered boxes and gabbling to 
himself in an expressionless monotone: 

BALKAN: ... eight doors come before the Serpent that guards the 
word, Teth, Enea, Novem, Oded, the number nine, which holds the 
final secret, the mystery of mysteries. The Serpent is the beast 
that always sleeps with one eye open and is reflected in the 
Mirror of Knowledge. (giggles triumphantly) Eight engravings plus 
one, or one plus eight, which coincides with the number that St. 
John of Patmos attributed to the Beast: 666... 

CORSO (to THE GIRL): He needs therapy... 

Feverishly, BALKAN proceeds to scrawl some numerals on the floor 
with a piece of chalk, muttering as he does so. 

BALKAN: Six plus six plus six equals eighteen. One and eight. 
(even more triumphantly): One plus eight equals nine! 

CORSO starts to descend the steps. THE GIRL stays behind, sits 
down on the top step, props her chin on her hand, and watches the 
proceedings. 

BALKAN rises with chalk dust all over the knees of his pants. He 
goes to his briefcase and takes out a sheaf of torn engravings. 

CORSO has reached the foot of the steps. BALKAN, turning to 
resume his place in the circle, catches sight of him. He freezes 
in disbelief, and a long moment passes before he speaks. 

BALKAN (cont.): What are you doing here?! 

CORSO: I thought I'd drop in before they put you behind bars. 

BALKAN: Go away! 

CORSO: We had a deal, remember? 

BALKAN: A deal?! What impertinence! You bungled it, damn you! You 
failed me all along the line! Thanks to your lack of 
initiative,Ii was compelled to do my own dirty work. And I did 
it! I got these myself! See, here they are! (brandishes the 
engravings, speaks with mounting vehemence) Nine engravings or 
nine doors, and only an initiate can open them. Each door has two 
keys, each engraving discloses a number, a secret element and 
keyword to be interpreted in the light of reason and the Cabbala, 
the one true philosophy! 

CORSO: I want my money. 

BALKAN: Don't you understand what's going on here? 

He returns to the circle, kneels down again, and deals out the 
engravings like playing cards, one to a box, leaving three boxes 
empty. Meantime: 

BALKAN (cont.): You have before you the mystery of which men have 
dreamed throughout the centuries. Thousands have died an 
agonizing death in hopes of just a glimpse of what you're about 
to see! 

CORSO: Yeah? What's that, Old Nick in person? 

BALKAN: Don't be ridiculous! He has never appeared to anyone, 
never! He's a spirit - the spirit of pure evil. He manifests 
himself through his servants, of whom I'm proud to be one! 

He rises, walks quickly over to the little table, and opens 'The 
Nine Gates' . Turning over several pages, he tears out an 
engraving. His voice betrays rising excitement, his face assumes 
a look of insane fervour. 

BALKAN (cont.): Three copies, but only nine of their twenty-seven 
engravings hold the key, and I have them all! (tears out two more 
engravings in quick succession) 1 have only to complete the 
sequence. Then the Serpent will enter the seal of Saturn, and I - 
I shall enter the Ninth Gate! 

CORSO: Cut the crap and write me a cheque. 

BALKAN returns to the circle, kneels down once more and neatly 
positions the three engravings in the empty boxes. Then he rises, 
goes' to the table, and pours himself a drink from the vacuum 
flask. He gargles with it, swallows, and shakes himself like a 
wet dog. Whatever the flask contained, it seems to have 
invigorated him. 

Seizing the jerrican, he removes the cap and dribbles gasoline 
around the circle, then picks up one of the kerosene lamps and 
hurls it at the floor. The lamp smashes and ignites the gasoline. 
instantly, he's ringed with fire. 

He draws himself up and stands erect in the canter of the circle 
with flames dancing all around him. 

BALKAN: I give you my allegiance, Master. I surrender myself unto 
you body and soul. Let me fear neither noose, nor sword, nor 
poison. Let me walk unscathed among lepers and the plague-ridden. 
Erase me from the Book of Life and inscribe me in the black Book 
of Death. Let it be no! Let it be so now! 

His fervent voice and the wild-eyed, demented look on his face 
are such that not even CORSO is tempted to break the momentary 
silence that ensues. 

BALKAN (cont.): (ecstatically): Yes, master, yes! Oh, thank you, 
thank you! I can feel the power flowing through me like an 
electric current, rendering me capable of any achievement, mental 
or physical! I could float on air, walk on water. 

He stoops and dabbles his hands in the ring of fire. 

BALKAN (cont.): See? 1 plunge my hands in fire and feel no heat: 

He picks up the jerrican and inverts it over his head, dousing 
himself in the contents, then hurls it aside. 

CORSO: Hey, don't be stupid! 

But BALKAN is deaf to reason. 

BALKAN (in a mounting frenzy): Admay, Eloy, Agla, Zatel, Gebal, 
Elimi, Ashtoreth, Moloch, Shamash, Dagon... 

With a whoosh, he himself catches fire. Flames play over his 
ecstatic figure. 

BALKAN (cont.): It's miraculous! I feel nothing, nothing at all! 

He emits another triumphant laugh that soars up the scale until 
it becomes a high-pitched scream of agony. He starts to caper 
around, slapping at his clothes, his face, his hair. 

CORSO has regained his feet. He takes the automatic from his 
pocket and sends it slithering across the floor and through the 
ring of flames. 

CORSO: Here, you idiot! 

He retreats up the steps with horror written on his face. THE 
GIRL has risen to her feet. He takes her hand and, with a last 
backward glance, hustles her outside. 

133. CASTLE COURTYARD EXT/NIGHT 

Balkan's wild screams reverberate around the walls as CORSO and 
THE GIRL hurry across the courtyard. 

134. CASTLE EXT/NIGHT 

CORSO and THE GIRL are standing beside the Mercedes. Smoke and 
tongues of flame are issuing from the arrow slits of Balkan's 
tower. His screams rise in a crescendo. Then a gunshot cuts them 
off like a knife. 

CORSO: He really thought it would work. 

THE GIRL: He wasn't to know it wouldn't. 

CORSO stares at her, momentarily puzzled, then at the blazing 
castle, then back at her. 

CORSO: You didn't do anything to help him, Greeneyes, not this 
time. 

THE GIRL: I'm your guardian angel, remember? 

She lays her palm against his cheek, then crooks her hand around 
the nape of his neck and draws his face toward hers, kisses him 
tenderly on the lips. CORSO returns her kiss. He folds her in his 
arms and holds her close. The fiery glow dances over their 
entwined figures. 

135. CASTLE EXT/NIGHT 

LONG SHOT of the castle ablaze. The flames have spread from 
Balkan's tower to the rest of the building. Smoke and flames are 
now belching from it. The sky overhead is tinged with crimson. 

136. PARIS HOTEL: BATHROOM, BEDROOM, CORRIDOR INT/EARLY MORNING 

CORSO, his hair damp from the shower and a towel around his 
waist, is halfway through shaving when there's a knock on the 
bathroom door. 

One cheek daubed with foam, he opens it to find himself 
confronted by the FLOOR WAITER, check pad and ballpoint in hand 

FLOOR WAITER: Bonjour, m'sieur. Votre petit dＫeuner. 

CORSO: Oh. Sure. 

Taking the pad, he emerges into the bedroom and scribbles his 
signature, then stops short: there's a breakfast cart in the 
middle of the room, but the bed is empty. No sign of The Girl or 
her clothes. 

CORSO (cont.): Where is she? 

WAITER: Pardon? 

CORSO: Madame, ou elle est? 

FLOOR WAITER : Je ne ''ai pas vue, m'sieur. 

He makes for the door and exits. 

CORSO catches hold of the door just as it's closing, puts his 
head out into the corridor, looks right and left. No one in sight 
but the FLOOR WAITER, who casts a puzzled glance over his 
shoulder as he walks off. 

137. PARIS HOTEL: LOBBY, RECEPTION DESK INT/DAY 

CORSO, now dressed but unshaven, hurries over to the reception 
desk, where GRUBER is on duty. 

GRUBER greets him with an almost imperceptible inclination of the 
head. 

GRUBER: Good morning, Mr. Corso. 

CORSO: Morning, Gruber. The young lady I came with, have you seen 
her? 

GRUBER: Yea, sir. She went out not long ago. 

He reaches behind him and produces a folded message slip from one 
of the pigeonholes. 

GRUBER (cont.): She asked me to give you this. 

He hands the slip to CORSO, who opens it. With him, we read: 

'See you around, maybe.' 

And below: 

'PS. The 9th Engraving was a forgery.' 

138. TOLEDO STREET, ALLEY EXT/DAY 

CORSO's footsteps echo as he walks along one of Toledo's narrow 
medieval streets. The steel-framed glasses with the cracked lens 
have been replaced by a new pair with gold frames. He's wearing a 
smart new overcoat and has a new leather bag slung from his 
shoulder. 

He rounds a corner and heads down the deserted alleyway we saw in 
Scene 27. No scaffolding, just sandblasted walls and freshly 
painted window frames and grilles. 

He reaches the doorway leading to the inner courtyard, hears a 
woman's strident cries, bumps into THE BOY, who comes running out 
as before. 

139. TOLEDO: COURTYARD, CENIZA BROS. WORKSHOP EXT/DAY 

CORSO crosses the courtyard to the steps that led down to the 
Cenizas' workshop. He stops short and stares. 

The old door - 'HERMANOS CENIZA - RESTAURACION DE LIBROS' - has 
been taken of � its hinges and propped on its side against the 
basement wall. The display window is just a gaping hole: the 
window frame has been ripped out, exposing the masonry 
surrounding it. The whirr of a power tool can be heard. 

CORSO, looking puzzled, descends the steps. 

140. TOLEDO: CENIZA BROS. WORKSHOP INT/DAY 

CORSO pauses in the doorway and surveys the interior. The hand 
press has disappeared and the floor is littered with debris. Pale 
rectangular patches on the grey walls indicate where counters and 
cabinets have been ripped out. 

TWO SPANISH WORKMEN are busy detaching an old cabinet from the 
wall with an electric screwdriver. 

CORSO: Oiga! 

He has to repeat himself before they interrupt their activities. 

1ST WORKMAN: Seftor? 

CORSO: Los Hermanos Ceniza? 

1ST WORKMAN: Los Ceniza? (glances at the 2ND WORKMAN): Est&n 
muertos. 

CORSO: Como muertos? Quando? 

1ST WORKMAN: Oh, hace anos, anos. 

CORSO: ANOS?! 

The 2ND WORKMAN comes over, wiping his hands on his apron. 

2ND WORKMAN: Ingles? 

CORSO: Americana. 

2ND WORKMAN (as if that explained everything): Ah... They dead, 
many years. 

CORSO (more and more puzzled): But they were here not long ago - 
I spoke with them. 

The 2ND WORKMAN looks at his colleague, shrugs and chuckles as if 
to convey that Corso is crazy, like most foreigners. 

1ST WORKMAN: Disculpe. 

He indicates that CORSO is in the way. 

Utterly disconcerted, CORSO backs up as they manhandle the 
cabinet away from the wall and tilt it forward prior to laying it 
face down on the floor. 

As they do so, a dusty piece of paper slides off the top of the 
cabinet and seesaws to the floor like a falling leaf. 

Instinctively, CORSO stoops and picks it up. He looks at it idly, 
then more closely. His eyes widen. 

It's the Ninth Engraving: THE WOMAN RIDING A SEVEN-HEADED DRAGON 
WITH A CASTLE ABLAZE IN THE BACKGROUND. 

The woman's face bears a strong resemblance to that of The Girl. 

141. TOLEDO: ALLEY EXT/DAY 

CORSO walks back along the alleyway with the engraving in his 
hand. His receding figure dwindles to a speck. 

T H E E N D 






`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
