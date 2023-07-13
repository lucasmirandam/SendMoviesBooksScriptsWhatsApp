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










SPOILS OF WAR
                                    
by

John Ridley



  

 

 

 

               WRITER'S FIRST DRAFT
                    JULY 26th, 1995











OVER BLACK WE SEE OPENING CREDITS

                           FADE TO:

VIDEO IMAGE

President Bush in the Oval Office delivering an address to
the American people.

PRESIDENT BUSH
...This act of naked aggression must be
checked.  The United States, along with
coalition forces from the Middle East,
have drawn a line in the sand.  There is
only one way for this situation to be
satisfactorily resolved.  The belligerent
forces from the Republic of Iraq must be
removed from Kuwait, be it by choice, or
by force...

                           FADE TO:

BLACK

                           FADE TO:

EXT. DESERT - DAY

From a distance we see a Humvee sitting alone in the middle
of a huge, empty desert.  Just the Humvee, nothing else for
miles.  We hear the sound of a man making machine gun-like
noises.

JAEGER (V.O.)
At-at-at-at-at.  At-at-at-at-at.

                       DISSOLVE TO:

CU - HUMVEE

There are three soldiers at the Humvee.  Second Lieutenant
JOHN EPPS,                   who sweeps the horizon with a
pair of binoculars.  PFC WES HAMMOND, who is behind the wheel
looking very bored, and PFC MARK JAEGER, who is at the
Humvee's thirty caliber machine gun, making the noises and
shooting at phantom troops.  When Jaeger talks it's with all
the swagger of a B-movie hero.

JAEGER
At-at-at-at-at.  At-at-at-at-at.

EPPS
What are you doing?

JAEGER 
What does it look like I'm doing?  I'm 
killing Iraqis.  At-at-at-at-at.  At-at- 
at-at-- 

WES 
Could you stop, please.  You're giving me
a headache. 

JAEGER
A headache? 

WES 
Yeah, a headache.  My head hurts.  You're
making me uncomfortable. 

JAEGER 
I'm making you uncomfortable.  Baking 
away in a desert in the middle of nowhere
facing three-hundred-thousand screaming 
Iraqis with nerve gas scud missiles, that
doesn't bother you.  But me making a 
little noise is driving you out of your
skull. 

WES 
Yes.  Yes.  That's exactly it.  Yes. 

JAEGER
Okay. 

Jaeger goes right back to playing soldier. 

JAEGER(CONT)
At-at-at-at-at. 

EPPS
Knock it off! 

JAEGER 
Don't get pissed at me, just 'cause I 
want to be ready when this war starts.

EPPS 
Ready for what?  What are you supposed to
be doing? 

JAEGER
I told you, I'm shooting Iraqis. 

EPPS
No you're not. 

Epps points in the opposite direction that Jaeger was 
'firing.'

EPPS(CONT) 
The Iraqis are that way.  Those are our
troops you're shooting at. 

With his binoculars Epps looks in the direction Jaeger was
shooting. 

EPPS(CONT) 
You know what?  I think you got 
Schwarzkopf.  You did!  You got the 
General right in the ass.  Now that's
good shooting. 

JAEGER
Blow me. 

EPPS 
Another month in this desert and I might
just. 

WES 
Think we're going to do it?  Think we're
going to war? 

EPPS 
Not up to us.  Up to the Iraqis.  All
they have to do is get out of Kuwait. 

JAEGER 
We ought to kick their asses anyway.
Even if they do get out of Kuwait we
ought to kick their asses. 

WES 
I don't think we'll go to war.  We 
shouldn't even be here.  This isn't our
fight, it's a regional conflict.  It
should be decided regionally. 

JAEGER 
People are suffering. 

WES
People were suffering in Afganistan, and
we didn't do anything.

EPPS 
That's 'cause the Afganis weren't smart
enough to be sitting on top of oil. 
People suffering is one thing, but when
the Yuppies aren't going to have enough 
gas for their BMWs it's time to break out
the tanks.  Come on.  Pack up.  We've got
a whole lot of nothing to patrol. 

As they pack up and get ready to roll on Jaeger says almost
to himself:

JAEGER 
We ought to kick their asses.  Either way
we ought to.

                            CUT TO:

EXT. STREET BAZAAR - EVENING 

The bazaar is loud and colorful, a cacophony of Arabic fills 
the air.  The bazaar is filled with vendors actively selling
their wares to each passerby, literally shoving them in the
faces of prospective customers. 

Epps, Wes and Jaeger walk along side by side looking almost
like the Three Musketeers, except that Wes is droning on. 

WES 
...And it's very important when you sit
down never to point the soles of your
shoes at anyone.  It's considered
offensive. 

EPPS 
You know so much about the Middle East,
you know where we can get something to
eat. 

JAEGER 
When do you ever point the soles of your
feet at people? 

WES 
I'm saying don't do it accidently. 

JAEGER 
Oh yeah.  Accidently. 

Jaeger lifts his leg and purposefully points the bottom of
his foot at a vendor. 

JAEGER(CONT) 
I'm sorry.  My foot accidently jumped up 
in the air where you could see the bottom
of it.  I hate it when that happens.

