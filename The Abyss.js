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




THE ABYSS

AN ORIGINAL SCREENPLAY
          BY
    JAMES CAMERON



   August 2, 1988
 Director's Revision


------------------------------------------------------------------------------


      THE ABYSS

OMITTED                                                                 1

OMITTED                                                                 2

TITLE: THE ABYSS -- ON BLACK, DISSOLVING TO COBALT BLUE

EXT. OCEAN/UNDERWATER -- DAY                                            3

Blue, deep and featureless, the twilight of five hundred feet down.
PROPELLER SOUND.  Materializing out of the blue limbo is the enormous but
sleek form of an Ohio-class SSBN ballistic missile submarine.

INT. U.S.S. MONTANA -- DAY                                              4

In the attack center, darkened to womb-red, the crew's faces shine with sweat
in the glow of their instruments.  The SKIPPER and his EXEC crowd around
BARNES, the sonarman.

    CAPTAIN
Sixty knots?  No way, Barnes... the reds don't
have anything that fast.

    BARNES
Checked it twice, skipper.  It's a real unique
signature.  No cavitation, no reactor noise...
doesn't even sound like screws.

He puts the signal onto a speaker and everyone in the attack room listens to
the intruder's acoustic signature, a strange THRUMMING.  The captain studies
the electronic position board, a graphic representation of the contours of
the steep-walled canyon, a symbol for the Montana, and converging with it, an
amorphous trace, representing the bogey.

    CAPTAIN
What the hell is it?

    EXEC
I'll tell you what it's not, it's not one of
ours.

    BARNES
Sir!  Contact changing heading to two-one-four,
diving.  Speed eighty knots!  Eighty knots!

    EXEC
Eighty knots...

    BARNES
Still diving, depth nine hundred feet.  Port
clearance to cliff wall, one hundred fifty feet.

    FRANK
(simultaneously)
Still diving, depth nine hundred feet.  Port
clearance to cliff wall, one hundred fifty feet.

Tension builds in the attack room as the Montana surges to intercept the
intruder.  The exec tensely watches the vector-graphic readout for the side-
scan sonar array.  The sub is running uncomfortably close to the cliff walls.

    EXEC
(low, to Captain)
It's getting tight in here.

    CAPTAIN
We can still give him a haircut.  Helm, come
right to oh six niner, down five degrees.

    HELMSMAN
Coming right to oh six niner, sir.  Down five
degrees.

    NAVIGATOR
Port side clearance one hundred twenty feet
narrowing to seventy-five.  Sir, we have a
proximity warning light.

    EXEC
That's too damn close!  We've gotta back off.

    BARNES
Range to contact, two hundred.  Contact junked to
bearing two six oh and accelerated to... one
hundred thirty knots, sir!

    EXEC
(really freaked now)
Nothing goes one thirty!

Suddenly the control room lights dim almost to blackness.

EXT. U.S.S. MONTANA                                                     5

We see only the effect, not the source, as a large diffuse light passes
rapidly under the sub's hull.  Moments later a shockwave, like an underwater
sonic boom, impacts the sub, slamming it sideways.

INT. U.S.S. MONTANA                                                     6

The bride crew are knocked off their feet, as the ship is buffeted.

    EXEC
Turbulence!  We're in its wake!

SIRENS.  Everyone shouting at once.  The power flickers low.

    CAPTAIN
Helm, all stop!  Full right rudder!

    HELMSMAN
All stop.  Full right rudder.  Hydraulic failure.
Planes are not responding, sir!

Power returns in time for the sonarman to get a glimpse at the side-scan
display... AS THE SHEER CLIFF WALL LOOM BEFORE THEM.

    HELMSMAN
Hydraulics restored, sir.

EXT. U.S.S. MONTANA                                                     7

The cliff wall materializes out of the blue limbo off the port bow with
nightmarish slow-motion.  The sub slams into it with horrific force, scraping
along and bouncing off.  One tail stabilizer is sheared off and the big screw
prangs the wall with an earsplitting K-K-KWANG!

INT. PORT TO TORPEDO ROOM                                               8

With the outer tube-doors torn off, seawater slams in, busting the inner
hatches.  Two-foot thick columns of water, like fire-hoses of the gods,
blast into the room.  Everything vanishes instantly in white spray.

INT. CONTROL RM/ATTACK CENTER                                           9

Everyone is hurled off his feet.  The planesman flights to recover control of
the yoke.

    CAPTAIN
Collision alarm!  Collision alarm!  Lighten
her up, Charlie!

    NAVIGATOR
The torpedo room is flooded, sir!

    CAPTAIN
Blow all tanks!  Blow everything!

    HELMSMAN
Passing twelve hundred feet...

    EXEC
Blowing main tanks!

    HELMSMAN
Twelve hundred fifty feet...

EXT. MONTANA                                                            10

The great sub is being hauled down by the mass of its flooded bow section,
its flanks rushing past us like a freight train headed for Hell.

INT. MONTANA CONTROL ROOM                                               11

The command crew fights futility for control, everyone shouting and terrified.

    EXEC
Main forward tanks ruptured!

    HELMSMAN
Passing thirteen hundred feet...

    EXEC
Too deep to pump auxiliaries!

    CAPTAIN
All back full!  All back full!

    HELMSMAN
Answering all back full.  Passing thirteen hundred
fifty feet... fourteen hundred... fourteen
fifty...

The Captain locks eyes with the Exec amid the din...

    CAPTAIN
We're losing her.  Launch the buoy!

The Exec opens the door to a small box and punches a button.  A red light
comes on.  The Captains takes a deep breath.

EXT. MONTANA                                                            12

A tiny transmitter is ejected from the sub's hell and begins its long ascent
to the surface.  A second later the sub slams down like a piledriver onto a
ledge, tearing open its pressure hull.

INT. MONTANA                                                            13

VARIOUS QUICK CUTS, just flashes and impressions, as...
Seawater blasts down the corridors --
Explodes across the control room, hurling men like dolls --
Floods the cavernous missile bay in seconds --
Bursts through hatches into the reactor room --
Blasts men OUT OF FRAME in a micro-second.

EXT. OCEAN/UNDERWATER                                                   14

In the cobalt twilight we see the Montana slide down the sea cliff, its hull
SCREECHING like the death agonies of some marine dinosaur.  Descending in an
avalanche of silt, it finally disappears into the blackness below... a
blackness which continues almost straight down, 20,000 feet to the bottom of
the Cayman Trough.  The abyss.

EXT. OCEAN SURFACE -- DAY                                               15

Above, in the world, the Caribbean rolling gray under a stormy sky.  The
Montana's emergency buoy pops to the surface, transmitting.

                                    CUT TO:

EXT. OCEAN/20 MILES AWAY -- DAY                                         16

LONG LENS SHOT: three massive Navy Sea King helicopters thundering straight
at us, FILLING FRAME.

REVERSE, as they barrel OVER CAMERA toward a lone civilian ship... an ugly
but very sophisticated deep-sea drilling support ship, the BENTHIC EXPLORER.
It is a twin-hulled monstrosity with a central opening in its deck, around
which crouch enormous cranes, winches and other arcane equipment.

The first Sea King settles onto the helipad, disgorging a contingent of Naval
officers, technicians, and a squad of armed seamen.  A pantomime in the
rotorwash, we see the Benthic Petroleum "company man" KIRKHILL greeting
COMMODORE DEMARCO, the on-scene commander.

INT. BENTHIC EXPLORER/BRIDGE -- DAY                                     17

The bridge is state-of-the-art, with computers and sophisticated navigation
and communications gear, looking like mission control with its bank of video
monitors.  The Drilling Operations Supervisor, LELAND MCBRIDE, and BENDIX,
the crew chief, watch the invaders swarming the deck below.

    MCBRIDE
Does not look good at all.

TIGHT ON VIDEO SCREEN (MINUTES LATER) showing divers working in total
blackness around some sort of installation on the bottom of the ocean.  They
move through the harsh floodlights in dreamlike slow motion, looking like
space-suited figures with their helmets and umbilical hoses.

    DEMARCO (V.O.)
No light from the surface.  How deep are they?

    MCBRIDE (V.O.)
Seventeen hundred feet.

WIDER, showing the Navy contingent crowding the control room.  DeMarco is
hardcore military, brusque and efficient.  Kirkhill is a small man with
pinched features, wearing a shirt and tie, which on a drill ship means
company man and/or dickhead.

    DEMARCO
I need them to go to over two thousand.

    KIRKHILL
They can do it.
  (to McBride)
Get Brigman on the line.

                                    CUT TO:

EXT. UNDERWATER -- DAY (TOTAL DARKNESS)                                 18

1700 FEET BELOW.  A submersible oil-drilling platform, DEEPCORE II, an island
of light in the vast blackness.  Its main framework connects two "tri-
modules" consisting of three cylinders each.  These contain living and work
areas in a pressurized environment.  An umbilical cable, thick as a man's
thigh, runs up from the oil rig into the darkness, to the Benthic Explorer
at the surface.  In a bubble-like dome port window we see the rig foreman, or
"toolpusher," BUD BRIGMAN.  He's talking (via headset) with two divers
working outside... 'CATFISH' DE VRIES, AND LEW 'BIRD-DOG' FINLER.

    BUD
Hey, you guys are milking that job.

    CATFISH
(Kentucky drawl)
That's cause we love freezin' our butts off out
here sooo much, boss.

OMITTED                                                                 19

INT. DRILL ROOM                                                         20

Bud turns from the window and crosses the drill floor.  The working heart of
the rig.  THUNDEROUS MECHANICAL ROAR.  The drill crew, in hardhats and mud-
plastered overalls, tend the massive spinning turn-table in the center of the
chamber.  The semi-automated system requires only five men to operate.  The
others are LUPTON MCWHIRTER, DWIGHT PERRY, JAMMER WILLIS, and TOMMY RAY
DIETZ.  Bud hears his names called above the din by Jammer, a massive
roughneck/diver who stands a good head taller than the rest.

    JAMMER
   (yelling)
Bud!  Hippy's on the bitch-box.  It's a call
from topside.  That new company man.

    BUD
Kirkhill?  That guy doesn't know his butt from
a rathole.  Hey, Perry!

One of the roustabouts, a wiry Texan, turns to him.

    BUD
Do me a favor and square away the mud hose and
those cable slings.  This place is starting to
look like my apartment.

Perry chuckles and sets to the task cheerfully.  Bud EXITS, ducking his head
through a low watertight hatch.

INT. CORRIDOR/TOOLPUSHER'S OFFICE                                       21

