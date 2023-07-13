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

The Fifth Element

An original script
by
Luc Besson

Revisions by
Luc Besson
and
Robert Mark Kamen

August 1995 Draft

Gaumont and Les Films du Dauphin

FADE IN:

1	EXT.  DESERT  NILE RIVER  VALLEY - DAY

Somewhere in the Nile at the edge of the desert.

CREDITS  ROLL

WRITTEN:	EGYPT 1913

OMAR and his mule zigzag along the bottom of sun scorched dunes.

2	EXT.  TEMPLE  EXCAVATION - DAY

The mule and the boy finally reach a camp.  A few tents dwarfed by a huge
temple door jutting out of the sand.  The camp is deserted except for
some kids by the temple entrance holding large mirrors, reflecting light
into the temple.
Omar leaves his mule in the shade, seizes two goatskins and slips inside
the temple.

3	INT.  TEMPLE - DAY

Omar makes his way uneasily down a pillared corridor that opens into a
vast room where an old scientist stands on a small wooden ladder in front of
the wall across the room.  PROFESSOR MASSIMO PACOLI. A young man is beside
him, BILLY MASTERSON, age 25, an American student. He has a large sketchpad in
his hands.  Behind them AZIZ, age 10, whose job is to hold the last
mirror which shines light into the expansive room.

        PROFESSOR
    (deciphering)
"..when the three planets are in eclipse.."

His fingers trace across the wall which is covered with symbols and
strange hieroglyphs as he deciphers.

        PROFESSOR
"..the black hole like a door is open...
Evil comes ... sowing terror and chaos..."
See?  The snake, Billy.  The Ultimate Evil
... make sure you get the snake!

The Professor points emphatically to the snake, the symbol of Evil,
coming through the door between the three planets in eclipse.  C.U.
Billy's hand sketches the snake quickly.  He is a natural artist.

        BILLY
And when is this door opening snake act
supposed to occur?

The Professor's fingers touch the signs.

        PROFESSOR
..if this is the five..and this the thousand..

He calculates.

        PROFESSOR
Every five thousand years..

        BILLY
    (kidding)
So I have some time..

He reaches for the pad.

ANGLE ON:  Omar.  Standing at the entrance to the chamber with the water
bag, entranced by the sight.  A skeletal hand falls on his shoulder.  Omar
turns to an ancient PRIEST in a rough milled black cannock.

        PRIEST
I will take it to them my son.

Startled but obedient, Omar gives the water bag to the Priest.

        PRIEST
Go with God.. be safe from Evil..

The Priest makes the sign of the Cross on the boy's forehead, dismissing
him.
As soon as he is gone, the Priest turns a worried eye to the Professor.

ANGLE ON:  The Professor is back to translating, Billy to sketching.

        PROFESSOR
"..then arrange the elements of life against
the Terror just so.."

His fingers run on.

        PROFESSOR
"..Water..fire..earth..air..four
elements around the fifth.."

His fingers fall on the one element that has a human shape, surrounded by
all the others.

The Priest opens the water skin and begins to pour a vial of powder into
the skin.

ANGLE ON:  Aziz falling asleep.  The mirror falls, the light fails.

        PROFESSOR
Aziz!  Light!

The boy struggles to stay awake.  The mirror comes up.

        PRIEST
Lord forgive me.. they already know too,
much..

        PROFESSOR
"..in which all the history of the Universe resides
..all the strength..all the hope..Protect us from
Evil.."

        PRIEST (V.O.)
Amen..

The Professor turns to the Priest who is pouring water into a tin cup
from the skin.

        PROFESSOR
Father.. it in the most extraordinary thing..
the greatest find in history..can you imagine
the implications.

        PRIEST
Only too well... here you must be
parched..

He hands the cup to the Professor.  The Professor takes it, has it almost
to his lips when..

        PROFESSOR
I mean look.. it is like a battle plan..

In his excitement he does not drink, much to the Priest's chagrin.

        PROFESSOR
Here the Good.. Here the Evil..

As the Priest looks up, Aziz the mirror  boy, tips his mouth under the
water skin, drinking the leakage.

        PROFESSOR
Here..

He points to the Five Elements.

        PROFESSOR
A weapon against evil.  Amazing!  I am
going to be famous.

        PRIEST
Then let us toast to your fame!  Here Billy..

The Priest hands Billy a cup.

        PRIEST
Drink!

        PROFESSOR
To fame.. salud..

The Professor raises the cup to drink, and then...

        PROFESSOR
We cannot toast with water.. Billy !
In my sack.. the Grappa!

The Priest watches, disconsolate, as the Professor tosses away his water.
Billy finishes his cup before running off into the tunnel.

4	EXT.  COLONNADE - DAY

A muffled SOUND grows steadily louder. Outside, a monstrous linear shadow
disturbs the kid's game and gradually darkens the temple entrance.

5	INT.  TUNNEL - DAY

Billy is looking for the grappa in the Professor's bag.  He comes upon a
machine pistol.  When the muffled SOUND suddenly grabs his attention.  He
leans toward the corridor and sees part of a spaceship appear.  Billy is
paralyzed.

6	INT.  TEMPLE  ROOM - DAY

The Professor keeps reading over the inscription.

        PROFESSOR
"..this perfect person.. this perfect
being.." I do not understand this.. perfect?

        PROFESSOR
Where is that boy? Billy!

7	INT.  TUNNEL - DAY

Billy presses himself against the wall, in the shadows, terrified, but
sketching away like mad, as large shadowed figures lumber past him.  He
begins to blink, feeling the effects of the Priest's potion..

8	INT.  TEMPLE  ROOM - DAY

The Professor reads the wall.

        PROFESSOR
And this divine Light they talk
about.. what is Divine light?

At that moment, the reflection from Aziz's mirror drops again.  The light
fails.

        PROFESSOR
    (without turning)
Aziz light!

The room is flooded with light all of the sudden.

        PROFESSOR
Better.. this is the most unbelievable thing
I have ever seen..

The Professor turns around, and is stunned speechless to find himself
face to face with two MONDOSHAWANS.  A dozen others fill the hall manning
the source of the light, large luminous globes.  Aziz is fast asleep.

        PROFESSOR
    (uncomprehending)
...Uh, yes?

The Professor is lifted up and carried off to the side by the aliens.
The KOMMANDER stops in front of the Priest who is still on his knees, face
to the ground.

        PRIEST
Master... He was about to discover everything,
but I had the situation under control.

The two MONDOSHAWAN GUARDS hold the professor three feet off the ground.

        PROFESSOR
    (in a panic)
Who are you?  Are you Germans?  Sprechen
Sie Deutsch?

9	INT.  TUNNEL

Billy staggers forward, a machine pistol in his hand.

10	INT.  TEMPLE  ROOM

The KOMMANDER holds out his hand to the Priest.

        PRIEST
What did I do wrong?

The Priest jumps to his feet excitedly.

        KOMMANDER
Servant, you and the thousand guards
before you... You have done your work well,
but we have to recover the elements. War will
soon engulf your planet. We must keep them safe.

The Kommander goes over to the wall and seems to be looking for a lock.
He finds it and slides in his metallic finger which is more intricate
than a key to a safe.  He turns his hand, activating a mechanism that opens
the wall.

        PROFESSOR
Unbelievable!!!

The Kommander turns around and crooks a finger.  One of the MONDOSHAWANS
waves his hand, puts the professor to sleep and heads down the hallway
revealed by the opening.  He is followed by his men.  The Priest slips in
behind them.

11	INT.  ROOM 2  TEMPLE - DAY

The Kommander steps into a vast room.  The ceiling is very high, pyramid-
shaped.  In each corner of the room, four vessels contain four
rectangular twelve-inch stones-, the four elements.  In the middle, an
opaque sarcophagus rests on an altar.  The Kommander stops and
contemplates it a moment.

        PRIEST
    (to himself)
The Fifth Element...

        KOMMANDER
Take them and put them in a safe place.

His men carry out his order.

12	INT.  ROOM 1  TEMPLE - DAY

Billy staggers across the floor, struggling to stay awake.

13	INT.  ROOM 2  TEMPLE - DAY

The Kommander opens a case.  His men come and put the four, precious
stones in it, one by one.

        PRIEST
    (moved)
Will the elements be gone now forever
from this place?

        KOMMANDER
When mankind comes to its senses.
We will return.

        PRIEST
Knowing mankind as I do, that could take
centuries!

        KOMMANDER
Time is of no importance, only life
is important.

The Priest nods and lowers his eyes.

Angle on:  Billy staggering forward, raising his pistol, blinking his
eyes to focus..

A MONDOSHAWAN puts the fourth element in the case The Kommander shuts the
case and looks at the Priest.

        KOMMANDER
When EVIL returns so shall we.

        PRIEST
    (head lowered)
We will be ready, Lord.

Billy suddenly staggers into the room, brandishing his gun.

        BILLY
Stop.

Billy trips, the gun goes off.  He empties the clip.  The Mondoshawan
carrying the case crumples to the ground.  The wall immediately begins to
close.  Billy fires wildly, unable to control the powerful kicking gun.

        PRIEST
No!!!  Don't!!!

The Priest rushes Billy.  The weapon has such a kick to it that Billy
starts shooting into the air, backs up, then stumbles and knocks himself
out.  The Priest is on the ground, seriously wounded.  So is the Kommander.
The WARRIORS are in a panic.

        CLERK
Hurry, Kommander!  The wall's closing!!!

The wall continues to close.  Sand pours in from everywhere.  The vast
room fills up like an hourglass.

        KOMMANDER
A mission is a mission, Savoia.
You'll learn that.

The Kommander picks up the case and reaches the wall but can't get
through it.  His
armor is too bulky, the opening too small.  He manages to get his arm and
the case through.

        KOMMANDER
My apologies to General Kroi -- and my wife..

The wall closes, crushing his arm.  The CLERK scoops up the case and runs
through the huge piles of sand.

14	EXT.  COLONNADE - DAY

The CLERK boards the ship carrying the case.  Omar hides in a corner,
frightened to death, hugging Billy's bag of drawings.

15	INT.  TEMPLE  ROOM - DAY

The room fills with sand.  The Priest's body is soon buried.

16	EXT.  DESERT - DAY

The huge ship's main hatch closes.

17	EXT.  TEMPLE - DAY

The ship lifts off and speeds away. Omar emerges from the temple gaping
at the ship as it vanishes in the sky.

18	EXT.  PYRAMIDS

A gigantic shooting star flashes above the pyramids.

19	EXT.  EARTH  ORBIT

The ship passes in front of us and heads for the stars disappearing at
unbelievable speed.  The background is a star-spattered cosmos.

WRITTEN:	500 YEARS LATER

Another, more modern, spaceship, fills the screen.  A warship belonging
to the Federal Army.

20	INT.  SPACESHIP  CONTROL  ROOM

CU of a digital control screen.  Three planets projecting three straight
lines that crisscross at one point.  Identical to the one observed by the
professor on the temple wall.  GENERAL STAEDERT looks out through the
ship's window at one of the three huge planets in eclipse.

        STAEDERT
Don't you have anything?  Not even
a temperature?

        CAPTAIN
The thermo-analyzers have jammed.
One of them reads over a million degrees,
the other's at minus 5000...
Never seen anything like it.

        TECHNICIAN
It's taking shape.

21	EXT.  SPACE

In the middle of the shadows, a door to the nightmare has just opened.
Evil is back.  A round, moving mass, continually changing color.

        CAPTAIN
    (in awe)
What the hell can it be?

        TECHNICIAN
Hook-up with the president in one
minute, General.

General Staedert remains calm.

        STAEDERT
...Send out a probe.

22	INT.  PRESIDENT'S  OFFICE  MANHATTAN

LINDBERG, 50, the president of the United Federations, his features lined
and worn by various delegations, mainly military, enters his office.
There's a crisis in the air.  The President's AIDE leans down to his ear.

        AIDE
On air in 30 seconds.

In the middle of the group is a Priest whose appearance reminds us of
Egypt.  A younger man DAVID, 18, shy, a priest-in-training attends the old
man.

23	INT.  CONTROL  ROOM / PRESIDENT'S  OFFICE

        CAPTAIN
President on line sir..

General Staedert leans over his screen and seems surprised to see the
room but not the president.

        PRESIDENT (O.S.)
Staedert, do you read me?

        STAEDERT
I can hear you, Mr. President, but I
can't see you .

The President grabs the mini-camera on his desk and yanks it around to
face him.
His face fills the screen.

        PRESIDENT
    (exasperated)
Is that better?

        STAEDERT
Perfect, Mr. President.

        PRESIDENT
I have to address the Supreme Council
in 10 minutes.
Just the facts, General.

        STAEDERT
There are no results from the chemical
and molecular analysis as of yet, all the
calibers are overshot..we're hoping a
thermo nucleatic imaging..

        PRESIDENT
(exasperated)
What you are saying is you don't know
what this..thing..is.

Consternation reigns in the President's office.

        STAEDERT
Not yet Sir..The only thing we know is
it just keeps getting bigger!

        PRESIDENT
Options.

        STAEDERT
Wait or act.

        PRESIDENT
Recommendations.

        STAEDERT
My philosophy Mr. President is shoot first
ask questions later.
I don't like uninvited guests.

        PRESIDENT
Gentlemen?

        HEAD CHEMISTS
I think it would be foolish to shoot at an
organism that seems alive, without first
taking the time to study it more!
Besides, it has shown no signs of hostility.

        PRESIDENT
    (worried)
No... it's just getting bigger.

        HEAD CHEMISTS
So do people, but that's no reason to shoot
them.

        PRESIDENT
    (exasperated)
The security of the Federated Territories is
and remains number one priority.
    (to the military)
I suppose General Staedert's "philosophy" is
acceptable to you?

All the Generals nod "yes"

        PRESIDENT
All right, then! Staedert?

        PRIEST (O.S.)
Mr. President?

The President scans the room. Staedert remote controls the camera toward
the room.

        PRESIDENT
...Yes?

The camera moves up the Priest and we finally discover his face.  He is
in his sixties, a shrewd look in his eyes.
Around his neck hangs the Kommander's finger, the key to the temple.

        PRIEST
Cornelius, Vito Cornelius. 50th level parish.
I have a different theory to offer you,
Mr. President.

        PRESIDENT
I'm listening.

        CORNELIUS
Imagine for a moment that this. thing is not
anything that can be identified because it prefers
not to be, because it is the antithesis of all we are.
Because it is evil.. TOTAL EVIL.

        PRESIDENT
    (a little sarcastically)
One more reason to shoot first eh?

All the Generals nod in agreement.

        CORNELIUS
Evil begets evil, Mr. President.
Shooting would only make it stronger.

24	INT.  SPACESHIP

        TECHNICIAN
The probe will attain its objective in
five seconds.

Staedert moves closer to the ship's window.

25	EXT.  SPACE.

Evil swallows the probe and immediately bubbles over with activity like a
furious volcano.

26	INT.  PRESIDENT'S  OFFICE

        STAEDERT
Mr. President, we're at crisis point.

The President looks puzzled.

        PRESIDENT
Your theory is interesting Father but
I don't think we have time to go into it
right now!

        CORNELIUS
Time is of no importance, Mr. President.
Only life is important.

        PRESIDENT
    (exasperated)
That's exactly what we are going to try and do:
Protect the lives of some 200 billion of our
fellow citizens! General?
You may fire when ready.

27	INT.  SPACESHIP

        STAEDERT
    (cold) (to the CAPTAIN)
..Up front loading of a 120 ZZR missile.
Marker lights on the objective.

28	EXT.  OUTSIDE  SPACESHIP

All of a sudden, outside the ship, the strange planet's activity ceases.
A black crust immediately covers it.

29	INT.  PRESIDENT'S  OFFICE

        SCIENTIST
    (consulting new data)
Its structure has just solidified on the surface,
 as if the object felt something.  If that's the case,
we are undoubtedly dealing with an intelligence.

        CORNELIUS
The most terrible intelligence imaginable,
Mr. President.

The President hesitates.

        CAPTAIN
...The ship is in combat formation.
The missile is loaded, General.

        PRESIDENT
    (uneasy)
Staedert?  Give me a minute...
I have a doubt.

        STAEDERT
    (cold)
I don't, Mr. President.

30	EXT.  OUTSIDE  SPACESHIP

The missile explodes from the ship and penetrates its target.  The
explosion is swallowed like a fizzy pill in a small glass of water.
Nothing happens.  And then the mass grows larger.

31	INT.  CONTROL  ROOM / PRESIDENT'S  OFFICE

Staedert looks worried.

        STAEDERT
Load a series of 740 missiles. Maximum
shield protection.

        CAPTAIN
Yes, Sir.

The President is growing ever more worried.

        PRESIDENT
Staedert?  What's going on?  Did you
destroy it?

        STAEDERT
I'm about to, Mr. President.

32	EXT.  SPACESHIP

A series of three missiles heads for the planet, which absorbs them all.
And literally doubles in size.

        SCIENTIST
The planet's diameter has greatly
increased and it's moving toward the ship.

        PRESIDENT
Staedert?  Get out of there immediately!
I don't want an incident, do you hear me,
Staedert?

        STAEDERT
    (worried)
...What do we have that's bigger than 240?

        CAPTAIN
Nothing, General.

        PRESIDENT
Staedert, get out of there!  That's an order!

A bead of sweat pearls Staedert's forehead. He is about to give an order
when a gigantic flame emerges from the planet and literally swallows
Staedert's spaceship.

        STAEDERT
    (eyes wide)
... Good God!

The flame fills the screen with a horrendous NOISE that....

33	INT.  APARTMENT

... wakes up a man trying to escape from a nightmare. KORBEN DALLAS rubs
his head.  Thirty five years old, short hair, powerfully built,
unquestionable charm, good looking in spite of the scars here and there.
The alarm clock is still ringing, it shows the date as March 18, 2359.  It
in two in the morning. Ha grabs a cigarette, and stops to look for a
light.  He shuts oft the alarm.  He hears a cat mewing in the hall.  But it
still rings.  Korben takes a moment and then realizes it in the phone
that is ringing.

        KORBEN
    (to the cat)
I'm coming.

He grabs the phone and crosses his tiny apartment (27 feet long by 6 feet
wide) heading for the door, patting himself for a light.  Behind him, the
bed makes itself automatically.

        KORBEN
    (on the phone)
Yeah?

        FINGER (V.O.)
Hey bud! Finger here.

He opens the door for the cat and starts to rummage through a drawer for
a match. Out come a handful of war decorations, a hero's collection.

        KORBEN

    (to the cat)
Hi sweetie!

...A Medal of Honor Certificate to Major Dallas

        FINGER (V.O.)
I love you too Major, but you haven't called
me that since basic training.

        KORBEN
I was talking to the cat.

        FINGER (V.O.)
Oh, yeah, I forgot.You still prefer
your cat to the real thing.

...A picture of Korben and his ex-wife on their wedding day.

        KORBEN
At least, the cat comes back.

        FINGER (V.O.)
    (ironical)
