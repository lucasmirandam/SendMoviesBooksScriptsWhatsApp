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

ABSOLUTE POWER
Written by
WILLIAM GOLDMAN
Based on the book by
DAVID BALDACCI
May 1996 Draft
FOR EDUCATIONAL
PURPOSES ONLY
FADE IN:
1 INT. WASHINGTON MUSEUM - DAY 1
The saddest eyes you ever saw.
We are looking at an El Greco drawing. It is a study for
one of his paintings.
PULL BACK TO REVEAL --
A bunch of art students are doing sketches of the eyes,
the elongated fingers, the slender hands El Greco drew so
brilliantly.
Most of the students are around 20. A couple of suburban
housewives are there too.
And one older man.
This is LUTHER WHITNEY. Mid 60s, very fit, neatly
dressed. At quick glance, he seems as if he might be a
successful company executive.
As we watch him draw we can tell he is capable of great
concentration. And patient. With eyes that miss
nothing: He has pilot’s eyes.
We’ll find out more about him as time goes on, but this
is all you really have to know: Luther Whitney is the
hero of this piece. As we watch him draw --
Luther’s sketchbook. He is finishing his work on the
eyes, and he’s caught the sadness: It’s good stuff.
Luther. It’s not good enough for him. He looks at his
work a moment, shakes his head.
GIRL STUDENT
Don’t give up.
LUTHER
I never do.
GIRL STUDENT
May I?
She’s indicated his sketchbook. He nods. She starts
thumbing through.
The sketchbook as the pages turn.
Detail work. Eyes and hands. The eyes are good. The
hands are better. Very skillful.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 2.
1 CONTINUED: 1
The GIRL hands it back. Impressed.
GIRL STUDENT
You work with your hands, don’t
you?
CLOSEUP - LUTHER *
An enigmatic smile. Now, from that --
2 EXT. RED’S BAR - DAY 2
A nice working class part of town. Nothing fancy here
but there’s a pleasant feel. The streets are clean, the
houses neat and well tended.
Luther, carrying his sketchbook, walks along. It’s
afternoon now. Up ahead is a local bar: RED’S.
3 INT. RED’S BAR - DAY 3
Luther walks in. Nothing fancy here. Strictly working
class. And relatively empty. An overweight bald man
Luther’s age works behind the bar. This is RED. They
are good enough friends not to ask each other questions.
LUTHER
(as they nod to
each other)
Redhead.
RED
Luther.
(as Luther hands
him a videotape)
Your life would be a whole lot
simpler if you could learn to
operate a V.C.R.
LUTHER
My only failing.
As he turns --
4 EXT. NEIGHBORHOOD - LUTHER’S HOUSE - DAY 4
A street of small row houses. Clean, well tended.
Luther walks toward one. Later in the afternoon. He
carries half a dozen small shopping bags, from the
market, the hardware store, the drug store, the cleaners.
3.
5 EXT. LUTHER’S HOUSE - DAY 5
A terra cotta planter to the right of the front door.
Luther shifts his packages, tilts the planter slightly,
bends down, pulls out a key, inserts it in the front
door.
6 INT. LUTHER’S HOUSE - KITCHEN - DAY 6
as he enters. Neat, tidy. A Cuisinart, a cheese slicer,
lots of other nice equipment. As he begins putting food
away --
7 INT. LUTHER’S HOUSE - DINING AREA - NIGHT 7
Evening now. Table set for one. A single candle.
Beside the candle is Luther’s sketch pad. Now Luther
himself moves INTO VIEW, carrying a tray. He puts it
down.
A gorgeous omelet is on a fine china plate, parsley
sprinkled neatly on top. An elegant green salad is on
another plate, covered with thinly sliced parmesan
cheese. An expensive water pitcher, a lovely glass.
Clearly, a great deal of thought has gone into dinner.
Luther lights the single candle. We are now aware of a
photograph nearby. The picture is old. A pretty little
girl stands in the center, smiling. Her mother stands
alongside, smiling too. A man is with them, looking at
them happily. It’s Luther. When he was young.
Luther studies the photo a moment. Then he turns, looks
out the window.
8 POV SHOT - SLIVER OF MOON 8
is visible. Lovely. Peaceful.
9 LUTHER 9
Now Luther opens the sketch pad, quickly flips past the
hands and eyes and faces --
-- we are looking at something totally different: a
mansion.
HOLD ON Luther’s drawing of the mansion.
KEEP HOLDING.
PULL BACK to reveal --
4.
10 EXT. SULLIVAN MANSION - NIGHT 10
In the moonlight -- it looks exactly like his drawing.
But no drawing could convey the size of the place -- we
are looking at ten thousand square feet. Wealth and
power.
We’re in rolling hill country. The mansion is dark.
Totally deserted. Silence.
Now a sound - TIRES ON GRAVEL. A car comes rolling INTO
VIEW. The motor of the car has been turned off. The
lights of the car have been turned off. The car slides
to a stop. Again, silence...
HOLD ON mansion, a couple of hundred yards away. There
is a small field between the car and the estate. Now --
11 EXT. SULLIVAN MANSION/INT. LUTHER’S CAR - NIGHT 11
A man holds binoculars, studying the place. He wears
dark clothes, tennis shoes. He puts down the binoculars,
begins to smear his face with black camouflage cream --
-- it’s Luther, and he’s been a professional thief his
entire life. He’s a three-time loser, but his last
sentence was so long ago and his skills are now so vast,
so refined, that it is unlikely he will ever get caught
again.
12 EXT. SULLIVAN MANSION - GROUNDS - NIGHT 12
The grounds as Luther glides through it. He wears a
backpack.
The night is cool.
He stops. All that separates him from the mansion now is
a stretch of gorgeous lawn. Except for Luther, it isn’t
gorgeous -- it’s no-man’s land.
One final check of his surroundings -- then he sets off,
in graceful motion, long strides eating up the ground.
He makes no sound at all.
13 EXT. SULLIVAN MANSION - FRONT DOOR - NIGHT 13
Thick wood with reinforced steel.
Luther stops by the door, takes off his backpack, opens
it. He puts on plastic gloves that have a special layer
of padding at the fingertips and palms. Now he takes a
key, inserts it in the front door, turns it, and the
instant he pushes the door open -- ZOOM TO:
5.
14 INT. SULLIVAN MANSION - FOYER - NIGHT 14
The infrared SECURITY DETECTOR -- it immediately starts
to BEEP and you can see the seconds being counted down:
forty, thirty-nine, thirty --
CUT TO:
15 LUTHER 15
-- in his hands now is an automatic screwdriver, no more
than six inches long --
-- he sets to work on the security panel that is inside
in the foyer next to the front door.
The screwdriver undoes the first screw, the second --
CUT TO:
16 SECURITY DETECTOR 16
Thirty-one, thirty, twenty --
CUT TO:
17 SCREWDRIVER 17
Now the third and fourth screws are in hands and he lifts
the security panel away.
The BEEPING sound is constant --
-- and getting louder.
A tiny device, no bigger than a pocket calculator. It
has two wires protruding from it. It is, we are about to
find out, a tiny computer. Luther holds it like a baby.
CUT TO:
18 SECURITY DETECTOR 18
Eighteen, seventeen --
CUT TO:
19 LUTHER 19
probing with the wires into the heart of the security
panel.
(CONTINUED)
6.
19 CONTINUED: 19
The BEEPING is LOUDER still.
The security panel. Luther is attempting delicate work
and it’s dark so it isn’t easy but he continues to probe
with the wires and --
CUT TO:
20 SECURITY DETECTOR 20
Eleven, ten --
CUT TO:
21 LUTHER 21
and he’s got it attached!
22 COMPUTER 22
Now the face of the tiny computer is alive with numbers
-- they fly by much too fast for us to make them out
clearly.
CUT TO:
23 SECURITY DETECTOR 23
Four, three, two --
CUT TO:
24 FACE OF TINY COMPUTER 24
as five numbers lock -- 7 -- 13 -- 19 -- 8 -- 11 --
The BEEPING sound dies.
CUT TO:
25 LUTHER 25
A glance across the foyer -- the lights of the security
detector go from red to a warm looking green.
Safe.
(CONTINUED)
7.
25 CONTINUED: 25
He allows himself to exhale. Then he’s busy again,
unhooking the computer. His fingers, as always, work
quickly, precisely.
25A INT. SULLIVAN MANSION - FOYER - NIGHT 25A
The foyer as Luther, once again carrying his backpack,
moves across it. Behind him, the front door is again
shut, the security panel back on, screws all in place.
It’s as if he hadn’t been there at all...
26 INT. SULLIVAN MANSION - STAIRCASE - NIGHT 26
Luther walks quickly up -- and here we get a sense of the
vast size of the place -- it feels bigger inside than it
looked in the moonlight.
A Van Gogh at the head of the stairs. Luther moves past
it, then stops, goes back, studies the painting. It’s a
late one, when the madness had him and things were
sliding away. Very sad.
Luther looks at it admiringly for another moment --
-- then surprisingly he raises his hand, and for just an
instant traces the lines of the painting in the air, as
if trying to figure out how the magic was done, as if
getting ready for his next museum session --
-- then almost grudgingly, he moves on, up toward the
third floor.
27 INT. SULLIVAN MANSION - THIRD-FLOOR LANDING - NIGHT 27
Here’s a Hopper. One of the great ones, filled with an
overpowering sense of being alone --
-- Luther stares at it almost in awe, whispers "wow,"
moves on.
28 INT. SULLIVAN MANSION - HALLWAY - NIGHT 28
Luther, walking down the third-floor corridor.
The corridor walls. No paintings here -- instead we see
a series of framed photographs. The first is of a baby
girl, the next one of the same child at three.
We watch the child grow up in these photos. At ten she
is already pretty. At fifteen a stunner.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 8.
28 CONTINUED: 28
Not a classic beauty by any means, she is turning into,
if you will a latter-day Ann-Margret. The kind of girl
you ached for in high school. The perfect cheerleader.
These are pictures, we will come to know, of Christy
Sullivan. A high school graduation shot at eighteen, a
shot in front of a Burger King at twenty.
CLOSEUP - WEDDING PHOTOGRAPH *
Christy, looking just fabulous, is 24 and smiling
happily. We can only see her face and the wedding veil
here. Now --
PULL BACK to reveal --
A glorious and expensive white wedding dress. Christy
holds a bouquet of flowers. Breathtaking.
KEEP PULLING BACK.
And now we can see the groom. Walter Sullivan. Walter
is smiling too, one arm proudly around his lovely bride.
Walter, it might be noted, is eighty years old.
Luther, staring at the photo, shakes his head. Now he
moves on.
29 INT. SULLIVAN MANSION - MASTER BEDROOM - NIGHT 29
Luther opens the DOOR. It SQUEAKS. He goes inside,
closes the door firmly. Next, he puts his backpack down,
takes out a low-power non-glare work light, sets it up.
Now he looks around. A huge room, a gigantic canopied
bed.
A nightstand alongside, which contains a small silver
clock, three Danielle Steel novels piled neatly one atop
the other, several more photos of the happy couple --
-- and an antique silver-plated letter opener with a
thick leather handle.
Luther. He studies himself in front of a very large
full-length mirror across from the canopied bed.
Now we realize something -- he isn’t studying himself,
he’s studying the mirror itself.
He turns, goes to the sitting area where there are chairs
and a sofa and a large TV and VCR.
(CONTINUED)
9.
29 CONTINUED: 29
Three remotes on a side table. Luther carefully picks up
the middle one, crosses the room with it, points it at
the large mirror, clicks once --
-- and the mirror swings silently open.
A room is revealed. All we can see of it so far is this:
There is an armchair in the middle facing where the
mirror had been.
Luther turns back toward the sitting area, the remote
held in his hand.
The side table. Luther puts the remote down -- very
carefully. In the exact position it had been. Now he
takes a moment, blows on his hands, rubs them together.
Then -- Luther takes a collapsible duffel bag out of his
backpack, moves with the work light into the revealed
room --
30 INT. SULLIVAN MASTER BEDROOM - VAULT - NIGHT 30
It’s a vault! And it’s FULL! There’s cash, naturally,
piles of the stuff. Plus all kinds of other valuables
we’ll get around to.
Luther’s a little stunned -- it’s more than he hoped for.
He glances at the armchair -- there is a remote on it
that is identical to the one he replaced at the side
table.
Now he opens his duffel all the way and sets to work.
First the cash goes in -- all neatly bundled. Large
denominations. Lots of bundles. Next are a series of
slender boxes --
The first box as Luther opens it.
Jewelry.
Into the duffel it goes.
Luther, emptying more jewelry boxes into the duffel. And
still more. As he continues to do this --
31 INT. SULLIVAN MASTER BEDROOM - NIGHT 31
All is quiet. High on a wall, the security light beams a
friendly green.
Now, from somewhere, a distant sound. LAUGHTER? Was it
laughter? Doesn’t matter, it’s gone.
)B( ABSOLUTE POWER - Rev. 5/16/96 10.
32 INT. SULLIVAN VAULT - NIGHT 32
Luther has moved deeper into it -- he’s finished with the
jewelry. Now he’s examining piles of bonds.
Into the duffel they go.
He takes a breath, glances around. Perfect.
Coins. Antique ones. They disappear into the duffel.
Stamp books. Gone into the swelling duffel.
Luther as he hears now the DISTANT LAUGHTER. Not so
perfect.
33 INT. MASTER BEDROOM - NIGHT 33 *
He moves quickly out of the vault, takes a step toward
the door -- the GIGGLING is getting LOUDER, closer. Two
people. A man and a woman.
Luther stops, mutters "shit!" -- glances around -- No
place to hide. Luther, grabbing his backpack, moves into
the vault, turns off his work light, and shuts the door
with the remote. The DOOR CLICKS --
34 INT. SULLIVAN VAULT - NIGHT 34
-- Luther is alone in the darkness.
A burst of LAUGHTER now. Growing nearer still.
Luther moves into the back of the vault, crouches down,
doing his best to hide behind the armchair. Trapped,
Luther waits in silence, trying not to breathe...
Now he can hear a SQUEAK -- the BEDROOM DOOR has opened.
HOLD.
35 INT. SULLIVAN MASTER BEDROOM - NIGHT 35
Dark -- except for a slant of light from the hall outside
the open bedroom door.
Two people are briefly visible as they enter, a MAN and a
WOMAN. The CLINK of GLASS. Stifled LAUGHTER.
The Woman closes the bedroom door.
Darkness again.
And now the LAUGHING sound increases. GIGGLING, really.
11.
36 INT. SULLIVAN VAULT - NIGHT 36
Luther in the pitch-black vault. The GIGGLING is MUTED
but it is there. He is starting to perspire.
37 INT. SULLIVAN MASTER BEDROOM - NIGHT 37
The woman flicks on the lights and as she does --
38 INT. SULLIVAN VAULT - NIGHT 38
Luther as the burst of light hits him like a fist -- and
it’s over.
Luther blinks, confused, looks around --
-- because it isn’t over, he hasn’t been caught.
The door to the vault is suddenly gone. Luther is
staring straight into the goddamn bedroom.
Because the door is a two way mirror. Now it’s as if he
was watching the bedroom on a giant TV screen.
Just a few feet away, just outside the door.
Where things are clearly starting to heat up.
Luther moves to the armchair, sits. There is nothing to
do now but wait. He settles in.
39 INT. SULLIVAN MASTER BEDROOM - NIGHT 39
They are staring at each other.
We have seen the woman already -- she’s CHRISTY SULLIVAN.
But the pictures in the corridor did not do her justice.
This is a fabulous-looking twenty-five-year-old woman.
Long, golden hair, a round face that sets off her deep
blue eyes, a tanned, curving body. A bare-shouldered
black dress. An expensive necklace.
One more thing: she is staggering drunk.
The man is ALAN RICHMOND, wealthy, successful, handsome
and fit. Mid-forties. He wears an elegantly-cut suit.
Two additional points: (1) Richmond is clearly not the
husband in the wedding photo. (2) He is drunker than she
is.
(CONTINUED)
12.
39 CONTINUED: 39
Richmond carries a vodka bottle and two tumblers. He
fills them, gives one to her.
They touch glasses. Down the hatch. Tight laughter.
He looks at her.
She looks at him. There’s a lot of sexual tension in the
air.
But now he begins looking around, checking things out.
She spots this.
CHRISTY
(drunk)
It’s okay -- I told him I was
sick -- anyway, he’s gone --
relax...
He nods then, more at ease. And he blows her a kiss.
She catches it -- and now she starts to parade for him.
Her body moving very slowly.
He pours himself another shot, chugs it, watches. Now --
40 INT. SULLIVAN VAULT - NIGHT 40
Luther suddenly terrified and we find out why.
41 INT. SULLIVAN MASTER BEDROOM - NIGHT 41
Christy, fumbling with her necklace, looks across the
room --
What she’s looking at: the side table with the remote
that opens the vault.
42 INT. SULLIVAN VAULT - NIGHT 42
Luther, frozen, as Christy starts toward the table.
43 INT. SULLIVAN MASTER BEDROOM - NIGHT 43
The table and the remote waiting there.
44 INT. SULLIVAN VAULT - NIGHT 44
Luther, mouth dry...
)B( ABSOLUTE POWER - Rev. 5/16/96 13.
45 INT. SULLIVAN MASTER BEDROOM - NIGHT 45
Richmond, reaching out for her, then as she passes him;
he takes her by the hand --
-- and now they are dancing, their bodies pressed
together. They move slowly. She hums. He tries to get
fancy, spin her with one arm --
-- no good. They’re too drunk for it, starts to lose
balance, separate.
They giggle. Smile at each other. Now Christy manages
to unhook her necklace, and as she starts to drop it in *
the drawer of the nightstand -- *
46 INT. SULLIVAN VAULT - NIGHT 46
Luther. A genuine sigh of relief --
-- which suddenly dies --
47 INT. SULLIVAN MASTER BEDROOM - NIGHT 47
Christy, as she spins toward the table again, still with
the necklace in her hand.
48 INT. SULLIVAN VAULT - NIGHT 48
Luther, and there’s nothing he can do now but watch.
49 INT. SULLIVAN MASTER BEDROOM - NIGHT 49
Richmond, watching too, emptying the vodka bottle into
his tumbler, chugging it down and now...
The table as Christy reaches out, grabs a remote, turns.
50 INT. SULLIVAN VAULT - NIGHT 50
Luther dead in the water because --
51 CHRISTY’S 51
pointing the goddam thing at him --
-- and as she CLICKS it --
)B( ABSOLUTE POWER - Rev. 5/16/96 14.
52 INT. SULLIVAN VAULT - NIGHT 52
Luther, and for a moment, he’s like a goddam deer caught
in the headlights --
-- but now here comes another sigh of relief and we find
out why.
53 INT. SULLIVAN MASTER BEDROOM - NIGHT 53
Suddenly there’s ROMANTIC MUSIC PLAYING -- she’s turned
the STEREO ON. Christy starts humming, replaces the
clicker, drops the necklace in the drawer. *
Then they are into each other’s arms. Their bodies
press. Their bodies sway. He moves a hand to her
breasts --
-- Christy breaks loose, shakes a finger at him, as if to
say, "naughty, naughty" --
-- then with one hand, she pulls a zipper down. The
dress falls off her body. Her breasts spring free. She
is wearing only her panties now and high heels. And a
smile.
She is stunning looking and she knows it and men have
always gone nuts over her and she knows that too. And
Richmond can’t resist her either, goes to her, bends her
back, caresses her neck, begins sucking her nipples.
Christy moans.
54 INT. SULLIVAN VAULT - NIGHT 54
Luther, in the chair, embarrassed, averting his eyes.
But the MOANING from the other room GROWS LOUDER, more
insistent.
55 INT. SULLIVAN MASTER BEDROOM - NIGHT 55
Christy, pulling away for a moment, starting to work at
Richmond’s tie, shakes him out of his suit jacket,
reaches for his belt, loosens it. She is working at his
shirt buttons now and their breathing is audible and in a
moment he is down to his boxer shorts and then her
panties are off, her shoes kicked away and they are near
the vault mirror now. As they approach it, they stare at
themselves.
56 INT. SULLIVAN VAULT - NIGHT 56
Luther, moving farther back in his chair as their faces
are just a couple of feet away --
)B( ABSOLUTE POWER - Rev. 5/16/96 15.
57 INT. SULLIVAN MASTER BEDROOM - CLOSEUP - CHRISTY - NIGHT 57
as Richmond’s hands move across her wondrous body and she
is hot and drifting into drunken fantasy and her eyes
close and --
CLOSE ON RICHMOND *
as his eyes are open --
-- the look on his drunken face is scary.
58 INT. SULLIVAN VAULT - NIGHT 58
Luther, transfixed by that look, transfixed and worried.
59 INT. SULLIVAN MASTER BEDROOM - CHRISTY AND RICHMOND 59
IN CLOSEUP - NIGHT
looking at each other now, and she is smiling happily and
looking at him and he is smiling happily and looking at
her, and whatever was on his face just before has gone.
60 INT. SULLIVAN VAULT - NIGHT 60
Luther, watching as they turn for the gigantic canopied
bed.
61 INT. SULLIVAN MASTER BEDROOM - NIGHT 61
The bed as they stop alongside it and kiss -- it’s their
first. And her arms go around his neck and she holds him
like that, her eyes shut tight --
62 INT. SULLIVAN VAULT - NIGHT 62
Luther -- watching because Richmond’s eyes are not shut,
they are wide open and they stare at the mirror and the
awful look from before is back, only worse, and then
without warning, he grips her buttocks roughly --
-- and slaps her hard on the ass, over and over and
Christy is shocked, surprised, pulls away. Richmond
smiles at her sweetly.
Christy. Shaking her head.
Richmond. He continues to smile, makes a courtly
gesture, kissing her fingertips in apology.
(CONTINUED)
16.
62 CONTINUED: 62
Christy. She smiles in acknowledgement and they move
onto the bed. She pushes him down and straddles him.
Richmond, from her POINT OF VIEW -- a wonderfullyhandsome man.
Christy, from his POINT OF VIEW. A glorious, vibrant
young woman. She smiles, touches her lips to a finger,
reaches out, touches the finger to his mouth.
It’s a sweet moment.
They smile.
Then he reaches up, and without a word, grabs her breasts
and squeezes and twists them brutally and Christy is
shocked and she tries to make him stop but he won’t, and
she cries out in pain but he still won’t stop so she
slaps him in the face. He slaps her back, viciously,
right in the mouth and now there is blood mixing with her
lipstick and she rolls off the bed onto the floor.
Christy sits there stunned.
CHRISTY
(slurred)
You fucking bastard.
And on that --
Richmond, standing now, reaches down to help her up.
Christy hesitates, finally takes his hand and as soon as
she is on her feet --
Christy, kicking him with all she has, in the stomach.
63 INT. SULLIVAN VAULT - NIGHT 63
Luther, silently applauding.
64 INT. SULLIVAN MASTER BEDROOM - NIGHT 64
Richmond, the air momentarily out of him, falling
drunkenly to the floor, stunned for just a moment and
clearly in pain, but he is a big man and he is strong and
he grabs her ankle, yanks, and then both are laboring on
the floor and Christy kicks him again and again --
-- but he will not release her ankle. Each kick only
inflames his drunken rage.
(CONTINUED)
17.
64 CONTINUED: 64
RICHMOND
(very slurred --)
You little whore --
And now they both try and stand.
Neither one does it gracefully, neither one does it
quickly, but Richmond gets there first and as soon as he
is on his feet he begins to strangle her.
Christy, gasping, terrified, she claws at his arms, her
fingers scratching deeply --
-- but he will not let go.
She twists and jerks her body --
-- no good -- he continues to tighten his grip on her
throat --
-- and spreads his legs for better balance.
The bed table, as Christy, beyond desperation reaches
around for something, anything -- her fingers finally
close on the letter opener and in one wild stroke, she
slashes his right arm.
Now he lets go. And stares, stunned, at his bleeding
arm.
Then he crunches her flush in the mouth, a brutal blow,
and blood pours from her nose and mouth and if she
weren’t so scared, maybe it would have stopped her, but
it doesn’t -- because somehow she manages to maintain
balance --
-- and knees him all she has, in the nuts.
It’s over -- Richmond falls to the floor, helpless. He
lies on his back, holding his crotch.
But it isn’t over. Christy, blood pouring down her face,
stands over him, the letter opener still tight in her
hand.
And in her eyes you can see it, the homicidal rage --
-- and she drops to her knees beside him --
-- and Richmond can only lie there, watching her --
-- and she gets a better grip on the letter opener --
-- and Richmond still only lies there, watching her --
(CONTINUED)
18.
64 CONTINUED: (2) 64
-- and she raises the letter opener slowly very high
above her head, the point aimed at his heart --
-- and Richmond screams one time --
-- and as Christy starts to kill him, two well-dressed
men in business suits burst through the bedroom doorway,
GUNS in their hands, and they BLOW HER BRAINS OUT before
the opener reaches Richmond’s heart...
65 INT. SULLIVAN VAULT - NIGHT 65
Luther, in SLOW MOTION and this is what he does --
-- he reels back in the chair, eyes wide, jaw slack,
mouth open --
-- this is a man who has seen everything but nothing has
prepared him for this --
-- his arms flop over the arms of the chair, his body
loses strength, he tries to look away, can’t --
-- and this is what he sees --
66 INT. SULLIVAN MASTER BEDROOM - NIGHT 66
Christy, fighting for another instant of life --
-- no chance --
-- the two bullets have shattered her brain, her eyes
roll up into her head, the letter opener drops to the
rug, she collapses like a rag doll --
-- and blood is everywhere.
67 INT. SULLIVAN VAULT - NIGHT 67
Luther. Back in regular motion now. Pale, barely able
to breathe.
68 INT. SULLIVAN MASTER BEDROOM - NIGHT 68
The two well-dressed men in business suits.
BILL BURTON is the more formidable. Mid-40s, he looks
like a retired tight end. No body fat. Intimidating.
But right now he is shaking and he can’t stop it. He
puts his gun away, goes to Richmond.
(CONTINUED)
19.
68 CONTINUED: 68
TIM COLLIN is closing in on 30. Handsome. In wonderful
shape. Burton is more physical, Collin more lethal. He
puts his gun away, goes to Christy.
Richmond is trying to sit. He is as drunk as before but
now he is also close to shock. He reaches over, manages
to pick up the bloody letter opener.
RICHMOND
Kill her?
Collin, by the body, nods.
BURTON
No choice in the matter.
His words are efficient but clearly, he has been rocked.
Richmond, staring stupidly at the letter opener. He
drops it back to the floor, tries to stand, can’t.
Burton helps him back to the bed. Which is when he
passes out cold.
Burton and Collin look at each other now.
BURTON
Jesus, Tim, what did we do?
COLLIN
(echoing Burton)
No choice in the matter.
69 INT. SULLIVAN VAULT - NIGHT 69
Luther, staring at it all. The shock is still there but
so is something new: anger. And on that --
70 INT. SULLIVAN MASTER BEDROOM - NIGHT 70
GLORIA RUSSELL moving through the bedroom door.
Russell’s 40, well-dressed, attractive and very smart. Now she sees what’s happened, stops dead.
Now she moves forward, looks at Burton and Collin. It’s
very clear from the outset: these three are not
friendly.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 20.
70 CONTINUED: 70
RUSSELL
(to Burton and Collin)
Do you realize what a shitstorm
we’re in?
(beat)
Go on -- tell me.
COLLIN
Nothing to tell. He screamed.
RUSSELL
And you heard no sounds of
violence ’til then?
BURTON
(beat)
Nothing we haven’t heard before.
Richmond, on the bed, out. Russell studies his face as
Burton moves toward the telephone.
BURTON
Maybe I should call the police
now.
CLOSEUP - RUSSELL *
RUSSELL
(soft)
Bill? Why don’t you think about
that?
(beat -- starting to
move toward him)
Take a second and just think about
that.
(closing in on Burton,
furious)
Think... real... fucking... hard.
BURTON *
He is strong enough to snap her neck with one hand.
BURTON
(backing away)
Probably not a good idea.
RUSSELL
(taking charge)
Okay -- here’s what happened
tonight -- poor Christy came home
alone and interrupted a burglary.
That sound logical?
21.
71 INT. SULLIVAN VAULT - NIGHT 71
Luther in the closet. He nods.
72 INT. SULLIVAN MASTER BEDROOM - NIGHT 72
Burton and Collin nod, too.
RUSSELL
We’re going to have to sanitize
this place.
(shaking Richmond)
Alan, did you have sex with her?
Richmond, eyes barely open.
RICHMOND
... Don’... ’member...
RUSSELL
Bill, you’re going to have to
examine her.
BURTON
I’m no gynecologist.
RUSSELL
(she takes nothing
from nobody)
I just made you one.
End of discussion.
73 INT. SULLIVAN MASTER BEDROOM - NIGHT (LATER) 73
A clock on the side table beside the three clickers.
There is the sound of a VACUUM -- it’s later now.
The place is incredibly changed. Christy is lying as
before -- except now she is fully dressed. The bed has
been made with clean sheets. There is a large black
garbage bag that Collin shoves the sheets in, dumps in
Christy’s jewelry. Burton is VACUUMING the rug.
Richmond is visible, still in terrible shape, finishing
putting his clothes on in the open master bedroom.
Everyone wears gloves.
Everything that is incriminating is gone --
(CONTINUED)
22.
73 CONTINUED: 73
-- except the letter opener, which has been put in a
clear plastic bag. Collin reaches for it, starts to dump
it in along with the sheets and the jewelry.
RUSSELL
I’ll take that.
COLLIN
(surprised)
It’s got their prints on it.
RUSSELL
(she holds out her
hand)
Thanks for sharing.
Collin glances at Burton, shrugs, hands it over. Russell
puts it in her handbag, puts the handbag on the bed table
when suddenly --
Richmond, careening into the room, wide-eyed, crying
out --
RICHMOND
Gloria -- I killed her --
Russell, turning, shocked as Richmond bears down --
-- she holds out her arms for him, but he is staggering
and he collides hard with her, spins against the wall,
uses the bed table to try to steady himself.
74 INT. SULLIVAN VAULT - NIGHT 74
Luther, stunned, staring.
75 INT. SULLIVAN MASTER BEDROOM - NIGHT 75
What he’s staring at: the letter opener has spilled from
her open purse and fallen behind the bed, out of sight.
Russell, calm, going to Richmond, starting to lead him
from the room --
RUSSELL
It’s all going to be fine, Alan.
RICHMOND
... But she’s dead...
(CONTINUED)
23.
75 CONTINUED: 75
RUSSELL
... I’ll take care of everything
just like I always do.
(to Burton and Collin)
Gentlemen?
She gestures to leave.
Burton and Collin finish up -- Collin grabs the large
plastic bag. Burton glances around one final time and
backs toward the door, vacuuming carefully. Then --
Collin stops dead. He stares across at the bed table.
76 INT. SULLIVAN VAULT - NIGHT 76
Luther, holding his breath.
77 INT. SULLIVAN MASTER BEDROOM - BURTON AND COLLIN - NIGHT 77
COLLIN
Shit.
BURTON
What?
In reply, Collin dashes back toward the bed table, grabs
Russell’s purse, snaps it shut, tucks it under one arm
and leaves.
Burton flicks the light out, closes the door.
The room is lit by moonlight now. Christy looks
beautiful and still. HOLD for a moment.
78 EXT. MANSION - FRONT DOOR - NIGHT 78
It’s open and Russell leads a staggering Richmond
outside. Two dark Towncars are parked in the driveway.
Burton is behind them, turning off all lights. Collin is
last, with Russell’s purse, the garbage bag. As he
follows them outside, he closes the front door firmly --
it makes a loud, solid sound.
79 INT. SULLIVAN VAULT - LUTHER - NIGHT 79
The sound is barely audible. He has been looking at his
watch --
(CONTINUED)
24.
79 CONTINUED: 79
The watch face is illuminated in the darkness. The
second hand is fifteen seconds away from the top.
Luther takes a deep breath, waits in silence.
The WATCH face: the sound is loud, like "60 Minutes."
80 EXT. SULLIVAN MANSION - DRIVEWAY - NIGHT 80
Burton and Russell moving with Richmond toward one of the
cars. Burton takes the man in his arms, leaving Russell
free to open the back door.
Collin dumps the plastic bag into the trunk, shuts it,
moves quickly so that he can get a decent view of the
road.
The road in front of the house. Empty. Collin hurries
to the Towncar where Burton is struggling to get Richmond
comfortably stretched out on the back seat.
81 INT. SULLIVAN VAULT - NIGHT 81
The second hand on Luther’s watch hits the top and he
moves into action.
-- He points the clicker at the door --
-- the door starts to swing open --
-- Luther, backpack in hand, strides quickly into the
bedroom, turns, points the clicker again and as the door
starts to swing shut -- Luther carefully tosses the
clicker back inside.
82 INT. SULLIVAN VAULT - ARMCHAIR - NIGHT 82
as the clicker lands -- dead-solid perfect --
83 INT. SULLIVAN MASTER BEDROOM - NIGHT 83
Luther, in the bedroom, moving to the nightstand,
carrying his backpack --
-- he slows as he circles the body of Christy Sullivan,
looks sadly down at her, continues on as we MOVE TO...
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 25.
83 CONTINUED: 83
The bed table. First, Luther opens the drawer and *
pockets the necklace. Tense, he kneels, probes behind *
the table, reaches farther and then -- the letter opener!
In the plastic bag. Luther grabs it.
He rises, opener in hand, and goes to the far window that
has a view of the front of the house. He looks out,
grimaces.
84 EXT. SULLIVAN MANSION - DRIVEWAY - NIGHT 84
The cars are still there. Burton is visible helping
Russell in. Collin hands over her purse, closes the
door. He and Burton move to the front doors.
85 INT. SULLIVAN MASTER BEDROOM - NIGHT 85
Luther, going to the rear window. He opens the window
slowly and silently. He ties one end of the rope around
the leg of a heavy, wooden chest of drawers --
-- now he carefully plays the knotted rope out the
window.
86 EXT. SULLIVAN DRIVEWAY - TOWNCAR - NIGHT 86
Collin heads to one of the Towncars. In the other Burton
and Russell are getting settled in the front. Richmond
lies in a stupor, stretched along the rear seat.
Russell --
-- a moment of relief. She breathes deep. And as
Russell starts to open her purse --
87 EXT. SULLIVAN MANSION - KNOTTED ROPE - NIGHT 87
as it snakes down the brick mansion -- it reaches the
ground.
88 INT. SULLIVAN MASTER BEDROOM - NIGHT 88
Luther, putting his backpack on securely.
The window -- Luther glances out and down.
89 HIS POV - GROUND OUTSIDE SULLIVAN MANSION - NIGHT 89
Forty feet below. And it’s dark.
)B( ABSOLUTE POWER - Rev. 5/16/96 26.
90 INT. SULLIVAN MASTER BEDROOM - NIGHT 90
Luther -- he doesn’t much like this -- but taking hold of
the rope, he puts one leg out the window -- only the damn
backpack makes it complicated and he’s caught for a
moment, clumsily trapped with one leg in, one leg out and
the backpack wedged against the corner of the window --
-- and at that moment, there is a SCREAM.
91 EXT. SULLIVAN DRIVEWAY/INT. TOWNCAR - NIGHT 91 *
Gloria Russell, as every nightmare she has ever had comes
true -- the fucking letter opener isn’t in her purse and
as she screams again --
92 EXT. SULLIVAN MASTER BEDROOM - WINDOW - NIGHT 92
Luther, cursing to himself, forcing his way out the
window and it isn’t easy, but he makes it and then the
rope slips in his hands and for one precarious moment, he
is in serious trouble and...
93 EXT. SULLIVAN MANSION - DRIVEWAY - NIGHT 93
The Towncar doors bursting open as Burton and Collin come
barrelling out.
94 EXT. SULLIVAN MANSION - NIGHT 94
Luther, getting his grip on the nylon rope again,
starting to go down -- but it’s difficult going for him.
95 EXT. SULLIVAN MANSION - FOYER - NIGHT 95
Burton and Collin tearing into the house, Collin in the
lead.
96 EXT. SULLIVAN MANSION - NIGHT 96
Luther in the night, thirty feet up, and he can hear
COMMOTION inside the house and he tries to go faster --
-- but it’s not easy; the man is, after all, in his 60s
and he’s dangerously high and his visibility is rotten,
so he’s doing the best he can, but he isn’t exactly
flying.
27.
97 EXT. SULLIVAN MANSION - DRIVEWAY - NIGHT 97
Russell, standing by the Towncar, staring in at the house
and from the look on her face, you know she thinks her
life might be over.
98 INT. SULLIVAN MANSION - STAIRCASE - NIGHT 98
Burton and Collin, racing up the second floor staircase
toward the top.
99 EXT. SULLIVAN MANSION - NIGHT 99
Luther, halfway down.
100 INT. SULLIVAN MANSION - HALLWAY - NIGHT 100
Burton and Collin, tearing along the third floor
corridor.
101 EXT. SULLIVAN MANSION - NIGHT 101
Luther, ten feet off the ground now.
102 INT. SULLIVAN MANSION - NIGHT 102
The bedroom door, flying open.
103 EXT. SULLIVAN MANSION - NIGHT 103
Luther, six feet to go, three, and he lets go, drops the
rest of the way, hits the ground running.
104 INT. SULLIVAN MASTER BEDROOM - NIGHT 104
Burton, racing toward the window, Collin goes to the
night table.
105 EXT. SULLIVAN MANSION - NIGHT 105
Luther, at the end of the house, turning a corner.
106 INT. SULLIVAN MASTER BEDROOM - NIGHT 106
Burton, staring out the window and Luther is gone.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 28.
106 CONTINUED: 106
BURTON
Shit!
Collin, looking around the table and the letter opener is
gone.
COLLIN
Shit!
And without another word, they bolt out the door.
107 EXT. SULLIVAN MANSION - GROUNDS - NIGHT 107
Luther, crashing through the field. He is in wonderful
shape --
-- for a man his age.
And he gives it all he has but is it going to be enough?
108 EXT. SULLIVAN DRIVEWAY - NIGHT 108
The Towncar as Collin yanks something out of the glove
compartment, and then he is racing off into the night
after Burton who is a few steps ahead.
109 EXT. SULLIVAN DRIVEWAY/INT. TOWNCAR - NIGHT 109 *
Russell staring after them -- in the back seat, Richmond
is in a half-slumber.
110 EXT. SULLIVAN MANSION - GROUNDS - NIGHT 110
Luther, bursting out of the underbrush --
-- up ahead is the most dangerous place for him --
-- one hundred yards of open field. He runs on.
111 EXT. SULLIVAN GROUNDS - BURTON AND COLLIN - NIGHT 111
as Collin catches up to the other man, tosses what he
took from the glove compartment.
Thermal goggles.
They put them on, on the fly and...
29.
112 THERMAL POV 112
The world ahead of them as they see it: their FIELD OF
VISION now resembles a rough computer game. THERMAL
IMAGES register in red, everything else is dark green.
113 EXT. SULLIVAN GROUNDS - OPEN AREA - LUTHER - NIGHT 113
Beginning to tire now -- and he’s only halfway through
the open field and...
Burton and Collin, behind him, can’t see him yet, but
they are moving faster --
-- and Burton could probably destroy anyone in a fight --
-- but Collin can fly.
And he begins to leave Burton behind.
Luther, and twenty yards ahead of him are some woods that
spur him on, he pumps his arms, his body straining and
his breath coming in gasps and...
Collin, graceful and young and in fabulous shape and just
ahead is the open field and as he starts into it --
114 THERMAL POV 114
What Collin sees: a THERMAL figure; a man running out of
the open and then disappearing into the woods.
115 EXT. SULLIVAN GROUNDS - OPEN AREA - NIGHT 115
The sight of the figure is enough to kick Collin into
overdrive and he has never run this fast as he crosses
the open area.
116 EXT. SULLIVAN GROUNDS - WOODS - NIGHT 116
Luther, running through the woods -- he can hear THEM
now, and he knows they’re closing on him and he glances
back --
-- and smashes into a fucking tree!... hard... and it
rocks him, drops him to his knees --
117 EXT. SULLIVAN GROUNDS - OPEN AREA - NIGHT 117
Collin and he could be jet propelled.
30.
118 EXT. SULLIVAN GROUNDS - WOODS - NIGHT 118
Luther, forcing himself back to his feet and running
again, giving it everything he has left and he’s dodging
through the trees now.
119 EXT. SULLIVAN GROUNDS - NEAR WOODS - NIGHT 119
Burton, behind Collin, but he draws his gun anyway --
Collin, in the woods, and his gun’s drawn too --
Luther, out of the woods and now his car is visible --
Collin, in the woods but they’re coming to an end.
120 THERMAL POV 120
The figure up ahead is approaching a car.
121 EXT. SULLIVAN GROUNDS - LUTHER’S CAR - NIGHT 121
Luther, throwing the car door open, ripping off his
backpack, tossing it inside, jumping in behind the wheel.
122 EXT. SULLIVAN GROUNDS - WOODS - NIGHT 122
Burton. Pulling up, gasping terribly. He sinks to one
knee.
Collin, out of the woods! -- Still amazingly without the
least sign of tiring --
-- and now there is a sound: a CAR MOTOR STARTING.
123 EXT. SULLIVAN GROUNDS - LUTHER’S CAR - NIGHT 123
Luther in his car, wheels spinning.
124 EXT. SULLIVAN GROUNDS - WOODS - NIGHT 124
Collin has his pistol ready but it’s impossible to hit
anything when you’re running like this.
125 EXT. SULLIVAN GROUNDS/INT. LUTHER’S CAR - NIGHT 125
Luther, in the car, GUNNING AWAY.
31.
126 EXT. SULLIVAN GROUNDS - WOODS - NIGHT 126
Collin. Slowing.
127 EXT. SULLIVAN GROUNDS - LUTHER’S CAR - NIGHT 127
The car. A swirl of dust.
The dust clears.
The car rounds a corner, is gone.
128 EXT. SULLIVAN GROUNDS - NIGHT 128
Collin. He stands there, rips off his thermal goggles --
-- and surprisingly, he smiles.
Burton, getting to his feet, his breath still not steady.
He takes his goggles off too as Collin approaches.
COLLIN
(still the smile)
I got his license number.
Now on that --
129 INT. SULLIVAN MASTER BEDROOM - NIGHT 129
Russell -- back in the bedroom, with Burton and Collin
who are moving around constantly, checking the place out.
Things are just amazingly tense.
RUSSELL
(close to losing it)
Gee, guys, maybe it was the
bogeyman -- don’t forget to check
under the bed --
(exploding)
-- You may have buried us! --
COLLIN
-- relax, I got his license
number, remember? --
RUSSELL
(whirling on him)
-- you think he’s going to just
sit around waiting for us? --
Asshole --
COLLIN
-- take it easy, Miss Russell --
(CONTINUED)
32.
129 CONTINUED: 129
BURTON
(trying for calm)
-- everybody shut up, all right?
He is staring at his reflection in the big mirror. He
crosses to it, goes to his knees, studies the rug.
The rug -- indentations in the expensive carpet.
BURTON
Oh boy...
Burton and Collin with a crowbar, working at the mirror.
The MIRROR; there is a TEAR and a POP and it swings open.
130 INT. SULLIVAN VAULT - NIGHT 130
All three going inside, looking around. The chair, the
looted shelves. The truth thuds home.
Russell turns, looks out at the bedroom through the door.
RUSSELL
(dead)
A two-way mirror.
Silently, they move out into the bedroom.
131 INT. SULLIVAN MASTER BEDROOM - NIGHT 131
COLLIN
-- I better get cracking on that
license number --
RUSSELL
(no anger now)
-- it’s all we’ve got -- and he’s
got the letter opener -- blood,
fingerprints -- Jesus, think what
he can do --
BURTON
(a powerful man who
speaks softly)
-- the man is a thief -- a thief
who witnessed a murder -- (MORE)
(CONTINUED)
33.
131 CONTINUED: 131
BURTON (CONT’D)
(gesturing around)
-- it looks like he stole a whole
bunch of money -- I’ll tell you
what he’s going to do.
(beat)
He’s going to run like hell.
And on that --
132 INT. WASHINGTON MUSEUM - DAY 132
The saddest eyes you ever saw.
It’s the next morning and Luther is back at the same old
stand, looking at El Greco. The other art students are
there too. So are the suburban housewives.
Everything is as it was -- calm and peaceful --
-- now a museum guard moves into the doorway, scanning
the room.
Luther -- a quick glance over, then back to his
sketchbook -- and from that glance it’s clear all is not
calm and peaceful.
The guard checks the room again.
Edgy, Luther still works away.
The guard leaves.
Luther gets set to do the same.
133 INT. RED’S BAR - DAY 133
Red, alone in his empty bar, sipping coffee. It’s before
the place has opened for the day.
Luther comes in the back. Red slides the videocassette
over, Luther pockets it.
RED
Jordan beat us at the buzzer.
LUTHER
Bad night.
And as he turns, goes --
34.
134 EXT. JOGGING PARK - PARKING AREA - DAY 134
A YOUNG WOMAN parking her car -- a high rocky area above
the Potomac. Below, a jogging path is visible, full of
runners.
The Young Woman gets out, locks her car, starts down a
narrow walk toward the joggers.
She’s in her mid-thirties. A good face. And there’s
something familiar about her.
135 EXT. JOGGING PARK - DAY 135
Luther, standing by the edge of the jogging path,
studying the runners. Now he registers something: and
smiles.
The Woman in her mid-thirties as she comes jogging along.
She runs well.
Luther. An imperceptible straightening of his clothes.
The jogger. We realize who she is: the little girl in
the photo on Luther’s dining room table. All grown up.
Now her face registers something: his presence. Her
eyes go down to the path, she increases her speed.
Luther. Waving, calling out.
LUTHER
Kate.
(as she runs on)
Kate.
She slows, hesitates, stops.
Kate, hands on hips, breathing deeply, moving to the edge
of the path as he approaches. The river flows behind
them. Runners pass by.
Beat.
LUTHER
Probably too late for me to take
it up.
She says nothing -- he gestures toward the path.
LUTHER
The jogging.
KATE (YOUNG WOMAN)
Ahh.
(CONTINUED)
35.
135 CONTINUED: 135
Beat.
LUTHER
Dumb way to start this, I guess.
Beat.
LUTHER
Wanted to talk to you.
KATE
About?
LUTHER
Believe it or not, the weather.
(as she waits)
Nights are starting to get cold.
KATE
That happens this time of year.
Luther speaks quickly now, his voice low.
LUTHER
I was thinking of maybe
relocating. Someplace with a
kinder climate.
(nothing shows on
her face)
I just wanted to check it out with
you first...
(still nothing)
... you’re the only family I’ve
got.
And on that --
Kate speaks quickly now, her voice low.
KATE
Luther, you don’t have me.
The last words in this world he wanted to hear, but you
can’t tell from his face.
LUTHER
Kate --
KATE
-- you know what it’s like being
the only kid in show and tell who
got to talk about visiting day?
(CONTINUED)
36.
135 CONTINUED: (2) 135
LUTHER
This move -- I’m talking
permanent, you understand.
KATE
We don’t see each other anyway --
we haven’t seen each other since
Mom died and that’s a year.
(a step toward him)
Look, you chose your life. You
had that right. You were never
around for me. Fine. But I have
no plans to be around for you.
And now she stops, turns away toward the path --
-- Luther can say nothing, watches her --
-- then she spins back --
KATE
(louder now)
-- wait a minute -- you’re lying
about something, aren’t you? --
LUTHER
-- no --
KATE
-- are you active again? -- is
that why you’re here now?
LUTHER
-- no --
Kate moves in close now --
KATE
-- I don’t believe you --
(big)
-- Christ, Father, what have you
done?
And on those words --
136 INT. SULLIVAN MASTER BEDROOM - DAY 136
Christy Sullivan’s body.
We’re back in the master bedroom but now there is a lot
of police activity -- people work around the corpse. The
place is covered with black fingerprint powder.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 37.
136 CONTINUED: 136
SETH FRANK moves into the room -- Bogart at 40. Chief
Homicide Detective of Middleton County, Virginia but he
had a decade of top work in New York City. Bright,
funny, and tough enough for anything you want to throw at
him.
He kneels beside the body next to an older man. This is
the MEDICAL EXAMINER, fat and bored. Seth studies
Christy; sadly shakes his head.
SETH
Christy Sullivan?
MEDICAL EXAMINER
(nods)
Wife of Walter -- most likely came
home and stumbled onto a
burglary --
WOMAN (O.S.)
-- some burglary.
LAURA SIMON. Laura is early 30s, and the best lab
technician Seth has ever known, and he knew some good
ones in New York.
LAURA SIMON
I wish my carpets were this clean.
And I can’t find a single decent *
fingerprint.
SETH
You serious, Laura?
LAURA SIMON
(bewildered)
It’s like Mary Poppins was here.
SETH
Could someone have let him in?
LAURA SIMON
Sorry, Seth, but the entire
Sullivan household went to
Barbados two days ago.
SETH
Thank you for your support.
(CONTINUED)
38.
136 CONTINUED: (2) 136
LAURA SIMON
Wait -- it gets worse --
(moving to the door)
-- the shots came from here. If
she interrupted a burglary, she
should have been here --
(moving to the bed now)
-- she was killed where she is --
all the blood patterns indicate
that. But she was looking toward
the bed -- what in hell was she
looking at?
137 INT. SULLIVAN VAULT - DAY 137
Seth says nothing as he and Laura go in the vault. Seth
stares at the chair.
LAURA SIMON
Looks like someone sat here -- but
I couldn’t find any prints.
(lowering her voice --
indicating the one-way
mirror)
You think Sullivan holed up in the
chair and watched his wife
perform?
SETH
I hope not --
(shakes his head)
-- he’s such a great man.
He moves back into the bedroom.
138 INT. SULLIVAN MASTER BEDROOM - DAY 138
Another cop is working on the wall by the bed table where
a hole the size and shape of a bullet is visible.
SETH
(as he moves past)
Careful digging that out.
The cop nods.
MEDICAL EXAMINER
Looks like he tried to strangle
her.
(CONTINUED)
39.
138 CONTINUED: 138
SETH
So he tried to strangle her, then
went to the door and shot her from
behind?
MEDICAL EXAMINER
He also inspected her vagina.
Seth. Stunned.
SETH
He did what? Why?
LAURA SIMON
Maybe he couldn’t remember if he
fucked her.
SETH
(has to laugh)
A strong burglar with a weak mind
-- obviously another open and shut
case...
As he stares around, baffled.
139 EXT. LUTHER’S SAFE HOUSE APT. BUILDING - DAY 139
A high rise. It’s in a different part of Washington than
we’ve seen thus far. Afternoon now.
An old salesman type is trudging into the building. He’s
slumped, carries heavy salesman type suitcases. He wears
a battered hat. As he goes inside --
140 INT. BUILDING - FOYER/MAIL AREA - DAY 140
The salesman is opening a mail slot with the name
"Hawthorne" on the outside. A good bit of mail, most of
it unsolicited. Hawthorne pockets it, unlocks the foyer,
heads toward the elevator.
141 INT. BUILDING - HALLWAY - DAY 141
The elevator and Hawthorne slowly getting out, heading
toward a corner apartment, taking out some keys --
-- there are three locks on the door... he takes out
keys --
40.
142 INT. LUTHER’S SAFE HOUSE APARTMENT - DAY 142
Hawthorne walks in, puts the suitcases down, flings his
hat toward a long sofa --
-- it’s Luther and this, we will come to learn, is what
he keeps as his safe house. It’s neatly furnished,
modern and clean.
Now he moves quickly --
-- first he opens a suitcase -- it contains his full
backpack from the robbery --
-- then he opens a locked closet door, revealing a very
large and sophisticated safe. As he begins to work the
dial --
143 INT. LUTHER’S SAFE HOUSE APARTMENT - DAY (LATER) 143
-- the TV ON in the living room as he slides the video
cassette Red gave him into his machine. Everything has
been put away.
The TV as Michael Jordan is introduced to the crowd --
Luther sits, nurses a beer, watches intently...
144 INT. MORGUE - DAY 144
An old man silently weeping.
This is WALTER SULLIVAN, one of the giants of the era. A
self-made billionaire. Remarkably, the man has few
enemies.
At 80, his body may be betraying him -- he was once
handsome -- but his mind is that of a young man.
We’ve seen him before -- in the wedding picture on the
wall of his mansion. With his young bride Christy.
He is with her again now, at the morgue. A sheet covers
her body. The toe tag is visible. Walter, shattered and
desolate, stares at her once joyous face.
PULL BACK to reveal --
145 INT. MORGUE - OBSERVATION ROOM - DAY 145
Seth Frank, studying Walter THROUGH a two way mirror.
Seth is moved at depth of the old man’s grief. Anyone
would be. Walter slowly rises --
41.
146 INT. MORGUE - DAY 146
SANDY LORD waiting in an anteroom as Walter enters...
Sandy Lord is Walter Sullivan’s lawyer. He is 60,
abrasive, powerful.
Sandy moves to Walter, gestures toward the front door.
Seth appears through another door, intercepts them.
SETH
Mr. Sullivan? -- I’m Seth Frank,
senior homicide detective for
Middleton County --
SANDY LORD
(protectively)
-- my client is in no mood for
conversation, sir.
WALTER SULLIVAN
It’s all right, Sandy --
(looks at Seth)
-- you’re in charge of the case?
SETH
(nods)
I have to ask some questions, but
it can be tomorrow.
WALTER SULLIVAN
You want what, positive
identification? Yes, that was my
wife. Anything else?
SETH
(notebook in hand)
You’d been in Barbados for two
days?
WALTER SULLIVAN
(nods)
I took the entire staff down --
always do this time of year.
SETH
But Mrs. Sullivan didn’t come.
WALTER SULLIVAN
She was, had it all planned, but
you know women, they change their
minds.
(MORE)
(CONTINUED)
42.
146 CONTINUED: 146
WALTER SULLIVAN (CONT’D)
(to Seth, softly)
I’d been married to my Rebecca for
forty-seven years and when she
died, I decided I never wanted
that pain again. One thing I knew
about Christy: she was going to
outlive me.
SANDY LORD
I think that’s enough for today.
Takes Walter’s arm.
SETH
(beat)
I have to ask about the vault.
And on that -- Walter. Holds to Sandy for a moment, then
lets go.
WALTER SULLIVAN
You mean the contents of the vault
of course --
(turns to Sandy)
-- Sandy, you go on, I’m all
right.
(as Sandy looks at
him a moment)
Really. Go to the reception --
obviously I can’t make it, but I’m
sure everyone will understand.
Sandy nods, exits. Seth and Walter are alone.
Beat. Then --
WALTER SULLIVAN
I know it’s not the contents --
(as Seth embarrassed,
stands there)
You mean the chair. You have to
ask about the chair.
SETH
(soft)
Yessir, I do.
WALTER SULLIVAN
But why? Are they connected?
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 43.
146 CONTINUED: (2) 146
SETH
I think someone sat in it -- and I
think that someone may have been
involved in the murder.
(beat)
You were my father’s hero, Mr.
Sullivan, I promise you this won’t
make my highlight reel.
CLOSEUP - WALTER *
Humiliated.
WALTER SULLIVAN
I’d hoped I could satisfy her...
but you know... she had needs and
she didn’t want to go behind my
back... she suggested the chair...
she hoped I might get to like
sitting there...
(beat)
... I didn’t...
(takes a breath)
I’ve tried for eighty years to
live a decent life. I’ve given a
billion dollars to charity. If
this comes to trial, none of that
will be remembered -- I’ll just go
out as the joke of the world.
Seth. He closes his notebook.
SETH
I understand, sir; I’ll do what I
can.
WALTER SULLIVAN
(beat)
Will you listen to me whine?
Please forgive me, Mr. Frank.
Just do your job.
(beat)
And I’ll do mine.
Walter slowly moves to the door. Seth watches him.
Sadly...
147 EXT. WHITE HOUSE - MAGIC HOUR 147
A gorgeous SHOT of a very famous place. The sun is
setting. It all looks magical.
44.
148 INT. WHITE HOUSE - NORTH PORTICO - NIGHT 148
A room filled with well-dressed men and women. Formal
attire. The rich and the famous. But the only one we
recognize is Sandy Lord, deep in conversation with
several other men. Now, someone says his name.
MAN (O.S.)
Sandy.
(as Sandy turns)
Is there anything I can do?
SANDY LORD
Mr. President.
And on those words -- The 44th President of the United
States. He has all the natural charm in the world. He
is remarkably bright, with a phenomenal memory. He is,
also, at this moment, one of the most popular men in
American history, three years into a brilliant first
term, a shoo-in for re-election when that ritual comes.
His name, by the way, is Alan Richmond, and we’ve seen
him before, most recently lying drunk in the back seat of
a dark Towncar.
RICHMOND
Take a walk with me.
He and Sandy start out of the room. A well-dressed woman
moves with them. She is Chief of Staff and her name is
GLORIA RUSSELL.
Two men in suits follow behind. Burton and Collin are
their names and they are the best the Secret Service has
to offer.
149 INT. WHITE HOUSE - CORRIDOR - NIGHT 149
The group, as they leave the room, come to a wide
corridor.
RICHMOND
Tell me about Walter -- how is he?
SANDY LORD
Eighty and alone, Mr. President.
RICHMOND
He understands officially my hands
are tied?
SANDY LORD
Mr. President, he’s touched at
your concern.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 45.
149 CONTINUED: 149
RICHMOND
Any news of the killer?
(as Sandy indicates
"no")
Well, why isn’t there? Who’s in
charge of the case?
SANDY LORD
Top man -- eight years homicide
work in New York. But I
understand how you feel -- it’s
hard to be patient.
RICHMOND
(terribly upset)
No one understands how I feel --
I’m supposed to have all this
power but I can’t help my oldest
friend -- you know and I know that
more than any man alive Walter
Sullivan put me here -- and now
when he most needs me, he must
feel abandoned.
CLOSEUP - RICHMOND *
On fire --
RICHMOND
-- I’ll hold a press conference --
and I’ll have Walter come -- and I
will embrace him before the world.
Sandy. Listening. Moved.
SANDY LORD
He’ll treasure that, Mr.
President. What a generous
gesture. Thank you. Thank you.
And he reaches out, shakes Richmond’s hand, squeezes
Richmond’s arm and -- Richmond -- suddenly screaming in
pain -- Sandy pulls back, shocked. Richmond looks
embarrassed.
RICHMOND
(quick smile)
Damn tennis elbow is killing me.
And on that --
46.
150 INT. HALLWAY OUTSIDE OVAL OFFICE - NIGHT 150
Richmond, immediately after, and he sure isn’t smiling
now -- he storms toward the Oval Office, Russell, Burton
and Collin hurrying to keep up.
151 INT. OVAL OFFICE - NIGHT 151
Burton opens the door for them, closes it once they’re
inside.
RICHMOND
(throws off his jacket,
turns on Russell)
This thing’s worse, Gloria. I
need to see a doctor.
RUSSELL
The country would have to be
informed, Mr. President.
RICHMOND
What happened to my right to
privacy?
(rolls up his sleeve,
studies his cut)
I think she nicked a tendon.
RUSSELL
Burton says it’s a flesh wound --
RICHMOND
(to Burton)
-- when did you become such an
expert, Bill? -- Ever been
wounded? --
BURTON
(quietly)
Yes, sir. Many times.
The fireplace. Richmond goes to it, rubs his arm, stares
at the flames.
RUSSELL
Are you serious about that press
conference, Alan?
RICHMOND
Of course I am -- Walter’s been
like a father to me.
RUSSELL
Shall I bring Mrs. Richmond home
for it?
(CONTINUED)
47.
151 CONTINUED: 151
Richmond, turning from the fire now, quietly.
RICHMOND
I think Mrs. Richmond’s mission to
help the poor in Asia should not
be interrupted.
(takes a breath,
starts to button
his shirt)
We know anything yet?
RUSSELL
We checked his license plate -- he
stole the car from a police
impoundment lot.
RICHMOND
We’re not dealing with a fool
here.
(gestures toward his
jacket, as Russell
helps him into it)
Has he initiated contact?
RUSSELL
Burton doesn’t think he will.
RICHMOND
I agree.
(checking himself
in a mirror)
Sorry about my behavior -- won’t
happen again; think of it as a
blip on the screen. And as far as
I’m concerned, so is he.
RUSSELL
He could be a little more than
that, Alan -- he saw.
Richmond. Big.
RICHMOND
He saw nothing -- a drunk woman
who liked rough sex too much. And
he’s a burglar. Who’s going to
believe him?
(beat)
After all, it’s not as if he had
evidence or anything...
And on those words --
)B( ABSOLUTE POWER - Rev. 5/16/96 48.
152 INT. LUTHER’S SAFE HOUSE APARTMENT - LETTER OPENER - 152
NIGHT
Luther holds it. It’s the middle of the night. Luther
turns the weapon over and over in his big hands...
153 EXT. WHITE HOUSE REAR GATE - NIGHT (LITTLE LATER) 153 *
Burton is alone in his car, exiting the gate and driving *
home. He turns onto the main road.
154 EXT. STREET NEAR WHITE HOUSE/INT. BURTON’S CAR - NIGHT 154
He picks up speed. Glances around -- no cars are
following.
Burton reaches into his pocket, takes out a MICROCASSETTE RECORDER, flicks it ON.
RICHMOND (V.O.)
What happened to my right to
privacy?
(beat)
I think she nicked a tendon.
Burton clicks the cassette off, puts it back into his
pocket. Drives into the night...
155 INT. KATE’S APARTMENT - TINY KITCHEN - DAY 155
A stove with one burner on high. A tea kettle is over
the flame.
It is morning and Kate is clearly not fully awake. She
is finishing making instant coffee with lowfat milk and
Sweet ’n Low; next she goes to the front door of her
apartment, opens it, picks up the morning Washington
Post.
She unfolds the paper as she starts back to the
kitchen --
INSERT - WASHINGTON POST
Huge headlines -- as big as you can get without a war.
WALTER SULLIVAN’S WIFE MURDERED
(CONTINUED)
49.
155 CONTINUED: 155
BACK TO SCENE
Kate looks at it only a moment, shakes her head, then
starts to turn her attention to another section of the
paper --
-- she doesn’t get that far.
Kate: she has seen something she didn’t catch before --
The front page again. And the headline is still there --
-- but there is a smaller headline beneath it:
Jewel Thief Sought
Kate sits down hard. Trying for control. Entering a
nightmare. She stares at the paper.
The front page. Pictures of the mansion, of Walter
smiling on his wedding day, of Christy.
But Kate’s eyes keep coming back to the smaller headline:
Jewel Thief Sought
She tries to sip coffee, spills. She closes her eyes --
in the kitchen, the pot of WATER starts to SHRIEK. Kate
does not move.
156 EXT. VALERIE’S MIDDLE CLASS NEIGHBORHOOD - DAY 156
(EARLY AFTERNOON)
Kids riding bicycles. Very Norman Rockwell.
157 INT. VALERIE’S BASEMENT - DAY 157
A bald man. There is the sound of a CLICK. We realize
after a moment that the bald man is Luther.
Another SHOT of Luther looking very different -- full
beard. Again, a CLICK.
Luther again -- elegant beard this time. CLICK.
PULL BACK to reveal --
We are in the basement game room of one of the suburban
homes.
But our attention is on a whole string of Polaroids of
Luther.
(CONTINUED)
50.
157 CONTINUED: 157
Two people are present: Luther and VALERIE. Valerie is
very small, and doesn’t miss much.
She has been photographing him, and as the last photo
slides out of the camera, she blows on it, puts it
alongside the others.
VALERIE
(as they study the
pictures)
You always did disappear good,
Luther.
LUTHER
You mean I’ve got a weak face.
Thanks, Val.
VALERIE
You’re lucky is all -- some of my
customers, they stand out no
matter what.
An order form book. Valerie licks a pencil with her
tongue.
VALERIE
How many passports you need?
LUTHER
(thinks)
Four should cover it.
VALERIE
(writes this down)
Now you’ll want different looks,
and matching international
driver’s licenses -- I’ll throw in
some dummy credit cards, seeing
it’s you. How the rugs I made you
holding up?
LUTHER
They’re good. Beards and
mustaches, too.
VALERIE
(pleased)
I try to give value for money.
Leaving the country permanent?
LUTHER
It may come to that.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 51.
157 CONTINUED: (2) 157
VALERIE
Matter where you’ve been? -- I
hate doing those goddam Asian
passport stamps.
LUTHER
Europe’s fine. Maybe the
Caribbean for winters. When can I
pick up?
VALERIE
Usually takes some time, but for
you, I’ll rush it.
LUTHER
Thanks, Val. I’ve always been
able to count on you.
Valerie puts the order book down, studies him.
LUTHER
What?
VALERIE
I don’t want to know what you’re
into, but leaving forever...
LUTHER
Finish it.
VALERIE
I never figured you for a runner
-- thirty percent of my runners
kill themselves within five years.
LUTHER
(kisses her forehead)
Five years doesn’t sound so bad to
me just now.
And as he heads out --
158 INT. POLICE HEADQUARTERS - CRIMINAL LAB - DAY 158
Seth and Laura in the good-sized criminal lab. Loaded
with up-to-date equipment.
Seth has drawn a picture of the crime scene. Words like *
"Bedroom Door," "Exit Window," "Vault," "Bed," "Victim"
are written neatly to scale. He holds a sheaf of papers.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 52.
158 CONTINUED: 158
It’s late afternoon and things are already getting
crazed. NOISE in the b.g. throughout.
SETH
See if any of this makes sense.
Seth mimes opening the "bedroom door," stepping inside,
closing it. He makes a click with his tongue.
SETH
I am Christy Sullivan and I walk
in and surprise a burglar.
Seth moves to the "vault door," mimes closing that, makes
a grunt.
LAURA
Now you’re the burglar coming out
of the vault and being surprised.
SETH
Gold star.
(aims his finger like
a pistol)
I draw my gun --
LAURA
(cutting in)
-- then why do you bother to
strangle her when you could just
shoot?
SETH
That’s nothing -- why do I bother
to have her strip and then put her
clothes back on?
LAURA
There I can help you -- see,
before you were a burglar you were
a dry cleaner and you still love
beautiful clothes.
SETH
And I dress her because?
LAURA
She was a good customer and you
didn’t want her embarrassed when
the police came.
(CONTINUED) *
)B( ABSOLUTE POWER - Rev. 5/16/96 53.
158 CONTINUED: (2) 158 *
CLOSEUP - SETH
Frustrated.
SETH
She had a point-21 blood alcohol
level. -- she was too drunk to
drive. I’ve checked every cab and
limo company in the area and not
one of them knows anything.
Someone drove her home. Goddamit,
who? And why haven’t they come
forward?
LAURA
Maybe whoever drove her home
killed her.
SETH
You saying the burglar drove her
home?
(pissed)
I hate this case.
An open door behind them. A TELEPHONE REPAIRMAN appears.
Nice looking kid with a dazzling smile.
TELEPHONE REPAIRMAN
Lieutenant? -- sorry to bother you
--
(as Seth turns)
I’ve got your phone working again,
shouldn’t give you any more
trouble.
SETH
Good service, thanks.
TELEPHONE REPAIRMAN
(dazzling smile
as he goes)
Part of the job.
Seth and Laura. Seth’s lost his train of thought. Then --
SETH
Oh yeah -- remember that bullet
hole in the wall? Had the lab dig
out the slug -- guess what -- no
slug -- why does the burglar take
the time to do that?
LAURA
Different from the one in her
body?
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 54.
158 CONTINUED: (3) 158 *
SETH
(getting more and
more upset)
Oh I like that a lot -- two
different guns means two different
burglars. Two guys broke in? And
they both went out the window?
Bullshit.
(big)
And oh, by the way, why does he --
or they -- go out the window in
the first place when he -- or they
-- got in by breaking a zilliondollar security system? --
COP (O.S.)
-- Seth?
SETH
(whirling)
What?
COP
(in doorway)
A Bill Burton of the Secret
Service in the parking lot.
SETH
(gives papers to
Laura)
Here, you solve the goddam thing.
(as he starts away)
Did I mention that I hate this
case? I really truly hate this
case -- you cannot imagine how
much I hate it --
159 EXT. POLICE HEADQUARTERS - PARKING LOT - DAY 159
Burton waits by his car as Seth walks up.
BURTON
(as they shake)
Bill Burton, hi --
SETH
-- hi, Seth Frank --
BURTON
-- I know you must be going crazy
-- but the boss is very interested
in your progress. Maybe we can
help each other.
(CONTINUED)
55.
159 CONTINUED: 159
SETH
What did you have in mind?
BURTON
You know how close he and Sullivan
are?
(as Seth nods)
The minute anything breaks, if
you’d call me, I’d tell the
President. That way, he’d be the
first to alert Mr. Sullivan -- it
would mean a lot to him. And any
red tape you want cut -- done.
(as he takes out
card)
Here are my numbers.
He turns, opens his front car door.
BURTON
(getting in)
Leads?
SETH
Still trying to figure out what
might have happened --
BURTON
-- I loved playing Sherlock
Holmes.
SETH
(surprised)
You Secret Service guys do that?
BURTON
I was State Trooper here ten years
ago before the Government got me.
Seth. It just pops out.
SETH
You’re that Bill Burton.
Burton. Embarrassed.
BURTON
I was younger and dumber then.
(quickly)
Keep in touch.
Seth waves as Burton drives away.
)B( ABSOLUTE POWER - Rev. 5/16/96 56.
160 EXT. STREET NEAR POLICE HEADQUARTERS - DAY 160
Burton. He drives alertly along, turns a corner. Up
ahead, a telephone repair truck has stopped. The
Repairman leans out. He has a dazzling smile. He and
Burton wave to each other...
161 INT. SULLIVAN DINING ROOM - NIGHT 161 *
Quietly elegant. Two men are finishing dinner. Walter
Sullivan we know.
MICHAEL McCARTY, his dinner companion, is 35, fit,
handsome, beautifully dressed. He is, at present, torn
by a silver tray of small French pastries.
WALTER SULLIVAN
(noting McCarty’s
temptation)
The chef makes them especially for
me -- I promise you they’re
sinful.
McCarty grabs one, downs it, grins sheepishly.
McCARTY
You’re a salesman, Mr. Sullivan.
Sullivan nods as they rise.
162 INT. SULLIVAN LIVING ROOM - NIGHT 162 *
Tastefully appointed, as one would expect.
WALTER SULLIVAN
This is a new arena for me, but
from what I’m told, you have a
flawless reputation, Mister
McCarty -- which is why I need to
employ you.
McCARTY
Understood.
WALTER SULLIVAN
I have no idea who I’m after.
Until I do, you will have to wait
in Washington for instructions.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 57.
162 CONTINUED: 162
McCARTY
Out of the question, I’m afraid.
(explaining as they
walk)
Mine isn’t particularly creative
work -- I only do it because I
enjoy living beyond my means. I
can’t afford to just sit around.
A sofa. Walter gestures for them to sit.
WALTER SULLIVAN
When I was 10 my father died -- he
was a miner and lung disease
killed him. I became rich at 25
and the first thing I did was
purchase that mine, close it, and
give every miner there fifty
thousand dollars to retire on.
(beat; staring at
McCarty now)
You will come to Washington, Mr.
McCarty. You will put one million
dollars expenses into the Swiss *
bank account of your choosing.
(beat)
And, when the time comes, two
million dollars a bullet.
McCARTY
(smiles, nods)
You are a salesman, sir.
WALTER SULLIVAN
Selling sin is easy...
Now, sharply...
CUT TO:
163 INT. SETH’S OFFICE - CLOSEUP - OLD MUG SHOT OF LUTHER - 163
DAY
PULL BACK to reveal...
... Seth and Laura, in his office. The mug shot is on
his desk, along with some folders. Seth beckons to her.
LAURA
(studying photo)
Who is he?
(CONTINUED)
58.
163 CONTINUED: 163
SETH
Luther Whitney --
(beat)
-- one of the great thieves of the
world.
Seth. The words pour out.
SETH
Been going nuts with this thing,
up all night and I remembered your
notion how it might be two
burglars, and around dawn I
thought, wait, what if it wasn’t
two burglars but what if it was
one guy trying to throw us off by
making it look like two?
(faster)
Called a buddy at the Bureau --
they keep track of this stuff
internationally -- he says maybe
only a half a dozen guys alive
could have pulled off the Sullivan
job -- I’m tracing all six --
(beat)
-- but Whitney’s the only one
lives in Washington.
Laura. Looking at Seth now. Starting to get excited,
too.
LAURA
Why haven’t I ever heard of him?
SETH
Because he hasn’t been arrested in
thirty years.
LAURA
(indicating mug shot)
This his graduation picture from
Harvard?
SETH
(waving her off)
Ancient history -- he wasn’t a
jewel thief back then. Just a
kid, just part of a gang, a threetime loser. But since he got out
the last time, he’s only worked
alone --
(MORE)
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 59.
163 CONTINUED: (2) 163
SETH (CONT’D)
(beat)
-- and no one’s touched him.
(shakes his head)
He gets questioned whenever
anything big comes up. But
nothing sticks.
LAURA
(really excited now)
Seth -- we can make this stick --
I’ll bet you anything this is our
guy -- a local? -- can’t ask for
more --
SETH *
(makes a face) *
We’ve got a problem. *
LAURA *
-- what? --
SETH
Whitney hasn’t killed anyone in 45
years.
Laura doesn’t get it.
SETH
Korea.
LAURA
Big deal, so he’s a veteran.
SETH
Not just a veteran -- a wounded
veteran.
(indicating folder)
Got his combat record here.
Battles, commendations, *
decorations up the kazoo. *
Lives alone on his disability. *
Says he does anyway. *
(glum) *
And I don’t do war heroes... *
CUT TO:
164 EXT. WASHINGTON MUSEUM - DAY 164
Luther -- it’s a beautiful morning now and he’s walking
up the steps to the art museum. He seems in a terrific
mood as he goes inside --
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 59A.
164 CONTINUED: 164
-- HOLD.
Seth has been on the steps of the museum, watching him.
Now quickly --
165 INT. WASHINGTON MUSEUM - DAY 165
Luther, inside, peering back out at Seth. And he doesn’t
seem in as terrific a mood now. He hesitates, keeps on
going.
60.
166 EXT. WASHINGTON MUSEUM - DAY 166
Seth. Outside -- and he knows Luther was watching.
167 INT. WASHINGTON MUSEUM - DAY 167
El Greco. The usual group has gathered, sketching away.
Luther is deeply engrossed in his labors.
Seth enters the room, casually taking it all in. He
approaches the group, ends up behind Luther who is intent
on getting the hands right.
LUTHER
(not looking)
Boy, you must be smart.
SETH
(really taken aback)
Sorry?
LUTHER
Usually takes a week for you guys
to get to me.
(turns, smiles)
You look just like your picture,
Seth. I’m Luther Whitney.
He reaches out to shake a surprised Seth’s hand --
168 INT. MUSEUM - COFFEE SHOP - DAY 168
They walk in, go to the food line. There is, throughout,
a bantering tone. Not that it matters, but these two, in
a different world, would like each other -- they’re both,
in their own ways, deeply moral men.
LUTHER
So, do you want my confession now
or after coffee?
As Luther draws some coffee from an urn --
SETH
(doing the same)
Before I send you away for life, I
should probably check out your
alibi.
(CONTINUED)
61.
168 CONTINUED: 168
LUTHER
Watched the Bullets game with Red
Bransford. Prison buddy of mine
-- runs a bar -- want to question
me about the game? I’m probably
lying.
They each give the cashier some money and we see a quiet
table in the corner as they head for it.
SETH
You been following the case?
LUTHER
(nods vigorously)
I love true crime --
SETH
-- F.B.I. feels only a few guys
could have handled something as
hard as the Sullivan job.
(touches his notebook)
I’ve got a list here; you’re on
it.
LUTHER
(nothing shows)
I wish it was true.
(shakes his head)
Your robber actually went in the
front door but came out down a
rope in the dark in the middle of
the night?
(as Seth nods;
Luther sighs)
If only I could do stuff like that
-- I’d be the star of my A.A.R.P.
meetings.
Luther and Seth as they sit. Seth smiles, looks at
Luther.
SETH
(beat)
Luther? Why was this so hard?
Luther. Now he’s surprised. He kind of smiles.
LUTHER
You want me to help solve your
case?
(CONTINUED)
62.
168 CONTINUED: (2) 168
SETH
Just looking for insight. How
would you -- scratch that -- how
would one go about it? What kind
of person do you think I should be
looking for?
LUTHER
(like a shot)
Older fella. Like me.
SETH
(now he smiles)
Because?
LUTHER
Need patience. The secret is just
research, research, research --
from everything I’ve read.
Seth. This hasn’t gone at all the way he thought -- and
he’s starting to get fascinated.
SETH
Research for what?
LUTHER
Well, from what I can tell on the
tube, it’s not a small house.
(as Seth nods)
There had to be an architect,
right? You’d be able to tell
which one from public records in
the library. And once you know
the office, you could break in and
find the plans and Xerox them, get
them back before morning.
SETH
Not just steal them?
LUTHER
Seth -- breaking in isn’t hard --
what’s hard is breaking in so no
one knows you’ve been there. Now,
after the architect, next you’d
want the contractor’s office --
and the security company’s office.
(beat)
You know the skill involved
breaking the security of a
security company?
(shakes his head)
I wonder how those guys do it?
(CONTINUED)
63.
168 CONTINUED: (3) 168
SETH
Why go to all that trouble?
LUTHER
Papers said he kept the money in a
vault, yes?
(as Seth nods)
Well, I’m guessing there was
probably some secret way to open
it --
SETH
(casually)
-- clicker --
LUTHER
(fascinated)
-- explain --
SETH
-- gizmo -- looked like a V.C.R.
remote --
LUTHER
(shaking his head)
-- amazing --
(beat)
-- must have been a lot of money
inside.
SETH
(sipping casually;
a pause)
Five million.
And on those words --
Luther, more than he thought, a lot more -- but of course
nothing shows -- instead he breaks out laughing.
SETH
Why’s that funny?
LUTHER
The way you said it -- as if you
were trying to surprise me.
SETH
(smiles)
I was trying to surprise you.
LUTHER
(smiles back)
There you go.
(CONTINUED)
64.
168 CONTINUED: (4) 168
Seth sips his coffee, takes out his notebook, opens it.
SETH
Would the burglar use a disguise?
LUTHER
Seth, you’ve got to get with the
program you expect to catch this
guy -- most likely it is a guy, am
I right? Some kind of weird
loner?
SETH
Maybe like you.
LUTHER
(couldn’t agree more)
I’m the perfect prototype.
(sipping away)
But you see any face often enough,
you’ll start putting things
together. That’s why these top
guys disguise themselves. I read
a great article a couple of years
back -- damn, I wish I could
remember where -- anyway, it was
about these makeup experts some of
them use -- wigmakers, people like
that.
SETH
(flipping a page)
Go on about the wigmakers.
LUTHER
(glancing at his watch)
I’d love that but I’m late as it
is -- got to get my pacemaker
checked.
(he likes Seth)
-- all this excitement, you
understand.
SETH
(and he likes Luther)
A) You don’t have a pacemaker, and
B) I’ll be back tomorrow.
LUTHER
Tomorrow is promised to no one.
HOLD ON Luther.
65.
169 INT. LUTHER’S SMALL HOUSE - BEDROOM - NIGHT 169
Luther is throwing clothes into a suitcase while talking
on the phone --
LUTHER
Not ’til morning?
(makes a face)
-- I’ll be by early --
He hangs up, shuts the suitcase, takes off out the
door --
170 INT. KATE’S APARTMENT - NIGHT 170
A place we’ve seen briefly before. Dark. Moonlight
through the windows.
The sound of a KEY IN the DOOR.
Luther enters, takes out a tiny flashlight. We’re in one
largish room, books all over. The home of someone who
doesn’t care a whole lot about their home.
171 INT. KITCHEN - NIGHT 171
Luther enters. He opens the fridge. Disaster -- still
water, sparkling water, carrot sticks.
LUTHER
(sadly, muttering)
Katie darling, you’ve gotta try
real food sometime.
He closes the door, moves back into the room --
172 INT. KATE’S APARTMENT - NIGHT 172
A graduation photo of Kate. Luther touches it with a
fingertip, moves on through the silence.
173 INT. KATE’S APARTMENT - BEDROOM - NIGHT 173
Luther by the bed now, he flashes his light around --
-- what the light illuminates: a bed table full of law
books. Expected. A phone/answering machine. The
mandatory lamp.
And photographs. A proud mother and daughter picture.
The daughter is Kate. The mother is a fine-looking woman
with a kind face.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 66.
173 CONTINUED: 173
Half a dozen more shots as Kate grew up, the mother grew
older. Mother and daughter, mother and daughter.
Nothing unusual here at all.
So why is Luther so sad?
HOLD.
174 EXT. MIDDLETON COUNTY COURTHOUSE - DAY 174
10 A.M. A white-brick, weather-beaten building, Old
Glory fighting the breeze.
RICHMOND (V.O.)
I am having this press conference
here because...
Richmond, speaking on a podium. The press corps stands
in front of him, TV crews of all kinds, CNN the most
noticeable.
RICHMOND
... it is here, at this courthouse, *
that Christine Sullivan’s killer
will be tried for his crime.
Burton and Collin, in the b.g., scanning the crowd.
Gloria Russell stands behind them.
175 INT. AIRPORT LOUNGE - DAY 175
The same shot -- only now it’s grainy -- we’re watching
it on a TV SCREEN. CNN ON the TUBE.
A BARTENDER cleaning glasses; otherwise, not a whole lot
going on.
Now Luther enters, dressed for travel. He goes to a
stool, orders a ginger ale, puts his passport and ticket
on the bar, glances toward the TV.
LUTHER
Turn that off, okay?
BARTENDER
(finishing up the
glasses)
In a sec.
67.
176 EXT. MIDDLETON COUNTY COURTHOUSE - DAY 176
Richmond at his press conference. He speaks without
notes and he speaks beautifully.
RICHMOND
As you know, I came from an
impoverished family in an
impoverished town -- but we lived
with our doors unlocked.
Russell watching, listening; she loves hearing him talk.
RICHMOND (O.S.)
We all lock our doors now, but
that is not what concerns me...
Burton and Collin, scanning the crowd.
RICHMOND (O.S.)
... we are also locking our
hearts... that is the sadness,
that is the loss.
Richmond, and suddenly he’s like a Southern minister.
RICHMOND
We are locking our hearts to the
cries of the weary, we are locking
our hearts to the poor and their
pain...
An old man, standing behind Russell. We realize it’s
Walter Sullivan.
RICHMOND (O.S.)
... Sisters and brothers, we are
locking our hearts to ourselves.
177 INT. AIRPORT LOUNGE - DAY 177
Walter Sullivan. Grainy now. CNN. He has aged
shockingly in the past couple of days.
Luther staring sympathetically at the devastated old man.
-- Sullivan’s image suddenly is gone --
-- The Bartender has TURNED OFF the TELEVISION.
LUTHER
(politely)
Put it back on.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 68.
177 CONTINUED: 177
BARTENDER
(starting to argue)
You said --
LUTHER
(cutting through)
Do it --
CNN. Walter Sullivan is still there.
RICHMOND (V.O.)
We feel savagery and violence must
be allowed a place at table.
(beat)
That is wrong. That is not
America. I shall fight that
battle.
Luther, staring at the image of Walter Sullivan, who is
heartsick and beaten. Luther is simply transfixed --
-- Richmond on CNN and now he has turned and is beckoning
for Walter Sullivan to join him.
Sullivan for a moment is uncertain. He points to himself
-- "do you mean me?" Richmond nods, opens his arms out
wide. Sullivan gets up, comes forward.
Luther, as he gets up too, also comes forward, leaving
the stool, walking close to the television.
Richmond and Sullivan, grainy on CNN as Richmond embraces
Sullivan, holds him in a loving embrace.
RICHMOND (V.O.)
Dear friend, old friend, we shall
fight that battle.
Sullivan, too overcome by the moment, can only nod.
RICHMOND (V.O.)
Who can explain the ways of
chance? If we had never met, I
would not be President. If
Christine had not taken ill, she
would be with you in Barbados *
even now. Oh, Walter, you’ve *
always been like a father to me. *
I would give the world to lessen
your pain.
69.
178 EXT. MIDDLETON COUNTY COURTHOUSE - DAY 178
The press corps. Subdued, saddened.
Richmond and Walter. They turn, face the cameras. The
president’s arm is still around the old man; they both
blink back tears and now --
-- here it comes ! --
179 INT. AIRPORT LOUNGE - EXTREME CLOSEUP - LUTHER - DAY 179
Tears of rage in his eyes. A rage so deep it shocks
him --
LUTHER
You -- heartless -- prick --
(building)
-- you -- fucking -- bastard --
The Bartender, surprised, turning toward Luther. He
starts to say something, stops; something tells him to
shut up and he does.
180 EXT. MIDDLETON COUNTY COURTHOUSE - DAY 180
Richmond, wiping away tears, alone on camera.
181 INT. AIRPORT LOUNGE - DAY 181
Luther, wiping away tears, in the bar.
A SHOT of the two of them, Luther and Richmond, one on
CNN, one in reality, because Luther has moved so close to
the TV he and Richmond could almost be staring at each
other.
LUTHER
(whispered now)
I’m not running -- not from you.
(beat)
I’m going to bring you down...
HOLD ON the two men.
182 INT. WHITE HOUSE - NORTH PORTICO - DAY 182
Seventy very excited people we’ve never seen before.
They stare around at their surroundings -- they are in
the White House. On a guided tour.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 70.
182 CONTINUED: 182
A bright late morning of what’s going to be a beautiful
day. A guide leads the people through a doorway. They
troop happily along.
Luther is with them; he seems happy too.
183 INT. WHITE HOUSE - NORTH PORTICO AREA - DAY 183
The guide leads the people through. They look around,
chat with their friends, follow the guide out.
Luther follows the guide out too.
HOLD ON the room.
All is as it was.
Except a large envelope has been dropped on a side table.
MOVE IN ON the envelope --
-- it’s addressed to Gloria Russell.
184 INT. WHITE HOUSE - GLORIA RUSSELL’S OFFICE - DAY 184
Gloria Russell. Terrified.
Her doors are closed, Russell is at her desk. Burton
stands alongside. Collin, silent, sits in a corner.
And on her desk, half out of the envelope, is a photograph of the letter opener.
RUSSELL
He was in the building -- he took
a guided tour.
Burton pulls the picture all the way out, studies it.
RUSSELL
I’ve never dealt with blackmail --
BURTON
(trying for calm)
-- he doesn’t want money --
RUSSELL
(exploding)
-- you a mind reader too? *
(CONTINUED)
71.
184 CONTINUED: 184
BURTON
(under control)
No, I just looked on the back --
(shows her )
-- see? --
Luther has written something.
RUSSELL
(reading)
’I don’t want money.’
Russell is more upset. Burton almost smiles.
LUTHER
(admiringly)
This guy sure has the guts of a
burglar. Wish we had him.
Collin laughs.
RUSSELL
You finished your recruiting
speech? Because I’d like to know
how I handle this.
BURTON
Like you handled the letter
opener?
Russell. She studies Burton. Then --
RUSSELL
Gee, Bill, that could be construed
as criticism. Do you really want
me as an enemy?
Burton stands there, massively powerful. His voice, when
he speaks, is his usual voice: polite, considerate.
BURTON
Miss Russell, I should have called
the police that night. But I was
weak. You convinced me to stay
silent. I regret that.
(another pause)
Know this: every time I see your
face I want to rip your throat
out.
Russell. Silence.
(CONTINUED)
72.
184 CONTINUED: (2) 184
RUSSELL
Fine -- you win the pissing
contest --
(then suddenly
almost like a
little girl)
-- what should I do?
BURTON
Nothing -- because he’s making a
terrible mistake, he thinks he has
time -- he doesn’t -- Seth Frank’s
too good. He’ll bring him in.
RUSSELL
Then what?
COLLIN
(his first words)
Then I kill him.
Now, from them --
185 INT. KATE’S OFFICE - DAY 185
She is, we will find, a top prosecutor for the Commonwealth of Virginia. Her office is a zoo.
On her desk, a baby picture of Kate and her mom smiling
-- but there is something a little different about it.
Seth enters and they shake. He glances around --
-- sees the photograph, glances away.
Kate has risen now -- and in the silence it’s clear that
even though they are both standing still, they are both
circling.
SETH
(trying for a smile)
For a tough prosecutor, you don’t
resemble your reputation, Miss
Whitney.
KATE
(the same)
Is that good or bad?
(MORE)
(CONTINUED)
73.
185 CONTINUED: 185
KATE (CONT’D)
(before Seth can
reply)
Look, Lieutenant -- I told you on
the phone, I’m simply not involved
with my father, so this may not be
a waste of time for you, but it
sure is for me.
SETH
What would you do if I just turned
around and left?
KATE
Report you as an incompetent.
SETH
(a real smile now)
You’re exactly like your
reputation, Miss Whitney --
As they head out --
186 INT. LOUNGE OUTSIDE KATE’S OFFICE - DAY 186
They enter. It’s empty.
SETH
(the instant
they’re alone)
I’m assuming your father’s a big
part of you --
KATE
-- what? --
SETH
-- You think it’s all coincidence?
He’s a thief and you just happen
to be the toughest prosecutor in
the area?
KATE
(just amazed)
Wow -- that never crossed my mind
-- you think there might be some
connection? -- Like maybe I’m
somehow compensating? -- I better
write that down.
SETH
-- Luther disappeared.
(CONTINUED)
74.
186 CONTINUED: 186
No reaction.
A banged-up couch. Kate sits, shrugs.
SETH
I think you can help me.
KATE
Lieutenant -- I don’t know the man
-- he was in jail when I was a
kid, when he got out my mother and
I went off to live by ourselves.
We don’t make contact. He doesn’t
care about me. I’ve seen him all
of once this past year.
SETH
When?
KATE
Couple days ago. He said he might
be going away. There. I just
helped you. Can I go back to work
now?
SETH
(shakes his head)
Any idea where he might have gone?
Seth and Kate realize something: In a different world,
under different circumstances, they’d probably be
starting an affair.
KATE
(snappishly)
Quit wasting my time -- if he
doesn’t want you to find him,
you’re not going to find him.
SETH
You saying he’s left town, skipped
the country, what?
KATE
I’m saying you won’t recognize
him. I’m saying he could be just
around the corner -- he always
kept a safe house --
SETH
(cutting in)
-- where? --
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 75.
186 CONTINUED: (2) 186
KATE
He never said --
SETH
-- Then where’d you hear this?
CLOSEUP - KATE *
KATE
-- my mother loved him, all right?
-- Even after she left him -- even
when she was dying she always
talked about him -- ’If only he
hadn’t this,’ ’if only he could
have that’ --
She stops.
Seth, watching her.
SETH
And?
KATE
I meet a lot of asshole cops like
you -- guys who O.D.’d on
Columbo --
SETH
-- Lady, I may be an asshole cop
but you don’t know me well enough
to call me one --
KATE
-- There’s something else, isn’t
there? Something you want me to
do? -- But you won’t say ---
Seth. There is. But he won’t say.
Kate. For the first time now, apprehension. Now --
187 EXT. LUTHER’S HOUSE - DAY 187
The row of small, neat houses -- where Luther lived.
Kate and Seth get out of his car, go to the front door.
KATE
How long did he live here?
(CONTINUED)
76.
187 CONTINUED: 187
SETH
Years.
KATE
Never been.
188 EXT. LUTHER’S FRONT DOOR - DAY 188
Seth stoops, gets the key from under the terra cotta
planter.
SETH
Strange place for a thief to leave
a key, don’t you think?
KATE
(quick memory)
He always did that...
189 INT. LUTHER’S HOUSE - LIVING ROOM - DAY 189
They enter. It’s surprisingly tidy.
Seth and Kate as they move along. Seth is watching Kate
who suddenly stops dead.
The mantle. A large blowup of the same picture Kate had
in her office, the one of Kate and her mom --
-- with one startling change: Luther is in this shot, standing there proud and smiling. She has ripped his
presence out of her photo.
Seth, silently watching Kate. She turns sharply away.
He gestures for her to follow.
190 INT. LUTHER’S BEDROOM - DAY 190
They enter. Clothes tossed all over.
SETH
He sure took off in a hurry. What
scares a professional thief like
that?
Kate. No reply. She has seen something across the tiny
room and is drawn to it --
Luther’s bed table --
-- and here it is!
(CONTINUED)
77.
190 CONTINUED: 190
Call it a montage, call it a collage, call it what you
will, we are looking at dozens of photographs --
-- all of them featuring Kate.
Many of them we saw in her apartment -- only here, as in
the photo over the mantle, Luther is there with Kate and
her mom.
We are looking at a shrine!
And there are newer photos too -- Kate at her college
graduation, Kate at her law school graduation, Kate and
her mother coming out of an elegant restaurant, Kate
alone on the steps of Middleton County Courthouse --
-- these are not posed shots.
She looks wonderful and alive in all of them --
Kate. She looks dead now. All energy gone. She sits
heavily down on the bed.
KATE
(fighting tears)
... but he wasn’t at those
places...
(pointing to the
grown-up photos)
... college graduation; law school
graduation; the night Mom and I
celebrated when I got a job; and
me alone on the steps? -- I’d just
won my first case, I was so
proud...
(still fighting)
... I used to think... sometimes
I’d come home and I’d sense he’d
been in my apartment, checking the
fridge, shaking his head because
he never thought I ate right...
It’s crazy but I just knew Daddy
was watching over me...
And now she loses it, starts crying silently.
Seth kneels alongside her, gives her a handkerchief.
SETH
You can do a good thing, Kate --
(beat)
-- help me bring him in. Just
leave a message on his phone
machine, you’re worried about him.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 78.
190 CONTINUED: (2) 190
KATE
... No...
SETH
It’s the truth -- you are worried
about him -- this isn’t your
normal case -- his life may be in
danger -- you can save him, make
the call --
KATE
... He won’t come...
SETH
(indicating the
pictures)
Of course he’ll come. You’re all
he has.
Kate, staring at the photos, trying to get control.
SETH
(moving in)
Kate, he’s on the run and he’s
scared and he’s right to be scared
because he’s going to get caught
-- you don’t know the heat on this. *
KATE *
He’s not a murderer. *
SETH *
Maybe you’re right. Maybe he is *
innocent. If so I’ll have him *
home and dry in a few hours. But *
what happens if some hotshot who’s
trying to make a reputation tracks
him down?
(beat)
I can guarantee his safety. You
make the call, I make a promise:
You’ll have your father, home and
dry...
191 INT. KATE’S APARTMENT - LATE AFTERNOON 191
Kate alone. Totally wiped out. She is on the phone with
Seth. Outside, the sun is dying.
KATE
I left a message on his machine,
he called back within an hour;
we’re meeting tomorrow afternoon.
)B( ABSOLUTE POWER - Rev. 5/16/96 79.
192 INT. SETH’S OFFICE - LATE AFTERNOON 192
Seth, taking it down.
SETH
Where?
KATE (V.O.)
An open-air place near my office,
the Cafe Alonzo --
Seth’s excited.
193 INT. TREASURY BUILDING - BURTON’S OFFICE - BURTON - 193 *
LATE AFTERNOON
taking it down.
KATE (V.O.)
Four o’clock -- it’s deserted then.
Burton’s excited too. HOLD.
194 EXT. SKY - MOON - NIGHT 194
high in the sky -- middle of the night now.
195 INT. KATE’S APARTMENT - KATE - NIGHT 195
Wired. Pacing across her small apartment, back and
forth, back and forth.
196 INT. SETH’S OFFICE - SETH - NIGHT 196
alone in his office, going over plans, sipping coffee to
stay awake.
197 INT. BURTON’S BEDROOM - BURTON - NIGHT 197
alone in his bed, staring at the ceiling, a nearly empty
Scotch bottle in one hand.
198 OMITTED 198
199 INT. LUTHER’S SAFE HOUSE APARTMENT - LUTHER - NIGHT 199
listening to the PHONE MACHINE. We hear KATE’S VOICE.
"Daddy... I miss you... I’m worried... call me..."
A CLICK. Luther hangs up, immediately dials again. We
hear the message start over. "Daddy... I miss you..." As
he continues to listen --
80.
200 EXT. FIRING RANGE - DAY (EARLY MORNING) 200
-- on what’s going to be a gorgeous day.
Burton, yawning, blowing into a steaming paper cup of
coffee. Collin, wide awake, moves alongside. Collin is
carrying a rifle.
-- we are at a government firing range.
Collin squints into the morning sun.
Burton, putting down the coffee cup, picking up a pair of
binoculars.
Burton and Collin staring out --
-- A distant target is being raised.
Collin. He strokes the barrel of his high-powered rifle.
CUT TO:
201 TARGET 201
A long way off.
CUT TO:
202 BURTON 202
as he has focused the binoculars --
203 BINOCULAR POV - TARGET 203
seen through the binoculars as it comes clear -- the
bull’s eye is small.
CUT TO:
204 COLLIN 204
with his rifle. His fingers still move along the barrel.
No hurry whatsoever --
-- and then it all goes fast, and in one motion he is
aiming and FIRING and FIRING again and the sound explodes
and --
Burton, dazed.
CUT TO:
81.
205 TARGET 205
-- the bull’s eye has been totally blown away.
CUT TO:
206 OMITTED 206
207 INT. DOWNTOWN MEN’S STORE - DAY 207
Luther and a SALESMAN are engaged in conversation.
Luther is buttoning a new raincoat to the throat. The
Salesman holds several hats. Luther picks one, tries it
on.
LUTHER
I need to look really good today.
He doesn’t like the hat.
SALESMAN
Business?
(as Luther tries
the other hat --
very rakish, he
likes it)
It’s a woman, I can tell.
(as Luther nods)
Never too late, is it?
Luther. Beaming.
LUTHER
You got that right.
Now, from his happy face --
208 EXT. CAFE ALONZO BUILDING - THREE CURSING WORKMEN - DAY 208
PULL BACK to reveal the workmen are on a scaffolding two
stories up, struggling to replace a glass panel that has
cracked.
The glass panel is heavy and bulky and the workmen are
having a bitch of a time with it.
The entire front of the building is glass panels. It
mirrors the area across the street -- a bunch of
dilapidated brownstones.
)B( ABSOLUTE POWER - Rev. 5/16/96 82.
209 EXT. BROWNSTONES ACROSS FROM CAFE ALONZO - DAY 209
They are empty and, according to a sign, are due for
demolition. All the windows of the brownstones are
closed -- except one. On an upper story.
210 INT. BROWNSTONE - DAY 210
Inside the window. Michael McCarty, who we last met at *
Walter Sullivan’s, is there. He looks out. *
211 HIS POV 211
The glass building and the struggling workmen and, on the
ground floor, a few tables are set outside, with large
umbrellas alongside each.
There is a sign: CAFE ALONZO.
212 INT. BROWNSTONE - DAY 212
McCarty. Beside him is a leather case. He opens it.
The case. A very high-powered rifle. McCarty begins to
expertly assemble it, taut and businesslike.
213 INT. POLICE HEADQUARTERS DEBRIEFING ROOM - DAY 213
Seth, taut and businesslike, stands by a blown-up map of
the Cafe Alonzo area. The restaurant is circled -- and
around it are marked places for policemen to wait -- Seth
is giving instructions to those policemen now --
-- fifty of them. And no one’s smiling.
214 INT. KATE’S APARTMENT - DAY 214
Kate. Dressed and ready. Lying on her bed. Afternoon
now. She gets up, makes it halfway to the front door --
-- can’t do it -- she turns, goes back to bed, lies down
again, frozen.
215 EXT. CAFE ALONZO BUILDING - DAY 215
The cursing workmen. The glass panel is so damn
cumbersome they are having a miserable time.
)B( ABSOLUTE POWER - Rev. 5/16/96 83.
216 EXT. CAFE ALONZO - DAY 216
An elderly couple sits at one of the half dozen outdoor
tables.
The place is empty.
217 EXT. POLICE HEADQUARTERS - PARKING LOT - DAY 217
Seth, outside headquarters now, giving instructions to
police officers. Behind them: two dozen unmarked cars.
CUT TO:
218 SUN 218
Later in the afternoon.
219 EXT. POLICE HEADQUARTERS - PARKING LOT - DAY 219
Burton, getting out of his car at Seth’s Police
Headquarters.
Seth, finishing instructing a dozen motorcycle cops. *
Burton moves up behind Seth, waits quietly. As Seth is
done, he sees Burton, they nod, start toward Seth’s car.
BURTON
The Boss is very grateful.
Thanks.
SETH
Figured he’d like an eyewitness
report of the capture. This is
our guy -- if he’s innocent, he
sure took off awful fast.
220 EXT. CAFE ALONZO BUILDING - DAY 220
The three workmen. Making some headway with the bulky
glass panel --
221 GUNSCOPE POV 221
-- now crosshairs cover them and we --
PULL BACK to reveal --
)B( ABSOLUTE POWER - Rev. 5/16/96 84.
222 INT. BROWNSTONE - DAY 222
McCarty, staring out the window of the brownstone, the
rifle pointed -- very relaxed, he pulls the trigger --
the RIFLE’S not loaded yet -- and the STACCATO "CLICK" is
all we hear.
223 INT. CAFE ALONZO BUILDING - LOBBY 223
Seth and Burton moving quickly into the lobby of the
glass office building that adjoins the Cafe Alonzo -- the
lobby has a clear view of the outdoor part of the cafe.
Around and behind them, dozens of cops get in position.
224 EXT. STREET - CAFE ALONZO BUILDING - DAY 224
Around the corner from the glass building -- unmarked
cars.
225 EXT. ANOTHER STREET - NEAR THE CAFE BUILDING - DAY 225 *
Motorcycles, waiting in shadow, out of sight.
226 INT. CAFE ALONZO BUILDING - LOBBY - DAY 226
Seth and Burton. They’ve both seen a lot -- which
doesn’t mean they’re not tense. Burton takes out some
Tums, offers them to Seth. Seth shakes his head, brings
out Tums of his own.
CUT TO:
227 SUN 227
Starting down.
228 EXT. CAFE ALONZO BUILDING - DAY 228
The three workmen and they hate their job. One of them
glances down.
229 EXT. CAFE ALONZO - DAY 229
Empty.
Now, from the workmens’ angle, a woman moves to one of
the tables. It’s Kate. They don’t pay much attention.
85.
230 EXT. CAFE ALONZO - DAY 230
Kate. She hesitates, then decides on the front table.
She takes a breath. Sits. Motionless.
CUT TO:
231 GUNSCOPE POV - CLOSEUP ON KATE 231
-- now crosshairs cover her face and we --
PULL BACK to reveal --
232 INT. BROWNSTONE - DAY 232
McCarty as before, with his weapon. He pulls the trigger
again and again, there is the "CLICK" -- now he flicks
away a grain of dust from the barrel --
-- then he puts the weapon down, reaches out and --
ONE BULLET. It’s supersonic ammo. McCarty picks it up,
blows on it gently. He might be holding a child.
233 INT. CAFE ALONZO BUILDING - LOBBY - DAY 233
Burton and Seth. They can see Kate sitting alone in the
late afternoon.
SETH
(mutters)
Fuck...
-- And a goddamn WAITER has appeared and is walking out
toward Kate. He is Asian and very young.
234 EXT. CAFE ALONZO 234
Kate, startled as the Waiter calls out from behind her.
WAITER
Miss?
(as she spins
around)
What you want please?
His English could be a lot better.
KATE
Nothing, thank you.
(CONTINUED)
86.
234 CONTINUED: 234
WAITER
Got to.
KATE
Pardon?
WAITER
(gesturing)
You sit you eat please.
235 INT. CAFE ALONZO BUILDING - LOBBY - DAY 235
Seth and Burton. Stunned.
SETH
This is not part of my brilliant
master plan.
More Tums.
BURTON
Unfuckingbelievable.
They both crunch away.
236 INT. BROWNSTONE - DAY 236
McCarty, watching the Waiter and Kate. He’s not happy
either. He points a finger at the Waiter, goes "Boom."
237 EXT. CAFE ALONZO - DAY 237
Kate, and it’s almost four o’clock and she’s not at her
best.
KATE
(gesturing around)
I’m waiting for someone.
WAITER
He must eat too, please.
KATE
Oh he will, we both will -- we’ll
order half the menu -- but just
not now --
The Waiter nods, finally he turns, starts off.
Kate. Trembling.
(CONTINUED)
87.
237 CONTINUED: 237
The Waiter returning.
WAITER
Cheesecake gone.
KATE
Thank you so much.
The Waiter nods again, and this time he does go.
Kate, watching him, making sure. Now she sits
straight --
238 CLOSEUP - KATE 238
Very shaky, trying to hold it together. And now
crosshairs cover her face as we PULL BACK to reveal --
239 EXT./INT. UNMARKED VAN ON STREET NEAR CAFE BUILDING - 239
DAY
Collin. He holds a very high-powered weapon. It looks
like it could kill from a thousand yards away.
Where he is -- and it’s not a thousand yards away -- he’s
in an unmarked van on the street, even closer than
McCarty.
Collin, loading his weapon. His movements are skilled.
His concentration is total.
240 INT. BROWNSTONE - DAY 240
McCarty, glancing out at the office building area. The
three workmen on the scaffolding are fighting to right
the glass panel. One of them grabs a rope connected to a
block and tackle.
He pulls on the rope. Slowly, the piece begins to rise.
241 EXT. CAFE ALONZO - DAY 241
Kate, sitting alone, studying her hands.
242 INT. CAFE ALONZO BUILDING - LOBBY - DAY 242
Seth and Burton. The waiting is agony.
88.
243 EXT. CAFE ALONZO - DAY 243
Kate. It’s worse for her. She glances around --
-- nothing, no one.
244 INT. BROWNSTONE - DAY 244
McCarty. All the time in the world.
245 INT. UNMARKED VAN - DAY 245
Collin. Blows on his weapon slightly.
246 EXT. CAFE ALONZO - DAY 246
Kate, and it’s a question of how much longer she can take
it. Her trembling is almost out of control -- she
glances around again and --
-- and there he is!
Luther Whitney himself, and he looks splendid in his new
raincoat and hat --
-- he moves along in the shadow of the office building,
toward the cafe, walking with his usual grace -- Luther
always seems to glide.
247 INT. BROWNSTONE - DAY 247
McCarty in the window. Spotting Luther --
-- totally controlled.
248 INT. UNMARKED VAN - DAY 248
Collin does the same.
249 INT. LOBBY - DAY 249
Seth and Burton, and the instant Luther is visible, Seth
gestures toward the policemen: Get ready.
250 INT. BROWNSTONE - McCARTY - DAY 250
raising his rifle.
89.
251 INT. UNMARKED VAN - DAY 251
Collin, raising his.
252 EXT. CAFE ALONZO BUILDING - DAY 252
The three workmen, raising the glass panel.
253 EXT. CAFE ALONZO - DAY 253
Kate. Watching her father come closer.
Luther. It’s hard to suppress a smile as he walks
towards his daughter.
Kate, still watching.
Luther, almost there. Speaks softly.
LUTHER
I did not kill that woman, Kate.
254 INT. BROWNSTONE - DAY 254
McCarty, flipping off the safety.
255 INT. UNMARKED VAN - DAY 255
Collin, doing the same.
256 EXT. CAFE ALONZO - DAY 256
Luther and Kate, and he starts to sit --
257 INT. LOBBY - DAY 257
Seth, right hand raised -- he’s about to start it all in
motion.
258 INT. BROWNSTONE - DAY 258
McCarty, his finger floating to the trigger.
259 INT. UNMARKED VAN - DAY 259
Collin, doing the same.
90.
260 EXT. CAFE ALONZO - DAY 260
Luther, seated now and as at last, he reaches out for his
daughter’s hand --
261 EXT. CAFE ALONZO BUILDING - DAY 261
-- The three workmen, and for a moment the glass panel
slips and tilts and as it catches the afternoon sun --
262 INT. BROWNSTONE - DAY 262
-- McCarty, blinded as the red reflection hits his eyes
but he FIRES.
263 EXT. CAFE ALONZO - DAY 263
Luther and Kate as suddenly the umbrella at their table
is severed and starts to topple.
264 INT. UNMARKED VAN - DAY 264
Collin, startled, and he FIRES too.
265 EXT. CAFE ALONZO - DAY 265
Luther, instantly diving toward Kate as the second BULLET
EXPLODES in the pavement close by.
266 INT. LOBBY - DAY 266
Seth, stunned, because this is crazy and Burton, stunned,
eyes wide.
267 EXT. CAFE ALONZO - DAY 267
Luther, taking Kate down to the sidewalk, protecting her
body with his body and --
Madness! -- because all goes nuts now as there are shouts
and screams and people running this way, that way --
268 INT. LOBBY - DAY 268
-- Seth is in the center of it all, shouting
instructions, racing with Burton out of the building --
)B( ABSOLUTE POWER - Rev. 5/16/96 91.
269 EXT. STREET/CAFE ALONZO BUILDING - DAY 269
-- unmarked cars fill the street --
-- a hundred uniformed policemen charge --
-- MOTORCYCLES ROAR in from everywhere --
270 EXT. CAFE ALONZO - DAY 270
-- Kate lies dazed -- staring at the chaos -- here come
thirty uniformed policemen -- *
-- and here come thirty more -- *
271 EXT. REAR OF BROWNSTONE - DAY 271
-- McCarty races out of the back of the building, leaps
into a SPORTSCAR, GUNS away --
272 INT. UNMARKED VAN - DAY 272
-- Collin disassembles his rifle, scrambles from the
van --
273 INT. LOBBY - DAY 273
-- Burton stays close to Seth, watching it all --
274 EXT. CAFE ALONZO BUILDING - DAY 274
-- The three workmen look down at it all -- then they
look at each other in total confusion -- what the fuck is
going on? --
-- because what they see is that the recently-deserted
plaza is now stuffed with cops and more cops and vehicles
and here come more and here come even more --
275 EXT. CAFE ALONZO - DAY 275
And Kate sits now, staring around, looking for Luther --
-- and Seth in the middle of it all stares around,
looking for Luther --
-- because where the hell is he?
A black police lieutenant, shouting for his men to spread
out.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 92.
275 CONTINUED: 275
Burton, turning, turning, trying to make sense of it all.
Three police sergeants on MOTORCYCLES, GUNNING through
the crowd.
Kate, standing now, looking down -- and then she sees it
-- on the ground where Luther was: a new raincoat and a
new hat and --
Seth, and it’s all gone wrong and it’s all going crazy
and there is noise and there are shouts and there are
whistles.
The black police lieutenant, breaking into a run, chasing
after someone we can’t quite make out.
276 INT. CAFE ALONZO - DAY 276 *
A tall uniformed police lieutenant, entering Cafe
Alonzo --
-- he passes a couple of guys in chef’s hats and the
Chinese waiter who just gapes out toward what was his
service area --
-- the tall uniformed police lieutenant moves gracefully
past --
-- it’s Luther.
He goes to the front door of the place, glances back
toward where the NOISE is still mounting -- shakes his
head -- out the door and gone!
277 INT. KATE’S APARTMENT - NIGHT 277
The door to Kate’s apartment opening and Seth coming in
with Kate. Evening. Kate is as drained as you’d expect.
KATE
(glancing around)
Messy.
SETH
I like that in a woman.
She doesn’t smile.
Seth, giving her back her keys and a piece of paper. His
voice is raw from all the shouting.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 93.
277 CONTINUED: 277
SETH
Top number’s local police --
(as she nods)
-- other two are my office and
home.
(off another nod)
I live alone, too, call anytime.
Want me to get someone to spend
the night?
KATE
I just need some sleep.
SETH
I’ve got surveillance outside.
And I’m keeping it on ’til this is
over. I’ve got a feeling he’s
going to try and contact you.
KATE
You’re on a hot streak, I guess.
SETH
Listen, I’m sorry.
Kate. Nothing to say.
SETH
Anything unusual, call me right
away -- not a bother, I live
alone.
KATE
You said.
SETH
(he knows that)
Feeble, huh?
She nods. They look at each other. Then he starts toward *
the door. Slowly.
KATE
Anything for the road? I’ve got
water and water.
SETH
Deal.
278 INT. KATE’S APARTMENT - KITCHEN - NIGHT 278
They enter and she opens the fridge --
(CONTINUED)
94.
278 CONTINUED: 278
-- and it’s full of food: milk and fruit and cookies.
Kate stares, then quickly glances at Seth. He just
points to a bottle.
SETH
Pelligrino would be great.
(off Kate, who can’t
help it, breaks out
laughing)
What’s funny, I say it wrong?
KATE
Tired is all.
As she hands him a bottle.
279 INT. KATE’S APARTMENT - FRONT DOOR - NIGHT 279
as they move toward it. He opens it.
SETH
I don’t think I’ve told you this,
but I live alone.
(and this time, as she
does smile, and he
does go)
Lock it behind me.
KATE
(LOCKING it loudly)
How’s that?
SETH (O.S.)
Real good. Try and sleep.
His FOOTSTEPS get softer, DISAPPEAR.
KATE
(still facing door,
her back to her
apartment)
I betrayed you, Luther. You
better know that now.
LUTHER (O.S.)
You’re not the first.
As Kate turns, Luther, standing there, is looking at her.
KATE
Why’d you come?
(CONTINUED)
95.
279 CONTINUED: 279
LUTHER
You have to know I’m not a
murderer.
KATE
No, this afternoon. To the
restaurant. Why’d you come then?
You must have suspected something,
or you wouldn’t have been
prepared.
LUTHER
(simply)
My daughter wanted to see me.
He points to the couch -- as Kate sits. Luther, and
before she’s even seated, he’s into it.
LUTHER
The robbery went fine ’til they
came in. They were drunk. I hid
in the vault. Sex got rough. He
was going to kill Christy, but she
turned the tables, was going to
kill him. Two guys came in, shot
her dead.
KATE
The same two guys who tried for
you this afternoon?
LUTHER
Probably only one of them. I
think Walter Sullivan might have
hired the other.
KATE
Pretty powerful enemy; good going.
LUTHER
Not as powerful as the President
of the United States.
Kate just looks at him.
Dead silence.
LUTHER
Richmond was drunk. The two guys
are Secret Service. Chief of
Staff Russell planned the coverup.
Kate just looks at him.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 96.
279 CONTINUED: (2) 279
Dead silence.
Luther. Studying her. Not a great reaction.
Kate. Little shake of the head.
LUTHER
Every word true.
KATE
You’re saying you’re innocent of
the murder? Why in the world *
should I believe you?
CLOSEUP - LUTHER *
Long pause.
LUTHER
Because I swear on Mattie’s grave.
KATE *
Rocked --
Luther, going to her.
LUTHER
On your mother’s grave, Kate -- you know I’d kill myself before
I’d lie about that.
Kate. Looking at him. Because he wouldn’t lie, not
about that.
Everything he’s told her, all true.
The air goes out of her.
Silence.
KATE
(soft)
Jesus, Luther.
LUTHER
I know.
KATE
They’ll kill you.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 97.
279 CONTINUED: (3) 279
LUTHER
I know.
KATE
Can you run?
Luther as he sits beside her on the couch.
LUTHER
I was set to. At the airport.
All the money I’d ever need.
CLOSEUP - LUTHER *
LUTHER
But I saw that bastard using *
Sullivan on the T.V. -- maybe I
couldn’t have saved that woman,
Kate. But I didn’t even try. (beat)
I know what you think of me and I
know what we’ve been to each
other --
(beat)
-- haven’t been to each other.
And it’s not the time to try and
explain my life --
KATE *
watching his face now.
LUTHER
-- but I’ve never robbed anyone
couldn’t afford it and I’ve never
stiffed a waitress.
(beat)
And Alan Richmond has to pay.
KATE
What can you do?
LUTHER
Not much, maybe -- but I only went
to jail when I had partners.
(beat)
People betray each other, Kate --
nowadays, when there’s a group,
someone wants to write a book --
(MORE)
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 98.
279 CONTINUED: (4) 279
LUTHER (CONT’D)
(beat)
-- these people hate each other.
And if I can drive them just a
little bit nuts, who knows how
they’ll react under pressure?
(rises and looks at
her)
Glad for the talk, wish we’d had
more.
Luther crosses to the door, turns.
LUTHER
This is probably it; you
understand that.
(as she does, he still
looks at her. Then -- )
I was never going to tell you
this, but I watched you argue a
case last year -- thank God you
got your brains from your mother.
Kate standing now, too -- they’re across the room from
each other.
KATE
It’s dangerous outside.
LUTHER
It always is --
(beat)
-- and I may not make you proud,
Kate --
(soft)
-- but I’m not going down alone...
And on that...
280 EXT. RUSSELL APARTMENT BUILDING - DAY 280
An elegant high-rise in Washington. Crisp, cool
afternoon. A DOORMAN stands outside, enjoying the day.
A well-dressed man rounds the corner; he holds a small,
beautifully-wrapped package with a small envelope
attached. He moves to the Doorman.
(CONTINUED)
99.
280 CONTINUED: 280
WELL-DRESSED MAN
(it’s Luther)
For Miss Gloria Russell.
He hands it over.
DOORMAN
(taking it)
Want me to sign anything?
LUTHER
(shakes head)
I trust you.
And he turns, walks quickly away as we --
281 INT. RUSSELL’S APARTMENT - DAY 281
The envelope being opened. It’s early evening now. The
message inside is short and clear --
"Gloria,
Thanks for the rescue.
AR"
Russell smiles, and as she opens the package --
282 INT. WHITE HOUSE - EAST ROOM - NIGHT 282
A beautiful necklace. Antique mostly likely. And
tasteful -- we hear the sound of an ORCHESTRA PLAYING
WALTZES.
PULL BACK to reveal Gloria Russell, looking just
splendid, the necklace around her throat, entering a
large and very impressive White House dinner-dance.
Clearly an important affair of state.
We’ve never seen Russell quite like this -- relaxed,
secure in her femininity. She nods distantly to Burton
and Collin who are, as always, close the President. For
the first time now, we realize something: Gloria Russell
is hot for Alan Richmond.
Richmond, on the edge of the dance floor, chatting with
some elderly couples, several of them European, all of
them wealthy.
RICHMOND
(as Russell approaches)
You’re a vision this evening, Miss
Russell.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 100.
282 CONTINUED: 282
RUSSELL
Thank you, Mr. President.
(beat)
And thank you, Mr. President.
RICHMOND
(doesn’t understand)
For?
(off her, radiant,
indicating the
necklace)
Come again?
This time she touches it -- he bends close to her.
RUSSELL
(whispering)
You sent it to me this afternoon.
Long pause -- then...
CLOSEUP - RICHMOND *
So happy.
RICHMOND
Well, of course. (now, to the others)
Excuse me, all -- I am overcome
with the desire to dance with my
Chief of Staff. * A hand to her -- Russell, beaming, moves out onto the
dance floor with him.
Everyone at the gathering, watching them.
Richmond and Russell, very much aware that all eyes are
on them --
-- what we don’t know is this: they are both wonderful
dancers. And they seem to be reveling in their moves --
-- because throughout this, they never stop smiling.
RICHMOND
What is this nonsense? I’m hoping
there’s an explanation.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 101.
282 CONTINUED: (2) 282
RUSSELL
(surprised)
Your gift, Alan -- I was
overwhelmed -- and your note was
so gratifying --
RICHMOND
(cutting in)
-- I sent a note?
RUSSELL
Yes, yes, you think I don’t know
your writing? I assumed you
wanted me to wear it tonight.
The necklace. He looks at it as they spin gracefully.
RICHMOND
It is lovely, Gloria -- and you
know what else?
They do a perfect dip.
RUSSELL
What, Alan?
RICHMOND
Christy Sullivan wore it the night *
she was killed. *
Russell, a quick glint of panic, a gentle peal of
feminine laughter.
Richmond and Russell -- he bends her back, their mouths
are close.
RICHMOND
You realize what this means?
Whitney’s been heard from.
CLOSEUP - RUSSELL *
They spin and glide. Long pause. Then --
RUSSELL
It’s not precisely the first time,
Mr. President.
*
The MUSIC is BUILDING TO CLIMAX now. Their movements
become more grand.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 102.
282 CONTINUED: (3) 282 *
RICHMOND
(so happy)
You’ve been keeping things from
me?
RUSSELL
Only because you have so much on
your plate, Alan; we wanted to
spare you.
(beat)
He sent me a Polaroid of the
letter opener yesterday.
CLOSEUP - RICHMOND *
A kick in the teeth --
-- he summons all his control, goes into even more
complicated movements.
*
The crowd of elegant men and women, it’s really wonderful
dancing they’re seeing -- they start to applaud.
Richmond and Russell, hearing the sound. Richmond
acknowledges it with a smile as they come to climax.
RICHMOND
Well, now --
(a final flourish)
-- I need time to think -- come
see me in my office in the
morning --
(beat)
This will certainly make for an
interesting chapter in my memoirs.
And as they bow...
The crowd applauding louder, while on the dance floor,
the President of the United States and the Chief of Staff
applaud happily back. As the sound builds --
283 EXT. BURTON’S HOUSE - ROOF - NIGHT 283
Luther in the night. Silence.
He is moving across the rooftop of a home. He carries a
briefcase -- Luther’s making business calls.
Ahead is an attic window -- as he slides it open --
103.
284 INT. BURTON’S HOUSE - ATTIC - NIGHT 284
Luther, slipping inside. Some stairs are just across.
He goes down them, opens the door --
285 INT. BURTON’S HOUSE - HALLWAY - NIGHT 285
Luther stepping into the main part of the dark house. He
stops. No noise at all except that of someone BREATHING
DEEPLY, coming from an open bedroom door.
Luther passes by -- for an instant we can see that Burton
is asleep, an empty bottle by his head.
286 INT. COLLIN’S HOUSE - NIGHT 286
Luther rounding a corner --
-- and we can tell immediately he’s in a different house
now. Burton’s had only old furnishings, these are modern
and new.
Luther pauses, listening. Nothing.
He moves forward then, turns another corner --
287 INT. RUSSELL’S APARTMENT - NIGHT 287
-- and now we can tell he’s someplace else -- this is an
apartment with a large window looking out on the city.
Luther doesn’t stop to admire the view. He moves
silently on...
HOLD ON the window.
And suddenly: Dawn -- the sun is starting to rise.
PULL BACK to reveal --
288 INT. RUSSELL’S APARTMENT - BEDROOM - DAWN 288
Gloria Russell, as the ALARM GOES OFF. She sits --
-- she stretches --
-- then she stares -- something has been taped to her
lamp. We are looking at an issue of the Washington Post
-- Russell’s photo smiles out -- there is a headline that
says simply: RUSSELL TO BE CHIEF OF STAFF.
Written across her picture are the words: "This
shitstorm is your fault -- if we go down, you go down!"
Russell takes the paper down, stares at it. Furious.
104.
289 INT. BURTON’S HOUSE - KITCHEN - MORNING 289
Burton, hung over, staggering into the kitchen of his
home, stopping dead. A newspaper is set beside his
coffee pot.
A front page of the Washington Post. Years back. The
lead article reports that a siege has been successfully
broken --
-- Burton, bloody and wounded, is being carried to an
ambulance. A hero. Across the top these words have been
written:
HOW DID THIS HAPPEN, YOU GUTLESS FUCK?
Burton stares. Steaming.
290 INT. COLLIN’S HOUSE - BATHROOM - MORNING 290
Collin, yawning, going into his bathroom --
-- across his mirror is taped a large white piece of
paper, across which is written in thick black marker --
"If you could shoot for shit, we’d be out of this."
Collin angrily rips it down.
291 EXT. DOWNTOWN NEWSSTAND - MORNING 291
A bunch of commuters and businessmen are buying papers.
The newspapers. Washington, New York, Philadelphia --
and they’re all different front pages, of course, but one
photo in all of them is the same --
-- every one of them is running the mug shot of Luther. And the sense of the stories is the same too:
HAVE YOU SEEN THIS MAN?
CUT TO:
292 COMMUTERS 292
crowded around, making their purchases. Some of them are
young, some of them are half asleep. One of them is in
his 60’s and very wide awake --
-- it’s Luther --
-- as he buys a paper, looks at the headline --
fascinated.
105.
292A INT. BURTON’S OFFICE 292A
Still early morning -- Collin is going through Burton’s
desk hurriedly --
-- when Burton surprises him --
BURTON
(pissed)
What are you doing?
COLLIN
(closes the desk,
shrugs)
Needed a pen.
BURTON
(pointing to his
desktop)
There’s pens --
(moving in)
-- you don’t trust me? --
COLLIN
(pissed)
-- I don’t answer to you, asshole --
Russell in the doorway now, glaring at them.
RUSSELL
You’re both assholes, now move --
And on that --
293 INT. OVAL OFFICE - DAY 293
The note that was sent to Russell and the Polaroid of the
letter opener.
PULL BACK to reveal --
The Polaroid and the note are on Richmond’s desk. He
studies them. Russell, Burton and Collin stand silently
watching him, their hatred of each other clear.
The smell of death’s in the room.
RICHMOND
(holding the note now,
his voice is, when he
speaks, calm; to Burton)
Any idea who could have forged it?
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 106.
293 CONTINUED: 293
BURTON
I talked to Seth Frank --
apparently Whitney learned how in
prison.
RICHMOND
Very gifted man.
The window as he walks to it, looks out.
RICHMOND
And are we close to stopping him?
RUSSELL
We’re working round the clock.
RICHMOND
Good to know that.
BURTON
He’ll make a mistake.
RICHMOND
Good to know that too.
CLOSEUP - RICHMOND *
With more meaning than the words convey --
RICHMOND
There is one other thing you’ll
want to take care of.
The other three, looking at Richmond.
BURTON
You’re sure you want to do that?
RICHMOND
(nods)
She’s a young prosecutor,
prosecutors ask questions -- she
might know what he knows...
(a reassuring smile)
Let’s get cracking, shall we?
(beat)
Show you love your country.
On those words --
107.
294 INT. KATE’S APARTMENT BUILDING HALLWAY - DAY 294
Kate Whitney, getting into the elevator. Off to work.
She pushes for the lobby.
The doors close and the elevator starts down.
295 INT. ELEVATOR - DAY 295
Kate checks her purse to see if she has everything.
296 INSERT - ELEVATOR BUTTON 296
The "L" is lit --
-- but when the elevator gets there, it does not stop but
goes straight on down to the basement.
297 INT. ELEVATOR - KATE - DAY 297
That’s strange. She instinctively moves to the rear of
the car.
ODD SOUNDS from the basement. Kate’s just the least bit
tense.
298 INT. ELEVATOR IN BASEMENT - DAY 298
The ODD SOUNDS are LOUDER.
And the doors don’t open when they should.
299 INT. ELEVATOR - KATE - DAY 299
and now she’s starting to get a little scared.
300 INT. BASEMENT - ELEVATOR DOORS - DAY 300
The doors sliding open and the Super standing there with
tools.
SUPER
(smiling)
Sorry, Miss Whitney, but this
thing’s giving us a little
trouble.
Kate nods, smiles back, relieved.
)B( ABSOLUTE POWER - Rev. 5/16/96 108.
301 EXT. KATE’S APARTMENT BUILDING - DAY 301
Kate, leaving her building, going toward her car, getting
in.
Down the block is a police car. Two surveillance cops
inside. Kate starts to drive -- and so do they.
Kate turns a corner --
-- and so do they --
-- and as they do, they pass Luther, parked on the
corner. Watching. Satisfied, he drives off in another
direction.
302 EXT. OUTER CITY ROAD (WASHINGTON) - DAY 302
Luther, heading out of the city. The sun is higher in
the sky.
303 EXT. COUNTRY ROAD - DAY 303
Several cars. Traffic is moving slowly. Luther
continues to drive.
304 EXT. KATE’S OFFICE BUILDING - DAY 304
Kate, coming out of her office building, hurrying along
the sidewalk. Lunch hour.
*
She goes past some brownstones -- the two cops walk *
behind --
-- the window of one of the brownstones is open, shadowy
movement from inside --
-- Kate hurries past, not paying attention... Cops don’t
either.
305 EXT. BROWNSTONE - DAY 305
Now a figure begins to appear in the window --
The figure holds something long and thin, like a rifle
barrel --
-- it’s a large woman with a long mop -- as she shakes
it --
Afternoon and the sun is strong.
109.
306 EXT. SULLIVAN MASTER BEDROOM - DAY 306
Sunlight, streaming in an open bedroom window. Whose
bedroom, though?
Two maids are cleaning it --
-- and now we realize where we are: Walter Sullivan’s
bedroom, but it’s all been changed, different rug,
different fabrics, different furnishings.
The maids work silently and well. A final sweep of a
dust rag here, a last tug at the bedspread there.
Done. They go to the door, take a last look around.
Perfect.
They go.
HOLD ON the empty room.
Keep HOLDING.
Now, silently, the vault door opens -- a gardener steps
out, clicker in hand.
The gardener -- it’s Luther -- he clicks it, tosses it
back inside --
-- the door starts to close --
-- but before it shuts, we can see he’s returned what he
took the night of the robbery.
And as he moves silently toward the door.
307 EXT. GAS STATION (WASHINGTON CITY LIMITS) - DAY 307
The outskirts of Washington. Mid-afternoon now.
Luther’s at a pay phone.
308 INT. SETH’S OFFICE - DAY 308
Seth, as he picks up the phone --
LUTHER (V.O.)
Kate okay?
SETH
Where are you?
110.
309 EXT. PAY PHONE - DAY 309
Luther. Fast.
LUTHER
I’m not staying on long enough for
you to track this, just answer me.
310 INT. SETH’S OFFICE - DAY 310
SETH
She couldn’t be in better hands --
talk about catching a break,
Secret Service called me. They’re
taking over surveillance --
311 EXT. PAY PHONE - DAY 311
The telephone swinging back and forth --
-- and in the b.g., a car MOTOR ROARING away.
312 INT. KATE’S APARTMENT BUILDING - ELEVATOR - DAY 312
Kate, coming down the elevator again -- in her jogging
clothes now. She has pushed the lobby button.
The elevator stops suddenly on the second floor --
-- The Super gets in, smiles.
SUPER
Got it working fine, Miss Whitney.
Kate nods, smiles back --
312A EXT. WASHINGTON STREET - DAY 312A
Luther, driving like crazy through the city.
312B EXT. KATE’S APARTMENT BUILDING - DAY 312B
Kate, getting into her car in front of her building,
driving off -- no one is behind her.
312C EXT. WASHINGTON - ANOTHER STREET - DAY 312C
Luther, HONKING his HORN as he barrels around a corner,
scattering traffic.
)B( ABSOLUTE POWER - Rev. 5/16/96 111.
312D EXT. JOGGING PARK ENTRANCE - DAY 312D *
Kate drives into the park past a sign reading: *
"PARKING LOT." *
312E EXT. ROAD NEAR JOGGING PARK - DAY 312E
Luther, gunning along -- up ahead the park is visible
now.
312F EXT. JOGGING PARK - PARKING LOT - ENTRANCE ROAD - DAY 312F
Kate, following an arrow that leads to the parking lot.
Luther, in the park, now, suddenly shouting "Shit" as
we --
312G EXT. JOGGING PARK - PARKING LOT - DAY 312G
A "DETOUR" sign.
Kate, entering the parking lot.
312H EXT. JOGGING PARK - PARKING LOT AREA - DAY 312H
Luther, out of his car now, running like crazy through
the park. Ahead is a sign saying: "JOGGING PATH."
313 EXT. JOGGING PARK - PARKING AREA - DAY 313
Not many other cars so she gets a space in front,
overlooking the river, and as she stops, takes out her
keys --
314 BURTON AND COLLIN 314
Collin at the wheel, ROARING in behind her, rear-ending
her hard.
-- there is a SCREECH of BRAKES and a SCREAM --
314A EXT. JOGGING PARK - TRAIL - DAY 314A
Luther as he hears the terrible sound, keeps running.
315 EXT. PARKING LOT - INT. KATE’S CAR - DAY 315
Kate in her car as it teeters at the edge and then starts
its long fall to the jogging path far below.
)B( ABSOLUTE POWER - Rev. 5/16/96 112.
316 EXT. JOGGING PARK - PARKING AREA - DAY 316
Burton and Collin in their car, driving like hell away.
316A EXT. JOGGING PARK - TRAIL - DAY 316A
Luther, running INTO VIEW, stopping dead, helpless now,
staring at the worst thing in the world --
317 OMITTED 317
318 EXT. JOGGING PARK CLIFF - DAY 318 *
Kate’s car, careening against a rocky ledge, then cart
wheeling the rest of the way down, landing horribly,
spinning, finally coming to rest upside down and --
CUT TO:
319 EXT. BOTTOM OF CLIFF - DAY 319 *
Luther running to the car; hands shaking, he manages to *
pull front door open and reach inside --
-- now there are cries as other joggers stop and stare
and --
Kate, as Luther pulls her body out of the wreckage.
LUTHER
(terrified)
... Kate...?
-- no response -- it’s impossible to tell if she’s
alive --
-- in the distance now, the sound of an AMBULANCE.
320 EXT. WASHINGTON HOSPITAL EMERGENCY ENTRANCE - EVENING 320
The AMBULANCE, SIREN SCREAMING.
PULL BACK to reveal --
Early evening now, getting dark, and the ambulance
braking in front of the emergency room of a large city
hospital --
-- as doctors and attendants with gurneys come pouring
out --
113.
321 INT. WASHINGTON HOSPITAL - KATE’S ROOM - NIGHT 321
A private room. Later. Kate is bandaged and attached to
a bunch of equipment --
-- but however faintly her breathing, it’s still
breathing and it’s steady. She’s alone for the moment in
the semi-darkened room.
322 INT. HOSPITAL CORRIDOR - NIGHT 322
Empty. A doctor comes walking along -- it’s Collin.
323 INT. HOSPITAL - KATE’S ROOM - NIGHT 323
Kate in her room, sleeping. Another doctor is with her
now, checking her charts.
324 INT. HOSPITAL CORRIDOR - NIGHT 324
Collin. He sees what’s going on, stops, pulls out a
small notebook, pretends to read it, all the while
glancing toward Kate’s room with the one doctor still
there --
-- now from around the corner, NOISE, COMING CLOSER --
SEVERAL PEOPLE APPROACHING, perhaps more.
Collin turns away from the sound, curses, then stops --
-- The doctor is done with Kate’s charts.
From around the corner now, the group coming closer
still.
Kate’s doorway as the doctor exits and Collin enters --
they pass each other --
325 INT. HOSPITAL - KATE’S ROOM - NIGHT 325
-- Collin moves a step further into the room --
-- and now there is something in his hand --
-- a hypodermic needle.
Kate. Out of it. Lying there, eyes closed.
Collin, the needle ready, moving silently toward the bed.
Kate is barely breathing.
(CONTINUED)
114.
325 CONTINUED: 325
And now suddenly Collin is barely breathing --
-- because the other doctor’s arms have viced around
Collin’s neck, forcing the air out of him.
Collin, stunned, trying to struggle --
The doctor jerking Collin’s body into the air -- his feet
are dangling now -- the hypodermic needle drops to the
bed as the struggle goes on --
-- and Collin’s in fabulous shape. He’s young and powerful and he’s been in terrible situations before and he
knows how to fight and he’s been taught to defend himself
and --
-- tough shit --
-- the doctor -- it’s Luther -- relentlessly increases
the pressure against Collin’s throat --
-- Collin can’t even gasp now --
-- his feet can’t kick anymore --
-- his body starts to go limp --
-- his eyes start to slide up into his head --
-- silence in the room --
-- it’s almost over --
-- which is when suddenly Luther lets go.
Collin, eyes flickering open as Luther lays him down on
the floor. All this next is whispered.
LUTHER
Scream. Go on. Which do you want
most, for me to kill you or life
in jail forever?
He has gone across the room to the bed. Collin tries to
move, can’t.
The hypodermic needle as Luther picks it up carefully,
starts back to Collin.
LUTHER
Going to guess this wasn’t to pep
her up.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 115.
325 CONTINUED: (2) 325
COLLIN
(staring, eyes wide)
... you’re not going to kill me...
LUTHER
... why do you think that...?
COLLIN
... you could have but you
didn’t...
Luther. Kneeling by Collin now.
LUTHER
That’s because you didn’t know
your crime, prick.
-- and now he jams the needle against Collin’s neck. *
Collin tries to cry out, but Luther covers his mouth.
LUTHER
(kneeling close, almost
whispering into Collin’s
ear)
I didn’t mind you tried to shoot
me at the restaurant -- I wouldn’t
have minded if you’d nailed me at
Sullivan’s -- part of the job --
(beat)
-- but you fucked with blood.
Collin. Terrified. *
COLLIN
... mercy...
Luther, bending over him. Luther pushes the plunger. *
LUTHER
I’m fresh out.
Collin dying now. His breathing is getting strange, his *
body starting to stiffen. And on that -- *
KATE (O.S.)
... Daddy...?
Kate, eyes barely open. From her position Luther is
simply kneeling, nothing else is visible...
LUTHER
... go to sleep, honey...
(CONTINUED)
116.
325 CONTINUED: (3) 325
She tries to stay awake, can’t make it, drifts off.
Kate. She closes her eyes.
Collin. Luther closes his eyes for him. Now --
326 INT. HOSPITAL HALLWAY - NIGHT 326
A gurney with a figure on it being pushed by a doctor.
327 EXT. HOSPITAL - NIGHT 327
A dumpster outside --
-- the gurney is there --
-- the figure isn’t --
-- the sound of a CAR GUNNING into the night and we --
328 INT. SETH’S BATHROOM - NIGHT 328
Seth coming out of the shower. He puts a towel around
him, wipes the steam off the mirror, cries out --
-- Luther is standing there.
LUTHER
I need one answer -- when you
interviewed Walter Sullivan, did
he say why Christy didn’t go to
Barbados?
SETH
(shakes his head)
Just that she changed her mind.
(studying Luther)
You know who did it, don’t you?
LUTHER
So will you -- check your
phones --
SETH
(incredulous)
-- who’d tap a police officer?
No reply -- Luther’s already headed for the door as we --
)B( ABSOLUTE POWER - Rev. 5/16/96 117.
329 EXT. GEORGETOWN MANSION - NIGHT 329
Walter Sullivan, getting into his limousine in front of a
Georgetown mansion. Later in the evening. The car
starts to move. Walter looks frail and very old now.
And somehow smaller.
330 EXT. GEORGETOWN/INT. LIMO - NIGHT 330
Walter huddled in the back seat, as the street lights
illuminate him. He might even be ill. In any case, a
sad figure.
331 EXT. GEORGETOWN - NIGHT 331
The limousine, turning a corner.
332 INT. LIMO - NIGHT 332
Walter. Blinking.
WALTER SULLIVAN
Is this a shortcut, Tommy? *
CHAUFFEUR
(turns; it’s Luther)
I’m your replacement driver for
the evening, sir. Don’t worry,
Tommy’s fine. *
WALTER SULLIVAN
Very unusual -- what do I call
you?
LUTHER
Luther, sir.
WALTER SULLIVAN
And are you familiar with how to
get to my home, Luther?
LUTHER
I know the way, sir -- I’m the man
who robbed you --
Sullivan says nothing; stares unsmiling.
LUTHER
-- and you’re the man who tried to
have me killed --
(CONTINUED)
118.
332 CONTINUED: 332
WALTER SULLIVAN
-- I’m sorry I missed -- I believe
in the Old Testament, sir -- there
is nothing wrong with an eye for
an eye when a terrible deed has
been done.
(ice)
A deed such as yours.
LUTHER
You want to believe that, don’t
you? -- Makes your life a lot
simpler if you believe that, isn’t
that right?
(big now)
What do you think I gain being
here?
Sullivan. Contempt.
WALTER SULLIVAN
Have no idea -- you going to rob
me again? --
LUTHER
I don’t need your money, Mr.
Sullivan. Look in your vault
lately?
WALTER SULLIVAN
(he has)
I’m afraid we’re a little late for
an attempt at leniency.
333 EXT. GEORGETOWN - STREET - NIGHT 333
The CAR. A SCREAMING TURN.
334 INT. LIMO - NIGHT 334
LUTHER
Shit’s coming down tonight, Mr.
Sullivan, do you want to be a
player or not?
(bigger)
Do you want to know what happened,
or not? I saw. Your call.
WALTER SULLIVAN
(beat)
I want to know.
(CONTINUED)
119.
334 CONTINUED: 334
LUTHER
Are you up to hearing about it? --
Do you want to hear how he beat
the shit out of her and tried to
strangle her -- you have enough
left for that? --
WALTER SULLIVAN
(a nod)
-- I could walk through fire --
Luther, fast now.
LUTHER
I was in the chair when they came
in.
(as Sullivan says
nothing)
They were drunk -- at first he
only wanted to bruise her -- she
fought back, he went for the kill
-- she turned the tables. Then he
screamed for help.
Pause.
WALTER SULLIVAN
Who else was in my house?
LUTHER
Secret Service shot her.
WALTER SULLIVAN
(doesn’t like it)
Nonsense.
LUTHER
Gloria Russell handled the cover
up.
WALTER SULLIVAN
Stop this --
LUTHER
-- don’t you want to know who the
man was?
WALTER SULLIVAN
(desperate)
It was you.
LUTHER
We’re too old to bullshit each
other, Mr. Sullivan.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 120.
334 CONTINUED: (2) 334
WALTER SULLIVAN
(big)
Who was it then?
LUTHER
(bigger)
You know!
Sullivan, shaking his head as Luther roars on.
LUTHER
You fucking well do, don’t shake
your head at me -- when you’re
alone at night, when the rage
takes you and you think of what
you’d do to revenge her, on those
nights you put a face to your
enemy.
WALTER SULLIVAN
(coming apart)
Stop the car --
LUTHER
-- we’re going all the way,
Walter --
WALTER SULLIVAN
-- it’s too terrible.
LUTHER
It sure is.
Walter Sullivan. A long, shaky moment, then --
WALTER SULLIVAN
... I know about Alan’s reputation
as a philanderer... but... he
would never dream of betraying
me... I gave him the Presidency.
Luther and Walter as Luther turns a sharp corner and the
WHEELS SCREAM --
LUTHER
(pressing it)
The press conference -- remember?
-- he held you in his arms and
said if only Christy hadn’t gotten
sick she would have been with you *
in Barbados -- *
(MORE)
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 121.
334 CONTINUED: (3) 334
LUTHER (CONT’D)
(bigger)
-- how do you think he knew she
was sick? You didn’t tell
anybody. But he heard it, all
right. He heard it from her.
That night. And I heard every
word --
Walter. For a moment, no reaction. Then he sits back
hard. The air’s out of him. He just breathes quietly.
Then --
WALTER SULLIVAN
That’s not real proof.
Luther. Handing something back.
LUTHER
And this?
Sullivan takes it --
-- it’s the letter opener.
Sullivan leans back, shuts his eyes.
WALTER SULLIVAN
You could have stolen this.
LUTHER
I did steal it. But that isn’t my
blood and those aren’t my prints.
CLOSEUP ON SULLIVAN *
Eyes still shut --
-- and he’s very old and you expect tears --
-- but he didn’t get to be Walter Sullivan by crying --
-- HOLD ON Walter --
-- and this incredible shriek of rage explodes! --
Luther, suddenly stopping the car --
335 EXT. WHITE HOUSE GATE - NIGHT 335
-- and we’re at the rear of the White House. *
122.
336 INT. LIMO - NIGHT 336
Walter. He sits in the back a moment.
Then he gets out.
337 EXT. WHITE HOUSE GATE/EXT. LIMO - NIGHT 337
Luther has gotten out too. They stand close to each
other. They nod. Then Walter starts away.
WALTER SULLIVAN
(turns -- quiet now,
at peace)
I did love her, you know.
And he walks away.
A White House SECURITY GUARD as Walter approaches.
WALTER SULLIVAN
Is he working late? I haven’t an
appointment but I’d like to see
him if I might.
GUARD
You don’t need an appointment, Mr.
Sullivan.
And as he waves him through --
Luther, standing there, watching the old man.
Walter, a final turn back, a nod of the head.
Luther. He nods back, returns to the car, gets in --
-- and now we begin a BLIZZARD OF CUTS.
338 EXT. WASHINGTON STREET/INT. LIMO - NIGHT 338
Luther driving through the night.
339 EXT./INT. NORTH PORTICO ENTRANCE - NIGHT 339
Walter entering the White House proper.
340 INT. WHITE HOUSE - BURTON’S OFFICE - NIGHT 340
Seth, with a bunch of other officers, standing in front
of an office with the name "BILL BURTON" on a plaque --
he opens the door --
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 123.
340 CONTINUED: 340
-- Burton has blown his brains out. A note alongside
reads: "I am so sorry." Alongside the note is a microcassette recorder and a dozen tapes.
341 EXT. WASHINGTON STREET/INT. LIMO - NIGHT 341
Luther. Driving faster.
342 INT. WHITE HOUSE HALLWAY - SECURITY AREA - NIGHT 342
Walter Sullivan approaching a METAL DETECTOR -- he starts
to go through --
-- it GOES OFF --
Walter’s embarrassed. He holds up his wrist, showing his
watch.
The security guards smile, wave him to go ahead.
Walter continues on.
343 INT. LIMO - NIGHT 343
Luther, tense, ROARING along.
344 INT. RUSSELL’S - NIGHT 344 *
Gloria Russell -- Seth is with her -- he cuffs her, leads *
her out --
345 INT. AREA OUTSIDE OVAL OFFICE - NIGHT 345
Walter, by the door of the Oval Office. The letter
opener is tight in his hand now.
The door opens.
Richmond, arms out, comes to embrace him, as he embraced
him at the Press Conference.
346 EXT. HOSPITAL PARKING LOT - NIGHT 346
Luther pulling up into the parking lot of the hospital,
getting out, passing the parking lot attendant who is
listening transfixed to a small radio.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 124.
346 CONTINUED: 346
RADIO ANNOUNCER #1 (V.O.) *
... in the greatest shock to the
nation since the Kennedy
assassination, President Alan
Richmond’s death has rocked...
Luther has moved past now; we can’t hear the radio
anymore.
346A INT. HOSPITAL RECEPTION AREA - NIGHT 346A
Luther enters. A number of people are present, all of
them listening to a large radio, on the desk of the
Information Clerk.
RADIO ANNOUNCER #2 (V.O.) *
... Richmond died violently in the
Oval Office and Walter Sullivan...
Luther has moved past now; we can’t hear the radio
anymore.
347 INT. KATE’S HOSPITAL ROOM - NIGHT 347
She dozes. Luther sits alongside in a chair.
Outside, the moon is high in the sky.
Kate blinks, half opens her eyes, sees Luther.
KATE
... you’re still here...?
LUTHER
Haven’t budged.
She dozes again.
347A INT. HOSPITAL LOUNGE - NIGHT 347A
A coffee machine in a lounge. Empty. But a TELEVISION
SET IS PLAYING SOFTLY.
Luther enters, gets some coffee.
The TV is SHOWING the PRESS CONFERENCE Richmond held. As
we WATCH, Walter Sullivan moves down toward the President
and they embrace.
(CONTINUED)
125.
347A CONTINUED: 347A
Now the Press Conference is over and we are LIVE AT the
FRONT OF the North Portico of the WHITE HOUSE. A ton of
reporters --
-- and Walter Sullivan, in their midst, beckoning for
quiet.
REPORTER #1 (V.O.)
Mister Sullivan, have you no idea
why the President took his own
life?
Luther stops making coffee, looks at the screen.
WALTER SULLIVAN (V.O.)
(voice soft)
I know he’s been feeling the
pressure of office more than ever
lately. We’ve talked about it a
great deal.
REPORTER #2 (V.O.)
But why would he stab himself?
WALTER SULLIVAN (V.O.)
(sadly)
That’s a question that will haunt
me forever. Of course I tried to
stop him --
(beat)
-- Alan was like a son to me...
Luther smiles, takes his coffee, leaves the room as we --
CUT TO:
347B INT. KATE’S HOSPITAL ROOM - NIGHT 347B
Kate sleeping. Seth stands there now. Luther enters
with his coffee. Seth sees him and they both move to the
door and confer silently --
-- Seth indicates Kate.
Luther crosses his fingers.
Seth says something we can’t make out.
Luther nods.
Seth glances a final time at Kate, then leaves them.
Luther moves to Kate, studies her face.
(CONTINUED)
)B( ABSOLUTE POWER - Rev. 5/16/96 126.
347B CONTINUED: 347B
KATE
(eyes still closed)
... was that Seth...?
LUTHER
He was just checking in. When
you’re up to it, he said we might
come over for dinner. He *
mentioned -- *
KATE
(eyes half open)
I know, he lives alone -- *
LUTHER
(smiles)
Watch it now.
He arranges her sheets.
KATE
... you don’t have to fuss...
LUTHER
You were forever catching colds.
She nods, drifts and we --
CUT TO:
348 MOON 348
starting to fall out of the sky now.
349 LUTHER 349
stands by the window, looking out. Soon, dawn. He
stretches, crosses to her.
KATE
... am I going to be all
right?....
LUTHER
(long pause)
We’ll be fine.
Kate nods, drifts.
Luther watches her.
Then he goes to his chair --
(CONTINUED)
127.
349 CONTINUED: 349
-- reaches down --
-- pulls out his sketchbook.
He turns the pages.
Drawings of Kate.
He turns to a new page. Starts drawing her again. He’s
really getting good.
HOLD ON Luther and Kate.
FINAL FADE OUT.
THE END

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