Bud tromps down the narrow corridor, his work boots gonging on steel.

    P.A. (HIPPY'S VOICE)
BUD, PICK UP THE TOPSIDE LINE URGENT.

    BUD
I'm coming.  Keep your pantyhose on.

He enters his office, a tiny cubicle with stacks of paperwork, dust-
gathering tech manuals and waterstained Penthouse fold-outs.  He picks up the
phone... punches down a line.

    BUD
Brigman here.  Kirkhill?  What's going on?
  (pause)
I am calm.  I'm a calm person.  Is there some
reason why I shouldn't be calm?

HOLD ON Bud's expression, darkening, as he listens.

INT. CORRIDOR/CONTROL MODULE                                            22

The control module is a long narrow cabin like the inside of a Winnebago,
packed with instrumentation.  At the end is a small bay with multiple
viewports.  Outside, at a 'Christmas tree' pipe installation, a lone diver
can be seen welding.  He is accompanied by a large submersible, FLATBED, and
by a Remotely Operated Vehicle, or ROV, call LITTLE GEEK.  Little Geek is an
underwater robot which operated on the end of a cable-like control TETHER.
It has a single video 'eye' in front, by which the operator pilots the little
machine.  The rig's ROV pilots is ALLEN 'HIPPY' CARNES, who stands by the
window twiddling his joysticks and drinking coffee.  His pet white rat,
BEANY, crawls contentedly around his shoulders.  The door BANGS OPEN.

Hippy jumps, slops his coffee.  Bud strides in.  Not calm.

    BUD
Son of a bitch.

He kicks a chair out of the way and slams his palm down on a switch marked
DIVER RECALL.  A SIREN, blasting through the water from a big hydrophone
loudspeaker.

    BUD
All divers.  Drop what you're doing.  Everybody
out of the pool.

EXT. DEEPCORE/CHRISTMAS TREE                                            A22

Flatbed's pilot, LISA 'ONE NIGHT' STANDING, can be clearly seen behind a
bubble canopy.  She is a no-nonsense lady who holds her own in the mostly
male environment by being one of the best submersible drivers in the
business.  She controls a hydraulic manipulator arm, assisting the diver,
ARLISS 'SONNY' DAWSON, in his work.  Little Geek hovers around them like a
tiny helicopter.  One Night moves the Flatbed arm to Sonny and hands him the
pipe.

    ONE NIGHT
Here you go, hon'.

    SONNY
Just in time, sugar.

They react to Bud's recall, looking toward him up in the control module.

    ONE NIGHT
Dammit, we just got out here.

    SONNY
There was a time when I would have asked why.

One Night makes a grab for his butt with the manipulator claw, which he
narrowly avoids.

                                    CUT TO:

EXT. DEEPCORE/UNDER SUB-BAY                                             23

Flatbed moves underneath the rig, a few feet above the seafloor, with Sonny
riding on its top deck.  It passes under a lit opening and rises toward the
surface of the water in the chamber above.  Little Geek follows like an
obedient dog.

INT. SUB-BAY/MOONPOOL                                                   24

The opening is called the moonpool, and Deepcore's submersibles are launched
through it.  From inside the sub-bay it looks just like a swimming pool.
Flatbed surfaces, nearly filling it.  The chamber also contains CAB ONE, a
similar submersible.  Jammer, Perry, and some of the other drill-room boys
are helping the divers out of the water.  The water at this depth is only
about six degrees above freezing, and these folks are cold and prune-
fingered.  Finler pulls off his demand-helmet, revealing a round, boyish
face.

    FINLER
What's goin' on?  How come we got recalled?

    SONNY
Hell is I know.

One Night jumps 'ashore' from Flatbed's broad deck and joins them.  Catfish
is unzipping his bulky dry-suit.

    CATFISH
Just follow standard procedure, will ya...
flog the dog till somebody tells us what's
happening.

    JAMMER
Hey, Catfish, I'll sell you my October Penthouse
for twenty bucks.

    ONE NIGHT
Save you money, darlin'... the pages are all
stuck together by now.

Bud enters, approaching the group.

    JAMMER
What's goin' on, Boss?

    BUD
Folks, I've just been told to shut down the hole
and prepare to move the rig.

    SONNY
She-hit.

    BUD
We're being asked to cooperate in a matter of
national security.  Now you know exactly as much
as I do.  So just get your gear off and get up to
control.  There's some kind of briefing in ten
minutes.

                                    CUT TO:

INT. DEEPCORE/COMMAND MODULE                                            25

The whole rig crew is somehow jammed into the room for the video briefing.
DeMarco is on the main monitor, with his aides and Kirkhill visible b.g.

    DEMARCO
At 09:22 local time this morning, an American
nuclear submarine, the USS Montana, with 156 men
aboard, went down 22 miles from here.  There has
been no contact with the sub since then.  The
cause of the incident is not known.

PAN AROUND the reactions of the various drill crew members... shocked,
hushed, curious.

    DEMARCO
Your company has authorized the Navy's use of
this facility for a rescue operation.  The code
name is Operation Salvor.

    ONE NIGHT
You want us to search for the sub?

    DEMARCO
No.  We know where it is.  But she's in 2000 feet
of water and we can't reach her.  We need divers
to enter the sub and search for survivors, if
any.

Bud's scowl has been deepening since DeMarco started to talk.

    BUD
Don't you guys have your own stuff for this type
of thing?

    DEMARCO
By the time we get our rescue submersible here
the storm front will be right on us.  But you
can get your rig in under the storm and be on-
site in fifteen hours.  That makes you our best
option right now.

Hippy, born suspicious and recently graduated to paranoid, leans forward...

    HIPPY
Why should we risk our butts on a job like this?

    KIRKHILL
I have been authorized to offer you all special-
duty bonuses equivalent to three times normal
dive pay.

    CATFISH
Hell, for triple time I'd crawl through razor
blades and shower off with lime juice.

    FINLER
I'm here to tell ya', you could set me on fire
and call me names.

    BUD
Look, I don't know what kind of a deal you guys
worked out with the company, but my people are
not qualified for this... they're oil workers.

    DEMARCO
A four-man SEAL team will transfer down to you
to supervise the operation.

    BUD
You can send down whoever you like, but I'm the
toolpusher on this rig, and when it comes to the
safety of these people, there's me... then
there's God.  Understand?  If things get dicey,
I'm pulling the plug.

    KIRKHILL
I think we're all on the same wavelength,
Brigman.  Now let's get the wellhead uncoupled,
shall we?

                                    CUT TO:

INT. DEEPCORE/COMMAND MODULE AND CORRIDOR                               26

Bud stands beside the hatchway as the others file out toward their tasks.
They comment gravely as they pass...

    JAMMER
When Lindsey finds out about this, it's not
gonna be a pretty sight.

    ONE NIGHT
They're going to have to shoot her with a
tranquilizer gun.

                                    CUT TO:

EXT. OCEAN -- DAY                                                       27

A single Navy Sea King churns through the rain under massive thunderheads.
The sea below is whipped by the storm.

INT./EXT. SEA KING                                                      28

PANNING ALONG BOOTED FEET, four pairs of black military size twelves line
up, onto... a pair of Charles Jourdans fives under shapely ankles.

WIDER, revealing the four-man team of Navy SEALs.  And a slender woman in
her early thirties.  She's attractive, if a bit hardened, dressed
conservatively in a skirt and jacket.  Meet LINDSEY.  Project Engineer for
Deepcore.  She's a pain in the ass, but you'll like her.  Eventually.
She's holding on grimly, sitting crammed in with the SEALs and a bunch of
gear, getting tossed around by the storm.  The SEALs are dressed alike in
black fatigues.  They are muscular, finely-tuned and extremely dangerous
special-forces types.  The leader of the SEAL team, LIEUTENANT COFFEY, makes
his way forward to the cockpit.

The pilot is white-knuckling his stick, trying to hold the great beast of a
helicopter in position.  Through the windshield, the deck of the Benthic
Explorer can be seen below, pitching in a violent sea.

    PILOT
No way I'm putting her down.  I shouldn't even
be flying in this shit.

    COFFEY
    (cool)
Just hold it over the deck.

Coffey goes back to the crew deck, moving easily in the bucking craft.  He
nods to the others SEALs, MONK, WILHITE, and SCHOENICK.  In the open side
door, Wilhite clips a 100 foot nylon rope to the airframe and throws out the
coil.  One by one the shoulder the gear-bags, grab the rope, and step out.
Lindsey stands swaying in the chopper door, watching the SEALs fast-roping
to the deck.  One, two, three.  Coffey looks at her.

    COFFEY
You want to be on that ship, there's only one
way it's going to happen.

He's sure she won't go for it.  It's his certainty that gets her.  She sets
her jaw.  Opening her purse she takes out a small plastic bag, puts her
shoes and purse in the bag, and grips the bag in her teeth.  Then grabs
the rope and slides down.

EXT. BENTHIC EXPLORER/HELIPAD                                           29

Swinging wildly in the wind like a human pendulum, Lindsey fast-ropes forty
feet to the deck.  She steps away an instant before Coffey hits behind her.
Lindsey crosses the rainswept deck with athletic strides.  Her nylons are
ruined.  An air-crewman in the chopper lowers two additional equipment cases
using the rescue sling.  The SEALs catch them as they swing radically across
the deck.  They Navy chopper banks and seems to scurry away before the
mounting storm.

                                    CUT TO:

EXT. OCEAN BOTTOM                                                       30

BLACKNESS.  Then shafts of light become visible, above a ridge of rock.
Flatbed appears, trailing two heavy two cables.  Behind it, the mass of
Deepcore emerges from the darkness, its forward lighting array blazing.
Flatbed is towing it like a tug, aided by Deepcore's own mighty stern
thrusters.

INT. DEEPCORE/CONTROL MODULE                                            31

Bud, his feet propped up, uses joystick controls to 'fly' Deepcore,
maneuvering against currents and around seafloor obstacles.  He is guided
by the side-scan sonar display, with Hippy assisting in the sonar shack.
Through the front viewport, Flatbed can be seen out ahead.

McBride appears on the bridge monitor, holding a sheet of weather-fax.

    MCBRIDE (on screen)
Well, it's official, sportsfans.  They're calling
it Hurricane Frederick, and it's going to be
making our lives real interesting in a few hours.

INT. EXPLORER BRIDGE -- DAY                                             32

Bud responds via video.

    BUD
Fred, huh?  I don't know.  Hurricanes should be
named after women.

McBride looks up as the bridge door opens.  Lindsey enters in a blast of wind,
wet as a wharf rat and twice as pissed off.  Maybe Bud is right.

                                    CUT TO:

INT. DEEPCORE/CONTROL MODULE                                            33

Bud is surprised to see Lindsey's face appear on the monitor screen.

    LINDSEY
I can't believe you let them do this!

    BUD
(unpreturbed, almost cheerful)
Hi, Lins.  I thought you were in Houston.

    LINDSEY
I was, but I managed to bum a ride on the last
flight out here.  Only here isn't where I left
it, is it, Bud?

    BUD
Wasn't up to me.

    LINDSEY
We were that close to proving a submersible
drilling platform could work.  We had over seven
thousand feet of hole down for Chrissake.  I
can't believe you let them grab my rig!

    BUD
Your rig?

    LINDSEY
My rig.  I designed the damn thing.

    BUD
Yup, a Benthic Petroleum paid for it.  So as long
as they're hold the pink slip, I go where they
tell me.

    LINDSEY
You wimp.  I had a lot riding on this.  They
bought you... more like least rented you cheap--

    BUD
I'm switching off now.

    LINDSEY
Virgil, you wiener!  You never could stand up
to fight.  You--

Bud hits the switch and the screen goes dead.

    BUD
Bye.

Hippy looks over him, trying very hard not to crack up.

    HIPPY
Virgil?

    BUD
God, I hate that bitch.

    HIPPY
Yeah, well you never should have married her then.

Bud nods fatalistically.

                                    CUT TO:

EXT. EXPLORER DECK/LAUNCH WELL                                          34

Ten foot waves crash through the launch-well, sending up geysers of spray.
Next to the launch-well, crewman have attached a lifting cable to CAB THREE,
eighteen feet of ugly yellow submersible.  It slams violently in its steel
cradle as the drill-ship rolls.  Coffey and Schoenick hand the gear bags in
to Wilhite and Monk though the hatch under the rear of the submersible.

Lindsey approaches, wearing a borrowed roustabout's coverall.

She looks down at the larger of the two equipment cases brought by the SEALs,
lying on the deck.  Stenciled on it are the words: F.B.S./DEEP SUIT/MARK IV.
Coffey and Schoenick push past her to pick it up.

    LINDSEY
Let's go, gentlemen!  We either launch now or
we don't launch.

Coffey looks up in surprise as she nimbly climbs the side of Cab Three and
grabs the lifting shackle, circling her raised hand to signal the crane man.

    LINDSEY
Take her up, Byron!

Cab Three, with Lindsey riding its back, is pulled up out its cradle and
starts to swing violently as Explorer pitches.  The submersible is then
swung out to the center of the launch well.  It sways and gyrates above the
furious water below.  Lindsey drops into the upper hatch.

INT. EXPLORER BRIDGE/D.O.C.                                             35

Kirkhill leans suddenly over the console to look out the window.

    KIRKHILL
What the hell is she doing out there?  Son of a
bitch...
(into microphone)
Lindsey... get out of Cab Three.  Bates is taking
her down.

INT. CAB THREE                                                          36

Lindsey pulls her headset as she dogs down the inside locking levers of the
hatch.

    LINDSEY
Bates is sick.  Besides I've got more hours in
this thing than he does.
  (to Coffey)
A little change of plan.

The little sub is swinging like a pendulum on the cable, and the SEALs,
jammed in with their equipment in the tiny space, are getting slammed into
the walls.  Lindsey is calmly flipping switches as she talks.

    COFFEY
Lady, we better fish or cut bait.

    LINDSEY
Just hold your water, okay?
 (to Kirkhill)
So Kirkhill, we gonna do this or we gonna talk
about it?

INT. EXPLORER BRIDGE/D.O.C.                                             37

The plug is pulled on DeMarco's patience.

    DEMARCO
I don't care who drives the damn thing.  Just get
my team in the water.

    KIRKHILL
Alright, alright.  Christ Almighty!

He gestured dismissively to McBride.

    MCBRIDE
Cab Three, you are clear to launch.

INT./EXT. CAB THREE                                                     38

Lindsey reaches up a grabs a red lever.

    LINDSEY
Roger.
  (to Coffey)
There's only one way it's going to happen...

She pulls the lever hard.  CLUNK-CLANG!  The shackle-release drops the sub.
It freefalls ten feet to the water with an enormous splash and keeps right
on going after Lindsey floods the trim tanks.  Coffey et al have been slammed
hard.

    LINDSEY
Touchdown.  The crowd goes wild.  Explorer...
Cab Three.  We are styling.

    MCBRIDE (filtered)
Roger, Cab Three.

Lindsey cuts on the floodlights and maneuvers the descending submersible so
that the umbilical cable is a few feet ahead on her front port.  Moving up
through her lights, it will guide her down to the rig.  Cab Three free-falls
into increasing darkness.  Soon it is a candle below us in the indigo.

EXT./INT. FLATBED                                                       39

One Night is driving the tug one-handed, pouring coffee from a thermos and
rocking out to the great truck-driving song "Willing" on the beat-box she's
got propped up on the sonar rig.  Fighting white-line fever in the best
tradition.

INT. CONTROL MODULE                                                     40

Bud and Hippy come in for a rousing chorus.

    BUD/HIPPY
... I've been driving every kinda rig that's
ever been maaaaade...

EXT. DEEPCORE                                                           41

Lit up like a proud Peterbilt, the rig crossed the trackless wastes.  We
hear them singing, carried OVER.

EXT. OCEAN DEPTHS/CAB THREE                                             42

In total blackness, the submersible descends along the rigorous line of the
umbilical cable.  Two hundred feet below it, the lights of Deepcore resolve
out of the darkness.  Now we can see the rig crawling over the ocean bottom
like some monster lawnmower.

    LINDSEY (V.O.)
Deepcore, Deepcore... this is Cab Three on
final approach.

    HIPPY (V.O.)
Gotcha, Cab Three.  Who is that?  That You,
Lindsey?

INT. DEEPCORE/CONTROL MODULE                                            43

Bud stop singing and snaps around at the mention of her name.

    LINDSEY (V.O.)
None other.

Bud's expression is nothing less than stricken.

    BUD
Oh no... you gotta be kidding me.

EXT./CAB THREE/DEEP CORE                                                44

Lindsey executes a 180 degree turn and cruises over the control module, back
through the A-frame toward the docking hatch.  The flange of Cab Three's
lockout hatch settles over the pressure collar on the rig's back.  There is
a CLUNK as it mates up.

INT. DEEPCORE/COMPRESSION CHAMBER/GAS CONTROL STATION                   45

Lindsey drops down from the hatch into the small cylindrical pressure chamber.
The SEALs drop down behind her, passing their gear through hand-over-hand.
The chamber is spartan, with steel benches, a folding card table, breathing
masks, and medical supplies.  Catfish greets them through the tiny porthole
at one end.

    CATFISH
Howdy, y'all.  Hey, Lindsey!  I'll be damned!
You shouldn't be down here sweet thing, ya'll
might run ya stockings.

    LINDSEY
Couldn't stay away.  You running mixture for us?
Good.  Couldn't ask for better.

    CATFISH
Okay, here we go.  Start equalizing, y'all.

HISSSS of inrushing compressed gas.  The pressure in the chamber rises.  The
breathing mixture is composed of helium, oxygen and nitrogen.  Catfish
monitors it carefully from a station outside the chamber, watching the
gauges with a practiced eye.  Lindsey and the SEALs all grab their noses
and start making funny faces... popping their ears with the familiar diver's
'equalization' technique.  They continue as:

    LINDSEY
Get comfortable.  The bad news is we got six
hours in this can, blowing down.  The worse news
is it's gonna take us three weeks to decompress
back to the surface later.

    COFFEY
We've been fully briefed, Mrs. Brigman.

    LINDSEY
Don't call me that, okay... I hate that.  Alright,
from now on we watch each other closely for
signs of HPNS...

    MONK
(as if by rote)
High-Pressure Nervous Syndrome.  Muscle tremors,
usually in the hands first.  Nausea, increased
excitability, disorientation.

    LINDSEY
Very good.  About one person in twenty just can't
handle it.  They go buggo.  They're no way to
predict who's susceptible, so stay alert.

    COFFEY
Look, we've all made chamber runs to this depth.
We're checked out.

    LINDSEY
Oh... chamber runs.  Uh huh, that's good.
(Coffey turn away)
Well, hey... you guys know any songs?

They ignore her.  Start going over some diagrams of the Montana's interior.
It's going to be a long six hours.

INT. GAS CONTROL STATION -- HOURS LATER                                 46

Catfish checks his watch, then reaches over and adjusts a value on the tri-
mix manifold, watching the gauges.  Satisfied, he leans over to the pressure
window in the door, checking out the SEALs.  Hippy has come down from the
control deck for an advanced look are the interlopers.  Jammer is in a chair,
reading a Louis L'Amour paperback.

    CATFISH
Those guys ain't so tough.  I fought plenty of
guys tougher'n them.

    HIPPY
Now we get to hear about how he used to be a
contender.

Catfish hold up one calloused fist up in front of Hippy's face.

    CATFISH
You see this?  They used to call this the Hammer.

    JAMMER
Hippy wasn't born then.

INT. PRESSURE CHAMBER                                                   47

It looks like the end of a long bus trip.  Everyone silent... leafing
through beat-to-hell magazines or just staring.  Lindsey has her feet propped
up on the smaller of the SEALs' two equipment cases.  She casually toes open
one of the latches, then the other.  Glances at Coffey.  He's reading.  She
begins to lift the lid with her toe.  Gets a GLIMPSE INSIDE, of packing foam,
and what looks like a SMALL BLACK METAL BOX.  Then... WHAM!  Coffey's foot
comes down on the lid, slamming it shut.  Startled, she looks up into his
cool gaze.

    COFFEY
Curiosity killed the cat.

                                    CUT TO:

INT. GAS CONTROL STATION/CHAMBER DOOR -- LATER                          48

TIGHT ON CATFISH'S hands... closing values... spinning the wheel on the
chamber hatch.  CUT WIDER as it cracks open with a virgin's sigh and swings
aside.

    CATFISH
Y'all'er done to a turn and ready to serve.
Everybody okay?

The SEALs nod peremptorily and shoulder their gear.  Lindsey exists first,
followed by Monk, Wilhite, and Schoenick.  Coffey bends to relatch the small
equipment case.  He is alone for one moment in the chamber.  He raises his
hand and stares at it.  The fingertips are trembling the slightest bit.  He
clenches them into a fist and walks out.

INT. CORRIDOR                                                           49

As Lindsey emerges into the main corridor of the rig, she bumps into a large,
dark mass.

    LINDSEY
Hey, was there a wall here before?  I don't
remember a wall here.  Oh, Jammer!  Hi.

The 'wall' grins down to her.

    JAMMER
Howdy, there, little lady.

Coffey emerges behind them and, ignoring Lindsey, faces Jammer.

    COFFEY
  (to Jammer)
Show us the dive prep area.  We need to check
out your gear.

Jammer scowls, turns and leads the SEALs in the sub-bay.  Catfish and Lindsey
exchange a look.

    LINDSEY
Those guys are about a much fun as a tax audit.

                                    CUT TO:

INT. COMMAND MODULE                                                     50

TIGHT ON HIPPY, bathed in the light of the sonar display.  He is making
kissing sounds at Beany, who has his inquisitive nose right up to Hippy's
lips.

    LINDSEY
Hippy, you're going to give that rat a disease.

WIDER, as Hippy and Bud to see Lindsey leaning in the doorway.  She and Bud
size each other up.  He opts for a jovial approach, his eyes wary.

    BUD
Well, well.  Mrs. Brigman.

    LINDSEY
Not for long.

Lindsey crossed past him, her eyes scanning the banks of equipment, almost
unconsciously checking, checking... getting the pulse of her big iron baby.

    BUD
You never did like being called that, did you?

    LINDSEY
Not even when it meant something.
(looking through the front port)
Is that One Night up in Flatbed?

    BUD
Who else?

Lindsey leans past Bud to the gooseneck mike on the console.

    LINSEY
Hi, One Night, it's Lindsey.

INT. FLATBED                                                            51

One Night mimes a puking motion, finger down her throat.  Then she replies
with sickening sweetness...

    ONE NIGHT
Oh, hi, Lindsey.

INT. COMMAND MODULE                                                     52

Lindsey fives the sonar shack the once-over.  She tweaks some knobs.

    BUD
I can't believe you were dumb enough to come
down.  Now you're stuck here for the storm...
dumb, hot-rod... dumb.

    LINDSEY
Look, I didn't come down here to fight.

She crosses past Bud and exits into the corridor.  Bud bolts out of the chair
to follow her and Hippy scrambles in to take over.

INT. CORRIDOR/LADDER-WELL/LEVEL ONE LANDING                             53

Bud catches up with Lindsey in the corridor, and through the following keeps
pace with here as she make here inspection.

    BUD
Then why'd you come down?

She stops abruptly to look at a leaky pipe.  He almost slams into her.  She
moves on, climbing down the ladder to the lower level.

    LINDSEY
You need me.  Nobody knows the systems on this
rig better than I do.  What is something was
to go wrong after the Explorer clears off?  What
would have you done?

    BUD
Wow, you're right!  Us poor dumb ol' boys might've
had to think for ourselves.  Coulda been a
disaster.

On the lower level landing, Lindsey opens a hatch into one of the machine
rooms.  ROAR OF PUMPS AND COMPRESSORS.

INT. MACHINE ROOM                                                       54

Lindsey enters and moves expertly through the dark labyrinth of pipes and
roaring machinery.  Her eyes rove constantly over fittings, gauges, circuit
panels.

    BUD
 (yelling)
You wanna know what I think?

    LINDSEY
Not particularly.  Jeez, look where this is set!
Morons.

She scowls at a pressure gauge and turn a valve minutely.

    BUD
I think you were worried about me.

    LINDSEY
That must be it.

Lindsey's on the move again, and Bud scrambles through the pipes to keep up.

    BUD
No, I think you were.  Come on, admit it.

    LINDSEY
I was worried about the rig.  I've got over four
years invested in this project.

    BUD
Oh, yeah, right... and you only had three years
with me.

She looks up at him.

    LINDSEY
You've got to have priorities.

                                    CUT TO:

INT. BUD'S ROOM                                                         55

Darkness.  The door opens and Bud snaps on the light.

    BUD
My bunk's the only one I can guarantee won't be
occupied.  You can grab a couple hours before
we get there.

Lindsey slips past him into his tiny state-room, the only private bunk on the
rig.  Rank had its privileges.  His hand on the door is just level with her
eyes.  She notices his wedding ring, a massive band of pure titanium
(something your fiancee might have picked out if she had a degree from
M.I.T.).

    LINDSEY
What are you still wearing that for?

    BUD
I don't know.  Divorce ain't final.  Forgot to
take it off.

Bud stays in the doorway.  Lindsey takes a heaps of Bud's cloths off the
narrow bunk.  Start unconsciously straightening the room.

    LINDSEY
I haven't worn mine in months.

    BUD
Yeah, what's-his-name wouldn't like it.  The
Suit.

    LINDSEY
Do you always have to call him that?  The Suit?
It makes you sound like such a hick.  His name
is Michael.

Lindsey takes off her borrowed tennies and socks.

Bud eyes her, sounding too causal.

    BUD
So what about "Michael" then... Mr. Brooks
Brothers... Mr. BMW.  You still seeing him?

    LINDSEY
No, I haven't seen him in a few weeks.

    BUD
What happened?

    LINDSEY
Bud, why are you doing this?  It's not part of
you life any more.

    BUD
I'll tell you what happened... you woke up one
day and realized the guy never made you laugh.

    LINDSEY
You're right, Bud.  It was just that simple.
Aren't you clever?  You should get your own
show... Ask Dr. Bud, advice to the lovelorn
from three hundred fathoms.

She closes the watertight door, forcing him out.  Locks it.  She turns and
throws her shoe hard against the far wall.

    LINDSEY
AAAARRRGGH!

She flops down on the bed, sitting... staring at the wall.  Her armor is
gone.  She looks small and vulnerable.  A long beat.  She reaches over to the
tiny sink.  Amid the clutter is a bottle of Bud's aftershave.  She unscrews
it and takes a sniff.  Catches herself.  Tosses it.

    LINDSEY
Shit.

INT. QUARTERS/HEAD                                                      56

Bud barges into the tiny head and puts some soap on his ring finger.  He pulls
the ring off roughly and throws it into the toilet.  He reaches forward to
flush.  Can't do it.  Now really pissed off at himself, he reaches into the
toilet bowl, wrist deep in the chemical-blue water, and salvages the ring.
He puts it on and washes his hands.  The right hand stays faintly blue no
matter how hard he scrubs.

    BUD
Shit.

                                    CUT TO:

EXT. DEEPCORE                                                           57

The platform is stopped, hovering in place.  Like a great spacecraft setting
down on a barren planet, the rig settles into the bottom ooze.  Flatbed
releases its tow lines and heads back to its berth inside.

                                    CUT TO:

INT. SUB-BAY                                                            58

CLOSE ON A PHOTOGRAPH, actually a computer-composited down-looking scan from
a towed LIDAR (laser imaging sonar) rig.  It shows a faint, blurry outline of
the Montana lying on her side on a ledge part-way down the canyon wall.  There
is no detail.  A finger points to a flat ledge nearby.  An "X" has been put
on with a grease pencil.

    COFFEY (V.O.)
This is us.  We're just on the edge of the Cayman
Trough.  The Montana is here, on its side, 300
meters away and 70 meters below us.  We think she
slid down the wall, and lodged against this
outcropping.

CUT WIDE, showing the rig crew gathered around a worktable in the sub-bay.
The divers, Bud, Catfish, Sonny, Finler, Jammer, and the four SEALs have
their dry-suits on.  The pre-dive briefing.  Lindsey, One Night, and Hippy
will crew the submersibles.  Wilhite is going around clipping DOSIMETER
BADGES on everybody.

    SONNY
This tells us how much radiation we get?

    HIPPY
Hey, whoah... I can't handle no radiation, man.
Forget it!  Include me out.

    CATFISH
Hippy, you pussy.

    HIPPY
What good's the money if your dick drops off in
six months?

    COFFEY
We'll take reading as we go.  If the reactor's
breached or the warheads have released
radioactive debris, we'll back away.  Simple.

    BUD
Okay... Hippy's not going... McWhirter, you
can run Little Geek.

Bud pats the top of a small ROV, sitting next to its larger brother, Big
Geek.

    HIPPY
No way!  No way!  He can't fly an ROV worth
shit.  I'll go.  Shit!

    COFFEY
   (to all)
On the dive, you will do absolutely nothing
without direct orders from me, and you will
follow my instructions without discussion.  Is
this clear?  Alright, I want everyone finished
prep and ready to get wet in fifteen minutes.

The rig crew disperses, picking up helmets and diving gear.  Some are studying
the diagrams of the Montana's interior layout.  Bud takes Coffey aside as
the others prepare.

    BUD
Look, it's three AM.  These guys are running on
bad coffee and four hours sleep.  You better
start cutting them some slack.

    COFFEY
I can't afford slack, Brigman.

    BUD
Hey, you come on my rig, you don't talk to me,
you start ordering my guys around.  It won't
work.  You gotta know how to handle these
people... we have a certain way of doing things
here.

    COFFEY
I'm not interested in your way of doing things.
Just get your team ready to dive.

End of discussion.  Coffey is walking away.  Burning, Bud crosses to his gear
locker.  Picks up his helmet.  Finler is suiting out next to him.

    FINLER
Hey, you know your hand is blue?

    BUD
Shut up and get your gear on.

NEARBY, Monk comes over to pick his helmet up off the worktable.  Hippy
points to the heavy equipment case that says F.B.S. DEEP SUIT/MARK IV.

    HIPPY
I've been meaning to ask you what this thing is.

Mink opens the case and shows them an unfamiliar diving suit, what looks like
a space helmet, and a large backpack.

    MONK
Fluid breathing system.  We just got them.  We
use it if we need to go really deep.

    HIPPY
How deep?

    MONK
Deep.
(shrugs)
It's classified... you know.  Anyway, you
breathe liquid, so you can't be compressed.
Pressure doesn't get to you.

Catfish is grappling with the concept.

    CATFISH
You're saying you get liquid in your lungs?

    MONK
Oxygenated fluorocarbon emulsion.

Monk take a clear plastic box full of O-rings off the shelf and dumps them
out.  He opens a valve on the backpack and allows some of the fluid inside
it to drain into the box.  Then he take Beany by the tail off Hippy's
shoulder.

    HIPPY
Hey!

    MONK
Check this out.

He drops Beany in the box and, before Hippy can protest, closes the lid.
Beany is forced under the surface.  He struggled for a second, and bubbles
come out of his mouth.  Then he casually swims around in there, completely
submerged... breathing liquid.  Catfish and the others stare into the box,
amazed.

    MONK
See?  He's diggin' it.

Monk takes Beany out and hold him by the tail for a few seconds to drain his
lungs.  Then hands him back to Hippy.  The rat is annoyed, but otherwise
alright.

    CATFISH
This is no bullshit hands down the goddamnedest
thing I ever saw.

                                    CUT TO:

EXT. DEEPCORE/DROPOFF                                                   59

Three sets of moving lights move outward from Deepcore.  Cab One and Three,
with Lindsey and Hippy at the controls respectively, and One Night in the
Flatbed.  Lindsey is in the lead.  She approaches the cliff-like drop-off
and starts to descend.

    LINDSEY
Com-check, everybody.  Flatbed, you on line?

    ONE NIGHT
Ten-four, Lindsey, read you loud and clear.

    LINDSEY
Cab Three?

    HIPPY
Cab Three, check.  Right behind you.

    LINDSEY (V.O.)
What's you depth, Cab Three?

    HIPPY
1840... 50... 60... 70...

    LINDSEY
Going over the wall.  Coming to bearing 065.
Everybody stay tight and in sight.

    ONE NIGHT
Starting out descent.  Divers, how're you doing?

EXT. FLATBED                                                            60

Eight divers ride the back of Flatbed like itinerant workers on the way to
the fields.  Bud and his civilian crew, Catfish, Finler, and Jammer... sit
across from the SEALs.  They are in their gear and breathing from umbilical
hooked in Flatbed's low-pressure manifold.

    BUD
Okay so far.

    JAMMER
How deep's the drop-off here?

    CATFISH
This here's the bottomless pit, baby.  Two and
a half miles straight down.

    COFFEY
Knock off the chatter.  Cab One, you getting
anything?

INT./EXT. CAB ONE                                                       61

Lindsey consults her array of instruments.

    COFFEY
Cab One, do you see it yet?

    LINDSEY
The magnetometer is pegged.  Side-scan is showing
a big return, but I don't see anything yet.  Are
you sure you got the depth right on this?

    BUD (V.O., filtered)
You should be almost to it, ace.

She turns the submersible and...

The spotlight flares back from the great brass screw of the Montana.  It
dwarfs Cab One, FILLING FRAME.

    LINDSEY
Uh, yeah, roger that... uh, found it.

EXT. MONTANA/SUBMERSIBLES                                               62

Cab One maneuvers along the flank of the enormous sub, while Flatbed and Cab
Three move above it.  Wilhite take readings with a hand-held neutron counter.

    COFFEY
Cab One, radiation readings?

    LINDSEY
Neutron counter's not showing very much.

    COFFEY
Wilhite, anything?

    WILHITE
Negative.  Nominal.

    COFFEY
Just continue forward along the hull.

    LINDSEY
Copy that, continuing forward.  You just want
me to get shots of everything, right?

    COFFEY
Roger, document as much as you can, but keep
moving.  We're on a tight timeline.

    LINDSEY
Copy that.

The great black hull of the Montana recedes into the darkness beyond the
puny beams of their lights.  It seems bigger than the Titanic and just as
eerie in its final resting place.  On it side, the sub's top deck becomes a
wall along which the tiny submersibles are moving.  Ahead, in the lights, is
a white painted circle.

    COFFEY
That's the midship hatch.  You see it, Cab Three?

    HIPPY
Roger, I see it.

    BUD
Just get around so your lights are on the hatch.

    HIPPY
Check.  Then I just hang with these guys, right?

    COFFEY
Right.

    ONE NIGHT
How do you want me?

    COFFEY
Just hold above it.  Alright, A team.

Wilhite, Schoenick, and Monk unhook their short whip-umbilicals from the
central manifold and roll off the side of Flatbed.  They maneuver down toward
the sub's hatch.  Hippy guides Cab Three in closer to the hatch area.

INT. CAB THREE                                                          63

Hippy turns to Perry back in the lockout chamber, ready to launch Little Geek.
The ROV has a handheld neutron-counter gripped in its manipulator arm.

    MONK (V.O.)
Stand by on the ROV.

    HIPPY
Perry, stand by on the ROV.
(to Little Geek)
Sorry about this, little buddy.  Better you than
me, know what I mean?

Hippy nods and Perry drops Little Geek through the hatch into the water and
feed out a length of tether.  Hippy picks up the control box and watches the
video screen, guiding the ROV toward the Montana's hatch.

EXT. MONTANA HATCH AREA                                                 64

The three SEALs have unlatched the deck cover and revealed the hatch.  They
open the out hatch and Monk swims down into to narrow escape trunk.  He bangs
on the inner hatch with a wrench, listening carefully with his helmet pressed
against it.

    MONK
It's flooded.  Alright, I'm opening her up.

Straining hard in the confined space, he get the lower hatch open, then swims
backs out immediately.  He gestures to Hippy, via Little Geek's vision, and
Hippy flies the ROV into the hatch.

EXT./INT. CAB ONE/MISSLE DECK                                           65

Meanwhile Cab One and Flatbed have proceeded forward along the hull.  Beyond
Lindsey's front port, the great hatches of the Trident missile tubes roll
toward us in procession.  Several of the hatch covers have been forced
partway open by the warping of the hull.

    COFFEY (V.O.)
Radiation is nominal.  The warheads must still
be intact.

    LINDSEY
How many are there?

    COFFEY (V.O.)
24 Trident missiles.  Eight MIRVs per missile.

    LINDSEY
That's 192 warheads... And how powerful are
they?

    SCHOENICK
Your MIRV is a tactical nuke, 50 kilotons
nominal yield.  Say times time Hiroshima.

    LINDSEY (V.O.)
Jesus Christ... this is World War Three in a
can.

    COFFEY (V.O.)
Let's knock off the chatter, please.

INT. CAB THREE                                                          66

TIGHT ON VIDEO SCREEN -- LITTLE GEEK'S CAMERA.  Passing through a hatch, into
a large grotto filled with pipes and machinery.  The engine room.

    MONK (V.O.)
Getting a reading?

    HIPPY
It's twitching but it's below the line you said
was safe.

EXT. MONTANA MIDSHIP HATCH                                              67

Monk moves into the opening.

    MONK
Alright.  Let's get in there.

Wilhite and Schoenick follow him through the escape trunk, into the dark
corridor beyond.

EXT. MONTANA/BOW SECTION                                                68

Out of the darkness ahead emerges the trailing edge of the sail, big as a
five-story building.  Far below her, Flatbed moves along the edge of the
ledge which supports the vast sub.  Its lights, and Lindsey's strobes, reveal
the tremendous damage to the forward section as they pass the sail.  The torn
and twisted hull looms above Flatbed as it sets down.

Coffey indicated an enormous rent where the bow section is almost torn away
from the rest of the hull.

    COFFEY
We'll go in through that large breach.

    BUD
Let's go, guys.

Bud's team leaves Flatbed, swimming forward.  The opening is a black mouth in
their lights.  Coffey moves inside.  Bud attaches one end of an orange nylon
line to a piece of pipe and moves into the wreck behind him.

    BUD
Take it slow, stay on the line, and stay in
sight.  Watch for hatches that could close on
you, or any loose equipment that could fall.

Jammer, Catfish, Finler, and Sonny follow him inside.

INT. MONTANA/FORWARD BERTHING SECTION                                   69

They find themselves in the forward berthing compartment with its rows of
bunks.  The room is twisted and disheveled, with bedding hanging from the
bunks like the lolling tongues of dead dogs.  Papers float in gentle
eddying currents, letters, pages from paperback novels, photos of girlfriends.
Bud pays out the line and follows Coffey forward.  As they pass sealed doors,
Coffey pounds with a tool, listening.  All flooded.

INT. ENGINE ROOM                                                        70

Monk leads his team along a corridor, following Little Geek's tether.  Through
a hatch into the engine room.  Their lights play over flooded machinery.

INT. COMPANIONWAY/CONTROL ROOM AND ATTACK CENTER                        71

From the berthing Coffey's team swims up a companionway towards the attack
center.  He pulls at a buckled watertight door.

    COFFEY
It's jammed.  Give me a hand.

Jammer and Bud squeeze in around Coffey.  Together they wrench the door open
on its squealing hinges.  It give way suddenly, flying open.  The suction
pulls SOMETHING THROUGH.  It slams Bud's shoulder.  He turns.  A FACE...
RIGHT IN FRONT OF HIM!  He jerks back, gasping.

Face to face with Barnes, the sonarman.  The ensign seems unmarked, merely
dismayed at his own mortality, judging from his wide eyes and mouth.  Coffey
reaches past Bud and pushes the ensign's body out of the way.

    COFFEY
Alright, let's keep moving.  We knew we were
going to see this.

They enter the control room.  Their lights play over the high-tech wreckage.
Floating debris and bodies make shifting shadows on the walls as they swirl
in the currents.  A languid, weightless waltz.  They move through the carnage.
Their lights pick out tableaux... the planesman still strapped in his chair,
someone jammed into the ceiling pipes, hanging down.  Dead faces, pale in the
lights.  Still.  We see only glimpses.

Coffey locates the captain's body and rolls it over.  Removes the missile
arming key which hangs on a chain around the dead man's neck.  Moves on. All
business.  Bud turns back to his guys.  Checking them.  He notices Jammer is
breathing so rapidly he's fogging his helmet.  Catfish, Finler, and Sonny
aren't much better.  A wave a panic seems imminent.

    BUD
How you guys doing?

    SONNY
I'm alright, I'm dealing.

    CATFISH
Triple time sounds like a lotta money, Bud.  It
ain't.  I'm sorry...

    BUD
We're here now.  Let's get her done.

We see Bud working, calming them, talking them through it.  He's sweating
rivers in his helmet, not looking too steady.  His projection of calm to the
others is his own salvation.

Coffey pauses in the doorway to the communications room.

    COFFEY
This part I do alone.  Brigman, take you men and
continue aft.  Split up into two teams of two.
Let's get moving... we head back in fourteen
minutes.

Bud leads his team into a narrow corridor.

INT. CORRIDOR/ROOMS                                                     72

They search the rooms along the corridor with their lights until they come to
a vertical hatch, open.  a pit of darkness below.

    BUD
Okay, Cat, Lew, Sonny.  You guys stay on this
deck.  Hook you line onto mine.  Any problem,
you tug my line.  Two pulls.  Jammer, you're
with me.

Bud drops down through the hatch to the level below, followed by Jammer, who
barely fits through.  Catfish hooks his safety line onto Bud's with a
carabiner and move along the corridor with the others.

EXT./INT. CAB ONE                                                       73

Lindsey circles the hull, documenting, photographing.  Her strobes sear the
darkness, give glimpses of the dead leviathan's form as her tiny submersible
circles it like a bee.

INT. COMMUNICATIONS CENTER                                              74

Working from a plastic card, Coffey spins the dial on the wall safe and opens
it.  He removes several plastic binders... the code books.  He also grabs
handfuls of classified documents and orders, and a set of missile arming keys,
all which he places in a pouch at his waist.

INT. CORRIDOR                                                           75

Bud leads Jammer through a long, claustrophobically narrow corridor, tapping
on the walls and hatches periodically.  After he taps, he waits a few
moments.  There are no answering taps.  They open doors and shine their lights
into the rooms.  The are bodies, but they seem anonymous.  Crumpled shapes
in khaki or blue.  They undog and open a hatch.  Beyond it is the largest
chamber of the sub, the...

INT. MISSLE COMPARTMENT                                                 76

The missile compartment is the large gallery a hundred and twenty feet long
and forty feet high, with two rows of vertical launch tubes, 24 in all.  The
chamber is divided into three levels by a floor of open steel grillwork.

    JAMMER
Where are we?

    BUD
Missile compartment.  Those are the launch tubes.

They sweep their lights around the chamber.  Jammer turns... his beam
illuminating a body just beyond the door.  A coveralled seaman turning
slowly in the eddying current.  Small albino crabs crawl slowly over the
man's face.  One scuttles out of his gaping mouth.

    JAMMER
Lord Almighty.

    BUD
Hey, you okay?

Bud goes to him.  Gets up close to his face.  Sees that he's not.  That he's
hyperventilating.  Fighting nausea.  Bud grabs him by the shoulders.

    BUD
Deep and slow, big guy.  Deep and slow.  Just
breathe easy.

    JAMMER
I... they're all dead, Bud.  They're all dead.
I thought... some of them... you know...

    BUD
I'm taking you back out.

    JAMMER
No!  I'm okay now.  I just don't... I can't go
any further in.

Bud sees that the big diver's breathing has stabilized.  He looks at his
watch.  Checker Jammer's pressure gauges.

    BUD
Okay, Jammer.  No problem.  You stay right here.
I have to go there to the end... you'll see my
lights.  We'll stay in voice contact.  Just hold
onto the rope.  Five more minutes.  Okay?

    JAMMER
Yeah, okay.  Okay.

He moves off through the center aisle of the gallery swimming between the huge
cylinders.  He pays out the lifeline as he goes.

INT. COM-ROOM                                                           77

Coffey is working rapidly and efficiently, moving from one rack of electronics
gear to the next, setting thermite grenades at vital points.  As the thermite
ignites, it generates an intense arc-bright light and tremendous heat.  The
circuit chasses melt.  Coffey works calmly in the infernal glare.

INT. MISSLE COMPARTMENT                                                 78

Bed negotiates his way through the tangle of wreckage near the far end of the
missile compartment.  He goes down a stairwell to the lower level.  A HUNDRED
FEET AWAY, Jammer loses sight of Bud's dive-lights.  He starts to get
nervous.  Suddenly his own lights begin to DIM, flickering lower and lower.
They become little orange candles, the filament barely glowing.  The darkness
closes in.

    JAMMER
Bud?  BUD?!  You readin' me?  BUD?!!

BUD, at the same moment, is fiddling with the connector cables on his helmet
lights, which are dimming and flickering.  He hears nothing from his helmet
transceiver.

JAMMER, smacks the side of his helmet.  Shakes the transceiver on his belt.
Nothing... just static.  Then even the static dies.  Panic time.

He grabs the safety line and pulls twice.  Hard.  It is snagged on a sharp
metal edge ten feet from him.  He pulls twice more, harder, hauling the
thing.  The line severs.  Jammer stared at the frayed and floating toward
him.  His eyes bug.  He looks all around in the darkness.  Can't see Bud.
Can't decide what to do.  We can see hysteria revving up inside him like a
flywheel.

Then he becomes aware of a faint radiance flickering over the walls.  It is a
cold and ethereal light, unlike the warm-white of their dive lights.

It grows brighter.  He turns slowly toward it.

The glow is moving beneath the steel grill of the deck, sending shafts of
cold light flickering upward hypnotically, coming toward him.

    JAMMER
Bud?  Is that you?

C.U. JAMMER, shielding his eyes, staring into the radiant source.

Guess what, Jammer?  It's not Bud.  In the brightest center of the glow,
SOMETHING is moving, a figure casting strange inhuman shadow across the walls.
Jammer blinks against the glare, his face registering total, outright
astonishment melting into terror.

The glare pulses subtly, hypnotically.  The shifting shadow falls across
Jammer.  He finally snaps out of his fixity...

Screaming and gulping air he spins away and starts clawing hand over hand
through the treacherous wreckage.

His harness catches on a twisted pipe.

He struggles, totally out of control... the big man reduced to a blind panic.

Jammer heaves forward with all his adrenalized strength.

He tears free of the entangling debris.  Launches like a torpedo... slamming
his backpack full force into the top sill of the hatchway.  His tri-mix
regulator takes the full brunt of the impact.

ON BUD, swimming furiously back toward Jammer's position.  The strange
radiance is gone.  His dive light flare back to full brightness.

    BUD
Jammer?  Answer me, buddy,  JAMMER?!

He reaches Jammer only to find him thrashing violently in place.  A seizure.
Bud grapples with him.

    BUD
Hang on, big guy.  Hand on!

Catfish, Sonny, and Finler arrive from the corridor a moment later.  They
leap into the fray.

    BUD
He's convulsing!

    CATFISH
It's his mixture!  Too much oxygen!

Then they're all yelling at once, grappling with the big man, struggling with
the valves on his breathing gear.

    FINLER
Crank it down, man!  We're gonna losing him...

    BUD
SHIT, it's stuck... goddamnit!

    SONNY
You got it?!  You got it?

    BUD
Yeah, yeah... yeah.  It's turning.

Jammer's convulsion ends.  He goes limp.

    BUD
We gotta get him out of here.  Come on!
(to Jammer)
Hang on, buddy.

They drag Jammer's slack form into the corridor, hauling their way rapidly
back along the lifeline.

INT./EXT. CAB ONE & MONTANA SAIL                                        79

Lindsey is approaching the monolith of the sail, maneuvering to clear the
horizontal diving plane.  Then her lights go dim and her thrusters loose
power.

Suddenly a bright corona breaks around the bulk of the sail and SOMETHING
appears right in front of her, a glowing object moving like a bat out of
hell right at her!  It is slightly smaller than submersible and we only get
a glimpse.  What we think we see in the diffuse glow is a translucent ovoid,
open at the front with a spinning vortex of light inside... like some
hallucinatory jet engine.  And it's hauling ass.

Lindsey jinks left.  The object jogs right.  She fights the control as her
sub slews around, slamming broadside into the sail.  K-BAM!  Her power comes
back up.  Righting Can One, she spins to look through the aft viewport in
time to see the object racing away in a broad arc.  It pulls a high-G turn
and dives straight down.

We see the object zip behind Flatbed.  One Night can't see it.  The thing
spirals down into the darkness like a hit-and-run drunk, diving along the
wall into the abyss until it is lost to view.

HOLD ON Lindsey excited, amazed... dazed.  Her hands are shaking.  Suddenly
Bud's voice blares out over the open frequency.

    BUD (V.O.)
CAB ONE!  CAB ONE!  Meet me at Flatbed!  This
is a diver emergency!!  Do you copy?  Lindsey?!

She has a hard time focusing on what he's saying.  Finally...

    LINDSEY
Copy you, Bud.  On my way.

                                    CUT TO:

INT. DEEPCORE INFIRMARY -- AN HOUR LATER                                80

Jammer is unconscious on a folding cot set up in the tiny cubicle of the
infirmary.  Monk, who is cross-trained as a medic as well as a demolitions
man, has hung an IV of something.  Bud and the SEAL are in the room, the
others hovering outside.

    BUD
Whattya think?

    MONK
I'm a medic, which is mostly about patching
holes.  This type of thing... there's not much
I can do.  The coma could last hours or days.

Bud, torn by guilt, gazes at the big man lying pathetically on the cot.

                                    CUT TO:

INT. CONSOLE MODULE                                                     81

The SEALs, minus Monk, are all gathered inside, debriefing with DeMarco via
closed-circuit video.

    DEMARCO (video)
Did any of you see it?

    COFFEY
Negative.  But there was definitely a Russian
bogey.  The Brigman woman saw it.

    DEMARCO
CINCLANTFLT's gonna go apeshit.  Two Russian
attack subs, a Tango and Victor, have been tracked
within fifty miles of here... and now we don't
know what the hell they are.  Okay, I don't have
any choice.  I'm confirming you to go to Phase
Two.

Wilhite and Schoenick glance uneasily at each other.

Coffey is silent.  He is vibrating with tension... his fists clenched to
prevent the shaking.  He is wrestling with the moment, knowing it is, in a
way, a point of no return.

    DEMARCO
Is there any problem?

    COFFEY
Yes... I mean no.  Negative, sir.

Coffey takes a deep breath.  Lets it out.  Phase Two is clearly a big deal.

                                    CUT TO:

INT. MAINTENANCE ROOM B/DARKROOM                                         82

The maintenance room doubles as a camera workstation.  An adjoining head serves
as darkroom.  Lindsey is glumly reassembling Cab One's camera housings.

    BUD
Did you get anything on the cameras.  Video or
anything?

    LINDSEY
No.  Look, forget it.  I don't want to talk
about it.

    BUD
Fine.  Be that way.

    LINDSEY
I don't know what I saw.  Okay?  Coffey wants to
call it a Russian submersible, fine.  It's a
Russian submersible.  No problem.

    BUD
But you think it's something else.  What?  One
of ours?

    LINDSEY
No.

    BUD
Whose then?  Lindsey?  Talk to me...

Lindsey is wrestling with a feeling which is somehow also certain knowledge.

    LINDSEY
Jammer saw something in there, something that
scared the hell out him--

    BUD
His mixture got screwed up.  He panicked and
pranged his regulator.

    LINDSEY
But what did he see that made him panic?

    BUD
What do you think he saw?

    LINDSEY
I don't know.  I DON'T KNOW!

Hippy comes pounding up, sticks his head in, gesturing animatedly.

    HIPPY
Hey, you guys... hurry up, check this out!
They're announcing it.

They follow him into the corridor, trotting down to the mess hall.

INT. MESS HALL                                                          83

General melee as they rush in, everybody focused on the TV.

    CATFISH
Quiet!  Quiet!

    HIPPY
Turn it up, bozo.

    ANCHORMAN
... the Kremlin continues to deny Russian
involvement in the sinking of the Trident sub
USS Montana.  The Navy has not released the names
of the 156 crewmembers, who are all presumed
dead at this time.  Civilian employees of a
Benthic Petroleum offshore drilling rig--

    HIPPY
Hey that's us!

    CATFISH
SSSSHHH!

    ANCHORMAN
--are apparently participating in the recovery
operation but we have little information about
their involvement.  On the scene now is--

    FINLER
BOOOOH!  We want names!

    SONNY
Hey, hey!  There's the Explorer.

A LONG LENSE VIDEO SHOT of the Benthic Explorer and the other vessels in a
stormy sea CUTS TO a shot of BILL TYLER, the on-scene reporter, in rain
gear, clutching his microphone.  He is on the deck of a Navy support ship,
being used as a staging area from the press, well away from the center of the
operation.

    TYLER
--there is a tremendous amount of activity.
With Cuba only 80 miles away, the massive buildup
of US ships and aircraft in the area has drawn
official protest from Havana and Moscow and has
led to a redirection of Soviet warships into the
Caribbean theater.

    ANCHORMAN
How would you describe the mood there?

    TYLER
The mood is one of suspicion, even confrontation.
A number of Russian and Cuban trawlers,
undoubtedly surveillance vessels, have been
circling within a few miles throughout the day,
and Soviet aircraft have repeatedly been warned
away from the area...

    HIPPY
This sucks.

INT. CORRIDOR/SUB BAY                                                   84

Bud, Lindsey, and Hippy walking along the corridor, Hippy in a black mood of
incipient paranoia.

    BUD
What's the matter with you?

    HIPPY
Now we're right in the middle of this big-time
international incident.  Like the Cuban Missile
Crisis or something.

    LINDSEY
Figured that out for yourself, did you?

    HIPPY
We got Russian subs creeping around.  Shit!
Something goes wrong they could say anything
happened down here, man.  Give our folks medals,
know what I mean?

    BUD
Hippy, just relax.  You're making the women
nervous.

    LINDSEY
Cute, Virgil.

    HIPPY
No, I mean it.  Those SEALs aren't telling us
diddly.  Something's going on.

    BUD
Hippy, you think everything's a conspiracy.

    HIPPY
Everything is.

One Night is pounding down the corridor from the sub bay.

    ONE NIGHT
Hurry up!  Coffey's splitting with Flatbed! He
got me to show him the controls, then his guys
suited up and they're rolling.

Bud breaks into a run, passing her.

    BUD
Goddamnit!  D'you tell him we need it right now?

    ONE NIGHT
I told him we had to get the umbilical unhooked
ASAP.

INT. SUB BAY                                                            85

Bud clears the door in time to see an empty moonpool, roiling with turbulence.
He runs to the edge and looks down.  Flatbed is a vague shape moving off.

    BUD
Unbelievable.

                                    CUT TO:

EXT. EXPLORER BRIDGE -- DAY                                             86

The sky is charcoal, the sea is a mountain range of gray slopes.  Waves
thunder over the foredeck, whipped by eighty-know winds.  Men in life
jackets scurry like insects.  Off the port bow, the ASW destroyer ALBANY
vanishes and reappears among waves sixty feet tall.  McBride scream orders
that can't be heard to the crewmen on deck.  He staggers back along the bridge
railing.

INT./EXT. BENTHIC EXPLORER BRIDGE -- DAY                                87

McBride steps into the quiet of the control room.  He turns on De Marco.

    MCBRIDE
We're trying to get unhooked and get out of
here... and your boys go sightseeing!

    DEMARCO
They'll be back in two hours.

    MCBRIDE
Two hours?!  We're gonna be getting the shit
kicked out of us by our friend Fred in two hours!

De Marco's expression is infuriatingly calm... icy.  McBride looks at his
watch and swears under his breath.

                                    CUT TO:

EXT. USS MONTANA WRECK SITE                                             88

For a second time the black hull of the ballistic missile sub is illuminated
by diver's lights.  Tiny figures, the divers move like moths around a distant
streetlight.  Wilhite, Monk and Schoenick are clustered around an open missile
hatch.  Using a large lift bag, they are removing the frangible fiberglass,
or 'diaphragm'.  Coffey pilots Flatbed with increasing deftness, deploying
the big arm to aid in the work.

DOWN ANGLE as the diaphragm lifts away... revealing the blunt nose of the
TRIDENT C-4 MISSLE.  Like looking down the barrel of a gun at the bullet
aimed right at you.

                                    CUT TO:

INT. DEEPCORE/MESS HALL                                                 89

TIGHT ON VIDEO SCREEN:  A HELICOPTER SHOT of a warship burning, rolling
ponderously as it sinks in stormy seas.

    NEWS ANCHOR (V.O.)
Little is known at this hour about the events
leading up to the collision.  The US Navy guided
missile  cruiser Appleton apparently struck the
Soviet 'Udaloy' class destroyer in low visibility
conditions...

VARIOUS CUTS of men in life jackets among huge waves... Rescue helicopters
hovering.  Shaky camera work.  Wind blasting.  INTERCUT WITH REACTIONS of the
rig crew watching.

    NEWS ANCHOR (V.O.)
In violent seas little hope remains for over a
hundred Russian crewmen still missing after the
sinking an hour ago.

SHOT OF AMERICAN CRUISER, burning, listing to one side in heavy seas.
Replaced by SHOT OF NETWORK ANCHORMAN.

    NEWS ANCHOR
Soviet military spokesmen have claimed that
the collision constituted an unprovoked attack.
This was denied--

It continues.  Bud looks at Lindsey.  She turns to him, expression grim.

    LINDSEY
Bud, this is big time.

                                    CUT TO:

EXT. MONTANA WRECKSITE                                                  90

The divers are working head-first in the missile's launch tube.  Monk reads
from a plasticized card, directing the other two step by step.  The arcane
litany is punctuated by the hissing rasp of their breathing.

    WILHITE (filtered)
Separation sequencer disconnected.  Next?

    MONK (filtered)
Remove explosive bolts one through six in
counterclock-wise sequence.

    SCHOENICK (filtered)
Check... removing bolt one.

INT. DEEPCORE                                                           91

ON THE RIG CREW, watching.  Bathed in the light of the video screen.

    NEWSCASTER (V.O.)
... just learned that Soviet negotiators have
walked out of the strategic arms limitation
summit in protest over the incident this morning.

Bud switches the channel.

    ANOTHER NEWSCASTER
... US and NATO military forces have been put on
full alert worldwide this morning in the wake
of...

    BUD
It's on every channel.

Bud switches again.  Reception is getting worse as the storm affect the
satellite down-link to Explorer.  THE SCREEN shows a reporter on a city
street, stopping people at random.  Their answers are edited together:

    YOUNG WOMAN
You just feel so hopeless.  You can see it coming,
but what can you do?  What can anyone do?

    CONSTRUCTION WORKER
Hey, they don't want war any more than we do.
You think about it, you say... hey, they love
their kids too.  So why are we doing this?

He is replaced by a self-righteous, middle-aged woman.

    WOMAN
If the Russians sank that submarine, they deserve
what they got and a lot more, if you ask me,
and you did.  I think we've been pussyfooting
around with them long enough.

EXT. USS MONTANA                                                        92

It is now clear what the SEALs are doing.  Using large lift bags and Flatbed's
big arm, they have pulled one of the Trident C-4 missiles partway out of its
launch tube, and have partially disassembled the nose-shroud, exposing
several of the MIRV warheads within.

Moving very carefully, Wilhite and Schoenick ease one of the individual MIRVs
out of its bracket.  Hanging under a lift-bag in a jerry-rigged harness, the
three-foot long warhead is move gently by the divers to the back of Flatbed.

INT. DEEPCORE/VIDEO SCREEN                                              93

Another man in the street interview, tortured by static.

    MAN
Scared?  I'm scared ____-less.  But if it happens
it happens, nothing I can do about it.  Right?
So why think about it?

                                    CUT TO:

INT. SUB-BAY                                                            94

Flatbed surfaces in boiling foam.  The rig crew are all waiting.  Like a
crack pit-crew Bud's people leap onto Flatbed while its deck is still awash
and start to work on to Navy divers, unsealing their helmets and uncoupling
their umbilicals.  Hippy and Bud start to untie a cylindrical object wrapped
in one of the SEAL's gear bags.  Coffey emerges from the hatch.

    COFFEY
Don't touch that.  Just step away.  Now!

    HIPPY
Excusez moi.

    BUD
Coffey, we're a little pressed for time.

    COFFEY
Monk, Schoenick... secure the package.

The two SEALs unlash the object in the black bag.  Bud an Lindsey exchange a
glance.  He glares at Coffey as they pass each other.  One Night nimbly
climbs the hatch-tower and drops in.  Bud swings the heavy hatch up,
balancing it, and grins down at One Night.

    BUD
This ain't no drill, slick.  Make me proud.

    ONE NIGHT
Piece of cake, baby.

He swings the hatch closed with a CLANG.

                                    CUT TO:

EXT. DEEPCORE                                                           95

The big A-frame, massive as a railroad bridge, to which the umbilical from
the Explorer is attached.  Flatbed rises INTO FRAME arcing around the
coupling mechanism F.G.  One Night deploys the big hydraulic arm.

It unfold from Flay bed like a huge steel spider leg, its claw-like 'gripper'
opening.

INT./EXT. BENTHIC EXPLORER BRIDGE -- DAY                                96

An ALARM sounds stridently on the dynamic-positioning console.

    BENDIX
We're losing number two thruster.  Bearing's
going.

INT. THRUSTER ROOM TWO                                                  97

Deep in one of the catamaran hulls, the positioning thruster motor is
SCREAMING like a steel banshee above its usual roar.  It EXPLODES with smoke
and shrapnel.  A roaring fire erupts.  Crewmen run shouting in the smoke.

INT. EXPLORER BRIDGE                                                    98

Now a KLAXON is going off as the ship begins to slew in the high winds.

    BENDIX
It's not holding.  We're swinging out of
position!

EXT. EXPLORER'S DECK/LAUNCH WELL                                        99

As the ship slews, the umbilical is drawn off vertical.  It goes tight as a
bowstring.  Pulled to the edge of the launch well, it rips down the side
with a godawful screech, tearing loose ladders and floats.

EXT. DEEPCORE/A-FRAME                                                   100

Flatbed's manipulator has gripped the de-coupling mechanism when the cable
suddenly pulls taut.  The sub is jerked sideways, its grip dislodged.  We
see One Night get tossed around inside.

INT. DEEPCORE                                                           101

Lindsey is in the corridor with a cup of tea when the whole rig BOOMS LIKE A
GONG and lurches sideways.  She's wearing her tea when Bud tears through a
doorway and goes pounding past her.  The intercom blares...

    HIPPY (intercom)
Bud to control!  Emergency!  Bud to Control!

Bud claws his way up the ladder to level two.  The rig BOOMS and shudders
as...

EXT. DEEPCORE                                                           102

The rig begins to move. The enormous skid breaks loose.  Start to slide,
plowing furrows in the bottom.  One Night junks the controls, pivoting her
submersible as the A-frame looms toward her.

INT. DEEPCORE/CONTROL MODULE                                            103

Bud runs in, past Hippy, and grabs the mike.

    BUD
Topside, topside... pay out some slack, we're
getting dragged!

EXT. EXPLORER DECK                                                      104

The winch man staggers along the railing, blasted by 80-knot winds.  He
sprints for the base of the enormous crane which supports the umbilical
winch.  A wave blasts him into the bulkhead.  He half-crawls to the ladder
going up to the winch-house.  As he climbs the winch's heave-compensator
slides up and down, FILLING FRAME behind him.

It is bottoming-out with a sound like a piledriver, overloaded by the strain
on the cable.  It chooses that moment to fail.  GRINDING CRASH OF METAL.

INT./EXT. DEEPCORE CONTROL MODULE                                       105

Lindsey has joined Bud, looking out the front viewport.

    LINDSEY
We're heading right for the drop off!

EXT. EXPLORER DECK                                                      106

The deck is ripped upward as the entire 40-ton crane is pulled over by the
weight of Deepcore.  It topples in the launch well with a roar of tortured
steel that rivals the storm.  An EXPLOSION OF WATER.  UNDERWATER, the crane
tumbles between the twin hulls.  Trailing a vortex of foam and debris, it
roars down on us, FILLING FRAME WITH BLACKNESS.

INT. EXPLORER BRIDGE                                                    107

McBride stares in shock at the churning cauldron of the launch well.  Grabs
the underwater telephone.

    MCBRIDE
Bud!  We've lost the crane!

    BUD (V.O.)
What?  Say again.

    MCBRIDE
THE CRANE!  WE'VE LOST THE CRANE.  IT'S ON ITS
WAY TO YOU!!

INT. DEEPCORE/CONTROL MODULE                                            108

Everyone is stunned by what is happening.  Lindsey fires up the sonar.

    LINDSEY
Got it!  It's dropping straight to us.

She puts the signal over the speakers and the room fills with eerie PINGING.
Bud shouts over the intercom.

    BUD
Rig for impact!  Seal all exterior hatches.
Move it!  Let's go!

VARIOUS ANGLES, QUICK CUTS, as everyone runs to comply:

The rig crew pounding down the narrow corridors.  Diving through low
hatchways.  Hatches are closed and the wheels spun down.  Hippy puts into a
ZIP-LOK BAG and seals it.

EXT. DEEPCORE                                                           109

The umbilical drops down in slack loops out of the blackness above, draping
itself over the habitat in large coils.  One Night pilots her submersible
feverishly among the falling loops.  She banks and twists.  A length of heavy
umbilical slams onto her neck, tipping the sub.

She manages to get out from under it a keep going.

INT. CONTROL MODULE                                                     110

Through the front viewport they can see the coils of cable piling up in front
of the rig.  The hull booms with impacts as the massive stuff hits.

Everyone hold their breath as the sonar return-pings get closer... and
closer.  And closer...

An ENORMOUS SHAPE plunged into the floodlight in front of the rig.

K-WHAM!!  The 40-ton crane hits like a flatiron thirty feet in front of them.
A clean miss.  Much WHOOPING AND CHEERING.  Then...

The crane topples slowly over the back.  It rolls down the slope of the drop-
off, gathering speed.  Then tumbles over the cliff into the abyssal canyon.
The coiled umbilical starts to pay out after it like rope after a harpoon.
And they're still attached.

    LINDSEY
Oh shit.

An agonizing few seconds.  Then... the cable pulls taut.

K-BOOM!!  The rig is slammed by the shock.  Everyone is knocked off his feet,
into walls and equipment.

EXT. DEEPCORE                                                           111

The rig begins to slide.  It tilts over the embankment and grinds down the
slope of the drop-off in a cloud of silt.  The cable pulling it inexorably
toward the cliff.  The framework twists and slams into rocks.  SCREECHING
AND GROANING of tortured steel.

INT. DEEPCORE/CORRIDOR/LADDERWELL/MAIN CORRIDOR                         112

All hell has broken loose.  SIRENS, SCREAMING, a KLAXON HOOTING moronically.
Bud sprints from Control, bouncing off the corridor walls as the rig
lurches and tilts.  The lights go out.  Emergency light come on.  He trips
and falls, scrambles up, running on.

IN THE LADDERWELL of trimodule C, Lindsey runs toward the machine rooms.
K-BOOM!  A searing bright EXPLOSION in the electrical room.  Flames roar
through the doorway.  She dashed to a seawater hose hanging nearby and starts
to unroll it.  She sees Coffey and Schoenick in maintenance, lashing down
the mystery package.

    LINDSEY
Hey!  Get on this hose, you turkeys!

INT. TRIMODULE C/COMPRESSOR ROOM                                        113

Monk is working in a spray of seawater, turning valves to stop the flow of
ruptured pipes.  Behind him, a wall of flame blossoms through the door from
the electrical room, driving the back with the heat.  A reservoir-tanks
breaks loose from one of the compressor assemblies.  In rolls at him,
crushing his legs against machinery.  The fire roars into the room.

INT. SUB BAY                                                            114

Hippy runs in.  The place is going nuts.  Water floods from the moonpool as
the rig tilts.  Wilhite is dancing across the deck, leaping over compressed-
gas cylinders which are rolling around loose.  Cab One jumps clear off its
cradle and slides SCREECHING across the deck.  Wilhite, running before the
12-tom juggernaut, had no place to go.  The SEAL dives into the churning
moonpool.  Cab One slams into the end wall, then spins and rolls toward
Hippy.

He starts to run.  Drop something.  Looks back.

Beany, in his zip-loc bag, is lying in the path of the slide submersible.
Hippy runs back.  Scoops up the baggie.  Cab One FILLS FRAME behind him.
He makes it through the door an instant before the thing hits behind him,
buckling the steel doorframe.

Wilhite is clawing up the sheep skirting of the moonpool.  He gets his fingers
over the top.  Pulls himself up...

A steel helium tank slams against his fingers, crushing them, and he falls
back.  More tanks bounce over the lip of the pool, hammering Wilhite down
into the foaming water.

He doesn't surface.

EXT. DEEPCORE                                                           115

The rig is sliding to the edge of the cliff.  Beyond it... the bottomless
pit of the Cayman Trough.  It slams, crushing and twisting, into a rock
outcropping and stops, hanging over the precipice.

INT. TRIMODULE A/QUARTERS                                                116

Perry is trapped as the trimodule floods with stunning swiftness.  He makes
it through an emergency hatch between floors but can't get it closed.  The
inrushing tide blasts it open.  He scramble upward to the next hatch.  Spins
the wheel.  No time.  He is slammed against the ceiling by the force of the
water.

OMITTED                                                                 A116

INT. DRILL ROOM                                                         B116

Lew Finler, Tommy Ray Dietz, and Lupton McWhirter fight their way toward the
door as the drill room floods rapidly.  Ahead, the big automated watertight
door is closing like a motorized bank-vault.  They reach it just as it is
closing, but can't prevail against the strength of the motors.  FROM THE FAR
SIDE, we can see them screaming soundlessly at the tiny pressure window in
the door.  We can hear the dull THUNK of their pounding.

INT. TRIMODULE C/LADDERWELL AND COMPRESSOR ROOM                         117

Coffey and Schoenick, in emergency breathing masks, are fighting the fire with
a seawater hose and fire extinguishers.  Smoke and steam choke the dark
chambers.

Nearby, Lindsey grabs Hippy's arm as he is running past and drags him into the
blazing compressor room.  Hands him her seawater hose.  Wide-eyes, he starts
blasting everything in sight with water.

    LINDSEY
No! Hold it on me!

She rushed into the teeth of the fire as Hippy blasts her with a spray of
water, following her into the intense heat.  She grabs Monk, who is
semiconscious, and drags him out of the blazing room... Hippy dancing back
with the hose, tripping, blasting her in the face.

But it works.  They get Monk clear.

INT. DRILL ROOM CORRIDOR                                                118

Bud comes pounding down the flooding corridor in time to see the water in the
drill room swirl above the pressure window, obscuring the faces of the
trapped men.  He claws futility at the door.  The motors and the fail-safe
latching mechanism are on the opposite side.  Through the pressure window he
watches helplessly as they drown.  We don't see what he sees, but we know
what he sees.  Suddenly the bulkhead next to him gives way and a freezing
torrent thunders in.  Bud is blown off his feet a hurled along the corridor.

He scramble up somehow, splashing waist deep toward the opposite end of the
corridor where another of the hydraulic doors is closing inexorably.  He's
not going to make it.  He reaches it a moment too late to squeeze through.
Grabs the edge of the door and desperately tries to stop it from closing with
the strength of this arms.  It doesn't work.  The steel door closes on the
fingers of his left hand, pinning them in the doorframe.

But something amazing happens.  His wedding ring lodges between the door and
frame, preventing his fingers from being crushed and the door from
sealing and locking.

It resists tons of pressure, denting but not collapsing.

The freezing sea pours in until only his head is clear.

    BUD
Heeyy!!  HHHEEEYYY!!

ON THE OTHER SIDE OF THE DOOR, Catfish and Sonny come pounding up.  They see
his face at the tiny window and his hand jammed in the door.  Sonny wedges
a crowbar in the narrow opening and starts to pry.  Catfish whips open his
jackknife and slashes the hydraulic hoses on the door actuator.  He is
sprayed with red hydraulic fluid, machine blood.

Together they force open the door.  Bud is blown through in a torture of
water.  Sonny is thrown back into some pipes.  Breaks his arm.

Together they somehow heave the door shut manually, cutting off the flow.
Catfish hammers the fail-safe latch home with the crowbar.

Bud lies gasping and shivering... staring at the tiny band of metal that
saved him.

                                    DISSOLVE TO:

EXT. DEEPCORE/ONE HOUR LATER                                            A118

LOOKING DOWN THE WALL of the canyon as Big Geek moves beneath us, tilting up
to show Deepcore perched at the very edge of the abyss.  The rig is twisted
and dented, covered with loops of umbilical, trimodule-A a mass of wreckage.
The ROV passes across the front of the control module.  Through the front
port, two figures can be seen in the light of a single emergency lamp.

    SONNY (V.O. static)
Mayday, mayday.  This is Deepcore Two calling
Benthic Explorer.  Do you read, over?

INT. CONTROL MODULE                                                     B118

Sonny flips some switches on the UQC acoustic transceiver.  Tries again.

    SONNY
Benthic Explorer, Benthic Explorer.  Do you read,
over?  This is Deepcore--

    BUD
Forget it, Sonny.  They're gone.

INT. TRIMODULE C                                                        119

Bud walks down the corridor from control, slowly... as if carrying a great
weight.  The air is still thick with smoke.  The power off... everything
lit by emergency lights.  Makeshift quarters have been set up in the mess
hall, with blankets laid out on the tables, and with folding cots in the
storage room across the hall.  Jammer is still unconscious.  Coffey and
Schoenick bring Monk in on a stretcher, and set him up on a table.  He is
conscious but dazed with painkillers, his led splinted.

    BUD
Did you find Wilhite?

    COFFEY
No.

He and Bud lock eyes.  Bud bites back on his recriminations, but his gaze
blames Coffey.  He turns away.

    COFFEY
Brigman.
  (Bud turns)
I was under orders.  I had no choice.

Coffey's manner is subdued, contrite.  A marked contrast to his previous
brusque arrogance.  He's wrestling with his own loss, a sever blow to the
tight brotherhood of a SEAL unit.  Bud's anger is not dispelled.  But he
can't address it now.  He moves on.

PAST THE INFIRMARY, where Sonny Dawson is rigging a sling over his own broken
arm.  He cries out in pain, cursing at himself.  LOOKING DOWN THE CENTRAL WELL
as Bud crosses.  Down through the grill decking we can see the bottom level
of the module is flooded.  Catfish is down there welding, sending shivering
reflections through the chamber.

INT. MACHINE ROOM                                                       120

Lindsey is working, up to her knees in water.  She is covered with grease,
tools scattered around.  Bud puts his hand on her shoulder.  She looks up,
blows some hair out of her eyes.

    BUD
What's the scoop, ace?

    LINDSEY
I can get power to this module and sub-bay if
I remote these busses.  I've gotta get past the
mains, which are a total melt-down.

Rather than trigger anger and invective, the disaster seems to have affected
her in a different way.  She's accepted the situation, now that's it's done,
and is immersing herself in technical tasks, which are for her therapeutic.

    BUD
Need some help?

    LINDSEY
Thanks.  No, I can handle it.  Bud... there
won't be enough to run the heaters.  In a couple
hours this place is going to be as cold as a
meat locker.

    BUD
What about O-2?

    LINDSEY
Brace yourself.  We've got about 12 hours worth
if we close off the sections we're not using.

    BUD
The storm's gonna last longer than 12 hours.

    LINDSEY
I can extend that.  There's some storage tanks
outboard on the wrecked module.  I'll have to go
outside to tie onto them.

She goes back to her task, working efficiently with a socket wrench.

    BUD
Hey, Lins...
(she looks up)
I'm glad your here.

    LINDSEY
Yeah?  Well I'm not.

OMITTED                                                                 121

OMITTED                                                                 122

The sub bay is still a mess.  Dark.  A few battery-operated lamps.  Flatbed
is back, floating in the moonpool.

One Night and Hippy are in deep concentration, piloting the two ROVs in a
damage survey of the rig.  Bud comes up behind them, check her screen first.
BIG GEEK'S MONITOR shows a view of the aft section of the rig.  The drilling
derrick had collapsed across Cab Three, totaling it.  A girder is jammed
through its acrylic front dome.

    ONE NIGHT
Right through the brainpan.  Deader'n dogshit,
boss.

    BUD
(to Hippy)
Where're you?

    HIPPY
Quarters.  Level two.

INT. TRIMODULE A/QUARTERS                                               A123

Little Geek rises up through the open central hatch, pivoting in a circle to
scan the flooded interior.

INT. SUB BAY/R.O.V. STATION                                             B123

TIGHT ON VIDEO SCREEN, LITTLE GEEK'S POV.  The interior of the structure is a
shambles.  The lights of the little robot fall upon a figure... Perry.
Lying on the deck, almost looking like he's asleep.

    HIPPY
That's Perry.

    BUD
(lets his breath out slowly)
That's it then.  Finler, McWhirter, Dietz, and
Perry.  Jesus.

    HIPPY
(gestured at the screen)
Do we just leave him there?

    BUD
Yeah, for now.  Our first priority's to get
something to breathe.

                                    CUT TO:

EXT. DEEPCORE                                                           124

Catfish and Lindsey, in suits and helmets, drop down from the glare of the
moonpool onto the dark sea floor under the rig.  Walking, they pull their
umbilicals behind them and head out through the twisted wreckage.  Little
Geek follows along like a dog at their heels.  They settle beside a valve
assembly at the base of the wrecked module.

    LINDSEY
Cat, you tie onto this manifold.  There's some
tanks on the other side; I'm gonna go check
them out.

    CATFISH
You watch yourself.

He begins to attach one end of a coiled-up high-pressure hose to a manifold.
She takes the other end of the hose and moves off into the darkness.  Little
Geek goes with her faithfully.

INT. SUB BAY                                                            125

Cab One is hanging from the overhead crane while One Nigh works to repair it.
Bud is nearby, tending hose for the divers and handing her tools.  Talking
while they work.  Hippy is across the moonpool running Little Geek.

    ONE NIGHT
Gimme a three-eighths socket on a long extension.
(he hands it to her)
So there you were--

    BUD
There we were, side by side, on the same ship,
for two months.  I'm tool-pusher and we're
testing this automated derrick of hers.  So, we
get back on the beach and... we're living
together.

    ONE NIGHT
Doesn't mean you had to marry her.

    BUD
We were due to go back out on the same ship.
Six months of tests.  If you were married you
got a state-room.  Otherwise it was bunks.

    ONE NIGHT
Okay, good reason.  Then what?

    BUD
It was alright for a while, you know.  But then
she got promoted to project engineer on this
thing, couple years ago.

    ONE NIGHT
She went front-office on you.  Tighten that for
me, right there.  That's it.

    BUD
Well, you know Lindsey, too damn aggressive--
Son of a--!!

He's jammed his fingers with a wrench torquing down a bolt.  Whips his hand
out.

    BUD
She didn't leave me... she just left me behind.

She puts her arm around his shoulders, somehow managing to be fraternal,
maternal and suggestive all at the same time.

    ONE NIGHT
Bud, let me tell you something.  She ain't half
as smart as she thinks she is.

She smiles and pretends to kink Lindsey's air-hose.

ACROSS THE CHAMBER, Hippy scowls as Little Geek's screen starts to go haywire
with interference.

    HIPPY
Hey, Lindsey, you reading me?  Over.

OMITTED                                                                 126

EXT. DEEPCORE/TRIMODULE A                                               127

Catfish is working on one side of the wrecked module while Lindsey is on the
other, out of sight.  She is standing on the bottom at the base of the
wreckage, checking valves on a rack of oxygen bottles amongst the wreckage.
Right at the edge of the canyon wall.  Behind her is a sheer drop to
nothingness

    LINDSEY
Yeah, Hippy, I read you.  What's the matter?

The reply is GARBLED by a wash of static.  Then, for no apparent reason,
Lindsey's helmet light begins to dim out.  Little Geek's lights fade.  His
motors whine to a stop.

ON CATFISH, as his lights drop to candleglows.

INT. SUB BAY                                                            A127

The emergency lights are dimming, like a brownout.  Bud grabs the diver
intercom mike.

    BUD
Lins, how're you doing?  Lindsey?

EXT. TRIMODULE A                                                        128

ON LINDSEY, as she fiddles with her lights and transceiver pack.

    LINDSEY
Catfish... I got a problem here.  You there?
Catfish?

Behind her, SOMETHING rises from the depths.

It is the little vehicle she almost collided with at the Montana wreck.

It comes right up behind her.  She doesn't know it's there.  It hovers
sideways like a hummingbird, as if curious, trying to get a better look.  She
becomes aware of the pulsing glow on the ground around her.  She turns
slowly.  We see her react as the glowing, pulsing apparition is reflected in
her faceplate.

A more powerful glow washes up onto her from below.

Her eyes go down.  She gasps, absolutely stunned...

Above the edge of the wall, AN ENORMOUS SHAPE RISES SILENTLY OUT OF THE
DEPTHS.  Over sixty feet across.  It looks like a blown glass manta ray, its
transparent outer hull housing interior structures of great delicacy and
complexity, pulsing with a blue-violet glow.

Lindsey stand before it, unable to move.  Absolutely rapt.

Captivated by its ethereal beauty.  It begins to turn, majestically, one
rounded wing passing only a few feet above her.  She reaches up.  Touches it
as it passes over her.

Lindsey is without fear, completely mesmerized.

The thing completes its turn and dives gracefully down along the wall.  She
is gently lifted by a backwash of turbulent water.

About that time, Lindsey remembers she has a still camera, a little Nikonos.

She fumbles to set focus and exposure with her bulky gloves as the beautiful
machine glides into the depths.  Gets all set for a shot and...

WOOSH!  The little 'scoutschip' whizzes past her from behind, startling her.
She completely misses the shot of the 'manta ship'.  She pivots, trying to
get a shot of the little one as it zig-zags down along the wall, fast as a
meteor.  CLICK.  She get a shot a second before it disappears.

From around the flank of the rig module, Catfish appears.  Their com-sets
come backs to life, along with their lights.

    LINDSEY
You better not say you missed that.

    CATFISH
Missed what?

                                    CUT TO:

INT. DEEPCORE/MESS HALL                                                 129

TIGHT ON SLIDE STRIP.  Lindsey's fingertip in for scale.  The shot is black
with a little squiggle of light in the center.  Pathetic.

    BUD
Nice shot, Lins.

    SONNY
What is that?  You drop your dive light?

WIDER, SHOWING THE GROUP huddled around Lindsey who has her freshly-processed
slide roll laid out on the pinball machine, using it as a light table.

    LINDSEY
Come on, you guys... look, this is the little
one right here.  You can see how it's kind of
zigging around.

    BUD
If you say so.  It could be anything.

    LINDSEY
I'm telling you what is there.  You're just not
hearing.  The impulses somehow aren't getting
from you ears to your brainpan.  There's something
down there.  Something not... us.

She looks around.  Sees a lot of skepticism in the eyes around her.

    CATFISH
Y'all could be more specific.

    LINDSEY
Not us.  Not human.  Get it?  Something non-
human, but intelligent...

    HIPPY
You mean like Coffey?

Lindsey is reddening.  Despite her conviction, this is really hard.

    LINDSEY
A non-terrestrial intelligence.

    HIPPY
Non-Terrestrial Intelligence.  NTIs.  Yeah, I
like that better then UFOs.  Although that
works too... Underwater Flying Objects.

Hippy is not really mocking her.  He's actually into it.  But it has that
effect.  Catfish is eyeing Lindsey like he's never seen her before.

    CATFISH
Are we talkin' little space friend here?

    HIPPY
Right on!  Hot rods of the Gods.  Right, Lins?
Hey, no really!  It could be NTIs.  The CIA has
known about them for years.  They abduct people
all the time.  There was this woman I knew in
Albuquerque who--

    LINDSEY
Hippy, do me a favor... stay off my side.

Bud takes her firmly by the arm.  Heads her out into the corridor.

    BUD
Lindsey, will you step into my office for a
minute...

INT. CORRIDOR/LADDER WELL                                               130

He propels her along the corridor, away from the mess hall doorway.  They
face each other in the narrow space.

    BUD
Jesus, Lindsey--

    LINDSEY
Bud, something really important is happening
here.

    BUD
Look.  I'm just trying to hold this situation
together.  I can't allow you to cause this kind
of hysteria--

    LINDSEY
Who's hysterical?  Nobody's hysterical!

They're talking across each other, not connecting.  Bud weary and frustrated.
Lindsey is cranked up with the afterglow of her encounter.

    BUD
All I'm saying is when you're hanging on by your
fingernails, you don't go waving you arms around.

    LINDSEY
I saw something!  I'm not going to go back there
and say I didn't see it when I did.  I'm sorry.

    BUD
God, you are the most stubborn woman I ever knew.

    LINDSEY
I need you to believe me, Bud.  Look at me.  Do
I seem stressed out?  Any of the symptoms of
pressure sickness, any tremors, slurred speech?

    BUD
No.

    LINDSEY
Bud, this is me, Lindsey.  Okay?  You know me
better than anybody in the world.  Now watch my
lips... I saw these things.  I touched one of
them.  And it wasn't some clunky steel can like
we would build... it glided.  It was the most
beautiful thing I've ever seen.

Bud is stilled by her intensity.  She moves close to him.  Eyes alive and
luminous.

    LINDSEY
It was a machine, but it seems almost alive.
Like a... dance of light.  Bud, you have to
trust me... please.  I don't think they mean us
harm.  I don't know how I know that, it's just a
feeling.

    BUD
How can I go on a feeling?  You think Coffey's
going to go on you 'feeling'?

    LINDSEY
We all see what we want to see... Coffey looks
and he sees Russians, he sees hate and fear.
Bud, you have to look with better eyes than
that.

Bud has been taking this all in.  His eyes tracking her face.  He closes his
eyes, taking a deep breath.  It's so hard for him to do this, but...

    BUD
I can't, Lindsey.  I'm sorry.  How can I?

                                    CUT TO:

INT. MESS HALL -- LATER                                                 131

Coffey has Bud, Lindsey and several of the rig crew gathered for a little
summit.  Lindsey is withdrawn, sitting far from the others, a self-imposed
exile.  They're all wearing warm clothes and hugging themselves.  Their
breath shows in the air.

    COFFEY
I want 'round-the-clock manning of the sonar
shack and the exterior cameras.  We need early
warning if the Soviet craft try another incursion.

    LINDSEY
(rolling her eyes)
Gimme a break!  Coffey, these things live three
and a half miles down on the bottom of an abyssal
trench!  Trust me... they're not speaking
Russian.

Coffey looks at her for a moment, then goes on as if she hadn't spoke.

    COFFEY
(to One Night)
Why haven't you finished repairs on the
hydrophone transmitter yet?

    ONE NIGHT
I was having my nails done.

Coffey is sweating, despite the chill.  Keeps his hands clenched in fists so
they won't see how bad the tremors have gotten.

    COFFEY
Get something straight.  You people are under my
authority--

    CATFISH
Look, podner... we don't work for you, we don't
take orders from you, and we don't much like you.
In addition to which your momma dresses you
funny.

Coffey's eyes are straight razors.  He slashes them from face to face.  You
can see him tightening up like a clockspring, losing control of the situation
in front of his own men.  Bud defuses it.

    BUD
'Fish'?

    CATFISH
Yuh?

    BUD
Take the first watch in sonar.  Hippy, you
handle the exterior surveillance.  One Night, see
if you can get that transmitter working for me,
okay?

    ONE NIGHT
Gimme a couple of hours.

HOLD ON COFFEY as everyone leaves.  Winding tighter.

                                    CUT TO:

INT. MAINTENANCE ROOM B -- LATER                                        132

Coffey and Schoenick are bending over the warhead.  They have a small port
removed and are attaching waterproof leads from an ELECTRONIC DETONATOR.  The
black box Lindsey glimpsed earlier.  As the two SEALs work like surgeons, we
see past Coffey's shoulder to a hemispherical window behind him, which looks
out into the perpetual blackness.  Something appears... a goofy shark face.

Big Geek rises silently in front of the port.  It moves a little, trying to
get a peek over Coffey's shoulder.

INT. CONTROL MODULE/ROV SHACK                                           133

Hippy is twiddling his joysticks, watching the screen like a ferret.

    HIPPY
Come on... move to the left... just a little
more... come on, A.J. Squared Away... that's
it--

ON THE SCREEN, Geek's POV.  Coffey is blocking Hippy's view of whatever it is
they're working on.  Abruptly, be moves.  The warhead is lying there in plain
sight, detonator wires hooked up.  Hippy's eyes bug out.  He knows exactly
what it is.

    HIPPY
Pretty radical, guys.  Pretty radical.

He hurries to the VCR and puts it into RECORD.

INT. CONTROL MODULE/ROV SHACK -- MINUTES LATER                          134

Video image of the SEALs working.  It FREEZES on a clear view of the warhead.

    HIPPY (V.O.)
Say hello to MIRV.

Bud has his face right up to screen.  He frowns, skeptical.

    HIPPY
Come on, man.  What else could it be?

    BUD
Why bring it here?

    HIPPY
It's gotta be, like, an emergency plan to keep
it away from the Russians... Hotwire one of the
nukes with some kinda detonator, put it back in
the sub, and fry the whole thing, slicker'n snot.
Oh, uh... hi, Lins.

Bud whips around.  Lindsey, standing quietly in the doorway.  It's apparent
from expression she's been watching them for some time.  She looks ready to
kill somebody.  Then she's gone.

INT. CORRIDOR                                                           135

Bud catches up to her in the corridor, trying to put the brakes on her.

    LINDSEY
Look, goddamnit, if you won't do something about
it, I will.

    BUD
Lindsey!  Wait a second--

She reaches the watertight door to Maintenance Room B.  It's locked.  Before
Bud can stop her she grabs a fire-extinguisher off the wall and pounds on
the steel door like a big gong.  BOOM!  BOOM!  BOOM!

Needless to say, it opens.  She pushes past Schoenick, see the bomb lying
there naked.

    LINDSEY
You've got some huevos bringing this...
thing... into my rig!  With everything that's
been going on up in the world, you bring a
nuclear weapon in here?  Does this strike anyone
as particularly psychotic, or is it just me?

    COFFEY
You don't need to know the details of this
mission... you're better off if you don't.

    LINDSEY
You're right... I don't.  I just need to know
that this thing is out of here!  You hear me,
Roger Ramjet?

    COFFEY
Mrs. Brigman, you're becoming a serious impediment
to this mission.  I believe the stress is
affecting you.
(to Schoenick)
Escort her to quarters and have Monk prepare a
tranquilizer.

Schoenick takes her arm in a tight grip.

    LINDSEY
Bullshit, you can't do that.  Oww... goddamnit!

Lindsey goes bananas, trying to get Schoenick's big hands off her arms.  Bud
slams his hand down on the intercom button.

    BUD
Emergency!  Maintenance room B.  Emergency!

He pulls the fire alarm for good measure and spins on Coffey... warning him
with a look that is not to be messed with.  Coffey is braced back against the
worktable... an odd stance, with one arm behind his back.  Suddenly there's
a crowd outside the door as Catfish, Hippy, One Night, and Sonny come running
up.  Confrontation time.

Sirens going.  About a million volts of electricity in the air.  Bud braces
Schoenick.

    BUD
Let her go.  Do it... right now.

He does.  Lindsey jerks away.  Rubs her arms.

    LINDSEY
You dumb jarhead motherf--

    BUD
Chill out, Lindsey!!

    CATFISH
What's the problem?

Everyone is frozen in place.  Bud a Coffey... snake and mongoose, glaring.
Bud pulls Lindsey back into the corridor.

    BUD
Nothing.  We were just leaving.
  (to her)
Weren't we?

ANGLE FROM BEHIND COFFEY, as Bud's group moves out of sight up the corridor.
Hands behind his back.  In his hand, cocked, finger on the trigger, is the
.45.  He turns and sets it on the table, steadying himself as if in the wind.
he seems to sag.  When he looks at Schoenick, his eyes are wounds.  A hunted
animal.  Voice shaky.

    COFFEY
They can't be trusted.  They're turning against
us.  We may have to take... steps.

INT. CORRIDOR                                                           136

Lindsey, Bud, Hippy.  Bud slows, letting them trail behind the others.

    BUD
Lins, stay away from that guy.  I mean it.

    HIPPY
Yeah.  The dude's in bad shape... you see his
hands?

    LINDSEY
He's got the shakes?

    BUD
Look, the guy's operating on his own, cut off
from chain of command.  He's exhibiting symptoms
of pressure-induced psychosis.  And he's got a
nuclear weapon.  So, as a personal favor to me...
will you put your tongue in neutral for a while?

    HIPPY
Man, I give this a sphincter-factor of about
nine point five.

INT. MAINTENANCE ROOM B                                                 137

Coffey goes to the dome port.  Looks past his shrunken and twisted reflection
into the void.  Eternal night.

ANGLE FROM OUTSIDE.  Coffey's face in the window.  Stuck to the acrylic
bubble beside him is one of those Garfields, suction cups on its paws.  Coffey
stares out.  Behind his eyes, his brain is like that cat, just hanging on,
spreadeagle and screaming.

                                    CUT TO:

INT. SUB-BAY/DIVE-PREP AREA                                             138

Under a single worklight, a couple of conspirators.  Lindsey and Hippy hunch
over Big Geek.  The ROV grins maniacally with goofy shark teeth.

    LINDSEY
Look, you can just punch into his little chip
where you want him to go, and he goes, right?

    HIPPY
Well, yeah, but the tether off it ain't gonna
be fancy.  When he gets down there he'll just
sit, like a dumb-shit.  Unless something wanders
through view of the camera, you'll get nada.

    LINDSEY
Let's go for it.  We could get lucky.

INT. CONTROL MODULE                                                      139

ONE SURVEILLANCE MONITOR.  Lindsey and Hippy next to Big Geek.  Their voices
are tinny but intelligible.

    HIPPY (V.O.)
I don't know.  I really oughta talk to Bud about
this.

E.C.U. COFFEY.  Watching them in the dark.  Alone.

    LINDSEY (V.O.)
No.  Just you and me.  We get some proof, then
tell them.  Hippy, look... if was can prove to
Coffey it's not Russians, maybe he'll ease off
the button a little.

    HIPPY (V.O.)
I gotta tell you, that guy scares me a lot more
than whatever's down there.  A.J. Squared Away
goddamn jarhead robot.  Okay, gimme a couple
hours on this.

Coffey watches, his jaw clenched.

INT. QUARTERS/MESS HALL                                                 140

The lights are down.  Those who can are grabbing some sleep.  Snoring comes
from one of the bunkrooms as Lindsey passes.  In the mess hall, Catfish and
Bud are crashed out on the tables, wrapped in blankets.  The cold has gotten
intense.  Water drips.  The walls sweat with condensation.  Lindsey can see
her breath as she makes coffee.  She carries a cup over to Monk, who is a
face in a pile of blankets.  A hand comes out, takes the coffee.

    MONK
Thanks.

Lindsey sips hers, staring.  Her thoughts are far away... in the bottomless
pit.  She is leaning up against the table where Bud is sleeping.  His soft
snoring downshifts into a loud rasp.  Lindsey touches him gently on the
shoulder.

    LINDSEY
Virgil, turn on your side.

Bud grunts and turns without waking, an automatic response.  The snoring
stops.  It is a quiet, intimate moment, a reminder of the mileage these two
have logged together.

                                    CUT TO:

INT. SONAR SHACK                                                        141

Sonny has made himself comfortable in front of the screens.  Too comfortable.
He's asleep, chin on his chest.  On the main passive-sonar screen, an almost
imperceptibly faint trace appears.  A HUM, which is by now familiar, becomes
audible.  Sonny shifts in his seat.  Doesn't wake.

INT. SUB BAY                                                            142

Hippy puts his tools away, finished with the modifications to Big Geek.

    HIPPY
All set, big guy.  Hey, I told you to wipe that
grin off your face.

He yawns as he shambles across the chamber to the corridor door.  Switches off
the lights.  Goes out.

Quiet lapping of water in the moonpool.  A beat.  Then...

A cold luminosity suffuses the water beneath the moonpool opening, sending
shadows shifting across the top of the chamber.  The surface begins to
pulsate.

Suddenly, the water itself rises, forming itself into a shifting, shimmering
pseudopod as big around as a man's body.  The transparent form pulses... an
amoebic mass shivering in the air.

It stretches, becoming a more refined form.  Like a blindly probing glass
python, it elongates and weaves across the room.  It extends and extends,
stretching out from the moonpool, a shimmering tentacle.  The 'head' or tip,
a featureless liquid bulb, seems somehow to be scanning as it moves forward,
as if it can see where it's going.

INT. CORRIDOR                                                           143

Hippy trudges along the dark corridor.  He reaches the men's head and goes in.
As the door closes, the tip of the liquid pseudopod extends into the corridor
B.G.  It 'looks' left and right.  Then extends the length of the corridor,
holding itself a couple feet off the floor like a weightless snake.

INT. TRIMODULE B/LADDERWELL/BUNKROOM/MESS HALL                          144

LOOKING DOWN three levels through the central ladderwell between the
cylinders.  The pseudopod enters and undulates upward.

FROM INSIDE THE MAKESHIFT BUNKROOM, we see its tip extend inside.

Sonny and One Night are snoring, oblivious.  Jammer is still unconscious.  The
pseudopod, taking its time, checks them out and then moves on.

IN THE MESS HALL, it's dark and quiet.  Lindsey has even fallen asleep in her
chair, her head buried in her arms on the table.  The shimmering tentacle
enters the room in total silence.  It sways gracefully in to air, searching.
It undulates across the room, hanging about five feet in the air, surveying
everything.  It moves past Lindsey.  Sensing something, she lifts her head,
turning... sees the apparition next to her.

Her eyes go wide.  Amazement, but not fear.  The tentacle is moving on, still
searching.  Lindsey shakes Bud awake, clapping her hand over his mouth.

Bud blinks twice, then freezes.  When she lowers her hand his mouth is hanging
open like a total goon.

Bud chucks his pillow are Catfish, on the next table.

Catfish cracks one eye open.  Turns away.  Turns right back... both eyes open
now.  Sensing movement, the thing turn back toward them.  It seems to
recognize Lindsey.  It doubles back on itself in a loop and comes right up to
her.  She holds her ground, fascinated.

The bulbous tip forms suddenly into a human face... her face.  It is water,
still clear and undulating... but definitely Lindsey.  She gasps in surprise.
The liquid-Lindsey gasps soundlessly... a perfect mimic of her expression.
Lindsey laughs involuntarily.  It laughs... without sound.  Lindsey makes a
face, sticking out her tongue... testing it.

The liquid-Lindsey does the same.  Bud has just had the rug jerked out from
under his sense of what is possible and what isn't, but he's taking it pretty
will, considering.

    BUD
(whispering)
I think it likes you.

    LINDSEY
It's trying to communicate.

Her liquid face suddenly transforms into a likeness of Bud's.

She reaches out her hand slowly.  Gingerly, her fingers touch the surface.
Ripples extend outward from the contact, across Bud's features.

Her fingertips break effortlessly through the surface, just like she's
dipping her hand into a bowl of water, except sideways.  She draws her wet
fingers out and studies them, amazed.  Touches one fingertip to her tongue.

    LINDSEY
Seawater.

The pseudopod pulls back from her.  It loops in the air dramatically, full
circle... and ties itself into a knot.  As the knot tightens down, it melts
back into the body.  The 'disappearing knot' trick.

Lindsey laughs, grinning with the open wonder and delight of a child at a
magic show.  She is transported.

    LINDSEY
Show off.

She looks at Bud.  He grins broadly.  He's with her now.

The stunned group watches as the thing moves on across the room.  Out to the
corridor

INT. SUB-BAY                                                            145

Coffey and Schoenick enter the back way, through the dive-prep area.  They see
the pseudopod arching from the moonpool big as a treetrunk.  Coffey's mind is
blown.  We can smell the insulation burning.  He just stares.

INT. CORRIDOR/MAINTENANCE ROOM B                                        146

The water tentacle enters and moves toward the hot-wired warhead.  It studies
the device for a few seconds.  Bud and Lindsey enter through a side door, in
time to see the tentacle divide into four tendrils which wrap around the
warhead.  They begin to lift it off its cart.

INT. SUB BAY                                                            147

Coffey finally jump-starts his brain.  In a flash of insight, he runs to the
big sliding door through which the pseudopod stretches into the corridor.  He
and Schoenick heave on the door.  Like a guillotine blade it slices
effortlessly through it.

VARIOUS ANGLES -- CORRIDORS, MESS HALL, LADDERWELL, MAINTENANCE... as the
body of the pseudopod collapses, splashing on the floor.  It reverts to
nothing more than a long puddle of simple seawater.  As the tendrils dissolve,
the warhead slams back down onto the cart, unharmed.  ON COFFEY'S SIDE ON THE
DOOR, however, the "stump" rears back like a cobra.  It withdraws rapidly into
the moonpool.  The glow fades away.

INT. SONAR SHACK                                                        148

Sonny wakes up with a start as the HUM revs up into a LOUD WHINE and then
fades away.  He scrambles to track it.  Too late.

INT. CORRIDOR                                                           149

Hippy emerges from the can and looks down, puzzled, at the puddle running the
length of the corridor.  He missed the whole thing.

INT. MESS HALL                                                          150

Light on.  Everybody there.  Lindsey is really strutting, high on life, now
that she's been proven right.

    LINDSEY
Okay, raise your hand if you think that was a
Russian water-tentacle.  Lieutenant?  No?  Well,
a breakthrough.

Coffey is looking out from under his eyebrows like Nicholson in "The Shining".
Bud give her a warning look.  Don't poke at the rattler.

    BUD
You done impressing yourself, ace?

    ONE NIGHT
No way that could just be seawater.

    LINDSEY
They must've learned how to control water... I
mean at a molecular level.  They can plasticize
it, polymerize it... whatever.  Put it under
intelligent control.

    BUD
Maybe their whole technology is based on that.
Controlling water.

Coffey is hunched over, elbows on his knees.  His hands are out of sight.  His
arm is moving in a slow rhythm.  We can't see what he's doing.

    HIPPY
That thing was probably their version of Big
Geek... like an ROV.

    CATFISH
Just checking is out, huh?  How come?

ANGLE UNDER THE TABLE, showing what Coffey is doing.  He has his K-BAR KNIFE
gripped white-knuckle in one hand.  He is drawing it slowly and repeatedly
across the skin of the other forearm.  Neat chevrons of blood from wrist to
elbow.

C.U. COFFEY -- He doesn't flinch.  His eyes are hard and bright as diamond
drills.  No one notices.  He's keeping the edge.

    LINDSEY
They're curious, maybe.  We could be the first
people they've seen up close.

    SONNY
Hope they don't judge the whole race offa us.

    CATFISH
Maybe I oughta shave.

Coffey stands abruptly, snags Schoenick with his eyes, and leaves, walking
through the group as if they were smoke.  This cold behavior brings the mood
down a notch.

INT. CORRIDOR/MAINTENANCE ROOM B                                        151

Outside the mess hall, Coffey pauses, listening to the conversation resume.
Bright speculation, a few jokes.  Coffey is visible shaking.  Breathing hard.
Pupils dilated.  Schoenick looks at him with concern.

    COFFEY
It went straight for the warhead.  And they
think it's cute.

    SCHOENICK
You need to get some sleep.

Coffey walks away without hearing him.  Schoenick catches up.

INT. MAINTENANCE                                                        152

The door opens in the dark room.  Coffey enters, moving with purpose.  He
pulls his gear bag out from under the work table.  Unzips it.  Pulls out a
short-barreled CAR-15 assault rifle.

    COFFEY
We have no way of warning the surface.  Do you
know what that means?

Schoenick doesn't know.  He hopes Coffey knows.  Because he's a fearless man
who's discovering what it is to be afraid.  Coffey inserts the magazine with
a CLACK!  Snaps the bolt.  Tosses the rifle to Schoenick.

    COFFEY
It means... whatever happens is up to us.

                                    CUT TO:

INT. CORRIDOR/MAINTENANCE -- LATER                                      153

Hippy passes the maintenance room.  Looks in.  The warhead and its cart are
missing.  He looks around.  Heads toward the sub-bay.

INT. MESS HALL                                                          154

The discussion, still in progress.

    ONE NIGHT
You think they're from down there originally?
Or from... you know.

She jerks her thumb toward the ceiling.

    LINDSEY
I think they're from 'you know'.  Some place
that has similar conditions... cold, intense
pressure.  No light.

    CATFISH
Happy as hogs in a waller down there, prob'ly.

INT. CORRIDOR/SUB BAY                                                   155

Hippy freezes in the corridor as he hears a loud ratcheting sound echoing from
the sub-bay.  He edges forward slowly, trying to keep his feet silent on the
steel floor.  Slides up along the wall next to the door.  Inches his eye
around the doorframe.  Across the room. Schoenick is working with a chainfall,
lowering Big Geek onto the MIRV warhead, which is still on its cart.  He
begins to attach them together with a sling of tie-down straps.

Hippy lets his breath out slowly.  His expression is Holy Shit.

He slides back along the corridor wall, silently.  Away from the door.  Then
turn turns quickly to go... WHAM!  Coffey slams him up against the wall!
.45 pressed to Hippy's temple.  Hippy gulping air as Coffey ears back the
hammer.

    COFFEY
Sniff something did you, rat boy?

INT. MESS HALL                                                          156

The meeting is breaking up as the door CLANGS open and Hippy is thrusted
inside.  His hands are taped behind his back and he stumbles onto his face.
Coffey steps through smoothly, straight-arming the .45.  Schoenick flanks him
with the assault rifle aimed at the group.

    COFFEY
FREEZE!  Don't move.  That's it.
  (to Monk)
Here, hold this a second.  We're going to phase
three.

He hands his gun to Monk, with the assumption of absolute loyalty from a team
member.  Monk's eyes move between Coffey and the pistol.  We can't tell what
he's thinking.  Coffey grabs Hippy and shoves him onto a chair.

    HIPPY
They're using Big Geek to take the bomb to the
NTIs!  We set it up to go right to them.

Lindsey looks stricken.  Her plan is betraying them all.

    LINDSEY
Oh my God...  Oh no...
(steps toward Coffey)
Please, you can't.  Coffey, think about what
you're doing... for God's sake--

Coffey lets her approach him, his eyes glittering.

Without warning he grabs her by the hair and hurls her against the Coke
machine, pinning her there with one hand.  Bud leaps forward.

    SCHOENICK
GET BACK!

Bud freezes.  The rifle's muzzle is aimed for a heart-shot.

Coffey moves up close to Lindsey.

    COFFEY
This is something I've wanted to do since I
first met you.

His hand reaches down, OUT OF FRAME.  We hear something RIP.  His hand comes
back up... holding a piece of gaffer's tape.

He slaps it over her mouth.  Then pushes her down into a chair.

Hippy looks at Monk and Schoenick.

    HIPPY
You boss is having a full-on meltdown.  Guy's
fixing to pull the pin on fifty kilotons and
we're all ringside!

    MONK
What's the timer set for?

    SCHOENICK
Three hours.

    COFFEY
Shut up!  Don't talk!

    MONK
We can't get to minimum-safe-distance in three
hours.  The shockwave will kill us.  It'll crush
this rig like a semi driving over a beer can.

    COFFEY
Shut up!  SHUT UP!  What's the matter with you?!

Everybody is twitching a hyper.  Schoenick is white-knuckling his assault
rifle... looking from Monk to Coffey to the group.

    COFFEY
Just stay calm.  The situation is under control.

Coffey backs out quickly with Schoenick.

INT. CORRIDOR                                                           157

Coffey dogs down the watertight door and wedges a piece of steel pipe into
the mechanism so it can't be opened.

    COFFEY
Stay here.

Schoenick take a position in front of the door.  Coffey turns and runs through
the corridor like demons are chasing him.

INT. MESS HALL                                                          158

Their only hope is to sway Schoenick.  But the SEAL's fear is making him the
perfect machine, totally dependent on external orders.  And his orders are
clear.  They can see him through the tiny window in the door.  Lindsey rips
the tape painfully off her mouth.

    LINDSEY
Schoenick... your Lieutenant is about to make
a real bad career move...

    HIPPY
That guy's crazier'n a shithouse rat!

    BUD
We have to stop him!  Schoenick!!

They pound on the door.  Schoenick turns and hangs his cap over the tiny
window.

INT. SUB BAY                                                            159

Using the chainfall, Coffey maneuvers the completed Geek/MIRV package over
the back of Flatbed, obviously preparing to use the submersible to take it
out and launch it.

INT. MESS HALL                                                          160

Lindsey is up next to the door, with Bud.

    LINDSEY
... he's about to declare war on an alien species,
Schoenick, just when they're trying to make
contact with us.
    (to Bud)
I think I'm reaching him.

There is a CLUNK-CLATTER and the door unlatches.

    LINDSEY
See?

The door opens.  Jammer is standing there.  Schoenick is in a heap against
the far wall, moaning.  Jammer hands the rifle to Hippy as he walks in.  Hippy
turns to cover the other SEAL.  Monk puts his hands up, passively.

    MONK
I'm the least of your problems.

Bud appraises Jammer, who seems a little weak and dazed but basically okay.

    BUD
Thanks.  How you feeling, big guy?

    JAMMER
Figured I was dead, there, when I seen that
angel comin' toward me.

They all look at him for a second.  What?

    BUD
Uh, okay, right.  You can tell us about it
later.  Let's go.

                                    CUT TO:

INT. TRIMODULE C/LADDERWELL                                             161

Bud drops down the ladder, INTO FRAME, followed by the others.  He tries the
door into the main corridor.  The wheel won't turn.  The others get on it.
Won't budge.

    BUD
He's jammed the mechanism.

    LINDSEY
Now what?

They're locked in trimodule-C.  No other doors give access to the sub-bay
corridor.  Bud's mind is racing.  He drops down the ladder to Level One, into
about two feet of water.  He reaches down and open the emergency lockout
hatch.  Takes off his boots.

    BUD
Okay, I'm gonna free-swim to hatch six... get
inside, get the door open from the other side.

    LINDSEY
Bud, that water's only a couple degrees above
freezing.

    BUD
Then I guess you better wish me luck, huh?

Catfish is pulling his boots off as well.

    CATFISH
Wish us luck.
(hands his wallet to Hippy)
'Case I don't die.  Okay, Bud... let's go,
podner, I ain't got all day.

Bud clasps him on the shoulder and starts hyperventilating.  He drops into
the water.

EXT. DEEPCORE/TRIMODULE C                                               162

Bed shoots down through the hatch.  The cold hits him list a fist, becoming
instantly paralyzing.  He starts kicking in powerful strokes through the dark
water, maneuvering around tangles of umbilical cable twisted tubular steel.
Catfish is behind him, swimming like hell.  They reach hatch six.  Together
they spin the wheel and heave upward, opening it.

INT.  TRIMODULE D/LEVEL ONE                                             163

Bud surges up into the lock.  Catfish jams into the tiny airspace with him.
They try the upper hatch.  Jammed.  They're both panting with the exertion
and intense cold.

    BUD
Hafta... go on to... the moonpool.  Only way.

    CATFISH
I can't... make it... podner.

Bud looks at Catfish, shivering and heaving, wide-eyed.

    BUD
Okay, Cat.  You head back.

Bud hyperventilates rapidly and pikes over diving back out through the hatch.

EXT. DEEPCORE                                                           164

Bud is stroking rapidly through the tangle of pipes and conduit.  He sees the
lit rectangle of the moonpool far ahead.

INT. SUB BAY                                                            165

In the moonpool, Bud surface with an explosive gasp beside the full of
Flatbed.  His wracked breathing is masked by the WHINE of HYDRAULICS as Coffey
uses the external controls to extend Flatbed's big hydraulic arm, locking
the Geek/MIRV in its gripper.

Bud strokes to a point where Coffey can't see him and heaves up out of the
water onto the deck of the pool.  He lies gasping behind Cab One's cradle.
His limbs are wooden and unresponsive from the cold.  His fingers are
completely numb.  He hugs himself, putting his hands under his armpits.
Scans the situation.  He can't get to the door, which is across the room,
without Coffey seeing him.

INT. CONTROL MODULE                                                     166

Lindsey watching the whole thing going down, ON THE SCREEN, a high angle of
the sub bay... Bud moving up on Coffey.

    HIPPY
He can't get to the door... I think he's going
to try and take him himself.

    LINDSEY
He couldn't be that dumb.  The guy's a trained
killer.  Bud's idea of a fight is arm-wrestling
One Night over laundry duty.

ON THE SCREEN, Bud picks up a piece of pipe.  Hefts it.  Moves forward,
crouched... stalking.  Lindsey yells at the screen in frustration.

    LINDSEY
BUUUUUD!!

INT. SUB BAY                                                            167

Bud chucks a tool across the chamber, creating a clattering distraction, then
wades in with the pipe in a vicious swing to the back of Coffey's knees,
taking him down.  Coffey spins even as he falls, catching Bud in a scissor
kick that topples him.

Grappling, they fall together into the freezing water.

Coffey is momentarily stunned by the cold, giving Bud time to haul himself
out, hoping to make it to the door.

Coffey launches from the water and grabs him legs.

He pulls himself up as Bud kick out.  Claws his way viciously over Bud's
body until he has him pinned to the deck.  Then he pulls out the .45.

Put it unceremoniously to Bud's forehead.

INT. CONTROL MODULE                                                     168

    LINDSEY
NOOO!!

INT. SUB BAY                                                            169

Coffey pulls the trigger... CLICK.  Bud flinches, then opens his eyes,
staring cross-eyed at the muzzle of the .45.  Coffey cocks it and tries
again.  CLICK.  Nothing.  Really pissed off beyond description, Bud hurls
the commando off him with a powerful heave, sending him clattering against
a rack of equipment.  They face off, panting.

INT. CONTROL MODULE                                                     170

The rig crew turns from the screen at the sound of Monk's voice.

    MONK
I tool the liberty of removing this before I
gave it back to him.

Monk pulls his hand out from under his blanket and holds up the magazine from
the .45.

INT. SUB WAY                                                            171

Even so Bud is getting his ass kicked.  Coffey's really trying to put him out
of business.  It's mostly duck and dodges on Bud's part.  Throw a few things.
When Coffey connects, Bud goes down hard.  Give him credit, though.  He
manages to scramble back up.

The fight wrecks the room, scattering tools and gear.

Compressed air cylinders roll dangerously around the floor.

Coffey slips on one and Buds get in a couple of good licks.

Slams the SEAL's head in an equipment locker door.

But the Navy man is just too massive.  Bud is hammered back into a wall.
Coffey has his fist cocked back for the coup de grace.  Spins around at the
sound of a VOICE.

    CATFISH
Hey!

Catfish is right behind him.  Dripping wet.  A trail of water goes back to
the moonpool a few feet away.

CRACK!  Catfish's 'Hammer' punch comes in so hard and so fast, Coffey is
knocked right on his ass.  He doesn't get up.  Just sort of flops around.

Catfish helps Bud to his feet.  They advance on Coffey, who crab-scuttles
sideways, his eyes rabid.

He picks up a helium tank and hurls it at them.  As they duck he sprints to
Flatbed and drops through the hatch and slams it down.

    BUD
(to Catfish)
Get the door!

Bud leaps across the water to land on Flatbed.  The hatch is already sealed.
He grapples with Geek/MIRV, trying to free it from the steel claw.

INT. FLATBED                                                            172

Coffey crawls along the access tunnel to the pilot's compartment.  He claws
his way into the control seat and starts rapidly flipping switches.

INT. CORRIDOR                                                           173

Catfish pounds down the corridor like he's never run before, his beer gut
doing a rumba.  He reaches the door, tears out the piece of pipe and spins
the wheel.  Hippy pushes it open so fast it hits Catfish in the stomach.
Hippy tears past him, running with the assault rifle.  John Wayne.

INT. SUB-BAY                                                            174

Flatbed is submerging, with only the hatch tower still above the water.  Bud
is being dragged down, still trying to free the ROV.  He gives up when he
sees Hippy run in, waving the assault rifle around like a 130-pound Rambo.

Bud climbs the hatch tower and leaps to the deck of the moonpool.

Hippy clumsily raises the unfamiliar rifle at Coffey, visible inside his
viewing bubble beneath the swirling water.  Coffey looks up, stares at the
gun... doesn't seem to care.

    CATFISH
SHOOT!

Hippy's squeezing the trigger and nothing's happening.  Flatbed's hatch tower
goes under.

    CATFISH
Safety's on!  On the side... the lever!  Up,
push it up!

Hippy fumble with the selective-fire lever, BLAM-BLAM-BLAM!  He put three
quick rounds into the ceiling.

    HIPPY
SHIT!

    CATFISH
Give me that!!

He grabs it out of Hippy's hands and aims it at the sub.  He racks the water
with a long burst.  BENEATH THE SURFACE, the rounds nip nasty contrails
through the water.  They barely scar the front port.

    LINDSEY
Forget that... go for Big Geek!

Catfish rakes the descending sub with more bursts, trying to hit the
shimmering shape of the ROV on its back.  UNDERWATER we see the rounds
arcing wild, a few hitting the ROV but causing little damage.

Coffey complete his descent to just above the seafloor.  ABOVE, Catfish
empties the weapon.

    BUD
Gimme a hand!

They all turn.  Bud is fumbling into his wetsuit like a madman.  The others
rush over to help him.

    BUD
Get the rest of my gear.  Grab that hat there...
let's go guys!  Come on, come on!

Catfish slams a backpack onto Bud's shoulders, grappling with the straps and
hose connections.  Hippy and Sonny (with one hand) are clipping, zipping and
buckling all over him.  This is a world-record suit-up time.  Bud pulls the
rubber neck-dam of the helmet's lower ring down over his face.

    BUD
Helmet... helmet!  Work fast.

EXT. DEEPCORE UNDERSTRUCTURE                                            175

Beneath the habitat, Coffey is maneuvering Flatbed through the twisted pipe
and debris left by Deepcore's slide to the edge.  Bloodied, his fatigues
ripped half-off, he looks like a feral animal.  His eyes burn with the
determination of his mission.

INT. SUB BAY                                                            176

Jammer expertly works the crane controls, moving Cab One out over the
moonpool from its drydock cradle.  Lindsey and One Night are scrambling like
monkeys over the port side crash bars of the swinging sub, clambering up to
the hatch tower.

    ONE NIGHT
I'll unhook.
(Lindsey hesitates)
GO!  You're better in these than I am.

Lindsey recognizes this for what it is... a sign of respect, a
reconciliation.  She nods and drops through the hatch.

EXT. DEEPCORE                                                           177

Coffey passes under the twisted wreckage of the big automated derrick and makes
a tight turn beneath the drill-floor module.  Flatbed scrapes through between
twisted conduit, metal screeching on metal.

INT. SUB BAY                                                            178

Bud has his 'hat' locked down and his air cut on.  He take two quick strides
to the edge of the pool and just drops in.

EXT. DEEPCORE                                                           179

Bud rockets DOWN INTO FRAME in a column of bubbles.  He looks around.  Through
the lattice of conduit under the rig he can see Flatbed moving forward from
its exit point under the stern.  Bud see a shortcut under the platform.

He kicks along a lattice a pipes, heaving himself along in frantic hand-over-
hand stokes.  He reaches for Flatbed's stern as it passes.

Misses the last hand-hold... but just manages to seize a tie-down trailing
behind it.  He is jerked along behind the sub.

Bud holds on with both hands as he is buffeted in the wake of the powerful
thrusters.  Flatbed gathers speed, moving out toward the edge of the abyssal
wall.  The current slams him, spinning him like a fishing lure.  He pulls
himself forward slowly until he can grip the stern rail of Flatbed's platform.

LOW ANGLE, look up the wall.  Flatbed appears over the edge and stops.
Hovering.

ON THE BACK OF FLATBED.  Bud has the break he needs.  He scrambles up onto the
deck and opens and equipment locker.  Nothing in it but one of the yellow
nylon safety lines.  The big arm begins to unfold, lifting Geek/ROV.

INT./EXT. FLATBED                                                       180

Coffey works intently.  His eyes are the cool ice of lethal madness in a
face streaked with blood.  He brings the ROV into view with the boom arm.

GEEK/ROV had a passenger.  Brigman.  The diver is holding Geek's skid with
one hand, doing something with the other.  He turns to look at Coffey.

EXT. FLATBED/DEEPCORE                                                   181

Coffey releases the ROV with the gripper and makes a grab at Bud with the
steel claw.  Bud dives.  The gripper hits his helmet a glancing blow.  Bud
kicks away rapidly, letting nylon rope pay out.  We see he has managed to tie
one end to Geek's skids.  Coffey hits the button to activate the ROV, sending
an acoustic pulse to Geek's transponder.  The little robot, pregnant with its
load of death, turns nimbly around and dives out and down toward the void.

Coffey pivots his bid machine toward Bud.  Bud strokes rapidly to a large
jumble of wreckage.  He loops the rope around a twisted pipe.  Big Geek is
hauling ass away from him.  The line snap taut an instant later.  The ROV
strains, like a Rottweiler on a leash... trying to go.  The rope is slipping
as Bud fights to make a knot.

Flatbed slews around, thrusters whining.  As it banks, it hurls up clouds of
sediment from the escarpment face.

Through the front panel we see Coffey jerking on the controls.

The big arm extends menacingly.  The smaller from manipulators open.  An
enormous predatory instinct, its lights blaring.

The big machine roars forward.  Straight at Bud.

Bud gets his knot partly done.  See Flatbed looming.

Glare-lit in its lights, Bud grabs a handlehold and pulls himself downward as
Coffey closes the last few feet.

One manipulator slams into his backpack, tumbling him, and the sub's underside
rakes across his legs as it passes over.  Flatbed crushes into the tangle of
pipework.  K-CRUUUNCH!!

INT. FLATBED                                                            182

Coffey is slammed hard over the controls, up into the front dome port.  He
gets back in the seat.  Strains to free his machine.

EXT. DEEPCORE/BIG GEEK/FLATBED                                          183

Bud swims clear, diving down at an angle along the wall, hoping to stay in
Coffey's blind area.  Flatbed backs out of the wreckage in a cloud of debris.
It pivots toward Bud.  Moves after him.

Nearby, the ROV is whining mindlessly, trying to please.  Trying to GO.
DETAIL OF ROPE attached to wreckage, as Bud's knot begins to slip.  The nylon
line starts to play through the knot slowly.

BUD has gotten himself into a bad position.  Along the bare rock face of the
cliff wall he is naked, nailed in the spotlights like a rabbit in front of a
truck.  Coffey puts the hammer down, thrust levers all the way forward.
Flatbed surges forward, multi-limbed and demonic.  There's no cover, side to
side, up or down.

Coffey has him head in his lights.  Suddenly a bright glare blasts in,
blinding Coffey.  He looks up to see Cab One rushing down upon him, full
throttle.

At the last moment LIndsey slams the thrusters full-lock and the submersible
slews sideways, slamming its heavy skidplate into Flatbed's cab.  Coffey is
smashed sideways by the shock.  He fights to control his vehicle.  Lindsey
looks up to see Coffey's sub gun it up over the wall, out of sight.  She
cruises up over Bud.

    LINDSEY (V.O.)
Get in!

Bud gets the lockout hatch open and clambers up into Cab One's belly.

INT./EXT. CAB ONE                                                       184

Bud flops over the lip of the hatch and slams it shut.  He ditches his helmet.
Lindsey raises her vehicle warily above the wall.  Through the front port
there is not sign of Coffey.

    LINDSEY
You owe me one, Virgil.

    BUD
Can we negotiate later?  There's Big Geek.

He points.  Through the front port, they can see the ROV still straining at
its leash.  Lindsey dives toward it, simultaneously working the controls to
open her own small manipulator claws.

EXT. DEEPCORE/WALL, ETC.                                                185

The last few feet of the rope slip through the knot.

Big Geek happily surges forward.  It dives gracefully down into the void,
trailing the yellow rope like a kite tail.

ONE CAB ONE, Bud and Lindsey through the front port.

    BUD
Go after it!  We gotta catch it!

FLATBED DROPS INTO FRAME BEHIND THEM, dwarfing little Cab One.  They are
slammed viciously as Coffey's submersible hammers into them.  She hits full
throttle.  Coffey floors it after Lindsey, ramming her from behind with his
more powerful vehicle.  With difficulty Lindsey maintains trim.

She arcs back toward the rig.  Flatbed slams her again, for the side.  She
fights for control.

INT./EXT. CAB ONE                                                       186

Bud is tossed around, ricocheting off the walls.  Lindsey flies with her
jaw set.  Fighting hard for control.  The A-frame of the rig looms before her.
She shoots through at full throttle.

EXT. DEEPCORE AND OCEAN TERRAIN                                         187

Now the fight is really on.  The two subs are dodging between the cylindrical
modules at full throttle, slamming into each other and the steel pressure
hulls.

Coffey sideswipes the smaller sub, jamming it sideways.  It screeches along
the flank of one of the trimodules.

They head out over empty terrain in a flat-out speed run.

Lindsey is jinking and dodging as Flatbed, roars along behind her, tearing
up the bottom with its powerful backwash.  Lindsey carves hard around a rock
pinnacle, finding herself running parallel to the edge of the abyssal canyon.
Coffey is ramming, hammering from behind, then from side to side.

Lindsey snarls.  He's pissing her off.  He shouldn't do that.

Ahead, out of the blackness, another outcropping.

Lindsey rises, cuts right.

Smashes down into Coffey's craft.  Timing it just right.  He skids catch in
the rocks.

Flatbed slews violently, nosing down.  Crushing into the rocky bottom.
Pressing the advantage, Lindsey hammers into Flatbed from behind.

It smashes full force into a second spire, spinning out of control.

Tangles together, the subs slide down an embankment toward the edge of the
wall.  With her one remaining thruster she jerks clear of Flatbed and grounds
her crippled sub.  Flatbed tumbles over the edge.

ANGLE DOWN THE WALL as it falls, trailing a cloud of sediment like a comet's
tail, down into the unfathomable blackness below.

INT. FLATBED                                                            188

Inside the machine, Coffey is fighting for control.

He has no buoyancy or motors and the craft continues its mad plunge.  As the
pressure intensifies the hull begins to groan, and steel fitting scream with
the enormous load.

A tiny silver fracture shoots partway across the front bubble.  Grows.
Coffey gives up fighting.  Just stares, wide eyed, at his death.  A damned
soul dropping into the bottomless pit.

The fracture line arcs rapidly across the dome port.

Suddenly, a scythe-like curtain of seawater, under tons of pressure, slashes
into him.  A moment later the bubble implodes, and Coffey disappears in a
bloody froth of churning water, air and glass shards.

EXT. CANYON WALL                                                        189

Flatbed looks like a toy, tumbling away down the wall.

Soon its lights vanish.

INT. CAB ONE                                                            190

They're both going to have a lot of bruises...

Lindsey is surveying the damage.  Water is spraying down on them like a
shower, and lights are flickering.

    LINDSEY
You did okay, back there.  I was fairly
impressed.

    BUD
Not good enough.  We still gotta catch Big Geek.

    LINDSEY
Not in this thing.

Lindsey is flipping switches.  Nothing works.

    BUD
You totaled it, huh?

    LINDSEY
Yeah.  So sue me.

Bud looks down.  There's already about a foot of water sloshing around the
floor at their feet.

    BUD
It's flooding like a son of the bitch.

    LINDSEY
You noticed.

She picks up and hand-mike of the underwater telephone.

    LINDSEY
Deepcore, Deepcore, this is Cab One, over.

She waits.  No response.

    BUD
Try again.

    LINDSEY
Deepcore, this is Cab One.  We need assistance,
over.  Deepcore, this--

With a SEARING CRACKLE or arc-light, a power panel shorts out and everything
goes black.

    LINDSEY
Well, that's that.

    BUD
Wonderful.
(looking around)
There's some light from somewhere...

A faint illumination, dimmer than moonlight, washes in through the front port.
Lindsey scrunches up against the acrylic and scans the darkness.

    LINDSEY
Over there.  It's the rig.

A glow, beyond a rock promontory... like the lights of a town just over the
hill in the desert.

    BUD
Good hundred yards, I'd say.

    LINDSEY
They'll come out after us.

    BUD
Yeah, but it's gonna take them a while to find
us.  We better get this flooding stopped.

He picks up his helmet and clicks on the light.  Using the thing like a bulky
flashlight.  The water is really pouring in, spraying them like a shower...
almost two feet deep already.

    LINDSEY
You see where it's coming in?

    BUD
Somewhere behind this panel.  Hold this.

She takes the light and he tries to reach the burst weld, which is blocked by
a steel switch panel and a bunch of conduit.

    BUD
Can't get to it.  Have to pull this panel off.
You go any tools?

    LINDSEY
I don't know, look around.

Bud scans the cramped interior, feels around under the water.  It's past his
knees.

    BUD
Nothing.  Son of a bitch.  All I need's a goddamn
crescent wrench.

He grabs the panel in both hands and starts torquing on it, trying to wrench
it off the wall.  Heaves on it repeatedly.  Finally stops, panting.  He's
breathing hard now, and it's not just effort.

    BUD
Son of a bitch!

    LINDSEY
Calm down, Bud.

A nervous edge in her voice now.  Bud's turning all around, looking around
for anything, trying to think fast.  Water up to their waists.  The sea
closing in.

    BUD
Okay... okay.  We gotta get you out of here.

    LINDSEY
How?

    BUD
I don't know how!

    LINDSEY
We've only got one suit.

    BUD
I know!  I know!  But we better come up with
something.

    LINDSEY
Aaargh!!  I'm freezing!

She climbs up on the pilots seat, scrunching right up against the ceiling,
keeping as much of herself as possible out of the frigid water.  She's
shaking all over with the cold, and getting drenched from above by water
pouring in.

    LINDSEY
Okay, look, you swim to the rig and come back
with another suit.

    BUD
Seven, eight minute swim each way... not enough
time.  Look at this...
(the rate of flooding)
Time I get back you'll be--

That stops the conversation for a second.  About two feet of airspace left.
Bud can't believe what this is coming down to.  They both stare at each other
for a long moment.

He makes a decision.  Starts pulling off his backpack.

    BUD
Alright, put this on.

    LINDSEY
What, you growing gills all of a sudden?  You
got it on, keep it on.

    BUD
Don't argue, goddamnit, just--

    LINDSEY
No way!  Forget it.  Not an option.

Bud has his pack off uncoupling it.  She keeps fighting his hands, stopping
him, hooking it back up.  The desperation of the situation fuel the struggle.

    BUD
Lindsey, just put the thing on and shut up--

    LINDSEY
NO!!  Now be logical, Bud, you're--

    BUD
FUCK LOGIC!!

They're both right up against the ceiling, water up to their chests.
Lindsey's lips are blue and trembling from the cold.

    LINDSEY
Listen... will you listen to me for a second!?
You're for the suit on and you're a better
swimmer than me.  Right?  So I got a plan...

    BUD
What's the plan?

    LINDSEY
I drown, you tow me back to the rig--

    BUD
WHAT KIND OF PLAN IS THAT!??

Lindsey's gut-scared... shaking violently, her eyes wide.  But she's keeping
it together.  Thinking it out.  Bud see the bottomless pit opening to take her
and he can barely think.

    LINDSEY
Look, this water is only a couple degrees above
freezing.  I drown.  I go into deep hypothermia...
my blood like icewater.  I can maybe be revived
after ten, fifteen minutes.  You got all the
stuff to do it on the rig.

Bud stops moving and looks into her face, inches from him.  The water is up
to their necks.  He knows that, as always, infuriatingly, Lindsey is right.

    BUD
It is insane.

    LINDSEY
It's the only way, Bud.  Now trust me.

She takes a deep breath.  Before her nerve fails she busies her hands on his
suit, rehooking everything.

    BUD
Jesus, I don't believe this is happening.

She raise his helmet.  Water up to their chins.  They lock eyes, inches
apart.  He can feel her breath on his face... maybe for the last time.

    BUD
Oh God, Lins... I--

    LINDSEY
Tell me later.

He grabs her head in both hands and pulls her mouth to his.  They lock
together in a fierce kiss, fueled by passion and terror... the naked
realization of love hanging over the abyss of death.

She breaks away at the last possible second and quickly pulls his helmet
over his head.  Seats is down over the neck ring.  Lock the bail-out handle,
sealing it.  Even with her head press up into the highest point of the
ceiling, Lindsey's mouth is barely above water.  She give a scared little
laugh.

    LINDSEY
This is maybe not such a great plan, is it?

She is half-paralyzed with the cold, shaking pathetically.  Puts her face to
the glass of his helmet.  Seconds to go.

    LINDSEY
Hold me.  Hold me, Bud... I'm so scared...

He can't hear her, but he read her lips.  They clutch each other desperately.
The embrace last while the water rises over her mouth and nose.  She starts
to choke.  Her hands grip his shoulders like claws.  She bucks and thrashes.
Bud holds her, and a scream tears loose from him, a pure agony of the soul.

    BUD
NOOOOO!!!

The freezing seawater races into her lungs.  Her finger go slack, and her
hands float lifelessly.

Bud stares, transfixed, as the last tiny bubble trickles out of Lindsey's open
mouth.  He kicks himself into gear, fingers frenzied as he spins the wheel of
the lockout hatch.

                                    CUT TO:

INT. DEEPCORE/COMMAND MODULE                                            191

TIGHT ON VIDEO SCREEN, one of the outside cameras.  A ghostly figure swims out
of the darkness, towing something.

    ONE NIGHT
It's Bud.  Oh my God... that's Lindsey!

    BUD (V.O./faint)
Deepcore, Deepcore, do you read?

    HIPPY
Read you, Bud.  We're here.

EXT. DEEPCORE                                                           192

Bud swims with long, powerful kicks, towing Lindsey.  Her arms and legs float
as gracefully as seaweed waving in a gentle current.  Bud's voice comes in
short rasps, breathing hard, but icy with control.

    BUD
Go to the infirmary... get the cart .. oxygen...
de-fib kit... adrenaline in a... ten cc
syringe... and some... heating blankets.
You got all that?

    HIPPY (V.O.)
Got it. Over.

    BUD
Meet me in the moonpool.  Move fast.

INT. INFIRMARY                                                          193

The door crashes open and Jammer thunders in.  He picks up the CPR cart, meant
to roll on wheels, and carries it out past Hippy, Catfish, and One Night, who
are crowding in to get the rest of the equipment.  They ransack the place in
about ten seconds, grabbing everything they might need and half of everything
else.

EXT. DEEPCORE/UNDER THE MOONPOOL                                        194

Bud moves up toward the rectangle of light, towing Lindsey to the diving
platform.  Through the surface we can see the others arrive at the edge,
looking down.

INT. SUB-BAY                                                            195

Hippy and Catfish are setting up the cart and the oxygen kit, dropping things,
making mistakes.  One Night is teaching herself how to fill a syringe from a
bottle of adrenaline.

    SONNY
Here he comes!

Jammer and Sonny leap into the freezing water, waist deep on the submerged
diving platform.  Bud bursts to the surface.  Together they haul Lindsey
across the platform, out of the water, and onto the deck.  Her skin is blue-
white, her chest still.

Bud rips his helmet off in a near-frenzy, like a man possessed, a man with a
mission.  The others are galvanized by his energy even though they all see
Lindsey as dead, a corpse... cold and inert.  Water flows from her mouth and
nose and her lips are blue, her limbs completely limp.  Hippy peels back one
eyelid, to find the pupil fixed and dilated.

But when Bud shouts for them to move, they move.

    BUD
Turn her over!

They flip his wife's body over.  He straddles her, pushing down with both
hands in the middle of her back.  Seawater gushes from her slack lips.  He
does it again until the flow stops, then flips her onto her back.

    BUD
Come on, hurry!  Gimme the de-fib...

One Night and Catfish are fumbling with the emergency cart equipment.  They've
all been trained in CPR and use of the gear but that was years ago, and is a
friend they're working on.  They're all thumbs.  Catfish drops the electrodes,
picks them up quickly, hands them to Bud...

    CATFISH
Here, here, here... no, you got to have bare
skin, or it won't...

Bud rips into her clothing, opening her jumpsuit, literally tearing away her
T-shirt, revealing her bare chest... bony and still.

    BUD
Jesus.  Gimme those, come on.  Catfish, move it,
man!  Come on... come on!

He slaps the things into Lindsey's bare skin, one on the sternum and one on
the side of the rib cage.

    BUD
Is that it?  Is this right?

    HIPPY
Yeah!  I mean, I don't know... it looks right.

    BUD
All right.  Do it!

One Night hits the switch and Lindsey's body convulses.  It is a pure muscle
reflex, and when it is over, there is not a hint of life.  Hippy pushes him
back and puts a black rubber oxygen mask over her mouth.  He opens the valve
on the cylinder and starts pumping the squeeze bag.  They start packing
electronic blankets around her to fight the intense hypothermia

    BUD
Do it again, One Night.  Zap her again!

The current hits Lindsey again and her back arches.  Bud doesn't wait for a
result... he's in his own reality now, driven.  He's doing it all at once,
somehow, in a senseless frenzy... pumping on her chest with his hands,
squeezing the oxygen bag, placing the electrodes.

    BUD
Aw.  Christ... come on, baby.  Again!  Do it
again!

Lindsey's back arches.  Her body relaxes, inert.

    BUD
Come on, One Night... what are you waiting for?

A hush seems to have fallen over the group.  They know instinctively that it's
over.  But Bud can't accept it.  He looks at them, beseechingly, like they
are somehow intentionally holding out on him.  One Night starts to cry,
quietly.

    CATFISH
    (gently)
Bud, it's over, man.  It's over.

There is a beat of silence.  Bud stares down into Lindsey's half-open,
motionless eyes.

TIGHT ON LINDSEY'S EYES, moving in until the pupil FILLS FRAME, a black void.

REVERSE, HER POV.  SILENCE.  A distant, distorted image, we see Bud, One
Night, Jammer, Hippy, Catfish, staring down.  It is like the circular top of
a dark well, their faces shimmering as if through the surface of water.  It is
as if we are in a well, descending, looking up at a circle of faces growing
smaller as we drop away... smaller and smaller, receding until it becomes
a point of light in the void, like the fading bright dot at the center of a
turned-off TV.

TIGHT ON BUD, rigid, staring.  Catfish puts his hand gently on Bud's shoulder.
Suddenly Bud tears Catfish's hand away and sets upon Lindsey like a madman,
renewing his efforts in spades... totally manic.

    BUD
No!  NO!  She's not... her heart is strong,
she wants to live... can't you see that?  Come
on, Lins.  Come on, baby!  Zap her again!  Do
it... DO IT!

They do.  And Bud works, feverishly.  He lock his lips over hers and starts
mouth-to-mouth.  It is frantic, passionate... the kiss of life.

    BUD
Come on, breath!  Goddamn it, you bitch, you
never backed down from anything in life... now
fight!

He slaps her face, hard.  Her head lolls.  He smacks her the other way.

    BUD
Fight, Goddamnit!

LINDSEY's POV, from the bottom of the great well.  The circles of faces and
light rockets toward us in the blackness, as we soar upward from the pit.  We
see Bud yelling, but his voice is distant, windlike.

    BUD
FIGHT!!

TIGHT ON LINDSEY, still.  Then something incredible happens.  Something they
will never forget as long as they live.  Lindsey coughs once, weakly, and her
hands clench in a spasm.

Bud see it and his expression becomes beatific.

    BUD
Come on, Lins.  You can do it... fight your
way back, baby...

The others look on in wonder as Bud wills this woman back.

She starts to cough, weakly at first... then more violently as she draws air
into her lungs.  Bud crouches over her, rubbing her limbs... trying to re-
establish circulation.  It is like a difficult birth.  Lindsey comes hacking
and howling back into the world, wet and naked and fighting for breath.

Bud puts the oxygen mask over her face and she draws breath after agonized
breath.  He pushes her wet hair back from her face with his trembling hands,
and watches her breathe.  Color is returning to her skin as she lies there,
gasping weakly.

ONE THE GROUP... Catfish, Hippy, One Night, Jammer, the others... they're
all grinning, crying, beaming... gazing at the miracle of her rebirth.

ON BUD... tears are streaming down his face.

    BUD
(a whisper, fierce and harsh)
You did it, ace.

                                    DISSOLVE TO:

INT. DEEPCORE/QUARTERS -- LATER                                         196

TIGHT ON LINDSEY, sleeping peacefully.  WIDER shows Bud hovering over her,
attentive.  They are alone in Bud's tiny cubicle.  Perhaps twenty minutes
have passed.  She is completely swaddles in blankets, except for her face,
and looks like a waif.

Lindsey's eyes flutter and open.  The first thing she sees is Bud, bending
over her.  He can't help himself.  The tears break again and roll down his
cheeks.  She seems terribly fragile, but bright and aware.  She smiles,
faintly... touches his cheek.

    LINDSEY
Hey... big boys don't cry, remember?

    BUD
Hi, lady.

    LINDSEY
Hi, tough guy.  I guess it worked, huh?

    BUD
'Course is worked.  You're never wrong, are you?
How d'you feel.

    LINDSEY
I've been better.  Next time it's your turn,
okay?

Bud's expression turn inexplicably grim.

    BUD
Well, you got that right.

                                    CUT TO:

INT. SUB-BAY                                                            197

TIGHT ON BUD'S EYES, as Monk's fingers insert acrylic scleral lenses under his
eyelids so he can see in the fluid helmet.

WIDER reveals Bud is wearing the SEALs' deep suit.  Everybody is grouped
around, buckling and zipping.  He is hyperventilating with an oxygen mask,
part of the procedure for transitioning from air to fluid breathing.  Monk,
on his stretcher, is presiding.  The resident expert.  Lindsey is wrapped in a
blanket, still looking wan and frail.  She doesn't have the strength to resist
Bud's will, but she's trying.

    LINDSEY
No, Bud, no... not you.

    BUD
Who then?

She looks around at the others.  Sees their eyes.  The fear.  Has her answer.
He lowers the helmet over his head.  Catfish clamps it down.  We see what's
driving him... his sense of responsibility for these people, for not being
able to prevent this situation.

He touches her cheek, one last time.  She sees his fingers are trembling.
Then he puts on the gloves.  Catifsh is strapping a KEYPAD UNIT onto Bud's
forearm.  Lindsey wants to scream... to stop this madness.

    BUD (muffled)
So I'll hear you, but I can't talk?

    MONK
The fluid prevents your larynx from making
sound.  It'll feel a little strange.

    BUD (muffled)
Warning you now, folks, I'm a lousy typist.
  (a beat)
The moment of truth, huh?

His breathing is shallow and tense.  He looks at Lindsey.  The eyes of a
condemned man.  She squeezes his hand.  He takes a deep breath.

    BUD
Okay.  Let's rock and roll.

Monk gently cracks a valve on the suit's feed line.  The breathing fluid (3M
fluorocarbon emulsion FX-80) swirls into the helmet.  Bud reflexively raises
his chin.  The liquid fills toward his mouth.

    MONK