You still pining for that two timing bitch.
Forget her.
There are a million women out there.

        KORBEN
I don't want a million - I just want
one.  A perfect one.

        FINGER (V.O.)
Don't exist bud.

...A picture of Korben and Finger in uniform next to a space fighter.

        KORBEN
I just found a picture of you.

        FINGER (V.O.)
How do I look?

        KORBEN
Like shit.

Korben finds a box of matches with three matches.  He strikes one. It
does not light.  Korben opens the fridge, bare, except for an empty can of
GEMINI croquettes.
On the packet is an ad:
WIN A DREAM TRIP FOR 2 TO FHLOSTON PARADISE.

        FINGER (V.O.)
 Must be an old picture.. Listen, you gotta bring
me your hack for the 6 month overhaul.  A.S.A.P.

Korben heats up some brackish water.

        KORBEN
    (sighs)
I don't need one.

        FINGER (V.O.)
You forgetting who sat next to you for
a thousand missions.
I know how you drive.

        KORBEN
Finger!  I'm driving a cab now, not a
space fighter!!

        FINGER (V.O.)
How many points you got left on your
license?

        KORBEN
    (lying)
Uh... at least fifty.

        FINGER (V.O.)
In your dreams! See you tonight!

Finger has hang up.  Korben sighs and does the same.  He gets the heated
brackish water and sits down.  The cat pounces on the table and meows for
its food.  Korben pours half the coffee in the cat's cup.

The cat meows.  Korben taps his cup to the cat's saucer.

        KORBEN
Cheers!

34	INT.  HALL - DAY - OMIT

35	INT.  GARAGE - DAY - OMIT

36	INT.  PRESIDENT'S  OFFICE

The office is emptied, only a few army officers remain.  An ancient
manuscript, Billy's drawings, sits in front of the President.  Cornelius
turns page after page, illustrating his
point.

        CORNELIUS
    (to the President)
We have forty-eight hours, the time it needs
to adapt itself to our living conditions.

        PRESIDENT
    (worried)
And then?

        CORNELIUS
And then it will be too late. The goal of
evil is to wipe out life! All forms of life.
For all eternity...Life upsets it.

The President appears upset himself by this image.

        PRESIDENT
Is there anything that can stop it?

        CORNELIUS
    (knowing)
Yes..thank God..

37	EXT.  SPACE

The Mondoshawan spaceship bursts through a star cluster and fills the
screen.

38	INT.  COCKPIT - OMIT

39	INT.  PRESIDENT'S  OFFICE

The manuscript is open on the President's desk.. CLOSE ON:
Billy's rendering of the Mondoshawan.

        CORNELIUS
    (to the President)
The Mondoshawans don't belong to the
Federated Territories, but they are peaceful...
in their possession are the four elements of life.
These elements when they are gathered around a fifth:
The Supreme Being, ultimate warrior, created to protect
life......

The SUPREME BEING is standing, as if frozen in armor.  All we see is the
bottom half of his body.  Big metallic gloves hold the case engraved with
the emblem of the three suns containing the four Sacred Stones.

        CORNELIUS
..will produce what the ancients called the
light of creation, the light of total goodness
which is the only thing that can defeat EVIL.

The President points to the spot occupied by the 5th element.

        PRESIDENT
But what happens if instead of
this... Ultimate Warrior... it is EVIL
who stands here?

        CORNELIUS
White turns to black.  Light to Dark.
Life to Death.  For all eternity.

The President's nerves quiver.

        CAPTAIN
Sir, we have a Mondoshawan spaceship at
the frontier requesting permission to enter
 our territory.

        PRESIDENT
I guess I should make a decision..

        CORNELIUS
They are the only ones who can help..

        GENERAL
Sir..the Mondoshawan do not belong to the
federation. We do not know their intention..
I must recommend a full trinuclear assault..

        PRESIDENT
    (yells)
Did you see that..thing..swallow our battleship
like a gum drop?  You can't even tell me what it is!
I ask you for options you give me bullshit.
Give them permission to enter our territories
with my warmest regards.

        CORNELIUS
    (relieved)
Thank you, Mr. President.

40	INT.  MONDOSHAWANS  SPACESHIP - OMIT

41	INT.  PRESIDENT'S  OFFICE - OMIT

42	EXT.  SPACE / INT.  MONDOSHAWAN  SHIP

The MONDOSHAWAN spaceship zips across the Federated Galaxy.
But it is not alone: Two black warships seem to be dogging it.

43	INT.  MONDOSHAWAN  COCKPIT

The MONDOSHAWANS have spotted the spacecraft chasing them.

        FIRST OFFICER
Two non-identified ships approaching.

        CAPTAIN
Must be the welcoming committee.

44	INT.  WARSHIP  COCKPIT

A MANGALORE sits at the controls of the warship. His terrifying features
tell us what sort of welcome they can expect.  The pilot fires without
warning.

45	EXT.  SPACE / INT.	MONDOSHAWAN  SHIP

The huge ship is badly hit and immediately swerves oft course.
Panic aboard the MONDOSHAWAN ship.

46	INT.  MONDOSHAWAN  SHIP

        CAPTAIN
We've been hit! General alert!!!

Blast after blast hits the defenseless ship.

        CAPTAIN
We're losing control! We have to land fast!

The huge ship veers oft course and heads for a small red planet, taking
hit after hit.

        CAPTAIN
Send out a distress signal!!! Activate
the emergency landing procedure!

The huge ship approaches the planet at blinding speed.

        FIRST OFFICER
Impact in less than ten seconds!

The red planet looms ever closer.

        CAPTAIN
Time is of no importance...

The ship crashes in a gigantic explosion.

46A	INT.  KORBEN'S  APARTMENT - DAY

A thermo nuclear explosion fills a T.V. screen..Which Korben's cat
watches with interest.

Korben is about to exit the apartment.

        KORBEN
Don't watch it all day, it'll rot your
mind. Bye sweetie..

In response, the cat meows.  Korben opens the door to..A huge
gun, brandished by a nervous MUGGER, pointing right in his face.

        MUGGER
The cash man!

        KORBEN
Been here long?

        MUGGER
Don't fuck with me man or I'll blow
you into tomorrow!

Unperterbed, Korben looks at the mugger's fearsome weapon.

        KORBEN
Isn't that a Z140? Alleviated titanium.
Neuro charged assault model?

        MUGGER
    (off balance)
Uh..

        KORBEN
You know you could hurt someone with
this puppy..good thing it's not loaded..

The mugger is lost.  He looks at his weapon.

        MUGGER
It's not?

        KORBEN
You gotta push the little yellow button...

Korben points to the button on the side of the gun.  The mugger takes his
advice.

        MUGGER
Thanks..

        KORBEN
You're welcome..

And with lightning speed, Korben blasts the mugger with a straight right
hand, sending him down for the count.  Korben retrieves the gun.

        KORBEN
..you know these things are VERY illegal..
you could get in a shit load of trouble..
I better hang onto it for you..

As the mugger clears his head, Korben opens a drawer next to him which is
full of similar guns! The mugger's eyes pop out of his head.  He scampers
to his feet and runs off.

Korben shrugs, exits his apartment, and closes the door.  The cat watches
a nuclear holocaust on T.V.,  uninterrupted.

46B	INT.  KORBEN'S  GARAGE - DAY

Korben enters his taxi.  A robotic voice greets him.

        VOICE
Please enter your license..

Korben complies, and starts to push a series of buttons on the dash.

        VOICE
Welcome on board Mr. Dallas..

        KORBEN
How you doing this morning?  Sleep OK?
I didn't.

Korben hits a button.  The garage door starts to open.

        VOICE
Fuel level 6.03..Propulsion 2x4...

        KORBEN
I had the worst goddamn nightmare.

        VOICE
You have nine points left on your license..

        KORBEN
Thanks for reminding me..

As the garage door lifts, the Megalopolis that is New York City in the
23rd century comes into view.  Startling in it's height, and breath.

        VOICE
Have a nice day..

Korben lets the propulsion build.

        KORBEN
Right..

He lets the gear slip.  The taxi rockets off into the City.

47	EXT.  TAXI  STAND - NIGHT - OMIT

48	EXT.  RED  PLANET-OMIT

49	INT.  PRESIDENT'S  OFFICE

Cornelius collapses in a chair.

        CORNELIUS
We are lost!

        GENERAL MUNRO
Mr. President, the attack was launched by two
unregistered warships.

        PRESIDENT
Close all borders and declare a state of
general alert.

        GENERAL MUNRO
Yes, sir.

        PRESIDENT
    (to another OFFICER)
Try to contact these Mondoshawans.  We
owe them an explanation.

        CORNELIUS
    (lost, to himself)
What are we going to do?

        PRESIDENT
This is government business now.
You ought to go home and get some
rest, Father.

The President motions to his guards to come and get Cornelius.

        PRESIDENT
I promise to keep you informed.

A weary Cornelius leaves the room with David's help.

        PRESIDENT
    (to the CAPTAIN)
...Has the rescue team found any survivors?

50	EXT.  RED  PLANET - OMIT

51	EXT.  RED  PLANET ORBIT - OMIT

52	INT.  LABORATORY  1ST DISTRICT  MANHATTAN - DAWN

An arm, on a surgical cart, moves down the hall of the Nucleological
Center, the most sterile of environments.

PROFESSOR MACTILBURGH, age 60, hurries alongside GENERAL MUNRO.

        MUNRO
This is all that survived?

        MACTILBURGH
Actually only one cell survived..

        MUNRO
Have you identified it?

        MACTILBURGH
It's not that easy..we've never encountered
anything like it before..you see normal human
beings have 40 DNA memo groums..which is
more than enough for any species to perpetuate
itself..This one has 200,000.

        MUNRO
Talk English Doc.

        MACTILBURGH
This cell is like a huge library. It has infinite
genetic knowledge stored inside.
Almost like it was...engineered.

        MUNRO
Sounds like a freak of nature to me.

        MACTILBURGH
Yes... I can't wait to meet him.

They pass into the lab.

53	INT.  LABORATORY

The two enter a cylindrical laboratory.  There is a huge glass turbine in
the middle with the metal glove inside.  A DNA chain scrolls on the computer
screen.

        MACTILBURGH
    (rather fascinated)
The compositional elements of his DNA
chain are the same as ours, there are simply
more of them tightly packed.
His knowledge is probably limitless..

        MUNRO
    (worried)
Is there any danger? Some kind of virus?

        MACTILBURGH
We put it through the cellular hygiene detector.
The cell is for lack of a better word... perfect.

Munro hesitates a moment.  Then he sighs and uses his personal key to
open the
self-destruct box.

        MUNRO
OK, go ahead! But Mr. Perfect better be polite...
otherwise I turn him into cat food.

Mactilburgh starts the operation rolling as Munro puts his hand on the
sell-destruct button, ready to use it.  Thousands of cells form in the
heart of the generator, an assemblage of DNA elements.  Then the cells move
down a tube, like a fluid, and gather in an imprint of a HUMAN body.  Step
by step bones are reconstructed, then the nervous and muscular systems.
Whole veins wrap around the muscles.  An entire body is reconstructing before
our very eyes.

        DOCTOR
Three seconds to ultra-violet protection.

A shield comes over the reconstructing body and makes it invisible.

        MACTILBURGH
    (to Munro)
...This is the crucial phase, The reconstruction
of pigment. Cells are bombarded with slightly
greasy solar atoms which forces the body cells
to react, to protect themselves.
That means growing skin. Clever, eh?

        MUNRO
    (disgusted)
Wonderful!

The meter slows, drops to zero.

        ASSISTANT
... End of reconstruction, beginning of
reanimation .

A whoosh of air in the glass chamber.  Captain Munro has his hand on the
self-destruct button, ready to destroy the being that has barely been
reborn.

        MACTILBURGH
    (pushing a button)
Activate life support system.

An electrical discharge fills the glass chamber causing the body inside
to jerk.
After a few moments of silence, the SOUND of a heartbeat fills the room
over the loudspeaker.

        ASSISTANT
Life support system activated.

The Supreme Being is alive once again.

        MACTILBURGH
Remove the shield.

The ASSISTANT automatically removes the ultra-violet shield which slowly
reveals... a woman... nude... young... and very beautiful.  Munro stands there
gaping.  Not quite his vision of the Supreme Being.  Mactilburgh glances
at Munro and gently pushes his hand away from the self-destruct button.

        MACTILBURGH
    (with a smile)
I told you ... perfect!

Munro is hypnotized by the GIRL's beauty.

        MUNRO
...I'd, uh , like to get a few pictures for the
archives
before she wakes up.

Mactilburgh looks at him with a grin.  A remote-control camera approaches
the girl's face, a flash goes off.  Blinded by the flash, the girl jumps and
screams.  She cowers in a corner, shaking from the cold, darting eyes
everywhere looking for the case she was holding.

        GIRL
    (very angry)
Ouacra cocha o dayodomo binay ouacra
mo cocha ferji akba ligounai makta keratapla.
Tokemata tokemata!  Seno santonoi-aypa!
Minoi ay Cheba!  Givomana seno!

        MUNRO
    (worried)
What's she saying?

        MACTILBURGH
    (to his ASSISTANT)
Activate the phonic detector.

The girl kicks the window repeatedly.

        MACTILBURGH
And give her a light sedative...
and something to wear!

The ASSISTANT hits a button.  A pile of clothes drops out of a trapdoor
in the ceiling.  She snatches up the clothes angrily and dresses quickly.
Munro draws closer to the glass window.  He watches her dress with
undisguised pleasure.

        MUNRO
    (to Mactilburgh)
This thing solid?

        MACTILBURGH
    (smiling)
An elephant couldn't crack it.

The Girl finishes dressing.

        GIRL
    (angrily)
Teno akta chataman assin-omekta!

Munro smiles safely behind his plate glass window.

        MUNRO
    (with a smile)
You're gonna have to learn to communicate
better than that angel if you want out.

Munro dangles the key on a chain that will let her out.  The girl rams
her fist right through the window.  She grabs the key and yanks it.  The
chain snaps tight and Munro slams into the window knocking himself out.  The
girl puts her hand through the window again, unlocks the chamber and steps
out.  She is still bit wobbly on her legs.  Two GUARDS try to grab her.
She sends them flying across the room. Mactilburgh is most impressed.  He
sets off a general alarm.

54	INT.  CORRIDOR  LABORATORY

The girl runs through a maze of corridors looking for a way out.  A squad
of SECURITY GUARDS appear in front of her and open fire without warning. The
girl takes a leap, grabs an air vent, kicks it out and dives into the air
shaft.  The COPS try and jump up to the vent, but none can reach it.

        CHIEF
Get me a chair or a stepladder The rest of you
go through the main ventilation!

55	INT.  VENTILATION DUCT  LABORATORY

The girl moves along unable to see what's ahead of her. She comes to a
dead-end, a grill that leads outside.  She pushes it out and exits onto
the ledge.

56	EXT.  LEDGE  LABORATORY - DAWN

She has exited to a ledge on the 450th floor of a building, right in the
middle of Manhattan, which we discover for the first time.  The city has
become monstrous. Buildings rise 600 stories.  Cars fly.  Subways run
vertically...The girl edges along the narrow ledge, unfazed by the height.
The CHIEF leans out the vent, looking out into the void.

        CHIEF
    (to his men)
Go on follow her!

The COPS stare into the gaping void.

        COP
...No way.

The CHIEF angrily pulls out his gun and shoots at the girl who ducks
around the corner of the building.  Unfortunately the other side in full of
cops as well.  A flying police car zooms up in front of her, sirens
blaring.

        VOICE (O.S.)
This in the police.  Your status is illegal.
Please put up your hands and follow our
instructions!

The girl feels trapped.  She looks down into the endless 450 below and
all the cars flying underneath her.  Then she raises her arms... and dives
off.

57	INT.  POLICE  CAR - NIGHT

        COP
    (in the car.)
Christ! She dove off!

In a panic, the COP makes a wrong turn.  The girl falls for several
seconds.
She lands on the roof of a flying cab.

58	INT.  CAB - NIGHT

Korben tries to control his car, reeling from the impact.

        VOICE (O.S.)
You have just had an accident.
Seven points have been temporarily
removed...

Korben manages to stop his cab, pulls over to the side.

        VOICE / KORBEN
You have one point left on your license.
Have a good day.

