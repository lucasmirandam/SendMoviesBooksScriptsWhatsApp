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

				TWELVE MONKEYS
	    
		          An original screenplay by

				David Peoples
  				     &
				Janet Peoples

				 Inspired by
	    
			LA JETEE, a Chris Marker Film





	Production Draft
	June 27, 1994








	FADE IN:

	INT.  CONCOURSE/AIRPORT TERMINAL - BAY

	CLOSE ON A FACE.  A nine year old boy, YOUNG COLE, his eyes wide
	with wonder. watching something intently.  We HEAR the sounds of
	the P.A. SYSTEM droning Flight Information mingled with the
	sounds of urgent SHOUTS, running FEET, EXCLAMATIONS.

	YOUNG COLE'S POV:  twenty yards away, a BLONDE MAN is sprawled on
	the floor, blood oozing from his gaudy Hawaiian shirt.

	A BRUNETTE in a tight dress, her face obscured from YOUNG COLE'S
	view, rushes to the injured man, kneels beside him, ministering
	to his wound.

	ANGLE ON YOUNG COLE, flanked by his PARENTS, their faces out of
	view, as they steer him away.

				FATHER'S VOICE (o.s.)
		Come on, Son --this is no place for us.

	YOUNG COLE resists momentarily, mesmerized by the drama.

	YOUNG COLE'S POV:  intermittently visible through a confusion of
	FIGURES rushing through the foreground, the BLONDE MAN reaching
	up and touching the cheek of the kneeling BRUNETTE in a gesture
	of enormous tenderness, a gesture of farewell, while the P.A.
	SYSTEM continues its monotonous monotone...

				P.A. SYSTEM
		Flight 784 for San Francisco is now
		ready for boarding at inmate number
		66578, Greely.

	INT.  PRISON DORMITORY/FUTURE - ETERNAL NIGHT

				PRISON P.A. SYSTEM
		--number 5429, Garcia -- number 87645, Cole...

	COLE, late thirties, dark hair, comes awake in a bunk cage, one
	of many stacked four high along both sides of a long dim
	corridor.  He blinks in the near dark, shaken, disoriented.

	Then, as he "recovers" from his very vivid dream, WE GET OUR
	FIRST LOOK AT HIS ENVIRONMENT...A WINDOWLESS UNDERGROUND WORLD OF
	ETERNAL NIGHT SOMETIME IN THE FUTURE...AN ALMOST COLORLESS
	"REALITY" OF BLURRED EDGES AND ECHOEY SOUNDS, MUCH MORE
	"DREAMLIKE" THAN HIS DREAM.

	Flashlights glare. In the half-light, COLE sees spooky figures,
	GUARDS, moving among the locked bunk/cages.

	COLE turns and whispers to the occupant of the next cage, JOSE...

				COLE
		Ssssst!  Jose, what's going on?

	JOSE's face is almost lost in shadow.  What there is of it is
	youthful.  He's just a scared Puerto Rican kid!

				JOSE
		"Volunteers" again.

	JOSE immediately rolls over and feigns sleep as SCARFACE, a
	menacing guard with a jagged scar running down his cheek, looms
	close to COLE's cage and unlocks it.

				SCARFACE
		"Volunteer duty".

    The PRISONERS in the other cages watch silently with narrowed eyes.

				COLE
		I didn't volunteer.

				SCARFACE
		You causing trouble again?

				COLE
			(controls his temper)
		No trouble.

	INT.  EQUIPMENT ROOM - ETERNAL NIGHT

	COLE's alone, struggling to get into what looks like a space suit
	in a room where suits hang like ghosts with blank eyes.

			TITLES BEGIN SUPERED OVER THE SCENE

	COLE has the torso of the suit on now and is trying to close it.

				OFFSCREEN VOICE (o.s.)
		All openings must be closed.

	COLE looks for the source of the voice, a tiny grate in the wall.

				OFFSCREEN VOICE (o.s.)
		If the integrity of the suit is compromised
		in any way, if the fabric is torn or a zipper
		not closed, readmittance will be denied.

	INT.  SEALED CHAMBER - MINUTES LATER (ETERNAL NIGHT)

	COLE, wearing the "space suit" and a helmet with a plastic visor,
	steps into a tiny chamber, a kind of air lock.  The heavy door
	clangs shut behind him.  He's alone.  COLE'S breath comes quicker
	now as he sucks oxygen from the air tanks on his back.

	On the opposite wall is another door with a huge wheel lock.
	COLE turns the heavy wheel, opens the door, steps through It

	INT.  ELEVATOR - SECONDS LATER (ETERNAL NIGHT)

	COLE'S in an ascending elevator that groans and creaks.  He looks
	down at a crudely drawn map he holds in his gloved hand.

	The map shows a series of tunnels and ladders.

	INT.  SEWER PIPE - MINUTES LATER (NIGHT)

	COLE pans a flashlight, probing the filthy sewer he's wading through

	RATS flee the blade of light, scurry across islands of rusting junk.

	The flashlight beam settles on a ladder mounted in the wall.

	Reaching the rusted ladder, COLE starts to climb awkwardly.

	EXT.  CITY STREET/FUTURE - MOMENTS LATER (NIGHT)

	A SCRAPING NOISE as a heavy man-hole cover is pushed up and moved
	aside.  COLE'S helmeted head emerges from below.

	COLE'S POV THROUGH HIS PLASTIC-VISORED HELMET:  a city in
	moonlight!  A surreal image of abandoned buildings.  No people
	anywhere.  The only sounds are the WIND and COLE'S BREATHING.

	EXT.  ANOTHER CITY STREET - MINUTES LATER (NIGHT)

	COLE'S light reveals abandoned vine-covered automobiles.
	
	Moving to the nearest car, COLE searches in the vines for
	something.  Finds it.  An insect.

	COLE takes the bug in his gloved hand.  As he clumsily inserts it
	into a collection tube, something makes him turn.

	There's something across the street in the dark.  Something alive.

	COLE points his flashlight and reveals...a BEAR!  Startled by the
	light, the animal blinks, then stands on its rear legs and ROARS.

	ANGLE ON COLE, staring wide-eyed.
	
	Then, the BEAR sinks down onto all fours and, trying to avoid the
	flashlight, it pads quickly down the street.

	INT.  SUBTERRANEAN PARKING GARAGE - NIGHT

	Using the flashlight to see, COLE reaches down to the cracked
	floor and gets another specimen.  DOGSHIT!

	The only sound is COLE'S labored BREATHING.

	Then, a different SOUND.  GRRRR!  A dog.  More GRRRRS.  More
	dogs.  Then, a YIP.  Then, VICIOUS GROWLS.  It's a DOGFIGHT!

	EXT.  STREET - NIGHT (FIRST LIGHT)

	A giant OWL, perched on an overhead traffic light, raises its wings
	and lifts off...rising higher and higher into the brightening sky.

	Below, on the street, COLE trudges along, passing deserted
	buildings, windows broken, rusted signs dangling.

	INT.  DEPARTMENT STORE - NIGHT (FIRST LIGHT)

	COLE'S light reveals a spider web just inside the store.  A large
	SPIDER tries to hide from the light.

	COLE reaches carefully into the web and plucks the spider and
	puts it into one of his specimen tubes.

	Then, he shines his light all around the once elegant store.  There's
	nothing but aisle after aisle of moldering consumer goods.

	EXT.  DEPARTMENT STORE - DAWN

	As COLE comes out of the store, the first rays of the sun hit the
	building.  COLE stops, squints into the light through his visor.

	COLE'S POV:  spray-painted on the wall a long time ago is a stenciled
	logo of twelve monkeys holding hands in a circle.  Over it is
	written, "WE DID IT!"

	COLE looks up.

	COLE'S POV:  high up on a building across the street, a LION
	patrols a ledge, pauses, looks out majestically over his world.

			TTTLES END

	INT.  FIRST UNDERGROUND DECONTAMINATION CHAMBER - ETERNAL NIGHT

	ROARING WATER, powerful torrents gushing from nozzles in the
	wall, pummel the still-suited COLE.

	INT.  SECOND UNDERGROUND DECONTAMINATION CHAMBER - ETERNAL NIGHT

	Stark naked and shivering, COLE is being scrubbed with brushes on
	long poles (like the ones used to wash cars) wielded by two HULKING
	FIGURES in bulky decontamination suits, their personas lost in their
	windowed masks.  It's a grim scene in a grim cement room with damp,
	dripping walls.  From an unseen source comes an AMPLIFIED VOICE,

				AMPLIFIED VOICE (o.s.)
		Raise your arms above your head.

	COLE lifts his arms and the FIGURES start scrubbing his armpits.

	INT.  TINY CHAMBER - SHORTLY (ETERNAL NIGHT)

	Still naked, COLE is seated on a stool while a MASKED TECHNICIAN
	in a less elaborate, less bulky decontamination outfit draws
	blood from COLE'S arm with an old-fashioned hypodermic needle.

	COLE glances toward a single, nearly opaque "window" of thick
	plastic in the rusty iron wall.  VAGUE FIGURES seem to lurk
	behind the translucent aperture, studying him.

	The TECHNICIAN slips the blood sample through a slot in the wall.

	INT.  ENGINEERING OFFICE/FUTURE WORLD - ETERNAL NIGHT

	Ushered in by two guards, TINY and SCARFACE, COLE looks around.

	COLE'S POV:  wails hidden by old headlines, articles, maps, charts...
	a blackboard covered with elaborate, sophisticated formulae...surfaces
	heaped with cracked monitors, gerry-rigged computers held together with
	string, lasers lost in tangles of cable, ancient tube amplifiers, a
	dilapidated cardboard reconstruction of a city, stacks of moldering
	books and tattered computer printouts...and, seated at a long conference
	table, staring at COLE, six SCIENTISTS:  an ASTROPHYSICIST, ENGINEER,
	BOTANIST, MICROBIOLOGIST, ZOOLOGIST, and a GEOLOGIST.  They represent
	a "modern" science where brilliant new ideas interface with crude,
	outdated, patched-together technologies.

				TINY
		James Cole.  Cleared from quarantine.

				MICROBIOLOGIST
		Thank you.  You two wait outside.

				SCARFACE
		He's got a history, Doctor.  Violence.

	COLE'S eyes return to the walls.

	Headlines:  "CLOCK TICKING!  NO CURE YET!"

				SCARFACE
		Anti-social six -- doing 25 to life.

				ENGINEER
		I don't think he's going to hurt us.  You're
		not going to hurt us, are you Mr. Cole?

	COLE'S head turns quickly to the ENGINEER.

				COLE
		No, sir.

	The GUARDS exchange a look, shrug, exit, closing the door.

				MICROBIOLOGIST
		Why don't you sit down, Mr. Cole.

	COLE goes to the empty chair at the conference table, sits down.

				ASTROPHYSICIST
		We want you to tell us about last
		night.

				COLE
		I went to the surface and I collected
		specimens like I was told.

	The SCIENTISTS don't say anything.  They just study him carefully.

				COLE
			(worried)
		I mashed the spider, didn't I?

				MICROBIOLOGIST
		We'll get to the spider later, Mr.
		Cole.  Right now, we want to know
		everything that you saw.

	INT.  ENGINEERING OFFICE - AN HOUR LATER (ETERNAL NIGHT)

	COLE, starting to look very tired now, stands at the blackboard
	sketching a detailed map of exactly where he was last night.

				ASTPOPHYSICIST
		Where you collected sample #4, what
		street was that?

				COLE
		Uh...

				BOTANIST
		It's important to observe everything.

				COLE
		I think it was...I'm sure it was 2nd Street.

	As the SCIENTISTS start to whisper animatedly among themselves,
	COLE'S eyes drift across the newspaper clippings taped to the
	wall.  One headline screams, "VIRUS MUTATING!"  Another features
	a photo of an OLD MAN (DR. MASON, who we'll see again later on)
	and the words, SCIENTIST SAYS, "IT'S TOO LATE FOR CURE".

				ASTROPHYSICIST'S VOICE (o.s.)
		Close your eyes, Cole.

	Startled, COLE closes his eyes obediently.

	BLACKNESS.  Like COLE, WE SEE NOTHING.  But we HEAR their VOICES.

				ENGINEER'S VOICE (o.s.)
		Tell us in detail what you've seen in
		this room.

				COLE'S VOICE (o.s.)
		Uh, in this room?  Uh...

				MICROBIOLOGIST'S VOICE (o.s.)
		How many of us are there?

				COLE'S VOICE (o.s.)
		Six...seven, if you count me.

				ASTROPHYSICIST'S VOICE (o.s.)
		Tell us about the pictures on the wall...

				COLE'S VOICE (o.s.)
		Uh, you mean the newspapers?

				A MONTAGE OF OVERLAPPING VOICES (o.s.)
		Tell us about the newspapers.  Can you
		hear my voice?  What do I look like?
		What does he look like, the man who
		just spoke?  How old were you when you
		left the surface?

	The VOICES blur into a cacophony and FADE INTO the droning P.A.
	SYSTEM at the airport.

	INT.  CONCOURSE/AIRPORT - DAY

	THE DREAM AGAIN!  But at an earlier moment.  YOUNG COLE, flanked
	by his PARENTS, whose faces are out of view, is watching a PLANE
	land through one of the big glass windows that lines the concourse
	leading to the departure gates.

				P.A. SYSTEM (o.s.)
		Flight 784 now boarding at gate...

	Suddenly, a SHOUT, followed by raised VOICES, interrupts the
	monotonous airport routine.  As YOUNG COLE and his PARENTS turn
	to see what's going on, a man we'll call MR. PONYTAIL, his face
	averted, hurries past them, bumping YOUNG COLE with a Chicago
	Hulls Sports Duffle Bag.

				MR. PONYTAIL
		WATCH IT!

	YOUNG COLE sees little more than the gaudy pants, the duffle, and
	the man's ponytail flopping as he rushes towards the gates.

	Just then, a WOMAN'S VOICE cries out, "NOOOOOOOOO!"

	YOUNG COLE turns back toward the Security Check Point just as
	TRAVELERS scatter madly, some diving to the floor, others
	running.  A TERRIFIED TRAVELER, hitting the floor close by, looks
	up at YOUNG COLE with panicky eyes, and asks....
	
				TERRIFIED TRAVELER
		Just exactly why did you volunteer?

	INT.  ENGINEERING OFFICE/FUTURE WORLD - (ETERNAL NIGHT)

	COLE comes abruptly awake.  Seated now, he's facing the SCIENTISTS.

				ASTROPHYSICIST
		Wake up, Cole.

				COLE
		Uh, I didn't hear the...

				MICROBIOLOGIST
			(tapping a pencil on the table)
		I asked you, why did you volunteer?

				COLE
		Well, the guard woke me up.  He told me
		I volunteered.

	The SCIENTISTS react, whispering urgently among themselves.

	COLE starts to nod off again, then comes awake with a start as
	the ENGINEER speaks to him.

				ENGINEER
		We appreciate you volunteering.  You're
		a very good observer, Cole.

				COLE
		Uh, thank you.

				ENGINEER
		You'll get a reduction in sentence.

	COLE keeps his face impassive.

				ASTROPHYSICIST
		To be determined by the proper authorities.

				ENGINEER
		You don't want to jeopardize that reduction,
		do you, Cole?  Have it taken away?

				COLE
		No, sir!

				ASTROPHYSICIST
		We have a very advanced program, something
		very different, requires very skilled people.

				MICROBIOLOGIST
		An opportunity to reduce your sentence
		considerably...

				ZOOLOGIST
		And possibly play an important role in
		returning the human race to the surface
		of the earth.

				ENGINEER
		We want tough minded people.  Strong
		mentally.  We've had some...misfortunes
		with "unstable" types.

				ASTROPHYSICIST
		For a man in your position...an opportunity.

				BOTANIST
		Not to volunteer could be a real mistake.

				MICROBIOLOGIST
			(tapping his pencil again)
		Definitely a mistake!

	COLE gives away nothing.  He's in a box here.  He has no choices.
	He stares at the tapping pencil.

	INT.  ART GALLERY - NIGHT

	A strikingly "real" world of bright colors.  Extravagant paintings
	adorn the walls.  A POET, tiny and ruddy faced, squints over his
	glasses as he reads in a booming voice to an AUDIENCE of thirty
	seated on folding chairs.

				POET
		Still among the myriad microwaves, the
		infra-red messages, the gigabytes of ones
		and zeroes, we find words, infinitesimally
		small, byte-sized now, tinier even than
		science lurking in some vague electricity
		where, if we listen we can hear the solitary
		voice of that poet telling us,
		"We are no other than a moving row
		Of Magic shadow-shapes that come and go
		Round with the Sun-illumined Lantern hold
		In Midnight by the Master of the show."

	As the POET reads, we STUDY the audience, mostly YUPPIE CULTURE
	JUNKIES or BOHEMIANS.  Among them, a light-haired woman of twenty-
	eight, soberly dressed, wearing glasses.  She's KATHRYN RAILLY.  And
	it's her beeper that suddenly BEEPS.  BEEP!  BEEP!

				POET'S VOICE (o.s.)
		"The Moving Finger writes; and, having writ,
		Moves on:  nor all your Piety nor Wit
		Shall lure it back to cancel half a Line,
		Nor all your Tears wash out a Word of it."

	BEEP!  BEEP!  Scowling at the outrageous interruption, the POET
	looks up from the text just as RAILLY, tumbling, shuts off the
	beeper and rises, embarrassed.  As she makes her way to an exit,
	the glaring POET continues...

				POET
		"Yesterday This Day's Madness did prepare;
		Tomorrow's Silence, Triumph or Despair:
		Drink!  for you know not whence you came, nor why:
		Drink!  for you know not why you go, nor where."

	INT.  CORRIDOR/POLICE STATION - NIGHT

	DETECTIVE FRANKI leads RAILLY past crowded holding cells.

				FRANKI
		-- so they get there and they ask the guy
		real nice for some kind of i.d., and he gets
		agitated, starts screaming about viruses.
		Totally irrational, totally disoriented,
		doesn't know where he is, what day it is,
		alla that stuff.  All they got was his
		name.  They figure he's stoned out of
		his mind, it's some kinda psychotic
		episode, so they're gonna bring him...

				RAILLY
		He's been tested for drugs?

				FRANKI
		Negative for drugs.  But he took on
		five cops like he was dusted to the
		eyeballs.  No drugs.  You believe that?

	FRANKI pauses, indicating a tiny observation window of thick meshed
	glass in an otherwise solid door, and RAILLY looks through it.

	RAILLY'S POV THROUGH THE WINDOW:  a MAN, his back to her, in
	strait-jacket and prison denims, examining the wall of the padded
	cell with the distorted intensity of a "mental case".

				RAILLY
		You have him in restraints.

				FRANKI
		Were you listening?  We got two officers in
		the hospital.  Yeah, he's in restraints, plus
		the medic gave him enough stellazine to kill
		a horse.  Look at him!  Still on his feet.

	RAILLY'S POV THROUGH THE WINDOW:  the MAN in the cell turns, looks
	right at her.  In spite of the cuts and welts, it's clearly COLE.

				RAILLY
		That would explain the bruises, I
		guess.  The struggle.

				FRANKI
		You want to go in?  Examine him?

				RAILLY
		Yes, please.  You said he gave a name...

				FRANKI
			(unlocking the door)
		James Cole.  That's everything we got.  None
		of the James Coles on the computer match him.
		No license, no prints, no warrants.  Nothing.
		You want me to go in with you?

				RAILLY
			(entering)
		No, thank you.

				FRANKI
		I'll be right here...just in case.

	INT.  ISOLATION CELL

	COLE stares at RAILLY.  The environment is intensely real...vivid
	colors...each sound, however slight, very distinct, almost loud...
	and yet she appears to him almost like a vision.

				RAILLY
		Mr. Cole?  My name is Doctor Railly.
		I'm a psychiatrist.  I work for the
		County -- I don't work for the police.
		My only concern is your well being --
		do you understand that?

				COLE
		I need to go now.

				RAILLY
		I'm going to be completely honest.  I'm
		not going to lie to you.  I can't make
		the police let you go...but I do want
		to help you.  And I want you to trust
		me.  Can you do that, James?  May I
		call you "James"?

				COLE
		"James"!  Nobody ever calls me that.

				RAILLY
			(frowns, studies him)
		Have you been a patient at County?
		Have I seen you someplace?

				COLE
		No, not possible.  Listen, I have to
		get out of here.  I'm supposed to be
		getting information.

				RAILLY
		What kind of information?

				COLE
		It won't help you.  You can't do anything
		about it.  You can't change anything.

				RAILLY
		Change what?

				COLE
		I need to go.

				RAILLY
		Do you know why you're here, James.

				COLE
		Because I'm a good observer.  Because I
		have a tough mind.

				RAILLY
		I see.  You don't remember assaulting a
		police officer...several officers?

				COLE
		They wanted identification.  I don't have
		any identification.  I wasn't trying to
		hurt them.

				RAILLY
		You don't have a driver's license,
		James?  Or a Social Security card?

				COLE
		No.
	
				RAILLY
		Why not?  Most people have some ID.

				COLE
		You wouldn't understand.

				RAILLY
		You've been in an institution, haven't
		you, James?  A hospital?

				COLE
		I have to go.

				RAILLY
		A jail?  Prison?

				COLE
		Underground.

				RAILLY
		Hiding?

				COLE
		I love this air.  This is wonderful air.

				RAILLY
		What's wonderful about the air, James?

				COLE
		It's so clean.  No germs.

				RAILLY
		You're afraid of germs?

				COLE
		I have to go.

				RAILLY
		Why do you think there aren't any germs
		in the air, James?

				COLE
		This is April, right?

				RAILLY
		July.

				COLE
			(sudden panic)
		July?!

				RAILLY
		Do you know what year it is?

				COLE
		What year is it?

				RAILLY
		What year do you think it is?

				COLE
		1995?

				RAILLY
		You think it's July of 1995?  That's
		the future, James.  Do you think you're
		living in the future?

				COLE
			(slightly confused)
		No, 1995 is the past.

				RAILLY
		1995 is the future, James.  This is 1989.

	COLE looks stunned.

	INT.  POLICE STATION CORRIDOR - MORNING

	COLE, bound tightly by the strait-jacket, heavy manacles on his
	ankles, is being escorted down the corridor by two surly POLICEMEN.

				COLE
		Where are you taking me?

				POLICEMAN #1
		South of France, buddy.  Fancy hotel.
		You're gonna love it.

				COLE
		South of France?!  I don't want to go
		to the South of France.  I want to make
		a telephone call.

	POLICEMAN #2 smirks as he unlocks a heavy steel door.

				POLICEMAN #2
		Zip it, scumbag -- you fooled the shrink
		with your act, but you don't fool us.

	Then, POLICEMAN #2 swings the steel door open and sunlight
	overwhelms COLE, blinding him in a dazzling fury of white light.

	EXT.  CITY STREET/MINI-VAN - DAY

	A Mini-van, the kind of vehicle used to transport a half dozen
	prisoners, crawls through a busy street.  The Police Department
	logo is prominent on the side of the van beneath barred windows.

	INT. COUNTY HOSPITAL/SHOWERS - AN HOUR LATER (MORNING)

	Fierce spray recalls the decontamination in the future.  COLE
	stands stark naked under the shower while two muscular attendants,
	PALMER and BILLINGS, supervise.

	As PALMER shuts off the water, BILLINGS hands COLE a towel and
	starts inspecting his scalp...

				BILLINGS
		Lemme see your head, Jimbo, see if you
		got any creepy crawlies.

				COLE
		I need to make a telephone call.

				BILLINGS
			(pulling Cole's head)
		Gotta work that out with a doctor, Jimbo.
		Can't make no calls 'til the doctor says.

				COLE
		It's very important.

				BILLINGS
		What chew gotta do, Jimbo, is take it
		easy, relax into things.  We all gonna
		get along fine if you just relax.

	COLE gets the hint of menace in the message and submits to the
	lice inspection, only his eyes revealing his frustration.

	INT.  HOSPITAL/DAYROOM - HALF AN HOUR LATER (DAY)

	COLE stands in the doorway, stunned by his first sight of the
	large room.  His eyes go to the heavily-grilled windows where
	light pours in from outside.  Then, to the TV, where a CARTOON
	COMMERCIAL makes raucous noises.

	PATIENTS, in K-Mart street clothes or ratty robes, stare gloomily
	at the TV, or play cards, pace, or just stare blankly.

	BILLINGS is at COLE'S side, beckoning to a patient, JEFFREY MASON,
	a twenty year old white youth dressed in khakis and a plaid shirt.

				BILLINGS
		Jeffrey.  Yo!  Jeffrey.  This here is James.
		Whyncha show James around?  Tell him the TV
		rules, show him the games an' stuff, okay?

				JEFFREY
			(with a sly look)
		How much you gonna pay me?  Huh?  I'd
		be doing your job.

				BILLINGS
		Five thousand dollars, my man.  That
		enough?  I'll wire it to your account
		as usual, okay?

				JEFFREY
		Okay, Billings.  Five thousand.  That's
		enough.  Five thousand dollars.  I'll
		give him the Deluxe Mental Hospital Tour.

	As BILLINGS walks away chuckling, JEFFREY turns to COLE.

				JEFFREY
		Kid around, kid around.  It makes them feel
		good, we're all pals.  We're prisoners, they're
		the guards, but it's all in good fun, you see?

	COLE nods and JEFFREY indicates card tables where PATIENTS are
	playing cards, checkers, chess, or working on jig saw puzzles.

				JEFFREY
		Here's the games.  Games vegitize you.
		If you play the games, you're
		voluntarily taking a tranquilizer.

	COLE sees a partially completed puzzle of the well-known painting,
	THE PEACEABLE KINGDOM, depicting a serene world of animals in harmony.

				JEFFREY
		What'd they give you?  Thorazine?  How
		much?  Learn your drugs -- know your doses.

				COLE
		I need to make a telephone call.

				JEFFREY
		A telephone call?  That's communication
		with the outside world!  Doctor's
		discretion.  Hey, if alla these nuts
		could just make phone calls, it could
		spread.  Insanity oozing through telephone
		cables, oozing into the ears of all those
		poor sane people, infecting them!  Whackos
		everywhere!  A plague of madness.
			(suddenly sly and confidential)
		In fact, very few of us here are actually
		mentally ill.  I'm not saying you're
		not mentally ill, for all I know you're
		crazy as a loon.  But that's not why
		you're here.  Why you're here is because
		of the system, because of the economy.
			(indicating the TV)
		There's the TV.  It's all right there.
		Commercials.  We are not productive
		anymore, they don't need us to make
		things anymore, it's all automated.  What
		are we for then?  We're consumers.  Okay,
		buy a lot of stuff, you're a good citizen.
		But if you don't buy a lot of stuff, you
		know what?  You're mentally ill! That's
		a fact!  If you don't buy things...toilet
		paper, new cars, computerized blenders,
		electrically operated sexual devices...
			(getting hysterical)
		SCREWDRIVERS WITH MINIATURE BUILT-IN
		RADAR DEVICES, STEREO SYSTEMS WITH
		BRAIN IMPLANTED HEADPHONES, VOICE-
		ACTIVATED COMPUTERS, AND...

	A woman orderly, TERRY, turns from the feeble PATIENT she's helping.

				TERRY
		Take it easy, Jeffrey.  Be calm.

	Abruptly, JEFFREY stifles his hysteria, takes a deep breath and
	continues, completely calm now.  But COLE isn't listening.  He's
	mesmerized by the TV.

				JEFFREY
		So if you want to watch a particular
		program, say "All My Children" or
		something, you go to the Charge Nurse
		and tell her what day and time the show
		you want to see is on.  But you have to
		tell her before the show is scheduled
		to be on.  There was this one guy who
		was always requesting shows that had already
		played.  He couldn't quite grasp the
		idea that the Charge Nurse couldn't
		just make it be yesterday for him, turn
		back time ha ha.  What a fruitcake!!

	This last thought actually penetrates COLE'S focus on the TV and
	he turns to JEFFREY who's picking up speed again.

				JEFFREY
		Seriously, more and more people are
		being defined now as mentally ill.  Why?
		Because they're not consuming on their
		own.  But as patients, they becone
		consumers of mental health care.  And
		this gives the so-called sane people work!
			(hysteria again)
		WHOOO!  SHOCK THERAPY!  GROUP THERAPY!
		HALLUCINATIONS!  THERAPEUTIC DRUGS!
		IGGIDY DIGGIDY DIG!  PERFECT!  THE
		SYSTEM IN HARMONY LIKE A BIG MACHINE...

				TERRY
		Okay, that's it, Jeffrey, you're gonna
		get a shot.  I warned you...

				JEFFREY
			(calming himself, smiling)
		Right!  Right!  Carried away, heh heh.
		I got "carried away".  Explaining the
		workings of...the institution.

	Just then, TJ WASHINGTON, a somber-looking African American in a
	bathrobe, taps COLE on the shoulder.

				TJ WASHINGTON
		I don't really come from outer space.

				JEFFREY
		This is TJ Washington, Jim -- he
		doesn't really come from outer space.

				TJ WASHINGTON
		Don't mock me, my friend.
			(to Cole)
		It's a condition of "mental divergence".
		I find myself on another planet, Ogo,
		part of an intellectual elite, preparing
		to subjugate barbarian hordes on Pluto.
		But even though it's a totally convincing
		reality in every way...I can feel, breathe,
		hear...nevertheless, Ogo is actually a
		construct of my psyche.  I am mentally
		divergent in that I am escaping certain
		unnamed realities that plague my life
		here.  When I stop going there, I will
		be well.  Are you also divergent, friend?

	The P.A. SYSTEM interrupts, startling COLE.

				P.A. SYSTEM (v.o.)
		James Cole.  Report to Staff.  James Cole!

				JEFFREY
		Staff!  Whoo!  Time for Staff.  Now the
		geniuses cure you.  Hallelujah!

	INT.  PSYCH WARD CONFERENCE ROOM - MINUTES LATER (DAY)

	COLE is agitated, speaking forcefully.

				COLE
		This is a place for crazy people!  I'm
		not crazy!

	RAILLY, four other PSYCHIATRIC RESIDENTS, including RAILLY'S best
	friend, MARILOU MARTIN, and their chief, DR. OWEN FLETCHER, sit
	around a beat-up conference table, watching COLE, who sits facing
	the doctors, with BILLINGS looming behind him.  (Some of the DOCTORS
	bear a strong resemblance to the SCIENTISTS OF THE FUTURE.)

				RESIDENT #1
		We don't use that term..."crazy", Mr. Cole.

				COLE
		Well, you've got some real nuts in here!
		Listen to me, all of you -- I have to
		tell you something that's going to be
		difficult for you to understand, but...

				DR. RAILLY
		James...please.  These are all doctors
		here and we want to help you.

				DR. FLETCHER
		Mr. Cole -- last night you told Dr.
		Railly you thought it was...
			(checking a file)
		1995. ... How about right now?  Do you
		know what year it is right now?

				COLE
		1989.  Look, I'm not confused.  There's been
		a mistake, I've been sent to the wrong place.

	Suddenly, COLE reaches out and BILLINGS lunges forward, but COLE
	is just grabbing a pad and pencil.

				COLE
		Hey, I'm not going to hurt anybody.

	FLETCHER restrains BILLINGS with a hand signal.

				COLE
			(drawing)
		Do any of you know anything about the
		Army of the Twelve Monkeys?  They paint
		this, stencil it, on buildings, all
		over the place.

	COLE waves a sketch of the dancing monkey logo we saw earlier.

				DR. CASEY
		Mr. Cole...

				COLE
		Right.  I guess you wouldn't, this is
		1989, they're probably not active yet.
		That makes sense!  Okay.  Listen to me,
		three billion people died in 1995.
		Three billion, got that?  Almost
		the whole population.  Of the world!
		Only about one percent survived.

	DOCTORS exchange knowing looks.  This is an old story, apparently.

				RESIDENT #2
		Are you going to save us, Mr. Cole?

				COLE
		Save you?  How can I save you?  It
		already happened!  I can't save you.  I'm
		simply trying to get some information for
		people in the present so that someday...
			(sees their eyes)
		You don't believe me.  You think I'm
		crazy.  But I'm not crazy.  I'm a convict,
		sure, I have a quick temper, but I'm as
		sane as anyone in this room.  I...

	COLE stops, sees DR. FLETCHER tapping his pencil.  COLE'S seen
	that tapping before -- in the future!  It disorients him.

				DR. RAILLY
		Can you tell us the name of the prison
		you've come from?

	COLE doesn't answer.  He's staring at the tapping pencil.

				DR. FLETCHER
		Does this bother you, Mr. Cole?

				COLE
			(recovering, new tack)
		No!  Look, I don't belong here!  What I
		need to do is make a telephone call to
		straighten everything out.

				DR. FLETCHER
		Who would you call, Mr. Cole, who would
		straighten everything out?

				COLE
		Scientists.  I'm supposed to report in
		to them.  They'll want to know they
		sent me to the wrong time.

				DR. FLETCHER
		So you could talk to these scientists
		and they do what?  Send you to the future?

				COLE
		No, no.  I can't talk to them.  It's called,
		"voice mail".  I'm supposed to leave messages.
		They monitor it from the present.

				RESIDENT #2
		"From the present."  We're not in the
		present now, Mr. Cole?

				COLE
		No, no.  This is the past.  This has
		already happened.  Listen...

				RESIDENT #3
		Mr. Cole, you belong in 1995 -- that's
		the present, is that it?

				COLE
		No, 1995 is the past, too.  Look...

				DR. FLETCHER
		These scientists, Mr. Cole?  Are they
		doctors like ourselves?

	Two of the residents exchange quick knowing looks.

				COLE
		No!  I mean yes, but... Look, I've been given
		a lot of drugs but I'm still perfectly lucid.
		You have to let me use the phone.  One call!

	COLE looks desperately toward RAILLY, pleading eyes meeting hers.

	INT.  LOW RENT APARTMENT - DAY

	Four little KIDS SCREAM and SQUABBLE while the phone CHIRPS
	insistently in the tiny, cluttered apartment and a harried MOTHER
	lunges for the phone, answers sharply...

				MOTHER
		Yes?
			(listens, frowns, then)
		Whaaaaat?  "Voice mail"!  I don't know
		what you're talkin' about. ... Is this
		a joke?  I don't know any scientists.
		James who?  Never heard of you!

	The MOTHER slams down the phone.

	INT.  RAILLY'S OFFICE/COUNTY HOSPITAL - DAY

	A dismayed COLE still has the receiver in his hand.  Sympathetically,
	RAILLY takes it from him.

				RAILLY
		It wasn't who you expected?

	COLE is clearly agitated, starts to pace, upset.  Nuts?

				COLE
		It was some lady.  She didn't know anything.

				RAILLY
		Perhaps it was a wrong number...

				COLE
		No.  That's the reason they chose me --
		I remember things.

	RAILLY frowns, studying the distracted man with intense interest.
	It's clear COLE is becoming a special patient and RAILLY'S cool,
	detached demeanor is giving way ever so slightly.

				RAILLY
		James, where did you grow up?  Was it
		around here?  Around Baltimore?

				COLE
			(lost in thought)
		What?

				RAILLY
		I have the...strangest feeling I've met
		you before...a long time ago, perhaps.
		Were you ever...?

				COLE
		Wait!  This is only 1989!  I'm supposed
		to be leaving messages in 1995.  It's
		not the right number yet.  That's the
		problem.  Damn!  How can I contact them?

	RAILLY recovers her distance, her poise, as she takes a bottle,
	pours out some tablets, and holds them out to COLE.

				RAILLY
		James, take these.
			(watching him step back)
		Please -- I helped you like I said I
		would.  Now I want you to trust me.

	INT.  AIRPORT CONCOURSE - DAY (THE DREAM)

	MR. PONYTAIL races past the startled YOUNG COLE.

				MR. PONYTAIL
		WATCH IT!

	Was it JEFFREY wearing gaudy pants and a ponytail?  It was
	definitely JEFFREY'S VOICE.

	TRAVELERS dive for cover as a WOMAN'S VOICE cries out...

				WOMAN'S VOICE
		NOOOOOOOOOO!

	The TERRIFIED TRAVELER looks up at YOUNG COLE, makes eye contact, but
	doesn't speak.  The TERRIFIED TRAVELER looks a lot like DR. FLETCHER!

	Just then, YOUNG COLE is distracted by a running figure.  It's
	the BLONDE MAN in the Hawaiian shirt, but he's not injured.  He's
	sprinting toward the gates, glancing back over his shoulder, his
	moustache slightly askew!

	A sharp CRACK of a GUNSHOT rings out!  Then, DAZZLING LIGHT.
	Everything goes white!

	INT.  DORMITORY (PSYCH WARD)/COUNTY HOSPITAL - NIGHT

	COLE'S eyes blink awake, blinded by a flashlight.

	He's lying in one of thirty beds in a darkened ward.  Disoriented.
	Which world is this?  The room is full of BREATHING, SNORING,
	occasional MOANS.  He can barely discern the shadowy figures of
	an ORDERLY and a NURSE, making their rounds, checking each bed.

	His eyes adjusting to the darkness, COLE watches them exit.

	He turns and sees a patch of moonlight coming in a barred window.

	With a quick glance at the sleeping PATIENTS, he slips out of
	bed, makes his way stealthily to the window, peers out.

	COLE'S POV:  the moon, glowing in the sky, illuminating a single
	tree.  Under the tree, in silhouette, a COUPLE embraces, kisses.

	ANGLE ON COLE, looking out the window, absorbed.

				VOICE (o.s.)
		It won't work. You can't open it.

	Alarmed, COLE turns, sees JEFFREY in the next bed.

				JEFFREY
		You think you can remove the grill but
		you can't.  It's welded.

	COLE checks the grill anyway.

				JEFFREY
		See?  I toldja.  And all the doors are
		locked, too.  They're protecting the
		people on the outside from us.  But the
		people outside are as crazy as us.

	COLE has become preoccupied with a small SPIDER creeping along
	the window sill.  He's staring at it when he's distracted by a
	sudden SOUND.  Grabbing the SPIDER, COLE scrambles back into bed
	just as the door opens and an ORDERLY probes the dark room with
	the blade of his flashlight.

	ANGLE ON COLE, in bed, feigning sleep.

	The flashlight clicks off and COLE hears the door close.

	For a long moment the ward is silent except for BREATHING,
	SNORES, occasional MOANS.  Then, COLE hears JEFFREY'S hoarse
	whisper, picking up right where he left off.

				JEFFREY
		You know what "crazy" is?  "crazy" is
		"majority rules".  Take germs for example.

	Although COLE is preoccupied with the SPIDER struggling to get
	out of his fist, he can't help reacting to the word, "germs"!

				COLE
		Germs?!

				JEFFREY
		In the 18th century there was no such
		thing!  Nobody'd ever imagined such a
		thing -- no sane person anyway.  Along
		comes this doctor...Semmelweiss, I
		think.  He tries to convince people...
		other doctors mostly...that there are
		these teeny tiny invisible "bad things"
		called germs that get into your body and
		make you...sick!  He's trying to get
		doctors to wash their hands.  What is
		this guy...crazy?  Teeny tiny invisible
		whaddayou call 'em?..."germs"!

	As JEFFREY warms to his subject, getting excited, COLE tries to
	figure out where to put the SPIDER.

				JEFFREY (cont.)
		So cut to the 20th century!  Last week
		in fact, right before I got dragged
		into this hellhole.  I order a burger
		in this fast food joint.  The waiter
		drops it on the floor.  He picks it up,
		wipes it off, hands it to me...like it
		was all okay.

	No alternative.  COLE pops the SPIDER in his mouth and swallows
	it as JEFFREY prattles on...

				JEFFREY
		"What about the germs?"  I say.  He
		goes, "I don't believe in germs.  Germs
		are just a plot they made up so they
		can sell you disinfectants and soap!"
		Now, he's crazy, right?  Hey, you
		believe in germs, don't you?

				COLE
		I'm not crazy.

				JEFFREY
		Of course not, I never thought you were.
		You want to escape, right?  That's very
		sane.  I can help you.  You want me to,
		don't you?  Get you out?

				COLE
		If you know how to escape, why don't you...?

				JEFFREY
		Why don't I escape, that's what you
		were going to ask me, right?  'Cause
		I'd be crazy to escape!  I'm all taken
		care of, see?  I've sent out word.

				COLE
		What's that mean?

				JEFFREY
		I've managed to contact certain underlings,
		evil spirits, secretaries of secretaries, and
		assorted minions, who will contact my father.
		When he learns I'm in this kind of place,
		he'll have them transfer me to one of those
		classy joints where they treat you...properly.
		LIKE A GUEST!  LIKE A PERSON!  SHEETS!
		TOWELS!  LIKE A BIG HOTEL WITH GREAT DRUGS
		FOR THE NUT CASE LUNATIC MANIAC DEVILS...

	PATIENTS are waking up as the NURSE and two ORDERLIES burst into the
	dorm and head straight for JEFFREY who's struggling to calm himself.

				JEFFREY
		Sorry.  Really sorry.  Got a little
		agitated.  The thought of escaping
		crossed my mind and suddenly...suddenly
		I felt LIKE BENDING THE FUCKING BARS
		BACK, RIPPING OFF THE GODDAMN WINDOW
		FRAMES AND...EATING THEM, YES, EATING
		THEM, AND LEAPING, LEAPING...

	COLE watches the ORDERLIES grab JEFFREY and haul him away.

				JEFFREY
		You dumb assholes!  I'm a mental patient!
		I'm supposed to act out.  Wait til you
		morons find out who I am.  My father's
		gonna be really upset.  AND WHEN MY
		FATHER GETS UPSET, THE GROUND SHAKES!
		MY FATHER IS GOD!  I WORSHIP MY FATHER.

	INT.  WARD DAYROOM - MORNING

	ANGLE ON TV SCREEN/A VIDEO IMAGE OF A LAB MONKEY, convulsing
	pathetically, a victim of shocks from the numerous wires attached
	to his tiny, restrained body.

	ANGLE ON COLE, sitting, writing intensely in a magazine with
	crayon, surrounded by dull-eyed PATIENTS in pajamas and ratty
	robes, staring at the shuddering LAB MONKEY on the TV screen.

				JEFFREY'S VOICE (o.s.)
		Torture!  Experiments!  We're all
		monkeys

	COLE locks up, startled, as JEFFREY, one eye bruised black, takes
	the seat next to him.

				COLE
		They hurt you!

				JEFFREY
		Not as bad as what they're doing to
		kitty.

	ANGLE ON TV, showing a laboratory CAT turning in mad circles,
	eating its own tail, while a NEWS REPORTER narrates.

				TV NEWS REPORTER (v.o.)
		These video tapes were obtained by
		animal rights activists who worked
		underground as laboratory assistants
		for several months.  Authorities say
		there is little they can do until...

	The video footage now shows LAB WORKERS watching the results of
	their experiments passively.

	ANGLE ON COLE, reacting angrily.

				COLE
		Look at those assholes, they're asking
		for it!  Maybe people deserved to be
		wiped out!

				JEFFREY
			(startled, turning)
		Wiping cut the human race!  That's a
		great idea!  But it's more of a long
		term thing -- right now we have to
		focus on more immediate goals.
			(sudden whisper)
		I didn't say a word about "you know
		what".

				COLE
		What are you talking about???

				JEFFREY
		You know -- your plan.

	As COLE stares, befuddled, JEFFREY sees COLE'S magazine.

				JEFFREY
		What're you writing?  You a reporter?

				COLE
			(shielding the magazine)
		It's private.

				JEFFREY
		A lawsuit?  You going to sue them?

	Just then BILLINGS looms over COLE, extending a cup full of pills.

				BILLINGS
		Yo, James -- time to take your meds.

	INT.  DAY ROOM/HOSPITAL - THIRTY MINUTES LATER (MORNING)

	ANGLE ON THE TV, a commercial playing:  a beautiful couple romps
	in the surf in slow motion while an eager NARRATOR encourages...

				NARRATOR (v.o.)
		Take a chance.  Live the moment.  Sunshine.
		Gorgeous beaches.  The Florida Keys!

	ANGLE ON COLE, very drugged, seated in front of the TV along with
	other drugged PATIENTS, staring at the screen.

	ANGLE ON THE TV, showing a picture of the Marx Brothers.

				TV AWNOUNCER (v.o.)
		We'll return to the Marx Brothers in
		"Monkey Business" following these
		messages.

				JEFFREY'S VOICE (o.s.)
		Monkey Business!  Monk Key Business.

	COLE sees JEFFREY sliding into the next chair and smirking.
	
				JEFFREY
		Get it?  Monk - Key.  Monk!
			(big grin)
		Key!

	JEFFREY flashes his palm open for one quick moment.  A KEY!

				COLE
			(groggy)
		What....???

				JEFFREY
		Wooooo, they really dosed you, bro.
		Major load!  Listen up -- try and get
		it together.  Focus!  Focus!  The plan!
		Remember?  I did my part.

				COLE
		What...???

				JEFFREY
		Not, "what", babe!  When!

		"When???"

				JEFFREY
			(pressing the key into Cole's hand)
		Now!

				VOICE/TV (o.s.)
		Let us guide you to the stocks and
		bonds that will enhance your portfolio.

				JEFFREY
			(leaping to his feet)
		YES -- NOW!  BUY NOW!  STOCKS AND BONDS!
		NO MORE MONKEY BUSINESS -- BUY NOW.

	ANGLE ON TV, almost mimicking JEFFREY with an ad...a BULL and a
	BEAR and a computer screen showing stock prices fluctuating.

				VOICE/TV (v.o.)
		A portfolio tailored to your specific
		needs and the needs of your loved ones...

	ANGLE ON COLE, dumbfounded, watching JEFFREY dance crazily.

				JEFFREY
		YES, YES.  ENHANCE YOUR PORTFOLIO NOW!

	ANGLE ON BILLINGS, across the ward, reacting to JEFFREY, lets go
	of the OLD MAN he's helping as another orderly, TERRY, presses a
	beeper, calling for help.

	ANGLE ON COLE, flabbergasted, as JEFFREY cavorts around the room.

				JEFFREY
		BUY!  SELL!  SEIZE THE OPPORTUNITY!

	ANGLE ON A HAND, inserting the last piece into the PEACEABLE
	KINGDOM JIGSAW PUZZLE.  Just then, JEFFREY'S HAND sweeps the
	puzzle off the table, scattering it into a thousand pieces.

	ANGLE ON JEFFREY, dancing away while the PATIENT who just
	completed the puzzle stares, very upset.

	Other PATIENTS are getting agitated, too, as JEFFREY avoids a
	lunge by BILLINGS and dances off, using PATIENTS as a shield.

				HEAVY WOMAN PATIENT
		I'M GETTING DIZZY.  MAKE HIM STOP!

				SKINNY MAN PATIENT
		HERE THEY COME!  THEY'RE COMING!

				OLD MAN PATIENT
		FIVE HUNDRED DOLLARS!  I GOT FIVE
		HUNDRED DOLLARS!  I'M INSURED!

				JEFFREY
		OPPORTUNITY!  DEFINITELY!  A WINDOW OF
		OPPORTUNITY!  OPENING NOW!  NOW'S THE TIME
		FOR ALL GOOD MEN TO SEIZE THE MOMENT!  YES!
		YES!  MASTERCARD!  VISA!  THE KEY TO HAPPINESS!

	ANGLE ON COLE, realizing through the haze of drugs that JEFFREY
	is sending a message to him.  COLE looks at the ward door.

	COLE'S POV:  the WARD DOOR opens and two husky ORDERLIES enter.
	One locks the door with a key, one of many on a key ring attached
	to his belt, as the other ORDERLY rushes to join the pursuit.

				JEFFREY
		SEIZE THE MOMENT!  GET RICH!  NOW'S THE
		TIME!  GO FOR IT!

				BILLINGS
			(missing a tackle)
		God damn you, Jeffrey, quit playing the fool.

	ANGLE ON COLE, hesitating.  He locks at the door...blurring in
	and out of focus.  He looks down at the key in his hand.

	ANGLE ON JEFFREY, being grabbed by the ORDERLIES.  JEFFREY
	resists wildly as they struggle to overpower him.

				JEFFREY
		LAST CHANCE!  LAST CHANCE!  HEY -- OW!

	ANGLE ON COLE, moving to the door.  He reaches it and tries to
	insert the key in the lock.

	ANGLE ON LOCK, as the key keeps missing the hole.

	ANGLE ON COLE, glancing nervously over his shoulder.

	COLE'S POV:  ORDERLIES swarm over JEFFREY, don't notice COLE.

	ANGLE ON COLE, managing to insert the key.  It won't turn.

	A PATIENT, close at hand, startles COLE, speaking into his ear.

				PATIENT
		Place to go would be...Florida.  The
		keys are lovely this tine of year.

	COLE, unnerved, desperate tries the key again.  It turns.

				PATIENT
		Be careful.  J. Edgar Hoover isn't really dead.

	COLE pauses, stares, not understanding.  Then, he opens the door.

	INT.  CORRIDOR/COUNTY HOSPITAL

	Stepping through the door, COLE finds himself in an ante-room
	facing several elevators.

	A uniformed SECURITY MAN sitting at a near-by desk doesn't even
	lock up from the magazine he's reading.

	Barely daring to breathe, COLE steps toward the elevators so his
	back is to the SECURITY MAN.  But he doesn't know how to control
	this elevator.  What should he do?

				SECURITY MAN'S VOICE (o.s.)
		Two's not working today.  Use one.

	COLE freezes, sneaks a glance over his shoulder.

	COLE'S POV:  the SECURITY MAN continues his reading.  He's a big
	guy with reading glasses perched on his nose.  He looks exactly
	like the MENACING GUARD IN THE FUTURE...SCARFACE!

	ANGLE ON COLE, stunned!

	Just then, an elevator door slides open.  The elevator's empty.

	COLE steps into it.

	INT.  ELEVATOR/COUNTY HOSPITAL

	The door closes, isolating COLE in the elevator.

	COLE finds the down button, is about to push it when the elevator
	springs to life.  The numbers on the indicator over the door
	start to rise.  7...8...9.

	Then, the elevator stops and the door opens.

	Two DOCTORS and an AIDE stand in front of the door, waiting.

	COLE hesitates.

	They look at him.  They seem to expect him to exit.

	Avoiding eye contact, COLE exits the elevator.

	As they enter the elevator, the DOCTORS look back at COLE and frown.

	INT.  RAILLY'S OFFICE - MORNING

	RAILLY has just arrived for work.  She's slipping on her white
	doctor's coat when...

	DR. CASEY, one of the other residents, sticks his head in the
	door waving a crayoned message on a page torn from a magazine.

				DR. CASEY
		This was in my box, but I have a slight
		suspicion it wasn't meant for me.

	CASEY enters the room, reading the scrawled words dramatically.

				DR. CASEY
		"You are the most beautiful woman I have
		ever seen.  You live in a beautiful
		world.  But you don't know it.  You have
		freedom, sunshine, air you can breathe."

				RAILLY
			(smiling)
		Cole.  James Cole -- right?

	She reaches for the note but CASEY moves it out of her grasp.

				DR. CASEY
		"I would do anything to stay here, but
		I must leave.  Please, help me."

				RAILLY
		Poor man...

	CASEY is handing her the note when another resident, DR. GOODINS,
	sticks his head in the door.  He's upset.

				DR. GOODINS
		Hey, Kathryn, James Cole is one of
		yours, right?

	RAILLY and CASEY stare at him.

				DR. GOODINS
		He got out.  Took off.  Last seen, he
		was up on nine.

    INT.  X-RAY DEPARTMENT/BASEMENT - DAY

    A PATIENT is being swallowed by a large tube, a CAT SCANNER,
    while a DOCTOR in a white coat speaks reassuringly.

				DOCTOR
		Just relax -- don't fight it.  We have
		to know exactly what's there so we can...

	The DOCTOR stops, astonished, as the door bursts open.

	It's COLE!  He stares at the PATIENT and the Cat Scanner.

	The PATIENT lifts his head up and stares at COLE.

				DOCTOR
		Eh, excuse me.  Can I help you?

	COLE turns and rushes back out the door.

	INT.  CORRIDOR/COUNTY HOSPITAL

	COLE steps into the corridor, turns to his right, freezes.

	A POSSE of SECURITY GUARDS is headed in his direction.

	COLE turns to his left.

	Four ORDERLIES are coming that way.

	COLE'S trapped.  A beat.  He attacks the nearest man.  BILLINGS.

	INT.  TECH ROOM/PSYCH WARD - SHORTLY (DAY)

	RAILLY prepares a hypo, turns to COLE who is strapped tightly on
	a gurney with BILLINGS and an RN standing on either side, tense
	for more trouble.  One of BILLINGS' eyes is starting to swell shut.

				RAILLY
		It's just a shot to calm you.

				COLE
		No more drugs.  Please...

				RAILLY
		I have to do this, James.  You're very
		confused.

	RAILLY pushes the needle into COLE'S skin.

	INT.  CONFERENCE ROOM/PSYCH WARD - LATER (DAY)

	DR. FLETCHER faces RAILLY across the conference table.  DR.
	CASEY, DR. GOODINS, DR. MARILOU MARTIN are also there.

				DR. FLETCHER
		Don't be defensive, Kathryn, this isn't
		an inquisition.

				RAILLY
		I didn't think I was being defensive.
		I was just...

				DR. FLETCHER
		He should have been in restraints.  It
		was bad judgment on your part, plain
		and simple.  why not just cop to it?

				RAILLY
		Okay, it was bad judgment.  But I have
		the strangest feeling about him -- I've
		seen him somewhere and...

				DR. FLETCHER
			(impatient, not interested)
		Two policemen were already in the
		hospital and now we have an orderly
		with a broken arm and a Security
		Officer with a fractured skull.

				RAILLY
		I said it was bad judgment!  What else
		do you want me to say?

				DR. FLETCHER
		You see what I mean?  You're being defensive.
			(to Dr. Casey)
		Isn't she being defensive, Bob?

	But just then, BILLINGS sticks his head in the door.

				BILLINGS
		Uh, Dr. Fletcher -- we got another...
		situation.

	INT.  CORRIDOR/PSYCH WARD - MOMENTS LATER (DAY)

	DR. FLETCHER looks into an empty padded cell as RAILLY, MARTIN,
	GOODIN, BILLINGS, PALMER and the NURSE crowd behind him.

				DR. FLETCHER
		He was in full restraints?  And the
		door was locked?

				BILLINGS
		Yes, sir.  Did it myself.

				DR. FLETCHER
		And he was fully sedated?

				RAILLY
		He was fully sedated!

				DR. FLETCHER
		Then are you trying to tell me that a
		fully sedated, fully restrained patient
		somehow slipped out that vent, replaced
		the grill behind him and that he's wriggling
		through the ventilation system right now?

	DR. FLETCHER indicates an impossibly tiny vent high in the wall.

	INT.  CONCOURSE/AIRPORT - DAY (THE DREAM)

	Seen through the glass windows, a 747 takes off, climbing into
	the sky as the airport P.A. System drones...

				P.A. SYSTEM
		Flight 784 to San Francisco now
		boarding at Gate 38...

	YOUNG COLE, watching the 747, whirls at the SOUND of a COMMOTION.

	MR. PONYTAIL bumps him.

	The BLONDE MAN sprints past.  The WOMAN'S VOICE calls out!

				WOMAN'S VOICE
		NOOOOOOOOOO!

	TRAVELERS dive for cover briefly revealing the mysterious BRUNETTE
	running after the BLONDE MAN!  But this time, YOUNG COLE catches
	just a glimpse of her face.  She looks a little like RAILLY except
	for the dark hair, the make-up. and the flashy earrings.  She
	calls out, her VOICE blending weirdly with the P.A. SYSTEM...

				BRUNETTE/P. A. SYSTEM
		The Freedom For Animals Headquarters
		now boarding on Second Avenue.  The
		Army of the Twelve Monkeys...

				ENGINEER'S VOICE (o.s.)
		Cole, you moron -- wake up!

	INT.  ENGINEERING OFFICE - ETERNAL NIGHT OF THE FUTURE

	As COLE blinks awake, the digitized monotone of the P.A. SYSTEM
	continues to drone in an unearthly VOICE...

				UNEARTHLY VOICE/P.A. SYSTEM
		-- they're the ones who are going to do it...

	COLE'S eyes seek the source of the sound and find it on the table
	in front of the panel of disapproving SCIENTISTS facing him.  It's
	a beat-up old tape recorder.

				UNEARTHLY VOICE/TAPE RECORDER
		I can't do anything more.  The Police
		are after me.

	The tape ends, runs off the reel, flap...flap...flap...

				ASTROPHYSICIST
		Well?

				COLE
		Uh, what?

				ENGINEER
		He's drugged out of his mind!  He's
		completely zoned out.

				ASTROPHYSICIST
		Cole, did you or did you not record
		that message?

				COLE
		Uh, that message...me?

				MICROBIOLOGIST
		It's a digital reconstruction of a
		message, Cole, from a weak signal on our
		contact number.  Did you make that call?

				COLE
			(angrily)
		I couldn't call!  You sent me to the
		wrong year!  It was 1989.

				SCIENTISTS
		1989!

	The SCIENTISTS react, exchanging looks, whispers.  Then,

				ZOOLOGIST
		You're certain of that?

				GEOLOGIST
			(before Cole can answer)
		What did you do with your time, Cole?
		Did you waste it on drugs?  Women?

				COLE
		They forced me to take drugs.

				BOTANIST
		Forced you!  Why would someone force
		you to take drugs?

				COLE
		I got into trouble.  I got arrested.
		But I still got you a specimen -- a
		spider -- but I didn't have anyplace to
		put it, so I ate it.  It was the wrong
		year anyway, so I guess it doesn't matter.

	The SCIENTISTS stare incredulously, then turn, exchange knowing
	looks, huddle, start whispering to one another.

	Struggling to stay awake COLE sees, blurrily, the MICROBIOLOGIST
	staring at COLE intently.  For one moment, the face belongs to
	DR. FLETCHER!

	COLE blinks hard...and the MICROBIOLOGIST has his own face, again.

	COLE'S head slumps forward now...and everything goes dark.

				GEOLOGIST'S VOICE (o.s.)
		Cole!

	INT.  ENGINEERING OFFICE - ETERNAL NIGHT OF THE FUTURE

	COLE comes awake with a start.  The room is dark now, except...

	a slide is being projected on a torn screen.  It's a picture of a
	stenciled graffiti...the logo of The Army of the 12 Monkeys.

				ENGINEER
		What about it, Cole?

				ZOOLOGIST
		Did you see it?

				COLE
		Uh, no, sir.  I...

	Another slide CLICKS into place.  Youthful PROTESTERS, their
	placards featuring slogans and images of Animal Atrocities,
	confront POLICE in riot gear.

				ASTROPHYSICIST
		What about these people?  Did you see
		any of these people?

	Zooming in, panning, the SCIENTISTS emphasize the FACES of the
	PROTESTERS.  The FACES are unfamiliar to COLE (though WE will
	recognize some of them later on).

				COLE (o.s.)
		Uh, no, sir, I...wait!

	The image pans back to a much enlarged blurry FACE among the
	PROTESTERS.  In spite of the poor image, the expression of rage
	is clear, and it seems to resemble a somewhat older JEFFREY MASON.

				ASTROPHYSICIST
		Him?  You saw that man?

				COLE
		Uh, I think so.  In the mental hospital.

				MICRO3IOLOGIST
			(switching on the light)
		You were in a mental institution?!

	The SCIENTISTS MUTTER disapprovingly among themselves.

				ASTROPHYSICIST
		You were sent to make very important
		observations!

				BOTANIST
		You could have made a real contribution.

				GEOLOGIST
		Helped to reclaim the planet...

				ZOOLOGIST
		As well as reducing your sentence.

				MICROBIOLOGIST
		The question is, Cole -- "Do you want
		another chance?"

	COLE stares at them, trying to figure out what they mean.

	INT.  CONCOURSE/AIRPORT - DAY (THE DREAM)

	The BRUNETTE runs up the concourse, her back to YOUNG COLE, as
	frightened PASSENGERS duck for cover, SHOUTING!

				RASPY VOICE (o.s.)
		Hey!  Who's that?

	INT.  CELL - ETERNAL NIGHT

	COLE opens his eyes.  Where is he?  Silence as he examines the
	tiny cell.  Bare cement walls.  High ceiling.  Same color and
	size as the isolation room at the county hospital.

				RASPY VOICE (o.s.)
		Hey, Bob...what's your name?

	COLE looks around frantically.  Up, down.  Where is the VOICE
	coming from?  Maybe from that tiny vent high in the wall...

				COLE
		Where are you?

				RASPY VOICE (o.s.)
		You can talk!  Wah'dja do, Bobby boy?
		Volunteer?

				COLE
		My name's not "Bob".

				RASPY VOICE (o.s.)
		Not a prob, Bob.  Where'd they send you?

				COLE
		Where are you?

				RASPY VOICE (o.s.)
		Another cell. ...  Maybe.

				COLE
		What do you mean, "maybe"?  What's that
		supposed to mean?

				RASPY VOICE (o.s.)
		Maybe.  Means "maybe" I'm in the next cell,
		another "volunteer" like you -- or "maybe"
		I'm in the Central Office spying on you
		for all those science bozos.  Or, hey, "maybe"
		I'm not even here.  "Maybe" I'm just in
		your head.  No way to confirm anything.
		Ha Ha.  Where'd they send you?

	COLE doesn't answer.

				RASPY VOICE (o.s.)
		Not talking, huh, Bob?  That's okay
		I can handle that.

				COLE
		1989.

				RASPY VOICE (o.s.)
		89!  How was it?  Good drugs?  Lotsa
		pussy?  Hey, Bob, you do the job?  D'ju
		find out the "big info"?...Army of the
		Twelve Monkeys...where the virus was
		prior to mutation?

				COLE
		It was supposed to be 1995.

				RASPY VOICE (o.s.)
		Science isn't an exact science with
		these clowns.  You're lucky you didn't
		end up in ancient Egypt!

	INT.  LAB - ETERNAL NIGHT OF THE FUTURE

	COLE is strapped on a gurney.  SCIENTISTS hover near-by,
	whispering.  The walls of the gloomy chamber are damp, sweating.

				GEOLOGIST
		No mistakes this time, Cole.

				ASTROPHYSICIST
		Stay alert.  Keep your eyes open.

				ZOOLOGIST
		Good thinking about that spider, Cole.
		Try and do something like that again.

				MICROBIOLOGIST
		Just relax now -- don't fight it.  We
		have to know exactly what's there so we
		can fix it.

	The gurney is being wheeled into a crudely welded steel tube...
	reminiscent of the cat scanner in County Hospital.

	COLE'S POV:  a last glimpse of anxious FACES, then the chamber
	door is CLANGED shut.

	EVERYTHING IS BLACK.  A HUM BUILDS.  THE BLACKNESS VIBRATES, THE
	HUM REACHES A DEAFENING LEVEL, THEN DIMUENDOS.  WE BEGIN TO HEAR
	BURSTS OF MACHINE GUN FIRE, VOICES SHOUTING IN FRENCH, A SUDDEN
	HUGE EXPLOSION!  THEN...

	EXT.  TRENCH/FRANCE - DAY

	DRIZZLING RAIN.  And SCREAMS.  COLE'S in a deep trench, naked,
	eyes wide with terror. What's going on? Where is he?  SOLDIERS
	in gas masks push urgently past him rushing toward their injured
	COMRADES who've been ripped apart by the shell that just hit
	fifteen yards away.  Muffled VOICES shout through gas masks...
	in FRENCH.  COLE doesn't know it, but this is World War I!
	Suddenly, a SERGEANT confronts him, shouting in French.

				SERGEANT
			(FRENCH, subtitled)
		Where's your mask?!  And your clothes...
		and your weapon, you idiot?!

				COLE
		What?  What??

	COLE looks around desperately.  A horribly WOUNDED MAN is being
	stretchered past them in the narrow trench.  Machine guns chatter
	close at hand.  AAK AAK AAK.  A grenade EXPLODES.  Reacting to the
	foreign word, the SERGEANT jams his bayonet into COLE'S ribs...

				SERGEANT
			(FRENCH, subtitled)
		Captain!  A Kraut!  We got a Kraut!

				COLE
		I don't understand.  Where am I?

	The CAPTAIN hurries over, snapping at COLE in German.

				CAPTAIN
			(GERMAN, subtitled)
		How'd you get here, soldier?  What's
		your rank?  Where are your clothes?

				COLE
		I...don't understand.

				CAPTAIN
			(frowning, GERMAN, subtitled)
		German!  Speak German!  What are you
		doing here?

				VOICE (o.s.)
			(pleading in English)
		I gotta find 'em.  I gotta find 'em.
		Please, you gotta help me!

	COLE turns, sees...

	It's his friend, JOSE, the Puerto Rican kid from the next cell in
	the "underground" time.  He's being carried past COLE now on a
	stretcher, blood all over his torso, horribly wounded.

				COLE
		JOSE!

				JOSE
		Cole!  Oh, God, Cole, where are we?

	JOSE reaches out to COLE just as a PHOTOGRAPHER takes a FLASH
	PICTURE of the kid being carried off on the stretcher.  SUDDENLY,
	SHOTS RING OUT.  COLE goes down.  Hit in the leg!

	SOLDIERS in gas masks rush past him like giant insects.

	Looking to his left, COLE sees the CAPTAIN lying beside him, dead
	from a chest wound, his gas mask half off.

	COLE is reaching for the mask when...

	A SHELL HITS CLOSE BY WITH AN ENORMOUS EXPLOSION.

	EXT.  COLLEGE CAMPUS - NIGHT

	Stunningly quiet.  We are on a placid campus looking at the
	dignified architecture of Breitrose Hall.  MOVING IN we FOCUS ON
	a large poster advertising "The Alexander Lectures, Spring 1995".
	WE SKIM the listings (Jon Else on The Nuclear Agony, Dr. Andrew
	Miksztal on Biological Ethics, etc.) until we SETTLE ON...

				DR. KATHRYN RAILLY
			MADNESS AND APOCALYPTIC VISIONS
					MAY 17

	INT.  AUDITORIUM/BREITROSE HALL - NIGHT

	A large screen dominates the auditorium stage.  On the screen is
	a slide of an engraving from the Middle Ages showing a MADMAN in
	apparent agony, his mouth shaped to a scream, as he is restrained
	by PEASANTS.  The projector ZOOMS slowly in on the agonized FACE
	of this MADMAN as we HEAR RAILLY'S VOICE lecturing.

				RAILLY'S VOICE (o.s.)
		According to the accounts of local
		officials at that time, this gentleman,
		judged to be about forty years of age,
		appeared suddenly in the village of Wyle
		near Stonehenge in the West of England in
		April of 1162.  Using unfamiliar words and
		speaking in a strange accent, the man made
		dire prognostications about a pestilence
		which he predicted would wipe out humanity
		in approximately 8OO years.  Deranged and
		hysterical, the man raped a young woman of the
		village, was taken into custody, but then
		mysteriously escaped and was not heard of again.

	WE DISCOVER RAILLY, six years older now, standing at a lectern
	in a pool of light.  She's dwarfed by the giant screen where the
	engraving is replaced by a series of slides of woodcuts showing
	scenes of pestilence in the Middle Ages as she lectures to an
	audience of mostly SCHOLARLY TYPES.

					RAILLY (cont.)
		In 1841, Mackay wrote, "During seasons
		of great pestilence, men have often
		believed the prophecies of crazed
		fanatics, that the end of the world was
		come."  Obviously, this plague/doomsday
		scenario is considerably more compelling
		when reality supports it in some form,
		whether it's the Bubonic Plague, smallpox,
		or AIDS.  In addition to these "natural"
		contagions, there are now technological
		horrors as well:  besides radiation,
		consider our lurking fear of germ
		warfare and its close approximation,
		chemical warfare, which first reared
		its ugly head in the deadly mustard
		gas attacks during the First World War.

	ON THE SCREEN, a SERIES of SLIDES show images of WORLD WAR I
	SOLDIERS in gas masks, in death throes, etc..

				RAILLY'S VOICE (cont. o.s.)
		During such an attack in the French
		trenches in October, 1917, we have an
		account of this soldier...

	ON THE SCREEN, a slide of an old deteriorated photograph shows
	JOSE, the Puerto Rican kid, strapped to a stretcher, being carried
	by SOLDIERS through the trenches during an attack.  JOSE appears
	to be ranting madly as the projector ZOOMS CLOSER on his face until
	the image approximates Munch's famous painting.

				RAILLY'S VOICE (cant. o.s.)
		-- who, during an assault, was wounded
		by shrapnel and hospitalized behind the
		lines where Doctors discovered he had
		lost all comprehension of French but
		spoke English fluently, albeit in a
		regional dialect they didn't recognize.
		The man, although physically unaffected
		by the gas, was hysterical.  He claimed
		he had come from the future, that he was
		looking for a pure germ that would
		ultimately wipe mankind off the face of
		the earth in the year... 1995!

	The AUDIENCE gives a nervous CHUCKLE.

	ON THE SCREEN, a different old photograph of JOSE.  This time
	he's in a military hospital, gaunt, haunted, very ill.

				RAILLY'S VOICE (cont. o.s.)
		Although seriously injured, the young
		soldier disappeared from the hospital
		before more data could be gathered.  No
		doubt, he was trying to carry on his
		mission to warn others, substituting
		for the agony of war...a self-inflicted
		agony we call the "Cassandra Complex".

	As RAILLY continues, we SCAN the AUDIENCE and DISCOVER MARILOU MARTIN,
	RAILLY'S friend, and MARILOU'S HUSBAND, WAYNE CHANG, both listening
	attentively.  Further away, another MAN listens intently.  A MAN with
	shoulder-length carrot-colored hair.  His name is DR. PETERS.

				RAILLY (cont.)
		Cassandra, in Greek legend you will recall,
		was condemned to know the future but to be
		disbelieved when she foretold it.  Hence,
		the agony of foreknowledge combined with
		impotence to do anything about it.

	INT.  RECEPTION ROOM - AN HOUR LATER (NIGHT)

	A stack of new books.  THE DOOMSDAY SYNDROME, Apocalyptic
	Visions of the Mentally Ill by Dr. Kathryn Railly

	Surrounded by enthusiastic members of the audience, RAILLY is
	seated at the table signing books but DR. PETERS has her ear.

				DR. PETERS
		I think, Dr. Railly, you have given
		your alarmists a bad name.  Surely
		there is very real and very convincing
		data that the planet cannot survive the
		excesses of the human race:  proliferation
		of atomic devices, uncontrolled breeding
		habits, the rape of the environment, the
		pollution of land, sea, and air.  In this
		context, isn't it obvious that "Chicken
		Little" represents the sane vision and
		that Homo Sapiens' motto, "Let's go
		shopping!" is the cry of the true lunatic?

	DR. PETERS smiles self-importantly at RAILLY as an elderly
	disheveled PROFESSOR elbows in front of him.
 
				DISHEVELED PROFESSOR
		Doctor Railly -- please!  I wonder if
		you're aware of my own studies which
		indicate that certain cycles of the
		moon actually impact on the incidence
		of apocalyptic predictions as observed
		in urban emergency rooms and...

	As the PROFESSOR babbles, MARILOU MARTIN and her husband, WAYNE
	CHANG, appear and whisper...

				MARILOU
		You were great.

				RAILLY
		You're leaving?

				MARILOU
		The reservation's at nine thirty --
		it's getting late.

				DISHEVELED PROFESSOR
		Doctor Railly -- please -- this is very
		important!

				WAYNE CHANG
			(checking the professor)
		You sure you're gonna be all right?

				RAILLY
			(smiles, checks her watch)
		I'll be there in twenty minutes.

				DISHEVELED PROFESSOR
		Dr. Railly, I simply cannot understand
		your exclusion of the moon in relation
		to apocalyptic dementia...

	EXT.  PARKING LOT/BREITROSE HALL - NIGHT

	A full moon.

	COLLEAGUES in a VOLVO pull out of the parking lot, calling,
	"Congratulations" to RAILLY.

	She waves back as she hurries to her black ACURA, one of the last
	cars left in the lot.

	The outside lights of Breitrose Hall go off.

	RAILLY seems to be alone in the lot as she fishes keys from her
	purse, unlocks her car door, starts to open it when...

	Suddenly, she's grabbed from behind in a choke-hold by a large
	shadowy MAN looming out of the darkness behind her.

				MAN'S VOICE
		Get in!

	Unable to scream, she writhes and kicks as he forces her into the
	front seat.

				MAN'S VOICE
		I've got a gun.

	RAILLY freezes, terrified, as he opens the rear door and
	scrambles in behind her.

	INT.  ACURA/PARKING LOT

	Fighting to suppress the quaver in her voice, RAILLY says...

				RAILLY
		You can have my purse.  I have a lot of
		cash and credit...

				MAN'S VOICE (o.s.)
		Start the car.

	Glancing in the rear view mirror, RAILLY sees penetrating eyes
	peering out of the shadows, no other features.

	Half-turning in the seat, she holds out the keys to him.

				RAILLY
		Here!  You can have the keys.  You can...

	He grabs her hair and yanks her head back hard, speaking fiercely
	into her ear, his face last in shadow.

				MAN
		START THE CAR!  NOW!

	EXT.  ACURA/PARKING LOT

	The engine STARTS, the Acura backs up, then heads for the exit.

	INT.  ACURA

	Steering fearfully, RAILLY hears him speak more calmly now.

				MAN'S VOICE (o.s.)
		I don't want to hurt you.  But I will.
		I've hurt people before when...when I
		had no choice.  Turn left.

	As she makes the turn, RAILLY glances in the rear view mirror,
	sees him unfolding a tattered map.  His face is lost in darkness
	but she glimpses ragged, torn clothing as he tries to read the
	map by the intermittent glow of passing street lights.

				RAILLY
		Where... where are we going'

				MAN
		I need you to drive me to Philadelphia.

				RAILLY
			(startled, horrified)
		But that's... that's more than 200 miles!

				MAN
		That's why I can't walk there.  Turn
		here... I think...

	RAILLY obeys.  She glances in the mirror again, hesitates, then
	boldly switches on the dome light, holding her breath fearfully
	for his reaction.

	He grunts appreciatively.  Relieved, she looks in the mirror
	again, trying to get a better look at him, but now his features
	are concealed by the map.

				RAILLY
		If you make me go with you, it's
		kidnapping.  That's a serious crime.
		If you let me go, you could just take
		the car and...

				MAN
		I don't know how to drive!  We went
		underground when I was nine, I told you
		that.  When you come to the corner,
		turn right.

	Startled, RAILLY whirls, looks right at him.

	He's lowered the map.  It's COLE!  Haggard, unshaven, dirty.

				RAILLY
		Cole!  James Cole!  You escaped from a
		locked room six years ago.

				COLE
		1989.  Six years for you.  There's the
		sign!  Right here!

	COLE is indicating a freeway entrance.

	RAILLY turns the wheel sharply.

	EXT.  FREEWAY - NIGHT

	The Acura veers up the ramp and onto the freeway.

	INT.  ACURA/FREEWAY - NIGHT

	RAILLY glances in the mirror, sees COLE settling back wearily
	against the seat.  She says carefully...

				RAILLY
		I can't believe this is a coincidence,
		Mr. Cole.  Have you been...following me?

				COLE
		You told me you'd help me.  I know this
		isn't what you meant, but...I was desperate...
		no money...bum leg... sleeping on the streets.
		I probably smell bad.  Sorry about that.
		But then I saw your book in a store window
		with a notice about your lecture.
			(sudden pride)
		I can read, remember?

				RAILLY
		Yes, I remember.
			(a beat, then)
		Why do you want to go to Philadelphia?

				COLE
		It's the next step.  I checked out the
		Baltimore information, it was nothing.
		It's Philadelphia, that's where they
		are, the ones who killed everyone.
			(pointing suddenly, eagerly)
		Zs that a radio?  Does it play music?

	RAILLY turns on the radio and immediately WE HEAR the SOUND of SURF
	and the CRIES of gulls, background to an oozing baritone COMMERCIAL.

				COMMERCIAL/RADIO (o.s.)
		This is a personal message to you.

	COLE sits up, alert, listening intently.

				COMMERCIAL/RADIO (cont. o.s.)
		Are you at the end of your rope?  Are
		you dying to get away?

	COLE'S eyes narrow, concentrating on this personal message.

				COMMERCAIL/RADIO (cont. o.s.}
		The Florida Keys are waiting for you.

	COLE frowns as the SOUND of breaking SURF and crying GULLS fills
	the car.  It's confusing!  He blurts out...

				COLE
		I've never seen the ocean!

	Observing his confusion in the mirror, RAILLY assumes her
	professional tone.

				RAILLY
		It's an advertisement, Mr. Cole.  You
		do understand that, don't you?  It's
		not really a special message to you.

	COLE frowns.  He did think it was for him, but she's probably right.

				COLE
		You used to call me "James".

				RAILLY
		You'd prefer that? ... James...you
		don't really have a gun, do you.

				COLE
			(cynical laugh)
		Everybody's got a gun.  In this city...

	He breaks off reacting to the RADIO MUSIC!  FATS DOMINO singing
	"BLUEBERRY HILL"!  COLE grins, mouth agape, eyes wide like a kid's.

				COLE
		Can you...can you make it louder?  I
		love hearing twentieth century music!
		Hearing music and breathing air!

	As RAILLY cranks up the volume, she watches the mirror
	incredulously, sees him stick his head out the window into the
	wind, mouth open, "eating" the air hungrily.

	EXT.  FREEWAY/ACURA - NIGHT

	"BLUEBERRY HILL" BLARES as the Acura, COLE'S head out the rear
	window, zips past a sign at 65 mph.

	The sign says, "PHILADELPHIA 233 MILES."

	INT.  ACURA/FREEWAY - NIGHT

	RAILLY glances in the mirror at the nut in the rear seat with his
	head out the window.  what can she do?  Just then, while she's
	trying to figure something out, an ANNOUNCER'S VOICE breaks in...

				ANNOUNCER/RADIO (o.s.)
		This just in from Fresno, California:
		emergency crews are converging on a
		cornfield where playmates of nine year
		old Ricky Neuman say they saw him
		disappear right before their eyes.

	COLE pulls his head back inside with a frown, troubled now.

				ANNOUNCER/RADIO (cont. o.s.)
		Young Neuman apparently stepped into an
		abandoned well shaft and is lodged somewhere
		in the narrow 150 foot pipe, possibly alive,
		possibly seriously injured.  Playmates claim
		they heard him cry out faintly but since then
		there has been no contact with...

				COLE
		"Never cry wolf!"

				RAILLY
		What?

				COLE
		My father told me that.  "Never cry
		wolf."  Then people won't believe you
		if...something really happens.

				RAILLY
		"If something really happens"...like
		what, James?

				COLE
		Something bad.  Is that all the music?
		I don't want to hear this stuff...

	RAILLY glances at him as she scans stations.

				RAILLY
		Did something terrible happen to you when
		you were a child?  Something so bad...?

				COLE
		Ohhhh, that one!  Can we hear that one?

	It's IVORY JOE HUNTER singing, "SINCE I MET YOU, BABY".

				IVORY JOE/RADIO (o.s.)
		"Since I met you, baby,
		My whole life has changed...

	Ecstatic, COLE sticks his head out the window again.

	EXT.  ACURA/FREEWAY

	COLE'S POV:  the heavens, glittering with a million stars and a
	lover's moon as IVORY JOE croons the achingly romantic lyrics...

				IVORY JOE/RADIO (cont. o.s.)
		"-- cause since I met you, baby.
		All I need is you..."

	ANGLE ON COLE, wind in his hair, eyes shining, gulping air blissfully.

	INT.  RAILLY'S APARTMENT - MORNING

	Two POLICE OFFICERS and an anxious MARILOU MARTIN listen to an
	answering machine's message while a hungry CAT cries plaintively.

				ANSWERING MACHINE
		Dr. Railly -- this is Palmer from Psych
		Admitting.  There was a guy here this
		afternoon looking for you.  He seemed
		very agitated.  We tried to keep him, but
		he refused 'n I kept thinking, I know
		this guy.  Then, just a few minutes ago,
		it came to me.  It's Cole!  James Cole.
		Remember him?  The paranoid who pulled
		the Houdini back in '89.  Well, he's
		back and he's...cuckoo...and he's looking
		for you.  I thought you oughta know.

	The machine switches off.  The POLICE OFFICERS exchange a look.

				MARILOU MARTIN
		It's just as I told you -- my husband
		and I had gone ahead -- she never
		showed.  That's totally unlike her!

				OFFICER TWO
			(pulls out his notebook)
		Do you happen to know the make of her car?

				MARILOU MARTIN
		Um...Acura...'92 Acura. ... Also, that
		cat's starving!  She would never neglect
		her cat!

	EXT.  MOTEL - MORNING

	The ACURA is parked outside room 46 of the HIGHWAYS & BYWAYS
	MOTEL, which has definitely seen better days.

	INT.  MOTEL ROOM 46

	The TV is on.  A commercial is just starting.  A catfood jingle.

	The sound of HEAVY BREATHING.

	ANGLE ON COLE, sweating, BREATHING HEAVILY, sprawled on one side
	of the double bed, sound asleep.

	INT.  CONCOURSE/AIRPORT - DAY (THE DREAM)

	GUNSHOT!  YOUNG COLE glimpses the BLONDE MAN staggering, wounded.

	The mysterious BRUNETTE races past him toward the BLONDE MAN, and
	YOUNG COLE again glimpses the resemblance to RAILLY, in spite of
	the dark hair, the make-up, the flashy earrings.

	Close at hand, YOUNG COLE'S FATHER, his face still out of view, says,

				FATHER'S VOICE (o.s.)
		Son, it's important for your cat to
		have the nourishment necessary for
		healthy bones and a rich coat.

	INT.  MOTEL ROOM 46

	COLE comes awake with a start.  He stares, disoriented, at the
	CATFOOD COMMERCIAL on the TV.

				RAILLY'S VOICE (o.s.)
		Please untie me.  I'm very uncomfortable.

	COLE turns to RAILLY, beside him on the bed, frightened and
	helpless, her jacket arranged to restrain her like a strait-jacket.

	COLE'S instinct is to free her at once, but he controls his
	impulse.  He looks away, gets up, and, wincing, limps to the
	dresser, stepping around empty fast-food cartons.  He pulls a
	razor and shaving soap from a paper bag, then goes into the
	bathroom, leaving the door open, and starts to shave.

				COLE
		You were in my dream just now.  Your hair
		was different, but I'm sure it was you.

				RAILLY
		We dream about what's important in our lives.
		And I seem to have become pretty important
		in yours.  What was the dream about?

				COLE
		About an airport...before everything
		happened.  It's the same dream I always
		have -- the only one.  I'm a little kid
		in it.

				RAILLY
		And I was in it?  What did I do?

				COLE
		You were very upset.  You're always
		very upset in the dream, but I never
		knew it was you before.

				RAILLY
		It wasn't me before, James.  It's
		become me now because of...what's
		happening.  Please untie me.

	Finished shaving, COLE re-enters the bedroom, toweling his face.

				COLE
		No, I think it was always you.  It's
		very strange.

				RAILLY
		You're flushed.  And you were moaning.
		I think you're running a fever.  What
		are you doing?

	COLE is rummaging through RAILLY'S wallet, pulling out money.

				COLE
		I'll be back in a minute.

	He heads for the door.

				RAILLY
		No!  Don't leave me here like this!

	Too late!  He shuts the door behind him, leaving her alone.

	ANGLE ON THE TV SCREEN, where an ANCHORMAN sits at a News Set.

				TV ANCHORMAN
		And in Fresno, California...crews
		continue to attempt to rescue nine year
		old Ricky Neuman.

	ANGLE ON RAILLY, twisting and struggling on the bed, trying to
	get loose, tears welling in her eyes.

				TV ANCHORMAN (cont. o.s.)
		The boy was playing ball with four
		other children when he literally
		disappeared off the face of the earth.

	EXT.  MOTEL CORRIDOR - MORNING

	COLE puzzles over a junk food vending machine, inserts coins tentatively.

	INT.  MOTEL ROOM

	ANGLE ON TV, the picture of RAILLY filling the screen.


	----------------------- PAGE 52 MISSING -----------------------


				COLE
		My notes.  Observations.  Clues.

				RAILLY
		Clues?  What kind of clues?

				COLE
		A secret army.  The Army of The Twelve
		Monkeys.  I've told you about them.
		They spread the virus.  That's why we
		have to get to Philadelphia.  I have to
		find them -- it's my assignment.

				RAILLY
		What will you do...when you find
		this...secret army?

				COLE
		I just have to locate the virus in its
		original form before it mutates.  So
		scientists can come back and study it
		and find a cure.  So that those of us
		who survived can go back to the surface
		of the earth.

	RAILLY maintains a professional deadpan, says nothing as they pass
	a pickup truck with a MOTHER, FATHER, and five KIDS in the back.

	COLE stares at the KIDS, a sad look in his eyes.

				COLE
		You won't think I'm crazy next month.
		People are going to start dying.  At
		first the papers will say it's some
		weird fever, some virus.  Then they'll
		begin to catch on.  They'll get it.

				RADIO NEWSCASTER (o.s.)
		We interrupt this program with a
		special bulletin...

	RAILLY and COLE both react to the radio, suddenly alert.

				RADIO NEWSCASTER (o.s.)
		This report just in from Fresno,
		California.  Naval sonar specialists
		who were flown to the site...

				COLE
		I thought it was about us.  I thought
		maybe they'd found us and arrested me
		or something.

	RAILLY stares at COLE.

				COLE
		Just a joke.

				RADIO NEWSCASTER (o.s.)
		-- an hour ago have been unable to
		determine the location of the boy in the
		150 foot shaft...but a TV sound man who
		lowered an ultra-sensitive microphone into
		the narrow tube claims he heard breathing
		sounds coming from approximately seventy
		feet down...

	COLE reaches over and changes stations.  MUSIC again.

				RAILLY
		Does that disturb you, James?  Thinking
		about that little boy in the well?

				COLE
		When I was a kid I identified with that
		kid, down there alone in that pipe...a
		hundred feet down -- doesn't know if
		they're going to save him.

				RAILLY
		What do you mean -- when you were a kid?

				COLE
		Nevermind.  It's not real -- it's a
		hoax.  A prank.  He's hiding in a barn.
		Hey, turn left here.  Left!

	COLE quickly checks the map as RAILLY stares, then turns left.

	EXT.  SKID ROW STREET/PHILADELPHIA - DAY

	An elderly EVANGELIST with long stringy hair, wearing a tattered
	bathrobe, stands on a Skid Row corner WAVING a worn Bible as he
	rants at disinterested DERELICTS, WINOS, and BAG LADIES.

				EVANGELIST
		"And the wild beasts of the islands
		shall cry in their desolate houses and
		dragons in their pleasant palaces:  and
		her time is near to come, and her days
		shall not be prolonged."

	ANGLE ON RAILLY'S ACURA, crawling down the street, RAILLY driving,
	COLE, beside her, staring out the window.

	INT.  ACURA/SKID ROW STREET

	COLE is scrutinizing the crumbling walls, boarded-up store
	fronts, tattered posters, decaying signs, miserable "RESIDENTS".

				COLE
		Where I come from we think of this as Eden.
		If we could just see the sun, eat sun-grown
		food.  Eden!  Look at them!  They donut
		know what they have.  They don't see the
		sky.  They don't feel the air!

	COLE'S POV:  a BMW speeds toward them, passes, its radio BLARING!

				COLE (o.s.)
		And the ones who aren't hungry are so smug
		they haven't a clue.  WAIT!  STOP!

	EXT.  ACURA/SKID ROW

	On foot now, COLE pulls an astonished RAILLY to a wall covered with
	graffiti, a hopeless tangle of symbols, words, and crude pictures.

	Clueless, RAILLY stares at the wall, then at COLE.

	COLE touches a bit of red-stenciled graffiti hidden under gang
	insignias.  We can just see TWELVE MONKEYS holding hands in a circle.

				COLE
		The Twelve Monkeys!!!  They're here.
			(looks around)
		Somewhere.  Come on!

	He pulls her along the sidewalk.  No question, he's insane.

	At the next alley entrance, COLE stops abruptly.  Then, still
	keeping a firm grip on RAILLY'S arm, he starts ripping down newly
	tacked-up posters announcing a Rap concert.

	RAILLY stares at him, then turns and is looking all around when,
	suddenly, COLE pulls her up tight and threatens...

				COLE
		Look, I'm warning you.  You do anything,
		I'm going to go crazy -- hurt people!

				RAILLY
		I'm not going to "do" anything, I
		promise.  But you need help, James.
		None of this is what you think it is.

	ANGLE ON COLE, not listening, staring triumphantly!  He's found
	another partially obscured stencil of THE TWELVE MONKEYS!

	But just then, a raspy VOICE startles COLE.

				RASPY VOICE (o.s)
		You can't hide from them, Bob.

	COLE whirls, sees a derelict, LOUIE, leering at him, speaking in a
	voice eerily like the RASPY VOICE from the next cell in the future.

				LOUIE
		No, sir, Old Bob -- don't even try.
			(conspiratorially)
		They hear everything.  They got that
		tracking device on you.  They can find
		you anywhere.  Anytime.  Ha Ha!

	RAILLY looks from LOUIS to COLE, sees COLE'S stunned reaction.

				LOUIE
			(touches his back jaw)
		In the tooth, Bob!  Right?
			(sudden triumphant grin)
		But I fooled 'em, old buddy!

	He opens his mouth wide.  NO TEETH'

	COLE grabs RAILLY and pulls her into the alley and down it.

				COLE
		They're keeping an eye on me.

				RAILLY
		Who's keeping an eye on you?

				COLE
		The man...with the voice.  I recognized
		him.  He's from the present.  He...

	COLE breaks off, freezes as he sees...

	there on a brick wall is a stencil of the DANCING MONKEYS

	And further on, another red stencil!

	EXT.  VACANT LOT - MOMENTS LATER (DAY)

	CRACKHEADS huddle against a building, sucking their pipes,
	oblivious to COLE pulling RAILLY past.

	COLE scans the walls for messages in the confusion of graffiti.

	RAILLY is considering her surroundings dubiously when, suddenly,
	COLE pulls her toward the mouth of a dark and forbidding alley.

				RAILLY
		James, no -- we shouldn't be here!

	COLE ignores her, yanking her after him into the alley.

	INT.  DARK ALLEY - DAY

	Two TOM CATS face off, arching their backs and HISSING menacingly.

	COLE avoids them as he pulls RAILLY into the gloom.

	ANGLE ON RAILLY, seeing something alarming twenty yards ahead!

	RAILLY'S POV:  TWO THUGS, standing over a MAN, kicking him.

	RAILLY tries to stop, but COLE, intent on the wall messages,
	doesn't notice the THUGS.

	The TWO THUGS turn and spot COLE and RAILLY moving toward them.

	These creeps have mean eyes, predator faces.

	RAILLY digs her heels in, forcing COLE to stop.

				RAILLY
		James!  We have to go back.  Those men...

	Too late.  While COLE turns and stares at her, uncomprehending,
	the TWO THUGS are approaching.

				FIRST THUG
		Hey, buddy.

	Startled, COLE turns to face them.

	The SECOND THUG lunges for RAILLY'S purse, yanks it from her.

	COLE reaches to grab it back, but...WHACK!  The FIRST THUG smacks
	COLE hard across the face with something metallic.

	Bloody-faced, dazed, COLE doesn't even have a chance to clear his
	head as the FIRST THUG shoves the hard object against COLE'S
	cheek.  It's a cheap thirty-eight pistol.

	RAILLY turns to run, gets two steps before the SECOND THUG knocks
	her roughly to the ground.

				SECOND THUG
		Stick around, bitch.

	Looming over her, the SECOND THUG starts to unzip his fly.
	RAILLY looks over to COLE, SEES...

	COLE dropping to his knees, groveling at the FIRST THUG'S feet.

				COLE
		Please!  Please don't hurt me!

	The FIRST THUG steps close, kicks COLE contemptuously, cocks his
	foot for a second kick when...

	COLE uncoils, lunging, rising, his strong arms around the bigger
	man's calves, lifting him mightily, high off the ground.

	The gun FIRES wildly as COLE staggers forward with the FIRST THUG
	in his arms and smashes the man into the brick wail behind him.
	The FIRST THUG goes down in a heap, dropping the pistol.

	Zipping his fly hastily, the SECOND THUG turns to deal with COLE
	but COLE attacks him....rocking him again and again with savage
	blows that come one after another with lightning speed.  The SECOND
	THUG staggers back, bloody and dazed as RAILLY watches, amazed.

	Turning back to the FIRST THUG, COLE sees the MAN reaching for
	the dropped pistol.

	COLE kicks him viciously in the jaw.  The FIRST THUG'S head whips
	back.  SNAP!  He collapses against the brick wall.

	COLE turns back to see the SECOND THUG retreating down the alley
	as fast as he can stagger.

	RAILLY stares up at COLE.  He looks very dangerous.  He glances
	in her direction as he pockets the pistol.

				COLE
		Are you hurt?

				RAILLY
		Uh, no.  Yes.  I mean, just some scrapes...

	As RAILLY gets to her feet, she sees COLE bend over the
	motionless THUG and quickly go through his pockets.

				RAILLY
		Is he...alive?

	COLE ignores the question as he pockets the man's wallet and a
	handful of bullets, then turns and snaps at RAILLY.

				COLE
		Come an.  We're running out of time.
		You can't help him.

	As COLE yanks her roughly away, she looks back, sees the FIRST
	THUG'S sightless eyes, wide open...staring blankly.

				RAILLY
		Oh, Jesus, James!  You killed him!

				COLE
		I did him a favor.  Now come on.

	COLE, pulling her again, sees more "12 MONKEYS" on the wall.

				RAILLY
		You didn't have a gun before, did you?

				COLE
		I've got one now.

	EXT.  SECOND AVE - DAY

	The EVANGELIST, spotting COLE and RAILLY hurrying past him,
	points urgently at COLE.

				EVANGELIST
		You!  You!  You're one of us, aren't you?

	But COLE has stopped and is staring at...

	A STOREFRONT OFFICE...its windows covered with posters.  The sign
	over the office says, FREEDOM FOR ANIMALS ASSOCIATION.

	INT.  FAA STORE - MOMENTS LATER (DAY)

	Earnest young activists, FALE, deathly pale, BEN, long haired,
	and TEDDY, muscular, are gathered around a counter collating
	leaflets that demand an END TO SPECIEISM.  Behind them, a large
	poster proclaims, "ANIMALS HAVE SOULS, TOO".  Just then, there's
	a tremendous CLAP OF THUNDER as the ACTIVISTS look up and see
	COLE and RAILLY enter.

	COLE looks startled.  It sounds like torrential RAIN POURING in
	here.  Maintaining a tight grip on RAILLY'S wrist, he looks
	around frantically for an explanation for the tropical downpour.

	Bookshelves line two walls.  The front window is blanked cut with
	posters of Animal Rights demonstrations, newspaper clippings,
	photos of animal atrocities.  The fourth wall features the
	counter where the three ACTIVISTS face COLE as a JUNGLE BIRD
	SCREAMS in the DOWNPOUR.

				FALE
		Uh, can we help you?

	COLE looks confused as the RAIN abates and an ELEPHANT trumpets
	an urgent warning.

				FALE
		Excuse me.  You looking for something
		in particular?

				RAILLY
		It's all right, James -- it's just a tape.

	COLE'S eyes follow her look.  It's a tape recorder underneath a
	sign advertising, "THE TRUE MUSIC OF THE WORLD".

				COLE
		I, uh, I'm looking for the, ah, the
		Army of the Twelve Monkeys.

	FALE glances at BEN and TEDDY.  "We have a problem!" the look says.
	MONKEYS start CHATTERING on the tape as TEDDY comes around the
	counter, bigger than COLE, physically imposing, menacing.

				TEDDY
		We don't know anything about any "Army
		of the Twelve Monkeys", so why don't
		you and your friend disappear, okay?

	COLE backs away, a firm grip on RAILLY, as a LION ROARS.

				COLE
		I just need some information...

				TEDDY
		Didn't you hear me?  We're not...

	TEDDY breaks off mid-sentence...freezes.

	COLE is pointing a pistol at them.  A TIGER SNARLS.

				RAILLY
		James, no -- don't hurt them.
			(to the activists)
		Please, I'm a psychiatrist -- just do
		whatever he tells you to do.  He's...
		upset -- disturbed.  Please -- he's
		dangerous -- just cooperate.

	MONKEYS CHATTER wildly as TEDDY backs up.

				FALE
		What do you want -- money?  We only
		have a few bucks.

	COLE is suddenly very much in charge and self-confident again.  A
	BABOON HOWLS with laughter.

				COLE
		I told you what I want.
			(snaps at Railly)
		Lock the door!

				RAILLY
		James, why don't we...?

				COLE
		Lock it now!

	RAILLY hurries to the door to lock it as BEN says to FALE,

				BEN
		I told you that fuckhead Mason would
		get us into something like this.

				FALE
		Shut up!

				COLE
		Mason???

				RAILLY
		Jeffrey Mason?

				BEN
		Yeah, tucking, crazy Jeffrey Mason.

	INT.  FAA STORE BASEMENT - TWENTY MINUTES LATER (DAY)

	The three ACTIVISTS are tied tightly together in the middle of
	the floor in this dimly-lit, windowless basement.  They're very
	frightened, eager to cooperate.

				FALE
		Then, Jeffrey becomes like this...big
		star -- the media latch on to him
		because he's picketing his own father,
		a "famous Nobel Prize winning virologist".
		You musta seen all that on TV.

				COLE
		No, I don't watch TV.

	COLE, the gun next to him, rummages through boxes of papers while
	RAILLY watches helplessly.  Suddenly, COLE finds something he
	thinks he's seen before.  He holds it up.

				COLE
		Is this him -- Dr. Mason?

	It's a photograph of DR. MALCOLM MASON, being escorted by a
	phalanx of riot cops through a mob of raging activists.

				FALE
		That's him.

				BEN
			(very frightened)
		What are you going to do with us?

				COLE
			(stares at the photo, then)
		Tell me more about Jeffrey.

				FALE
			(a helpless shrug to his cohorts)
		Jeffrey started getting bored with the
		shit we do...picketing, leafleting,
		letter-writing stuff.  He said we were,
		"ineffectual liberal jerkoffs".  He
		wanted to do guerrilla "actions" to
		"educate" the public.

	COLE holds up a clipping showing horrified SENATORS standing on
	their desks as RATTLESNAKES slither along the Senate Floor.

				FALE
		Yeah, that's when he let a hundred
		snakes loose in the Senate.

				TEDDY
		But we weren't into that kind of stuff.
		It's counter productive, we told him.

				FALE
		So he and eleven others split off and
		became this underground..."army"

				COLE
		The Army of The Twelve Monkeys.

				BEN
		They started planning a "Human Hunt".

				TEDDY
		They bought stun guns and nets and bear
		traps.  They were gonna go to Wall
		Street and trap lawyers and bankers...

				BEN
		But they didn't do it.  They didn't do
		any of it.

				TEDDY
		Yeah, just like always, Mr. Big Shot
		sold his friends out!

				COLE
		What's that mean?

				FALE
		He goes on TV, gives a news conference,
		tells the whole world he just realized
		his daddy's experiments are vital for
		humanity and that the use of animals is
		absolutely necessary and that he, Jeffrey
		Mason, from now on, is going to personally
		supervise the labs to make sure all the
		little animals aren't going to suffer.

				COLE
			(holding up a rolodex)
		What's this?

	EXT.  FREEWAY - AFTERNOON

	In the crawling traffic, WE FIND a battered FORD covered with
	bumper stickers and painted slogans.  "I BRAKE FOR ANIMALS"...
	"FREE THE ANIMALS"..."WOULD YOU LET A MINK WEAR YOUR SKIN?"

				RAILLY (v.o.)
		You can't just barge in on a famous
		scientist.  They'll have security guards,
		gates, alarm systems.  It's insane, James.

	INT.  MOVING FORD/FREEWAY

	A ROLODEX CARD with an address on "Outerbridge Road" for "Jeffrey
	Mason c/o Dr. Malcolm Mason" rests on a map spread across COLE'S
	lap.  COLE is in the passenger seat, RAILLY'S at the wheel,
	maneuvering in heavy traffic.

				RAILLY
		If those young men don't get loose,
		they could die in that basement.

	COLE glances out the window, indicates the PEOPLE in passing
	cars...COMMUTERS, FAMILIES, TRUCKERS.

				COLE
		All I see are dead people.  Everywhere.
		What's three more?

				RAILLY
			(a beat, carefully, a new tack)
		You know Dr. Mason's son, Jeffrey
		Mason, don't you, James?  You met him
		in the County Hospital six years ago.

	COLE is studying the map again.

				COLE
		The guy was a total fruitcake.

				RAILLY
		And he told you then his father was a
		famous virologist.

	COLE is absorbed in the map, his finger tracing "Outerbridge Road".

				COLE
		No -- he said his father was "God"!

	EXT./INT.  FORD/COUNTRY HIGHWAY - LATER (DAY)

	The RADIO BLARES a country song as the Ford zips along an open
	highway.  COLE has his head out the window, sucking air, loving
	the music, but his bliss is feverish now -- he's not well.  As
	the SONG ends, he pulls his head inside.  An ANNOUNCER'S VOICE
	intones over the RADIO...

				RADIO ANNOUNCER (o.s.)
		This just in:  police are widening
		their search for Dr. Kathryn Railly,
		prominent psychiatrist and author.
		Authorities confirm that Dr. Railly has
		been abducted by escaped mental patient,
		James Cole. The two are believed to be
		traveling in Railly's 1992 black Acura,
		license plate H-E-A-D-D-R.

	RAILLY glances at him, sees he's in pain.  She feels so badly for
	him.  She wants to help him.  She says, tenderly...

				RAILLY
		This can't go on, James.  You're not
		well.  You're burning with fever.

	COLE, refusing to succumb, instead, leans over to check the gas gauge.

				COLE
		We need gas.

				RAILLY
		I thought you didn't know how to drive.

				COLE
		I said I was too young to drive.  I
		didn't say I was stupid.

				RAILLY
		What's the matter with your leg?

				COLE
		I got shot.  Look -- there's a gas
		station up ahead.

				RAILLY
		Shot!  Who shot you?

				COLE
		It was some kind of...war.  Never mind,
		you wouldn't believe me.  Turn off here.

	INT.  PARKED FORD/GAS STATION - MINUTES LATER (AFTERNOON)

	The GAS STATION ATTENDANT checks the oil while COLE and RAILLY
	remain in the car.  She's pulling a gas card from her wallet.

				COLE
		You were going to run out off gas on
		purpose, weren't you?

				RAILLY
		No.  I want you to turn yourself in, James --
		It'll go much better for you if you do
		-- but I'm not going to trick you.

				COLE
			(sees the credit card)
		That has your name on it.  Give him cash.

	RAILLY puts the card back into her wallet and pulls out cash as
	the GAS STATION ATTENDANT slams the hood down.

	RAILLY starts opening the door.  Alarmed, COLE tries to stop her.

				COLE
		Where are you going?

	She looks him in the eye, then indicates the tiny Convenience
	Store appended to the Gas Station.

				RAILLY
		You can come with me.  I have to get
		some things.  Scissors, bandages, some
		alcohol or whiskey. ... I have to look
		at your leg, James.  I'm a doctor.

	COLE looks helpless, hesitant.  She's in charge...for the moment.

	EXT.  CLEARING/WOODS - AN HOUR LATER (AFTERNOON)

	The sun dazzles through the canopy of leaves.  We HEAR the CAR
	RADIO but not the engine.

				RADIO ANNOUNCER (v.o.)
		Meanwhile in Fresno, where mining
		engineers continue their desperate
		attempt to sink a shaft parallel to the
		ant in which nine year old...

	COLE, in his underwear, leans back on a large rock beside the
	Ford, his pants hanging on the car's open door.  He's staring up
	at the sun and the sky.  RAILLY finishes bandaging his thigh.

				RAILLY
		You shouldn't put your weight on it.
		You need stitches and antibiotics.
		Lucky for you it was near the surface.

	RAILLY wraps the bullet in some gauze and sticks it in her pocket
	while COLE continues staring up at the sky.

				COLE
		I love seeing the sun.

	A beat.  COLE tries to stand up.

				RAILLY
		Wait -- let me help you.

	RAILLY puts an arm around him and helps him to his feet.  A beat.
	They're very close.  They don't move.  RAILLY looks like she can
	barely breathe.

				COLE
			(leans closer, shuts his eyes)
		You smell so good.

				RAILLY
			(trying to concentrate)
		You have to give yourself up, you know.

	A beat.  The spell is broken.  He reaches for his pants, then
	turns back to her, suddenly grim.

				COLE
		I have to do something now.  Something
		I don't want to do.  I'm so sorry.

	RAILLY reacts, sudden fear in her eyes.  He looms over her.  He's
	cold now, steeled.

				COLE
		I have a mission.  It's important.

	RAILLY steps back...horrified, realizing she's going to die.

	EXT.  MASON MANSION - NIGHT

	A SECRET SERVICE AGENT ambles vigilantly among the rows of luxury
	cars parked beside the brightly-lit rural mansion.  Encountering
	another AGENT, he pauses.

				FIRST AGENT
		They find him?

				SECOND AGENT
		Who??

				FIRST AGENT
		That kid.  The one in the pipe.

				SECOND AGENT
		You believe this?  They're dropping a monkey
		down there with a miniature infra-red camera
		strapped on him and a roast beef sandwich
		wrapped in tinfoil.

				FIRST AGENT
		You're making that up!

	ANGLE UNDER A PARKED MERCEDES, where COLE is hiding, listening to
	the receding VOICES of the AGENTS.

				SECOND AGENT (o.s.)
		I shit you not. ... Man, life is weird!
		A monkey and a sandwich.  Wonder who
		thought that one up.

				FIRST AGENT (o.s.)
		Probly give the sonafabitch a Nobel
		Prize!

	Quickly, COLE rolls to the next car and under it.  He doesn't
	see...the pistol fell out of his pocket, under the Mercedes.

	INT.  MASON MANSION/DINING ROOM - NIGHT

	A formal dinner for forty.  Desert has been served.  DR. MALCOLM
	MASON rises to the enthusiastic applause of the GUESTS.

				DR. MASON
		Would that I could enjoy this opulent
		dinner and this excellent and
		stimulating company for itself, with no
		sense of purpose.  But alas, I am
		"burdened" with the sense that with all
		this excess of public attention and
		this cacophony of praise, there comes
		great responsibility.  Indeed, I
		practically feel a soapbox growing
		under my feet whenever I stand for more
		than a few seconds.

	While GUESTS laugh at DR. MASON'S last remark, SECRET SERVICE
	AGENT #3 enters the room, scowling, looking for someone.

				DR. MASON (o.s.)
		The dangers of science are a time worn
		threat, from Prometheus stealing fire
		from the Gods to the Cold War era of
		the Dr. Strangelove Terror.

	AGENT #3 spots who he's looking for.  JEFFREY MASON!

				DR. MASON (cont.)
		But never before, not even at Los Alamos
		when the scientists made bets on whether
		their first atomic bomb test would wipe out
		New Mexico, has science given us so much
		reason to fear the power we have at hand.

	ANGLE ON JEFFREY, as AGENT #3 whispers in his ear.

				JEFFREY
		What are you talking about?  What
		friend?  I'm not expecting anyone.

	ANGLE ON DR. MASON, reacting with irritation to the disturbance.

				DR. MASON
		Current genetic engineering as well as
		my own work with viruses has presented
		us with powers as terrifying as any...

	ANGLE ON JEFFREY, following the AGENT out of the dining room,
	grumbling loudly enough to disturb his father's audience.

				JEFFREY
		This is ridiculous.  My father is
		making a major address.

	INT.  HALLWAY/MASON MANSION

	The conversation continues as JEFFREY and AGENT #3 enter the hall.

				AGENT #3
		Normally if we caught a guy sneaking
		around like this with no I.D., we'd
		bust his ass, excuse the French, but
		this one said he knows you...
			(smirk, smirk)
		-- and, since you seem to have had
		some...uh...unusual...uh..."associates",
		we certainly didn't want to arrest one
		of your, uh, closest...pals.

	INT.  LIBRARY/MASON MANSION

	COLE, smudged with dirt and car grease, sitting in the shadows in
	a wingback chair, looks up as JEFFREY and AGENT #3 enter the
	room.  A FOURTH AGENT looms beside the wingback chair.

				JEFFREY
			(dismissing Cole casually)
		Never saw him before in my life.  Go
		ahead and shoot him or torture him or
		whatever it is you do.

				COLE
			(rising)
		You do know me.  You helped me once.

				JEFFREY
			(turning to leave)
		That would be totally out of character.
		Helping people is against my principles.
			(to the Agents)
		See, he definitely doesn't know me.  Now,
		I'm going to go back and listen to my
		father's very eloquent discourse on the
		perils of science WHILE YOU TORTURE THIS
		INTRUDER TO DEATH.

				COLE
		I'm here about some monkeys.

	Halfway out the door, JEFFREY freezes.  A beat.

				JEFFREY
		Excuse me -- what did you say?

				COLE
		Monkeys.  Twelve of them.

	JEFFREY frowns, turns, considers COLE.  Then, suddenly, JEFFREY
	rushes to COLE and embraces him.

				JEFFREY
		Arnold...Arnold.

	COLE is astonished.  The AGENTS are, too.

				JEFFREY
			(stepping back)
		My God, Arnie, what's happened to you?
		You look like shit

				AGENT #3
			(dubious)
		You know this man?

				JEFFREY
		Of course I know him.  What do you
		think -- I act like this to strangers?
		Listen -- you fellas are terrific.  I
		thought you were pulling a number on
		me.  What a terrible thing if you'd
		thrown old Arnie out.  I owe you guys
		the big apologia!  Mea culpa, fellas.
			(turning to Cole)
		Christ, Arnie, it's black tie!  I mean,
		I said, "drop by," but, like, this is
		Dad's big "do"...vips, senators, secret
		service, and...and everything.

	JEFFREY throws an arm around COLE'S shoulder and starts leading
	him toward the door as the two AGENTS exchange narrow-eyed looks.

				AGENT #4
		"Arnie?"

				JEFFREY
		Arnold Pettibone.  Old Arnie Pettibone.
		Used to be my best friend.  Still is.
		What've you lost, Arnie -- forty pounds?
		No wonder I didn't know you. You hungry?
		Lots of dead cow, dead lamb, dead pig.
		Real killer feast we're putting on tonight.

	The AGENTS watch JEFFREY lead the limping, disheveled COLE out.

				AGENT #4
		These people -- all of 'em -- are true
		weirdoes!

				AGENT #3
			(moving to the phone)
		I'm gonna call in a description of this
		"Pettibone" character.  You go keep an
		eye on him.  Make sure he doesn't do
		one of the guests with a fork.

	INT.  HALLWAY/MASON MANSION

	GUESTS pouring from the dining room into the hall meet JEFFREY
	and a very disconcerted COLE.

				JEFFREY
		Hey, nice ta see ya.  Lookin' good!  Hi,
		there.  Yes, it has been a long time.

	In the b.g., too far away to hear them, AGENT #4 trails JEFFREY and
	COLE as they maneuver through the GUESTS toward the grand staircase.

				JEFFREY
			(whispers to Cole)
		County Hospital, right?  1989.  The
		"Immaculate Escape" -- am I right?
			(smiling to guests)
		Why, thank you -- you look wonderful, too.

				COLE
		Listen to me -- I can't do anything
		about what you're going to do. I can't
		change anything.  I can't stop you.  I
		just want some information...

				JEFFREY
		We need to talk.  Come on.  Upstairs.
			(to a guest)
		I am a new person!  I'm completely
		adjusted.  Witness the tux.  It's Armani.
			(whispers to Cole)
		Who chattered?  Goines?  Weller?

				COLE
		I just need to have access to the pure
		virus, that's all!  For the future!

	JEFFREY studies COLE.  COLE doesn't just talk crazy.  He looks crazy!

				JEFFREY
		Come on, follow me.  You don't lock so good.

	JEFFREY starts guiding COLE up the grand staircase as COLE, glancing
	back, spots AGENT #3 and AGENT #4, both keeping an eye on him now.

				COLE
		I don't have time to go upstairs.  The
		police are looking for me.  I need to
		know where it is and exactly what it is.

				JEFFREY
			(brightening suddenly)
		I get it!  This is your old plan, right?

				COLE
		Plan?  What are you talking about?

				JEFFREY
		Remember?  We were in the dayroom,
		watching TV, and you were all upset
		about the...desecration of the planet.
		And you said to me, "Wouldn't it be
		great if there was a germ or a virus
		that could wipe out mankind and leave
		the plants and animals just as they
		are?"  You do remember that, don't you?

				COLE
		Bulishit!  You're fucking with my head!

				JEFFREY
		And that's when I told you my father was
		this famous virologist and you said, "Hey,
		he could make a germ and we could steal it!"

				COLE
			(grabbing Jeffrey)
		Listen, you dumb fuck!  The thing mutates
		We live underground!  The world belongs
		to the fucking dogs and cats.  We're
		like moles or worms.  All we want to do
		is study the original...

				AGENT #4'S VOICE
		Okay -- take it easy.  We know who you
		are, Mr. Cole.

	COLE feels a firm grip on his shoulder, turns and sees AGERT #4

				AGENT #4
		Let's go somewhere and talk this thing
		over. Okay? Just come with me...

				JEFFREY
		You're right!  Absolutely right.  Me's
		a nut case, totally deranged.  Delusional!
		Paranoid.  HIS PROCESSOR'S ALL FUCKED
		UP, HIS INFORMATION TRAY IS JAMMED.

	AGENT #4 is wishing JEFFREY would chill out even as the THIRD
	AGENT is climbing up the staircase to help.

	COLE is like a trapped animal. He's being led down the staircase
	now with JEFFREY, right on his heels, yelling so EVERYONE can hear.

				JEFFREY
		YOU KNOW WHAT IT IS, THE "ARMY OF THE
		TWELVE MONKEYS"?  IT'S A COLLECTION OF
		NATURE KOOKS WHO RUN A STORE DOWNTOWN.
		SPACE-CASE DO-GOODERS SAVING RAIN
		FORESTS. I HAVE NOTHING TO DO WITH
		THOSE BOZOS ANYMORE. I QUIT BEING THE
		RICH KID FALL GUY FOR A BUNCH OF
		INEFFECTUAL BANANAS. SO MUCH FOR YOUR
		GRAND PLOT!

	COLE stares back at JEFFREY as both AGENTS hustle COLE down the
	stairs.  It sounds true!  JEFFREY'S so confident.

				AGENT #3
		Take it easy, Mr. Mason, we've got him.
		Everything's...

				JEFFREY
		MY FATHER HAS BEEN WARNING PEOPLE ABOUT
		THE DANGERS OF EXPERIMENTATION WITH
		VIRUSES AND DNA FOR YEARS. YOU'VE
		"PROCESSED" THAT INFORMATION THROUGH
		YOUR ADDLED PARANOID INFRA-STRUCTURE AND
		LO AND BEHOLD, I'M FRANKENSTEIN AND THE
		"ARMY OF THE TWELVE MONKEYS" BECOMES
		SOME SORT OF SINISTER REVOLUTIONARY
		CABAL. THIS MAN IS TOTALLY BATSHIT! YOU
		KNOW WHERE HE THINKS HE COMES FROM???

	Suddenly, COLE, catching the AGENTS by surprise, wrenches free,
	shoves them aside, and stumbles down the rest of the staircase.

	INT.  FOYER/MASON MANSION

	COLE heads for the front door, but there's an AGENT there!  COLE
	turns and limps madly toward the dining room, pushing his way
	through the crowd of amazed GUESTS.

	INT.  DINING ROOM/MASON MANSION

	SERVANTS, clearing the table, look up astonished as two AGENTS
	burst into the room.

				AGENT #4
		Did a man just come through here...limping?

	INT.  KITCHEN/MASON MANSION

	COOKS stare, amazed, as two OTHER AGENTS burst into the kitchen
	and look about urgently.

	INT.  DEN/MASON MANSION

	A large projection TV is on and a knot of GUESTS is gathered in
	front of it...watching the spooky VIDEO IMAGES.

				TV REPORTER (v.o.)
		These pictures we are seeing are coming
		to us live from deep inside the pipe.
		You can just make out the metal wall
		behind those roots and I guess those
		must be spider webs.

	MRS. McCANN, a guest, watching the TV, expresses concern...

				MRS. McCANN
		Well, if you ask me, I think that monkey
		is going to eat the sandwich himself.

	Just then, two AGENTS burst into the den.

	The GUESTS turn from the TV, startled, stare open-mouthed, but
	the AGENTS have spotted an open window and are hurrying to it.

	AGENTS POV OUT THE WINDOW:  the rows of expensive parked CARS.

	ON THE TV SCREEN, RAILLY'S photograph appears.

				TV ANCHOR (v.o.)
		This just in:  Police say that the body of
		a woman found strangled in the Knutson state
		Park could be kidnap victim, Dr. Kathryn Railly.

	As the AGENTS run out of the room, a photo of RAILLY'S abandoned
	Acura comes up on the TV screen.

				TV ANCHOR (v.o.)
		Earlier in the day, police located
		Railly's abandoned car not far from a
		building where three animal rights
		activists were found bound and gagged...

	EXT.  MASON MANSION - MINUTES LATER (NIGHT)

	Pistols drawn, AGENTS move cautiously among the rows of parked
	luxury cars, checking inside and under the vehicles.

				AN AGENT'S VOICE (o.s.)
		COME ON OUT, MR COLE -- WE'RE NOT GOING
		TO HURT YOU.

	INT.  PARKED GREEN JAGUAR

	COLE, scrunched down on the floor next to the driver's seat,
	spots the key dangling from the ignition, then lifts his head
	slightly to study the shift mechanism, trying to figure it out.

	EXT.  PARKED CARS/MASON MANSION

	AGENTS continue to move cautiously among the parked cars.

	INT.  PARKED GREEN JAGUAR

	COLE eases himself into the driver's seat, tentatively slides the
	shift into "Drive", then turns the key.  Nothing happens.

	Panic.  COLE studies the shift again.

	EXT.  PARKED CARS/MANSION

	AGENT #5 approaches the row where the Jaguar is parked.

	INT.  PARKED GREEN JAGUAR

	COLE slides the shift from D (Drive) to N (Neutral).  He twists
	the key again.  The engine ROARS...SEVEN THOUSAND RPM!

	EXT.  LAWN/MANSION

	AGENT #5 whirls at the sound.

	SMASH.  The JAGUAR clips the Mercedes parked in front of it and
	accelerates right at him!

	AGENT #5 dives aside just as the speeding JAGUAR whizzes past
	him, slams into a parked Cadillac, bounces off, grinds between
	two other parked vehicles with a fierce scream of tearing metal.

	INT.  MOVING JAGUAR

	Caught between two cars, COLE can only lean on the gas pedal.

	The JAGUAR comes free with a great SCCCREEEEECH...

	COLE sees the driveway ahead in the moonlight.  Steering madly,
	he plows through shrubs and gardens heading for the driveway.

	EXT.  MASON MANSION - NIGHT

	Lights off, veering wildly, the JAGUAR reaches the driveway.

	AGENTS are leaping into cars and a HELICOPTER is coming to life,
	its rotors whipping around.

	INT.  SPEEDING JAGUAR/OUTERHRIDGE ?OAD - NIGHT

	COLE turns onto the road, careening crazily from one side to the
	other, unable to see ahead with no headlights.

				COLE
		LIGHTS!  LIGHTS!

	He starts hitting switches.  The wipers come on, the RADIO BLARES.

				RADIO REPORTER'S VOICE/RADIO (o.s.)
		---when they pulled the monkey out, it
		was still clutching the tinfoil wrapped
		sandwich.

	Rounding a bend, an ONCOMING CAR heads straight at COLE.

	COLE yanks the wheel as the OTHER CAR, horn BLARING, just misses him.

	Recovering, COLE loses the road, speeds crazily along the shoulder.

	INT.  FLYING HELICOPTER - NIGHT

	The PILOT, an agent, steers the chopper while the CO-PILOT pans a
	spotlight over the two lane road beneath them.

	Just then, the PILOT sees headlights below.

				PILOT
		There!  He's showing lights.

	INT.  SPEEDING JAGUAR - NIGHT

	COLE can see the road now in his headlights as the windshield
	wipers scrape frantically and the RADIO BLARES...

				RADIO REPORTER'S VOICE/RADIO (o.s.)
		We don't know what to think.  They
		didn't locate him and they don't know
		how much longer he can last, that's
		assuming the boy is still alive.

	A spotlight hits the car and COLE hears the sound of the
	HELICOPTER as it lowers over him!

	EXT.  OUTERBRIDGE ROAD

	The HELICOPTER maneuvers over the speeding JAGUAR.

	INT.  SPEEDING JAGUAR

	COLE can see the underbelly of the HELICOPTER a few feet above
	his front windshield.

	Desperate, he yanks the wheel hard, veering off the road.

	COLE'S POV THROUGH THE WINDSHIELD:  dense woods ahead.

	EXT.  HELICOPTER/WOODS

	The chopper pulls up sharply, avoiding the trees, then levels out.

	INT.  HELICOPTER

	The PILOT skims the top of the trees while the CO-PILOT rakes the
	forest below with his spotlight.

				PILOT
		Goddamnit!  Where is he?

	The CO-PILOT gets a brief glimpse of headlights through the leaves.

				CO-PILOT
		There!  Over there.

				PILOT
		Where?
				CO-PILOT
		Eight o'clock!  He was right there.

	The headlights are gone.  Nothing but darkness below.

				PILOT
		He musta turned his lights of if.

				CO-PILOT
		Couldn't drive down there without
		lights.  We just can't see 'em.

				PILOT
		Maybe he's not driving!

	EXT.  WOODS - LATER (NIGHT)

	A weather forecast BLARES from the radio of the steaming Jaguar,
	crumpled into a tree, the driver's door open.

	A POLICE OFFICER, pistol drawn, approaches the car cautiously, as
	OTHER OFFICERS and AGENTS stay behind trees, weapons ready.

	The POLICE OFFICER lunges forward, pointing his weapon into the
	Jaguar.  He inspects the car, then turns and calls out...
 
				POLICE OFFICER
		He's not in here.

	EXT.  WOODS/CLEARING - NIGHT

	Limping, bleeding from various cuts, COLE CRASHES through
	underbrush as he follows a stream through the woods.

	Suddenly, he sees what he's looking for.

	The FORD...barely visible in the moonlight, parked in the trees
	beside the stream.  The car looks empty.

	INT.  TRUNK/FORD

	Total blackness!  The sound of keys in the lock.

	Then, the trunk swings open and COLE stands in the moonlight,
	looking down

	RAILLY is in the trunk, tears of rage and frustration in her eyes.

				RAILLY
		You bastard!  You total bastard!

	EXT.  FORD

	COLE backs away, as RAILLY scrambles out of the trunk, swinging.

	He slips, falls, and she starts kicking him as she rants hysterically.

				RAILLY
		I could have died in there.  If something
		had happened to you I would have died.

	COLE is lying on the ground, looking up, his lip caked with blood.

				COLE
		I...I...I'm really sorry.

	Noticing his cuts and torn clothes, she stops kicking him.

				RAILLY
		What have you done?  Did you...kill someone?

				COLE
			(getting to his feet)
		No!  I...don't think so.  I stole a car
		and they chased me.  I hit a tree.

				RAILLY
		See -- you can drive after all!

				COLE
		Yeah, sort of, I guess.  I...I'm sorry
		I locked you up.  I thought...I thought...
		I think maybe I am crazy!

	She looks at him.  Breakthrough?  Very calm now, the doctor.

				RAILLY
		What made you think that?

				COLE
		Jeffrey Mason said it was my idea about
		the virus.  And suddenly, I wasn't
		sure.  We talked when I was in the
		institution, and it was all...fuzzy.
		The drugs and stuff.
			(horrified)
		You think maybe I'm the one who wiped
		out the human race?  It was my idea?

				RAILLY
		Nobody is going to wipe out the human
		race.  Not you or Jeffrey or anybody
		else.  You've created something in your
		mind, James -- a substitute reality.
		In order to avoid something you don't
		want to face.

				COLE
		I'm..."mentally divergent".  I would
		love to believe that.

				RAILLY
		It can be dealt with, but only if you
		want to.  I can help you.

	COLE reacts to the sound of VOICES in the woods, dogs BARKING.

				COLE
		I need help all right.  They're coming
		after me.

				RAILLY
		First, it's important that you
		surrender to them instead of them
		catching you running.  Okay?

				COLE
			(brightening)
		It would be great if I'm crazy.  If I'm
		wrong about everything...the world will be
		okay.  I'll never have to live underground.

				RAILLY
		Give me the gun.

				COLE
		The gun! ... I lost it

				RAILLY
		You're sure?

				COLE
			(showing her)
		No gun!
			(looking up)
		Stars!  Air!  I can live here.  Breathe!

	RAILLY starts around to the front of the car.

				RAILLY
		I'm going to attract their attention,
		let them know where we are, okay?

	RAILLY gets in the driver's seat...and starts to HONK the horn.

				RAILLY
			(calling out)
		They'll tell you to put your hands on top
		of your head.  Do what they tell you.  You're
		going to get better, James -- I know it!

	ANGLE ON COLE, spotting something on the ground.  An insect!  He
	reaches down to grab it, but, instead, grins, grabs some grass,
	stands, and starts rubbing it happily all over his face.  The
	HORN BLARES as COLE looks up at the sky.

	ANGLE ON THE NIGHT SKY, the moon full, the sky rich with stars.

	ANGLE ON COLE, tears of joy running down his face.

				COLE
		I love this world!

	ANGLE ON RAILLY, in the driver's seat, hearing near-by SHOUTS
	from the woods.  The police are almost here.  She gets out of the
	car, starts around toward COLE.

				RAILLY
		Remember, I'm going to help you.  I'll
		stay with you.  I won't let them...

	She breaks off mid-sentence...stares, stunned!

	COLE is gone.  Disappeared.

	INT.  POLICE STATION OFFICE - MORNING

	RAILLY is being "debriefed" by POLICE OFFICERS and FBI AGENTS.

				RAILLY
		Then I said something to him about
		cooperating and he said he would do
		that, so I got in the car and started
		honking the horn.  When I got out, he
		was gone.

				LIEUTENANT HALPERIN
		You lucked out.  For a while we thought
		you were a body they found down state...
		mutilated.

	A COP enters, hands a photo to LIEUTENANT HALPERIN who studies it.

				RAILLY
		He wouldn't do something like that -- he...

				LIEUTENANT RALPERIN
			(interrupts, hands her the photo)
		This the man he attacked?

	RAILLY looks at the photo, an 8 x 10 of the FIRST THUG, slumped
	against the alley wall, obviously dead.

				RAILLY
		I'd like to be clear about this.  That
		man and the other one were..."severely"
		beating us.  James Cole didn't start
		it.  In fact -- he saved me!

				LIEUTENANT RALPERIN
		Funny thing, Doctor, maybe you can
		explain it to me, you being a psychiatrist
		-- why do kidnap victims almost always
		try to tell us about the guys who grabbed
		'em and try to make us understand how
		kind these bastards really were?

				RAILLY
			(as if reciting)
		It's a normal reaction to a life-
		threatening situation.
			(suddenly animated)
		He's sick.  He thinks he comes from the
		future.  He's been living in a carefully
		constructed fantasy world and that world
		is starting to disintegrate.  He needs
		help!

	INT.  AIRPORT CONCOURSE/THE DREAM

	YOUNG COLE stares, eyes wide.

	He sees the BRUNETTE, cradling the head of the BLONDE MAN as he
	sprawls on the concourse...

				ASTROPHYSICIST'S VOICE (O.S.)
		Wake up! Wake up!

				GEOLOGIST'S VOICE (O.S.)
		I think we gave him too much.

				MICROBIOLOGIST'S VOICE (O.S.)
		WAKE UP, PRISONER!

	INT.  SCIENTISTS' CHAMBER - ETERNAL NIGHT

	COLE blinks awake. All he can see are blurry faces hovering over
	him, hammering him with questions.

				ASTROPHYSICIST
		Come on, Cole, cooperate!

				GEOLOGIST
		Spit it out... you went to the home of
		a famous virologist...

				COLE
			(weakly)
		You...don't...exist!  You're in
		my mind...

				SCIENTISTS (IN RAPID SUCCESSION)
		What?  What's that?  What did he say?  His
		brain's fried.  Give him another shot!
		SPEAK UP, COLE.  WHAT DID YOU DO NEXT?

	INT.  RAILLY'S APARTMENT - EVENING

	The TV shows film of RAILLY leaving the police station.

				TV REPORTER (v.o.)
		The kidnap victim seemed exhausted but
		apparently unharmed by her 30 hour ordeal
		as she left the police station in
		Philadelphia this morning.  So far she
		has refused to make a public statement.

	RAILLY'S friends, MARILOU and WAYNE, are watching the TV.

	A door opens and KATHRYN RAILLY, wearing a robe, comes out of her
	bedroom.  She still looks exhausted   Followed by her cat, she
	enters the kitchen area and turns on the kettle as WAYNE hastily
	turns down the TV.

				WAYNE
		Sorry.

				RAILLY
		No -- I'm in a state of hyper-
		alertness.  I can't sleep.

				MARILOU
		Did you take the sedative?

				RAILLY
		I hate those things.  They mess my head
		up.

	The old mug shot of COLE appears on the screen and RAILLY remotes
	the volume up.

				TV REPORTER (v.o.)
		Along with the kidnapping of the Baltimore
		woman, James Cole is now also wanted in
		connection with the brutal slaying of
		Rodney Wiggins, an ex-convict from...

	RAILLY goes to the window, pushes aside the drape, and sees...

	HER POV:  ACROSS THE STREET...A COP keeps watch.

				RAILLY (o.s.)
		Do they really expect him to come here?

	RAILLY returns to the kitchen area where MARILOU is getting the
	tea things out.

				TV REPORTER on air
		And in Fresno, California...

				RAILLY
			(glances sadly toward the TV)
		He's dead, isn't he -- that little boy?

				WAYNE
		He's fine.  It was just a "prank" he
		and his friends pulled.

	CLOSE ON RAILLY'S FACE... SHOCKED.

	ANGLE ON THE TV SCREEN, showing footage of a sheepish nine year
	old boy being led out of a barn by the police.  The cops look grim.

				TV REPORTER (v.o.)
		Authorities have so far been noncommittal
		about whether they will try to file
		charges against the families of the
		children involved in the hoax.

	RAILLY stares at the TV, stunned.

	INT.  "HOSPITAL" ROOM - ETERNAL NIGHT

	VOICES!  SINGING!  COLE blinks awake, looks around, confused, then
	stares in disbelief....

	Crowded around COLE'S bed, the SCIENTISTS are concluding a
	ragged, out of tune, rendition of "BLUEBERRY HILL."

				SCIENTISTS
		---found my thrills on Blueberry Hill...

	Seeing he's awake, SCIENTISTS break off the song and applaud.

				SCIENTISTS
		Well done, James!  Well done!  Nice
		going!  Congratulations!  Good for you!

				BOTANIST
		During your "interview," while you
		were..."under the influence," you told
		us you liked music!

	COLE, confused, looks around, sees he's in a one-bed windowless
	room adorned with cheap reproductions of 19th and 20th century
	landscapes.

	The BOTANIST responds to COLE'S obvious disbelief with a
	friendly smile and the others join in rapid fire, overlapping.

				ZOOLOGIST
		This isn't the prison, James.

				BOTANIST
		This is a hospital.

				ASTROPHYSICIST
		But just until you recover your,
		uh,... equilibrium.

				ENGINEER
		You're still a little... disoriented.

				GEOLOGIST
		Stress!  Time travel!

				ASTROPHYSICIST
		You stood up very well, considering...

				GEOLOGIST
		Superior work!  Superior!

				BOTANIST
		You connected the Army of the 12
		Monkeys to a world famous virologist
		and his son...

				MICROBIOLOGIST
		Others will take over now...

				ZOOLOGIST
		We'll be back on the surface in a
		matter of months....

				GEOLOGIST
		We'll retake the planet.

				ASTROPHYSICIST
		We're very close!  Because of you!

				ENGINEER
			(unrolling a document)
		This is it, James...what you've been
		working for.

				BOTANIST
		A full pardon!

				MICROBIOLOGIST
		You'll be out of here in no time.

				ASTROPHYSICIST
		Women will want to get to know you...

				COLE
		I DON'T WANT YOUR "WOMEN," YOU
		BRAINLESS TWIT! I WANT TO BE WELL!

	Unseen until now, two guards, TINY and SCARFACE, suddenly break
	through the ring of SCIENTISTS, push COLE down, and tighten the
	loose restraints, already in place, but unnoticed before.

				ASTROPHYSICIST
			(sympathetically)
		Of course you want to be well, James.
		And you will be...soon.

	COLE bursts into hysterical laughter.

				COLE
		YOU DON'T EXIST, YOU SILLY BOZOS!
		YOU'RE NOT REAL! HA HA HA! PEOPLE DON'T
		TRAVEL IN TIME! YOU AREN'T HERE.
		MADE YOU UP!  YOU CAN'T TRICK ME!
		YOU'RE IN MY MIND! I'M INSANE AND
		YOU'RE MY INSANITY!

	INT.  PSYCHIATRIST'S OFFICE - DAY

	CLOSE ON KATHRYN RAILLY, insisting fiercely to someone,

				RAILLY
		He not only used the word "prank" -- he
		said the boy was hiding in a barn.

	RAILLY's talking to her former boss, DR. OWEN FLETCHER, psychiatrist
	sitting across from her in his office, tapping his pen.

				DR. FLETCHER
		He kidnapped you, Kathryn.  You saw him
		murder someone.  You knew there was a real
		possibility he would kill you, too.  You
		were under tremendous emotional stress.

				RAILLY
		For God sakes, Owen, listen to me -- he
		knew about the boy in Fresno and he says
		three billion people are going to die!

				DR. FLETCHER
		Kathryn, you know he can't possibly
		know that.  You're a rational person.
		You're a trained psychiatrist.  You
		know the difference between what's real
		and what's not.

				RAILLY
		And what we believe is what's accepted as
		"truth" now, isn't it, Owen?  Psychiatry --
		it's the latest religion.  And we're the
		priests -- we decide what's right and what's
		wrong --we decide who's crazy and who isn't. ...
		I'm in trouble, Owen.  I'm losing my faith.

	INT. "HOSPITAL" CELL - ETERNAL NIGHT

	Alone in his "hospital" room, COLE struggles without success to
	free himself from his restraints.

				RASPY VOICE (o.s.)
		You sure fucked up, Bob!

	Startled, COLE freezes, then ignores the RASPY VOICE and
	continues his feverish struggle.

				RASPY VOICE (o.s.)
		But I can understand you don't want
		your mistakes pointed out to you. I can
		relate to that, old Bob.

	COLE looks around in spite of himself.  Nothing to see but the
	walls and the landscape paintings.

				RASPY VOICE (o.s.)
		Hey, I know what you're thinking.  You're
		thinking I don't exist except in your
		head.  I can see that point of view.  But
		you could still talk to me, couldn't you?
		Carry on a decent conversation?

				COLE
			(blurting)
		I saw you! In 1995!  In the real world!
		You were a bum!  You pulled out your teeth.

				RASPY VOICE (o.s.)
		Why would I pull out my teeth, Bob?
		They don't like that.  That's a no-no.
		And when did you say you saw me?
		In...1872?

				COLE
		FUCK YOU!

				RASPY VOICE (o.s.)
		Yelling won't get you what you want.  You
		have to be smart to get what you want.

				COLE
		Oh, yeah?  What do I want?

				RASPY VOICE (o.s.)
		You don't know what you want?  Sure you
		do, Bob.  You know what you want.

	COLE, agitated, rocks back and forth.  Then...

				COLE
		Tell me.  Tell me what I want.

				RASPY VOICE (o.s.)
		To see the sky -- and the ocean -- to
		be topside -- breathe the air -- to be
		with her. ... Isn't that right?  Isn't
		that what you want?

	Completely shaken, COLE hesitates for a long moment.  When he
	speaks, it comes out of him like air...a whisper.

				COLE
		More...than...anything.

	INT.  RAILLY'S BEDROOM - MORNING

	RAILLY'S in bed, asleep, having a very bad dream.  Suddenly, the
	bedside phone RINGS.  Her eyes snap open.  A beat to orient
	herself.  RING.  She reaches for the phone.

	INTERCUT LIEUTENANT HALPERIN'S OFFICE/RAILLY'S BEDROOM

	CLOSE ON HALPERIN, at his desk, talking into the phone.

				LIEUTENANT HALPERIN
		Dr. Railly?  Jim Halperin, Philly P.D..
		Sorry to call so early but...

	CLOSE ON RAILLY, eager, concerned. into the phone,

				RAILLY
		You found him?  Is he all right?

	CLOSE ON HALPEPIN, noting her reaction with raised eyebrows
	giving an "I told you so" look to the BLACK PLAINCLOTHES cop
	across his desk, then continuing into the phone,

				LIEUTENANT HALPERIN
		Au contraire, Doctor.  No sign of your
		good friend, the kidnapper.  However,
		the plot thickens.  I have a ballistic
		report on my desk that says the bullet
		you claim you removed from Mr. Cole's
		thigh is an antique...and all indications
		are it was fired...sometime prior to 1920.

	ANGLE ON RAILLY, reacting, stunned.

	ANGLE ON HALPERIN, continuing soberly now,

				LIEUTENANT RALPERIN
		So what I was thinking was, maybe if I
		sent a detective down there to talk
		with you, you could maybe revise or
		amplify on the circumstances....
		Hello?  Hello?  Dr. Railly?

	HALPERIN considers the dead phone, glances at the COP again.

	INT.  RAILLY'S BEDROOM/STUDY

	Her hand still on the receiver, RAILLY looks shocked.  Then, she
	hurries into her study and starts frantically pulling neatly
	arranged piles of papers and books from a bookcase until she
	finds a copy of her book.  She leafs through it hurriedly,
	locates the picture of the Puerto Rican KID (JOSE) in WWI.

	Peering closely, she tries to see everything in the picture.
	Then, she turns and reaches for a research folder of old
	photographs and rummages through it until she finds...!!!

				RAILLY
		No!

	It's an uncropped shot of JOSE being carried on the stretcher in
	the trenches.  And there in the corner with no helmet, no gas
	mask, and just a bit of bare shoulder showing...it's COLE!!!

	INT.  SCIENTISTS' CHAMBER - ETERNAL NIGHT

	Clean shaven, clear eyed, COLE sits before the frowning SCIENTISTS.

				ASTROPHYSICIST
		The food, the sky, the certain, uh,
		sexual temptations -- you haven't
		become "addicted" have you, Cole?  To
		that "dying" world'

				COLE
		No, sir!  I just want to do my part.
		To get us back on top...in charge of
		the planet.  And I have the experience,
		I know who the people are...

				BIOLOGIST
		He really is the most qualified...

				GEOLOGIST
		But all that..."behavior"...

				ASTROPHYSICIST
			(to Cole, a little hurt)
		You said we weren't "real," Cole...

				COLE
		Well, sir, I don't think the human mind
		was built to exist in two different...
		whatever you call it..."dimensions."
		It's stressful, you said it yourselves,
		it gets you confused.  You don't know
		what's real and what's not.

				MICROBIOLOGIST
		But you know what's real now?

				COLE
		Yes, sir.

	The SCIENTISTS start to confer openly among themselves

				GEOLOGIST
		He'd have to bone up, catch up to our
		research, the latest clues...

				ZOOLOGIST
		He's proved to be a quick study...

	The ASTROPHYSICIST fixes COLE with a sharp, penetrating look.

				ASTROPHYSICIST
		You can't trick us, you know.  It
		wouldn't work.

				BIOLOGIST
		And why would you want to?  It'll be
		dangerously close to the end.

				COLE
		I understand.  There'd be no point.

				ASTROPHYSICIST
		We're going to think about it, Cole.
		Among ourselves.  We'll get back to you.

	INT.  DR. MASON'S OFFICE - DAY

	Standing in front of a wall of glass in his office, overlooking a
	hi-tech lab below where WORKERS in white "space suits" work
	methodically, DR. MASON speaks angrily into a phone.  His male
	ASSISTANT, whose features we don't see, stops writing a formula
	on a blackboard and listens.

				DR. MASON
		You have reason to believe that my son
		may be planning to do what?!!!

	INT.  RAILLY'S APARTMENT/STUDY

	RAILLY, trying to stay calm, is talking to Dr. Mason on the phone.

				RAILLY
		Please, I know it sounds insane but...

	INT.  DR. MASON'S OFFICE

	Dr. Mason on the phone.

				DR. MASON
			(into the phone)
		I'm afraid this doesn't seem very
		professional to me, in fact it's
		distressingly unprofessional for some-
		one who treated my son briefly (if
		indeed you actually are who you say you
		are) to take a sudden unsolicited interest
		in his mental health six years later,
		and to telephone a parent to express
		opinions that would be inappropriate...
			(breaks off, listens, then)
		I don't know anything about "Monkey
		armies", Doctor.  Nothing whatsoever.
		If my son ever was involved in...
			(listens, then,)
		It would be doubly inappropriate to
		discuss matters of security with you,
		Dr. Railly, but if it will put you at
		ease, neither my son nor any other
		unauthorized person has access to any
		potentially dangerous organisms in this
		laboratory.  Thank you for your concern.

	DR. MASON hangs up angrily and glares.

				DR. MASON'S ASSISTANT (o.s.)
		Dr. "Kathryn" Railly????

				DR. MASON
		The psychiatrist who was kidnapped by
		that man who broke into my house.  She
		seems to have been suddenly struck by
		the most preposterous notion about Jeffrey.

				DR. MASON'S ASSISTANT (o.s.)
		I attended a lecture once...Apocalyptic
		visions.

	We see Dr. Mason's ASSISTANT now.  It's DR. PETERS, the red-
	haired man who insisted to Dr. Railly you didn't have to be
	insane to think the world was coming to an end.

				DR. PETERS (cont.)
		Has she succumbed to her own
		theoretical..."disease"?

	But DR. MASON is lost in thought, not listening.

				DR. MASON
		Given the nature of our work, we can't ever
		be careful enough.  I think we should review
		our security procedures, perhaps upgrade them.

	INT.  SCIENTISTS' CHAMBER - ETERNAL NIGHT

	COLE is facing the BOTANIST who's using a pointer to indicate
	various fading photos and newspaper clippings tacked on the wall.

				BOTANIST
		Let's consider again our current
		information -- if the symptoms were
		first detected in Philadelphia on June
		28, 1995, that makes us know that...?

				COLE
		It was released in Philadelphia,
		probably on June 14, 1995.

				BOTANIST
		And it appeared sequentially after that
		in...?

	With a quick glance at the panel of SCIENTISTS staring at him
	from behind the long table, COLE replies like a good pupil,

				COLE
		San Francisco, New Orleans, Rio de
		Janeiro, Rome, Kinshasa, Karachi,
		Bangkok, then Peking.

				BOTANIST
		Meaning...???

				COLE
		That the virus was taken from Philadelphia
		to San Francisco, then to New Orleans,
		Rio de Janeiro, Rome, Kinshasa, Karachi,
		Bangkok, then Peking.

				BOTANIST
		And your only goal is...???

				COLE
		To find out where the virus is so a
		qualified scientist can travel back into
		the past and study the original virus.

				BOTANIST
		So that...???

				COLE
		Uh, so that a vaccine can be developed
		that will, uh, allow mankind to reclaim
		the surface of the earth.

	COLE glances nervously at the suspicious SCIENTISTS as the
	BOTANIST switches on a slide projector and projects...

	a magazine photo of wall graffiti:  "ATTENTION!!!  POLICE ARE
	WATCHING!  IS THERE A VIRUS?  IS THIS THE SOURCE?  3 BILLION DIE?"

				BOTANIST (o.s.)
		This is from a magazine printed in late
		September, 1995.  The writer speculated
		that this graffiti might be related to
		the epidemic that by that time had
		already killed thirty million people
		world-wide and was getting worse.  He
		says, certain people, unnamed, were
		questioned, but what came of that is not
		known.  But it is a clue you should pursue.

	COLE stares at the picture.

	EXT.  FAA STOREFRONT - DAY

	LOUD BANGING!  The storefront window, completely covered with
	posters, quivers violently.  Images of MONKEYS covered with
	electrodes, BABY SEALS being viciously clubbed, DOGS jammed into
	tiny cages quiver as somebody beats on the window.  It's RAILLY.

				RAILLY
		IS ANYBODY IN THERE?  HELLO?  IS
		SOMEONE IN THERE?  IF YOU'RE IN THERE,
		I NEED TO TALK TO YOU.

	INT.  FAA STORE

	JEFFREY, BEN, TEDDY, and two of JEFFREY'S youthful cohorts, SANDY
	and KWESKIN, wait motionless beside a heap of cardboard cartons
	as FALE peeks out the front window through a slit between posters.

				FALE
		It's the kidnap woman -- the one who
		was with the guy who tied us up.

				BEN
		What's she doing?

				FALE
		She's drawing attention to us, that's
		what she's doing. ... I don't know what
		you're up to this time, Mason, but
		you're gonna get us in deep shit!

				JEFFREY
		Whine, whine, whine.  What about walkie
		talkies?  We used to have walkie talkies.

	EXT.  FAA STOREFRONT

	From littered doorways, DERELICTS sneak peeks at RAILLY as she,
	seemingly mad, shakes the doorknob, then hammers on the door.

				RAILLY
		I SAW YOU!  I SAW SOMEONE MOVING.  I
		KNOW YOU'RE IN THERE!

				RASPY VOICE (o.s)
		Secret experiments!

	RAILLY whirls, sees LOUIE, the raspy-voiced toothless derelict.

				LOUIE
		That's what they do -- secret weird stuff!

				RAILLY
		You!  I know you!

	But LOUIE is studying the pictures of the tortured animals now.

				LOUIE
		Not just on them.  Do 'em on people,
		too -- down at the shelters.  Feed 'em
		chemicals 'n take pictures of 'em.

				RAILLY
		Have you seen James Cole?  The man...?

				LOUIE
		They're watchin' you.  Takin' pictures.

	RAILLY follows his look.

	ANGLE ON AN OLD CHEVY, parked across the street, the PLAINCLOTHES
	COP slouched at the wheel, pretending to read a newspaper.

				RAILLY
		The police.  I know.  Listen, I need to
		talk to James, but he has to be careful
		how he contacts me.  He mustn't get
		caught.  Do you understand me?

				LOUIS
		Uh, yeah, sure.  Uh...who's James?

				RAILLY
		He was with me, he spoke to you.
		Several weeks ago.  He said you were
		from the future...watching him.

	LOUIS gives her a look that says, "I'm outta here!"

	But just then, RAILLY spots two TEZNAGE PUNKS surreptitiously
	"tagging" their way along the street with cans of spray paint.

	RAILLY stares at the PUNKS.

	INT.  FAA STORE

	FALE watches JEFFREY go over a check list while KWESKIN, SANDY,
	and TEDDY organize materials, and BEN peeks out the small opening
	between posters at the front window.

				JEFFREY
		You get the bolt cutters?

				KWESKIN
		One dozen.  They're in the van.

				FALE
		One dozen bolt cutters!  Whadda you
		gonna do with one dozen bolt cutters?

				JEFFREY
			(grins)
		You really want to know?

				FALE
		No!  Absolutely not. Don't tell me anything.

				BEN
		Hey!  Do you know what she's doing?

	Everybody freezes, looking toward 3EN, who's peeking outside.

	Then, except for JEFFREY, they all crowd around BEN to get a look.

	POV THROUGH SLIT:  a glimpse of RAILLY, spray painting the front
	of the store!

				TEDDY
		What's it say?

				BEN
		I can't see it.

				JEFFREY
			(erupting)
		WHY DON'T WE FORGET MY GODDAMN
		PSYCHIATRIST AND DEAL WITH THE TASK AT
		HAND.  THIS IS IMPORTANT.

				FALE
			(spinning around)
		Your psychiatrist?  Did you just say,
		"your psychiatrist"?

				JEFFREY
		Ex-psychiatrist!  Now, what about
		flashlights?  How many flashlights...?

				FALE
		That woman is...was...your...
		psychiatrist?  And now she's spray-
		painting our building?

	EXT.  FAA STOREFRONT/SECOND AVENUE

	ANGLE ON SLACK PLAINCLOTHES COP, across the street in the CHEVY,
	amazed, watching RAILLY spray painting.  He shakes his head wearily.

	ANGLZ ON STREET TYPES, inching closer, watching RAILLY with
	amazement, too.  They include...

	an IRISH DRUNK, white haired, red-faced, bloated...

	a NATIVE AMERICAN with tormented eyes and a mangled ear...

	an AFRICAN AMERICAN with one eye...

	the TEENAGED PUNKS...

	a WHITE MAN, shabbily dressed, joining the knot of ONLOOKERS,
	reacting at the sight of RAILLY.  It's COLE!  He pushes toward her.

				COLE
		Kathryn!

	RAILLY stops spraying, whips around at the sound of his VOICE.

				RAILLY
		James!

	With a quick glance toward the PLAINCLOTHES COP, RAILLY takes
	urgent charge of the situation.

				RAILLY
		James!  That's a policeman.  Pretend
		you don't know me.  If he sees you...

				COLE
			(turning, looking)
		No, I want to turn myself in.  Where is he?
			(placing his hands on his head)
		Don't worry -- it's all okay now.  I'm
		not crazy any more!  I mean, I am
		crazy, mentally divergent, actually,
		but I know it now and I want you to
		help me.  I want to get well...

	ANGLE on RAILLY, desperately pulling COLE'S hands off his head as
	she tries to block the COP'S view of COLE.

				RAILLY
		James -- put your hands down and listen
		to me.  Things have changed!

	ANGLE ON THE PLAINCLOTHES COP, checking the mug shot of COLE on
	his clipboard, then reaching for his radio mike.

	ANGLE ON RAILLY, reacting to the COP speaking into his mike:  she
	tosses the spray paint can aside, grabs COLE and tries to pull
	him along...but COLE isn't moving.  He's staring at the front of
	the FAA Store with disbelief!

				RAILLY
		James, come on!  We have to get out of here!

	COLE looks from the wall to the can rolling on the sidewalk,
	then back to the wall where RAILLY has sprayed the huge words:

			ATTENTION!!!  POLICE ARE WATCHING!
			IS THERE A VIRUS?  IS THIS THE
			SOURCE?  THREE BILLION DIE?

	It's the graffiti COLE saw in the future, in the picture!

				COLE
		I've seen that...before.

	But RAILLY'S total attention is on their dilemma.

				RAILLY
		James, trust me.  We're in terrible
		trouble.  We have to run.

	Very confused, COLE lets her drag him along the sidewalk, past
	ONLOOKERS.  She looks crazier than he does.

	ANGLE ON THE CHEVY, making a sudden, urgent u-turn, almost
	colliding with a passing car.  BRAKES SQUEAL and a HORN BLARES.

	INT.  FAA STORE - DAY

	ANGLE ON BEN, peeking out, reacting to the drama.

				BEN
		Wow, a guy in a Chevy is chasing her
		and some other guy I can't see.

				FALE
		Hey, no problem, it's probably just
		another kidnapping featuring Jeffrey's
		shrink, pardon me, make that ex-shrink.
			(indicating Jeffrey to the others)
		This is your leader, a certifiable lunatic
		who told his former psychiatrist all his
		plans for God knows what whacko irresponsible
		schemes, and now who knows what she's
		painted out there on our wall?

				JEFFREY
		WHO CARES WHAT PSYCHIATRISTS WRITE ON
		WALLS?
			(moves to Fale, jabs him with a finger)
		You think I told her about the Army of
		the 12 Monkeys?  Impossible!  Know why,
		you pathetically ineffectual and
		pusillanimous "pretend-friend-to-
		animals"?!  I'll tell you why:  because
		when I had anything to do with her six
		years ago, there was no such thing -- I
		hadn't even thought of it yet!

				FALE
			(triumphant)
		Then how come she knows what's going on?

	JEFFREY abruptly switches from rage to good humor, adopting a
	supercilious smile and a patronizing tone.

				JEFFREY
		Here's my theory on that.  While I was
		institutionalized, my brain was studied
		exhaustively in the guise of mental health.
		I was interrogated, x-rayed, studied
		thoroughly.  Then, everything about me
		was entered into a computer where they
		created a model of my mind.

	They all stare, mesmerized, at the strutting JEFFREY.  Is he
	serious?  Is he crazy?  Doesn't matter -- he's charismatic.

				JEFFREY (cont.)
		Then, using the computer model, they
		generated every thought I could possibly
		have in the next, say ten years, which
		they then filtered through a probability
		matrix to determine everything I was
		going to do in that period.  So you
		see, she knew I was going to lead the
		Army of the Twelve Monkeys into the
		pages of history before it ever even
		occurred to me.  She knows everything
		I'm ever going to do before I know it
		myself.  How about that?

	JEFFREY smiles smugly into FALE'S flabbergasted face.

				JEFFREY
		Now I have to get going -- do my part.
		You guys check all this stuff out and
		load up the van.  Make sure you have
		everything.  I'm outta here.

	JEFFREY exits.  The others stare at the door.

				FALE
		He's seriously crazy -- you know that.

	EXT.  SKID ROW ALLEY - DAY

	An overflowing dumpster squats near the mouth of an alley.

	The unmarked CHEVY crawls slowly past the alley, the PLAINCLOTHES
	COP'S eyes searching everywhere.

	Trash stirs in the dumpster and RAILLY'S eyes peer up out of the
	torn cardboard boxes, rotting food, and styrofoam litter.

	HER POV:  the POLICE CAR passes from view.

	ANGLE ON RAILLY, emerging from the refuse, hissing,

				RAILLY
		James!  Come on.

	A confused COLE emerges from the opposite end of the dumpster,
	bits of lettuce in his hair.

				COLE
		I don't understand what we're doing.
	
				RAILLY
			(climbing out of the dumpster)
		We're avoiding the police until I
		can....talk to you.

				COLE
			(climbing out after her)
		You mean, treat me?  Cure me?  Kathryn,
		those words on the wall -- I've seen
		them before...  I...I...dreamed them.

	But she's not listening.  She's peeking out the alley entrance.

	RAILLY'S POV:  across the street is a run-down skid row hotel,
	THE GLOBE, ROOMS WEEKLY, DAILY.

	INT.  GLOBE HOTEL/LOBBY - MINUTES LATER

	The DESK CLERK, an old alkie who hates trouble but finds it often,
	stares across the counter suspiciously at RAILLY and COLE.

				DESK CLERK
		Twenty five bucks an hour.

				RAILLY
		An hour?!

				DESK CLERK
		You want quarter hours, go someplace else.

				RAILLY
			(catches on, pulls out her last bills)
		Here's ninety eight.  For the night.  Deal?

	The DESK CLERK squints warily at this turn of events.  Then, he
	turns, gets a key, turns back and hands it to her.

				DESK CLERK
		Forty four.  Fourth floor, turn right.
		Elevator's busted.

	RAILLY turns, COLE follows, and they walk quickly to the stairs
	passing the stares of gloomy RESIDENTS sitting on torn sofas
	chairs in front of an old TV with hideous color.

	ANGLE ON THE DESK CLERK, watching RAILLY and COLE climb
	stairs.  As they disappear from view, he picks up the phone,
	punches a number, speaks into the phone.

				DESK CLERK
		Tommy?  This is Charlie at the Globe.
		You know if Wallace has a new girl?
		Sort of a rookie type?  Blonde?

	INT.  GLOBE HOTEL ROOM 44 - MINUTES LATER (DAY)

	COLE sits on the lumpy bed in the dingy room, watching RAILLY
	pace back and forth like a mad woman.

				RAILLY
		Okay...you were standing there looking
		at the moon...you were eating grass...
		then what?

				COLE
		I thought I was in...prison again.

				RAILLY
		Just like that?  You were in prison?

				COLE
		No, not really.  It's...it's in my
		mind.  Like you said.

				RAILLY
		You disappeared!  One minute you were
		there, the next minute you were gone.
		Did you run through the woods?

				COLE
		I don't know -- I don't remember.

				RAILLY
		The boy in the well.  How did you know
		that was just a hoax?

				COLE
		It was?  I didn't...know.

				RAILLY
		James, you said he was hiding in the barn...

				COLE
		I think I saw a TV show like that when
		I was a kid.  Where a boy...

				RAILLY
		IT WASN'T A TV SHOW!  IT WAS REAL!

	COLE looks at her.  She's really upset.

				COLE
		Well, maybe that kid saw the same TV
		show and copied it.  Listen, you were
		right, it's all in my head.  I'm mentally
		ill, I imagine all that stuff.  I know
		they're not real, I can trick them, make
		them do what I want.  I just worked on
		them in my head and I got back here.  I
		can get better.  I can stay here.

	RAILLY pulls a photo from her purse, shows it to COLE.

	It's the uncropped picture from her book, the photo of JOSE in
	WWI with a fuzzy image of COLE on the edge of the frame,

				RAILLY
		What does this mean to you?

				COLE
		...I had a dream about...something
		like that.

				RAILLY
		You had a bullet from World War One in
		your leg, James!  How did it get there?

				COLE
		You said I had delusions -- that I
		created a world -- you said you could
		explain everything...

				RAILLY
		Well, I can't. ... I mean...I'm trying
		to.  I can't believe that everything we
		do or say has already happened, that we
		can't change what's going to happen,
		that I'm one of the three billion
		people who are going to die...soon.

	COLE stands, moves close to her.

				COLE
		I want to be here.  In this time.  With
		you.  I want to become...become a whole
		person.  I want this to be the present.
		I want the future to be unknown.

				RAILLY
			(sudden hopeful idea!)
		James...do you remember...six years
		ago...you had a phone number!  You
		tried to call and...

	WHAM!  The door flies open, kicked violently, the flimsy lock not
	holding.  A menacing figure stands in the doorway.  WALLACE.  A
	wiry biker-type with jail house tattoos and mean eyes.

	COLE and RAILLY are too stunned to say anything as WALLACE looks
	them over coldly, insolently, then advances on RAILLY.

				WALLACE
		This is my territory, bitch!

				COLE
			(confused, turns to Railly)
		Is this real -- or is this one of my
		delusions?

				RAILLY
		This is definitely real:
			(to Wallace)
		Excuse me, I think we have a little
		misunderstanding here...

	WALLACE smashes RAILLY in the face.  She flies back against the
	wall and onto the floor as WALLACE spins around to COLE who is
	stepping toward him, but WALLACE is now holding a knife

				WALLACE
		What're you -- some kind of tough guy?
		You wanna be a hero?  You gonna try and
		mess with me?  Come on...

	A beat.  COLE puts his hands up placatingly as he backs around
	WALLACE and moves to RAILLY, whose eye is already swelling.

				WALLACE
		Now that's a smart boy.  But you,
		honey, you think you can go 'round
		me and peddle your fancy ass in this
		part of town, you bet your life we got
		what I would call a major goddamn
		misunderstandin'.

	RAILLY reaches a hand up to COLE for assistance, but, he grabs
	her purse instead, swings it around, SMASHES WALLACE in the face
	with it, then grabs the pimp's arm and SNAPS it like it was a
	twig!  The knife clatters to the floor as WALLACE yelps in pain
	and COLE slams him to the floor, straddles his chest, retrieves
	the near-by knife, and presses it sharply against WALLACE'S neck.

				RAILLY
		JAMES -- DON'T!

	COLE hesitates.

				WALLACE
			(eyes bulging)
		You...heard...her.  Don't do it, man.

				RAILLY
			(gets up, looks around)
		Put him in the closet, ... But get his
		money first.

				COLE
			(amazed)
		You want me to rob him?

				RAILLY
		I...I...We need cash, James.

	A shadow.  RAILLY turns toward the door and glimpses a FACE
	disappearing, then hears SHOUTS from the hallway...

				SHOUTS (o.s.)
		They're killing him!  Call the cops.

	Being very careful not to move his neck, WALLACE reaches into his
	pocket and produces a thick roll of bills, which RAILLY grabs.

				WALLACE
		You two are crazy.  I got friends.  You
		put me in a closet, they're gonna be
		really pissed.

	COLE moves off Wallace and, keeping the knife close, yanks him to
his teeth while RAILLY hurries to the window and looks out.

	HER POV:  A fire escape leads down into an alley.

	RAILLY turns just in time to see COLE shove WALLACE into the
	bathroom, follow him in, slam the door behind them, and LOCK it.

				RAILLY
		James, no!

	INT.  BATHROOM

				RAILLY'S VOICE (from the other room)
			(rattling the door knob)
		James, what are you doing?

	WALLACE cowers back against the shower stall.

				WALLACE
		I have friends, man -- if you cut me...

	WALLACE breaks off, bug-eyed, reacting to something we don't see!

				WALLACE
		What...the...fuck..are you doing???

	INT.  GLOBE MOTEL ROOM 44

	RAILLY is pounding on the bathroom door now as, suddenly, it
	opens and COLE steps out, the knife in his right hand, dripping
	with blood.

				RAILLY
		Oh, my God, James.  Did you kill him?

	COLE shakes his head "no" as blood oozes from his mouth.

				COLE
		Just...just in case.  In case I'm not
		crazy...
			(holds up two bloody molars)
		That's how they find us.  By our teeth.
			(a beat, eye contact)
		I don't want them to find me.  Ever.  I
		don't want to go back.

	RAILLY's astonishment turns to emotion as it dawns on her the
	choice he's made.  Given up the future (if it exists, and it's
	looking like it does)!  Risking his life to be with her!  For
	this brief time!  She's overwhelmed, lips trembling, tears
	welling in her eyes.  But just then, the SOUNDS of SHOUTS and
	feet THUNDERING up the stairs snap her back to reality.

	INT.  STAIRWELL/GLOBE HOTEL

	COPS' boots THUNDER up the stairwell.

	INT.  ROOM 44/GLOBE HOTEL

	In between nervous glances toward the door, RAILLY supervises as
	COLE obediently blocks the bathroom door with the bureau.

				RAILLY
		Push it tight!

				WALLACE'S VOICE (from the bathroom)
		NO PROBLEM!  I'LL JUST STAY IN HERE!
		DON'T WORRY ABOUT ME.

	INT.  4TH FLOOR HALLWAY/GLOBE HOTEL

	POLICE OFFICERS, led by the PLAINCLOTHES COP, make a cautious
	entrance onto the 4th floor, guns drawn.

	Seedy HOTEL RESIDENTS point to Room 44, then cower back into
	their doorways.

	EXT.  GLOBE HOTEL FIRE ESCAPE/ALLEY - DAY

	COLE and RAILLY clatter down the fire-escape, COLE in the lead.
	They come to the end of the metal stairway.  It's a long distance
	to the ground.  COLE jumps down, turns, reaches up to her.

	She lets herself down to him.  Their eyes meet.  He holds her in
	his arms for a moment.  Then, reluctantly, he puts her down.
	They start running down the alley.

	INT.  GLOBE HOTEL FOURTH FLOOR - DAY

	The PLAINCLOTHES COP has his pistol out, his back to the wall
	alongside the open doorway to Room 44.  The UNIFORMED OFFICERS
	are backing him up, weapons drawn.

				PLAINCLOTHES COP
		POLICE!  THROW YOUR WEAPONS OUT AND
		COME OUTTA THERE!

	No response.

	INT.  GLOBE HOTEL ROOM 44

	The PLAINCLOTHES COP charges into the room in a crouch, pistol
	extended in both hands.  He pans the gun around the empty room.

	HIS POV:  the open window...the blood on the floor.

				WALLACE'S VOICE (from the bathroom)
		HEY!  ZAT THE POLICE!  I'M AN INNOCENT
		VICTIM IN HERE!  I WAS ATTACKED BY A
		COKED-UP WHORE AND A CRAZY DENTIST!

	EXT.  BUS STOP/DOWNTOWN - LATE AFTERNOON

	A city bus disgorges a stream of PASSENGERS at a stop in the
	toney downtown shopping district.  Among them, RAILLY looks
	furtively left and right, COLE on her heels.  She's hidden her
	bruised eye behind sun glasses; he's holding a bloody
	handkerchief to his mouth.

	As he steps to the sidewalk, COLE is overwhelmed by the bustling
	city, the tall downtown buildings.  His eyes go up.

	COLE'S POV:  a building, towering toward the sky.  A building
	with a ledge.  The same ledge the lion prowled in the future!!!

	ANGLE ON COLE, shaken, as RAILLY ushers him into the recessed
	entrance to a store.

				RAILLY
		Wait here.  I'm going to try that phone
		number.  Let's hope it's nothing!

	Dazed by his experience and the flow of SHOPPERS, COLE watches
	her hurry to a pay phone twenty yards away, his view of her made
	intermittent by PEDESTRIANS streaming past him, their FACES
	looming frighteningly close.

	A BUSINESSMAN jostles COLE, forcing him back against the display
	window.  Turning, he faces the angry jaws of a BEAR only inches away

	Recovering from a jolt of terror, COLE realizes the BEAR is a life-size
	toy in the display window.  Relieved, he looks back at RAILLY.

	COLE'S POV:  RAILLY, well out of earshot, speaking earnestly into
	the phone.

	ANGLE ON COLE, startled, as a BUSINESSMAN, mistaking him for a
	panhandler, shoves a dollar into his hand.  Confused, COLE stares
	at the dollar, then turns to say something to the retreating
	BUSINESSMAN, but just then he sees RAILLY rushing toward him,
	eyes sparkling with happiness, LAUGHING, ebullient.

				RAILLY
		James!  James!  It's okay.  We're
		insane!  We're crazy!

	COLE doesn't know how to respond, but a PASSERBY gives them a look.

				RAILLY
		It's a Carpet Cleaning Company...

				COLE
		A Carpet Cleaning Company?

				RAILLY
			(laughing)
		No superiors!  No scientists.  No
		people from the future.  It's just a
		Carpet Cleaning Company.  They have
		voice mail -- you leave a message
		telling them when you want your carpet
		cleaned.

				COLE
		You... you left them a message?
	
				RAILLY
			(impishly)
		I couldn't resist.  I was so relieved.
		Wait'll they hear this nutty woman
		telling them...they better watch out
		for the Army of the Twelve Monkeys...

	Looking at her laughing face, COLE is struck with horror as he
	realizes the truth!  He starts to recite...

				COLE
		"The Army of the Twelve Monkeys --
		they're the ones who are going to do
		it.  I can't do anything more.  The
		police are watching me."

	Now she's stunned.  She glances back and sees the phone booth
	twenty yards away.

				RAILLY
		You... you couldn't have heard me.

				COLE
		They got your message, Kathryn.  They
		played it for me.  It was a bad
		recording...distorted.  I didn't
		recognize your voice.

	RAILLY'S eyes fill with horror as she grasps the meaning.

	ANGLE ON A UNIFORMED COP, staring out the window of a POLICE
	CRUISER as it inches along in the bumper to bumper traffic.
	Noticing something, he reaches for his radio.

	ANGLE ON RAILLY, spotting the CRUISER, grabbing COLE, pulling him
	into the CROWD.

				RAILLY
		Come on.

	INT.  DEPARTMENT STORE/MEN'S DEPARTMENT - 6:00 PM

	RAILLY, whose sun glasses don't really hide her bruised eye, adds
	a man's Hawaiian shirt to the pile of other men's things heaped
	on a counter in front of a very suspicious CLERK.

				RAILLY
		And this.
			(turning)
		Anything else?

	But COLE'S not here.  He's a short distance away...staring.

	COLE'S POV:  aisle after aisle of eager shoppers and a bounty of
	brand new consumer goods.

	ANGLE ON COLE, remembering another department store, dark and
	full of moldering merchandise.

	ANGLE ON RAILLY, turning again to the CLERK.

				RAILLY
		I guess that's it.

				CLERK
		Shall I put this on your account, Ma'am?

				RAILLY
			(producing Wallace's roll of bills)
		No -- I'll pay cash.

	The CLERK stares at the huge roll of bills!

				RAILLY
		What floor are the wigs on, please?

	EXT.  PEST CONTROL VAN - NIGHT

	Surrounded by stripped and abandoned vehicles, the VAN, with a
	PEST CONTROL logo on its side, is parked on a trash-littered
	street beside the massive pillars of a towering freeway.

	INT.  PARKED PEST CONTROL VAN

	The VAN is packed with SIX ACTIVISTS, SANDY and KWESKIN among
	them, all wearing black.  Some of them have climbing gear, tool
	belts, all sorts of paraphernalia.  KWESKIN is telling his story.

				KWESKIN
		So then he goes into this incredible riff
		about how his shrink, like, replicated
		his brain while he was in the nut house.
		Turned it into a computer.

				WELLER
		And Fale believed it?

				KWESKIN
		Oh, you know Fale!  He's like, "If you
		guys get nailed -- and I'm sure you will --
		I never saw you before in nay life!"

	LAUGHTER from all of them.  Then, there's a sharp, rhythmic
	series of RAPS on the side door, a signal.

	POPE quickly slides the door open.  It's JEFFREY...grinning.

	Three other activists, GOINES, ICHIOKA, and BRUHNS, stagger out of
	the darkness behind JEFFREY, lugging a huge, squirming GARBAGE BAG.

	The van occupants react with murmurs of "Awwwwwright" and "Far
	out", then they help maneuver the writhing bag into the van.

	Then, JEFFREY and the other three scramble in, too.

				JEFFREY
		Let's do it!

	EXT.  VAN/FREEWAY

	The PEST CONTROL VAN lumbers up a ramp and onto the freeway.

	INT.  PEST CONTROL VAN/MOVING

	The GARBAGE BAG squirms and grunts as JEFFREY holds a map under a
	flashlight and goes over "the plan" with the other ACTIVISTS.

				JEFFREY
		Okay, that's Stage One.  In Stage Two,
		Monkey Four is over here...

	A loud GROAN from the bag distracts the others.

				GOINES
		What's the harm in opening the bag?
		His eyes are taped.

				SANDY
		Yeah, it's cruel leaving him like that.

				JEFFREY
		Ah, but cruelty is his specialty.

				ICHIOKA
		So why should we be like him?

	Shrugging cheerfully, JEFFREY tears open the garbage bag revealing
	DR. MASON, trussed up, duct tape covering his eyes and mouth.

				JEFFREY
		Want the full effect?

	Grinning wickedly, JEFFREY rips the tape from his father's mouth.

				DR. MASON
		Jeffrey?  I know it's you, Jeffrey.  I
		recognize your voice.

	JEFFREY puts his finger to his lips, silencing everyone.

				DR. MASON
		JEFFREY???  ... Very well.  You're out
		of your mind, Jeffrey.  I know all
		about your insane plan.  That woman --
		your psychiatrist -- she told me.

	JEFFREY raises his eyebrows.  This he hadn't expected.

				DR. MASON
		I didn't believe her -- it seemed too crazy
		even for you.  But, just in case, I took steps
		to make sure you couldn't do it.  I took myself
		out of the loop!  I don't have the code any
		more.  I don't have access to the virus.  So,
		go ahead -- torture me, but you can't extract
		anything of use to yourself.

	The ACTIVISTS are all exchanging puzzled looks.

				JEFFREY
		What...virus?

				DR. MASON
			(spins his head toward Jeffrey)
		She knew about it, Jeffrey.  She knew
		you were going to try this.

				JEFFREY
		What virus are we talking about, Dad?

				DR. MASON
		You're insane, Jeffrey.

				JEFFREY
		You "develop" viruses and you're calling
		me insane?  Typical.  What does this
		virus attack?  Don't tell me, you sick
		fuck, it doesn't matter.
			(to the others)
		Have I ever "developed" a virus?  Do I
		put helpless animals in cages and measure
		their reactions to electrical stimuli?
		Do I inject radioactive substances into
		living creatures and examine their
		bowel movements?  Wow!  And I'm crazy!

				DR. MASON
		Please tell me, Jeffrey, what exactly
		are you going to do?  I don't have to
		tell you I'm afraid.

				JEFFREY
		THIS IS A FUCKING EXPERIMENT!  YOU'RE
		OUR HELPLESS LITTLE TEST ANIMAL, DADDY.
		GOT THAT?  NOW -- WHAT FUCKING VIRUS
		HAVE YOU COME UP WITH, YOU DEMENTED
		FUCKING MANIAC?

	INT.  MOVIE SCREEN/THEATER - NIGHT

	Spooky BERNARD HERRMAN MUSIC, giant redwoods looming skyward.
	It's DAYTIME in Muir Woods.  SCOTTY (JAMES STEWART) AND MADELINE
	(KIM NOVAK) walk toward a display of a cross cut section of a
	redwood tree.  We're watching Hitchcock's VERTIGO.

				SCOTTY (up on the screen)
		Here's a cross section of one of the
		old trees that's been cut down.

	They look at the lines of the tree marked with cards that say,
	"BIRTH OF CHRIST", "DISCOVERY OF AMERICA", "MAGNA CARTA SIGNED",
	"1066 - BATTLE OF HASTINGS", and "1930 TREE CUT DOWN".

	ANGLE ON THE THEATER AUDIENCE, empty seats dimly visible in the
	flickering light, a few shadowy MOVIEGOERS scattered here and there.

	ANGLE ON THE SCREEN, MADELINE pointing, saying with profound melancholy.

				MADELINE (up on the screen)
		Somewhere in here I was born.  And here
		-- I die.  There's only a moment for
		you.  You don't notice.

	ANGLE ON THE AUDIENCE, a shadowy COUPLE near the back of the
	theater.  WE CAN'T REALLY SEE THEM, but we recognize their VOICES

				RAILLY
		Here, let me help you.

	The theater is briefly illuminated by a very bright scene on the
	screen, revealing enough of COLE and RAILLY for us to see she's
	doing something to his upper lip while he tries to watch the movie.

				COLE
		I think I've seen this movie before.
		When I was a kid.  It was on TV.

				RAILLY
			(fussing with his upper lip)
		Shh -- don't talk.  Hold still.

				COLE
			(moving his head to see the film)
		I have seen it, but I don't remember
		this part.  Funny, it's like what's
		happening to us, like the past.  The
		movie never changes -- it can't change
		-- but everytime you see it, it seems
		to be different because you're different
		-- you notice different things.

				RAILLY
		If we can't change anything...because
		it's already happened, then we ought to
		at least smell the flowers.

				COLE
		Flowers!  What flowers?

	From the darkness, a MOVIE PATRON makes a SSSSHHHHH shound.

				RAILLY
			(whispering)
		It's an expression.  Here...

	She's pulling something from a shopping bag at her feet, placing
	it on COLE'S head, adjusting it...

				COLE
		Why are we doing this?

				RAILLY
		So we can stick our heads out the
		window and feel the wind and listen to
		the music.  So we can appreciate what
		we have while we have it.  Forgive me,
		psychiatrists don't cry.

	There are tears in her eyes.  They discomfit COLE.

				COLE
		But maybe I'm wrong.  Maybe you're
		wrong.  Maybe we're both crazy.

				RAILLY
		In a few weeks, it will have started or
		it won't.  If there are still baseball
		games and traffic jams, armed robberies
		and boring TV shows -- we'll be so
		happy, we'll be glad to turn ourselves
		in to the police.

				SHADOWY MOVIEGOER
		SHHHHHHH    

				COLE
			(whispers)
		Where can we hide for a few weeks?

	ANGLE ON THE SCREEN, where SCOTTY and MADELINE are in the foreground,
	the OCEAN behind them.

				RAILLY
		You said you'd never seen the ocean...

	EXT.  GORILLA'S PEN/ZOO - NIGHT

	CLOSE ON A GORILLA, by moonlight, angry, a true nightmare vision.

	URGENT WHISPERS off screen, RUSTLING SOUNDS.  Then, METAL ON METAL.
	Only now are we aware that the GORILLA is in an outdoor zoo pen
	with phony rocks.  Stalking back and forth.  Huge.  Upset.

	CLANK.  CLANK.  METAL ON METAL.  GRUNTS of effort, then, DR.
	MASON'S VOICE, plaintive, frightened.

				DR. MASON'S VOICE (o.s.)
		What are you doing to me?  Where are
		we?  Jeffrey, please...

				SANDY'S VOICE (o.s.)
		For God's sake, put the tape back on
		his mouth!

	The GORILLA bellows angrily, beating his chest.

				JEFFREY'S VOICE (o.s.)
		Forget the tape.  The monkey's louder than
		he is.  You gonna tape the monkey's mouth?

	EXT.  PANTHERS' PEN/ZOO - NIGHT

	Under the full moon, PANTHERS pace back and forth, back and
	forth, uttering ominous guttural SNARLS.

	EXT.  LION'S PEN/ZOO

	The KING OF BEASTS gives a deep, fierce ROAR.  From the darkness,
	unseen ELEPHANTS TRUMPET their response.

	EXT.  AVIARIES/ZOO

	A PANDEMONIUM of WINGS RUSTLING, the sharp metallic CLINKING of
	metal on metal, the MUTTER of HUMAN VOICES, then a cacophonous
	CRESCENDO of frenzied SCREECHING as PARROTS, COCKATOOS and other
	EXOTIC BIRDS careen madly in their cages.

	INT.  MOVIE THEATER AUDITORIUM

	CLOSE ON COLE, dozing fitfully, as the SOUNDS of SCREAMING BIRDS
	continue.  Suddenly, he comes awake with a start...sees the movie
	filling his field of vision.

	HIS POV:  the MOVIE SCREEN.  TIPPI HEDRIN, overwhelmed by
	screeching BIRDS in an attic in Hitchcock's THE BIRDS.

	ANGLE ON COLE, orienting himself, looking around.  Empty seats on
	both sides of him.  He's alone.  He panics.

				COLE
		Kathryn?!

	INT.  THEATER LOBBY

	A lobby poster boasts "Classics 24 Hours A Day" and "Hitchcock
	Festival".  PANNING OFF the poster, passing a SNORING USHER, dead
	to the world in an old velvet chair, WE DISCOVER a BRUNETTE in a
	tight dress, just hanging up the lobby pay phone.  Turning, she
	reveals heavy make-up, gaudy costume jewelry, and sun glasses.
	She's the BRUNETTE in COLE'S DREAM!  Crossing the lobby toward
	the auditorium, it's a pleasure to watch her nice body undulate
	in the tight dress.

	Just then, the auditorium doors burst open and a BLONDE MAN in a
	Hawaiian shirt appears, the man from COLE'S DREAM, except this
	man's moustache is fixed firmly on his upper lip.  The BLONDE MAN
	stops, stunned at the sight of the BRUNETTE.

				BRUNETTE
		We're booked on a 9:30 flight to Key West.

	The Brunette is RAILLY, no longer the frazzled professional,
	revealed now by her disguise as a sexy babe.  The Blonde Man is
	COLE!  He's confused.

				COLE
		You were in my dream just now.  I
		didn't recognize you.

				RAILLY
		Well, you look pretty different, too.

				COLE
		I mean in my dream -- I didn't realize
		it was you.  Then...I woke up and I...I
		thought you were gone.

				RAILLY
			(studies him seriously)
		I remember you...like this.  I feel
		I've known you before.  I feel I've
		always known you.

	Their eyes lock.  Suddenly, she backs up, gently maneuvering him
	with her, past the sleeping USHER, to and through an unlocked,
	unmarked door, then closing it behind them.

	INT.  STORAGE ROOM/MOVIE THEATER

	RAILLY and COLE are in a dimly lit cluttered storage room.  She
	kisses him hungrily amid the brooms, plastic trash barrels, other
	janitorial items.  COLE responds to her passion as they move
	deeper into the room, its walls covered with old movie posters.
	Tearing at each other's clothes, they collapse on a rolled
	theater curtain among stacks of ancient theater seats.

	EXT.  SUBURBS - DAWN

	The red rim of the rising sun is just becoming visible beyond the
	silhouetted roofs of an upper middle-class suburban neighborhood.
	The early light is so vague that when a huge SIBERIAN TIGER pads
	across a neatly-trimmed lawn, he's more a shadowy vision than
	reality.  Did we really see him at all?

	EXT.  CONSTRUCTION SITE - DAWN

	The rising sun flares behind the towering silhouette of an unfinished
	building, deserted in the early morning light.  High up, a MONKEY
	his head around a girder.

	Four stories below, other MONKEYS are climbing.

	EXT.  SHOPPING MALL - DAWN

	Deserted in the first light of dawn, the stores face each other
	across a broad promenade with blank staring windows.

	Nothing happens.  For a long moment.  Then, an AFRICAN BULL
	ELEPHANT appears, turning the corner, lumbering toward us along
	the promenade, raising his trunk to TRUMPET triumphantly to the
	other ELEPHANTS trotting into view behind him.

	INT.  TAXICAB/CITY STREETS - EARLY MORNING

	A fiftyish WOMAN CABBIE with white hair and a Southern twang is
	at the wheel of the cab.

				WOMAN CABBlE
		What time's your flight, friends?

	In the back seat, COLE, in the blonde wig and moustache, looks to
	his companion, the sexy babe in sun glasses and heavy make-up, RAILLY.

				RAILLY
		Nine thirty

				WOMAN CABBIE
		Might be tight.

				RAILLY
			(startled, checks her watch)
		Tight?  My watch says 7:30.

				WOMAN CABBIE
		On your normal mornin', okay, plenty a
		time, but today, gotta take inta account
		your Army-of-the-Twelve-Monkeys factor.

				RAILLY
		What?  What did you say?

				WOMAN CABBIE
		Twelve Monkeys, honey.  Guess you folks
		didn't turn on your radio this morning.

	COLE and RAILLY exchange a quick look.

				WOMAN CABBIE
		Bunch a weirdoes let all the animals outta
		the zoo last night.  Then they locked up
		this big shot scientist in one of the cages.
		Scientist's own kid was one a the ones did it!

	RAILLY and COLE stare at the cabbie, stunned.

				WOMAN CABBlE
		Now they got animals all over the
		place.  Buncha zebras shut down the
		thruway 'bout an hour ago and some
		kinda thing called an "e-mu" it's got
		traffic blocked for miles over on 22.

	Flabbergasted, RAILLY'S eyes suddenly fill with hope.

				RAILLY
		That's what they were up to!  Freeing
		animals!

				COLE
		On the walls -- they meant the animals
		when they said, "We did it."

				WOMAN CABBIE
		You can hear it on the radio all the
		stations...

	As the WOMAN CAEBIE switches on the RADIO, RA:LLY points and COLE
	follows her look.

	COLE'S POV:  two CHEETAHS, sleek and magnificent against the
	cityscape, streaking past the cab at ninety mph!

				ANNOUNCER/RADIO (o.s.)
		In the meantime, numerous animal rights
		activists have joined the chorus
		condemning what they're calling the
		"loose canon" activities of Jeffrey
		Mason and his Army of the Twelve
		Monkeys.
				RIGHTS ACTIVIST/RADIO (o.s.)
		Can these fools seriously believe that
		releasing a captive animal into an
		urban environment is being compassionate
		to the animal?  It's mindlessly cruel,
		almost as indefensible as holding the
		animal in captivity in the first place.

	RAILLY and COLE are watching FLAMINGOS cross the sky against a
	backdrop of skyscrapers in silhouette.

				RAILLY
		Maybe it's going to be okay.

	INT.  TICKET COUNTER/AIRPORT TERMINAL - MORNING

	CLOSY ON copies of the mug shot of COLE and a photo of RAILLY
	while the airport P.A. SYSTEM DRONES in the b.g..

	REVEAL a DETECTIVE, giving the flyers to the uniformed SUPERVISOR
	at one end of the ticket counter.

				DETECTIVE
		Tell your people if they spot either
		one of them, not to try and apprehend
		then.  They should notify us and...

	ANGLE ON RAILLY AND COLE, thirty yards away, entering the terminal.

				P.A. SYSTEM
		-- Flight 531 for Chicago is now ready
		for boarding at Gate Seventeen.

	ANGLE ON COLE, reacting to the P.A., stopping, seeing the
	bustling airport lobby.

				COLE
		I know this place! ... This is my dream.

				RAILLY
		Airports all look the same.  Maybe
		it's...
			(turning, reacting)
		James!  Your moustache!  It's slipping.

	But COLE isn't listening.  He's looking around, mesmerized.

				COLE
		It's not just my dream.  I was actually
		here!  I remember now.  My parents
		brought me to meet my uncle.  About a
		week or two before...before...before
		everybody started dying.

	RAILLY glances around nervously.

	RAILLY'S POV:  two UNIFORMED POLICEMEN, strolling through the
	lobby, their eyes scanning the faces of TRAVELERS.

	ANGLE ON RAILLY, pulling a small tube from her purse.

				RAILLY
		They may be looking for us, James.
			(placing the tube in his hand)
		Use this.  You can fix it in the Men's Room.
  
				COLE
			(confounded)
		I was here...as a kid.  I think you
		were here, too.  But you...looked just
		like you look now.

				RAILLY
			(getting desperate)
		James, if we're identified, they're
		going to send us someplace...but not to
		Key West!

				COLE
			(snaps out of it, hand to moustache)
		Right!  You're right.  I have to fix this.

				RAILLY
			(indicating a sign)
		I'll get the tickets and meet you... in
		the Gift Shop.

	COLE follows her look, nods, then heads for the Men's Room as
	RAILLY, in sun glasses, gaudy outfit, high heels, starts clip
	clopping toward the ticket counter, her ass attracting admiring
	glances.

	INT.  TELEPHONES/LOBBY - DAY

	BUSINESS TRAVELERS huddle over pay phones, talking earnestly, as
	COLE walks past on his way to the Men's Room.

	Seeing an unoccupied phone, COLE hesitates, considers it.  Coming
	to a decision, he reaches into his pocket, pulls out some change.

	INT.  TZCKET COUNTER/TERMINAL

	CLOSE ON the flyer of COLE and RAILLY taped under the counter,
	hidden from the customers, but in clear view of the TICKET AGENT
	who has just finished serving a PORTLY GENTLEMAN.  The GENTLEMAN
	walks away.

	ANGLE ON RAILLY, stepping up to the counter, smiling, looking
	nothing like the Railly on the flyer.

				RAILLY
		Judy Simmons.  I have reservations for
		Key West.

	INT.  PAY PHONES/TERMINAL

	COLE is speaking into the phone very low, very private, very intense.

				COLE
		Listen, I don't know whether you're
		there or not.  Maybe you just clean
		carpets.  If you do, you're lucky --
		you're gonna live a long, happy life.
		But if you other guys exist and you're
		picking this up -- forget about the
		Army of The Twelve Monkeys -- they
		didn't do it.  It was a mistake'
		Someone else did it.  The Army of The
		Twelve Monkeys are just dumb kids
		playing revolutionaries.  It was
		someone else!

	COLE looks around nervously, catches a BUSINESSMAN at the next
	phone looking away quickly.  COLE touches his loose moustache as
	he averts his face and speaks into the phone in an urgent whisper.

				COLE
		I've done my job.  I did what you wanted.
		Good luck.  I'm not coming back!

	COLE hangs up the phone, looks around, catches a few stares.
	Averting his face, he heads for the Men's Room.

	INT.  TICKET COUNTER - DAY

	The TICKET AGENT is counting out a stack of bills.

				TICKET AGENT
		Don't see a lot of this... cash.

				RAILLY
		It's...a long story.

				TICKET AGENT
			(smiles, hands over the tickets)
		They'll begin boarding in about twenty
		minutes.  Have a nice flight, Mrs. Simmons.

	Turning to go, RAILLY fumbles the tickets while trying to put
	them in her purse and they flutter to the floor.  As she kneels
	to retrieve them, WE SEE the long line of waiting TRAVELERS from
	the waist down.  WE SEE a familiar Chicago Bulls Sports Bag
	resting on the floor beside sneakers and gaudy baggy pants.
	we've seen this outfit before...in COLE'S dream...on MR. PONYTAIL!

	INT.  MEN'S ROOM/AIRPORT - DAY

	The P.A. DRONES as CCLE, head down, lingers at a sink, washing
	and rewashing his hands while another TRAVELER finishes drying
	his hands, gives COLE a quizzical look, then leaves.

	Quickly, COLE glances around, checks the seemingly empty Men's
	Room, then takes the tube of adhesive from his pocket, puts some
	goop under the loose edge of his moustache and presses it firmly
	against his face as he leans close to the mirror.

				RASPY VOICE (o.s.)
		Got yourself a prob, Bob?

	COLE whirls, looks for the source of the VOICE.  Nothing!  Until
	he spots shoes peeking from dropped trousers indicating an
	occupied stall.  It must be him!

				COLE
		Leave me alone!  I made a report.  I
		didn't have to do that.

				RASPY VOICE (o.s.)
		Point of fact -- you don't belong here.
		It's not permitted to let you stay.

	A toilet FLUSHES in the "occupied" stall.  COLE'S answer is loud
	and defiant.

				COLE
		This is the present.  This is not the past.
		This is not the future.  This is right now!

	A PLUMP BUSINESSMAN emerges from the "occupied" stall, gives COLE
	a wary look and a wide berth as he heads for a sink.

				COLE
		I'm staying here! You got that?  You
		can't stop me!

				PLUMP MAN
			(high pitched voice)
		Anything you say, chief.  It's none of
		my business.

	COLE looks dismayed.  This guy couldn't be "THE VOICE"!  And there
	are no feet showing under the other stalls.  Did he imagine it?

	INT.  TICKET COUNTER - DAY

	The Chicago Bulls bag!  It's on the counter in front of the
	TICKET AGENT who's reviewing a stack of tickets in awe...

				TICKET AGENT
		Woooo-eeee.  San Francisco, New
		Orleans, Rio de Janeiro, Rome,
		Kinshasa, Karachi, Bangkok, Peking!
		That's some trip you're taking, sir,
		All in one week!

				MR. PONYTAIL (o.s.)
		Business.

				TICKET AGENT
			(handing over the tickets)
		Have a good one, sir.

	INT.  TERMINAL LOBBY

	COLE emerges from the Men's Room, shaken, paranoid.  He glances
	around nervously.  Then, keeping his head down, he starts walking
	toward the Gift Shop.  Before he gets more than a few steps,
	someone suddenly grabs his shoulder from behind.

				FAMILIAR VOICE (o.s.)
		You gotta be crazy, man!

	COLE whirls, finds himself facing a Puerto Rican youth in an L.A.
	Raiders jacket, a sideways baseball cap, and mirrored sun glasses

				COLE
		Jo...Jose????

				JOSE
		Pulling out the tooth, man, that was
		nuts!  Here, take this.

	JOSE tries to slip COLE a 9mm pistol.  Astonished, COLE resists!

				COLE
		What?  What for?  Are you crazy?

	Frustrated, JOSE conceals the gun but keeps a grip on COLE'S arm.

				JOSE
		Me?  Are you kiddin?  You're the one!
		You were a hero, man.  They gave you a
		pardon!  And whadda you do?  You come
		back and fuck with your teeth!  Wow!

				COLE
		How did you find me?

				JOSE
		The phone call, man.  The phone call.

				COLE
		The call I just made?  Five minutes ago?

				JOSE
		Hey, five minutes ago, thirty years ago!
		Yes, that phone call.  I been in training
		for this a couple a months now -- ever
		since I got back from that... "weird"
		war we were in.  You remember that?
			(pressing the pistol on Cole)
		Here, take it, man!  You could still be
		a hero if you'd cooperate!

	INT.  GIFT SHOP/TERMINAL - DAY

	RAILLY takes a travel book on Key West from a rack, considers it,
	includes it with several magazines she's holding.  She doesn't
	notice MR. PONYTAZL enter the Gift Shop behind her!

	The P.A. System DRONES flight info as RAILLY checks her watch and
	frowns.  It's getting late and where's Cole?  She turns, heads
	for the cash register to make her purchases.

	MR. PONYTAIL, seen from behind, is at the cash register already.
	He sets a newspaper on the counter and searches for change.

	The paper features a banner headline..."ANIMALS SET FREE" and a
	sub head..."PROMINENT SCIENTIST FOUND LOCKED IN GORILLA CAGE"
	over a photo of DR. MASON being released from the cage and
	another photo of a GORILLA perched atop a parked car.

	Stepping in line behind MR. PONYTAIL, RAILLY checks her watch
	again. Then, MR. PONYTAIL, having paid, turns to go and RAILLY
	looks up and sees his face. though it is not visible to us.

	Startled, RAILLY frowns.  Does she know this man?

	MR. PONYTAIL pauses for a moment, considering the babe in the
	shades, gaudy earrings, the tight skirt, and high heels.

	RAILLY doesn't recognize the man, but we do!  He's DR. MASON'S
	ASSISTANT, DR. PETERS...the man who attended RAILLY's lecture!

	Smiling, DR. PETERS steps around RAILLY and exits the Gift Shop.

	Still puzzled, RAILLY puts her purchases on the counter and the
	CLERK starts ringing them up as a DELIVERY MAN comes in and drops
	a bundle of newspapers at her feet.

	RAILLY'S POV:  the front page shows a photo of three frightened
	GIRAFFES in freeway gridlock under a headline proclaiming, "TERRORISTS
	CREATE CHAOS".  Further down are two more photos...DR. MASON in the
	gorilla cage and a file photo of DR. MASON in his lab.

	CLOSE ON THE SHOT OF DR. MASON in his lab.  There's someone else
	in the picture.  It's a man wearing a lab coat and a PONYTAIL!

	ANGLE ON RAILLY, reacting, suddenly remembering!

	MEMORY FLASHBACK!  INT.  RECEPTION ROOM/BREITROSE HALL - NIGHT

	RAILLY looks up from the book she's signing and sees DR. PETERS.

				DR. PETERS
		Isn't it obvious that "Chicken Little"
		represents the sane vision and that
		Homo Sapiens' motto, "Let's go shopping!"
		is the cry of the true lunatic?

	INT.  GIFT SHOP - DAY

	RAILLY, stunned, stares in the direction PETERS/PONYTAIL went.

				RAILLY
		Oh, my God!

				P.A  SYSTEM
		-- flight 764 for San Francisco is now
		ready for boarding at Gate 36.

	INT.  LOBBY - DAY

	In the confusion of TRAVELERS streaming in different directions,
	COLE hurries toward the Gift Shop while JOSE struggles to keep up.

				JOSE
		Coma on, Cole, don't be an asshole.
			(then, blurting it out)
		Look, I got orders, man!  You know what
		I'm sposed to do if you don't go along?
		I'm sposed to shoot the lady!  You got
		that?  They said, "If Cole don't obey
		this time, Garcia, you gotta shoot his
		girlfriend!"

	COLE stops in his tracks, blown away, too stunned to speak.

				JOSE
		I got no choice, man.  These are my
		orders.  Just take it, okay?

	COLE accepts the gun this time, resigned now.  They've got him.

				COLE
		This part isn't about the virus, is it?

				JOSE
		Hey, man...

				COLE
		It's about obeying, about doing what
		you're told.

				JOSE
		They gave you a pardon, man.  Whatdaya
		want?

				COLE
		Who am I supposed to shoot?

	Just then, RAILLY rushes up to COLE, not even noticing JOSE.

				RAILLY
		James!  Thank God!  I thought you'd
		disappeared.  Listen, I think I know
		who it is!  I saw him!  It's Dr. Mason's
		assistant.  An apocalypse nut!  The next
		flight to San Francisco leaves from Gate 38.
		If he's there, it has to be him.

	JOSE, having heard this, steps back into the crowd as RAILLY
	grabs COLE and pulls him toward the Security Check Points.

				COLE
		I love you, Kathryn.  Remember that.

	She doesn't hear him or see the look of doom in his eyes.

				RAILLY
		Maybe we can stop him.  Maybe we can
		actually do something.

	INT.  SECURITY CHECK POINT/TERMINAL - DAY

	A young boy of nine passes through the magnetic arch grinning.
	YOUNG COLE!  Exactly as he appears in the dream!

	He joins his PARENTS, who are only visible from their chests
	down, and they continue along the concourse.  WE LINGER and
	DISCOVER two DETECTIVES watching TRAVELERS as they pass through
	the magnetic arch and retrieve their bags from the X-ray machine,
	comparing their faces to photos of COLE and RAILLY.

	ANGLE ON A SECURITY OFFICER, watching the x-ray monitor.

	ANGLE ON THE MONITOR, showing the X-RAY IMAGE of a sports bag moving
	along the conveyer belt.  The bag contains some strange objects.

	ANGLE ON THE SECURITY OFFICER, reacting.

				SECURITY OFFICER
		Excuse me, sir.  Would you mind letting me
		have a look at the contents of your bag?

	ANGLE ON DR. PETERS, coming through the magnetic arch, reacting.

				DR. PETERS
		Me?  Oh, yes, of course.  My samples.
		I have the appropriate papers.

	INT.  END OF LINE/SECURITY CHECK POINT

	RAILLY AND COLE arrive at the very long suddenly stalled line of
	TRAVELERS waiting to pass through security.

				RAILLY
		Oh, God, we don't have time for this.

	ANGLE ON THE SECURITY CHECK POINT, where DR. PETERS unpacks his
	Bulls bag, pulls out six metal cylinders along with a change of
	clothes and a Walkman.

				DR. PETERS
		Biological samples.  I have the
		paperwork right here.

	DR. PETERS produces a sheaf of official papers while the SECURITY
	OFFICER examines one of the tubes, turning it over in his hands.

				SECURITY OFFICER
		I'm going to have to ask you to open
		this, sir.

				DR. PETERS
		Open it?
			(blinks stupidly, then)
		Of course.

	DR. PETERS takes the metal cylinder and starts opening it.

	There's a SOUND of VOICES RAISED behind them.  DR. PETERS pays no
	attention, but the SECURITY OFFICER turns toward the NOISE.

	SECURITY OFFICER'S POV:  RAILLY, trying to explain something to a
	SECOND SECURITY OFFICER.

	ANGLE ON THE TWO DETECTIVES, nearby, showing interest in the
	commotion.

	ANGLE ON DR. PETERS, oblivious to the fuss, pulling a closed
	glass tube out of the metal cylinder.

				DR. PETERS
		Here!  You see?  Biological!  Check the
		papers -- it's all proper.  I have a
		permit.

				SECURITY OFFICER
		It's empty!

	Indeed, it looks like a sealed clear glass tube with nothing in it.

				DR. PETERS
		Well, yes, to be sure, it looks empty!
		But I assure you, it's not.

	ANGLE ON RAILLY, at the end of the line, arguing with the SECOND
	SECURITY OFFICER.

				RAILLY
		Please listen to me -- this is very urgent!

				SECOND SECURITY OFFICER
		You'll have to get in line, ma'am.

				TRAVELER
		We're all in a hurry, lady.  What's so
		special about you?

	ANGLE ON DR. PETERS, producing the glass tubes from the other
	metal cylinders as the SECURITY OFFICER examines the papers.

				DR. PETERS
		You see!  Also invisible to the naked eye.

	A beat.  OR. PETERS grins suddenly, opens one of the glass tubes,
	and waves it under the SECURITY OFFICER'S nose!

				DR. PETERS
		It doesn't even have an odor.

	The SECURITY OFFICER glances up, sees what DR. PETERS is doing,
	and smiles as he hands the papers back to the scientist.

				SECURITY OFFICER
		That's not necessary, sir.  Here you
		go.  Thanks for your cooperation.  Have
		a good flight.

	Hastily, DR. PETERS snatches up all the tubes and cylinders and
	shoves them back into his gym bag.

	ANGLE ON RAILLY, raging as the SECOND SECURITY OFFICER jabs her
	with his finger.

				SECOND SECURITY OFFICER
		Who are you calling a "moron"?

				COLE
		Get your hands off her!

	The SECOND SECURITY OFFICER stiffens for trouble.

	ANGLE ON THE DETECTIVES, watching the fuss, ready to get
	involved.  Suddenly, the FIRST DETECTIVE frowns.

	FIRST DETECTIVE9S POV:  COLE'S moustache is slipping.  COLE
	senses it, reaches up to touch it, catches the DETECTIVE'S look.
	For half a second their eyes meet, then COLE looks away.

	ANGLE ON DR. PETERS, hurrying away.

				SECURITY OFFICER'S VOICE (o.s.}
		HOLD IT!  JUST A MOMENT.

	DR. PETERS freezes, turns, ashen.

	The SECURITY OFFICER is retrieving a pair of jockey shorts from
	the floor beside the search table.  He waves them at DR. PETERS.

	DR. PETERS hurries back for his underpants.

	ANGLE ON COLE, trying to keep his head turned away as he
	confronts the SECURITY OFFICER.

				COLE
		I said, get your hands off her.  She's
		not a criminal.  She's a doctor...a
		psychiatrist.

	RAILLY looks alarmed at that.

	ANGLE ON THE DETECTIVES, coming this way.  The FIRST DETECTIVE
	has the photos in his hand.

	ANGLE OW DR. PETERS, bagging his jockey shorts, then starting
	hastily down the windowed concourse toward the gates.

	ANGLE ON RAZZLY, suddenly spotting DR. PETERS!

				RAILLY
		THERE HE IS!  HE'S CARRYING A DEADLY
		VIRUS!  STOP HIM!

	ANGLE ON COLE, following RAILLY'S look, seeing MR. PONYTAIL, THE
	MAN FROM HIS DREAM!

	ANGLE ON DR. PETERS, frightened, glancing back, walking faster.

				RAILLY (o.s.)
		PLEASE, SOMEBODY -- STOP HIM!

	ANGLE ON DETECTIVES, reaching RAILLY and COLE.

				FIRST DETECTIVE
			(raising his badge)
		Police Officers.  Would you step over
		here, please.

	ANGLE ON COLE, spotting something behind the DETECTIVES!

	COLE'S POV:  SCARFACE, dressed like a "businessman"!  He gives
	COLE a cold look.

	A beat.  COLE lunges at the SECOND DETECTIVE, knocking him off
	balance, then sprints toward the magnetic arch and through it.

	The ALARM goes off!!!!

	The FIRST SECURITY OFFICER tries to stop COLE, but COLE knocks
	him aside like a rag doll.

	ANGLE ON DR. PETERS, fifty yards up the concourse, glancing back.

	ANGLE ON COLE, pulling his pistol.

	ANGLE ON THE SECOND SECURITY OFFICER.

				FIRST SECURITY OFFICER
		HE'S GOT A GUN!

	ANGLE ON THE FIRST DETECTIVE, raising his pistol at COLE.

				FIRST DETECTIVE
			STOP OR I'LL SHOOT!
	
	ANGLE ON COLE, gun in hand, sprinting along the concourse toward
	DR. PETERS as frightened TRAVELERS SCREAM and dive for cover.

	ANGLE ON YOUNG COLE, standing at a concourse window, watching a
	plane land, flanked by his parents whose faces we don't see.

	IT'S SUDDENLY AS IF THE DREAM IS HAPPENING IN REAL LIFE!!!  THE
	SAME MOKENTS INTERSPERSED WITH "NEW" MOMENTS FROM THE POV OF
	YOUNG COLE who, hearing the commotion, turns just as DR. PETERS
	hurries by.  DR. PETERS bumps into YOUNG COLE and reacts by
	pulling his Bulls bag close to his body and calling...

				DR. PETERS
		WATCH IT!

	ANGLE ON YOUNG COLE, wide eyed, watching...

	YOUNG COLE'S POV:  a BLONDE MAN. dashing up the concourse, his
	moustache slipping over his lip, a pistol in his hand.

	YOUNG COLE'S POV:  the FIRST DETECTIVE aims, looking for a clear
	shot in the crowded passageway.

	YOUNG COLE'S POV:  a BRUNETTE in flashy clothes, gaudy earrings,
	high heels, and sun glasses SCREAMS...

				BRUNETTE (RAILLY)
		N0OOOOO0O!!!!!!

	YOUNG COLE'S POV:  the FIRST DETECTIVE, firing!  CRACK!

	YOUNG COLE'S POV:  the BLONDE MAN, shuddering, staggering, falling.

	ANGLE ON YOUNG COLE, stunned, as his PARENTS try to shield him.

				MOTHER'S VOICE (o.s.)
		My God!  They shot that man!

	Mesmerized, YOUNG COLE watches the BRUNETTE rush to the BLONDE
	MAN, kneel beside him, minister to his bloody wound.

	YOUNG COLE'S POV:  the BLONDE MAN, fatalistically reaching up
	and tenderly touching the BRUNETTE'S cheek, touching her tears.
	(WE'VE SEEN THIS EXACT IMAGE IN COLE'S DREAM, A POWERFUL MOMENT,
	UNFOLDING UNNATURALLY SLOWLY, OPENING LIKE A FLOWER.)

	ANGLE ON YOUNG COLE, not able to hear their words, but he can see
	emotion as the BLONDE MAN tries to tell the sobbing BRUNETTE something.

	YOUNG COLE'S POV:  PARAMEDICS, breaking the spell, pushing the
	BRUNETTE aside as they crouch beside the BLONDE MAN.

				FATHER'S VOICE (o.s.)
		Come along, son, this is no place for us.

	ANGLE ON YOUNG COLE, as his FATHER'S ARM drapes over his shoulder,
	steering him.  YOUNG COLE turns to look back as he's led away.

	YOUNG COLE'S POV:  the PARAMEDICS, exchanging glances, shrugging
	helplessly.  It's too late.  The BLONDE MAN is dead.

	YOUNG COLE sees the BRUNETTE, her face streaked with tears,
	suddenly turn and look around, scanning the crowd, searching for
	something.  POLICE OFFICERS approach her, say something to her.
	Even as she responds, her eyes continue to scan the concourse.

	ANGLE ON YOUNG COLE, being hurried toward the lobby by his PARENTS
	(whose faces remain out of view).  He can't help sneaking another
	look back.

	YOUNG COLE'S POV:  POLICE, handcuffing a distracted, unresisting
	RAILLY.  Even now, she continues to look around almost frantically.

	Suddenly, her gaze falls on YOUNG COLE and she reacts...she's
	found what she's looking for!

	ANGLE ON YOUNG COLE, reacting to the intensity of her look.

	ANGLE ON RAILLY, her eyes speaking to the boy across the crowded
	concourse.

	ANGLE ON YOUNG COLE, overwhelmed by the look.

				FATHER'S VOICE (o.s.)
		Hurry up, son.

	With a last lingering look toward the mysterious BRUNETTE, YOUNG
	COLE turns away, tears welling in his eyes.  WE MOVE IN...CLOSE...
	CLOSE...CLOSER...on his eyes.  WE WANT TO KNOW WHAT THE TEAR MEANS,
	BUT THERE IS NO WAY TO TELL.  WE DON'T KNOW WHAT HE IS THINKING,
	BUT WE KNOW VERY WELL WHAT HE WILL REMEMBER!

				MOTHER'S VOICE (o.s.)
		Pretend it was just a bad dream, Jimmy.

	INT.  747 CABIN - DAY

	DR. PETERS closes the door to the overhead luggage rack
	containing his Chicago Bulls bag and takes his seat.  Next to
	him, a FELLOW TRAVELER, unseen, says...

				FELLOW TRAVELER'S VOICE (o.s.)
		It's obscene, all the violence, all the
		lunacy.  Shootings even at airports now.
		You might say...we're the next endangered
		species...human beings!

	CLOSE ON DR. PETERS, smiling affably, turning to his neighbor.

				DR. PETERS
		I think you're right. sir.  I think
		you've hit the nail on the head.

	DR. PETERS' POV:  the FELLOW TRAVELER, a silver haired gentleman
	in a business suit, offering his hand congenially.  DR. PETERS
	doesn't know who this man is, but we do.  It's the ASTROPHYSICIST!

				ASTROPHYSICIST
		Jones is my name.  I'm in insurance.

	EXT.   PARKING LOT/AIRPORT

	As YOUNG COLE'S PARENTS (seen only as sleeves and torsos) usher
	YOUNG COLE into their station wagon, the boy hesitates, looks
	back, watches a 747 climb into the sky.

							FADE OUT:


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