Relax now, Bud.  Just keep breathing as it
fills... don't fight it.  Take it in.  Just let
yourself take it in.

Suddenly, there's nothing in there to breathe but liquid.  His eyes go wide,
instant panic.  He starts to thrash.  Chest heaving.

    MONK
Hold him.  Hold him.  This is normal... it'll
pass in a second.  You're gonna be okay.  We all
breathe liquid for nine months, Bud.  Your body
will remember.

Lindsey grabs Bud's shoulders, steadying him.  He finds her eyes, the look
calming him.  He's passed into a realm from which she has already returned.
His spasms subside.  He begins to "breathe" normally.  He gets a goofy look
of wonder on his face, not really believing what he's experiencing.  He is
alive, alert and quite completely drowned inside the FBS helmet.  He grins.
Gives a big thumbs up.  Lindsey picks up a microphone.

    LINDSEY
Can you hear me okay?
(another thumbs up)
Try your keypad.

Bud taps out a brief message.  FEELS WEIRD - YOU SHOULD TRY THIS prints out
on their portable monitor.

    LINDSEY
I already have, moron.

They help Bud to the edge of the dive platform.  Jammer and Hippy lower Little
Geek into the water and Bud grabs onto it.  Hippy yells right up next to his
helmet.

    HIPPY
