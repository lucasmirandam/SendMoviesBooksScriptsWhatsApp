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

ADAPTATION
by
Charlie Kaufman and Donald Kaufman
adapted from the book
THE ORCHID THIEF
by
Susan Orlean
September 24, 1999
Second Draft
EXT. ROCKY TERRAIN - DAY
Endless barren landscape. No sign of life. The atmosphere
is hazy, toxic-looking. Volcanoes erupt. Meteors bombard.
Lightning strikes, concussing murky pools of water. Silence.
INT. LARGE EMPTY LIVING ROOM - MORNING
SUBTITLE: HOLLYWOOD, CA, FOUR BILLION AND FORTY YEARS LATER
Beamed ceilings and ostentatious fireplace. A few birthday
cards on the mantel, two of them identical: "To Our Dear Son
on His Fortieth Birthday." Charlie Kaufman, a fat, balding
man in a purple sweater with tags still attached, paces the
room. His incantational voice-over carpets the scene.
KAUFMAN (V.O.)
I am old. I am fat. I am bald. My
toenails have turned strange. I am
repulsive. How repulsive? I don't know
for I suffer from a condition called Body
Dysmorphic Disorder. I am fat, but am I
as fat as I think? My therapist says no,
but people lie. I believe others call me
Fatty behind my back. Or Fatso. Or,
facetiously, Slim. But I also believe
this is simply my own perverted form of
self-aggrandizement, that no one really
talks about me at all. What possible
interest is an old, bald, fat man to
anyone? I am repulsive. I have never
lived. I blame myself. I --
EXT. STATE ROAD 29 - DAWN
A lonely two-lane highway cutting through swampland.
BRITISH NARRATOR
As natural selection works solely by and
for the good of each being, all corporeal
and mental endowments will tend to
progress towards perfection.
Suddenly, a beat-up white van barrels around a curve. It's
followed closely by an old green Ford.
SUBTITLE: STATE ROAD 29, FLORIDA, FIVE YEARS EARLIER
INT. WHITE VAN - CONTINUOUS
John Laroche drives. He's a skinny man with no front teeth.
The van is piled with bags of potting soil, gardening junk.
A Writings of Charles Darwin audio cassette case is on the
seat next to Laroche.
(CONTINUED)
BRITISH NARRATOR
It is interesting to contemplate an
entangled bank, clothed with many plants
of many kinds, with birds singing...
Laroche tries to contemplate the plants and birds whizzing
by. Almost too late, he spots the Fakahatchee Strand State
Preserve sign and makes a squealing right onto the dirt road
turn-off. The cassette case flies from the seat and halfburies itself in an open bag of peat.
INT. GREEN FORD - CONTINUOUS
Nirvana blasts. Russell, Vinson, and Randy, three young
Indian men, pass a joint and watch the erratic van ahead.
RUSSELL
Laroche is asleep at the wheel.
RANDY
Crazy White Man is now Drowsy White Man.
They share a stoned laugh.
EXT. NEW YORK APARTMENT BUILDING - NIGHT
SUBTITLE: NEW YORK, TWO YEARS LATER
Late night street. The click-click of typing. We move
slowly up the building to the only glowing window.
ORLEAN (O.S.)
(wistful)
John Laroche is a tall guy, skinny as a
stick, pale-eyed, slouch-shouldered and
sharply handsome despite the fact that he
is missing all his front teeth.
In the window, lit by a single desk lamp, a woman types.
INT. APARTMENT - CONTINUOUS
We glide over the desk piled with books about orchids, past a
photo of Laroche tacked to an overwhelmed bulletin board, and
come to rest on a woman typing. It's Susan Orlean: pale,
delicate and blond. We lose ourselves in her melancholy
beauty. She turns to the camera and talks to us.
2.
CONTINUED:
(CONTINUED)
ORLEAN
Two years ago I went to Florida to meet
Laroche after reading a small article
about a white man and three Seminole men
arrested with rare orchids they'd stolen
out of a place called the...
INT. RANGER'S TRUCK - MID-MORNING
Tony, a ranger, drives along a dirt road past the Fakahatchee
Strand State Preserve sign and enters the swamp. He sees the
white van and Ford parked ahead, spots a Seminole license
plate on the Ford. He pulls over down the road, and whispers
into his C.B.
TONY
We got a Seminole, or Seminoles, in the
swamp. I'm on Janes Scenic Drive just
east of Logging Road Twelve. I repeat,
Indians in the swamp.
Tony waits for a response. Nothing.
TONY (cont'd)
Indians in the swamp.
Nothing still. Tony clears his throat into the radio.
RADIO VOICE
I don't know what you want me to say.
TONY
Barry, Indians do not go on swamp walks.
If there are Indians in the swamp, they
are in there for a reason.
No response. Tony glowers, gets out of the truck, watches
the vehicles through binoculars. Nothing. He straightens
his cap. Mosquitoes land on his neck, his nose, his lips.
INT. L.A. BUSINESS LUNCH RESTAURANT - MIDDAY
Kaufman, wearing his purple sweater sans tags, sits with
Valerie, an attractive woman in wire-rim glasses. They pick
at salads. Kaufman steals glances at her lips, her hair, her
breasts. She looks up at him. He blanches, looks away.
KAUFMAN (V.O.)
I'm old. I'm bald. I'm repulsive.
VALERIE
We think you're just great.
3.
CONTINUED:
(CONTINUED)
KAUFMAN
(with studied modesty)
Oh, thank you.
Valerie absently rubs her nose. Kaufman self-consciously
rubs his nose in response.
VALERIE
And we're thrilled you're interested.
Valerie rubs her nose again. Kaufman pulls at his nostril.
A rivulet of sweat slides down his forehead. Valerie watches
it. Kaufman sees her watching it. She sees him seeing her
watching it. She looks at her salad. He quickly swabs.
KAUFMAN
Oh, thanks, wow. That's nice to hear.
VALERIE
You have a really unique voice.
KAUFMAN
Well, thanks. That's... I appreciate
that.
VALERIE
Very talented. Really.
KAUFMAN
Thanks. Thank you. Thanks.
VALERIE
(looking up)
So --
Kaufman's brow is dripping again. He smiles, embarrassed.
KAUFMAN
Sort of hot in here.
VALERIE
(kindly)
Yeah, it is a bit. So, why don't you
tell me your thoughts on this crazy
little project of ours.
In one motion, Kaufman swabs his forehead and pulls a book
entitled The Orchid Thief from his bag.
KAUFMAN
First, I think it's a great book.
4.
CONTINUED:
(CONTINUED)
VALERIE
Laroche is a fun character, isn't he?
Kaufman nods, flips through the book, stalling. There's a
smiling author photo of Susan Orlean on the inside back
cover.
KAUFMAN
And Orlean makes orchids so fascinating.
Plus her musings on Florida, orchid
poaching. Indians. Great, sprawling New
Yorker stuff. I'd want to remain true to
that, let the movie exist rather than be
artificially plot driven.
VALERIE
Okay, great, great. I guess I'm not
exactly sure what that means.
KAUFMAN
Oh. Well... I'm not sure exactly yet
either. So... y'know, it's...
VALERIE
Oh. Okay. Great. So, um, what --
KAUFMAN
It's just, I don't want to compromise by
making it a Hollywood product. An orchid
heist movie. Or changing the orchids
into poppies and turning it into a movie
about drug running. Y'know?
VALERIE
Oh, of course. We agree. Definitely.
KAUFMAN
Or cramming in sex, or car chases, or
guns. Or characters learning profound
life lessons. Or characters growing or
characters changing or characters
learning to like each other or characters
overcoming obstacles to succeed in the
end. Y'know? Movie shit.
Kaufman is sweating like crazy now. Valerie is quiet for a
moment.
VALERIE
See, we thought maybe Susan Orlean and
Laroche could fall in love during the
course of --
5.
CONTINUED: (2)
(CONTINUED)
KAUFMAN
Alienated journalist writes about
passionate backwoods guy and he teaches
her to love. I mean, it didn't happen,
it wouldn't happen. It's Hollywood.
INT. OFFICE - DAY
SUBTITLE: HOLLYWOOD, CALIFORNIA, THREE WEEKS EARLIER
The office is decorated with potted flowers, Audobon posters,
lots of books. Kaufman, nervous and sweaty, watches
Margaret, a soulful development executive, unpack boxes.
KAUFMAN
So anyway I just wanted to stop by to
congratulate you on your promotion.
MARGARET
Well, thanks again. It's all so stupid.
KAUFMAN
I think it's great. Your photo in the
trades and everything. Pretty cool.
MARGARET
Anyway. Yeah. So what's up with you?
KAUFMAN
I'm considering jobs. Mostly crap.
There's one you might like, about
flowers.
MARGARET
Flowers? Really? What is it?
KAUFMAN
They want me to do an adaptation of a
book called The Orchid Thief.
MARGARET
Oh my God! You're kidding? I read that!
I loved that book!
Kaufman is thrilled; he's scored. Margaret pulls a copy of
The Orchid Thief from her bookshelf.
MARGARET (cont'd)
See, see, see! I'm not lying to you!
KAUFMAN
I loved the book.
6.
CONTINUED: (3)
(CONTINUED)
MARGARET
Oh, Charlie, orchids are the most amazing
flowers. So complex.
Margaret plops onto the couch next to Kaufman.
KAUFMAN
I know. They're really great.
MARGARET
You should take this job. Doesn't it
sound exciting, to immerse yourself in a
real subject and learn everything about
it? Blake wrote about seeing heaven in a
wild flower. And after you learn all
this stuff, you can teach me!
KAUFMAN
(thrilled but controlled)
That'd be fun.
MARGARET
God, they're such beautiful flowers. And
so sexy. Y'know?
(whispering)
Did you know that orchid means --
KAUFMAN
Testicle. I just read that.
MARGARET
(shrieks with delight)
Testicle! Can you believe it!
Margaret giggles happily. Kaufman giggles weirdly.
MARGARET (cont'd)
I swear, it'd be fucking great for
someone to have the testicles to make
that book into a movie, man. Instead of
this bullshit all the time. Something
not about sex and violence and car chases
and love stories, people learning
profound lessons. Jesus, isn't nature
enough?
EXT. SWAMP - MORNING
Hot, dirty, miserable. Laroche leads the Indians through
waist-high black water. He points out a turtle on a rock.
7.
CONTINUED:
(CONTINUED)
LAROCHE
Pseudemys floridana. Did you fellas know
you fellas believe the world rests on the
back of a turtle? Not you fellas
specifically. Although, maybe you fellas
specifically. That I can't speak to.
The Indians ignore him. They trudge. Laroche spots
something else, a dull green root wrapped around a tree. He
stops, circles the tree. His eyes widen in reverent awe.
LAROCHE (cont'd)
A ghost. Polyrrhiza Lindenii.
The Indians come around. Laroche stares at a single
beautiful, glowing white flower hanging from the tree. He
tenderly caresses the petals. Then, business-like:
LAROCHE (cont'd)
Cut it down, Russell.
Russell pulls out a hacksaw, begins sawing through the tree.
INT. RESTAURANT - MIDDAY
Kaufman still sweats as he talks to Valerie.
KAUFMAN
...plus I love the idea of learning all
about orchids. I really admire those
guys who know everything about ants or
fungus or whatever. I'd like to be more
like that. See, I tend to write selfinvolved, self-loathing... even
masturbatory stuff.
VALERIE
And it's wonderful, by the way.
KAUFMAN
Thanks. That's nice to hear. But I need
to challenge myself as a writer. I've
arrived at an age where I want to think
about the world in a different way.
VALERIE
Adapting someone else's work is certainly
an opportunity to think differently.
8.
CONTINUED:
(CONTINUED)
KAUFMAN
Yes. And I welcome the challenge of
taking a small subject, like orchids,
something that would never draw people
into a theater and making that
fascinating. I want to show people
heaven in a wildflower. As Blake wrote.
INT. PET STORE (1972) - DAY
SUBTITLE: NORTH MIAMI, TWENTY-SIX YEARS EARLIER
A serious ten year old boy walks from cage to aquarium,
studying the inhabitants. He turns to his frumpy mother,
who's been following at a respectful distance.
BOY
Any one at all, ma?
She nods sweetly. The boy returns to his search. He stops
at a small turtle in an aquarium.
BOY (cont'd)
I want this then.
MOTHER
(hugging him)
A wonderful choice! And spiritually
significant! Did you know that Native
Americans believe the whole world rests
on the back of a turtle?
BOY
Cool! I can't wait to tell the guys.
EXT. SWAMP - MORNING
As Laroche supervises, Randy, Russell, and Vinson saw through
tree branches supporting lovely flowering orchids. They
unceremoniously stuff the flowers into bulging pillowcases.
INT. ROMANTIC RESTAURANT - EVENING
Kaufman eats with Margaret. Margaret raises a glass.
MARGARET
To a fucking awesome assignment, man.
Kaufman, pleased, clicks glasses. He takes a breath.
KAUFMAN
Hey, I'm going to an orchid show Sunday?
For research? Maybe you'll come?
9.
CONTINUED:
(CONTINUED)
MARGARET
Absolutely. I think David, this guy I'm
seeing, would enjoy it, too. He's a real
naturalist. Okay if he comes along?
KAUFMAN
(covering heartbreak)
Yeah, of course. Sure.
MARGARET
He wants to meet you anyway. All I do is
tell him how great you are.
KAUFMAN
Oh, thanks. That's nice to hear.
MARGARET
You'll like him. He's so honest and
smart. It's rare to find someone in this
town who thinks about things other than
this fucking business, y'know?
KAUFMAN
Yeah. That's great. He sounds great.
MARGARET
Like the other day we were in bed
discussing Hegel. Hegel! In bed! It
was fucking amazing. Have you read much?
KAUFMAN
Y'know, a long time ago. A bit. Y'know.
MARGARET
Well, anyway, David and I were discussing
his Philosophy of History and I was...
The entrees arrive.
MARGARET (cont'd)
... struck by his notion that history is
a human construct...
Kaufman begins the laborious task of getting through his
plate of food. He can no longer look up at Margaret.
 KAUFMAN
Yeah.
MARGARET
... that nature doesn't exist
historically, but rather cyclically.
10.
CONTINUED:
(MORE)
(CONTINUED)
So whereas human history spirals forward,
building upon itself, nature...
INT. BARNES AND NOBLE - DAY
Kaufman pulls a bunch of orchid books off the shelf, carries
them to the register, along with a book on Hegel, which
features an engraving of the philosopher on the cover.
Kaufman waits in line and watches the tattooed female cashier
flirting with the handsome guy ahead of him. He studies
their interaction, the way she looks at him. Her eyes, her
lips. The guy leaves and the cashier waves Kaufman over. As
she rings him up, she expresses no interest in him. He's
hurt and fixates on a sexy flower tattoo on her arm. She
catches him, pulls down her sleeve.
EXT. JANES SCENIC DRIVE - MORNING
Tony waits, sweaty and mosquito bitten. The radio crackles.
RADIO VOICE
How's that Injun round-up going, Tony?
TONY
Fuck you, Barry, you fuckin'...
Rustling near the parked cars. Tony tenses. Laroche steps
from the swamp with the Indians, who haul the pillowcases.
TONY (cont'd)
We got poachers.
(into the radio, pleased)
We got fuckin' poachers, Barry. Ha!
Tony jumps into the truck and turns it around.
INT. ORLEAN'S APARTMENT - NIGHT
Orlean types. Her delicate fingers move with a pianist's
grace across the computer keyboard.
ORLEAN (V.O.)
Orchid hunting is a mortal occupation.
EXT. TROPICAL RIVER - DAY
SUBTITLE: ORINOCO RIVER, ONE HUNDRED YEARS EARLIER
An overturned boat and uprooted orchids float on the river.
ORLEAN (V.O.)
The Victorian-era orchid hunter William
Arnold drowned on a collecting
expedition.
11.
CONTINUED: (2)
MARGARET (cont'd)
EXT. CLIFF - DAY
SUBTITLE: SIERRA LEONE
A man lies at the bottom of a cliff, clutching a flower.
ORLEAN (V.O.)
Schroeder fell to his death.
EXT. FIELD - DAY
SUBTITLE: RIO HACHA
A man lies face down near an unplucked orchid.
ORLEAN (V.O.)
Endres was shot dead in Rio Hacha.
EXT. RIVER - DAY
SUBTITLE: YANGTZE RIVER
An emaciated, limping, wheezing man with a makeshift bandage
wrapped around his head, docks his boat.
ORLEAN (V.O.)
Augustus Margary survived toothache,
rheumatism, pleurisy, and dysentery...
Someone steps from behind a bush, stabs him, steals his boat.
ORLEAN (V.O.) (cont'd)
... only to be murdered when he completed
his mission and traveled beyond Bhamo.
The murderer sails down river.
ORLEAN (V.O.) (cont'd)
Laroche loved orchids but I came to
believe he loved the difficulty and
fatality of getting them almost as much
as he loved the orchids themselves.
EXT. JANES SCENIC DRIVE - MORNING
Tony steps out of his truck. Laroche smiles warmly.
TONY
Morning. May I ask what you gentlemen
have in those pillowcases?
LAROCHE
Yes, sir, you absolutely may.
12.
(CONTINUED)
Laroche goes back to directing the Indians. Tony's confused.
TONY
Okay, I'm asking then.
LAROCHE
Oh, Okay then! Let's see...
(peeking in bags)
Five kinds of bromeliad, one peperomia,
nine orchid varieties. About a hundred
and thirty plants all told, which my
colleagues have removed from the swamp.
TONY
You're aware that it's illegal to remove
plants or animals from state owned land?
LAROCHE
And don't forget these plants are all
endangered, sir. Every one of them.
TONY
Exactly. Well, that's exactly the issue.
This is a state preserve.
LAROCHE
Yes, sir, it is.
(afterthought)
Oh, and my colleagues are all Seminole
Indians. Did I mention that? You're
familiar, I'm sure, with the State of
Florida v. James E. Billie.
Tony nods, even though he has no idea.
LAROCHE (cont'd)
So you know that even though Seminole
Chief Billie killed a Florida panther,
one of, what, forty in the entire world?
Laroche looks to the Indians for confirmation. They give it.
LAROCHE (cont'd)
The state couldn't successfully prosecute
him. Because he's an Indian and it's his
right. As repugnant as you or I as white
conservationists might find his actions.
TONY
But --
13.
CONTINUED:
(CONTINUED)
LAROCHE
Not to mention the failed attempts on
three separate occasions to prosecute
Seminoles for poaching palm fronds,
which, I believe, they use to thatch the
roofs of their traditional chickee huts.
Laroche again looks to the Indians for confirmation.
RUSSELL
He's right. That's exactly what we use
them for. Chickee huts.
Tony looks at the Indians.
RANDY
Yeah.
VINSON
Yeah.
RUSSELL
Yeah.
TONY
Yeah, but I don't... I can't let you
fellas go yet. Just hold on while I...
(into radio)
Hey, Barry, can I get some help? Barry?
INT. RENTAL CAR - DAY
We watch Orlean as she drives out of the Miami Airport
parking lot, onto the freeway, past congestion and
billboards. Her mournful face glows beautifully,
dramatically with golden sunlight. She talks to us.
ORLEAN
Nothing in Florida seems hard or
permanent. The developed places are just
little clearings in the jungle, but the
jungle is unstoppably fertile, everything
is always growing or expanding. At the
same time, the wilderness disappears
before your eyes.
Orlean gets quiet. Her eyes tear.
EXT. SUBURBAN BACKYARD - DAY
SUBTITLE: AKRON, OHIO, THIRTY YEARS EARLIER
14.
CONTINUED: (2)
(CONTINUED)
Lush color. A seven year old girl is gleeful as her parents
push her on a swing. She watches from the air as her mother
and father, deeply in love, kiss between pushes.
EXT. BIG SPANISH-STYLE HOUSE - DAY
Kaufman gets out of his car with his books. Two teenage
girls walk by. Kaufman watches as one whispers to the other.
He thinks he hears the word "Fatso." The girls giggle.
INT. EMPTY HOUSE - A COUPLE OF MINUTES LATER
Kaufman passes a hall mirror, regards himself glumly, and
climbs the stairs.
KAUFMAN (V.O.)
I am fat. I am repulsive. I cannot bear
my own reflection.
At the landing Kaufman comes upon Donald, his identical twin
brother, on his back in pajama bottoms, opening a gift box.
DONALD
Did you open your present from mom yet?
KAUFMAN
What's with you?
DONALD
My back.
Kaufman nods vaguely, continues down the hall. Donald pulls
a purple sweater from the box, calls after Kaufman.
DONALD (cont'd)
Hey, Charles, you'll be glad, I have a
plan to get me out of your house pronto.
KAUFMAN
A job is a plan. Is your plan a job?
DONALD
(big build up)
I'm gonna be a screenwriter! Like you!
Kaufman doesn't respond, enters his bedroom.
DONALD (cont'd)
I know you think this is just one of my
get-rich-quick schemes. But I'm doing it
right this time. I'm taking a seminar!
15.
CONTINUED:
INT. EMPTY BEDROOM - CONTINUOUS
Kaufman lies face down on his mattress on the floor.
DONALD (O.S.)
It's only five hundred bucks!
KAUFMAN
(muffled by pillow)
Screenwriting seminars are bullshit.
Kaufman pulls a copy of Variety, open to a photo of Margaret,
from under his pillow. He gets lost in the picture.
DONALD (O.S.)
In theory I agree with you. But this one
is highly regarded within the industry.
KAUFMAN
Donald, don't say "industry."
Donald, now in the sweater, appears on all fours in the
doorway. Kaufman puts the paper back under his pillow.
DONALD
I'm sorry, I forgot. Charles, this guy
knows screenwriting. People from all
over come to study his method. I'll pay
you back, man. As soon as I sell --
KAUFMAN
Let me explain something to you.
DONALD
Yeah, okay.
KAUFMAN
Anybody who says he's got "the answer" is
going to attract desperate people. Be it
in the world of religion --
DONALD
(indicating his back)
I just need to lie down while you explain
this to me. Sorry. I apologize.
(lies down, stares at ceiling)
Okay, go ahead. Sorry. Okay. Go.
KAUFMAN
There are no rules to follow, Donald, and
anybody who says there are, is just --
16.
(CONTINUED)
DONALD
Not rules, principles. McKee writes:
"A rule says, you must do it this way. A
principle says, this works... and has
through all remembered time."
KAUFMAN
The script I'm starting, it's about
flowers. No one's ever done a movie
about flowers before. So, there're no
guidelines, and that's good because --
DONALD
What about Flowers for Algernon?
KAUFMAN
That's not about flowers. And it's not a
movie.
DONALD
Oh, okay, I never saw it. Go ahead.
KAUFMAN
My point is, those teachers are dangerous
if your goal is to do something new. And
a writer should always have that goal.
Writing is a journey into the unknown.
It's not building a model airplane.
Donald stares at the ceiling, fuming. Kaufman waits.
Getting no no response, he pulls out his Hegel book and
reads:
KAUFMAN (V.O.)
Each being is, because posited, an opposited, a conditional and conditioning,
the Understanding completes these its
limitations by positing the opposite...
Kaufman's head is spinning. He puts the book down. Both
brothers stare at the ceiling. Donald finally speaks
DONALD
McKee is a former Fulbright scholar. Are
you a former Fulbright scholar, Charles?
INT. KITCHEN (1972) - EVENING
The young boy eats with his family. His father wears a
backbrace, his sister is weak and anemic. Only his sweet
mother pays attention as he chatters excitedly.
17.
CONTINUED:
(CONTINUED)
BOY
Turtles are of the order Testudine!
MOTHER
Really? Testudine?
BOY
Yeah. And they're found on every
continent! Except Antarptica!
MOTHER
Antarctica. Every continent, huh?
BOY
Uh-huh. The turtle shell has remained
unchanged for two hundred million years!
And there's all different kinds, Pelusio
gabonensis, Phyrnops rufipes, Chitra
indica, Dermochelys coriacea coriacea...
EXT. SWAMP - LATE MORNING
Ranger, sheriff, and state police cars are parked near the
van and Ford. Lots of sweating, uniformed people. The
pillowcases have been emptied, the plants lie on black
plastic sheets. A guy sprinkles water on them. Laroche
enthusiastically helps Ranger Mike Owen catalogue the
flowers. The Indians lean against their car, bored and
smoking. Nirvana seeps tinnily out the car window.
LAROCHE
... and what we have here, my friend, is
... thirteen Encyclia Cochleata... four
Encyclia Tampensis --
MIKE OWEN
I'm sorry, Encyclia what?
LAROCHE
(pointing to each)
Coch-le-ata. Tem-pen-sis.
(checks Owen's spelling)
Okay, let's see, twenty-two Epidendrum
Nocturnum. A very good haul. Two
Catopsi Floribunda. Three Polyrrhiza
Lindenii, the ghost orchid. What I
really came for. These sweeties grow
nowhere in the U.S. except in your swamp.
MIKE OWEN
That true? Boy, you really know your
plants, Mr. Laroche.
18.
CONTINUED:
(CONTINUED)
LAROCHE
Yeah. I do. I'm one of the world's
foremost experts. But that'll all be
revealed at the hearing.
INT. EMPTY DINING ROOM - DAY
Kaufman sits at a card table, picking at a salad and reading
an orchid book. Donald lies on the floor, chomping a hoagie
and reading a copy of Story by Robert McKee.
KAUFMAN (V.O.)
The Orchidaceae is a large, ancient
family of perennial plants with...
Kaufman, bored, looks over at Donald, whose cheeks are
stuffed with food.
DONALD (V.O.)
The most memorable, fascinating
characters tend to have not only a
conscious but an unconscious desire.
Although these characters are unaware of
their subconscious need...
KAUFMAN
Maybe you should watch what you eat,
Donald. Did you ever consider maybe
you're a bit fat? Does it ever occur to
you, you kind of represent me in the
world? That people look at you and
think, he's Charlie's twin, therefore
that's what Charlie must look like?
DONALD
By the way, mom's paying for the seminar.
KAUFMAN
Did you even hear what I said?
DONALD
Yeah. Anyway. I pitched mom my
screenplay --
KAUFMAN
Jesus, don't say "pitch."
DONALD
Sorry. Anyway, she loved my... telling
of my story to her. She said it's like
"Silence of the Lambs" meets "Psycho."
19.
CONTINUED:
(CONTINUED)
KAUFMAN
Hey, maybe you and mom could collaborate.
I hear she's really good with structure.
DONALD
You think you're so superior, Charles.
Well, I'm really gonna write this. And
you'll see. And, and... you suck, okay?
The two glare at each other. They go back to their books.
KAUFMAN (V.O.)
Florida is a landscape of transition...
DONALD (V.O.)
Do not proliferate characters; do not
multiply locations. Rather than
hopscotching through time, space, and
people, discipline yourself to a
reasonably contained cast and world...
INT. RENTAL CAR - DAY
Orlean drives on State Road 29, past prefab housing, into
swampland. She talks to us.
ORLEAN
Florida is a landscape of transition and
mutation, a hybrid of unruliness and
orderliness, nature and artifice.
She brushes a wisp of hair from her face and tucks it behind
her small, pretty ear. We linger on the ear, which grows
pink with sunlight. Orlean catches us and smiles shyly.
INT. EMPTY BEDROOM - DAY
Kaufman traces a stubby, nail-bitten finger along State Road
29 along a Florida road map. He turns to his typewriter, and
types in a clumsy hunt-and-peck style.
KAUFMAN (V.O.)
We open on State Road 29. A lonely
stretch of road cutting through untamed
swampland. Suddenly a beat-up white van
barrels around a curve. It's driver: a
skinny man with no front teeth...
INT. COURT ROOM - DAY
The proceedings are in progress. Orlean hurries in, sits in
the back.
20.
CONTINUED:
(CONTINUED)
Laroche, in a Miami Hurricanes cap, wrap-around Mylar
sunglasses, and a Hawaiian shirt, is on the stand. Alan
Lerner, the tribe's lawyer, questions him.
LERNER
Finally, Mr. Laroche, what is your
experience in the area of horticulture?
LAROCHE
Okay, I've been a professional
horticulturist for twelve years. I've
owned a plant nursery of my own which was
destroyed by the hurricane. I'm a
professional plant lecturer. I've given
at least sixty lectures on the
cultivation of plants. I'm a published
author, both in magazine and book form.
I have extensive experience with orchids,
and the asexual micropropagation of
orchids under aseptic cultures. This is
laboratory work, not at all like your
nursery work.
(grins)
I'm probably the smartest person I know.
LERNER
Thank you.
LAROCHE
You're very welcome.
INT. BARNES AND NOBLE - DAY
As she rings up his books, Kaufman admires the cashier's
flower tattoo. She catches him and smiles with red, wet,
pierced lips. She unbuttons her blouse and shows him a breast
with a heart tattoo. A sweet heartbeat turns to knocking.
INT. EMPTY BEDROOM - NIGHT
Kaufman, in bed masturbating, looks up at the closed door.
KAUFMAN
What?!
The door opens. Donald stands there for a moment in shadows.
DONALD
Look, you wanna hear my pitch, or what?
KAUFMAN
Go away. God damn it.
21.
CONTINUED:
(CONTINUED)
DONALD
(lost)
Y'know, I'm just trying to do something.
Kaufman squints at his brother, sits up, waits.
DONALD (CONT'D)
Hey, thanks a lot, man. Cool.
(flicks on light, then in pitch
mode:)
Okay, there's this serial killer, right --
Kaufman groans, lies down, pulls the covers over his face.
DONALD (CONT'D)
No, wait. See, he's being hunted by a
cop. And he's taunting the cop, right?
Sending clues who his next victim is.
He's already holding her hostage in his
creepy basement. So the cop gets
obsessed with figuring out her identity,
and in the process he falls in love with
her. Even though he's never even met
her. She becomes, like, the
unattainable, like the Holy Grail.
KAUFMAN
(through a blanket)
It's a little obvious, don't you think?
DONALD
Okay, but there's a twist. See, we find
out the killer suffers from multiple
personality disorder. Okay? See, he's
really also the cop and the girl. All of
them. It's all him! Isn't that crazy?
Donald waits, proud. Kaufman pulls off the covers.
KAUFMAN
Look, the only idea more overused than
serial killers, is multiple personality.
On top of that you explore the notion
that cop and criminal are really two
aspects of the same person. See every
cop movie ever made for other examples of
this.
DONALD
Mom called it psychologically taut.
22.
CONTINUED:
(CONTINUED)
KAUFMAN
The other thing is, there's no way to
write this. Did you consider that? I
mean, how exactly would you show a
character holding himself hostage?
DONALD
Trick photography?
KAUFMAN
Okay, that's not what I'm asking. What
I'm asking is in the reality of this
movie, if there's only one character,
right?... Okay? How could you... What
exactly would the scene... How...
Donald waits blankly. Kaufman gives up, gets out of bed,
dresses.
KAUFMAN (cont'd)
I agree with mom. Very taut. Sybil
meets.. I dunno, something very taut.
Kaufman exits.
EXT. COURTHOUSE - DAY
Orlean exits the courthouse and watches Laroche in a huddle
with Lerner, Vinson, and Buster Baxley, vice-president of the
tribe's business operations. They're all smoking intently.
LAROCHE
They're gonna fucking crucify me.
BAXLEY
I'll go into the Fakahatchee with a
chainsaw. I swear to God.
LERNER
Buster, for crying out loud, I reminded
her the Indians used to own Fakahatchee.
Look, we'll deal with all this at trial.
Buster waves a dismissive hand at Lerner, walks away. Vinson
shrugs, stubs his cigarette, follows Buster. Lerner and
Laroche stand there a moment. Lerner walks off. Laroche
cracks his neck. A charmingly shy Orlean approaches.
ORLEAN
Mr. Laroche?
Orlean smiles, apologetic for the intrusion.
23.
CONTINUED: (2)
(CONTINUED)
ORLEAN (CONT'D)
My name's Susan Orlean, I'm a writer for
the New Yorker. It's a maga --
LAROCHE
I'm familiar with the New Yorker. The
New Yorker, yes, the New Yorker. Right?
ORLEAN
Right. So I was interested in doing a
piece about your situation down here.
Laroche scowls, smokes furiously, then, a test:
LAROCHE
Yeah? Put this in: I don't care what
goes on here. I'm right, and I'll take
this all the way to the Supreme Court.
That judge can screw herself.
Orlean scribbles on her pad. Laroche twists his head to see
that she's writing "Judge can screw herself."
LAROCHE (cont'd)
That for real would go in?
Orlean nods. Laroche smiles his toothless smile at Orlean.
EXT. FIELD - MORNING
MUSIC: lush, profound orchestral piece.
A glorious orange, large-petalled orchid blooms in dramatic
time-lapse. We slowly, lovingly circle the flower.
SENSUOUS FEMALE NARRATOR
The Orchidaceae is a large, ancient
family of perennial plants with one
fertile stamen and a three petalled
flower. In most orchid species, one petal
is enlarged into a lip and is the most
conspicuous part of the flower.
INT. CALIFORNIA PIZZA KITCHEN - DAY
Kaufman, in a booth, reads his orchid book, takes notes.
KAUFMAN (V.O.)
The Orchidaceae is a large, ancient...
He's bored, looks up, watches a waitress with glorious,
orange hair, pouty lips, soulful eyes, and a voluptuous form
turning slowly around, scanning her station.
24.
CONTINUED:
(CONTINUED)
She sees Kaufman, approaches, and smiles warmly down at him.
Her badge reads: Alice, Arcadia, CA. Kaufman sweats.
ALICE
So what looks good today?
KAUFMAN
Um. Hi. Thank you. The key lime pie,
please. A small slice. I'm watching
my... And a coffee, please. Skim milk.
ALICE
(sees book)
Orchids! I absolutely love orchids.
He goes blank.
KAUFMAN
Yes. They're really great.
He flinches at his response. A small awkward pause.
ALICE
So, I'll be right back with your pie.
She smiles warmly again and leaves. Kaufman is humiliated.
EXT. ORCHID SHOW - DAY
Alice the waitress and Kaufman walk hand-in-hand, inspecting
sexy orchids together. She smiles warmly at him.
ALICE
(I love you)
I absolutely love orchids.
INT. EMPTY ROOM - NIGHT
Kaufman finishes jerking off. He lies lonely in the dark.
INT. SUBURBAN BACKYARD - EVENING
Dark and muted. The seven year old girl is pushed on the
swing by her father. From the air she sees her mother, tiny
and lost, sitting across the yard smoking.
EXT. HOTEL PARKING LOT - MORNING
Orlean leans against a car and smokes. A tiny, lost figure.
There's a honk. Orlean snaps out of her reverie to see
Laroche screeching to a stop in his banged-up van.
25.
CONTINUED:
(CONTINUED)
ORLEAN
(to camera)
A few days after the hearing, Laroche
took me to an orchid show in Miami.
She opens the passenger door.
ORLEAN (cont'd)
Hi. Thanks for picking --
LAROCHE
I want you to know this van is a piece of
shit. When I hit the jackpot, I'll buy
myself an awesome car, maybe an Aurora.
Orlean nods, climbs in, and tries to rearrage some of the
junk on the front seat so she'll have a place to sit.
LAROCHE (cont'd)
Sit on top of that. You won't hurt it.
She situates herself on the seat. Laroche lurches off.
INT. VAN - DAY
Laroche drives manically. Orlean watches the road and holds
one hand against the dashboard.
LAROCHE
The thing you gotta know is my whole life
is looking for a goddamn profitable
plant. And that's the ghost.
ORLEAN
Why the ghost orchid?
LAROCHE
The sucker's rare. Collectors covet what
is not available. I'm the only one in
the world who knows how to cultivate it.
He looks at her and smiles. Orlean smiles back and
indicates, with a small jerk of the head, that he might want
to watch the road. He doesn't take the hint.
LAROCHE (cont'd)
The plan was, get the Indians to pull it
from the swamp. I researched it. As
long as I don't touch the plants, Florida
can't touch us. Then I'd clone hundreds
of them babies in my lab, sell 'em, and
make the Seminoles a shitload of change.
26.
CONTINUED:
(CONTINUED)
In handwriting made jerky by the bouncing van, Orlean writes
"shitload of change" on her notepad.
LAROCHE (cont'd)
And I stop future poaching by making the
flowers readily available in stores.
Then I give a big speech at the trial
about how the legislature should get rid
of loopholes smart people like me can
find. I'm a hero. The flowers are
saved. Laroche and nature win.
EXT. SWAMP - DAY
Old black and white footage, taken from up high, of two 19th
century men leading a horse drawn cart full of poached
orchids.
ORLEAN (V.O.)
Men from Florida dominated the orchid
hunting scene. Hunters in the
Fakahatchee hauled out thousands of
orchids in horse-drawn flatbed carts.
The camera swoops down, close to the men. As it does, the
image transforms. It turns to color, the men become
mannequins, the horse becomes papier-mache: it's a display.
A live man in modern work clothes is arranging actual orchids
in the cardboard cart.
INT. CAR - DAY
Kaufman drives slowly past Barnes and Noble, squints in the
window, sees the tattooed cashier. He passes Burger King,
sees a pretty employee, the same at Starbucks. Glassed-in
women on display, different types, different attitudes.
Kaufman stops in front of the California Pizza Kitchen.
Alice and her orange hair glow through the window. He
hesitates, then drives off.
INT. EMPTY BEDROOM - MORNING
Kaufman sits on the floor and types.
KAUFMAN (V.O.)
A beautiful orange orchid blooms in timelapse --
Donald enters. Kaufman ignores him, continues typing.
Donald dawdles, picks up The Orchid Thief, flips through it.
27.
CONTINUED:
(CONTINUED)
KAUFMAN (V.O.) (cont'd)
The camera circles it, revealing how
lovely and perfect and sweet and inviting
and delicate and...
DONALD
Cool.
KAUFMAN
What do you want, Donald?
DONALD
Nothing. I just read about that Swamp
Ape that supposedly lives in the swamp?
Like bigfoot? You should put that in
your script, like, killing people or
something. That'd be very, very cool.
KAUFMAN
Why are you in here now?
DONALD
Nothing, I was just... Oh, one thing, I
need a cool way to kill people. Don't
worry! For my script! Ha ha!
Kaufman stares at Donald, rubs his eyes, then:
KAUFMAN
Um, okay, killer's a literature professor
who cuts off little chunks of his
victims' bodies until they die. He'd be
known in the tabloids as "The
Deconstructionist."
DONALD
That's kinda good. I like that.
KAUFMAN
See, I was kidding, Donald.
DONALD
Oh, okay. Sorry. You got me! Heh-heh.
Do you mind if I use it, though?
INT. BOY'S BEDROOM (1972) - NIGHT
There are now many turtles in aquariums. Many turtle books
and posters. The boy, in a turtle T-shirt, looks out the
window into the darkness. His eyes are troubled.
28.
CONTINUED:
INT. LIVING ROOM (1972) - CONTINUOUS
The boy comes downstairs. His father, in his backbrace,
watches TV; his sister lies on the couch, semi-conscious,
more pale than before. His mother pats the girl's head with
a damp cloth. There's a little Hindu altar with candles.
MOTHER
(praying softly)
For certain is death for the born/And
certain is birth for the dead/Therefore
over the inevitable/Thou shouldst not
grieve. Sweet, sweet Diane.
The boy surveys the sad scene. His mother looks up, smiles.
MOTHER (CONT'D)
A slice of pie for my turtle expert?
The boy beams with pride, then gets solemn.
BOY
Mom, there's something I feel I have to
do. I don't know how to do this, but I
feel in my stomach that I have to.
MOTHER
What do you have to do, honey?
BOY
Collect one of every turtle in the world.
(beat)
It's a long list, ma. Cuora
galbinifrons, Graptemys versa, Callagur
borneoensis, all the Galapagos species,
people think there's only one, but that's
hardly the case. Cycloderma frenatum,
Cuora pani...
(sighs)
I don't think my life is worth living if
I can't do this.
The boy and his mother look at each other.
MOTHER
Well, we'd better get started, huh, baby?
The boy nods his head solemnly.
INT. VAN - DAY
Laroche drives, solemnly nodding his head. Orlean studies
him for a moment, her sad eyes wet and glistening.
29.
(CONTINUED)
ORLEAN
Wow, that's some story. So how many
turtles did you end up collecting?
LAROCHE
(matter-of-fact)
Oh, I lost interest right after that.
ORLEAN
Oh.
LAROCHE
I dropped turtles when I fell in love
with Ice Age fossils. Learned everything
about them. Collected the shit out of
'em. Fossils were the only thing made
any sense to me in this fucking world.
Y'know?
They drive in silence. Orlean watches a flying heron.
LAROCHE (CONT'D)
Then fossils were over when I found
lapidary, which I just adored.
ORLEAN
Okay, now what is lap --
LAROCHE
Ditched lapidary for resilvering old
mirrors. Did that with my mom for a
while. We had the largest collection of
19th Century Dutch mirrors on the planet.
Perhaps you read about us. Mirror World
October '88? I have a copy somewhere...
Laroche fishes through junk as he drives.
ORLEAN
So, did you ever miss the turtles? The
only thing that made you ten year old
life worth living?
LAROCHE
I'll tell you a story. I once fell
deeply, profoundly in love with tropical
fish. I had sixty goddamn fish tanks in
my house. I'd skin-dive to find just the
right ones. Anisotremus virginicus,
Holacanthus ciliaris, Chaetodon
capistratus. You name it. Then one day
I say, fuck fish. I renounce fish.
30.
CONTINUED:
(MORE)
(CONTINUED)
I vow to never set foot in the ocean
again, that's how much fuck fish. That
was seventeen years ago and I have never
since stuck so much as a toe into that
ocean. And I love the ocean!
ORLEAN
(beat)
But why?
LAROCHE
(shrugs)
Done with fish.
INT. THERAPIST'S OFFICE - DAY
Kaufman sits in silence across from his female therapist.
THERAPIST
So --
KAUFMAN
I'm still obsessed with that girl.
THERAPIST
The Burger King girl? Dimples and sparkly
eyes?
KAUFMAN
California Pizza Kitchen.
THERAPIST
Oh. Red hair and nice? Likes orchids?
KAUFMAN
Yeah. She's really nice. I feel pretty
certain she likes me maybe.
THERAPIST
So do you think you'll talk to this one?
INT. CALIFORNIA PIZZA KITCHEN - DAY
Kaufman, hair combed, sits nervously in a booth, watching
Alice. He tenses as she comes up to him. She smiles warmly.
KAUFMAN
Hi!
ALICE
Hey! Some key lime pie for ya today?
31.
CONTINUED: (2)
LAROCHE (cont'd)
(CONTINUED)
KAUFMAN
(thrilled she remembered)
Okay, yeah! That sounds great! Yeah!
ALICE
I'll pick you out an extra large piece.
Preferred customer.
She winks at him. He's so in love.
KAUFMAN
Thank you. That's really sweet of you.
ALICE
Still reading about orchids, I hope.
KAUFMAN
Yes, I am, in fact! Beautiful flowers.
ALICE
A friend of mine has a pretty little pink
one, grows right on a tree branch.
KAUFMAN
That's what's called an epiphyte.
ALICE
(pointing at him excitedly)
Right! Boy, you know your stuff, huh?
KAUFMAN
Not really. I'm just learning.
Epiphytes grow on trees, but they're not
parasites. They get all their
nourishment from the air and rain.
ALICE
Well, I'm impressed. That's great.
Awkward pause.
KAUFMAN
There are more than thirty thousand kinds
of orchids in the world.
ALICE
Wow, that's a lot, huh? Okay, then, so
I'll be right back with a nice big slice
of key lime pie for my orchid expert.
He beams. She smiles and turns to leave. Kaufman blurts:
32.
CONTINUED:
(CONTINUED)
KAUFMAN
But, so, anyway, I was also wondering...
Alice turns back, still smiling.
KAUFMAN (cont'd)
I'm going up to this orchid show on
Saturday in Santa Barbara and I --
Alice's smile slips away. Her warmth dissipates.
ALICE
Oh, um, well --
KAUFMAN
I'm sorry. I apologize. I'm sorry.
ALICE
(nodding)
So I'll be right back with your pie then.
He nods, watches Alice walk away and say something to another
waitress. The other waitress looks over at him. He sweats.
KAUFMAN (V.O.)
I am fat. I am old. I am repulsive.
The other waitress brings his pie. He smiles a thank you.
INT. NEW YORK APARTMENT - MORNING
Orlean sits at her desk and talks to us.
ORLEAN
There are more than thirty thousand known
orchid species. One species looks like a
German shepherd...
EXT. SANTA BARBARA ORCHID SHOW - DAY
Kaufman walks alone among the crowd of orchid enthusiasts,
past a Santa Barbara Orchid Society sign. He tries to study
the flowers. They are dull. He forces himself to look.
ORLEAN (V.O.)
... one looks like an onion, one looks
like an octopus. One looks...
Kaufman finds his attention drifting from orchids to women:
all different shapes, colors, personalities, some in subtle
clothing, some in garish clothing, all glowing.
33.
CONTINUED: (2)
(CONTINUED)
ORLEAN (V.O.) (cont'd)
... like a school teacher, one looks like
a gymnast, one looks like a Midwestern
beauty queen, one looks like a New York
intellectual with whom you'd do the
Sunday Times crossword puzzle in bed.
One looks like that girl in high school
with creamy skin. One has eyes that
dance. One has eyes that contain the
sadness of the world.
He is sick with adoration for the women, who pay him no mind.
ORLEAN (V.O.) (cont'd)
Nothing in science can account for the
way some people feel about orchids.
Those love them, love them madly.
One by one the women turn to the men they're with: a whisper
in the ear, a shared look, an arm slipped through an arm.
Kaufman is alone in this sea of people and flowers.
EXT. SWAMP - DAY
Teenaged Laroche and his mother tromp through the swamp. He
carries a camera on a tripod. They spot a beautiful flower.
Laroche is in awe.
TEENAGED LAROCHE
Encyclia tempensis. The butterfly.
Laroche sets up the tripod, focuses on the flower. His
mother almost cries at the flower's beauty.
MOTHER
"You will find something more in woods
than in books. Trees and stones will
teach you that which you can never learn
from masters." Saint Bernard said that.
TEENAGED LAROCHE
That's pretty, ma.
MOTHER
Diane would've loved this flower, Johnny.
TEENAGED LAROCHE
Maybe somehow she can see it. Y'know?
MOTHER
(beat)
So... after this one how many, honey?
34.
CONTINUED:
(CONTINUED)
Laroche snaps the photo, makes a check in his notebook.
TEENAGED LAROCHE
Only one hundred and seventeen more.
MOTHER
And you have to have a photo of every
single type of orchid in Florida?
TEENAGED LAROCHE
I have to, ma. You know that.
She smiles at him, rubs his neck.
INT. THERAPIST'S OFFICE - DAY
Kaufman talks to the therapist.
KAUFMAN
I'm successful, right? I mean, I could
say to a woman, I'm a screenwriter and
she'd look at me differently. I could
get laid. But I want someone to like me.
For me. Y'know? The way I like them.
The way I'd do anything for that woman
walking down the street. A million women
walking down the street. I don't need to
know what their jobs are. No one will
ever love me like that. Like I love
almost every woman I see.
Kaufman glances down at his therapist's breasts. He does it
fast and unintentionally. He quickly shifts back to her
face. His therapist wraps her shawl around her.
INT. SHOW HALL - DAY
Crowded with orchid lovers. Noisy chatter and calliope
music. Elaborate displays include orchids on a ferris wheel,
plastic clowns, and a booth that looks like a circus big top.
LAROCHE
Once you get the sickness, it takes over
your life. I started out just
photographing 'em. Now look at me.
(dramatic pause)
It'll happen to you. You'll see.
ORLEAN
I don't think so. I'm not prone to --
Laroche runs over to a flower.
35.
CONTINUED:
(CONTINUED)
LAROCHE
Angraecum sesquipedale! Beauty! God!
Darwin wrote about this one. Charles
Darwin? Evolution guy? Hello?
ORLEAN
(annoyed)
I know who Darwin is.
INT. EMPTY BEDROOM - NIGHT
A depressed Kaufman fishes on his floor through an ever
increasing pile of books: books about turtles, mirror
resilvering, tropical fish, Hegel, etc. He picks up The
Portable Darwin. The cover features a daguerreotype of
Darwin. Kaufman paces and reads.
INT. BOOK-LINED STUDY - NIGHT
SUBTITLE: ENGLAND, ONE HUNDRED AND THIRTY NINE YEARS EARLIER
Sepia. A sickly Darwin writes at his desk.
DARWIN (V.O.)
Therefore I should infer from analogy
that probably all the organic beings
which have ever lived on this earth have
descended from some one primordial form,
into which life was first breathed.
INT. EMPTY BEDROOM - NIGHT
Kaufman looks off into space, thinking. Silence. Suddenly,
he grabs his mini-recorder and paces like a caged animal.
KAUFMAN
Okay, opening of movie. Four billion
years ago. Life has not begun. Endless,
barren terrain. Silence. Silence.
EXT. SHOW HALL - DAY
Blasting music. Crowds. Laroche shows the flower to Orlean.
LAROCHE
See that nectary all the way down there?
Darwin hypothesized a moth with a nose
twelve inches long to pollinate it.
Everyone thought he was a loon. Then,
sure enough, they found this moth with a
twelve inch proboscis -- proboscis means
nose, by the way -- and --
36.
CONTINUED:
(CONTINUED)
ORLEAN
I know what proboscis means.
LAROCHE
Every one of these flowers has a specific
relationship with the insect that
pollinates it. There's an orchid that
looks exactly like this particular
insect. So the bug humps the flower and
gets covered with its pollen. Thusly...
Laroche mimes humping.
ORLEAN
I get it.
LAROCHE
That's called pseudo-copulation. These
flowers are smart! You gotta fall in
love with them. Once you learn anything
about orchids, you'll devote your life to
learning everything about them.
Orlean looks around: people sniffing flowers, feeling petals,
staring deep into nectaries. People jabber passionately,
people buy plants, people carry boxes of purchased plants.
Orlean looks deeply into various flowers, at a dizzying array
of colors and shapes, but remains detached.
INT. APARTMENT - EARLY EVENING
Orlean stares at photos of orchids on her bulletin board.
She can't find a way in. She looks over at her husband
reading. He smiles at her. She smiles back, but there's a
terrible distance between them. She looks at us sadly.
ORLEAN
I wanted to want something as much as
people wanted these plants but it isn't
part of my constitution.
Orlean stares out the window at the empty street below. A
plastic bag dips and rises in the breeze. She inhales.
ORLEAN (cont'd)
I suppose I do have one unembarrassed
passion.
(beat, looks back at us)
I want to know how it feels to care about
something passionately.
37.
CONTINUED:
EXT. SUBURBAN BACKYARD - NIGHT
The seven year old girl swings sadly by herself. From high
up she sees her mother in a window at one end of the house,
her father in a window at the other end. Both stare blankly
in opposite directions. The swing completes it's arc and the
girl descends, losing sight of her parents.
INT. LARGE EMPTY LIVING ROOM - NIGHT
Kaufman types furiously. He's a sweaty mess.
KAUFMAN (V.O.)
... then, after the entire history of
life on the planet, in the last seconds
of the montage, we see the whole of human
history: tool-making, hunting, farming,
war, lust, religion, self-consciousness.
Yearning. Then, bam! cut to Susan Orlean
writing a book about orchids. And the
story begins. It's perfect! It's
circular! It's everything!
He reads back what he's written.
KAUFMAN (CONT'D)
I'm an idiot. I'm fat. I hate my--
The front door bursts open and Donald charges in.
DONALD
McKee is a genius! And hilarious! He
just comes up with these great jokes, and
everyone laughs! But he's serious, too.
You'd love him. He's all for
originality, just like you! But he says,
we have to realize we all write in a
genre, so we must find originality within
that genre. See, it turns out there
hasn't been a new genre since Fellini
invented the mockumentary!
KAUFMAN
(sadly, quietly)
You and I share the same DNA. Is there
anything more lonely than that?
INT. ORLEAN'S KITCHEN - EVENING
Orlean eats a silent dinner with her husband.
HUSBAND
You want to do something tonight?
38.
(CONTINUED)
ORLEAN
I should work. I've got stuff...
He nods. She smiles, picks up her dish, puts it in the sink.
INT. ORLEAN'S STUDY - EVENING
Orlean looks at the photo of Laroche, sits sadly for a
moment, then types.
ORLEAN (V.O.)
Laroche is an optimist. That is, he sees
a profitable outcome in every situation.
When he was a young man he worked in
construction.
EXT. CONSTRUCTION SITE - DAY
SUBTITLE: NORTH MIAMI, TEN YEARS EARLIER
A younger Laroche, in a hard hat, walks atop a half-built
house. He spots a flower in a backyard across the street.
LAROCHE
(pleased with himself)
Asclepiadaceae. From thirty yards. Yes.
He loses his footing, falls two storeys, lands on his back.
INT. DINER - DAY
Laroche talks. Orlean takes notes.
LAROCHE
(laughing)
... I broke my back. Exactly how my dad
did. Isn't that a psycho coincidence?
(far away)
Y'know, the way I see it, we're a family
of ailments and pain.
(suddenly excited.)
But, anyway, it was a godsend.
Laroche scarfs his pie. Orlean watches him.
ORLEAN (V.O.)
Laroche once spilled toxic pesticide into
a cut on his hand. It resulted in
permanent heart and liver damage. Most
people would consider this a terrible
accident. Laroche considered it a
success...
39.
CONTINUED:
INT. SUBURBAN SUN ROOM - DAY
A prim woman reads a magazine article by Laroche entitled,
"Would You Die For Your Plants." There's a smiling photo of
a frail, emaciated Laroche next to his byline.
ORLEAN (V.O.)
... because he sold an article about it.
INT. DINER - DAY
Laroche talks, mouth full of pie. Orlean takes notes.
LAROCHE
I consider the broken back -- in three
places, by the way. I have x-rays --
(fishes through bag)
-- a stroke of goddamn luck. I got
disability, married the sweetest woman in
the world. And me and my lovely new wife
-- my now ex-wife, the bitch -- got to
open our nursery.
EXT. NURSERY - DAY
Laroche and his wife, in wedding clothes, stand outside their
nursery The Bromeliad Tree posing for an auto-timed photo.
Laroche wears a cumbersome back brace. The camera flashes.
INT. EMPTY BEDROOM - NIGHT
Kaufman types tentatively. Off-screen we hear Donald's
enthusiastic typing and giggling.
KAUFMAN (V.O.)
Movie opens with Susan Orlean typing.
(refers to Orchid Thief)
"John Laroche is a tall guy, skinny as a
stick...
(stops, flips through book)
Movie opens with a young boy picking out
his first pet...
(stops, flips through book)
Movie opens with...
Kaufman stops, scratches his head. His hand is covered with
loose hairs. He whines.
INT. DINER - DAY
Laroche talks to Orlean.
40.
(CONTINUED)
LAROCHE
People started coming out of the
woodwork, to ask me stuff, to admire my
plants, to admire me.
INT. THE BROMELIAD TREE - DAY
Lots of lonely-looking customers admiring orchids. Laroche
is in the midst of them, happily chatting with whomever
approaches him. One guy pulls Laroche aside.
CUSTOMER #1
John, what is this? It's so beautiful.
LAROCHE
Catasetum tenebrosum. From Peru. It's
neat 'cause its dimorphic, which means...
Customer #2 enters with a creepy, dark flowered orchid.
CUSTOMER #2
Johnny baby!
LAROCHE
Henry! Look at that Dracula vampira!
It's gorgeous, man.
Other customers gather around.
CUSTOMER #2
Take me in to the Fakahatchee. Show me a
ghost in bloom, and it's yours.
LAROCHE
Cool.
CUSTOMER #3
Mr. Laroche, would you be able to --
Laroche picks up a ringing phone. Customer #3 continues to
try and get his attention while he talks.
LAROCHE
Bromeliad Tree. Hey, Dora! Good, good.
Well, sure, you gotta watch the
temperature. Don't want an odontoglossum
above seventy-five. Uh-huh, that should
be fine. Yeah, damp it down. Oh, I'm
doing well. She's fine, too. Sure...
INT. VAN - NIGHT
Laroche drives. Orlean looks out at the dark night.
41.
CONTINUED:
(CONTINUED)
LAROCHE
I believe some folks'd call me up to talk
and just talk because they were lonely.
Orlean looks at him. After a long silence, Laroche muses:
LAROCHE (cont'd)
You know why I love plants? Because
they're so mutable, so adaptable.
Adaptation is such a profound process.
(beat)
Adaptation means you figure out how to
survive in the world. People aren't too
good at that sometimes.
INT. AGENT'S OFFICE - DAY
Kaufman sits with his agent Jerry in a glass-walled office.
KAUFMAN
I don't know how to adapt this. I
should've just stuck with my own stuff.
I don't know why I thought I could --
JERRY
See her? I fucked her up the ass.
Jerry waves at a passing beauty. She waves back, keeps
walking. Kaufman follows the girl's ass with his eyes.
JERRY
Just kidding. Hey, maybe I can help.
What's the problem, buddy?
Kaufman looks at Jerry. Will he accept help from an agent?
KAUFMAN
It's about flowers.
JERRY
It's not only about flowers. It's got
that crazy plant nut guy. He's funny,
right?
Kaufman pulls out a folded newspaper clipping, reads:
KAUFMAN
"There is not nearly enough of him to
fill a book," blah blah blah, so Orlean
"digresses in long passes" blah blah blah
"no narrative really unites these
passages." Blah blah blah blah blah.
(looking up defiantly)
42.
CONTINUED:
(MORE)
(CONTINUED)
New York Times Book Review. I can't
structure this. It's that sprawling New
Yorker shit.
Jerry gets distracted by another sexy woman walking by.
JERRY
Oh man. I'd fuck her up the ass.
KAUFMAN
There's no story. The book has no story.
JERRY
So make one up. The book's a jumping off
point. No one in town can make up a
crazy story like you. You're the king.
KAUFMAN
I didn't want to do that this time. It's
someone else's material. I have a
responsibility... Anyway, I wanted to
grow as a writer, do something profound
and simple. Show people how amazing
flowers are.
JERRY
Are they amazing?
KAUFMAN
I don't know. I think they are.
JERRY
Look, what I tell a lot of guys is pick
another film and use it as a model. I
always thought this one could be like
Apocalypse Now. The journalist spends
the whole movie searching for the crazy
plant nut guy -- what's his name?
KAUFMAN
John Laroche.
JERRY
She has to travel deep into the darkest
swamps to find the mysterious "Laroche."
KAUFMAN
I need you to get me out of this.
JERRY
Charlie, at the end of the day, I think
it would be a terrible career move.
43.
CONTINUED:
KAUFMAN (cont'd)
MONTAGE
Jumble of images: Laroche talking, flowers, Indians, Orlean,
the trial. The rapid fire click-click of typing.
KAUFMAN (V.O.)
Okay, okay, we open with Laroche. He's
funny. Okay, he says, okay, he says, I
love to mutate plants, he says, mutation
is fun... Okay, we show flowers and,
okay, we have to have the court case.
Okay we show Laroche, okay, he says, I
was mutated as baby, that's why I'm so
smart...that's funny. Okay we open at
the beginning of time...no, okay, we open
with Laroche driving into the swamp...
INT. EMPTY BEDROOM - NIGHT
Kaufman awakes with a start. Enthusiastic off-screen typing.
Kaufman peers through the darkness at the books, papers
coffee cups, and dirty plates all around.
EXT. SWAMP - DAY
Black and white. It's dark, tangled with foliage, and
foreboding. Two pioneers slog waist-high through the water.
Alligators regard them menacingly.
ORLEAN (V.O.)
The pioneer-adventurers in Florida had to
travel inward, into a place as dark and
dense as steel wool. They had to
confront what a dark, dense, overabundant
place might have hidden in it.
The scene turns into color. The men turn into mannequins.
The floor is covered with black cellophane representing swamp
water. The swamp turns to cardboard, with real orchids
hanging from the trees. A guy carrying some orchids walks on
top of the cellophane, past the mannequins.
INT. LAROCHE'S LIVING ROOM - NIGHT
The room is dark, lit only by the light of the TV Laroche's
father watches. Laroche and Orlean sit on the couch.
LAROCHE
The nursery was going well, but sometimes
bad things happen. Darkness descends.
44.
(CONTINUED)
Laroche glances at his father, who just stares at the TV. On
the TV set are two framed photos: one of Laroche's sister and
one of Laroche's mother.
INT. LAROCHE'S LIVING ROOM - DAY
SUBTITLE: NORTH MIAMI, NINE YEARS EARLIER
Laroche ushers his wife, mother, and uncle out of the house.
His father watches TV. There's only a photo of Laroche's
sister on the TV set now.
LAROCHE
Sure you don't want to come, dad?
His father doesn't respond.
INT. LAROCHE'S CAR - A FEW MOMENTS LATER
They pile into a nice new American car, his wife in front,
his mother and uncle in back. Laroche pulls into traffic.
UNCLE JIM
Nursery business good, Johnny?
LAROCHE
Everything's good, Uncle Jim. This last
year's been a dream, I'm telling you.
We're finally pulling out of this debt.
MOTHER
Amen, honey. Praise Allah, Buddha,
Vishnu. And all the rest of 'em.
Laroche smiles back at his mother. A screech of tires and
another car crashes head on into theirs. Laroche's face
smacks against the steering wheel, his front teeth fly in all
directions. His mother rockets forward smashing through the
windshield. His uncle hits Laroche's wife in the head,
jerking her forward and landing on top of her.
EXT. CEMETERY - DAY
Banged-up and missing his front teeth, Laroche stands amidst
a group of mourners at a double funeral.
INT. HOSPITAL ROOM - DAY
Laroche, in his mourning suit, sits by his comatose wife.
45.
CONTINUED:
EXT. SEMINOLE DISCOUNT CIGARETTE STORE PARKING LOT - DAY
It's a busy street full of discount cigarette stores.
Laroche and Orlean step from his van, head toward the store.
LAROCHE
She divorced me soon after she regained
consciousness. Then the hurricane
destroyed my greenhouse. Everything. I
knew it would break my heart to start
another nursery, so when the Seminoles
wanted a white guy, an expert, to get
their nursery going, I took it.
INT. DISCOUNT CIGARETTE STORE - CONTINUOUS
Laroche pulls about ten Marlboro cartons off the shelf.
LAROCHE
But I wasn't gonna give them a
conventional little potted-plant place.
So I came up with the "ghost" plan. I
was gonna give them something amazing.
INT. PARTY HOUSE - NIGHT
Kaufman, beer in hand, stands off in the corner of a room
crowded with young Hollywood types. He talks nervously to a
pretty young woman
KAUFMAN
... see, Laroche researched it and found
that Indians have the legal right to take
endangered plants off state lands.
WOMAN
What an amazing opening! So then it's a
courtroom drama. A Few Good Men! And
all those Indian rights issues are so
complex. There are valid arguments on
both sides. I mean we took their land!
We gave them smallpox!
KAUFMAN
Well, actually, there wasn't much of a
trial. Florida got 'em on a
technicality, about cutting down nonendangered trees. Even the Indians
aren't allowed to do that. They all
plead no contest. Laroche got fined five
hundred bucks and banned from the
Fakahatchee for six months.
46.
(CONTINUED)
WOMAN
Oh, wow. So, like, then what happens?
KAUFMAN
Nothing much. That's what I like. I
mean, most people's lives don't include a
lot of drama and I wanted to sort of be
compelling without having to resort to
big, um... Y'know what I mean?
WOMAN
(glancing distractedly around)
Absolutely. I absolutely do.
KAUFMAN
It's, like, Blake talked about seeing the
world in a grain of sand and heaven in a
wild flower. Y'know? Or like Hegel?
The woman smiles, but she's somewhere else entirely.
INT. EMPTY BEDROOM - BEDROOM
Kaufman stares at his typewriter. There's a big pile of
papers next to him.
KAUFMAN (V.O.)
I am a failure. I'm a poseur. I have no
ideas. I wanted to do something great.
There's no story. I'm fat. I'm repuls--
The phone rings.
KAUFMAN (CONT'D)
What?
VALERIE (PHONE VOICE)
Charlie? It's Valerie.
KAUFMAN
Oh, hi. Hi. Hey! Hi!
VALERIE (PHONE VOICE)
Sorry to bug you. We were just talking
about you, how excited we are.
KAUFMAN
Yeah, me too.
VALERIE (PHONE VOICE)
So it's coming along good?
47.
CONTINUED:
(CONTINUED)
KAUFMAN
It's good. It's complicated what I'm
trying to do, but it's going very well.
INT. ORLEAN'S APARTMENT - EVENING
Orlean looks at a book called The Native Orchids of Florida.
She comes to a photo of the ghost orchid glowing white on the
page. Orlean's husband walks by with a cup of coffee,
caresses her shoulder. She tenses slightly, smiles up at him
apologetically. He smiles back sadly. She returns to the
photo. A line of text catches her eye: "Should one be lucky
enough to see a flower all else will seem eclipsed." Orlean
closes the book, sits there. She dials the phone.
LAROCHE (PHONE VOICE)
Yeah.
ORLEAN
Hello, John? It's Susan.
LAROCHE (PHONE VOICE)
Susie-Q!
ORLEAN
So I was thinking it'd be good for the
article for me to go into the Fakahatchee
to see a ghost. Would you take me?
LAROCHE (PHONE VOICE)
I'd love to, but, hey, I'm banned for the
next six months. Goddamn crucified me.
Get one of them monkey-suited rangers to
take you. 'Course, they wouldn't be able
to locate a ghost, if it climbed off a
tree and shoved itself up their ass.
Hey, put that in the article.
INT. EMPTY BEDROOM - MORNING
A hollow-eyed Kaufman is zipping up a suitcase.
KAUFMAN
(calling off-screen)
Travelling into the Fakahatchee, Donald,
is a perfect metaphor for writing. I'm
stepping into the confusion of the
unknown. I'm taking the big risk here.
INT. EMPTY LIVING ROOM - CONTINUOUS
Donald types cheerily on a lap-top computer at an ergonomic
desk. Kaufman descends the stairs with his suitcase.
48.
CONTINUED:
(CONTINUED)
KAUFMAN
It's dark, dangerous, as dense as steel
wool. I don't know if I'll come out
alive, but if I do, I'll have something
true to give the world. That's the
difference between writing and aping some
moron's "principles."
Donald looks up from his work. He hasn't been listening.
DONALD
Hey, Charles, I'm thinking of putting a
song in. Y'know like when characters
sing pop songs in their pajamas and dance
around. I thought it might be a nice way
to break the tension. So, try to think
of a song about split personality...
INT. AIRPLANE - MORNING
Orlean sits in her seat and addresses the camera.
ORLEAN
You would have to want something very
badly...
INT. AIRPLANE - NIGHT
Kaufman reads The Orchid Thief.
ORLEAN (V.O.)
... to go looking for it in the
Fakahatchee Strand.
He can't concentrate, closes the book and watches a
stewardess tending to another passenger.
INT. STUDIO APARTMENT - NIGHT
Kaufman fixes a salad in the kitchenette. The door opens and
the stewardess enters dragging her luggage on a little cart.
KAUFMAN
Hey! How was Denver?
STEWARDESS
Oh, God, sweetie, I'm so glad to be home.
She kisses him, looks lovingly at him.
STEWARDESS (cont'd)
Can I get you something to drink?
49.
CONTINUED:
INT. AIRPLANE BATHROOM - NIGHT
Kaufman finishes jerking off, stands, pulls up his pants,
adjusts himself, and exits the bathroom.
INT. AIRPLANE - CONTINUOUS
Kaufman steps out of the bathroom. The stewardess is there
talking to another stewardess. She regards Kaufman blankly,
then goes back to her conversation. He heads up the aisle.
One of the stewardesses laughs. He tenses, takes his seat.
INT. AIRPLANE - MORNING
Orlean watches the hundreds of square miles of black, wet
Florida swampland pass by below.
ORLEAN (V.O.)
An early surveyor made this entry in his
field notes...
EXT. SWAMP - DAY
SUBTITLE: FAKAHATCHEE, ONE HUNDRED AND FIFTEEN YEARS EARLIER
A surveyor scribbles in a notebook. The pond is alive with
alligators.
SURVEYOR (V.O.)
A pond surrounded by bay and cypress
swamp, impracticable. Full of monstrous
alligators, counted fifty and stopped.
INT. HOTEL - NIGHT
Orlean lies in bed, wide awake and anxious.
ORLEAN (V.O.)
Whatever isn't wet in the Fakahatchee is
blasted. The grass gets so dry that the
friction from a car can set it on fire,
and the burning grass can engulf the car
in flames. A 1940's botanist noted:
EXT. PRAIRIE - DAY
A botanist, in a hot, arid field, writes in a notebook.
BOTANIST (V.O.)
Most impressed by the area's variety of
squirrels...
50.
(CONTINUED)
A car drives by on the dirt road. It begins smoking. The
driver jumps out of the car just as it bursts into flames.
BOTANIST (cont'd)
... and charred automobiles.
We pull back to see the area filled with abandoned, burned-up
old cars.
INT. MIAMI AIRPORT CAR RENTAL BOOTH - DAY
Kaufman watches the pretty clerk working on the computer.
She looks up, he looks down, studies his road map.
INT. RENTAL CAR - EARLY MORNING
A charmingly bedraggled Orlean drives on a road surrounded by
swamp. She talks to us.
ORLEAN
The swamp's darkness and denseness can
rattle your nerves. A sailor on a plumacollecting expedition wrote in his diary:
EXT. SWAMP - DAY
SUBTITLE: FAKAHATCHEE, ONE-HUNDRED AND THREE YEARS EARLIER
A luggish sailor sits in the distance on a stump, crying.
SAILOR (V.O.)
The place looked wild and lonely. About
three o'clock it seemed to get on Henry's
nerves. We saw him crying, he could not
tell us why, he was just plain scared.
EXT. STATE ROAD 29 - EARLY MORNING
Orlean drives onto the dirt road past the Fakahatchee sign
and talks to us.
ORLEAN
The swampy part of the Fakahatchee is hot
and wet and buggy and full of cottonmouth
snakes and diamond back rattlers and...
INT. RENTAL CAR - MORNING
Kaufman drives down the same road surrounded by swamp.
51.
CONTINUED:
(CONTINUED)
ORLEAN (V.O.)
... alligators and snapping turtles and
poisonous plants and wild hogs and...
EXT. RANGER SHACK - MORNING
Orlean gets out of the car, knocks timidly on the shack door.
Ranger Mike Owen answers.
MIKE OWEN
Charlie?
It's Kaufman standing there.
KAUFMAN
(tremulous)
Yes. Hi.
EXT. SWAMP - MORNING
The sky is overcast. Mike Owen leads Kaufman through a cool
swamp, which is completely dry. The two men walk easily on
peaty ground. Kaufman, slathered with sun screen and covered
head to foot in unnecessary protective clothing, tries to be
interested in Owen's lecture.
MIKE OWEN
So the whole ecosystem is six thousand
years old. Five to six thousand years
old. About that. Five or six.
KAUFMAN
Okay.
MIKE OWEN
Now the Fakahatchee is the largest of all
the cyrpess strands, probably in the
world. I don't know of any cypress
strand bigger. It's about twenty miles
long, or nineteen, nineteen to twenty,
nineteen... and right here it's about
five miles wide, four and a half, five.
So, again, it's twenty miles long, three
to five miles wide. And over here --
EXT. SWAMP - LATER
Mike Owen holds a handful of peat. Kaufman looks at it.
MIKE OWEN
The oldest carbon dating they've done on
any of the peat out here is fifty-seven
hundred years. That's with carbon-14.
52.
CONTINUED:
(MORE)
(CONTINUED)
That's in the right age where you can
really date things accurately with carbon14, because it's half-life is fifty-five
hundred years, so they must have found
have of it gone and figured that...
KAUFMAN
Why isn't it wet? Orlean wrote about
wading through black, corrosive water.
She said it was the scariest experience
of her life. And when I spoke to you on
the phone, you said wear heavy boots,
long pants and...
MIKE OWEN
There's usually water. We've been going
through a bit of a drought. Say, have
you seen that movie, Medicine Man?
That's a good movie about protecting
nature. It shows there could be
something important in a rain forest we
don't even know about, like a cure for
cancer.
KAUFMAN
It's not even hot. I was expecting it to
be awful. Sun beating down, wading
through water, looking out for snakes,
wild hogs. I was thinking it would be
dramatic. Alligators. Something!
MIKE OWEN
The alligators are over by the lakes.
The temperature's a blessing for us.
This time of year can get uncomfortably
hot.
(pointing excitedly)
Green anole. Florida's most common.
Kaufman looks down and sees a plain-looking little lizard
hanging on a tree. Mike Owen jots it down in his notebook.
MIKE OWEN (cont'd)
I try to keep a log of sightings.
INT. TRUCK - DAY
Mike Owen drives. Kaufman stares out the window at boring
trees.
ORLEAN (V.O.)
It had been a hard day and I hadn't seen
what I'd come to see. Maybe the ghost
orchid was a ghost after all.
53.
CONTINUED:
MIKE OWEN (cont'd)
(MORE)
(CONTINUED)
There are certainly ghosts in the
Fakahatchee -- ghosts of rangers who were
murdered years ago by illegal plume
hunters, and of loggers who were cut to
pieces in fights, and for years there has
been an apparition wandering the swamp,
the Swamp Ape, which is said to be seven
feet tall and seven hundred pounds and
have the physique of a human, the posture
of an ape, and the body odor of a skunk.
EXT. RANGER SHACK - DAY
Kaufman and Owen stand by Kaufman's car.
MIKE OWEN
What Laroche did was wrong. Those
flowers belong to all of us, all 250
million of us -- 250? I think it's up to
270 now -- And belonging to all of us
means they belong to none of us. Nobody
has a right to take them. Not me, not
you, not John Laroche, not...
Kaufman is desperate for something else. He blurts:
KAUFMAN
Listen, um, Susan Orlean wrote about a
legendary creature called a Swamp Ape.
Have you ever heard stories or --
MIKE OWEN
(pissy)
Tourist garbage! I don't know why people
need to invent silly creatures to make
nature fascinating. Isn't nature amazing
enough?
KAUFMAN
(shamed)
I just asked because she mentioned it.
INT. HOTEL ROOM - NIGHT
Orlean, still dirty from the swamp, holds a phone to her ear
and talks to us. She has cute little dirt smudges on her
face.
ORLEAN
That night I called Laroche.
ORLEAN
(into phone)
I didn't see anything but bare roots.
54.
CONTINUED:
ORLEAN (V.O.) (cont'd)
(MORE)
(CONTINUED)
And I had this thought. Maybe the ghost
orchid only blooms in the minds of people
who've walked too long in the swamp.
INT. ORLEAN'S APARTMENT - NIGHT
Orlean types. It's pouring and sheets of rain beat against
her window. She glances at her husband, across the room
reading a book. She sighs, continues typing.
ORLEAN (V.O.)
What I didn't say to him is that life
seemed to be filled with things that were
just like the ghost orchid -- wonderful
to imagine and easy to fall in love with
but a little fantastic and fleeting and
out of reach.
INT. RENTAL CAR - EVENING
Kaufman drives down a Florida strip-malled highway. He
passes a Barnes and Noble, a Burger King, a Starbucks. He
parks in front of a California Pizza Kitchen.
INT. CALIFORNIA PIZZA KITCHEN (FLORIDA) - EVENING
Kaufman watches the waitresses. One approaches his booth.
Her name badge reads: Caryn, Tampa, FL. She smiles at
Kaufman as she looks right through him.
INT. HOTEL ROOM - NIGHT
A morose Kaufman sits on the bed reading The Orchid Thief.
KAUFMAN (V.O.)
What I didn't say to him was that life
seemed to be filled with things that were
just like the ghost orchid -- wonderful
to imagine and easy to fall in love with
but a little fantastic and fleeting and
out of reach.
Kaufman is deeply moved. He hi-lites the passage, then looks
at the smiling photo of Orlean. He finds himself lost in it.
INT. HOTEL ROOM - NIGHT
Orlean, dirty from the swamp, is on the phone.
LAROCHE (PHONE VOICE)
(beat,clears throat)
Jesus Christ, of course there are ghost
orchids out there! I've stolen them!
55.
CONTINUED:
ORLEAN (cont'd)
(MORE)
(CONTINUED)
(beat, a cleared throat)
You should have gone with me.
CLOSE-UP OF MAGAZINE
The line: "... then he cleared his throat and said: 'You
should have gone with me.'"
VALERIE (O.C.)
Beautifully written. A really unique
piece.
PULL BACK TO:
INT. RESTAURANT - MIDDAY
Busy lunch crowd. Valerie sits at a table with Orlean and an
open New Yorker magazine.
ORLEAN
Thank you. Thanks very much.
VALERIE
We're big fans.
ORLEAN
Oh, thank you.
VALERIE
And Laroche is such a fun character.
ORLEAN
Yeah, John's a character all right.
VALERIE
It's funny and fresh. And sad in a way.
ORLEAN
Well, thanks. Thank you.
VALERIE
So we were wondering, what's next?
ORLEAN
Oh, um, Random House wants me to expand
it into a book. So I'll be doing that.
VALERIE
And there'll be more of Laroche?
ORLEAN
Yeah. More John, more orchids.
56.
CONTINUED:
LAROCHE (PHONE VOICE) (cont'd)
(CONTINUED)
VALERIE
Y'know, we'd really like to option it.
ORLEAN
(laughing)
You want to make this into a movie?
VALERIE
Laroche is such a fun character. So...
INT. VAN - DAY
Laroche, wearing a Cleveland Indians T-shirt, drives crazily
thorugh the Hollywood Seminole reservation. Orlean holds on.
LAROCHE
No shit I'm a fun character.
(beat)
Who's gonna play me?
ORLEAN
I've got to write it first. Someone's
gotta write the screenplay. Most things
never get made. It's premature to --
LAROCHE
I think I should play me.
Laroche swerves into a parking space in the nursery lot.
EXT. SEMINOLE NURSERY - DAY
Laroche and Orlean get out of the van.
LAROCHE
I've got all the right qualities. While
you write, I'll take an acting class.
A few young Indian guys are hauling bags of potting soil.
They look at Laroche sourly. Laroche indicates the giant
cartoon Indian on his T-shirt.
LAROCHE
I wear this just to screw with 'em.
INT. TRAILER - CONTINUOUS
Laroche enters his office, looks at some papers on his desk.
LAROCHE
Most of them don't even bother calling me
John anymore. It's "Crazy White Man"
now.
57.
CONTINUED:
(MORE)
(CONTINUED)
"Crazy White Man" is a good title for the
movie. Call the book "Crazy White Man."
Or, I don't know, "Collector of Hearts"
or something.
Before Orlean can respond, Laroche picks up the phone and
dials an impossibly long number. He waits, gestures for
Orlean to sit on a chair piled high with junk.
LAROCHE (cont'd)
You won't hurt anything.
Orlean moves the junk over, shares the seat with it.
LAROCHE (cont'd)
(Yelling into phone)
Hello? Hello? Hi? This is John Laroche
from the Seminole Nursery. Sem-ih-nole!
(to Orlean)
How do you say Seminole in Spanish?
(into phone)
That's right, yes! Yeah, I want to order
some more of those pink string beans!
Pink string beans!
(yelling)
Pink String Beans! Pink String Beans!
Buster appears in the door.
LAROCHE (cont'd)
(into phone)
I'll call back.
(hangs up)
Hey, Buster.
BAXLEY
John.
LAROCHE
I was trying to order some pink string
beans from Argentina.
BAXLEY
No kidding.
LAROCHE
I figure just because Project Ghost
Orchid is dead, we're not closing shop.
BAXLEY
Listen, John --
58.
CONTINUED:
LAROCHE (cont'd)
(CONTINUED)
LAROCHE
We'll get into plant multiplication. Buy
little ones, turn 'em into big ones, sell
'em at a profit. Simple plant
multiplication for the masses.
BAXLEY
John, we're thinking maybe now's a good
time for you to take a few weeks.
LAROCHE
I don't need a vacation, Buster.
BAXLEY
It's a good time. Things are slow.
Laroche stares at Buster. Buster stares back.
LAROCHE
Y'know, the guys on my crew here, all
they do is smoke weed all day. I been
meaning to talk to you about that. So if
it's a question of productivity --
INT. VAN - A FEW MINUTES LATER
Laroche weaves through traffic. Orlean holds on.
LAROCHE
They're gonna fire me. Goddamn politics.
Crazy White Man's bad publicity.
(pounds steering wheel)
I can't believe I'm dealing with this!
(pounds steering wheel)
Like I could give a damn. If they fire
me, I'll sue. I already did some legal
research on this when I was doing the
other shit. They can't fire me. And I
ain't going to quit.
MONTAGE
Gray skies. Kaufman drives his rental car: he looks at the
Seminole Nursery, the Collier County Courthouse, Laroche's
house. He drives through swampy terrain. He walks around at
an orchid show, he attends a slide-show orchid lecture. It's
all dull. He ends up sitting on a bench on an empty beach,
staring out at the ocean.
INT. HOTEL ROOM - DAY
Orlean dials the phone. It rings for a long time. Finally:
59.
CONTINUED: (2)
(CONTINUED)
LAROCHE (PHONE VOICE)
(groggy)
Yeah?
ORLEAN
John, it's Susan.
(waits for response)
Orlean.
(waits)
So, I was just wondering if you might be
willing to talk some more.
LAROCHE (PHONE VOICE)
What about?
Orlean rolls her eyes.
ORLEAN
C'mon, John, I'm trying to put together a
book. Don't just abandon me down here.
LAROCHE
I'm no longer interested in orchids. I'm
pursuing other avenues. I apologize for
any inconvenience this might cause you.
Orlean is silent, taps her fingers on the bedside table.
LAROCHE
Thank you for your time.
Laroche hangs up. Orlean sits there for a moment, flips
through her list of orchid collector names.
EXT. EMPTY BEACH - DAY
Kaufman sits on the bench, looking out at the ocean. An
attractive, spandexed couple skate by, chatting in German.
He watches the woman, hoping for a look, for something. He
doesn't get it. They're gone. A tan older man sits on the
bench, lights a cigarette. Kaufman continues to look at the
ocean, even though he feels the guy's eyes on him. He
doesn't want to engage.
GUY ON BENCH
We could use the rain, huh?
Kaufman nods, looking at the ocean. Pause.
GUY ON BENCH (cont'd)
So you from around here?
Kaufman shakes his head "no." Pause.
60.
CONTINUED:
(CONTINUED)
GUY ON BENCH (cont'd)
So where then?
KAUFMAN
California.
GUY ON BENCH
(excitedly)
Yeah? I'm moving to L.A. I just wrote a
screenplay. I sent it to a lot of
agents. But if they turn me down, I'll
go there and market it myself. I used to
be in marketing in New York, so I know
exactly how to sell this thing.
(beat)
Where's a nice place to live if you don't
have a car?
KAUFMAN
You kind of need a car. I guess West
Hollywood would be okay.
GUY ON BENCH
So you recommend West Hollywood then.
KAUFMAN
I'm not recommending it.
Pause.
GUY ON BENCH
I moved down here for a change, and I
wrote the screenplay. Just like that.
It's a great idea.
The old guy waits for a response. He gets none.
GUY ON BENCH (cont'd)
It's about a mob guy, but it's not your
regular mob story. There's a twist. A
cop tells this mob guy's wife that the
mob guy's cheating on her. But the truth
is, the cop's lying because he wants her
for himself. See, they used to go
together in high school.
(waits for response, then:)
You know anything about screenplays?
Kaufman shakes his head.
61.
CONTINUED:
(CONTINUED)
GUY ON BENCH (cont'd)
Well, the object is to make people think
you're going in one direction, then you
twist it to keep 'em surprised. I came up
with all these amazing twists out of
nowhere. Well, not nowhere.
(beat)
I'm a born again Christian.
(beat)
You have faith?
KAUFMAN
No. Not really.
GUY ON BENCH
You don't believe in anything?
Kaufman shrugs.
GUY ON BENCH (cont'd)
I don't know how you can look out at this
beautiful ocean and not believe there's
an intelligence that created it.
KAUFMAN
I don't know.
GUY ON BENCH
Well, you can't know until you experience
it. That requires accepting Jesus Christ
as your Lord and Savior. Believe me.
Lookit, if I was to show you a bottle of
clear liquid and told you it was vodka,
how would you know if it really was or if
it was water? There's only one way.
KAUFMAN
I'd smell it.
GUY ON BENCH
(annoyed)
No. You can't smell vodka. You'd have
to taste it, right?
KAUFMAN
It could be poison. I don't know you.
GUY ON BENCH
(angry)
Look, let's go with the analogy I'm
drawing here. It's not poison. Okay?
(resuming control)
62.
CONTINUED: (2)
(MORE)
(CONTINUED)
So you'd have to taste it to know.
Right? That's my point.
KAUFMAN
Right.
GUY ON BENCH
That's all I'm saying.
(beat)
So West Hollywood, huh? I think I'll
make it out this year. Because how long
can you look at an ocean, y'know?
MONTAGE
Susan Orlean talks to various orchid enthusiasts, visits
nurseries, sits in lecture halls, attends orchid shows, sits
in the library reading orchid books. She is bored and
distracted.
INT. AIRPLANE - NIGHT
A stewardess places a cup and an airline-sized bottle of
vodka down in front of a lost Kaufman. He smiles at her. No
response. He opens the bottle and smells the vodka.
INT. LIMO - NIGHT
Kaufman sits in the back seat and stares out the window. The
driver looks at him a couple of times in his rearview mirror.
KAUFMAN (V.O.)
I have failed. I have nothing to say. I
am fat. I am not a writer.
DRIVER
Mr. Kaufman, do you mind if I ask what
type of work you do for Sony?
KAUFMAN
I'm a writer.
DRIVER
(impressed)
A song writer?
KAUFMAN
No, I'm a screenwriter.
DRIVER
Oh, wow! Good for you. You mind if I
ask what your movie's about?
63.
CONTINUED: (3)
GUY ON BENCH (cont'd)
(CONTINUED)
KAUFMAN
It's about flowers.
No response. Kaufman tries to make it interesting.
KAUFMAN (cont'd)
It's about this poacher who steals
orchids out of a swamp.
DRIVER
I heard about that! Drug flowers, right?
KAUFMAN
Yeah. That's it.
DRIVER
I heard about that! That's great!
Action-adventure is my favorite genre.
INT. EMPTY HOUSE - NIGHT
Kaufman enters with his bags and heads to the stairs.
Donald, typing furiously at his desk, looks up.
DONALD
How was Florida, man?
KAUFMAN
(climbing the stairs)
Okay.
DONALD
Cool! Hey, my script's going amazing!
Right now I'm working out an Image
System. Bob calls it an invaluable
asset. Because of my multiple
personality theme, I've chosen the motif
of broken mirrors to show my
protagonist's fragmented self. Bob
teaches that an Image System greatly
increases the complexity of an aesthetic
emotion.
KAUFMAN
You sound like you're in a cult.
Kaufman disappears upstairs.
DONALD
No, it's just good writing technique.
(types, then:)
64.
CONTINUED:
(MORE)
(CONTINUED)
Oh, I made you a copy of McKee's Ten
Commandments. I've posted one over both
our work areas.
INT. EMPTY BEDROOM - CONTINUOUS
Kaufman tears down MCKEE'S TEN COMMANDMENTS. Donald appears
backlit in the doorway and seems oddly threatening.
DONALD
You shouldn't have done that.
They look at each other. Donald breaks the tension, smiles.
DONALD (cont'd)
'Cause it's extremely helpful.
(lies down on floor)
Hey, any sign of that Swamp Ape?
KAUFMAN
There is no Swamp Ape. It was invented
for people who can't find the actual
world fascinating. Y'know?
DONALD
Oh, okay. I didn't know that. Sorry.
Hey, I got a song! "Happy Together." I
was worried about putting a song in a
thriller, but Bob says, Casablanca, the
greatest screenplay ever written, did
exactly that. Mixed genres.
KAUFMAN
I need to go to bed, Donald. I haven't
slept in a week.
DONALD
Okay.
Donald remains on the floor.
MONTAGE SEQUENCE
Mishmash of images: alligators snapping, Laroche jabbering,
Orlean typing, 19th century orchid poachers slogging, orchids
blooming, Mike Owen lecturing.
KAUFMAN (V.O.)
... so we open the swamp... okay,
flashback to young Laroche had turtles...
Okay, Susan says What Is Passion? And
okay we open on a swamp and suddenly a
white van comes tearing around...
65.
CONTINUED:
DONALD (cont'd)
INT. EMPTY BEDROOM - NIGHT
Kaufman lies half-awake in bed, sweating, his eyes darting
back and forth. He looks over at the clock. It's 3:32.
KAUFMAN
Damn it.
Donald snores happily off-screen. Kaufman switches on a
lamp, pulls The Orchid Thief from his bag, flips through it.
There are now many yellow hi-lited passages. He reads one.
KAUFMAN (V.O.)
There are too many ideas and things and
people, too many directions to go. I was
starting to believe the reason it matters
to care passionately about something is
that it whittles the world down to a more
manageable size.
KAUFMAN
Such sweet, sad insights. So true.
Kaufman flips to the glowing, smiling author photo.
KAUFMAN
And you're... I like looking at you.
He stares at the photo. Its smile broadens. It talks.
ORLEAN PHOTO
I like looking at you, too. Charlie.
The photo smiles warmly at him. Kaufman begins to jerk-off.
He closes his eyes.
Then: Kaufman and Orlean are in his bed together, making
love. She smiles at him throughout. They finish.
Then: Kaufman is alone in bed, heaving. He looks at the
still smiling photo. It somehow seems sleepy now.
KAUFMAN
I don't know how to do this. I'm afraid
I'll disappoint you. You've written a
beautiful book. I can't sleep. I'm
losing my hair. I'm fat and repulsive --
ORLEAN PHOTO
Shhh. You're not. Whittle it down,
focus on one thing in the story, find the
thing you care passionately about and
write about that.
66.
(CONTINUED)
Kaufman studies her delicate, melancholy face. He's in love.
ORLEAN PHOTO (cont'd)
(sweet, flirty smile)
I figured there might be something...
INT. KITCHEN - MORNING
Kaufman paces and talks animatedly into his mini-recorder.
KAUFMAN
We see Susan Orlean, delicate, fragile,
beautiful, haunted by loneliness, typing
at her desk. She looks at the camera and
talks to us: "John Laroche is a tall guy,
skinny as a stick, pale-eyed, slouchshouldered..."
Donald enters in his underwear, pours coffee.
DONALD
Morning.
KAUFMAN
Hey, hey.
DONALD
You seem chipper.
KAUFMAN
I'm good. I have some new ideas.
DONALD
Cool. Me too. I'm putting in a chase
sequence now. The killer flees on
horseback with the girl. The cop is
after them on a motorcycle. It's like a
battle between motors and horses.
KAUFMAN
They're all still one person, right?
DONALD
Yeah, hey, that's the big pay-off.
KAUFMAN
(nice)
Well, it sounds exciting.
DONALD
Thanks, man. Thanks.
67.
CONTINUED:
INT. CAR - DAY
Orlean drives through swampy landscape. She talks to us.
ORLEAN
I suppose what I'd been doing in Florida
was trying to understand how people found
order and contentment and a sense of
purpose in the universe by fixing their
sighs on one single desire. Now I was
also trying to understand how someone
could end such intense desire without a
trace.
Orlean stops at a payphone and dials. It rings for a while.
LAROCHE (PHONE VOICE)
(groggy)
Yeah what?
ORLEAN
Hello, John, it's Susan.
LAROCHE (PHONE VOICE)
Yeah hi.
ORLEAN
So, how's everything going?
LAROCHE (PHONE VOICE)
Great! I'm training myself on the
internet. It's fascinating. I'm doing
pornography. It's amazing how much these
suckers will pay for photographs of
chicks. And it doesn't matter if they're
fat or ugly or what.
ORLEAN
That sounds good.
LAROCHE (PHONE VOICE)
It's great is what it is.
ORLEAN
So I've been meeting a lot of orchid
people, going to shows, I thought you
might want to hear about it.
LAROCHE (PHONE VOICE)
Sorry. I am officially no longer
interested in orchids or the losers who
are still interested in them. The end.
68.
(CONTINUED)
Laroche hangs up. Orlean looks off into the flat distance.
ORLEAN
If you really loved something, wouldn't a
little of it always linger?
She turns to the camera.
INT. EMPTY BEDROOM - NIGHT
Kaufman holds The Orchid Thief open with one hand and types
with the other.
KAUFMAN (V.O.)
Susan Orlean drives. The golden light of
the afternoon sun caresses her sweet
face. She talks to us.
(copying from book)
"Florida is a landscape of transition and
mutation, a hybrid of ..."
Kaufman's hand slips, the book shuts. He opens it to the
wrong page and sees an About The Author paragraph. The last
line jumps off the page: "She now lives in New York City with
her husband."
EXT. L.A. STREET - NIGHT
Kaufman wanders the street, distraught. A passing woman
snickers.
INT. EMPTY BEDROOM - NIGHT
Kaufman types.
KAUFMAN (V.O.)
Susan and her husband eat dinner in
silence. A dying relationship. Husband:
You want to do something tonight? Susan:
I should work. Y'know. I got stuff...
INT. EMPTY LIVING ROOM - DAY
Kaufman and Orlean move furniture into the room. It now
looks warm and inviting. Orlean wears a bandana kerchief.
KAUFMAN
I'm so thrilled I get to adapt your book,
get to merge my thoughts with yours. I
love that. It's intimate, like a
marriage.
69.
CONTINUED:
(CONTINUED)
ORLEAN
Not like a marriage.
KAUFMAN
Maybe what marriage could be.
Her eyes tear up. She kisses him.
ORLEAN
Isn't it ironic? You adapting my book?
My three years in Florida meditating on
my inability to experience passion
resulted in my finding it with you.
INT. EMPTY BEDROOM - MORNING
Kaufman paces with his mini-recorder. Off-screen typing.
KAUFMAN
... and in the final sequence Susan as a
young girl swings alone in the backyard.
From high in the air she sees her parents
in separate rooms staring blankly in
opposite directions. This symbolizes the
profound scarring their waning passion
has had on the girl's psyche, how she
became afraid to ever really love
something because it would go away.
Kaufman is immensely pleased. He smiles at Orlean's photo.
KAUFMAN (cont'd)
This is good. I'm finding you.
The phone rings.
KAUFMAN
Yallo?
VALERIE (PHONE VOICE)
Hi, Charlie. It's Valerie. Just bugging
you again. How's everything going?
KAUFMAN
Good. I think really good now.
VALERIE (PHONE VOICE)
Great. So I spoke to Susan yesterday.
KAUFMAN
(beat)
Oh. Uh-huh, uh-huh.
70.
CONTINUED:
(CONTINUED)
VALERIE (PHONE VOICE)
I told her you were making terrific
progress and she's really excited to read
the script.
Sweat appears on Kaufman's brow.
KAUFMAN
Oh. Good.
VALERIE (PHONE VOICE)
And she said she'd love to meet you.
All color drains from Kaufman's face.
KAUFMAN
Um, well, y'know, for me it's distracting
to... or confusing to discuss what I'm
exploring in the screenplay at this
point... before I finish... it. So...
VALERIE (PHONE VOICE)
That's fair. I'll let her know.
KAUFMAN
Tell Susan I'd be very happy to meet her
at a future date. As she sees fit.
VALERIE (PHONE VOICE)
Okay. Good enough.
KAUFMAN
And tell her how much I love her book.
Say I think she's such a great writer.
VALERIE (cont'd)
Will do. Just keep us posted, Charlie.
KAUFMAN
Okay. Nice talking to you. Okay then.
Kaufman hangs up and looks at the photo of Orlean. It's
still smiling, but not at him. It's not glowing. Maybe it's
even smirking. Kaufman paces frantically, holding his
stomach. Donald's off-screen typing grows louder.
INT. EMPTY LIVING ROOM - CONTINUOUS
Donald types at his desk on his computer. Kaufman storms in.
71.
CONTINUED:
(CONTINUED)
KAUFMAN
You can sit here and pretend to be a
writer, mocking the seriousness of what I
do, like some kind of fucking funhouse
mirror version of me! But let me tell
you, you don't know what writing is!
Kaufman grabs his stomach, doubles over.
INT. EMERGENCY ROOM - DAY
Kaufman is on a gurney and hooked up to an IV. He watches a
slightly haggard woman with a bandaged head sitting in a
small room across the hall. She glances over in his
direction. He smiles. She looks through him.
KAUFMAN (V.O.)
She thinks I'm repulsive.
He lies there for a moment, then his eyes light up.
INT. EMPTY BEDROOM - DAY
Kaufman types passionately on his computer.
KAUFMAN (V.O.)
Movie opens.: Charlie Kaufman, fat, old,
bald, paces the room. His voice-over
carpets the scene. "I am old. I am fat.
I am bald. My toenails have turned
strange. I am repulsive. How repulsive?
I don't know for I suffer from a
condition called Body Dysmorphic
Disorder."
INT. AGENT'S OFFICE - DAY
Kaufman, looking tired and wild-eyed, sits with his agent.
JERRY
... we need to talk about the orchid
script. Valerie called yesterday.
They're getting antsy.
KAUFMAN
I think I've got it on track now.
JERRY
Good. She said you sounded weird.
KAUFMAN
No Hollywood bullshit. Just raw truth.
Sometimes that takes a while to find.
72.
CONTINUED:
(CONTINUED)
JERRY
Okay. What's the time frame here?
KAUFMAN
It's goddamned honest, Jerry. It's true.
JERRY
Oh, hey, my friend sent me this fuckedup internet thing. It's a girl taking a
shit, but a trout comes out. You got email yet? I'll send it to you.
KAUFMAN
This is more honest than anything
anyone's ever done before in a movie,
I'll tell you that. The only truth we
can offer is the truth that's our own
experience of the world. "The great
poet, in writing himself, writes his
time." T.S. Eliot.
JERRY
It sounds good, buddy. But we do need to
give Valerie a ballpark --
KAUFMAN
I'm sick of their constant harassment!
EXT. SWAMP - DAY
Black and white shot of Laroche and the Indians slogging
through Fakahatchee. The camera swoops down and the scene
turns into a mannequin version.
ORLEAN (V.O.)
On December 21, 1993 John Laroche and
three Seminoles illegally removed one
hundred and thirty rare plants from the
Fakahatchee Strand State Preserve.
INT. MIAMI CONVENTION CENTER - DAY
It's an enormous hall filled with people setting up elaborate
displays. Martin Motes and his assistant work on the
Laroche display. Orlean watches them. Motes looks up.
MOTES
You've been checking out the displays?
ORLEAN
Yeah.
73.
CONTINUED:
(CONTINUED)
MOTES
It's the Miami centennial, we're supposed
to illustrate something about Florida
history.
ORLEAN
Right. Now Laroche is part of Florida
history. As a mannequin.
MOTES
It's a world of words to the end of
it./In which nothing solid is its solid
self. You'll have to forgive me, I'm a
reformed poetry professor.
Orlean is moved by the quote.
ORLEAN
Who is that?
MOTES
Wallace Stevens.
INT. BARNES AND NOBLE - NIGHT
Orlean stands in the poetry section and reads a Wallace
Stevens book.
ORLEAN (V.O.)
The greatest poverty is not to live/In a
physical world, to feel that one's
desire/is too difficult to tell from
despair.
INT. EMPTY BEDROOM - NIGHT
Kaufman is on the floor typing. His mini-recorder is on.
KAUFMAN'S VOICE (ON RECORDER)
Kaufman sits across from Valerie, a
pretty film executive. He eyes her as
she picks at her salad. She looks up and
he looks down. He sweats. She
compliments him on his work. She rubs
her nose. He pulls at his nostrils. He
tries to sound like he knows what he's
talking about. He's full of shit.
INT. HOTEL ROOM - NIGHT
Orlean dials the phone.
74.
CONTINUED:
(CONTINUED)
LAROCHE (PHONE VOICE)
Yeah.
ORLEAN
John, it's Susan.
LAROCHE (PHONE VOICE)
I know.
ORLEAN
I went to the Orchid Society Show a
couple of days ago.
LAROCHE (PHONE VOICE)
I'm not interested.
ORLEAN
There was a display of you stealing the
ghost orchids. You're famous.
LAROCHE (PHONE VOICE)
I'm not involved in that world now.
ORLEAN
So, look, John, I still haven't seen a
ghost. And I was wondering --
LAROCHE (PHONE VOICE)
Yeah, yeah. I'll take you in.
ORLEAN
Really? Thank you so much! I just...
LAROCHE (PHONE VOICE)
Tomorrow. Pick me up at 5:30 am or it'll
get too hot. I'll buy all the supplies
we'll need.
INT. EMPTY BEDROOM - NIGHT
Kaufman types.
KAUFMAN (V.O.)
Kaufman jerks off to the book jacket
photo of Susan Orlean.
Donald appears in the doorway with a script.
KAUFMAN
What?! What do you want?
DONALD
I finished. My script. I'm done.
75.
CONTINUED:
(CONTINUED)
Kaufman stares at his typewriter, doesn't say anything.
DONALD (cont'd)
So would you show it to your agent?
Kaufman grabs Donald's script and throws it on his bed.
DONALD (cont'd)
Thanks. Also, I wanted to thank you for
your idea. It was very helpful. I
changed it a little. Now the killer cuts
off body pieces and makes the victims eat
them. It's, like, I once saw this
picture of a snake swallowing it's tail --
Kaufman collapses, puts his head in his hands.
KAUFMAN
Ourobouros.
DONALD
I don't know what that means.
KAUFMAN
The snake is called Ourobouros.
DONALD
I don't think so. But it's cool for my
killer to have this modus operandi.
Because at the end when he forces the
woman, who's really just him, to eat
herself, he's also eating himself to
death.
KAUFMAN
I'm insane. I'm Ourobouros.
DONALD
I don't know what that is.
KAUFMAN
I've written myself into my screenplay.
It's eating itself. I'm eating myself.
DONALD
Oh. That's kinda weird.
KAUFMAN
It's self-indulgent. It's narcissistic.
It's solipsistic. It's pathetic. I'm
pathetic. I'm fat and pathetic.
76.
CONTINUED:
(CONTINUED)
DONALD
I'm sure you had a good reason, Charles.
You're an artist.
KAUFMAN
The reason is I'm too timid to speak to
the woman who wrote the book. Because
I'm pathetic. Because I have no idea how
to write. Because I can't make flowers
fascinating. Because I suck.
DONALD
Hey, am I in the script, too?
KAUFMAN
I'm going to New York. I'll meet her.
That's it. That's what I have to do.
DONALD
Don't get mad at me for saying this,
Charles, but Bob's got a seminar in New
York this weekend. So if you're stuck --
Kaufman shoots Donald a look.
INT. HOTEL ROOM - LATER
The lights are off. Orlean is in bed, sleeping fitfully.
INT. PLANE - NIGHT
Kaufman reads Ann Landers's column in a paper dated July 4th.
KAUFMAN (V.O.)
Give yourself a reality check. Phoniness
is transparent, and it is tiresome. Take
pleasure in the beauty and wonders of
nature. A flower is God's miracle.
Out the window he sees colorful fireworks far down below,
like small flowers blooming on the black earth. His eyes
well with tears.
INT. HOTEL ROOM - NIGHT
Kaufman sleeps fitfully.
EXT. SWAMP - DAY
Orlean walks through alone, panicked. All the vegetation is
greener and crazier-looking than we've seen before. Things
slither by in the water, brush up against her.
77.
CONTINUED: (2)
(CONTINUED)
She tenses, steps into a sinkhole, flails, gets tangled in a
vine, which wraps around her leg as she attempts to extricate
herself. She falls face forward into the black water.
INT. HOTEL ROOM - CONTINUOUS
Orlean snaps awake, bedcovers tangled around her legs. She
heaves, looks at the clock. It's 3:30. She stares at the
ceiling. She looks at the clock again. It's 3:30. She
looks at the clock again. It's 4:10. She closes her eyes.
She opens them, looks at the clock, the room is filled with
murky water, the bed an island of dryness. An alligator
pokes its nose out of the water, begins to climb onto the
bed. Orlean jumps back, hits her head on the headboard. The
room is back to normal. The clock reads 4:23. She closes
her eyes. The alarm goes off.
EXT. LAROCHE'S HOUSE - EARLY MORNING
Orlean pulls up to the curb where Laroche stands, dressed in
a short sleeve shirt, thin pants, and his Miami Hurricanes
hat. He opens the door and climbs in.
ORLEAN
Where are our supplies?
LAROCHE
Got everything I need right here.
Laroche pulls a new pack of cigarettes out of his pocket.
Orlean turns off the ignition and stares at the steering
wheel. Laroche shrugs.
LAROCHE (cont'd)
Look, don't worry about it. We'll get
crap at the Indian trading post on
Alligator Alley. Hey, want me to drive?
INT. CAR - A BIT LATER
The sun has come up strong. It looks hot. Laroche speeds
along with one finger on the wheel, paying little attention
to the road. The car veers onto the shoulder, he lazily
corrects it. Orlean is tense.
LAROCHE
I remember one time when I was a kid,
fifteen or so, my mother and I came to
the Fakahatchee to look for a ghost to
photograph. We walked for hours, through
the most intense heat I'd ever felt. We
couldn't find one. I wanted to turn
back. But my mom said, no.
78.
CONTINUED:
(MORE)
(CONTINUED)
She said, John, if you keep searching for
something past doubt, past hopelessness,
past the absolute certainty that you'll
never find it, if you keep searching past
that, there it'll be. So we walked. I
had goddamn bloody blisters on my feet.
And we found ourselves in this charred
prairie, desolate, sun blasted, y'know.
And there in the middle of it was this
one gorgeous, snowy Polyrrhiza lindenii.
They drive in silence for a little while. She watches him.
INT. OFFICE - DAY
Orlean types at her desk. She turns to us and talks.
ORLEAN
He made it sound like a Bible story, the
hopeful journey through darkness into
light. I never thought many people in
the world were like John, but I was
realizing more and more that Laroche was
an extreme, not an aberration -- most
people in some way or another do strive
for something exceptional, something to
pursue, even at their peril, rather than
abide an ordinary life.
EXT. MIDTOWN NEW YORK CITY STREET - DAY
Kaufman, sweaty and anxious, walks along. He arrives at the
New Yorker building and enters with steely determination.
INT. BUILDING - A FEW MINUTES LATER
Kaufman waits for the elevator, sweating even more profusely.
The elevator doors open. People get off, people get on, the
elevator doors close. Kaufman still stands there.
EXT. SWAMP - MORNING
Laroche and Orlean step off the levee into black water. They
sink to their knees. The ground is soft; it's a struggle to
pull their feet up to walk. Things slither past in the
water. Something big runs by in the distance. Bees, and
dragonflies hover. Gnats and mosquitoes bite. Birds
screech. Frogs croak. Laroche points to a yellow flower.
LAROCHE
Here we go. Encyclia tempensis.
Laroche lights a cigarette.
79.
CONTINUED:
LAROCHE (cont'd)
(CONTINUED)
LAROCHE (cont'd)
Nice little sucker, isn't it?
Orlean examines it from a distance.
ORLEAN
Cute.
Laroche continues walking and Orlean attempts to keep pace.
He points at a tiny orchid on another tree.
LAROCHE
Clamshell orchid. You know that.
ORLEAN
Uh-huh.
LAROCHE
See, I found you two already. I'll show
you every orchid you want today. I'll
find you a fucking ghost if it kills me.
(pointing to another orchid)
Rigid Epidendrum. That's an ugly-ass
orchid. But I'm no snob. I'm interested
in all orchids. Not just pretty ones.
INT. COFFEE SHOP - A FEW MINUTES LATER
A miserable Kaufman sits in the window, sipping coffee and
watching the New Yorker building across the street. He
steels himself, exits the coffee shop.
INT. ELEVATOR - A FEW MINUTES LATER
Kaufman rides up in the crowded elevator. It stops a few
times; people get off and on. Kaufman sweats. The doors
open. The New Yorker logo is painted on the wall opposite
the elevator. Nobody gets off or on. The doors close. The
elevator continues up. Kaufman hates himself. Soon the
elevator is emptied out with the exception of Kaufman. It
begins its descent and stops once again at the New Yorker.
This time Orlean gets on. Kaufman is absolutely panicked.
Orlean looks at him blankly, presses "lobby", and faces
front. Kaufman sweats, studies the back of her head. The
elevator arrives at the lobby. Orlean gets out. Kaufman
hesitates, then follows.
EXT. NEW YORK CITY STREET - DAY
Orlean walks along. Kaufman follows her.
80.
CONTINUED:
EXT. SWAMP - LATE MORNING
The sun is much higher in the sky. Orlean is a sweaty mess,
frizzed hair, anxious, scraped, dirty.
LAROCHE
(peppy)
They're right nearby. Just follow me.
INT. RESTAURANT - DAY
Orlean sits by herself, reading Vanity Fair. Kaufman sits a
few tables away. He scribbles in his notebook.
KAUFMAN (V.O.)
Reads Vanity Fair. Funny detail: New
Yorker writer reads Vanity Fair. Use!
A waitress brings a tuna sandwich and an ice tea to Orlean.
KAUFMAN (V.O.) (cont'd)
Likes tuna, drinks ice tea. Good
character details. Good stuff!
Orlean looks up from her magazine and smiles at the waitress.
ORLEAN
Thanks. Could I get some lemon please?
The waitress nods and leaves. Kaufman scribbles.
KAUFMAN (V.O.)
Likes lemon in tea and her voice is not
at all what I imagined. Interesting!
EXT. SWAMP - NOON
Orlean follows Laroche. She watches him start off in one
direction, stop, start off another direction, then go
straight ahead. Orlean seems depressed.
ORLEAN
Laroche, can I ask you a personal
question?
Laroche turns and scowls at her.
LAROCHE
We're not lost.
EXT. NYC STREET - DAY
Orlean window shops at a shoe store. Kaufman takes notes.
81.
(CONTINUED)
KAUFMAN (V.O.)
Eyeing Stuart Weitzman pumps. Okay.
Orlean heads down the street. Kaufman follows. She enters
the New Yorker building. Kaufman waits outside.
EXT. SWAMP - DAY
The sun is hot. Laroche is twenty feet ahead of Orlean. She
watches him march forward with great authority. She massages
her eyebrows, leaving a residue of dirt on her face.
INT. HOTEL ROOM - NIGHT
Kaufman reviews his notes. He is sweaty and wild-eyed.
KAUFMAN (V.O.)
I have nothing. I am nothing. I am fat.
I am over. I am lost.
EXT. SWAMP - LATER
The sun is high. Orlean and Laroche sit on dry ground. She
stares at him. Laroche won't look at her. He busies himself
opening the backpack and pulling out food. Finally, Laroche
speaks without looking up.
LAROCHE
We're not lost.
Laroche takes out a cigarette, lights it.
LAROCHE (cont'd)
I'm just turned around a little.
He looks up at her, sees her staring at him. He pokes around
on the ground for something, comes up with a straight twig.
LAROCHE (cont'd)
A sundial. I'll just set this up, wait a
few minutes, and we'll be able to tell
which way the sun is moving. We want to
be heading southeast.
Laroche sticks the twig into the ground, stares at it.
LAROCHE (cont'd)
This is no big deal. You should eat
something.
Orlean takes a cracker. This relaxes Laroche. He stretches
his legs, knocks over the twig. Without looking at Orlean,
he puts the twig back.
82.
CONTINUED:
(CONTINUED)
LAROCHE (cont'd)
So do you collect anything?
ORLEAN
(non-responsive)
Not really.
LAROCHE
Well, y'know it's not really about
collecting the thing, it's about --
ORLEAN
The sundial isn't working.
Laroche looks down at it.
LAROCHE
It is so working.
Orlean stares at the twig in the ground. She looks at
Laroche. Laroche smiles sheepishly at Orlean. Rage and
panic sweep across her face, her fists clench into balls.
Her eyes become wild, some dark fantasy plays out in her
brain. Laroche seems unaware.
LAROCHE (cont'd)
The thing about computers. The thing I
like is that I'm immersed in it but it's
not a living thing that's going to leave
or die or something. I prefer having the
minimum number of living things to worry
about in my life.
Orlean's anger softens. She looks sadly at Laroche.
ORLEAN
So, John...
LAROCHE
Okay, fuck the sundial. We'll just go
straight and eventually we'll get there.
They rise.
LAROCHE (cont'd)
What I mean is we'll get somewhere. Out
of here. I mean, logically, we have to
get out as long as we walk straight.
Laroche points them in a direction and they walk.
83.
CONTINUED:
INT. HOTEL ROOM - MORNING
Kaufman is sleeping. It looks like it's been a rough night.
The phone rings. He reaches for it.
KAUFMAN
Hello?
JERRY (TELEPHONE VOICE)
Hey, it's Jerry. I woke you?
KAUFMAN
No, it's okay.
JERRY (TELEPHONE VOICE)
How's it going? Has it been helpful to
talk to the writer? What's her name?
KAUFMAN
Yeah. Susan Orlean.
JERRY (TELEPHONE VOICE)
Well, I mean, are you making headway?
Valerie's breathing down my neck.
KAUFMAN
You can't rush inspiration. Y'know?
JERRY (TELEPHONE VOICE)
Okay, fine. Um, the other reason I'm
calling is to tell you Me, Myself, and I
is just amazing.
KAUFMAN
What the hell is Me, Myself, and I?
JERRY (TELEPHONE VOICE)
Your brother's script. It's tight,
inventive. A smart, edgy thriller. The
best spec script I've read this year.
KAUFMAN
Oh. Good.
JERRY (TELEPHONE VOICE)
I'm gonna sell it for a shitload. Two
fucking talented guys in one family.
Y'know, maybe you could bring Donald on
to help you finish the orchid thing.
KAUFMAN
Jerry, don't say that. I mean --
84.
(CONTINUED)
JERRY (TELEPHONE VOICE)
Just a thought, buddy. He's really
goddamn amazing at structure.
KAUFMAN
Jerry, I gotta go. I have an
appointment. I gotta go.
JERRY (TELEPHONE VOICE)
Adios, buddy. Finish! Finish!
EXT. NYC STREETS (MONTAGE) - MORNING
Kaufman wanders. He eyes other sad-looking, balding,
overweight men wandering the streets also.
KAUFMAN (V.O.)
I am fat. I can't write. I am
repulsive. I am old. I have
accomplished nothing. I am just one more
old, fat, bald man on the street.
EXT. SWAMP - DAY
Laroche leads the way. There's a sadness, a sense of defeat
and humiliation that he tries to conceal. Orlean is stony.
LAROCHE
I've done this a million times. Whenever
everything's killing me, I just say to
myself, screw it, and go straight ahead.
Laroche leads Orlean back into the brush.
EXT. NYC STREET - MORNING
Kaufman sees a white school building ahead, glowing in the
sun. He walks toward it.
INT. LOBBY - MORNING
The lobby of an auditorium, crowded with enthusiastic people
signing up for something. Kaufman waits in line. He
watches the handsome guy ahead of him flirt with an
attractive female registrar. The guy moves on and the
attractive registrar looks without interest at Kaufman.
REGISTRAR
May I help you?
Kaufman averts his eyes from her cool gaze; they come to rest
on a pile of McKee's book Story next to her.
85.
CONTINUED:
INT. AUDITORIUM - A BIT LATER
Kaufman sits in the packed room. McKee paces the stage with
a mic clipped to his lapel.
MCKEE
Years from now you'll be standing around
a posh cocktail party congratulating
yourself on how you spent an entire
weekend locked in a room with an asshole,
an opinionated arrogant asshole, for your
art.
The audience laughs, except for Kaufman who looks pained.
KAUFMAN (V.O.)
I am pathetic. I am a loser. I am fat.
MCKEE
So... what is the substance of writing?
Nothing as trivial as words is at the
heart of this great art, my friends.
McKee continues to talk but his voice goes under.
KAUFMAN (V.O.)
I have failed. I am panicked. I am fat.
I have sold out. I am worthless. I...
MCKEE
Literary talent is not enough. First,
last, and always, the imperative is to
tell a story.
Kaufman watches with disdain as people take notes.
MCKEE
Twenty three hundred years ago, Aristotle
said, when storytelling goes bad in a
society, the result is decadence.
(deadpan)
Well, just look around you.
Everyone, except Kaufman, laughs giddily at McKee's joke.
MCKEE (cont'd)
Aristotle also said: A story must have a
beginning, a middle, and an end.
The students nod in appreciation at this profundity.
86.
INT. AUDITORIUM - LATER
McKee scribbles a diagram onto a transparency in an overhead
projector. It's some kind of complicated time-line with actbreaks and corresponding page numbers indicated. The
audience members take copious notes. Kaufman sweats.
KAUFMAN (V.O.)
It is my weakness, my ultimate lack of
conviction that brings me here with all
these desperate idiots lapping up
everything this bag of wind spouts. Easy
answers. Rules to short-cut yourself to
success. And here I am, because my jaunt
into the abyss brought me nothing. Well,
isn't that the risk one takes for
attempting something new. I should leave
here right now. I'll start over --
(starts to rise)
I need to face this project head on and --
MCKEE
... and God help you if you use voiceover in your work, my friends.
Kaufman stops, looks up, startled. McKee seems to be looking
at him.
MCKEE
God fucking help you! It's flaccid,
sloppy writing. Any idiot can write
voice-over narration to explain the
thoughts of a character. You must
present the internal conflicts of your
character in image, in symbol. Film is a
medium of movement and image.
Kaufman looks around at people scribbling in notebooks. "Any
idiot..." writes the guy on one side of him. "Flaccid..."
writes the guy on the other side.
MCKEE (cont'd)
Okay, one hour for lunch.
EXT. NYC STREET - A FEW MINUTES LATER
Students exit onto the street in small groups. Kaufman
wanders by himself. His face is troubled. There is no sound.
87.
INT. AUDITORIUM - LATER
McKee lectures. Kaufman sits and listens. A copy of
Aristotle's Poetics sits on his lap. The book features a
bust of Aristotle on the cover.
MCKEE
You want your writing to be original.
You want to have an original voice like
Neil Simon or Nora Ephron. Well, let me
tell you something, my friends. The key
to originality is not eccentricity.
A guy behind Kaufman gives an appreciative "mmmm."
DISSOLVE TO:
INT. AUDITORIUM - LATER
It's late. The audience is tired, but still attentive. Now
Kaufman takes serious notes. McKee, energetic as ever, wears
his sweater tied around his shoulders. We stay firmly
planted on his face as he talks and talks.
MCKEE
Long speechs are antithetical to the
nature of cinema. The Greeks called it
stykomythia -- the rapid exchange of
ideas. A long speech in a script, say a
page long, requires that the camera hold
on the actor's face for a minute. Look
at the second hand on your watch as it
makes one complete rotation around the
clock face and you'll get an idea of how
intolerable that would be for an
audience. The ontology of the screen is
that it's always now and it's always
action and it's always vivid. Life is
rarely vivid. And that's an important
point. We are not recreating life on the
screen. Writers are not tape recorders.
Have you ever eavesdropped on people
talking in a coffee shop? Then you know
how dull and tedious real conversation
is. Real people are not interesting.
There's not a person in this world -- and
I include myself in this -- who would be
interesting enough to take as is and put
in a movie as a character.
DISSOLVE TO:
88.
INT. AUDITORIUM - LATER STILL
McKee faces the audience, holding a cup of coffee.
MCKEE
Someone asked me recently, Bob, do you
think Michelle Pfeiffer is pretty.
He pauses theatrically, sips his coffee, then:
MCKEE (cont'd)
(deadpan)
Michelle Pfeiffer is proof, my friends,
that there's a fucking God.
The overtired audience breaks into uproarious laughter.
Kaufman, with dark circles under his eyes, giggles a little.
MCKEE (cont'd)
Okay. That's it for tonight. Remember,
there'll be a Q and A tomorrow morning
before class starts.
INT. HOTEL - NIGHT
Kaufman tosses and turns in bed.
DISSOLVE TO:
EXT. DREAM-LIKE FIELD - DAY
The daguerreotype Darwin, the Aristotle sculpture, the Hegel
engraving, and the Orlean book jacket photo are alive and in
the middle of brutal and bloody fist fight.
INT. AUDITORIUM - MORNING
Kaufman, bleary-eyed, sits in the back. McKee paces.
MCKEE
Anyone else?
Kaufman timidly raises his hand.
MCKEE (cont'd)
Yes?
89.
(CONTINUED)
KAUFMAN
You talked about Crisis as the ultimate
decision a character makes, but what if a
writer is attempting to create a story
where nothing much happens, where people
don't change, they don't have any
epiphanies. They struggle and are
frustrated and nothing is resolved. More
a reflection of the real world --
MCKEE
The real world? The real fucking world?
First of all, if you write a screenplay
without conflict or crisis, you'll bore
your audience to tears. Secondly:
Nothing happens in the real world? Are
you out of your fucking mind? People are
murdered every day! There's genocide and
war and corruption! Every fucking day
somewhere in the world somebody
sacrifices his life to save someone else!
Every fucking day someone somewhere makes
a conscious decision to destroy someone
else! People find love! People lose it,
for Christ's sake! A child watches her
mother beaten to death on the steps of a
church! Someone goes hungry! Somebody
else betrays his best friend for a woman!
If you can't find that stuff in life,
then you, my friend, don't know much
about life! And why the fuck are you
taking up my precious two hours with your
movie? I don't have any use for it! I
don't have any bloody use for it!
KAUFMAN
Okay, thanks.
EXT. NYC STREET - NIGHT
The last of the students are filing out. Kaufman waits,
leaning against the building. McKee emerges, carrying his
brown leather bag. A shaky, tired Kaufman approaches him.
KAUFMAN
Mr. McKee?
MCKEE
Yes?
KAUFMAN
I'm the guy you yelled at this morning.
90.
CONTINUED:
(CONTINUED)
MCKEE
(trying to recall)
I need more.
KAUFMAN
I was the one who thought things didn't
happen in life.
MCKEE
Oh, right, okay. Nice to see you.
KAUFMAN
I need to talk.
MCKEE
I make it a rule not to give private
tutorials to my seminar students. It
wouldn't be fair to the others.
KAUFMAN
Mr. McKee, please. My even standing here
is very scary. I don't meet people well.
I'm self-conscious and timid. But what
you said this morning shook me to the
bone. What you said was bigger than my
screenwriting choices. It's about my
choices as a human being. Please.
McKee hesitates for a moment, then reaches out and puts his
arm around Kaufman.
MCKEE
I could use a drink, my friend.
EXT. SWAMP - DAY
Laroche and Orlean slog through the water with purpose,
looking only straight ahead. As they walk the sounds and
colors become subdued. Soon there is silence.
ORLEAN (V.O.)
We turned to the right and saw only more
cypress and palm and sawgrass
They turn left and see metal flashing in the sunlight.
ORLEAN (V.O.) (cont'd)
So we turned to the left, and there, far
down the diagonal of the levee, we could
see the gleam of a fender. We followed
it like a beacon all the way to the road.
Orlean and Laroche walk toward the car.
91.
CONTINUED:
INT. BAR - NIGHT
Kaufman and McKee sit at a table with beers. Kaufman reads
from his copy of The Orchid Thief.
KAUFMAN
... We followed it like a beacon all the
way to the road.
Kaufman closes the book. There's a pause.
MCKEE
Then what happens?
KAUFMAN
That's the book. I wanted to present it
simply, without big character arcs or
sensationalizing the story. I wanted to
show flowers as God's miracles. I
wanted to show that Orlean never saw the
blooming ghost orchid. It's about
disappointment.
MCKEE
I see. That's not a movie. You must go
back and put in the drama.
KAUFMAN
(pause)
I've got pages of false starts and wrong
approaches. I'm way past my deadline. I
can't go back.
MCKEE
Ah, the everpresent deadline. Yes, I was
doing a Kojak once and... it was hell.
McKee sips his beer, eyes Kaufman.
MCKEE (cont'd)
Tell you a secret. The last act makes
the film. You can have an uninvolving,
tedious movie, but wow them at the end,
and you've got a hit. Find an ending.
Use what you've learned this weekend.
Give them that and you'll be fine.
Tears form in Kaufman's eyes.
KAUFMAN
You promise?
McKee smiles. Kaufman hugs him. McKee recognizes his bulk.
92.
(CONTINUED)
MCKEE
You've taken my course before?
KAUFMAN
My brother did. My twin brother Donald.
He's the one who got me to come.
MCKEE
Twin screenwriters. Julius and Philip
Epstein,who wrote Casablanca were twins.
KAUFMAN
You mentioned that in class.
MCKEE
The finest screenplay ever written.
INT. HOTEL ROOM - NIGHT
A drunken Kaufman paces, tries to read Story. McKee's Ten
Commandments are taped to the wall. As is a photo of
Michelle Pfeiffer ripped from a magazine.
KAUFMAN (V.O.)
Climax. A revolution in values from
positive to negative or negative to
positive with or without irony -- a value
swing at maximum charge that's absolute
and irreversible.
Kaufman is lost. He rubs his temples. He dials the phone.
DONALD (PHONE VOICE)
Great writers residence.
KAUFMAN
Donald.
DONALD (PHONE VOICE)
Hey, how's the trip? Gettin' it on with
that lady journalist? You dog you!
KAUFMAN
Yeah. Listen, I'm calling to say
congratulations on your script.
DONALD (PHONE VOICE)
Isn't that cool? Jerry says he can make
me, like, high-sixes against a mill-five.
KAUFMAN
That's great, Donald.
93.
CONTINUED:
(CONTINUED)
DONALD (PHONE VOICE)
I want to thank you for all your help.
KAUFMAN
I wasn't any help.
DONALD (PHONE VOICE)
C'mon, you let me stay in your place and
your integrity inspired me to even try.
KAUFMAN
Well, look, I've been thinking, maybe
you'd be interested in hanging out with
me in New York for a few days.
DONALD (PHONE VOICE)
Oh my God, yes! I'm flattered!
INT. HOTEL ROOM - MORNING
Donald lies on his back on the floor intently reading the
script. Kaufman paces. Donald finishes, is quiet.
KAUFMAN
So, like, what would you do?
DONALD
Script kind of makes fun of me, huh?
KAUFMAN
Sorry. I was trying something. I --
DONALD
Hey, I don't mind. It's funny.
KAUFMAN
Okay. So, what would you do?
DONALD
You and me are so different, Charles.
We're different talents.
KAUFMAN
I know. Just for fun. How would the
great Donald end this script?
DONALD
(giggling)
The great Donald.
(serious)
Well, I mean... do you need the whole
court case?
94.
CONTINUED:
(CONTINUED)
KAUFMAN
Uh, it's what happened to Laroche. It's
kind of important.
DONALD
It's boring. No offense. A courtroom
scene should be dramatic. Stick the
ruling in a line of dialogue, maybe.
KAUFMAN
Um. Okay.
DONALD
Too much about orchids. Get rid of it.
Pare that stuff down to a minimum.
Frankly, I'd focus more on the
relationship between the brothers. I
think that's the gold here. No one cares
about orchids.
KAUFMAN
The book's about orchids.
DONALD
That's a problem. But don't let it ruin
the movie. I mean, for example, use the
orchids in a more dramatic way. Have
some kind of bang-up, crazy action
sequence in the swamp. Use the swamp
better. It's a tremendous fictional
world. A setting of great dramatic
possibility.
KAUFMAN
That's true. But --
DONALD
And put some twists in. Reveal some
surprising thing about Laroche. God,
what am I doing giving suggestions to
you? I mean you're like a seasoned
professional. You're an artist.
KAUFMAN
C'mon, you're the "mill-five" kid.
DONALD
(enjoying this)
Shut up!
(thinks)
I love the Laroche porno web-site stuff.
Is that real? Maybe make a bigger deal
of that. I don't know.
95.
CONTINUED:
(CONTINUED)
KAUFMAN
I think it's real. I haven't actually
seen the site.
DONALD
It's sex, man! Incorporate it.
INT. HOTEL ROOM - NIGHT
The front door opens and Kaufman enters. The lights are off,
but the room is aglow with light from Donald's laptop
computer. Kaufman sees a silhouetted Donald masturbating in
front of the computer. Donald looks up, caught.
DONALD
Oh, hi, I was doing some research. I
found Laroche's site and... I'm
embarrassed.
KAUFMAN
Jesus, Donald.
Kaufman passes Donald, glances at the grainy nude on the
screen. He's stunned. It's Orlean smiling at him.
DONALD
What? She's kinda cute. You don't like
her? I dunno, I think she's okay. It's
not like I'm marrying her.
Kaufman shows Donald Orlean's book jacket photo.
DONALD (cont'd)
Oh, wow. That's kind of a twist, huh?
KAUFMAN
Jesus. Jesus!
DONALD
I think this is maybe a good thing for
the script. Go ask her about this.
KAUFMAN
I'm not gonna ask her about this.
DONALD
You want me to? I don't mind.
KAUFMAN
No, I don't want you to.
DONALD
I could easily pretend I'm you.
96.
CONTINUED: (2)
(CONTINUED)
KAUFMAN
No! No!
INT. NEW YORK OFFICE BUILDING - DAY
Donald, dressed like Kaufman, waits by the elevators. Orlean
emerges. He's about to talk to her, when she pulls out a
cell phone and dials. Donald decides to be a spy and follows
her out of the building.
EXT. NEW YORK OFFICE BUILDING - CONTINUOUS
Orlean talks on the phone. Donald trails close behind her.
ORLEAN
So you'll pick me up? Yeah, tomorrow.
Orlean stops to look in a shoe store window. Donald stops
and looks in the window also. Orlean doesn't notice him.
ORLEAN (cont'd)
Ten-twenty. TWA. Yes, of course I will.
Donald walks off.
INT. HOTEL ROOM - NIGHT
Donald is focused on the computer. Kaufman sits in a chair
in the corner. Both men are in pajamas.
KAUFMAN
What was she wearing?
DONALD
I don't know. Like a dress maybe.
KAUFMAN
Did she look at me? At you?
DONALD
Finally! Da-da-da-daaaaah! S. Orlean,
TWA flight 651. Arriving Miami 10:20
tomorrow morning.
Donald turns and smiles across the room to Kaufman.
KAUFMAN
I don't want to do this, Donald.
DONALD
We'll go together. It'll be good.
97.
CONTINUED:
(CONTINUED)
Kaufman looks squeamish. Donald picks up a hairbrush, holds
it to his mouth. He starts to sing "Happy Together."
Kaufman smiles sheepishly, shrugs Donald off. Donald
persists. Finally Kaufman joins in. They do the whole
number and fall laughing into each other's arms.
EXT. MIAMI INTERNATIONAL AIRPORT - DAY
Orlean waits with a suitcase outside the terminal. The beatup white van pulls up. Orlean gets in, the van speeds off.
Another car pulls away from the curb and follows it.
INT. CAR - A BIT LATER
Donald drives, keeping up with the van, which speeds and
swerves through traffic. Kaufman is sweaty, nervous.
KAUFMAN
It's so weird to actually see that van in
real life.
DONALD
So you want to build the symbolic charge
of the story's imagery from the
particular to the universal. Okay?
KAUFMAN
Okay, but when you're creating an image
system, how do you know --
EXT. SUBURBAN STREET - LATER
The van pulls into the driveway of a neat, middle-class
house. Kaufman and Donald drive by, in time to see Orlean
and Laroche emerge from the van. Orlean seems different now:
more exotic. She's wearing some kind of sexy sarong. Donald
drives up the street, parks, gets out of the car, and watches
as Laroche lugs Orlean's suitcase into the house.
DONALD
I'll get a closer look. You wait here.
KAUFMAN
(momentously)
No, I want to go. I should go. I mean,
it should be me, right? I mean...
DONALD
Go for it, bro. You the man.
Kaufman gets out of the car. Donald gets in, peruses
Kaufman's script. Kaufman walks past the house, trying to
peer in windows. He sees nothing. He slinks around back.
98.
CONTINUED:
(CONTINUED)
In the yard, Kaufman finds a greenhouse. It's filled with
row upon row of ghost orchids.
KAUFMAN
Holy...
There's movement in a window in the house. Kaufman ducks.
LAROCHE (O.S.)
Darlin', I dunno what's come over you!
Kaufman crawls over to the house, lifts his face to the
window. Orlean and Laroche are laughing, kissing, groping,
and undressing each other. Kaufman is heartbroken but
transfixed. Suddenly Laroche locks eyes with Kaufman.
ORLEAN
Don't stop, Johnny.
Laroche jumps up and runs naked to the back door.
ORLEAN (CONT'D)
Johnny! Where are you going?
Kaufman makes a mad dash around the side of the house.
Laroche cuts him off, grabs him, drags him into the house.
INT. HOUSE - CONTINUOUS
Laroche throws Kaufman down into a chair. The chair slides
across the floor, tips over. Orlean seems uninterested. She
kisses Laroche's leg.
LAROCHE
Who the hell are you?
Kaufman notices Laroche has a set of beautiful, white teeth.
KAUFMAN
I just... nobody, I just --
Laroche shakes Orlean off his leg, kicks Kaufman in the gut.
LAROCHE
Who the fuck are you?
KAUFMAN
Um. I'm just. I was at the wrong house.
I'm looking for the Johnson family.
LAROCHE
I got your Johnson family right here.
99.
CONTINUED:
(CONTINUED)
Laroche kicks Kaufman in the head. Orlean kisses Laroche's
back. Kaufman whimpers.
ORLEAN
Honey, come back to bed.
LAROCHE
Who the hell sent you? Rudy?
KAUFMAN
I'm not --
Again Laroche kicks Kaufman in the head. His scalp bleeds.
KAUFMAN (cont'd)
I'm the screenwriter.
LAROCHE
What the fuck does that mean?
KAUFMAN
I'm the guy adapting her book. Her book
about you.
This registers with Laroche.
LAROCHE
Jesus Fucking Christ.
(then, trying to make sense)
Why the fuck were you in my backyard?
KAUFMAN
I was, um, trying... I don't know.
Orlean is unforgiving.
ORLEAN
Who's the bloody fat guy?
LAROCHE
This is the fellow adapting your book for
the movies, darling'.
ORLEAN
(excited)
Really? I wanted to meet --
(realizing)
Oh. What does he know?
KAUFMAN
I don't know anything. I swear.
100.
CONTINUED:
(CONTINUED)
LAROCHE
He knows about the greenhouse.
(to Orlean)
We can't have this appear on the silver
screen.
KAUFMAN
It won't. I don't even under --
ORLEAN
Johnny, I'm so tired now.
Orlean lies down. Laroche paces. Donald peers, unseen, into
the back window.
LAROCHE
He needs to be gotten rid of.
KAUFMAN
What?!
Donald's eyes widen. Laroche paces. Orlean watches Laroche,
fascinated by his every muscle movement.
LAROCHE
Small article in newspaper.
Orlean snaps out of her muscle fixation, becomes fixated on
his voice, his lips.
LAROCHE (cont'd)
Screenwriter doing research for movie
about notorious orchid poacher was found
drowned in the Fakahatchee after
accidentally slipping and hitting his
head on a rock. End of story. Is that
credible from a journalistic standpoint?
ORLEAN
Johnny, come lie on top of me.
LAROCHE
Focus, darling'. Is this credible?
ORLEAN
(concentrates)
Um, oh... this screenwriter was killed
doing research in Jamaica a few years
ago.
(to Kaufman)
Screenwriter, you have a car?
101.
CONTINUED: (2)
(CONTINUED)
KAUFMAN
I, um, no, I --
Laroche gets ready to kick him again.
KAUFMAN (cont'd)
A rental, a rental.
ORLEAN
We drive his car there, leave it on the
side of the swamp. That works.
LAROCHE
Good. I like that.
ORLEAN
(to Kaufman)
Sorry.
KAUFMAN
Please.
Donald disappears from the window.
INT. RENTAL CAR - BEFORE DAWN
Kaufman drives. The headlights shine on Laroche's van ahead.
Orlean, no longer stoned, sits next to him, holding a gun.
She skims Kaufman's screenplay.
KAUFMAN
I thought I had a sense of you from your
book.
(beat)
I had a little crush on you, to tell the
truth. You're different than I thought.
ORLEAN
Huh.
KAUFMAN
Look, I don't care what you two are you
doing. Please don't kill me.
ORLEAN
Hey, here's one of my lines.
(mockingly reading from screen)
"Isn't it ironic? You adapting my book?
My three years in Florida meditating on
my inability to experience passion
resulted in my finding it with you."
102.
CONTINUED: (3)
(CONTINUED)
KAUFMAN
I was trying to do something.
ORLEAN
Well, it's kind of pathetic, dontcha
think?
They drive in silence. Orlean reads more of the screenplay.
ORLEAN
Here's me! Here's me again!
(mocking)
"I wanted to know what it's like to care
about something passionately."
Orlean laughs derisively.
KAUFMAN
You can laugh, but I didn't make that
line up. That's a quote from your book.
ORLEAN
Yeah, I know, Charlie-boy. Chill. I'm
laughing at who I used to be. It's sad.
KAUFMAN
So now you learned about passion.
(jealous)
From Weirdo Laroche. Bully for you.
ORLEAN
You can't learn about passion. You can
be passion. And it wasn't John who made
me passion. It was orchids.
KAUFMAN
I thought you didn't even like orchids.
ORLEAN
I lied about what happened at the end of
the book. On the way out of the swamp...
EXT. SWAMP - DAY
Laroche leads Orlean through the swamp. He spots something
on a tree, circles it, and stands there, awestruck. Orlean
comes around and sees a beautiful ghost orchid hanging from
the tree.
LAROCHE
The jewel of the Fakahatchee.
Orlean looks at it, tries to feel some passion for it, can't.
103.
CONTINUED:
(CONTINUED)
ORLEAN
I still don't get it. I mean, there it
is. I can see it's pretty, but --
LAROCHE
You'll get it.
Laroche pulls a saw from his bag and cuts the branch.
INT. BASEMENT - DAY
There's a makeshift lab. Laroche is extracting some gooey
substance from the nectary.
ORLEAN (V.O.)
Back in John's basement he explained his
real plans for the ghost. He'd
discovered a chemical inside with
psychoactive properties. His plan had
always been to clone the flower and make
a fortune marketing this drug. It was
Laroche's kind of plan, it wasn't a
controlled substance because the
government didn't know it existed.
INT. LAROCHE'S LIVING ROOM - NIGHT
Orlean nervously snorts some green powder off the coffee
table while Laroche watches. She talks to the camera.
ORLEAN
The first time I tried it, the split
second it took effect, I understood
orchids. I loved them with a passion I'd
never felt for anything. For anyone.
The drug takes effect and Orlean turns away from us, becomes
fixated on the ghost orchid sitting on the table before her.
She smells it, caresses it, cries at its beauty.
INT. RENTAL CAR - BEFORE DAWN
ORLEAN
Isn't it curious? An orchid made me
passionate about orchids.
KAUFMAN
You're throwing the truth away for a
chemical confusion of your synapses --
ORLEAN
With this powder I am passionate about
everything.
104.
CONTINUED:
(MORE)
(CONTINUED)
I'm alive in a profound world now. It
sizzles with beauty and horror and sex.
Now writing is -- words are -- a way to
remove yourself from passion. So I'm
done with writing. John and I are making
a fortune with this extract. It's big in
the Miami club scene. We call it
"Passion."
(giggles)
Isn't that cute?
Up ahead, Laroche turns off the road at the Fakahatchee sign.
ORLEAN (cont'd)
Follow him, please.
EXT. JANES SCENIC DRIVE - A LITTLE WHILE LATER
Laroche parks. Kaufman parks behind him. Orlean gestures
with her gun for him to get out. As Kaufman comes around the
car, he sees Donald on the floor of the back seat. Laroche
emerges from his van with a flashlight and a rifle slung over
his shoulder. Orlean prods Kaufman to follow him. Kaufman
shakes and whimpers as they all step down into the thigh-high
water. They slog through silently. Laroche stops.
LAROCHE
This spot looks good.
(thinking aloud)
Now how do we do this? Hit him in the
head with a rock first? Keeping in mind
we can only hit him once and only with as
much force as would be created by him
slipping and falling onto the rock.
Laroche paces. Orlean finds a place to sit on a hammock.
She unwraps a small square of paper and snorts something out
of it. Kaufman shivers. Orlean's drugs kick in.
ORLEAN
Holy Jesus. Holy... Hey, baby, hey...
Orlean trails off. Laroche talks to the spaced out Orlean.
LAROCHE
Should we drown him, then hit him on the
head? Uh-uh. A body bleeds different if
the heart's stopped. These new forensic
guys are very smart. We really have to
know our corpses to stand a chance: rigor
mortis, lividity, putrefecation, ocular
changes.
105.
CONTINUED:
ORLEAN (cont'd)
(MORE)
(CONTINUED)
Maybe you think we hit him on the head
and force water into his lungs after he's
dead? No, darlin'. They'll know he
didn't drown. See, contrary to popular
belief, the lungs do not -- do not --
fill with water in a drowning. What
happens is, choking causes an irritation
of the mucous membranes. This creates a
shitload of mucus in the windpipe.
Efforts to breathe turn the mucus into a
sticky foam which may or may not mix with
vomit. It's the presence of this white
foam that indicates drowning. There's a
lot to be aware of, Susie. Shoeprints,
hair, microscopic fibers. Tire tracks.
They all tell a tale to today's forensic
scientists.
(to Kaufman)
What do you think? You're a writer. How
would you do it? What's a good way to
kill somebody?
KAUFMAN
I don't write this kind of bullshit.
LAROCHE
Don't get all huffy, I was simply --
Suddenly Laroche gets whacked in the back, flies forward into
the water. Orlean looks up, spaced. She's confused by a
second Kaufman standing there with a bag of potting soil.
Donald grabs Kaufman and they run back toward the road.
Laroche pulls himself from the water.
LAROCHE (cont'd)
Fuck!
ORLEAN
(receptively)
Yeah, let's, baby.
She staggers moonily toward Laroche. He pushes her away.
LAROCHE
Not now. We got to kill that guy. And
now I guess that other guy as well.
ORLEAN
(disappointed)
Ohhh.
106.
CONTINUED:
LAROCHE (cont'd)
INT. CAR - CONTINUOUS
Kaufman and Donald speed along the swamp road.
KAUFMAN
For Christ's sake, why didn't you do
something while we were in the car?
DONALD
My back had seized. I couldn't move.
Laroche's van pulls close to them and rams them from behind.
KAUFMAN
Shit!
It rams them again, this time sending them down into the
swamp. The van stops. Donald tries to back the car onto the
road; the wheels just spin. Laroche steps out of the van.
DONALD
We've gotta ditch this thing.
KAUFMAN
(hysterical)
It's a rental! It's a rental!
DONALD
Now!
Kaufman and Donald climb from the car, make their way deep
into the swamp. Laroche follows them in on foot, dragging
Orlean, who is admiring all the plant life.
ORLEAN
That's beautiful! What's that, Johnny?
What's that one called? I just so want
to fuck that flower, don't you?
LAROCHE
Asclepias lanceolata. Red milkweed.
Extremely fuckable. But we don't have
time.
Laroche shoots at the brothers. Kaufman whines.
LAROCHE
(to Orlean)
What's his name?
ORLEAN
Um, y'know... Charlie or something.
107.
(CONTINUED)
LAROCHE
Charlie! Listen, let's talk! This pie
is big enough for four people!
(to Orlean)
Why are there two of him?
Orlean shrugs.
ORLEAN
Identical twigs?
(laughs crazily)
Did I say twigs? I meant twins.
Kaufman and Donald run through a colony of sawgrass. It
slices them like razor blades. Kaufman yells in pain. Blood
oozes through their shirts and pants.
LAROCHE
Cladium jamaicense, guys. Sawgrass. You
want to watch out for that. That's some
evil shit. Cut you up.
KAUFMAN
Fuck you, Laroche!
LAROCHE
Just tryin' to be helpful. Walk with us
and I'll be sure you avoid all the
pitfalls. I know these swamps forwards
and backwards. There's alligators and
poisonous snakes, fellas. Wild hogs.
Kaufman and Donald are stopped by a large body of water.
Nowhere to go. Laroche and Orlean close in. The brothers
run along the periphery of the lake. Donald stops.
DONALD
Wait. Do you hear something?
Kaufman stops, hears a distant galloping and squealing.
KAUFMAN
Donald, that sounds bad.
The brothers run in the opposite direction. The galloping
gets louder. It's wild pigs. Donald spots an airboat on the
shore. They jump onto it, search hysterically in the dark
for bow to start it. The pigs get closer. Laroche and
Orlean get closer. Donald finds a button, presses it, the
engine starts. They pull away from the shore just as the
pigs catch up. One pig leaps on board, squealing. Kaufman
kicks at it as Donald attempts to steer the boat. A kick
connects and the pig flies into the water.
108.
CONTINUED:
(CONTINUED)
Laroche stands at the shoreline and fires his rifle. It
nicks the boat. Donald looks back and the boat heads for a
cypress stand.
KAUFMAN
Watch out, watch out, watch out!
Donald gets the boat back on course. Laroche and Orlean have
been left far behind. Donald slows the boat.
DONALD
I think we're okay.
Suddenly Laroche's van comes tearing around a corner and
speeds along the road at the water's edge. Orlean shoots at
the boat from the van window.
DONALD (cont'd)
Hold on!
Donald speeds up. The van keeps up, the shooting continues.
Bullets whiz. Kaufman puts his head in his hands. A bullet
hits the airboat's gas tank. It explodes in a ball of flame,
illuminating the whole swamp. Kaufman and Donald are thrown,
along with flaming pieces of debris. Donald treads water,
looks all around for Kaufman.
DONALD (cont'd)
Charles?! Charles?! Where are you?
Underwater. A dazed Kaufman tries to get his bearings. The
murky lake bottom is lit a dim orange by the fire on the
surface. An alligator appears. Kaufman panics, surfaces.
On the surface, Donald spots Kaufman pop out of the water,
then get jerked back down. Donald dives.
Underwater. The alligator violently shakes Kaufman by the
leg. Donald surfaces, comes back down with a broken
propeller blade. He hacks the alligator's head off, grabs
Kaufman, and brings him to the surface.
Donald swims to shore with Kaufman in tow. Another shot is
fired. It skims the water near Kaufman.
KAUFMAN
Fuck! Fuck, Donald, we're dead.
DONALD
We're okay. How's your leg?
KAUFMAN
I don't know. How's your back.
109.
CONTINUED: (2)
(CONTINUED)
DONALD
It's fine. My back is fine.
Laroche and Orlean circle the lake in the van, shooting.
Mike Owen, in pajamas, leaves his house, jumps in his truck
and agitatedly drives toward the noise and flames.
Donald makes it to shore. He climbs out and is helping
Kaufman, when he gets hit by a bullet and falls.
KAUFMAN
Donald!
Kaufman sloshes to shore. His right leg is bloody and
mangled. He lifts his brother's head onto his lap.
KAUFMAN
You're gonna be okay.
DONALD
No. But don't let them get you, too.
(weak smile)
You got a fucking awesome third act.
KAUFMAN
(crying)
Donald, this is an awful, bizarre thing
to say and an awful time to say it, but
I'm sorry I didn't get to know you
better. I'm so sorry. I'm so sorry.
DONALD
It's really... You've been really nice.
KAUFMAN
See, it's just I thought I knew you
already. I thought you were me. And I
hated me.
Donald touches Kaufman's face. Kaufman looks at his brother.
Donald's face glows radiantly in the fire light.
DONALD
Well, don't do that anymore. Okay?
KAUFMAN
Okay.
Donald dies. Kaufman screams heavenward. The van appears
out of the bush, barreling for them. Kaufman rolls his
brother out of the way, and limps off into a slough. The van
follows, smashes into a tree, and comes to a halt.
110.
CONTINUED: (3)
(CONTINUED)
Smoke pours from the grill and is lit by the headlights. Out
of the smoke, Laroche and Orlean appear with guns. They
follow Kaufman into the swamp.
Mike Owen pulls next to the disabled van. He gets out,
surveys the mess, sees bloody Donald on the ground.
MIKE OWEN
Jesus, that writer guy.
Owen grabs his C.B., tries to radio for help. It's broken.
He lifts Donald into the back of the truck and speeds off.
Kaufman limps through the dark water. Laroche and Orlean
follow the sound of his sloshing.
ORLEAN
Water sounds so sparkly. Like lemon
plastic jewels plopping onto a silver
trampoline! Dontcha think?
LAROCHE
Darlin', please.
ORLEAN
Can we fuck now, baby? Fuck like lemons?
Owen tears along the dirt road. Up ahead, Kaufman limps out
of the swamp, into the truck's headlights. Owen is confused.
He checks the back to see if Donald's body is still there and
skids off the road into the swamp. Kaufman hurriedly limps
over to the disabled truck. Owen climbs out.
KAUFMAN
You gotta help me. You gotta help me.
MIKE OWEN
What the hell is going on here?
KAUFMAN
They're after me. They've got guns.
They killed my brother.
MIKE OWEN
Who's got guns? What are you --
Before Owen finishes, his truck is flipped over. Donald's
body flies into the water. There, staring Kaufman and Owen
down, is a giant man-like beast. It's repulsive, covered in
algae-matted fur.
MIKE OWEN (cont'd)
Holy shit.
111.
CONTINUED: (4)
(CONTINUED)
The two men turn and run.
MIKE OWEN (cont'd)
It's real! I can't believe it, I never --
The creature grabs Owen and snaps his neck like a toothpick.
Kaufman screams as he runs, watches over his shoulder. He
runs right into the arms of Orlean.
ORLEAN
Hey, it's the screenwriter!
KAUFMAN
There's a thing back there! You don't
want to be here.
Kaufman, Orlean, and Laroche look back. Nothing there.
LAROCHE
You're right, I don't want to be here.
I'm tired, let's get this over with.
Laroche puts the gun to Kaufman's head. Kaufman tenses.
Orlean studies Laroche's gun. Her nose is practically
touching the barrel.
ORLEAN
I love your gun, baby. Can we trade?
LAROCHE
Stand back, sweetness.
Laroche reaches for Orlean's arm to pull her away. Suddenly
the creature grabs Laroche, pulls him into the swamp.
LAROCHE (cont'd)
Susie! Susie!
Orlean looks around.
ORLEAN
Where'd Johnny go?
LAROCHE (O.S.)
Susie!
Orlean, agitated and disoriented, fires repeatedly into the
darkness. Something slumps forward in the water. Orlean
steps cautiously over, keeping her gun on Kaufman. The
creature is dead, so is Laroche.
112.
CONTINUED: (5)
(CONTINUED)
ORLEAN
(crying softly)
Oh, Johnny.
She sits next to Laroche and pets his head. Kaufman watches
her. The sun is coming up.
KAUFMAN
I'd just stare at your picture, and you
looked so sweet. I read your words and I
thought you were smart and maybe lost and
lonely like me. And the way you wrote
about Laroche. You said he was handsome
even though he had no front teeth --
ORLEAN
Oh, Johnny. Johnny's teeth. Oh...
KAUFMAN
I figured you could look at me and see
something, even with all my flaws you
could look at me and find something, you
could maybe someday write a description
of me that would be nicer than the one I
write day in and day out in my head.
(hopefully)
Would it be?
Kaufman takes Orlean's chin in his hand and directs her gaze
to him. She stares at him for a long while, then:
ORLEAN
You're really so wonderful.
KAUFMAN
Really?
ORLEAN
So wonderful. I can see inside your
soul. It glows with orange sadness.
It's raining inside you. I want to run
through your dripply dripples. It's so
beautiful. I love you. I do.
Kaufman lets go of her face and sits on a rock.
KAUFMAN
It's the drugs.
Orlean stands and walks toward Kaufman.
113.
CONTINUED: (6)
(CONTINUED)
ORLEAN
No, it's me. It's the real me. Look at
you. I just want to hold you and -- Oh,
crap, it's wearing off. Crap!
She paces, unfolds her little square of paper.
ORLEAN (cont'd)
I'm out. I'm fucking cleaned out.
Kaufman watches her for a moment.
KAUFMAN
Okay, bye.
ORLEAN
I can't let you go, fatty. I can't let
you make this public.
Kaufman keeps walking.
ORLEAN (cont'd)
You hear me? You pathetic, fat, bald...
You don't even know how to write! You're
not even... You're not leaving here!
(screaming, crying)
I need a fix! Everything's so ugly!
Orlean screams in anguish. Kaufman keeps walking. Orlean
shakily aims the gun at his back. She shoots. Kaufman
falls, gets up, keeps walking. She aims again through her
tears. Suddenly she's pounced on by a bloody, soaking wet
figure. Kaufman turns.
KAUFMAN
Donald!
Kaufman limps back. Donald and Orlean roll on the ground.
DONALD
My brother is not fat. He's not bald.
My brother is a great writer! He was
trying to do something important!
The gun fires. Orlean slumps over Donald. Kaufman arrives.
Both Donald and Orlean are dead. Kaufman falls to his knees.
EXT. SWAMP - MORNING
The sun is high. Fires smoulder. A tow-truck extricates one
of the crashed vehicles. State police cars, ambulances,
ranger trucks abound. Kaufman is wrapped in a blanket.
114.
CONTINUED: (7)
(CONTINUED)
He is with a cop and pointing to the bodies spread on a black
plastic tarp.
KAUFMAN
That's Mike Owen. John Laroche. Susan
Orlean. I don't know what that is. I
think it might be a Swamp Ape. And
that's Donald, my twin brother. He saved
my life.
Kaufman cries a little. The cop waits sympathetically, then:
POLICE OFFICER
You two really look alike.
KAUFMAN
(proudly)
Yeah. Yes, we do.
INT. CALIFORNIA PIZZA KITCHEN - DAY
Kaufman sits in a booth, working longhand on a legal pad.
He's a little scraped-up, a little tougher. A copy of Story
by McKee is among his reference material. Alice, the
waitress, walks by and glances at the table.
ALICE
Oh, I love McKee!
(recognizes Kaufman, gets
reserved)
Oh, hi. Haven't seen you in a while.
KAUFMAN
Hi. Yeah, I've been away.
ALICE
So you studying screenwriting?
KAUFMAN
I'm actually finishing one up.
ALICE
Good for you! Me too. God, it's so hard
to get in, huh? Everyone and their
brother is writing a screenplay.
KAUFMAN
Yeah. Actually I'm writing this one for
Sony Pictures.
ALICE
Really? Wow. Really? That's so cool.
(beat)
115.
CONTINUED:
(MORE)
(CONTINUED)
Wow! So what's it about, if you don't
mind my asking?
KAUFMAN
That's tough. Let's see... about being
yourself, maybe. It's about learning
that if you can't love yourself, you
can't really love anyone.
ALICE
That's true. God, that's so true. It's
such an important message, y'know?
KAUFMAN
See, my twin brother was murdered
recently --
ALICE
Oh God! I'm sorry. That's so horrible.
KAUFMAN
Thanks. Like part of me ripped away.
Forever. It was a wake up call.
ALICE
I'm so sorry. You poor man.
KAUFMAN
Anyway, it helped put things in
perspective. Life is a miracle. All
life, from the flower to the human being.
You. Me. And I want to show people
that. For my brother. For everyone.
There's a pause. Alice just stares at him, in awe.
ALICE
Listen, do you mind if I sit for a sec?
KAUFMAN
But you're working.
ALICE
(shrugs)
It's a stupid job, y'know. I'm Alice.
KAUFMAN
Charlie.
ALICE
I like that name. Charlie. I've always
really liked that name. Charlie.
Alice smiles, sits. The two of them begin to talk.
116.
CONTINUED:
ALICE (cont'd)
EXT. SPACE - NIGHT
SUBTITLE: HOLLYWOOD, CALIFORNIA, FIVE BILLION AND FORTY YEARS
LATER
An enormous chunk of rock, dimly lit by faraway stars, floats
by. Silence.
FADE TO BLACK.
WHITE TEXT ON BLACK SCREEN:
 "Let me have men about me that are fat;
 Sleek-headed men and such that sleep o'
 nights."
 - William Shakespeare
 In Loving Memory of Donald Kaufman
 THE END
117.

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
