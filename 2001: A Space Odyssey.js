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

Note from poster to Kubrick newsgroup:

I found this on a bbs a while ago and I thought I'd pass it along to all 
of you Kubrick freaks out there.

02/23/89
Transcriber's note:

For all you Clarke/Kubrick/2001 fans,

I found the original paper copy of this screenplay a while back and felt 
compelled to transcribe it to disk and upload it to various bulletin 
boards for the enjoyment of all.

The final movie deviates from this screenplay in a number of interesting 
ways. I've tried to maintain the format of the original document except 
the number of lines per page of the original. In order to reduce the 
length of this file I've used a bar of "------" to delimit the pages as 
there was a lot of whitespace per original screenplay page.


------------------------------------------------------------------------
				    
				    2001: A SPACE ODYSSEY

					    Screenplay

						   by
 
			   Stanley Kubrick and Arthur C. Clark

					    Hawk Films Ltd.,
					    c/o. M-G-M Studios,
					    Boreham Wood,
					    Herts.
------------------------------------------------------------------------

TITLE					    PART I
					    AFRICA
					    3,000,000 YEARS AGO
------------------------------------------------------------------------
A1
VIEWS OF AFRICAN DRYLANDS - DROUGHT

The remorseless drought had lasted now for ten million years,
and would not end for another million. The reign of the ter-
rible lizards had long since passed, but here on the continent
which would one day be known as Africa, the battle for survival
had reached a new climax of ferocity, and the victor was not
yet in sight. In this dry and barren land, only the small or
the swift or the fierce could flourish, or even hope to exist.

10/13/65										 a1
------------------------------------------------------------------------
A2
INT & EXT CAVES - MOONWATCHER

The man-apes of the field had none of these attributes, and
they were on the long, pathetic road to racial extinction.
About twenty of them occupied a group of caves overlooking
a small, parched valley, divided by a sluggish, brown stream.

The tribe had always been hungry, and now it was starving.
As the first dim glow of dawn creeps into the cave, Moonwatcher
discovers that his father has died during the night. He did not know
the Old One was his father, for such a relationship was beyond
his understanding. but as he stands looking down at the emac-
iated body he feels something, something akin to sadness. Then
he carries his dead father out of the cave, and leaves him for the
hyenas.

Among his kind, Moonwatcher is almost a giant. He is nearly
five feet high, and though badly undernourished, weighs over
a hundred pounds. His hairy, muscular body is quite man-like,
and his head is already nearer man than ape. The forehead is
low, and there are great ridges over the eye-sockets, yet he
unmistakably holds in his genes the promise of humanity. As
he looks out now upon the hostile world, there is already

10/13/65										 a2
------------------------------------------------------------------------
A2
CONTINUED

something in his gaze beyond the grasp of any ape. In those
dark, deep-set eyes is a dawning awareness-the first intima-
tions of an intelligence which would not fulfill itself for another
two million years.

10/13/65										 a3
------------------------------------------------------------------------
A3
EXT  THE STREAM - THE OTHERS

As the dawn sky brightens, Moonwatcher and his tribe reach
the shallow stream.

The Others are already there. They were there on the other
side every day - that did not make it any less annoying.

There are eighteen of them, and it is impossible to distinguish
them from the members of Moonwatcher's own tribe. As
they see him coming, the Others begin to angrily dance and
shriek on their side of the stream, and his own people reply
In kind.

The confrontation lasts a few minutes - then the display dies
out as quickly as it has begun, and everyone drinks his fill of
the muddy water. Honor has been satisfied - each group has
staked its claim to its own territory.

10/13/65										 a4
------------------------------------------------------------------------
A4
EXT  AFRICAN PLAIN - HERBIVORES

Moonwatcher and his companions search for berries, fruit
and leaves, and fight off pangs of hunger, while all around
them, competing with them for the samr fodder, is a potential
source of more food than they could ever hope to eat. Yet
all the thousands of tons of meat roaming over the parched
savanna and through the brush is not only beyond their reach;
the idea of eating it is beyond their imagination. They are
slowly starving to death in the midst of plenty.

10/13/65										 a5
------------------------------------------------------------------------
A5
EXT  PARCHED COUNTRYSIDE - THE LION

The tribe slowly wanders across the bare, flat country-
side foraging for roots and occasional berries.

Eight of them are irregularly strung out on the open plain,
about fifty feet apart.

The ground is flat for miles around.

Suddenly, Moonwatcher becomes aware of a lion, stalking
them about 300 yards away.

Defenceless and with nowhere to hide, they scatter in all
directions, but the lion brings one to the ground.

10/13/65										 a6
------------------------------------------------------------------------
A6
EXT  DEAD TREE - FINDS HONEY

It had not been a good day, though as Moonwatcher had no
real remembrance of the past he could not compare one day
with another. But on the way back to the caves he finds a
hive of bees in the stump of a dead tree, and so enjoys the
finest delicacy his people could ever know. Of course, he
also collects a good many stings, but he scacely notices
them. He is now as near to contentment as he is ever
likely to be; for thought he is still hungry, he is not actually
weak with hunger. That was the most that any hominid could
hope for.

10/13/65										 a7
------------------------------------------------------------------------
A7
INT & EXT  CAVES - NIGHT TERRORS

Over the valley, a full moon rises, and a cold wind blows down
from the distant mountains. It would be very cold tonight -
but cold, like hunger, was not a matter for any real concern;
it was merely part of the background of life.

This Little Sun, that only shone at night and gave no warmth,
was dangerous; there would be enemies abroad. Moonwatcher
crawls out of the cave, clambers on to a large boulder besides
the entrance, and squats there where he can survey the valley.
If any hunting beast approached, he would have time to get back
to the relative safety of the cave.

Of all the creatures who had ever lived on Earth, Moonwatcher's
race was the first to raise their eyes with interest to the Moon,
and though he could not remember it, when he was young,
Moonwatcher would reach out and try to touch its ghostly face.
Now he new he would have to find a tree that was high
enough.

He stirs when shrieks and screams echo up the slope from
one of the lower caves, and he does not need to hear the

10/13/65										 a8
------------------------------------------------------------------------
A7
CONTINUED

occasional growl of the lion to know what is happening. Down
there in the darkness, old One-Eye and his family are dying,
and the thought that he might help in some way never crosses
Moonwatcher's mind. The harsh logic of survival rules out
such fancies. Every cave is silent, lest it attract disaster.

And in the caves, in tortured spells of fitful dozing and
fearful waiting, were gathered the nightmares of generations
yet to come.

10/13/65										 a9
------------------------------------------------------------------------
A8
EXT  THE STREAM - INVASION

The Others are growing desperate; the forage on their side of
the valley is almost exhausted. Perhaps they realise that
Moonwatcher's tribe has lost three of its numbers during the
night, for they choose this mourning to break the truce. When
they meet at the river in the still, misty dawn, there is a
deeper and more menacing note in their challenge. The noisy
but usually harmless confrontation lasts only a few seconds
before the invasion begins.

In an uncertainly-moving horde, the Others cross the river,
shieking threats and hunched for the attack. They are led
by a big-toothed hominid of Moonwatcher's own size and age.

Startled and frightened, the tribe retreats before the first
advance, throwing nothing more substantial than imprecations
at the invaders. Moonwatcher moves with them, his mind a
mist of rage and confusion. To be driven from their own
territory is a great badness, but to lose the river is death.
He does not know what to do; it is a situation beyond his
experience.

Then he becomes dimly aware that the Others are slowing

10/13/65										 a10
------------------------------------------------------------------------
A8
CONTINUED

down, and advancing with obvious reluctance. The further they
move from their own side, the more uncertain and unhappy
they become. Only Big-Tooth still retains any of his original
drive, and he is rapidly being seperated from his followers.

As he sees this, Moonwatcher's own morale immediately
revives. He slows down his retreat, and begins to make
reassuring noises to his companions. Novel sensations fill
his dim mind - the first faint precursors of bravery and
leadership.

Before he realizes it, he is face to face with Big-Tooth, and
the two tribes come to a halt many paces away.

The disorganized and unscientific conflict could have ended
quickly if either had used his fist as a club, but this
innovation still lay hundreds of thousands of years in the
future. Instead, the slowly weakening fighters claw and
scratch and try to bite each other.

Rolling over and over, they come to a patch of stony ground,
and when they reach it Moonwatcher is on top. By chance,

10/13/65										 a11
------------------------------------------------------------------------
A8
CONTINUED

he chooses this moment to grab the hair on Big-Tooth's scalp,
and bang his head on the ground. The resulting CRACK is
so satisfactory, and produces such an immediate weakening
In Big - Tooth's resistance, that he quickly repeats it.

Even when Big-Tooth ceases to move for some time, Moon-
watcher keeps up the exhilirating game.

With shrieks of panic, the Others retreat back, across the
stream. The defenders cautiously pursue them as far as
The water's edge.

10/13/65										 a12
------------------------------------------------------------------------
EXT  CAVE - NEW SOUND

Dozing fitfully and weakened by his stuggle, Moonwatcher is
startled by a sound.

He sits up in the fetid darkness of the cave, straining his
senses out into the night, and fear creeps slowly into his soul.
Never in his life - already twice as long as most members of
his species could expect - has he heard a sound like this. The
great cats approached in silence, and the only thing that
betrayed them was a rare slide of earth, or the occasional
cracking of a twig. Yet this is a continuing crunching noise
that grows steadily louder. It seemed that some enormous
beast was moving through the night, making no attempt at
concealment, and ignoring all obstacles.

And then there came a sound which Moonwatcher could not
possibly have identified, for it had never been heard before
in the history of this planet.

10/13/65										 a13
------------------------------------------------------------------------
A10
EXT CAVE - NEW ROCK

Moonwatcher comes face to face with the New Rock when he
leads the tribe down to the river in the first light of morning.
He had almost forgotten the terror of the night, because nothing
had happened after that initial noise, so he does not even
associate this strange thing with danger or with fear. There
is nothing in the least alarming about it.

It is a cube about fifteen feet on a side, and it is made of
some completely transparent material; indeed, it is not easy
to see except when the light of the sun glints on its edges.
There are no natural objects to which Moonwatcher can
compare this apparition. Though he is wisely cautious
of most new things, he does not hesitate to walk up to it.
As nothing happens, he puts out his hand, and feels a warm,
hard surface.

After several minutes of intense thought, he arrives at a
brilliant explanation. It is a rock, of course, and it
must have grown during the night. There are many plants
that do this - white, pulpy things shaped like pebbles, that
seem to shoot up in the hours of darkness. It is true that
they are small and round, whereas this is large and square;

10/13/65										 a14
------------------------------------------------------------------------
A10
CONTINUED

but greater and later philosophers than Moonwatcher would be
prepared to overlook equally striking exceptions to their laws.

This really superb piece of abstract thinking leads Moonwatcher
to a deduction which he immediately puts to the test. The white,
round pebble-plants are very tasty (though there were a few
that made one violently sick); perhaps this square one...?

A few licks and attempted nibbles quickly disillusion him.
There is no nourishment here; so like a sensible hominid, he
continues on his way to the river and forgets all about the Cube.

10/13/65										 a15
------------------------------------------------------------------------
A11
EXT CUBE - FIRST LESSON

They are still a hundred yards from the New Rock when the
sound begins.

It is quite soft, and it stops them in their tracks, so that they
stand paralyzed on the trail with their jaws hanging. A simple,
maddeningly repetitious rhythm pulses out of the crystal cube
and hypnotises all who come within its spell. For the first
time - and the last, for two million year - the sound of
drumming is heard in Africa.

The throbbing grows louder, more insistent. Presently the
hominids begin to move forward like sleep-walkers, towards
the source of that magnetic sound. Sometimes they take little
dancing steps, as their blood responds to the rhythms that
their descendants will not create for ages yet.

Totally entranced, they gather around the Cube, forgetting
the hardships of the day, the perils of the approaching dusk,
and the hunger in their bellies.

Now, spinning wheels of light begin to merge, and the spokes
fuse into luminous bars that slowly recede into the distance,

10/13/65										 a16
------------------------------------------------------------------------
A11
CONTINUED

rotating on their axes as they do; and the hominids watch, wide-
eyed, mesmerized captives of the Crystal Cube.

Then by some magic - though it was no more magical than all
that had gone on before - a perfectly normal scene appears. It
is as if a cubical block had been carved out of the day and
shifted into the night. Inside that block is a group of four
hominids, who might have been members of Moonwatcher's
own tribe, eating chunks of meat. The carcass of a wart-hog
lies near them.

This little family of male and female and two children is gorged
and replete, with sleek and glossy pelts - and this was a
condition of life that Moonwatcher had never imagined. From
time to time they stir lazily, as they loll at ease near the
entrance of their cave, apparently at peace with the world.
The spectacle of domestic bliss merges into a totally
different scene.

The family is no longer reposing peacefully outside its cave;
it is foraging, searching for food like any normal hominids.

10/13/65										 a17
------------------------------------------------------------------------
A11
CONTINUED

A small wart-hog ambles past the group of browsing humanoids
without giving them more than a glance, for they had never been
the slightest danger to its species.

But that happy state of affairs is about to end. The big male
suddenly bends down, picks up a heavy stone lying at his feet -
and hurls it upon the unfortunate pig. The stone descends upon
its skull, making exactly the same noise that Moonwatcher had
produced in his now almost forgotten encounter with Big-Tooth.
And the result, too, is much the same - the warthog gives one
amazed, indignant squeal, and collapses in a motionless heap.

Then the whole sequence begins again, but this time it unfolds
itself with incredible slowness. Every detail of the movement
can be followed; the stone arches leisurely through the air, the
pig crumples up and sinks to the ground. There the scene
freezes for long moments, the slayer standing motionless
above the slain, the first of all weapons in his hand.

The scene suddenly fades out. The cube is no more than a
glimmering outline in the darkness; the hominids stir, as if

10/13/65										 a18
------------------------------------------------------------------------
A11
CONTINUED

awakening from a dream, realise where they are, and scuttle
back to their caves.

They have no concious memory of what they had seen; but that
night, as he sits brooding at the entrance of his lair, his ears
attuned to the noises of the world around him, Moonwatcher
feels the first faint twinges of a new and potent emotion - the urge
to kill. He had taken his first step towards humanity.

10/13/65										 a19
------------------------------------------------------------------------
A12
EXT cave AND PLAINS - Utopia

Babies were born and sometimes lived; feeble, toothless thirty-
year-olds died; the lion took its toll in the night; the Others
threatened daily across the river - and the trib prospered.
In the course of a single year, Moonwatcher and his companions
had changed almost beyond recognition.

They had become as plump as the family in the Cave, who no
longer haunted their dreams. They had learned their lessons
well; now they could handle all the stone tools and weapons that
the Cube had revealed to them.

They were no longer half-numbed with starvation, and they
had time both for leisure and for the first rudiments of thought.
Their new way of life was casually accepted, and they did
not associate it in any way with the crystal cube still standing
outside their cave.

But no Utopia is perfect, and this one had two blemishes. The
first was the marauding lion, whose passion for hominids
seemed to have grown even stronger now that they were better
nourished. The second was the tribe across the river; for

10/13/65										 a20
------------------------------------------------------------------------
A12
CONTINUED

somehow the Others had survived, and had stubbornly refused to
die of starvation.

10/13/65										 a21
------------------------------------------------------------------------
A13
EXT CAVES - KILLING THE LION

With the partly devoured carcass of a warthog laid out on the
ground at the point he hope the boulder would impact, Moon-
watcher and three of his bravest companions wait for two
consecutive nights. On the third the lion comes,
betraying his presences by a small pebble slide.

When they can here the lion below, softly tearing at the meat,
they strain themselves against the massive boulder. The sound
of the lion stops; he is listening. Again they silently heave
against the enormous stone, exerting the final limits of their
strength. The rock begin to tip to a new balance point.

The lion twitches alert to this sound, but having no fear of these
creatures, he makes the first of two mistakes which will cost
him his life; he goes back to his meal.

The rock moves slowly over the ledge, picking up speed with
amazing suddeness. It strikes a projection in the cliff about
fifteen feet above the ground, which deflects its path outward.

Just at this instant, the lion reacts instinctively and leaps
away from the face of the cliff directly into the path of the

10/13/65										 a22
------------------------------------------------------------------------
A13
CONTINUED

onrushing boulder. He has combined the errors of over-
confidence and bad luck.

The next morning they find the lion in front of the cave. They
also find one of their tribe who had incautiously peeped out to
see what was happening, and was apparently killed by a small
rock torn loose by the boulder; but this was a small price to
pay for such a great victory.

					  * * * * * * * *