I redid Little Geek's chip the same as Big Geek!
He should take you right to it.  All you gotta
do is hang on!

Lindsey crouches at the edge to watch Bud submerge.

He looks up at her as he drops away.

In a few seconds, she can't see him.  Her chin quivers, minutely.

EXT. DEEPCORE/THE WALL                                                  198

FROM FAR BELOW, Deepcore is a faint tiara of lights, above in the blackness.
A single moving light appears above, at the edge of the cliff, and starts
down.  It grows large, resolving into Bud, free-falling down the wall.

He gathers speed as Little Geek's vertical thruster drives them down.

Bud looks down.  Between his feet he can see a short way down the wall in the
glow of his single light, and beyond that an unfathomable blackness.  The wall
unrolls upwards out of the darkness like a convoluted gray drapery.  He looks
up.  The lights of Deepcore are gone.  He feels  more alone than he has ever
felt.  He types out:  CANT SEE YOU

    LINDSEY (V.O.)
We're right here with you, Bud.  Your depth is
3800 feet.  You're doing fine.

Bud comes upon the twisted wreckage of the crane, hanging against the wall
like a forty-ton yo-yo at the end of the umbilical.

INT. COMMAND MODULE                                                     199

Everyone is grouped around the monitor screen, watching Bud's telemetry.  Bud
types out: GOOD DEAL ON SLIGHTLY USED CRANE.  They watch the depth meter
counting down.

    MONK