Korben sighs and looks in the back seat to see what the damages are.  The
girl, a bit dazed (who wouldn't be), emerges from the debris and sits up.
There's some blood on her face.  Korben is stunned. The girl's still alive
and... so beautiful.  His heart heads for a meltdown.

        GIRL
Akina delutan, nou-shan.

        KORBEN
    (lost)
...'Scuse me?

A police car with wailing sirens halts in front of Korben.

        COP
    (over a loudspeaker)
You have an unauthorized passenger in your
vehicle.  We are going to arrest her.
Please leave your hands on the wheel.
Thank you for your cooperation.

        KORBEN
    (obeying)
Sorry, Hon, but I only got one point left
on my license and I gotta get to the garage!

The police car presses up against the cab.  Doors slide open.  Huge guns
point at her.  Korben feels lousy.  The girl's helpless, there are tears in
her eyes, she looks exhausted.
Korben glances at her in the rear view mirror. She's looking all around
to find something to help her communicate with him.

Her POV: an ad on the back of the seat. An 800 number to help an
orphanage. A teary photo of a kid over the words Please Help.  She shoots
to Korben a look of pure distress.

        GIRL
    (irresistible)
Please... HELP...

Korben can't resist her plea.

        KORBEN
Don't put me in this position...
I can't... I'm late as it is...

But he cannot say no to her eyes.

        KORBEN
Finger's gonna kill me.

Korben shuts oft the meter and floors it, sideswiping the police car as
he roars away.

        VOICE (O.S.)
Your license has been revoked.
Would you please....

Korben whips out a gun and shatters the loudspeaker.

        KORBEN
I hate when people cry...
I got no defense...

The police car takes out after him, sirens screeching.  An insane chase
ensues.

59	INT.  NEW YORK  STREETS - DAY

Korben and his flying taxi are absolute masters of the air.  The cops
have trouble following him but then another cop car comes to join in the
fun.  Korben drives like a man possessed, nothing can stop him. Except the
dead-end he's just come up against.

        GIRL
Daya deo dono Dato.  Dalutan!

        KORBEN
It there's one thing I don't need advice on,
it's how to drive.

Korben turns his cab sideways and scrapes through a narrow passageway,
ripping his taxi light from the roof.  The police car smashes into the
wall.  The other one brakes just in time.

        COP
Shit! Attention all-patrol cars!

The car makes a U-turn, looking for a wider passageway.

60	EXT.  NEW YORK  STREET

The police car roars up, sirens screaming then slows down and checks out
a dead-end flanked by a large vertical neon billboard. The dead-end is empty .
Korben's cab is hidden vertically behind the billboard.  Seeing nothing, the
police drive away.

        KORBEN
We'll wait till things quiet down a bit.
You mind?

The girl grabs his shirt collar and pulls him close, whispers in his ear.

        GIRL
    (weak)
...Priest...

        KORBEN
You're not that bad... Come on we'll
get you to a doctor.

The girl hands him the handle of the case, struck with the three Egyptian
suns.

        GIRL
    (weak)
Vito... Cor... Ni-lious... Priest...

        KORBEN
Vito Cornelius?

The girl nods, then faints.  Korben is somewhat lost faced with so much
mystery.

61	INT.  CORNELIUS'  APARTMENT - DAY

The door opens. Korben is there with the unconscious girl in his arms.

        KORBEN
    (embarrassed)
Excuse me, I'm looking for a priest.

        CORNELIUS
    (tired)
Weddings are one floor down.
Congratulations.

Cornelius closes the door.  The doorbell RINGS again.

        KORBEN
She's not my bride, she's my fare.
She's looking for this Vito Cornelius.
According to the phone guide he lives here.

        CORNELIUS
    (curious)
That's me.  But I don't know who she is...
where did you find her?

        KORBEN
She dropped in on me... holding this.

Korben hands him the metal handle with the three Egyptian suns, stamped
on it.

        CORNELIUS
    (staggered)
The fifth element.

He faints dead away.  Korben, with the girl still in his arms looks
around helpless.

        KORBEN
    (sighing)
Finger's gonna kill me...

62	INT.  CORNELIUS'  APARTMENT - DAY

In his armchair, Cornelius gets woken by a slap in the face.

        CORNELIUS
    (with a start)
Who are you?

        KORBEN
I brought the girl remember?

        CORNELIUS
The girl?

Cornalius gets up.  He looks at the handle.

        KORBEN
Yeah! She dropped in on me. I mean
on my taxi... talking... this... this bizarre
language...

And then it dawns on Cornelius who the girl is.

        CORNELIUS
    (eyes riveted on her)
He's a she!

        KORBEN
    (bemused)
You noticed...

        CORNELIUS
    (face shining)
There's not a moment to lose! Wake her up,
but be gentle about it!  This woman is mankind's
most precious possession! She is... perfect!

        KORBEN
So you do know her.

        CORNELIUS
Uh yes, we're cousins..distant cousins..

Cornelius runs into the next room.  Korben looks at the girl, goes to
slap her, then changes his mind.

Her beauty troubles him.  He hesitates, then, gently caresses her cheek.
Her skin seems so soft, so fragile.

        KORBEN
Perfect...

63	INT.  SMALL  ROOM

David, is mending a cassock when Cornelius bursts into the room out of
breath.

        CORNELIUS
It's a miracle!!!

        DAVID
    (worried)
What is?

        CORNELIUS
    (babbling crazily)
I can't wear these clothes! This calls
for dignity!
I have to dress the part!

He opens a closet filled with identical robes and plunges in,
disappearing as David looks on, uncomprehending.

64	INT  LIVING ROOM.  CORNELIUS'  APARTMENT

Korben gently kisses the girl's cheeks, but she doesn't respond.  He
looks around then kisses her on the lips.  The girl's eyes snap open.
When Korben straightens up he discovers his own gun jammed under his
chin.

        GIRL
    (angry)
Eto Akta Gamat!

        KORBEN
    (embarrassed)
I'm sorry, it's just that... I was
told to wake you up gently, so I figured...

The girl pauses a moment.  She stares at him, looks puzzled.

        KORBEN
You're right, I was wrong! I shouldn't
have kissed you... especially since we
haven't been introduced and...
    (he pulls out a business card)
Here, it's a bit late, but... my name is
Korben, Korben Dallas.
Keep it, you never know, maybe... you'll
need a cab one day.  I'll be happy to open
the door this time!.

The girl hesitates, then snatches the card like a wild animal.

65	INT.  SMALL  ROOM

Cornelius is lost in the closet.

        DAVID
Father, will you please explain what's
going on?

        CORNELIUS
The Supreme Being, the fifth element is here,
in our parish!!! It's a miracle!!!

66	INT.  LIVING ROOM

        KORBEN
...What's your name?

        GIRL
    (after a moment)
Leeloo Minai Lekarariba-Laminai-Tchai
Ekbat De Sebat.

        KORBEN
    (polite)
Hey,  that's... cute... Do you have a nickname,
something a little... shorter?

        GIRL
...Leeloo.

Korben is falling in love.

        KORBEN
That's... really cute...

Cornelius bursts into the room.  She turns the gun on him.
He bows before her.

        CORNELIUS
Appipulai Leeloo Minai..

        LEELOO
Corn-i-Lius?

        CORNELIUS
    (bowing)
At your service.

LEELOO lowers her guard starts to laugh.  An irresistible childish laugh.
Korben smiles.

        DAVID
Father.  You sure she's the Supreme Being?

        CORNELIUS
Absolutely sure There's the triple suns on
her gloves!

David bows low, but his eyes glance up at Leeloo.  Cornelius begins to
lead Korben toward the door, hustling him out.

        KORBEN
They all like this in your family, father?

        CORNELIUS
She's an exception..

        CORNELIUS
Thank you so much for your help Mr...?

        KORBEN
Dallas. Korben Dallas.

Cornelius takes his arm. Leeloo stops laughing when she sees Korben
leaving.

        CORNELIUS
Yes. That's fine! Thank you very much.
A thousand times over!

        KORBEN
I might call to check up on her,
you know... to see if she's better?

        CORNELIUS
She's fine, really..don't you worry..
just needs some rest..she's had a very long trip.

        KORBEN
I know. I was there when she arrived.

Cornelius is about to close the door.  Korben's hand blocks it.

        KORBEN
Excuse me! Just one thing!  She said something
to me a while ago and... I don't really get it...
Akta Gamat?

        CORNELIUS
It means, "Never without my permission".

        KORBEN
That's what I thought.

Cornelius slams the door in his face.

        KORBEN
...Thanks.

66A	INT.  KORBEN'S  APARTMENT - DAY

Korben beads down the hallway. He passes his NEIGHBOR.

        KORBEN
Evening...

        NEIGHBOR
Fuck you!

        KORBEN
...Thanks... You, too.

Korben enters his-apartment.

66B	INT.. KORBEN'S  APARTMENT - DAY

The door slides back and the cat comes rubbing up against him, tail in
the air.

        KORBEN
Oh god. I forgot your food ... I'm really sorry!
How about a nice Thai nosh to apologize?
How does that sound, huh?

The cat meows, appeased, just an the phone rings.

        KORBEN
Hello?

        FINGER (V.O.)
Hey bud...I'm waiting all day here.

        KORBEN
Finger..man..I'm sorry..listen..I was on the way
over but I had a fare fall into my lap..
y'know one of those big fares you just
can't resist..

        FINGER (V.O.)
    (suspicious)
So, just how big was this fare?

        KORBEN
5'7", green eyes... long legs... great skin...
perfect..

Korben takes out a cigarette.

        FINGER (V.O.)
Uh huh..and I don't suppose you got the
name of this..perfect fare..

        KORBEN
    (dreamy)
Leeloo..

67	INT.  GARAGE - DAY - OMIT

68	INT.  CORNELIUS'  APARTMENT - DAY

Leeloo has a towel wrapped around her, it looks like she just took a
shower.  She sits  in front of a computer wolfing down some chicken.  Data
scrolls by on the screen.  David watches from the corner, in awe.

        DAVID
What's she doing?

        CORNELIUS
Learning our history!
The last 5000 years that she missed!
She's been out of circulation a while,
you know.

Leeloo breaks into her childish laughter.

        CORNELIUS
What're you laughing about?

        LEELOO
    (pronouncing badly)
Napoleon... small.

She laughs again and tosses some capsules into the microwave.

        DAVID
    (hesitant)
Uh father, I know she's been through a lot...
but the sacred stones..we don't have much
time..

        CORNELIUS
Yes. Of course..

Leeloo takes her plate out of the microwave.  A steaming plate heaped
with chicken and exotic vegetables.

        CORNELIUS
Leeloo..I'm sorry to interrupt you but..

She sits back down in front of the screen and chomps away heavily on her
second chicken.  Cornelius sits opposite her. and holds up the case
handle.

        CORNELIUS
    (serious)
The case..with the stones...
Where is it?

        LEELOO
San Agamat chay bet... envolet!

        CORNELIUS
The case was stolen?

Leeloo nods her head, quite unperturbed and continues to devour the food
in front of her.

        CORNELIUS
    (shocked)
Who in gods name would do such
a thing?

69	INT.  CORRIDOR.  ZORG'S  WAREHOUSE - DAY

CLOSE ON: A pair of feet limping heavily.  A MAN comes alongside them.

        RIGHT ARM
Excuse me sir, the council is worried about
the economy heating up.  They wondered if
it would be possible to fire 500...

They reach a door at the end of the corridor.  Zorg enters a code.

        ZORG
Fire 1000.

        RIGHT ARM
But... 500 is all they need, sir.

ZORG turns slowly.  A small scar across run across his face, his eye
stutters.
This is not a man to cross, or contradict.

        RIGHT ARM
1000! Fine, sir!
Sorry to have disturbed you.

The door opens...

70	INT.  CORNELIUS'  APARTMENT - DAY

... and David enters carrying a bundle of clothes.

        CORNELIUS
There was this guy with a limp who
came a month ago..said he was an art
dealer ... Asking all these questions about
the Sacred Stones..at the time I didn't think
anything of it.. What was his name? I'm so
bad with names...

        DAVID
    (to Leeloo, timid)
I didn't know your size.

Leeloo is happy. She pulls off the towel and stands there nude. Cornelius
and David turn away.

        DAVID
They really made her...

        CORNELIUS
Perfect.

Leeloo finishes dressing. She is delighted.

        LEELOO
    (to David)
Domo danko!

David smiles, dumb with admiration.  Cornelius comes over.

        CORNELIUS
Leeloo?  The Stones...
We must get them back.

Leeloo settles down, sits at the computer and turns it on.

        LEELOO
Ikset-kiba.  Me imanetaba oum dalat!

        CORNELIUS
You know exactly where they are!

71	INT.  WAREHOUSE - DAY

A group of handsome WARRIORS approaches.  AKNOT, their leader has the
sacred case in his hands.  The metal handle is missing but the second
metal glove is still grasping the case.

        ZORG
    (pretending to be worried)
Aknot?  Is that you?

The LEADER nods. A disgusted look stamps Zorg's features.

        ZORG
...What an ugly face! Doesn't suit you at all!
Take it off...

AKNOT's face burns away revealing the head of a monstrous MANGALORE.

        ZORG
That's better! Never be ashamed of
who you are...
You're warriors... be proud...

AKNOT says nothing, but if his eyes could talk!

        ZORG
So what if the Federal Army crushed your
entire race and scattered your people to the
wind...
Your time for revenge is at hand...
Voila... the ZF1.

He takes out a weapon from one a crate and goes into a sales pitch.

        ZORG
    (very fast)
...It's light... the handle's adjustable for
easy carrying... good for righties and lefties.

Meanwhile, two MEN set up a mannequin rigged with various defense
mechanisms at the far end of the warehouse.

        ZORG
... Breaks down into four parts, undetectable by
X-rays.. It's the ideal weapon for quick, discreet
interventions.  A word on fire power: Titanium
recharger. 3000 round clip with bursts of 3 to 300.
With the replay button, another Zorg innovation,
it's even easier... one shot.

He fires at the mannequin.

        ZORG
... and replay sends every following shot
to the same location...

Zorg spins around, the rounds all hit the mannequin.

        ZORG
    (even faster)
I recharge, but the enemy has launched a
cowardly sneak attack from behind, the
automirror takes care of that.  Gives me the
time to turn around and finish the job.
300 round bursts, then there are the Zorg oldies...

He fires off each item he names.

        ZORG
...Rocket launcher.  The always efficient
flame thrower... My favorite.
Our famous net launcher, the arrow launcher,
with exploding or poisonous gas heads - very
practical.
And for the grand finale, the all-new ice-cube
system!

The mannequin has been blasted into a pile of ashes covered by a net,.
stuck with arrows, the whole mess frozen solid. He tosses the weapon into
AKNOT's hands.

        ZORG
...Four full crates, delivered right on time!
What about you, my dear Aknot, did
you bring me what I asked you for?

AKNOT sets the case on a crate.  Zorg gloats while stroking the case.

        ZORG
...Magnificent.

Zorg smiles, takes a deep breath, opens the case.  It's empty

72	INT.  CORNELIUS'  APARTMENT - DAY

Leeloo breaks into her childish laughter once again.

        CORNELIUS
    (astonished)
What do you mean empty?

73	INT.  ZORG'S  WAREHOUSE - DAY

AKNOT looks into the case.  Things grow tense.

        ZORG
Alright..I've got an open mind here..
anyone care to explain?

74	INT.  CORNELIUS'  APARTMENT - DAY

Leeloo explains what happened in her language.

        CORNELIUS
    (translating)
She says that the Guardians never really had
much faith in humans. They were afraid of
being attacked. The stones were given to someone
they could trust who took another route.
She's supposed to contact this person in a little less
than twelve hours from now in a hotel.
She's looking for the address!

A map of the stars flashes onto the screen, Leeloo points.

        LEELOO
Dot!

The little group comes over to look.

        DAVID
Planet Fhloston, in the Angel constellation

Cornelius plops down into his armchair.

        CORNELIUS
...We're saved!

75	INT.  ZORG'S  WAREHOUSE - DAY

        ZORG
I'm fucked!

Zorg calmly closes the case and gives Aknot a blood-chilling stare.

        AKNOT
You asked for a case.
We brought you a case.

        ZORG
    (shouting)
A case with four stones in it. Not one!
Not two or three! But four!!! Four stones!!!
What the fuck am I supposed to do with an
EMPTY case?!!

AKNOT's men grow edgy.

        AKNOT
    (tense)
...We are warriors, not merchants!

        ZORG
    (humored)
But you can still count.  Look...
my fingers.

He holds up four fingers.

        ZORG
...Four stones, four crates... Zero stones...
    (yelling)
ZERO CRATES!!!
    (to his men)
Put everything back, we're outta here.

AKNOT's warriors turn their weapons on Zorg.

        AKNOT
    (icily)
We risked our lives. I believe a
little compensation is in order.

        ZORG
    (smiling)
So, you are a merchant, after all.
    (to his men)
Leave them one crate.  For the cause!

Zorg's men leave a crate and exit with the other three.

76	EXT.  OUTSIDE  ZORG'S  WAREHOUSE - DAY

Zorg walks along the street to his limo.  RIGHT ARM carries the empty
case.

        ZORG
I don't like warriors!  They're too
narrow-minded, no sublety.  Worse,
they fight for hopeless causes..for honor!
Honor has killed millions of people but
hasn't saved a single one.
    (pause)
You know what -- do I like though, I like killer.
  A real dyed in the wool killer.  Cold-blooded.
Clean.  Methodical.  Thorough.  A killer, when
he picked up the ZF1, would've immediately
asked about the little red button on the bottom of
the gun.

77	INT.  HALLWAY  ZORG'S WAREHOUSE - DAY

The warriors have all taken a weapon. One of them inspects his ZF1.  He
turns it over and notices the little red button. He presses it.

78	EXT.  OUTSIDE ZORG'S  WAREHOUSE - DAY

Behind Zorg, an ear-shattering explosion levels the warehouse.

        ZORG
    (impassive)
Bring the priest.

79	INT.  GARAGE - DAY - OMIT

79A	 INT.  KORBEN'S  APARTMENT - DAY

Korben is finishing a Thai meal, cooked by a Thai on his mini restaurant
anchored at the window. The cat eats next to Korben, contented.

        KORBEN
So you forgive me?

The cat meows just as a red light blinks, announcing the arrival of a
message in a glass tube.  Korben ignores it.

        THAI
Not going to open?

        KORBEN
I've never gotten a message that wasn't
bad news.

        THAI
How someone strong like you scared from
a message? Is good news I sure!

        KORBEN
The last two messages I got?  The first one
was from my wife telling me she was leaving!
And the second was from my lawyer telling me
he was leaving too... with my wife.

        THAI
You right that is bad.. but mathematically
luck must change!
Grandfather say: "It never rain every day."
This is good news guarantee.. I bet you lunch!

Korben hesitates, then gives the envelope to the Thai, who opens it with
a big smile that fades as reads the contents aloud.

        THAI
...You're fired. Oh!

Korben smiles at him.

        KORBEN
At least I won lunch.

        THAI
Good philosophy..see good in bad..
I like..I prepare number one dessert..
special for you and pussy..

The cat meows.

79B	INT.  CORNELIUS'  APARTMENT - DAY

Leeloo is polishing of' an immense pile of dessert as David bangs away at
the computer.

        DAVID
I got it!  Everything  here we need to
know about Fhloston Paradise Hotel...
and a detailed blueprint of the entire hotel!

        CORNELIUS
Good work, my son.  Now all we need is
a way to get there.

The doorbell rings.

        CORNELIUS
I'll get it.  Finish your work my son.

Cornelius opens to Right Arm with armed escort.

        RIGHT ARM
Father Cornelius?

        CORNELIUS
My son?

        RIGHT ARM
Mr. Zorg would like a word with you.

        CORNELIUS
Mr. Who?

80	EXT.  MANHATTAN - OMIT

81	INT.  HALLWAY  CORNELIUS APARTMENT - OMIT

82	INT.  REFRIGERATION  ROOM - OMIT

83	INT.  ZORG'S  OFFICE

Zorg turns to Cornelius.

        ZORG
Zorg. Jean-Baptiste Emmanuel Zorg...
nice to see you again

        CORNELIUS
I remember you now..the so called
art dealer.

        ZORG
I'm glad you got your memory back, Father...
Because you're going to need it...
Where are the stones?

        CORNELIUS
...Why on earth do the stones interest you?

        ZORG
Personally, they are of no interest to me,
I'd rather sell weapons..but I have a customer...
so tell me...

        CORNELIUS
Even it I did know where the stones were
I would never tell somebody like you.

        ZORG
Why?  What's wrong with me?

        CORNELIUS
...I'm a priest! I'm here to serve life,
All you want to do is destroy it.

        ZORG
Ah, Father... You are so wrong.
Let me explain...

Zorg leads Cornelius into his inner office.

        ZORG
...would you like a drink?

        CORNELIUS
No thank you.

        ZORG
Follow me.. Life, which you so nobly serve,
comes from destruction. Look at this empty
glass.

Zorg pushes the glass with his finger.

        ZORG
Here it is... peaceful... serene...
but if it is...

Zorg pushes the glass off the table.  It shatters on the floor.

        ZORG
Destroyed...

Small individual robots, both free-wheeling and integrated, come zipping
out to clean up the mess.

        ZORG
...Look at all these little things...
so busy all of a sudden.
Notice how each one is useful.
What a lovely ballet, so full of form
and color.  So full of..life!

        CORNELIUS
They are robots!

A SERVANT comes in pours water in another glass.  Zorg tosses a cherry
into it.

        ZORG
Yes but... by that simple gesture of destruction.
I gave work to at least fifty people today. The
engineers, the technicians, the mechanics. Fifty
people who will be able to feed their children so
they can grow up big and strong.  Children who
will have children of their own, adding to the great
cycle of life!

Cornelius sits in silence.

        ZORG
Father, by creating a little destruction,
I am, in fact, encouraging life!  So, in
reality, you and I are in the same business!

        CORNELIUS
Destroying a glass is one thing..killing people
with the weapons you produce is quite another.

        ZORG
Let me reassure you Father..I will never kill
more people in my entire life than religion has
killed in the last 2000 years.

Zorg smiles, holds up the glass and takes a drink.
Unfortunately, he chokes on the cherry.  Unable to breathe, Zorg starts
to panic.

        CORNELIUS
    (mocking)
Where's the robot to pat your back?

Zorg falls, writhing, on his desk, inadvertently hitting buttons which
trigger a slew of little mechanisms.  They pop out all over the desk.
True chaos reigns.  Even a cage appears, holding a Souliman Aktapan, a fat
multicolored beastie, PICASSO, who seems surprised to be out in daylight.  He
licks his half-dead master in thanks.  Cornelius gets up and walks around
the desk.  Zorg motions for help.

        CORNELIUS
Can I give you a hand?

Cornelius whacks him on the back.  The cherry comes flying out.  Zorg
regains control of himself. GUARDS come running in.

        ZORG
You saved my life... So, I'm going
to spare yours.
    (to the GUARDS)
Throw him out!

The GUARDS throw Cornelius out.

        CORNELIUS
You are a monster, Zorg!

        ZORG
    (complimented)
I know...

The GUARDS drag Cornelius out of the office.

        ZORG
...Torture whoever you want, the
president if you have to but I want
those Stones. You have an hour.

Right Arm salutes and hurries out of the office.

84	EXT.  MANHATTAN  STREET - OMIT

85	INT.  ZORG'S  OFFICE - OMIT

86	INT./EXT.  STREET / TAXI - OMIT

87	INT.  REFRIGERATION  ROOM - OMIT

88	INT.  ZORG'S  OFFICE - DAY - OMIT

89	INT.  HALLWAY - OMIT

90	INT.  REFRIGERATION  ROOM - OMIT

91	INT.  TAXI - OMIT

92	INT.  ROOM - DAY - OMIT

93	INT.  TAXI - OMIT

94	INT.  ROOM - DAY - OMIT

95	INT.  TAXI - OMIT

96	INT.  SHAFT - OMIT

97	INT.  GARAGE - OMIT

98	INT.  ZORG'S  OFFICE - OMIT

99	INT.  GARAGE - OMIT

100	INT.  LOCKER  ROOM  GARAGE - OMIT

101	INT.  GARAGE - OMIT

102	INT.  LOCKER  ROOM  GARAGE - OMIT

103	INT.  KORBEN'S  BUILDING - DAY - OMIT

104	INT.  KORBEN'S  APARTMENT - OMIT

105	EXT. / INT.  SPACE / SPACESHIP

...The dark planet. Three warships are positioned in front of it.
Communication satellites arrive from all over the place, drawn to it like
a magnet.

        CAPTAIN
    (observing)
It's gobbling up all the communication
satellites in the galaxy!

106	INT.  PRESIDENT'S  OFFICE

President Lindberg appears even more crushed by recent events.

        PRESIDENT
Why the hell is it eating up all those
satellites like that?

        HEAD SCIENTIST
    (desperate)
...We're working on it, Mr. President.
We're working on it.

        PRESIDENT
It should only choke on them.

MUNRO enters the office just as a cockroach crawls onto the desk.
There's a small antenna on its back.

107	INT.  SMALL  ROOM

Zorg's Right Arm wears earphones, monitoring the President's conversation
with the cockroach-spy.

108	INT.  PRESIDENT'S OFFICE / SMALL ROOM

        MUNRO
I managed to contact the Mondoshawan.
They deplore the incident, but accept our
apologies.

        PRESIDENT
    (relieved)
And the Stones?  Did you find them in the
wreckage?

        MUNRO
The-Stones weren't aboard the ship.

        PRESIDENT
    (surprised)
...What do you mean?

The President is all ears.

So is Zorg's Right Arm.

        MUNRO
The Mondoshawan never fully trusted the
human race..they felt we're too unpredictable..
so they gave up the Stones to somebody they
do trust. Her name is Plavalaguna. She's a Diva
and she's going to sing at the charity ball on
Fhloston Paradise in a few hours.  She has the
Stones with her.

The President breathes easier.

Zorg's Right Arm is delighted.

        PRESIDENT
    (taking off a shoe)
Excellent!

The President crushes the cockroach with his shoe.

Right Arm's earphones fly off his head. Good-bye eardrums.

109	INT.  PRESIDENT'S  OFFICE

        PRESIDENT
I want your best man on this!

        MUNRO
Don't worry, Sir. I have the perfect one.

110	INT.  KORBEN'S  APARTMENT - DAY

C.U. The most disgusting dessert ever made.  Korben looks at it shimmying
on a plate as the Thai serves it to him proudly.

        THAI
Stewed jellyfish cake.. my speciality..

Korben forces a weak, polite smile as the Thai looks on expectantly.  The
phone rings.

        KORBEN
Saved by the bell.

Korben rises to get his cigarettes, and answer the phone.

        KORBEN
...Hello?

        MOTHER (V.O.)
You're the nastiest dirtbag I know in
this stinking City!

        KORBEN
    (resigned)
Hi Ma...

        MOTHER (V.O.)
I've been playing twice a week for 20 years,
20 years I've been eating those shitty croquettes.

Korben goes to light his cigarette.  There are only two matches left in
the match box.
Korben strikes one and it fizzles.

        MOTHER (V.O.)
You wouldn't even eat one to help your
poor mother, and you win the big prize?
Know something? The whole thing makes
me sick!

The Thai starts to clean up.  Just as Korben goes to strike the second
match..

        MOTHER (V.O.)
Are you listening to me, you ingrate!

        KORBEN
    (resigned)
Yes ma..

Korben sighs and puts the match back in the box.

Korben enters his code on the keypad the Thai is holding.

        KORBEN
    (to the Thai)
Go on... This is gonna take a while!

The Thai casts oft.  Korben closes the window.

        KORBEN
Other than that... You all right?

        MOTHER (V.O.)
...And now you're making fun of me?
I'm warning you! If you don't take me
after all these years of sacrifice, I'll
never forgive you!!

The Thai flies off.  In the hall, the cat meows-for more food.

        KORBEN
    (to the cat)
I'm coming!. Ma, what're you talking
about?

        MOTHER (V.O.)
I get it! You want to make me beg,
is that it?

        KORBEN
All I want is an explanation! I just got
in, I lost my job. I smashed my cab.
I got mugged, but other than that
everything's peachy, Ma, thanks for asking!!
Now settle down and explain to me calmly..

A message drops in his tube.  The red light goes on.

        MOTHER (V.O.)
You just won a trip, you dolt!
Ten days in Fhloston Paradise for two!

        KORBEN
Ma. If I'd won, I'd know about it.
Someone would have notified me.

        MOTHER (V.O.)
They've been blaring out your name on
the radio for the last hour, blockhead!

He eyeballs the message still in the tube.  The doorbell rings.-

        KORBEN
Ma.. it's the door. I'll call you back.

Korben hangs up before his mother can say anything and heads for the
door.  Before he gets there it opens, General Munro enters followed by a
Captain and a Major.
MAJOR ICEBORG is a woman. All she needs to become a man is a mustache.
Munro opens a file.

        MUNRO
    (clipped)
Major Dallas, if our calculations are correct
you still have 57 hours owed to the Federal
Army on your enlistment which is more than
you will need for a mission of the utmost
importance.

        KORBEN
What mission?

        MUNRO
To save the world.

        KORBEN
Where have I heard this song before?

        MUNRO
You're to leave immediately for Fhloston
Paradise. Retrieve four Stones from the
Diva Plavalaguna. And bring them back with
the utmost discretion as possible.
Any questions'?

        KORBEN
    (a little bewildered)
Just one... why me?

        MUNRO
Three reasons... One: As part of The Elite
Special Forces Unit of the Federated Army
you are an expert in the use of all weapons
and spacecraft needed for this mission.

Munro pulls out a long list of documents.

        MUNRO
Two: Of all the members of your unit
you were the most highly decorated.

        KORBEN
And the third one?

        MUNRO
You're the only one left alive...

Munro removes the message Korben hasn't bothered to look at.

        MUNRO
Don't you open your messages?

        KORBEN
I've had enough good news for today

        MUNRO
    (by rote)
You have won the annual Gemini contest
and a trip to Fhloston Paradise. For two.
Congratulations.
Here are your tickets.

He hands Korben the tickets.  Korben gets it.

        KORBEN
You rigged the contest?

Munro nods.

        MUNRO
Major Iceborg will accompany you...
as your wife...

The idea of taking a trip with Iceborg makes him sick.

        KORBEN
    (sarcastic)
You couldn't come up with something
a little more discreet?

        MUNRO
Old tricks are the best tricks eh?

        KORBEN
I'm not going.

        MUNRO
Why not?

        KORBEN
One reason... I want to stay the only
one left alive.

110A	INT.  KORBEN'S  HALL

Leeloo and Cornelius search for Korben's apartment. Leeloo carries the
card Korben gave her.  Cornelius finds the apartment, and yanks the.
number off the door.  He waves Leeloo over as his hand goes to the bell.

110B	INT.  KORBEN'S  APARTMENT

The doorbell rings.

        KORBEN
...Scuse me.

Korben goes to the door and looks out the peephole: the beautiful Leeloo.
Korben panics, overcome with happiness.

        KORBEN
...Shit!

        MUNRO
    (worried)
What is it?

Korben has two seconds to make up something to get rid of Munro.

        KORBEN
It's my wife.

        MUNRO
I thought you were divorced.

        KORBEN
I mean my future.. my ex.. My future ex..
if she sees you here I'm finished.  She hates
you guys. It's what killed us in the first place.
Please...

He puts them in the fridge, shoving the jellyfish cake in Iceborg's
hands.

        KORBEN
...Sorry, General, but we've got no choice!
It'll only take a minute! Let me set up
another meeting and I'll be back.

        MUNRO
Three of us will never fit in there!

        KORBEN
    (pushing him)
Oh, yes you will...

Korben slams the fridge door.  The doorbell RINGS again.

        KORBEN
...Coming!

He whips through his place in ten seconds, gathers up things laying
about,
shuts drawers, rolls up his laundry in the folding bed. He brushes his
hair back
and opens the door with a big smile only to discover a gun stuck between
his
eyes held by Cornelius.

        LEELOO
Apipoulai!

        KORBEN
I suppose that means "Hi" ?

        CORNELIUS
I'm sorry to have to resort to such
methods, but we heard about your
good luck on he radio and we need
the tickets to Fhloston.

        KORBEN
Is that the usual way priests go on
vacation?

        CORNELIUS
We're not going on vacation..we're
on a mission..

        KORBEN
What kind of mission?

        CORNELIUS
    (sincere)
We have to save the world.

        KORBEN
    (skeptical)
Good luck..

        CORNELIUS
Of course.

        KORBEN
Father, I was in the Army for awhile
and every time they told us we were
on a mission to save the world the
only thing that changed was I lost a
lot of friends. So thanks for the offer..
but no thanks.

Cornelius is disappointed.  Leeloo looks crestfallen.

        KORBEN
I'm sorry..

        VOICE
This is a police control action..

Everyone freezes as the whole building resounds with the electronic
voice.

111	INT.  LANDING  KORBEN'S  BUILDING

A group of POLICEMEN bursts into the hallway.  One of the cops enters a
code on the police wall box.  A device descends from the ceiling, a
flashing light-siren,
a VOICE fills the air.

        VOICE
This is not an exercise.
This is a police control.

Cornelius starts to panic.  Korben takes charge.

        CORNELIUS
Oh my god oh my god..

Korben pushes a button sending the fridge to the next floor.  A shower
takes it's place.

        KORBEN
Leeloo, hide in here and don't move!

Leeloo hops in.  Korben tosses Cornelius on the bed.

        CORNELIUS
What are you doing?

        KORBEN
Trying to save your ass so you can
save the world.

..and hits a button on the wall.  The bed disappears into the wall.

Korben grabs his tickets and slides them in his belt.

112	INT.  LANDING  KORBEN'S  BUILDING - DAY

Meanwhile, the automatic police voice continues.

        VOICE
...Spread your legs and place your
hands in the yellow circles, please.

A COP slaps a viewer device on Korben's door which makes part of it
transparent.

        COP 1
Put your hands in the yellow circles,
please.

Korben takes his time hiding his face. The Cop looks at his sheet. He's
looking for
a... KORBEN DALLAS. He has his picture, but it is Korben with long hair
and beard.

        COP 1
    (to COP 2)
Sir? Are you a human?

        KORBEN
No, I'm a meat popsicle.

        COP 3
    (at the other end of the hall)
I found him!

C.U. Korben's calling card is clumsily stuck to the door of the
neighbor's apartment.  COP 3 slaps the viewer on the nasty neighbor's door.
The neighbor is at his sink shaving instead of against the wall, COP 1
arrives with Korben's picture.

        COP 1
Sir, this is a control.  Please put your
hands in the yellow circles.

The neighbor steps right up to the viewer, shaving cream on his face.  He
could pass for Korben.

        NEIGHBOR
Fuck you!!

113	INT.  KORBEN'S  APARTMENT

Korben still has his hands to the wall.

        KORBEN
Wrong answer.

SHOT O.S. EXPLOSION.  Scuffle.

114	INT.  HALL

The riot police hustle down the hall dragging the neighbor behind them in
a canvas bag.  A cop is on the wall phone.

        COP
OK, we got the guy under wraps.

115	INT.  ZORG'S  OFFICE

Right Arm is on the phone, facing Zorg.

        COP (O.S.)
It was not easy, but we bagged him!.
Thanks for the tip!

        RIGHT ARM
    (smiling)
Glad to help.

He hangs up.

        RIGHT ARM
They just arrested the guy for Uranium
smuggling. Everything's going as planned.

He shows him a plane ticket, and a passport with his picture and Korben's
name.

        RIGHT ARM
All I have to do now is to go to the
airport and take his place.  I should be
in Fhloston in less than four hours.

Zorg sits there quietly for a moment.

        ZORG
Don't come back without the Stones.

116	INT.  KORBEN'S  APARTMENT

Korben opens the shower door.  Leeloo is soaking wet, her teeth
chattering from the cold.

        KORBEN
I'm really sorry.. there wasn't time.

His eyes fall on an old blanket.

        KORBEN
Here let me wrap you up.

Korben wraps her in an blanket and vigoroualy rubs her back.  Leeloo
warms gradually and snuggles closer to that warm comfortable shoulder.
Korben's rubbing slows, looking more like caresses.

        KORBEN
..It's funny.  I've met you twice today  and
you've ended up in my arms both times.

Leeloo suddenly realizes that she has maybe gone a bit too far.
She recovers, looking embarrassed too.

        LEELOO
    (nicely)
Valo massa... Chacha hamas.

        KORBEN
Uh..you're welcome.

The intimacy makes him nervous.  He looks for a diversion.

        KORBEN
Coffee!  That's what you need!
A nice, hot cup of coffee!

He pushes a button on the coffee machine.

        KORBEN
With some honey!  You'll see, honey's
great!...

Korben rummages through the drawer.  Leeloo, innocent, doesn't seem to
quite understand everything that is going on.

        KORBEN
A hot cup of coffee... with honey...

He rummages through the cupboard, exceedingly nervous.  Leeloo smiles and
begins to look around.  She opens a drawer and comes upon..

        KORBEN
    (nervously)
I've got this great honey somewhere.
You know about honey?  There used to be
these little animals who made it with antenna...

..pictures of Major Korben Dallas War Hero.

        KORBEN
..and these other animals who ate it..
one were bees the other were bears..

She looks back to the man fumbling for honey.

        KORBEN
I forget which ate it and which made it
but..

And she smiles.

        KORBEN
Here it is!

Korben holds up the jar of honey.

        KORBEN
Taste this...

Leeloo innocently sticks his finger in the jar then puts it in her mouth.

        KORBEN
It... melts in your mouth, doesn't it?

She savors the honey, slowly; sensually.  Her lips shine with honey.  Her
eyes narrow with pleasure.  Korben is hypnotized by her lips, like a moth
attracted to a flame.  He begins to lose control, which makes him nervous.

An indistinct sound comes from the wall.  But Korben is so entranced with
the sight of Leeloo licking her honied fingers, he doesn't hear it until
it becomes quite a racket.

        KORBEN
You hear that?

        LEELOO
    (licking)
Cornelius..

        KORBEN
Oh god!

Korben pushes the button on the wall.  The bed pops out, fully made, with
Cornelius tucked in it, struggling to get out.

        KORBEN
I'm really sorry.. let me help you..

Korben begins to pull at the covers when..

        LEELOO
Achta ge lumitai de matala..

Korben turns..

        KORBEN
What?

He turns to Leeloo struggling out of her wet clothes. His breath is taken
away by the sight of her perfect body.

Cornelius whacks him heavily on the head with a lamp.  Korben drops to
the floor.

        LEELOO
    (displeased)
Vano da, mechteba?!
Soun domo kala chon hammas!

        CORNELIUS
No, I'm not proud of myself...
But we don't have the luxury of choice.

117	INT.  ENTRANCE  KORBEN'S  BUILDING - DAY

The POLICE exit the elevator and head for the front door.  A cop suddenly
takes a hit from a silencer, then a second. Others are bashed on the head
by MANGALORE warriors.  One of them picks up the prisoner bag, takes it
into a small shed.

118	INT.  SHED

Aknot, the Mangalore leader, is seriously wounded and can't walk.

        AKANIT
Korben Dallas!  We got him.

        AKNOT
Perfect... Take command, Akanit.
Go to Fhloston and get the Stones...
If Zorg really wants them... He'll have
to negotiate.  Revenge is at hand.

119	INT.  KORBEN'S APARTMENT  KORBEN'S  BUILDING - DAY

Korben gets unsteadily to his feet, some blood drips down his face. He
daubs at it.

        KORBEN
Jesus!... Some priest!

The phone rings, he manages to answer.

        KORBEN
Yeah?

        MOTHER (V.O)
Have you pulled yourself together?

        KORBEN
...Not yet.

He hangs up.

Korben opens the fridge door.  The three officers are frozen solid.
Korben grabs some ice, presses it to his forehead.

        KORBEN
I'll take the mission.

He closes the door.

120	INT. AIRPORT  HALL - DAY

Cornelius and Leeloo (still damp) arrive at the Manhattan Intergalactic
Airport.
A huge hall three quarters filled with trash piled up to the ceiling.

There are groups of extra-terrestrials on strike standing in trash
holding picket signs.  A SECURITY GUARD picks up a phone off the wall.

        SECURITY GUARD
Illegal gathering in Zone 4.

A hand taps Leeloo from behind.  She whips around catching David in the
face.

        CORNELIUS
Leeloo, be careful.

He turns to David who in holding his bloody nose.

        CORNELIUS
Did you get them?

David hands Cornelius two passports.

        CORNELIUS
Excellent... Leeloo Dallas.

He hands it to her.  The name makes her smile.

        CORNELIUS
And Korben David Dallas.

She frowns.

        LEELOO
Akta dedero ansila do mektet.

        CORNELIUS
I can't pretend to be your husband...
David's in great shape.

She looks at David holding his bloody nose.

        CORNELIUS
He'll protect you. Go on... See the Diva...
get the Stones... See you at the temple...
God be with you.

ANGLE ON: Korben comes rushing into the airport. Walking quickly, he
scopes the hall looking for Leeloo. A POLICE PATROL bearing down on the
STRIKERS jostles him. The cops open fire.  The strikers dive into the garbage
and disappear.

121	INT.  BOARDING  GATE

David nervously puts tickets and IDs on the check-in counter.
Leeloo tosses her suitcase on the conveyor belt.

        CHECK-IN ATTENDANT
Congratulations on winning the contest.

David gives her a bleak smile.  Leeloo rolls her eyes.

Back a ways, Korben has spotted Leeloo and... David.  He heads right for
them.  Leeloo's seen him. She is both delighted and panicked.  David's
seen nothing.  Korben presses one of his fingers like a gun to David's back.

        KORBEN
    (friendly)
Hey! I really thought I was going to
miss my flight!
    (to David)
Thanks, kid! You put the luggage on
the conveyor belt?

        DAVID
    (freaking)
Uh... yeah.

        KORBEN
    (smiling)
Great! Now beat it!

Paralyzed, David leaves.  Korben turns to the attendant.

        KORBEN
Excuse me.  I was so afraid I'd miss the
flight that I sent the kid here to pick up
my boarding card.

He looks at David's fake ID.

        KORBEN
...My cousin David...

Leeloo is unable to hold back a smile.

        CHECK-IN ATTENDANT
    (looking at Leeloo's ID)
Your wife?

Korben grabs the ID and reads it.

        KORBEN
Uh, yes... Newlyweds.
    (aside)
You know how it is... Love at first sight.
You meet, something goes tilt,. you get
married, you hardly know each other.
Right, darling?

Leeloo rips her boarding card out of the attendant's hand.

        LEELOO
    (sharply)
Dinoine chagantakat!

        KORBEN
Took the words right out of my mouth.
Go on... I'll be right with you.
    (to Check-in Attendant)
It's our honeymoon. We're going to use
the trip to get to know each other better.

He winks at the stewardess.

ANGLE ON:

The neighbor and a tawdry young girl cross the airport.  The couple in
almost knocked over by a police patrol holding a 500 pound PIG on a
stainless steel leash. The couple panics a moment, the realize the patrol
isn't for them. The pig heads for the pile where the strikers disappeared.

        COP
    (to pig)

Come on, snyffer, go root!

The pig piles into the garbage.  The Cop cuts it some slack.
Cornelius sits at a bar.

        CORNELIUS
    (to the bartender)
I feel so guilty sending her to do the dirty
work. I know she was made to be strong
but she's also so fragile... So human.
You know what I mean?

The bartender, a robot, nods his head as he pours Cornelius a drink.

ANGLE ON:

The nasty neighbor and his wife hand their tickets to the check-in
attendant.

        CHECK-IN ATTENDANT
    (surprised)
Dallas... Korben...

        NEIGHBOR
    (in a different voice)
Yes, that's me.

The check-in attendant triggers a transparent blue light that shines on
their faces, revealing two other faces:

Mangalores.

        CHECK-IN ATTENDANT
    (smiling)
Just a minute, please.

She hits a silent alarm, but the Mangalores feel something is wrong.

        NEIGHBOR
We'll be right back ... we're gonna
check out the duty free...

They spin around and hurry away.

ANGLE ON:

Cornelius at the bar, half in the bag.

        ROBOT
The same?

        CORNELIUS
Yeah...

        DAVID (V.O.)
Make that two...

Cornelius turns to David.

        CORNELIUS
Where's Leeloo?

        DAVID
On the plane... with Mr. Dallas...
the real one.

        CORNELIUS
It's all my fault.  I'm the servant...
It's my mission! Here!

He hands David the Temple Key from around his neck.

        CORNELIUS
Here's the key to the Temple..
Prepare for our arrival!

Cornelius tosses David's drink into his own, downs it all in one shot,
and takes off, passing the Mangalore couple headed for the exit.  They are
very nervous.
A police patrol is coming.  This time, it seems to be for them.

        NEIGHBOR
    (to the tawdry girl)
Tell Aknot plan A flopped.
Tell him to go to plan B.

The tawdry girl nods and peels off. The neighbor takes out a gun and
blasts away at the cops.  The cops fire back. A firefight rages in the
hall. The tawdry girl dives into a pile of garbage and disappears.

        COP
    (into walkie-talkie)
...Send in a back-up unit, Zone 7!

ANGLE ON:

On one side of the hall, a trap door opens. Three pigs come running out,
grabbed by their police handler.

Cornelius waits until everyone has left, gets down on all fours and
crawls through the trapdoor reserved for the pigs.

122	INT.  FIRST  CLASS  LOUNGE

Leeloo stands at the buffet in the first class lounge eating everything
in sight.

123	INT.  HALL

Korben is led down the hall by a STEWARDESS.

        STEWARDESS
You are so lucky... Loc Rhod is the
coolest DJ in the universe.

        KORBEN
Listen... I don't want to be interviewed.
I'd prefer to remain anonymous.

The stewardess stops in the corridor.

        STEWARDESS
Forget anonymous.  You'll be doing Loc
Rhod's live show every day from 5 to 7!

        KORBEN
    (expression changes)
You gotta be kidding!

The stewardess smiles and shakes her head.  The door next to him suddenly
swings open and smashes him in the face.

In walks LOC RHOD amidst a tornado of music and security guards.  He is
young, good-looking, eccentric, charming as an elf or sly as a fox.  A
bundle of energy.  He is the 24th century's most popular DJ.

        LOC RHOD
    (speedy, in rhythm)
Korben Dallas! Here he is The most hated
man in the universe. The one and only winner
of the Gemini Croquette contest! Ladies, start
melting 'cause the boy's hot! Hot! Hot! The boy
is perfect..
    (he feels his muscles)
...The right size, right build, right hair.  Right on!
Say something-to those 50 billion pair of ears out
there D-man!

An ASSISTANT hands a totally lost Korben a mike.

        KORBEN
    (hesitant)
...Hi.

        LOC RHOD
Does it get any better or what!

Loc Rhod grabs Korben's arm and leads him down the hallway, as fast as
the music.

        LOC RHOD
...Quiver ladies, he's gonna set the world on
fire right here from 5 to 7! You'll know
everything there is to know about the D-man.
His dreams, his desires, his most intimate of
intimates.  And from what I'm looking at
intimate is the stud muffin's middle name.
So tell me my main man... you nervous in the
service?

        KORBEN
Uh... not really.

Loc Rhod lets go of Korben's arm and grabs the Stewardess.

        LOC RHOD
Freeze those knees, my chickadees, 'cause
Korben is on the case with a major face...

Loc Rhod rubs up against the stewardess.

        LOC RHOD
...Start drooling, ladies! My man here is a
sharp-tongued Sire who's gonna stroke your
every desire.

They come to an intersection.  The airline company has prepared drinks
for them.  Loc Rhod pushes on, grabs a glass of champagne, scribbles his
autograph.

        LOC RHOD
Yesterday's unknown will be tomorrow's Prince
of Fhloston Paradise, the hotel of a thousand and
one follies, home of luxury and beauty.  A magic
fountain flowing with non-stop wine, women and
Bootchie Koochie Koo...

He tosses away his champagne glass.

        LOC RHOD
Beware out there puppy dogs my man is on
the prowl. Owwww!

Howling, Loc Rhod grabs another stewardess by the arm.

        LOC RHOD
...And start licking your stamps little girls,
this guy's gonna have you writing home to
Momma! Tomorrow from 5 to 7, I'll be your
voice, your tongue and I'll be hot on the tail
of the sexiest man of the year... D-man...
Your man... My man.

The stewardess shivers.  A BEEP is heard.

        VOCODER (O.S.)
End of transmission.

The MUSIC suddenly stops.  Several assistants come and compliment Loc
Rhod who sighs, lights up a cigarette, and drops his pretense.

        LOC RHOD
Korben sweetheart do me a favor I know this
is probably the biggest thing that ever happened
to you in your inconsequential life. But I've got
a show to do here and it's got to pop. So tomorrow,
when we're on air, give me a hand... Try to make
believe you have more than a one word vocabulary.
OK pal?

That does it.  Korben grabs him by the collar and drags him into a
corner.
Loc Rhod's feet don't touch the ground.

        KORBEN
    (pissed)
I didn't come here to play Dumbo on the radio.
So tomorrow between 5 and 7 give yourself a
hand, that clear pal?

        LOC RHOD
    (petrified)
Crystal.

124	INT.  AIRPORT

The Check-in attendant has two more tickets in her hand.

        CHECK-IN ATTENDANT
    (alter a moment, reading)
...Mr. Dallas... Korben Dallas?

Zorg's Right Arm gives her a big smile.

        RIGHT ARM
That's right.

The attendant scans the ID with a yellow beam, it checks out, and the
blue light reveals no other face but his.

        CHECK-IN ATTENDANT
The problem is I only have one Korben Dallas on
my list... and he's already checked in.

Right Arm's smile shatters.

        RIGHT ARM
That's impossible!  He's in j... I mean, there
must be some mistake. I have my ticket!
I'm the real Korben Dallas!

A shrill BELL rings out.

        CHECK-IN ATTENDANT
    (smiling)
I'm sorry, sir, boarding is finished.

The attendant hits a button.  A thick window slowly slides up between
them.
Right Arm totally loses it.

        RIGHT ARM
I want to see your boss!  Get rid of this
fucking window! Somebody's made a
mistake, goddamnit!

He pounds on the counter with both fists. A steel curtain comes down.
Red sighting beams target spots on his body, ten gun barrels protrude from
the wall, all aimed at him.

        VOICE (O.S.)
This is not an exercise.  This is a police
control.
Put your hands in the nearest yellow circles...

        RIGHT ARM
    (slowing down)
Sorry, my fault... Just a little overexcited...
that's all... I'm calm now.

125	INT.  SHUTTLE - DAY

Korben makes his way in the plane  looking for his seat. No more seats in
modern planes, just individual travel boxes lined up like microwaves.  He
passes STEWARD holding his bloodied nose. He has found what he is looking
for. He enters to.... Leeloo quietly stretched out in front of a computer
screen.  Korben slips in beside her.  Leeloo in concentrating on the words
that scroll rapidly  past her on the screen.  He doesn't understand what she
is doing.

        LEELOO
Apipoulai!

        KORBEN
Not hard to find you...just follow the
Chaos...

Leeloo smiles, as if complimented.

        KORBEN
Leeloo, listen to me... these tickets...
they're not mine... I mean they are, but
not for vacation like everyone thinks...
I'm on an operation... and if I didn't come
get you, you'd be in a shitload of trouble...
I'd love to be on vacation with you...
but now.... now I've got to work...
And Leeloo... I would love to work in peace.

Leeloo types in "LOVE" on the keyboard.

        LEELOO
Love...

        KORBEN
Yes! But "love" isn't the operative word
here, PEACE is!

Leeloo types in this new word.

        LEELOO
    (rather pleased)
Peace... and love...

She brings up a picture of a 60's style Hippie flashing a peace sign.
Korben sighs and switches off the screen.

        KORBEN
Sometimes you can't learn everything
from a screen..sometimes it's better to
ask someone who has experience..

        LEELOO
    (quite happy)
What is... Make Love?

Korben just stares at her for a few minutes.

        KORBEN
Know what? On that subject maybe you'd
be better off asking the screen.

He turns the computer back on.

ANGLE ON:

A STEWARDESS walks up the aisle of the shuttle pushing the red buttons on
top of each individual box.

        VOICE (O.S.)
...to make your flight as short and agreeable
as possible, our flight attendants are switching
on the timing sleeper which will regulate your
sleep during the trip...

ANGLE ON:

        LEELOO
    (switching off the screen)
OK! Finished!

        KORBEN
Finished what?

        LEELOO
Learning language.

        KORBEN
Which one?

        LEELOO
All 900.

Korben doesn't know if he should laugh or not.

        KORBEN
You learned 900 languages in five
minutes?!

        LEELOO
    (pleased)
Yes! Now it's your turn! I learned your
language, you have to learn mine!

        KORBEN
I know how to say "Hello". Teach me how
to say "Good-bye", that's all I need.

        LEELOO
Apipoussan!

        KORBEN
Apipoussan?

        LEELOO
Good! Do you know how we say "make love"?

        KORBEN
    (fumbling)
Uh...

        LEELOO
...Hoppi-hoppa.

Korben literally melts.

        KORBEN
    (to himself)
Help...

Luckily, a stewardess smiles at him through the box window.

        STEWARDESS
Sweet dreams, Mr. Dallas!

The stewardess sets the timing sleeper.  Korben and Leeloo immediately
fall asleep.

A STEWARDESS at the other end of the shuttle has a problem.

        STEWARDESS 2
Mr. Loc Rhod you have to assume
your individual position.

        LOC RHOD
    (hugging her)
I don't want an individual position,
I want all positions!

        STEWARDESS 2
    (resisting somewhat)
We're going to take off soon, Mr. Rhod!

        LOC RHOD
Now you're talking!

126	INT.  COCKPIT  FHLOSTON  SPACE  SHUTTLE

Three CREW MEMBERS prepare for liftoff.

        COPILOT
    (on the radio)
Molecular axis authorization. Vector 130.
Destination Fhloston.

Stewardess 1 enters the cockpit.

        STEWARDESS 1
Zone 1. 217 locked. The sleep regulator is OK.

        PILOT
    (checking her out)
Thanks, Miss.

The Stewardess leaves with a smile.  A red light flashes on the vast
control panel.

        MECHANIC
Tell the ground crew we've got parasites
in the landing gear.

127	INT.  AIRPORT  LANDING  STRIP - DAY

A GROUND CREW MEMBER goes over to the truck parked under one of the
plane's wings and bangs on the side of it with a shout.

        GROUND CREW MEMBER
Disinfecting!

Two DISINFECTORS in hermetically sealed suits exit the truck.  They go
over to the front landing gear and send up a whooshing beam.  The flame
burns everything it touches.  A pack of repugnant creatures falls squealing
from the landing gear.  A small trapdoor is opened under the shuttle and a
huge slightly phosphorescent tube falls out.

128	INT.  AIRPORT  HALL / ZORG'S  OFFICE

Zorg's Right Arm is in a phone booth in the middle of the hall.

        RIGHT ARM
Yeah, it's me... Put Zorg on.

He is already sweating.

        ZORG
    (cold)
I'm listening.

        RIGHT ARM
The real Korben Dallas is on the plane!
He took my place.

        ZORG
This is a joke, right?

129	INT.  SHUTTLE

Loc Rhod is wrapped around a stewardess like a snake.

        LOC RHOD
No!! I swear to God! I've never been this
sincere with a human before!

130 EXT.  LANDING  STRIP

TWO GROUND CREW MEMBERS stick an enormous, highly phosphorescant tube
into the opening.

        GROUND CREW MEMBER
You're fueled and ready to go.
Have a nice flight.

131	INT.  SHUTTLE

        PILOT
    (to copilot)
Everything ready for liftoff?

132	INT.  CABIN

        STEWARDESS
    (weakly, to Loc Rhod)
No, no... I'm not ready! I'd like to talk first...

133	INT.  ZORG'S  OFFICE / AIRPORT  HALL

        ZORG
I cannot hear you. We have a bad
connection here.  What's your number?

Right Arm reads off the phone number.

        RIGHT ARM
278-500-645-321

        ZORG
I'll call you back.

134  EXT.  LANDING  STRIP

The runway is now empty. A man slips out of the shadows. It's Cornelius.
He scurries over to the front landing gear. He pauses for an instant, the
climbs up the wheel well and disappears inside the shuttle.

135	INT.  SHUTTLE

The pilots are going through the pre-flight check list.

        COPILOT
Anti static pressure?

        MECHANIC
Primed.

The mechanic presses a series of buttons.

136	INT.  CABIN

Loc Rhod undoes a series of buttons on the stewardess' blouse, behind a
curtain. He whispers a poem.  Impossible to resist him. Outside the
curtain the stewardess' legs rise slowly.

137	EXT.  LANDING  STRIP

On the ground, protective fire curtains rise slowly to contain the engine
exhaust on liftoff.

138	INT.  ZORG'S  OFFICE

A keyboard slowly appears in front of Zorg.

        ZORG
    (typing the number)
278... 500...

139	SERIES OF QUICK CUTS:

The pilot gradually turns the engines up.

        COPILOT
10 seconds...

        PILOT
Power increase.

- The stewardess undergoes a power surge from Loc Rhod that's about to
lift her of.

- Zorg finishes gleefully typing in the number.

        ZORG
3... 2... 1...

- The engines at full blast.

- The stewardess in close to screaming.

        PILOT
Liftoff.

- The copilot pushes a button.

- So does Zorg.

- The engines release their full power.

- The stewardess screams in ecstasy.

- In the hall, Right Arm literally explodes along with the phone and
everything else   within 60 feet.

140	INT.  FHLOSTON  SPACE  SHUTTLE

The stewardess' legs slowly descend and disappear behind the curtain.

141	INT.  COCKPIT

In the cockpit, the atmosphere loosens up.

        COPILOT
    (relaxing)
Landing gear secure.  Let's light one up.

142	INT.  CABIN

Korben and Leeloo sleep soundly in their box.  Leeloo has a smile on her
face and her hand in Korben's.

143	EXT.  OUTERSPACE - NIGHT

The spaceship rockets past us, then suddenly vanishes with amazing speed.
Space is now empty and calm.  Billions of stars glow in perfect silence.


144	EXT.  SPACE

The nefarious planet in still there, immobile, even larger now, writhing
like a serpent.  Then, suddenly, for no apparent reason, all activity stops
and it becomes gray and cold.

145	INT.  SPACESHIP

In the Admiral's starship, scientists watch the measuring device.  One of
the devices suddenly starts working.

        TECHNICIAN
All right! We're finally getting something!

146	INT.  PRESIDENT'S  OFFICE

The Head Scientist stands facing the President, who is looking more tired
than ever.

        HEAD SCIENTIST
The thing is sending out radio wavelengths!

        PRESIDENT
What the hell does it want with radio waves?

        HEAD SCIENTIST
...Probably wants to make a call!

The President and his Generals look at him in astonishment.

147	INT.  ZORG'S OFFICE

Picasso purrs contentedly on Zorg's lap.  The phone rings.

        SECRETARY (O.S.)
Mr. Shadow on the line.

Zorg shoots to his feet.  Picasso tumbles to the floor.  Zorg picks up
the phone, both excited and uneasy. He stands there, almost coming to
attention.

        ZORG
Yes... Zorg here.

The voice is feeble.  It comes from the far reaches of time, from the
bowels of the universe.

        SHADOW
Am I disturbing you?

        ZORG
No... not at all.  Where are you?

SHADOW'S breathing is awesome.

        SHADOW
...Not far, now.

        ZORG
Really? Maybe I can get you on my screen
and see you at last!

Zorg brings up a huge screen and pushes a few buttons.

In the middle of an electronic snowstorm, a blackish, vaguely human,
quiverinq form appears. Two eyes, like lava, give an idea where the head is.
Zorg feels sick.

        SHADOW
Do you have the picture now Mr. Zorg?

        ZORG
Got it.

        SHADOW
How's our deal coming along?

        ZORG
    (ill at ease)
Fine, just fine!  I'll have the 4 pieces you
asked for any time now.  But it wasn't easy.
My costs have tripled.

Shadow pauses an instant.  A black slimy liquid starts to ooze from the
top of the screen.  Zorg is feeling worse all the time.

        SHADOW
Money is of no importance...
I want the Stones!

The black liquid oozes all over the screen which starts to melt.  Zorg
sweats profusely,  his legs tremble.

        ZORG
The Stones will be here. I'll see to it
personally!

        SHADOW
...I can't wait to be among you.

Zorg sighs and sits down totally freaked.

148	EXT. ORBIT  FHLOSTON  PARADISE

The space shuttle fills the screen.  It banks left and begins its descent
toward Fhloston, the turquoise planet.  Crystal blue water, perfect white sand
beaches.  A true paradise.

149	INT.  SPACE SHUTTLE

The stewardess picks up a microphone to make an announcement.

        STEWARDESS
Ladies and gentlemen, we have begun our
descent toward Fhloston Paradise...

Stewardesses walk down the aisles waking the passengers one by one. They
press a button on the door of each box.

In the corner, Loc Rhod and the stewardess awake with a start and
straighten their clothes quickly.  The stewardess is embarrassed.

        STEWARDESS
    (timidly)
I wanted to tell you that...

Loc Rhod puts on his sunglasses and presses a finger to her lips.  He
disappears behind the curtain leaving the sighing stewardess on her own.

150	EXT.  FHLOSTON  PARADISE

The spaceship descends through some clouds and glides over a vast
turquoise sea.  Fhloston Paradise looms into view.  An enormous oceanliner
floating a dozen yards above the water.  On closer inspection it is more
modern than a traditional oceanliner.  The shuttle draws near, looking
ridiculously small next to the monster.  Like a sardine next to a whale.

151	INT.  COCKPIT

A blinking light goes on.

        PILOT
Shit! Parasites in Zone 1. Take a look.

The 1st Mate heads off.

152	INT.  CABIN

A stewardess opens Korben's box door.  He is still heavy with sleep. He
looks over at Leeloo.  She's not there.

153	EXT.  FHLOSTON

The tiny space shuttle clings to the huge oceanliner.

154	INT.  COCKPIT

The Pilot maneuvers the ship into it's docking area.

        PILOT
Docking activated.
You can let the passengers out.

155	INT.  REAR  OF  COCKPIT

The 1st mate pries open the door to an overhead panel.  Cornelius falls
out, hanging in a jumble of wires.

156.	INT.  ENTRANCE  HALL  FHLOSTON PARADISE - DAY

The enormous door opens and the passengers exit.  Leeloo is among them.
She appears quite impressed by the beauty and luxury of the 19th century
decoration.

157	INT.  CABIN

Korben attempts to make his way up the shuttle's aisle.

        KORBEN
    (jostling everybody)
Pardon me.  Excuse me. I'm trying to
reach my wife.. Sorry!

158	INT.  ENTRANCE  HALL

A dozen policemen wait patiently at the end of the hall.  Leeloo stops
and presses against the wall.  She spots Korben leaving the shuttle.  A
gorgeous HOSTESS comes up to him, drapes a lei around his neck and plants a
kiss on his lips in welcome.

        HOSTESS
    (smiling)
Welcome to Paradise.

Korben's face is covered in lipstick.  Leeloo sees he did nothing to stop
the girl and she doesn't like it.

A HEFTY MAN wearing a sarong drapes some flowers around her neck.  Then,
obviously relishing it, he leans down to kiss her.  Leeloo bashes him on
the forehead.  The hefty man straightens up.  He's still smiling, but his
nose is bleeding. He falls slowly to the floor.

Korben pushes forward trying to spot Leeloo.  He also tries to wipe the
lipstick off.  Leeloo tries to escape through a door marked PERSONNEL ONLY,
but it's locked.  A HOST looks at her with a grin.

        HOST
    (playful)
If you don't have the code you can't
open it!

Leeloo smiles and punches in an old code and twists the doorknob.  The
door opens with the sound of a braking lock.  Leeloo smiles sweetly and enters
as if nothing were amiss.

A shriek of joy fills the room.  Korben turns around.  The HOSTESSES
cluster around Loc Rhod as he comes out of the plane.  Loc Rhod spots Korben
and latches onto his arm.  It's not going to be easy to remain discrete.

        LOC RHOD
    (relieved)
My main man! Please don't leave me here
alone. My head's killing me and my adoring
fans are gonna tear me apart! Get me outta
here!

        KORBEN
I'll take you to the bar, after that,
you're on your own.

        LOC RHOD
    (hanging on to Korben)
Oh, yes! Do that! You treat me right,
man. Tell me all about yourself, your
roots, your personal life, your childhood
dreams...

        KORBEN
I don't think this is a good time...

        LOC RHOD
...You got brothers and sisters? What
about your dad? Tell me about your
dad! What was he like? Physically?
Big, I suppose?

        KORBEN
    (evasive)
Yeah, very big, a giant.

        LOC RHOD
I didn't have a dad... never saw him...
never even heard him. 50 billion people
listen to me every day... and he doesn't
hear me...

159	INT.  SMALL  ROOM  FHLOSTON PARADISE - DAY

Leeloo is in a small room, ear at the door, listening. Everything seems
normal. She turns and discovers the room for what it is:	a rest room
for... three cops who look up from their books and stare blankly at her.
Leeloo doesn't know what to do. So she smiles.

160	INT.  HALL - OMIT

161	INT.  MAIN HALL  FHLOSTON  PARADISE - OMIT

162	EXT.  ORBIT  FHLOSTON  PARADISE - DUSK - OMIT

163	INT.  THE CONTROL ROOM  FHLOSTON  PARADISE - DUSK - OMIT

164	INT.  KORBEN'S  STATEROOM

The door opens.  The HOSTESS turns on the light and enters.  Korben
follows her, gaping at all the luxury.

The BAGGAGE BOY enters bringing Leeloo's two suitcases.

Korben grabs the notice announcing Diva Plavalaguna's concert at 5:30 in
that evening.  Dress: Formal attire.

        KORBEN
For the concert it says formal attire...
I didn't bring...

The hostess pulls back the closet door.  Twenty tuxedos in a row.

        HOSTESS
    (looking him over)
Here's some champagne. I'll drop by after
the concert to open it.

She gives him a blinding smile and closes the door.

Korben pushes a button.  The curtains open to reveal a most spectacular
view of the turquoise planet.  Stars shoot out into infinity.
Breathtaking.  Korben stands gaping.  The phone rings, snapping him out of
his reverie.

        KORBEN
Hello?

        MOTHER (O.S.)
You little sleaze bag!

        KORBEN
...Ma???

        MOTHER (O.S.)
Don't you ever ask me for another thing
in my life again, you've killed your
poor mother with your own hands!

Korben drops into an armchair and sighs. His eyes go to the ceiling.

        KORBEN
...Ma!!!

165	INT.  CONTROL ROOM  FHLOSTON PARADISE - OMIT

166	INT.  FHLOSTON PARADISE  POLICE OFFICE - DAY

The Chief of Police has Cornelius in front of him, handcuffed.

        FOG
The Diva's ship is coming in.

        CHIEF OF POLICE
I want maximum security.

        FOG
Yes. Sir!

        CHIEF OF POLICE
    (to Cornelius)
OK, let's hear it.

        CORNELIUS
Where was I?

        CHIEF OF POLICE
    (bored)
...You open the door. There's a cabby with
a girl in his arms.

FOG opens the door.  Two COPS come hobbling in all bloody and bandaged.
They hold up a THIRD COP.

        CHIEF OF POLICE
What happened?
A bomb go off in your face?

        BEAT-UP COP
Yeah... A 5 foot 7 inch bomb...
with green eyes.

Cornelius perks up.

        CORNELIUS
And the smile of an angel?

They all turn to look at him.

        CORNELIUS
    (to Chief)
May I speak to you alone.

167	INT.  CORRIDOR  FHLOSTON PARADISE - DAY

Leeloo watches the Diva's arrival.  A door opens and two POLICEMAN clear
the way for DIVA PLAVALAGUNA, her MANAGER, her BODYGUARDS and a gaggle of
PORTERS carrying trunks.

Not wanting to draw attention to herself, Leeloo feigns interest in a
painting that is obviously upside down. A white chiffon veil covers the face
of the Diva, she stops in front of Leeloo.  The Diva reaches out and
strokes Leeloo's face, without touching her. The Diva removes her hand
making a sound of crackling electricity, then passes on.  Leeloo is groggy.
The Diva's ASSISTANT comes up to her.

        DIVA'S ASSISTANT
Please forgive this little incident. She wants
you to know that she senses great powers in
you... in the service of a noble cause... She
will give you what you have come to get, but
she wants to sing first...
One last time...

The Diva's assistant turns the painting right side up.

        DIVA'S ASSISTANT
    (nodding)
Miss.

Leeloo looks at the painting, seems to understand it better.

168	EXT.  DIVA'S  SUITE

Policemen stand at attention in front of the Diva's suite.

        FOG
Hello, I'm head of security.
Everything is in order. You can...

The Diva enters her suite without letting him finish.

        FOG
...make yourselves at home safely.
If you need anything...give it a knock!

169	INT.  POLICE  OFFICE  HALLWAY - NIGHT

A door opens near the police officer's main entrance. Cornelius looks
both ways. Then crosses the hall, dragging the Chief of Police by the feet.

170	INT.  KORBEN'S  STATEROOM

Korben finishes putting on his tux, still on the phone.

        KORBEN
Listen, Ma! I've only got a few days
vacation and I'll be damned if I'm
gonna spend them on the phone.

The door RINGS.

        KORBEN
...Hang on, it's the door. No!
I told you I didn't bring anybody!
I'm all alone... as usual!

Korben opens the door.  It's not the champagne.  Even better. It's
Leeloo.

        KORBEN
    (to his mother)
...I'll call you back.

Leeloo heads right for her suitcase and starts to undress.  Korben has to
turn away once more.

        KORBEN
Here we go again...

        LEELOO
    (by rote)
You know women normally change five
times more than men.

        KORBEN
You get that off the screen?

        LEELOO
Yes... you know there's a lot of
differences between men women.

        KORBEN
You noticed..

        LEELOO
OK, you can turn around!

Korben turns around.  Leeloo has put on a very simple dress which is sexy
to the max.  He is smitten.  So much so that Leeloo wonders if something
isn't quite right.

        KORBEN
Where you going?

        LEELOO
I'm going to see the Diva sing. What's
the matter?... Do I look bad?

        KORBEN
No, not at all!  I mean, just the opposite,
you're... you're beautiful!

Leeloo smiles at him, his compliment pleases her.  She turns, revealing
her unzippered back.  Korben cannot help but stare at her bare flesh.  Her
perfect bottom.

        LEELOO
Do you know how this works?

Korben's blood boils.  She wriggles, pressing her hands together close to
the zipper.

        KORBEN
I have an idea.

But instead of pulling on the zipper he slips a bracelet on her wrist.  A
flourescent beam bursts out of the bracelet and forms a vertical bar going
from the floor to the ceiling.
Stunned, Leeloo is held captive.

        KORBEN
I told you I need to work in peace.
Remember? I need to concentrate.

        LEELOO
And you can't concentrate with me
around?.

        KORBEN
It's difficult.

She tries to breakout.

        KORBEN
Army issue. I'm sorry.

Leeloo tries desperately to get out of the handcuffs. Impossible.

Korben sets the radio down in front of her and turns it on.
Leeloo looks like she'd like to break his head.

        LEELOO
    (seething)
You're nothing but a... a...

        KORBEN
The words you're looking for weren't
in the dictionary you studied. I won't
be long.

The door flies open.  Loc Rhod barges in.

        LOC RHOD
Hey Stud we gotta...

Then he sees the scene, Leeloo cuffed, in a low cut dress.  His mind goes
to the obvious.

        LOC RHOD
Korben my man what's happening here?
Who's the chick? What's the gig?
We free forming here? Getting funky
with the monkey? Can I get in on this?

Korben grabs him by the collar..

        KORBEN
No..to all of the above.

And yanks Loc Rhod out of the room.  Leaving Leeloo looking extremely
unhappy.

171	INT.  RADIO - OMIT

172	INT.  LOC RHOD'S  STATEROOM  FHLOSTON  PARADISE - NIGHT - OMIT

173	INT.  HALL - OMIT

174	INT.  BATHROOM - OMIT

175	INT.  DIVA'S  SUITE  FHLOSTON PARADISE - NIGHT - OMIT

176	INT.  FHLOSTON  PARADISE  OPERA - NIGHT

Loc Rhod and Korben enter what turns out to be a replica of the Garnier
Opera in Paris.  A hostess escorts them to their seats.

        LOC RHOD
    (broadcasting)
We have just walked into what is probably
the most beautiful concert hall in the universe.
Totally awesome! Magnificent paintings on the
ceiling. I don't know who painted them, but he
must have busted his balls! I see a row of former
ministers, more sinister than minister! A few generals
practicing how to sleep. And there's Baby Ray, star
of stage and screen, drowning in a sea of nymphets.
He's not gonna get much out of this concert, he's
stone-deaf!

ANGLE ON:

Baby Ray bending his ear to a girl asking for an autograph.

        BABY RAY
...to who?

        LOC RHOD
    (moving down the aisle)
...And over there is Roy Von Bacon, the king
of laserball and the best paid player in the League.
    (shakes hands as he goes by)
...And over there is the Emperor Kodar Japhet
whose daughter Aachen is still at the bar.
"I love to sing, too, but in the shower", she
recently confessed to me. She will no doubt
prove to be as generous tonight as she always is.

A waiter gives them two glasses of champagne.  Track with the WAITER an
he leaves the hall with his empty tray.  He enters a small room reserved for
staff.

177	INT.  STAFF  ROOM  FHLOSTON  PARADISE - NIGHT

The waiter joins some other WAITERS.  They are well armed.  He opens a
cupboard and pulls out a humongous weapon. Suddenly their faces burn off
revealing AKANIT, the young leader of the Mangalores, and his troops.

        AKANIT
It's showtime!

178	INT.  CONCERT  HALL

The lights dim slowly in the concert hall.

179	INT.  PRESIDENT'S  OFFICE

President Lindbergh and his staff, including Munro, sit at the desk.
Speakers appear.

180	INT.  KORBEN'S  SUITE

Leeloo, still a prisoner, listens to the concert.

181	INT.  CONCERT  HALL

Korben is tense.  The curtain rises.  The Diva, in a stunning gown,
stands in the center of the stage, head bowed.  Behind her, a star filled
window.  The MUSIC begins.  The Diva looks up, a rare beauty, but an alien.
And then she begins to sing.  Her voice is divine, unmatched.  Korben is
swept up in the TEARS.

182	INT.  KORBEN'S  SUITE

Leeloo has tears in her eyes

183	INT.  DIVA'S  SUITE

The manager couldn't care less about the concert.  His main problem is
the bottle of scotch he can't seem to open.  The doorbell RINGS.

        MANAGER
    (ugly mood)
Yeah!?

        VOICE (O.S.)
Flowers for the Diva.

        MANAGER
She's allergic to flowers!!!

        VOICE (O.S.)
There's champagne as well...

The manager takes one look at the stubborn bottle and opens the door. And
finds himself staring down the barrel of a gun. A dozen Mangalores rush
in. One of them, with a human face, closes the door and waits out in the hall.

ANGLE ON:

Cornelius watching from around the corner.

        CORNELIUS
...My God!

184	INT.  CONTROL  ROOM  FHLOSTON  PARADISE

        CAPTAIN
Commander, I have a ship with a main
malfunction. He requests permission to
dock for repairs.

        COMMANDER
Did you check out his registration number?

        CAPTAIN
Everything's in order.

        COMMANDER
Put him in the docking garage and inform
the police.

185	INT.  COCKPIT  ZFX200 - NIGHT

        CAPTAIN (V.O.)
Permission granted. Dock 575.  You have
an hour. Will that be enough time'?

Zorg sits at the controls.

        ZORG
    (cold)
More than enough.

186	EXT.  FHLOSTON  PARADISE - NIGHT

The ZFX approaches Fhloston.

187	INT.  KORBEN'S  SUITE

The ship comes close enough for Leeloo to see it out the window.

FLASHBACK:

The same ships with Mangalores at the controls attack the Mondoshawans at
the beginning of our story.

188	INT.  KORBEN'S  SUITE

Leeloo is alarmed.  She has to act.  She seizes the flourescent bar beam
with great effort and rams it into the ceiling, marking a hole large enough
for her to escape.

189	INT.  CLOSET  FHLOSTON  PARADISE

Cornelius bursts into the closet he left the Chief of Police tied and
gagged in.  He quickly unties him.

        CORNELIUS
    (in a panic)
Mangalores! The Diva's suite! They want
the Sacred Stones! They must be stopped.
We must stop them!. I'm going to free you
but you must promise to help me!

The Chief of Police nods his agreement.

190	INT.  DIVA'S  SUITE

The Mangalores have trashed the suite.  One of the Mangalores finally
finds a case engraved with the four elements.

        MANGALORE
I have it.

The Mangalore is about to open the case when... Leeloo descends quietly
and gracefully from the ceiling.  Time stands still.

        LEELOO
(smiling)
Apipoulai!

191	INT.  CONCERT  HALL

The Diva switches from classical music to funk, picking up the tempo.

INTERCUT':

192	INT.  DIVA'S  SUITE / CONCERT  HALL.

A WARRIOR whips out the biggest knife ever made and rushes Leeloo.  She
disarms him gracefully.  A violent fight breaks out.  The Diva sings and
Leeloo dances.  The Mangalores pay a heavy price for the show.

193	INT.  CORRIDOR

Hearing noise from inside the suite, the Mangalore by the door gets
nervous.  He runs for reinforcements.

194	INT.  POLICE  STATION

Cornelius enters the police station wearing handcuffs.  The Chief of
Police is behind him holding a gun.

195	INT.  DIVA'S  SUITE / CONCERT  HALL

Leeloo knocks out the last Mangalore just as the Diva finishes her song
to a burst of applause.  The Diva takes a bow.   So does Leeloo.

196	INT.  ROOM

Akanit and his men listen to the concert. The Mangalore guard runs in.

        MANGALORE
They were waiting for us! It was an
ambush!

        AKANIT
If it's war they want it's war they'll get!
Enact the Final Plan!

All the Mangalores cock their weapons.

197	INT.  DIVA'S  SUITE

Leeloo is about to open the case when the door EXPLODES.  Zorg is there
holding a ZF1.

        ZORG
My compliments, little lady!
...And thanks for doing all the dirty work!
I couldn't have done it any better myself!
    (sharply)
...Now hand over the Stones!

Leeloo smiles and hands him the case.  Zorg arms the ZF1 and gets ready
to kill her.

        ZORG
Nice knowing you.

Leeloo catches on quickly.  She kicks the scotch bottle on the floor into
the gun which throws Zorg's shot off.  She jumps to the ceiling and
disappears in an air vent.  Furious, Zorg fires at the ceiling.

198	INT.	AIRSHAFT

Leeloo dodges the bullets as best as she can.

199	INT.  SUITE

Zorg fires his 3000 round clip.  The ceiling looks like a piece of swiss
cheese.  Zorg sticks a small cylinder in the wall and flicks it on.  The
numbers flashing by tell us it's a bomb.  The timer reads: 19 minutes and 59
seconds.

        ZORG
    (with a crafty smile)
You can run but you can't hide...

200	INT.  POLICE  OFFICE  FHLOSTON  PARADISE - NIGHT

Cornelius is seated opposite the Chief of Police.  A MEDIC is bandaging
the chief's head.  The door explodes.  The cop outside in riddled with
bullets.  A dozen Mangalores attack the police office.  Akanit is at
their head.  The policemen are caught unaware.

        AKANIT
Nobody move! We're taking over this
ship!

The Chief of Police is goggle-eyed.  Cornelius leans toward him.

        CORNELIUS
    (pleased with himself)
I told you...

201	INT.  CORRIDOR

Zorg has the case and exits the suite just as the general alarm goes off.
He sighs in exasperation.

202	INT.  CONCERT  HALL

Three Mangalores suddenly rush into the opera hall shooting.

        MANGALORE 1
Everyone down!

There is panic all around.

        LOC RHOD
    (broadcasting, panic stricken)
Ladies and gentlemen, I think we're being...
attacked.  The place is crawling with warriors.

203	INT.  PRESIDENT'S  OFFICE

President Lindberg and his generals look very worried.

204	INT.  CONCERT HALL

Some security guards open fire one of the Mangalores is hit.  The others
turn their guns on the cops.  People scream, diving for cover.  Korben bides
his time.

More Mangalores rush in from all around shooting.  Two cops are killed.
The Diva... takes a bullet.

She falls from the stage into Korben's arms. He lowers her to the floor.
Korben ignores the panic all around and wraps her in his dinner jacket,
trying to stop the blue blood spurting from her wounds.

205	EXT./ INT.  SPACE  AROUND  FHLOSTON

Zorg's ZFX200 speeds away from the boat.  Zorg is at the controls, a
devilish smile on his lips.

        ZORG
You want something done, do it yourself!

206	INT.  CONCERT  HALL

Fighting rages all around in the concert hall, but Korben is oblivious to
it.  He sets the Diva's head delicately on the floor.  Loc Rhod is hidden
nearby, still on the air.

        LOC RHOD
    (voice low, panicked)
They're hideous. They've got a crest on
the head, the eyes of a toad and fingers
all over their hands. Totally hideous!

207	INT.  PRESIDENT'S  OFFICE.

        MUNRO
    (worried)
...Mangalores!

        PRESIDENT
Send a battalion out immediately!

208	INT.  CONCERT  HALL

        KORBEN
    (to the Diva)
I was sent by the government to help you.

        DIVA
Don't worry.  This is my fate...
How was the concert?

Korben is a little surprised, but... the Diva is an artist.

        KORBEN
I've never heard anything so beautiful
in my life.

A Mangalore jumps on them from the stage.  Korben makes short work of him
and grabs his gun.

        DIVA
    (weak)
You're a good man...
She was right to have chosen you...

        KORBEN
Who?

        DIVA
The Fifth Element...
The Supreme Being... Your wife...

Korben is floored.

        KORBEN
Leeloo... is... she's...

        DIVA
Yes, and more than that... You must
give her the Stones, she's the only one
who knows how to use them.

        KORBEN
    (to himself, suddenly
    realizing)
...So Cornelius was telling the truth!

209	INT.  POLICE  STATION

The Mangalores tie up Cornelius and the Chief of Police together.

        CORNELIUS
    (to the Chief of Police)
Of course I was telling you the truth!...
If you had listened to me in the first place,
we wouldn't be in this predicament now!

210	INT.  CONCERT  HALL

Korben wastes two more Mangalores.

        DIVA
She needs you. She needs your help and
your love. She's more fragile than she seems...

Korben looks around, ready for another attack.

        KORBEN
...Yeah, so am I.

The Diva takes his hand.

        DIVA
She was taught to love the life of others...
but not her own. You have to teach her
to love if you want her to truly live!

        KORBEN
    (uncomfortable)
I'll help her, I promise, but I think you
should tell me where the Stones are!

        DIVA
Do you love her?

        KORBEN
I... I don't know! We hardly know
each other... it takes time!

        DIVA
I don't have time... I need to know.

        KORBEN
Listen, the last time I admitted to a woman
I loved her ... I never saw her again.

        DIVA
I would like to have died in peace...

The Diva's eyes close.

211	INT.  DIVA'S  SUITE

The timer on Zorg's bomb clicks over to "15 minutes".

212	INT.  CONCERT  HALL

        KORBEN
You tell me to save the world then
you go off and leave me in the shit!

He shakes her, gently slapping her cheeks.

        KORBEN
Come on! You're not gonna die in peace!
You're not going to die at all! You hear me?
Where are the Stones?

213	INT.  SPACESHIP

Zorg sets the Sacred Case on a table in the cockpit.  He opens it with a
complacent smile:		It's empty!

He cannot believe his eyes.  He goes berserk, destroying everything in
sight.

214	INT.  CONCERT  HALL

Korben slaps the Diva soundly.  She comes around somewhat.

        KORBEN
I'm sorry, but... the Stones...

        DIVA
    (very weak)
They are... with me...

The Diva dies.  Blue blood streams from her mouth.  Korben frisks the
Diva but doesn't find anything.  The shooting slowly stops in the theatre.
The Mangalores are now in total control.

        MANGALORE 2
Stay calm and nobody will get hurt!
Hands on your head and into the hall!

The guests comply

        KORBEN
    (to himself)
...The Stones are with me?

and then it occurs to him.

        KORBEN
...In me?

He touches the Diva's stomach and senses something hard.  Girding
himself, he sticks his hand in the wound and pulls out a Sacred Stone.
Then another.  And another.  Korben pulls out all four Stones, covered in blue
blood.  Everyone has left the theater.  The Mangalores check the aisles one
by one.

Loc Rhod peeks out from under a seat.

        LOC RHOD
Don't you think we'd better be going?

A Mangalore spots Korben kneeling alongside the Diva.  He grabs Korben by
the shoulder and pokes him with his gun.

        MANGALORE
Hey, you! With the others!

Korben spins and, in one swift motion, breaks his arm.  Just for
starters.  Another WARRIOR rushes over.  Korben punches him into oblivion
and snatches the gun.

        KORBEN
That's it... I've had... all day people
have been sticking guns in my face...

Korben wraps up the four Stones in his shirt.

        LOC RHOD
Korben man... These dudes are going
to waste us if we don't do what they say.

Korben gives him the package and grabs his mike.

        KORBEN
You don't do what I say... I'll waste
you myself. Got it?

        LOC RHOD
Got it...

215	INT.  PRESIDENT'S  OFFICE

President Lindberg dabs his sweaty face with a towel.

216	INT.  POLICE  STATION

Akanit is still in the police station facing control screens.  He barks
into a
walkie-talkie.

        AKANIT
What's the situation in the hall?

217	INT.  HALL

Hostages are being gathered in the middle of the hall.  They are
surrounded by Mangalores who guard them.

        MUGGER
    (into walkie-talkie)
There's no more resistance.
Everything's under control.

Three Mangalores are suddenly blasted through the glass door leading to
the theater.  Korben bursts into the hall, two huge guns in his hands.

        KORBEN
Everybody down!

Korben takes out two more WARRIORS coming towards him, rolls behind a
column.
Laser bullets stinging all around his head.

        LOC RHOD
This is amazing! Korben, Korben Dallas,
the winner of the Gemini Croquette
contest just killed three warriors like he was
swatting flies...

Panic everywhere!  Heavy firing fills the hall.

ANGLE ON:

Roy von Bacon, the laserball player, rises from the floor behind a
Mangalore, grabs him and smashes his head into a column, seizing the gun.

ANGLE ON:

Two Mangalores firing a huge machine gun at the column Korben is using
for cover.
He dives for cover behind the bar.

ANGLE ON:

Two Mangalores watch awestruck.  Roy whistles behind them.  The two
Mangalores turn around.  Roy bonks their heads together.

        LOC RHOD
It's Roy von Bacon, the Lions center
forward joining in the battle...

Someone taps Loc Rhod on the shoulder.  He jumps with fright.

        PRINCESS AACHEN
    (hot to trot)
All this is terribly exciting, hmmm?

Loc Rhod covers his mike.

        LOC RHOD
GET OFF MY BACK!

A Mangalore shoots in their direction.  Loc Rhod flattens himself on the
floor.  A vase falls on the Princess knocking her out.  A Mangalore loads
some missiles in his gun and destroys the bar piece by piece forcing Korben to
move forward.  Korben motions to Baby Ray hiding under the pool table.

        KORBEN
Toss me the balls!

        BABY RAY
    (terrified, still deaf)
What?

Another piece of the bar explodes.

        KORBEN
The balls for Christ's sake!

Korben apes playing pool, but Baby Ray really is stone-deaf.

        EMPEROR JAPHET
He wants the balls! You deaf or something?

The EMPEROR rolls the balls over to Korben.  The Mangalore loads more
missiles and shatters another part of the bar.  Korben hides behind the last
bit left.

        KORBEN
How far is he from here?

The EMPEROR glances at the Mangalore, who in reloading.

        EMPEROR
I'd say about thirty yards to the left.

Korben hefts the ball, jumps up and hurls it with blinding  speed.  The
Mangalore catches it right in the head.  He drops, firing in the air.  The
missile strikes the ceiling which collapses on him.  The emperor gives Korben
a thumb's up.

        LOC RHOD
...And our man Korben has literally
knocked out the opposition with an
amazing 90 foot pitch.

The COPS on the floor rise, scoop up weapons from dead Mangalores and lay
down a line of fire at the last of the fleeing rebels . Roy whirls his arm
in victory.

        FOG
Thanks for your help.

        KORBEN
Forget it.

Korben grabs Loc Rhod and takes him with him.

218	INT.  KORBEN'S  SUITE

Korben bursts into the room. He stares at the luminous bar still struck
to the ground and sees the hole Leeloo escaped through.

        KORBEN
Leeloo???

219	INT.  DIVA'S  SUITE - CEILING

Leeloo in bleeding all over.  She can barely move.

        LEELOO
    (feeble)
Kor... ban...

220	EXT.  NEAR FHLOSTON

The ZFX 200 speeds back toward Fhloston Paradise.

221	INT.  DIVA'S  SUITE

The bomb timer now reads 10 minutes.

222	INT.  POLICE  STATION  HALLWAY - FHLOSTON  PARADISE

The last of the Mangalores have barricaded themselves in the back of the
station and shoot at anything that tries to enter.  Korben joins the
policemen already there.

        COP 1
Hey, who are you?

        KORBEN
The winner of the Gemini Croquette contest.

Korben goes to the door and peeks around the corner.  Loc Rhod arrives.

        KORBEN
Seven to the left. Five to the right.

        COP
What's he doing?

Korben leans around the corner and fires rapidly.

        KORBEN
Six to the left. One to the right.

        LOC RHOD
He's on vacation.

        KORBEN
    (reloading)
We got to find the leader. Mangalores
don't fight without a leader.

223	INT.  POLICE  STATION

Akanit gets up, grabs Cornelius by the throat and put a gun to his head.

        AKANIT
One more shot and we start killing
hostages, got that?

224	INT.  POLICE  STATION  HALLWAY

        KORBEN
Found him...

        AKANIT
    (tense)
Send someone to negotiate!

        KORBEN
Mind if I go? I'm an excellent
negotiator.

        COP 1
Uh... Sure, go ahead.

Korben gets ready.

        COP 1
We're sending someone in who's
authorized to negotiate.

225	INT.  POLICE  STATION

Korben walks quickly into the room, heads straight for Akanit, raises his
gun and puts a bullet through his head.

        KORBEN
Anyone else want to negotiate?

        COP 2
    (to another Cop)
Where'd he learn to negotiate like that?

226	INT.  PRESIDENT'S  OFFICE

        MUNRO
From us!

The President gives Munro a hard look.

227	INT.  CONTROL  ROOM

The police round up the remaining Mangalores.  Korben is at the control
center screens trying to find Leeloo.  Cornelius comes over to him,
embarrassed.

        CORNELIUS
You're probably very angry with me and
I quite understand. But I want you to
know I'm fighting for a noble cause.

        KORBEN
Yeah, I know... to save the world... but
right now all I want to do is save Leeloo.

        CORNELIUS
Leeloo's in trouble?

        KORBEN
When is she not in trouble?

        CORNELIUS
Uh.. Have you tried the Diva's suite?

Korben realizes that Cornelius in probably right.

228	INT.  FHLOSTON  PARADISE  LANDING  DOCK  AND  GARAGE

The ZFX200 settles in the landing dock garage.  SECURITY POLICE approach
the ship just as Zorg in getting out holding the ZF1.

        POLICEMAN
More trouble?

        ZORG
Nothing I can't fix myself.

He brings up the ZF1 and wipes out the garage.

229	INT.  DIVA'S  SUITE

Korben enters the Diva's suite which is in shambles.  He looks
everywhere, but finds nothing.

230	INT.  AIRSHAFT

Leeloo lies in a pool of blood.  She hears something below her.

231	INT.  DIVA'S SUITE

Exhausted, Loc Rhod wipes his forehead and finds himself face to face
with the bomb stuck on the wall.

Korben in busy looking for Leeloo.

        KORBEN
    (loudly)
Leeloo?

Up in the airshaft, Leeloo has heard him.

        LEELOO
Korben...

Her voice is too weak, Korben can't hear her.

        LOC RHOD
Korben man... what the hell is this?

Korben gives the bomb a prefunctory glance.

        KORBEN
A molecular bomb.

Three minutes left on the timer.

        LOC RHOD
    (increasingly worried)
And, uh, what're these numbers clicking
by?

        CORNELIUS
Probably the time remaining before it
explodes.

Cornelius smiles and continues his search.

        LOC RHOD
    (weak smile)
You're just saying that to scare me! Right?
If it was a bomb, an alarm would've gone off.
There's bomb detectors in all these hotels!

A general alarm goes off.  Loc Rhod is crushed.

232	INT.  MAIN  HALL

The lights flicker.

        VOICE (O.S.)
This is a Type A alert. For security reasons
the hotel must be evacuated. Please proceed
calmly to the lifeboats located in the main
hallways.

A wave of panic engulfs the hall.  The cops are unable to hold back the
crowd as it stampedes to the exits.

233	INT.  CORRIDOR

Zorg marches down the corridor shooting everyone in his path.

234	INT.  DIVA'S SUITE

Loc Rhod stands paralyzed in front of the flashing timer.  Less than two
minutes left.

        LOC RHOD
Maybe we oughta be going,
what do you think?

        KORBEN
Not without Leeloo.

Loc Rhod cannot take his eyes off the bomb.

        LOC RHOD
Like D-Man, I hate to bother you but uh,
like, we're down to 2 minutes here...

Korben breathes out, bothered.  He turns his attention to the bomb.

        KORBEN
It's the latest model.. I've never seen one
before... it works off a magnetic coded
card... Let's see if I can rig it up.

235	INT.  AIRSHAFT

Leeloo sticks her fingers out one of the bullet holes and lets some of
her blood drip down.

The blood splats on Korben's hand.  He snaps his head up and knows
immediately who is up there.  He forgets about the bomb.

        LOC RHOD
Hey! What are you doing? The bomb!

Korben drags the desk over, jumps on it and pokes his head in the torn up
airshaft He spots Leeloo who gives him a weak smile.

        KORBEN
Don't worry, I'm here now!

He pulls her toward him, helps her out of the shaft and stretches her out
on the desk.

        KORBEN
Just relax. I've got the Stones.
Everything's going to be fine.

30 seconds left on the timer.

        LOC RHOD
    (falling to pieces)
Like Korben, can I have 30 seconds of
your time here?

        KORBEN
    (to Leeloo)
I'll be right back.

Korben dashes over to the bomb.  He is stopped by the barrel of the ZF1.
Zorg, in person, holding a magnetic card.

        ZORG
    (smiling)
Allow me...

Zorg slips a small magnetic card in the bomb, it starts to count down
from 5 minutes.

        ZORG
Just for the fun of it.

Loc Rhod faints.

        ZORG
Well, what do we have here? Is this
Korben Dallas? The famous winner of
the Gemini Croquette contest?
Or is this Korben Dallas from Special
Section sent by old Lindberg himself.

Korben doesn't reply.

        ZORG
...In any event, whoever you are,
I was glad to meet you.

Zorg fires at Korben who figures he is dead.  Nothing.  Zorg tries again.
Nada.  The clip is empty.  Zorg starts to panic.

        ZORG
...A 3000 round clip! I didn't fire off
3000 rounds... did I?

        KORBEN
Don't you know how to count.
It's not all that hard. Watch!

Korben punches him square in the face, shows him his index.

        KORBEN
One! That's for trying to kill me!

Second Punch.

        KORBEN
Two! That's for firing me! Three!
That's for pushing around a priest!
And the rest is for what you did to
my wife!

Korben pummels him mercilessly.

236	INT.  PRESIDENT'S  OFFICE

President Lindberg prefers closing his eyes.  Munro's shoulders move as
if he were beating on Zorg.

237	INT.  DIVA'S  SUITE

Zorg falls to the floor, beaten to a pulp.  The timer clicks over to 3
minutes.

        KORBEN
We're outta here!

He picks Leeloo up in his arms.

Cornelius grabs Loc Rhod and gives him a resounding slap.

        LOC RHOD
Are you nuts, Father? That hurts! I
can't feel my teeth.

        CORNELIUS
Doesn't matter all you need are your
legs.

238	EXT.  FHLOSTON  PARADISE - NIGHT

The lifeboats launch from the hotel and fly out into space.

239	INT.  FHLOSTON  PARADISE  LANDING  DOCK  GARAGE

Korben, carrying Leeloo, Cornelius and Loc Rhod are in the garage.

        VOICE (O.S.)
Two minutes to complete evacuation...

Korben bursts the lock on the first ship he finds and enters followed by
Cornelius and Loc Rhod.  The ZFX200.

240	INT.  DIVA'S  SUITE

Zorg starts to come around.

241	INT.  ZFX200

Korben sets Leeloo down.

242	INT.  DIVA'S SUITE

Zorg picks up his ZF1, unaware of the bomb and the countdown.

        ZORG
I didn't fire three thousand rounds...

243	INT.  ZFX2O0  COCKPIT

        VOICE (O.S.)
One minute to total evacuation...

        LOC RHOD
You know how to fly this thing?

        KORBEN
    (concentrating)
It's like a cab isn't it?

        VOICE
30 seconds...

        KORBEN
Anyone know how to release the lines
on this crate?

244	INT.  DIVA'S SUITE

Zorg is busy with the ZF1 when the bomb starts to BEEP signaling the last
ten seconds.  Zorg is terror stricken.  He pushes a button and holds the
ZF1 over his head.

        ZORG
    (loudly)
Maximum Protection.

A mauve-colored magnetic shield closes around Zorg like an indestructible
sarcophagus.

245	INT.  ZFX200  COCKPIT

Cornelius and Loc Rhod are bent over the buttons looking for a way to
release the lines.

        VOICE (O.S.)
6... 5...

        KORBEN
Found it?

Loc Rhod searches frantically.

        LOC RHOD
I don't even know what I'm looking for!

        KORBEN
Fuck it! Hold tight!

Korben slams the throttle into full forward.  The ship roars away ripping
the lines to shreds.

Loc Rhod is thrown to the rear of the ship.

CUT TO:

The counter goes 1... 0

-The suite disintegrates - The corridor is consumed.

-The main hall is no more.

246	EXT.  FHLOSTON  PARADISE

The ZFX200 jets away as the enormous oceanliner explodes behind it.

247	INT.  ZFX200

The ship stops shaking.  That was a close one.  Everyone's relieved.

        KORBEN
Solid little jobs, aren't they?

        LOC RHOD
    (broadcasting, exhausted)
Dear listeners, your favorite DJ is alive and
kicking. It's seven o'clock and time for the
news. Tune in tomorrow for another adventure.

        VOCODER (O.S.)
Beep. End of transmission.

Loc Rhod lets out a huge sigh.

        LOC RHOD
    (to the others)
The best show I ever did!

248	EXT.  PLANET  FHLOSTON

A magnetic sarcophagus crosses the Fhloston sky and crashes into a
glacier.

249	EXT.  FHLOSTON

Zorg appears in the middle of the ice.  He takes a portable phone out of
the ZF1.

        ZORG
How's that? Can you hear me better
now?

        SECRETARY (O.S.)
Yes, Mr. Zorg, I hear you perfectly!
So, how was the concert?

        ZORG
Who gives a shit! I didn't come here to
listen to music! Listen up instead of
running off at the mouth!
The batteries on my phone are almost gone.

        SECRETARY (O.S.)
Yes, Sir!

        ZORG
Dispatch me another ZFX200 immediately.
Someone stole mine.

        SECRETARY (O.S.)
Right away, Sir. I'll send you a new one to
the hotel.

        ZORG
I'm not at the hotel!

        ZORG
Hello?...

        BEEPER (O.S.)
Battery dead.

Zorg is all alone, lost, in the middle of the glacier.

        ZORG
    (to himself)
Stay calm.... stay calm...

250	INT.  PRESIDENT'S  OFFICE

General Munro enters the office with a smile.

        MUNRO
Major Dallas has the Five Elements on
board. The priest is guiding them directly
to the temple.

President Lindberg closes his eyes in relief.

        PRESIDENT
Thank God! We've been saved!

A SCIENTIST rushes in.

        SCIENTIST
Mr. President.

        PRESIDENT
Yes? Now, what?

251	EXT.  SPACE

A ball of fire, all-powerful Evil, speeds across the screen with three
Federal Army warships following along behind it as best they can.

252	INT.  PRESIDENT'S  OFFICE

        PRESIDENT
What do you mean, "its advancing"?!

253	INT.  COCKPIT  FEDERATED  WARSHIP

        COMMANDER
It's not only advancing, but it's moving at
incredible speed! We're having trouble
following it.

254	INT.  PRESIDENT'S  OFFICE

        PRESIDENT
    (to Scientist)
...And... Do you have any idea where it's
heading?

The scientist is hard to put to answer, he shakes his head.

255	INT.  ZFX200  COCKPIT - NIGHT

Korben gently wipes Leeloo's forehead with a cloth.  She opens her eyes a
little.

        KORBEN
    (gentle, loving)
Apipoulai..

Leeloo smiles, weakly, feverish.

        LEELOO
I'm so very sad.

        KORBEN
Why? We did pretty well, wouldn't
you say?

        LEELOO
Five hundred wars... Arms... Drugs...
Money...
Everything you create is used to destroy...

        KORBEN
I told you not to read all that crap!

        LEELOO
Protect life... Until death.

Her eyes close and she falls back asleep.  Korben is worried.  She seems
so depressed.  Cornelius enters.

        CORNELIUS
There's a General on the phone...
His name's Mambo, I think.

256	INT.  PRESIDENT'S  OFFICE

        MUNRO
Munro here. President Lindberg wants
to talk to you.  Hold the line.

The President clears his throat and takes the phone.

        PRESIDENT
Major, first off, I want to thank you,
in my name and in the name of the
Federation...

257	INT.  ZFX200 / PRESIDENT'S  OFFICE

        PRESIDENT (O.S.)
For the praiseworthy courage you have
shown us! I'd like to congratulate General
Munro for his choice. He found the ideal
man for such a...

        KORBEN
    (to the point)
So now what's the problem?

The President drops into his armchair and sighs.

        PRESIDENT
There's a ball of fire 1,200 miles in diameter
heading straight for the earth. And we have
no idea how to stop it! ...That's the problem.

Korben thinks fast.  The Priest is with him.  The Five Elements are on
board.

        KORBEN
How much time before the collision?

The President queries the scientist with a nod of the head.

        SCIENTIST
If its speed remains constant... in an
hour and 57 minutes.

        KORBEN (O.S.)
I'll call you back in two hours.

Korben hangs up.  The President looks stunned.

258	EXT.  SPACE

The ZFX200 shifts to the speed of light and vanishes in the star-studded
cosmos.

259	INT.  CHAPEL

David is asleep.  He is woken by the sound of...

260	EXT.  DESERT - DAWN

The ZFX200 is parked in the middle of the desert.

Korben walks ahead carrying Leeloo.  Cornelius has the four Stones with
him.
Barely awake, Loc Rhod stumbles along.  David appears at the door of the
chapel.

        DAVID
You're all safe. Thanks be to God!

        CORNELIUS
Later, David! Later!
There's not a minute to lose!

The small group enters the chapel.

261	INT.  CHAPEL

Cornelius pushes the group onto the altar which is surrounded by a wooden
barrier.  Cornelius stands in front of the cross.

        KORBEN
Excuse me, Father, but... could we pray
later?

Cornelius bends the cross and pushes it down.  A mechanism is set off
lowering the altar like a service elevator.

The altar descends amid rocky walls.

262	INT.  PRESIDENT'S  OFFICE

        MUNRO
They just landed in the desert.

        PRESIDENT
    (sweating)
How much time is left?

263	EXT.  SPACE

Earth is in view.  The Dark Planet fills the screen and heads for the
blue planet.

264	INT.  PRESIDENT'S  OFFICE

        SCIENTIST
About nine minutes.

President Lindberg has trouble breathing.

265	INT.  TEMPLE

Lit by torches, Korben sets Leeloo delicately on the altar in the exact
center of the four elements.  Cornelius looks over the four Stones every
which way.

        CORNELIUS
    (panic-stricken)
Uh, this one... must be water!

It's obvious he doesn't know where to put it.

        KORBEN
Don't tell me you don't know how all
this works?

        CORNELIUS
Theoretically, yes! The four Stones form
the beam and the Fifth Element is supposed
to stand in the middle there, but...
I don't have the reference book.
I've never seen the Stones work!

Korben can't believe his ears.  He tears the Stone out of Cornelius' hand
and studies the inscriptions.  He goes over to one of the four bases the
stones rest on and tries to figure it out.  The symbol of air is on the Stone,
the same as on the base.

        KORBEN
Match the symbols!

Korben places the first Stone and picks up another one.  Cornelius has
found the symbol for water.  Loc Rhod sits down.  He is very tired.

        LOC RHOD
What is this some kinda game? Like
chess?

Korben pulls him to his feet and sticks a Stone in his hands.

        KORBEN
No. It's much simpler. If we don't figure
out where these Stones go in five minutes,
we're all dead! Think you got it?

Loc Rhod's got it and runs over to put in his Stone.  The four Stones are
all in place but nothing happens.

        KORBEN
There's no light! You told me there were
supposed to be four beams of light.

        CORNELIUS
    (lost)
Yes, of course, but... The Stones are shut!
They have to be open for it to work.

        KORBEN
And you don't know how they open,
is that what you are saying?

        CORNELIUS
That's what I'm saying.

266	EXT.  SPACE

The Dark Planet closes in on Earth rapidly.

267	INT.  CHAPEL

Korben leans over Leeloo.

        KORBEN
Leeloo? The Stones! We have to open
them! How does it work?

        LEELOO
    (feeble)
The wind blows... the fire burns...

        KORBEN
I know all that, Leeloo! I'm talking
about the Stones.

        LEELOO
...The rain falls...

Korben is desperate.  Leeloo's too weak, he won't get anything more out
of her.
He darts over to a Stone and turns it over and over.

        KORBEN
The rain falls... the wind blows?

Loc Rhod stands in front of his Stone looking at Korben.

        KORBEN
Try and figure out how this fucking thing
opens, instead of staring at me like that!

Loc Rhod starts feeling the Stone all around.

        LOC RHOD
    (afraid)
I'm looking, I'm looking.

268	INT.  PRESIDENT'S  OFFICE

The tension is palpable in the President's office.

        SCIENTIST
...Three minutes.

        MUNRO
We've lost contact with them.

269	INT.  CHAPEL

Korben and Cornelius turn the Stones every which way.  All to no avai1.
Loc Rhod is discouraged.

        LOC RHOD
...we'll never make it.

He sighs.  Three hooks pop off the Stone.  Loc Rhod can't believe his
eyes.

        LOC RHOD
It... it moved! Korben! Korben!

Korben rushes over, looks at the Stone.  Hooks are undone.

        KORBEN
What did you say? What did you do?

        LOC RHOD
Nothing! Swear to God, I didn't do
nothing!

        KORBEN
Look, you did something that set it off.
Try to remember. Concentrate. Tell me
exactly what you did!!

Loc Rhod tries to duplicate the same movement.

        LOC RHOD
I was like this... With my hands here and...
I said, "We'll never make it!" That's all!

Nothing happens.

        KORBEN
Is that all?

        LOC RHOD
Yeah... then I sighed... like this.

Loc Rhod sighs, really depressed this time.  The Stone opens even more.
Korben's got it.

        KORBEN
The wind! The wind blows...

Korben blows on the Stone which immediately opens revealing a patch of
blue sky with some miniature clouds floating around inside.  A yellow beam
pops up like a ray of sunlight, like Korben's smile.

        KORBEN
Quickly, everyone on a Stone!
Water for water!  Fire for fire!
Earth for earth!

The two men move fast.  Korben on the 4th Stone: Earth.  He grabs a
fistful of earth  and throws it on the Stone.  A miniature patch of green
appears and immediately forms a green beam.  Cornelius wipes his forehead
with a scarf and wrings it out over the Stone.  It opens revealing a patch of
miniature raging sea.  A blue beam appears.

Loc Rhod has a problem.

        LOC RHOD
    (shaking)
I don't have a light.  I stopped smoking
last week! If we'd come a bit sooner...

Korben pats his pockets, he comes up with a box of matches.  There's only
one left.

        KORBEN
Don't breathe.

Loc Rhod and Cornelius hold their breath.  Korben strikes the match.  A
small flame appears on the tip.  A breeze goes through the room.  Korben
feels like he's got TNT in his hands.  He approaches the flame to the Stone.
The flame twists, dims, flickers ...but holds on.  The Stone opens.  A patch
of miniature fire appears. Korben sighs, snuffs out the match.  The fourth
beam, a red one, immediately forms.

270	EXT.  SPACE

A mass of fire fills the screen.  The Earth is only a thousand miles
away.

271	INT.  PRESIDENT'S  OFFICE

        SCIENTIST
    Two more minutes.

The President shuts his eyes.  His lids move in prayer.

272	INT.  CHAPEL

Korben helps Leeloo onto her feet where the four beams and four colors
crisscross.

        KORBEN
It's up to you now, Angel!

        LEELOO
I'm so tired...

        KORBEN
You can sleep tomorrow... come on...

        LEELOO
I want to sleep... forever...

        KORBEN
Leeloo! Listen to me! I'll take you on
a vacation afterwards! A real vacation,
this time, for as long as you want.
Come on! You can do it!

Korben slowly releases Leeloo and steps back from the altar.
Leeloo can barely stand in the center of the four beams.
An indistinct white beam begins to form around her, starts to rise.

        CORNELIUS
Come on Leeloo! Come on!

The beam loses its intensity.  Leeloo crumples to the floor.

273	EXT.  SPACE

The Dark Planet hurtles toward Earth.  A hundred miles before impact.
The African continent is visible.  No doubt about it:	The fireball is
heading right for Egypt.

274	INT.  PRESIDENT'S  OFFICE

Seconds tick away relentlessly on the scientist's stopwatch.

        SCIENTIST
It'll be entering the atmosphere in one
minute.

275	INT.  CHAPEL

The heat in the temple is unbearable.  All the walls start to ooze the
same horrible black slimy liquid seen at Zorg's.  A drop of liquid falls to
the temple floor and begins to smoke, eating away at it like acid.  Loc
Rhod has to dodge another drop of the stuff.  Korben quickly straightens
Leeloo up and puts her back in the center of the beams.

        KORBEN
Leeloo! If you don't get on with the
program we're all gonna die! And that's
not on my agenda for today.

Leeloo wraps her arms around Korben's neck.

        LEELOO
    (weak)
What's the use of saving lives...
when you see what you do with them!

        KORBEN
You're right but there are lots of good
things... beautiful things...

        LEELOO
...Like love...

        KORBEN
Exactly.

        LEELOO
But I don't know love... I'm like a machine
programmed to save other people's lives but
never to have one of my own.

276	INT.  PRESIDENT'S  OFFICE

The Scientist's stopwatch goes from 30 to 29 seconds.

277	INT.  CHAPEL

        LEELOO
I have thousands of memories but none
of them are mine... There is no need for
me other than this. I'm immortal but I have
no life.

        KORBEN
Yes, you do! I need you. More than you
can imagine! Stand up straight!

        LEELOO
Why?... Why would you need me?

        KORBEN
Because...

        CORNELIUS
    (to himself)
Tell her, for God's sake!

A bit of the black acid falls on Loc Rhod's shirt setting it on fire.  He
rips if off.

CUT TO:

278	INT.  CHAPEL

        KORBEN
Because...

Leeloo has tears in her eyes.  The heat is overpowering.  Black acid is
everywhere.

        LEELOO
Tell me...

        KORBEN
I love you...

Despite her fatigue, Leeloo smiles broadly.

CUT TO:

278b	INT.  PRESIDENT'S  OFFICE

The stopwatch goes from 3 to 2.

279 INT.  CHAPEL

        LEELOO
Now you're allowed to kiss me.

- Korben wraps his arms around her and kisses her like he's never kissed
anybody before.  - The white beam, the Divine Light, immediately forms
around Leeloo and Korben. - The stopwatch hits zero.  - The Absolute Beam
explodes from the top of the pyramid and heads straight into the sky zapping
the fireball smack in the middle, slowing it down.  - Korben and Leeloo kiss
like there was no tomorrow.

- The beam hardens and slowly solidifies the Evil Planet.  Inaudible
screeches escape from the dying planet.  Screeches of terrifying pain as if a
million souls were dying.

- Streams of black acid spurt from the pyramid and solidify like
brilliant stalactites.

280	EXT.  SPACE

The pure beam, the Light of Life, has finished its work.  The Dark Planet
nothing more than a dead planet.
Strangely enough, it looks like the moon.  Everything is calm around it.

281	INT.  PRESIDENT'S OFFICE

President Lindberg opens his eyes and realizes he's not dead-

        SCIENTIST
The planet seems to have stopped at...
62 miles from impact.

282	INT.  CHAPEL

In the temple, the beam loses its intensity.  But Leeloo and Korben
remain stuck together, lost in their kiss.  Cornelius has dropped to his
knees, clutching his hands.

Loc Rhod slips along the wall with a sigh.  He gives Cornelius a knowing
smile.

        LOC RHOD
This guy is a killer with the babes.
I knew it from the moment I laid eyes
on him.

Cornelius and Loc Rhod burst out laughing.  Korben and Leeloo keep on
kissing.

283	INT.  LABORATORY

We are in the Nucleological Laboratory that gave birth to Leeloo in the
beginning of our story.  The President enters the lab followed by a group
of officials in ceremonial dress.

        MUNRO
Mr. President, let me introduce you to
Professor Mactilburgh, who runs the center.

        MACTILBURGH
It's an honor to receive you. Mr. President.

        PRESIDENT
    (beaming)
Yes.. Well? Where are our two heroes?

        MACTILBURGH
They were so tired from their ordeal that
we put them in the reactor this morning..

        PRESIDENT
I have 19 more meetings after this one
Professor..

        PROFESSOR
Of course.. Let me see if they're revived.

        AIDE
We go live in one minute, Mr. President.

Mactilburgh goes to the reactor and opens a small slot which allows him
to see what is going on under the blue shield.

Leeloo and Korben are naked, arms wrapped around each other, kissing and
probably engaged in hoppi hoppa.
Mactilburgh looks troubled.

        MACTILBURGH
I.. uh.. they need five more minutes,
Mr. President.

The President, pressed for time, looks over to his aide who in struggling
with a phone call.

        AIDE
No ma'am... I tried... No ma'am...

        PRESIDENT
Who is it?

        AIDE
Some woman... claims she's Korben's
mother...

        PRESIDENT
Give it here...

The President takes the phone and goes to the window.

        PRESIDENT
Mrs. Dallas, this in the President.
On behalf of the entire Federation,
I would like to thank...

        MOTHER (V.O.)
Don't pull that crap with me, Finger...
I'd recognize that trash can voice of
yours in a dark alley during a rain storm.
You tell that worthless no account son
of mine he should plotz for the way he's
ignored his mother... when I think of all I
sacrificed for him...

284	EXT.  NEW YORK

Outside the lab we see the President through the window, holding the
phone away from his ear.

PAN slowly across Manhattan.
Credits Roll as TWO full rising silver moons ascend in the dark blue sky.

THE END




`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