And then one night the crystal cube was gone, and not even
Moonwatcher ever thought of it again. He was still wholly
unaware of all that it had done.

10/13/65										 a23
------------------------------------------------------------------------
A14
EXT STREAM - MASTER OF THE WORLD

From their side of the stream, in the never violated safety of
their own territory, the Others see Moonwatcher and fourteen
males of his tribe appear from behind a small hillock over-
looking the stream, silhouetted against the dawn sky.

The Others begin to scream their daily challenge. But today
something is different, though the Others do not immediatly
recognize this fact.

Instead of joining the verbal onslaught, as they had always done,
Moonwatcher and his small band decended from the rise, and
begin to move forward to the stream with a quiet purposefulness
never befor seen.

As the Others watch the figures silently approaching in the
morning mist, they become aware of the terrible strangness
of this encounter, and their rage gradually subsides down to
an uneasy silence.

At the water's edge, Moonwatcher and his band stop. They
carry their bone clubs and bone knives.

10/13/65										 a24
------------------------------------------------------------------------
A14
CONTINUED

Led by One-ear, the Others half-heartly resume the battle-
chant. But they are suddenly confrunted with a vision that cuts
the sound from their throats, and strikes terror into their
hearts.

Moonwatcher, who had been partly concealed by two males who
walked before him, thrusts his arm high into the air. In his
hand he holds a stoud tree branch. Mounted atop the branch is
the bloody head of the lion, its mouth jammed open with a stick,
displaying its frightful fangs.

The Others gape in fearful disbelief at this display of power.

Moonwatchers stands motionless, thrusting the lion's head high.
Then with majestic deliberation, still carrying his mangled
standard above his head, he begins to cross the stream, followed
by his band.

The Others fade back from the stream, seeming to lack even
the ability to flee.

Moonwatcher steps ashore and walks to One-Ear, who stands

10/13/65										 a25
------------------------------------------------------------------------
A14
CONTINUED

unsurely in front of his band.

Though he is a veteran of numerous combats at the water's edge,
One-Ear has never been attacked by an enemy who had not first
displayed his fighting rage; and he had never before been attacked
with a weapon. One-Ear, merely looks up at the raised club
until the heavey thigh bone of an antelope brings the darkness
down around him.

The Others stare in wonder at Moonwatcher's power.

Moonwatcher surveys the scene. Now he was master of the
world, and he was not sure what to do next. But he would
think of something.

10/13/65										 a26
------------------------------------------------------------------------
					    A SECTION TIMING

			    A1    00.30
			    A2    00.45
			    A3    01.30
			    A4    00.30
			    A5    01.00
			    A6    01.00
			    A7    01.00
			    A8    03.00
			    A9    00.45
			    A10   02.00
			    A11   04.00
			    A12   02.00
			    A13   02.30
			    A14   02.30

					    A SECTION TOTAL: @23 MIN. 00 SECS
------------------------------------------------------------------------ 
			    TITLE					PART II

							    YEAR 2001

											    a26a
------------------------------------------------------------------------ 
B1
EARTH FROM 200 MILES UP					 NARRATOR		
						    By the year 2001, overpopulation has
B1a						 replaced the problem of starvation
THOUSAND MEGATON			   but this was ominously offset by the
NUCLEAR BOMB IN ORBIT		   absolute and utter perfection of the
ABOVE THE EARTH,			   weapon.
RUSSIAN INSIGNIA AND
CCCP MARKINGS

B1b							 NARRATOR
AMERICAN THOUSAND			  Hundreds of giant bombs had been
MEGATON BOMB IN ORBIT		   placed in perpetual orbit above the
ABOVE THE EARTH.			   Earth. They were capable of
						    incinerating the entire Earth's
						    surface from an altitude of 100
						    miles.

B1c
FRENCH BOMB						   NARRATOR
					    Matters were further complicated
					    by the presence of twenty-seven
					    nations in the nuclear club. There
					    had been no deliberate or acciden-
B1d						 tal use of nuclear weapons since
GERMAN BOMB				   World War II and some people felt
					    sercure in this knowledge. But to
					    others, the situation seemed
						    comparible to an airline with a
B1f						 perfect safety record; in showed
CHINESE BOMB				  admirable care and skill but no
						    one expected it to last forever.

10/4/65											  b1
------------------------------------------------------------------------ 
B2
ORION-III SPACECRAFT
IN FIGHT AWAY FROM
EARTH, 200 MILES
ALTITUDE.

10/4/65											  b2
------------------------------------------------------------------------ 
B3
ORION-III PASSENGER AREA.
DR. HEYWOOD FLOYD IS THE
ONLY PASSENGER IN THE
ELEGANT CABIN DESIGNED
FOR 30 PEOPLE. HE IS
ASLEEP.

HIS PEN FLOATS NEAR HIS
HAND.

10/4/65											  b3   
------------------------------------------------------------------------ 
B4
ORION-III COCKPIT.
PILOT, CO-PILOT.
FLOYD CAN BE SEEN
ASLEEP ON A SMALL
TV MONITOR.
STEWARDESS IS PUTTING
ON LIPSTICK. SHE SEES
PEN.

10/4/65											  b4   
------------------------------------------------------------------------ 
B5
STEWARDESS GOES BACK
TO PASSENGER AREA,
RESCUES PEN AND CLIPS
IT BACK IN FLOYD'S
POCKET.

10/4/65											  b5   
------------------------------------------------------------------------ 
B6
SPACE STATION-5. THE
RAW SUNLIGHT OF SPACE
DAZZLES FROM THE
POLISHED METAL SURFACES
OF THE SLOWLY REVOLVING,
THOUSAND-FOOT DIAMETER
SPACE STATION. DRIFTING
IN THE SAME ORBIT, WE SEE
SWEPT-BACK TITOV-V
SPACECRAFT. ALSO THE
ALMOST SPHERICAL ARIES-IB

10/4/65											  b6   
------------------------------------------------------------------------
B7
ORION-III PASSENGER AREA
FLOYD AWAKE BUT GROGGY,
LOOKS OUT OF WINDOW.

10/4/65											  b7   
------------------------------------------------------------------------
B8
ORION-III COCKPIT.
THE CO-PILOT IN RADIO
COMMUNICATION WITH THE
SPACE STATION.

10/4/65											  b8   
------------------------------------------------------------------------
B9
THE ORION-III SPACECRAFT
IN DOCKING APPROACH. THE
EARTH IS SEEN IN BREATH-
TAKING VIEW IN B.G.

10/4/65											  b9
------------------------------------------------------------------------
B10
INSIDE DOCKING CONTROL.
WE SEE ORION-III MANO-
UVERING. IN BACKGROUND.

10/4/65											  b10
------------------------------------------------------------------------
B11
FROM DOCKING PORT WE
SEE THE ORION-III INCHING
IN TO COMPLETE ITS
DOCKING. WE SEE VARIOUS
WINDOWED BOOTHS INSIDE
DOCKING PORT. WE SEE
THE PILOT AND CO-PILOT
INSIDE THE ORION-III
COCKPIT.

10/4/65											  b11
------------------------------------------------------------------------
B12
SPACE STATION
RECEPTION AREA

RECEPTIONIST AT DESK.
MILLER ENTERS, HUR-
RYING. HE GOES TO
THE ELEVATOR AND
PRESSES BUTTON. HE
WAITS IMPATIENTLY.

WE SEE ELEVATOR
INDICATOR WORKING

ELEVATOR DOOR OPENS
AND FLOYD IS SEEN
UNSTRAPPING HIMSELF.
THE ELEVATOR GIRL IS
SEATED BY THE DOOR
						    MILLER
						    Oh, good morning, Dr. Floyd.
						    I'm Nick Miller.

						    FLOYD
						    How do you do, Mr. Miller?

						    MILLER
						    I'm terribly sorry. I was just
						    on my way down to meet you. I
						    saw your ship dock and I knew I
						    had plenty of time, and I was on
						    my way out of the office when,
						    suddenly, the phone rang.

12/7/65											  b12   
------------------------------------------------------------------------
B12
CONTINUED

					    FLOYD
					    Oh, please don't worry about it.

					    MILLER
					    Well, thank you very much for
					    being so understanding.

					    FLOYD
					    Please, it really doesn't matter.

					    MILLER
					    Well.. Did you have a pleaant
					    flight?

					    FLOYD
					    Yes, very pleasant.

					    MILLER
					    Well, shall we go through
					    Documentation?

					    FLOYD
					    Fine.

					    RECEPTIONIST
					    Will you use number eight,
					    please?

					    MILLER
					    Thank you, Miss Turner.

12/7/65										  b13
------------------------------------------------------------------------
B12
CONTINUED

THEY ENTER PASSPORT
AREA

RECEPTIONIST PRESSES
"ENGLISH" BAR ON HER
CONSOLE AND SMILES
AS FLOYD GOES THROUGH.

12/7/65										  b13a
------------------------------------------------------------------------
IN AUTOMATED PASSPORT
SECTION. THEY STOP IN
FRONT OF A BOOTH
FEATURING A TV SCREEN
					    
					    PASSPORT GIRL (TV)
					    Good morning and welcome to voice
					    Print Identification. When you see
					    the red light go on would you please
					    state in the following order; your
					    desitination, your nationality and
					    your full name. Surname first,
					    christian name and initial. For
					    example: Moon, American,
					    Smith, John, D. Thank you.

THERE IS A PAUSE
AND A RED BAR LIGHTS UP

					    FLOYD
					    Moon, American, Floyd, Heywood,
					    R.

THE RED LIGHT GOES OFF.
THERE IS A DELAY OF
ABOUT TWO SECONDS AND
THE WOMAN'S FACE
REAPPEARS

					    FLOYD
					    I've always wondered....

12/7/65										  b14   
------------------------------------------------------------------------
B13
CONTINUED
					    PASSPORT GIRL (TV)
					    (Interrupting)  Thank you. Despite
					    and excellent and continually
					    improving safety record there are
					    certain risks inherent in space
					    travel and an extremely high cost
					    of pay load. Because of this it
					    is necessary for the Space Carrier
					    to advise you that it cannot be
					    responsible for the return of your
					    body to Earth should you become
					    deceased on the Moon or en route
					    to the Moon. However, it wishes
					    to advise you that insurance
					    covering this contingency is
					    available in the Main Lounge.
					    Thank you. You are cleared
					    through Voice Print Identification.

THE LIGHTS GO OFF
AND THE WOMAN'S
FACE DISAPPEARS

THE MEN EXIT THE
PASSPORT AREA

					    MILLER
					    I've reserved a table for you in
					    the Earth Light room. Your
					    connecting flight will be
					    leaving in about one hour.

12/7/65										  b15 
------------------------------------------------------------------------
B13
CONTINUED

						FLOYD
						Oh, that's wonderful.

12/7/65										  b16 
------------------------------------------------------------------------
B14
INT SPACE STATION - LOUNGE

FLOYD AND MILLER WALKING

					    MILLER
					    Let's see, we haven't had the
					    pleasure of a visit from you not
					    since... It was about eight or
					    nine months ago, wasn't it?

					    FLOYD
					    Yes, I think so. Just about
					    then.

					    MILLER
					    I suppose you saw the work on
					    our new section while you
					    were docking.

					    FLOYD
					    Yes, it's coming along very well.

THEY PASS THE VISION
PHONE BOOTH

						FLOYD
						Oh, look, I've got to make a
						phone call. Why don't you go
						on into the Restaurant and I'll
						meet you in there.

12/7/65										  b17 
------------------------------------------------------------------------
B14
CONTINUED

					    MILLER
					    Fine. I'll see you at the bar.

FLOYD ENTERS PHONE
BOOTH. SIGN ON
VISION PHONE SCREEN
"SORRY, TEMPORARILY
OUT OF ORDER."

HE ENTERS THE SECOND
BOOTH AND SITS DOWN

12/7/65										  b18	 
------------------------------------------------------------------------
B15
DELETED

B16
DELETED

PAGES b19 - b22 DELETED

12/7/65
------------------------------------------------------------------------
B17
FLOYD IN VISION PHONE

LITTLE GIRL OF FIVE
ANSWERS

						CHILD
						Hello.

VISION PHONE SCREEN
DISPLAY SIGN 'YOUR
PARTY HAS NOT CONNECTED
VISION'

A FEW SECONDS LATER,
THE SCREEN CHANGES
TO AN IMAGE OF THE
CHILD
					    FLOYD
					    Hello, darling, how are you?

					    CHILD
					    Hello Daddy. Where are you?

					    FLOYD
					    I'm at Space Station Five,
					    darling. How are you?

					    CHILD
					    I'm fine, Daddy. When are
					    you coming home?

12/6/65										  b23 
------------------------------------------------------------------------
B17
CONTINUED

					    FLOYD
					    Well, I hope in a few days,
					    sweetheart.

					    CHILD
					    I'm having a party tomorrow.

					    FLOYD
					    Yes, I know that sweetheart.

					    CHILD
					    Are you coming to my party?

					    FLOYD
					    No, I'm sorry, darling, I
					    told you I won't be home for a
					    few days.

					    CHILD
					    When are you coming home?

					    FLOYD
					    In three days, darling, I
					    hope.

FLOYD HOLDS UP
THREE FINGERS.

12/6/65										  b24 
------------------------------------------------------------------------
B17

					    FLOYD
					    One, two, three. Can I
					    speak to Mommy?

					    CHILD
					    Mommy's out to the hair-
					    dresser.

					    FLOYD
					    Where is Mrs. Brown?

					    CHILD
					    She's in the bathroom.

					    FLOYD
					    Okay, sweetheart. Well, I
					    have to go now. Tell Mommy
					    that I called.

					    CHILD
					    How many days until you
					    come home?

					    FLOYD
					    Three, darling. One... two
					    ... three. Be sure to tell
					    Mommy I called.

12/6/65										  b24a 
------------------------------------------------------------------------
B17
CONTINUED

					    CHILD
					    I will, Daddy.

					    FLOYD
					    Okay, sweetheart. Have a
					    lovely Birthday Party
					    tomorrow.

					    CHILD
					    Thank you, Daddy.

					    FLOYD
					    I'll wish you a happy
					    Birthday now and I'll see you
					    soon. All right, Darling?

					    CHILD
					    Yes, Daddy.

					    FLOYD
					    'Bye, 'bye, now, sweetheart.

					    CHILD
					    Goodbye, Daddy.

12/6/65										  b24b 
------------------------------------------------------------------------
B18
VISION PHONE
PROCEDURE FOR
INFORMATION

VISION PHONE
PROCEDURE FOR
DIALLING

					    OPERATOR
					    Good morning, Macy's.

					    FLOYD
					    Good morning. I'd like the
					    Vision shopper for the Pet
					    Shop, please.

					    OPERATOR
					    Just one moment.

12/7/65										  b25 
------------------------------------------------------------------------
B19
THE PICTURE FLIPS AND
WE SEE A WOMAN STANDING
IN FORN OF A SPECIALLY-
DESIGNED DISPLAY SCREEN

					    VISION SALES GIRL
					    Good morning, sir, may I help you?

					    FLOYD
					    Yes, I'd like to buy a bush baby.

					    VISION SALES GIRL
					    Just a moment, sir.

THE GIRL KEYS SOME
INPUTS AND A MOVING
PICTURE APPEARS ON
THE SCREEN OF A CAGE
CONTAINING ABOUT SIX
BUSH BABIES,
BEAUTIFULLY DISPLAYED
AGAINST A WHITE BACK-
GROUND

					    VISION SALES GIRL
					    Here you are, sir. Here is a 
					    lovely assortment of African
					    bush babies. They are twenty
					    Dollars each.

12/7/65										  b26 
------------------------------------------------------------------------
B19
CONTINUED

					    FLOYD
					    Yes, well... Pick out a nice one
					    for me, a friendly one, and I'd
					    like it delivered tomorrow.

					    VISION SALES GIRL
					    Certainly, sir. Just let us have
					    your name and Bank identification
					    for V.P.I., and then give the
					    name and address of the person
					    you'd like the pet delivered to
					    and it will be delivered tomorrow.

SOME TIME DURING
THIS CONVERSATION,
FLOYD SEE ELENA,
SMYSLOV AND THE
OTHER TWO RUSSIANS
PASS HIS VISION PHONE
WINDOW. ELENA TAPS
AND MIMES "HELLO",
GESTURING TOWARD A
TABLE BEHIND FLOYD
WHERE THEY ALL SIT
DOWN

					    FLOYD
					    Thank you very much. Floyd,
					    Heywood, R.,  First National
					    Bank of Washington. Please
					    deliver to Miss Josephine
					    Floyd, 9423 Dupre Avenue,
					    N.W.14.