4800 feet.  It's official.

    LINDSEY
Bud, according to Monk here, you just set a record
for the deepest suit dive.  Bet you didn't think
you'd be doing this when you got up this morning.

The screen print out:  CALL GUINESS.  They laugh.  So far so good.  Seconds
later...

    HIPPY
One mile down and still grinnin'.

EXT. THE WALL                                                           200

WIDE SHOT.  Bud is a tiny spider dropping down the wall in a pathetic little
pool of light.  The wall is sterile brown-gray, devoid of life at this depth.
LOOKING DOWN, as the light shrinks to a star and vanishes in the blackness
yawning below.

INT. COMMAND MODULE                                                     201

Lindsey has the microphone gripped tightly, and the lightness in her voice is
a bit brittle.

    LINDSEY
8500 feet, Bud.  Everything okay?

    MONK
Ask him a pressure effects.  Tremors, vision
problems, euphoria.

    LINDSEY
Ensign Monk want to know how you feel.

ON THE SCREEN, printing out: COLD.

    LINDSEY
Big baby.

Then:  HANDS SHAKING.  HHARD TO TYPE.

    MONK
It's starting.  It hits the nervous system
first.

    ONE NIGHT
Keep talking, Lindsey.  Just let him hear your
voice.  It doesn't matter what about.

    LINDSEY