(Wes slaps Jaeger's leg down.) 

WES 
Come on.  You're going to get us in
trouble. 

JAEGER 
It was an accident.  You saw it was an
accident. 

WES 
I'm just trying to help you guys out.  It
doesn't hurt to know something about
Saudi Arabia.

EPPS 
Like learning Arabic?  You're gonna learn
Arabic you might as well learn were we
can get something to eat around here. 

WES 
I didn't learn Arabic because we were 
getting shipped here.  You don't learn it
in a couple of weeks.  I studied it in
high school. 

JAEGER
Spanish wasn't hard enough? 

WES 
I thought it would be good to know. 

JAGER 
Yeah, if you ever need to buy a rug. 

WES 
Hey, Jaeger.  Why don't you try this:
Ashra Ka mahari dahra sahib.

JAEGER 
What does that mean? 

WES 
Don't shoot me, I'm friendly.  You can
use that when you surrender.

JAEGER 
How do you say "Come here, baby.  I'm
horny."  I can use that now. 

WES 
Don't even try it.  You offend a woman
out here you're in serious trouble.

EPPS 
Don't worry about Jaeger.  He uses his
personality as a form of birth control. 

JAEGER 
Blow me.  Have I said that to you guys
recently?  Blow me. 

As Epps and Wes walk on Jaeger notices something on a 
VENDOR'S table.  It is a small, square box - slightly larger
than a man's palm - fashioned of wood and metal.  It is not
particularly ornate, but eye catching in its own way.  The
instant Jaeger picks it up and begins to look it over the
Vendor is giving him the hard sell in Arabic.  Jaeger holds
the box up to the vendor. 

JAEGER(CONT)
What is this? 

All he gets is more Arabic.  Jaeger calls over to Wes. 

JAEGER(CONT)
Hey, Wes.  Wes! 

Wes comes back over to Jaeger. 

JAEGER(CONT)
What is this? 

WES 
Now you need me.

JAEGER 
What is it?  You know so much about
Arabland tell me what it is. 

Wes looks over the box carefully. 

WES 
Well, based on my knowledge of the 
region, its culture and her people I
would have to say it's a box. 

EPPS 
Can you eat it?  If you can't eat it I
really don't care what it is. 

JAEGER 
Ask him what it is.

Wes says something to the vendor in Arabic.  The Vendor
answers back. 

WES 
He says it's a box. 

JAEGER 
Yeah, you're funny. 

WES 
It's a puzzle box.  If you can figure out
how to open it there's supposed to be a
treasure inside.

JAEGER
(Excited)
For real?  A treasure? 

EPPS 
Oh, man, you're not going to fall for
that. 

JAEGER 
There might be something in there. 

EPPS 
Yeah, the deed to the Brooklyn bridge. 

JAEGER
There might be. 

WES 
And you're the guy who's going to open 
it.

JAEGER
I could. 

EPPS 
You could turn on a light if someone put 
your hand on the switch. 

Decisively, without even haggling about price, Jaeger whips
out some money and pays the vendor for the box.

EPPS(CONT) 
Well, that showed me.  Now, can we eat? 

The three men walk on, Jaeger starting to work on the puzzle box. 

                            CUT TO:

INT. BARRACKS - NIGHT 

It's filled with young soldiers messing around, playing 
cards, listening to music, whatever.  Jaeger lays on a bunk
holding the puzzle box, probing it with his fingers, trying
to find a way to make it open. 

Wes crosses over. 

WES 
You get it yet? 

JAEGER 
Naw, nothing. 

WES 
You will.  You'll get it. 

JAEGER 
I'll show Epps.  He'll be sorry when I
get this thing open. 

WES 
You really think there's a treasure
inside? 

JAEGER 
I don't care if there's a lump of coal in
here.  I just want to be able to rub 
Epps' face in it when I crack this thing. 

Wes watches Jaeger work the box for a beat.

WES
Jaeger? 

JAEGER
What? 

WES 
You know the fifteenth is the deadline
for the Iraqis to get out of Kuwait. 

JAEGER 
Yeah.  So? 

WES 
That's in two days.

JAEGER
Like I said; so?

WES 
They're cancelling all leaves, all 
passes.  No more drills.  We stand at
full ready starting-- 

JAEGER 
What's your point, Wes?  You have a
point? 

WES 
We're going to war, aren't we.  If 
they're doing all that it must mean we're
going to war. 

JAEGER 
It doesn't mean anything. 

WES 
Why would they do all that if we weren't? 

Jaeger, frustrated, finally looks up from his box. 

JAEGER 
Okay, so we're going to war.  We're 
supposed to go to war.  We're soldiers, 
that's what we do.  The guns, the tanks,
the planes; you're just now getting the
hint we're in the war business? 

Jaeger goes back to his box.  Wes stands over him for a beat
longer, then: 

WES
Jaeger? 

JAEGER 
(For sure aggravated)
What!?

WES 
You ever think about dying? 

JAEGER 
Come on, man.  I almost had this thing open. 

WES 
You ever think about it?  You ever worry? 

JAEGER 
The only thing I worry about is how much
Iraqi ass I'm going to be able to kick
before this whole thing is over.  The 
only people who I've got anything to worry
about are the poor, dumb camel jockeys 
who don't know enough to get out of the 
way when I come rolling at them; an M-16
in each hand, and a grenade between my 
teeth.  Now if you'll excuse me, soldier,
I'd like to get back to my box.  I've got
a treasure to find. 

Wes lingers over Jaeger for a few more beats, then walks off as we:

                           FADE TO:

BLACK 

                           FADE TO:

VIDEO IMAGE 

President Bush in the Oval office addressing the Nation.

BUSH
Just two hours ago, Allied air forces 
began an attack on military targets in
Iraq and Kuwait.  These attacks continue
as I speak...Our objectives are clear. 
Saddam Hussein's forces will leave
Kuwait.  The legitimate government of
Kuwait will be restored to its rightful
place, and Kuwait will once again be 
free. 

                           FADE TO:

BLACK 

                           FADE TO:

EXT. DESERT - DAY 

From a distance we see a Humvee sitting alone in the middle
of a huge, empty desert.  Just the Humvee, nothing else for
miles.  We hear the sound of a man making machine gun-like
noises. 

JAEGER(V.O.)
At-at-at-at-at.  At-at-at-at-at. 

                       DISSOLVE TO:

CU - HUMVEE 

It's like the opening scene all over again.  Jaeger is at the
machine gun, Epps sweeps the horizon with his binoculars, and
Wes is behind the wheel.  Only difference is that Wes watches
CNN footage of the air war on a Watchman. 

JAEGER
At-at-at-at-at. 

WES 
(Re:  His TV) 
This is so weird.  It's happening, but 
it's not.  It's like a TV show, and we're
part of it. 

JAEGER
At-at-at-at-at. 

EPPS 
Will you knock it off!  Damn, man. 
You're going to annoy the Iraqis into
submission. 

Jaeger gets down from the machine gun, pulls out his puzzle
box and starts to work on it again. 

JAEGER 
This is stupid.  It's going on a month 
now.  How long are they going to let the
Air Force piss on those bastards?  They 
can bomb them all they want, Saddam ain't
going anywhere without a ground assault.
What the hell is the army waiting for? 

EPPS 
Why you in such a hurry to get to
shooting? 

JAEGER 
I've got to have something to tell people
when I get home besides I protected a 
stretch of dirt that nobody wanted for
nothing in the first place. 

WES 
The longer the air force hits the Iraqis,
the safer it'II be for us when we have to
engage. 

JAEGER 
You know what, Wes?  If you get a note
from your mommy they might excuse you
from the war. 

EPPS 
You all want to lay off?  God.  I hope
the Iraqis shoot me; put me out of my
misery. 

JAEGER
OH MY GOD! 

Startled, Epps and Wes each pull their guns and spin in 
Jaeger's direction expecting to have to fire at something. 

EPPS
What!?  What!? 

JAEGER 
I did it!  I got the box open. 

Jaeger has indeed opened the box.  We can see something
inside of it. 

EPPS 
You almost got yourself shot, that's
what you did. 

Wes excitedly goes over to Jaeger. 

WES 
What's inside? 

Jaeger pulls out a small tube sealed with wax.

JAEGER 
It's...it's...I don't know what it is. 

WES 
It's a container.  Break the seal. 

Jaeger hesitates a beat, which heightens a bit of suspense.
All three men can't help but be drawn closer to the container. 

EPPS
Go on, man. 

Jaeger pokes his finger through the wax and pulls it off the
tube.  He sticks his finger back into the container and draws
out a rolled up piece of paper. 

WES
Paper. 

EPPS 
It's a fortune box. 

Jaeger unrolls it.

WES
What's it say?

EPPS 
Help, I'm being held prisoner in a puzzle
box factory. 

We see the paper.  Lines are drawn on it, large, crude 
figures.  It's hard to make out exactly what it all is
supposed to represent. 

JAEGER 
It's a drawing, or something.  Some kind
of art. 

Epps takes the paper from Jaeger and gives it a once over. 

EPPS 
Looks like something a kid would do. 

Wes takes the paper and looks it over.

WES 
It's a map, I think that's what it is.

EPPS 
There you go, Jaeger.  Just find the
buried treasure, and you're a
millionaire. 

Jaeger takes back the paper.  All excited like a kid on
Christmas:

JAEGER
You think? 

EPPS 
Yeah, that's exactly what I think.  You
and the five thousand other suckers who
bought those boxes.  Let's get out of
here.  We got sand to protect. 

Epps and Wes load up and get ready to move out.  Jaeger just
keeps staring at the map, eyes lit like candles.

                            CUT TO:

INT. INTELLIGENCE ROOM - LATER 

The room is filled with maps, recon photos, HUMINT reports.
They're posted on the walls with various levels of troop 
strength - allied and Iraqi - indicated.  More data is 
constantly flowing in, analyzed and processed. 

Jaeger enters, spots WOODS - a young soldier on intel detail
- and crosses over to him. 

JAEGER
Woods. 

WOODS 
Hey, Jaeger.  What's up. 

JAEGER 
I'm looking for a favor.  I need a map of
Iraqi. 

WOODS 
A map?  All I got is maps.  I'm gonna 
have Delayed Map Syndrome when I finally
get out of here.  What kind of map you
need?  Topographical, geographical,
thermal?

JAGER
I don't know.  A map map. 

WOODS
A map map. 

Woods pulls out a map and hands it to Jaeger.

WOODS(CONT)
That shouldn't be too hard to read.  Iraq
is the pink thing. 

JAEGER 
I could use some recon photos too. 

Woods gives Jaeger a sideways glance.

WOODS 
Planning on going to war all by your lonesome? 

JAEGER 
Just...want to be ready when we do. 

WOODS 
Ready for what?  Sight-seeing? 

JAEGER
The photos. 

Woods starts to dig for photos. 

JAEGER(CONT)
Some good ones. 

WOODS 
They're all good ones.  Satellites we've
got can snap a shot of the boil on
Saddam's ass. 

JAEGER 
Saddam's got a boil on his ass? 

Woods looks up at Jaeger with an expression that says:
"What?"

JAEGER(CONT)
I don't know. 

Woods goes back to looking, pulls some photos and hands them
to Jaeger.

JAEGER(CONT) 
Thanks, man.  Appreciate it. 

Staring at the pictures like they held the secrets of the
ages Jaeger starts to exit.  Woods mumbles after him: 

WOODS 
Yeah.  You figure out how to win the war
be sure to let us know. 

                            CUT TO:

INT. BARRACKS - LATER 

Maps and photos cover Jaeger's bunk the way autumn leaves 
cover the ground.  He swings between studying the maps, and
reading from a book titled A History Of The Ottoman Empire.
Jaeger puts the book down, then slides the drawing from the
puzzle box up next to one of the recon photos.  He looks at
the mosaic he's put together, looks at it like it was having
a dialogue with him.  Dig it:  It is talking.  A voice only
Jaeger can hear.  Right now it's just a little whisper, but
the voice is getting louder. 

A crossing SOLDIER, carrying a football, calls to Jaeger.

SOLDIER 
Come on, Jaeger.  We're playing ball.

Jaeger fairly jumps as he comes out of his trance. 

JAEGER 
No that's okay.  I'm gonna...I'm doing some...

The soldier crosses off.  Jaeger goes back to staring at his
maps, and photos and drawings and books.  "What were you
saying?"

As it all keeps talking to him we: 

                           FADE TO:

BLACK 

                           FADE TO:

VIDEO IMAGE 

Once again President Bush delivers an address. 

BUSH 
This evening, as I report to you, the
military operation known as Desert Storm 
enters its final phase.  The coalition
forces that face the tyranny of Saddam 
Hussein have launched an all out ground 
offensive...as this last, and most 
critical part of the campaign begins I 
ask for your prayers that God may bless
each and every one of the coalition 
forces at our side in the Gulf, and that
He may continue to bless our nation, the
United States of America.

                           FADE TO: 

BLACK 

                           FADE TO: 

EXT. DESSERT - DAY 

From a distance we see a Humvee sitting alone in the middle
of a huge, empty desert.  Just the Humvee, nothing else for
miles.  We hear the sound of a man making machine gun-like
noises. 

JAEGER(V.O.) 
At-at-at-at-at.  At-at-at-at-at. 

                       DISSOLVE TO: 

CU - HUMVEE 

It's our three boys again, just like we've seen them before:
Jaeger at the machine gun, Epps working his binoculars, and
Wes at the wheel watching his Watchman. 

Jaeger jumps down from the machine gun pissed as all hell. 

JAEGER 
They finally start the ground war, and
where are we?  Same place we've been 
since we got here.  Securing freedom for
the dirt. 

EPPS 
Everybody's got a job to do.  Figure it
this way:  At least you get to go home
alive. 

JAEGER 
I'd like to go home alive with a couple
of Iraqi scalps hanging from my belt.

WES 
Hey, look at this! 

Jaeger and Epps come around to Wes' Watchman.  We see CNN
footage of some Iraqi soldiers - looking very tired, hungry
and scared - surrendering to a CNN news crew. 

WES{CONT) 
They're surrendering to a news crew.  You
believe that?

Jaeger tosses his hands in the air in defeat. 

JAEGER 
That's it.  It's over.  Eighteen hours
into the war and it's over. 

WES 
Those soldiers have got loafers on.  What
kind of army gives their soldiers loafers?

EPPS
A casual one.

WES 
Damn, this is sweet.  We are going to be
home in no time. 

EPPS 
Better grab up some sand to take home to
your family.

Jaeger bites at his lip.  He wants to say something, but 
isn't quite sure how, if he should, if...  Fuck that, Jaeger.
Just say it. 

JAEGER 
We...we could go home with something
else. 

WES
What? 

JAEGER 
With...with millions.  Millions of
dollars. 

EPPS 
What are you talking about?

Jaeger pulls out the drawing from the puzzle box.

EPPS(CONT) 
Don't even.  You're not going to show me
that tired map. 

JAEGER
Wait.  Wait. 

Jaeger starts to tear at his pockets like he's trying to get
at a bee.  He pulls out his other maps, recon photos...  The
guy's a walking atlas.

Epps looks on in shock at the spectacle. 

EPPS 
I think you've got some issues to deal
with.  Really, when we get out of here 
I'm pretty sure it's shrink time for you. 

JAEGER 
Just listen to me!  I've been doing some
reading.  In the Sixteenth century this
region was invaded by the Turks.  It 
became part of the Ottoman empire.  When
the Turks rolled in they raped, they 
pillaged, the usual stuff.  Anybody who 
had anything wanted to hide it from these
bastards.  They buried their treasures,
drew maps, and hid the maps in puzzle 
boxes.  I read about this, man.  I read
about it. 

EPPS 
(Sarcastic) 
Wellllll, if you read it it must be true.
Was it in the Star, or the Enquirer? 

JAEGER 
Christ!  Wes, tell him.  You know this
stuff. 

WES 
The Turks invaded, yeah. I guess people
would have hidden what they had.  But 
that doesn't mean what was in that box
is-- 

Jager holds up the puzzle box drawing to one of the maps.

JAEGER 
Looks at this!  Look at it!  The drawing
is a map of this area right here.  You
can see it.  The geography, the
landmarks.  It's the same area. 

Epps grabs the map from Jaeger.

EPPS 
And you know what that area is?  It's
Iraq.  IRAQ!  We're doing a little thing 
with them right now; Desert Storm.  Maybe
you've read about it. 

JAEGER 
What we're doing is kicking ass.  For 
God's sake they got Iraqis surrendering
to news crews.  The war is over.  We've
just got to keep shooting people 'cause 
the army spent all this money, and we've
got to put on a show for the taxpayers. 

WES 
You're not saying what I think you're
saying.  I can't believe you're even
thinking it. 

JAEGER 
It's right here.  This region; an-Nagaf.
I got recon photos.  There're no troops
there, no fighting-- 

WES 
You don't know where the Iraqis have 
moved to.  And our forces haven't even
engaged the Republican Guard yet, we 
don't know--

JAEGER 
It's about a hundred miles from where we
are now.  How long do you think it would
take us to-- 

WES 
It's not a hundred miles.  It's a hundred
miles through three different kinds of 
terrain:  Pure desert, mountains, a
river.  If the map is even real. 

JAEGER 
It's real.  I'm telling you, it's real. 

WES 
So you just want to cross into hostile 
territory in the middle of a war on a 
wild goose chase?  It's crazy.  Tell him
it's crazy, Epps. 

Epps thinks.  He doesn't say nuthin', just thinks.  It's the
thinking that makes Wes nervous.

WES(CONT)
Epps, tell him. 

Epps gets a little more thinking in.  Wes sees which way this
is going. 

WES 
You're out of your minds, you know that?
Both of you.  You don't even know if 
there's anything out there.  What the
hell are you thinking? 

EPPS 
I'm thinking about when this war is over.
Why you figure I'm here?  'Cause I got
tired of being president of GM?  If a
brother doesn't play ball, or deal drugs 
there aren't too many big money prospects
around, and I'm not particularly 
interested in spending the rest of my 
life fighting the oil companies' wars.
So I say if maybe there's something out 
there, what the hell, that's what I say. 

Wes can't believe what he's hearing.  He pulls out the last
card he has to play. 

WES 
It's desertion.

Jaeger sweeps a hand across the great nothingness.

JAEGER 
Deserting what?  What the hell are we
deserting? 

Both Jaeger and Epps close on Wes for the hard sell. 

EPPS 
It's war.  People get lost all the time
in war, cut off--

JAEGER 
We disappear for awhile.  We disappear,
we came back; nobody knows nothing. 

EPPS 
But we all got to be in for this.  We all
go, or we do nothing. 

WES 
Epps, you're smarter than this.  Jaeger I
understand, but you're smarter. 

JAEGER 
You know it's real.  You know it's real,
and you know it's there.  You know it. 

WES 
You're insane if you think you'll find
anything, and sure insane if you think
you can get us there and back alive. 

EPPS 
If you say that, then I say you don't 
know Second Lieutenant Epps very well, do
you? 

Wes buries his head in his hands.  He squeezes at it hard 
like he'd rather make his brains ooze out his ears than say
what he's going to say. 

WES 
God!  I don't believe I'm doing this.  I
don't. 

JAEGER
Yes! 

EPPS 
It's going to be cool, Wes.  It's all all
right.

JAEGER 
We go, we get rich, we go home.  It's
that easy. 

Jaeger and Epps start to pack up.  To no one in particular,
and not too convincingly Wes mutters. 

WES 
Yeah.  That easy. 

                            CUT TO:

EXT. DESERT - LATER 

To strains of Hendrix's Wait Until Tomorrow the Humvee cuts 
across the desert kicking up plumes of loose sand.  It looks
more a dune buggy out for a joy ride than a military vehicle. 

                            CUT TO:

I/E. HUMVEE - SIMULTANEOUS 

Epps drives, Jaeger rides shotgun, relaxed, feet up on the 
dash.  Wes is in back with a "what the fuck did I get myself
into look on his face."  The Hendrix comes from a Walkman 
hooked up to a pair of small speakers.  Basically these guys 
are just kicking it.  War?  What war?  Our boys are just on a
beer run.  Maybe this wasn't such a bad idea after all. 

EPPS 
Now this is war. 

JAEGER
Roger that. 

WES 
We're going to get court martialed, you
know that. 

JAEGER 
Hell, we'll just buy our way out. 

Epps picks up a map and gives it a read.  To Jaeger he says:

EPPS 
Hand me the navicom.

Jaeger hands Epps a piece of electronic hardware no bigger
than a video box.  It's a navigational computer which can
pinpoint its location, by satellite, within meters. 
Basically the ultimate compass.  Epps compares the navicom's
readout with the map. 

EPPS(CONT)
Hold on boys and girls...hold on... 

Epps watches the navicom...watches it... 

EPPS(CONT)
Yeah!  Welcome to beautiful Iraq.  Land
of enchantment and riches.

WES
Oh, God. 

JAEGER 
You're such a pussy, you know that?
How'd you get in the army? 

EPPS 
Cool it, Jaeger.  Hey, Wes?  Wes? 

WES
What? 

EPPS 
I know you think this is crazy, but a 
couple of hours from now you're going to
be one rich dude trying to buy up every
other puzzle box out there. 

WES 
I'd settle for being alive.  Really.
Alive would be fine. 

JAEGER 
Epps, is that a sand dune. 

WES 
Oh, no. 

EPPS 
Why, yes, Jaeger.  I believe it is. 

WES 
No, please, not again. 

Epps punches the accelerator and the Humvee jumps forward
like a horse out of the gate. 

                            CUT TO:

EXT. HUMVEE - SIMULTANEOUS 

The Humvee hits the dune and takes to the air.  As it arcs up
and over the desert we hear.

WES(VO)
Nooooooooo! 

As gravity takes hold and brings the Hummer back to earth we:

                           FADE TO:

EXT. HUMVEE - LATER 

Epps is still taking it for a joy ride.  Wes is still getting
sick. 

WES(VO) 
Came on, I'm serious.  Knock it off. 

                           FADE TO:

EXT. DESERT - LATER 

The Hummer hits yet another dune and takes flight. 

WES(VO) 
This isn't funny, all right?  I mean it. 

                            CUT TO:

I/E. HUMVEE - SIMULTANEOUS 

The occupants jostle as the Hummer touches down.  Epps and
Jaeger laugh and high five.  Wes is content just to go on
looking sick. 

JAEGER
Hey, Wes, what kind of treasure you
figure these people buried? 

WES 
If!  If there's a treasure. 

JAEGER 
Yeah.  If.  Whatever.  What kind you
figure it is? 

WES 
I don't know.  It would be small, easy to
transport and hide.  Gold or jewels.
Probably gold.

JAEGER 
Yeah!  Gold!  How much? 

WES 
How the hell should I know how much? 

EPPS 
But that's the great thing about Gold.  A
little goes a long way. 

JAEGER 
You know what I'm doing with my part of 
the gold? 

WES 
If there's gold.  If!

JAEGER 
You know what I'm doing with my half? 

Epps turns to Jaeger.  There's just the slightest, slightest
hint of edge brushed across his tone.

EPPS 
Third.  What you're going to do with your
third. 

JAEGER 
Yeah.  I meant... You know what I'm going
to do with it?  I'm going to buy a Sixty-
three 'Vette Stingray.  All tricked out
and cherry.  I'm going to be so sweet. 

EPPS 
A car?  You're going to buy a car? 

WES 
This is too much.  You don't even have
the money and you're wasting it. 

JAEGER 
A car is not just a car where I come 
from.  I had this friend, had this wicked
candy apple red Sixty-four and a half
Mustang-- 

EPPS 
You're getting gold, and you're going to 
blow it on wheels? 

JAEGER 
What are you going to do with your third? 

EPPS
Invest it. 

JAEGER
Oh, that's fun. 

EPPS 
It's not about being fun.  It's about 
being smart.  You take that money, you
take care of it, let it grow, and you 
don't ever have to do anything again. 
Ever.  That's freedom.  That's what I'm
talking about.

JAEGER 
And I'm talking about enjoying myself.

EPPS 
You know, you sound just like a boy who's
never-- 

WES
What's that? 

Jaeger and Epps look out the front windshield.  A plume of
sand rises up from the desert several hundred meters before
them.  So engrossed in their discussion previously they
hadn't even noticed until Wes pointed it out. 

Epps reaches over and kills the tape player.  A loud quiet
comes with it.  All three men just stare at the plume as it
drifts closer.  Finally: 

EPPS 
Take the binoculars.

JAEGER
Wh-what do you think--

EPPS
TAKE THE GODDAMN BINOCULARS!

Jaeger scrambles up the binoculars, and stares off into the
distance.  Epps and Wes wait...they wait... 

JAEGER 
Iraqis. 

WES
Oh, God! 

JAEGER 
Two vehicles.  They're not supposed to be
here. 

WES
Oh, Jesus! 

JAEGER 
They're not...I had the pictures.
They're not supposed to be here! 

EPPS 
Shut up!  Both of you shut the hell up! 

JAEGER 
We've got to do something.  We've got to
turn around.

EPPS 
We can see them, they can see us.  We
run, they chase.

WES
What are we going to do? 

Epps thinks.  Thinking's not good enough for Wes.

WES(CONT) 
What are we going to do!? 

EPPS 
We're going to keep driving. 

JAEGER
They'll shoot us! 

EPPS 
We run they'll shoot us anyway.  If we
keep driving they might think we 
friendlies; Iraqis.  Or even if they know
we're Americans they might get scared, 
think we're part of a detachment and keep
on going. 

JAEGER 
They're not going to-- 

EPPS 
It's the only way.  We drive!

Epps is right.  Jaeger and Wes know it.  They shut up and 
ride.  Dig that tension:  Wes sweating, Epps giving the wheel
a white knuckle grip.  Jaeger reaches down and readies his M-
16.  When he chambers it, it sounds like thunder cracking. 

The plume draws closer and closer until it's not just a 
plume, but two dots.  Then it's two jeep-like vehicles.  Next
we can even make out the passengers.

That doesn't do much to relax our boys.

Us, the Iraqis, we're almost on top of each other now.  The
vehicles are going to pass within feet.  Epps throws in one
more thing:

EPPS 
Wave at them.  Don't look, just wave.

All three throw up some weak, forced waves.  THE VEHICLES
PASS.  Look at that:  The Iraqis are waving back.  And that's 
all they're doing, just waving.

Our boys break out into cheers. 

JAEGER
Yeah!  Yeah! 

WES
I think I'm going to throw up.  I am.
I'm going to toss. 

JAEGER 
You see that?  Right by us.  They went 
right by.  You had them Epps; you called
it. 

EPPS 
Figure they don't want to mess with us 
anymore than we want to mess with them. 

JAEGER 
Look at you, not even breaking a sweat.
You're cool, boy.  You're cool. 

They all have a good laugh, but Wes brings that to a crashing
halt.  Looking back at the Iraqis, in a voice dead with fear: 

WES
They stopped. 

EPPS
Wha... 

WES 
Oh, Jesus, they've stopped. 

Epps and Jaeger look behind them.

WES(CONT) 
They stopped, and they've turned around. 

The two Iraqi vehicles have stopped, they've turned, and now
they're racing towards our boys.  Epps momentarily freezes.
Jaeger helps him right out of it. 

JAEGER 
Go, go, go! 

Epps punches it, and the Hummer takes off.  The Iraqis are
right behind them. 

The vehicles all do same hard driving:  They twist and turn
like wild snakes over the loose sand; hit dunes, take 
flight... It's the open desert, and our boys have nowhere to
hide. 

Inside the Hummer it's a rough, rough ride.  Our boys are
thrown violently about the cabin.  For Epps controlling the
Hummer is about as easy as riding a wild horse. 

The Iraqis turn things up a notch and start sending gunfire
our way.  Bullets kick up around the Hummer like angry, 
little bees with a hell of a sting.  Epps yells at Jaeger. 

EPPS
Shoot them! 

Now it's Jaeger who's freezes.  Epps returns the favor.

EPPS(CONT)
Shoot 'em! 

Jaeger climbs back to the Humvee's machine gun, works the
action and starts firing.  Unlike before when he was playing,
the real thing is much wilder.  The Humvee bounces around 
like a cork in the ocean.  Taking aim is nearly impossible.
The best Jaeger can do is squeeze off rounds in the Iraqis'
general direction. 

All Wes can do is cover his head, and stay down like a scared
little girl. 

JAEGER
Steady it out! 

EPPS 
I steady it out, they blow us out of the
sand! 

It's like a dog fight in the dirt.  The vehicles weave,
cut... One of the Iraqis starts to cut across Jaeger's firing
line.  Jaeger swings the machine gun around hard and lets
loose.  A hail of bullets rips into the Iraqi vehicle just
above wheel level.  It kicks the vehicle up and back, 
whipping and twisting it horribly in the air time after time,
then smashing it back into the ground. 

Jaeger is beside himself.

JAEGER 
I got him!  You see that, I nailed him! 

As if in answer the remaining Iraqi vehicle's gunner tears
off a salvo that eats up the space right around Jaeger.  He's
not hit, but it kicks him back down into the Humvee screaming
with fear. 

EPPS
Damn it!

The boys are running out of options, and Epps knows it. 

EPPS(CONT)
Wes, take the wheel. 

No good. Wes is too scared to move.  Epps reaches back and
literally pulls him up and over into the front. 

EPPS(CONT)
Take it! 

With little finesse Wes takes the wheel as Epps slides over.
Epps takes up an M-16 with a grenade launcher.  He loads it
up, and readies the weapon.  Crawling to the back he takes
aim. 

EPPS(CONT)
Keep it steady. 

Wes does his best to give a level ride, but the Iraqi bullets
coming at them don't help much. 

Epps zeroes in on the target.  He takes aim and starts to
squeeze back on the trigger.  He almost has a shot off when
Wes hits a dune rocking the Hummer violently.  Epps loses the
target. 

EPPS(CONT)
Damn it!  I said keep it steady. 

Epps tries to take aim again.  Careful aim.  One shot is all
he gets.  The bullets keep coming, but he's in no hurry.
Waiting...waiting...  The Iraqis are only getting closer. 

WES
Shoot...shoot! 

Waiting...

Closer... 

WES
SHOOT! 

EPPS FIRES!  The grenade rips from the launcher, riding a 
trail of white smoke, and slams into the Iraqis.  You know 
the story:  Huge explosion, car parts flying a hundred feet
into the air, bodies whipping through space, stuff Bob Dole
would hate.  But maybe he would like it.  They were just
Iraqis.

Wes brings the Hummer to a halt.  A spastic, scared, relieved 
laugh escapes him.  Jaeger, checking himself for wounds, and
Epps, M-16 still in hand, get out.  Epps makes his way to the
wreckage, sweeping it with his rifle ready to blast any
survivors.  Yeah, like somebody's walking away from that
bang. 

Wes finally makes his way over to the others who stand and
stare at the burning hulk of whatever it was.

WES
I thought we were dead. 

JAEGER 
Yeah, well, we're not. 

WES 
We got to get out of here. 

Nobody says anything.  This really scares Wes.

WES(CONT)
We have to go back. 

JAEGER 
We're not going anywhere.  Not 'til we
get what we came for. 

WES 
(Incredulous) 
We just about got killed.  You know what
happened?  We just about got killed, and 
you want to go on? 

EPPS 
Jaeger, go check out the Hummer for
damage.

Jaeger starts to cross back to the Hummer.  Wes gives him
something to take with him. 

WES 
You're crazy, you know that?  You're
insane! 

Jaeger goes leaving Epps and Wes all by their lonesome.  Wes
turns to Epps.

WES(CONT) 
You know that, right?  You know he's
sick? 

With a flip of his head Epps indicates the dead Iraqis.

EPPS 
They shouldn't have been here.

WES 
We shouldn't have been here, Epps.  There
is a war going on! 

EPPS 
This is miles from the battle lines.
They were probably deserters. 

WES 
Deserters would have run, they wouldn't
have engaged. 

EPPS 
They shouldn't have been out this way,
that's all I'm saying. 

Wes starts to get it.  It really doesn't matter what he has
to say. 

WES 
We're not going back, are we? 

Epps has got nothing to say to the truth.  He turns and
starts to walk to the Hummer.

WES(CONT) 
You bastard!  You're trying to get us
killed. 

Like a whip Epps snaps around.  He grabs up Wes and pulls him
close. 

EPPS 
I'm trying to get us paid.  I'm trying to
get us all paid!  As long as there's a 
chance something is out there we go on.
There's not going to be anymore trouble.
If there is, we go back, but there won't
be. 

Almost as an afterthought Epps realizes he's got Wes, and
lets him go.  Gently he puts it: 

EPPS(CONT) 
You'll feel different after we find the
treasure.  Money has away of making
people feel different. 

Nobody's got anytbing to say to that, so they say nothing.
Epps heads back to the Hummer.  A beat later Wes follows.

Jaeger is already behind the wheel.  Epps rides shotgun this
time.  Once again Wes is in back.  To Jaeger, Epps ask: 

EPPS
She okay? 

JAEGER 
Yeah.  Yeah, she's fine. 

EPPS
Let's go.

Jaeger fires it up, and pulls out.  As they head off we: 

                           FADE TO:

BLACK

                           FADE TO:

I/E. HUMVEE - LATER 

The sun beats down violently as the Hummer rolls along.
Epps, Jaeger and Wes all ride along in an angry silence.
Jaeger starts to smile.  He chuckles to himself.  Epps, 
looking for anything to break the tension smiles a bit 
himself. 

EPPS
What? 

JAEGER 
I'm just thinking, you know, if the rest
of the boys knew what we're doing.  I
mean if they knew what we were coming
back with. 

EPPS 
You can't tell anybody about this. 

JAEGER 
I know.  I know.  But I'm saying, if they
knew.  We're going to be millionaires,
man.  Millionaires! 

Epps joins in cackling like a Hyena. 

EPPS 
It'd make their heads explode.

JAEGER 
Millionaires, man. 

He turns back to Wes.

JAEGER(CONT} 
You know we're going to be rich.  Admit
it.  You know.  Come on, admit it. 

In spite of himself Wes gives a little smile.

JAEGER(CONT) 
Ahh, there it is.  There it is.  You know
it. 

Singing to Levert: 

EPPS 
Money, money, money, money...MONEY. 

Jaeger joins in. 

EPPS/JAEGER 
Money, money, money, money...MONEY. 

Epps starts to slow down. 

WES 
What are you doing.

EPPS 
Low on gas.  Got to refill. 

A nervous look punches it way onto Jaeger's face.  Epps
stops.  He and Wes jump out of the Hummer and go around back 
to the reserve tanks.

Jaeger stays in the vehicle looking all tense.  After a beat
Epps screams for him. 

EPPS(O.C.)
Jaeger...JAEGER! 

Time to face the music.  Jaeger hauls himself out of the 
Hummer and goes around to Epps who's got a look on his face
like he's just had a spoonful of steaming shit.  He points
angrily at one of the reserve tanks. 

EPPS 
Look at it.  LOOK AT IT!  Shot to hell.
It's been leaking gas since the fire 
fight.  I told you to check for damage. 

JAEGER
...I know. 

EPPS 
And you missed this?  How are you going
to miss something like this? 

JAEGER 
I didn't miss it.  I figured if you knew 
one of the reserves got hit you'd want to
turn back. 

WES 
So, you just let us drive on knowing we 
were losing fuel?  Knowing we were going
to run low in the middle of nowhere? 

JAEGER 
...I figured...I figured you'd turn back. 

Wes gets a slow boil on. 

WES 
...You stupid son of a bitch. 

Wes lunges for Jaeger, but doesn't have the speed or the
skills.  Jaeger counters, and sinks a fist into Wes' jaw. 
Wes goes down, but he manages to take Jaeger to the sand with
him.  They start to scrape, but it's obvious Jaeger has got
the upper hand.

Epps reaches down and yanks Jaeger off of Wes.

EPPS
Get off him. 

Jaeger comes up to his feet.  Wes wipes some blood from his 
lips.  He looks down at his bloodied hand, then sneers at
Jaeger. 

EPPS(CONT) 
You two fighting's not going to get us 
anything.

WES 
Him getting us stranded out here doesn't
do much good either.

JAEGER 
We're not stranded.  We've got enough gas
in the other reserve to get us back.

WES 
Then lets go back while we still can.

JAEGER 
As soon as we hit the mountain we would 
have had to go on foot anyway.  We're not
that far.  We can make it. 

EPPS 
What do we do with the Humvee?

JAEGER
We leave it. 

WES 
What if someone takes it? 

Jaeger throws his arms wide to the empty desert.

JAEGER
Who?  Who's going to take it.  We mark
the location with the navicom, we can
come right back to this spot. 

Wes has had enough. 

WES 
You two don't even know how crazy you 
are.  You want to go on your sick, little
treasure hunt then go ahead, but mark me
absent. 

JAEGER 
You have to go with us, Wes. 

WES 
Really?  What is that, an order, private? 

JAEGER 
You have to go with us.  You can't walk
back... 

Jaeger dangles the keys to the Humvee from a finger.

JAEGER{CONT) 
And you sure as hell aren't going to
drive. 

Wes burns a hole through Jaeger's head with his eyes.  Epps
steps to him.

EPPS 
Load what you can; water, tools, weapons.
Anything you think we might need. 

Wes burns on a bit more, then turns and heads for the Hummer.
Jaeger watches him go, then smiles to himself.

JAEGER
Who's he kidding?  He wants it as bad as
we do.  We're going to be fat, Epps.  As
soon as we get back to Saudivillie you
and me are going to-- 

Epps gets up in Jaeger's face.  The menace he projects is
very real. 

EPPS 
We're going to keep going 'cause I want
some of whatever's out there.  But you 
ever pull something like trying to get my
ass stranded out here again, and I'll
kill you myself.  You got that? 

Jaeger just stands there, his fear swelling. 

EPPS(CONT)
SAY IT! 

JAEGER
I got that...sir. 

Epps storms over towards the Hummer leaving Jaeger to be all
scared with himself. 

                            CUT TO:

EXT. DESERT - LATER 

A long line of footprints works their way through the sand up
to Epps, Jaeger, and Wes.  Epps and Wes trek side by side.

Jaeger is behind them, having trouble keeping up.  Between
pants he gasps:

JAEGER 
Hey...hey!  Slow up.  You don't have to
go so fast. 

EPPS 
Faster we get there, faster we get back. 

JAEGER 
Yeah.  I know.  I'm with you. 

Jaeger struggles on just a bit more, then:

JAEGER(CONT) 
I'm gonna...I'm just gonna stop for a
little water. 

EPPS 
Don't drink up all of yours, 'cause you
aren't getting any of ours.

JAEGER 
I'm just going to have a little sip,
that's all.  Just a sip. 

Jaeger lets himself drop down into the sand.  He looks up.
Epps and Wes are still walking. 

JAGER{CONT)
Wait for me! 

EPPS
You can catch up. 

JAEGER 
Yeah...I'm right behind you. 

Wes looks back at Jaeger sitting on the ground sucking on his
water. 

WES 
Thanks for straightening out Jaeger.

Epps shrugs, like hitting Jaeger wasn't much of anything.

EPPS 
Maybe we are crazy for doing this.  But
if we do it, we do it right.  I just
needed to explain that in a way I
wouldn't have to do it again. 

WES
Not much chance of that.  Jaeger's an
idiot. 

EPPS
He's not so-- 

WES 
He's an idiot, and he's not nearly as
hard as he thinks.

EPPS 
How tough you have to be to make the 
army?  All you've got to do is shoot a
gun, and stop a bullet.

Again Epps looks behind him as Jaeger struggles to his feet
and stumbles after his two comrades.

WES 
Look at him.  We ought to just leave him
behind. 

Epps gives a little laugh like he's just heard a mildly
amusing punchline.

WES(CONT) 
Like he said:  People get lost in wars
all the time.  And out here?  Out here
there are eight million ways to die. 

All this talk starts to creep out Epps a little. 

EPPS 
Okay, so he was riding you.  Get over it.

Wes smiles a little smile. 

WES
I'm just talking. 

They walk on.

Jaeger works to catch up, muttering to himself as he goes.

JAEGER
Can't even slow up for me.  Wasn't for me
they wouldn't even be here.  I'm the one
that found the map.  Should have just 
come by myself.  Should've.  Shouldn't
even cut them in.  Shouldn't. 

As Jaeger steps down be hears an audible clicking sound come 
from under his boot.  He goes dead still.  Panic races up and
down his spine.  In almost a whisper be says:

JAEGER
Epps... 

Again, louder: 

JAEGER(CONT)
Epps! 

Like he couldn't be more annoyed Epps turns around.

EPPS
What!? 

JAEGER
Mine. 

Epps isn't sure of what he's heard. 

EPPS
What? 

JAEGER
Mine.  Land mine!

Epps doesn't say anything, he just keeps on staring.  Scared,
angry they don't get it: 

JAEGER(CONT) 
I stepped on a land mine!

Epps and Wes look at each other, then back to Jaeger.  Like
he's got no time to mess around: 

EPPS 
You didn't step on any mine. 

JAEGER
I heard it click. 

EPPS 
If you stepped on a mine you'd be dead by
now.  Nobody uses delayed-fuse mines
anymore. 

JAEGER
I heard it.

WES 
Maybe it's just a can, or something. 

Jaeger loses it. 

JAEGER 
JESUS CHRIST, I'M STANDING ON A MINE.
SHUT UP, AND GET OVER HERE! 

Just plain sick of all this, Epps and Wes trudge back over to Jaeger. 

EPPS 
Paranoid, that's your problem.  You're
just paranoid.  Why'd the paranoid one
have to find the map? 

Epps pulls a knife from his belt.  He sinks to the ground and
probes the sand under Jaeger's foot.  Nothing...nothing... 
WE HEAR THE SOUND OF METAL AGAINST METAL.  Epps goes white.
For a second he doesn't move.  Tension falls like a steel
curtain.  Slow, careful, Epps withdraws the blade and stands.
Jaeger reads the expression on Epps' face. 

JAEGER
Oh, God!  Oh God! 

EPPS
Just be cool. 

JAEGER 
It's a mine, isn't it? 

EPPS
Just relax. 

JAEGER 
How'm I gonna relax standing on a mine!? 

EPPS 
We're going to get off, all right.  We'll
get you off of there.  Just...be cool. 

Epps goes to Wes.  The two start to move away from Jaeger. 

JAEGER
Where you going? 

EPPS 
Me and Wes are just going to talk. 

JAEGER 
Why you got to move away to talk!? 

EPPS 
We're going to be right over here. 

JAEGER 
You're moving away because it's going to
blow up, isn't it!?  It's going to blow
up! 

EPPS 
I said be cool, all right?  Now be cool! 

Epps and Wes move over and huddle.

WES 
What kind of mine? 

EPPS 
I don't know, and I wasn't about to mess
with it. 

WES
Should have blown already.  Delayed fuse,
that's Vietnam stuff. 

EPPS 
Maybe that's all the Iraqis could afford,
okay?  Maybe they got it on discount. 
Maybe the fuse is messed up.  Or maybe 
it's going to go off in two seconds, and
we won't have to worry about getting 
Jaeger down off there, all we'll have to
worry about is finding the pieces. 

Behind them, pathetically, Jaeger cries: 

JAEGER
Epps... 

WES 
Doesn't matter.  We're not going to be
able to get him off it anyway. 

EPPS
There's a way. 

JAEGER
Epps...

WES 
Can't do it.  Can't do it, and keep him 
alive. 

Epps' eyes narrow.  He doesn't want to hear this kind of
talk. 

EPPS 
I said nobody dies.  Nobody dies.

JAEGER 
Epps, my leg is falling asleep. 

Epps thinks, and thinks hard.

EPPS
(To Wes) 
We've got rope? 

WES
For climbing.

EPPS
Break it out. 

Epps crosses back over to Jaeger.

JAEGER
My leg is falling asleep. 

EPPS
It's not falling asleep.  You've only
been standing there for three minutes. 

JAEGER 
I'm the one who can feel my leg, and it's
falling asleep. 

EPPS 
It falls asleep and you die, so wake it
the hell up. 

Wes crosses over with climbing rope.  Very, very gently Epps
wraps the middle of the rope around Jaeger's waist leaving
several feet dangling off each end. 

JAEGER 
How's this going to work? 

EPPS 
Me and Wes each going take an end of the 
rope, run our asses of, and yank you off
the mine. 

JAEGER 
That's going to do it, right?  I'm going
to be okay.

Not too convincingly: 

EPPS
You're going to be fine. 

JAEGER
You're not going to let me die, are you!?
Don't let me die! 

Ignoring the question:

EPPS 
When we start running suck up your 
breath.  You're going to get the wind
knocked out of you. 

JAEGER 
Don't let me die, Epps.  I don't want to
die. 

Epps and Wes pick up separate ends of the rope, and take up 
positions behind Jaeger.  Epps waits a beat, afraid of what
might happen, but there is no choice.  He digs in ready to
take off running.  Wes whispers to him:

WES 
What if it's a Valloro 69?  Just going to
bounce right up out of the ground, 
explode in the air, kill him and us. 

EPPS
You just go when I say go. 

WES 
Should have at least gotten the map off
of him.  Blows up with him then we did
all this for nothing. 

Ignoring him: 

EPPS
Ready? 

WES
Yeah. 

Epps takes a couple of deep breaths, holds one: 

EPPS
GO! 

Wes and Epps are off the the races, churning up sand as they
race away from Jaeger.  They scream like banshees as if to
draw strength.

Jaeger does a little chant: 

JAEGER 
Oh, God.  Oh, God! 

The rope goes taught.  Jaeger's body jerks violently backward
as he gets the air punched out of him.  As his feet leave the
ground the mine detonates.

                            CUT TO:

POV - JAEGER 

A fireball blossoms, and eats up the air towards the camera
as THE CAMERA ITSELF RUSHES AWAY from the belching fire and
smoke. 

                            CUT TO: 

JAEGER 

His feet just clear the outer edge of the fireball, but still
get licked and burned by flames before he slams to the ground
several feet from the explosion. 

Epps runs to Jaeger.  Wes takes a casual stroll back over. 

JAEGER 
I'm all right.  Oh, Jesus, I'm all right. 

All casual like, Wes says: 

WES
The map okay? 

                            CUT TO:

EXT. DESERT - LATER

We see a set of three very odd tracks across the ground.  It
looks like something has been dragged through the sand.  THE
CAMERA FOLLOWS THE TRACKS TO EPPS, WES AND JAEGER who crawl
on their bellies.  They thrust knifes into the sand before 
them searching for mines.  We get the feeling they've been at
this for awhile.

WES
How long we going to keep this up. 

JAEGER 
Until we're out of the mine field is how
long. 

WES 
Haven't found a mine for half a mile, or more.

JAEGER 
That don't mean nothing.  Iraqis could 
have just spread them out like that; make
us think we're in the clear. 

WES 
You want to crawl, crawl. 

Wes stands and starts to walk.  Epps waits a beat and follows
suit.  Only Jaeger stays down. 

JAEGER 
You're going to blow yourselves up. 

EPPS 
Wes is right.  If there were any more 
mines we would have found them.  Hell, 
that one you stepped on was probably old 
anyway; left over from the war with Iran.

JAEGER 
You don't know that.  It could be a trick. 

EPPS 
If we step on a mine we'll know it was.
Let me see the maps.

Jaeger stays down, afraid to get up. 

EPPS(CONT) 
Get up and give me the maps.

After a beat Jaeger stands and hands over the map from the
puzzle box and a recon photo.  Epps compares the two, then
takes out the navicom. 

EPPS(CONT)
We're on course.  Northeast, twenty-eight
degrees.  When we hit the base of the 
mountain we'll find a pass.  I can see it
on the recon photo.  Shouldn't be too 
hard to traverse.  That'll take us to the
top and... 

Epps points at a black dot on the puzzle box map with a
smaller white dot in the middle. 

EPPS 
This.  Whatever it is. 

JAEGER 
It's the treasure, that's what it is. 

WES
It better be. 

Epps starts to pack away the map.  Real plain Jaeger says:

JAEGER
The map. 

Epps stops, like he almost not sure what Jaeger is talking
about.  Jaeger extends a hand. 

JAEGER(CONT)
The map. 

Epps gets it.  He hands the map back to Jaeger who tucks it
away.  Our boys walk on. 

EPPS 
You're not losing trust, are you? 

JAEGER
Just figure it's my map, I ought to hang
on to it. 

WES 
If all we wanted was the map out of you
we could have taken it while you were
standing on that mine pissing on
yourself. 

JAEGER 
Probably would've too if Epps wasn't
around to stop you. 

EPPS 
I didn't have to stop anything, 'cause 
nobody was going to do nothing.  We're in
this together, understand? 

JAEGER 
Yeah, I understand.  Wes doesn't want to
come along in the first place, but he 
gets a third of the find.  That's a sweet
deal. 

WES 
I'm getting tired of you riding me,
Jaeger. 

JAEGER 
Anytime you want to do something about it
just let-- 

Epps stops dead in his tracks.

EPPS
Quiet! 

They all go quiet. Epps cocks an ear to the air and listens.
They all listen.  Wind, but that's about it. 

JAEGER 
I don't hear any-- 

EPPS 
Shut up and listen!

Again they listen.  Again they hear wind.  Then, there it is;
the sound Epps is looking for:  A pop, like a big balloon
being burst just over the next rise. 

WES
Gunfire. 

Quick like that Jaeger grabs his M-16 down off his shoulder
and is about to ready it when Epps slaps down the muzzle.

EPPS
Don't! 

JAEGER 
It's a fire fight. 

EPPS 
Single shots doesn't mean a fire fight.
That's not a battle going on. 

WES
What is it? 

Epps thinks.  Yeah, what the hell is it? 

                            CUT TO:

EXT. DESERT - RISE 

Epps, Jaeger, and Wes edge carefully up to the lip of the 
rise on their bellies.  They're barely visible against the
sand.  Epps takes out a pair of binoculars and zeros in on
the ground below. 

                            CUT TO:

POV - EPPS 

THROUGH BINOCULAR LENSES we see a SHI'ITE CAMP:  A tent city 
really.  There are several uniformed IRAQI SOLDIERS who are
roughing up the Shi'ite men.

                            CUT TO:

EPPS, WES, JAEGER 

JAEGER 
What is it? 

Epps hands the binoculars over to Jaeger.  Who looks down at
the scene on the ground.

EPPS 
Iraqis.  A bunch of them. 

JAEGER 
What are they doing here? 

Jaeger hands the binoculars to Wes.

EPPS 
Well, it's Iraq.  I'm not sure, but I'm
guessing that has something to do with
them being here.

JAEGER 
What are they doing in the middle of
nowhere? 

WES 
Maybe they're looking for gold. 

                            CUT TO:

POV - WES 

AGAIN WE SEE THROUGH THE BINOCULAR LENSES.  One of the Iraqi
soldiers is pushing around a Shi'ite, having a good laugh 
about it, then casual as rain pulls out a gun and gives him a
bullet, gift wrapped, straight to the brain. 

                            CUT TO:

EPPS, WES, JAEGER

JAEGER 
Jesus!  What the hell did he do that for?
They're Iraqis.  Why are Iraqis killing
Iraqis? 

WES 
Those people down there are Shi'ites.
You've got Shi'ites in the south of Iraq
and Khurds in the North.  Neither of
them've got much love for Saddam. 
Probably figured once the war started 
there might be an uprising, so he sent
his soldiers out to slap them around some. 

EPPS 
They're doing more than slapping.

JAEGER 
The Shi'ites are on our side?  I didn't
know that. 

WES 
Is there anything you do know? 

JAEGER 
I know you're a pussy.  I know that. 

EPPS 
All right.  Let's get out of here. 

WES 
The soldiers are going to kill those
people! 

JAEGER
So? 

WES
We have to do something. 

EPPS
There's nothing we can do.

WES 
We can fight.  That's what we're here 
for:  To fight the Iraqis.  To help the
Shi'ites, and the Khurds. 

JAGER 
I didn't sign up to help any Shi'ites.
All we were supposed to do is get the 
Iraqis out of Kuwait, and if we aren't
doing that then all bets are off. 

EPPS 
We carrying any ordinance? 

WES 
Some extra grenades.  A Claymore. 

Epps thinks, then shakes his head.

EPPS 
Not enough.  We're out numbered and out
gunned.  They'd cut us to shreds.

JAEGER 
So good bye, Shi'ites.  Thanks for 
playing.  We have some lovely parting
gifts for you as you go. 

WES 
We're American soldiers.  We don't
abandon people. 

JAEGER 
Funny you should say that while we're out
looking for gold. 

WES 
You're the one wanted to kill Iraqis so
bad. 

JAEGER 
I've got a new agenda now, it's get rich.
The only way the Iraqis figure into that
is not at all. 

EPPS
(To Wes) 
I don't want to see people killed any 
more than you.  But we try to help out we
die, and all we do is die. 

WES 
We can't just go off and-- 

EPPS 
There's nothing we can do.  We shouldn't
even be here in the first place. 

There's a big, loud quiet as our boys just hang there.  From
down below comes another balloon burst; another gun shot.

Epps lowers his head.  He wants to fight, but it's like he 
said:  There's nothing they can do.  Epps slides back away 
from the rise, then Jaeger, and finally Wes disappears back
the way they came.

                            CUT TO:

EXT. DESERT/MOUNTAINS - LATER 

It's the kind of red rock and mesas one would expect to find 
in a desert; not too steep or rough, but it looks as though
they will definitely takes more than a little physical
exertion to navigate. 

Epps, Wes, and Jaeger approach a path at the mesa's base.
Jaeger takes out his maps and looks them over.

JAEGER 
This is it.  We're right on target. 

Epps takes a long gander up towards the top of the mesa.

EPPS 
All we've got to do is make it to the
top.

WES 
And find the treasure, and get it, and 
get back to the Humvee, and get the hell
out of Iraqi without getting our heads
blown off, but that's about it. 

EPPS 
We're not going to find anything standing
here.  Let's get to climbing. 

They ready their packs and weapons, then start up the mesa.

                           FADE TO:

Our boys trekking along the pass.  They push onward and
upward.

                           FADE TO:

The pass has narrowed, and become more treacherous:  The
rocks are loose and the footing unsure.  The going has slowed
considerably as each man must be extremely careful of their
steps.

                           FADE TO: 

Our boys stop.  The pass has seemingly came to an end.  For a
short ways the face of the mesa is almost sheer.  The three
soldiers take it in. 

EPPS 
Not much of a pass.

WES 
Probably was a couple of hundred years
ago when whoever drew the map came 
through here.  Worn down to nothing now.

EPPS 
Picks up again just on the other side. 

They all take a good look at what little there is to cross 
on, and how far down it is to the hard, jagged rocks below. 

JAEGER 
Think we can make it? 

WES 
We make it, or we go back empty handed.

EPPS 
Looks like we make it. 

Epps and Wes edge their way towards what's left of the pass.
Jaeger just stands there staring down.  Way down.

                           FADE TO: 

Epps, Wes and Jaeger inch along the pass hugging the face of
the mesa.  Small rocks churn beneath their feet and tumble to
the ground below.  No man says a word, they're too busy 
trying to keep alive, and the air is filled with the sounds
of labored breathing.

Each step so very careful:  Testing the pass for purchase,
making sure the footing is solid.  They inch one foot
forward, then slide over the next.  Their hands probe the
cliff face, fingers crawling like spider legs, looking for
something, anything, to take hold of. 

Sweat drips into Epps eye.  He blinks hard and fast trying to
clear his vision.  Right now he can't really afford
distractions. 

Slowly, carefully, inch by inch the little death dance goes
on. 

Jaeger steps.  He steps wrong.  The pass gives way under his 
foot and begins to slide down.  Instinctively Wes rockets out
an arm grabbing Jaeger by the uniform.  At first Jaeger 
smiles, glad for the save.  But then he realizes something: 
Wes is literally holding his life in his hands.  All Wes has
to do is loosen his grip, and...

The color drains from Jaeger's face.  Wes stares back blank
as a bowl of water. 

Eternity goes on for a second. 

Finally Wes yanks Jaeger back up against the mesa's face,
then slides on.  Jaeger just hangs where he is for a beat
clutching the rocks for dear life.

                           FADE TO:

Epps makes it to the far side of the broken pass.  He holds
out a hand to Wes and reels him in.  Together they both help
bring in Jaeger.  Wes looks back over the path they've just
crossed. 

WES 
The US Army:  Always an adventure.

EPPS 
Let me see the map.

Jaeger hands the map to Epps who gives it a going over.  THEY
WALK AS THEY TALK.

EPPS(CONT) 
Should be easy going from here.  Stay on
the pass straight to the dot. 

WES 
What do you figure it to be? 

EPPS 
Got to be some kind of landmark;
something distinctive.

JAEGER
X marks the spot.

EPPS 
Something like that.

JAEGER 
But the white dot in the middle; that's
got to mean something.

EPPS 
I hope it means something, otherwise...

WES 
Otherwise whatever we're looking for
could be anywhere.

EPPS 
Basically.  But the map has been pretty
precise so far.  I don't think it'll be
too hard to-- 

Our boys step past a grouping of rocks.  They stop dead.
Sitting before them, in what looks like a small camp, is FIVE
IRAQI SOLDIERS.  Time clicks by real slow for an instant.
It's a delayed reaction, like the beat it takes after you
pick up a hot pan before you realize that, yeah, it is
burning the flesh from your hand. 

EPPS(CONT)
Take cover! 

Our three soldiers turn and bolt back the way they came.
They run like wild rabbits for a bit, jumping over a rock
formation and hitting the deck using the rocks as cover. 
Like well-trained warriors they peel their weapons from their
shoulders, lock and load, and stand ready.  They wait a bit,
taking several deep breaths like divers about to go under.
Finally Epps gives the order. 

EPPS(CONT)
Let's hit 'em! 

Simultaneously they spring up from behind the rocks and bear
down on the Iraqis with their M-16s ready to blow them to
kingdom come. 

One problem:  No Iraqis.

For a beat our three don't move.  They hold position, breath
coming hard like sprinters at the end of a race.  They're 
eyes flint back and forth scanning for something...anything.
There's nothing. 

EPPS(CONT)
Cover me. 

M-16 still at the ready, Epps raises up taking a tactical
stance.  He inches forward, sweeping his weapon back and 
forth before him for any potential target.  There is none.
The Iraqis have vanished.  Epps lowers the M-16, but does not
shoulder it. 

EPPS(CONT)
Clear. 

Wes and Jaeger come up from their cover and cross to Epps.
They keep their weapons ready.  Eerily they all look around
as if trying to spot ghosts.

WES 
Where'd they go? 

EPPS 
I don't know.  There's a lot of space up
here.  They could be just about-- 

WES 
Weird they didn't chase us.

JAEGER 
Maybe they're as scared of us as we are
of them. 

WES 
Just seems weird they didn't chase us.

EPPS 
What's weird is how they disappeared. 
Doesn't make sense.  Doesn't...

There is a sound; a steady swooshing that starts faint and 
grows closer like a rolling thunder.  Our three start looking
around, turning where they stand, trying to find the source
of the sound as it rises to a near deafening pitch.  There's
nothing.  They see nothing.  Still the sound races closer and
closer.  Epps, Jaeger and Wes raise up their weapons in
preparation to defend themselves against this unseen beast.

From below the edge of the mesa a HELICOPTER GUNSHIP -
probably a MIL MI-24 HIND-D ARMED ASSAULT HELICOPTER if you
want to be technical - raises up very dramatically into
sight.  It hangs in the air ominously before our soldiers.
On board are the vanished Iraqis wearing nasty grins.  The
PILOT brings the gunship about and levels her massive machine
cannons at our boys.

EPPS(CONT)
Scatter! 

Wes and Jaeger don't have to be told twice.  They bolt from
their spots, and not an instant too soon.  The GUNNER lets
fly a barrage of shells that literally tear up the ground
where our boys were just standing.  We see what the chopter's 
weapons will do to rock.  We can imagine what they would do
to flesh. 

Epps, Jaeger and Wes take cover behind some rocks.  The 
gunship swings around, picks up speed and bears down on them. 

More shells fired.  They punch into and through the rocks our
boys use for cover.  Again the three scatter, and just in
time as the shells rip their way through the rock.

Our three go sliding down an embankment, crouching low.
Their heads whip around looking for the gunship.

JAEGER 
Where is it?  Where'd it go? 

EPPS
Stay low. 

JAEGER 
Where the hell is it!? 

EPPS
Just stay down. 

In answer to Jaeger's question the gunship comes swooping up
behind them like a bird of prey.  Our three have all of about
a second to get running before the Iraqis send more shells
their way.  They kick up chunks of rock as they ping, ping, 
ping around Epps, Wes and Jaeger who make a wild, evasive
run.

Dig it:  Up ahead is a narrow passage through rock face.
They race for it, hurl themselves into it as the gunship
sends a special delivery of white-hot metal their way. 

Once inside the passage they have a bit of breathing space.
It's too narrow for the gunship to get a good shot through. 
Our three press themselves up against the rock walls and suck
air.

Beyond the opening to the passage the gunship swings back and
forth like a junkyard dog patrolling its kingdom. 

Jaeger's worked up a real scare. 

JAEGER 
What are we going to do?  What the hell
are we going to do? 

EPPS 
We're not going to do anything.

JAEGER
(Panicked) 
They're going to kill us!

EPPS
They can't shoot us in here.

WES 
And they can't fly around out there
forever.

EPPS
So we wait. 

JAEGER
If they land-- 

EPPS 
If they land, we can take them.  If they
don't land, then we've got nothing to
worry about. 

Wes watches the gunship as it seemingly settles in the air.
It floats very steady as if...  Wes' eyes key in on 
something:  The gunship's missile pods rotating slightly, 
coming in line... Wes' eyes go wide like someone just jammed
an electric cattle prod in his ass. 

WES
Missile! 

EPPS
Move! 

Epps, Wes and Jaeger sprint for the opening at the far end of
the passage as a missile rockets from the gunship's pod.
With a wild whine it rides the wind like a deadly arrow
straight into the passage.  Slamming into the ground it
sprouts a terrific fireball that rides on a massive 
explosion.  It races through the passage, lifts our boys from
the ground and tosses them out into the open like they were
nothing more than discarded ragdolls.

Jaeger takes cover and cowers.  He puts his panic into
overdrive. 

Wes pulls his rifle.  Grunting like an animal he sprays 
bullets at the chopter, but it's like throwing snowballs at
an elephant.  The gunship turns on Wes and fires in his 
direction.  It doesn't hit him, but it sends him running.

Epps has had enough of this shit.  He scrambles to load a 
grenade in his launcher as the gunship comes about.  It races 
for him, cannons at the ready.  This one is going to be 
close.  Epps locks and loads just as the chopter swings down 
on him.  Epps fires, but the gunship simply jukes up and away
from the grenade the way someone might step over a bug.  The
grenade impacts the rock face behind the chopter exploding
harmlessly.  The chopter returns the favor by reining down a
hail of shells that kicks Epps back FLIPPING HIM UP AND OVER
the edge of the plateau.  His M-16 goes flying, smashing into
the ground far below.  Epps manages to grab hold of the 
plateau lip with one hand.  It swings him around, slamming 
him hard against the cliff face.  He hangs there, suspended by
his weakening grip, far above the ground.

JAEGER
Epps! 

Jaeger and Wes run to him, grabbing him by his arm.  They
pull and pull hard until Epps can get some kind of purchase,
and crawl his way back up to the plateau.

At the same time the gunship lowers itself so that it hovers
above and beyond our three.  It rotates so that the bay doors
are facing Epps, Wes and Jaeger.  Three Iraqis are inside,
weapons trained on our targets.  One of them yells something.
Wes translates.

WES 
They want us to surrender.

The three share a nervous look.  Epps fairly growls:

EPPS 
Yeah, I'll surrender. 

Jaeger and Wes watch as, shielded by their bodies, Epps palms
a grenade from his belt.  Wes and Jaeger don't quite smile,
but they know now they at least have a chance.  As Epps
stands the other two turn to face the Iraqis.  They all fold
their hands behind their necks which, for Epps, hides the
grenade from view.  Slowly they walk towards the gunship.
One of the Iraqis starts to yell something.  He lifts his
weapon and aims it at our boys.  With his thumb Epps yanks 
the pin from the grenade and lets fly.  It's a perfect toss,
landing in the chopter's bay.  The Iraqis see the grenade 
land, they scramble for it.  One of them grabs it up and is
about to throw it back out of the gunship. 

Too late. 

The grenade explodes in the Iraqi's hand killing him
instantly.  It also touches off a fire ball that severely 
damages the gunship.  It rocks, lists, spins wildly out of
control. 

EPPS(CONT)
Get down!

Our three hug the ground as the chopter's rotors go whipping
through the air like throwing knifes landing perilously among
them.  Worse still the gunship, now a lame bird, drops from
the sky towards Epps, Jaeger and Wes.  All they can do is 
cover their heads, as if that would do any good against two
tons of crashing steel.  The chopter rushes down...down, but
it just misses them.  It slams into the ground skipping over
the edge of the plateau, to the rocks below. 

Our three pick themselves up.  They walk to the edge of the
plateau and look down on the crash. 

Jaeger, scared painted all over his face, sinks to his knees
and looks as if he's about to go into shock.

JAEGER
Oh, God... 

Wes looks down at Jaeger with a bit of a disdainful sneer. 

WES 
Yeah.  Just keeps getting better and
better, doesn't it? 

They stare for awhile, then one by one move off.  Us?  We:

                           FADE TO:

BLACK 

                           FADE TO:

EXT. DESERT/MESA - LATER 

Epps, Wes and Jaeger trek to a large crevice that runs 
straight down into the ground.  Jaeger takes out his maps and
photos.  Epps consults the navicom.

WES 
What do you think? 

JAEGER 
Lines up with the map and the photos.

EPPS 
We're right where we should be. 

Epps tucks the navicom away on his belt and takes a look
around.  Not much to see.

EPPS(CONT) 
I sure don't see much place else around
here to hide anything.

Wes pulls a lantern/flashlight from his pack.  Going to his
belly he shines it down into the crevice.

WES 
Can't see anything.

He tosses a rock into it.  We can hear it hit the ground below.

WES(CONT)
It's got a bottom. 

JAEGER 
Guess we know what the next stop is. 

EPPS 
All right.  Let's break out some utility 
shovels, lanterns, and a claymore in case
we have to do any blasting.  Me and 
Jaeger'll climb down, and see what we can
see. 

WES 
What am I supposed to do? 

EPPS 
Got to have someone here in case we need
help making it back up.  Doesn't hurt to
have a look out either. 

JAEGER 
Think there might be more Iraqis? 

EPPS 
Right now I wouldn't be surprised if 
Eartha Kitt showed up singing Send In The
Clowns. 

                            CUT TO: 

WE SEE A FEW QUICK SHOTS of Wes securing a line down into the
crevice, Epps and Jaeger clipping on rapeling harnesses, the
two men lowering themselves down into the great unknown.

                            CUT TO: 

INT. CREVICES - CONTINUOUS 

The lantern punches a hole through the darkness as Epps uses
it like a machete to blaze a trial.  He sinks down...down 
until finally they touch bottom.  He unclips himself from the
rope and Jaeger starts down.

The space isn't that big, like a small cave really.  It's 
tight enough that the lantern pretty well lights up the whole
of it.  But it's big enough that one wouldn't have any idea
where to start digging. 

Jaeger makes it to the bottom.  Wes yells down. 

WES
You down? 

JAEGER
Yeah, we're down. 

WES 
What do you see? 

EPPS
Nothing. 

More to himself:

EPPS(CONT) 
A whole lot of nothing. 

JAEGER 
So where do we start? 

Epps takes a look around, then shrugs.

EPPS 
Wherever you want. 

Epps breaks out his utility shovel from his pack.  Jaeger
follows suit.  He looks around, picks a spot and starts
digging. 

                           FADE TO:

WES - LATER

He sits up top, weapon in hand, standing guard.

                           FADE TO: 

EPPS AND JAEGER - LATER

They dig furiously at sperate ends of the cave.  They dig
with a determination to find something. 

                           FADE TO:

WES - LATER 

Still up top, he's given up on standing guard.  Now he
stretches out on the ground sunning himself.

                           FADE TO:

EPPS AND JAEGER 

Their shirts are off, and they're caked with sweat and dirt. 
They look like they've been digging for quite some time. 

They certainly don't have the same enthusiasm they displayed
previously.  Now they just seem to dig by rote. 

                           FADE TO:

WES - LATER 

The sun has begun to sink noticeably.  Wes leans over the 
crevice. 

WES 
Hey...Hey!  Sun's going down.  Epps!
Jaeger!  It's getting dark up here. 

                            CUT TO:

EPPS AND JAEGER - SIMULTANEOUS 

It's obvious these guys have been digging for hours and come 
up with nothing.  Epps keeps digging, but just barely. 
Jaeger doesn't even bother anymore.  He just sits on the
ground sulking.

WES(O.C.)
Epps! 

EPPS
I heard! 

                            CUT TO:

WES 

He rolls over and scoffs.

WES
There's nothing down there.

                            CUT TO: 

EPPS AND JAEGER

Epps notices Jaeger just sitting there.

EPPS
What are you doing? 

JAEGER 
What does it look like I'm doing? 

EPPS 
It looks like you're not doing anything. 

JAEGER 
I'm not.  And I'm not doing anything,
because there's nothing down here. 

EPPS
Get up and dig.

JAEGER 
We've been digging.  We've been digging
for hours.  If there was anything here to
find we would have found it. 

EPPS 
Get up off your ass and dig! 

Sounding defeated as all hell, and very whiney:

JAEGER 
What's the point?  There's nothing here.
The map's a fake.  Christ, even I see 
that now.  We're just wasting our time.
We might as well give up and-- 

Epps spins.  Like a bolt of lightning he's on Jaeger,
grabbing him up and pulling him close. 

EPPS 
You listen to me.  The whole reason we're
here is because of you and that map of 
yours.  I didn't do all this for nothing,
and I'm not leaving with nothing.  If you
think for a second I'm giving up just 
'cause you're too tired to turn over some
dirt, then you don't know John Epps too 
well, do you?  So you dig, and you keep
on digging 'til I say you don't have to
dig anymore.

Epps pushes Jaeger back and he goes down to the ground hard.
A fire burns inside him.  A fire that burns out of control.
Before he even knows what he's doing Jaeger springs to his
feet, shovel in hand, bringing it down in a long arc for
Epps' head.

Epps bears him coming.  He deftly side steps the blow, grabs
hold of Jaeger and forces him down.  They roll around
violently like wild dogs trading blows and trying to work the
other into a choke hold. 

                            CUT TO:

WES 

He can hear the sounds of the struggle and yells down.

WES
What are you doing...?  What the hell are
you doing down there? 

                            CUT TO:

EPPS AND JAEGER 

They fight on; down and dirty.  Locked together they roll
around the ground, each trying to get the upper hand.  They
smash into the lantern, sending the cave into near darkness.
At the same time Epps works himself on top of Jaeger.  He
lands a couple of solid punches, takes a rock from the ground 
and lifts it high ready to send it crashing into Jaeger's
skull.  All Jaeger can do is steel himself for the deathblow. 

Something catches Epps' eye:  A glint of light flashes across
his faces.  He stares at it; at an opening, a bare seem
really, in the side of the cave wall where light seeps 
through.  The rock slips from his hand.  Forgetting all about
Jaeger Epps goes to the opening.  Jaeger himself, as if what
just happened hadn't really happened, comes up along side
Epps.

JAEGER 
Must be a compartment. 

EPPS 
I feel air.  Probably opens up outside 
somewhere.  That's where the light comes 
from.  Couldn't see it with the lanternon. 

Jaeger says what they both must have guessed by now. 

JAEGER 
The white dot; light in the dark. 

That's all Epps needs to hear.  He starts clawing at the
opening with his bare hands.  That gets him nothing. 
Grabbing up a shovel he starts to whack at it.  Jaeger gets 
the lantern working again, then picks up his shovel and joins
in.  They keep hitting and hitting, picking up a rhythm like
a southern chain gang. 

JAEGER (CONT)
Maybe we should blast it loose with the
claymore. 

EPPS
It's giving. 

The rock gives way enough for Epps to pry it free.  There's
just enough space for a man to reach his arm through.  For a
beat Epps and Jaeger just stare at the opening almost afraid
of what mayor may not be in there.

With some trepidation Epps begins to move his hand towards 
the opening.  Slowly it extends closer...closer...  Just as
it moves beyond the opening. vThere is a wild, screeching 
hiss as some small, hairy thing leaps for Epps.

Both Epps and Jaeger recoil, Jaeger going nuts with fear. 

JAEGER
Jesus Christ! 

Jaeger grabs up his M-16 and takes aim at...whatever it is.

EPPS 
No, don't shoot! 

Too late. Jaeger squeezes off a few rounds.  A couple of
bullets hit the thing, but the rest ricochet wildly about the
cave and around Epps and Jaeger.  All the two men can do is
duck and cover - squeezing themselves into tight, fetal balls
- as the bullets scream back and forth like little chunks of
random death. 

Eventually the bullets lose speed and die off.  Jaeger and
Epps raise up off the ground.  They walk to the dead thing
that jumped from the opening.

EPPS 
It's just a mongoose. 

JAEGER
Is it dead? 

EPPS
Yeah, Bwana, you got it. 

                            CUT TO:

WES 

Yelling down 

WES 
What the hell are you doing!?

                            CUT TO:

EPPS AND JAEGER 

JAEGER 
I think we found something. 

They go back to the opening.  Epps shines a light inside to
make sure there are no more surprises, then reaches an arm
in.  Jaeger looks on with great anticipation, licking his
lips like a hungry jackal, as Epps twists his arm in the
opening.  Searching...searching... 

Epps' face freezes.  He goes perfectly still for a beat, then
slowly draws his hand from the opening.  It clutches a wooden
box.  It is similar to Jaeger's puzzle box, but slightly
bigger.  The instant Epps sets the box on the ground Jaeger
smashes his shovel into it shattering the ancient wood.  From
the splinters pours a river of gold coins.  Jaeger and Epps
are too stunned to do anything but look at it. 

                            CUT TO:

WES 

He leans over the crevice.

WES
What is it?  What'd you find? 

                            CUT TO: 

EPPS AND JAEGER 

Incredulous himself:

EPPS 
Gold.  It's gold.

Jaeger yells it at the top of his lungs:

JAEGER
IT'S GOLD! 

                            CUT TO:

WES 

His lips flutter a bit before they land on the word 

WES
Gold... 

                            CUT TO:

EPPS AND JAEGER 

They scoop up handfuls of the coins and let them run through
their fingers.

JAEGER 
It's not like I figured.  It's cold.  And
it's heavier than I imagined. 

EPPS 
I wouldn't know.  I never imagined this.
Not in my whole life did I ever imagine
this. 

JAEGER 
You don't have to imagine it.  Not 
anymore.  Now all you've got to think up 
is what it's going to buy you.

Epps grabs up one coin and stands.

EPPS
Wes! 

With all his strength Epps gives the coin an underhanded toss
straight up. 

                            CUT TO:

WES 

Wes catches the coin.  He turns it over in his fingers.  He
smiles, and there's nothing pleasant about it.

                            CUT TO:

JAEGER AND EPPS

Epps yells up. 

EPPS 
Wes, thrown down a pack.

A beat later an empty pack comes falling down.  Epps picks it
up and takes it over to Jaeger.  The two of them start
loading the coins into it. 

EPPS(CONT) 
I don't think the line will take the
weight of a man and the coins.
(Yelling up.) 
Wes!?  We'll send the gold up, then me
and Jaeger'll climb back.

WES(O.C.)
Ready when you are. 

Epps is just about to attach the pack of gold to the line
when Jaeger grabs his arm. 

JAEGER
Wait. 

EPPS
What? 

Jaeger isn't sure how to say what he's thinking. 

EPPS(CONT)
What? 

JAEGER 
We send the gold up what's to stop him 
from taking off and leaving us down here? 

EPPS 
He's not going to leave us. 

JAEGER 
What's to stop him if he wanted to?  All
he has to do is cut the line...

Good point.  What is to stop him? 

WES
You ready? 

EPPS
(To Jaeger) 
All right.  I'll go up, then you send up
the gold and-- 

JAEGER 
Why do I have to stay down here? 

EPPS
Jesus, Jaeger. 

JAEGER 
I don't see how that plan's any better.

EPPS 
Someone's got to send the gold up.  It
can't get on the line by itself. 

JAGER 
Why's it got to be me? 

A tense moment passes.

WES
What are you doing?  You ready? 

Another moment, then:

EPPS 
All right.  You go up, I'll send up the
gold, then follow. 

JAEGER 
Yeah.  Yeah, that'll work. 

Jaeger goes over to the line and hooks himself on.  He's just
about ready to climb up when Epps stops him.  Serious as a
heart attack he says:

EPPS 
If you're even thinking about leaving me
down here, you better think again. 

Jaeger stares at Epps for a beat, then laughs himself a
little laugh.  He yells up:

JAEGER 
Wes, I'm coming up.

Jaeger starts to climb as Wes helps out by pulling on the 
rope. 

Epps watches him for a bit, then looks at the pack of gold
and the rest of the equipment.  Suddenly he scurries about
gathering up all the things they've brought down.

Jaeger continues his climb, disappearing up into the crevice.
A few beats later the rope comes snaking back down from, 
above.  Epps brings over the pack of gold and attaches it to
the rope.  Yelling up:

EPPS
Okay! 

The rope goes taught, slowly drawing the pack up, up into the
crevice finally to be swallowed from view. 

Epps waits for the rope to come back down.  He waits.  He
waits a beat more.  No rope. 

EPPS(CONT)
Wes?  Jaeger? 

He tries to keep the apprehension from his voice, but it
creeps in anyway.  He tries it again.

EPPS(CONT)
Jaeger? 

Still more nothing.  What's that sound?  It's Epps' breath
getting heavier and faster. 

EPPS(CONT)
Jaeger!? 

Nothing.  Then something.  The rope snakes its way back down.
Epps can't help but let go of a little laugh, like a guy
who's just been given a scare by his own shadow.  Taking up 
his own pack Epps hooks up, then starts the climb to the top.

                            CUT TO:

JAEGER AND WES 

They work the rope, helping Epps up.  He gets to the lip of
the crevice, and pulls himself over.  He's breathing hard,
and lets his pack slide to the ground.  Trying not to sound
too rattled.

EPPS 
What the hell took so long.

JAEGER 
Just had to get the pack unhooked from
the line.  It didn't seem that long.

EPPS 
Not when you're up here with the gold, I
guess not. 

Throwing Epps' own words back at him: 

WES 
Not losing trust, are you? 

Epps lets this go.

EPPS 
It'll be too dark to make our way back
now.  Let's bed down for the night and
head out at first light. 

WES 
What about the gold? 

EPPS
What about it? 

WES 
Maybe we should split it up now. 

EPPS 
We started this together, and we're 
staying together, so there's no point in
splitting things up now. 

WES 
What if we get separated?  Way I see it
if something happens I want to be
carrying my share.

JAEGER 
Wes might be right about that. 

EPPS 
It stays as it is.  We're halfway home
now.  Let's not blow it by people getting 
ideas. 

WES 
You're the one with all the ideas.

EPPS 
You've had your say, Wes.  Now leave it.

WES 
Maybe you've got ideas of your own for
the gold.  Maybe you've already got
things worked out.

EPPS
Maybe I do.

WES 
Maybe I don't need your ideas.  Maybe I
can do better on my own. 

Epps sees trouble coming, and deals with it the only way he
knows how.  Casually he turns from Wes as if he's about to
let things go.  Suddenly he spins back around throwing a
punch to Wes' jaw that sends him to the ground.

Wes puts a hand to his mouth.  It comes back stained red.
Wes goes on the boil. 

WES(CONT)
You got no reason to do that!

EPPS 
I told you:  When I straighten someone 
out they stay straightened.  This is how
it works:  Nobody touches the gold.
Except when we're on the move and 
someone's carrying it, nobody so much as
opens the pack to get an eyeful of it.
Agreed? 

Jaeger wastes no time jumping in. 

JAEGER 
Yeah.  Sure.  That sounds like a plan to
me. 

Wes, still on the ground, fumes. 

WES 
You got no reason to hit me.  I'm getting
tired of you and Jaeger pushing me around. 

EPPS
Then get up and do something about it.

Wes thinks about it, but that's all he does.  He's not ready
to cross that line yet. 

EPPS(CONT)
Then just lay there and bleed. 

Epps takes up his pack and moves off to bed down.  Jaeger
does the same.  Wes just lays on the ground...and bleeds.

                           FADE TO:

BLACK

                           FADE TO:

EXT. MESA - EARLY MORNING 

The first light of day barely begins to fight its way through
the dark.  Our boys sleep in a circle around the pack filled
with gold.  Surprisingly they seem to sleep pretty well, but
then the last twenty-four hours has taken a lot out of them.

There is a slight sound: Rocks crunching underneath a foot.
Someone stirs, someone moves.  It's hard to tell who it is in 
this bad light.  They creep towards the pack, inching their
way closer and closer.  They reach out a hand, just about to
grab the pack.

Wes, who obviously wasn't asleep at all, lunges for the 
person, and takes them down hard.  There's the ugly crunch of
body against stone as they hit the ground.  M-16 in hand Wes
straddles the intruder pressing the muzzle of the rifle
against his head. 

WES 
Stay down.  Stay the hell down, or I will
rip your stinking head off! 

Underneath him, an IRAQI SOLDIER - who already looks very
badly injured; bloody, cut, slightly burned - babbles back in
high pitched and frightened Arabic.

This is enough to wake Jaeger and Epps. 

JAGER
What the hell?

WES 
I caught him!  I caught him trying to
steal the gold. 

EPPS
Get off him. 

WES 
(Slightly crazed) 
He snuck in here thinking we were asleep,
only I wasn't sleeping.  Would have slit
our throats if I hadn't stopped him. 

EPPS
Get off him! 

Epps reaches down and physically pulls Wes from the soldier
who still rattles on. 

EPPS(CONT)
What happened?

WES 
I told you.  He tried to steal our gold.
He tried to kill us.

JAEGER 
With what?  He doesn't have a weapon. 

WES 
He's a soldier.  He doesn't need a 
weapon.  He's got rocks.  He's got bare
hands. 

The soldier goes on babbling.  Wes has had just about enough
of that.  He gives the soldier a kick to the ribs. 

WES(CONT)
Shut up! 

Epps gives Wes a hard push. 

EPPS
Stop it! 

WES 
I told you; don't push me around. 

Even now, frightened but more calmly, the soldier goes on.

EPPS 
Tell me what he's saying.

Wes listens, but with disdain.  He translates:

WES 
Says he's one of the soldiers that was in
the helicopter. 

JAEGER 
He lived through that? 

The soldier goes on, and so does Wes.

WES 
Says they were deserters, they were 
afraid to fight, don't believe in Saddam
anyway.  They flew the gunship up here to
hide out.  When they saw us they figured
we were going to kill them, so they shot
first. 

EPPS 
Why'd he come in our camp. 

Wes asks him the question in Arabic and gets an answer.  It's
enough to give Wes a bit of a laugh. 

WES 
Says he wanted food.  Liar.  He wanted
the gold. 

EPPS 
How's he going to want the gold?  He
couldn't even know we had it.

WES 
He...he could have been watching us.

JAEGER 
Maybe we should give him some water. 

WES 
All last night he could have been-- 

JAEGER 
I think he wants something to drink. 

WES 
I'm not wasting my water on him. 

Jaeger gets his water and gives some to the soldier.

WES(CONT) 
I don't care what he says, he wanted our
gold.  Would have slit our throats if he
had the chance.

EPPS 
Doesn't matter.  Whatever he wanted he 
didn't get it.  We've got no need staying
around here.  It's light enough.  Let's
pack up and head out. 

Jaeger and Epps start to go for their gear.  Wes is still on
the Iraqi soldier.

WES 
What about him?  We...we have to do
something.

Epps gives an expression that screams:  What the hell are you
talking about?

WES(CONT) 
We can't just leave him.  He'll run back
to his outfit, report our position... 

EPPS 
You said he was a deserter. 

WES 
That's what he says.  He could be a spy,
or something. 

EPPS 
You don't know that. 

WES
You don't know he isn't. 

JAEGER 
So we'll take him with us.  At least 'til
we get back to the Hummer. 

WES 
He'd just slow us down, and drink our
water.  And if we ran into any more
Iraqis you know he'd sell us out. 

EPPS 
We don't leave him, we don't take him
with us.  What does that leave? 

By way of answering Wes lifts his M-16 and works the action.

EPPS(CONT) 
You're out of your mind.

WES 
He's an enemy soldier.

EPPS 
I'm not going to let you kill him.

WES
We're at war. 

The discussion starts to get real heated.

EPPS 
We are not at war!  You and I and Jaeger
are AWOL.  We have no authority-- 

WES 
He tried to kill us.  If not just now,
then in the helicopter.  That's all the
authority I need. 

Jaeger goes somewhere near panic.

JAEGER
We don't need to do this.  We got the 
gold, all right?  Let's just get out of
here. 

The Iraqi may not speak the language, but he's got a pretty
good idea what they are arguing about.  He starts to plead
for his life

WES 
I'm not going to leave him be just so he
can stab us in the backs the minute we
turn around.  I have been through too
much to lose it all now just because the
two of you don't have the stomach to do
what has to be done. 

EPPS 
I've got no stomach for murder. 

WES 
It's a combat action. 

EPPS 
It's murder, and I won't be any part of
it. 

WES 
Then step aside. 

EPPS
No. 

WES 
Get out of my way. 

The Iraqis begging goes into over drive.  Jaeger just about
loses it.

JAEGER 
For Christ's sake, we don't need this.
Let's just go.  Let's just...let's just
get out of here. 

Wes yells down at the Iraqi. 

WES 
Shut up!  Shut the hell up! 

Wes moves menacingly for the Iraqi.  He thrusts his M-16
forward.  Epps grabs it, and throws a punch.  Unlike before 
with Jaeger, this time Wes ducks the blow and swings the butt
of the M-16 back at Epps.  It's not much of a blow though, 
and Epps keeps on coming.  He barrels into Wes and takes him
down. 

As the two men tussle the Iraqi sees his chance to get away.
He springs up, knocking Jaeger to the side, and bolts past
him.

JAGER 
He's getting away! 

Epps turns and sees this.  Maybe he's not for killing this 
guy, but he certainly can't just let him get away.  He takes
off running after the Iraqi, Jaeger a step behind. 

The Iraqi, face flush with fear; eyes filled with terror like
a hunted animal, makes it to the rock face and starts to 
climb to the plateau above.  He knows if he can make it he at
least has a chance of getting away.  It shows in the
desperation he climbs with. 

Epps and Jaeger are right behind him.  They claw at the
rocks, but can't gain ground.

The Iraqi gets closer and closer to the plateau; to freedom.
Our two soldiers scramble up right behind him.

The Iraqi gets a hand on the lip of the plateau.  He's just
about to pull himself up.  He's just about to get away-- 

WE HEAR A SHORT BURST OF GUNFIRE.  Three large, bloody holes
mushroom open in the Iraqi's back.

                            CUT TO:

WES 

He stands, smoke curling from the muzzle of his M-16 like a 
white snake, having just send the Iraqi some bullets special
delivery. 

                            CUT TO:

THE IRAQI 

He arches, stiffens, then falls like a stone past Epps and
Jaeger to the ground below like a sack of potatoes.

As the two climb down Wes goes to the body and stands over it
like the great, white hunter standing over his kill.  All
business like he says:

WES 
I had to.  You saw how he ran.  Would
have given us away.  I had to. 

There's a beat of quiet, then: 

JAEGER 
Maybe we ought to...you know, bury him.
Say some words over him. 

WES 
You want to say some words? 

He sneers down at the body.

WES(CONT) 
Go to hell.  How are those words? 

Wes moves off.  A beat later Jaeger walks away.  Epps just
stands there looking at the body. 

                            CUT TO:

EXT. MESA - LATER 

Wes, Epps and Jaeger are making the trek back down.  Jaeger 
is shouldering the pack with the gold.  Wes has got his M-16. 
Epps stops, and puts his pack down.  He takes out the navicom
and a recon photo. 

EPPS
We should head Northeast. 

JAEGER 
Northeast?  That's away from the Hummer;
further into Iraqi.

EPPS 
There's another pass on the photo.  We 
can avoid that narrow one we had to cross
on the way up, and it should get us back
down. 

JAEGER 
It should, or it will?  Least going back
the way we came we know what we're up
against. 

EPPS 
You think you can make that pass weighted
down when you almost fell the first time
you're wrong, and you're not going to 
take my share of the gold with you trying
it.  We're heading Northeast. 

Really calm, cold and direct Wes says:

WES
You've got an awful lot of orders in you.
Always giving orders. 

EPPS 
I out rank you, that's why. 

WES 
In the service you do, but we're not 
particularly in the service right now.
Way I see it, what we're doing, that 
doesn't particularly give you the right
to toss orders around. 

Epps loads up his pack pretty much ignoring Wes. 

EPPS 
We been down this road.  I told you how
it is.  Unless you feel like there's
something you want to do about it... 

WES
What if I do? 

Epps says nothing, so Wes tries it again a little harder. 

WES(CONT)
What if I do? 

He works the action of his M-16. 

WES(CONT) 
You talk loud, and don't even have a big
stick to back it up with. 

Real casual Epps takes a grenade from his belt and flips the
pin loose.  He stands with the grenade in one hand and the
navicom in the other.  Real calm, like he was talking about
the weather:

EPPS 
Something happens to me I let go of this
grenade.  I go, and I take the navicom
with me.  And how do you suppose you're 
going to find your way back to the Hummer,
when you won't even know what's up or 
down.  It's a big country, and you could
be heading for the allies, or wandering 
right into Bhagdad.  That's if you don't
die of thirst before you even get that
far.  How you like my stick now? 

Epps and Wes have a stare down.  Jaeger, who's getting really
good at freaking out, jumps in. 

JAEGER 
Why don't you put the gun down, all 
right, Wes?  You put the gun down and 
Epps'll put the pin back in the grenade.
Won't you Epps? 

The stare down goes on a beat longer.  Finally Wes lowers his
rifle.  He turns to Jaeger and vents what anger he can. 

WES 
I'm starting to think you're a real
bitch, you know that?

                           FADE TO:

EXT. DESERT - LATER 

THE CAMERA PANS over the vast expanse of nothingness.  SMOKE 
BEGINS TO DRIFT INTO FRAME.  THE CAMERA FINALLY LANDS ON THE
SHI'ITE ENCAMPMENT, or at least what's left of it.  Tents are
torn down and burned, goods scattered.  It looks like a ghost
town.  Epps, Wes and Jaeger wander into it.  They look
around, but see no signs of life. 

Wes grabs up some Shi'ite garments, white robes, and starts
to put them on. 

JAEGER 
You're going to burn up in those. 

WES 
The white reflects the sun; it keeps you
cooler.  That's why they wear them. 

Jaeger looks to Epps who just shrugs.  Jaeger gets some robes
and puts them on.  Epps follows suit. 

JAEGER 
Think the Iraqi's killed them all?

WES 
Probably shot a few.  Scattered the rest.
Murderers. 

EPPS
(Pointed) 
Murder, or a combat action?  It's hard to
tell them apart? 

They keep on moving, passing straight through the camp.  Epps
marches ahead, not wanting to even deal with the other two 
men.  Wes talks after him.  Really he talks more to himself,
and he's not sounding too lucid. 

WES 
You saw how he ran didn't you?  First
chance he got he ran out.  Would have
gone straight to his CO, told him all 
about the gold.  What do you think would
have happened then, huh?  Then what do 
you think would have happened?  Two 
thousand screaming Iraqis bearing down on
us.  You ought to thank me for killing 
him.  I'll get a medal for it.  Watch and
see if I don't get a medal. 

Epps isn't even paying attention, he's just walking on. 
Almost, as if he senses something is wrong, he stops in his
tracks.  He looks down at his feet and sees the most curious
thing.  SAND IS RUSHING AWAY FROM HIS FEET, ALMOST AS IF IT'S
GOING DOWN A DRAIN.  He looks at it with the same wonderment
that a dog watches television. 

EPPS 
What the hell...? 

Epps has got all of about two seconds to ponder this as a
moment later the Earth literally drops from beneath his feet.
He's standing on a sink hole that opens up swallowing him in
loose sand.  Immediately he sinks to waist level.  He slows
there, but still goes down with rapidity.  He screams to 
Jaeger and Wes.

EPPS(CONT)
Help!  Help me! 

Jaeger drops the gold and runs to the edge of the hole.  Wes
doesn't move. 

EPPS(CONT)
Help me!

Jaeger is paralyzed by indecision.  He doesn't want to let
Epps drown, but if he gets too close he could easily get 
sucked into.  He flirts back and forth between rescue and
safety. 

Sand continues to pour in on Epps. 

EPPS(CONT) 
For Christ's Sake, Jaeger!  Help me!
Help me! 

Jaeger can't fight himself any longer.  He lowers himself
halfway into the hole, stretching spread eagle trying to keep
some kind of grip on the firmer ground, and reaches for Epps. 

Their arms twist and strain for each others.  First their 
fingers meet, then they grab hands.  They work a grip down to
their wrist, but that's all they can get.  Jaeger strains 
like a field horse pulling Epps against the sand.  It may not
be enough as he begins to slip down himself.  Jaeger twists
his head and looks up at Wes.  Straining to say anything he
pleads: 

JAEGER
Wes...Wes! 

His words fall on deaf ears.  Wes just takes a step closer to
the pack of gold coins. 

This only serves to energize Jaeger.  He digs deeper within
himself finding an untapped reserve of strength.  He grunts
and pulls, the veins on his neck puffing like balloons. 

Epps finds same purchase.  He pulls, swims, his way up from
the sand.  A little at first, but like hitting shallow water
he's able to lift himself up. 

Jager jerks him the rest of the way up to firm ground.  They
collapse, chests heaving like pistons as they suck air. 

As Epps regains strength he pats himself down.  Suddenly he
goes back into a panic. 

EPPS
The navicom!

Epps rolls back over and thrusts his hands down into the soft
sand frantically looking for the lost computer.  Jaeger joins
in.  They dig and scrape as best they can, but daring to
venture only so far into the soft sand.  It doesn't matter.
The navicom is lost. 

JAEGER 
What are we going to do?  How are we
going to find our way back!? 

EPPS 
We'll find our way. 

JAEGER
How!? 

EPPS 
We'll find our way!  We'll... 

Epps wants to say how, but he's got no idea.  Wes grows a
smug smile. 

WES 
No navicom.  A lot of good you are now,
Epps. 

EPPS 
Lot of good you were when I was sinking
in the sand. 

WES 
Without that navicam looks to me like you
forfeit the right to be in charge. 

EPPS 
And let me guess who is. 

Wes casually slides out his M-16.

WES 
I'm the one's got the big stick. 

EPPS 
Suppose I don't go for that? 

WES 
Then I suppose it'd be insurrection, and
I suppose I'd have to kill you.
(Beat)
I suppose. 

EPPS 
What about Jaeger? 

WES 
Nothing about him, unless he's got a
problem about me dealing with you. 

JAEGER 
Yeah, I got a problem with you killing Epps. 

Wes turns and glares at Jaeger, who backs down. 

JAEGER(CONT}
I mean, in principle. 

WES 
{Sneering) 
You know, Jaeger, you really are a bitch. 

Epps isn't wasting anymore time.  When Wes turns to glower at
Jaeger he lunges up for him.  Wes side steps Epps and lands 
the but of his rifle into the side of Epps' head.  It opens a
wound, and sends Epps back down to the ground. 

Epps looks up right into the muzzle of West M-16.  Full of
poison: 

WES(CONT)
You die! 

Wes is just about to squeeze back the trigger when a shot 
rings out.  Wes' body jerks like he's just been hit in the
back with a truck.  The way cut timber falls he slams to the
ground motionless. 

Epps and Jaeger stare at the body for a beat, then snap their
heads in the direction of the shot. 

Up on a dune behind them are a group of SHI'ITES on 
horseback.  One of them has a high powered rifle which he has
just used to drill Wes.  He fires another shot.  It pings to
the ground between Epps and Jaeger. 

Our two remaining men scramble.  Jaeger dives for the gold 
and snatches it up from the ground as bullets zip around it.
The two take off running as best they can in the sand.  They
run wildly, erratically, without looking back.  They run
until their bodies scream no more, then keep going on 
inertia.  Reaching a dune they tumble down the far side and
collapse in a heap at the bottom.  They take a moment to
catch what breath they can, then: 

EPPS 
We got to go back.  We got to go back for
Wes. 

JAEGER
Forget Wes. 

EPPS
We can't just leave him. 

JAEGER
Wes is dead! 

EPPS 
What if he's not? 

JAEGER 
Then he will be when those Iraqis get to
him.  He was going to kill you.  He was 
one blink away from it.  He's dead, Epps,
and I'm sure as hell not getting my head
blow off over his carcass. 

They sit there trying to catch their breath.  As they do a
sound comes from the distance.  They freeze, ears cocked,
trying to figure out what it is. 

JAEGER(CONT)
It's a helicopter. 

Quickly, desperately, as the sound of the chopter draws 
closer, they scan the horizon looking for it.  Jaeger spots
it and thrusts a finger in its direction. 

JAGER(CONT)
There. 

Epps scrambles out his binoculars.  He targets the
helicopter.  Jaeger waits in high anticipation. 

JAEGER(CONT)
Ours, or theirs? 

Epps can't make out for sure.  Jaeger asks again with growing
anxiety. 

JAEGER(CONT) 
Ours, or theirs?

Epps takes a long, hard stare.

EPPS 
Ours.  It's one of ours.  We've got to
signal them; let them know we're down
here. 

The instant Jaeger hears this his face twists up like he's
thinking something, and he doesn't like what it is he's
thinking.  Quietly, almost to himself: 

JAEGER
No.

EPPS 
We need something:  A flare, a signal
mirror. 

Again Jaeger says it, this time including Epps too. 

JAEGER
No. 

EPPS 
What do you mean no?  They can fly us home. 

JAEGER(CONT) 
They'll ask questions; want to know why
we were out here. 

EPPS
We'll lie. 

JAEGER 
They'll search the pack. 

Epps finds a mirror in one of his pockets.  He stands, ready
to signal the chopter. 

JAEGER(CONT)
They'll find the gold. 

Epps turns sharply back to Jaeger.

EPPS 
We're lost, you understand that?  We've
got no navicom, and no means to find a
way back.  So right now I don't give a 
damn about the gold because if we don't 
get off this desert, and out of Iraqi all
it's going to be good for is buying us
tombstones. 

Epps is back around ready to signal the helicopter.  He's
about to raise the mirror when he hears the sound of an M-16
action being worked.  Epps turns to face Jaeger. 

JAEGER 
I can't do it, Epps.  Not when we're so 
close.  I can't let you ruin everything. 

Epps just stares at Jaeger, not frightened, but surprisingly
calm.

EPPS 
First Wes, now you? 

JAEGER 
I'm not like Wes.  Wes was crazy.

EPPS 
(Sarcastic) 
And you; you've got it all together. 

JAEGER 
I don't want it this way.  I wouldn't 
kill you just to kill you, but I can't 
let you lose the gold for me.  Not when
we're so close. 

EPPS 
That helicopter passes, and the only
thing we're close to is death. 

Jaeger is unfazed.  Very politely he says:

JAEGER
Sit down, Epps. 

Epps takes him up on the offer.  What choice does he have?
THE CAMERA STAYS TIGHT ON THE TWO MEN.  They don't talk.
They don't move.  They just sit as WE HEAR THE SOUND OF THE
HELICOPTER GETTING CLOSER AND LOUDER.  IT REACHES A
CRESCENOO, THEN BEGINS TO FADE UNTIL IT DISAPPEARS.  The
chopter is gone, along with Epps and Jaeger's best chance of 
getting out of the desert alive. 

Jaeger lowers his rifle.  Very genuinely he says:

JAEGER(CONT) 
I'm sorry about that, Epps. 

EPPS
Is it all right if I stand up? 

Like he didn't know he was keeping Epps from something. 

JAEGER 
Oh, yeah.  Go ahead. 

Epps stands.  He looks around trying to figure things out. 
Not much to figure.  There still in the middle of a desert in
a hostile country same as they ever were. 

JAEGER(CONT) 
I'm glad I didn't have to kill you.  I'm
glad it didn't come to that. 

EPPS 
Yeah.  Well, me too. 

JAEGER 
I never killed anybody before.  I talk a
good game, but I'm not like that. 

EPPS
Sure. 

JAEGER 
Really, I'm not.  Remember how I was 
talking I wanted to blow away all those
Iraqis?  That's all it was was talk.  I
was scared out of my mind to go to war.
I still haven't gotten over stepping on
that land mine. 

EPPS 
You still got a map on you? 

JAEGER
What?  Yeah. 

Jaeger takes out the maps he has and hands them to Epps. 
Epps looks them over, then looks over the terrain.  Without
any landmarks or navigating tools the maps might as well be
finger paintings.

JAEGER(CONT)
Epps? 

EPPS
Yeah. 

JAEGER 
I don't want to die. 

EPPS 
Makes two of us. 

JAEGER 
I know what I did just now was crazy, but
you got to understand how much I want
that gold. 

EPPS 
It's all right.  I don't like it, but
it's over now. 

JAEGER 
I never had anything before, Epps.  I
never was anybody.  Not the kind of 
somebody you can be with a pocket full of
gold coins.  When I was in high school I 
used to-- 

Fed up with Jaeger Epps turns on him hard.

EPPS 
Hey, you know what?  Can I be honest with
you?  Right now I'm not all that 
interested in how you're messed up 'cause
you didn't get the bicycle you wanted for
your thirteenth birthday.  What I'm 
interested in is how I can keep from
getting dead.  And listening to sob 
stories from some           about how the
system wasn't good to him because he had
to work like everybody else instead of
being born a Kennedy doesn't do a damn 
thing to help keep me alive.  So do me a 
favor; either shut up, or...just shut up. 

Jaeger isn't sure what to say. 

JAEGER
Sorry. 

EPPS 
Damn. 

Epps sits down in the sand, all out of ideas.  There's a long
quiet before Jaeger says:

JAEGER 
What do you think our chances are? 

EPPS 
If we can find the Hummer, or some 
friendlies by sundown we might be okay. 
We've got enough water for that.  But we
won't make another day otherwise. 

Again they sit for a beat.

JAEGER
Wonder how the war's going? 

EPPS 
It's got to be going better than this.. 

Epps stands and has a last look around. 

EPPS{CONT) 
All right.  pick a direction. 

Jaeger just gives a surprised look. 

EPPS(CONT) 
We can't just sit here.  We've got to
start moving, so pick. 

JAEGER 
You sure you want me too? 

Epps nods.  Jaeger stands and takes a good look around.  He
considers things, although there isn't much to consider.
Finally he decisively points in a direction. 

JAEGER(CONT)
I pick that way. 

EPPS 
Okay.  Then we go this way. 

Epps heads off in the opposite direction. 

                           FADE TO:

EXT. DESERT - LATER 

Epps and Jaeger make the long march across the sand.  There's
so much nothing out there it's maddening. 

                           FADE TO:

EXT. DESERT - LATER 

Epps drops down in the sand.  He lets his pack slide fram his 
back, then pulls his water and takes a healthy swig.  He puts
his pack back on and struggles to his feet.  As Jaeger
crosses he takes Epps by the shoulder and helps to pull him
up.  The two wade on. 

                           FADE TO:

EXT. DESERT - EVENING 

Epps and Jaeger are trekking as they have been doing all day. 
They look worn out, but they keep moving.  Jaeger is several
paces behind Epps. 

JAEGER
Getting cold.

EPPS 
It's a desert.  That's what deserts do at
night; they get cold. 

JAEGER 
Epps...Epps!  I'm gonna stop for a
second. 

EPPS
No! 

JAEGER 
Just let me rest for a second. 

EPPS 
We've got to keep moving while there's
still light. 

JAEGER 
You know what I'm going to do?  I'm just
going to take a second.  I want to look
at the gold. 

EPPS 
Don't you touch it. 

JAEGER 
I just want to look at it.  Remind me of
what I'm dying for. 

EPPS 
The deal was no one touches it until we
get out of here. 

JAEGER 
Yeah, but we made that deal while Wes was
still alive.  He's gone.  Time for a new
deal. 

Jaeger takes the pack from his back and starts to open it.
Epps turns and races back to him grabbing him by the wrist
and forcing Jaeger to let go of the pack. 

EPPS 
You listen to me.  If, if we get out of
this I don't care what you do with your 
share, but until then you've only got one
thing to think about and that's staying 
alive.  So you leave that gold alone, or
you and I are going to have to have a
serious talk. 

Epps waits for a response from Jaeger, but gets none. 

Jaeger's eyes seem to be glazed, and his stare fixed on a
point well beyond Epps.  He raises a hand, points off into 
the distance. 

JAEGER
Look. 

Epps turns and looks.  Off a ways is a light in the window of
what looks to be a shack-type building.  Epps stares at it as
if it were the holy Grail 

JAEGER(CONT) 
What do you figure it is? 

EPPS 
Place all alone like that?  Must be a
boarder check point. 

JAEGER 
Which boarder?  Saudi?  Kuwait?  Syria? 

EPPS 
Couldn't be Syria.  We couldn't have gone
that far north.  It's got to be Saudi.
Come on. 

Epps heads for the shack doing double time.  Jaeger puts the
pack back on and races to catch up. 

EPPS(CONT} 
They've got to have water.  We'll get 
same water, some directions, maybe they
even have a vehicle. 

JAEGER
Epps. 

EPPS 
We can head back for our lines, and they
don't even have to know about the gold. 

JAEGER 
Epps.  What if they're not Saudi. 

Epps stops dead, now not more than one hundred meters from
the shack. 

JAEGER(CONT) 
If it's a checkpoint, it could be Iraqi. 

Epps considers this.

EPPS 
We've got no cboice.  Either way, we've
got no choice. 

Epps and Jaeger keep on for the shack walking with
apprehension now instead of running.  Epps stops less than
fifty meters away. 

JAEGER
Well? 

EPPS 
Well, we should identify ourselves. 

JAEGER 
Yeah, I guess we should. 

Epps takes in a deep breath ready to yell to the shack.
Instead he turns to Jaeger. 

EPPS 
Even if they are Iraqis probably all
they'll do is take us prisoner for
awhile.  Got to figure we're still 
kicking their asses in the war.  They
don't want any trouble.

JAEGER 
Hell, they'll probably just surrender to
us.  Probably. 

Again Epps takes a deep breath.  And again just as he's about 
to cry out he turns to Jaeger. 

EPPS
That's if the war is even still going on.
Way things were shaping up it's probably
long over. 

JAEGER
Probably. 

Epps takes a beat, then sucks in a breath.  He yells for the
shack: 

EPPS
Hellooooo-- 

Before Epps can even finish getting the word out machine gun 
fire erupts from the house and burns towards Epps and Jaeger.
They dive for cover, hugging the ground as bullets whistle 
and ping through the space around them.  They are forced back
and down against a narrow stretch of rock, but it offers 
little protection and is chipped away by the hot lead.  It's 
just a matter of moments before nothing stands before them
and death.  At the top of his lungs Jaeger starts yelling: 

JAEGER 
Ashra Ka mahari dahra sahib!  Ashra Ka
mahari dahra sahib!

Just as quickly as it began the shooting stops.  From the
shack we hear some chatter in Arabic, then the door opens.  A
few MEN appear in the doorway.  They laugh and beckon for
Epps and Jaeger to join them. 

EPPS 
What did you say? 

JAEGER 
I don't know.  Something Wes had taught
me.  I think it means "Don't shoot.
We're your friends." 

EPPS 
They must be Saudis.  It's a Saudi 
checkpoint.  Oh sweet, Jesus.  Come on.
Come on! 

Epps hurriedly stumbles in the dark for the shack.  Jaeger is
just steps behind him. 

They enter the dimly lit shack to the good nature of the FOUR
men inside.  Epps and Jaeger see a fire in an open hearth and
go right to it to warm their bands as the four men go on
chattering behind them. 

JAGER 
Oh, man, this is good.  What do you think
the chances are they've got a whirlpool
in this place? 

As they rub their hands together Epps looks up.  He freezes.
Hanging on the wall is a very handsome, nicely framed 
portrait of Saddam Hussein.  Epps nudges Jaeger who also
looks up.  He also freezes. 

JAEGER(CONT)
Oh, God... 

EPPS 
They must have thought we were Iraqi when
you yelled to them.  They couldn't tell
in the dark. 

JAEGER
What are we going to do? 

Epps thinks.  What are they going to do?

EPPS 
Slip out your M-16. 

JAEGER
And then what? 

EPPS 
And then shoot them. 

JAEGER 
I...I never killed anyone before.  I told
you that. 

EPPS 
Well, you're going to start with a bang,
'cause you've got four of them to take down. 

Behind Epps and Jaeger one of the Iraqis asks a question of
them in Arabic. 

JAEGER 
Can't you-- 

EPPS 
I don't have a weapon. 

Again the Iraqi asks the question.  We can tell by the tone
of his voice he expects an answer. 

EPPS(CONT)
Don't go bitch on me now!  You were going
to kill me.  Kill them! 

JAEGER 
I just said I would.  I don't think I-- 

EPPS
Shoot them! 

The Iraqis sense that something is wrong.  They move
menacingly for their weapons. 

EPPS(CONT)
Shoot them, Jaeger!  SHOOT THEM! 

Jaeger whips around at the same time pulling his M-16.  He 
jerks back hard on the trigger spraying back and forth, back 
and forth. 

Dig it:  The Iraqis do a death dance in the strobe light of 
the muzzle flashes.  They do the twist, they do the jerk,
then they all fall down. 

The bullets that miss do a nasty job of redecorating the
place; shredding walls, eating up wood. 

Jaeger keeps firing until his clip is empty.  He stands 
huffing, eyes glazed like he's a million miles away from what
he just did.  Epps steps up and takes the weapon from Jaeger.
That's like an alarm clock that brings Jaeger back to the 
land of the living.  Jaeger takes one look around at all the
carnage, then doubles over and gets to puking. 

Epps just watches this pathetic sight.  When Jaeger is all
done: 

EPPS(CONT)
Let's get some sleep. 

                           FADE TO: 

BLACK 

                           FADE TO:

INT. SHACK - MORNING 

The sun has just pushed itself well above the horizon as 
Jaeger comes awake.  The second he does he sees a MAN - Arab,
wearing white robes - peering through the window.  Jaeger 
gives a start, and the man disappears.  Jaeger quickly shakes
Epps awake. 

JAEGER 
Epp...Epps!  There's someone at the
window!

This wakes Epps up quick. 

EPPS
An Iraqi? 

JAEGER 
I don't know.  He didn't have a uniform 
on.  He...he had on white robes, like the
guys who killed Wes.

Epps does some quick figuring, then staying low, scrambles
across the floor to one of the dead Iraqis and grabs up his
weapon.  He grabs another one tosses it to Jaeger.

Carefully, still low, Epps creeps over to the window.  Slowly
he raises up and looks out. 

JAGER(CONT)
See anything? 

EPPS
Nothing. 

Epps lowers himself back down and does some thinking. 

JAEGER
What do we do? 

EPPS 
We can't stay here.  Even if that wasn't
an Iraqi soldier it's only a matter of
time before some show up.  Get all the 
water you can carry, and we'll head out
on foot. 


JAEGER 
To where? 

EPPS 
Sun rises in the East.  We go the
opposite direction.  May not find 
anything, but at least we'll know we're
heading towards Saudi Arabia. 

As Jaeger gathers up what water he can find, creeps for
the door.  With the muzzle of his gun he pulls it open a
crack and peers out.  Still nothing.  It's like the man
vanished into thin air. 

Jaeger, stocked up on water, comes over with the gold and
Epps' pack which Epps shoulders.

EPPS(CONT)
Ready? 

Jaeger nods.  Epps opens the door, and the two men carefully
snake their way out weapons at the ready.  It seems, though,
there is nothing to be ready for.  There is no one around. 

Suddenly the man appears from around the shack.  Epps and
Jaeger turn on him targeting with their assault weapons, but
they do not fire.  The man just stands.  He doesn't say
anything, he makes no threatening moves.  The three stay 
still as statues for several beats until Epps jerks his head
indicating to Jaeger they should move on.  That they do,
weapons still on the man, until they are beyond his range.

They walk on a little ways.  Jaeger spots something, and
thrusts a finger in its direction.

JAEGER
Look! 

Mounted on a horse, riding on a dune that runs parallel to
them, is ANOTHER ARAB MAN.  He makes no effort to draw nearer
to Epps and Jaeger, but nor does he lose them.

JAEGER(CONT)
What do we do? 

EPPS 
We keep going, that's what we do.  We
ignore them, maybe they ignore us.

As if to be contrary to Epps' statement ANOTHER TWO ARABS ON
HORSE BACK appear up over a dune before them.

JAEGER
Jesus!  How many of them are there? 

Epps doesn't know, and he doesn't want to find out.  They 
change direction heading away from the Arabs.  But again MORE
ARABS ride up over a dune.  Epps gets the feeling he and
Jaeger are about to be boxed in. 

EPPS 
I don't like this.  Let's go. 

Epps breaks into a run.  Jaeger is only steps behind him. 

Like something out of an old John Ford western dozens of 
mounted Arabs suddenly appear over a dune.  They ride fast 
and hard for Epps and Jaeger like Apaches heading for a wagon
train.  They easily overtake our two, momentarily swallowing
them amongst the thundering hoofs, and ride on a bit as if
playing with them. 

Epps and Jaeger stop, then bolt in the other direction.  The
Arabs ride back, again past Epps and Jaeger swiping them to
the ground; the horses kicking up a spray of lose sand over
them.  It looks like a cattle round up, and our two are the
cattle. 

Epps and Jaeger get up to make another run of it, and again
the Arabs bear down on them.  This time they mean business.
They completely surround them, cutting off all means of 
escape.  The Arabs start screaming something back and forth
in Arabic.  We don't know what, but it sounds unpleasant. 

Epps and Jaeger come skidding to a halt.  They turn in their
tracks digging in the scene.  It goes like this:  They are
completely outnumbered and out gunned by a mounted force.
Doesn't get any simpler. 

Epps and Jaeger drop their weapons.  Their hands go in the
air. 

                            CUT TO:

EXT. SHI'ITE CAMP - LATER 

The mounted Arabs lead Epps and Jaeger, hands tied before 
them and almost literally being towed by the horses, into 
their camp.  It is similar to the Shi'ite camps we've seen
before with several tent dwellings. 

As the party enters groups of Shi'ites come over to stare at
Epps and Jaeger.  They chatter amongst themselves, but our 
boys have no idea what they're talking about, and that just
makes things all the scarier.

From our boy's point of view this is all like an unending
nightmare:  Being dragged along through a desert, not knowing
the language, not knowing what's going to happen.  Their 
world skews and slides as if they were on a tilt-a-whirl. 

Finally they reach a tent.  One of the Arabs tosses Epps and
Jaeger's packs on the ground just before it.  Another cuts
them loose and SHOVES THEM INSIDE THE TENT, then yells 
something at them in Arabic.  He leaves, and our two are
alone. 

JAEGER 
What do you make of them? 

EPPS 
Shi'ites, I think. 

JAEGER 
Is that good, or bad? 

EPPS 
I don't know.  They killed Wes. 

JAEGER 
Why haven't they killed us!? 

EPPS
I don't know! 

JAEGER 
...Maybe...maybe we can fight our way
out. 

EPPS 
With what?  Against how many? 

JAEGER 
We can't just sit here waiting to die. 

EPPS 
You come up with a better plan, let me
know. 

JAEGER 
Maybe...maybe if we traded them the gold.
If we gave it to them they might let us
live; they might not kill us. 

From O.C. we hear a voice:

VOICE(O.C.)
I always knew you were a bitch.

Epps and Jaeger's hearts seize up and stop.  It's as if
they've heard the voice of a ghost, and they have.  IT'S WES!
He carries with him the pack of gold.  Epps can barely get
his name out.

EPPS
...Wes...?

JAEGER
You were shot.  We were standing right
there, you were shot!

WES
In the flack jacket.  Still like getting
hit in the back with a baseball bat.
Took the air right out of me, but I was
just unconscious for awhile.  'Course,
you didn't stick around to find that out.
You left me for dead.

EPPS
We thought--

Like a guy who just took two steps over the edge:

WES
YOU LEFT ME FOR DEAD!

Ohhh, shit.  Somebody's crazy.  Epps gets the feeling there's
not going to be much dialog going on here.  Wes gets real
calm again, which is almost as scary as him acting nuts.

WES(CONT)
When my Shi'ite friends saw that they had
shot an American they were very
apologetic.  Turns out we've been kicking
ass in this little war.  They figure
we've finally gotten Saddam off their
backs.  They brought me to their camp,
cleaned me up, fed me... I'm their new
best buddy.  America number one, Joe.
But there's something the Shi'ites can't
figure out:  They can't figure out why my
two buddies, two fellow Americans, left
me out in the desert.  They can't seem to
figure out what those same two guys were
doing in an Iraqi outpost.  It's almost
as if they were Iraqi spies, or
something.  And I've got to tell you they
hate anything that's got to do with the
Iraqis.  See how I mean?

JAEGER 
We had to take shelter in the checkpoint.
Jesus, Wes, I killed the Iraqis in there. 

WES 
You actually got around to killing 
someone.  I'm impressed.  I guess you're
only half a bitch. 

EPPS 
Wes, we thought you were dead, and we 
thought we were next.  Hanging around to
get killed wouldn't have done anyone any
good. 

WES 
Sure, and I guess it was just convenient
there was one less person to split the
gold with. 

EPPS
Wes-- 

WES 
Look, I know you guys are telling the 
truth.  It's just the Shi'ites don't know
that.  I guess you could tell them...but 
then you don't speak the language do you?

Wes gets right up into Jaeger's face. 

WES{CONT)
Do you!? 

Of course Wes knows they don't.  He allows himself a very
sweet, shit eating grin. 

WES{CONT) 
They're going to kill you slow.  I'll see
to that. 

He steps away and starts to open the pack of gold. 

WES(CONT) 
Thanks for taking care of this for me.

EPPS 
Tell me something, Wes.  Are you crazy,
greedy, or just stupid?  Jaeger says
you're crazy. 

JAEGER 
I didn't say that.  I never said-- 

EPPS 
Me?  I say you don't have enough brains
to be stupid. 

For a second Wes is taken by surprise by the statement, but
he smiles at Epps' boldness.  He sets down the pack of gold
and gets right up into Epps' face. 

WES 
You disappoint me, Epps.  Always figured
you to be a man; a real bright guy.  I
had respect for you. 

EPPS 
That why you tried to put a bullet in my
head in the middle of the desert.

WES 
That's just what things came to. 
Sometimes you can't help that.  It 
doesn't change me respecting you.  And
now you let me down.  I expected more
from you, you know?  I really did.  I 
expected you to-- 

A KNIFE SLIDES UP INTO FRAME UNTIL THE THE TIP RESTS JUST
UNDER WES' THROAT, CHOKING OFF HIS WORDS. 

Now it's Epps' turn to go smug. 

EPPS 
You expect this? 

Wes' got nothing to say.  To Jaeger:

EPPS(CONT)
Get the gold! 

Jaeger grabs up the pack. 

EPPS(CONT)
(To Wes) 
Now let's try things another way.  Let's
try this:  You and me and Jaeger are
going to walk out of here.  We're going
to walk out all smiling and friendly so 
your little Shi'ite buddies won't suspect
a thing.  Then we're going to hop on some
horses, and ride away, and live happily 
ever after.  It's all going to happen
just like that, because if it doesn't 
then I'm going to gut you like a fat pig.
You understand me...soldier? 

Wes says nothing.

EPPS(CONT) 
I'll take that as a yes. 

Epps gruffly spins Wes around and presses the knife up
against his back so that it is hidden. 

EPPS MARCHES WES OUTSIDE THE TENT, stopping momentarily to
grab up his pack with his free hand.  To Jaeger he says: 

EPPS(CONT)
Get the water.

Jaeger does as he's told. 

WES 
They'll kill you.  You won't make it ten
feet before they cut you down. 

EPPS 
You don't know John Epps very well, do
you?

JAEGER 
Can you ride a horse? 

EPPS 
No, but I figure now's a real good time
to start. 

They walk on through the camp towards some saddled horses.
They pass a Shi'ite who says something to Wes in Arabic.
Epps gives Wes a poke in the back with the knife. 

EPPS(CONT)
Don't say anything. 

The Shi'ite, obviously expecting an answer, says whatever it
was he said again. 

EPPS(CONT)
Just keep quiet. 

WES 
I have to answer him.

EPPS
So you can give us away? 

WES 
If I don't answer, he'll know something's
up.

Epps gives this a lot of thought in a very short time.

EPPS 
You answer him, but you answer him wrong
and you're going to be staring at your
insides while you're dying. 

Wes very calmly says something to the Shi'ite.  The Shi'ite 
just stands there for a beat looking at the three men, then
suddenly explodes in screams.  No way of knowing for sure
what he's saying, but since he's going off like a Westec
alarm it's a pretty good bet he's been tipped of.

Epps rears back a fist and slams it into Wes' face.

EPPS(CONT)
Bastard! 

Epps and Jaeger take off running for the horses, practically
leaping into the saddles as Shi'ites come pouring out of 
their tents.  Forgetting himself, Wes screams in English. 

WES
Stop them! 

Jaeger and Epps spur their horses and take off riding hard.
It's amazing what you can do when a bunch of angry Shi'ites
are chasing you.

Wes grabs an assault weapon from a near by Shi'ite and mounts
up with blood in his eyes.  He leads a charge of armed, 
mounted Shi'ites that looks like a posse going after some bad
men. 

Out front Epps and Jaeger pull up for a second.

JAEGER
They coming? 

Epps takes a look behind him.  He can't hardly miss the
sandstorm Wes and the Shi'ites kick up as they ride for them. 

EPPS 
Oh, yeah.  They're coming. 

Epps points off to some foothills in the distance.  It's the
only thing close to cover for miles around.

EPPS(CONT) 
Ride for the hills.  We'll try to lose 
them.

They take the reigns to their horses and get to riding.

Behind them Wes yells to his riders, and signals for them to
split up, and try to cut off Epps and Jaeger.

Epps and Jaeger hit the hills.  They ride up for a bit, then
stop to spot Wes.  Wes and his crew are better riders and 
have closed the gap.  All the two can do now is try to lose
them in the terrain.

Epps and Jaeger ride as best they can, and somewhat 
erratically to cover their trail.  They head up a ways, then
cut across in a parallel direction.  Jaeger looks back, but
sees no sign of Wes. 

JAEGER
We lost them! 

Just as the words leave Jaeger's mouth a hail of bullets 
explodes the ground before them.  Their horses rear up, and
it's all they can do to fight them.  Just ahead are the
Shi'ites who split off from Wes, having circled around Epps
and Jaeger. 

The two yank their horses back, and ride hard in the opposite
direction with the Shi'ites just behind.  They fire on Epps
and Jaeger, the bullets pinging off the rocks all around them. 

Epps and Jaeger are little more than passengers on their
horses as they run wild like stampeding mustangs.  And good
for it, too, otherwise they might be dead by now.  They break
for a trail that leads further up the mountain, but it
does little to shake loose their pursuers. 

As Epps and Jaeger level out they can see the trail below
them, and Wes and his posse riding for them.  Our two start
back the way they came. but the other Shi'ites crest the
hill.

JAEGER(CONT)
Which way? 

Epps looks from side to side.  Either way is certain death.
Then he looks off towards an embankment.  It is VERY steep.
VERY treacherous. 

It would take an expert rider to make it down the embankment 
safely.  All Epps knows is there aren't any gun totting
Shi'ites in that direction. 

JAEGER(CONT)
Which way do we go!? 

EPPS
We go this way. 

Fear gives way to desperation.  Both men whip their steeds
hard.  The beasts leap to the embankment and start the wild
ride down.  Both Epps and Jaeger have to lean back in their
saddles until they're almost parallel to the ground just to
stay on their horses. 

Wes sees this and swears.  He signals to his men to cut back
the other way. 

Epps reaches the bottom of the embankment.  Jaeger is almost
there when he looses control of his horse.  Both rider and
animal go tumbling in an ugly fall. 

EPPS(CONT)
Jaeger!

The horse gets up and bolts off before Jaeger can get to her. 

Just then Wes and his men make it back down the trail, and
start riding hard for Jaeger.

Epps pulls his horse around and takes off for his fallen
comrade.  As he rides in he leans to the side and low.
Stretching out an arm Epps literally scoops Jaeger, and
swings him up behind him.  A couple of rodeo performers
couldn't have done it better. 

Problem is with the extra weight they can't go very fast.
Wes and his men close hard now.  The bullets fly fast and
furious swarming all around our boys.

Epps whips the horse, trying to get everything she's got to
give.  This is it:  They get away now, or not at all.  Their
horse finds a little something extra.  She goes faster,
faster...

Suddenly Epps pulls up hard on the reins.  The horse rears
up, she goes wild.  It takes everything Epps has to control
her.  But better that than if she'd taken another stride.
They've come to the edge of a very, very sharp cliff.  Epps
may be a good rider for a novice, but no way he could get
this beast to fly. 

Finally he calms the horse down, but it doesn't matter.  Wes
and the Shi'ites ride up behind them cutting them off.  Wes
stands down from his horse.

Epps and Jaeger, with nowhere to go, do the same. 

WES
The gold; give it to me.

Epps takes the pack from Jaeger, but doesn't throw it to Wes.

WES(CONT)
Give it to me! 

EPPS 
If I give it to you, will you let us go? 

Wes smiles and lies so badly he doesn't even bother trying to
fake it. 

WES 
Sure.  Whatever you want.  For old time
sake.

Epps has got no choice, really.  He tosses the pack to Wes' 
feet who stoops to pick it up.  Wes starts to open the pack.

WES(CONT)
Looks like at the end of the day we 
finally find out who's better than who, 
don't we, Epps?  Like I said; I expected
more from you. 

EPPS
It's like I said; you don't really know
lieutenant John Epps very well, do you? 

Wes rips open the pack.  He's got about one second to see
what's inside.  NO GOLD.  JUST A BOOBY TRAPPED CLAYMORE MINE.

Epps grabs Jaeger and yanks to him to the ground. 

There is a horrific furry of sound and fire that easily
destroys Wes and a few of the Shi'ite standing next to him.
The rest, along with the horses, scatter for dear life.

Epps stays down until the coast is clear, then gets up.
Jaeger, to say the least, is stunned. 

EPPS(CONT)
Damn it.  We lost the horses.

JAEGER
The...the gold... 

EPPS 
It wasn't the gold.  It was the claymore
mine.  The gold's in my pack.

JAEGER
When did you make the switch?

EPPS 
It's always been like that.  When you 
left me down in the crevice to send the
gold up I figured I'd better...take 
precautions.  I rigged it to blow if 
anyone opened the pack.  Just in case 
somebody thought they could do better on
their own. 

JAEGER
But...

EPPS 
We had a deal.  No one touches the gold
until we're out of here.  No one breaks
the deal, no one had anything to worry
about.

JAEGER 
What if it hadn't been Wes?  What if...I
mean, accidently, what if I had... 

EPPS
You shouldn't think about things like
that.  It'll just make you crazy. 

We hold on the two men, on the smoking remains of Wes.  We
hold on them, then:

                           FADE TO:

BLACK 

                           FADE TO:

EXT. DESERT/ROAD - LATER 

Epps and Jaeger come up to the road, a small highway.  It's 
eerie; a road in the middle of the desert.  Quiet.  No cars.
They just stand and stare at it for a beat.

JAEGER
Well? 

EPPS 
A car's got to come along sooner or
later.  When it does, we jack it. 

JAEGER 
How do we do that? 

EPPS 
You lie in the middle of the road, look
like you're hurt.  When the car stops I
run over to the driver and put a gun to
his head. 

JAEGER 
Why do I have to lie in the road? 

EPPS 
Somebody has to.

JAEGER 
Yeah, but why me?  What if the car
doesn't stop? 

EPPS 
Then I'm a rich man. 

Epps sits by the side of the road waiting for a car.  The
only thing he gets is more quiet.  Jaeger sits next to him.
After a couple of beats: 

JAEGER
Epps. 

EPPS
Yeah. 

JAEGER 
I want you to know... I don't know.  I
just think you're a hell of a guy. 

EPPS
Thanks. 

JAEGER 
This whole time, you've kept your head.
You didn't go money simple like me and 
Wes.  You've just been trying to figure
how to get us out of here.  And you've
been fair too.  I mean, even after 
I...you know... 

EPPS 
Threatened to blow my brains out? 

JAEGER 
Yeah.  Even after that.  You didn't take
it out on me, except for maybe making me
lie in the middle of the road now.  But
I'd say you've been very fair.  I just 
think it's a hell of a man who can keep
from going money simple. 

EPPS 
Don't make so much out of it.  Only
reason I haven't figured a way to get all
that money for myself is because I've
been too busy figuring ways to stay 
alive.  Believe me; if I had a minute to
catch my breath I might have played 
things the way you and Wes had.  I'm no 
better than anybody else.  I've just been
busier. 

They sit a while more.  Still no car.

JAEGER
Epps? 

EPPS
What? 

JAEGER 
I'm thinking about taking a trip. 

EPPS 
Thought you were going to buy a car. 

JAEGER
Still am.  There's more gold than I 
thought, and since there's only two of us
now...  Where should I go? 

EPPS
I don't know. 

JAEGER 
I've never been anywhere.  I wouldn't 
know where to go.  Where would you go? 

EPPS 
How the hell should I know? 

Another long beat.  Still no car.

EPPS(CONT)
Australia. 

JAEGER 
What?

EPPS
I'd go to Australia.  Lot of land, not 
many people.  I think after this I'd like
to quit people for awhile.  And the girls
go crazy for brothers down there.

JAEGER
Really? 

EPPS 
That's what I hear.  Don't matter.  Girls
go crazy everywhere for a man with gold. 

From the distance we hear the faint sound of a car motor.  It
draws closer and closer. 

Epps and Jaeger stand.  Knowing they're so close to the end
of a long adventure they become very business like.

JAEGER 
Well, this is it.  We get the car, find 
some Americans.  We find Americans we'll
be all right. 

EPPS 
We'll make up some kind of lie.  They
won't find the gold. 

Epps and Jaeger just stand staring at each other as the car
draws closer. 

JAEGER
Okay.  See you in a minute.

Jaeger goes out and lays in the car's path.  Epps goes to
hide behind some rocks.

The car keeps getting closer and closer.

Jaeger yells over to Epps. 

JAEGER(CONT)
Epps, I don't think he's slowing down. 

EPPS 
He'll slow down.

The car gets closer. 

JAEGER
He's not slowing. 

EPPS 
He's going to slow down. 

The car gets closer. 

JAEGER
Epps...Epps! 

The car barrels right for Jaeger.  Forget what Epps says,
it's not slowing down and Jaeger knows it.

JAEGER(CONT)
Aw, damn!

At the last possible second Jaeger rolls out of the way.  The
car doesn't slow, tearing across the stretch of road where
Jaeger lay, but swerves to avoid him.  The DRIVER loses 
control for a few seconds and is forced to skid to a halt.

Epps runs to the car, rips open the driver's door, and
presses the muzzle of an assault weapon to his head.

EPPS 
You speak English?  DO YOU SPEAK
ENGLISH!? 

DRIVER
(Frightened) 
Y-yes. 

Jaeger runs over and jumps in the car.  Epps gets in behind
the driver, keeping the gun pressed to his head.

EPPS 
Where were you going? 

DRIVER
Baghdad. 

EPPS 
What's in the other direction? 

DRIVER
This road, it leads straight to Kuwait. 

EPPS 
Turn the car around.

DRIVER 
Please, I beg of you.  The American army
is there.  I am Iraqi.  They will kill
me. 

EPPS 
Nobody's going to hurt you.

Epps takes a gold coin from his back and gives it to the driver.

EPPS(CONT) 
You see that?  Gold.  You take us to the
Americans, and we'll give you another
one.  Now drive. 

The driver turns around the car and starts back in the
direction he came. 

They drive on for awhile, mostly in silence.  Epps and Jaeger
are too anxious to have this all over to say much, and the
driver is too scared.  Finally the driver starts to talk. 

DRIVER
You are Americans, yes? 

Neither Jaeger or Epps answer. 

DRIVER(CONT)
We didn't not all want this war, do you
know?  We didn't not all want to invade 
our brothers and sisters in Kuwait.  Now
your army crushes us.  So few days, and 
so many have died.  And many fear we will
all die.  Please tell this to your
people:  We did not want this war.

Still Jaeger and Epps say nothing.  Outside the car the 
traffic flowing in the opposite direction gradually gets
thicker and thicker.

DRIVER(CONT)
I have a brother in our army.  When I 
take you back, will you look for him?  If
he is still alive, will you look for him
and take care of him? 

This last bit gets to Epps.

EPPS 
Yeah.  We'll look for him.

Outside the traffic away from Kuwait has gotten so thick 
everything is at a stand still.  There are Iraqi military
vehicles pulling out, as well as a good many civilian cars
and trucks.  It clogs up both lanes, and envelopes the car.
Some people try to make their way on foot as it is now much
faster.

JAEGER
Look at this.

DRIVER 
Iraqis.  They are fleeing from Kuwait,
from your military.

EPPS 
See if you can't drive around this.

The driver tries to work the car free of the congestion, but
he's wedged in, and not going anywhere.

From out of the sky swoop down a flight of AMERICAN F-15E
FIGHTER JETS.  They swing down on the far end of the highway,
engines roaring like angry lions.  For a second time stands
still.  Everyone on the road stops and looks up at the jets.

Time starts again, and with a deadly vengeance.

The fighter pilots begin to strafe the highway:  Vehicles and
people, civilian and military alike.  There is no
distinction, only carnage.

This is the infamous Al Jahra highway from Basrah to Kuwait
City that was strafed with deadly accuracy over and over on
the last day of the war by American forces.  It became known
as the Highway of Death. 

The huge shells rip a bloody path, shredding cars and trucks,
igniting explosions, straight towards the car with Epps,
Jaeger and the driver.  With barely seconds to go before they
are shot to pieces as well.  They dive from the car, Epps
dragging the driver out, and scramble for cover along the
side of the road. 

The planes turn back for another pass.

JAEGER 
What the hell are they doing?  There're 
civilians in there.

Not even thinking about what he's doing Jaeger jumps up and
screams at the jets.

JAEGER(CONT) 
DON'T SHOOT!  DON'T SHOOT!  THEY'RE
CIVILIANS! 

Epps jumps up and drags Jaeger back down to cover as the
shells fram the jets cut dangerously close to them. 

The jets bank and swoop for another run.

Epps realizes there is something wrong.  He looks around
desperately, but doesn't see...THERE, BACK IN THE CAR! 

EPPS
The gold! 

Epps runs for the car, trying to beat the jets.

JAEGER
No!

Jaeger lunges for Epps but misses him.  Epps snakes his way
through the burning hulks towards their car.  He dodges,
jukes and weaves among shells, shrapnel and explosions that 
go off all around him.  He just makes it to the car, grabbing
up the gold, as the fighters once again swing low and cut
loose. 

A wicked hail of shells reigns down.  It sets off a series of
violent explosions that knocks Jaeger off his feet.  It takes
him a beat to recover.  By then the fighters have done their
job, and fly off. 

Jaeger stands.  He walks towards the road over the plaintive
wails of the barely living.  The car, the gold, Epps... they
are essentially disintegrated.

AS THE CAMERA PULLS BACK AND UP WE SEE THAT IT ISN'T JUST
THEIR CAR AND EPPS THAT ARE GONE.  There isn't much of 
anything left on this road.  Just death, destruction and
bloodshed. 

                           FADE TO:

BLACK 

                           FADE TO: 

INT. MILITARY COURTROOM - MONTHS LATER 

Jaeger is cleaned up, in dress uniform, and sitting at a 
table before a MILITARY TRIBUNAL.  He looks very sullen, as
if this whole adventure has robbed him of his soul. 

The members of the tribunal just look pissed. 

CHIEF JUSTICE 
The members of this tribunal have reached
a verdict.  Based on the evidence 
presented we find the defended guilty as
charged of desertion, insurrection, 
insubordination, and conduct unbecoming.
Further the tribunal will recommend that
the defendant be sentenced to life 
imprisonment, and that from this day 
forward he shall no longer walk as a free
man.  You should consider yourself quite
fortunate, son.  There was a time when 
lesser crimes would have found you before
a firing squad.  I don't know that a 
person like you has much to say for
himself, but it is your right say
something. 

Jager doesn't stand.  He doesn't look at the tribunal.  He
just begins to talk. 

JAEGER 
I'm sorry, I guess.  Not for looking for
the gold, or leaving my post.  You know
what it's like to have gold raining out 
of your hands?  That'll give me enough to
think about the rest of my days in the 
brig.  I'm just sorry about Wes.  He was
all right.  It was the gold that made him
what he became.  If I hadn't found that
map, if I hadn't talked them into going 
searching...Wes just might have made it
home after all.  I guess I feel
responsible for him. 

CHIEF JUSTICE
The way I view things you're responsible
for the lives of two men:  Private First 
Class Wes Hanmond, and Second Lieutenant 
John Epps. 

JAEGER 
Yeah, well, I've been thinking about 
that.  See, there was an explosion and 
everything, but I never really aaw Epps 
get killed.  And nobody ever found the
gold.  I guess they both could have been 
burned to slag.  I guess.  But there were
a lot of bodies out on that road.  A
smart man could have found some 
identification to use.  A smart man could
have made his way up to Syria or Turkey.
A smart man could have gotten himself
right out of the Middle East.  A smart
man with enough gold.  Way I figure, 
right about now old Epps is sitting in a
bar in Sydney, or Melboure, or maybe 
Brisbane telling stories to one of the
prettiest Aussies you ever saw. 

The members of the tribunal just scoff.

CHIEF JUSTICE 
I find it highly unlikely that anyone
could accomplish such a thing.

JAEGER 
Well, Sir, I guess you don't know Second 
Lieutenant John Epps very well, do you? 

Jaeger allows himself a slight smile as he leaves the
tribunal with this question. 

                           FADE TO:

BLACK 


  END







`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