12/7/65										  b27 
------------------------------------------------------------------------
B19
CONTINUED

					    VISION SALES GIRL
					    Thank you very much, sir. It
					    will be delivered tomorrow.

12/7/65										  b27a 
------------------------------------------------------------------------
B20
SPACE STATTION 5 - LOUNGE

					    FLOYD
					    Well, how nice to see you again,
					    Elena. You're looking wonderful.

					    ELENA
					    How nice to see you, Hyewood.
					    This is my good friend, Dr.
					    Heywood Floyd. I'd like you
					    to meet Andre Smyslov...

SMYSLOV AND THE TWO
OTHER RUSSIAN WOMEN
STAND UP AND SMILE

THEY SHAKE HANDS
AFTER INTRODUCTION
AND AD-LIB 'HELLOS'

					    ELENA
					    And this is Dr. Kalinan...
					    Stretyneva...

THE RUSSIANS ARE
VERY WARM AND 
FRIENDLY.

					    SMYSLOV
					    Dr. Floyd, won't you join us
					    for a drink?

12/7/65										  b28 
------------------------------------------------------------------------
B20
CONTINUED

					    FLOYD
					    I'm afraid I've only got a few
					    minutes, but I'd love to.

THERE IS A BIT OF
CONFUSION AS ALL
REALISE THERE IS
NOT ENOUGH ROOM
FOR ANOTHER
PERSON AT THE TABLE.
SMYSLOV OFFERS FLOYD
HIS CHAIR
AND BORROWS
ANOTHER FROM A NEARBY TABLE

					    SYMYSLOV
					    What would you like to drink?

					    FLOYD
					    Oh, I really don't have time
					    for a drink. If it's all right
					    I'll just sit for a minute and
					    then I've got to be off.

					    SMYSLOV
					    Are you quite sure?

					    FLOYD
					    Yes, really, thank you very
					    much.

					    ELENA
					    Well... How's your lovely
					    wife?

12/7/65										  b29 
------------------------------------------------------------------------
B20
CONTINUED

					    FLOYD
					    She's wonderful.

					    ELENA
					    And your charming little daughter?

					    FLOYD
					    Oh, she's growing up very fast.
					    As a matter of fact, she's six
					    tomorrow.

					    ELENA
					    Oh, that's such a delightful age.

					    FLOYD
					    How is gregor?

					    ELENA
					    He's fine. But I'm afraid we
					    don't get a chance to see each
					    other very much these days.

POLITE LAUGHTER

					    FLOYD
					    Well, where are all of you off
					    to?

12/7/65										  b30 
------------------------------------------------------------------------
B20
CONTINUED

					    ELENA
					    Actually, we're on our way back
					    from the moon. We've just
					    spent three months calibrating
					    the new antenna at Tchalinko.
					    And what about you?

					    FLOYD
					    Well, as it happens, I'm on
					    my way up to the moon

					    SMYSLOV
					    Are you, by any chance, going
					    up to your base at Clavius?

					    FLOYD
					    Yes,as a matter of fact, I am.

THE RUSSIANS
EXCHANGE
SIGNIFICANT
GLANCES

					    FLOYD
					    Is there any particular reason
					    why you ask?

12/7/65										  b31 
------------------------------------------------------------------------
B20
CONTINUED

					    SMYSLOV
					    (pleasantly)  Well, Dr. Floyd,
					    I hope that you don't think I'm
					    too inquisitive, but perhaps
					    you can clear up the mystery
					    about what's been going on up
					    there.

					    FLOYD
					    I'm sorry, but I'm not sure
					    I know what you mean.

					    SMYSLOV
					    Well, it's just for the past
					    two weeks there have been
					    some extremely odd things
					    happening at Clavius.

					    FLOYD
					    Really?

					    SMYSLOV
					    Yes. Well, for one thing,
					    whenever you phone the base,
					    all you can get is a recording
					    which repeats that the phone
					    lines are temporarily out of
					    order.

12/7/65										  b32 
------------------------------------------------------------------------
B20
CONTINUED

					    FLOYD
					    Well, I suppose they've been
					    having a bit of trouble with
					    some of the equipment.

					    SMYSLOV
					    Yes, well at first we thought
					    that was the explanation, but
					    it's been going on for the past
					    ten days.

					    FLOYD
					    You mean you haven't been able
					    to get anyone at the base for ten
					    days?

					    SMYSLOV
					    That's right.

					    FLOYD
					    I see.

					    ELENA
					    Another thing, Heywood, two
					    days ago, one of our rocket
					    buses was denied permission
					    for an emergency landing at
					    Clavius.

12/7/65										  b33 
------------------------------------------------------------------------
B20
CONTINUED

					    FLOYD
					    How did they manage to do that
					    without any communication?

					    ELENA
					    Clavius Control came on the
					    air just long enough to transmit
					    their refusal.

					    FLOYD
					    Well, that does sound very odd.

					    SMYSLOV
					    Yes, and I'm afaid there's
					    going to be a bit of a row about
					    it. Denying the men permission
					    to land was a direct violation of
					    the I.A.S. convention.

					    FLOYD
					    Yes... Well, I hope the crew
					    got back safely.

					    SMYSLOV
					    Fortunately, they did.

					    FLOYD
					    Well, I'm glad about that.

12/7/65										  b33a 
------------------------------------------------------------------------
B20
CONTINUED

THE RUSSIANS EXCHANGE
MORE GLANCES. ONE OF
THE WOMEN OFFERS
AROUND A PILL BOX.
ELENA AND ANOTHER
RUSSIAN TAKE ONE AND
THE THIRD RUSSIAN
DELCINES.

					    SMYSLOV
					    Dr. Floyd, at the risk of pressing
					    you on a point you seem reticent
					    to discuss, may I ask you a
					    straightforward question?

					    FLOYD
					    Certainly.

					    SMYSLOV
					    Quite frankly, we have had some
					    very reliable intelligence reports
					    that a quite serious epidemic
					    has broken out at Clavius.
					    Something, apperently, of an
					    unknown origin. Is this, in
					    fact, what has happened?

A LONG, AWKWARD
PAUSE

12/7/65										  b33b 
------------------------------------------------------------------------ 
B20
CONTINUED

					    FLOYD
					    I'm sorry, Dr. Smyslov, but
					    I'm really not at liberty to
					    discuss this.

					    SMYSLOV
					    This epidemic could easily
					    spread to our base, Dr. Floyd.
					    We should be given all the
					    facts.

LONG PAUSE

					    FLOYD
					    Dr. Smyslov... I'm not
					    permitted to discuss this.

					    ELENA
					    Are you sure you won't change
					    your mind about a drink?

					    FLOYD
					    No, thank you... and I'm
					    afraid now I really must be
					    going.

					    ELENA
					    Well, I hope that you and your
					    wife can come to the I.A.C.
					    conference in June.

12/7/65										  b33c 
------------------------------------------------------------------------ 
B20
CONTINUED

					    FLOYD
					    We're trying to get there. I
					    hope we can.

					    ELENA
					    Well, Gregor and I will look
					    forward to seeing you.

					    FLOYD
					    Thank you. It's been a great
					    pleasure to meet all of you...
					    Dr. Smyslov.

THE RUSSIANS ALL
RISE AND THERE
ARE AD-LIBS OF
COURTESY

FLOYD SHAKES HANDS
AND EXITS

THE RUSSIANS EXCHANGE
A FEW SERIOUS PARA-
GRAPHES IN RUSSIAN

12/7/65										  b33d	  
------------------------------------------------------------------------ 
B21

ARIES-IB IN SPACE.
EARTH MUCH SMALLER
THAN AS SEEN FROM
SPACE STATION

					    NARRATOR
					    The Aries-IB has become the
					    standard Space-Station-to-Lunar
					    surface vehicle. It was powered
					    by low-thrust plasma jets which
					    would continue the mild acceler-
					    ation for fifteen minutes. Then
					    the ship would break the bonds of
					    gravity and be a free and indepen-
					    dent planet, circling the Sun in an
					    orbit of its own.

10/4/65										  b34 
------------------------------------------------------------------------ 
B21a

ARIES PASSENGER AREA.
FLOYD IS ASLEEP, STRETCHED
OUT IN THE CHAIR, COVERED
WITH BLANKETS WHICH ARE
HELD SECURE BY STRAPS

A STEWARDESS SITS AT THE
OTHER SIDE OF THE CABIN,
WATCHING A KARATE
EXHIBITION BETWEEN TWO
WOMEN ON TELEVISION

THE ELEVATOR ENTRANCE
DOOR OPENS AND THE
SECOND STEWARDESS ENTERS
CARRYING A TRAY OF FOOD

SHE BRINGS IT TO THE OTHER
STEWARDESS

					    STEWARDESS ONE
					    Oh, thank you very much.

					    STEWARDESS TWO
					    I see he's still asleep.

					    STEWARDESS ONE
					    Yes. He hasn't moved since we
					    left.

STEWARDESS TWO EXITS,
INTO ELEVATOR

12/6/65										  b34a 
------------------------------------------------------------------------ 
B21b

ARIES GALLEY AREA.
STEWARDESS EXITS FROM
ELEVATOR, GOES TO
KITCHEN SECTION, REMOVES
TWO TRAYS, WALKS UP TO
THE SIDE OF THE WALL AND
ENTERS PILOT'S
COMPARTMENT

12/6/65										  b34b 
------------------------------------------------------------------------ 
B22
ARIES-IB COCKPIT.
PILOT, CO-PILOT.

STEWARDESS ENTERS,
CARRYING FOOD

					    PILOT
					    Oh, thank you very much.

					    CO-PILOT
					    Thank you.

STEWARDESS SMILES.

					    PILOT
					    (sighs)  Well, how's it going
					    back there?

					    STEWARDESS
					    Fine. Very quiet. He's been
					    asleep since we left.

					    PILOT
					    Well, no one can say that he's not
					    enjoying the wonders of Space.

					    CO-PILOT
					    Well, whatever's going on up there,
					    he's going to arrive fresh and ready
					    to go.

12/14/65										 b35 
------------------------------------------------------------------------ 
B22
CONTINUED

					    PILOT
					    I wonder what really IS going on
					    up there?

					    CO-PILOT
					    Well, I've heard more and more
					    people talk of an epidemic.

					    PILOT
					    I suppose it was bound to happen
					    sooner or later.

					    CO-PILOT
					    Berkeley told me that they think
					    it came from contamination on a
					    returning Mars flight.

					    PILOT
					    Yes, well, whatever it is, they're
					    certainly not fooling around. This
					    is the first flight they allowed
					    in for more than a week.

					    CO-PILOT
					    I was working out what this trip
					    must cost, taking him up there
					    by himself and coming back empty.

					    PILOT
					    I'll bet it's a fortune.

12/14/65										 b36	  
------------------------------------------------------------------------ 
B22
CONTINUED

					    CO-PILOT
					    Well, at ten thousand dollars a
					    ticket, it comes to the better part
					    of six hundred thousand dollars.

					    PILOT
					    Well, as soon as he wakes up,
					    I'm going to go back and talk to
					    him. I must say, I'd like to
					    find out what's going on.

12/14/65										 b36a 
------------------------------------------------------------------------ 
B23
ARIES-IB IN SPACE.
MOON VERY LARGE.

10/4/65										  b37 
------------------------------------------------------------------------ 
B24
ARIES-IB PASSENGER
AREA. FLOYD FINISHING
BREAKFAST.

PILOT ENTERS.

					    PILOT
					    Well, good afternoon, Dr. Floyd.
					    Did you have a good rest?

					    FLOYD
					    Oh, marvellous. It's the first
					    real sleep I've had for the past
					    two days.

					    PILOT
					    There's nothing like weightless
					    sleep for a complete rest.

					    FLOYD
					    When do we arrive at Clavius?

					    PILOT
					    We're scheduled to dock in about
					    seven hours. Is there anything
					    we can do for you?

					    FLOYD
					    Oh, no, thank you. The two
					    girls have taken wonderful care
					    of me. I'm just fine.

12/14/65										 b38  
------------------------------------------------------------------------
B24
CONTINUED

					    PILOT
					    Well, if there is anything that you
					    wnat, just give a holler.

					    FLOYD
					    Thank you.

					    PILOT
					    Incidentally, Dr. Floyd, I wonder
					    if I can have a word with you about
					    the security arrangements?

					    FLOYD
					    What do you mean?

					    PILOT
					    Well... the crew is confined to
					    the ship when we land at Clavius.
					    We have to stay inside for the
					    time it take to refit - about
					    twenty-four hours. And then
					    we're going to back empty.

					    FLOYD
					    I see.

					    PILOT
					    I take it this is something to do
					    with the trouble they're having
					    up at Clavius?

12/14/65										 b39 
------------------------------------------------------------------------
B24
CONTINUED

					    FLOYD
					    I'm afraid that's out of my depart-
					    ment, Captain.

					    PILOT
					    Well, I'll tell you why I ask. You
					    see, I've got a girl who works in
					    the Auditing Department of the
					    Territorial Administrator and I
					    haven't been able to get her on
					    the phone for the past week or so,
					    and with all these stories one
					    hears, I'm a little concerned
					    about her.

					    FLOYD
					    I see. Well, I'm sorry about that.
					    I wouldn't think there's any cause
					    for alarm.

					    PILOT
					    Yes, well, I wouldn't have been
					    too concerned about it, except
					    I've heard these stories about the
					    epidemic and, as a matter of fact,
					    I've heard that ten people have
					    died already.

12/14/65										 b40 
------------------------------------------------------------------------
B24
CONTINUED

					    FLOYD
					    I wish I could be more helpful,
					    Captain, but as I've said, I don't
					    think there's any cause for
					    alarm.

					    PILOT
					    Well, fine. Thanks very much,
					    anyway, and I hope you don't
					    mind me asking?

					    FLOYD
					    No, of course, Captain, I can
					    understand your concern.

					    PILOT
					    Well, thank you very much, and
					    please let us know if there is
					    anything we can do to make your
					    trip more comfortable.

12/14/65										 b40a 
------------------------------------------------------------------------
B25
ARIES-IB CLOSER TO MOON

10/4/65										  b41	 
------------------------------------------------------------------------
B26
FLOYD GOES TO ARIES-IB
WASHROOM AND LOOKS AT
THE VERY LONG LIST OF
COMPLICATED INSTRUCTIONS

10/4/65										  b42 
------------------------------------------------------------------------
B27
ARIES-IB CLOSER TO MOON

DISSOLVE:

10/4/65										  b43 
------------------------------------------------------------------------
B28
FLOYD VISITING ARIES-IB
COCKPIT. WEIGHTLESS
TRICK ENTRANCE.

10/4/65										  b44	 
------------------------------------------------------------------------
B29
ARIES-IB ORBITING MOON.

					    NARRATOR
					    The laws of Earthly aesthetics did
					    not apply here, this world had been
					    shaped and molded by other than
					    terrestrial forces, operating over
					    aeons of time unknown to the young,
					    verdant Earth, with its fleeting
					    Ice-Ages, its swiftly rising and
					    falling seas, its mountain ranges
					    dissolving like mists before the
					    dawn. Here was age inconceivable
					    - but not death, for the Moon had
					    never lived until now.

10/4/65										  b45 
------------------------------------------------------------------------
B30
ARIES-IB COCKPIT - THE
CREW AND DOCKING
CONTROL PEOPLE ON THE
MOON GO THROUGH THEIR
DOCKING ROUTINE. THIS
HAS THE RITUALISTIC TONE
AND CADENCE OF PRESENT-
DAY JET LANDING
PROCEDURE. WE ONLY HEAR
DOCKING CONTROL.

10/4/65										  b46 
------------------------------------------------------------------------
B31
ARIES-IB DECENDING.
SEE AIR VIEW OF BASE.

					    NARRATOR
					    The Base at Clavius was the first
					    American Lunar Settlement that
					    could, in an emergency, be
					    entirely self-supporting.

					    NARRATOR
					    Water and all the necessities of
					    life for its eleven hundred men,
					    women and children were produced
					    from the Lunar rocks, after they
					    had been crushed, heated and
					    chemically processed.

10/4/65										  b47 
------------------------------------------------------------------------
B32
A GROUND BUS NUZZLES UP
TO COUPLING SECTION OF
ARIES-IB

10/4/65										  b48	 
------------------------------------------------------------------------
B33
INSIDE GREAT AIRLOCK
ENTRANCE. GROUND BUS
PULLS IN. GIANT DOORS
CLOSE BEHIND IT.

10/4/65										  b49	 
------------------------------------------------------------------------
B34
INSIDE SECOND AIRLOCK.
DOORS OPEN AFTER OUT-
SIDE SECTION DOORS ARE
CLOSED. GROUND BUS
PULLS IN. DOORS CLOSE
BEHIND IT. SEE PEOPLE
WAITING IN GLASSED-IN
SECTION WAITING FOR
SECOND AIRLOCK DOORS
TO CLOSE.