Don't forget Bud, you're being graded on spelling
as well as sentence structure, so concentrate,
okay?
  (long pause)
Bud, I... uh, there's some things I want to say.
It's hard for me.  I'm not of those softy, gooey-
center-type people.  It's not easy, you know,
being a cast-iron bitch.  It takes discipline
and years of training.  A lot of people don't
appreciate that.

Lindsey has somehow tuned out the others in the room.  In her mind she is
with Bud, out in the darkness.

    LINDSEY
But is wasn't all bad.  I know that.  You
remember that bike trip... we rode the Honda
up through Oregon?  It took me a week to get my
hair untangled, but I've never been happier.  It
was the most... free... I've ever felt.  I'm
sorry I can't tell you these things to your face.

EXT. THE WALL                                                           202

Bud is visibly trembling, gritting his teeth... holding on as the vise-grip
of pressure takes him.

    LINDSEY (V.O./filtered)
It's pitiful.  I have to wait until you're
freezing in the dark and there's ten thousand
feet of water between us.  I guess I'm babbling.
I'm sorry.

Bud struggles with his keyboard.

INT. COMMAND MODULE                                                     203

ON THE SCREEN:  YOU ALWAYS DID TALK TOO MUCH

Somehow's she's smiling and on the verge of tears at the same time.

    HIPPY
