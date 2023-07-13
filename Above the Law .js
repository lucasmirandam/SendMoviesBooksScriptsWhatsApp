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

Rev. 04/29/87 (Blue)
ABOVE THE LAW
Screenplay by
STEVEN PRESSFIELD and RONALD SHUSETT
and ANDREW DAVIS
Story by
ANDREW DAVIS and STEVEN SEAGAL
FINAL DRAFT
March 27, 1987
WARNER BROS. INC. © 1987
4000 Warner Boulevard WARNER BROS. INC.
Burbank, California 91522 All Rights Reserved
ABOVE THE LAW
FADE IN:
1 TITLES SEQUENCE - MONTAGE WITH SCORE
PHOTOGRAPHIC STILLS show us NICOLA TOSCANI as a city boy in
various growing-up SHOTS, circa 1950's -- with street chums
wearing a Wyatt Earp T-shirt, in a communion suit. Then:
in his first qi, a youngster studying the martial arts; he
grows, we see news clippings of him winning trophies, his
name on contest posters, SHOTS of him in action. Then:
Japan. Nico now in his teens, studying with real masters,
being dumped on his butt, posing smiling beside Japanese
martial artists, then himself as an instructor. Now: a
few military uniforms enter the picture, we see security
clearance documents with Nico's picture and name on them.
Then Nico near draft age with an American friend NELSON
FOX on some kind of training base. TITLES END.
DISSOLVE TO:
2 EXT. JUNGLE - DAY
Blowing through the roof of a dense jungle straight AT
CAMERA, HELICOPTER ROTORS RISE to a DEAFENING PITCH.
SUPER: Viet - Cambodian Border, 1972. Jungle foliage
whips in the fierce downdraft as --
3 "HUEY" GUNSHIP
with US Army markings becomes discernible. The chopper
lowers toward a crude landing zone hacked out of the
wilderness. We GLIMPSE Cambodian troops and several
machine gun positions around the LZ.
4 EXT. JUNGLE - TWO ARMED AMERICANS - DAY
watch from the edge of the landing zone. We recognize Nico
and Fox, now in their twenties, dressed in the nonmilitary
jungle attire that usually marks a CIA "spook."
5 HELICOPTER
touches down. THREE OLDER AMERICANS -- rough-looking, in
their mid-thirties, all carrying some kind of medical bags
-- disembark into the HOWLING ROTOR BLAST. They hit the
ground nimbly, as if they've done it many times before.
6 LEADER OF THREE
wears a khaki cowboy hat and packs a pearl-handled .45.
7 NICO AND FOX
don't know whether to react with laughter or uneasiness.
2.
FOX
You ever see chemical interrogation
before?
Nico's eyes stay on the approaching "cowboy," KURT ZAGON,
for whom he plainly feels an instant animosity.
NICO
These assholes are agency?
8 NICO'S POV
FOLLOWS the medical bag in the cowboy's hand.
9 BACK TO FOX AND NICO
FOX
We're all C.I.A. But these guys are
from a page that ain't on the map.
10 EXT. JUNGLE - LATE AFTERNOON
Nico in the point, leading Fox and the three CIT (Chemical
Interrogation Team) men down an unmarked, twisting trail.
We see from Nico's gait that he is athletic, a born leader
and totally at home in the jungle.
11 TRAIL - LATE AFTERNOON
snakes along a ridge line, high enough to give us a view and
let us know these guys are way out in the boonies.
ZAGON
How long till we're across the border?
NICO
We've been over for the past hour.
The group continues along the ridge.
CUT TO:
12 EXT. JUNGLE - NIGHT
The sky glows from nearby bomb attacks.
13 NICO
listening hard -- and even sniffing the air -- glances back
at Zagon, who stands impatiently, drawing on a cigarette.
ZAGON
What are you looking at, hotshot?
NICO
(indicates cigarette
glow)
Why don't you light a bonfire?
3.
Irritably, Zagon ditches his smoke.
ZAGON
Just drive the taxi, ace.
As the party moves out, Fox flashes Nico a look as if to say,
"Don't fuck with these guys."
14 EXT. CAMBODIAN BASE CAMP - NIGHT
A pocket-fortified position. Armed Cambodian lookouts,
several hooches, radio equipment. Nico leads the party in
through the perimeter. Zagon eyes the layout like he's seen
100 of them. Fox indicates a hooch.
FOX
(to Zagon)
They're in there.
The three CIT men start for the hooch. Nico casts a concerned
glance around at the base camp troops, looking sloppy as hell.
NICO
I don't trust these yo-yo's.
15 FULL SHOT - BASE CAMP
We see Nico moving like a shadow from one defensive position
to another, checking the perimeter. We can vaguely hear him
ROUSTING the Cambodian lookouts, speaking in dialect.
16 DEFENSIVE POSITION - NICO
hears a SOUND, looks back toward the hooch.
17 NICO'S POV - HOOCH
Two Asian prisoners, stripped to the waist, babbling incoherently, are dragged out the back by a pair of Cambodian
guards and hustled off into the darkness. VOICES can be
heard inside the hooch. A single lantern glowing inside
gives the hut a creepy, frightening aspect.
18 BACK TO NICO
He's extremely uneasy about what's about to happen inside the
hooch.
19 INT. HOOCH - CLOSE ON RICKETY CARD TABLE - NIGHT
on which are spread a terrifying array of syringes, drug vials
and surgical instruments. Zagon's hand picks up a hypodermic,
squirt-tests it.
4.
20 TWO ASIAN PRISONERS
are on their knees, shirtless, handcuffed with heavy nylon
tape to a stake driven into the ground in the center of the
hooch. One of the subordinate CIT men moves in, grabs the
first prisoner by the shoulders. Zagon injects the first
prisoner. Instantly the man begins shivering, convulsing.
Zagon watches with professional satisfaction.
ZAGON
That's the nice thing about modern
technology. You don't have to wait
for results.
He moves close to the first prisoner.
ZAGON
(to first prisoner)
Where is it, Charley? You got six tons
of our shit --
The prisoner tries to speak, but he's in such torment all
that comes out is a blood-curdling wail --
21 EXT. BAST CAMP - NICO
hears this horrifying cry. He starts swiftly toward the
hooch --
22 INT. HOOCH - INTERPRETER
has moved as close to Zagon and the first prisoner as a fight
referee to two boxers. The prisoner is convulsing wildly.
Zagon grabs him fiercely by the hair.
ZAGON
Don't you die on me, fucker --
FOX
(from the side)
What the hell's wrong?
ZAGON
(throws the prisoner
down)
This pussy can't hold his liquor.
The first prisoner is plainly in a death spasm.
23 NICO
enters at this point. He takes in the scene quickly, moves
to a spot beside the entrance. Zagon doesn't look at Nico,
but it's plain he is aware of Nico's presence. It is as if
he wants to prove something to this muscular kid -- and prove
it to the others, too.
ABOVE THE LAW - Rev. 4/17/87 5.
24 FIRST PRISONER
dies in agony on the ground.
25 SECOND PRISONER
watches with eyes like flint. He is in his mid-forties,
scarred, missing several fingers. Probably a colonel or
higher, he looks like he's been fighting these round-eyes
since the French in the 50's. He is plainly one tough
customer. The second prisoner meets Zagon's eyes, as if
daring him to use the drugs on him, too. Zagon eyes the
prisoner with barely contained hatred. The prisoner doesn't
back down an inch.
ZAGON
(to second prisoner)
So my little doctor bag doesn't *
scare you, eh? Well I don't need *
it to open your yap. *
Zagon reaches to a scabbard on his Western belt, pulls out a
fearsome serrated blade -- a cross between a bowie knife and
a scalpel. He steps toward the prisoner, displaying the
blade in the lantern light.
26 NICO
watches impassively.
ZAGON (O.S.)
(to prisoner)
Where's our load, you sack of slime?
What did you do with my shit? --
27 ZAGON
punches the prisoner full in the face, holding the knife
handle in his fist to double the force of the blow and to
terrify him with the proximity of the blade. The prisoner
crashes sideways, face bloody --
ZAGON
I'm gonna teach you good. I'm gonna
teach you never to fuck with my
opium --
28 FOX AND TWO CIT MEN
seem to know exactly what this is about.
29 NICO
didn't know, but the new kid on the block is catching on fast.
Nico has difficulty containing his emotion. Zagon stands
over the prisoner, as if daring him to get back up.
6.
The prisoner gets back to his knees, bloody eyes meeting
Zagon's with defiance --
ZAGON
(to prisoner)
You're a hard nigger, aren't you, boy?
You took it from the Chinks... you took
it from the French. You'll be fucked
if some Yankee peckerwood's gonna start
your gums flapping --
Nico watches Zagon move the knife blade closer to the
prisoner.
ZAGON
-- Well, you're gonna chirp for me,
tough guy. You're gonna sing like a
choir --
Nico takes a step toward Zagon.
NICO
What the fuck does this have to do
with military intelligence?
ZAGON
Your orders are 'assist and observe'
cherry --
Zagon turns to face Nico --
FOX
(to Nico)
Back off, partner --
Zagon turns from Nico. He moves close to the second prisoner,
close as a lover, displaying the blade in the lamplight.
ZAGON
(to second prisoner)
I'm gonna start carving at your ankles.
We'll throw your feet in that box right
over there. Then I'm gonna take off
your arms --
One of the CIT men yanks the prisoner's leg forward, clamping
it to the ground with his hands. The prisoner still hasn't
flinched. He seems as locked into this dance of death as
Zagon.
NICO
(can't take
much more)
Fox --
FOX
Shut up, Nico.
7.
ZAGON
You can disappear as easy as this
slope, kid --
Zagon starts for the prisoner. Here comes the blade.
Suddenly -- Nico grabs Zagon's shoulder. Zagon spins with
terrifying quickness, cocking the blade to slash at Nico.
Before Zagon's blow even starts, Nico slams him with a
ferocious elbow shot right under the jaw. Zagon literally
comes off the ground, Nico's blow is so terrific. Zagon drops
in an unconscious heap. In a flash the two other CIT men
move to jump Nico. Smash! The second CIT man is swallowing
his teeth. Fox leaps in the way of the third, shoves Nico
out of the hooch --
30 EXT. HOOCH - NIGHT
Fox wrestles Nico away from the hooch --
FOX
Are you crazy?!!
(as Nico jerks free)
What the fuck's the matter with you?!!!
Nico is shaking with rage and fear. He takes several steps
away from the hooch, then draws up abruptly. Nico pulls his
.45 from his holster, pops the safety, starts back for the
hooch --
FOX
Nico!
NICO
I don't cap him now, he's gonna do me
later.
The last CIT man appears, gun drawn, in the hooch doorway.
Fox grabs Nico, hauls him back again --
FOX
I'll cover this. Get back to the
L.Z. --
(as Nico resists)
-- I'll fix it! Get out! Get the
fuck outa here!
The CIT man calls out to the Cambodian troops, in dialect,
pointing at Nico. The soldiers start toward Nico, as if to
seize him. Fox, too, starts yelling to the troops in dialect,
apparently countermanding the orders of the CIT men. The
troops, confused, hold up for a moment.
FOX
(to Nico)
I'll call for a chopper... get outa
here!
ABOVE THE LAW - Rev. 4/29/87 8.
Nico gives a last look, turns and takes off down the jungle
trail. Fox seems abandoned. The DISTANT BOMBING CONTINUES.
Nico disappears into the darkness.
FADE TO BLACK.
FADE IN ON:
31 CHURCH STEEPLE - DAY
TILT DOWN to reveal St. Elizabeth's, a huge parish church in
an Italian/Latino neighborhood in Chicago. The church looks
festive, we see a few formally-dressed people hurrying in,
then a squad car pulls up. The cops run upstairs as if
they're late --
32 INT. ST. MARY'S - DAY
A baptism in progress. Nico -- 15 years older than when we
last saw him, is standing beside SARA, his lovely wife *
-- watching a 60-ish priest, FATHER GENARRO, finish the
final ritual on Nico's infant son Julian. The priest
straightens the baby's baptismal garment, tugging the cloth
around the little fellow's crotch. Smiles from friends and
relatives clustered proudly around. Several cops, some in
uniform are amongst them. Nico grabs his son from Genarro
with a theatrical protective motion, tugs up the little boy's
garment, kisses him smack on the bare butt. Laughter from
all as Nico holds the lad high and proud. He puts his arm
around Sara. *
33 EXT. NICO'S HOUSE - BACK YARD - DAY
Huge trays of Italian delicacies are carried out into the
sunlight by several "old country"-type women. Wine is
poured from generous carafes. Friends and relatives are
everywhere, laughing and enjoying themselves; apparently
the party has come here straight from the church. Presents
for the new baby are being opened by Nico's wife, Sara, *
and Nico's mother, ROSA.
SARA *
Mama, look at this -- all done by hand.
Sara lifts a cute baby outfit. *
ROSA
Nico had one just like this. Thank
you, Cora.
Cora, an aunt, proudly smiles.
34 NICO
Holding the baby. Realizes that his little son has pooped
in his pants. He turns for help to Sara. *
ABOVE THE LAW - Rev. 4/29/87 9.
NICO
I think we got a little problem here.
SARA *
(winking at the women)
I carried him for the last nine months,
you take him for the next diaper.
Assorted uncles and aunts watch with amusement as Nico tries
awkwardly to deal with the problem.
NICO
(to all)
That's what you get for not marrying a
Sicilian.
Sara lets Nico struggle a moment, then takes over. *
SARA *
My brave husband. He's not afraid of
thieves and muggers, but he's terrified
when his son poops in his pants.
Toscani relatives look on with approval at the happy couple
and their baby.
35 ANOTHER PART OF BACK YARD
Three Chicago cops, LUKICH and HENDERSON in plain clothes
and LIEUTENANT STROZAH in uniform wolf some Italian goodies
while eying the group of celebrating relatives.
LUKICH
(indicates Nico
across the patio)
Toscani holds the record... for havin'
more relatives under federal indictment
than any other cop in Chicago.
36 TWO OF NICO'S UNCLES
BRANCA and LUIGI, who look like they have been on the other
side of a cop's work, are in turn eying Lukich and Henderson
-- plus a cluster of other cops in civvies hovering around
the buffet table like vultures.
BRANCA
Look at these stiff dicks. A free meal
and they come out like flies.
37 STREET OUTSIDE NICO'S HOUSE - DAY
An unmarked police car pulls up. DOLORES JACKSON ("Jax"),
another undercover cop, tall, black, and elegant, enters
the driveway leading to Nico's back yard --
ABOVE THE LAW - Rev. 4/29/87 10.
38 BACK YARD
Jackson enters. She's impeccably dressed and radiates
intelligence. She's greeted warmly by Lukich, Henderson,
Strozah, and a couple of other cops.
STROZAH
I didn't do nothing, Counselor. I'm
clean.
JACKSON
Eight more days, Lieutenant. You
better start preparing your defense.
HENDERSON
Baby, I'm gonna put you on retainer.
LUKICH
You passed the bar? I make it a
point never to pass the bar.
Jackson sees Nico and Sara across the yard, waves and *
starts toward them --
39 BACK TO BRANCA AND LUIGI
Luigi indicates Jackson as she crosses the patio.
LUIGI
Now this cop. She can bust me any
day.
40 NICK, SARA AND ROSA (NICO'S MOTHER) *
Jackson comes up, makes a theatrical appreciation of Nico's
stylish attire, kisses Sara and greets Nico's mom warmly. *
She starts oohing and ahhing over the baby.
41 VARIOUS SHOTS
Young kids playing on the lawn, more guests arriving, Father
Genarro dancing with an elderly matron. We see that Nico's
friends are an electric mix. Cops, art-y types, people of
varied ages and professions.
42 BACK TO JACKSON
Holding the baby.
JACKSON
Look at this little bundle. What a
cupcake!
NICO
You give up being the D.A. and hurry
up and find the right fella, Jax.
You might have time for one of these
yourself.
ABOVE THE LAW - Rev. 4/29/87 10A.
SARA *
Nico, will you let the woman
catch her breath?
43 JAPANESE WOMAN (DR. WATANABE) *
moves in shyly on the fringe of the cluster. While Jackson
and Sara continue their "mom" talk, Nico edges off toward *
Watanabe, shaking her hand with real pleasure. *
NICO
Watanabe! Say hey, Doc.
They begin jabbering in Japanese.
We will meet Watanabe again later. She's a brainy-looking *
woman -- reserved, a bit mysterious -- who talks quietly and *
intensely in Japanese with Nico like they're old friends who
go back a long way.
ABOVE THE LAW - Rev. 4/17/87 11. *
44 EXT. TOSCANI FRONT PORCH - LATER
Branca, Luigi and several other Toscani patriarchs smoke
cigars and sip beer in a cluster. Nico holds Julian.
BRANCA
You're a father now. Are you gonna
take me up on my offer?
NICO
I'm happy, Branca. I like what I do.
Branca glances seriously to the other uncles, then, with a
smile, pats Nico's cheek.
BRANCA
Look at this face! Six-foot-four,
pretty as the statue of David. And
he's a cop!
Branca laughs. From a distance, Watanabe watches, missing
nothing. Across the porch, Lukich and several other cops
observe and try to listen.
BRANCA
This face should be sticking up from
a white shirt. It should be a banker,
a businessman, someone who earns a
decent living for his family!
NICO
We're happy.
LUIGI
Nickels and dimes. Your wife's a
woman with class. What did she run
-- a ballet school...?
NICO
An art gallery.
BRANCA
Same thing. She wants a husband who
carries a briefcase, not a shoulder
holster.
Jackson watches Nico trying to keep his good humor. This
is serious stuff, despite the light tone. Branca's eyes
meet Nico's.
ABOVE THE LAW - Rev. 4/29/87 12.
BRANCA
You wanted to get shot, you got shot.
You wanted to get knifed, you got
knifed. You've had your fun. Basta!
Enough!
UNCLE GUISEPPE
Let your family help you, Nico.
NICO
(lightly)
Uncle Gio, that kind of help I don't
need. I'd rather get shot by someone
I don't know.
Jackson and Lukich crack up. The others follow. For the
moment, the tension is dispelled.
45 INT. NICO'S HOUSE - UPSTAIRS - DAY
Nico comes out of the bedroom, adjusting his shoulder
holster, tugging his jacket over it. He sees his mother
standing near the head of the stairs, just outside
another bedroom door. Concern on her face.
NICO
What are you doing in here, Mama?
Go join the party...
Nico comes down the hall, tucking in his shirt -- stops
to give his mother a squeeze. O.S. from the bedroom:
the sound of QUIET SOBBING. Nico glances in.
46 INT. NURSERY - DAY *
Sara and another woman sit on the bed, comforting a 60-ish *
grandmother Zingaro, who is crying. Nico comes in. He
kneels before MRS. ZINGARO, concerned.
NICO
Mrs. Z.
(tries to be light)
Is this a way to act on the day of
my son's baptism?
The poor woman can't meet Nico's eyes.
SARA *
It's Lucy. She's gone again.
Nico glances from Sara to Rosa. *
Mrs. Zingaro shakes her head, choked with pain. Nico
holds her, looking over her shoulder toward Sara. *
NICO
It's that kid from the bar on Damen?
The one with the drugs?
ABOVE THE LAW - Rev. 4/29/87 13.
Sara doesn't know. Nico does. He comforts Mrs. Zingaro *
another moment, then stands.
NICO
Listen to me, Mrs. Z. Are you
listening?
(as the woman nods
miserably)
I have to go to work now. But
I'll come by tonight. You'll be
at the bakery?
MRS. ZINGARO
Si, Nico.
NICO
We'll talk, okay? We'll find a
way to take care of this.
Nico kisses Mrs. Z. He takes Sara's hand in goodbye, *
starts for the door.
47 EXT. NICO'S HOUSE - DAY
Festivities still in progress. Nico passes through,
nodding, thanking people for coming, taking farewells.
Jackson waits for him, glancing at her watch.
48 INT. UNMARKED CAR - MOVING
Nico is driving. Jackson checks in on the radio.
JACKSON
(into mike)
Unit Ten Tango X-ray. We're up
and clear.
49 EXT. VARIOUS STREETS - UNMARKED CAR
moves into the central city.
50 POV THROUGH CAR WINDOWS - STREETS - MOVING
Bad-looking hombres on stoops, street corners.
NICO (O.S.)
I promised the Lieutenant, I'm
gonna take care of you. Broken
windows and lost kittens for your
last week.
WIDEN SHOT to include Nico and Jackson.
JACKSON
And then you're gonna come visit
me in a nice, clean, air conditioned
office --
ABOVE THE LAW - Rev. 4/29/87 14.
51 EXT. STREET - BUCKSHOT'S LIQUORS - DAY *
The unmarked car pulls up outside a liquor store and bar.
52 INT. UNMARKED CAR
as it parks. Jackson gives Nico a look: "What are we
stopping at this dive for"?
NICO
I gotta take a quick leak. Stay
put.
He gets out of the car, starts for the bar.
53 INT. BUCKSHOT'S LIQUORS - DAY *
Dim, smoke-choked, dangerous characters at the bar. Nico
enters.
ABOVE THE LAW - Rev. 4/17/87 15.
His silk shirt and sport coat clash with the druggy, workingclass attire of the bar's denizens. Hard faces check him out
subtly, ignore him. Nico approaches the bartender, shows a
photograph. The bartender (BAD DUDE) shakes his head.
BAD DUDE *
Why the fuck don't you assholes *
leave me alone? *
He continues mouthing off to Nico. Nico moves to one stool, *
then another; the same exchange is repeated.
54 FAVOR ONE PARTICULARLY TOUGH CUSTOMER *
A hulking bruiser with an earring. He watches as --
55 NICO
approaches him. Three ARMY JACKETS look up sullenly.
Beefy arms, tattoos, greasy mustaches.
NICO
Gentlemen.
One Jacket treats him like he doesn't exist, and begins
to pick his nose.
FIRST ARMY JACKET
(to others)
I thought this was a kosher bar.
They didn't allow no pork in here.
The two others snicker, then so does the rest of the bar.
Nico holds out a photo of a young girl (Lucy).
NICO
You seen this girl?
SECOND ARMY JACKET
I seen the top of her head.
NICO
That's witty.
ABOVE THE LAW - Rev. 4/17/87 15A.
Nico takes a step away, as if moving on to the next
stool. From behind the bar, the bartender swings a *
sawed-off baseball bat into view. Other bodies move *
ominously toward Nico. Suddenly he spins and, in a move *
almost too quick to see, he kicks the entire stool right
out of its floor socket. Beer bottles fly, bodies crash.
Nico slams the First Jacket in the face so hard it looks
like his nose has exploded. Blood sprays onto Nico's silk
shirt. He hauls the Second Jacket upright, nails him with
a shot that crushes three ribs. A savage elbow blasts the
third, head over heels, out over the bar and careening
into the sink. In three seconds 600 pounds of fat has
been put in cold storage. The rest of the bar is on its
feet. Four huge men confront Nico. Now five. Six.
Seven. Nico's jacket and shirt are ripped, blood spattered; his eyes are like an animal's, daring the men --
NICO
Come on. Show me something.
No one moves.
ABOVE THE LAW - Rev. 4/17/87 16. *
NICO
I get it. It's a gay bar. Is
that it?
The men, led by the Bad Dude, are shifting to surround
Nico. But no one attacks. Nico has Lucy's photo in his
hand. He jams it in one man's face, then another's, slapping each one violently, spitting, raging for them to attack.
NICO
You seen the top of her head, huh?
Like I seen your mother's --
(to another guy)
Or was it yours?
(to a third)
Or yours?
(slaps him ferociously)
I couldn't tell, it looked like
her ass --
Nico rages like a beast.
NICO
Come on, motherfuckers. Do it.
Do it! One man --
Nico lunges for the Bad Dude, grabs him like he's about
to tear his face off --
BAD DUDE
Upstairs!
(in terror)
She's upstairs! 4-D!
Nico drags the Dude from behind the bar. Holding him,
Nico turns, glowering, to all.
NICO
You cocksuckers are brave enough
with 14-year-old girls.
55A INT. FLOPHOUSE HALLWAY
Nico throws Bad Dude down the hallway in front of him.
56 INT. FOURTH-FLOOR APARTMENT - DAY
The door bursts in from a jackhammer kick. Nico stands
in the hallway. Bad Dude stands next to him; hurt,
shaking.
NICO
(to Bad Dude)
Get outta here.
We look in the apartment.
ABOVE THE LAW - Rev. 4/17/87 16A.
REVERSE - NICO'S POV *
A young PIMP -- quite handsome in a boyish way -- stares up
in panic from a grimy mattress on the floor. Little LUCY
is in bra and panties, strung out, 14 and beautiful.
Syringes and free-base paraphernalia are on a table.
NICO IN DOORWAY *
NICO
(to Pimp)
This ain't your day, kid.
Nico comes in, eyes taking in everything.
ABOVE THE LAW - Rev. 4/17/87 17.
PIMP
Wait, man. It ain't like it
looks --
Nico grabs the Pimp by the scruff of the neck, lifting him
bodily. Lucy starts wailing in horror. Nico smashes the
Pimp's face down into a mirror with white powder on the
table --
NICO
That's two years.
He jerks the Pimp back, rips open a drawer. More pills
and glacene bags.
NICO
That's four.
(twisting the Pimp's
neck toward Lucy)
She'll get you eight more. And
I'm just warming up --
Lucy is crying hysterically. Nico flings the Pimp, face *
bloody, toward the open door. *
PIMP
(to Nico, indicating drugs)
Take it, baby. It's all yours --
NICO
Get your clothes on, Lucy.
PIMP
There's money. Three grand in the
mattress...
(begging)
... I can get ya more --
QUICK CUTAWAY TO:
57 EXT. STREET OUTSIDE - JACKSON
Three young STUDS have ambled to the window of her parked
car.
STUD
Hey, sister, what it be?
With infinite boredom, Jackson lifts her badge -- and
gun. The Studs shuffle away.
58 INT. HALLWAY - DAY
Other tenants stare from doorways as Nico drags the Pimp *
to the top of the flight of stairs, threatening to throw *
him down. *
ABOVE THE LAW - Rev. 4/17/87 17A.
NICO *
Don't you fuckin' move. *
Nico steps back into the apartment, hauls out Lucy in *
a dressing gown.
ABOVE THE LAW - Rev. 4/17/87 18.
59 TOP OF LANDING *
The Pimp is dazed, bloody. Nico comes down with Lucy,
hauls the Pimp to his feet --
LUCY
Let him alone! He's beautiful!
NICO
Not when I get through with him.
Nico lifts the Pimp by the throat, pins him to the wall.
PIMP
No, man, wait! I'll give you
something! Something big!
LUCY
Please, Nico! Don't!
PIMP
It's huge! I swear it! A
shipment... coming in next
Tuesday --
NICO
Shipment, my ass.
PIMP
This is square! On my mother's
soul! You can't send me up --
Nico glances to Lucy. Half of him wants to tear the
Pimp apart, the other half doesn't want to make the poor
girl's life any more tragic. Besides, he's a good cop
-- and maybe this "shipment" is on the level.
PIMP
I heard it from a hooker friend
of mine. She's banging some big
coke lawyer, he told her. I swear
to Jesus!
Nico relents -- a little.
NICO
What lawyer?
PIMP
I don't know.
(sees Nico doesn't
believe him)
That platinum chola... Carla
DeCarlo... she knows.
Nico tightens his grip on the Pimp's throat.
ABOVE THE LAW - Rev. 4/17/87 19. *
PIMP
She got popped this afternoon.
She's downtown. Red dress, lizard
shoes --
60 EXT. STREET OUTSIDE BAR - DAY
Jackson looks up from the car to see Nico -- wild-haired,
shirt ripped and bloody -- emerging from the adjacent
apartment stoop, leading young Lucy, who's tear-streaked,
wearing a torn dressing gown. Instantly, Jackson is out
of the car, moving to Lucy.
JACKSON
It's okay, girl. Mama Jax is
here.
She wraps an arm around Lucy, helps her toward the car.
JACKSON
(to Nico)
That was some leak you took.
From the door of the bar, several bloodied heads peek.
JACKSON
Broken windows and lost pussy cats,
huh.
Jackson checks out her battered partner.
JACKSON
You're one crazy bastard, Toscani.
Nico opens the rear door, helps Jackson ease Lucy in.
NICO
We'll get her some clothes and a
bath. I'm not bringing her home
to her grandmother like this.
DISSOLVE TO:
61 OMITTED
&
62
63 EXT. ZINGARO BAKERY - DAY
From the front seat of Nico's car emerges a tearful Lucy,
in fresh clothes and looking miserably contrite. Nico
walks her inside.
ABOVE THE LAW - Rev. 4/17/87 20. *
The Zingaro family is busy preparing for the night's baking.
Grandpa and Grandma Zingaro leave their work and receive
their waif-like granddaughter. With eyes watering they
thank Nico. They disappear upstairs with Lucy. Jackson,
standing in the doorway, has seen all this.
64 INT. UNMARKED CAR - MOVING - DAY
Nico at the wheel has just pulled away from the bakery.
Jackson, in the passenger seat, studies her partner for a
few moments, shaking her head at the contradictions in this
man. Educated, classy, an elegant dresser -- yet underneath
an out-and-out wild man.
JACKSON
I don't get you, Toscani.
(beat)
What the hell are you doing being a
shitheel cop? With your background?
For a long moment Nico says nothing. Then, quietly, looking straight ahead:
NICO
When I was overseas, I saw some
things. Things that eat your guts
out. Things that stay in front of
your eyes like they were burned in
and branded.
He turns to Jackson.
NICO
You can walk away from them, Jax.
You can quit, but you know it's
still going on. You try something
anyway --
(smiles a moment)
-- I know I'm not going to change
the world. I can't stop the tonnage
coming in, I can't fight the boys
behind the desks pushing their
buttons --
ANGLE INCLUDING MEAN STREETS OUTSIDE
NICO
But maybe here, huh?
(indicates street)
Maybe in my own city, my own
neighborhood, on my own block --
maybe here I can do something.
He turns a corner.
NICO
That's why I'm a shitheel cop.
ABOVE THE LAW - Rev. 4/17/87 20A. *
64A INT. POLICE STATION - DAY
Behind the desk, a few detectives man the phones. A Latin
attorney, ABANDANO, is at the counter.
COP (O.S.)
You can see your client. As soon
as she's through eating her dinner.
65 INT. POLICE LOCKUP - "CAGE" AND HALLWAY - EVENING
Hookers, female addicts, etc. in the downtown "cage."
Nico has the girl in the red dress and lizard shoes
(CARLA DECARLO) out in the hallway adjacent to the lockup. Nico is Mr. Charm, offering her a heart-shaped box
of chocolates.
NICO
Carla... Carla -- I just want the
name of your boyfriend --
CARLA
I got 200 boyfriends.
The hooker, Carla DeCarlo, slaps the box away, cursing in
Spanish.
21.
CARLA
Pinchi cabron, cabeza colon!
Some of the chocolates tumble onto the lockup floor, the
detainees snap them up, start munching. The girl continues to spit curses at Nico, gesturing with her hands
with Latin flamboyance. Nico grabs her by the elbow, as
a jailer opens the lockup door. More curses are being
flung at Nico from various females in the cage. Nico
heaves Carla in among them. Carla flops down on a bench
next to a tall black hooker. MOVE IN ON the black hooker.
It's Nico's partner, Jackson, dolled up like a streetwalker, playing her undercover role to the hilt.
JACKSON
(to Nico)
Why can't you sons-a-bitches ever
treat someone with a little
respect?
NICO
(walking away)
Take it easy, sister.
JACKSON
I ain't your goddamn sister. We
ain't got the same mother,
motherfucka.
Carla fires one final parting salvo of obscenities, then
sags back among the women. Carla starts to cry. Jackson
comforts her; Carla responds, lets herself be comforted.
CUT TO:
66 EXT. DOWNTOWN - FINANCIAL DISTRICT - DAY
Jackson, back in her normal daytime wear, exits a
building. She gets into Nico's car.
67 INT. CAR - DAY
Jackson checks her makeup in the rearview mirror. Nico
sits behind the wheel. The two are on some kind of
stakeout.
JACKSON
The lawyer's name is Abandano.
He's on the third floor. I got a
look at him. I couldn't get how
he's connected, but according to
Carla, he's a lousy lay.
NICO
Maybe we can bust him for that.
Jackson spots something, gestures subtly out window --
ABOVE THE LAW - Rev. 4/17/87 22.
68 EXT. DOWNTOWN BUILDING - DAY
A short, slick-looking Latin man in a business suit emerges
from the building.
JACKSON
That's our stud.
Nico and Jackson leave their car and follow him on foot.
69 EXT. FINANCIAL DISTRICT - BANK - DAY
ABANDANO meets a striking-looking middle-aged woman in front
of a stately financial institution. They go in. Jackson
remains out on the street, while Nico follows the couple in.
70 LATER
Jackson has been waiting, sipping some coffee. Nico
emerges from the bank, signaling to his partner to follow
him. Abandano and the woman exit from the bank's revolving doors and immediately jump into a cab. Nico and
Jackson look at each other and step in front of another
cab. Nico opens the cab door, flips his badge open, then
asks the occupant to leave. Jackson gets in the front
seat next to the protesting cabbie.
71 EXT. FEDERAL BUILDING - DAY
Abandano and the woman are crossing the plaza as Nico and
Jackson run up the block. Near the entrance to the Federal *
Building, a small but vocal group of protestors are *
gathered, carrying signs and chanting slogans. The frus- *
trated cabbie watches them in the background.
72 PLAZA
Jackson and Nico watch Abandano and the woman pass the *
crowd of demonstrators and enter the building. Jackson acts *
indifferent, almost frustrated; Nico keenly senses something.
CUT TO:
73 INT. EXPENSIVE RESTAURANT ("BOGOTA") - DAY *
The main dining room. No customers, just busboys readying
tables for the evening's business. We notice one of the *
busboys is the "pimp" Nico found with Lucy. *
74 BOOTH NEAR BACK HALLWAY
The owner's table. Stacks of dining checks, a cashbox
and calculator, full ashtrays, wine glasses. BAUTISTA
SALVANO, a heavyset, swarthy Venezuelan dressed in a tux
with the collar open, glowers across the table at a muscular, scar-faced Latin busboy -- the kind who looks like
he does more for his boss than clean up the tables. The
busboy (NARDO) is nervous, apologetic --
ABOVE THE LAW - Rev. 4/17/87 23.
SALVANO
(pissed off)
-- I brought you in for your
muscles, Nardo, not your mouth.
NARDO
(scared)
I'm sorry, boss.
SALVANO
Your English is getting good...
You're showing it off. Showing it
off on the street --
NARDO
I keep quiet. I never talk no
more --
Salvano glowers at Nardo like he's about to punch him.
Instead he reaches over, playfully chokes the busboy --
then releases him, as if all is forgiven.
SALVANO
Make yourself useful.
(indicates empty
wine bottle on
table)
Get downstairs, bring me one of
these.
(as Nardo stands,
starts for back
hallway)
Then get back to work.
75 INT. RESTAURANT BASEMENT STOREROOM - LATE AFTERNOON
Nardo enters at the top of the stairs, radiating relief.
He trots down into the empty basement, toward a floor-toceiling wine rack.
NARDO
(to himself)
I thought I was dead, man.
(whistles with
relief)
I thought I was fucking dead.
He crosses to the wine rack. It's dark, hard to see.
He searches for the bottle. Suddenly: a METALLIC sound
behind him. Nardo turns -- CHI CHI TESTAMENTE, a wiry,
pock-faced Latino, stands in the shadows (it is clear he
has been waiting there, hiding) -- holding a small
silencer automatic.
CHI CHI
You were right, cabron. *
ABOVE THE LAW - Rev. 4/17/87 24.
One SHOT between the eyes and Nardo CRASHES backward into
the WINE RACK, eyes wide with shock and bewilderment. Chi
Chi SHOOTS him AGAIN; Nardo drops like a stone. Coolly,
professionally, Chi Chi pumps FOUR more SHOTS into the
prone busboy's head. Chi Chi ejects the clip into his
palm, unscrews the silencer, holsters the gun. Salvano
appears at the top of the stairs. Two busboys are behind
him. One of them is the young pimp. The busboys hurry *
down, the pimp -- scared shitless but playing it macho-cool. *
Salvano comes down the stairs. Chi Chi stands over his work.
SALVANO
(to busboys)
Clean up this mess.
CHI CHI *
Who knows who else is talking -- *
SALVANO *
He was a young fool. *
76 BACK IN UPSTAIRS DINING ROOM
Salvano and Chi Chi emerge from the basement steps and
walk toward their booth.
CHI CHI
We're crazy waiting for this
bullshit 'shipment.' Let me waste
the other fucker now.
Salvano puts a hand on Chi Chi's shoulder.
SALVANO
Be patient. This will be done
the way it was planned.
CUT TO:
77 EXT. BODY AND FENDER SHOP - NIGHT
Rusting cyclone fences surround a mud-lot repair yard in a
dingy industrial section. Young Lation and black workers
finish up for the night; through the dirty, security-barred
office window we can see Chi Chi talking on the phone. The
lawyer, Abandano, is also there.
78 EXT. ALLEY - REAR OF SHOP - NIGHT
Nico finishes connecting a small transmitter which has
been hastily wired to the entering phone line.
79 INT. UNMARKED CAR - NIGHT
Nico and Jackson in the shadows down the street from the
body shop. Nico wears earphones, a small tape recorder
on the seat beside him. Jackson does not look happy.
ABOVE THE LAW - Rev. 4/17/87 25.
JACKSON
Toscani, you're going to have me
doing time.
NICO
Lighten up, Jax. No one's
bringing this into court.
JACKSON
Except against us.
NICO
I don't give a shit how we do it.
I just wanna get there.
Jackson gives Nico a dirty look, but stifles her protest.
JACKSON
I thought you said you were
gonna protect me. Cover my butt.
Be my guardian angel --
Nico hears something through the earphones. Gestures for
silence --
80 ANGLE THROUGH OFFICE WINDOW
Chi Chi listens with increased intensity to something on the
phone. He starts writing it down --
81 BACK TO NICO
In unmarked car. He's writing it down too.
NICO
I got the shipment. *
JACKSON
What? What's he saying?
NICO
(scribbling furiously)
'... Engine block has cleared
customs. Serial number VA-748.
Pick up Tuesday, 3 May as
authorized.'
82 EXT. BODY SHOP - NIGHT
Chi Chi emerges from the office, tucking a scrap
of paper into his pocket. Abandano follows. They get
into a late-model Lincoln which pulls out onto the street. *
83 EXT. STREET - NIGHT
Nico and Jackson's car follows at a discreet distance.
ABOVE THE LAW - Rev. 4/17/87 26.
NICO (V.O.)
Unit Ten Tango X-ray. I need a
vehicle registration I.D.
POLICE RADIO (V.O.)
Go ahead, please.
NICO (V.O.)
'86 Lincoln. Illinois 354 Dog '67. *
84 INT. UNMARKED CAR - MOVING - NIGHT
Jackson picks up Nico's pad to take down the response.
After a moment:
POLICE RADIO (V.O.)
Vehicle registration follows.
Leaseholder: Ramon Testamente,
registered alien. Nation of
origin: Venezuela. Do you wish
criminal record search?
NICO
(into mike)
I want to know when he wipes his *
behind. *
85 SERIES OF SHOTS
As Nico and Jackson tail the Lincoln out of the industrial
zone into a fancier, non-Latin neighborhood. On the sidewalks
we glimpse theatergoers, fashionable white couples out on the
town.
86 LINCOLN
Pulls up to a valet park outside a ton-y restaurant. A
sign says: "BOGOTA." *
87 INT. UNMARKED CAR - MOVING
Nico and Jackson exchange a glance.
JACKSON
Salvano?
NICO
Jackpot.
88 EXT. RESTAURANT - NIGHT
Chi Chi and Abandano get out of their car, a valet takes it,
Chi Chi enters the restaurant.
89 INT. SALVANO'S RESTAURANT - NIGHT
Nico and Jackson enter the main dining room, which we
recognize from the scene with Nardo the busboy.
27.
The place is packed with fashionable people of all races.
A band plays salsa; couples dance. Nico and Jackson pass
easily as a hip "uptown" couple. A pretty Latin HOSTESS
approaches them.
HOSTESS
Two for dinner?
NICO
Two for drinks.
They elbow up to the packed bar, standing. Nico squints
toward the rear dining room.
90 NICO'S POV - DOWN BAR
Looking past numerous patrons, we see Chi Chi whisper
something to a waiter and take a seat at a rear table
(the same "owner's table" where Salvano sat before.)
The waiter hurries off into a back hallway.
91 NICO AND JACKSON - AT BAR
Jackson moves to the salsa beat. A BARMAID approaches.
JACKSON
Gimme something stiff. I need it.
BARMAID
Who doesn't?
Nico's eyes never leave Chi Chi.
92 REAR DINING ROOM
From the back hallway Salvano emerges -- in his tux,
looking prosperous. He sits down beside Chi Chi and
Abandano. A waitress brings two drinks. After a few
words, Chi Chi removes the scrap of paper from his pocket,
hands it to Salvano.
NICO (O.S.)
You'll have your engine block
next Tuesday, boss.
93 BACK TO NICO AND JACKSON
As the Barmaid brings their drinks. Jackson sees her
peaceful week to retirement flying out the window.
JACKSON
Why couldn't it be a week from
Tuesday? I could read about it
in the paper.
Nico grabs her waist, pulls her onto the dance floor, and
does a playful twirl.
ABOVE THE LAW - Rev. 4/17/87 28.
NICO
Cheer up, partner. I'm gonna
make you famous.
94 EXT. WHOLESALE MEAT AREA - DAY *
Track spurs, greasy streets, parked fork lifts.
94A EXT. ROOF - DAY *
Lieutenant Strozah surveys the street traffic. *
95 NICO, JACKSON AND LUKICH
The two men, dressed as meat processors in hard hats and
bloody white coats, rake cattle guts under the eave of a
packing plant. Jackson, dressed like a USDA Inspector and *
carrying a clipboard, inspects a few hanging carcasses.
JACKSON
You missed a few spots, boys.
LUKICH
I'm takin' it home t'a make
kilbasa, boss.
Luke casts an impatient glance across the street to a lot
with four parked meat trucks. We glimpse two "truckers"
keeping low in the shadows of one cab. Down the block a
seemingly empty pickup truck is parked in an alley.
LUKICH
This ain't a bust -- it's a
convention.
NICO
Don't you like company, Luke?
(sarcastic)
We got all the scouts here --
Drug Enforcement Agency, the
Alcohol, Tobacco and Firearms --
WALKIE-TALKIE (V.O.)
Keep this channel clear, Toscani.
We realize Nico, Jackson and Lukich are wired, with mikes
out of sight under their coats. Nico glances to the pickup, near to which three men can be spotted in the alley.
Apparently one of them is the walkie-talkie voice.
NICO
(into mike)
This is our channel, dickhead.
And our collar.
ANOTHER WALKIE-TALKIE (V.O.)
That's enough, all of you! Keep
this channel clear.
ABOVE THE LAW - Rev. 4/17/87 28A.
96 ANGLE ON MEAT PLANT - DAY
Nothing happening.
ABOVE THE LAW - Rev. 4/17/87 29.
97 ANOTHER ANGLE
Dead as hell.
98 NICO, LUKICH AND JACKSON
Bored, pissed off, tired. Suddenly:
99 BATTERED VAN WITH TWO MEN
emerges from a corner, two blocks down. It starts slowly
this way.
1ST WALKIE-TALKIE (V.O.)
All right. Everyone get their
heads outa their ass.
The meat truck men duck down out of sight, the pickup men
back into the shadows. Nico and Lukich keep raking cow
guts. The van passes slowly, checking out the area.
JACKSON
(sarcastic)
'... And so I quit the police
department... got myself a steady
job -- '
The van accelerates slightly, turns a corner, vanishes.
Silence.
LUKICH *
They spotted me. I'm too goodlooking to be a meat slopper. *
1ST WALKIE-TALKIE (V.O.)
Will you hot dogs shut up?
The van returns. On a cross street. Heading behind the
packing plant.
NICO *
(to Lukich) *
You're too ugly.
Now a second car appears. The Lincoln. Behind it is an
ancient station wagon. Both vehicles take a different
cross street, but both heading behind the packing plant.
NICO
(into hidden mike)
Here we go, boys and girls --
(to Jackson)
You stay put. *
As soon as the two vehicles pass out of sight, Nico and
Lukich ditch their rakes, dart into the packing plant.
The meat truck men START their TRUCK.
30.
The pickup men board their vehicle -- Jackson follows Nico
and Luke -- but at a safe distance.
100 INT. PACKING PLANT - DAY
Nico and Lukich sprint in a crouch past the blood runoffs,
meat cutting tables --
101 NICO'S POV - RUNNING
THROUGH the windows at the rear of the plant, we see the
station wagon and the van, pulling up swiftly beside one
another, men getting out --
102 INT. PLANT
Nico and Lukich draw their guns, running full-tilt.
NICO
(into hidden miki)
It's going down now. Move!
103 EXT. REAR OF PACKING PLANT - DAY
The station wagon men heave their rear door open, the
van men start to open their side door. The Lincoln is
stopped at a distance. Suddenly --
104 NICO AND LUKICH
burst from the rear door of the packing plant, guns drawn.
LUKICH
Police!
105 QUICK CUTS - VAN AND STATION WAGON MEN
grab for their weapons --
106 COPS IN MEAT TRUCK AND PICKUP
come highballing around both sides of the packing plant --
107 VAN AND STATION WAGON MEN
OPEN FIRE. There is confusion and mayhem; it's not clear
who's a cop and who's a criminal.
108 NICO AND LUKICH
dive for cover, RETURNING FIRE. The DEA men in one truck
also OPEN UP. One of the van men is hit between the eyes.
MACHINE GUN FIRE rakes the DEA truck; it spins out of
control; flips. Lukich SHOOTS the machine-gunner.
LUKICH
(shouts; points)
Nico! The Lincoln!
31.
109 LINCOLN
starts to PEEL OUT. We glimpse Chi Chi in the driver's
seat, Salvano on the passenger side.
110 NICO
steps in front of the accelerating Lincoln, raises his .45.
111 INT. LINCOLN - DAY
Salvano and Chi Chi dive below the dash and continue
forward. Salvano, in the passenger seat, raises his GUN;
FIRES blindly -- trying to hit Nico.
112 EXT. LINCOLN - DAY
Nico UNLOADS his .45 into the windshield and the firewall.
The Lincoln keeps coming down the narrow alley.
113 NICO
brazenly steps up onto the hood and dives, grabbing onto
the roof.
114 INT. LINCOLN - DAY
Salvano can't believe it. He screams something in
Spanish. He FIRES again, this time through the roof.
115 EXT. LINCOLN - ROOF - DAY
Bullet holes appear. Nico narrowly misses being hit.
116 ANOTHER ANGLE - LINCOLN
Nico reaches over the side of the car and SMASHES the passenger WINDOW with his fist.
117 CLOSEUP - NICO'S HAND
Salvano's face is bashed. Nico's huge hand grabs Salvano's
throat; he won't let go.
118 CLOSEUP - NICO
He hangs on with one hand.
119 CLOSEUP - SALVANO
Nico's fingers now dig into Salvano's larynx; he may never
talk again. He's gagging. Salvano now points the gun at
Chi Chi. Chi Chi makes the decision to stop the car in
order to save his boss.
ABOVE THE LAW - Rev. 4/17/87 32.
120 NICO
leaps off the roof pulling Salvano past the broken glass,
out of the window.
121 SEVERAL POLICE VEHICLES *
SCREECH into the lot. Officers pour out, guns drawn,
surrounding the Lincoln and the other vehicles. Jackson
joins them, weapon in hand.
122 NICO
drags Salvano by the neck across the lot to the van,
slamming the drug dealer up against the van's side.
Lukich, Jackson and Strozah are there, with the DEA cops, *
all covering the other men.
NICO
(to Salvano)
How many kilos you got in there,
Skivuzo?
Salvano couldn't answer if he wanted to. The other cops
look at Nico with awe. Lukich whips the van door open,
yanks a tarp off the cargo.
123 INT. VAN
The engine block sits in a wooden shipping frame, wrapped
with industrial plastic. Nico climbs into the van, rips
the plastic sheeting off, grabs the wood slats of the
shipping frame, tears them off. In the background,
ambulances are arriving to care for the wounded cops
and criminals.
124 CLOSEUP - ENGINE BLOCK
From the cylinder heads emerges a full load, not of drugs,
but of plastique tubes labeled U.S. ARMY C-4 HIGH EXPLOSIVE.
125 LUKICH, JACKSON AND OTHER COPS
react with surprise and shock.
126 NICO
rips open one of tubes and smells it.
127 CLOSE - NICO
Confused; frustrated.
NICO
What kinda fuckin' high is this?
CUT TO:
ABOVE THE LAW - Rev. 4/29/87 33.
128 INT. FBI OFFICE - NIGHT
OPENING ON SALVANO, in a chair, looking bruised and swollen,
and wearing an expression of fuming indignation.
SALVANO
-- I'll tell you what this cop is.
He's a fucking menace!
129 TWO FBI AGENTS (NEELEY AND HALLORAN) *
face Salvano, Chi Chi and the lawyer Abandano (apparently
representing Salvano and Chi Chi). Neeley is on the phone. *
Pictures of Reagan and Meese are prominent on the wall.
SALVANO
You see what he did to me?!
AGENT HALLORAN
Your problem is being handled right
now, Mr. Salv --
SALVANO
Yeah? Well, it shoulda been
handled twelve hours ago. I don't
know who's running this outfit, but
somebody better get his goddamn wires
straight!
AGENT NEELEY *
(into phone)
-- yes, sir... yes, sir, I understand --
SALVANO
That maniac should be wearing a
number, not a badge.
Salvano knows what the call is about. He straightens the
tie beneath his bruised neck, assuming the attitude of a
respectable citizen who has been unjustly wronged.
AGENT NEELEY *
(into phone)
-- count on it, sir. Right.
You'll have our full cooperation.
Neeley hangs up. Glances dubiously to Halloran. Then turns *
grimly to Salvano, Chi Chi and the lawyer Abandano.
AGENT NEELEY *
You're free to go.
130 OMITTED
131 INT. FEDERAL BUILDING - LOBBY - NIGHT *
The hoods and their lawyer smugly walk past a cleaning
woman.
ABOVE THE LAW - Rev. 4/29/87 33A.
132 INT. PRECINCT CAPTAIN'S OFFICE - MORNING
OPENING ON Agent Neeley's face. Composed, clean-cut, but *
intense, wearing a light-colored business suit. PAN TO
Agent Halloran -- the same upright, clean-shaven bureau look.
The two men are seated to one side of LIEUTENANT FRED STROZAH.
133 NICO, JACKSON, LUKICH AND DEA AND ATF MEN
sit and stand in various postures in front of the Lieutenant's
desk.
LIEUTENANT STROZAH
(to Nico, DEA & AIF)
-- This is no reflection on the
work you officers have done. I
feel, and the whole department
feels, extremely proud of your
initiative and gallantry.
That "spare me the horseshit" look on Nico's face. He's
fuming. Strozah sees Nico's bitter expression. It's on
the others' faces too.
LIEUTENANT STROZAH
As all of you are well aware,
possession of these explosives
is a federal offense and under
jurisdiction of the F.B.I.
Nico's eyes meet Lieutenant Strozah's. There's respect
between the two, but it's plainly under a helluva strain.
NICO
Sir. With all respect to our
brothers in the Bureau --
(biting sarcasm;
turns to Neeley) *
-- That's no answer. It's no
answer to why one of the biggest
dealers in the city is out on the
street now, free as a bird!
Agent Neeley stiffens. *
LIEUTENANT STROZAH
Keep it in your pants, Nico.
These men have a job to do, just
like us.
Nico stifles his outrage. The other cops exchange glances
-- upset and angry. Agent Neeley clears his throat. *
AGENT NEELEY *
Lieutenant, I think these officers
are entitled to a fuller
explanation.
(MORE)
ABOVE THE LAW - Rev. 4/29/87 34.
AGENT NEELEY (CONT'D)
They've risked their lives. I
understand one man is in the
hospital.
He speaks to the officers.
AGENT NEELEY *
What I'm about to say doesn't
leave this room. Is that clear?
Assent from everyone.
AGENT NEELEY *
Mr. Salvano has been working for
some time in cooperation with
certain federal agencies.
134 CLOSE - NICO'S FACE
Stunned and furious at this royal fuck-up.
AGENT NEELEY (O.S.) *
I'm not at liberty to divulge
the nature of Mr. Salvano's
involvement -- I just learned of
its existence myself a few hours
ago. But one thing I can tell you --
135 BACK TO AGENT NEELEY *
AGENT NEELEY *
Mr. Salvano's role is crucial to
an extremely sensitive ongoing
investigation. Any further
surveillance, harassment, or
unauthorized operations against
this individual are forbidden.
I must order you gentlemen --
(looking straight at
Nico)
-- with all respect for your work
and your courage, to stand down.
Lukich shakes his head; Nico is devastated. Jackson takes
it all in.
CUT TO:
136 INT. POLICE SQUAD ROOM - MORNING
OPENING CLOSE ON a desk drawer being opened. Aside from
rounds of ammo, notes and an aging eggplant parmigiana
sandwich, there are half a dozen hand-labeled audiocassettes and a small collection of miniaturized bugging
devices. Jackson and Lukich watch Nico take out the
notes, hand them to Lieutenant Strozah.
ABOVE THE LAW - Rev. 4/29/87 35.
LIEUTENANT STROZAH
The tapes too.
NICO
(mocking)
That's my Lawrence Welk
collection!
LIEUTENANT STROZAH
I want everything you got on this
one.
Reluctantly, Nico hands over the tapes. The Lieutenant eyes
the bugs and wires.
LIEUTENANT STROZAH
I know you don't give a shit
about yourself, Toscani.
(a glance to Jax)
But you're gonna put Jackson's
ass in a sling, too, with these
illegal wires.
ABOVE THE LAW - Rev. 4/17/87 35A. *
136A OTHER SIDE OF SQUAD ROOM
Agent Halloran edges up to Jackson, who's grabbing coffee
on the far side of the squad room, and watching from there
as Nico gives Strozah more of a hard time.
AGENT HALLORAN
What's the story on your partner,
Jackson? Did he learn this style
or was he born with a brick up his
ass?
Jackson checks Halloran out. He's black too and, despite
herself, there's a certain rapport.
JACKSON
He has ethics. Unlike certain
others on this case.
Halloran watches the illegal bugs and tapes come out of
Nico's drawer.
AGENT HALLORAN
His 'ethics' are gonna cost him
his badge and his gun.
This "white" talk gives Jackson a pain. She slips into
her jive mode.
JACKSON
You don't wanna catch him without
no gun.
Halloran's look asks why not?
JACKSON
'Cause what he do with his hands...
make bullet holes look pretty.
Across the room, Nico turns over the tapes.
AGENT HALLORAN
He bad?
JACKSON
Bad bad.
ABOVE THE LAW - Rev. 4/29/87 36.
137 INT. PRECINCT HOUSE - STAIRWAY - DAY
Nico and Jackson come down the stairs. Jackson has had
ample excitement for her last week on the force.
JACKSON
Is that enough? Can we do
something normal now -- like
eat lunch?
NICO
Anything you say, Jax. How
about Salvano's?
JACKSON
Let it be, Nico.
138 EXT. PRECINCT HOUSE - DAY
Nico and Jackson's car pulls out into traffic.
139 INT. UNMARKED CAR - PARKED (ALLEY BEHIND SALVANO'S)
Jackson and Nico are eating some fast good. Nico reaches
to his jacket pocket; takes out a cassette.
JACKSON
What... you kept his tape, too?
Nico already has it in the PLAYER. We hear FRAGMENTS
of the telephone tap from the body shop in Spanish and
English. Jackson looks frustrated. Nico listens carefully to what appears to be the taped PHONE CONVERSATION.
NICO
Poetry, ain't it?
140 EXT. REAR SALVANO'S RESTAURANT - DAY (POV FROM CAR)
The pimp (busboy) comes out and dumps a load of garbage.
141 INT. UNMARKED CAR - DAY
Nico and Jackson case the restaurant from down the alley.
142 EXT. REAR SALVANO'S - NICO'S POV - DAY
From the restaurant door, Salvano and Chi Chi emerge.
They get into a black Cadillac and pull out. *
NICO (O.S.)
And now for some dessert.
143 SERIES OF SHOTS
As Nico's car tails Salvano's through various streets.
ABOVE THE LAW - Rev. 4/29/87 37.
144 EXT. OAK STREET
Salvano comes out of a fancy flower shop with a bimbo on
his arm. He kisses her goodbye and puts her in a cab.
NICO (O.S.)
And that must be Mrs. Sal. So nice
to see married couples still in love.
144A NICO AND JACKSON
are hidden, waiting.
144B CHI CHI
emerges from a dry cleaner's with a suit on a hanger. *
145 EXT. ST. ELIZABETH'S PARISH CHURCH - DAY
Salvano's Caddy pulls up outside the same church where we *
saw Nico's son get baptized. Salvano and Chi Chi get out,
look both ways up and down the street. Salvano, holding *
flowers, makes eye contact with a car down the block. *
146 EXT. STREET UP BLOCK FROM CHURCH - DAY
Nico's car backs out of sight around the corner.
147 SIDEWALK IN FRONT OF CHURCH
Salvano and Chi Chi, seeing nothing, enter the church.
148 INT. CHURCH - DAY
A smattering of older women and men praying. Salvano and
Chi Chi stop at the head of the aisle, genuflect to the
altar, move in, take seats toward the front.
149 BACK OF CHURCH
Nico and Jackson slip in the front door, glide silently
into the shadows at the rear of the church.
JACKSON
This is your mother's church,
isn't it?
NICO
Yeah. But I bet she's never seen
these boys in the choir.
150 NICO'S POV
Salvano's head is bowed, but Chi Chi is looking around
quite carefully. Nico and Jackson fade into the shadows
behind the huge pillars.
ABOVE THE LAW - Rev. 4/29/87 37A.
151 SALVANO AND CHI CHI
After a few moments, the pair rises. They cross themselves, start out for the front door. As they walk, they
continue to look for something.
152 INT. CHURCH - DAY *
Nico and Jackson emerge into a courtyard which reveals a
day care center and a rectory. They head toward the front
of the building. Jackson, planning on picking up their
tail on Salvano, is stoped by Nico. He wants to stay and
look around.
38.
FATHER GENARRO (O.S.)
Nicola! That can't be you in
church without the family!
Nico turns to see Father Genarro, perspiring in a baggy
sweatshirt, a handball glove on his hand. The courtyard
alongside the church is marked off as an athletic area.
NICO
Father Genarro.
The priest seizes Nico's hand warmly, smiles at Jackson.
FATHER GENARRO
This must be your partner in
crime.
(shakes her hand)
I'm Father Genarro. I saw you at
the baptismal party.
(with a wink to Nico)
What a partner.
JACKSON
Dolores Jackson
(smiling, but
impatient)
Nico, we gotta go --
FATHER GENARRO
No, please --
(more serious now)
It's good you stopped by. I have
to show you something. Please.
The priest begins leading Nico and Jackson. Jackson keeps
glancing back out the alley to see Salvano's car slowly
driving by.
153 INT. CHURCH BASEMENT - DAY
This is an old building. The dark corridors resemble an
underground bunker. Old trophies and furniture are stored
along the walls. The two cops and the priest walk.
Another priest emerges from a door, nods, passes. Nico
and Jackson glance in through the door as they walk.
They reach a door with a broken handle. It looks like a
break-in has taken place.
FATHER GENARRO
The rats are getting bigger.
NICO
When did this happen?
FATHER GENARRO
Two nights ago. I didn't call
the police.
ABOVE THE LAW - Rev. 4/17/87 39. *
Father Genarro knocks on the door, pauses, then knocks
again. The door opens. A twelve-year-old who looks like
he's from Central America stands in the doorway.
FATHER GENARRO
(in Spanish)
It's all right, son. These are
friends.
The boy steps back and we MOVE INTO --
154 INT. CHURCH SANCTUARY - DAY
A largish room, no exposed windows, everything boarded up.
Newly-constructed makeshift toilet and shower in one corner,
various cots. A number of LATIN REFUGEES -- families mostly
-- react shyly as Father Genarro introduces Nico and Jackson.
Sister Bonifacia is there, and a youthful priest, FATHER
TOMASSINO. We will see both of them again.
FATHER GENARRO
(referring to the cops)
These are friends.
(to Nico)
This is Father Tomassino.
FATHER TOMASSINO
How do you do?
Nico shakes the young priest's hand. There is a moment
between them as Nico meets Tomassino's eyes, liking what
he sees. The refugees are relieved, however, when Father
Genarro, Nico and Jackson take their leave.
155 NICO, JACKSON AND FATHER GENARRO
continue down the hall.
JACKSON
I didn't know this church was a
sanctuary, Father.
FATHER GENARRO
Yes. But, perhaps not such a
safe one.
NICO
How long have they been here?
FATHER GENARRO
Too long. At least the kids can
go to our school.
NICO
Who did it, Father?
ABOVE THE LAW - Rev. 4/17/87 39A.
FATHER GENARRO
Kids, maybe.
(significantly)
Maybe worse. It's not the first
time.
JACKSON
We can have a car check by, every
hour.
FATHER GENARRO
No... please. Police frighten
these people.
ABOVE THE LAW - Rev. 4/29/87 40.
156 INT. CHURCH - MAIN AISLE - DAY *
The three are outside, taking their leave. A big smile
and a hand on Father Genarro's shoulder. The priest is
greatly relieved.
NICO
Really, I don't mind coming by.
FATHER GENARRO
Tell me, Nico... When was your
last confession?
NICO
I'm a married man, Father. I've
got no sins to confess.
FATHER GENARRO
You're a police officer, you have
many sins to confess.
JACKSON
Amen.
Nico and Jackson start off.
FATHER GENARRO
(calls after Nico)
You come back Sunday. I feel
better when I see Nicola in
church.
(calls louder)
You don't show, I'm phoning your
mother!
DISSOLVE TO:
157 SAME CHURCH - POV FROM WINDOW - EARLY MORNING (SUNDAY)
HIGH ANGLE FROM ACROSS the street: neighborhood people
dressed in their Sunday best fill the sidewalk, filing in
for Mass. We hear an ORGAN from inside the church.
158 VARIOUS ANGLES - CONGREGATION
An Italian neighborhood becoming more Hispanic. As the
churchgoers file in, we see families -- women, kids,
babies.
159 NICO, SARA, ROSA AND JULIAN *
are among the crowd, exchanging pleasantries with friends
and neighbors -- in English, Italian and Spanish.
160 INT. CHURCH - SIDE AISLE
Sara, holding Julian, slips into a pew. As Nico and Rosa *
follow, Father Genarro passes, heading for the front.
ABOVE THE LAW - Rev. 4/29/87 41.
ROSA
Father Genarro! I have you to thank
for getting my son back into church!
FATHER GENARRO
It's amazing what shame can
accomplish.
Father Genarro smiles and continues on toward the pulpit.
QUICK DISSOLVE TO:
161 VARIOUS SHOTS
A) THE CHOIR
building to the finish of a hymn.
B) NICO'S WIFE (SARA) *
also singing, balancing baby Julian and a hymnbook.
C) NICO AND HIS MOTHER ROSA
sing with full gusto.
D) THE CHOIR MASTER
makes the sign to be seated.
E) CONGREGATION
sits. We notice a young, intellectual-looking man
(Alan Singletary) wearing wire-rim glasses, sitting in
the front row. We will see his face again later. He
looks out of place and glances around, surprised as...
F) FATHER GENARRO
moves into the pulpit, opens his Bible.
FATHER GENARRO
In nomine patris, filius et
spiritu sancti... (etc)
162 SARA AND JULIAN *
The little one starts to CRY; she comforts him. Nico
reaches over to try to help. The BABY continues FUSSING.
Nico looks toward the priest and the front of the church.
He notices a woman in a black shawl rise from the front
of the church and turn, heading down one of the side
aisles.
SARA *
(examines Julian's
diaper)
Way to go, Julian -- perfect timing.
ABOVE THE LAW - Rev. 4/29/87 42.
She cynically smiles at Nico. Nico sees the woman in
black pass toward the exit of the church.
163 CLOSEUP - WOMAN
It is the same woman Nico and Jackson were following with
Abandano, the lawyer!
164 CLOSEUP - LARGE SHOPPING BAG
The woman has left it in front of the votive candles
directly before the priest's pulpit.
165 CLOSEUP - NICO
His head spins from the shopping bag to the doorway --
166 NICO'S POV - DOORWAY
The woman is hastily sneaking out.
167 BACK TO NICO
Instantly he pushes his family to the floor, covering
them with his body.
168 CLOSEUP - NICO - SECOND LATER
BOOM!!! A POWERFUL EXPLOSION erupts between the priest
and his congregation. Fragments of plaster, wood, and
marble come blasting past Nico and his family! Churchgoers
in the first rows are blown off their feet by the shock
wave of the blast. Pews overturn, smoke everywhere --
169 CHOIR
is shrieking hysterically. Stone and plaster dust rain
down on them from the ceiling.
170 CONGREGATION
is in total pandemonium. Screams, cries, panic --
171 PULPIT
has been blown to oblivion. Where Father Genarro had
been standing is now nothing but smoke and rubble.
172 NICO
Prone, covering Sara and the baby, groping frantically *
to protect his mother as well.
SARA *
(clutching baby)
We're okay! We're okay!
Nico checks them and his mother swiftly.
ABOVE THE LAW - Rev. 4/29/87 43.
ROSA
(in Italian)
Help the others! Help them, Nico!
CUT TO:
173 STATUE OF JESUS
Splattered with real blood.
CUT BACK TO:
174 ANGLE ON CONGREGATION
Everyone is down, reeling from the concussion, dust and
smoke. Nico rises alone from this scene.
NICO
(forcefully)
Help each other move outside. Be
calm.
175 EXT. SIDE OF CHURCH - MORNING
From a doorway and a shattered window smoke pours forth.
We hear SCREAMS from inside.
176 INT. CHURCH
Nico on his feet, plainly the leader in this moment of
terror. Worshippers, shattered and bleeding, pour past
him toward the door. Nico grabs a stout-looking churchgoer.
NICO
Call 911. Tell 'em to send
everything they got!
(turns to his wife)
Sara, get the baby and Mama *
outside.
Nico starts for the altar where the damage is worst.
177 EXT. FRONT OF CHURCH - MORNING
The congregation streams out in terror-stricken disarray.
We see Nico's family -- they're all right.
178 NICO
appears from the church, carrying a young choir girl. He
hands the child over to two older women, races back into
the church.
179 LONG SHOT - STREET OUTSIDE CHURCH
The first paramedic van comes speeding around the corner,
SIREN BLARING. Police cars appear right behind --
ABOVE THE LAW - Rev. 4/29/87 44.
180 INT. CHURCH
Nico appears through the backlit smoke and kneels over
the bloodied body of Father Genarro. He desperately tries
to maintain the priest's life.
CUT TO:
181 INT. HOSPITAL/ICU WARD - AFTERNOON
The aftermath of the blast. Doctors and nurses have the
scene more of less under control, but there's still plenty
of pain and misery.
182 INT. HOSPITAL ROOM - AFTERNOON
Nico stands, his back to the wall -- a scary, blank look
on his face. A doctor and several nurses are pulling the
plugs on the terribly mutilated body of Father Genarro.
A nun is crying; a fellow priest is blessing the Father.
183 JACKSON
arrives. Nico talks to her, aside.
NICO
I want a list of everyone that's
been treated here today. Everyone.
JACKSON
Right.
NICO
Then find those sanctuary people,
the ones we saw in the church
basement --
As Jackson makes notes.
NICO
Find out where they're from, why
anyone would want to harm them.
Jackson flips her notepad shut, ready to go.
JACKSON
Where are you gonna be?
NICO
Just stay near a radio. I'll find
you.
184 INT. HOSPITAL CORRIDOR - NICO'S MOTHER (ROSA) - AFTERNOON
Sits on a bench with a bandage over one eye. Sara *
and Julian are sleeping beside her. Nico kneels beside
his mother, deeply concerned. Nico takes his mother's
arm, helps her to her feet.
ABOVE THE LAW - Rev. 4/29/87 45.
Sara wakes and picks up Julian. Mama knows Father Genarro *
has died. She begins sobbing softly. Other members of
the congregation are in the hallway, mourning. Nico, with
his family, takes several steps toward the exit. Suddenly,
Nico stops. He sees Agent Neeley entering (the FBI man who *
ordered him off the case) accompanied by Lieutenant Strozah *
and two uniformed officers.
NICO
Sara... go down to the car; I'll *
be with you in a minute.
He hails Neeley. *
NICO
I need to talk to you.
(a glance to Strozah
and others)
... Alone.
Neeley nods. Nico leads him off the corridor, through a *
fire exit door --
185 STAIRWELL LANDING
The door closes behind them. Nico and the FBI man are
alone on the stairway landing.
AGENT NEELEY *
(impatient)
What the hell is it, Toscani?
Without warning, Nico grabs Neeley by both lapels, slams *
him furiously into the wall!
NICO
You. That's what the hell it is!
AGENT NEELEY *
Get your goddam hands off me!
Neeley tries to shake free; Nico won't let him. *
NICO
You let Salvano walk.
AGENT NEELEY *
Salvano?! Are you crazy?
(rips himself free)
What does he have to do with this?
NICO
That was no cherry bomb in there.
That was C-fucking-4!
(struggles to master
his rage)
I've used that shit.
(MORE)
ABOVE THE LAW - Rev. 4/29/87 46.
NICO (CONT'D)
I know what it smells like, I know
what it blows like --
Neeley glares at Nico. *
AGENT NEELEY *
Salvano never came near that C-4.
It's in federal holding now!
Besides, why would he blow up a
church?
NICO
I tailed Salvano. Two days ago.
Him and one of his apes were in
that church -- and they weren't
taking communion. I saw some broad
saw who was with his lawyer plant
the bomb. Now I want some goddamn
answers.
AGENT NEELEY *
You tailed him? After I ordered
you off?
NICO
Where is he? Where's Salvano?
AGENT NEELEY *
My orders were release him. Not
babysit him.
Neeley brushes Nico's fingermarks off his lapels. *
AGENT NEELEY *
You think you're rough stuff,
Toscani -- martial arts hero, chop
suey crap. Well I'll tell you
something: you're not bulletproof. You're not even a good
cop.
(composes himself;
reclaims his dignity)
You sneak around, playing your
street dick games. But all you
come up with is conjecture, wild
coincidence and bullshit.
NICO
I want the agent who signed for
the explosives.
AGENT NEELEY *
I'll do my job. You do yours.
NICO
Bank on it, pal.
ABOVE THE LAW - Rev. 4/17/87 47.
Nico stalks off. The door slams.
CUT TO:
186 MONTAGE WITH SCORE
A) EXT. "BOGOTA" (SALVANO'S RESTAURANT) - LATE AFTERNOON *
Nico's unmarked car whips in front. Nico storms toward
the front door of the restaurant.
B) INT. RESTAURANT - LATE AFTERNOON *
Nico storms through toward the restaurant rear. The
employees are getting ready for the evening crowd. He
flashes his badge, checks the kitchen, Salvano's
office. The man is gone.
C) INT. MORGUE - LATE AFTERNOON
Jackson has her list from the hospital. A coroner and
his assitant show her a body on a slab. The body is
that of Alan Singletary, the man we saw in the front *
row of the church. Jackson takes notes. The dead man *
is definitely not the ethnic type you'd expect in St.
Mary's congregation.
D) EXT. BODY AND FENDER SHOP - LATE AFTERNOON
The same place where Nico and Jackson wire-tapped Chi
Chi. Nico interrogates the shop boss, several workers.
All shake their head, gesture emphatically. Salvano
not here.
E) CUT BACK TO MORGUE - JACKSON
takes Polaroids of the dead man's I.D. and personal
effects.
187 CLOSEUP OF DEAD MAN'S EFFECTS
as Jackson's flash pops. We see clearly a U.S. Senate
staff ID, a U.S. Senate office building parking pass and
an Illinois driver's license with address.
188 EXT. AFFLUENT BROWNSTONE - LATE AFTERNOON
Nico comes storming out. A Maid and a bodyguard follow
after him screaming. The door slams. We see it is
missing a panel.
MAID
You gonna be in real trouble,
mister, when El Senor Salvano
find out about dis.
ABOVE THE LAW - Rev. 4/29/87 48.
189 EXT. ST. ELIZABETH'S CHURCH - LATE AFTERNOON
Jackson at the blast scene. Police tapes rope the area
off while a TV news crew photographs the damage. Jackson *
talks with neighborhood people, asking questions.
190 EXT. BICEK'S BAR - LATE AFTERNOON
Nico in the alley, grilling several tough guys we saw before when he raided this bar. The answers are all zero;
Nico's disgusted, worn out, frustrated. He starts out
the alley -- At the edge of the street, a battered van pulls
in. A jacketed LATINO MAN leans against it, an unlit cigarette in his mouth. As Nico approaches, turning toward
his car --
FIRST LATINO
(polite, casual)
'Cuse me, sir. Can I bum a light?
Nico slows, eyeing the guy dubiously. As he reaches to
his jacket -- The side door of the van flashes open. A
.38 is leveled straight at Nico's head. Instantly three
other Latino hoods leap to the sidewalk.
FIRST LATINO
(machete under jacket)
Don't even think about it,
motherfucker.
Machete Man (First Latino) snatches Nico's gun from its
shoulder holster. Two hoods shove Nico back into the
alley. Nico checks out his assailants quickly. Four of
them. Machete, CROWBAR, BALL BAT, GUN.
MACHETE MAN (FIRST LATINO)
You come to our streets... fuck
with our people. Now our people
gonna fuck with you.
The five advance on Nico.
PIPE MAN
We ain't gonna shoot you, man.
We gonna beat you to death. You
gonna learn what it means to 'get
down.'
191 QUICK CUTS
A) Nico is trapped. The hoods advancing. Nico has a
moment of stillness, as if all senses are clicking
out of normal gear and into some hyper-combat readiness. Then:
49.
B) Gun and Machete Man are side by side. As Machete Man
starts to move, Nico spins in beside him, seizes his
wrist, twists it violently, wrenching the machete away,
keeping Machete Man between him and Gun Man so Gun
Man can't shoot. In a flash, Nico swings the machete,
slicing over the top of Machete Man, half-severing
the wrist of Gun Man. Gun Man falls, clutching his
wrist in agony; the gun skitters away beneath a chain
link fence, out of reach. Nico flips Machete Man
(who has Nico's gun in his pocket) sending him crashing, half-unconscious.
C) Instantly, Pipe Man aims a home run shot at Nico's
head. Nico uses the machete, matches the angle of
the oncoming blow, slides under and, in the same arc,
blocks the blow and turns it into a strike, slashing
Pipe Man's tendons behind the knee. Pipe Man goes
down on one knee, writhing, hamstrung, crying out in
pain.
D) Now Ball Bat attacks. Nico intercepts the blow,
flips Bat Man ass over teakettle, sending him sailing -- feet first -- through the side window of the
van. Bat Man CRASHES THROUGH the GLASS, hung up with
just his head and shoulders dangling free.
E) Nico is spread out, feet wide, in a crouch. Crowbar
Man sees his chance. He is the fiercest of the four,
and the savviest fighter. He throws three consecutive vicious blows at Nico's head; Nico drops to one
knee, dodges the blows, then intercepts the third,
machete in hand, matches the arc of interception and
whips the blade up -- straight into the crotch of
Crowbar Man. Crowbar Man can't believe it. He remains frozen a moment, staring at Nico, then down at
his own groin.
F) Machete Man, the first to be flipped, struggles desperately to regain his senses. He tries to get
Nico's gun from his own pocket, but Nico bats it away. Machete Man scrambles to his feet, in terror,
bolts.
G) Nico snatches his gun from the sidewalk, glances to
Bat Man who is still half-dangling from the van
window. Nico gives Bat Man one parting punch to the
head, then tears off after Machete Man --
192 EXT. STREET - DAY
Shrieks from passersby as Machete Man hurtles past,
straight into the street. A car nearly hits him, he
vaults its hood. Here comes Nico, in hot pursuit. He
too leaps the car, whose owner is staring, cursing --
193 ANGLE DOWN BLOCK
An all-out foot face.
50.
Machete Man is a speedster; he hurdles a row of trash cans.
TWO YOUNG GIRLS, on a stoop, whistle as he passes.
FIRST GIRL
Fly, baby!
194 NICO
tears after this human cannonball. Amazingly, he's
gaining --
195 INT. BODEGA - DAY
Machete Man highballs off the sidewalk, straight into a
Mom and Pop groceria. Customers scatter in shock as the
hood blasts past them, out the back door. Here comes
Nico. Patrons curse in Spanish as he barrels past --
196 EXT. YARD BEHIND BODEGA - DAY
Machete Man bolts from the bodega into a small patio with
tables and chairs. He leaps the fence into the next yard,
which belongs to a funeral home. He hurdles the headstone
inventory, clambers up the fence on the far side --
197 BACK TO NICCO
pursuing along the same route.
198 MACHETE MAN
claws his way to the top of the fence and onto a framework of two-by-fours which form an arbor-like canopy above the third back yard. Plastic sheeting is tacked
between the beams. Machete Man glances back at Nico,
starts out -- tightrope-style -- across the two-by-fours.
Nico reaches the fence behind the hood, starts also onto
the two-by-fours. We hear FEMALE SCREAMS from below as
the rickety structure starts to wobble precariously.
Machete Man reaches the far side. A fire escape is adjacent; he grabs for it, starts up. Nico catches him by
the ankle. The two crash together back onto the two-byfours, which give way, sending them plunging into --
199 BACKYARD OF FLOWER SHOP - DAY
Four young Oriental women, potting plants, react with
terror as the two bodies CRASH through. Machete Man
scrambles away from Nico but is trapped in the corner
next to the rear shop door. The flower girls can't move
either; Nico and the hood are too near the door. The
girls retreat to the far corner, squealing in fright.
MACHETE MAN
(to Nico, in terror)
No, hermano. Please --
51.
Nico starts menacingly toward the hood, breathing hard
from the chase.
NICO
Who put up the money?
MACHETE MAN
What money?
Nico grabs him by the hair.
NICO
You didn't come after me for a
piece of ass.
(twists the youth's
neck)
Who paid you?
MACHETE MAN
I told ya! No one!
Nico slams him with a fierce shot to the ribs. The hood
doubles over, gasping. The flower girls shriek even
louder. Nico turns to the girls with a ferocious glare.
NICO
(shouting)
Shut up!
The girls instantly go silent in terror. Nico turns back
to Machete Man, spins him violently face-down, jacking
the punk's right arm straight out behind him. We see
that Nico can break his elbow with one blow.
NICO
Give it to me!
Nico raises his fist to strike.
MACHETE MAN
Jimmy Constanza!
Nico shoves the hood into the ground, tearing the hood's
wallet from his trouser pocket. Nico rips the wallet apart, seizes the kid's identification and holds it up. He
grabs the punk by the hair with his free hand. Machete
Man is staring up in terror, wondering what this means.
NICO
If you're lying to me, I'll come
and kill you right in your own
fucking kitchen.
Nico dumps him on the ground and walks away. Instantly
Machete Man changes his tune.
MACHETE MAN
Salvano! Bautista Salvano!
ABOVE THE LAW - Rev. 4/29/87 52.
Nico walks back, his foot smashes into the punk's face.
He hits the ground with a thud.
NICO
Gracias, muchacho.
Nico walks away.
200 MONTAGE WITH SCORE
A) INT. NICO'S HOUSE - KITCHEN - NIGHT
Nico at the kitchen table spread with notepads, old address books, 3X5 cards. He's on the phone, impatient,
apparently getting nowhere. He slams the phone down.
B) INT. LIVING ROOM - EVENING
Nico paces, phone cradled to ear, talking urgently.
CLICK: he's been hung up on; he looks at the receiver
in frustration and disgust.
C) CLOSE - CORKBOARD ON KITCHEN WALL
Nico's hands pushpin a 3X5 card into the wall.
D) INSERT - 3X5 CARD
We read: "FBI / Agent Smith / 11:53 / B.S. / Covering
for who?"
E) KITCHEN - NIGHT
Nico back at the table, listening to the wiretap
tape, transcribing it.
F) ANOTHER ANGLE - KITCHEN - NIGHT (LATER)
Nico holds Julian, goes over notes.
G) CLOSE - YELLOW LEGAL PAD
The page is headed: "FATHER GENARRO." Below in
doodle formation, are a series of boxes, each one
containing a phrase. We read: "Father G had something on Salvano?" "Church break-in?" "Drug information?" "Father G connected to FBI?" Irritably,
Nico's pencil crosses everything out.
201 SARA *
Appears in a nightgown at the kitchen doorway. She looks
frail, frightened. MUSIC ENDS.
SARA *
(softly)
I can't sleep. Will you come and
hold me?
ABOVE THE LAW - Rev. 4/29/87 53. *
NICO
Of course I will. I've been waiting
to hear from Jax. She was supposed
to get back to me by now.
202 INT. NICO'S BEDROOM - LATE NIGHT
Nico comes in with his arms around Sara. She stops
near the bed, holds him tight. They look to little
Julian sleeping in the crib nearby.
SARA
Thank God you couldn't find your
shoes. We would of have been
sitting in the front row.
(beat)
Alright, I know the rules -- I
don't ask you don't tell. But
could've died today and I deserve
to know.
(beat)
Why did we go to church this
morning?
NICO
I'm willing to break the rules;
I'm willing to tell you whatever
I know. But I need some time.
Could you just give me some time?
Nico leans to kiss her, but is cut off by the HARSH RING
of a PHONE. Sara starts at the sound. She and Nico
glance at each other --
SARA
I'll bet that's her.
Nico picks up the phone.
NICO
(into phone)
This better be good, Jax.
MAN (V.O.)
(filtered)
It's bad, Nico.
Nico glances to Sara. The voice on the phone is not
Jackson. Nico is chilled. He glances to Sara, finger to
his lips. He points to his bare wrist as if wanting to know
the exact time. Sara, not sure what's going on, mouths:
"Two-fifteen."
NICO
(into phone)
Long time, Nelson.
ABOVE THE LAW - Rev. 4/29/87 54.
203 EXT. STREET - PHONE BOOTH - LATE NIGHT
We recognize Fox, Nico's buddy from SE Asia whom we met
in the opening sequence. Fox, too, of course, looks 15
years older. He wears a suit and seems quite prosperous.
We are unable to identify from where Fox calls.
FOX
You should know not to use a name
on an open line.
(beat)
I'm gonna talk for fifteen
seconds, then I'm getting off.
You're in trouble, Nico.
204 BACK TO NICO'S BEDROOM - LATE NIGHT
FOX (V.O.)
(filtered)
Serious, serious trouble. Take
your wife and family and get them
someplace safe now.
205 BACK TO STREET - PHONE BOOTH - LATE NIGHT
FOX
You hear me? Now. I'm risking my
ass by telling you this. Good
luck, kid.
206 BACK TO NICO'S BEDROOM - LATE NIGHT
The PHONE CLICKS DEAD. Nico tries to keep a casual expression. Sara sees through it -- she knows he's shaken. *
SARA *
(grim)
That was Fox, wasn't it?
Nico doesn't answer.
SARA *
(very concerned)
Why is the C.I.A. calling you at
two in the morning?
NICO
It's okay, sweetheart --
(crosses to her, puts
his arms around her)
-- You know what a crazy bastard
Fox is. He gets drunk and forgets
he's halfway around the world. He
calls me.
Nico gives her a squeeze and a smile.
ABOVE THE LAW - Rev. 4/29/87 55.
NICO
He just wanted to make sure we got
his Christmas card.
207 INT. BEDROOM - LATER
Sara is sleeping next to Nico. Julian next to her. A *
LOUD POUNDING comes O.S. from the front door. Nico jumps
out of bed. His gun appears in his hand, as if from nowhere,
he steps quickly to the front window, looks out --
208 NICO'S POV - STREET BELOW
Two unmarked cars pull in.
209 BACK TO NICO
He moves swiftly to the rear window and spots another un- *
marked car. *
210 INT. DOWNSTAIRS - FRONT DOOR
Nico enters the vestibule in his pajama bottoms with his gun
in his hand.
VOICE THROUGH DOOR (O.S.)
F.B.I., Toscani. Open up.
Nico pulls aside a curtained glass panel; he recognizes
two uniformed police officers, plus Neeley and Halloran, *
the FBI agents who authorized the release of Salvano. He
lowers his gun, opens the door. The cops surge in.
NICO
(to one of cops)
It's a little early for breakfast,
O'Hara.
O'HARA
Sorry, Nico.
(displays warrant)
You're under arrest.
AGENT NEELEY *
(reaches for Nico's
gun)
I'll take this, thank you.
Before Neeley can get his hand on the gun, Nico, without *
pausing, hands it over to another agent.
NICO
No, you won't. I'm gonna give it
to you.
ABOVE THE LAW - Rev. 4/29/87 56.
211 INT. NICO'S BEDROOM - NIGHT
JULIAN BAWLS fearfully; Sara holds him, trembling. Nico *
is hurriedly getting dressed. A cop and the FBI agents
stand at the door.
SARA *
(to cops; distraught)
This is ridiculous -- there's
no need for this!
NICO
It's all right, darling.
Two agents enter the room carrying Nico's confiscated
papers and tapes and begin rummaging through dressers,
jewelry boxes and closets. Rosa crosses swiftly to calm
Sara. *
ROSA
(to cops)
Who do you think you are --
coming in here like this,
treating my son like a criminal?
SARA *
Why are you terrifying us?
There's an infant here!
Nico pulls on a jacket. He looks like he could kill. He
restrains himself for his family's sake.
AGENT HALLORAN
(to cops)
Check that coat.
The cops cross to frisk Nico. Sara, still holding the baby, *
starts slapping at them.
SARA *
Get your hands off him!
Rosa grabs Sara -- *
NICO
(to Sara, *
allowing himself
to be frisked)
It's all a mistake, Sara -- It's *
gonna be all right.
The cops steer Nico toward the door.
SARA *
(calls after them)
The Police Association's got lawyers
for this, you bastards!
ABOVE THE LAW - Rev. 4/29/87 57.
Sara grabs for the phone; Nico is manhandled out the *
door --
212 EXT. NICO'S HOUSE - LATE NIGHT
The neighbors are now on their porches. Nico is led to a
waiting unmarked car.
CUT TO:
213 INT. POLICE HEADQUARTERS - LATE NIGHT
Bad Dude, the bartender we remember from Nico's first
visit to the Polish bar, finishes signing a deposition.
A cop takes the paper. Bad Dude stands, glances halffearfully, half-defiantly to Nico, who is led down a hallway flanked by two uniformed officers. Agent Halloran
opens the door for Bad Dude, who exits.
214 INT. INTERROGATION ROOM - LATE NIGHT
Neeley, Halloran, Lieutenant Strozah and Deputy Superinten- *
dent JACK CROWDER. Halloran indicates a stack of *
depositions, tapes and notes on the table before Nico.
AGENT HALLORAN
Illegal wiretaps. Unauthorized
surveillance.
NICO
When were you born, asshole?
AGENT NEELEY *
Associating with known felons.
Disobeying direct orders --
NICO
Where's Jackson?
CROWDER *
She's outa this.
AGENT HALLORAN
You're the rotten apple in this
barrel, Toscani. We don't have
to look any farther than you and
your 'family.'
Nico comes out of his chair, going for Halloran. Strozah
tries to block him, but it's useless.
LIEUTENANT STROZAH *
Nico! You damn fool! You wanna
go to prison?!
Nico stops. He's speechless with rage. His finger points
toward Halloran like a loaded gun.
ABOVE THE LAW - Rev. 4/29/87 58.
CROWDER *
(indicates more
depositions)
Unlawful entry. Illegal search
and seizure --
NICO
(spits on papers)
You'll never build a frame on this
chickenshit.
AGENT NEELEY *
(angrily)
You were ordered to back off on
Salvano. But you had too big a
hard-on for that, didn't you--
Nico contains his fury. He steps away from Strozah, with
a gesture that says "I won't hurt you."
NICO
(to Strozah)
Fred. You can't be in on this.
Nico faces his lieutenant -- a look that calls on long *
years of comradeship and loyalty. Strozah is torn. He's
a good man, over his head in a situation he doesn't completely understand.
LIEUTENANT STROZAH *
You're officially suspended, Toscani.
I want your tin... and your iron.
Neeley leans past Nico; drops Nico's gun (with an evidence *
tag on it) onto the table. Nico looks to Strozah, who
averts his eyes. Nico flips his badge onto the table.
NICO
You holding me?
AGENT NEELEY *
You can walk for now. But don't
walk far.
CUT TO:
215 EXT. PHONE BOOTH ON DOWNTOWN STREET - DAWN
We are outside of a cop breakfast hangout. Several police
cars are parked in the lot. Nico is on the phone.
NICO
Sara, I'm okay. I love you. *
CUT TO: *
ABOVE THE LAW - Rev. 4/29/87 58A.
215A INT. NICO'S KITCHEN *
Sara on the phone. *
SARA *
Where are you? Why aren't you *
coming home? *
CUT TO: *
215B EXT. PHONE BOOTH *
NICO
I'll be home later. Lukich will *
be there. Tell mama not to worry.
Jackson and Lukich are waiting by Nico's car. They see
Nico emerge from the phone booth.
CUT TO:
216 EXT. STREET - NICO, JACKSON AND LUKICH - DAWN
A mood of urgency.
JACKSON
-- I found the sanctuary people.
(MORE)
ABOVE THE LAW - Rev. 4/17/87 59.
JACKSON (CONT'D)
They're refugees from El Salvador,
Guatemala, Chile. They won't talk *
to me, they're terrified of cops.
Jackson has an armload of notes, including photocopies of
news clippings.
JACKSON
Ready for this? One of the people
killed at the church was definitely
not a congregation member.
She shows Nico and Lukich the Polaroids we saw her take in
the morgue.
JACKSON
Alan Singletary. He's an aide to
Senator Harrison.
Nico is electrified.
JACKSON
That's right. Harrison. Foreign
relations committee. The guy who's
been crawling all over the Central
American drug connections.
NICO
(impressed)
You're gonna make a helluva D.A.,
Jax.
LUKICH
God help us.
JACKSON
(savors the compliment)
I've been at the Tribune all night,
wearing out their Xerox machine.
Harrison's staff has been
compiling some kind of white
paper. He's due to release it
next week.
Nico's mind races.
NICO
That's how Fox knew.
JACKSON
What?
Nico turns to Lukich, dead earnest.
ABOVE THE LAW - Rev. 4/29/87 60.
NICO
Luke. I want you to go to my
house. Call Branca... my mother
has the number. Get my family
ready to move out.
LUKICH
You got it, buddy.
NICO
Stay with 'em. We'll be there.
LUKICH
What's going on, Nico? What
happened?
NICO
I got a call last night. An old
agency friend. He told me my
family was in danger.
Jax and Lukich can't put all the pieces together yet. But
if it's drugs-CIA-Senate, it's got to be heavy.
LUKICH
You got a weapon?
Lukich knows he doesn't. He glances up and down the
street, makes sure no one's watching -- then cracks the
driver's door of his car. There's a bulge in the map
pocket. Nico pulls out a Sig Saur .45.
LUKICH
Try this on.
Jackson watches Luke slip Nico a clip. *
CUT TO:
217 INT. DAY CARE CENTER (BEHIND CHURCH) - MORNING
OPENING CLOSE ON the faces of the sanctuary refugees.
They are faces that have known fear and tragedy. The kind
of faces we see on newsreels after villages have been
burned and family members murdered. The refugees have
been moved from church basement to a back room in the day
care center. Nico kneels, facing them. Jackson in the
background. A nun (SISTER BONIFACIA) and a priest (whom
we saw in Genarro's hospital room) watch over the people.
Nico is frustrated; he can't crack the refugees' fear.
NICO
(to nun)
Sister... you know me. Tell them
there's no need for fear.
61.
SISTER BONIFACIA
There is rubble all over the yard,
Nicola.
(THE REST OF THE SCENE MAY BE IN ENGLISH, OR SPANISH WITH
SUBTITLES, AT THE DIRECTOR'S DISCRETION.)
NICO
(to refugees)
I was there... in the church.
They tried to kill my family, too.
Several of the refugees look like they want to speak, but
they are terrified.
NICO
I know there was a man here, from
an American senator's office. Who
was he going to speak to?
The refugees become increasingly anxious.
NICO
(to one woman)
Was it you, senora?
(to a man)
Was it you?
More silence. Glances among the people. Finally:
REFUGEE WOMAN
The priest.
The others shrink. The Woman glances to them.
NICO
Who?
(gently)
Father Genarro?
REFUGEE WOMAN
The other one.
Nico looks to the American priest standing there.
REFUGEE WOMAN
No. The young one. From Costa
Rica.
Sister Bonifacia sighs.
SISTER BONIFACIA
Father Tomassino.
Jackson has her pad out, taking notes. Bonifacia knows
too much has already been revealed; she must speak.
62.
SISTER BONIFACIA
He came alone... two weeks ago.
He had papers. Papers to give to
the senator.
Nico tries to contain his excitement; not scare anyone by
losing his calm.
NICO
But the bomb... The bomb was
planted to destroy the pulpit.
SISTER BONIFACIA
Father Tomassino was going to
give the Mass that day.
(shaken)
Father Genarro talked him out of
it.
The refugees' faces confirm this.
NICO
(understands)
It was Father Tomassino they were
trying to kill.
Bonifacia starts softly to cry. Nico puts his hand on her
shoulder, comforting her.
NICO
Where is Tomassino? Where is he
now?
The nun shakes her head. Nico looks to the refugees.
They don't know, either.
REFUGEE MAN
He run, mister. He go --
He gestures: "who knows where?"
NICO
If you know where he is, you've
got to tell me. I want to help
him. I can help him.
The refugees lower their eyes. Bonifacia continues her
soft weeping. Nico glances to Jackson; her look says
"Enough, let's leave these poor people alone." Nico
stands, touches Bonifacia one more time on the shoulder --
218 EXT. CHURCH DAY CARE BUILDING - DAY
Nico and Jackson come out. Nico has made a decision.
NICO
You're outa this, Jax. Go home.
ABOVE THE LAW - Rev. 4/29/87 63.
JACKSON
(displays her notes)
You see this list? Well, I'm not
done.
Nico admires his partner's guts, but he's worried.
JACKSON
I'm not a rookie, Toscani. Now,
go home. Get your family out of
here.
Nico agrees. The pair starts to split.
NICO
(calls after
Jackson)
Just paperwork, you understand?
CUT TO:
219 INT. NICO'S CAR - MOVING - MORNING
Nico drives, a jumble of emotions on his face. Urgency
fear, exhaustion. He's deep in thought --
220 EXT. INTERSECTION - MORNING
Nico's car pulls up at a stop light. He looks around
without really seeing. An old lady pulls a shopping cart *
while a crossing guard takes some kids across the street. *
221 ANOTHER CAR
ROARS up out of nowhere, without two men inside, SCREECHING to a stop head-on to Nico's door. Its doors spring
open --
222 NICO
dives toward his own passenger door --
223 SECOND CAR - TWO MORE ARMED MEN
leap out, OPEN FIRE with pistols and automatic weapons.
224 QUICK CUTS
Nico's car riddled with a furious FUSILLADE. WINDOWS
BLOW OUT; the driver's door is shredded --
ABOVE THE LAW - Rev. 4/29/87 64.
225 NICO - ON FLOORBOARD
crawling frantically; shoving the passenger door open as
a FIRESTORM of lead and FLYING GLASS BLAZES all around
him.
226 FOUR MEN
FIRING point blank (6 to ten feet) into Nico's car. The
men are cool, professional.
227 NICO
spills from the passenger door onto the ground, scrambles
like mad under his own car toward one of the attackers' cars.
228 PEDESTRIANS AROUND INTERSECTION
scream and scatter in terror.
229 FOUR MEN
FIRING as shells spew from the ejection ports of their
weapons.
230 NICO'S CAR
being chewed to pieces --
231 NICO - UNDER MEN'S CAR *
crawling at full speed from the car's front to its back.
On the ground, alongside the car, spent CARTRIDGE CASES
RAIN like hailstones.
232 FOUR MEN
As their magazines empty. The last shells spring free,
GUN BARRELS SIZZLE, blue smoke fills the air. The leader
waves two men forward to check their kill. At that
instant:
233 NICO
springs to his feet behind the men, the Sig Saur .45 *
clutched in both hands. (He has crawled under both cars
to envelop his attackers.)
NICO
Over here, you sons-a-bitches!
Nico's rage is superhuman. The men stare in consternation. One of the men has a fresh magazine half into
his weapon --
ABOVE THE LAW - Rev. 4/29/87 65.
NICO
(eyes like an
animal)
Try it. Be my guest.
The man lets the magazine clatter to the street. The
others raise their hands. It takes all Nico's strength
to keep from wasting all four of them on the spot. His
gaze swings wildly around the intersection. He spots a
corner grocery store. A phone inside.
NICO
(gestures with gun)
Over there! Move it! -- Now!!
The men are scared shitless. They put their hands in
back of their heads; trot jelly-legged --
234 INT. CORNER GROCERY STORE - DAY
A Pakistani counter clerk takes one look at the mob entering his store and bolts for the rear. A customer exits
as Nico herds his captives in.
NICO
Hands on the counter!
Three men do it; the fourth is slow.
NICO
Don't tempt me, ASSHOLE --
The fourth obeys. Nico moves to the pay phone on the
wall, covering the men with his .45. He grabs the re- *
ceiver in his free hand; tries to dial. Adrenaline makes
his hand shake; the dials spin wrong -- One of the men
sees Nico's dilemma. To hit 911, Nico has to take his
eye momentarily off his captives. As Nico turns again
to the dial -- A free-standing sales display hurtles
toward him, crashing into his gun hand. One of the men
has lunged into the display; now he dives atop Nico a
second later. The whole human pile crashes, thundering
into a glass freezer. Somehow Nico gets to his feet.
One of the men grabs Nico's gun; Nico swings one of the
freezer doors -- Wham! -- smack into the man's face. The
GLASS SHATTERS; the man drops like a rock. Now it's
three against one -- prime odds for Nico. He wades into
his attackers. A coffee stand goes flying. A body sails
into a makeup display. One fool is lucky enough to land
a blow that bloodies Nico's nose; he pays with a shattered
forearm and a head-first heave into an ice cream locker --
235 POV FROM OUTSIDE STORE
It looks like a tornado has hit the interior. Magazine
RACKS CRASH, mayo jars fly through the air, the ICE
MACHINE seems to EXPLODE as a man's back careens into it --
ABOVE THE LAW - Rev. 4/29/87 66.
236 STREET CORNER UP BLOCK
Two police cars heave into view, SIRENS WAILING --
237 FRONT DOORS OF STORE
Nico takes the last man, lifts him up, and drives him like
a battering ram straight through the glass.
238 NICO
Wild-eyed and bloody, sees the cop cars whipping into the
corner. He spins to see his .45 on the floor -- too far
away to race for. He bolts down a gangway.
CUT TO:
239 INT. NICO'S HOUSE - DAY
The PHONE RINGS next to Lukich. Sara starts towards *
it. Lukich stops her with a look; he picks up the phone.
LUKICH
(into phone)
Yeah?
240 INTERCUT NICO ON STREET - PHONE BOOTH - DAY
NICO
(into phone)
Get their stuff into the car now.
Do it in the alley, not the
driveway. I'll be there in five
minutes.
CUT TO:
241 TWO MORE POLICE CARS
SQUEALING around a corner, entering the block where Nico
is.
242 NICO - ON SIDEWALK
Lets them pass, keeping low. He sprints across the street
and down the alley.
243 OMITTED
&
244
CUT TO:
245 INT. NICO'S BEDROOM - DAY
Sara grabs a handful of dresses from the closet and angrily *
throws them into an open suitcase on the bed. Nico watches,
hoping to ride the storm.
ABOVE THE LAW - Rev. 4/29/87 67.
SARA *
Your job and your family in one day,
Nico. You're batting a thousand.
NICO
(softly)
Sara... *
Sara is at the dresser, pulling open drawers, dumping her *
clothes haphazardly into the suitcase. She stops suddenly.
She pulls out a handgun and ammo from her panty drawer. She
starts to weep. Nico steps up behind her, puts his arms
around her.
NICO
You'll be safe with Uncle Branca.
It's gotta be this way... I'm sorry.
He turns her around to face him.
NICO
Don't you think I'd rather be with
you?
He holds her passionately. Rosa coughs loudly in the doorway.
SARA *
(no longer angry)
-- Mama... you got your medicine?
Don't forget the baby's sweater --
ROSA
I know about babies.
We glimpse other relatives in the hallway; Nico hands them
a pair of suitcases; they hurry off --
SARA *
(of Nico's bloodied
shirt)
You sure you're all right?
NICO
I am if you are.
SARA *
(trying to lighten up)
Don't worry --
(touches him)
We needed a vacation, anyway.
Sara takes her suitcase, hurries out -- *
246 EXT. ALLEY BEHIND NICO'S HOUSE - DAY
Branca's sedan is half-loaded; Branca adds a few more bags.
Lukich's car is parked behind it.
ABOVE THE LAW - Rev. 4/29/87 67A.
NICO
(crossing yard with
Sara) *
I'll give you five minutes start. We
have to do it this way.
They get their suitcases into the sedan. Mama and the baby
are already aboard. Sara gets into the passenger seat. *
Lukich comes around from the front, glancing around like a
lookout.
NICO
Where's Jax?
LUKICH
She thinks there may be documents at
some guy's apartment.
Nico starts toward the rear basement door. Lukich falls
in with him.
247 INT. BASEMENT - DAY
Nico and Lukich enter, start down the steps.
NICO
They killed the wrong priest.
Lukich doesn't understand.
NICO
There was a second priest... from
Costa Rica... hiding at the church.
He was the one they meant to kill.
Nico starts to remove a large piece of ducting from the
basement heater.
LUKICH
And you know where to find him?
NICO
No.
The hole in the foundation holds several shotguns and a
couple of pistols, some passports and some cash.
LUKICH
You're gonna need help.
Nico grabs the pistols, starts to strap them on.
NICO
Just stay with my family
Nico replaces the piece of foundation, starts back up the
steps.
ABOVE THE LAW - Rev. 4/29/87 68.
LUKICH
What are you gonna do?
NICO
You don't want to know.
248 EXT. ALLEY BEHIND NICO'S HOUSE
Branca STARTS the SEDAN. Sara looks back, pained. *
Rosa, Lukich and Julian are also in the car. Nico grabs
another hand-carried case from the basement, hurries into
Lukich's car.
249 NICO'S POV - LOOKING DOWN DRIVEWAY
Two police cars pull up to the front of the house.
250 HIGH ANGLE SHOT - ALLEY BEHIND HOUSE
Lukich's car continues off.
CUT TO:
250A EXT. SUBURBAN HOUSE - DAY
We see Uncle Branca's car and Lukich's car out front.
251 INT. SAFE HOUSE - DAY
Branca leads Nico, Sara, Rosa, Julian and Lukich down a *
corridor. Two older Italian women open a door leading to a
basement rec room.
BRANCA
My sister's cousin's place. You're
safe -- not even I can find this joint.
The family enters the back room. They take in their
sanctuary.
CUT TO:
252 EXT. PARKING LOT - DAY
Agent Neeley hurries across the lot toward his car. He gets *
in, STARTS the ENGINE. As he puts the car in gear --
253 BARREL OF .45 AUTOMATIC
nestles behind his right ear.
NICO
(rising from rear seat)
Don't forget your seat belt.
ABOVE THE LAW - Rev. 4/29/87 69.
254 INT. FEDERAL WAREHOUSE - DAY
Nico walks casually beside Agent Neeley, holding his gun out *
of sight in his pocket. They proceed down a corridor. Behind them we glimpse a security checkpoint, manned by two
uniformed guards, through which they apparently have already
passed.
255 ANGLE - CORRIDOR
The two walk past floor-to-ceiling warehouse shelves, packed
with labeled boxes, film cans, etc. which are visible
through a heavy wire-mesh screen.
AGENT NEELEY *
Congratulations, Toscani. You just
made number four on the most wanted
list.
ABOVE THE LAW - Rev. 4/17/87 69A.
NICO
Keep walking --
(another nudge)
-- I'm bucking for number one.
ABOVE THE LAW - Rev. 4/29/87 70.
256 ADMINISTRATIVE WINDOW
A pot-bellied, Naval-retired-type CLERK looks up from his
desk as Nico and Neeley come up to the counter. We see a *
sign: "EVIDENCE HOLDING DEPOT -- You MUST Have Your Requisition Number!!!" The Clerk stands, chomping a cigar, waddles to the counter. We see his arms covered with tattoos.
CLERK
What can I do for you, lads?
Neeley presents his ID. *
AGENT NEELEY *
There was a quantity of C-4 explosive
brought in four days ago --
CLERK
Hell, that's gone.
NICO
When?
CLERK
Right away, pardner. They scooped
that stuff outa here before we even got
it tagged.
NICO
Who? Who took it?
CLERK
(casual)
C.I.A.
Nico reacts, nudges Neeley once more. *
AGENT NEELEY *
(to Clerk)
We'd like to see the paperwork.
The Clerk has an accordion file right under the counter.
He indicates a sign-in book.
CLERK
You gotta sign.
Neeley signs the book. The Clerk starts leafing through his *
files, searching for the release form.
CLERK
Yeah... I remember that guy. Flew in
special from Langley. Bomb tech.
Real nice fella --
(finds the form,
lifts it from
file)
-- Here it is. Fox. Nelson Fox.
ABOVE THE LAW - Rev. 4/29/87 71.
257 NICO
snatches the release form. Stares at the signature, stunned.
258 EXT. LAKEFRONT - DESERTED SECTION - DAY
Neeley's car parked in the boondocks along the lake. *
FEMALE (V.O.)
(from car radio)
-- Here it is, sir. Coming in from
Langley now --
259 INT. CAR
Neeley holds the radio mike, as if about to say something. *
Nico shoves his gun against the guy's temple.
FEMALE (V.O.)
(from car radio)
-- That agent has been with the Central
American desk, uh, since '84 --
AGENT NEELEY *
(into mike)
Thank you. That's what I wanted.
Nico takes the mike, clicks it back into its cradle. Neeley *
freezes, unsure what Nico's going to do with him.
NICO
(motions with gun)
Dump your shoes. Ditch your I.D. on
the floor.
Nico watches the FBI man obey.
NICO
So you think I'm a lousy cop, huh,
Neeley? Maybe I am. But I haven't got *
my face buried up Washington's ass.
AGENT NEELEY *
Nobody buys me, Toscani.
NICO
Yeah? Then somebody pulled the plug
on your brain, pal. You didn't come
up with the second priest, did you?
Or Harrison's dead aide.
(as Neeley fumbles with *
his laces)
Hurry up!
(as Neeley obeys) *
You heard the radio. The Agency's
pushing buttons and bodies are dropping
like flies. You assholes are missing
half the case!
ABOVE THE LAW - Rev. 4/29/87 72.
Despite his animosity toward Nico, Neeley is beginning to *
realize this cop is onto something.
AGENT NEELEY *
Listen. Toscani --
Nico grabs Neeley's shoes, heaves them into the back seat. *
He shoves the agent out the door, swings himself behind the
wheel.
NICO
Watch your step.
260 EXT. DESERTED LAKEFRONT - DAY
Nico drives off, leaving the FBI man miles from nowhere.
CUT TO:
261 MONTAGE
with SCORE and V.O.
A) INT. POLICE HEADQUARTERS - DAY
From out of an elevator and down a busy corridor march
the brass, Deputy Superintendent Crowder included. *
Lieutenant Strozah lags slightly behind. They enter *
an auditorium where a large contingent of press,
cameras ready, wait.
B) INT. CONDO COMPLEX - HALLWAY - DAY
Jackson outside an apartment door in a Yuppie-esque
condo complex. She looks both ways to be safe, then
slides a credit card behind the lock. The door opens.
C) EXT. CONVENTION CENTER - DAY
Nico parks Neeley's car in a huge packed lot. A towering *
marquee sign reads: "COMPUTER EXPO '87." Nico starts on
foot toward the convention center entrance.
D) INT. CONDO APARTMENT - DAY
Jackson enters, looking guilty as hell. She picks up
a framed photo from a piano: the dead Senator's aide
posed smiling beside a distinguished-looking man
(Senator Harrison) in front of the capitol building.
Jackson sets the photo down, starts rummaging through
desk drawers.
E) INT. POLICE HEADQUARTERS - DAY
CROWDER *
The officer is alleged to be involved in
illicit drug trafficking, racketeering
and kidnapping --
ABOVE THE LAW - Rev. 4/17/87 73. *
F) INT. CONVENTION CENTER
Nico, in the crush of convention-goers, pauses before a
booth promoting a TV manufacturer. The latest model TV's
are set up in a sales display, with visitors gawking at
the pictures of the church bombing aftermath.
NEWSWOMAN (V.O.)
(on TV's)
Police sources also speculate that
Toscani may be connected to the suspect
in the bombing of St. Elizabeth's
parish church --
A police composite rendering of the woman who placed the
bomb at the church is shown on the television.
NEWSWOMAN (V.O.)
(on TV's)
-- the suspect is likely to be armed
and considered to be extremely
dangerous --
Nico's police ID photo appears on the news. He blends
back into the crowd.
NEWSWOMAN (V.O.)
In other news, Senator Ernest
Harrison's presidential bid has...
Nico moves swiftly through the convention center floor
(which is packed for thousands of square feet with sales
booths, each manned by technicians and pitchmen, all
displaying the latest in high-tech data processing
equipment, telecommunications, etc.)
G) INT. CONDO APARTMENT - DAY
Jax stuffs a wad of offical papers -- including appointment books, notes and tapes -- into her briefcase. At
the apartment door, she looks both ways, then emerges,
starts away down the hallway.
H) INT. CONVENTION CENTER - COMPUTER BOOTH - DAY
Nico in the crowd in front of the booth of a Japanese
computer manufacturer. Dr. Watanabe (Nico's friend whom
we remember from the baptism/picnic scene) is the chief
engineer at the booth, showing off some high-tech
equipment to several brainy looking executives.
Watanabe glances up, spots Nico. Nico makes a subtle
sign to indicate he must speak to Watanabe. Watanabe
crosses at once to Nico.
ABOVE THE LAW - Rev. 4/29/87 73A.
WATANABE
So good to see you again, sir!
(shakes Nico's hand)
Come back near closing... fivethirty... we'll place your order
then.
Nico nods, fades like a shadow into the throng. MUSIC
DOWN, SEQUENCE ENDS --
DISSOLVE TO:
262 INT. CONVENTION CENTER - NIGHT
All customers gone, lights being turned off. Janitors
sweep up, the last booth people shut down for the night.
WATANABE
emerges with Nico from behind a booth divider, leads her *
old friend at a brisk pace across the deserted floor.
NICO
Listen, Wat... you know I wouldn't
call in a favor --
ABOVE THE LAW - Rev. 4/17/87 74. *
WATANABE
Of course not. Just because you
kept a few 'friendly' tribesmen
from cutting my heart out and serving
it up as Pad Thai?
With a wink, Watanabe escorts Nico into a back area off the
floor. Carpeted office dividers set off a small area,
packed with super sophisticated computer equipment.
Watanabe "boots up" a terminal, sits down with relish.
WATANABE
The last six years I've been risking
nothing but money. It's a kick to
risk my ass again.
Nico eyes the equipment and Watanabe, impressed.
NICO
The old Spook.
CUT AWAY TO:
263 OMITTED
&
264
265 INT. JACKSON'S APARTMENT - NIGHT
Jackson has the Senator's aide's papers spread before her,
cataloging them with interest. The PHONE RINGS. Jackson
picks it up.
JACKSON
(into phone)
Jackson.
Whoever the voice is (which we can't hear), it makes Jackson
forget the documents.
JACKSON
(into phone)
-- Yes... yes, of course, sister, I
know who you are.
(listens)
-- where... where are you?
CUT BACK TO:
266 INT. WATANABE'S COMPUTER AREA - NIGHT
Watanabe working two computers simultaneously, with the
gusto of a rock keyboard player.
ABOVE THE LAW - Rev. 4/17/87 75. *
WATANABE
-- No way to access Covert Ops
directly. But Ornstein's at
Princeton, he's got a database
bigger than Langley --
(works keyboard
lovingly)
If I can't crack that turkey's
code, it's time to hang up my
rock and roll shoes --
Nico watches Watanabe work.
WATANABE
-- ah, here! Here's a little trap
door. Let's see if we can wriggle up
into --
(watches the screen
with anticipation)
Personnel files! Operative dossiers.
Will that do?
NICO
It's a start.
Nico sits down beside Watanabe.
DISSOLVE TO:
267 FULL ASHTRAY
Watanabe stubs out a cigarette. Empty coffee cups all
around. Nico paces, reading a hard-copy printout.
NICO
Fox has had a helluva career.
(reads down page)
'69 to '76, Cambodia, Laos. Operation
Phoenix. Operation Green Mountain.
Operaton Northstar. This is all Vang
Pao, it's all heroin --
WATANABE
You friend has found his metier.
Nico circles the "operations" on the page, hands it to
Watanabe.
NICO
Run personnel retrievals on all these
operations. I want the names of every
company man who was on them.
QUICK DISSOLVE TO:
268 CLOSE - COMPUTER SCREEN
A list of about thirty names -- mostly civilian, but some
with military rank attached.
ABOVE THE LAW - Rev. 4/17/87 75A.
NICO (O.S.)
Altshuler. Cosgrove. I know half
these guys --
(thinking)
Okay... now run me an update. Where
are these fuckers now?
QUICK DISSOLVE TO:
ABOVE THE LAW - Rev. 4/29/87 76.
269 NICO - LATER
Pouring a fresh coffee, studying the screen with Watanabe.
WATANABE
(finger tracks down
screen)
Central American desk. Central
American desk. Central --
NICO
Thirty names from secret drug
operations... and two-thirds of 'em
are in Central America.
(beat)
All right. Run these two names:
Bautista Salvano and Ramon 'Chi Chi'
Testamente.
WATANABE
Those street dealers you were talking
about? They're not gonna be in here.
Nico gives her a look. Watanabe starts punching keys. *
270 CLOSE - COMPUTER SCREEN
Official biographies of Salvano and Chi Chi come up.
WATANABE (O.S.)
Well, kiss my ass.
(reads)
Both former Somoza secret police.
(whistles, impressed)
Recruited by agency, 1975. Trained
Fort Benning, counter insurgency...
ABOVE THE LAW - Rev. 4/17/87 76A.
NICO (O.S.)
Where's Fox's printout?
(finds it, reads)
1976... Fort Benning. He recruited
these pricks!
DISSOLVE TO:
270A EXT. CONVENTION HALL - NIGHT *
It's even later. The last of the janitorial crew is *
finishing up the huge floor. A few display lights remain *
on, otherwise it's dark. Nico stands above, observing, *
contemplating the information he has received. *
271 INT. WATANABE'S COMPUTER AREA *
Watanabe crapped out in a chair; Nico looking weary, pacing, *
wracking his brain.
WATANABE
There's nothing left, Nico. We've
wrung these files dry.
ABOVE THE LAW - Rev. 4/29/87 77.
NICO
(muttering to
himself; thinking)
Fox is here, in Chicago... or was
here...
(has an idea)
... Listen. Can this thing tap into
airlines? Reservations records --
WATANABE
I can get you the ball scores, too.
DISSOLVE TO:
272 NICO
As he finishes viewing the screen, stands.
NICO
Five agents from Central American desk.
All trained assassins. All arrived in
Chicago in the last week -- and none
of them has left.
Nico grabs his coat, gulps a last swallow of coffee --
NICO
Thanks, Wat. You finally may have
done some good for your country.
WATANABE
Where are you going?
NICO
To find a priest.
CUT TO:
273 EXT. CONVENTION CENTER - NIGHT
Jackson's unmarked car whips into the curb. Aboard: *
Jackson and Lukich. Nico steps from the shadows, ducks
into the back seat. The car takes off.
274 INT. UNMARKED CAR - MOVING - NIGHT
NICO
How did ya find him?
JACKSON
The nun phoned me. She said two men
had been sneaking around the church.
She sounded scared --
Nico checks his .45. Two spare clips.
78.
JACKSON
There's more. I got the papers
from that senator's aide's apartment.
Everything Harrison's been working on.
It's all at my place.
CUT TO:
275 ELEVATED SUBWAY TRAIN - NIGHT
BOOMS PAST CAMERA, only a few feet away from a row of
tenement apartment buildings. As TRAIN sound RECEDES,
CAMERA MOVES IN ON one building. We hear LOUD UPBEAT
ROCK AND ROLL coming from a third-floor apartment --
276 EXT. TENEMENT - POV FROM CAR ON STREET - NIGHT
VOICE (O.S.)
(from within car)
Once you're inside, you'll signal us.
277 INT. CAR - CLOSEUP ON TREMBLING WOMAN (SAME STREET)
It is the Middle-aged Woman who left the bomb, seen in Father
Genarro's church. A police sketch of her was seen on television. She is looking up at the third-floor window, getting
instructions. She turns around occasionally to see who's
talking to her.
SALVANO (O.S.)
Don't be scared. Your life depends on
this.
278 CLOSE ON DRIVER
It is one of Salvano's goons we've seen before. He is
checking his gun.
279 INT. TENEMENT HALLWAY - NIGHT
The Woman walks slowly down the hall. She carries a small
donation can. She knocks on a door. We hear FOOTSTEPS from
within the apartment. The door opens. It's Bonifacia, the
nun from the church (though now in civvies). The Middle-Aged
Woman with the donation can raises it as if asking for a
contribution. Bonificia looks flustered, impatient. She
really doesn't want to leave the door open.
MIDDLE-AGED WOMAN
Exusame, por favor. Tiene dinero
para...
280 FROM NOWHERE
Three of Salvano's armed goons appear on both sides of the
doorway. They push both women violently into the apartment.
79.
281 CLOSEUP - GOON
He steps quickly, surely into the apartment.
282 CLOSEUP - BEDROOM DOOR
It flies open. The goon points his gun AT the CAMERA.
283 GUNMEN'S POV
Father Tomassino, the Costa Rican priest, stands at the
window, he has been trying to open it. He turns. He knows
he can't escape.
284 EXT. APARTMENT - POV FROM SALVANO'S CAR
The light in the apartment window blinks twice.
285 EXT. TENEMENT - STREET - NIGHT
From two cars emerge the shapes of several men.
286 EXT. CHICAGO STREET - NIGHT
Jackson's car -- with Jackson, Nico and Lukich aboard --
swings around a corner into a traffic jam. The HORN BLARES.
287 INT. TENEMENT APARTMENT - THIRD FLOOR - NIGHT
A STEREO SPEAKER BLASTS MUSIC from the front room. CAMERA
PANS ACROSS Bonifacia's bedroom dresser. We see mementos
of her life and a photo of herself with Father Genarro with
a group of children. CAMERA CONTINUES TO PAN PAST Bonifacia's
bed, PAST Bonifacia's body! CAMERA CONTINUES DOWN TO the
floor, where lies the lady who planted the bomb. They both
appear dead.
288 CLOSE - FATHER TOMASSINO
He is in a chair, his wrists strapped to the chair arms. He
is sweating, fearful but clinging to his courage.
289 ANOTHER ANGLE
Behind Father Tomassino, we see Salvano, Chi Chi and two
other goons, armed with pistols. Salvano moves toward the
priest, sets a small TV table down beside him. The priest
glances toward it --
290 PRIEST'S POV - TV TABLE
Atop its rickety surface: a fearsome array of syringes and
drug vials.
291 BACK TO FATHER TOMASSINO
He glances up from the hypodermics --
ABOVE THE LAW - Rev. 4/17/87 80.
292 PRIEST'S POV
INTO FRAME moves Kurt Zagon! We see clearly the 15 years of *
aging since SE Asia. His face is even scarier than when he
performed similar atrocities in those days. Zagon prepares
a syringe, tests it, shooting a clear liquid skyward.
ZAGON
You'll be in heaven in a few minutes,
padre. But first I'm going to put
you through hell.
293 EXT. CHICAGO STREET - NIGHT
Nico, Lukich and Jackson are speeding through the infamous
Southside. We want to scream at them to get there already.
294 BACK TO APARTMENT
Salvano holds the priest's arm steady, Zagon moves in with
the needle.
ZAGON
You came here to talk to the *
Senator's aide, didn't you? *
FATHER TOMASSINO
I tried. But you killed him first. *
ZAGON
Who told you about our plans? *
FATHER TOMASSINO
This is from confession. I tell no
one.
ZAGON
You wouldn't lie to me, Father? It's
a sin.
Father Tomassino says nothing, he begins to cry.
ZAGON
(almost with kindness)
If you spoke to anyone, tell me now --
(indicates hypo)
-- and I won't have to use this.
295 EXT. TENEMENT - NIGHT
The unmarked police car pulls up, across the street.
296 INT. CAR - NIGHT
Nico, Jackson, and Lukich gaze at the building.
ABOVE THE LAW - Rev. 4/17/87 80A.
296A POV FROM CAR *
In the shadows by the corner, a hulking Latino man loiters. *
JACKSON (O.S.) *
That's an eyeball if I ever saw one. *
296B BACK TO CAR *
Nico starts to open the car door. Jackson moves to join him. *
NICO
You're our backup. If we come out
running, then you can shoot.
Nico's eyes meet his partner's. It's plain he'll break her
leg if he has to, to keep her safe by the car. Jackson
accepts this reluctantly.
81.
297 EXT. TENEMENT - NIGHT
Nico and Lukich exit the vehicle. Nico indicates an adjacent
building; he and Lukich start for it.
298 INT. APARTMENT
Father Tomassino is beginning to come under the influence of
Zagon's chemicals. In spite of this the priest's spirit to
resist is astounding...
ZAGON
Speak to me, Father -- who did you tell?
FATHER TOMASSINO
I know what you are. I know what
beasts you are.
299 EXT. ADJACENT BUILDING - ROOF OF TENEMENT
Nico and Lukich emerge from the roof door, guns drawn. The
roof is empty. Antennas, skylights, clotheslines. The pair
creep soundlessly onto the next roof. They cross toward the
roof door like infantrymen, moving one at a time from cover
to cover, covering each other. They reach the door that
leads down into the building. Nico checks the far side of
the enclosure, nods to Lukich. Lukich cracks the roof door
open --
300 STAIRWELL FROM ROOF - NICO AND LUKICH
Nico and Lukich creep down the stairs from the roof. Nico
opens the door leading to the top (third) floor.
301 INT. APARTMENT
The drugs have taken hold. The priest's brain is an open
memory bank for Zagon to probe.
ZAGON
I want to know who you told.
FATHER TOMASSINO
(barely coherent)
I told them... you make the ninos...
see... castrating their fathers --
raping... mutilating their mothers
... And...
(breaks down crying)
... and sometimes... to the ninos...
302 NICO'S POV - HALLWAY
As he slowly pushes the door open. The hallway is empty.
303 INT. HALLWAY
Nico and Lukich pad in.
ABOVE THE LAW - Rev. 4/17/87 82.
Quickly Lukich checks the stairs leading down. Nico crosses
silently past the first apartment door, checks the far end of
the hallway. Nico comes back toward the apartment door.
Lukich approaches from the opposite side. They take up
positions flanking the door, guns drawn. The LOUD MUSIC
CONTINUES from inside.
304 INSIDE APARTMENT
Salvano and Chi Chi look on, revulsed. Whatever is happening
to Father Tomassino is enough to make even cruel men ill.
ZAGON (O.S.)
-- Tell me the truth, Father --
The priest's eyes roll grotesquely; he convulses, sweat
beading on his forehead. He looks like a man in the agonies
of some narcotic hell.
ZAGON
(close to priest)
-- Can we kill him? If you told anyone,
about our plans to kill the senator,
we cannot do it.
FATHER TOMASSINO
Nadie. Nadie. Nadie. *
305 NICO AND LUKICH IN HALLWAY
O.S. we hear another ELEVATED TRAIN APPROACHING outside.
Nico kicks the apartment door in! He and Lukich burst in,
guns clutched two-handed.
306 QUICK CUTS
The first goon reacts, raises his pistol. Lukich SHOOTS him.
Nico NAILS the second goon, just as Chi Chi aims his sawedoff pistol-grip shotgun at Nico. Nico has a split second to
dive behind a heavy upholstered chair. Chi Chi's DOUBLEBARREL BLAST blows the chair into powder. Almost instantaneously Nico sees the priest -- just as Zagon slashes the
priest's throat! Salvano SHOOTS Lukich point blank, in the
shoulder, sending Lukich's gun sailing. Nico, FIRING, grabs
Lukich, dives out the door with him --
307 HALLWAY
Zagon and Salvano OPEN FIRE from the apartment full-tilt.
BULLETS RIP through the WALL, BLASTING WOOD and PLASTER
everywhere. Nico shoves Lukich toward the stairwell --
NICO
Go! Go!
-- Simultaneously FIRING back through the kicked-in door,
EMPTYING his GUN.
ABOVE THE LAW - Rev. 4/17/87 83.
ZAGON
(in Spanish, from
apartment)
Get him! Finish him!
Nico is slamming a fresh clip in, Lukich is stumbling away
toward the stairwell. Salvano and Chi Chi appear in the
apartment doorway. Chi Chi levels his fierce "hogleg" at
Nico's head. At that instant -- A broadside of BULLETS slam
into the wall around Chi Chi. It's Jackson -- on the stairs!
Chi Chi is hit, but spins, FIRES. His shotgun blast catches
Jackson square in the chest, blowing her back like a doll,
down the stairwell, out of sight. Nico reacts with agony, *
twists on the floor, SHOOTS Chi Chi in the face. Nico pulls
the trigger as fast as he can, sending a HAIL of FIRE through
the doorway, through the walls. Salvano clutches his henchman, using his dead body as a shield; Nico's BULLETS blow Chi
Chi apart. Zagon FIRES back, hits Nico in the side by the
ribs! Nico tries to fire back; he's empty!
ZAGON
Now!
Nico bolts for the stairwell to the roof, clawing for a new
clip as he goes. Salvano and Zagon burst into the hallway,
SHOOTING at Nico.
308 INTERCUT - ELEVATED TRAIN
THUNDERING along the tracks adjacent to the building.
309 EXT. ROOF - NIGHT
Nico highballs from the stairwell as the tarpaper roof erupts
all around him with GUNFIRE from the floor below! He dives
sideways, rolling to avoid the fire -- He recovers his
footing in time to see Salvano and Zagon burst onto the roof
from the stairwell. Nico's BULLETS miss them; they separate,
taking cover behind two walls at the roof's margins. Nico
is trapped -- in the open.
310 ZAGON AND SALVANO
pop back out, aiming at Nico --
311 NICO
leaps off the roof!
312 ANGLE - ELEVATED TRAIN - MOVING
Nico lands on the roof of the speeding "el" train, his
momentum nearly carrying him off the far side --
313 NICO - ATOP TRAIN
catches a railing, claws at it. BULLETS rip into the train
roof all around him --
ABOVE THE LAW - Rev. 4/29/87 84.
314 ATOP TENEMENT ROOF - SALVANO AND ZAGON
FIRE for all they're worth at Nico's receding form.
315 ATOP TRAIN - NICO
crawls to the space between cars, lowers himself down. He
clings to the swaying chains.
315A INT. TRAIN CAR
Nico staggers through the almost empty car and collapses on
a bench.
316 AROUND CORNER - TWO POLICE CARS
hurtle INTO VIEW under the El, SIRENS BLARING. *
317 BACK ON TENEMENT ROOF
Zagon and Salvano scramble away.
318 OMITTED
CUT TO:
319 EXT. EL STATION - STAIRWAY TO STREET - NIGHT
A cleaner, more upscale neighborhood. Nico labors down the
steps, clutching his jacket to his ribs. Several affluent
people look at him oddly, he ignores them, keeps going -- He
makes his way up the street, weakening, to a tasteful brownstone. Nico climbs the steps in pain --
QUICK DISSOLVE TO:
320 INT. JACKSON'S APARTMENT - BATHROOM - NIGHT
Nico over the sink, shirt off, WATER RUNNING -- applying a
makeshift bandage to his bloody ribs. We see Jackson's makeup stuff along the counter, feminine robes hanging on the
door, law books around a reading stand. Nico is in real
pain, exhausted, weakening --
321 LIVING ROOM - NIGHT
Nico at Jackson's desk, its surface spread with the notes
and papers she got from Senator Harrison's aide's place. We
glimpse them: photos of Central American atrocities, dead
bodies, etc. He tries to study them, quickly, but his
attention shifts --
Nico glances around the apartment: more law books, Jackson's
degree on the wall, her rowing machine on the floor, several
framed photos beside him on her desk. Nico turns several
toward him.
ABOVE THE LAW - Rev. 4/29/87 85.
322 INSERT - FRAMED PHOTOS
Jackson with her sisters and their kids, Jackson in law
class, Jackson and Nico posing, smiling, at the police shooting range --
323 BACK TO NICO
He starts to cry.
NICO
(to Jackson's photo)
-- Had to be a hero... another fucking
hero. I'm sorry Jax.
He reaches for a small calendar, looks at it.
324 CLOSEUP - CALENDAR
Nico circles "meet with Father Tomassino." Nico circles
another date, "Senator delivers foreign policy position
paper/Committee for Democratic Policy fund raiser." *
325 OMITTED
&
326
327 BACK TO NICO
Nico scoops up the aide's papers, stands, wobbly --
NICO
-- Senator... --
(of papers, with scorn)
-- dumb fuck... think they're gonna
let you put 'em outta business --
327A INT. EMERGENCY ROOM CORRIDOR - NIGHT
Several cops frantically clear the way to the emergency room.
A gurney is wheeled down the corridor. Lukich, a shoulder
bandaged, walks beside the gurney, holding the hand of Jackson.
327B CLOSEUP ON
a bloody flak jacket rests upon the gurney.
327C CLOSEUP - JACKSON
She's been sedated. She has buckshot wounds on her neck and
shoulder, but she is alive.
JACKSON
(to Lukich)
You call Nico's goddamn Uncle and
find out if he's heard anything.
ABOVE THE LAW - Rev. 4/17/87 85A. *
LUKICH
(wounded himself)
You just shutup and take it easy,
pal.
328 INT. TAXI - NIGHT
CLOSEUP of Nico riding through the wet streets.
328A INT. EMERGENCY ROOM
Lukich is on the phone. His shirt is off and he's being
bandaged. In the background Jackson is also being cared
for.
LUKICH
(on phone)
We don't know what happened to him,
Branca. Ya, she's gonna be alright.
328B INT. BRANCA'S SAFE HOUSE - NIGHT
Branca, a bodyguard next to him, grimly puts down the phone.
He looks devastated.
ABOVE THE LAW - Rev. 4/29/87 86.
329 EXT. DRIVEWAY - BRANCA'S SAFE HOUSE - NIGHT
From the darkness, Nico appears, barely making it up the
driveway. We hear the sound of the CAB DRIVE OFF.
330 EXT. BRANCA'S SAFE HOUSE - NIGHT
Branca and a bodyguard come forward, grabbing Nico as Nico
almost collapses.
BRANCA
Jesus Christ!
NICO
The motherfuckas got Jackson.
BRANCA
Lukich called. She's not dead.
She's gonna make it. She was
wearing a vest.
Nico can't believe it. In spite of it all, life comes to
him. A little smile...
NICO
That broad didn't trust me.
CUT TO:
331 EXT. BRANCA'S SAFE HOUSE - POV FROM WINDOW - NIGHT
We glimpse several armed bodyguards in concealed positions.
A late-model Cadillac pulls up. A man carrying a doctor's
bag gets out and is escorted to the side door.
332 INT. BRANCA'S SAFE HOUSE - NIGHT
Rosa has pulled back the curtain from the second-floor bedroom window. She witnesses the arrival of the doctor. On
the bed behind her sleep Sara and Julian. A bodyguard *
stands outside the bedroom door.
333 INT. BASEMENT FAMILY ROOM - NIGHT
The doctor tends Nico. Bloody bandages and antiseptic
bottles litter a coffee table. Two guards stand by. Branca
is showing Nico an 8-by-11 photograph.
BRANCA
It was picked up with your mail this
afternoon.
334 INSERT - PHOTOGRAPH
A shot of Nico's family taken from a parked car, in front of
the church, the morning of the bombing.
ABOVE THE LAW - Rev. 4/29/87 87.
335 BACK TO NICO AND BRANCA
Nico's grim expression shows he knows just what this means.
BRANCA
Don't worry, they're booked on an early
plane. They'll be out of the country
tomorrow.
Nico winces as the doctor finishes applying a bandage. In
the background we hear a COMMOTION.
336 INT. BASEMENT STAIRWAY - NIGHT
A bodyguard tries to fend off the physical and verbal assault
from Sara and Rosa. Sara carries Julian. *
337 INT. BASEMENT FAMILY ROOM - NIGHT
Sara rushes to Nico's side. Nico reaches for her, but *
the pain stabs him.
SARA *
Oh my God, Nico! *
Rosa starts forward, her face in agony at the sight of her
wounded son.
BRANCA
He's fine. The boy has ribs of steel!
ROSA
(touching Nico's brow)
Enough of your humor.
Sara clings to Nico's arm, tears in her eyes. Rosa *
crosses herself. Sara begins to weep. The doctor finishes. *
There's a long awkward moment. Then:
BRANCA
(to doctor and
bodyguards)
Leave them. Leave them alone.
QUICK DISSOLVE TO:
338 INT. FAMILY ROOM - LATER
Rosa sits in a chair. Nico on the couch, holding Julian.
Sara faces him. Tears have stained her cheeks, but she *
is in control of her emotions now. *
SARA
-- You've got to do it, Nico. You
know you have to.
Whatever Sara is proposing, Nico is dead set against it.
ABOVE THE LAW - Rev. 4/29/87 88. *
ROSA
Listen to her, Nicola.
(dead serious)
Whatever you think of him, Federico
is family. He is our family.
Nico makes no response. Instead, he lifts Julian, nuzzles
him tenderly.
NICO
Ever notice how clean babies smell?
Like nothing in the world has touched
them yet.
Sara glances to Rosa. Rosa knows what she wants. Discreetly Rosa rises, exits. Sara and Nico are alone.
SARA
If you won't go to him, I will.
NICO
(in pain)
Don't push me like this --
Her eyes meet his -- loving, but desperate.
SARA
Branca can put us on a plane -- but
where can we fly to? Tibet? The moon?
There's nowhere they can't find us.
NICO
You don't know what the hell you're
talking about.
SARA
I'm talking about everything I've
learned from you in the past five
years.
Nico is in agony.
NICO
You know I can't go to him.
Sara takes both his hands in hers.
SARA
Do you know why I love you? Do
you know what it is about you
that I've always loved?
(as Nico fights his
own emotion)
Pride. It's what you have inside.
You don't live the way other people
live. You trust what you see as
right and won't let anyone or anything
make you stray from it.
ABOVE THE LAW - Rev. 4/29/87 88A. *
MOVE IN PAST Sara TO Nico's face.
SARA (O.S.)
But now that pride may kill all
of us.
(beat)
You've got to swallow that pride,
Nico. Choke on it if you have to.
Lay it aside.
339 ANOTHER ANGLE - NICO AND SARA
Close together, with their baby between them. Sara
buries her face against her husband's chest. Nico's arm
goes around her. He holds her tight.
CUT TO:
340 CLOSE - NICO - AGAINST WALL - DAY
He wears a suit and tie, a hat. All business.
MAN (O.S.)
Is this the attorney?
ANOTHER MAN (O.S.)
You can come now, Mr. Carlucci.
O.S. we hear a METALLIC sound BEGIN, VERY CLOSE -- PULL
BACK TO:
341 ANOTHER ANGLE
To reveal bars which slide electrically to the side. A
prison door opens, letting him through.
342 ANGLE - PRISON CORRIDOR - DAY
Nico, escorted by a prison guard, walks down a long, blank
hallway.
CUT TO:
343 NICO
Waiting in a barren reception room. Several benches, tables;
heavy steel mesh over windows --
344 NICO'S POV - ACROSS ROOM
A steel door opens on the far side. Out steps a small
Italian man in his seventies, wearing the faded denim of
an inmate.
ABOVE THE LAW - Rev. 4/29/87 88B-90.
345 INT. PRISON CORRIDOR - LONG SHOT - DAY *
Nico and the small man (FREDERICO LARUSSO) walk together down *
a long corridor, speaking occasionally, the tension thick *
between them. Behind them, a discreet fifteen paces, walk *
two armed prison officials.
346 CLOSER - LARUSSO AND NICO
The old man never looks directly at Nico, yet we sense keenly
that he is taking the younger man's measure.
FREDERICO LARUSSO
I am only an old man. An old man
with a cancer.
The two are like an old and a young lion, appraising each
other -- using all five senses and more.
NICO
I don't have much time, Uncle. So
I must speak plainly.
Larusso listens. Nico waits for a beat. Then:
ABOVE THE LAW - Rev. 4/17/87 91.
NICO
(this is very painful
for him)
-- For as long as I've been old enough
to think, I've hated you and hated
everything you stood for.
Larusso takes this in without a flicker.
NICO
I was so sure that you and I were on
opposite sides of the fence... and
that you and your people were
destroying this country --
Nico pauses, glances away across the grounds.
NICO
-- The most painful realization of my
life was that the people I worked for
and you are not far apart.
(meets Larusso's eyes)
-- And there's not much difference
between what you are and what I was.
Larusso studies Nico a long moment. Then takes Nico's elbow. *
* 347 OMITTED *
348 NICO AND LARUSSO
continue across the grounds.
FREDERICO LARUSSO
I will be candid with you. I knew,
probably before you did, that you
would be coming to me. I knew what
you would ask... and I had every
intention of refusing you.
He glances to Nico.
FREDERICO LARUSSO
But it is a form of wisdom to know
when to cease relying only upon
yourself.
He keeps walking.
FREDERICO LARUSSO
You know, of course, that this Senator
Harrison will never live to make his
speech tomorrow.
(as Nico acknowledges)
You know, too, that as long as this
man... this torturer --
ABOVE THE LAW - Rev. 4/29/87 92.
NICO
Kurt Zagon.
FREDERICO LARUSSO
-- As long as this Zagon lives, nothing
I can do will guarantee your family's
safety.
(beat)
'Ecce non uomine, ecce bestie.' You
know Dante?
(translates)
'These are not men, these are animals.'
Larusso stops, takes a small note pad from his pocket. He
quickly scribbles a few lines.
FREDERICO LARUSSO
Memorize this address.
He holds the paper for Nico to see.
FREDERICO LARUSSO
Have you got it in your mind?
Nico nods. Larusso tears the paper into tiny shreds. *
349 INT. ADMIN BUILDING - RECEPTION ROOM - DAY
The old man takes his leave of Nico with a warm, if formal
handshake. The guards stand by, waiting.
FREDERICO LARUSSO
Thank you, Mr. Carlucci. I trust you
will give my love to my niece, Rosa.
NICO
I will do that, Mr. Larusso.
(sincerely)
I hope you will be well.
350 LARUSSO
nods: "Bene." Then: without a word he turns and exits
back through the steel door.
CUT TO:
351 INT. O'HARE AIRPORT - BOARDING GATE - DAY
Passengers file aboard a flight to Toronto. Hugs, goodbyes.
Rosa, carrying the baby, is among the crowd moving toward
the boarding door. Leaving with them are two of Branca's
men. We PICK OUT Branca and two of his bodyguards near the
fringes, looking inobtrusive but definitely on guard.
ABOVE THE LAW - Rev. 4/29/87 92A/93.
352 CORNER NEAR BRANCA
Hidden by a bank of phones, Sara clings to Nico, holding *
him as tight as she can. When she releases him, we can't
hear what she says, but it seems like, "Be careful, please be
careful." Nico glances to Branca, who motions subtly to
hurry.
He squeezes Sara's hand, she joins the crowd swelling *
toward the boarding door --
CUT TO:
353 EXT. O'HARE - RUNWAY - DAY (STOCK) *
An Air Canada PLANE BLASTS skyward.
354 NICO AND BRANCA
watch from an open corner of a parking lot. As the plane
begins its bank to gain altitude, Branca turns to Nico.
The two bodybuards keep a discreet watch nearby.
BRANCA
You got the architect's drawings?
Wiring, floor plans --
Nico indicates a briefcase he is carrying.
NICO
It's all here.
Nico turns to his uncle. Regards him with affection.
BRANCA
I could help you from here on.
NICO
It's not your business.
Nico embraces his uncle by both shoulders.
NICO
Grazie, tio caro.
Branca pats Nico's cheek.
BRANCA
Take care of yourself, Nicola.
CUT TO:
355 SERIES OF SHOTS
SEVERAL SHOTS of high-rise cityscapes at night.
DISSOLVE TO:
ABOVE THE LAW - Rev. 4/17/87 94.
356 OMITTED *
thru * 360 *
361 TELESCOPE POV - CHICAGO SKYLINE - NIGHT
CAMERA PANS TO the apartment complex across the plaza.
FOCUS ON one suite on the topmost floor. Curtains are drawn
on all windows, but through one crack we glimpse a man
pacing. The man wears a white shirt and a shoulder holster.
362 RAISE TELESCOPE POV
TO the roof of the apartment complex. We see a heli-pad.
Two more men, also in suits -- smoking, talking.
ABOVE THE LAW - Rev. 4/17/87 95.
363 LOWER TELESCOPE POV
BACK TO the apartment suite. Now another man crosses before
the gap in the curtains. Wearing a cowboy hat: Zagon!
He's laughing, pouring himself a drink at the wet bar --
364 EXT. ROOFTOP SKYSCRAPER - NIGHT *
Nico, looking through a high-tech night telescope. His *
briefcase is by his feet, open. Several architect's *
drawings, floor plans visible.
365 NICO
lifts his eye from the scope, jots a note on a pocket pad. *
VOICE (O.S.)
Not even you can hit him at this range,
Nico.
O.S. behind Nico: the unmistakable sound of a .45 SAFETY
being CLICKED OFF. Nico freezes, his back to the voice. He
raises his hands.
NICO
That wasn't the plan, Nelson.
366 NELSON FOX
covers Nico from behind with a silencer-fitted .45. He
glances to the briefcase and building plans, on the floor.
FOX
Close range, huh? Never work. Place
is rigged, scanned every 35 seconds.
NICO
(back still turned)
I was thinking of a mine on the roof.
Remote-triggered, when the chopper
comes in.
FOX
Roof's wired too. Sensors every
fifteen feet.
Fox's finger rests ready on the trigger.
FOX
You can turn now. Slowly. Slooowly...
Nico turns. We see Fox clearly now. His boyish features
have weathered since his "spook" days in Vietnam. There is
grey in his hair now: he wears an expensive suit and is
alone.
ABOVE THE LAW - Rev. 4/17/87 96.
FOX
I figured you'd do your recon from this
building.
Nico regards his old mate across the gun barrel.
NICO
You're looking fit, Nelson.
FOX
Getting a bit of a tire.
NICO
(indicates Fox's suit)
Your own tailor?
FOX
Hong Kong.
NICO
You've gone a long way.
Fox motions for Nico to dump his gun; Nico complies, dropping
it gently into the briefcase. Nico takes half a step toward
Fox. Fox shakes his head in warning.
FOX
Uh uh. Uhhh-uh...
(motions Nico back)
I know what you can do when you get too
close to a man.
367 CLOSEUP - NICO *
NICO *
I don't believe you, Fox. *
367A INT. BUILDING CORRIDOR - NIGHT *
Nico walks, hands behind his head. Fox is catty-corner be- *
hind him, carrying the briefcase, .45 leveled at Nico's back. *
FOX
-- What's so hard to believe. I
want to help you, you dumb guinea!
NICO
Fox the fixer.
FOX
If I wanted to cap you, I'd have saved
myself this chit-chat. Make big points
for me to bring in your scalp. I'd be
White House material.
NICO
Is that what Zagon is? One of your
basement boys?
ABOVE THE LAW - Rev. 4/17/87 96A.
FOX
Zagon's a rancher. 4000 acres in
Costa Rica. Beautiful place.
ABOVE THE LAW - Rev. 4/17/87 97. *
NICO
Bought with what -- opium from Cambodia?
FOX
And a ton a week of coke from other
places.
NICO
Which he funnels here through Salvano.
With the Company getting its cut.
FOX
Legal tender.
NICO
Still dodging appropriations
committees, eh, Nelson?
FOX
That's my job, Nico.
They arrive at an elevator.
FOX
Keep your nose in the corner. When
we get out, stay five paces ahead of
me. Cross down to the garage.
367B INT. LOWER CORRIDOR
Nico and Fox emerge from the elevator. Nico lowers his hands
from behind his head. Fox keeps his gun out of sight as he
and Nico step past.
368 ELEVATOR BANK - NIGHT
Fox maintains a slight distance behind Nico as they cross toward some escalators under a sign: "TO PARKING LEVEL 8."
NICO
The Senator couldn't be bought, could
he? He was gonna blow the lid off, so
you cleared Zagon to frost him --
FOX
Keep walking.
369 INT. PARKING STRUCTURE
They reach a corner and turn.
97A.
NICO
But the priest found out somehow and
ran here. You couldn't do the Senator's
number 'till you knew if the priest had
talked. So Zagon flew in with his
little medical bag. Only by then I was
in on it -- and you thought I might
recognize his handiwork.
ABOVE THE LAW - Rev. 4/17/87 98.
370 PARKING GARAGE - VALET STATION *
Several guests and diners wait by the cashier's booth for
their cars to be fetched. Valets hustle with tickets. Fox
and Nico come off the escalator.
FOX
If your name was Joe Smith I never
would have caught it. But how many
Nicola Toscani's are there?
NICO
You got it off the arrest sheet.
Fox hands his ticket to the cashier, motions Nico to the
side, away from the guests, still keeping his distance --
should Nico try to make a move.
FOX
I tried to warn you, old buddy. I knew
you had wiretaps. and I knew you
wouldn't let 'em go.
NICO
Only I was too dumb to crack it. I was
so busy trying to figure a code, I
didn't even recognize Zagon's voice.
It's all crystal clear to Nico now.
NICO
So we kill our own senators now.
FOX
Why not? The Romans did.
A Cadillac pulls up; the valet hops out, two particularly
florid, well-fed guests get in, tipping the valet.
NICO
(to Fox, watching the
guests)
Are we the Romans?
FOX
We're an empire too.
Fox doesn't like the look Nico gives him.
FOX
Would you rather spoon borscht and
quote Lenin?
(losing patience)
I'm trying to save you, asshole! I got
a spot for you. Thailand, deep under,
no names, no numbers --
99.
NICO
Doing what -- processing heroin?
FOX
You 'consult.' You 'assist.' You send
checks to your family. Zagon won't
touch you, you'll be on the team --
NICO
Fuck you.
FOX
In five years you're out, with a fat
Swiss account and a GS-15 pension.
Nico stares at his old friend with contempt. He sees the
gun under Fox's coat, but he's too tired and too disgusted
to care --
NICO
You know, Fox, right now in Israel
they're trying some 80-year-old camp
guard for war crimes. And all around
our country there are guys on Death
Row for killing one person, two people.
And probably they all deserve it --
He takes a step toward Fox. Fox's hand tightens on his gun.
NICO
(emotion rising)
-- but you and I know a couple guys
personally who are responsible for the
murder of at least what... 60,000 nonmilitary personnel.
(ticks off the beats)
Viet. Lao. Thai. Cambodian.
Librarians, teachers, doctors... women,
children... and that's just a sliver of
it.
Fox tries to maintain a hard face. But his own guilty
conscience is working --
NICO
(presses closer)
We've wiped out entire fucking
countries. And not one agent --
FOX
(moves gun into Nico's
view)
Stop right there!
ABOVE THE LAW - Rev. 4/29/87 100.
NICO
(doesn't stop)
-- not one C.I.A. agent has ever been
tried or convicted, much less accused
of any crimes.
(closer still)
You motherfuckers think you're above
the law --
(right in Fox's face)
Well, you ain't above mine.
Nico holds himself, trembling with intensity. At that
moment -- O.S. from the garage entrance ramp: the SQUEAL
of APPROACHING TIRES. Nico and Fox turn to see --
*NOTE* 4-17-87. THE FOLLOWING SEQUENCE (SCENES 371 - 401) WILL BE
MODIFIED TO CONFORM TO LOCATION. DO NOT BUILD OR PURCHASE
WITHOUT CHECKING WITH STUNT COORDINATOR AND ASSISTANT
DIRECTORS. STORYBOARDS AND NEW PAGES WILL BE AVAILABLE NEXT
WEEK.
371 A BIG CAR *
SCREECHES to a halt in front of them. Five men dismount *
swiftly. Salvano, Bad Dude, and two agent types from the *
tenement... and Zagon! *
Zagon and his men are forty feet from Nico and Fox, playing
it cool so as not to alarm any innocent bystanders, but the
bulk under their jackets is unmistakably guns.
NICO
Well... well. What a team we have
here.
ZAGON
(calls, friendly)
We've been looking for you, Nelson. I
see you've found our friend.
Fox looks shaky, unnerved: Nico's words have hit too close
to home. Now Nico backs away a step, ready for anything.
One of Zagon's agents holds their car's rear door open. *
NICO
Thanks for the help, Fox.
FOX
I didn't bring him, Nico. I swear it!
ZAGON
Have you two been sharing fond memories?
Reminiscing about the good old days?
Zagon waves Nico and Fox toward his car. Zagon and *
Salvano start forward. Fox glances, torn, to Nico, who
has backed away another half-step. Will Nico attack?
Run for it?
100A.
FOX
Stay still!
(to Nico)
Don't fucking move!!
Fox pulls his .45 from concealment, covering Nico. An
EVENING-GOWNED WOMAN, waiting with her husband for their
car, hears Fox's shout, sees his gun.
101.
EVENING GOWN WOMAN
(grabs her husband's arm)
Jack --
The husband sees. So do the other guests. Salvano sees
their alarm; he swings his jacket open, revealing a snub
machine gun. Someone SCREAMS --
ZAGON
Bring in our friend, Nelson.
Salvano's muzzle covers Fox and Nico --
ZAGON
Be a good boy --
372 FOX
His moment of truth.
FOX
Dive, Nico!!
He FIRES -- at Salvano! In the same instant, Salvano pulls
his own trigger! Salvano's MACHINE GUN BURST cuts Fox down,
a milli-second before Fox's .45 SLUG BLOWS Salvano off his
feet! Pandemonium. Fox, dying, slings his .45 to Nico, who
snatches it from the ground just as a HAIL of MACHINE GUN
FIRE THUNDERS around him. Nico dives headlong behind a
concrete column, which is instantly chewed to shreds by
GUNFIRE. Zagon FIRES his MAC-10 on full automatic. A
second agent hurries forward to outflank Nico. Nico pops
from behind the column, DRILLS the agent broadside behind
the ear, blowing the whole side of his head off! Guests and
valets are shrieking in terror, hitting the deck in
clusters, clawing and scrambling over each other for safety.
ZAGON
(to first agent,
advancing)
Move!
Nico springs from cover, FIRING, trying to bolt down the
garage ramp, toward the lower levels. His path puts the
first agent directly in Zagon's line of fire. Zagon doesn't
hesitate; he OPENS UP on Nico, cutting down his own man --
Salvano has gotten to his feet, wounded, but still handling
his gun. He joins Zagon, rushing forward --
373 RAMP TO LOWER LEVELS
A valet rounds a corner, unsuspecting, bringing up a car.
Nico is on him like a cat, tearing the poor boy from behind
the wheel, leaping in --
ABOVE THE LAW - Rev. 4/17/87 102.
374 ZAGON AND SALVANO
tear around the corner at the top of the ramp. Both OPEN
FIRE as --
375 NICO - IN CAR
highballs straight toward them!
376 SALVANO
hold the trigger down, FULL AUTOMATIC --
377 NICO'S CAR (MOVING)
Nico drops below the dash, driving blind. The WINDSHIELD is
BLOWN APART, both FRONT TIRES EXPLODE, the RADIATOR BLASTS
STEAM --
378 ZAGON
Reloading as Salvano FIRES.
379 NICO'S CAR
pinwheels out of control, its nose facing away from Salvano
and Zagon. The car BRAKES FURIOUSLY --
380 NICO
hits reverse, looking back over the seat --
381 NICO'S POV - THROUGH REAR CAR WINDOW
He sees Salvano, his clip empty now, hurrying to wrestle a
fresh magazine in --
382 ANGLE - NICO'S CAR AND SALVANO
Nico floors it in reverse, slamming into Salvano, lifting
him off his feet, smashing him with the car into a metal *
grate wall. *
383 SALVANO
A horrible death.
383A EXT. PARKING STRUCTURE - NIGHT *
From the eighth floor the metal grate of the parking struc- *
ture blows out onto the street below, followed by Salvano's *
body. *
384 NICO - BEHIND THE WHEEL
BURNING RUBBER FURIOUSLY, away from the wall --
102A.
385 ZAGON
Reloaded, turning his gun toward Nico, when --
386 TWO UNIFORMED HOTEL SECURITY GUARDS
hurtle around the corner from the escalators, guns drawn.
ABOVE THE LAW - Rev. 4/29/87 103.
FIRST SECURITY GUARD
(shouts to Zagon)
You there --
Zagon spins, rips both guards with a FIERCE BURST! The
Guards drop. Zagon turns to --
387 NICO - OUT OF CAR
on his feet, charging straight at Zagon. Nico grabs him,
slams Zagon with incredible force into a concrete column.
Zagon's gun goes flying, but miraculously he spins away.
Nico dives for him, gets his neck in a grip that is certain
to snap it in half a second. But --
388 ZAGON'S KNIFE
appears in the torturer's hand. It slashes Nico, right across his already wounded ribs! Nico cries in agony --
389 ZAGON
scampers free. Nico gets to his feet, bleeding. Nico is
between Zagon and Zagon's machine gun on the ground. Zagon
bolts for his car. Nico dives for the gun -- *
390 CAR *
Zagon floors it into a SCORCHING 360, BLASTS up the exit
ramp, out of Nico's line of fire --
391 NICO
leaps into the other, half-destroyed car. Its two front
tires are flat, windshield blown out, RADIATOR POURING STEAM.
Nico does the only thing he can do: puts the pedal to the
metal in reverse, BLASTS across the ramp divider, takes off
after Zagon in reverse --
392 ON RAMP - ZAGON'S CAR *
Another car is coming down. Zagon sideswipes it into a wall,
keeps going --
393 ON RAMP - NICO'S WRECKED CAR
Rear TIRES CHURNING smoke, FRONT FLATS SCRAPING on their
rims... he pours on the speed --
394 TOP OF RAMP - HOTEL ACCESS DRIVE
Zagon's car whips out into the night-time commotion.
Pedestrians, POLICE SIRENS O.S. Zagon looks behind him --
395 NICO'S CAR - TOP OF RAMP
hurtles into view in reverse!
ABOVE THE LAW - Rev. 4/29/87 104.
396 ZAGON'S CAR *
is trapped by the traffic. Zagon looks around wildly, then
floors the accelerator. Zagon's car bucks straight up the *
pedestrian steps, onto the plaza! Strollers scream and
scatter as it fishtails wildly, careening toward the *
huge stone fountain --
397 NICO'S WRECKED CAR
Follows, pouring smoke, in reverse! Nico cuts Zagon off,
CRASHES into Zagon's car broadside, sending it skittering *
sideways into the fountain retaining wall --
398 ZAGON
leaps free, sprints toward the hotel alley. Nico takes off
after him on foot --
399 EXT. ALLEY - REAR OF HOTEL - NIGHT
Zagon races down the darkest of alleys, rounds a corner --
400 NICO
hurtles after him, gaining. Nico whips around the alley
corner, straight into:
401 FOUR ARMED AGENTS
waiting beside a plain grey TV remote van. Nico skitters *
to a stop as a shotgun, an M-16 and two pistols cover him.
Shotgun Agent raises his weapon to fire --
ZAGON
No! I want him! I want him alive!
402 EXT. MIDLAND HOTEL - NIGHT *
A banner reads: WELCOME COMMITTEE FOR DEMOCRATIC POLICY *
403 EXT. ANOTHER ALLEY - BEHIND MIDLAND HOTEL - NIGHT *
A car pulls up. Nico, his wrists tied, is dragged into the
basement of the hotel. Zagon follows.
CUT TO:
404 INT. BASEMENT ROOM - NIGHT
Sweating, windowless concrete. Overhead pipes. Churning
machinery. As the CAMERA REVEALS this airtight dungeon --
PISTOL AGENT (O.S.)
-- this is bullshit, Zagon. We got
work to do.
ABOVE THE LAW - Rev. 4/17/87 105.
ZAGON (O.S.)
All work and no play makes Jack a dull
boy.
405 NICO
in a metal chair, wrists taped in front of him. One agent
stands behind him, clasping a thin cable noose wrapped
tight around Nico's throat. Shotgun agent holds his
weapon on him, its twin muzzles inches from Nico's skull.
406 ZAGON
finishes washing his hands in an industrial-type sink. He
is cleaned up, wearing a fresh shirt, his hair combed.
When he dries his hands, he looks like a surgeon preparing
to operate.
ZAGON
We've got an hour before the
honorable senator.
(hands towel to
pistol agent)
You've got to learn to take time,
smell the roses.
Zagon turns to Nico.
NICO
How are you gonna do him, Zagon?
In a motorcade? Or passing
through a hotel kitchen?
The Noose agent jerks his cable tight, making Nico gag and
choke. Zagon motions to slacken off. He stops at a
small table before Nico -- unrolls a well-worn felt pouch.
Zagon watches Nico's reaction as the tools of the interrogator's trade come into view -- drug vials, syringes,
scalpels, surgical tools.
ZAGON
I've used these little beauties
many times to extract information --
(lifts a needle to
the light)
-- This'll be the first time I've
ever used them... just for fun.
Zagon sets the syringe down, slips on a heavy, weighted
glove.
ZAGON
(to agents)
Take his arms.
Pistol agent and Bad Dude move in, one on each side, *
seizing Nico's forearms. Shotgun agent holds his weapon
tight to Nico's head.
106.
Zagon punches Nico square in the face, so hard the chair
reels backward, spinning out from under Nico --
ZAGON
Hold him up!
Pistol agent and Bad Dude lift Nico. Zagon slams him
again. Again. Nico's cheekbone is broken; blood drains
from his nose. Zagon aims a two-handed blow; backhands
Nico, crushing the other side of his face! Zagon backs
off, chest heaving. Pistol agent and Bad Dude plop Nico
back in the chair, gagging, choked by the noose. Nico
looks like the Viet prisoner -- the one we saw in the
opening sequence. Like the prisoner, Nico takes his
beating -- still conscious, still meeting Zagon's eyes
with defiance.
ZAGON
This is where you came in, Toscani.
Only, now it's where you're gonna
check out.
He takes off his glove, grabs the syringe. Pistol agent
and Bad Dude clamp Nico's right arm down tight. Zagon
injects Nico.
407 NICO
reacts instantly to the hypo -- cursing, sputtering under
the choking noose. He twists wildly trying to free himself, but the agents' powerful arms hold him.
ZAGON
That's it. Fight it, cherry.
Fight it, so it speeds faster on
its way --
Nico struggles more violently.
ZAGON
Fight it. Till the vessels burst
in your brain. Till the arteries
rupture in your heart --
Slowly, the struggle goes out of Nico. His muscles go
limp; he slumps -- drooling, babbling incoherently.
ZAGON
That's my boy. That's what I was
waiting for --
Zagon produces his famous knife. He motions Pistol agent
and Bad Dude to release Nico's arms. Noose agent slackens
his grip on the choke cable. Zagon moves in closer,
gloating, cooing --
107.
ZAGON
A fool learns from his own
mistakes. But a wise man learns
from the mistakes of others --
(moves closer, blade
in hand)
You should have killed me when
you had the chance, Toscani --
The blade moves to Nico's throat. Suddenly: Nico springs
to life (catching Noose man by surprise and jerking the
cable from his grip) -- grabbing Zagon with his taped
hands by the throat, lifting him bodily, slamming him
ferociously into the wall! Zagon drops to the floor,
half-conscious. Nico spins instantly to find: the Shotgun agent right behind him, raising his weapon to Nico's
face, about to pull the trigger. Nico sidesteps, grabbing
the man's wrist. The SHOTGUN GOES OFF, missing Nico by
inches, blasting a huge chunk out of the concrete wall.
The Noose agent draws his weapon from his shoulder
holster. Nico snaps the Shotgun agent's wrist, flipping
him through the air, simultaneously grabbing the weapon,
spinning behind the Noose agent, then using the shotgun
barrel like a club to smash the back of his head in!
Another swing wipes out Pistol agent. Bad Dude, now with
a clear shot, aims his M-16. Nico blows him away with a
double-barreled SHOTGUN BLAST. In a flash, Nico has spun
to Zagon's surgical tool table, lifted a rzor-sharp
scalpel and slashed the tape, freeing his hands. He
yanks the choke cable off his neck --
408 ZAGON - AGAINST WALL
On his feet again. He reaches swiftly to the floor,
snatches up his famous knife. Nico confronts him -- face
battered, bloody -- shaking, battling internal spasms.
ZAGON
Can you feel the chemicals,
cherry? You can't fight 'em much
longer --
NICO
Long enough to finish you.
Sweating, half-spitting, Zagon slashes at Nico like an
animal -- Nico traps the knife, and enters, smashes Zagon
in the face with one lightning blow. We see Zagon's nose
and face completely cave in. Nico comes under Zagon's
elbow, the arm that still holds the knife clamping it in
a vise-like grip and bending it backwards, slowly, against
the joint -- which now starts to rip in half. Zagon is
screaming and cursing, writhing in agony -- The drugs
have hit Nico full force now. He's weakening, his eyes
are starting to roll. Zagon tries one last surge of
strength to save himself; it almost seems he'll wriggle
free when: the elbow JOINT SNAPS in half with a sickening sound.
ABOVE THE LAW - Rev. 4/29/87 108.
As the joint hangs, dangling grotesquely, Nico reaches up
around Zagon's neck, still holding the dangling limb with
one arm. He begins to now do to Zagon's neck what he did
to his arm. We hear a terminal CRACK. Zagon's body
crumples to the floor. Nico, in delirium, staggers
toward the door --
409 INT. HOTEL LOBBY - REAR STAIRWELL - NIGHT
A woman at a pay phone. She turns, drops the receiver
in shock as --
410 NICO
bursts, delirious, from the stairwell door!
411 MAIN LOBBY - FRONT ENTRANCE
A commotion as Lukich, Agent Neeley and Jackson, arm in a *
sling, race in from their car.
412 MAIN LOBBY - REAR - NICO
weaves wildly forward. He drops to his knees. Guests
react in astonishment and horror.
412A JACKSON
is the first to spot Nico. She runs up to him as he
collapses.
412B NICO
looks at Jackson.
413 LUKICH AND NEELEY *
reach Nico and Jackson.
LUKICH
(shouting for
anyone)
Is there a hotel doctor? Call 911!
ABOVE THE LAW - Rev. 4/17/87 108A. *
414 NICO
passes out in Jackson's arms. Behind them we see a banner,
announcing Senator Harrison's address. From the ballroom we
hear CHEERS and APPLAUSE. A fiery address is being finished
inside. The senator is now leaving.
415 FULL SHOT - LOBBY
Total confusion. Guests staring everywhere. From a side
office, a man with a medical bag comes running. The senator
sees the group around Nico.
FADE OUT.
FADE IN ON:
416 EXT. NICO'S HOUSE - DAY
Press vans outside; a crush of cars, reporters, neighbors.
Newsmen are trying to gain access to the house, held back
by several cops and some of Nico's more strapping
relatives.
ABOVE THE LAW - Rev. 4/29/87 109.
417 BUICK STATION WAGON
escorted by two police motorcycles, pulls in. The press
surrounds it as Lukich, Neeley, Lieutenant Strozah and *
Jackson, her arm in a sling, disembark from the car.
417A SECOND CAR
pulls up. Neeley walks over and opens the door as a court *
stenographer, carrying her transcription machine case, steps
out -- followed by a federal judge, CLAYTON ALSPAUGH and
SENATOR ERNEST HARRISON.
418 REPORTERS
shove mikes and cameras at the senator and the judge, shouting
questions. Lukich, Neeley and Strozah clear a path for them. *
419 ANGLE FROM INSIDE HOUSE - THROUGH FRONT WINDOW
Harrison and Alspaugh fend off the questions, cross the path
and mount the steps to the house.
T.V. REPORTER (O.S.)
(in front of house)
-- Senator Harrison has today
issued a statement calling for the
appointment of a special prosecutor --
CUT TO:
420 INT. NICO'S HOUSE - DAY
Nico, propped up on the couch, looking like hell, but definitely conscious and in full command of his faculties.
Sara, Jackson, and Rosa beside him. *
421 TV
A network ANCHOR delivers the headline news.
ANCHOR (V.O.)
Earlier this week, the Harrison
Commission delivered its report
on the growing C.I.A. scandal to
Congress...
The image changes to SENATOR HARRISON behind a battery of
microphones, sitting at a senate hearing-type table, with a
plaque reading "SEN. ERNEST HARRISON" before him.
SENATOR HARRISON (V.O.)
(on TV)
-- officially-sanctioned deceit,
murder and corruption, will
continue until these men are
brought to justice.
ABOVE THE LAW - Rev. 4/17/87 109A.
422 NICO *
looks up as the real Senator Harrison, Judge Alspaugh and *
the others enter the room. TV SOUND DOWN. Harrison stops
before Nico, taking a moment to look with respect and admiration at the man propped up on the pillows.
ABOVE THE LAW - Rev. 4/29/87 110.
SENATOR HARRISON
Detective Toscani. I wanted to personally
thank you. You are making it possible for
a sliver of truth to finally come out.
He holds out his hand. Nico takes it. The senator gestures
to Judge Alspauch.
SENATOR HARRISON
And this is Clayton Alspaugh of the
fifth circuit court.
NICO
Your Honor.
The Judge nods to his stenographer, who swiftly sets up
her equipment, takes a seat. Rosa makes a face at Branca,
who rises, clearing a seat for the Judge. Sara moves *
in tight beside Nico.
JUDGE ALSPAUGH
Are you sure you're feeling well
enough?
Nico glances to Sara, to the supporting faces around *
him. Lukich. Neeley. Strozah. Jackson. The others. *
NICO
(to Alspaugh)
If you're ready to listen, I'm
ready to talk.
423 CLOSE - STENOGRAPHER'S HANDS
As the Judge's VOICE begins OVER, "slating" the depositions, the stenographer's fingers start moving.
PULL BACK TO:
424 ANGLE FROM OUTSIDE ROOM
The full scene. Nico telling his story. Responsible
officials recording it --
425 EXT. YARD OUTSIDE NICO'S HOUSE - DAY
The press corps, vans, neighbors -- CLOSING CREDITS BEGIN.
426 LONG PULLBACK
to the street, the houses, and finally: the neighborhood.
Nico's neighborhood, to which the truth has finally come
home. CLOSING CREDITS CONTINUE OVER.
FADE OUT.
THE END
THIS SCRIPT WAS PREPARED
BY WARNER BROS. INC.
SCRIPT PROCESSING DEPARTMENT
(818) 954-4632

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