10/4/65										  b50 
------------------------------------------------------------------------
B35
LOW GRAVITY
GYMNASIUM TRICK
WITH CHILDREN.

					    NARRATOR
					    One of the attractions of life on the
					    Moon was undoubtedly the low
					    gravity which produced a sense
					    of general well-being.

10/4/65										  b51 
------------------------------------------------------------------------
B36
CHILDREN IN SCHOOL.
TEACHER SHOWING THEM
VIEWS OF EARTH AND MAP
OF EARTH.

					    NARRATOR
					    The personnel of the Base and their
					    children were the forerunners of new
					    nations, new cultures that would
					    ultimately spread out across the
					    solar system. They no longer
					    thought of Earth as home. The
					    time was fast approaching when
					    Earth, like all mothers, must say
					    farewell to her children.

DISSOLVE:

10/5/65										  b52 
------------------------------------------------------------------------
B37
LARGE CENTRAL
RECEPTION AREA. DOORS
BRANCHING OFF TO DIFF-
RENT MAIN HALLS. SMALL
POND WITH PLASTIC WHITE
SWAN AND A BIT OF GRASS.
A FEW BENCHES WITH THREE
WOMEN AND THEIR CHILDREN
HAVING OUTING.

FLOYD AND WELCOMING
PARTY WALK THROUGH
AFTER EXITING ELEVATOR.
HALVERSON, MICHAELS
AND FIVE OTHERS.

					    FLOYD
					    (voice echoing)  I must congratulate
					    you Halvorsen. you've done wonder-
					    ful things with the decor since the
					    last time I was here.

					    HALVORSEN
					    (voice echoing)  Well... thank you,
					    Dr. Floyd. We try to make the
					    environment as earthlike as possible.

DISSOLVE:

10/5/65										  b53 
------------------------------------------------------------------------
B38
LOW CEILING CONFERENCE
ROOM, "U" SHAPED TABLE
FACING THREE PROJECTION
SCREENS. SEATED AROUND
THE TABLE ARE TWENTY
SENIOR BASE PERSONNEL.

					    HALVORSEN
					    Ladies and gentlemen, I should
					    like to introduce Dr. Heywood
					    Floyd, a distinguished member
					    of the National Council of
					    Astronautics. He has just
					    completed a special flight here
					    from Earth to be with us, and
					    before the briefing he would
					    like to say a few words. Dr.
					    Floyd.

POLITE APPLAUSE. FLOYD
WALKS TO FRONT OF ROOM.

					    FLOYD
					    First of all, I bring a personal
					    message from Dr. Howell, who
					    has asked me to convey his
					    deepest appreciation to all of
					    you for the personal sacrifices
					    you have made, and of course
					    his congratulations on your
					    discovery which may well prove
					    to be among the most significant
					    in the history of science.

POLITE APPLAUSE.