Two miles down and still grinnin'  Comin' up on
the big ten thou'.

    ONE NIGHT
Bottom's still a mile and a half down.

EXT. THE ABYSS                                                          204

BLAM!  Bud jerks as his dive light implodes.  He still has Geek's floodlights.
He falls on.

INT. CONTROL MODULE                                                     205

    HIPPY
12000 feet.  Jesus, I don't believe he's doing
this.

    LINDSEY
Shut up, Hippy.  Bud, how you doing?

He types: SE LUMINUS THINNGS

Everyone snaps suddenly alert.

    HIPPY
Uh, oh...

    LINDSEY
What kind of luminous things, Bud?

    CATFISH
Maybe it's... you know... them.

The screen prints out:  ITS OK. SQUID. GLOWING SQUID.

EXT. THE ABYSS                                                          206

Bud is in an enormous school of bioluminescent squid, graceful, attenuated
creatures less than a foot long.  Thousands of then glide in ghostly arcs
around him, filling the black void as far as the eye can see.  He stares at
them in wonder.  Reaches out and touches one, catches it, lets it go.  Are
they really here?  He can no longer be sure of his own perceptions.

INT. CONTROL MODULE                                                     207

Another message from Bud:  THINK THEYR REAL.

    MONK
He's losing it.  Talk to him.  Keep him with us.

    LINDSEY
Bud, it's the pressure.  Try to concentrate.
Concentrate on my voice.  Just listen to my voice.

EXT. THE ABYSS                                                          208

Bud emerges from the school of squid.  As he falls, they form a luminous plane
of swirling colors above him.  He stares upwards, transfixed.  BUD'S POV, the
ghostly blizzard of luminescence above him.  A spectral form takes shape in
the patternless glow... resolving into Lindsey's face, a hundred feet wide.
Gazing down at him, her expression sad.  Her image receded away from him into
the darkness above as he falls.

DOWN ANGLE ON BUD, reaching up in anguish.

INT. CONTROL MODULE                                                     209

Lindsey watches as Bud haltingly types out:  YOUR GOING AWAY

    LINDSEY
I'm not going away, Bud.  I'm right here, right
here with you.  This is Lindsey, Bud.  I'm right
here.

    ONE NIGHT
Signal's fading.

    HIPPY
We're losing juice... kill everything we don't
need.  Catfish, knock out those lights.

Everyone hustles to comply.  The room is plunged into darkness, the faces of
the group lit only by the ghostly CRT screen.

    ONE NIGHT
Run it through the digital processor, cook it as
much as you can.

    CATFISH
Seventeen thousand feet.  Good Christ Almighty,
this is insane.

EXT. THE ABYSS                                                          210

Bud is shaking violently, as if with palsy.  His eyes keep rolling back, and
he's having a hard time staying conscious.  He tries to type a message and he
can't.  The tons of pressure per square inch are short-circuiting his nervous
system.  Suddenly K-BAM!  Little Geek's pressure hull implodes.  Its lights
go out.  BLACKNESS.

INT. CONTROL MODULE                                                     211

    ONE NIGHT
Little Geek just folded.

    HIPPY
Bye, little buddy.

    MONK
He can still make it.

    LINDSEY
I know how alone you feel... alone in all that
cold blackness... but I'm there in the dark
with you, Bud you're not alone...

Lindsey seems not to be in the room, but to be with him, seeing what he sees.
She is oblivious to the others.

EXT. THE ABYSS                                                          212

Blackness.  Then a bright light appears... he's lit a MAGNESIUM FLARE.

It's fierce, flickering glare lights his plunge.  Bud discards the stalwart
little ROV and free-falls like a skydiver without a chute.  Out of control, he
hits a ledge and rolls off.  Tumbles forward in a cloud of debris.  He hits
another outcropping, limp as a rag doll.  Rocks and sand rain down with him
as he continues his descent.

Bud us quivering, teeth locked in a titanic rigor.

He pulls his arms and legs slowly into a fetal position.

In the plunge toward death he has gone he has gone full circle, returned to
the womb in which we all breathe the water of life before we know the world of
air and light.  Still, there is Lindsey's voice, faintly in his helmet.

    LINDSEY (V.O.)
You remember that time, you were pretty drunk,
you probably don't remember... the power went
out at the old apartment, the one on Orange
Street... and we were staring at that one little
candle, and I said something really dumb like
that candle is me, like every one of us is out
there alone in the dark in this life...

INT. CONTROL MODULE                                                     213

TIGHT ON LINDSEY as she grips the microphone.  Her voice has become a hoarse
whisper.  Her eyes are intense, focused on a point far beyond the walls of the
room.

    LINDSEY
... and you lit another candle and put it beside
mine and said "that's me"... and we stared at
the two candles, and then we... well, if you
remember any of it, I'm sure you remember the
next part.  Bud, there are two candles in the
dark.  I'm with you.  I'll always be with you.