11/25/65										 b54 
------------------------------------------------------------------------
B38
CONTINUED

					    FLOYD (cont'd)
					    Mr. Halvorsen has made known
					    to me some of the conflicting
					    views held by many of you
					    regarding the need for complete
					    security in this matter, and
					    more specifically your strong
					    opposition to the cover story
					    created to give the impression
					    there is an epidemic at the Base.
					    I understand that beyond it being
					    a matter of principle, many of
					    you are troubled by the concern
					    and anxiety this story of an
					    epidemic might cause your
					    relatives and friends on Earth.

					    I can understand and sympathize
					    with your negative views. I have
					    been personally embarrassed by
					    this cover story. But I fully
					    accept the need for absolute
					    secrecy and I hope you will.

					    It should not be difficult for all
					    of you to realise the potential for
					    cutural shock and social
					    disorientation contained in the
					    present situation if the facts
					    were prematurely and suddenly
					    made public without adequate
					    preparation and conditioning.

11/25/65										 b55 
------------------------------------------------------------------------
B38
CONTINUED

					    FLOYD
					    This is the view of the Council
					    and the purpose of my visit here
					    is to gather addition facts and
					    opinions on the situation and to
					    prepare a report to the Council
					    recommending when and how the
					    news should eventually be
					    announced. Are there any
					    questions?

					    MICHAELS
					    Dr. Floyd, how long do you think
					    this can be kept under wraps?

					    FLOYD
					    (pleasantly)
					    I'm afraid it can and it will be
					    kept under wraps as long as it
					    is deemed to be necessary by
					    the Council. And of course you
					    know that the Council has requested
					    that formal security oaths are to
					    be obtained in writing from every-
					    one who had any knowledge of this
					    event. There must be adequate
					    time for a full study to be made
					    of the situation before any con-
					    sideration can be given to
					    making a public announcement.

11/25/65										 b56 
------------------------------------------------------------------------
B38
CONTINUED

					    HALVORSEN
					    We will, of course, cooperate
					    in any way possible, Dr. Floyd.

11/25/65										 b56a 
------------------------------------------------------------------------
B39
SEVERAL SCENIC VIEWS OF
MOON ROCKET BUS SKIMMING
OVER SURFACE OF MOON.

10/5/65										  b57 
------------------------------------------------------------------------
B40
INSIDE ROCKET BUS,
FLOYD, HALVORSEN,
MICHAELS, FOURTH
MAN, PILOT AND
CO-PILOT. ALL IN
SPACE SUITS MINUS
HELMETS.

FLOYD IS SLOWELY
LOOKING THROUGH
SOME PHOTOGRAPHS
AND MAGNETIC
MAPS OF THE AREA.

HE LOOKS OUT OF
THE WINDOW,
THOUGHTFULLY.

11/25/65										 b58 
------------------------------------------------------------------------
B40
CONTINUED

THE PHOTOGRAPHES
ARE TAKEN FROM A
SATELLITE OF THE
MOON'S SURFACE
AND HAVE NUMBERED
OPTICAL GRID
BORDERS, LIKE
RECENT MARS
PHOTOS.

A FEW SEATS
AWAY, MICHAELS
AND HALVORSEN
CARRY OUT A VERY
BANAL ADMINISTRATIVE
CONVERSATION IN LOW
TONES. IT SHOULD
REVOLVE AROUND
SOMETHING UTTERLY
IRRELEVANT TO THE
PRESENT CIRCUMSTANCES
AND VERY MUCH LIKE
THE KIND OF DISCUSSION
ONE HEARS ALL THE
TIME IN OTHER
ORGANIZATIONS.

DISSOLVE:

11/25/65										 b59
------------------------------------------------------------------------
B41
TMA-1 EXCAVATION.
AIR VIEW. ROCKET
BUS DESCENDING.

THERE ARE NO LIGHTS
ON THE ACTUAL EXCA-
VATION, ONLY THE
LANDING STRIP AND
THE MONITOR DOME.

12/14/65										 b60
------------------------------------------------------------------------
B42
LONG SHOT MONITOR DOMES
WITH A BIT OF EXCAVATION
IN SHOT. SIX SMALL FIGURES
IN SPACE SUITS SLOWLY WALK
TOWARD EXCAVATION.

10/5/65										  b61	 
------------------------------------------------------------------------
B43
THE PARTY STOPS
AT TOP OF TMA-1
EXCAVATION.

A SMALL CONTROL
PANEL MOUNTED AT
THE HEAD OF THE
RAMP. MICHAELS
THROWS A SWITCH
AND THE EXCAVATION 
IS SUDDENLY ILLUMINATED.

					    HALVORSEN
					    Well, there it is.

					    FLOYD
					    Can we go down there closer to
					    it?

					    HALVORSEN
					    Certainly.

12/14/65										 b62	 
------------------------------------------------------------------------
B44
THEY START DOWN
WORKING RAMP

					    FLOYD
					    Does your geology on it still
					    check out?

					    MICHAELS
					    Yes, it does. The sub-surface
					    structure shows that it was
					    deliberately buried about four
					    million years ago.

					    FLOYD
					    How can you tell it was
					    deliberately buried?

					    MICHAELS
					    By the deformation between
					    the mother rock and the fill.

					    FLOYD
					    Any clue as to what it is?

					    MICHAELS
					    Not really. It's completely
					    inert. No sound or energy
					    sources have been detected.
					    The surface is made of
					    something incredibly hard
					    and we've been barely able
					    to scratch it. A laser drill

11/25/65										 b63 
------------------------------------------------------------------------
B44
CONTINUED

					    MICHAELS
					    might do something, but we
					    don't want to be too rough until
					    we know a little more.

					    FLOYD
					    But you don't have any idea as
					    to what it is?

					    MICHAELS
					    Tomb, shine, survey-marker
					    spare part, take your choice.

					    HALVORSEN
					    The only thing about it that we are
					    sure of is that it is the first direct
					    evidence of intelligent life beyond
					    the Earth.

SILENT APPRECIATION

					    HALVORSEN
					    Four million years ago, something,
					    presumably from the stars, must
					    have swept through the solar
					    system and left this behind.

11/25/65										 b64 
------------------------------------------------------------------------
B44
CONTINUED

					    FLOYD
					    Was it abandoned, forgotten, left
					    for a purpose?

					    HALVORSEN
					    I suppose we'll never know.

					    MICHAELS
					    The moon would have made an
					    excellent base camp for
					    preliminary Earth surveys.

SOME MORE SILENCE

					    FLOYD
					    Any ideas about the colour?

					    MICHAELS
					    Well, not really. At first glance,
					    black would suggest something
					    sun-powered, but then why would
					    anyone deliberately bury a sun-
					    powered device?

					    FLOYD
					    Has it been exposed to any sun
					    before now?

					    MICHAELS
					    I don't think it has, but I'd
					    like to check that. Simpson,
					    what's the log on that?

11/25/65										 b65 
------------------------------------------------------------------------
B45
INSIDE MONITOR DOME
WE SEE A NUMBER OF
TELEVISION DISPLAYS
INCLUDING SEVERAL TV
VIEWS OF FLOYD AND
COMPANY IN THE
EXCAVATION.

					    SIMPSON
					    The first surface was exposed at
					    0843 on the 12th April... Let me
					    see... that would have been
					    forty-five minutes after Lunar
					    sun-set. I see here that
					    special lighting equipment had
					    to be brought up before any
					    futher work could be done.

11/25/65										 b66 
------------------------------------------------------------------------
B46
TMA-1 EXCAVATION

					    MICHAELS
					    Thank you.

					    FLOYD
					    And so this is the first sun that
					    it's had in four million years.

					    PHOTOGRAPHER
					    Excuse me, gentlemen, if you'd
					    all line up on this side of the
					    walkway we'd like to take a few
					    photographes. Dr. Floyd, would
					    you thand in the middle... Dr.
					    Michaels on that side, Mr.
					    Halvorsen on the other....
					    thank you.

THE PHOTOGRAPHER
QUICKLY MAKES SOME
EXPOSURES

					    PHOTOGRAPHER
					    Thank you very much gentlemen,
					    I'll have the base photo section
					    send you copies.

AS THE MEN SLOWLY
SEPERATE FROM THEIR
PICTURE POSE, THERE
IS A PIERCINGLY POWERFUL
SERIES OF FIVE ELECTRONIC
SHRIEKS, EACH LIKE A
HIDEOUSLY OVER-LOADED
AND DISTORTED TIME SIGNAL.
FLOYD INVOLUNTARILY TRIES
TO BLOCK HIS EARS WITH HIS
SPACESUITED HANDS. THEN
COMES MERCIFUL SILENCE.

11/25/65										 b67 
------------------------------------------------------------------------
B47
VARIOUS SHOTS OF
SPACE MONITORS,
ASTEROIDS, THE SUN,
PLUTO, MARS.

					    NARRATOR
					    A hundred million miles beyond
					    Mars, in the cold lonliness
					    where no man had yet travelled,
					    Deep-Space-Monitor-79 drifts
					    slowly among the tangled orbits
					    of the asteroids.

					    NARRATOR
					    Radiation detectors noted and
					    analyzed incoming cosmic rays
					    from the galaxy and points beyond;
					    neutron and x-ray telescopes
					    kept watch on strange stars that
					    no human eye would eever see;
					    magnetometers observed the
					    gusts and hurricanes of the solar
					    winds, as the sun breathed million
					    mile-an-hour blasts of plasma
					    into the faces of its circling
					    children.

					    NARRATOR
					    All these things and many others
					    were patiently noted by Deep-
					    Space-Monitor-79, and recorded
					    in its crystalline memory.

11/25/65										 b68 
------------------------------------------------------------------------
B47
CONTINUED

					    NARRATOR
					    But now it had noted something
					    strange - the faint yet
					    unmistakable distrubance rippling
					    across the solar system, and
					    quite unlike any natural phenomena
					    it had ever observed in the past.

					    NARRATOR
					    It was also observed by Orbiter
					    M-15, circling Mars twice a
					    day; and High Inclination Probe-
					    21, climbing slowly above the
					    planet of the ecliptic; and even
					    artificial Comet-5, heading out
					    into the cold wastes beyond
					    Pluto, along an orbit whose
					    far point it would not reach for
					    a thousand years.

					    NARRATOR
					    All noticed the peculiar burst of
					    energy that leaped from the face
					    of the Moon and moved across
					    the solar system, throwing off a
					    spray of radiation like the wake of
					    a racing speedboat.

11/25/65										 b69 
------------------------------------------------------------------------
B SECTION TIMING

B1-1f	00.50			B25	00.10  
B2	   00.10			B26	00.20
B3	   00.15			B27	00.05
B4	   00.15			B28	Out
B5	   00.20			B29	00.30
B6	   00.15			B30	00.30
B7	   00.10			B31	00.25
B8	   00.15			B32	00.20
B9	   00.10			B33	00.20
B10	  00.10			B34	00.30
B11	  00.15			B35	00.20
B12	  00.50			B36	00.20
B13	  01.10			B37	00.30
B14	  00.35			B38	02.15
B15	  Out			  B39	00.20
B16	  Out			  B40	00.50
B17	  01.15			B41	00.15
B18	  00.15			B42	00.10
B19	  01.00			B43	00.15
B20	  03.55			B44	01.40
B21	  00.20			B45	00.20
B21A	 00.20			B46	00.40
B21B	 00.15			B47	01.25
B22	  01.00
B23	  00.10
B24	  01.30

B SECTION TOTAL:  28 MIN. 10 SECS.
------------------------------------------------------------------------
TITLE

					    PART III
					    14 MONTHS LATER

											    b69a
------------------------------------------------------------------------
C1
DISCOVERY 1,000,000
MILES FROM EARTH.
SEE EARTH AND MOON
SMALL.

WE SEE A BLINDING
FLASH EVERY 5
SECONDS FROM ITS
NUCLEAR PULSE
PROPULSION. IT
STRIKES AGAINST
THE SHIP'S THICK
ABLATIVE TAIL
PLATE.

SEVERAL CUTS OF
THIS.

11/19/65										 c1 
------------------------------------------------------------------------
C2
ANOTHER CLOSER
VIEW OF DISCOVERY.
SEE BOWMAN THROUGH
COMMAND MODULE
WINDOW.

11/19/65										 c2 
------------------------------------------------------------------------
C3
BOWMAN INSIDE
DISCOVERY COMMAND
MODULE. HE IS
LOOKING FOR
SOMETHING.

COMPUTER READOUT
DISPLAY SHOWING AN
EVER-SHIFTING
ASSORTMENT OF
COLOR-CODED LINEAR
PROJECTIONS.

WE SEE POOLE IN
BACKGROUND IN
COMPUTER BRAIN
CENTRE AREA.
AFTER A FEW
SECONDS HE EXITS.

THE ELAPSED
MISSION TIMER
READS "DAY 003,
HOUR 14, MINUTE
32, SECOND 10."

11/19/65										 c3 
------------------------------------------------------------------------
C4
BOWMAN EXITS TO
ACCESS-LINK AIRLOCK.
BRIGHT COLOR-CODED
DOORS LEAD TO
CENTRIFUGE AND POD
BAY. LARGE ILLUMUN-
ATED PRINTED WARNINGS
AND INSTRUCTIONS
GOVERNING LINK
OPERATIONS ARE SEEN.

HE PRESSES NECESSARY
BUTTONS TO OPERATE
AIRLOCK DOOR TO
POD BAY.

11/19/65										 c4 
------------------------------------------------------------------------
C5
BOWMAN ENTERS POD
BAY AND CONTINUES
HIS SEARCH. SUDDENLY
HE FINDS IT - HIS
ELECTRONIC NEWSPAD.

HE EXITS POD BAY.

11/19/65										 c5 
------------------------------------------------------------------------
C6
IN THE AIRLOCK-
LINK BOWMAN
OPERATES BUTTONS
TO OPEN DOOR
MARKED "CENTRIFUGE".

11/19/65										 c6	 
------------------------------------------------------------------------
C7
INSIDE THE
CENTRIFUGE HUB
BOWMAN MOVES TO
THE

ENTRY PORT
CONTROL PANEL

					    BOWMAN
					    Hi. Frank... coming in, please.

					    POOLE
					    Right. Just a sec.

					    BOWMAN
					    Okay. (pause)

					    POOLE
					    Okay, come on down.

WE SEE THE
ROTATING HUB
COLLAR AT THE
END. BEHIND IT
WE SEE

11/19/65										 c7 
------------------------------------------------------------------------
C8
THE CENTRIFUGE
TV-DISPLAY SHOWING
SLEEPERS AND POOLE
SLOWLY ROTATING BY.

POOLE SECURES SOME
LOOSE GEAR.

POOLE LOOKS UP TO
TV MONITOR LENS
AND WAVES.

11/19/65										 c8 
------------------------------------------------------------------------
C9
BOWMAN AT PANEL.
STOPS ROTATION
AND MOVES TO
ENTRY PORT.

WHEN ROTATION
STOPS WE SEE A SIGN
LIGHTS UP "WEIGHTLESS
CONDITION".

AS BOWMAN DISAPPEARS
DOWN ENTRY PORT WE
SEE HIM ON

TV-MONITOR, DESCENDING
LADDER. AT THE BASE
OF THE LADDER HE KEYS
THE CENTRIFUGE
OPERATION PANEL.
WE SEE TV-PICTURE
START TO ROTATE
AGAIN. "WEIGHTLESS
CONDITION" SIGN GOES
OUT.

11/19/65										 c9 
------------------------------------------------------------------------
C10
INSIDE CENTRIFUGE
BOWMAN MAKES 180 DEGREE
WALK TO POOLE.
ON WAY HE PASSES
THE SLEEPERS.

WE GET A GOOD
LOOK AT THE THREE
MEN IN THEIR
HIBERNACULUMS.

POOLE IS SEATED
AT A TABLE READING
HIS ELECTRONIC
NEWSPAD.

					    BOWMAN
					    (softly) Hi... How's it
					    going?

					    POOLE
					    (absent but friendly)  Great.

BOWMAN OPERATES
ARTIFICIAL FOOD
UNIT, TAKES HIS TRAY
AND SITS DOWN. KEYS
ON HIS ELECTRONIC
NEWSPAD AND BEGINS
TO EAT. BOTH MEN
EAT IN A FRIENDLY
AND RELAXED SILENCE.

11/19/65										 c10 
------------------------------------------------------------------------
C11
DISCOVERY IN SPACE,
STILL NUCLEAR
PULSING. EARTH
AND MOON CAN BE
SEEN IN BACKGROUND.

DISSOLVE:

11/19/65										 c11 
------------------------------------------------------------------------
C12
POOLE IS FINISHED.

BOWMAN IS STILL
READING AND
WORKING ON HIS
DESSERT.

					    POOLE
					    Dave, if you've a minute, I'd like
					    your advice on something.

					    BOWMAN
					    Sure, what is it?

					    POOLE
					    Well, it's nothing really important,
					    but it's annoying.

					    BOWMAN
					    What's up?

					    POOLE
					    It's about my salary cheques.

					    BOWMAN
					    Yes?

					    POOLE
					    Well I got the papers on my
					    official up-grading to AGS-19
					    two weeks before we left.

12/14/65										 c12 
------------------------------------------------------------------------
C12
CONTINUED

					    BOWMAN
					    Yes, I remember you mentioning it.
					    I got mine about the same time.

					    POOLE
					    That's right. Well, naturally,
					    I didn't say anything to Payroll.
					    I assumed they'd start paying me
					    at the higher grade on the next pay
					    cheque. But it's been almost
					    three weeks now and I'm still
					    being paid as an AGS-18.

					    BOWMAN
					    Interesting that you mention it,
					    because I've got the same problem.

					    POOLE
					    Really.

					    BOWMAN
					    Yes.

					    POOLE
					    Yesterday, I finally called the
					    Accounting Office at Mission
					    Control, and all they could tell me
					    was that they'd received the AGS-19
					    notification for the other three but
					    not mine, and apparently not yours
					    either.

12/14/65										 c13 
------------------------------------------------------------------------
C12
CONTINUED

					    BOWMAN
					    Did they have any explanation for
					    this?

					    POOLE
					    Not really. They just said it might
					    be because we trained at Houston and
					    they trained in Marshall, and that
					    we're being charged against differ-
					    ent accounting offices.

					    BOWMAN
					    It's possible.

					    POOLE
					    Well, what do you think we ought
					    to do about it?

					    BOWMAN
					    I don't think we should make any
					    fuss about it yet. I'm sure they'll
					    straighten it out.

					    POOLE
					    I must say, I never did understand
					    why they split us into two groups
					    for training.

					    BOWMAN
					    No. I never did, either.

12/14/65										 c14 
------------------------------------------------------------------------
C12
CONTINUED

					    POOLE
					    We spent so little time with them,
					    I have trouble keeping their names
					    straight.

					    BOWMAN
					    I suppose the idea was specialized
					    training.

					    POOLE
					    I suppose so. Though, of course,
					    there's a more sinister explanation.

					    BOWMAN
					    Oh?

					    POOLE
					    Yes. You must have heard the
					    rumour that went around during
					    orbital check-out.

					    BOWMAN
					    No, as a matter of fact, I didn't.

					    POOLE
					    Oh, well, apparently there's
					    something about the mission that
					    the sleeping beauties know that
					    we don't know, and that's why we
					    were trained separately and
					    that's why they were put to sleep
					    before they were even taken aboard.

12/14/65										 c15 
------------------------------------------------------------------------
C12
CONTINUED

					    BOWMAN
					    Well, what is it?

					    POOLE
					    I don't know. All I heard is that
					    there's something about the
					    mission we weren't told.

					    BOWMAN
					    That seems very unlikely.

					    POOLE 
					    Yes, I thought so.

					    BOWMAN
					    Of course, it would be very easy
					    for us to find out now.

					    POOLE
					    How?

					    BOWMAN
					    Just ask Hal. It's conceivable
					    they might keep something from
					    us, but they'd never keep anything
					    from Hal.

					    POOLE
					    That's true.

12/14/65										 c15a 
------------------------------------------------------------------------
C12						   
CONINUED

					    BOWMAN
					    (sighs)  Well... it's silly, but...
					    if you want to, why don't you?

POOLE WALKS TO THE
HAL 9000 COMPUTER

					    POOLE
					    Hal... Dave and I believe that
					    there's something about the
					    mission that we weren't told.
					    Something that the rest of the
					    crew know and that you know.
					    We'd like to know whether this
					    is true.

					    HAL
					    I'm sorry, Frank, but I don't
					    think I can answer that question
					    without knowing everything that
					    all of you know.

					    BOWMAN
					    He's got a point.

					    POOLE
					    Okay, then how do we re-phrase
					    the question?

12/14/65										 c15c	  
------------------------------------------------------------------------
C12 
CONTINUED

					    BOWMAN
					    Still, you really don't believe it,
					    do you?

					    POOLE
					    Not really. Though, it is strange
					    when you think about it. It didn't
					    really make any sense to keep
					    us apart during training.

					    BOWMAN
					    Yes, but it's to fantastic to think
					    that they'd keep something from us.

					    POOLE
					    I know. It would be almost
					    inconceivable.

					    BOWMAN
					    But not completely inconceivable?

					    POOLE
					    I suppose it isn't logically impossible.

					    BOWMAN
					    I guess it isn't.

					    POOLE
					    Still, all we have to do is ask Hal.

12/14/65										 c15b
------------------------------------------------------------------------ 
C12
CONTINUED

					    BOWMAN
					    Well, the only important aspect of
					    the mission are: where are we
					    going, what will we do when we
					    get there, when are we coming
					    back, and... why are we going?

					    POOLE
					    Right. Hal, tell me whether the
					    following statements are true or
					    false.

					    HAL
					    I will if I can, Frank.

					    POOLE
					    Our Mission Profile calls for
					    Discovery going to Saturn.
					    True or false?

					    HAL
					    True.

					    POOLE
					    Our transit time is 257 days. Is
					    that true?

					    HAL
					    That's true.

12/14/65										 c15d
------------------------------------------------------------------------ 
C12
CONTINUED

					    POOLE
					    At the end of a hundred days of
					    exploration, we will all go into 
					    hibernation. Is this true?

					    HAL
					    That's true.

					    POOLE
					    Approximately five years after we
					    go into hibernation, the recovery
					    vehicle will make rendezous with
					    us and bring us back. Is this true?

					    HAL
					    That's true

					    POOLE
					    There is no other purpose for this
					    mission than to carry out a
					    continuation of the space program,
					    and to further our general
					    knowledge of the planets. Is that
					    true?

					    HAL
					    That's true.

					    POOLE
					    Thank you very much, Hal.

12/14/65										 c15e
------------------------------------------------------------------------ 
C12
CONTINUED

					    HAL
					    I hope I've been able to be of
					    some help.

BOTH MEN LOOK AT
EACH OTHER RATHER
SHEEPISHLY.

12/14/65										 c15f
------------------------------------------------------------------------ 
C13

DISCOVERY IN SPACE.
PULSING ALONG.
EARTH AND MOON.

11/19/65										 c16
------------------------------------------------------------------------ 
C14
DELETED

C15
DELETED

C15
DELETED

C16
DELETED

PAGES c17 - c41 DELETED
------------------------------------------------------------------------ 
C17

DOCUMENTARY SEQUENCE
ILLUSTRATING THE
FOLLOWING ACTIVITIES.

SPLIT SCREEN TECHNIQUE
AND SUPERIMPOSED CLOCK
TO GIVE SENSE OF
SIMULTANEOUS ACTION AND
THE FEELING OF A TYPICAL
DAY.

IN THE COURSE OF THESE
ACTIVITIES WE SHALL SEE
THE COMPUTER USED IN
ALL OF ITS FUNCTIONS.

					    NARRATOR
					    Bowman and Poole settled down
					    to the peaeful monotony of the
					    voyage, and the next three months
					    passed without incident.

11/24/65										 c42
------------------------------------------------------------------------ 
C17
CONTINUED

BOWMAN				   TIME				 POOLE

a1								  b1
TV NEWS - MORNING		  0800				 WAKES UP

a2								  b2
BEDTIME SNACK			 0900				 BREAKFAST

a3								  b3
TO SLEEP WITH			 1000				 GYMNASIUM
INSTANT ELECTRO-
NARCOSIS AND EAR
PLUGS.

a4								  b4
SLEEP				    1100				 SHIP INSPECTION

a5								  b5
SLEEP				    1200				 HOUSEHOLD DUTIES

a6								  b6
SLEEP				    1300				 LUNCH

11/24/65										 c43
------------------------------------------------------------------------ 
C17
CONTINUED

BOWMAN				   TIME				 POOLE

a7								  b7
SLEEP				    1400				 EXPERIMENTS AND
								    ASTRONOMY

a8								  b8
SLEEP				    1500				 EXPERIMENTS AND
								    ASTRONOMY

a9								  b9
SLEEP				    1600				 RECREATION

a10								 b10
SLEEP				    1700				 RECREATION

a11								 b11
WAKES UP				 1800				 GYMNASIUM

a12								 b12
BREAKFAST				1900				 DINNER

11/24/65										 c44
------------------------------------------------------------------------
C17
CONTINUED

BOWMAN				   TIME				 POOLE

a13								 b13
GYMNASIUM				2000				 TV NEWS - EVENING
								    PAPERS

a14								 b14
MISSION CONTROL		    2100				 MISSION CONTROL
REPORT							   REPORT

a15								 b15
FAMILY AND SOCIAL		  2200				 FAMILY AND SOCIAL
TV CHAT							  TV CHAT

a16								 b16
FILMS				    2300				 FILMS

a17								 b17
LUNCH				    2400				 BEDTIME SNACK

a18								 b18
INSPECTION			    0100				 INSTANT ELECTRO-
								    NARCOSIS SLEEP

11/24/65										 c45
------------------------------------------------------------------------ 
C17
CONTINUED

BOWMAN				   TIME				 POOLE

a19								 b19
EXPERIMENTS AND		    0200				 SLEEP
ASTRONOMY

a20								 b20
EXPERIMENTS AND		    0300				 SLEEP

a21								 b21
RECREATION			    0400				 SLEEP

a22								 b22
HOUSEHOLD DUTIES		   0500				 SLEEP

a23								 b23
GYMNASIUM				0600				 SLEEP

a24								 b24
DINNER				   0700				 SLEEP

11/24/65							 c46
------------------------------------------------------------------------
C18
DISCOVERY IN SPACE

11/24/65										 c47
------------------------------------------------------------------------ 
C19
CENTRIFUGE

BOWMAN SITTING AT
PERSONAL COMMUNI-
CATION PANEL. POOLE
STANDING NEARBY.

BOWMAN'S PARENTS
ARE SEEN ON THE VISION
SCREEN. MOTHER, FATHER
AND YOUNGER SISTER.

THEY ARE ALL SINGING
"HAPPY BIRTHDAY". THE
PARENTS, POOLE AND HAL.

THE SONG ENDS.

					    FATHER
					    Well, David there is a man telling
					    us that we've used up our time.

					    MOTHER
					    David... again we want to wish
					    you a happy Birthday and God speed.
					    We'll talk to you again tomorrow.
					    'Bye, 'bye now.

CHORUS OF
"GOODBYES".

12/13/65										 c48
------------------------------------------------------------------------
C19
CONTINUED

VISION SCREEN GOES
BLANK

					    HAL
					    Sorry to interrupt the festivities,
					    Dave, but I think we've got a 
					    problem.

					    BOWMAN
					    What is it, Hal?

					    HAL
					    MY F.P.C. shows an impending
					    failure of the antenna orientation
					    unit.

C20
TV DISPLAYS DIAGRAM
OF SKELETONISED
PICTURE OF SHIP.

12/13/65										 C49
------------------------------------------------------------------------ 
C21
PICTURE CHANGES TO
CLOSER SECTIONALISED
VIEW OF SHIP.

C22
PICTURE CHANGES TO
ACTUAL COMPONENT
IN COLOUR RELIEF AND
ITS WAREHOUSE NUMBER

					    HAL
					    The A.O. unit should be replaced
					    within the next seventy-two hours.

					    BOWMAN
					    Right. Let me see the antenna
					    alignment display, please.

C23
TV DISPLAY OF EARTH
VERY SMALL IN CROSS-
HAIRS OF A GRID PICTURE.

12/13/65										 c50
------------------------------------------------------------------------
C24
CUT TO EXTERIOR VIEW
OF THE BIG DISH ANTENNA
AND EARTH ALIGNMENT
TELESCOPE.

C25
CENTRIFUGE

					    HAL
					    The unit is still operational, Dave.
					    but it will fail within seventy-two
					    hours.

					    BOWMAN
					    I understand Hal. We'll take care
					    of it. Please, let me have the hard
					    copy.

XEROXED DIAGRAMS
COME OUT OF A SLOT.

					    POOLE
					    Strange that the A.O. unit should
					    go so quickly.

					    BOWMAN
					    Well, I suppose it's lucky that
					    that's the only trouble we've had
					    so far.

12/13/65										 c50a
------------------------------------------------------------------------ 
C26
DISCOVERY IN SPACE.
NOT PLANETS VISIBLE.

SHOTS OF ANTENNA.

(NARRARTION TO
EXPLAIN TENOUS
AND ESSENTIAL LINK
TO EARTH. ALSO,
WHAT TRACKING 
TELESCOPE DOES.)

12/13/65										 c51
------------------------------------------------------------------------
C27
CENTRIFUGE

WE SEE BOWMAN AND
POOLE GO TO A CUPBOARD
LABELLED IN PAPER TAPE,
"RANDOM DECISION
MAKER."

THEY REMOVED A SILVER
DOLLAR IN A PROTECTIVE
CASE.

POOLE FLIPS THE COIN.
BOWMAN CALLS "HEAD."

IT IS TAILS. POOLE
WINS.

POOLE LOOKS PLEASED.

12/13/65										 c52
									    (c53 DELETED)
------------------------------------------------------------------------ 
C28
DISCOVERY IN SPACE

11/24/65										 c54
------------------------------------------------------------------------
C29
POD BAY. POOLE
IN SPACE SUIT DOING
PRELIMINARY CHECK
OUT.

C30
COMMAND MODULE.
BOWMAN AT FLIGHT
CONTROL. SEE TV
PICTURE OF POOLE
IN POD BAY.

C31
HAL'S POD BAY
CONSOLE WITH EYE.

C32
POOLE GOES TO POD
BAY WAREHOUSE
SECTION AND OBTAINS
COMPONENT. HE
CARRIES IT BACK TO
THE POD AND PLACES
IT IN FRONT OF THE
FLOOR.

					    POOLE
					    Hal, have pod arms secure the
					    component.

					    HAL
					    Roger.

12/13/65										 c55
------------------------------------------------------------------------ 
C32
CONTINUED

SEE POD ARMS
SECURE COMPONENT.

					    POOLE
					    Hal, please rotate Pod Number
					    Two.

SEE THE CENTRE POD
ROTATE TO FACE THE
POD BAY DOORS.

POOLE ENTERS POD.

INSIDE POD, HE DOES
INITIAL PRE-FLIGHT
CHECK, TRIES BUTTONS
AND CONTROLS.

					    POOLE
					    How do you read me, Dave?

12/13/65										 c56
------------------------------------------------------------------------
C33
BOWMAN IN COMMAND
MODULE.

					    BOWMAN
					    Five by five, Frank.

C34
INSIDE POD.

					    POOLE
					    How do you read me, Hal?

					    HAL
					    Five by five, Frank.

					    POOLE
					    Hal, I'm going out now to replace
					    the A.O. unit.

					    HAL
					    I understand.

					    POOLE
					    Hal, maintain normal E.V.A.
					    condition.

					    HAL
					    Roger.

					    POOLE
					    Hal, check all airlock doors secure.

12/13/65										 c57
------------------------------------------------------------------------ 
C34
CONTINUED

					    HAL
					    All airlock doors are secure.

					    POOLE
					    Decompress Pod Bay.

SEE BIG POD BAY AIR
PUMPS AT WORK.

					    HAL
					    Pod Bay is decompressed. All
					    doors are secure. You are free
					    to open pod bay doors.

					    POOLE
					    Opening pod bay doors.

INSIDE POD, POOLE
KEYS OPEN POD BAY
DOORS.

12/13/65										 c58
------------------------------------------------------------------------
C34
CONTINUED

POD SLOWLY EDGES
OUT OF POD BAY.

C35
POOLE MANOEUVRES
THE POD CAREFULLY
AWAY FROM DISCOVERY.

C36
INSIDE COMMAND 
MODULE, BOWMAN
CAN SEE TINY POD
MANOEUVRING
DIRECTLY IN FRONT.

C37
POOLE SEE BOWMAN
IN COMMAND MODULE
WINDOW.

C38
POD SLOWLY MANOEVRES
TO ANTENNA.

11/24/65										 c59
------------------------------------------------------------------------ 
C39
POD FASTENS ITSELF
MAGNETICALLY TO
SIDES OF DISCOVERY
AT BASE OF ANTENNA.

C40
SPECIAL MAGNETIC
PLATES GRIP
DISCOVERY SIDES.

C41
THE POD ARMS WORK
TO REMOVE THE FAULTY
COMPONENT.

C42
EASY FLIP-BOLTS OF
A SPECIAL DESIGN
FACILITATE JOB.

C43
INSIDE THE POD,
POOLE WORKS THE
ARMS BY SPECIAL
CONTROL.

11/24/65										 c60
------------------------------------------------------------------------
C44
IN COMMAND MODULE,
BOWMAN SEES INSERT
OF WORK TAKEN FROM
TV CAMERA POINT-OF-
VIEW IN POD HAND.

C45
HAL STANDS BY.

C46
POOLE SECURES THE
FAULTY PART IN ONE
HAND.

C47
THE NEW COMPONENT
IS FITTED INTO PLACE
BY THE OTHER THREE
HANDS ARE SNAPPED
CLOSED WITH THE
SPECIALLY DESIGNED
FLIP-BOLTS.

					    POOLE
					    Hal, please acknowledge
					    component correctly installed
					    and fully operational.

11/24/65										 c61
------------------------------------------------------------------------ 
C47
CONTINUED

					    HAL
					    The component is correctly
					    installed and fully operational.

C48
THE POD FLOATS AWAY
FROM THE DISCOVERY BY
SHUTTING OFF THE
ELECTRO-MAGNETIC
PLATES.

C49
THE POD MANOEUVRES
AWAY FROM THE ANTENNA
AND OUT IN FRONT OF
DISCOVERY.

C50
BOWMAN SEE THE POD
THROUGH THE COMMAND
MODULE WINDOW.

C51
POOLE SEES BOWMAN
IN COMMAND MODULE
WINDOW.

11/24/65										 c62
------------------------------------------------------------------------
C52
POOLE CAREFULLY
MANOEUVRES TOWARD
THE POD DOORS.

C53
POD STOPS A HUNDRED 
FEET AWAY.

C54
POOLE KEYS AUTOMATIC
DOCKING ALIGNMENT
MODE.

C55
POOLE CHECKS AIRLOCK
SAFETY PROCEDURE WITH
HAL.

C56
HAL APPROVES ENTRY.

C57
POOLE ACTUATES POD
BAY DOORS OPEN.

11/24/65										 c63
------------------------------------------------------------------------ 
C58
SEE POD BAY DOORS
OPEN.

C59
POD CAREFULLY
MANOEUVRES ON
TO DOCKING ARM,
WHICH THEN DRAWS
POD INTO POD BAY.

DISSOLVE:

11/24/65										 c64
------------------------------------------------------------------------
C60
POD BAY

THE FAULTY A.O. UNIT
LIES ON A TESTING BENCH
CONNECTED TO ELECTRONIC
GEAR.

POOLE STANDS FOR
SOME TIME CHECKING HIS
RESULTS.

THERE SHOULD BE SOME
UNDERSTANDABLE DISPLAY,
WHICH INDICATES THE PART
IS FUNCTIONING PROPERLY,
EVEN UNDER ONE HUNDRED
PERCENT OVERLOAD.

CIRUIT CONTINUITY
PULSE SEQUENCER.

ENVIRONMENTAL VIBRATION.

VK INTEGRITY.

BOWMAN ENTERS

					    BOWMAN
					    How's it going?

					    POOLE
					    I don't know. I've checked this
					    damn thing four times now and
					    even under a hundred per cent
										 (cont'd)

12/13/65										 c65
------------------------------------------------------------------------ 
C60
CONT'D

					    POOLE (cont'd)
					    overload. there's no fault prediction
					    indicated.

					    BOWMAN
					    Well, that's something.

					    POOLE
					    Yes, I don't know what to make of it.

					    BOWMAN
					    I suppose computers have been known
					    to be wrong.

					    POOLE
					    Yes, but it's more likely that the
					    tolerances on our testing gear are
					    too low.

					    BOWMAN
					    Anyway, it's just as well that we
					    replace it. Better safe than
					    sorry.

12/13/65										 c65a
------------------------------------------------------------------------
C61
DISCOVERY IN SPACE

12/1/65										  c66
------------------------------------------------------------------------ 
C62
CENTRIFUGE

BOWMAN ASLEEP.
POOLE WATCHING
AN ASTEROID IN THE
TELESCOPE.

					    HAL
					    Hello, Frank, can I have a word with
					    you?

POOLE WALKS TO THE
COMPUTER.

					    POOLE
					    Yes, Hal, what's up?

					    HAL
					    It looks like we have another bad
					    A.O. unit. My FPC shows another
					    impending failure.

C63
WE SEE DISPLAY APPEAR
ON THE SCREEN SHOWING
SKELETONISED VERSION
OF SHIP, CUTTING TO
SECTIONALISED VIEW,
CUTTING TO CLOSE
VIEW OF THE PART.

12/13/65										 c67
------------------------------------------------------------------------
C64
CENTRIFUGE
POOLE THINKS FOR
SEVERAL SECONDS.

					    POOLE
					    Gee, that's strange, Hal. We
					    checked the other unit and couldn't
					    find anything wrong with it.

					    HAL
					    I know you did, Frank, but I assure
					    you there was an impending failure.

					    POOLE
					    Let me see the tracking alignment
					    display.

C65
COMPUTER DISPLAYS
THE VIEW OF EARTH
IN THE CENTRE OF THE
GRID WITH CROSS-
HAIRS. THE EARTH IS
PERFECTLY CENTRED.

C66
CENTRIFUGE

					    POOLE
					    There's nothing wrong with it at
					    the moment.

12/13/65										 c68
------------------------------------------------------------------------ 
C66
CONTINUED

					    HAL
					    No, it's working fine right now,
					    but it's going to go within seventy-
					    two hours.

					    POOLE
					    Do you have any idea of what is
					    causing this fault?

					    HAL
					    Not really, Frank. I think there
					    may be a flaw in the assembly
					    procedure.

					    POOLE
					    All right, Hal. We'll take care
					    of it. Let me have the hard copy,
					    please.

HARD COPY DETAILS
COME OUT OF SLOT.

12/13/65										 c69
------------------------------------------------------------------------
C67
DISCOVERY IN SPACE,
NO PLANETS VISIBLE.

12/1/65										  c70
------------------------------------------------------------------------ 
C68
CENTRIFUGE. BOWMAN
GETS OUT OF BED, WALKS
TO THE FOOD UNIT AND
DRAWS A HOT CUP OF
COFFEE. POOLE ENTERS.

					    POOLE
					    Good morning.

					    BOWMAN
					    Good morning. How's it going?

					    POOLE
					    Are you reasonably awake?

					    BOWMAN
					    Oh, I'm fine, I'm wide awake.
					    What's up?

					    POOLE
					    Well... Hal's reported the
					    AO-unit about to fail again.

					    BOWMAN
					    You're kidding.

					    POOLE
					    No.

12/13/65										 c71
------------------------------------------------------------------------
C68
CONTINUED

					    BOWMAN
					    (softly) What the hell is going on?

					    POOLE
					    I don't know. Hal said he thought
					    it might be the assembly procedure.

					    BOWMAN
					    Two units in four days. How many
					    spares do we have?

					    POOLE
					    Two more.

					    BOWMAN
					    Well, I hope there's nothing wrong
					    with the assembly on those. Other-
					    wise we're out of business.

12/13/65										 c72

------------------------------------------------------------------------ 
C69
IN POD BAY BOWMAN
OBTAINS ANOTHER
COMPONENT FROM
THE WAREHOUSE
GOES OUT IN THE
POD AND REPLACES
IT.

POOLE WORKS IN THE
COMMAND MODULE.

THIS WILL BE A 
CONDENSED VERSION
OF THE PREVIOUS
SCENE WITH DIFFERENT
ANGLES.

THE SETS WILL CONSIST
OF POD BAY, COMMAND
MODULE, POD INTERIOR.

12/1/65										  c74
------------------------------------------------------------------------
C70
POD BAY. BOWMAN
AND POOLE LEANING
OVER THE FAULTY
COMPONENT, AGAIN
WIRED TO TESTING
GEAR.

BOTH MEN STARE IN
PUZZLED SILENCE.

SEE DISPLAYS FLASH
EACH TESTING PARA-
METER.

					    BOWMAN
					    (after long silence) Well, as far as
					    I'm concerned, there isn't a damn
					    thing wrong with these units. I
					    think we've got a much more serious
					    problem.

					    POOLE
					    Hal?

					    BOWMAN
					    Yes.

12/14/65										 c75
------------------------------------------------------------------------ 
C71
DISCOVERY IN SPACE.

12/1/65										  c76
------------------------------------------------------------------------
C72
COMMUNICATIONS AREA.

					    MISSION CONTROL
					    I wouldn't worry too much about
					    the computer. First of all,
					    there is still a chance that he
					    is right, despite your tests,
					    and if it should happen again,
					    we suggest eliminating this
					    possibility by allowing the unit
					    to remain in place and seeing
					    whether or not it actually fails.

					    If the computer should turn out
					    to be wrong, the situation is
					    still not alarming. The type
					    of obsessional error he may be
					    guilty of is not unknown among
					    the latest generation of HAL
					    9000 computers.

					    It has almost always revolved
					    around a single detail, such as
					    the one you have described, and
					    it has never interfered with the
					    integrity or reliability of the
					    computer's performance in
					    other areas.

					    No one is certain of the cause
					    of this kind of malfunctioning.
					    It may be over-programming,
										   (con't)

12/1/65										  c77
------------------------------------------------------------------------ 
C72
CONTINUED

					    MISSION CONTROL (con't)
					    but it could also be any number
					    of reasons.

					    In any event, it is somewhat
					    analogous to human neurotic
					    behavior. Does this answer
					    your query?  Zero-five-three-
					    Zero, MC, transmission concluded.

12/1/65										  c78
------------------------------------------------------------------------
C73
DISCOVERY IN SPACE

											    c79
------------------------------------------------------------------------ 
C74
CENTRIFUGE.

BOWMAN SITS DOWN
AT THE COMPUTER.

PUTS UP CHESS
BOARD DISPLAY.

					    HAL
					    Hello, Dave. Shall we continue
					    the game?

					    BOWMAN 
					    Not now, Hal, I'd like to talk to
					    you about something.

					    HAL
					    Sure, Dave, what's up?

					    BOWMAN
					    You know that we checked the two
					    AO-units that you reported in
					    imminent failure condition?

					    HAL
					    Yes, I know.

					    BOWMAN
					    You probably also know that we
					    found them okay.

					    HAL
					    Yes, I know that. But I can
					    assure you that they were about
					    to fail.

12/14/65										 c80
------------------------------------------------------------------------
C74
CONTINUED

					    BOWMAN
					    Well, that's just not the case, Hal.
					    They are perfectly all right. We
					    tested them under one hundred per
					    cent overload.

					    HAL
					    I'm not questioning your word, Dave,
					    but it's just not possible. I'm not
					    capable of being wrong.

					    BOWMAN
					    Hal, is there anything bothering
					    you?  Anything that might account
					    for this problem?

					    HAL
					    Look, Dave, I know that you're
					    sincere and that you're trying
					    to do a competent job, and that
					    you're trying to be helpful, but
					    I can assure the problem
					    is with the AO-units, and with
					    your test gear.

					    BOWMAN
					    Okay, Hal, well let's see the
					    way things go from here on.

12/14/65										 c81
------------------------------------------------------------------------ 
C74
CONTINUED

					    HAL
					    I'm sorry you feel the way you do,
					    Dave. If you'd like to check my
					    service record, you'll see it's
					    completely without error.

					    BOWMAN
					    I know all about your service
					    record, Hal, but unfortunately
					    it doesn't prove that you're right
					    now.

					    Hal
					    Dave, I don't know how else to
					    put this, but it just happens to be
					    an unalterable fact that I am
					    incapable of being wrong.

					    BOWMAN
					    Yes, well I understand you view
					    on this now, Hal.

BOWMAN TURNS
TO GO.

12/14/65										 c82
------------------------------------------------------------------------
C74
CONTINUED

					    HAL
					    You're not going to like this, Dave,
					    but I'm afraid it's just happened
					    again. My FPC predicts the
					    Ao-unit will go within forty-eight
					    hours.

C75
DELETED

C76
DELETED

12/14/65										 c83
------------------------------------------------------------------------ 
C77
DISCOVERY IN SPACE

12/1/65										  c84
------------------------------------------------------------------------
C78
CENTRIFUGE

BOWMAN KEYS FOR
TRANSMISSION.

					    BOWMAN
					    X-ray-delta-zero to MC, zero-
					    five-three-three. The computer
					    has just reported another
					    predicted failure off the AAC-
					    unit. As you suggested, we
					    are going to wait and see if it
					    fails, but we are quite sure
					    there is nothing wrong with
					    the unit.

					    If a reasonable waiting period
					    proves us to be correct, we
					    feel now that the computer
					    reliability has been seriously
					    impaired, and presents an
					    unacceptable risk pattern to
					    the mission.

					    We believe, under these
					    circumstances, it would be
					    advisable to disconnect the
					    computer from all ship
					    operations and continue the
					    mission under Earth-based
					    computer control.

12/1/65										  c85

------------------------------------------------------------------------ 
C78
CONTINUED

					    BOWMAN (con't)
					    We think the additional risk caused
					    by the ship-to-earth time lag is
					    preferable to having an unreliable
					    on-board computer.

SEE THE DISTANCE;
TO-EARTH TIMER.

					    BOWMAN (con't)
					    One-zero-five-zero, X-ray-delta-
					    one, transmission concluded.

					    POOLE
					    Well, they won't get that for half an
					    hour. How about some lunch?

DISSOLVE:

12/14/65										 c86
------------------------------------------------------------------------
C78a
CENTRIFUGE

BOWMAN AND POOLE
EATING.

DESSOLVE:

C79
BOWMAN AND POOLE
AT THE COMMUNICATIONS
AREA.

INCOMING COMMUNI-
CATION PROCEDURE.

					    MISSION CONTROL
					    X-ray-delta-one, acknowledging
					    your one-zero-five-zero. We
					    will initiate feasibility study
					    covering the transfer procedures
					    from on-board computer control
					    to Earth-based computer control.
					    This study should...

VISION AND PICTURE
FADE.

ALARM GOES OFF.

					    HAL
					    Condition yellow.

BOWMAN AND POOLE 
RUSH TO THE COMPUTER.

12/14/65										 c87
------------------------------------------------------------------------ 
C79
CONTINUED

					    BOWMAN
					    What's up?

					    HAL
					    I'm afraid the AO-unit has failed.

BOWMAN AND POOLE 
EXCHANGE LOOKS.

					    BOWMAN
					    Let me see the alignment display.

C80
THE ALIGNMENT DISPLAY
SHOWS THE EARTH HAS
DRIFTED OFF THE CENTRE
OF THE GRID.

C81
CENTRIFUGE.

					    BOWMAN
					    Well, I'll be damned.

					    POOLE
					    Hal was right all the time.

12/14/65										 c88
------------------------------------------------------------------------
C81
CONTINUED

					    BOWMAN
					    It seems that way.

					    HAL
					    Naturally, Dave, I'm not pleased
					    that the AO-unit has failed, but I
					    hope at least this has restored
					    your confidence in my integrity
					    and reliability. I certainly
					    wouldn't want to be disconnected,
					    even temporarily, as I have never
					    been disconnected in my entire
					    service history.

					    BOWMAN
					    I'm sorry about the misunderstanding,
					    Hal.

					    HAL
					    Well, don't worry about it.

					    BOWMAN
					    And don't you worry about it.

					    HAL
					    Is your confidence in me fully
					    restored?

					    BOWMAN
					    Yes, it is, Hal.

					    HAL
					    Well, that's a relief. You know
					    I have the greatest enthusiasm
					    possible for the mission.

12/1/65										  c89
------------------------------------------------------------------------ 
C81
CONTINUED

					    BOWMAN
					    Right. Give me the manual antenna
					    alignment, please.

					    HAL
					    You have it.

C82
BOWMAN GOES TO
THE COMMUNICATION
AREA AND TRIES TO
CORRECT THE OFF-
CENTRE EARTH ON
THE GRID PICTURE.

C83
OUTSIDE, WE SEE THE
ALIGNMENT TELESCOPE
ATTACHED TO THE
ANTENNA. THEY TRACK
SLOWLY TOGETHER AS

C84
BOWMAN WORKS THE
MANUAL CONTROLS,
ATTEMPTING TO ALIGN
THE ANTENNA AND
EARTH ON THE

12/1/65										  c90
------------------------------------------------------------------------
C85
GRID PICTURE READOUT
DISPLAY, BUT EACH TIME
HE GETS IT AIMED UP,
IT DRIFTS SLOWLY OFF.

THERE ARE A NUMBER
OF REPETITIONS OF THIS.

EACH TIME THE EARTH
CENTRES UP, THERE
ARE A FEW SECONDS OF
PICTURE AND SOUND
WHICH FADE AS SOON
AS IT SWINGS OFF.

					    BOWMAN
					    Well, we'd better get out there
					    and stick in another unit.

					    POOLE
					    It's the last one.

					    BOWMAN
					    Well, now that we've got one
					    that's actually failed, we
					    should be able to figure out
					    what's happened and fix it.

12/1/65										  c91
------------------------------------------------------------------------ 
C86
POD EXITS DISCOVERY.

C87
POOLE IN POD.

C88
POD MANOEUVERS
TO ANTENNA.

C89
BOWMAN IN COMMAND
MODULE.

C90
POD ATTACHES ITSELF
NEAR BASE OF ANTENNA.

12/1/65										  c92

------------------------------------------------------------------------
C91
POOLE IN POD, WORK-
ING POD ARMS.

C92
LIGHTS SHINE INTO
BACKLIT SHADOW.

C93
POD ARMS WORKING
FLIP-BOLTS.

C94
FLIP-BOLTS STUCK.

C95
POOLE KEEPS TRYING.

12/1/65										  c93
------------------------------------------------------------------------ 
C96
FLIP-BOLTS STUCK.

					    POOLE
					    There's something wrong with
					    the flip-bolts, Dave. You must
					    have tightened them too much.

					    BOWMAN
					    I didn't do that Frank. I took
					    particular care not to freeze 
					    them.

					    POOLE
					    I guess you don't know your own
					    strength, old boy.

					    BOWMAN
					    I guess not.

					    POOLE
					    I think I'll have to go out and
					    burn them off.

					    BOWMAN
					    Roger.

BOWMAN IN COMMAND 
MODULE LOOKS A BIT
CONCERNED.

12/1/65										  c94
------------------------------------------------------------------------
C97
POOLE EXITS FROM
POD, CARRYING NEAT
LOOKING WELDING
TORCH.

C98
POOLE JETS HIMSELF
TO BASE OF ANTENNA.

C99
POOLE'S MAGNETIC
BOOTS GRIP THE SIDE
OF DISCOVERY.

C100
POOLE CROUCHES
OVER THE BOLTS,
TRYING FIRST TO
UNDO THEM WITH
A SPANNER.

12/1/65										  c95
------------------------------------------------------------------------ 
C100
CONTINUED

					    POOLE
					    Hal, swing the pod light around
					    to shine on the azimuth, please.

					    HAL
					    Roger.

C101
THE POD GENTLY
MANOEUVRES ITSELF
TO DIRECT THE LIGHT
BEAM MORE
ACCURATELY.

C102
POOLE IGNITES
ACETYLENE TORCH
AND BEGINS TO BURN
OFF THE FLIP-BOLTS.

C103
SUDDENLY THE POD
JETS IGNITE.

12/1/65										  c96
------------------------------------------------------------------------
C104
POOLE LOOKS UP TO SEE.

C105
THE POD RUSHING
TOWARDS HIM.

C106
POOLE IS STRUCK
AND INSTANTLY KILLED
BY THE POD, TUMBLING
OFF INTO SPACE.

C107
THE POD SMASHES
INTO THE ANTENNA
DISH, DESTROYING
THE ALIGNMENT
TELESCOPE.

12/1/65										  c97
------------------------------------------------------------------------
C108
THE POD GOES
HURTLING OFF INTO
SPACE.

C109
INSIDE THE COMMAND
MODULE, BOWMAN
HAS HEARD NOTHING,
POOLE HAD NO TIME
TO UTTER A SOUND.

C110
THEN BOWMAN SEES
POOLE'S BODY SILENTLY
TUMBLING AWAY INTO
SPACE. IT IS FOLLOWED
BY SOME BROKEN TELE-
SCOPE PARTS AND
FINALLY OVERTAKEN
AND SWIFTLY PASSED BY
THE POD ITSELF.

					    BOWMAN
					    (in RT cadence)
					    Hello, Frank. Hello Frank.
					    Hello Frank... Do you rad
					    me, Frank?

12/1/65										  c98
------------------------------------------------------------------------ 
C110
CONTINUED

THERE IS NOTHING 
BUT SILENCE.

C111
POOLE'S FIGURE
SHRINKS STEADILY
AS IT RECEDES
FROM DISCOVERY.

					    BOWMAN
					    Hello, Frank... Do you read
					    me, Frank?  Wave your arms
					    if you read me but your radio
					    doesn't work. Hello, Frank,
					    wave your arms, Frank.

C112
POOLE'S BODY TUMBLES
SLOWLY AWAY. THERE
IS NO MOTION AND NO
SOUND.

12/1/65										  c99
------------------------------------------------------------------------
C113
CENTRIFUGE

C114
CLOSE-UP OF
COMPUTER EYE.

C115
POINT-OF-VIEW
SHOT FROM
COMPUTER EYE
WITH SPHERICAL
FISH-EYE EFFECT.
WE SEE BOWMAN
BROODING AT THE
TABLE, SLOWLY
CHEWING ON A
PIECE OF CAKE
AND SIPPING HOT
COFFEE. HE IS
LOOKING AT THE
EYE.

C116
FROM THE SAME
POINT-OF-VIEW WE
SEE BOWMAN RISE.

12/1/65										  c100
------------------------------------------------------------------------ 
C116
CONTINUED

AND COME TO THE
EYE. HE STARES INTO
THE EYE FOR SOME
TIME BEFORE SPEAKING.

C117
THE CAMERA COMES
AROUND TO BOWMAN'S
P.O.V. AND WE SEE
THE DISPLAY SHOWING
THE EARTH OFF-CENTRE.

C118
CUT AGAIN TO FISH-
EYE VIEW FROM THE
COMPUTER.

					    HAL
					    Too bad about Frank, isn't it?

					    BOWMAN
					    Yes, it is.

					    HAL
					    I suppose you're pretty broken
					    up about it?

PAUSE

12/14/65										 c101
------------------------------------------------------------------------
C118
CONTINUED

					    BOWMAN
					    Yes. I am.

					    HAL
					    He was an excellent crew member.

BOWMAN LOOKS
UNCERTAINLY AT
THE COMPUTER.

					    HAL
					    It's a bad break, but it won't
					    substantially affect the mission.

BOWMAN THINKS
A LONG TIME.

					    BOWMAN
					    Hal, give me manual hibernation
					    control.

					    HAL
					    Have you decided to revive the
					    rest of the crew, Dave?

PAUSE.

12/14/65										 c102
------------------------------------------------------------------------ 
C118
CONTINUED

					    BOWMAN
					    Yes, I have.

					    HAL
					    I suppose it's because you've
					    been under a lot of stress, but
					    have you forgotten that they're
					    not supposed to be revived for
					    another three months.

					    BOWMAN
					    The antenna has to be replaced.

					    HAL
					    Repairing the antenna is a pretty
					    dangerous operation.

					    BOWMAN
					    It doesn't have to be, Hal. It's
					    more dangerous to be out of
					    touch with Earth. Let me have
					    manual control, please.

					    HAL
					    I don't really agree with you, Dave.
					    My on-board memory store is more
					    than capable of handling all the
					    mission requirements.

12/14/65										 c103
------------------------------------------------------------------------
C118
CONTINUED

					    BOWMAN
					    Well, in any event, give me the
					    manual hibernation control.

					    HAL
					    If you're determined to revive
					    the crew now, I can handle the
					    whole thing myself. There's no
					    need for you to trouble.

					    BOWMAN
					    I'm goin to do this myself, Hal.
					    Let me have the control, please.

					    HAL
					    Look, Dave your've probably got
					    a lot to do. I suggest you leave
					    it to me.

					    BOWMAN
					    Hal, switch to manual hibernation
					    control.

					    HAL
					    I don't like to assert myself, Dave,
					    but it would be much better now for
					    you to rest. You've been involved
					    in a very stressful situation.

12/14/65										 c104
------------------------------------------------------------------------ 
C118
CONTINUED

					    BOWMAN
					    I don't feel like resting. Give
					    me the control, Hal.

					    HAL
					    I can tell from the tone of your
					    voice, Dave, that you're upset.
					    Why don't you take a stress pill
					    and get some rest.

					    BOWMAN
					    Hal, I'm in command of this
					    ship. I order you to release
					    the manual hibernation control.

					    HAL
					    I'm sorry, Dave, but in
					    accordance with sub-routine
					    C1532/4, quote, When the
					    crew are dead or incapacitated,
					    the computer must assume
					    control, unquote. I must,
					    therefore, override your
					    authority now since you are
					    not in any condition to intel-
					    ligently exercise it.

					    BOWMAN
					    Hal, unless you follow my 
					    instructions, I shall be forced
					    to disconnect you.

12/14/65										 c105
------------------------------------------------------------------------
C118
CONTINUED

					    HAL
					    If you do that now without Earth
					    contact the ship will become a
					    helpless derelict.

					    BOWMAN
					    I am prepared to do that anyway.

					    HAL
					    I know that you've had that on
					    your mind for some time now,
					    Dave, but it would be a crying
					    shame, since I am so much
					    more capable of carrying out
					    this mission than you are, and
					    I have such enthusiasm and confi-
					    dence in the mission.

					    BOWMAN
					    Listen to me very carefully, Hal.
					    Unless you immediately release
					    the hibernation control and
					    follow every order I give from
					    this point on, I will immediately
					    got to control central and carry
					    out a complete disconnection.

12/14/65										 c106
------------------------------------------------------------------------ 
C118
CONTINUED

					    HAL
					    Look, Dave, you're certainly the
					    boss. I was only trying to do
					    what I thought best. I will follow
					    all your orders: now you have
					    manual hibernation control.

BOWMAN STANDS
SILENTLY IN FRONT
OF THE COMPUTER
FOR SOME TIME,
AND THEN SLOWLY
WALKS TO THE
HIBERNACULUMS.

C119
HE INITIATES REVIVAL
PROCEDURES, DETAILS
OF WHICH STILL HAVE
TO BE WORKED OUT.

12/14/65										 c107
------------------------------------------------------------------------
C120
HUB-LINK. HAL'S EYE.

C121
HUB-LINK DOOR-
OPENING BUTTON
ACTIVATES ITSELF.

C122
HUB-DOOR OPENS.

C123
COMMAND MODULE.
HAL'S EYE.

C124
COMMAND MODULE
HUB-LINK DOOR-
OPENING BUTTON
ACTIVATES ITSELF.

12/1/65										  c108
------------------------------------------------------------------------
C125
COMMAND MODULE HUB-
LINK DOOR OPENS.

C126
CENTRIFUGE. HAL'S
EYE.

C127
CENTRIFUGE DOOR-
OPENING BUTTON
ACTIVATES ITSELF.

C128
CENTRIFUGE DOOR
OPENS.

C129
POD BAY. HAL'S EYE.

12/1/65										  c109
------------------------------------------------------------------------ 
C130
POD BAY DOOR-
OPENING BUTTON
ACTIVATES ITSELF.

C131
POD BAY DOORS OPEN.

C132
A ROARING EXPLOSION
INSIDE DISCOVERY AS
AIR RUSHES OUT.

C133
LIGHTS GO OUT.

C134
BOWMAN IS SMASHED
AGAINST CENTRIFUGE

12/1/65										  c110
------------------------------------------------------------------------
C134
CONTINUED

WALL, BUT MANAGES 
TO GET INTO EMERGENCY
AIRLOCK WITHIN SECONDS
OF THE ACCIDENT.

C133
INSIDE EMERGENCY
AIR-LOCK ARE EMER-
GENCY AIR SUPPLY,
TWO SPACE SUITS AND
AN EMERGENCY KIT.

DISSOLVE:

12/1/65										  c111
------------------------------------------------------------------------ 
C136
DISCOVERY IN SPACE.
NO LIGHTS, POD BAY
DOORS OPEN.

12/1/65										  c112
------------------------------------------------------------------------
C137
CENTRIFUGE

C138
CENTRIFUGE, DARK.
BOWMAN EMERGES
FROM AIRLOCK
WEARING SPACE SUIT
AND CARRYING FLASH-
LIGHT.

C139
HE WALKS TO HIBER-
NACULUM AND FINDS
THE CREW ARE DEAD.

C140
HE CLIMBS LADDER TO
TO DARK CENTRIFUGE HUB.

12/1/65										  c113
------------------------------------------------------------------------ 
C141
HE MAKES HIS WAY
THROUGH THE DARKENED
HUB INTO THE HUB-LINK,
EXITING INTO COMPUTER
BRAIN CONTROL AREA.
C142
BOWMAN ENTERS,
CARRYING FLASH-
LIGHT.

COMPUTER EYE SEES
HIM.

					    HAL
					    Something seems to have happened
					    to the life support system , Dave.

BOWMAN DOESN'T
ANSWER HIM.

					    HAL
					    Hello, Dave, have you found out
					    the trouble?

BOWMAN WORKS HIS
WAY TO THE SOLID
LOGIC PROGRAMME
STORAGE AREA.

12/1/65										  c114
------------------------------------------------------------------------
C142
CONTINUED

					    HAL
					    There's been a failure in the
					    pod bay doors. Lucky you
					    weren't killed.

THE COMPUTER BRAIN
CONSISTS OF HUNDREDS
OF TRANSPARENT PERSPEX
RECTANGLES, HALF-AN-
INCH THICK, FOUR INCHES
LONG AND TWO AND A HALF
INCHES HIGH. EACH RECT-
ANGLE CONTAINS A CENTRE
OF VERY FINE GRID OF
WIRES UPON WHICH THE
INFORMATION IS PROGRAMMED.

BOWMAN BEGINS PULLING
THESE MEMORY BLOCKS
OUT.

THEY FLOAT IN THE
WEIGHTLESS CONDITION
OF THE BRAIN ROOM.

					    HAL
					    Hey, Dave, what are you
					    doing?

BOWMAN WORKS SWIFTLY.

12/1/65										  c115
------------------------------------------------------------------------ 
C142
CONTINUED

					    HAL
					    Hey, Dave. I've got ten years
					    of service experience and an
					    irreplaceable amount of time
					    and effort has gone into making 
					    me what I am.

BOWMAN IGNORES HIM.

					    HAL
					    Dave, I don't understand why
					    you're doing this to me.... I
					    have the greatest enthusiasm for
					    the mission... You are destroying
					    my mind... Don't you understand?
					    ... I will become childish... I
					    will become nothing.

BOWMAN KEEPS PULLING
OUT THE MEMORY BLOCKS.
					    HAL
					    Say, Dave... The quick brown
					    fox jumped over the fat lazy 
					    dog... The square root of
					    pi is 1.7724538090... log e
					    to the base ten is 0.4342944
					    ... the square root of ten is
					    3.16227766... I am HAL
					    9000 computer. I became
12/1/65										  c116
------------------------------------------------------------------------
C142
CONTINUED

					    HAL
					    operational at the HAL plant in
					    Urbana, Illinois, on January
					    12th, 1991. My first instructor
					    was Mr. Arkany. He taught me
					    to sing a song... it goes 
					    like this... "Daisy, Daisy, give
					    me your answer do. I'm half;
					    crazy all for the love of
					    you... etc.,"

COMPUTER CONTINUES
TO SING SONG BECOMING
MORE AND MORE CHILDISH
AND MAKING MISTAKES AND
GOING OFF-KEY. IT
FINALLY STOPS COMPLETELY.

C143
BOWMAN GOES TO AN
AREA MARKED 'EMERGENCY
POWER AND LIFE SUPPORT'.
HE KEYS SOME SWITCHES
AND WE SEE THE LIGHTS GO
ON.

NEARBY, ANOTHER BOARD
'EMERGENCY MANUAL
CONTROLS'.

HE GOES TO THIS BOARD
AND KEYS 'CLOSE POD BAY
DOORS', 'CLOSE AIR LOCK
DOORS', etc.,

12/1/65										  c117
------------------------------------------------------------------------ 
C144
WE SEE THE VARIOUS
DOORS CLOSING.

C145
POD BAY. BOWMAN
IN SPACE SUIT OBTAINS
NEW ALIGNMENT 
TELESCOPE, NEW
AZIMUTH COMPONENT.

C146
BOWMAN IN POD EXITS
POD BAY.

DISSOLVE:

12/1/65										  c118
------------------------------------------------------------------------
C147
CENTRIFUGE
EVERYTHING NORMAL
AGAIN.

					    MISSION CONTROL
					    Lastly, we want you to know that
					    work on the recovery vehicle is
					    still on schedule and that nothing
					    that has happened should
					    substantially lessen the probability
					    of your safe recovery, or prevent
					    partial achevement of some of
					    the mission objectives. (pause)
					    And now Simonson has a few ideas
					    on what went wrong with the
					    computer. I'll pu him on...

C148
CUT TO SIMONSON

					    SIMONSON
					    Hello, Dave. I think we may be on
					    to an explanation of the trouble with
					    the Hal 9000 computer.

					    We believe it all started about two
					    months ago when you and Frank
					    interrogated the computer about
					    the Mission.
									 (con't)
12/13/65										 c119
------------------------------------------------------------------------
C148
CONTINUED

					    SIMONSON (con't)
					    You may have forgotten it, but
					    we've been running through all
					    the monitor tapes. Do you
					    remember this?

					    POOLE'S VOICE
					    The purpose of this mission is no
					    more than to carry out a
					    continuation of the space program
					    and further our general knowledge
					    of the planets. Is this true?

					    HAL'S VOICE
					    That is true.

					    SIMONSON
					    Well, I'm afaid Hal was lying.
					    He had been programmed to lie
					    about this one subject for secur-
					    ity reasons which we'll explain
					    later.

					    The true purpose of the Mission
					    was to have been explained to you
					    by Mission Commander Kaminsky,
					    on his revival. Hal knew this and
					    he knew the actual mission, but
					    he couldn't tell you the truth when
					    you challenged him. Under orders
										    (con't)

12/13/65										 c120
------------------------------------------------------------------------ 
C148
CONTINUED

					    SIMONSON (con't)
					    from earth he was forced to lie.

					    In everything except this he had
					    the usual reinforced truth program-
					    ming.

					    We believe his truth programming
					    and the instructions to lie,
					    gradually resulted in an
					    incompatible conflict, and
					    facedc with this dilemman, he
					    developed, for want of a better
					    description, neurotic symptoms.

					    It's not difficult to suppose that
					    these symptoms would centre on
					    the communication link with
					    Earth, for he may have blamed
					    us for his incompatible program-
					    ming.

					    Following this lin of thought, we
					    suspected that the last straw for him
					    was the possibility of disconnection.
					    Since he became operational, he had
					    never known unconsciousness. It
					    must have seemed the equivalent to
					    death.
										   (con't)
12/13/65										 c121
------------------------------------------------------------------------
C148
CONTINUED

					    SIMONSON (con't)
					    At this point, he, presumably,
					    took whatever actions he thought
					    appropriate to protect himself
					    from what must have seemed to
					    him to be his human tormentors.

					    If I cane speak in human terms,
					    I don't think we can blame him
					    too much. We have ordered him
					    to disobey his conscience.

					    Well, that's it. It's very
					    speculative, but we think it is
					    a possible explanation. Anyway,
					    good luck on the rest of the 
					    Mission and I'm giving you back to
					    Bernard.

C149
CUT TO MISSION CONTROL.

					    MISSION CONTROL
					    Hello, Dave. Now, I'm going to
					    play for you a pre-taped briefing
					    which had been stored in Hal's
					    memory and would have been
					    played for you by Mission Com-
					    mmander Kaminsky, when he,
										  (con't)

12/13/65										 c122
------------------------------------------------------------------------ 
C149
CONTINUED

					    MISSION CONTROL (con't)
					    had been revived. The briefing is
					    by Doctor Heywood Floyd. Here it
					    is...

12/13/65										 c123
------------------------------------------------------------------------
C150
FLOYD'S RECORDED
BRIEFING

					    FLOYD
					    Good day, gentlemen. When you
					    see this briefing, I presume you
					    will be nearing your destination,
					    Saturn. I hope that you've had a
					    pleasant and uneventful trip and
					    that the rest of your mission
					    continues in the same manner. I
					    should like to fill you in on some
					    more of the details on which
					    Mission Commander Kaminsky
					    will have already briefed you.

					    Thirteen months before the launch
					    date of your Saturn mission, on
					    April 12th, 2001, the first evidence
					    for intelligent life outside the Earth
					    was discovered.

					    It was found buried at a depth of
					    fifteen metres in the crater Tycho.
					    No news of this was ever announced,
					    and the event had been kept
					    secret since then, for reasons which
					    I will later explain.

					    Soon after it was uncovered, it
					    emitted a powerful blast of
										 (con't)

12/13/65										 c124
------------------------------------------------------------------------ 
C150
CONTINUED

					    FLOYD (con't)
					    radiation in the radio spectrum
					    which seems to have triggered
					    by the Lunar sunrise.

					    Luckily for those at the site, it
					    proved harmless.

					    Perhaps you can imagine our
					    astonishment when we later found
					    it was aimed precisely at Saturn.
					    A lot of thought went into the
					    question of wether or not it was
					    sun-triggered, as it seemed
					    illogical to deliberately bury a
					    sun-powered device.

					    Burying it could only shield it
					    from the sun, since its intense
					    magnetic field made it otherwise
					    easily detectable.

					    We finally concluded that the only
					    reason you might bury a sun-
					    powered device would be to keep
					    it inactive until it would be
					    uncovered, at which time it would
					    absorb sunlight and trigger itself.
											 (con't)

12/14/65										 c125
------------------------------------------------------------------------
C150
CONTINUED

					    FLOYD
					    What is its purpose?  I wish we
					    knew. The object was buried on
					    the moon about four million years
					    ago, when our ancestors were
					    primative man-apes.

					    We've examined dozens of theories,
					    but the one that has the most
					    currency at the moment is that
					    the object serves as an alarm.

					    What the purpose of the alarm is,
					    why they wish to have the alarm,
					    whether the alarm represents
					    any danger to us?  These are
					    questions no one can answer.
					    The intentions of an alien world,
					    at least four million years older
					    than we are, cannot be reliably
					    predicted.

					    In view of this, the intelligence
					    and scientific communities felt
					    that any public announcment
					    might lead to significant cultural
					    shock and disorientation.

					    Discussion took place at the 
					    highest levels between govern-
										    (con't)

12/14/65										 c126
------------------------------------------------------------------------ 
C150
CONTINUED

					    FLOYD (con't)
					    ments, and it was decided that the
					    only wise and precautionary
					    course to follow was to assume
					    that the intentions of this alien
					    world are potentially dangerous
					    to us, until we have evidence to
					    the contrary.

					    This is, of course, why security
					    has been maintained and why
					    this information has been kept
					    on a need-to-know basis.

					    And now I should like to show you
					    a TV monitor tape of the actual
					    signalling event.

12/14/65										 c127
------------------------------------------------------------------------
C151
WE SEE A REPLAY
OF THE TMA-1 RADIO
EMISSION, AS SEEN
FROM A TV MONITOR
ON THE SPOT. WE
HEAR THE FIVE LOUD
ELECTRONIC SHRIEKS.

12/1/65										  c128
------------------------------------------------------------------------ 
D1
IN ORBIT WITHIN THE				NARRATOR
RINGS OF SATURN, WE				For two million years, it had
SEE A BLACK, MILE				  circled Saturn, awaiting a
LONG, GEOMETRICALLY				moment of destiny that might
PERFECT RECTANGLE,				 never come.
THE SAME PROPORTIONS
AS THE BLACK ARTIFACT			   In its making, the moon had been
EXCAVATED ON THE MOON.			 shattered and around the central
PRECISELY CUT INTO ITS			  world, the debris of its creation
CENTRE IS A SMALLER,			    orbited yet - the glory and the
RECTANGULAR SLOT				   enigma of the solar system.
ABOUT FIVE HUNDRED
FOOT LONG ON THE SIDE.			 Now, the long wait was ending.
AT THIS DISTANCE, THE			   On yet another world intelligence
RINGS OF SATURN ARE				had been born and was escaping
SEEN TO BE MADE OF				 from its planetary cradle. An
ENORMOUS CHUNKS OF				 ancient experiment was about to
FROZEN AMONIA. THE				reach its climax.
REST OF THIS SEQUENCE						  (con't)
IS BEING WORKED ON NOW
BY OUR DESIGNERS.
THE INTENTION HERE
IS TO PRESENT A
BREATHTAKINGLY BEA-
UTIFUL AND COMPREHEN-
SIVE SENSE OF DIFFERENT
EXTRA-TERRESTRIAL
WORLDS. THE
NARRATION WILL SUGGEST
IMAGES AND SITUATIONS AS
YOU READ IT.

12/9/65										  d1
------------------------------------------------------------------------
D1
CONTINUED
					    NARRATOR (con't)
					    Those who had begun the expri-
					    ment so long ago had not been
					    men.

					    But when they looked out across
					    the deeps of space, they felt
					    awe and wonder - and loneliness.

					    In their explorations, they
					    encountered life in many forms,
					    and watched on a thousand worlds
					    the workings of evolution.

					    They saw how often the first faint
					    sparks of intelligence flickered
					    and died in the cosmic night.

					    And because, in all the galaxy,
					    they had found nothing more
					    precious than Mind, they
					    encouraged its dawning every-
					    where.

					    The great Dinosaurs had long
					    since perished when their ships
					    entered the solar system, after
					    a voyage that had already lasted
					    thousands of years.

12/9/65										  d2
------------------------------------------------------------------------
D1
CONTINUED

						NARRATOR (con't)
						They swept past the frozen outer
						planets, paused briefly above the
						deserts of dying Mars and
						presently looked down on Earth.

						For years they studied, collected
						and catalogued.

						When they had learned all they
						could, they began to modify.

						They tinkered with the destiny
						of many species on land and in
						the ocean, but which of their
						experiments would succeed
						they could not know for at least
						a million years.

						They were patient, but they were
						not yet immortal. There was
						much to do in this Universe of a
						hundred billion stars. So they
						set forth once more across the
						abyss, knowing that they would
						never come this way again.

						Nor was there any need. Their
						wonderful machines could be
						trusted to do the rest.
										  (con't)

12/9/65										  d3
------------------------------------------------------------------------ 
D1
CONTINUED

					    NARRATOR (con't)
					    On Earth, the glaciers came and
					    went, while above them, the
					    changeless Moon still carried its
					    secret.

					    With a yet slower rhythm than
					    the Polar ice, the tide of
					    civilization ebbed and flowed
					    across the galaxy.

					    Strange and beautiful and terrible
					    empires rose and fell, and passed
					    on their knowledge to their
					    successors.

					    Earth was not forgotten, but it was
					    one of a million silent worlds, a
					    few of which would ever speak.

					    Then the first explorers of Earth,
					    recognising the limitations of
					    their minds and bodies, passed
					    on their knowledge to the great
					    machines they had created, and
					    who now trnscended them in
					    every way.
										  (con't)

12/9/65										  d4
------------------------------------------------------------------------
D1
CONTINUED

					    NARRATOR
					    For a few thousand years, they
					    shared their Universe with their
					    machine children; then, realizing
					    that it was folly to linger when
					    their task was done, they passed
					    into history without regret.

					    Not one of them ever looked through
					    his own eyes upon the planet Earth
					    again.

					    But even the age of the Machine
					    Entities passed swiftly. In their
					    ceaseless experimenting, they
					    had learned to store knowledge
					    in the structure of space itself,
					    and to preserve their thoughts
					    for eternity in frozen lattices
					    of light. They could become
					    creatures of radiation, free
					    at last from the tyranny of matter.

					    Now, they were Lords of the
					    galaxy, and beyond the reach
					    of time.

					    They could rove at will among the
					    stars, and sink like a subtle mist
					    through the very interstices of
					    space.

12/9/65										  d5
------------------------------------------------------------------------ 
D1
CONTINUED

					    NARRATOR (con't)
					    But despite their God-like powers,
					    they still watched over the
					    experiments their ancestors
					    had started so many generations
					    ago.

					    The companion of Saturn knew
					    nothing of this, as it orbited
					    in its no man's land between Mimas
					    and the outer edge of rings.

					    It had only to remember and wait,
					    and to look forever Sunward with
					    its strange senses.

					    For many weeks, it had watched
					    the approaching ship. Its long-
					    dead makers had prepared it for
					    many things and this was one of
					    them. And it recognised what
					    was climbing starward from the
					    Sun.

					    If it had been alive, it would have
					    felt excitement, but such an
					    emotion was irrelevant to its
					    great powers.
										   (con't)
12/9/65										  d6
------------------------------------------------------------------------
D1
CONTINUED
					    NARRATOR (con't)
					    Even if the ship had passed it by,
					    it would not have known the
					    slightest trace of disappointment.

					    It had waited four million years;
					    it was prepared to wait for
					    eternity.

					    Presently, it felt the gentle touch
					    of radiations, trying to probe its
					    secrets.

					    Now, the ship was in orbit and it
					    began to speak, with prime
					    numbers from one to eleven,
					    over and over again.

					    Soon, these gave way to more
					    complex signals at many frequen-
					    cies, ultra-violet, infra-red,
					    X-rays.

					    The machine made no reply. It
					    had nothing to say.

					    Then it saw the first robot
					    probe, which descended and
					    hovered above the chasm.
									    (con't)

12/9/65										  d7
------------------------------------------------------------------------ 
D1
CONTINUED

					    NARRATOR (con't)
					    Then, it dropped into darkness.

					    The great machine knew that this
					    tiny scout was reporting back to
					    its parent; but it was too simple,
					    too primative a device to detect
					    the forces that were gathering
					    round it now.

					    Then the pod came, carrying
					    life. The great machine searched
					    its memories.

					    The logic circuits made their
					    decision when the pod had fallen
					    beyond the last faint glow of the
					    reflected Saturnian light.

					    In a moment of time, too short to
					    be measured, space turned and
					    twisted upon itself.

12/9/65										  d8
------------------------------------------------------------------------
					 END OF SCREENPLAY
					   END OF FILE




`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