EXT. THE ABYSS                                                          214

A tiny flickering light moves down along a vast black wall.  Bud falls on in
dream-like solitude, a candle in the dark.

INT. CONTROL MODULE                                                     215

Catfish gently takes the microphone from Lindsey's hands and leans close.

    CATFISH
How you doin', podner?  Still with us, come-back?
Talk to us, Buddy boy.

They watch the screen, expectantly.

Nothing.  Hippy and One Night start checking the equipment.  Lindsey tried
unsuccessfully to keep the terror our of here voice.

    LINDSEY
Bud?  You hangin' in there?  Talk to me, Bud.
Are you okay?

There is an agonizing pause, then the letters appear slowly:  SHAKING STOPED.
FEEL BETER.  SOM LITE BELOW.

    LINDSEY
What kind of light?

LIGHT EVYWHER.  BEAWTIFULLL

    MONK
He's hallucinating badly.

EXT. THE ABYSS                                                          216

Bud is no longer in pain.  His expression is rapt.

LOOKING DOWN, past his to a ghostly landscape.  His last flare sputters out,
but there is light.  Bioluminescent algae carpet the walls of the canyon
below him.  And he's right... it is beautiful.

The water is so clear we can see down 500 feet past Bud's tiny, silhouetted
figure, to a vast landscape faintly revealed in spectral pastels.  Barren as
the moon but exquisite, serene.  Changeless.  A place unseen by human eyes.
Like a firefly below, the lights of Big Geek are visible.  Bud descends toward
the ROV, which has grounded on a narrow shelf.  Below the shelf, the wall
slopes out, suggesting we are near the bottom of the canyon but can't see it.

ONE BIG GEEK/MIRV, sitting there like a dumbshit.  Bud's feet thump into the
sediment next to it, stirring it luminous particles.  Touchdown... three and
half miles of water over his head.  Bud leans over the warhead in a swarm of
fireflies.

INT. CONTROL MODULE                                                     217

AT GEEK prints out.  Monk takes the headset gently from Lindsey.

    MONK
Okay, Bud, we'll go step by step.  Take the
cover plate off the firing box.

A long pause.  Then... PLATE OFF

    MONK
All right, Bud, you have to cut the ground wire,
not the lead wire...

EXT. ABYSSAL LEDGE                                                      218

Bud is peering into the detonator unit.  How bad is he?  We can't tell.

    MONK (V.O.)
It's the blue wire with the white stripe, not...
I repeat... NOT the black wire with the yellow
stripe.

Bud is staring.  Blinking.  The two wire look big as sewer pipes, and they're
miles away... way down there where his hands are.

The only light he has left is a CYALUME STICK.  He pulls out the little
plastic tube.  Breaks and shakes.  It starts to glow, a tiny wand of green
light.  He fumbles with his tool pouch, takes out a pair of side-cutters.
CUTING NNOW he types to them.  He reaches into the detonator.

DETAIL, THE WIRES... in the green Cyalume glow, the look identical.  The
cutters go over on wire.  A long beat.  They withdraw, then go over the other
wire...

He cuts--

INT. CONTROL MODULE                                                     219

Everyone is frozen.  Waiting.  It's very quiet.

    LINDSEY
Would we see the flash?

    MONK
Through three miles of water?   I don't know.

They're holding their breaths.  Then... STILL HERE

A cheer goes up.  Rebel yells.

    CATFISH
Quiet, quiet!  Save you air, goddamnit.

    MONK
Bud, give me a reading off you liquid oxygen
gauge.

TEN MINUTES WORTH ID SAY.  Lindsey does white.

    HIPPY
It took him over an hour to get down there--

It's hopeless.  Lindsey grabs the headset from Monk.

    LINDSEY
Drop you weights and start back now!  The gauge
could be wrong...

EXT. ABYSSAL LEDGE                                                      220

Bud is one his knees beside the dead warhead.  His expression is enigmatic.
He looks around slowly at the luminous canyon.  Starts to type.

INT. CONTROL MODULE                                                     221

The message comes in:  NO.  THINK ILL STAY A WHILE.  BEAUTIFUL HERE.  WORTH
ADMISSION

    LINDSEY
No!  You can make it!  You hear me?  Drop your
weights... you... can breathe shallow... you...
it could be wrong--

Lindsey's voice has twisted into a sob.  She begins to weep, quietly.

    LINDSEY
Oh God, Virgil, please...

DONT CRY BABY

A pause.  Then the words...

WE KNEW THIS WAS A ONE WAY TICKET WHEN I PUT THIS THING ON.  BUT YOU KNOW I
HAD TO COME.

Lindsey sobs at the mike.  The others look away.  The signal is weakening.
One Night boosts it and the screen clears briefly.

LOVE YOU WIFE.

She stares at the printout.

    LINDSEY
Love you.

There is no reply.

                                    CUT TO:

EXT. THE ABYSS                                                          222

A tiny figure lies slumped beside the inert ROV, an Indian dying with his
horse in the desert.

Bud's eyelids close.  His chest barely moving.

A strange illumination bathes his face and his eyes open.  He blinks.  Weakly,
he raises his head, facing the source of the radiance.

BUD'S POV... A glowing figure hovers before him, like a vision.  It seems to
be an angel.  Seen closer, as it drifts toward him, we see that it is an
extraterrestrial being, bioluminescent like some deep-sea fish.  Its body
and limbs are transparent, and it resembles a figure made of blown glass.  A
delicate mantle or veil billows out around its like a corona, which pulsates
gently, propelling the being with the hypnotic grace of a Spanish dancer.  The
head is refined and strangely anthropomorphic, with large eyes that convey a
cold, dispassionate wisdom.

It is stunningly beautiful.

The creature settles toward him.  Unafraid, Bud extends his hand.

Its slender, blown-glass digits grasp his bulky glove.  It pulls him up from
the benthic ooze and they glide together down the slope, deeper into the
abyss.

At the limits of visibility we see faint, glowing forms moving below.  They
resolve into NTI ships.  Tiny ovoids, like the little scoutship that Lindsey
nearly collided with at the Montana wreck.  The larger manta-ships.  And
others, strangely configured, moving in the darkness below like luminous fish.

Suddenly the darkness explodes with light.  A vast, reticulated pattern of
brightly glowing lines, like some enormous circuit diagram, appears below
them, covering the floor of the abyssal trench.  It sweeps outward from the
center, as if the light were surging through channels.  The NTIs are revealing
their home to Bud.  The ships move among the spires like air traffic over a
major city.

EXT. N.T.I. STRUCTURE                                                   223

Bud and the creature descend until, between the lines of light, we see a dark
surface of inhuman design.  The shape extends beyond the limits of visibility.
Towers hundreds of feet high stretch upward from the curving surface.  It
dwarfs their figures as the descend toward it, approaching an opening that soon
yawns like a vast mouth.

They are picking up speed, swept along by a powerful current, into the mouth-
like opening.

INT. N.T.I. STRUCTURE                                                   224

Bud stares around in awe as smooth, pearlescent walls blur past him.  It is a
curving three-dimensional maze of tunnels, like a vast circulatory system,
where controlled currents of water become freeways in three-dimensional
space.  Tunnels divide, narrow, and reenter main-routes hundreds of feet
across, as the pair race through in a dizzying blur.

INT. FINAL CHAMBER                                                      225

Entering a smaller chamber they settle to the floor, and the NTI moves back a
few feet.

A shimmering plane or surface appears like a vertical curtain bisecting the
chamber.  The seawater divides, like the Red Sea, into two rippling walls.
They move apart.  Leaving Bud standing in a short, shimmering hallway.

Weakly, he uncouples his helmet and pulls it free.  Drops to his knees.
Doubles over as spasms wrack him.  Breathing fluid explodes from his lungs.
He lies gasping and coughing on the floor, dragging in deep breaths of what
he can only hope is air.  It is.

Bud slowly recovers, sitting up.  His head is clearing.  This really is
happening.  Beyond the shimmering, vertical surface of the water he sees the
NTI being joined by others, move or less identical, until a group of seven
is gathered watching him.

    BUD
Howdy, Uuuh... how you guys doin'?

His voice echoes metallically in the strange chamber.  Soft laps of water
from the 'walls'.

In the air a pattern of glowing lines appears, a series of what appears to be
circuit diagrams.  Bud staggers back from this strange 'screen' hanging in
mid-air.  The image is about twenty feet across.

There is a rolling jumble of static and interference which resolves into...
the face of Dan Rather, doing the evening news.  STATIC, then another
newscast.  And another.  Fragments of the same story.  The world on the brink
of war.

    BUD
You watch out TV?  That what you're trying to
say?  That you know what's been going on up
there?

The NTIs are impassive.  Static... then another newscast.

This time, we're allowed to focus on the story.  An on-the-scene interview
outside a high-tech seismology lab.  There is an air of hysteria about the
scene... technicians running across the background of the shot, people
shouting, the reporter jamming his mike at the harried-looking scientist.

    REPORTER
... a Caltech scientist who is among those
reporting an unprecedented disturbance in the
world's oceans.  Dr. Breg, can you give us a
clearer explanation then we're getting?

Berg is edgy and distracted.  People keeps handing him pieces of paper,
computer hardcopy.  The biggest thing in his life is happening...

    BERG
They're acoustic shockwaves, like tsunamis, but
with no seismological source.  The waves are
propagating toward the shorelines of every
continent--

An assistant runs up, face shiny with fear, beckoning.  We see that Berg is
running scared.  The impossible bringing the greatest terror to the rational
mind.

    BERG
Yeah.  I'll be right there... I have to go.
Look, we don't know what it is!  Okay?  Not the
slightest goddamn idea!

The image dissolves into static, fades out.  Bud turns to the NTIs.

    BUD
You're doing it!  Right?  That's what you're
telling me.  Yeah, you can control water...
that's your technology.  But why?

Static again, then a brilliant flash.  Grainy stock film of a hydrogen bomb
test in the Pacific.

The film repeats, and then again, faster, and again until is merges into an
unbroken white glare.  Bud gets the message.

    BUD
Hey, you don't know they're really gonna do it.
Where do you get off passing judgment on us,
when you can't be sure?  How do you know?

The screen exploded into a staccato series of searing images, stark moments
from recent history...

US soldiers fighting in Vietnam, street warfare in Beirut, a car bomb in
Belfast, a suspect shot in the head in the streets of Saigon, burned and
bleeding children, grainy footage of corpses bulldozed into mass graves at
Auschwitz, Wermacht soldiers marching in goose-step review, a 13-year-old
contra with an AK-47...  Just glimpses, strobing... a few frames of each.
But enough.  The images continue.

HOLD ON BUD, as the lights flicker on his face, the ongoing indictment of
humanity.

                                    CUT TO:

EXT. OCEAN FRONT WALK, SANTA MONICA, CALIFORNIA -- DAY                  226

A video news crew leaps from a Jet Ranger helicopter in a parking area and
runs to set up near the railing, facing the ocean.  Pandemonium reigns around
them, people running, driving, evacuating inland.

On the horizon, out to sea, a dark line has appeared.

It grows in height as it comes closer, a wall of water stretching across the
horizon, already hundreds of feet high and growing.

EXT. NEW YORK -- DAY                                                    227

LONG LENSE SHOT, looking seaward past the Statue of Liberty, out past the
Verazzano Narrows.  Stacked up by perspective, the distant wave is a wall of
water impossibly high, still miles out.

EXT. NAVAL BASE, KAMCHATKA PENINSULA, U.S.S.R. -- NIGHT                 228

The scene repeats on the eastern coast of the Kamchatka Penninsula in Russia,
where a full moon shimmers along the crest of a vast wave.

SIRENS wail as Russian sailors run from the docks of Petropavlovsk Naval Base.
Some stand rooted as the black glacier of water, a thousand feet high and
growing, thunders toward them in nightmarish slow motion.

EXT. OCEAN FRONT, SANTA MONICA -- DAY                                   229

The minicam crew reporter is speaking rapidly, faltering with emotion, his
voice cracking like the famous broadcast from the scene of the Hindenburg
disaster.

    REPORTER
The horizon has gone dark... the crowd is starting
to run... some are just staring, unable to
move... the wave... the wave is... it's...
I don't know... maybe a thousand feet high
already... getting bigger as I'm watching...
still miles out... oh my God, Jesus... I can
hear it...

A roar fills the air, a thunder which drowns out the people's screams, even
the rotors of the news chopper as the camera teams scrambles aboard.  They
leave the announcer standing transfixed, his face blank, eyes tracking upward
and upward as the ground begins to shake.

EXT. NEW YORK -- DAY                                                    230

The Statue of Liberty looks like a souvenir figurine at the afternoon sun is
blocked out by the cresting tsunami, an escarpment of water 2500 feet tall.

EXT. SAN FRANSISCO -- DAY                                               231

LONG LENS SHOT -- The Golden Gate Bridge and the hills of the city, the
buildings downtown.  Beyond, FILLING FRAME is the wall of sea green which
defies our comprehension.  The image shakes with the THUNDER.

EXT. MALIBU -- DAY                                                      232

A diehard surfer looks over his shoulder as the mountain of water which
transcends his worst nightmare.  He lies paralyzed on his board.

EXT. MIAMI -- DAY                                                       233

Downtown Miami crouches in terror at the feet of the shimmering monolith.

In a penthouse office suite, an executive watches the wave towering above him,
blocking out the sun, a line of raging foam appearing as it arches over,
about to break upon the teeming city.

And then...

The wave slows as it crests...

And stops.

IT SIMPLY STOPS.

2600 feet high and motionless except for a shimmering undulation of its
surface in the bright sun.  There is quiet, a faint wind and calling of
confused gulls.  Various reactions, as the thunder fades and people recover,
only to stand awed before the vast, inexplicable manifestation.  A news
helicopter passes in front of it like a dragonfly.

EXT. MALIBU                                                             234

The surfer just blinks, starting.

EXT. NEW YORK -- DAY                                                    235

On the East Coast it's the same, as the World Trade Centers are dwarfed by a
shimmering blue wall which stands... waiting.

EXT. PETROPAVLOVSK NAVAL BASE, U.S.S.R. -- NIGHT                        236

Russian seamen, lining the harbor breakwall at Petropavlovsk Naval Base on the
Kamchatka Peninsula, stare upward at the monolith of water, undulating in the
moonlight.  It seems poised to crash down, inflicting inconceivable
devastation... but it doesn't.

EXT. OCEAN FRONT WALK, SANTA MONICA                                     237

When all have seen...

The wave soundlessly subsides, slowly slipping back and down until the surface
of the sea is normal again.

VIDEO SHOT, HANDHELD, of a crowd of people watching the sea.  Moving from
face to face.  Various reactions as people respond to what they can only
understand as a miracle.  The faces... awed, stunned, tear-streaked...
laughing.  The cameraman is just walking.  Some people turn to him and smile,
or laugh, or whoop.

A woman is collapsed on a bench, crying.

A man is on his knees, shaking.

Total strangers hug each other.

A black guy, tears pouring down his face, turns to the camera with a beautific
grin.

    GUY
Somebody just laid it down to us, man.  Things
ain't never gonna be the same!

PULL BACK to reveal that we are in the...

INT. FINAL CHAMBER                                                      238

Bud sits, shaken, watching the screen, as people react to their deliverance.
He turns to the NTIs.

    BUD
Why?  You could've done it.  Why didn't you?

The screen darkens.  Then letters appears on it, slowly printing out, as if
someone was clumsily typing them.

WE KNEW THIS WAS...

And we've seen this before so we know the rest...

WE KNEW THIS WAS A ONE WAY TICKET WHEN I PUT THIS THING ON.  BUT YOU KNOW I
HAD TO COME.

A pause, then:

LOVE YOU WIFE

The last message expands to fill the entire screen.

Bud stares at the screen, at his message of self-sacrifice, then at the
aliens.  They bow their heads, just for a moment.  A sign of respect.

CLOSE ON BUD as he begins to realize what has happened.

                                    CUT TO:

INT. DEEPCORE/CONTROL MODULE                                            239

Lindsey is slumped in a chair, just staring.  Withdrawn.

The others are conserving oxygen and heat, huddling in the dark.

The air is looking pretty thick.  The speaker of the hydrophone transceiver
crackles to life.

    MCBRIDE (V.O.)
Deepcore, do you read?  This is Benthic Explorer,
over.

    CATFISH
Hell yes, we read!  Good of you to join us.  How's
that storm doin'?

    MCBRIDE
Well, it's strange... it just kind've blew
itself out all of the sudden.  We're up here in
a flat sea with no wind.  But then a lot of weird
things've been happening.

    CATFISH
Well, hell, son.  You better get us a line down
here, we're in moderately poor shape.

LATER, Hippy, Catfish, and Monk are conferring B.G. on how to get a new
umbilical hooked on.  One Night is talking to McBride on the hydrophone.

    MCBRIDE
They figure is was over a half mile high.

    ONE NIGHT
I wish I could have seen it--

She glances down at the telemetry screen, seeing movement.

    ONE NIGHT
Hey.  Hey!  HEY!!  Look... it's Bud.

    MONK
That's impossible.

Lindsey bolts to the screen.  Stares at the message printing out.

A huge grin wraps around her face.

    LINDSEY
No it's not.

    MCBRIDE (V.O.)
What's it say?

Lindsey take the mike and sits before the screen.  During the message, her
voice will go through an emotional spectrum from confusion to wonder, to a
childlike joy.

INTERCUT BETWEEN DEEPCORE AND EXPLORER BRIDGE DURING THE FOLLOWING:

    LINDSEY
It says...
"VIRGIL BRIGMAN BACK ON THE AIR/HAVE SOME NEW
FRIENDS DOWN HERE/I GUESS THEYVE BEEN HERE AWHILE/
THEYVE LEFT US ALONE BUT IT BOTHERS THEM TO SEE
US HURTING EACH OTHER/GETTING OUT OF HAND LATELY"

Lindsey grins as she reads the next part...

    LINSEY
"THEY SENT A MESSAGE/HOPE YOU GOT IT"

    CATFISH
I'd say that's a big 10-4, jack.

    LINDSEY
"THEY WANT US TO GROW UP A BIT AND PUT AWAY
CHILDISH THINGS/OF COURSE ITS JUST A SUGGESTION."

INT. BENTHIC EXPLORER BRIDGE -- DAY                                     240

Beyond the windows the ocean is calm.  The sky steel-gray put placid.  McBride
turns to Commodore DeMarco and the Navy contingent, his eyebrows cocked.

    MCBRIDE
Looks like you boys might by out of business.

    BENDIX
Something's going on down there.  I'm getting
some big readings....

Bendix is hunched over the sonar, and we can see the screens lit up like a
Wurlitzer.

INT. DEEPCORE                                                           241

In Deepcore the crew becomes aware of a strange subsonic rumbling.  The sonar
is going crazy.  One Night puts the headphones of her passive sonar rig up to
her ear, then jerks it away.

    ONE NIGHT
Whew!  Whatever this is, it's major.

The rumbling increases and a glow diffuses the water.

The glow intensifies until a blinding shaft of light blasts through the
viewport, bathing the whole interior in a cold white radiance.

A last message appears on the screen:

KEEP YOU PANTYHOSE ON/YOURE GONNA LOVE THIS

The radiance intensifies.  Everyone covers their eyes.  It flares to
WHITE-OUT.

                                    CUT TO:

INT./EXT. EXPLORER BRIDGE -- DAY                                        242

Bendix and the bridge crew are going nuts.  All their instruments are pegged.

    BENDIX
Active is pinging back something big... it's
enormous!  Coming up right under us.

    DEMARCO
Where?

    BENDIX
Where?  EVERYWHERE!!
(looks out the window)
Over there!  Port bow.

EXT. BENTHIC EXPLORER AND OCEAN                                         243

A depression appears in the surface of the sea a hundred yards off, not
swirling down like a whirlpool, just dimpling down.

It gets wider.  Deeper.  Rapidly becomes a yawning pit.

The ocean is OPENING.

Now the surface is churned by turbulence.  Slow massive roils of tremendous
power boil up from the depths.

McBride leads a mass exodus onto the deck to see better.

The open becomes a roaring maw a hundred yards across.

The ships are like toys on the shimmering rim of the maelstrom.

SOMETHING RISES IN THE CENTER OF THE OPENING.  A massive spire.  Smoothly
curving and iridescent.  Off the starboard beam, a quarter mile away, another
spire rises.  Tons of seawater fall from its sides with a THUNDEROUS ROAR, the
energy of Niagara.

Off the port bow... another spire.

And another, beyond the destroyer Albany, dwarfing it.

Six towers... plus one larger, in the center.  Rising.

One the Explorer's deck, a shadow engulfs them as the nearest spire blocks out
the sun.  The air, the sea, the deck... all vibrate with the THUNDER OF
CREATION.

And now for the payoff shot:  WE'RE HIGH, LOOKING DOWN.  THE SPIRES FORM A
PERFECT RING A MILE ACROSS.  A VAST DARK FORM, LIKE A GREAT SHADOW, RISES FROM
THE DEPTHS BENEATH THE SHIPS.  THE SPIRES ARE CONNECTED.  IT IS ALL ONE.

THE NTI ARK.

It surfaces with slow majesty, gently beaching all the ships on its broad
back.  We recognize it as the structure into which Bud was led by the angelic
being, which we assumed was a city.  The Explorer rocks gently on its flat
hull, clunking massively to one side as it settles.

The bridge crew watch millions of tons of seawater streaming off the back of
the vast, slightly curved hull.  The missile cruiser rocks back and forth
nearby, high and dry... its prop whining futility.

ON EXPLORER'S DECK, McBride, Bendix, DeMarco, the rest of the Navy
contingent... they're all standing there open-mouthed, in a dream-like daze.
Touched by the hand of God.

    BENDIX
Look...

WHAT THEY SEE -- Fifty yards away, between them and the Albany, sits Deepcore
Two.  It looks like a particularly ugly and unwanted toy, sitting on the
glistening plain of the NTI Ark's hull.

CLOSER, ON TRIMODULE C, as the hatch at the bottom opens.

Catfish's feet appear, bicycling.  He swings down to the pearlescent 'deck'.
Stands there blinking in the sunlight, mole-like.  Jammer plonks down behind
him.  He turns, lifts Lindsey down.  Hippy, Sonny, and the rest, emerge into
the light of the sun.  A deliverance from the blackest night they will ever
know.

    LINDSEY
We should be dead.  We didn't decompress.

    CATFISH
Out blood oughta be fizzin' like a warm, shook-
up Coke.

    HIPPY
They must've done something to us.

Lindsey has tears streaming down her cheeks... for the sun, for life, for
their deliverance and the larger one she knows has happened, an epiphany for
the whole human race.

    LINDSEY
Oh, yes.  I think you could say that.

She blinks.  Seeing something not far away.  She gives a little laugh, or
something between laughing and crying.

REVERSE, as Bud walks up the curving incline of one of the mouth-like
enterances to the NTI structure.  His suit is casually unzipped and the FBS
helmet dangles from one hand jauntily.

She starts toward him.  Breaks into a run.  Then stops a few feet from him.
Watching him come to her.

His smile, his eyes illuminating her.

He stops and she touches him, lightly.  Is this real?

The look at each other, wonderingly a moment.

Then laugh.  She sniffs loudly.

    LINDSEY
Hello, Brigman.

    BUD
Hello, Mrs. Brigman.

Their lips meet.

                                    CUT TO BLACK



`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
