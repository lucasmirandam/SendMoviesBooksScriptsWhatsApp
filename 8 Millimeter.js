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

 









eight millimeter


written by
Andrew Kevin Walker










                          5/06/97
                          first










INT.  MIAMI AIRPORT, TERMINAL -- DAY

Amongst the weary tourist families and solitary businessmen
sits TOM WELLES, middle-aged, hair neat, suit crisp and
gray.  He's eating crackers from a cellophane package,
sipping soda from a paper cup, watching an ARRIVAL GATE.

AT THE GATE

PASSENGERS arrive: the paunchy, graying men of First Class
leading the pack, except for a handsome YOUNG REPUBLICAN
poster boy hurrying along.

ACROSS THE TERMINAL

Welles gets up and FOLLOWS...

EXT.  MIAMI AIRPORT, CURBSIDE -- DAY

Welles comes outside, squinting in the sun, moving down the
sidewalk, looking back over his shoulder...

The Young Republican is lead to a waiting LIMO by a DRIVER.

Welles moves to the nearby TAXI STAND...

INT.  TAXI -- DAY

Welles gets in, turning in his seat to watch behind.

 CAB DRIVER
Where to?

Welles keeps watching, sees the limo pull away and pass.

 WELLES
Follow that limousine.  Don't get
too close, don't let it get too far
away.  Just keep with it.

 CAB DRIVER
You kidding?

 WELLES
Nope.

The cab set in motion.  Welles takes out cigarettes,
lighting one, takes out a small NOTEPAD and makes notations.

 CAB DRIVER
Uh, listen... you're not supposed to
be smoking in here.  I'm sorry,
that's company policy...

 WELLES
How about this... every cigarette I
smoke, I give you five dollars?

 CAB DRIVER
Okay... okay, yeah, that'd be good...


EXT.  MIAMI BEACH, "GOLD COAST" -- DAY

In front of an Art Deco hotel, the driver opens the
limousine door and the Young Republican steps out. 

ACROSS THE STREET 

Welles watches from inside the double-parked taxicab. 


EXT.  MIAMI BEACH MOTOR LODGE -- DAY 

Not exactly four-star.  "AD LT MOVIES EVERY ROOM." 

INT.  MIAMI BEACH MOTOR LODGE -- DAY

Welles is asleep on the bed, full dressed, hands folded
across his stomach, snoring lightly, sweaty. 

INT.  MIAMI BEACH MOTOR LODGE, RESTAURANT -- DAY 

Welles sits alone at the bar, eating a sandwich, bored.  He
watches some fuzzy ESPN on the t.v., looks at his watch. 

EXT.  MIAMI BEACH MOTOR LODGE -- DAY 

Welles walks across the parking lot, gets into his RENTAL
CAR, starts it and drives away. 


EXT.  MIAMI BEACH DISCOTHEQUE -- NIGHT 

Young Republican and a GAUDY WOMAN exit the disco, MUSIC
THROBBING out from the doors behind them.  They join hands,
drunk, heading to the street, looking for their limo. 

DOWN THE STREET

Welles is seated in his parked rental car, raises a CAMERA
with TELEPHOTO LENS: whir, CLICK, whir, CLICK, whir, CLICK...
Welles lowers the camera, letting out a yawn. 


INT.  AIRPLANE, COACH -- NIGHT 

The familiar DRONE of flight.  Welles is shoehorned into his
aisle seat, using tiny utensils to eat his tiny meal.

An OLDER WOMAN arrives in the aisle.  Welles picks up his
tray, closes his tray table, unbuckling his seatbelt,
struggling to get up... finally successful, balancing his
tray, letting the woman in to the window seat. 

 OLDER WOMAN 
Thank you. 

Welles nods, forcing a smile, sitting back down.  He returns
to toiling over his miniature supper. 


EXT.  HARRISBURG INTERNATIONAL AIRPORT -- NIGHT 

Welles' AIRPLANE ROARS down with a SCREECH, landing lights
gleaming.  The airport is small, relatively isolated.

TITLE:      Harrisburg, Pennsylvania

INT.  HARRISBURG INTERNATIONAL AIRPORT -- NIGHT

Passengers arrive.  Welles is with them, searching the few
PEOPLE waiting in the terminal hallway.  Welles smiles...

Welles' wife, AMY, smiles when she sees him.  She's plain
and pretty, holding one hand on a BABY STROLLER beside her.
Welles comes to her, embracing her, appreciating her.

 AMY
Welcome home.

 WELLES
Do you know how much I missed you?

They kiss, but Amy pulls away, sniffs him.

 AMY 
What's this... have you been
smoking... ? 

 WELLES 
Smoking?  I'm not smoking. 

 AMY 
Your clothing reeks of it. 

 WELLES 
You know, Amy, I've been sitting
around in bars and everywhere
following this guy... I mean, is
this what I get first thing?  Before
you even "hello," you accuse me... ?

 AMY 
I'm not accusing you... 

 WELLES 
Well, I'm not smoking, okay? 

 AMY 
Okay, I believe you. 

 WELLES 
We've been all through that.  I've
been on my best behavior.

Welles bends to the stroller, picks up his infant daughter,
CINDY, and hoists her in the air, overjoyed. 

 WELLES 
Hello, pumpkin-head, did you miss
me?  I sure missed you... 

He kisses the happy child, holding her in one arm. 

 WELLES 
Let's get my bags and get the hell
out of here. 

Welles pulls Amy close and kisses her again, leads the way.
Amy follows, pushing the stroller. 

 AMY 
How's the detective business?

 WELLES 
Business was fine.  I'll tell you
what, you couldn't pay me enough to
live down there. 

 AMY 
You better not be smoking, that's
all I can say. 

 WELLES 
Honey, I'm not, please... 

Amy takes Welles hand, smiling at him. 


INT.  WELLES' HOUSE, BEDROOM -- NIGHT

Welles and Amy make love in the darkness.  Standard,
missionary position sex, little passion.  They slow to a
finish, uneventfully, holding each other.  Their breathing
quiets.  Their daughter CINDY can be HEARD CRYING elsewhere.

Welles kisses his wife again, rolls off of her and sits on
the edge of the bed.  Amy covers herself. 

 AMY
I love you.

 WELLES
I love you. 

He looks towards her in the dark.  He gets up, gets a towel
from the bathroom and wraps it around him. 

INT.  WELLES' HOUSE, BABY'S ROOM -- NIGHT 

Cindy's crying.  Welles enters, goes to lean into the crib.

 WELLES 
What's all the trouble, Cinderella?
What are you crying about, huh? 

He lifts and cradles Cindy, comforting her. 


EXT.  HARRISBURG CITYSCAPE -- ESTABLISHING --DAY 

A small city of moderate architecture facing the Susquehanna.

INT.  OFFICE -- DAY 

An old money office with windows over the river.  A well-to-
do POLITICIAN looks unhappily through PHOTOS on his desk.
Welles sits by the Pennsylvania state flag, watching.

PHOTOS show the Young Republican and Gaudy Woman in Miami:
leaving the Art Deco hotel, the Discotheque, a restaurant...

 WELLES 
Your son-in-law dealt with the dry
cleaning franchise during the day,
saw that woman every night. 
(clears his throat) 
The specifics are in the report, and
information about the woman.  It's
unpleasant, I know.  I apologize... 

 POLITICIAN 
None too discreet, is he? 

 WELLES 
No, sir, he is not. 

 POLITICIAN 
He's an imbecile.  I tried to warn
my daughter, but what can you do? 

The politician shakes his head in disgust.  Welles rises. 

 WELLES 
The um... you'll find my invoice in
the envelope. If that's all...

 POLITICIAN 
Yes, Mister Welles, thank you. 

 WELLES 
Certainly, Senator.  If I can ever
be of further assistance.

Welles leaves, glances back, shuts the door. 

EXT.  HARRISBURG STREETS -- DAY 

Welles drives his plain Ford past the CAPITAL BUILDING. 

EXT.  HARRISBURG, BRIDGE -- DAY 

Welles' car crosses the Susquehanna, leaving the city. 

EXT.  WELLES' HOUSE, BACKYARD -- DAY 

Sunny day.  Welles wears tan khakis, T-shirt and fishing
cap, mowing his lawn with his ROARING lawnmower.  Welles'
yard is modest, surrounding his modest split level suburban
one in a neighborhood of similar homes and similar yards.

Welles turns the lawnmower, stopping to mop his brow.  One
of his neighbors is repainting a back porch.  The neighbor
waves.  Welles waves, resumes mowing. 


INT.  BOWLING ALLEY -- NIGHT

MUSIC'S LOUD.  League Night.  Every lane full.  Welles is
with his team in BOWLING SHIRTS.  Welles hoists his ball,
preparing to bowl.  He takes three steps, releases...

Down the lane, PINS SCATTER.  One pin remains standing.

Welles balls up his fists and curses, walks back towards his
rowdy, mocking teammates.  He shouts back at them, laughing,
grabbing his beer and drinking, waiting at the ball return. 

INT.  WELLES' HOUSE, KITCHEN -- NIGHT 

Dinner.  Welles and Amy eat at the kitchen table with Cindy
in a high chair.  Amy feeds Cindy between bites.  Welles is
still in his league shirt. 

 AMY 
You think you'll have time for the
water heater this weekend?

 WELLES 
Sure.  I'll call the guy. 

 AMY 
You're not using the same guy who
tried to fix it? 

 WELLES 
I'm not using him again for
anything.  He was worthless. 
(eating)
You have bridge here Saturday? 

 AMY 
Betty's out of town so we're playing
next week. 

Welles nods, eating.  He watches Amy feed Cindy.  The PHONE
starts RINGING.  Welles goes to answer it. 

 WELLES 
(into PHONE) 
Hello.  Yes... could you hold on a
minute...?

Welles hands the phone to Amy, pats Cindy's head as he heads
downstairs, through the LIVING ROOM... 

INT.  WELLES' HOUSE, OFFICE -- NIGHT

Welles enters his well kept OFFICE, turns on a light at the
desk.  The room is filled with FILE CABINETS and shelves of
BOOKS, hundreds of PHONE BOOKS and a COPY MACHINE.  Welles
picks up the phone and cups the receiver. 

 WELLES 
(shouts upstairs)
Okay, I've got it.
(into phone)
Hello... sorry, I was switching
phones.  It's a pleasure to make
your acquaintance, Mrs. Christian.
(listens)
Yes.  Yes, I understand... tomorrow
evening should be fine...

Welles listens, clears space on his desk, taking notes. 


EXT.  CHRISTIAN COMPOUND -- DUSK 

A huge OLD WORLD MANSION is situated at the center of acres
of Pennsylvania forest and vast gardens.  Welles' car heads
down a long tree lined drive, to the dark mansion. 

INT.  CHRISTIAN HOUSE, HALLWAY -- NIGHT 

Welles follows a BUTLER down a long hall. 

INT.  CHRISTIAN HOUSE, LIBRARY -- NIGHT 

The butler shows Welles in, shuts the door.
Towering SHELVES of BOOKS are serviced by ladders.  Far
across the room, an old, sad woman, MRS. CHRISTIAN, sits
waiting with a tall, thin, sinister ghoul of a LAWYER.

 MRS CHRISTIAN 
Mister Welles. You're very prompt.   

 WELLES 
I try to be.

Welles crosses towards them. It takes a while. 

 MRS CHRISTIAN 
I appreciate your coming on such
short notice. 

Mrs. Christian holds out her hand and Welles takes it. 

 MRS CHRISTIAN
This is Mister Longdale, my late
husband's attorney. 

Welles shakes Longdale's limp hand, looking him over. 

 WELLES 
Uh huh, pleasure. 

 MRS CHRISTIAN 
Apparently Mr. Longdale has
something he feels he simply must
say before you and I speak.

 LONGDALE 
Yes, I do have something to say.  I
insisted on being here as soon as I
heard Mrs. Christian contacted you. 

 WELLES 
I'm listening. 

 LONGDALE 
As Mr. Christian's attorney and one
of the executors of his estate, it
concerns me that a meeting of this
sort should take place without my
being asked to attend. 

 WELLES
Of what sort? 

 LONGDALE
You are a private investigator? 

 WELLES 
That's right. 

 LONGDALE 
Well, whatever reasons Mrs.
Christian has for engaging the
services of a private investigator,
I should certainly be a party to.
But, since she feels differently, I
can only go on the record as having
expressed my adamant disapproval. 

 MRS CHRISTIAN 
Yes, how theatrical.  So you've gone
on the record, and now perhaps you
should just be gone. 

Longdale's irritated, but has no choice.  He walks away. 

 MRS CHRISTIAN 
Have a pleasant evening. 
(to Welles) 
Will you have tea, Mister Welles? 

 WELLES
Thank you. 

Mrs. Christian begins pouring tea from the service on a
table.  Welles watches Longdale exit. 

 WELLES 
He's odd.

 MRS CHRISTIAN 
He's a lawyer.
(offers tea)
Please, sit, here...

Welles accepts a dainty tea cup and saucer, taking a seat.

 MRS CHRISTIAN 
I've spoken to friends of mine and
my husband's, in Harrisburg, in
Lancaster and Hershey.  Asking about
you.  I must say you have friends in
influential places. 

 WELLES
I've been privileged to provide
services for people I admire.

 MRS CHRISTIAN 
You are highly recommended.  Praised
for your discretion... your strict
adherence to confidentiality. 

Welles nods, sipping tea. 

 MRS CHRISTIAN 
As you know, my husband passed away
recently.  Two weeks ago now.

 WELLES 
My condolences. 

 MRS CHRISTIAN 
His passing has left me with...
something of a dilemma.  A terrible,
terrible dilemma. 

 WELLES 
I'll do whatever I can to help. 

Mrs. Christian studies Welles.

INT. CHRISTIAN HOUSE, MR CHRISTIAN'S OFFICE -- NIGHT

Mrs. Christian and Welles enter.  This office has been lived
in for a lifetime.  Giant DESK.  AMERICAN FLAG.  Walls
covered in old b+w PHOTOGRAPHS and ACHIEVEMENTS. A large,
baked enamel sign nailed up, "CHRISTIAN STEEL." 

 MRS CHRISTIAN 
His inner sanctum. 

Welles looks up at the OIL PAINTING over the fireplace: MR.
CHRISTIAN, a powerful, old man, posed with a dark, teeming,
industrial landscape behind him. 

 MRS CHRISTIAN 
Not many people have been inside
this room. 

Welles examines PHOTOS of Mr. Christian visiting various
STEEL PLANTS, COAL MINES and ground-breaking ceremonies,
shaking hands with WORKMEN, with POLITICIANS. 


 WELLES 
Pittsburgh? 

 MRS CHRISTIAN 
Mostly.  That's where he started his
empire building.
(looks up at portrait)
He was a good man.  Notorious as an
eccentric, but that was something he
cultivated.  He wanted to be
legendary.

 WELLES 
He succeeded. 

 MRS CHRISTIAN 
We were married forty-five years.
Hard even for me to imagine.  We had
our troubles.  There were plenty of
places for him to be other than
here, but he was always loyal to me,
and I to him.  I loved him deeply.

Welles waits. 

 MRS CHRISTIAN 
Do you carry a gun, Mr. Welles? 

 WELLES 
I wear a gun when I can tell a
client expects me to.  Other than
that, there's never any reason. 

 MRS CHRISTIAN 
Just curious. 

Mrs. Christian crosses to take down a PICTURE, revealing a
WALL SAFE.  The safe is ajar, burnt and scarred, broken into.

 MRS CHRISTIAN 
My husband was the only one with the
combination to this safe.  I knew
about it, but as far as I was
concerned it was none of my
business.  Not till now, that is. 

 WELLES 
You hired someone to open it.  I'll
bet the lawyer loved that.

 MRS CHRISTIAN 
There was nothing he could do.  My
husband left everything to me.
(looks at safe)
I prevented anyone from seeing the
contents.  I felt these were my
husband's private things.  I
didn't... I didn't realize... 

 WELLES 
Do you want to tell me what you
found? 

 MRS CHRISTIAN 
Cash, stock certificates, and this...

She takes something from her pocket, puts it on the desk: a
plastic bag containing a short 8MM FILM on a plastic reel.

 MRS CHRISTIAN 
It's a film... of a girl being
murdered. 

 WELLES 
I'm afraid I don't... 

 MRS CHRISTIAN 
This is a movie showing a girl being
murdered.  She's sitting on a bed,
and a man rapes her... and he begins
to cut her with a knife...
(pause)
I only watched what I could.

Welles picks up the film, looks at it. 

 MRS CHRISTIAN 
I didn't know what to think.  I
can't tell you how horrible it's
been, to know this belonged to my
husband.  To know that he watched
this... this atrocity.  But, I can't
go to the police...

 WELLES
Mrs. Christian... please, will you
sit down a moment? 
(leads her to a chair) 
I want you to listen carefully.
What you're talking about is a
"snuff film."  But, from what I
know, snuff films are a kind of...
urban myth.  Like, red light
district folklore.  There's no such
thing, I can assure you. 

Mrs. Christian shakes her head. 

 WELLES 
Please, believe me.  This is
probably a stag film.  Simulated
rape.  Hard to stomach, and it might
seem real, but there are ways of
making it look realistic... fake
blood and special effects...

 MRS CHRISTIAN 
No. 

 WELLES 
If you were to study it you'd see
the camera cutting away... you'd see
the tricks they can play...

 MRS CHRISTIAN 
I'm telling you it's not that. 

 WELLES 
I'm sure it is. 
(smiles) 
It's probably something your husband
was given as a bad joke.  More than
likely he never even watched it. 

 MRS CHRISTIAN 
Will you watch it and see for
yourself? 

 WELLES 
Of course.  But, I'm certain it's
nothing to worry about. 


INT.  CHRISTIAN HOUSE, DINING ROOM -- NIGHT 

An 8MM PROJECTOR faces a wall.  Welles looks back to Mrs.
Christian in the doorway.  Mrs. Christian leaves, shuts the
door.  Darkness.  Welles turns on the projector and sits.
The PROJECTOR CLATTERS, shooting bright images...

ON THE WALL: FLASH FRAMES, over exposure, then... the grainy
FILM is HAND HELD, constantly in motion, showing a skinny
GIRL, 16 or 17, in a negligee, sitting on a bed in a
nondescript room with little furniture.  Looks like a hotel
room.  We only ever see three walls.  The once beautiful
girl looks worn, drugged, dark circles under her eyes,
staring blankly.  The CAMERA'S tungsten SPOTLIGHT casts
long, shifting shadows as the camera moves, but the girl
still stares oblivious.  The bed is wrapped in PLASTIC and
DUCT TAPE.  The floor is covered by PLASTIC SHEETING...

Welles watches, crossing his arms, already uncomfortable.

ON THE WALL: a door opens behind the girl, looks like a
bathroom, and a MASKED MAN enters.

The Masked Man wears a garish, Mexican WRESTLING MASK with
eye holes and a mouth.  The mask covers his entire head.
He's naked except for red shorts, his body scrawny, oiled,
pale.  The man goes to stand in front of the girl.  He seems
to be saying something to her, but the film is silent and
the ONLY SOUND is the PROJECTOR'S LOUD sprocket hole
CLATTER.  It's all one long take.  The CAMERA MOVES to favor
the girl...

Welles sits straight in his chair, wary.

ON THE WALL: Masked Man raises his open hand and SLAPS the
girl, knocking her back on the bed...

Welles grimaces.

ON THE WALL: Masked Man pulls the girl back to a seated
position.  The girl's like a rag doll, face reddened, eyes
closed, but she remains upright.  Masked Man uses his thumbs
to open her unseeing eyes.  He touches her mouth with his
fingers, presses his lips to hers.  Then, Masked Man backs
away, leaving frame, till the CAMERA MOVES to find Masked
Man standing at a table with THREE large BOWIE KNIFES laid
out.  Masked Man runs his fingers over the blades...

Welles rises slowly, still watching.

ON THE WALL: Masked Man selects a huge Bowie knife and moves
back towards the girl...

Welles crosses his arms tight, disbelieving, fearful.
WE WILL NEVER SEE WHAT HAPPENS NEXT IN THE FILM, but Welles
does.  In the flickering, reflected light, Welles backs
involuntarily away from the horrible images, holding his
fist to his mouth, breathing hard.

Welles keeps backing away, till he's backed against a wall.
The PROJECTOR'S CLATTERING.  Welles is sickened, sweating,
still watching, till he finally shuts his eyes.

INT.  CHRISTIAN HOUSE, ADJOINING ROOM -- NIGHT

Silence.  Mrs. Christian sits waiting, troubled.
The door to the dining room opens and Welles enters from the
dark, visibly shaken.  Mrs. Christian watches him, her
sorrow now shared.

 WELLES
You... you need to go to the police. 

 MRS CHRISTIAN 
I told you I can't, not yet. 

 WELLES
You don't have any other choice. 

 MRS CHRISTIAN 
(stands, shakes her head) 
No.  For me to live with the ruin of
my husband's name, I need know that
whoever did this will be punished.
If you can find them, I will take
their names to the police.  I'll say
my husband confessed on his death
bed. I'll say I didn't have courage
to come forward at first...

 WELLES 
It won't work like that.

 MRS CHRISTIAN 
Any evidence you collect can be
given to the police later,
anonymously.  I've thought about it
and there's no other way.  If you
can't find them... if the only thing
that comes from this film is that
this is all my husband will be
remembered for, well I can't let
that happen.  I'm telling you I
won't.  If there's no chance that
poor girl's memory can be served,
then I'll just have to spend my last
days trying to forget her. 

Welles sits, rests his head in his hands. 

 WELLES 
I deal in divorce cases.  Corporate
investigations...

 MRS CHRISTIAN 
You've found missing persons before. 

 WELLES 
Nothing remotely like this. 

 MRS CHRISTIAN 
I know what I'm asking.  Your
compensation will be appropriate to
the risk.  You'll need cash to buy
information, and I'll provide it.
(pause)
I feel responsible, Mr. Welles.
(pause)
You saw what he did to her.

Welles stands, torn apart and uncertain, looks back to the
dining room where the projector sits idle.


INT.  WELLES' HOUSE, BABY'S ROOM -- NIGHT

Cindy is sound asleep in her crib.
Welles is seated near, staring at his sleeping child.

INT.  WELLES' HOUSE, BEDROOM -- NIGHT

Welles digs in piles of SHOEBOXES and BOOKS on the floor of
his cluttered closet, finds what he wants: a LOCK BOX.

INT.  WELLES' HOUSE, KITCHEN -- NIGHT

Welles twists the lock box dial's combination, opens the box
to reveal his GUN, HOLSTER and CLEANING SUPPLIES.  Welles
takes out the gun, cleaning it.  Amy watches.

 WELLES 
This is the mortgage.  This is
Cindy's college money. 

 AMY
I understand.

 WELLES 
Sometimes you can't know what I'm
doing.  It's better that way.

 AMY
I know.

 WELLES 
It's a missing persons case... a
long shot.  I'll give it two months,
two months at most, then I'll be
back.  We'll take a vacation.

 AMY
Why the gun? 

 WELLES 
I'm not gonna need it.  I won't even
wear it.  It's a precaution.
(cleaning gun)
Don't worry about me.


INT.  WELLES' HOUSE, OFFICE -- NIGHT

Welles looks through one file cabinet.  He pulls out a FILE.
It contains all sorts of POLICE ARTIST SKETCHES.  Welles
finds one of a TEENAGE GIRL with dark hair, looks at it.

Welles positions the sketch on his COPY MACHINE, hits copy.

EXT.  WELLES' HOUSE, DRIVEWAY -- MORNING

Welles loads BOXES and a SUITCASE into his car's back seat.

Welles puts the lock box in the car's trunk, in a hiding
place beside the spare tire.  He places a brown BRIEFCASE on
top, covers them both with carpet.  He closes the trunk.

EXT.  PENNSYLVANIA TURNPIKE -- MORNING 

Little traffic.  Welles' Ford races down the highway.


EXT.  CLEVELAND CITYSCAPE -- ESTABLISHING -- DAY

City skyline, overcast.  Looks like rain.

TITLE:       Cleveland, Ohio

EXT.  CLEVELAND STREETS -- DAY

Welles' car moves slowly in a not-so-great neighborhood.
Welles leans forward, peering through the windshield...

An APARTMENT BUILDING'S crooked SIGN lists "WEEKLY RATES."

INT.  WELLES' ROOM, CLEVELAND -- DAY

Dingy room.  Welles locks the door, puts the chain on. His
suitcase and boxes are on the bed.  He begins unpacking,
taking a PHOTO ENLARGER from one box and an 8MM PROJECTOR.

INT.  WELLES' ROOM, BATHROOM -- DAY

The developer's on the toilet.  DEVELOPING PANS are on the
floor, developer bath, stop bath and fixing bath, with
BOTTLES of CHEMICALS and packages of PHOTO PAPER.  Welles
uses tape and ALUMINUM FOIL to black-out a window.

INT.  WELLES' ROOM -- DAY

Pizza box on the bedside table.  Welles' suits hang in the
closet.  Welles sits facing a small REEL TO REEL on a desk.
He wears white gloves, handles the 8MM FILM, careful to hold
it by the edges, holding it up to the light, squinting.

Welles puts in a magnifying EYEPIECE, leaning close...

WELLES' P.O.V. THROUGH MAGNIFYING LENS: studying the first
few inches of exposed film, coming upon TINY LETTERS printed
just below the sprocket holes: "SUPRAlux 544."

INT.  WELLES' ROOM, BATHROOM -- DAY

RED BULB in the light socket.  Welles threads the 8MM FILM
into his enlarger, still in white gloves.

He flicks the enlarger on, projecting a sideways IMAGE down
onto the enlarger's baseboard, FOCUSING... it's the girl
sitting on the bed, early in the snuff film.

Welles makes an adjustment to the enlarger's lens; framing
tighter on the girl's face, REFOCUSING.

INT.  WELLES' ROOM -- NIGHT

Welles comes out of the makeshift darkroom, holding a PHOTO
of the girl.  He props the photo up on a dresser, stands
looking at it.  Sad girl, staring forward.

Welles goes to pick up his CELLULAR PHONE, dials.

 WELLES 
(into phone) 
Hello, honey, it's me.
(listens)
I'm fine, how are you?

Welles listens.  He turns to look at the girl's photo.

                  FADE TO BLACK:

EXT.  OFFICE BUILDING, MISSING PERSONS ARCHIVE -- DAY

Nondescript.  "U.S. Resource Center for Missing Persons."

INT.  MISSING PERSONS ARCHIVE, OFFICES -- DAY 

Small.  Cubicles.  Employees work phones and computers.
BULLETIN BOARDS are covered in FAMILY PHOTOS, Polaroids and
familiar "HAVE YOU SEEN ME?" missing person/children POSTERS.

IN ONE CUBICLE, Welles opens his billfold, shows his
identification: a laminated "LICENSED INVESTIGATOR,
Commonwealth of Pennsylvania", with WELLES' PHOTO...

The DIRECTOR of the center, a tired looking official in
bifocals, studies the card.  Welles sits.

 DIRECTOR 
What can I do for you, Mr. Welles?

 WELLES 
Call me Tom.

 DIRECTOR 
Alright, Tom.

 WELLES
What I'd like, very simply, is
access to your archive.  And, now I
understand this isn't something you
normally do for private citizens...

 DIRECTOR 
There are reasons for the way we do
things here.

 WELLES 
Absolutely.  Of course I'll abide by
whatever decision you make, but I'd
appreciate if you'll hear me out... 

The director sits back in his chair.

 WELLES 
Few days ago, I was contacted by a
couple living in Philadelphia, a
doctor and his wife.  What happened
was they picked up a young girl
hitchhiking off 81, which heads into
Philadelphia, started up a
conversation with this girl, she
looked homeless, seemed about
eighteen maybe.  They convinced her
to let them buy her a meal in the
city.  Nice kid, mature, didn't have
much to say, but they got a sense
she's a runaway, so all through
dinner the doctor's working on her,
trying to convince her that at the
very least she should pick up a
telephone.  Not surprisingly, she
ate her food, excused herself...
(snaps fingers)
That's the last they saw her.  The
reason they came to me for help, the
reason I'm coming to you, is we had
a friend of mine in the department
work up a sketch...
(shows the POLICE ARTIST
SKETCH he photocopied)
They want to see if I can I.D. this
girl, somehow pass along a message
to let the parents know the kid's
alive, doing alright.

 DIRECTOR 
Why not go to the N.C.I.C. or
N.C.M.E.C.? 

 WELLES 
I figured you share information. 

 DIRECTOR 
We do. 

 WELLES 
For whatever reasons I thought you
might be more receptive.

 DIRECTOR 
Why don't they come to me? 

 WELLES 
This doctor and wife, they're nice
people, but they don't want to get
too involved.  They're not trying to
have the parents come looking for
the girl either. 
You and I both know sometimes, not
often, but sometimes there's real
reasons why a kid'll run. 
Molestation, whatever.  Besides
that, the girl's probably eighteen,
so she's legal.

 DIRECTOR 
I'm not so sure about this. 

 WELLES 
They're putting themselves in place
of this kid's parents and thinking
they'd want to hear their girl's
okay, even if that's all they hear. 

 DIRECTOR
I can give you my card, if your
clients want to call me... 

Welles accepts a CARD, disappointed.

 WELLES 
They were pretty clear they didn't
want this coming back on them.

 DIRECTOR 
Well, that's all I can do.  Sorry. 

Welles looks at the director, stands, hangs his head.

 WELLES 
Who knows... maybe she's already
given her parents a call, right?

Welles leaves. 

EXT.  OFFICE BUILDING, MISSING PERSONS ARCHIVE -- DAY

Welles comes out the front doors, pissed.

 WELLES 
Fuck.

He tears the card in half and drops it as he heads for his
car.  After a moment, the director comes out after him...

 DIRECTOR 
Excuse me... Tom, hold on...

Welles looks back, walks back, glances down...
makes sure he stands on the torn card, hiding it underfoot.

 DIRECTOR
Listen, maybe I can help after all.
Why don't you come on back in...
we'll see what we can do. 

INT.  MISSING PERSONS ARCHIVE, FILE ROOM -- DAY

Director leads Welles into this RESEARCH ROOM, a small
library with long tables, old COMPUTERS, lots of FILE
CABINETS and CARD CATALOGS.  Secretaries tend to the files.

 DIRECTOR 
This is it.  It's not much. 
(points at computers) 
We've got less than five percent on
computer and we lose that funding in
December.  I'll have someone show it
to you anyway.  Other than that, I'm
afraid it's the wet thumb method.

Welles looks to the many, many file drawers. 

 DIRECTOR 
Files are mostly by state and year
of disappearance.  We try to keep
the children and adults separate.
No eating or smoking in here, but
there's a coffee machine in the hall.

 WELLES 
Any good?

 DIRECTOR
It's horrible, but it'll be your
best friend after a few days.  I
hope you realize what kind of long
shot you're chasing after. 

 WELLES
You're gonna be seeing a lot of me.
You're sure you don't mind?

 DIRECTOR 
It's good what you're doing.

The director puts out his hand.  Welles looks, shakes.


INT.  MISSING PERSONS ARCHIVE, FILE ROOM -- DAY -- MONTAGE

ON A COMPUTER SCREEN: files open and close -- PICTURE after
PICTURE of a MISSING CHILDREN, mostly teenagers, each with
physical description, age, date of disappearance, etc.  Lost
souls, although these are posed portraits, high school
yearbook photos and vacation photos, so the children are
mostly smiling, happy and healthy. But, all "MISSING."

Welles works the computer keyboard and mouse...

ON THE SCREEN: the FACES of TEENAGERS, boys and girls, one
after the other, MISSING... MISSING... MISSING...


INT.  CLEVELAND PUBLIC LIBRARY -- DAY -- MONTAGE

Welles searches the SHELVES of the LIBRARY.  He begins
taking down various books...

"Motion Picture Photography."  "Film Stocks and Physical
Characteristics."  "Super 8 Filmmaking."

INT.  CLEVELAND PUBLIC LIBRARY -- LATER -- MONTAGE

In Welles' notepad: "SUPRAlux 544."
Welles sits paging through technical photography books. 


INT. WELLES' ROOM -- NIGHT -- MONTAGE

Welles has the 8MM FILM threaded through the projector.  He
turns the CLATTERING projector on and sits, watching.

ON THE WALL: FLASH FRAMES, then... the skinny GIRL in a
negligee, sitting on the bed.  The CAMERA'S SPOTLIGHT casts
long shadows.  The girl stares, oblivious...

ON THE WALL: a door opens behind the girl, looks like a
bathroom, and the MASKED MAN enters, wearing the ghastly
WRESTLING MASK.  The man goes to stand in front of the
girl.  He seems to be saying something.  The FILM halts.

Welles sits forward, hand on the projector.  He's seen
something.  He PLAYS the FILM in REVERSE...

ON THE WALL: the Masked Man walks backwards, away from the
girl, backwards into the bathroom, door shutting...

Welles stops the projector, not taking his eyes from the
image.  He ADVANCES the film FRAME BY FRAME...

FRAME BY FRAME... as the bathroom door opens, and the Masked
Man enters... FRAME BY FRAME... as the Masked Man moves
forward... door closing behind him... STOP...

FREEZE FRAME: a THIRD MAN is reflected in the bathroom
mirror.  Grainy and blurred, but he's in the room with the
girl, standing there, captured in the mirror in this one
brief instant just before the bathroom door closes.

Welles walks to take a closer look, studying the almost
ethereal image of the Third Man.


EXT.  CLEVELAND STREET CORNER -- DAY -- MONTAGE

Welles is in a PHONE BOOTH, feeds many quarters into the
phone, waiting, looking at his notepad. 

 WELLES
(into PHONE) 
Hello, Mrs. Christian?  Tom Welles.
Here's where we stand.  I checked
the film stock and it's called Supra-
lux 544.  The company that made that
stock discontinued it in '92...
(listens)
Yeah, about five or six years ago.
Anyway, do what you can to dig up
your husband's old financial
records, look for anything out of
the ordinary...

INT.  MISSING PERSONS ARCHIVE, FILE ROOM -- DAY -- MONTAGE

Welles is back at the computer, alone, drinking coffee.
ON THE COMPUTER: endless PHOTOS of MISSING CHILDREN.
The PHONE CALL CONTINUES in VOICE OVER:

 WELLES (V.O., cont)
Nobody really uses eight millimeter
film anymore, so we can assume there
are reasons our guys did.  First,
they could develop it themselves if
they had any sort of expertise.
Obviously, this isn't the kind of
movie you can just drop off at the
one-hour photo...

INT.  WELLES' ROOM -- NIGHT -- MONTAGE

Welles just stands, staring at the PHOTO of the GIRL.

 WELLES (V.O., cont)
Second, the film that went through
the camera is what we've got.
There's no negative.  Unlike video,
it wasn't meant to be duplicated.
No reason for them to risk having
more than one copy of their murder
floating around...

INT.  CLEVELAND BAR -- NIGHT -- MONTAGE

Local bar.  Welles sits drinking with the archive's
director, talking, smiling at something the director said.

 WELLES (V.O., cont)
There don't seen to be many
fingerprints on the film itself, but
I'm going to have to be careful to
leave them intact...

INT.  MISSING PERSON ARCHIVE, FILE ROOM -- DAY -- MONTAGE

Welles is tired, unshaven.  He's moved on to the physical
files, at one table, looking through HUNDREDS of MISSING
PERSON BULLETINS.  Secretaries tend to other files. 

 WELLES (V.O., cont)
It's okay for yours and your
husbands fingerprints to be on the
film, but you'll have to use me as
a middleman if you go to the police.
That way I don't have to explain why
my prints are on it...

INT.  WELLES' ROOM -- DAY -- MONTAGE

Welles sits with the PROJECTOR ON, watching the film again.

 WELLES (V.O., cont)
There were three men.  Two are
obvious; the man in the mask and the
man running the camera, but I caught
a glimpse of a third man in a
mirror.  It's nothing that can be
used for identification, but he was
there, watching...

ON THE WALL: Masked Man touches the girl's mouth, presses
his lips to hers.  Masked Man backs away, leaving frame,
till the CAMERA MOVES to find Masked Man standing at a table
with THREE large BOWIE KNIFES laid out...

Welles notices something, puts the projector on FREEZE FRAME.

 WELLES (V.O., cont)
So, there were three.  They would
have kept it small, wouldn't have
let anyone in on it they didn't have
to.  That's all for now... except,
I feel I should tell you... with
this looking like it happened at
least five or six years ago...

Welles walks to the frozen IMAGE on the wall.  It shows the
Masked Man's hands in frame, fingering the blades.

 WELLES (V.O., cont)
Well, it's not very likely we'll
ever find out who this girl was. 
(listens) 
I will, I'll keep trying. Goodbye.

V.O. PHONE CALL ends with the SOUND of the PHONE HANGING UP.

ON THE WALL: there's a DARK SPOT on Masked Man's hand, on
the arch between his index finger and thumb.  Grainy and
hard to make out, but looks like a small TATTOO.

INT.  WELLES ROOM, BATHROOM -- NIGHT -- END MONTAGE

Welles has the 8MM FILM threaded into his photo enlarger,
projecting the IMAGE we just saw down onto the baseboard.

He re-frames, CLOSER ON the masked Man's hand, REFOCUSING...
the black spot is a little clearer, looks like a small STAR
tattoo on the back of Masked Man's hand.

INT.  MISSING PERSONS ARCHIVE, FILE ROOM -- DAY

Welles sits hunched over the card catalog, still unshaven,
drinking coffee, flipping through smaller PICTURES of
MISSING CHILDREN in one drawer, one by one by one...

Welles rolls his neck.  He looks to see the archive's
director in the doorway.  The director nods, leaving.
Welles gets back to it, stooped over the catalog.

                  FADE TO BLACK:

TITLE CARD:      three weeks later

EXT.  OFFICE BUILDING, MISSING PERSON ARCHIVE -- DAY

In the lot, Welles gets wearily from his car, smoking.  He
tosses the cigarette, gets a Thermos off the front seat.

INT.  MISSING PERSON ARCHIVE, FILE ROOM -- DAY

Welles pulls out a card catalog drawer labeled "North
Carolina 1992," flipping through picture cards.  The FACES
of TEENAGERS: a happy BOY with blue eyes... a red headed
GIRL with freckles... a ruddy faced BOY... a pretty GIRL
with a ribbon in her hair... a black GIRL in a pink dress...
a blonde haired BOY with curly hair...

Welles furrows his brow.

He backtracks to the pretty GIRL with the ribbon in her hair.

Welles sits straight.  He reaches into his pocket, hands
shaking a little, takes out and unfolds the PHOTO he printed
of the girl from the snuff film.  It's her.

Welles compares the two pictures.  She's prettier in the
card catalog photo, but it's her.

Welles can't believe it, looks around.  Secretaries at other
files don't even know he's there.  Welles pulls out his
notepad, scribbling down INFORMATION off the card...

Writing the girl's name: "Mary Anne Matthews."


EXT.  INTERSTATE HIGHWAY -- NIGHT

Welles, car races past, alone on the dark freeway.

EXT.  FAYETTEVILLE CITYSCAPE -- ESTABLISHING -- DAY

Another small city.  Blue skies above.

TITLE:     Fayetteville, North Carolina

EXT.  PUBLIC LIBRARY -- ESTABLISHING -- DAY

Suburban library.  Kids play hop-scotch in the parking lot.

INT.  FAYETTEVILLE LIBRARY, MICROFICHE ROOM -- DAY

Welles works the MICROFICHE MACHINE, scrolling through old
issues of the LOCAL NEWSPAPER, finds an ARTICLE headlined
"Search Continues for Local Teen."

There's a PICTURE of the GIRL, Mary Anne Mathews; the same
picture Welles found in the Missing Person Archive.

Welles reads the article, writing on a LEGAL PAD.

                  TIME CUT:

NEWSPRINT SCROLLS past on the MICROFICHE MACHINE, till...
"No Leads in Girl's Disappearance."  Same picture.
The date at the top: "July 12, 1992."

                  TIME CUT:

NEWSPRINT BLURS past... stops on a page of OBITUARIES.
Top of the page: "September 4, 1993."

CLOSE ON: "Mathews, Robert Steven, 1948-1993."
"Dead in an apparent suicide, Robert Mathews was discovered
yesterday morning in the basement of..."


EXT.  MATHEWS HOUSE, FAYETTEVILLE SUBURB -- DAY

A tree-lined street of poor, boxy homes.  Welles' car parks
in front of one HOUSE with a neglected lawn.

IN THE CAR

Welles, clean shaven, picks a CLIPBOARD with a file folder
and his legal pad on it, thumbs pages.  He drums his
fingers, opens the glove compartment, pulls out the car's
registration, other papers and "Jiffy-Lube" service reports,
uses them to pad the file.

Welles takes a BOTTLE of COLOGNE from his pocket.  He
considers it, opens the bottle, applies cologne to his neck.

EXT.  MATHEWS HOUSE, FRONT PORCH -- DAY

Welles knocks, clipboard in hand.  A sad, middle-aged woman
answers, MRS. MATHEWS, looking through the screen door.

 MRS MATHEWS
Yes... ?

 WELLES
(smiles)
Hello, Mrs. Mathews, my name's
Thomas Jones, I'm a state licensed
investigator...

Welles holds up his identification only long enough for Mrs.
Mathews to see it looks official.

 WELLES
I've been hired as an independent
contractor by the U.S. Resource
Center for Missing Persons as part
of an internal audit.  If you have
any time over the next few days, I'd
like to make an appointment to ask
some questions about the
disappearance of your daughter.

 MRS MATHEWS
I don't understand, who are... ?

 WELLES
I'm sorry, let me explain, the
R.C.M.P. is a support organization
and archive, not unlike the Center
for Missing and Exploited Children
in Washington.  I'm sure you've
dealt with them before?

 MRS MATHEWS
Yes, but... 

 WELLES 
These volunteer organizations are
sort of interconnected, functioning
hand in hand with law enforcement.
The R.C.M.P. brought me in to review
their investigations...
(holds up clipboard)
... fact-check their records, see if
there's anything they missed,
anything they should be doing
different.  I'm here for a few days,
before I head back up to Virginia.
These reports go to the Justice
Department eventually.  I spoke to
your F.B.I. contact a few days ago,
uh...

Welles pretends to look for the name on a Jiffy Lube page...

 WELLES 
What was the name... ? I've got it
here somewhere...

 MRS MATHEWS
Neil... Neil Cole.

 WELLES
(pretends he found it)
Right, Agent Cole told me he'd call
and let you know to expect me.  He
didn't call?

 MRS MATHEWS
No.

 WELLES
(looking on legal pad)
Well, I'm following up on your
daughter, Mary, height; five four,
weight; hundred ten pounds, brown
eyes, blonde hair.  Born April 24,
1976.  Missing June 11th, 1992.  A
runaway, that's how she's listed.
Is this information correct... ?

Mrs. Mathews stares, nods.

 WELLES
I'm sorry, I know this isn't easy.
Is there a more convenient time... ?
(looks at watch)
Can I buy you lunch, would that be
alright?

Mrs. Mathews looks him up and down.


EXT.  DAIRY QUEEN RESTAURANT -- DAY

Welles and Mrs. Mathews eat at a PICNIC TABLE on the patio.

 WELLES
It's very important you don't let
this raise your expectations.  It's
not going to effect any ongoing
efforts.  All I'm saying is, please
know, I'm not here to create any
false hope.

 MRS MATHEWS
They hired you.  You're like, a
private detective?

 WELLES
That's exactly what I am.

Mrs. Mathews chews, staring off into the distance.

 MRS MATHEWS
I didn't think there were private
detectives anymore, except on TV.

 WELLES
You probably expect me to be wearing
a trench coat and a hat.  Drinking
whiskey, chasing women and getting
beaten up by guys with broken noses.
Want to know what it's really like? 
It's sitting in a car and staring at
a hotel window for three days
straight, pissing in a plastic
bottle, pardon me, because some guy
thinks his wife's cheating on him.
Glamorous, huh?  And the guy who
hired you, he has a hair-lip,
dandruff and crooked teeth, and you
could have told him the minute you
laid eyes on him his wife's
cheating, and you don't blame her.

Mrs. Mathews smiles.

 WELLES
It's refreshing to actually sit down
and meet someone face to face,
someone nice like you.

Welles smiles.  Mrs. Mathews takes out a cigarette.  Welles
lights her, joins her in smoking, refers to his clipboard.

 WELLES
So, she didn't leave a note?  She
never gave any indication where she
might go, before she left?

 MRS MATHEWS
No.

 WELLES
She just seemed... depressed... ?

 MRS MATHEWS
She didn't seem herself.  For months
there never was any way to get her
to talk about it.  One night we went
to bed... the next morning she was
gone.  She took some clothes.

 WELLES
What was she running from?

 MRS MATHEWS
I don't know.

 WELLES
If there's anything you feel
uncomfortable talking about, tell
me, but I have to ask.  Your
husband... he committed suicide?

 MRS MATHEWS
Yes.

 WELLES
September 4th, 1993.  About a year
after Mary disappeared.

 MRS MATHEWS
We were divorced by then.  Things
fell apart... he was living with a
friend...

 WELLES
Why do you think he did it?

 MRS MATHEWS
It got to be too much for him.

 WELLES
You have to forgive me, but in these
circumstances... with your
daughter...
(pause)
Were there any indications of... any
sort of abuse?

 MRS MATHEWS
There wasn't anything like that.
The police and the FBI people asked,
but there wasn't anything happened
like that, never.  My husband... his
heart broke when Mary left...

 WELLES
I didn't mean to...

 MRS MATHEWS
You try going through what we did.
Bob couldn't take it, that's all.
Christ, there's times when it still
seems like I can't either.

 WELLES
I had to ask.  I apologize.

 MRS MATHEWS
No one knows what it's like.  You
can't even imagine how much it hurts. 

Welles is miserable.  A few CUSTOMERS walk past, looking at
Mrs. Mathews.  She tries not to notice then noticing.

 MRS MATHEWS
People remember me from the news.
(pause)
Can you drive me back now?

 WELLES
Of course. 


INT.  MATHEWS HOUSE, MARY'S ROOM -- DAY

Mrs. Mathews enters.  Welles follows. 

This was the girl's room, exactly as she left it -- POSTERS
of ACTORS on the wall, many STUFFED ANIMALS on the pink
sheets of the carefully made bed.  Perfectly preserved.

 MRS MATHEWS
This is her room.

Welles looks around, uncomfortable.
Shelves have PICTURES of MARY with female friends, a
collection of CERAMIC FIGURINES of CLOWNS and ANIMALS.

 MRS MATHEWS
The police made a wreck of it, but
I put it back exactly how it was.
Just how she likes it.

Welles takes a few steps into the room, looks down at a DESK
where there are SIX brightly wrapped GIFTS.

 MRS MATHEWS

Those are for her birthday.  One for
every year she's missed.  They'll be
waiting for her when she comes back. 

Welles is nearly overwhelmed by sadness, struggling to hide
it.  He backs to the door, looks at his watch...

 WELLES
I... I shouldn't take anymore of
your time.  Maybe we can finish
tomorrow.  I'll call tomorrow...

 MRS MATHEWS
Okay.

EXT.  MATHEWS HOUSE -- DAY

Welles escapes to his car, climbing in.  He starts it up...

IN THE CAR

Welles drives, tears welling up in his eyes.  He has to pull
over and park, wiping his tears, fighting for composure.


INT.  WELLES' ROOM -- NIGHT

Welles has unpacked.  He's on the bed, on his CELLULAR...

 WELLES
(into phone)
You should be able to take a shower
and still have hot water left, honey.
(listens)
Call him back and tell him I said
so.  The goddamn thing's still under
warranty.
(listens)
I'm okay.  It's hard here.  It's
hard.
(listens)
I've got a lead I have to follow
through.  To be honest, I don't
think I'm going to get very far.
I miss you.  I love you.


INT.  MATHEWS HOUSE, KITCHEN -- MORNING

Welles sits at the kitchen table.  Mrs. Mathews makes
coffee.  The home's decor is cheap and flowery.

 MRS MATHEWS 
We weren't religious.  We never
forced religion down her throat,
like I've seen some parents do to
their kids.  We never made her go to
church.  But, after Mary was gone,
that's when I got religious.

Mrs. Mathews brings two cups of coffee, sits.

 MRS MATHEWS
Doesn't make much sense, does it?
When everything's happy, when life's
fine and you have every reason to
believe there's a God, you don't
bother.  Then, something horrible
happens... that's when you start
praying all the time.  That's when
you start going to church.

 WELLES
We're all like that.

 MRS MATHEWS
Are you religious?

 WELLES
No.

 MRS MATHEWS
You should be.

Mrs. Mathews drinks coffee, stares into the cup.

 WELLES
I've got what I need for my report.
There is... there is one thing that
bothers me though.

 MRS MATHEWS
What? 

 WELLES
It's not really my place, but it's
not easy for me to set aside the
private detective part of me either.
See, I know a little about missing
persons.  When kids run, they almost
always leave a note.  It's guilt.
They want to say goodbye.

 MRS MATHEWS
There wasn't one.  The police looked.

 WELLES
Do you think the police did a good
job?

 MRS MATHEWS
I don't know.  I think so.

 WELLES
It is possible... and I know this
isn't something you want to hear.
Your daughter may have tried to hide
a note where she thought you would
eventually find it, but where she
knew your husband would never find
it.  She might have wanted to tell
you something...

 MRS MATHEWS
No.  You don't have any reason to
think that...

 WELLES
If the police focused their search
in her room, her belongings, well
that'd be only natural, but they may
have been looking in the wrong place.

Mrs. Mathews is getting upset.

 MRS MATHEWS
How... how can you say that to me...?

 WELLES
Will you let me look?

 MRS MATHEWS
My husband never laid a hand on her.
She would have told me... she would
have told me...

 WELLES 
You're probably right, and I
probably won't find anything.
I don't have a right to ask this,
and you can kick me out of your
house if you want, but this is my
profession and there's a part of me
that can't let it go.  Police are
just as human as you or I.  They
could have missed something.  They
probably didn't.
(pause)
Wouldn't you rather know?

Mrs. Mathews thinks about it, tortured, shakes her head sadly.

 MRS MATHEWS
Go ahead and look if you want.  I
don't care what you do.

Mrs. Mathews gets up and walks out of the room.


INT.  MATHEWS HOUSE -- SEARCH MONTAGE -- DAY

-In MRS. MATHEWS' BEDROOM, Welles looks through DRESSER
drawers, methodically, replacing everything as it was...
searches hat boxes and shoe boxes in a CLOSET... takes
BOOKS off SHELVES, fanning the pages, shaking them out...

-In a BATHROOM, Welles examines the contents of a MEDICINE
CABINET, examining old prescription bottles... opens
CABINETS under the sink...

-In the LIVING ROOM, Mrs. Mathews sits slumped in a chair,
staring at a soap opera on TELEVISION, a BOTTLE of scotch
on TV tray beside her, drink in hand.

-In the KITCHEN, Welles stands on a chair, searches high
CABINETS... looks through low CABINETS, on his knees, pulls
out pots and pans... fans the pages of COOK BOOKS...

-Welles stands in the doorway of MARY'S ROOM, just stares.
He takes a few steps back into the HALLWAY, looks up at the
ceiling.  There's an ATTIC DOOR there.  Welles reaches to
the door's handle, opens it, unfolds the portable stairs...

-In the small ATTIC, Welles uses a penlight FLASHLIGHT,
crouched under the low ceiling, looking through dusty BOXES
of PHOTOGRAPHS; old photos of a wedding, of grandparents...
Welles moves to pull back dusty sheets, finds a large
WICKER BASKET and broken BICYCLE underneath...

Welles opens the basket, takes out BLANKETS and QUILTS
in mothballs.  He finds a wide VELVET BOX, takes it out,
opens its hinged lid to reveal a set of good SILVERWARE.
He touches the tarnished silverware, lifts out the top tray.
Underneath, resting on top of more silverware, is a DIARY.

Welles opens the DIARY, finds written: "Mary Anne Mathews."

Welles turns pages.  The DIARY'S about half-full of
feminine, cursive handwriting.  After the last written
page, a PAGE has been TORN OUT.  Welles fingers the ragged
edge, flips through the blank pages till he comes to the
very last page, a GOODBYE NOTE.  Welles sits and reads...

 MARY'S VOICE (V.O.)
(emotionless monotone)
"Dear mom.  If you're reading this,
it means I called you from
Hollywood, California and told you
where to find my diary.  I don't
think I'll be able to tell you this
when I talk to you, so I'm writing
it down here.  You know I haven't
been happy for a long, long time.
For a long time now dad's been doing
things I couldn't tell you.  He's
been touching me and it's getting
worse.  I can't stay anymore.  I
know you and I haven't always gotten
along sometimes, but please don't
blame yourself.  There isn't
anything you can do.  I'm going to
make a whole new life in California.
Maybe someday you'll see me on TV or
in magazines.  Don't worry about me.
Love, Mary Anne."

INT.  MATHEWS HOUSE, HALLWAY OUTSIDE MARY'S ROOM -- DAY

Welles shuts the attic door, takes the DIARY from his
pocket, hides it in his waistband at the small of his back.

INT.  MATHEWS HOUSE, LIVING ROOM -- DAY

Welles enters.  Mrs. Mathews looks up from the TV.

 WELLES
You were right.
(pause)
I didn't find anything.  I'm going
to run and get something to eat.
Are you hungry?

 MRS MATHEWS
Yes.


INT.  COPY SHOP -- LATE DAY

Welles uses a self-serve COPY MACHINE, flattening the DIARY
on the glass, photocopying the DIARY as quickly as he can.


INT.  MATHEWS HOUSE, LIVING ROOM -- NIGHT

Welles sits picking at fast food in front of him.  Mrs.
Mathews' food isn't even unwrapped. 

She's numb from her drink, watching a GAME SHOW, smoking. 

 WELLES
Do you ever consider... do you
realize that Mary may never come
back?

Mrs. Mathews looks to Welles, looks back at the TV.

 MRS MATHEWS
I think about it everyday.  But,
every time the phone rings... every
single time, I still think it's her.

 WELLES
It's been six years.

 MRS MATHEWS
What am I supposed to do?  Forget
her?  Time heals all wounds, right?
(misery building)
She's all I think about, and I've
learned to live with that.  But, you
want the truth... the real truth?
If I had a choice... if I had to
choose, between her being out there,
living a good life and being happy,
and me not knowing; never finding
out what happened to her...
(pause)
... or her being dead and me
knowing...
(pause)
I'd choose to know.

Mrs. Mathews stares into the TV, wipes tears.
Welles takes a deep breath and holds it.  He watches her a
long moment, motionless.  Finally he stands, voice unsteady.

 WELLES
Excuse me, I have to use your
bathroom.

INT.  MATHEWS HOUSE, HALLWAY OUTSIDE MARY'S ROOM -- NIGHT

Welles comes to the attic door, quietly pulls it open.

INT.  MATHEWS HOUSE, ATTIC -- NIGHT

Welles uses his penlight, digs out the DIARY from the hiding
place in his waistband, replaces it in the box of
silverware, closes the box.

INT.  MATHEWS HOUSE, MARY'S ROOM -- NIGHT

Welles enters, takes a PICTURE FRAME off one shelf, opens
the back and takes out the PHOTO of MARY from inside.

INT.  MATHEWS HOUSE, LIVING ROOM -- NIGHT

Mrs. Mathews still gazes into the TV.  Welles passes the
doorway, not looking in, heading to the front door, opening
the door and walking out...

Mrs. Mathews doesn't even notice, doesn't look up.

EXT.  MATHEWS HOUSE -- NIGHT

Welles crosses the front lawn, not looking back, heading to
the street, getting into his car, starting his car, doing a
U-turn, driving away down the street.


EXT.  FAYETTEVILLE AIRPORT, LONG TERM PARKING -- MORNING

Welles' boxes of belongings are piled in the back seat of
his car.  Welles covers them with a blanket, shuts the door.

Welles opens the trunk of his car, pulls back the carpeting.
He opens the brown BRIEFCASE.  The briefcase is full of
CASH, about $10,000, twenties and fifties in bundles.

Welles transfers half the money into a carry-on bag, shuts
the briefcase, covers it, closes the trunk.


INT.  AIRPLANE, COACH -- NIGHT -- MONTAGE

The cabin's half-full, dark.  Passengers sleep.  Under the
only illuminated reading light, Welles reads the PHOTOCOPIED
DIARY.  MARY'S VOICE is a again a flat monotone...

 MARY'S VOICE (V.O.)
(as Welles reads)
"Dear diary.  I have a big math test
tomorrow.  I have to get better
grades.  How come everybody does
better than me?  Kathy doesn't even
study and she gets B's.  Two boys
got in a fight after school today.
One boy knocked the other boy's
tooth out, at least that's what it
looked like.  His nose and mouth
were bleeding all over the place..."

EXT.  LOS ANGELES INTERNATIONAL AIRPORT -- MORNING -- MONTAGE

An airplane ROARS downwards, heading in for a landing.

EXT.  LA CITYSCAPE -- ESTABLISHING -- DAY -- MONTAGE

An ugly city.  "HOLLYWOOD" sign on the smoggy horizon.

EXT.  HOLLYWOOD HOTEL -- DAY -- MONTAGE

A cheap, stucco hotel in a wounded Hollywood neighborhood.

INT.  HOLLYWOOD HOTEL -- DAY -- MONTAGE

Welles' suitcase is open on the bed.  Welles sits in a chair
with his feet up, sweating in the heat, reading the DIARY.

 MARY'S VOICE (V.O.)
(as Welles reads)
"... We're reading The Great Gatsby
in English class.  It's the story of
this guy who has lots of fancy
parties and all his friends come
around and party with him, but later
when he dies nobody comes to his
funeral.  Someone said there's a
movie about it, but I looked in the
video store and it wasn't there."

Welles flips pages, further back in the DIARY...

 MARY'S VOICE (V.O.)
(as Welles reads)
"Dear diary.  I started my first job
last week working part time at Price
Mart department store..."

INT.  LOS ANGELES BANK, SAFE DEPOSIT VAULT -- DAY -- MONTAGE

Welles and a BANK EMPLOYEE both put keys into a SAFE DEPOSIT
BOX, unlocking it and sliding out the metal drawer.

 MARY'S VOICE (V.O., cont)
"... The people I work with are all
old and fat.  All they live for is
their next coffee break so they can
smoke..."

INT.  BANK, PRIVACY BOOTH -- DAY -- MONTAGE

Welles is alone, opens the empty safe deposit drawer, takes
the 8MM FILM from his pocket and puts it in the drawer.

 MARY'S VOICE (V.O., cont)
"... They eat lunch at the snack
counter.  Hot dogs and soft
pretzels.  Nachos with that orange
cheese that comes out of a pump.  I
don't know what I'd do if I'm still
working there when I get old..."

EXT.  YOUTH HOSTEL -- ESTABLISHING -- DAY -- MONTAGE

A large NEON CROSS identifies this HOSTEL in mid-Hollywood.

 MARY'S VOICE (V.O., cont)
"... I want to be a singer or an
actress.  I know it's a stupid
dream, but I know I can do it if I
get a chance..."

INT.  YOUTH HOSTEL -- DAY -- MONTAGE

Welles talks to the MAN behind the counter, shows the
PICTURE of MARY taken from Mrs. Mathews' house.

 MARY'S VOICE (V.O., cont)
"... Everyone's always telling me
how pretty I am.  I don't think I
am.  When I look in the mirror I
wonder who they're talking about."

The MAN behind the counter shakes his head.

INT.  HOMELESS SHELTER -- DAY -- MONTAGE

A run-down shelter.  Welles shows the PICTURE of MARY to the
PROPRIETOR, explaining.  The proprietor shakes his head.

 MARY'S VOICE (V.O., cont)
"Dear diary.  I went out with Bob
today, the cute boy in my science
class.  He took me to a movie..."

EXT.  YWCA, LIVING QUARTERS -- DAY -- MONTAGE

Welles continues his trek, standing in the dank hallway of
a YWCA DORMITORY, showing the PICTURE to a COUNSELOR.

 MARY'S VOICE (V.O., cont)
"... It was the middle of the day,
but we held hands.  I think he likes
me.  I really like him.  He has
black hair and grey eyes..."

EXT.  LA FREEWAY -- DUSK -- MONTAGE

Welles sits in his rental CAR, in a massive TRAFFIC JAM.

 MARY'S VOICE (V.O., cont)
"... He opened the car door for me
and paid for the movie.  When he
took me home he said we should go
out again soon.  I hope he calls..."

EXT.  HOLLYWOOD, RED LIGHT DISTRICT -- NIGHT -- MONTAGE

Welles drives, looking out the windshield...
at decaying "PEEP SHOWS," an "ADULT BOOKSHOP" and "SEX SHOP."

 MARY'S VOICE (V.O., cont)
"Dear diary.  Janet says she slept
with her boyfriend.  I can't believe
it.  She says they did it last
weekend while her parents were out
of town..."

EXT.  HOLLYWOOD, SUNSET BOULEVARD -- NIGHT -- MONTAGE

Welles drives, watching overweight PROSTITUTES and tall,
muscular TRANSVESTITES prowling the sidewalks in mini-skirts
and stained, tight spandex pants.

 MARY'S VOICE (V.O., cont)
"... She said she liked it, but she
didn't seem too happy.  She didn't
tell me many details.  She said he
used a condom."

EXT.  SANTA MONICA BOULEVARD -- NIGHT -- MONTAGE

Teenaged MALE PROSTITUTES hang out in front of a PIZZA
PARLOR.  A few have their shirts off, crewcut and muscular.

 MARY'S VOICE (V.O., cont)
"Dear diary.  If I save enough money
to go to community college maybe I
can get good enough grades for a
scholarship somewhere else..."

EXT.  HOLLYWOOD BOULEVARD -- DAY -- MONTAGE

A tribe of HOMELESS TEENAGERS sits on the sidewalk in front
of SOUVENIR SHOPS.  They beg money off pedestrians.

 MARY'S VOICE (V.O., cont)
"... I've never been anywhere else.
I don't think mom wants to let me
go.  Every time I try to talk about
it she says it'll cost too much or
she changes the subject."

EXT.  CHURCH, SOUP KITCHEN -- DAY -- MONTAGE

A long line of HOMELESS PERSONS trails out the door.  Welles
stands out front, showing the PICTURE to a VOLUNTEER with a
broom, and a PRIEST...

 MARY'S VOICE (V.O., cont)
"Dear diary.  Something terrible
happened today when dad and I were
alone.  I can't tell anyone.  I feel
sick.  What did I ever do to make
this happen to me?"

The volunteer and priest can't help.  Welles is weary,
futility beginning to wear on him, walks to his car...

 MARY'S VOICE (V.O., cont)
"Dear diary.  My stomach hurts all
the time.  I just want to go to
sleep and never wake up.  I want to
get out of my head and stop hearing
myself think."

INT.  WELLES' RENTAL CAR -- IN MOTION -- NIGHT -- MONTAGE

Welles smokes, driving, blankly watching the road ahead...

 MARY'S VOICE (V.O., cont)
"Dear diary.  Grandma fell and broke
her leg last week.  We drove down to
visit her in the hospital.
Hospitals smell like dead people."

EXT.  FREEWAY -- HELICOPTER SHOT -- NIGHT -- CONTINUOUS

FOLLOW Welles' car speeding along...

 MARY'S VOICE (V.O., cont)
"Dear diary.  It's happening all the
time now.  There s nothing I can do.
I'm all alone.  Everything is bad.
I used to have lots of dreams and
I'd remember them when I woke up,
but that doesn't happen anymore."

PULL BACK: still FOLLOWING WELLES' CAR, over the FREEWAY...

 MARY'S VOICE (V.O., cont)
"Dear diary.  If I can get to
California, I'll be okay.  I've got
money saved.  I can work as a
waitress till I get something
better.  Billy says he and his
family went to California once on
vacation.  He says it never rains.
They stayed near the beach and he
went swimming in the ocean..."

CONTINUE TO PULL BACK -- till Welles' car is very, very far
below -- REVEALING the staggering size of the City of Los
Angeles, where the lights go on forever and forever.

INT.  WELLES' ROOM -- NIGHT -- MONTAGE

Welles is seated, elbows on his knees, reading the DIARY...

 MARY'S VOICE (V.O., cont)
"... I hope I can be an actress.  I
hope I can be happy.  I'll probably
have to go to acting school.  I wish
I knew someone who lived there.
I'll miss my friends, but at least
I'll be far away where no one can
ever find me."

Welles has come to the end of the writing in the DIARY.  The
next PHOTOCOPIED PAGE shows an image of the TORN RAGGED EDGE
of the diary's missing page.


EXT.  VIDEO PORN SHOP -- DAY

Welles enters this "ADULT VIDEO" storefront.

INT.  VIDEO PORN SHOP -- DAY

The CLERK is a sleazy forty-year-old man with rings in his
pierced nose and lips, behind a counter by the door.  He
watches Welles pass.

Welles looks around, uncomfortable.  A few of the other
CUSTOMERS, all men, sneak glances at Welles.  Display
shelves run floor to ceiling, full of hundreds of shrink-
wrapped XXX PORNO TAPES.  Welles pretends to browse.

Handmade signs above each section identify content: "ANAL,"
"BIG TITS," "CUMSHOTS," "BONDAGE and FETISH," etc...

Welles looks back at the clerk, who stares at Welles.
Welles feels obligated to pick up a box and act like he's
considering it.  He glances at other customers.

Each man keeps his eyes forward on the pornography.  One guy
has his arms full of about ten videos.

Welles puts the tape back, walks to the front counter.  The
clerk watches him the whole time.

 WELLES
Is this pretty much it?

The clerk just stares at Welles.

 WELLES
Just... just videos?

 PIERCED CLERK
What are you looking for?

Welles considers, decides to leave, exiting...

 WELLES
Nothing.

 PIERCED CLERK
Fuck-head.


INT.  ADULT BOOKSTORE -- DAY

Welles comes in through the blacked-out door.  This place is
larger than the last.  TWO CLERKS are behind the counter.
One clerk's pricing porn, the other, MAX, 25, reads a porno-
novel.  Max has long hair, colorful tattoos covering his
forearms, has a HIGHLIGHTER MARKER in his mouth.

Welles browses.  There's a huge video bargain bin.  Walls
are covered in videos, sex toys, inflatable women, etc. 

CUSTOMERS, again all wary males, follow proper porn-shop
etiquette; look at the porn, not your fellow shopper.

There are "PEEP SHOW" booths in the back.  A MAN looks
around, trying to be nonchalant, sweating profusely,
slipping behind one curtain.

Welles pretends to read the packaging on a triple-pack of
dildos, looks towards the front...

Behind the register, Max takes a look to make sure the other
clerk is busy, takes the cap of his Highlighter pen and
highlights a section in the book he's reading.

Welles notes this.  He goes to the substantial MAGAZINE
RACK, picks up a porn tabloid, pages through it.  He selects
sex MAGAZINES and NEWSPAPERS, choosing about twenty-five.

Welles takes this pile up to Max, gets out his wallet.  Max
starts ringing everything up.

 MAX
Big date tonight?

 WELLES
(embarrassed)
Yeah... guess so.

 MAX 
Can I interest you in a battery
operated-vagina?

 WELLES
Pardon me?

 MAX
My boss tells me I have to do more
suggestive selling.

 WELLES 
Well, it's tempting, but no thanks.

 MAX
It's your call, but you're gonna be
sorry when you're in one of those
everyday situations that call for a
battery-operated vagina and you
don't have one.

 WELLES
I'll risk it. 

Max shoves everything into a bag and hands it over.

 MAX
Thank you for shopping at Adult
Bookstore.  Have a nice day.

Welles takes the bag.  Max returns to his book.  Welles is
leaving, but stops at the end of the counter.

 WELLES
What are you reading?

Max holds up the book, "ANAL SECRETARY."

 MAX
Once you pick it up you can't put it
down.

 WELLES
Catchy title.  What are you really
reading?
(off Max's look)
Hard to believe that book's got any
parts worth highlighting.

Max takes a glance at the other clerk, opens the pages of
the book and shows it to Welles.  "Music for Chameleons."

 WELLES
Truman Capote.

 MAX
I tear off the cover and paste this
one on...
(nods towards clerk)
You know how it is.

 WELLES
Wouldn't want to embarrass yourself
in front of your fellow perverts.

 MAX
(smiles, shrugs)
Might get drummed out of the
pornographer's union, and then where
would I be?

Another CUSTOMER clears his throat, waiting at the register.
Max turns to help him.  Welles heads out.


INT.  WELLES' ROOM -- NIGHT

Welles is at a table, porn publications spread out before
him, looking through the back of a PORNO TABLOID...

Turning pages of HARDCORE ADVERTISEMENTS: "Adults Only,"
"She Male Films," "Amateur Sex Videos," "Women and
Animals -- you've got to see it to believe it..."

Welles moves on to the next MAGAZINE, turning to the back,
again, page after page: "Watersports and Fisting
Specialists," "100's of Anal Films," "Asian Sex..."

HUNDREDS of 900 NUMBER ads with naked women urging callers
to pick up the phone.  EROTIC CLASSIFIEDS; hundreds of
amateur photos of naked men and women with faces and
genitalia blacked over... "Men Seeking Women," "Women
Seeking Women", "Men Seeking Men," "Transvestites..."

It is endless.  More CLASSIFIEDS: "Sex Slaves Wanted,"
"ACTRESSES WANTED," "Underground Films," "SPECIALTY FILMS
OFFERED," "S+M and BONDAGE," "Fetish Videos."

Welles leaves it, overwhelmed, goes to lay down on the bed.
He picks up his cellular phone, dialing.

 WELLES
(into phone)
Hi, honey, how are you?  How's Cindy?
(listens)
The way it's going I'm about ready
to pack my bags...

INT.  NONDESCRIPT ROOM -- NIGHT -- CONTINUOUS

In a dark room, we don't know where, a DARK FIGURE of a MAN
is silhouetted.  He wears HEADPHONES, listening...

 WELLES' VOICE (V.O.)
(through headphones)
... I've got a feeling the person
I'm looking for came out here and
got swallowed up by the place.

 AMY'S VOICE (V.O.)
(through headphone)
Come back now. Just drop it and
come back...

 WELLES' VOICE (V.O.)
(through headphone)
I would if I could.  I'll be home
soon, believe me.  It won't be long.

 AMY'S VOICE (V.O.)
(through headphone)
I miss you.

INT.  WELLES ROOM -- NIGHT -- CONTINUOUS

Welles shuts his eyes, still on the cellular...

 WELLES
(into phone)
I miss you too.  I love you very
much.  Give Cinderella a kiss for me
and tell her I love her, alright?
(listens)
Goodnight.


INT.  ADULT BOOKSTORE -- DAY

Max is at the register.  A crewcut WOMAN in overalls works
behind the counter with him.  Welles approaches.

 WELLES
Remember me?

 MAX
Came back for that battery-operated
vagina, right?  Told you you would.

Welles shows his IDENTIFICATION, lets Max get a good look.

 WELLES
I need some information.  Thought
you might be able to help.

 MAX
(of identification)
Thomas Welles.  Nice picture.

Welles takes out an ENVELOPE, puts it on the counter.

 WELLES
I'll be outside having a cigarette.

Welles leaves.  Max watches him go.  Max opens the envelope,
takes out two fifty dollar bills, pockets them.

 MAX
(to other clerk)
Cover me, Beth.  I'm taking a break.

EXT.  ADULT BOOKSTORE -- DAY

Welles stands down the sidewalk, smoking.  Max comes out
from the porn shop, walks to Welles, looking around.

 MAX
I don't know what you're looking
for, mister, but so we're clear from
the start, I'm straight.

 WELLES
Good for you.

Welles and Max walk down the block, past HOMELESS MEN with
shopping carts overflowing with junk.

 WELLES
How long you been working there?

 MAX
Three, four years.

 WELLES
What's your name, if you don't mind
me asking? 

 MAX
Max.

 WELLES
Well, here's the deal, Max.  This
thing I'm on right now has something
to do with underground pornography.
Stuff that's sold under the counter,
illegally...

 MAX
There's not much illegal.

 WELLES
Well, whatever there is, whoever's
dealing, however it's done, I want
to know.  I want a good look, so if
you've got that kind of connection,
great.  If not, speak now.

 MAX
You're not a cop, are you?  If I ask
and you are, you have to tell me.

 WELLES
I'm not a cop.

 MAX
You're a private eye.  Like Shaft.

 WELLES
Not quite.

 MAX
From Pennsylvania.  P.I. from PA.
What are you doing out here?

 WELLES
Well, there's the thing; you're not
gonna know anything about what I'm
doing, but you can make some money.

 MAX
How much?

 WELLES
How much do you make now?

 MAX
Four hundred a week, off the books.

 WELLES
Okay, let's pretend I live in the
same fantasy world where you make
four hundred a week in that dump.
I'll give you six hundred for a few
days. 

 MAX
Sounds good, pops.

 WELLES
Here's my number if you need it...
(writes on scrap paper)
When can you start?

 MAX
Tomorrow night, I get off at eight.

 WELLES
See you then.  Oh, and, don't call
me "pops."

Welles walks away. 


INT.  WELLES ROOM -- NIGHT

Welles sleeps, despite the stead SOUND of TRAFFIC racing by
his window.  The PHONE RINGS, waking him.  Welles looks at
the clock radio, 2:23am, reaches to answer the phone...

 WELLES
(into phone)
... Hello... ?

 MAX (V.O.)
(from phone)
Wake up, pops.  Your education
begins tonight.

EXT.  DOWNTOWN -- NIGHT

Against the backdrop of downtown LA's bright skyscrapers,
Welles' rental car heads into the lower bowels of the city,
smaller, older, darker buildings...

EXT.  DOWNTOWN STREETS -- NIGHT

The only people on the street are HOMELESS and SHADY
CHARACTERS.  Welles' car makes its way to a big deserted
PARKING LOT.  There are a few cars parked in one corner.

Welles parks near the other cars and gets out.  Max stands
against a chain link fence.  Welles goes to meet him.

 MAX
Come on.

Max leads the way, across the lot, towards dark alleyways.

EXT.  DOWNTOWN ALLEYWAY -- NIGHT

Max and Welles move through this filth strewn alley between
decaying brink buildings.  They cone to a STAIRWELL leading
down to pitch dark...

INT.  OLD BUILDING -- NIGHT

Max enters through a crooked door, heads into a narrow,
labyrinth hallway lit by bare bulbs.  Welles follows.

They come to another STAIRWAY leading down.  At the bottom,
a thick-necked GOON stands guarding double doors. 

 GOON
Are you a law enforcement agent or
in any way affiliated with law
enforcement?

 MAX
Fuck you, Larry.

Max heads to the double doors, waits for Welles.

 GOON
(to Welles)
Are you a law enforcement... ?

 WELLES
No.

INT.  BASEMENT -- NIGHT

Max and Welles enter through the double doors, into a kind
of small, underground porn flea market.  It's incredibly
quiet.  About fifteen CARD TABLES are set up in rows.  The
MEN behind the tables and the thirty or so "CUSTOMERS"
looking through the merchandise make those in the previous
porn shops look like high society.

These are MIDDLE-AGED MEN, most balding, some with pot
bellies, in shorts and tube socks, in sweatpants and Members
Only jackets: plain men, but with a look of desperation in
their eyes, glancing around nervously, greasy and afraid.

 ONE DEALER
We're shutting down in fifteen
minutes.  Fifteen minutes.

Welles makes his way to the tables, wary.  One table is
covered in dirty cardboard boxes, filled with HUNDREDS of
PHOTOS of young children, mostly boys, naked.  Each photo is
wrapped in plastic, censored by masking tape.

Welles swallows back disgust.

The next table is piled high with used pornographic
MAGAZINES.  There are baggies with COLORFUL PILLS laid out.
X-rated Polaroids wrapped in rubberbands.

Max follows behind, unaffected, smokes a cigarette.

Another table offers VIDEO TAPES with no identifying marks
other than hand written labels with numbers written out,
"two," "sixteen," "five."  And many bootleg VIDEOS with
grainy, homemade labels showing WOMEN in extreme BONDAGE.

Welles watches out the corner of his eye as the PLUMP MAN
beside him pays for a thick stack of kiddie porn pictures.
Welles waits till the man moves on, addresses the angry
looking DEALER who's counting money.

 WELLES
(points to numbered videos)
What are these?

 ANGRY DEALER
Mixed hard bondage.  Rape films.
Sick shit.  Buy five, get one free.

Welles looks around, wipes sweat off his top lip.

 WELLES
Anything harder?

 ANGRY DEALER
There's nothing harder.

 WELLES
Snuff?

 ANGRY DEALER
What you see is what I got, mister.

 WELLES
You know where I can get it?  I have
a lot of money to spend.

 ANGRY DEALER
There ain't no such thing as snuff.
Why don't you fuck off? 

The dealer sits and keeps counting cash.
Welles moves on Beyond the tables there's a CURTAINED
DOORWAY.  Welles walks to it, enters...

INSIDE THE CURTAIN

Folding chairs face a SCREEN.  A PROJECTOR shows a silent
movie; a BUXOM WOMAN in nurses uniform prepares an enema bag
and tube.  A hairy, overweight MAN lays face down on an
examination table, naked, arms tied behind his back.

In the darkness, a MAN shifts in his chair, grunting,
obviously masturbating.  A few chairs away, a man is bent
over, moving his head in the lap of SOMEONE in a BLONDE WIG.

A LARGE MAN approaches Welles from the dark.

 LARGE MAN
You have to pay to come in here. 

Welles backs away, shuts the curtain.


INT.  ALL-NIGHT COFFEE SHOP -- NIGHT

Not many people in the place.  Welles drinks coffee.  Max
eats a huge breakfast.

 MAX
You've got Penthouse, Playboy,
Hustler, etc.  Nobody even considers
them pornography anymore.  Then,
there's mainstream hardcore.  Triple
X.  The difference is penetration.
That's hardcore.  That whole
industry's up in the valley.
Writers, directors, porn stars.
They're celebrities, or they think
they are.  They pump out 150 videos
a week.  A week.  They've even got
a porno Academy Awards.  America
loves pornography.  Anybody tells
you they never use pornography,
they're lying.  Somebody's buying
those videos.  Somebody's out there
spending 900 million dollars a year
on phone sex.  Know what else?  It's
only gonna get worse.  More and more
you'll see perverse hardcore coming
into the mainstream, because that's
evolution.  Desensitization.  Oh my
God, Elvis Presley's wiggling his
hips, how offensive!  Nowadays,
Mtv's showing girls dancing around
in thong bikinis with their asses
hanging out.  Know what I mean?  For
the porn-addict, big tits aren't big
enough after a while.  They have to
be the biggest tits ever.  Some porn
chicks are putting in breast
implants bigger than your head,
literally.  Soon, Playboy is gonna be
Penthouse, Penthouse'll be Hustler,
Hustler'll be hardcore, and hardcore
films'll be medical films.
People'll be jerking off to women
laying around with open wounds.
There's nowhere else for it to go.

 WELLES
Interesting theory.

 MAX
What you saw tonight, we're not
talking about a video some dentist
takes home over the weekend.  We're
talking about stuff where people get
hurt.  Specialty product. 

 WELLES
Child pornography.

 MAX
There's two kinds of specialty
product; legal and illegal.  Foot
fetish, shit films, watersports,
bondage, spanking, fisting, she-
males, hemaphrodites... it's beyond
hardcore, but legal.  This is the
kind of hardcore where one guy's
going to look at it and throw up,
another guy looks at it and falls in
love.  Now, with some of the S+M and
bondage films, they straddle the
line.  How are you supposed to tell
if the person tied up with the ball
gag in their mouth is a consenting
or not?  Step over that line, you're
into kiddie porn.  Rape films, but
there aren't many.  I've never seen
one.

 WELLES
Snuff films.

 MAX
I heard you asking.  That guy wasn't
yanking you around.  There's no such
thing.

 WELLES
What other ways are there to get
illegal films?  Who do you see?

 MAX
First of all, basement sales like
tonight aren't gonna last much
longer.  It's too risky, one, and
two, everything's going on the
internet.  Anyone with a computer
and enough patience can find
anything he wants.  It's heaven for
those degenerate chicken-hawks.
They're swapping pictures back and
forth as fast as their modems can
zap 'em.  But, there's still some
weird shit under the counter where
I work sometimes.  No one knows where
it comes from.  That's local
underground, where information
spreads by word of mouth.  Those are
zombies, hardcore junkies.  Their
hands are permanently pruned.  They
go out in the sun they don't burn,
they blister.  Other than that, all
I know about is the mail.
Classified ads in the paper with
hidden codes.  Secret couriers.
Credit card orders to dummy
corporations.  Interstate wire
transfers.  Revolving P.O. boxes.
But, if you're asking me who do you
go to to get illegal shit... who
knows?  That's the whole point --
the seller stays as far away from
the buyer as possible, and vice
versa, and cops can't trace the
deal.  There's ways to do it so
nobody knows who anybody is.

Welles watches Max eat.

 WELLES
How old are you?

 MAX
Twenty-five.

 WELLES
Where are your parents?

 MAX
I don't know, where are yours?

 WELLES
I don't mean any offense... but what
are you doing mixed up in all this?

 MAX
I'm not mixed up in anything,
hayseed.  What are you talking about?

 WELLES
You just strike me as smart enough
to be doing something else.

 MAX
Yeah, I'm a real genius.  What
choices have I got?  Fuck, just
because I know about stuff like
tonight doesn't mean I deal it.  I
work a job.  It beats pumping gas,
beats making hamburgers.

 WELLES
You're telling me it doesn't get to
you?

 MAX
You can't sit there all day watching
the parade of losers that comes into
that place without going numb.  So
what? 
Am I gonna go off and be a race car
driver?  Go to Harvard?  Run for
President?  What about you, pops?

 WELLES
What about me?

 MAX
I see a ring on your finger.  You
have any kids?

 WELLES
A daughter.

 MAX
So, you have a wife and kid waiting
for you in Pennsylvania... what are
you doing mixed up in all this?

 WELLES
Good question.

EXT.  ALL NIGHT COFFEE SHOP -- NIGHT

Max and Welles comes out to the sidewalk, talking.

ACROSS THE STREET

INSIDE A PARKED CAR, through the windshield, SOMEONE watches
Max and Welles say goodnight.  Max walks to a waiting taxi.

It's the sinister lawyer watching, LONGDALE, the late Mr.
Christian's attorney, watching Welles go to his rental car.


INT.  WELLES' ROOM -- NIGHT -- MONTAGE

Welles is seated, PROJECTOR RUNNING, watching the 8MM film.

The last of the film makes its way through, threading out.
The take-up reel spins, the film's tail flapping...

Welles stares at the blank white square of light projected
onto the wall.  CELLULAR PHONE is HEARD RINGING...

Welles finally looks to the projector, turns it off.  The
PHONE'S RINGING.  Welles goes to sit on the bed, looking at
the cellular phone on the bedside table.  RINGING...

Welles lets it RING.  RINGING... RINGING... till it finally
stops.  Welles lays back on the bed and shuts his eyes.


INT.  CHRISTIAN HOUSE, MR CHRISTIAN'S OFFICE -- DAY

Mrs. Christian is behind the desk, surrounded by BOXES of
BANK RECORDS and FINANCIAL STATEMENTS, on the PHONE. 

 MRS CHRISTIAN
(into phone)
My husband had five cash accounts he
used to temporarily hold stock
profits.  Between November of 1991
and March of 1992, he wrote one
check out to cash from each account.
He wrote these himself...

INT.  PHONE BOOTH, HOLLYWOOD -- DAY -- CONTINUOUS

Welles is in the booth, listening...

 WELLES
(into phone)
Okay...

 MRS CHRISTIAN (V.O.)
(from phone)
My husband never dealt with money
personally, certainly not cash.

 WELLES
I'm not positive this means anything.

 MRS CHRISTIAN (V.O.)
The checks were for odd amounts...

INT.  MR CHRISTIAN'S OFFICE -- DAY -- CONTINUOUS

Mrs. Christian has the amounts written out on paper.

 MRS CHRISTIAN
(into phone)
One was for two hundred thousand,
one dollar and thirteen cents.
Another was for three hundred
thousand, six hundred fifty four
dollars and seventy six cents...

 WELLES (V.O.)
(from phone)
Okay, I follow you so far...

 MRS CHRISTIAN
Totalled together, these five checks
from five different accounts, they
equal one million dollars.

INT.  PHONE BOOTH -- DAY -- CONTINUOUS

 WELLES
(into phone)
You're joking.

 MRS CHRISTIAN (V.O.)
(from phone)
To the penny.  Exactly one million
dollars in cash. 

Welles considers this, lost in thought.

 MRS CHRISTIAN (V.O.)
Hello... ?

 WELLES
I'm here.

 MRS CHRISTIAN (V.O.)
Do you think the film could have
cost that much?

 WELLES
For a human life... murder on film,
no statute of limitations.  Who
knows?  It sure could have.  I'd
like you to overnight me a copy of
those checks, then put them in a
safe deposit box. 

 MRS CHRISTIAN (V.O.)
Okay.

 WELLES
Send it to me through the post
office like we arranged.  No return
address.  You dug this up all by
yourself?

 MRS CHRISTIAN (V.O.)
You told me to look, so I looked.

 WELLES
You're one hell of a detective, Mrs.
Christian.


EXT.  MISSION YOUTH HOSTEL -- DAY

TEENAGERS work cleaning this large DORMITORY, sweeping and
mopping the floor, making the bunk beds, washing windows.
Welles stands with an elderly, black NUN in plain clothing.

 WELLES
Her name was Mary Anne Mathews.

Welles hands the woman the PICTURE of MARY.  The woman puts
on her glasses, looks at the picture... looks at Welles.

 NUN
Yes... I remember Mary

 WELLES
You... you do?  You're sure?
Please, Sister, will you take
another look, make sure... 

 NUN 
(examines picture)
Yes.  I remember her.

INT.  MISSION YOUTH HOSTEL, STORAGE AREA -- DAY

In a basement corner, Welles watches as the nun uses keys to
open the door of a chain-link STORAGE CAGE.  The cage is
full of junk, BOXES, LAMPS, stacks of CHAIRS.

 NUN
She lived here for only about a
month, if I recall correctly.  She
didn't return one night.  She never
came back.  I didn't know what to
think...

The nun enters the cage, pushes old BOXES out of her way,
looks up a cob-web covered METAL SHELVES.

 NUN
Do you know what happened to her?

 WELLES
I'm trying to find out.  She was a
runaway.  I'm looking into it for
her parents.

The nun sees what she wants, finds a STEP LADDER, tries to
open it.  Welles comes to help her.

 NUN
(pointing on shelf)
Can you get that down for me?

Welles climbs the ladder, points at boxes...

 NUN
No, the next shelf... there...

Welles takes down a small SUITCASE.  It's covered in dust.
He climbs down the ladder with it.

 WELLES
What is this?

 NUN
Those are her belongings.

 WELLES
Her belongings?

 NUN
That's her suitcase.  I had
forgotten it, till you showed me
her picture.

Welles puts the suitcase down, examines the LUGGAGE TAG:
"Mary Anne Mathews," no address.  Welles looks to the nun. 

 WELLES
Whatever possessed you to keep this
all this time?

 NUN
She was the kindest, sweetest girl
you'd ever want to meet.  Oh, I
adored her.  I supposed I always
hoped she'd be back.  After a time,
all I could do was pray she had
moved on to better things.  Can you
get this suitcase to her parents, if
you think it's appropriate?

 WELLES
I'll do what I can.


INT.  WELLES' ROOM -- NIGHT

Welles puts Mary's SUITCASE on the bed, opens it.  He takes
out some of Mary's clothing, examines it, lays it aside.

He takes out a ROSARY, more CLOTHING.  Resting on a SWEATER
are two CERAMIC FIGURINES; a teddy bear and kitten.  Welles
examines them, frowning, puts them aside.

He takes out yellowed NEWSPAPER; Help Wanted CLASSIFIEDS,
"July 2, 1992."  Several job possibilities circled, others
crossed out.  He finds baggie containing a few old JOINTS.

All that's left are more items of CLOTHING, a TOOTHBRUSH and
an ADDRESS BOOK.  Welles examines the address book, finds a
folded piece of paper in the blank pages, unfolds it... it's
the TORN DIARY PAGE, a POEM written in Mary's hand...

 MARY'S VOICE (V.O.)
(as Welles reads)
"Star light, star bright, First star
I've seen tonight, Wish I may, wish
I might, Have this wish I wish
tonight."

Welles goes to a drawer, takes out the photocopy of Mary's
DIARY.  He turns to the ragged edge of the torn page, puts
the DIARY PAGE against it.  Perfect match.

Welles stands looking at the poem.  He turns the page over,
finds written, in cursive:

Models Wanted 213-555-6643


EXT.  PHONE BOOTH -- DAY

Welles dials the number off the back of the torn diary page,
phone to his ear.  It RINGS, RINGS, RINGS... 

 MAN'S VOICE (V.O.) 
(from phone)
Celebrity Films.

Welles hangs up, begins searching the booth's YELLOW PAGES.

EXT.  WILSHIRE OFFICE BUILDING -- DAY

A poverty stricken business section of Wilshire.  Welles
gets out of his parked car, looks up at a decaying Art Deco
building that's painted blue top-to-bottom.

Welles crosses through traffic.

INT.  WILSHIRE OFFICE BUILDING, LOBBY -- DAY

Welles studies the REGISTRY, finds "Celebrity Films."

INT.  WILSHIRE OFFICE BUILDING, STAIRWELL -- DAY

Paint's peeling.  Walls are water stained.  Welles climbs
stairs, winded, sweating, up the stairwell...

INT.  WILSHIRE OFFICE BUILDING, 8TH FLOOR HALL -- DAY

Welles comes out a stairwell DOOR, catching his breath.  A
couple of SECRETARIES wait for the elevator.  Welles moves
down the hall, around a corner.

Each office door has a window of pebbled, translucent glass.
There's a "Dental Office," "Wilson Travel Cruises," and at
the end of the hall, "Celebrity Films Inc., Eddie Poole,
Professional Casting and Distribution, Suite 804."

Welles heads back the way he came.

EXT.  WILSHIRE OFFICE BUILDING -- DAY

Welles crosses back to the other side of the street, goes to
stand near his car.  He looks up at the blue office
building, counting up floors, counting windows across.

Satisfied, he turns, backing up, looking up at the tall
OFFICE BUILDING across from the blue building.  There's a
sign on this adjacent building, "OFFICE SPACE AVAILABLE."

INT.  ADJACENT OFFICE, 9TH FLOOR -- DAY

Empty office.  Welles is let in by a disinterested LANDLORD.
Welles gives a cursory look around, goes to the windows and
opens the blinds.

These windows afford an excellent view of the blue building
across the street, at about 8th floor level.

 WELLES 
This is better. 
(turns to landlord) 
This will be fine.


INT.  ADJACENT OFFICE -- NIGHT

Welles has transferred most of his belongings here, SUITCASE
open on the floor, CARD TABLE set up with fast food on it,
an ARMY COT against one wall.  Welles sits in a chair at the
window, looks through BINOCULARS on a TRIPOD.

WELLES' P.O.V., THROUGH BINOCULARS: searching up the dark
floors of the blue building, as Welles counts under his
breath.  Moving over... stopping on one window, FOCUSING...

Welles locks the tripod.  He goes to sit on the army cot,
picks up his CELLULAR.  He looks at the phone, deciding.
He puts down the phone.  He turns off the LAMP on the floor,
lays back in the cot, going to sleep.


INT.  ADJACENT OFFICE -- DAY

WELLES' P.O.V., THROUGH BINOCULARS: watching the window of
Celebrity Films Inc.  We can see most of the office from
here.  It's crowded with junk, BOXES, piles of VIDEO TAPES.
There's a disorganized DESK by the window.

Welles sits looking through the binoculars.

THROUGH BINOCULARS: a pudgy man, EDDIE POOLE, in a loud,
print shirt, comes to sit at the desk, looks through mail.
He smells sleazy even from here, lots of jewelry, Lots of
rings.  He drinks coffee, answers the phone.  He talks into
the phone, looking for something on his desk, agitation
growing, till he's shouting, then slams the phone down.

Welles rises.  He looks to the wall where THREE PHOTOGRAPHS
culled from the snuff film are pinned up; the picture of
Mary, the picture of Masked Man's tattooed hand, and...

... the grainy image of the Third Man in the mirror.
Welles comes to study this third photo.

                  FADE TO BLACK:

INT.  ADJACENT OFFICE -- DAY

THROUGH BINOCULARS: Eddie packs VIDEO TAPES into a box,
covering them with Styrofoam peanuts, sealing the box.

                  FADE TO BLACK:

INT.  ADJACENT OFFICE -- DAY

THROUGH BINOCULARS: Eddie finishes a call and hangs up.  He
sits back in his chair.  He starts looking in his desk
drawers, finds a MAGAZINE and opens it on the desk.  It's
porn.  Eddie turns pages, looking at naked women.  He sits
back in his chair, begins unbuckling his belt.

Welles pulls back from the binoculars in disgust. 

 WELLES 
No thank you.

                  FADE TO BLACK:

INT.  ADJACENT OFFICE -- NIGHT

THROUGH BINOCULARS: Eddie's on the phone, pouring himself a
drink from the liquor bottle on his desk, finishing the
call, hanging up.  He shakes his head in disgust, drinks the
drink, walks out of view.  After a moment, the lights go out.

EXT.  HOLLYWOOD HILLS -- NIGHT

An old, dented CAR makes its way up the tight, twisting
roads of the Hollywood Hills.  Eddie's at the wheel.  Not
far behind, Welles' rental car follows...

FURTHER ON

Eddie's car pulls into the driveway under the porch of a
ramshackle HOUSE, parks.  Welles' car passes by...

FURTHER, AROUND A CURVE

Welles' car slows once it's out of sight, turns around,
moving back down the hill, slowly...

INT.  WELLES' CAR -- CONTINUOUS

Welles turns out his headlights, coming around the curve
just far enough so the ramshackle house is in view.  Welles
watches Eddie walk up the stairs to the house.

                  FADE TO BLACK:

INT.  ADJACENT OFFICE -- DAY

THROUGH BINOCULARS: Eddie has a visitor.  There's a pretty
GIRL, wearing a tube top, in a chair facing his desk.
Eddie's talking, gesticulating, smiling, cajoling.

Welles watches through binoculars.

THROUGH BINOCULARS: Eddie's still taking, stands, coming
around the desk and placing a hand on the girl's shoulder.
The girl says something.  Eddie responds.  The woman shakes
her head, getting up to leave.  Eddie seems to be asking her
to stay, following as she moves out of view.  Eddie comes
back alone, sits at his desk, picks up the phone.


INT.  ESPIONAGE SHOP -- DAY

Ultra high tech for sale.  Welles examines items on the
sales counter as the SALESPERSON watches: a pair of sma1l,
round LISTENING DEVICES, a complicated RECEIVER/TAPE
RECORDER, and a TONE DECODER with LED window.

 WELLES 
Okay, I'll take it all.

 SALESPERSON 
Excellent.  we accept MasterCard and
American Express.

 WELLES
Cash.

Welles takes out a thick wad, starts counting.

 SALESPERSON
Alright.
(at register) 
May I have your phone number, area
code first?

 WELLES
No, you may not.

 SALESPERSON
Okay.  Fine.

Welles lays the money on the counter.  The salesperson takes
the money, recounting.

 SALESPERSON
I'm required by state law to inform
you that, while it's perfectly legal
for you to purchase these items, it
is illegal for you to use them for
any sort of...

 WELLES
Yeah, I know the spiel.  If you
could bag it, I'll be on my way,
thank you.

 SALESPERSON
Certainly, sir.

The salesperson starts punching keys on the register.


EXT.  WILSHIRE OFFICE BUILDING -- NIGHT

The blue building sits completely dark.

INT.  WILSHIRE OFFICE BUILDING, 8TH FLOOR HALL -- NIGHT

Welles comes quietly out from the stairwell, wears gloves.
He moves down the hall to the door of "Celebrity Films Inc."

He kneels, begins using LOCK-PICKING TOOLS on the door.

INT.  CELEBRITY FILMS OFFICE -- NIGHT

Welles enters, shuts the door and locks it.  He takes out
his penlight.  There are POSTERS for cheap PORN FILMS on the
wall that we couldn't see through binoculars.  Titles like
"Sex Doctor," "Deep Ass," and "Penal Colony."

There a two FILE CABINETS.  Welles pulls a few drawers,
finds them locked.  VIDEO CASSETTES are everywhere, on the
cabinets, on shelves, piled high on the floor.

Welles goes to Eddie's desk, looking in drawers.  One drawer
is full of X-RATED MAGAZINES.  Another's stuffed with
paperwork, call sheets, contracts.

Welles picks up Eddie's phone, unscrews the earpiece.  He
takes the small, round LISTENING DEVICE from his pocket,
peels off backing to expose adhesive.  He attaches the
listening device inside the phone, puts it back together.

Welles moves towards the door, sweeps the room with the
penlight.  He stops at the file cabinets, takes his lock-
picking tools out, begins working on one file's lock.

He turns the lock, opens a file drawer.  Empty.  He opens
another.  Inside: piles of CHILD PORNOGRAPHY.

Welles clenches his jaw.

Faces of children.  Shirtless boys.  Girls in pigtails.


INT.  ADJACENT OFFICE -- DAY

Welles' RECEIVER/TAPE RECORDER'S set up by the window,
recording, with the TONE DECODER plugged into it.  Welles
LISTENS through HEADPHONE, looking through binoculars.

 EDDIE (V.O.)
(through headphones)
... half a dozen.  This is good
stuff, Jimbo...

THROUGH BINOCULARS: Eddie's at his desk, on the PHONE...

 EDDIE (V.O.)
You know how my tapes sell.  People
eat this stuff up.

 MALE VOICE (V.O.)
(from phone)
I had three jerkoffs trying to
return your tapes last month.  Do
you know how bad a skin flick has to
be for some jackass to come back
into my place with a fucking receipt,
and try to fucking return it? 

 EDDIE (V.O.)
Maybe there's something wrong with
the scumbag customers coming into
your place, ever think of that?

 MALE VOICE (V.O.)
The only thing wrong is the cheap,
softcore crap you're peddling,
Eddie.  Where do you get this stuff?

 EDDIE (V.O.)
Look, you cocksucker...

 MALE VOICE (V.O.)
Get together some upscale product
where the girls still have teeth in
their head.  Till then, fuck you.

 EDDIE (V.O.)
Fuck you!

THROUGH BINOCULARS: Eddie slams down the phone.  He CANNOT
BE HEARD any longer.  He's cursing, shuffling paperwork.

Welles takes off headphones, picks up his cellular phone.
He drinks soda, opens the phone, dials, nervous, then looks
back through the binoculars.  He waits, clears his throat.
The PHONE'S RINGING... RINGING...

On the floor, the REELS of the tape recorder are TURNING...

THROUGH BINOCULARS: Eddie answers the phone...

 EDDIE (V.O.)
Celebrity Films.

 WELLES (V.O.)
Eddie.

 EDDIE (V.O.)
Yeah, who's this?

 WELLES (V.O.)
I know what you did.

 EDDIE (V.O.)
What?

 WELLES (V.O.)
I know what you did.

 EDDIE (V.O.)
Who is this.

 WELLES (V.O.)
You murdered that girl, Eddie.  Six
years ago... 

 EDDIE (V.O.)
What the fuck are you.. ?

 WELLES (V.O.)
You killed that girl and you put it
on film.  You and your pals, you're
fucked.  You fucked up real good.

Welles hits disconnect, still looking through binoculars.

THROUGH BINOCULARS: Eddie's slow to hang up the phone.  He
stands, looking down at the phone, frozen.  Finally, he runs
his hands through his hair, looks around the room, sits back
down.  He gets out his bottle and pours himself a drink.

Welles watches through binoculars, puts headphones back on.

 WELLES
Come on, Eddie...

THROUGH BINOCULARS: Eddie sits motionless.

 WELLES (O.S.)
... come on...

THROUGH BINOCULARS: Eddie picks up the phone, DIALS a
NUMBER.  We hear the PHONE RING in the HEADPHONES

 MAN'S VOICE (V.O.)
(through headphones)
... Hello?

 EDDIE (V.O.)
(through headphones)
Dino, it's Eddie... Eddie Poole...

 DINO (V.O.)
What do you want?

 EDDIE (V.O.)
I just got a call... two seconds
ago, some motherfucker called...
says he knows about the loop.

 DINO (V.O.)
What are you talking about?

 EDDIE (V.O.)
The loop!  The girl we did, what the
fuck do you think I'm talking
about?!  This guy calls and says he
knows about the fucking loop...

 DINO (V.O.)
Bullshit.

 EDDIE (V.O.)
I'm telling you... 

 DINO (V.O.)
Blow me, you paranoid fuck, that's
impossible.  Why are you bothering
me with this... ?

 EDDIE (V.O.)
Because somebody just fucking called
me and fucking laid it out!

 DINO (V.O.)
There's nothing there, you brain-
dead cunt.  Think about it.  There's
absolutely no way in this world to
connect us to anything.  I want you
to hang the phone up, and if you
call me about this again I'm going
to send a friend of mine out there
and have him crack you open with a
fucking rib spreader.

 EDDIE (V.O.)
Dino...

 DINO (V.O)
Nobody knows anything.

THROUGH BINOCULARS: as DINO is HEARD HANGING UP, Eddie
reacts, picks up his phone and throws it across the office.

Welles sits back, trying to accept the realization that he's
found them.  He looks to the PHOTO of the Third Man.

 WELLES
That is you, isn't it, Eddie?

Welles goes to the RECORDER, turns on the TONE DECODER.  Its
LED window LIGHTS UP.  Welles hits STOP, REWIND, PLAY...

 WELLES VOICE (V.O.)
(from recorder)
... and your pals, you're fucked...

Hits FAST FORWARD... hits PLAY, watching the TONE DECODER.
From the RECORDER, the SOUND of EDDIE DIALING a NUMBER on
his touch tone phone... and as EACH TONE is HEARD, a
corresponding NUMBER appears on the DECODER'S LED readout:

   ...1 212 555 9906...

The recorder continues, REPLAYING the CONVERSATION between
Eddie and Dino, while Welles studies the green LED digits.

 WELLES
(quiet, to himself)
Two one two.


EXT.  MANHATTAN CITYSCAPE -- ESTABLISHING -- NIGHT

The brilliant lights of New York's peerless skyscrapers.

EXT.  59TH STREET BRIDGE -- NIGHT

FOLLOW Welles' Ford as it moves along with traffic, crossing
the 59th Street Bridge, into the heart of Manhattan.

EXT.  BANK -- ESTABLISHING -- DAY

"Chase Manhattan Bank," mid-town.

INT.  CHASE MANHATTAN BANK, SAFE DEPOSIT BOOTH -- DAY

Welles puts the 8MM FILM into SAFE DEPOSIT DRAWER, shuts it.


INT.  NY PUBLIC LIBRARY, REFERENCE -- DAY

Busy and crowded, but quiet.  Welles places a massive tome
down on a table:  "Haines Criss-Cross Directory."

Welles sits, takes out his notepad, referring to the phone
number written: "(212) 555-9906."  He opens the reference
book, searching pages...

Thousands of TELEPHONE NUMBERS are LISTED in SEQUENCE, each
with an address.  Welles runs his finger down the page.

EXT.  SOHO STREETS -- DAY

PEDESTRIANS everywhere.  Streets are clogged with DELIVERY
TRUCKS loading and unloading.  Cars horns blow.  Welles
walks to an old, WAREHOUSE BUILDING shoulder to shoulder
with other buildings, labeled "1204" in burnished steel.

Welles climbs the stairs, examines the buzzers.

The top button's labeled "Greystone Imports," the bottom
button reads "Lang Interior Design, by appt."  The middle
button is labeled only by a drawing of a BLACK WIDOW SPIDER.

Welles looks up at the building.

EXT.  1204 WAREHOUSE, SOHO -- LATER DAY

The sun is low.  Less activity on the street.  Welles leans
against a car down the street, smoking a cigarette.

TWO WOMEN walk this way, both in spiked high heels, dressed
in cheap, short, formfitting skirts, both carrying duffel
bags.  They start up the stairs of 1204...

Welles throws his cigarette, walks to follow.

The women hit the center button.  A BUZZER sounds as they
head inside.  Welles hurries up the stairs, catching the
door before it closes.

INT.  1204 WAREHOUSE, ELEVATOR -- DAY

Welles follows the women into a decrepit ELEVATOR.  One
woman hits "2."  Welles hits "3," steps back in the corner.
Elevator doors creak closed.  The two women are heavily made
up, pretty, but worn, eyes dull.

Welles looks down at the leg of one woman, noticing bruises
through her fishnet stockings, poorly covered by make-up.

Elevator doors open on the SECOND FLOOR.  The two women get
out and walk down a grey hallway, towards DOUBLE DOORS
painted black.  Welles stops the elevator door from closing.

The women push the INTERCOM at the black doors.  Another
dull BUZZ is HEARD as the women enter.  The low rumble of
HEAVY METAL MUSIC is HEARD, SILENCED as doors swing shut.

Welles lets the elevator close.

EXT.  1204 WAREHOUSE -- DAY

The elevator opens on the FIRST FLOOR.  Welles gets out,
instead of leaving the way he came, heads towards the
rear... FOLLOW him down a hallway, past a SERVICE ELEVATOR...

EXT.  1204 WAREHOUSE -- DAY

Welles comes out BACK DOORS into an sunless alleyway with
fire escapes above.  There's a TRASH DUMPSTER, overflowing.
Rats scatter upon Welles, arrival.

Welles looks to make sure he's alone.  He starts tearing
open GARBAGE BAGS.  Flies swarm.  One bag's filled with
empty food containers and old newspapers.

Welles tears open another bag, finds burnt out FLORESCENT
LIGHTBULBS, digs out a handful of empty PHOTO PAPER
PACKAGES, bottles of DEVELOPING CHEMICALS.  He pulls out a
few MAGAZINES; Time, Newsweek, etc...

The magazines are cut up, falling apart, with pictures
chopped out from many pages.  Welles examines ADDRESS LABELS:

"Dino Velvet/D.V. Films
1204 Keller Street
New York, NY 10049"

INT.  PHONE BOOTH, NYC STREETS -- NIGHT

Welles is on the PHONE.  The city bustles past.

 WELLES
(into phone)
What do you know about a guy called
Dino Velvet?  Dino Velvet Films?

INT.  ADULT BOOKSTORE -- DAY -- INTERCUT

Max is on the phone by the register, ringing purchases.

 MAX
(into phone)
Dino Velvet... yeah, he's like the
John Luc Godard of S+M flicks,
supposed to be a real weirdo.

 WELLES (V.O.)
(from phone)
A weirdo making S+M films?  Who'd
have thought it?

 MAX
(into phone)
His stuff comes out of New York.
Bondage and fetish videos, Gothic
Hardcore.  Definitely not for the
squeamish.

 WELLES (V.O.)
Specialty product.

 MAX
You're learning.

 WELLES (V.O.)
Where does he sell it?

 MAX
Out of the back of bondage magazines
mostly, but you can find it on the
street if you look.  He'll also do
commissions, for enough money...

INT.  PHONE BOOTH -- DAY -- CONTINUOUS

 MAX (V.O.)
(from phone)
Nothing illegal, it's always
borderline.  Like if some freak
wants to see a transvestite in a
full rubber immersion suit getting
an enema from a...

 WELLES
(into phone)
Alright, I get the picture.

 MAX (V.O.)
He cuts all kinds of other stuff
into his movies; photographs,
newsreel footage, subliminal images.
Thinks he's making art.

 WELLES 
Well, I'm in New York now.  What do
you say to flying out and giving me
a hand?

 MAX (V.O.)
I'm a working stiff, pops.

 WELLES
Take a vacation.  I'll pay you four
hundred a day, plus expenses.

 MAX (V.O.)
You want me to come out there and
play private eye?

 WELLES
Consider it.  Meanwhile, dig up
whatever Dino Velvet films you can.
Get receipts.  I'll call back.

 MAX (V.O.)
See ya.

Welles hangs up, starts feeding quarters into the phone.

INT.  MRS. CHRISTIAN'S BEDROOM -- NIGHT -- CONTINUOUS

Mrs. Christian's in bed, pale and sickly.  The PHONE RINGS.
Mrs. Christian reaches for it.

 MRS CHRISTIAN
(into phone, weakly)
Hello?

 WELLES (V.O.)
(from phone)
Mrs. Christian, Tom Welles here.

 MRS CHRISTIAN
(coughing)
How are you?  Having any luck?

 WELLES (V.O.)
I don't know if luck's the word.
Are you feeling alright?

 MRS CHRISTIAN
I've been ordered into bed.  The
doctor says I've gotten the flu, or
some other wretched ailment.

 WELLES (V.O.)
I hope it's nothing serious.

 MRS CHRISTIAN
Nothing more than a bother.  Have
you any news for me?

INT.  PHONE BOOTH -- DAY -- CONTINUOUS

 WELLES
(into phone)
I've made progress.  I'm in
Manhattan.  Once a few more pieces
fall into place, I'll drive to you
and give you an update.

 MRS CHRISTIAN (V.O.)
(from phone)
Fine...

MRS. CHRISTIAN is HEARD COUGHING.  Welles waits.

 WELLES
I've got about five thousand left in
cash, but I'll need another thirty,
if you approve.

 MRS CHRISTIAN
How will I get it to you?

 WELLES
If you have a pencil and paper, I'll
tell you how to send it.


EXT.  MOTEL, HELL'S KITCHEN -- NIGHT

A TAXI pulls over in front of this flea-bag motel.  Max gets
out with a SUITCASE, looks at the dubious accommodations.

INT.  MOTEL, MAX'S ROOM -- NIGHT

Max enters with Welles, turns on a light and throws his
suitcase on the bed.  The room is disgusting.

 MAX
You didn't say it was gonna be this
luxurious.

 WELLES
It's their Presidential Suite.

 MAX
Great.

Max looks in the bathroom.

 MAX
Oh, come on, man, what are we doing
in this flea bag?

 WELLES
It's cheap, and people know to mind
their own business. What have you
got for me? 

Max opens his suitcase, takes out THREE VIDEO TAPES.

He hands them to Welles.  The boxes are covered in jumbled
PHOTO COLLAGES: American flag, S+M men and women, a skull,
mannequins, a scorpion, cut-outs of arms, legs and eyeballs.

 MAX
Dino Velvet.

INT.  WELLES' MOTEL ROOM -- NIGHT

Welles is lit by the flicker from the TELEVISION SCREEN.  WE
SEE NOTHING.  We HEAR the rhythmic MUFFLED MOANS of a WOMAN
from the TV, can't tell if it's pleasure or pain.

Max is asleep in the bed, PIZZA BOX near his feet.

Welles drinks beer, gets up and ejects the CASSETTE from a
VCR, tosses it aside, tired.  He picks another Dino Velvet
TAPE, puts it in, sits.

ON TV: GOTHIC ROCK is HEARD over old, scratchy IMAGES: of
Klansmen around a burning cross... Dracula menacing a
sleeping woman... a man in a Devil costume dancing...

Welles opens another beer.

ON TV: a WOMAN is tied up, arms in the air, hanging from the
ceiling, gagged and blindfolded, in a dungeon lit by
candelabras.  Then, glimpsed IMAGES: worms writhing in
slime... gargoyles... a guillotine falling.  Then, the bound
woman, struggling.  A MASKED MAN in a leather jacket enters.
He wears a LEATHER MASK with zipper eyes and mouth...

This focuses Welles' attention.

ON TV: the Masked Man circles the captured woman...

 WELLES
Max... wake up...

Max awakens, rolling over, groggy.

 MAX
Wha... ?

 WELLES
(points at TV)
Who is this, in the mask?  Who is he?

Max tries to see, eyes barely open.

 MAX
He's one of the lunatics Dino uses.
He's in a bunch of these.

Welles watches.  On the TV, Masked Man takes off his jacket
shirtless, reveals an impossibly muscled body.  Huge arms,
thick chest, oiled, dotted in pimples. 

 MAX
Why?  He have something to do with
whatever you're into?

Still watching the behemoth on TV, Welles is less sure.

ON TV: the bulging Masked Man flexes, ripped.

 WELLES
No... it's nothing... that's not him.

Welles rubs his eyes, sits back.  Max sits up, watching.

ON TV: Masked Man pulls the bound woman's head back by her
hair, licks her face with his thick tongue...

CLOSE ON: Masked Man grips the woman's head, still licking.
He pulls down the woman's blindfold...

Welles sits forward, realizing, horrified...

Welles goes to the VCR, hits PAUSE.  The IMAGE on TV
FREEZES.  Welles goes back, FRAME by FRAME...

... to the CLOSE UP where Masked Man grips the woman's face.
FREEZE FRAME.  On Masked Man's hand: a TATTOO, on the arch
between his forefinger and thumb, same as the scrawny Masked
Man in the snuff film.  A PENTAGRAM TATTOO.

 WELLES
Who is he?

 MAX
I told you, he's one of Dino
Velvet's stock players...

 WELLES
Who is he, his name?

 MAX
Nobody knows his name.  That's his
thing.  He always wears a mask.  You
never see his face.  He calls
himself "Machine," that's what they
call him.  Machine. 

Welles hits PLAY.  On TV, Masked Man runs his hands up and
down the woman's body.  The woman's eyes are filled with
fear.  Welles sits, unnerved, watching.

 MAX
They say he's half brain-dead from
all the steroids he's using.

Max rolls over, trying to get back to sleep.

 MAX
He's a brutal motherfucker, man.  He
loves what he does for a living. 


INT.  WELLES' MOTEL ROOM -- DAY

Welles enters, carries an OVERNIGHT PACKAGE and his LOCK
BOX.  At the desk, he tears open the package, opens the
MANILA ENVELOPE inside; finds FIFTY THOUSAND DOLLARS in
thousand dollar bills, wrapped in plastic and masking tape.

Welles takes the lock box to the bed and works the
combination, opens it.  He takes out the holster, stands
looking down at the gun.  He puts the holster on.


EXT.  1204 WAREHOUSE -- DAY

Welles' Ford waits with turn signal on.  A car pulls out of
a parking space.  Welles takes the space.

INT.  WELLES' CAR -- DAY

Max is in the passenger seat.  Welles looks to 1204.

 WELLES
You don't need to be here.

 MAX
What kind of Junior P.I. would I be
if I didn't go with you?

INT.  1204 WAREHOUSE, SECOND FLOOR -- DAY

Welles and Max get off the elevator, moving down the grey
hall, to the black doors.  Welles pushes the INTERCOM
BUTTON.  After a moment, the INTERCOM CRACKLES...

 MAN'S VOICE (V.O.)
(from intercom)
Who is it?

Welles waits, presses the button again.

INT.  DINO VELVET STUDIO -- DAY

The doors BUZZ and Welles and Max warily enter this large,
dark, converted warehouse.  Square pillars shoot from floor
to ceiling.  Shafts of light cut down from high windows.

A large THUG in a pinstripe suit crosses from a far DESK.

 THUG
You're in the wrong place.

 WELLES
We're looking for Mr. Velvet.

 THUG
He's not here. 

Welles looks around, at piles of PROPS; a huge faux-stone
ANGEL and GARGOYLES, elaborate CANDELABRAS, a huge BIRDCAGE,
massive WOODEN CROSS, NAZI FLAGS.

 WELLES
Why don't you tell him we're here to
give him a large sum of money.  If
he's not interested, we'll go.

 THUG
You should leave now, before I have
to remove you.

Welles just stands looking at the thug.  A VOICE is HEARD...

 DINO VELVET'S VOICE (V.O.)
(from SPEAKERS)
Show them in, Milo.

Welles and Max look up.  There are SPEAKERS mounted high up
on the pillars, and SURVEILLANCE CAMERAS looking down.

 WELLES
You heard the boss, Milo.

The disgruntled thug starts back across the studio towards
a distant DOOR.  Welles and Max follow...

They notice an elaborate set built in one corner, a TORTURE
CHAMBER, complete with RACK and IRON MAIDEN.

INT.  DINO VELVET'S OFFICE -- DAY

Thug opens the door and lets Welles and Max in.
The office is huge, windowless walls covered in thousands of
PICTURES from every conceivable source, torn and cut, pinned
up to form an indecipherable collage.  A tall LADDER leans
against one wall, near three TELEVISIONS.

DINO VELVET rises behind his desk, a small, bird-like man,
wearing a black suit and bad hairpiece.

 DINO VELVET
Come in.  Make yourself comfortable.

Welles shakes Dino's hand.  Max looks up at the walls.
IMAGES; porn pictures, news photos, world leaders, autopsy
photos, armies and insects, the naked and the dead.

 WELLES
It's an honor to meet you.  Thank
you for seeing us.

 DINO VELVET
What can I do for you today?

Welles sits.  Shelves behind Dino's desk are piled high with
VIDEO CASSETTES, old MOVIE CAMERAS, big REELS of 16mm FILM.
VIDEOS and MAGAZINES are stacked everywhere.

 WELLES
I'd like to commission a work.  I'm
a great admirer of yours.

 DINO VELVET
Flattering.  And, who's your
colorful little chum?

 WELLES
A fellow investor.

 DINO VELVET
Hmm.

 MAX
You're the only one still shooting
film and transferring it to video.
Nobody appreciates that kind of
integrity anymore... the grain, the
gritty look you get.

 DINO VELVET
Well, I'm glad you appreciate it.
(to Welles)
What would you say is your favorite
piece?

Welles considers.  Max glances over, looks back to the walls.

 MAX
I know if I had to pick, it'd be
"Choke," or "Devil."

 WELLES
"Devil" frightened me as much as it
excited me, but I'd be hard pressed
to choose a favorite.

Dino grins, showing yellowed teeth.

 DINO VELVET
You said something about money.

 WELLES
Yes.  What we're looking for is
rather specific.

Welles takes out an ENVELOPE, puts it on the desk.

 WELLES
That's five thousand dollars.

 DINO VELVET
Is it?

 WELLES
Five thousand now, five thousand on
delivery. 
Two women, one white and one black,
as long as they have large breasts.
Hard bondage, or course.  Other than
that, trusting your artistic
interpretation, I have only two
stipulations.

 DINO VELVET
And they are?

 WELLES
I want to watch you work.

 DINO VELVET
I'll consider it.

 WELLES
And the other performer... it has to
be that monster you use... the man
in the mask.

 DINO VELVET
Machine.

 WELLES
If it's not him, there's no deal.

Dino drums his painted fingernails on his lips.

 DINO VELVET
He might be interested... but it
would mean another five thousand.

 WELLES
We can do that.

 DINO VELVET
Well, well, I'll have to put my
thinking-cap on about all this.
You'll leave the money as a deposit?
(off Welles' nod)
Very good.

Dino stands, picks up a still CAMERA off his desk and comes
to look at Welles, studying him.

 DINO VELVET
You have a beautiful face... the way
the light hits it.  I'd like to take
your picture.  You don't mind?

 WELLES
I'd rather you didn't.

 DINO VELVET
What's the problem? 

 WELLES
I'm camera shy.

 DINO VELVET
You trust me to keep your money, but
not to take your picture?

 WELLES
Those are two different kinds of
trust.
(stands)
Thank you for your time.  I hope we
can do business.

Welles leaves.  Max goes with him.  Dino watches them leave.


EXT.  MANHATTAN STREET -- NIGHT

HORNS BLARE.  TWO CARS have collided head-on.  A large CROWD
gathers.  One windshield's shattered, blood spattered.  The
driver is slumped over the wheel, gushing blood.

On a nearby street corner, Welles in on a PAY PHONE.
HEAVY METAL can be HEARD filtered through the receiver.

 WELLES
(into phone)
So, what do you say?

INT.  DINO VELVET'S OFFICE -- NIGHT -- CONTINUOUS

Dino's stands in the middle of his office, naked, his back
to us, 8MM camera in hand, on the phone.  A NAKED WOMAN
dances for Dino.  A Heavy Metal MUSIC VIDEO plays on a TV.

 DINO VELVET
(into phone)
I'll do this for you.  Fifteen
thousand dollars.

 WELLES (V.O.)
(from phone)
Machine's in?

 DINO VELVET
(into phone)
He's in.  It will be his pleasure.

INT.  PHONE BOOTH -- NIGHT -- CONTINUOUS

 DINO VELVET (V.O.)
(from phone)
Be at 366 Hoyt Avenue, three
o'clock, tomorrow.

Welles digs out his notepad, writing. 

 WELLES
(into phone)
Where's that?

 DINO VELVET (V.O.)
Brooklyn.  Don't be late.


EXT.  MOTEL COURTYARD, POOL -- NIGHT

HORNS and TRAFFIC are HEARD.  Max and Welles sit in lawn
chairs at the tiny pool.  Welles smokes.  Max drinks beer.
They watch an ELDERLY WOMAN in a one piece bathing suit
climb from the pool and walk to the diving board, diving in.

 MAX
What's next?

 WELLES
I'm trying to figure that out
myself.  I have to see Machine
without his mask.

 MAX
Still don't want to tell me what
you're doing?

 WELLES
Nope.

The old woman climbs out and heads back to the diving board.
Welles takes out a thick ENVELOPE, hands it to Max.

 WELLES
This is for you.

Max doesn't understand, opens the envelope, finds about
fifteen thousand dollars in the envelope.

 MAX
What's this?

 WELLES
It's money.  People use it to
purchase goods and services.

Max looks at it again, can't believe it.

 MAX
Look... that's awful generous and
everything...

 WELLES
It's not my money.  The woman I got
it from is never going to give it a
second thought.  Let's not make a
big deal out of this, okay? 
(pause)
Go be a race car driver.  Go run for
President.  Whatever.

Welles puts his cigarette out, stands.

 WELLES
I'll see you around.

Welles walks away, heading to his room.  Max watches him go,
doesn't know what to say, looks in the envelope.

The old woman climbs out and heads back to the diving board.


EXT.  BROOKLYN STREETS -- DAY

A deserted, war zone neighborhood of abandoned, graffittied
buildings.  A few burnt out cars on the street.  Welles
drives through, watchful.

Welles drives past a huge TWO-STORY WAREHOUSE, does a u-turn.
He parks the car.

INT.  WELLES' CAR -- DAY

Welles checks his gun, returns it to his holster.

EXT.  BROOKLYN WAREHOUSE -- DAY

Welles climbs crumbling concrete stairs, looking all
directions, crossing a LOADING DOCK towards a DOOR...

INT.  BROOKLYN WAREHOUSE -- DAY

Welles enters slowly, trying to get his eyes to adjust to
the darkness.  A vast, empty space looms before him.

In the middle of the warehouse, Dino Velvet stands, in a
powder blue suit, holding an archery BOW and ARROW.

 DINO VELVET
There you are.  Come join us.

There's a wrought IRON BED not far from Dino.  MACHINE is
seated on the mattress, a huge man, wearing a leather S+M
harness and the same WRESTLING MASK as in the snuff film.

Welles gathers his courage, walks towards them.

Dino pulls back on the bow, aiming away across the
warehouse.  He stands by a TABLE with a QUIVER of ARROWS
propped up.  He shoots an arrow toward a large TARGET...

Strikes the target dead center, BULL'S-EYE.  As Welles gets
closer, he notices several things ... 

... a 16MM CAMERA mounted on a TRIPOD, facing the bed, along
with several movie LIGHTS

... several BOWIE KNIFES are laid out on the table, beside
a pair of HANDCUFFS...

... Machine is watching him as he approaches...

Welles stops, not far from Dino and Machine, but keeping his
distance.  Dino's still firing arrows at the target.
Machine's still staring at Welles.

 WELLES
(to Machine)
Hello.

Machine just stares at him with bloodshot eyes.

 DINO VELVET
You brought the money?

 WELLES
(takes out envelope)
Right here.

Dino lets fly another arrow... another bull's-eye, then
turns to look at Welles with a smile.

 DINO VELVET
Excellent.

 WELLES
Where are the women?

 DINO VELVET
They should be here any minute.

Welles comes forward slowly, places the envelope on the
table, beside Bowie knifes.  He's sweating.

 WELLES
(of the knifes)
What are these for?

 DINO VELVET
Hmm?  Oh, the knifes?  They're just
props.  Nice, aren't they?

 WELLES
Sure.

Dino walks across towards the target.

 DINO VELVET
Machine and I were just talking
about knifes.  The beauty of
knifes...

Dino pulls arrows from the target.

 DINO VELVET
He was saying how fascinated he is
by their simple ability to be sharp.
The ability of a piece of metal to
be so thin that it is almost
nothing...

Dino walks back to the table, replaces the arrows in the
quiver, cueing another arrow in is bow.

 DINO VELVET
So close to nothingness that it cuts
with minimum effort, because it's so
non-intrusive.  Flesh is fooled.  It
blooms open as the blade widens, but
by then it's too late, because the
knife's already doing its pure,
simple damage.

Dino shoots another arrow to the target.
A CLATTER attracts Welles attention.  Far across the
warehouse, a DELIVERY DOOR rolls upwards.  A CAR with tinted
windows drives in...

The MAN who opened the door, silhouetted in sunlight, stays
behind to close the door as the car pulls forward...

 DINO VELVET
Ah, ours guests have arrived.

Machine stands.  He is a giant.
Welles takes a few steps back, wary, sweating hard now.

The car parks across the warehouse, not far from the target.

Dino puts another arrow in his bow, pulls it taunt, aims at
the target... turns, aims the arrow at Welles.

 DINO VELVET
Mister Welles... would you be so
kind as to remove any firearms from
your person?

 WELLES
What are you... ?

 DINO VELVET
Take out your gun!

Welles brings his hand towards his holster...

 DINO VELVET
Slowly.  Let me see it.

Welles takes out his gun, looks across the warehouse...

The SILHOUETTED MAN is walking this way.  Can't tell who he
is yet.  Machine heads the direction of the parked car.

 DINO VELVET
Empty the gun onto the table, very
carefully.

 WELLES
Look, I don't know what this...

 DINO VELVET
Shut up, cunt!  Do exactly as I say,
or I'll put this arrow through your
throat.

Welles obeys, helpless, dumps the bullets out on the table.

The SILHOUETTED MAN'S getting closer.  It's Eddie Poole.

 EDDIE
Is that him?

 DINO VELVET
(to Welles)
Put the gun down, take the
handcuffs.  Handcuff yourself to the
bed.

Welles obeys, walks to the bed.
Welles attaches one cuff to the bed's iron rail, fastens the
other cuff around his wrist. Dino puts down the bow and arrow.

 DINO VELVET
(still to Welles)
Didn't know what to make of you at
first, and you certainly had Eddie
on pins and needles.  But, lo and
behold, from out of the blue came an
old business acquaintance to explain
everything...

Welles looks across to the car...
The sinister lawyer, Longdale, gets out from behind the
wheel and hands the keys to Machine, walks this way...

 EDDIE
This is the fucker?  Motherfucker,
doesn't look like anything...

Eddie walks around the bed, studies Welles.  Welles watches
him.  Eddie goes to stand behind Welles, rushes forward...

PUNCHES Welles in the side of the head.
Welles goes down, clutching his face.

 EDDIE
Doesn't look like shit.

Eddie pulls Welles to his feet, throws him against the bed,
frisking him from head to toe.

Longdale comes to stand beside Dino, nervous, taking out a
tiny HANDGUN and pointing it at Welles.  Welles looks up,
holding his head, afraid, sits on the bed.

 DINO VELVET
(to Welles)
You remember Mr. Longdale, don't you?

 WELLES
I remember him.

 LONGDALE
Let's get this over with.

 DINO VELVET
Fine idea.

Dino comes to sit on the bed beside Welles.

 DINO VELVET
You're going to go get the film you
received from Mrs. Christian, bring
it here and put it in my hand.  And
to save time, so we make this as
efficient as possible, there's an
incentive...

Dino puts his fingers in his mouth, lets out a sharp WHISTLE.

Across the warehouse, Machine uses the car keys to open the
trunk of the car, pulls SOMEONE out...

It's Max, beaten bloody, bound, face swollen, gagged, hardly
conscious.  Machine throws him to the floor.

 WELLES
No...

Welles tries to go towards Max, yanked back by the
handcuffs, pulls the bed a few inches, but it's heavy.

 DINO VELVET
Friend of yours?

 WELLES
Look, he's got nothing to do with
this... let him go...

 DINO VELVET
Can you guess what I'm going to say
next?

 WELLES
He doesn't know anything... he's got
nothing to do with this...

 DINO VELVET
Bring the film, or we kill him.

Sorrow and rage rises up in Welles, but there's no choice.

 WELLES
I'll get it.  It's in a safe deposit
box, in the city...

 DINO VELVET
How cooperative.  Longdale will keep
you company.

Dino takes out HANDCUFF KEYS, throws them to Longdale.
Longdale approaches Welles carefully, unlocking him.

 DINO VELVET
Don't let Longdale's questionable
choice of weapon give you any ideas.
If his fey little gun puts enough
little holes in you, you'll be just
as dead... and so will Max.

 EDDIE
Move it, dirtbag... !

Eddie comes to SHOVE Welles.  Welles stumbles to the
ground, gets to his feet.  Welles walks, takes one last
glance back towards Max.  Longdale follows.

 DINO VELVET
(watching them go)
Do hurry.


EXT.  MANHATTAN STREETS -- DAY

Welles' car moves in the slow flow of traffic into mid-town.

INT.  WELLES' CAR -- CONTINUOUS

Welles is at the wheel.  Longdale is in the passenger seat,
gun held in his lap.

 WELLES
You were the middleman, am I right?
Old man Christian wasn't about to go
shopping for a snuff film himself.

 LONGDALE
Wouldn't exactly have been possible
for a man of his stature.

 WELLES
So, he sent you, gave you the money,
his errand-boy.  And if you refused,
it wasn't like you could tell anyone
your pervert boss just asked you to
get him a snuff film.  That's the
beauty of lawyer/client privilege.

 LONGDALE
That's trust.  Mr. Christian trusted
me implicitly.

 WELLES
Must have paid you a lot, for you to
risk everything.  Would've had to
have cut yourself a real nice piece
of money.

 LONGDALE
I was well compensated.

 WELLES
That's why you got scared when Mrs.
Christian hired me.  You knew about
the film, figured it had to be in
that safe.  How'd you find me?

 LONGDALE
Never mind how I found you.

 WELLES
Followed me... must have freaked out
when you saw me closing in on your
buddies...

 LONGDALE
They're no friends of mine.

 WELLES
Except, you're willing commit murder
with them.

 LONGDALE
None of this would be happening if
you would have left it alone.  If
you weren't digging up a girl who
died six years ago.  A girl no one
even remembers.

 WELLES
Mary Anne Mathews, that was her
name.  Her mom remembers her.

Welles looks at Longdale.

 WELLES
You found these smut dealers and
asked to buy a snuff film, right?
Wanted them to find you one.  Well,
they didn't find you one, Longdale,
they went out and made you one...

 LONGDALE
Shut up.

 WELLES
Mary Anne Mathews was alive till you
paid money to have her murdered.

 LONGDALE
Shut your mouth and drive!

 WELLES
Did it get him off, huh, watching
them cut her up?  Tell me, because
I really want to understand.  Did he
jerk off to it?  You watch it with
him, sit there giving him a handjob
while you both watched... ?

Longdale jams the gun against Welles' side.

 LONGDALE 
You're making me very angry.

 WELLES
Just tell me.  Tell me some more of
the secrets you and Christian
shared. What kind of degenerate
pervert was he really?  What the
fuck did he want with a snuff film?

 LONGDALE
You're asking me why?

 WELLES
I'm asking.

Longdale sits back, wipes sweat from his face.

 LONGDALE
A man like Mr. Christian, a great
man... all his money, all his
power... a man who attained
everything there was to attain...

 WELLES
Why did he buy a film of some poor,
lost girl getting butchered?

 LONGDALE
Isn't it incredibly obvious?

 WELLES
Enlighten me.

 LONGDALE
Because he could.  He did it because
he could.
(pause)
What other reason were you looking
for?

Welles tightens his grip on the wheel, numbed. 


EXT.  CHASE MANHATTAN BANK -- DAY

Welles double parks, puts his hazard lights on.

INT.  WELLES' CAR -- CONTINUOUS

Longdale sits forward, looks to the bank.

 LONGDALE
You've got four minutes till I call
Mr. Velvet and let him know there's
a problem.

Longdale takes a CELLULAR PHONE from his pocket, shows it.
Welles climbs out, heading to the bank...

INT.  BANK, SAFE DEPOSIT VAULT -- DAY

Welles and the SAFE DEPOSIT MANAGER enter.  They go to put
their KEYS in one drawer, unlocking it a pulling it out.

 MANAGER
May I show you to a booth...

 WELLES
No, I've got it.

Welles pulls the drawer open, takes the 8MM film out and
hands the empty drawer to the manager, exiting.

INT.  BANK -- DAY

Welles comes out from the SAFE DEPOSIT VAULT, pocketing the
film, crossing towards the entrance, looking around...

... at other CUSTOMERS waiting on line...

... at a GUARD with a GUN at his side...

Welles detours, toward one of the LOAN DESKS.  The BANK
EMPLOYEE behind the desk is occupied, on the phone.

As Welles moves past the desk, he grabs a PAIR of SCISSORS
from a pencil holder and palms it, heading to the door...

INT.  WELLES' CAR -- DAY

Welles gets behind the wheel.  Longdale looks at his watch.

 LONGDALE
You almost went over your limit.

 WELLES
Fuck you.

Welles puts the car in gear and drives. 

 LONGDALE
Give me the film.

 WELLES 
You'll get it when we get there.

Longdale puts the gun to the side of Welles' head.

 LONGDALE
Give me the film.

 WELLES
Go ahead, shoot me.  Then try
driving to Brooklyn with my brains
all over the windshield.

Welles keeps driving.  Longdale sits back, stewing.


INT.  WAREHOUSE -- DAY

The door is kicked open.  Welles enters, takes the 8MM FILM
out and holds it in his hand.  Longdale follows.

As Welles moves forward, his face goes slack...

Machine is seated on the bed, Eddie and Dino stand smoking
cigarettes, and further on, Max is tied to the target,
slumped over, three arrows in his chest.  Dead.

 WELLES
No!!

Welles runs towards Max, crying out, tears in his eyes...

Machine rises, goes to intercept Welles, grabbing him.
Welles tries to break free, but Machine lifts Welles up and
throws him brutally to the ground.

Welles scrambles to get up...

 WELLES
You fuckers!

Eddie comes to KICK Welles in the face.
Welles is sent sprawling, blood gushing from his nose.  He
lays there, stunned, weeping.

Eddie pries the 8MM FILM from Welles' hand, tosses it...

Dino catches the film.

Machine comes to drag Welles towards the bed.

Dino unspools the film, holding it up to examine it.

Machine handcuffs Welles to the metal bedframe.  Welles
falls to his knees, holding his face.
Eddie PUNCHES Welles in the head.

 EDDIE
You're a dead man.

 DINO VELVET
Leave him alone.

 EDDIE
Fuck off.

Eddie PUNCHES Welles in the kidney.  Welles tries to protect
himself.  Eddie raises his fist to punch again, but Machine
catches Eddie's fist, throws Eddie back...

 EDDIE
What the fuck... !

 DINO
I promised him to Machine.

Eddie looks up at Machine, who towers over him.

 EDDIE
... sorry...

 DINO VELVET
First things first.  You might want
to watch this, Mr. Welles...

Welles looks up through tears...
Dino drops the 8MM FILM on the floor, takes a small bottle
of lighter fluid from his pocket.  Longdale comes to watch.

Welles watches helpless, agonizing...

 WELLES
Don't... please...

Dino drops the film to the floor, sprays it with fluid,
takes out matches, light one, drops it...

The 8MM FILM goes up in flame...

Welles watches, quaking, hysterical, trying to pull himself
towards the flame, dragging the bed...

The film is destroyed by flame...

Welles gives up, presses his face to the floor, eyes shut.

 DINO VELVET
And so it ends.  It's as if she
never existed.

Welles falls back, gasping, wiping blood and tears and
spittle from his face, getting slowly, to his feet.

 DINO VELVET
Don't blame yourself.  You were in
way over your head.

He looks to Max's corpse, to the smoldering film...
Swallowing back his fear, panic and rage...

 WELLES
Motherfuckers.  Small time,
motherfuckers... !  Tell me
something...

Welles spits blood, hangs onto the bed for support.

 WELLES
I know why you did it, Dino,
Eddie... but, why'd the lawyer do
it?  Must have been a helluva lot of
money, right?  One fuckload of
money...

Welles sits on the bed, eyes burning with fury.

 WELLES
So, what are you all still doing
small time, huh?  What are you still
doing in the sewer, Eddie?!
Christian gave Longdale a million
dollars to find him a snuff film.
How much did you ever see... ?

Eddie and Dino look to Longdale.

 EDDIE
What's he talking about?

 WELLES
One million dollars, Dino.  How much
did he tell you he had...

Longdale's getting very nervous.

 LONGDALE
He's lying.

 WELLES
Look at him.  You think he played it
square?  How much did he give you,
how much did he keep for himself?

Eddie walks towards Longdale...

 EDDIE
What the fuck's he talking about?

Longdale takes out his gun, aims it at Machine, Dino and
Eddie, scared...

 LONGDALE
Stay away from me. 

 DINO VELVET
What's going on, Longdale?  Did this
happen?

 EDDIE
You sell us short, you fuck?

 LONGDALE
Stay back!  You have a gun, Eddie,
show it to me.  Now!

Eddie slowly takes out his gun, seething.

 LONGDALE
Put it on the ground, kick it here...

Eddie puts the gun down, kicks it...
Longdale picks it up, throws it far away.

 EDDIE
You fucking lawyer...

 LONGDALE
Move back!  All of you... move!

Machine, Dino and Eddie stand between Longdale and the car
with tinted windows parked across the warehouse...

 DINO VELVET
What were you thinking?

Welles watches as Machine, Dino and Eddie back slowly away
from Longdale.  Longdale's gun hand is shaky...

Welles tries to drag himself towards the table where his gun
and bullets are, dragging the bed, inch by inch...

Longdale back away, trying to angle around the menacing trio
so he can get to the car...

 LONGDALE
Back off!  Everything's been taken
care of, and I'm leaving now...

 DINO VELVET
You're not going anywhere if you
fucked us, lawyer.

 LONGDALE
I'm leaving.

 EDDIE
You got the guts, tough guy?  Gonna
kill us all, is that it?

 DINO VELVET
You betrayed us.

 LONGDALE
Stay where you are!

Machine edges forward, holding his hands in the air.
Longdale brandishes the gun...

 LONGDALE
Keep back!

Machine, Eddie and Dino are held at bay...

 DINO VELVET
You're not gonna live through this.

Welles still tries to get to the table, wrist bleeding in
the cuff, bed screeching across the floor...

Machine, hands up, slowly reaches behind his shoulder,
touches the handle of a huge KNIFE sheathed to his back.

 LONGDALE
Our business is done, I'm leaving,
no one's going to stop me...

Longdale glances towards the car, seems like he's about to
make a run for it.  Dino Velvet takes a step forward...

 DINO VELVET
Fuck you!

Machine unsheathes the KNIFE and THROWS...

THUNK!  The knife imbeds to the hilt in Longdale's chest and
Longdale's gun FIRES...

Dino Velvet flies backwards, shot in the face!

Dino hits the ground, screaming, writhing, hands to his
face, blood pouring out between his fingers.

Longdale falls back onto his ass, sitting there, eyes bugged
out in surprise.  He looks down at the knife in his chest.

Machine lets out a SCREAM, runs to Dino...

Machine falls to his knees and grips Dino, tries to hold
him.  Dino's screaming, squirming frantically...

Longdale sits looking down at the knife in his chest, looks
up, and gallons of blood pour from his mouth...

 EDDIE
Fuck.

Eddie comes to look down at the Longdale.  Longdale falls
back, dead, blood still flowing from his maw.

Welles drags the heavy bed, getting closer to the table...

Eddie spins, looks across to see Welles struggling...

Dino breaks free from Machine, runs blindly, still holding
his gushing face, falls, tries to get back up...

Eddie runs towards Welles.

Dino stumbles forwards, writhing, then suddenly lays still.

Machine rises, looking at Dino.  Tears come out from
Machine's eyes and roll down his mask.

One last gasp and shudder from Dino's body; death rattle.

Welles pulls the bed, practically pulling his arm from the
socket, desperately clawing towards the table...
The table is mere feet away...

Eddie arrives, KICK Welles in the ribs...

Welles recoils.  Eddies KICKS again.  Welles curls into a
ball.  Eddie KICKS again...

 MACHINE (O.S.)
NO!

Eddie stops, looks to Machine.

 MACHINE
He's mine!

Machine strides over the Longdale's corpse, puts his foot on
Longdale's chest, yanks out the knife...
Machine starts this way...

Eddie backs from Welles.  Welles looks up, trying to shake
off unconsciousness, sees Machine coming...

Welles bows down, on his knees, as if to accept his fate...
Reaching his free hand into his suit pocket...

 WELLES
No, no, no... please, don't kill
me... please... !

Machine arrives, knife in hand, lifts Welles' head back by
the hair, brings the knife hand back...

 EDDIE
Do him good.

Welles rises suddenly, arm shooting forward, STABBING
SCISSORS deep in Machine stomach...

Machine ROARS, falling back, pitching forward...

Machine's knife clatters to the ground.

Eddie's eyes go wide. 

Machine hits the floor, clutching his guts.

Welles pushes upwards with all he's got left, turns the iron
bedframe onto its side, flipping the mattress off...

Eddie moves forward, furious...

Welles grabs Machine's knife, wielding it, holding Eddie off.

 WELLES
Back off, Eddie...

Welles drags the now lightened bed frame towards the table.
Eddie's sorely tempted, but keeps away.

Eddie turns, looks across the warehouse...

There's his gun, lying there, far away.

Eddie runs for the gun.

Welles pulls himself to the table, reaches for the gun,
knocks the table over.  He's got the gun, but...

Bullets hit the floor as the table falls.

Welles struggles to open his gun with his sole free hand,
gets it open, holds it between his knees...

Welles grabs a bullet...

Eddie's running toward his gun, gasping for air...

Machine's on his knees, pulling the scissors out with
trembling hands...

Welles puts the bullet in the gun, flips it shut, rises,
taking aim across the warehouse...

 WELLES
Stop Eddie!

Eddie's running...

 WELLES
(pulls back the hammer)
I swear to Christ I'll shoot you in
the back... !

Eddie stops, hands up, about ten feet from his gun...

Machine stays on his knees, holding his bleeding stomach.
Welles points his gun at Machine.

 WELLES
Come back, or I put a hole in him.

Eddie's looking at his gun, so close, so far away.

 WELLES
You might make it to your gun, but
not before I shoot Machine.  And if
I have to shoot him because of you,
and I don't kill him, right after he
kills me, he's gonna kill you.

Eddie turns, starts walking back...

 WELLES
(to Machine)
Take off the mask.

Machine shakes his head.

 WELLES
Take it off!

 MACHINE
You got one bullet.

Welles looks to see Eddie heading back, keeps the gun on
Machine, backs away, dragging the bed frame, looks to the
DOOR behind him...

 MACHINE
The only choice you have now, is
which one of us kills you.

Welles backs away, drags the bedframe.  Eddie's getting
close.  Welles points the gun at Eddie.  Eddie slows.

Welles points the gun at Machine, points the gun at Eddie.

Welles puts the gun to the chain of his handcuffs, FIRES...
breaks the handcuff chain.

Welles bolts to the door...

 MACHINE
Get the gun!

Eddie runs back towards his gun.
Machine rises with a grunt of pain, moves towards the door,
but agony doubles him back over to his knees.

EXT.  BROOKLYN WAREHOUSE -- DAY

Welles shoves out into daylight, fleeing down the stairs,
running towards his car...

INT.  WELLES' CAR -- CONTINUOUS -- DAY

Welles climbs in, gets out his keys, starts the car...
He pulls away, TIRES SCREECHING.  Behind, Eddie gives chase,
running, FIRING his gun...

Welles ducks as BULLETS SLAM the car, SHATTERING WINDOWS.

EXT.  BROOKLYN STREETS -- CONTINUOUS -- DAY

Welles' car picks up speed, takes a turn, BURNING RUBBER...
Behind, Eddie curses, runs back to the warehouse.

INT.  WELLES' CAR -- CONTINUOUS -- DAY

Welles glances back, ENGINE ROARING.  He tries to keep from
crying, steers with one hand, holds his bleeding face.

EXT. BROOKLYN STREETS -- CONTINUOUS -- DAY

Welles' car races away.


INT.  WELLES' HOME, KITCHEN -- DAY

Amy looks tired, like she hasn't slept.  She feeds Cindy.
PHONE RINGS.  Amy goes to answer it...

 AMY
(into phone)
Hello?

 WELLES (V.O.)
(from phone)
Amy, it's me.  Listen very
carefully..

 AMY
(into phone)
Tom?  Where have you been... ?

INT.  WELLES' CAR -- CONTINUOUS -- DAY

Welles drives, face caked in dried blood, cellular phone to
his ear.  The HIGHWAY rushes past out the car window.

 WELLES
(into phone)
Amy, just listen.  Take Cindy and
get out of the house.  Do it now.
Go to a hotel and stay there...

 AMY (V.O.)
(from phone)
What's wrong?  Are you alright?

 WELLES
(into phone)
I'm okay.  Please, honey, I can't
explain.  Don't use the phone, just
pack a bag and get out.  I'm on my
way.  I'll be back at the house in
three hours.  Call me from the hotel
when you get there

 AMY (V.O.)
... What's going on?

 WELLES
Just do it, Amy, please, go.

INT.  WELLES' HOUSE, KITCHEN -- CONTINUOUS -- DAY

Amy hangs up, scared.  She goes to grab Cindy up into her
arms, hurrying out of the kitchen and going upstairs.

EXT.  HIGHWAY -- CONTINUOUS -- DAY

Welles' car tears down the freeway, passing other cars.


EXT.  WELLES' NEIGHBORHOOD -- NIGHT

Suburban streets.  Welles' car arrives, parks.  Welles gets
out, starts across a neighbor's yard, cuts between houses...

EXT.  WELLES' HOUSE, BACKYARD -- NIGHT

Welles enters his backyard, slowing, taking out his gun.  He
keeps behind shrubbery, surveying his dark house.

INT.  WELLES' HOUSE, DOWNSTAIRS LIVING ROOM -- NIGHT

Welles uses a key to unlock the SLIDING GLASS DOOR, opens it
slow, enters, gun up, searching the darkness.

INT.  WELLES' HOUSE, OFFICE -- NIGHT

Welles pushes the door open, checks this room.

INT.  WELLES' HOUSE, BEDROOM -- NIGHT

Welles makes sure the bedroom's empty, looks in the
bathroom.  He puts his gun away, leaves the lights off.

He goes to the PHONE on the bedside table, unscrews the
earpiece.  He removes a small, wire-mesh BUGGING DEVICE.

INT.  WELLES' HOUSE, KITCHEN -- NIGHT

Dark.  Welles picks up the cordless phone, struggles to pry
the receiver open.  He discovers another small BUG.

He drops the BUGS to the floor, crushes them under foot.

He puts the phone back together and is replacing it when it
RINGS LOUDLY.  Welles is startled, drops the phone...

Welles takes a breath, trying to shake off the jitters.  He
picks up the RINGING PHONE, answers it...

 WELLES
(into phone)
Honey... ?

 MACHINE (V.O.)
(from phone)
Not quite.

Welles stiffens.

 MACHINE (V.O.)
Nothing like getting home after a
rough day.  Home sweet home.

Welles moves into the HALL, towards the front door...

 MACHINE (V.O.)
Walk away.  Pack your bags, put the
wife and kid in the car and find a
place to hide.  If you're lucky,
you'll never see me again.

Welles takes out his gun, opens the front door, looking out.
The street in front of the house is empty.  CRICKETS CHIRP.

 WELLES
I don't know if I can do that.

 MACHINE (V.O.)
I know who you are.  I know where
you live.  I know everything I need
to know to find you.
(pause)
Who am I?

MACHINE is HEARD HANGING UP the phone.


INT.  HOTEL ROOM -- NIGHT

Cindy's crying.  Amy opens the door with the chain on, sees
Welles, lets him in.  Amy and Welles embrace, kissing.  Amy
touches Welles damaged face, worried...

 AMY
What happened to you?

 WELLES 
I'm okay, honey, I'm okay.  Are you
alright?

 AMY
What's going on, Tom?  What happened?

 WELLES
I can't tell you, Amy.  You know I
can't.  You have to trust me...

 AMY
Tom...

 WELLES 
It has to be this way for now.  It
won't be long.

Welles goes to pick up Cindy, tries to comfort her, kisses
her red face as she keeps crying.

 AMY
Why haven't you called?  Why don't
you answer your phone?

 WELLES
I don't know.  I'm sorry...

 AMY
You're sorry?  What was I supposed
to think?

Amy comes to take Cindy from him.

 AMY
You owe me an explanation.  You
can't treat me like this.

 WELLES
I wanted to call.  I couldn't.

 AMY
You couldn't?

 WELLES
You don't understand...

 AMY
No, I don't, because you're not
telling me anything!

 WELLES
I was in hell.  If I called you...
if I heard your voice... it would
have been so easy for me to quit.
I couldn't do that.

Tears comes to Amy's eyes.

 AMY
You should have.

 WELLES
Amy, I'm not going to let anything
happen to us.

 AMY
Look where we are.  Look at
yourself.  You son of a bitch,
you don't have any idea what
you're putting me through...

 WELLES
I don't know what to say

 AMY
You're killing me...

 WELLES
Don't...

 AMY
What was I supposed to think
happened to you?!

 WELLES
Amy...

Welles goes to Amy, but she pulls away.  She sits on the
bed.  Cindy's still crying.  Welles sits beside Amy, puts
her arms around her.

 WELLES
Forgive me.

Amy cradles Cindy.  Welles rests his head on Amy's shoulder,
places one hand on Cindy.

 WELLES
We have to stay here a few days.
I'll get more clothing from the
house if I can.  I'm sorry.
(pause)
We're going to be okay.

Welles rises.  He goes to the PHONE, starts dialing.  Amy
looks at him, wipes tears.

 AMY
Who are you calling?

 WELLES
Mrs. Christian.

 AMY
What?

 WELLES
She's all I've got.  She's the only
witness.

 AMY
Tom... she's dead.

Welles looks to Amy.

 AMY 
She died in her sleep three days
ago.  It was in the paper...

 WELLES
I just talked to her.

Cindy's crying.  Welles sits into a chair, trying to
understand this, his mind racing.  He hangs up the phone.

 AMY
How could you not know?

Misery pulls down the corners of Welles' mouth.  He tries to
find words, but none come.  He sits forward and hides his
face in his hands, overwhelmed.  Cindy's crying.


INT.  HOTEL ROOM -- LATER NIGHT

Cindy sleeps, encircled by pillows and blankets on the bed.
Amy watches her, runs her hand gently across Cindy's head.

Amy rises, turns out the light, goes to a BALCONY DOOR...

EXT.  HOTEL ROOM, BALCONY -- NIGHT

Welles sits with his feet up on the balcony rail, looking
into the parking lot.  Amy joins him, sits.

 AMY
Promise you'll stay.

Welles looks at Amy.

 WELLES
Promise you won't go back there,
wherever you were.  Whatever it was,
forget it.

Welles takes a deep breath, nods his head.

 AMY
Promise me.

Welles looks out into the night sky of stars.

 WELLES
I promise.

Amy comes to kiss Welles.  Welles wraps his arms around her
and holds her tight.  She holds him.


INT.  HOTEL ROOM -- LATER NIGHT

Amy is asleep on the bed beside Cindy.  Welles comes out
from the bathroom in a fresh shirt and suit, turns off the
bathroom light.  He stands looking at Cindy and Amy.

EXT.  HOTEL -- NIGHT

Welles exits the hotel, heading to his Ford.


INT.  WELLES' CAR -- NIGHT

Welles drives, staring ahead.  Through the windshield, the
headlights illuminate the endless roadway.

EXT.  KENNEDY AIRPORT -- NIGHT

Airplanes take flight.  Manhattan glitters in the distance.


EXT.  WILSHIRE OFFICE BUILDING -- DAY

Eddie Poole's building.  A typically bright, sunny LA day.
In the street, Welles parks a rental car, gets out.

INT.  WILSHIRE OFFICE BUILDING, 8TH FLOOR HALL -- DAY

ELEVATOR doors open and Welles gets off.  He moves down the
hall, around a corner, heading to "Celebrity Films."

Welles tries the door knob, finds it locked.  He looks
around, takes two steps back, KICKS forward... SMASHES the
translucent glass of the door...

INT.  CELEBRITY FILMS OFFICE -- DAY

Welles pushes broken glass out of the way, reaches in to
open the door.  The office has been cleaned out, trash on
the floor, desk drawers hanging open and empty, shelves
empty, posters gone...

Welles grabs one of the file cabinets, pulls it open, finds
it empty, pulls it all the way out and throws it.

INT.  8TH FLOOR HALLWAY -- DAY

People peer out from other offices, worried.  Welles exits
Eddie's office, ignoring them, goes around the corner,
straight to the STAIRWELL, heading downstairs...


EXT.  HOLLYWOOD HILLS -- DAY

Welles rental car parks down the hill.  Welles climbs out,
walking up the hill, heading for Eddie's ramshackle HOUSE.

EXT.  EDDIE'S HOUSE, GARAGE -- DAY

Under the stilts of the porch, Welles passes Eddie's car,
looks in to see it loaded with BOXES and belongings.

Welles moves on to a door at the back of the garage.  He
takes out LOCK-PICKING TOOLS.

INT.  EDDIE'S HOUSE, STAIRWAY -- DAY

Welles enters slow, pockets the tools, takes out his gun.
FOLLOW him up the stairs, into a hallway, past a LAUNDRY
ROOM with washer and dryer, into a LIVING ROOM...

Welles sweeps the room with his gun, wired.  Eddie's house
is predictably a trash heap, strewn with VIDEOS, MAGAZINES,
dirty DISHES and fast food remnants.  Welles moves on...

INT.  EDDIE'S BEDROOM -- DAY

Eddie's throwing clothing into a suitcase, hurried.  Welles
comes into the doorway, taking aim, edging forward.

 WELLES
Hello, Eddie.

Eddie spins, startled.

 WELLES
Put your hands on your head.

Eddie looks out of the corner of his eye... to his GUN.

 WELLES
Put your hands behind your head,
lock your finger together, get down
on your knees.

Eddie does as commanded, gets to his knees.  Welles moves
towards him, very nervous, white-knuckling the gun.
He KICKS Eddie in the stomach, doubles him over.

 WELLES
I owe you a few.

Welles KICKS again.


INT.  EDDIE'S KITCHEN -- DAY

Welles enters the filthy kitchen, carrying Eddie's gun.  At
the sink, Welles pops the gun's clip.  He pushes the bullets
out into his palm, one by one.

He dumps the bullets into the GARBAGE DISPOSAL, drops the
clip in, turns it on.  The DISPOSAL makes a terrible
GRINDING NOISE, straining, till it finally goes dead.

INT.  EDDIE'S LIVING ROOM -- DAY

Welles goes to the picture window and closes the curtains.
He turns on a lamp, goes back towards the bedroom.  After a
moment, he returns, dragging Eddie on the floor...

Eddie's bleeding out his nose, hands DUCT-TAPED together
behind his back, legs bound at the ankle, dragged by a belt
around his neck, choking...

Welles drops the belt, undoes it from Eddie's neck.  Eddie
gasps for air.  Welles pulls him up, puts him on the couch.

 WELLES
Don't go anywhere.

Welles heads for the stairs...

EXT.  EDDIE'S GARAGE -- DAY

Welles goes to Eddie car, tries the door, it's unlocked...

IN THE CAR

Welles takes the thick THOMAS GUIDE map book off the dash.

INT.  EDDIE'S LIVING ROOM -- DAY

Welles returns.  Eddie's on the floor, wriggling.  Welles
drops the Thomas Guide on the coffee table, picks Eddie up,
throws him back onto the couch.

 EDDIE
I'm gonna kill you.

 WELLES
Don't bore me with that bullshit.

 EDDIE
How'd you find me here?

Welles PUNCHES Eddie in the ear.

 WELLES
Don't ask questions.

 EDDIE
Fuck you! 

Welles PUNCHES Eddie in the same ear.  Eddie's hurting.
Welles rubs his aching knuckles.

 WELLES
Starting to recognize a pattern?

 EDDIE
What do you want?

 WELLES
Who is Machine?

 EDDIE
I don't know...

 WELLES
I want his name.

 EDDIE
I told you, I don't know.

 WELLES 
I will never get tired of hurting
you, Eddie, so you might want to
change your attitude.

 EDDIE
What the fuck am I gonna protect
that freak for?  He was Dino's boy,
not mine.  He shows up with his mask
on, leaves with his mask on.  Nobody
knows.

Welles kicks junk off a chair, sits, takes out his gun.

 WELLES
Okay, we'll come back to that.  So,
six years ago a guy contacts you,
through the classifieds, over the
phone, however he does it.  It's
Longdale, looking for a snuff film.
And you, entrepreneur that you are,
tell him you can hook him up.

 EDDIE
Yeah, the fucking lawyer.

 WELLES
Told him you could get him a snuff
film.

 EDDIE
Yeah.

 WELLES
How much did he pay you?

 EDDIE
Thirty thousand each, that fucking
cocksucker.

 WELLES
That's all?  Thirty each.  That's
all it took for you to murder her?

 EDDIE
It was a lot of fucking money.

Welles stands and paces, despairing.  He picks up a LAMP and
throws it, SHATTERS a MIRROR, keeps pacing...

 WELLES
So... you brought Dino in, and he
brought Machine.  And, one day, a
girl walked into your office because
you had an ad in the paper for
models.  And she never walked out.

 EDDIE
Something like that.

 WELLES
What did you do, knock her out,
shoot her up... ?

 EDDIE
What the fuck do you want from me?

 WELLES
I want to know.  I want to know
exactly what you did to her!

 EDDIE
Fuck you then, you want to know?  I
talked her up, told her how
beautiful she was, told her she was
gonna be a star.  I told her I was
gonna get her a screen test, and
while I'm doing that, I got her a
soda and dropped a mickey.  When it
was dark enough, I rang Dino and
told him it was go time, I put her
in the trunk of my car and we went
and we fucking did it.  That's what
happened.  She's dead.  She's been
dead a long fucking time.  Nobody
fucking cares!

Welles puts down his gun, picks up the Thomas Guide, holding
it in both hands, SWINGS -- SLAMS Eddie across the face...

Eddie's stunned, lips bleeding.  He faces forward.

 EDDIE
You wanted to know, now you know.

Welles SWINGS the Thomas Guide -- POUNDS Eddie's face again.

Welles drops the Thomas Guide in a chair, picks up his gun,
leaves the room...

INT.  EDDIE'S KITCHEN -- DAY

Welles enters, starts looking through DRAWERS, searching.
He finds SILVERWARE, selects a serrated STEAK KNIFE...

INT.  EDDIE'S LIVING ROOM -- DAY

Welles returns, goes to grasp Eddie by the shirt collar,
drags him to the floor, face down.  Welles stands on Eddie's
neck, uses the knife to cut the duct tape on Eddie's hands.

 EDDIE
That's right, motherfucker, cut me
loose.  Be a man.

Welles tosses the knife, gun trained on Eddie, picks up the
Thomas Guide and throws it at Eddie... 

 WELLES
Show me!

Eddie, hands now free, pushes himself to a seated position,
looks at the Thomas Guide.

 WELLES
Show me where you did it, on the
map, exactly where you did it.

 EDDIE
Why?

 WELLES
Because we're going there.


EXT.  134 FREEWAY -- DAY

Welles' rental car SPEEDS down the highway, east towards
Pasadena, leaving the City of Los Angeles on the horizon.

EXT.  MOUNTAIN HIGHWAY -- DAY

Welles' car travels a winding HIGHWAY that serpentines up
into the scenic, forested SAN BERNADINO MOUNTAINS.

EXT.  BIG BEAR -- DUSK

The sun is low.  Big Bear Lake is vast, surrounded by
wilderness on all sides.  Welles' car follows a TWO-LANE
ROADWAY that runs along the lake's southern shore.

Welles' car passes sporadic SUMMER HOMES and CABINS.

EXT.  DESERTED ROADWAY -- NIGHT

Heavy forests border close to the road.  Welles' car travels
alone, headlights on, slowing as it comes to an overgrown
gravel DRIVEWAY with a rusty CHAIN strung across it.

IN THE CAR

Welles leans forward to look up at an old SIGN of broken
neon and peeled paint: "Big Bear Motor Lodge."

Welles pulls forward, puts the car in reverse...

ON THE ROADWAY

Welles' car backs up, angling, till the rear bumper comes
against the chain, BACKING... till the CHAIN SNAPS.

Welles' car pulls forward across the empty roadway, turns
around... accelerates down the overgrown driveway...

EXT.  BIG BEAR MOTOR LODGE -- NIGHT

Welles' car comes down the driveway, into a small LOT.

IN THE CAR

THROUGH THE WINDSHIELD: headlights reveal what's left of the
abandoned MOTOR LODGE, a REGISTRATION OFFICE at the center
with attached wings of rooms on both sides.

The LEFT WING of rooms is a fire ravaged, burnt-out
skeleton.  What remains of the OFFICE and RIGHT WING is
boarded over, falling apart.  No window has gone unbroken.

IN THE LOT

Welles turns out headlights and parks.
He gets out, walks to look up the driveway.  A CAR is HEARD.
HEADLIGHTS can be seen a good distance away through the
forest as the CAR PASSES.

Welles goes to his car, unlocks the trunk and opens it.
Eddie's lying in there, arms and legs bound, gagged.

INT.  MOTOR LODGE ROOM -- NIGHT

The door is shoved inward, hanging crooked by one hinge.
Eddie enters first, hands still bound behind him.  Welles
pushes Eddie forward, gun out.

Welles turns on his penlight FLASHLIGHT, shining it into the
room.  There dead leaves all over the floor.  The room's
empty except for a CHAIR lying on its side.

Welles sweeps the room with the inadequate light.  This is
where Mary Anne Mathews died, vaguely recognizable from the
snuff film, without the furniture.

 EDDIE
What are we doing here?

Welles goes to the bathroom door, keeping the gun trained on
Eddie, pushes the bathroom door open with his foot...

The bathroom's cracked MIRROR reflects the penlight and
Welles' palely lit face.

 WELLES 
That night... you didn't have to be
in the room, but you were.
(looks to Eddie)
Why?  Why did you watch?

Eddie goes to the chair, tips it upright with his foot, sits.

 EDDIE
I don't know.  I felt like it.  I
never saw anyone get done before.

 WELLES
You enjoy it? 

 EDDIE
Made me sick, but what did I care?
What did I care if some hump wants
to beat off to that.  It was just
something I was doing for money.

 WELLES
Tell me what happened.

 EDDIE
What do you want to know?  You saw
it, you saw the loop...

 WELLES
Nobody saw you bring her in?

 EDDIE
There wasn't nobody around.  This
place was a shit-hole.  I backed up
the car to the door and we carried
her in, like groceries.  Dino made
her eat a bunch of pills, we laid
out the plastic, put film in the
camera and Machine went to work.

 WELLES
What did you do with her body?

 EDDIE
Took it out the bathroom window.
Buried it in the woods.

 WELLES
Show me.

EXT.  BIG BEAR MOTOR LODGE -- NIGHT

Eddie and Welles come around the corner of the abandoned
motel, Eddie leading the way, Welles following with gun and
flashlight, into the dense forest...

 EDDIE
What are you thinking you're gonna
do... ?

Welles shoves Eddie ahead.

 WELLES
Keep moving.

 EDDIE
Where do you think you're taking
this, huh?  Gonna be a big hero,
avenge that little girl's death?
Gonna make everything right with the
world?  How you gonna do that... ? 

FURTHER ON

Welles and Eddie come over a hill, deeper into the forest...

 EDDIE
You can't go to the cops.  All you
can do is cut me loose and walk
away, because you got nothing...

 WELLES
Stop talking.

 EDDIE
You got absolute zero.

 WELLES
Show me where you buried her.

 EDDIE
I don't know...
(nods to forest)
... out there somewhere.

 WELLES
Where?  Show me where.

 EDDIE
I fucking don't know.  What do you
think... we weren't burying
treasure.  We didn't pace it out so
we could come back and get it.  We
dug a hole and we put her in it.
Your guess is as good as mine.

Welles walks ahead of Eddie, distraught, shining his
flashlight ahead across the indecipherable forest floor.

 EDDIE
You'll never find her.  Nobody ever
will, and even if they did, it
doesn't mean nothing.  Bring in the
cops, bring in the F.B.I., fuck 'em
all.  Without the film, it never
happened.  Don't you get it?  It's
over.  You can't do anything.

Welles turns, aims his gun at Eddie, furious.

 WELLES
I can kill you.  I can leave you out
here, just like you left her.

Eddie's not backing down.

 EDDIE
Do it.

 WELLES
Don't think I won't.

 EDDIE
Do it!  Put me out of my misery so
I don't have to listen to you
whining anymore.  You think it's so
easy?

 WELLES
Easy enough for you.

 EDDIE
I never killed anyone.

 WELLES
That's right, you just stood there
and watched, because you "felt like
it."  Almost makes you worse.

 EDDIE
What do you want?  You want me to
fall to my knees and start crying
like a baby... ?

Eddie walks towards Welles.  Welles backs away...

 EDDIE
Where you going?  You're the one
with the gun.  Aren't I defenseless
enough?  Come on...

Eddie comes ahead, defiant, the gun inches from his face.

 EDDIE
Go ahead and kill me.  Kill me with
that gun, your gun, right,
registered in your name?  Dig the
hole yourself, with your bare hands,
bury the body with your bullets in
it.  Fucking do it!

Welles step forward, presses the gun against Eddie's
forehead, pulls back the hammer... 

Eddie just stares back at Welles with hatred in his eyes.

Welles is terrified, unsure... trying to muster the courage
to do it... gun hand trembling... finger on the trigger...


INT.  MOTOR LODGE ROOM -- NIGHT

Eddie's thrown face down to the floor.  Welles comes to sit
on Eddie's back, facing Eddie's feet, holsters his gun,
takes out duct tape and grabs Eddie's feet, wrapping them...

 EDDIE
You pussy.

Welles keeps going around Eddie's ankles with the duct tape,
till Eddie's securely bound.

He rips the tape roll free and gets up, walking out...

 EDDIE
Fucking pussy!

EXT.  MOTOR LODGE -- NIGHT

Welles pulls the door closed behind him, walks to his car.

IN THE CAR

Welles opens the passenger door and sits, shaken, at his
wit's end.  He opens the glove compartment, finds
cigarettes, digs one out and lights it.

He looks back to the motel room.

He looks down to the glove compartment, at his CELLULAR
PHONE.  After a moment, Welles picks up the phone, looks at
it in his hand.

IN THE LOT

Welles gets out of the car, gets up on the hood, lays back,
staring at the sky.  He closes his eyes, smokes.

Welles opens the phone, looks at the illuminated numbers.
He digs in his suit jacket pocket, takes out his notepad,
pages through, studies one page.

Welles sits up.  He gathers himself, throws his cigarette,
dials a number, puts the cellular to his ear, afraid...

 MRS MATHEWS (V.O.)
(from phone)
Hello... ?

 WELLES
(into phone)
Mrs. Mathews?  It's Thomas.  Do you
remember, I was there a few weeks
ago... asking about your daughter...

 MRS MATHEWS (V.O.)
(from phone)
I remember.  You just left...

 WELLES
(into phone)
I have to tell you something.  It
won't be easy for you to hear.  It's
about your daughter... Mary Anne...
(struggling)
When I... when I was there with you,
her diary, in your attic, in
silverware.  If you read it, you'll
know what I'm telling you is true... 

Welles climbs off the car, paces, aching with misery...

 MRS MATHEWS (V.O.)
What are you talking about... ?

 WELLES
She went to California, to Los
Angeles... she wanted to start over.
She wanted to be an actress...

 MRS MATHEWS (V.O.)
What... ?

Tears comes to Welles' eyes.  It's the hardest thing he's
ever had to do in his entire life.

 WELLES
Mrs. Mathews, your daughter is dead.
She's dead.

 MRS MATHEWS
Who is this... ?

 WELLES
Someone... some men, they took your
daughter and they drugged her, and
they took her to a motel room...
they did terrible things to her...

 MRS MATHEWS (V.O.)
Who are you?

 WELLES
They brought her into the room...
one man, he put a knife to her
throat and he raped her...

 MRS MATHEWS
No...

 WELLES
He raped her and...and...and he
murdered her...he cut her up with
knifes...

 MRS MATHEWS (V.O.)
No... no... no...

 WELLES
They killed her, and they took her
out in the forest somewhere and they
buried her...

 MRS MATHEWS (V.O.)
Why... why are you doing this to
me... ?

 WELLES
They murdered her, Mrs. Mathews, I'm
sorry.  It happened a month after
she ran away.  She's been dead all
this time...

MRS MATHEWS is HEARD SCREAMING, letting out a CHOCKING SOB.
Welles falls back against the car, holds his head, weeping...

 WELLES
I'm sorry, I'm so sorry... there
wasn't anything anyone could do...

Welles pushes disconnect, lowers the phone, drops it to the
ground, utterly drained.  He puts his forearm over his eyes,
gasping, sucking air...

He looks to the motel room, tamping down his sorrow, willing
it to fuel his rage...

He takes out his gun, hands unsteady, determined, opens the
gun and pours the bullets out.  He closes the gun and walks
towards the motel room...

INT.  MOTOR LODGE ROOM -- CONTINUOUS

Welles SHOVES the door aside.  The door's hinge breaks and
the door falls...

Eddie sits propped up against one wall, turns to look...

The door SLAMS to the floor.

Welles moves forward, enraged, closing on Eddie, raising his
arm with the gun grasped by the butt...

Eddie's eyes go wide with fear...

Welles SWINGS the gun down at Eddie's head...

EXT.  MOTOR LODGE -- NIGHT -- CONTINUOUS

The only SOUNDS come from the NIGHT FOREST.  CRICKETS and
distant BIRDS.  We can't see anything but the TOTAL DARKNESS
through the open door of the room.  A CAR is HEARD, getting
LOUDER as it passes, FAINTER as it gets further away.

Finally, Welles comes to the doorway, in shock, steadying
himself against the door frame, shirt and suit spattered
red.  His gun hand and gun are soaked with dripping blood.

Welles looks back into the room, backing away.  He turns and
goes to his car...

IN THE CAR

Welles climbs in the driver's side, shoves his bloody gun
into his holster, tries to wipe blood from his hand onto his
shirt, revolted.  He starts the car. 

INT.  EDDIE'S HOUSE, LIVING ROOM -- NIGHT

Welles enters and crosses through...

INT.  EDDIE'S KITCHEN -- NIGHT

Welles goes to the kitchen sink, turns on the water, starts
scrubbing his bloody hands, using dishwashing liquid,
scrubbing his hands desperately under running water.

EXT.  EDDIE'S GARAGE -- NIGHT

Welles comes out of the house, goes to open the rear door of
Eddie's car, looking through BOXES of Eddie's belongings...

INT.  EDDIE'S LIVING ROOM -- NIGHT

Welles comes up the stairs with a BOX, dumps the contents
onto the living room floor: it's CHILD PORNOGRAPHY, Eddie's
collection from the office, HUNDREDS of PHOTOS...

INT.  EDDIE'S KITCHEN -- NIGHT

Welles pulls open Eddie's cabinets, searching.  He finds
POTS and PANS, choosing a few of the largest...

EXT.  EDDIE'S GARAGE -- NIGHT

Welles uses a cut piece of GARDEN HOSE, siphoning GAS out
from Eddie's car, filling several kitchen POTS...

INT.  EDDIE'S LIVING ROOM -- NIGHT

Welles comes up the stairs, carries POTS of gasoline, dumps
the gasoline onto the pile of PHOTOGRAPHS...

INT.  EDDIE'S BEDROOM -- NIGHT

Welles dumps gasoline over Eddie's bed...

INT.  LIVING ROOM -- NIGHT

Welles stands at the pile of gasoline soaked photos, taking
out a MATCHBOOK, lighting one, lighting the whole book...

EXT.  EDDIE'S HOUSE -- NIGHT

Welles walks down the dark hill, heading to his car.  He
gets in, starts the car and drives downhill, leaving the
headlights off.  BEHIND, the windows of Eddie's ramshackle
HOUSE grow bright as FIRE SPREADS and CURTAINS BURN.


INT.  LOS ANGELES AIRPORT -- NIGHT

Welles stares ahead, in fresh shirt and suit, waiting at a
CHECK-IN COUNTER. 

The female AIRLINE AGENT behind the counter types in her
COMPUTER, stamps his ticket.

Welles shifts his gaze, something catches his eye...

Beside a stapler on the counter, a PAIR of SCISSORS.

 AGENT
There you are, Mr. Welles, confirmed
through to Kennedy.  Gate 32B.

Welles stares, fixated on the SCISSORS.

 AGENT
Mr. Welles?

Welles looks to the agent holding up the ticket.

 AGENT
Gate 32B.

Welles accepts the ticket.


EXT.  MANHATTAN MOTEL -- NIGHT

The Empire State Building in the distance says NYC, and a
CAMERA PAN DOWN says another seedy MOTEL...

INT.  MOTEL ROOM -- NIGHT

Welles sits at a small desk, looking through a PHONE BOOK,
white pages, finds... "HOSPITALS."

Welles picks up the PHONE, chooses a number, dials it...

 WELLES
(into phone)
Hello, can you connect me with the
duty nurse?
(waits)
Hello, this is Lieutenant Anderson
down here in the Thirteenth
Precinct.  I've got a helluva
problem I was hoping you could give
me a hand with.  We had a stabbing
incident a couple of days ago, and
it looks like the supposed victim
gave us a false name and address.
Can you tell me if you had an adult
male with an abdominal wound in you
ER in the last forty-eight hours?
(listens)
You'd remember this guy; a body-
builder, real big guy, five foot
eleven, with acne all over his chest
and back...
(listens)
Alright, thanks for your help. 

Welles hangs up, uses a pen to cross out a number in the
phone book, starts dialing the next number.

                  DISSOLVE TO:

INT.  MOTEL ROOM -- LATER NIGHT

Welles lies on the bed, on the phone, rubbing his eyes.

 WELLES
(into phone)
... guy sticks out like a sore
thumb.  Five foot ten or eleven,
body-builder, bad acne...
(listen)
Okay, thanks anyway.

Welles gets up, hangs up, brings the phone back to the desk.

                  DISSOLVE TO:

INT.  MOTEL ROOM -- MORNING

The PHONE BOOK'S open on the desk with nearly a hundred
hospital phone numbers crossed out.

 WELLES (O.S.)
... abdominal wound.  You'd know him
if you saw him... 

Light cuts into the room from between the curtains.  Welles
paces, carrying the phone with him, weary.

 WELLES
(into phone)
He's a body-builder, stands just
under six feet...

Welles stops in his track, listening, suddenly attentive.

 WELLES
(into phone)
That's right... covered in acne.
That's him, that's the guy.  Listen,
we, uh... we think he filed a bogus
report on this stabbing, gave us a
false name and address...
(listens)
Yes, I'll hold.

Welles goes to the desk, takes out his notepad.  He starts
feeling his pockets for his pen, can't find it, telephone
book, searching, looks under the desk...

Welles ducks under the desk to grab the pen off the floor.

 WELLES
(into phone)
Yes... yes.
(sits, writing in pad)
Christopher Higgins.  Thirty-
fifteen, Thirty Fifth Street.
Where?  Astoria, Queens.

Welles is scribbling all this down in his notepad.


EXT.  QUEENS STREET -- DAY

A relatively quiet residential street.  HOMES are small, two
story affairs, close together, each very much like its
neighbor, some with tiny yards fenced in by brick walls.

Welles' Ford comes slowly down the street.  CHILDREN in
school uniforms are heading off for the day in groups.

Welles parallel parks.

IN THE CAR

Welles turns off the engine.
He's watching a HOUSE on the other side of the street.  The
house is brick on the bottom, aluminum siding on top,
quaint, with brick staircase from the front door down to a
GARAGE underneath, plastic PINK FLAMINGOS on the small lawn.

Cars pass in the street.  Welles watches school children
pass on the near sidewalk.  He slumps down a little in his
seat, adjusting the rearview mirror, adjusting his side
mirror, rolling up the window.

Welles takes a cautionary look around, takes out his gun,
pours bullets out and pockets them.  He picks up a PAPER BAG
off the passenger seat and opens it.

He takes out a long, thin metal FILE, pulling off the shrink
wrap packaging, feels the file with his thumb.

Keeping his open gun low under the steering wheel, Welles
slides the file into the barrel, scraping gently all along
the gun's inner barrel.

                  DISSOLVE TO:

INT.  WELLES' CAR -- LATER DAY

Welles sits smoking a cigarette, watching the quaint house.
He looks in his side mirror...

There's a large CAR coming down the block with its turn
signal on.  Welles slumps a little lower.

The car passes, slowing.  The GARAGE DOOR of the quaint
house begins to open. 

Welles watches...
Can't really see the driver of the car except for the back
of his head, but he's huge.  It's a good bet it's Machine.
Beside him in the passenger seat is a GREY HAIRED OLD WOMAN.

The car pulls into the darkness of the quaint house's
garage.  After a moment, the OLD WOMAN comes from the
garage, walks with a cane, wears glasses.  She goes to the
sidewalk, checks her MAILBOX, finds it empty.

Welles watches.

The old woman goes back to the garage.  She goes inside.
The garage door closes behind her.

                  DISSOLVE TO:

INT.  WELLES' CAR -- NIGHT

Welles still watches the house.  There's a light on in one
of the second floor windows, curtains closed.

Welles yawns, shaking his head, trying to stay awake.

At the quaint house, a light comes on in the front picture
window.  Looks like a living room or dining room.  The old
woman comes to sit at a table.

Welles takes binoculars off the front seat...

THROUGH BINOCULARS

The old woman says something to someone we cannot see.
She's at the dinner table, with a place setting in front of
her.  After a moment, someone joins her...

It's Machine, you can tell by his bulk, by his huge
forearms.  The lacy curtains of the window block part of our
view, so we never see his face.

IN THE CAR

Welles lowers the binoculars, still watching.

Through the window across the street, Machine can be seen
putting a plate of food in front of the old woman.  The old
woman smiles up at him, says something.

Machine goes to light two candles on the table with matches,
then goes back to stand beside the old woman.

Machine is seen from behind, bends to give the old woman a
kiss on the cheek, then leaves the room.  The old woman
starts to eat.

                  DISSOLVE TO:

INT.  WELLES' CAR -- DAY

Dawn light is just breaking.  Welles has fallen asleep,
slumped low behind the wheel, snoring lightly.

Welles awakens with a start, looking around, confused.  He
calms, rubbing his eyes, wiping sweat from his features.

ACROSS THE STREET

The quaint house's garage door begins to rise.

IN THE CAR

Welles sees this, keeps low, watching...
The big car backs out into the street.  The old woman's
behind the wheel, wearing a hat, driving away, alone.

Welles watches the car head away in the rear view mirror.

ON THE STREET

Welles gets out of his car, shuts the door quietly behind
him.  He starts walking towards the quaint house, looks all
directions, making sure no one's around.

Ahead, the garage door begins to close.

Welles picks up the pace, trying not to look too
conspicuous.  The garage door's halfway down...

Welles runs towards the garage, has to dive and roll to get
there, but he makes it under the door just as it closes.

ABOVE

In ONE WINDOW of the quaint house, an eyeball is peering out
from lacy curtains, then moves away and curtains fall shut.

INT.  QUAINT HOUSE, GARAGE -- DAY

Welles gets up, takes out his gun, brushing off.
The garage is dark, full of BOXES and JUNK.  Welles moves
towards the door to the house.

INT.  QUAINT HOUSE, BEDROOM -- DAY

Machine, in T-shirt and jeans, seen only from behind, comes
to a DRESSER and opens a bottom drawer.  His huge hands push
clothing aside, digging deep to the bottom of the drawer,
taking out the WRESTLING MASK.

Machine stands straight, pulling the mask down over his head.

INT.  BASEMENT -- DAY

Welles enters from the garage, gun up.  The dank basement is
small.  A PILE of LAUNDRY lies on the floor near a WASHING
MACHINE. 

SHEETS hang off several CLOTHES LINES strung across two
metal poles.  Welles leads with his gun...

He moves around the sheets, looking behind them.  There's a
WOODEN STAIRCASE leading upstairs.  Welles starts up,
treading lightly, trying not to make a sound...

INT.  KITCHEN -- DAY

Welles slowly opens the door to the kitchen, pointing his
gun.  No one here.  The decor is feminine, neat and tidy.
It's grandma's house, and it shows, with gaudy PRINT
WALLPAPER everywhere, every shelf displaying HUMMEL
FIGURINES or COLLECTORS PLATES.  Very Home Shopping Network.

INT.  DINING ROOM/LIVING ROOM -- DAY

Welles slowly opens the swinging door, entering from the
kitchen, sweeping the room with his gun.  No sign of
Machine.  The whole house is dead quiet.

He passes the dining room TABLE where he watched the old
woman eat last night... passes fake PAINTINGS on the walls,
of waterfalls and sunset mountain landscapes... moves into
the living room area...

Yellow shag CARPET.  A pink SOFA is covered in clear
plastic, facing an old TELEVISION in faux-wooden cabinet.
Welles heads for a staircase leading to the second floor.

Welles creeps up the stairs...

INT.  SECOND FLOOR HALLWAY -- DAY

Welles comes up from the stairs, arrives at a closed DOOR.
He opens the door.  It's a linen closet, with TOWELS and
SHEETS on shelves, and a shelf of MEDICINE.

Welles shuts the door and moves on.  There are TWO DOORS
ahead, both closed.  Welles takes the one to the right...

INT.  MACHINE'S BEDROOM -- DAY

Welles pushes the door in, enters warily.  There's a
constant SCRATCHING HEARD.  The room is like a child's,
except the BED is huge.  Shelves are full of BOARDGAMES and
COMIC BOOKS.  A DANZIG POSTER on the wall.  There's a RECORD
PLAYER with LP RECORDS beside it.  A record turns on the
turntable, the needle caught at the center, SCRATCHING...

Welles eases his way over to the closet... reaching...
Pulls it open, steps back, gun up.  Nothing.  Just clothing.

INT.  SECOND FLOOR HALLWAY -- DAY

Welles crosses, opens the door across the hall, enters...

DOWN THE HALL, very slowly, Machine's head rises on the
stairs, in the garish wrestling mask, peering.

INT.  GRANDMA'S ROOM -- DAY

Welles stays near the door, looks around.  There's a fuzzy
sky-blue COMFORTER on the bed, fuzzy blue SLIPPERS nearby.
Lots of bottles of MEDICINE on the bedside table.

Welles lowers his gun, takes a step back, into the hall...

INT.  SECOND FLOOR HALLWAY -- DAY

Welles turns...
Machine charges down the hall, screaming with rage, BOWIE
KNIFE raised to kill...

Welles brings his gun up, but Machine's upon him, stabbing...

Welles catches Machine's hand, stops the knife.  Machine
grips Welles' gun hand, shoving him back...

Welles is SLAMMED against the wall, grappling, gun hand
pinned.  Welles GUN GOES OFF, once... twice...

BLOWING HOLES in the ceiling.  Machine's grunts, pushing the
knife forward... closer to Welles, face... closer...

Welles struggles, overpowered.  The tip of the horrible
knife is inches away...

Welles bends his knees, crouching, trying to gain distance
from the blade...

Machine pulls Welles gun hand lower, brings it against the
swinging LAUNDRY CHUTE DOOR built into the wall, begins
twisting Welles' hand back, trying to pry the gun loose...

Welles looks out the corner of his eyes to his gun...

Welles turns his gun hand, slowing struggling to aim the gun
towards the knife, but it's awful close to his face...

The knife's shaking, less than an inch from Welles' cheek...

Welles shuts his eyes and turns his head, letting out a CRY,
FIRES his gun...

The bullet BLASTS Machine's knife, knocks it away!

Machine recoils for a millisecond, but brings his now free
hand to Welles' throat, choking him.  Welles' face reddens,
bleeding from bullet fragments...

Welles tries to pry Machine's fingers from his throat.

Machine works on Welles' gun hand with violent, renewed
effort -- SLAMS Welles' hand against the laundry chute...
SLAMS it... SLAMS it... till Welles DROPS the GUN...
The gun can be HEARD CLATTERING down the chute. 

Machine brings his hand to join the other around Welles'
throat.  Welles can't break the grip...

Welles PUNCHES Machine's face, till blood runs out from the
mask's nose hole, but it's having no effect...

Welles brings his KNEE UP HARD -- into Machine's stomach!

Machine falls to his knees with a ROAR, holds his already
wounded stomach, bleeding through his shirt...

Welles falls, clutching his throat, gasping.  He struggles
to his feet, leaps past, headlong towards the stairs...

Machine rises, charging after...

ON THE STAIRCASE

Welles is TACKLED from behind...
Welles and Machine TUMBLE down the stairs, SMASHING the
wooden railing, toppling a BOOKSHELF... LANDING HARD...

Welles PUNCHES and KICKS, breaking free, running across the
living room.  Machine rises to give chase...

Welles grabs a dining room CHAIR and THROWS it...
Machine knocks the chair aside, keeps coming.  Welles grips
another chair, uses it to hold Machine off...

Machine grips the chair by the legs.  Welles SHOVES forward,
pushes Machine back, letting go...

Welles dives under the dining table, crawling on his hands
and knees, scrambling...

Machine throws the chair, runs, leaps...
Machine lands on the table, crawls to the far edge, GRABBING
down with his meaty fists as Welles moves forward...

Under the table, Welles jerks back, avoiding, then rises,
extending his knees, PUSHING upwards from underneath...

Welles FLIPS the table, throwing Machine to the floor...

Welles charges towards the kitchen door, falls, gets up...
Machine gets to his feet...

IN THE KITCHEN

Welles SHOVES through the swinging door...
Machine BURSTS through, catching Welles, TACKLING him...

Welles hits the floor with Machine on top.  Machine begins
to rein PUNCHES down on Welles, head and back...

Welles tries to cover up, taking a real beating...

Machine rises, gripping Welles, LIFTING him, THROWS him...

Welles SMASHES into shelves of knick-knacks over the kitchen
sink, SHATTERING a WINDOW, landing on the sink and counter.

Machine comes to grip Welles again, drags him across the
counter, KNOCKING EVERYTHING to the floor...
Machine SWINGS Welles, releases him...

Welles SLAMS the refrigerator and slumps to the ground,
tries to stay conscious, trying weakly to get back up...
Machine comes to Welles, gets on his knees...

Machine wraps his arm around Welles' neck from behind, gets
him in a CHOKE HOLD, tightens his grip, cutting off Welles
airway with his forearm...

Welles tries to break Machine's impossible grip with one
hand, begins searching the floor with his other hand...
frantically feeling for anything he can use...

Welles' face is blood red...

Welles' hand grasps desperately... finds a FORK, grips it...

Welles SWINGS the fork back, STABS it into Machine's thigh!

Machine SCREAMS, releases Welles and falls back, reaching
around to the fork...

Welles gets to his knees, sucking air, turns to look...

Machine crawls away, pulls the fork out with trembling
fingers.  Beyond him, there's the BASEMENT DOOR.

Welles gets to his feet, looking...
He grabs a FRYING PAN off the counter, gripping it in both
hands and moving towards Machine...

Machine's getting up...
Welles BASHES Machine in the face with an upward swing of
the frying pan...

Machine is sent backpedaling, CRASHING into the oven!

Welles drops the pan, leaps over Machine, to the door...

IN THE BASEMENT

Welles comes down the stairs, falls when he gets to the
bottom, barely has any strength left.  He looks all
directions, sees the LAUNDRY CHUTE in the ceiling...

Welles gets up, stumbling, falls to his knees at the PILE of
dirty LAUNDRY, starts digging through it, searching
desperately, throwing clothing aside...

Behind, Machine comes down the stairs, a bloody mess...

Welles searches the laundry pile... 

Machine reaches the bottom of the stairs, heading for
Welles.  Welles turns, has the GUN in hand, FIRES TWICE...
HITTING Machine in the shoulder and stomach, knocking
Machine a few steps backwards...

Welles FIRES...

Machine's HIT in the CHEST, falling back, into hanging
laundry, pulling down the clothes line and sheets...

Machine hits the ground, wrapped in sheets.

Welles stands, still aiming the gun, pulls the trigger on an
empty chamber.  Out of bullets.

Machine's trying to pull free from the sheets, trying to get
back up to his feet.  Welles lets out a sob, drops the gun,
walking to Machine...

Welles climbs onto Machine from behind, takes clothing line
in hand, starts wrapping the cord around Machine's throat...

Welles pulls back on the clothes line, pulling it tight...

Machine tries to get his fingers around the cord.  Welles
stands, pulling tighter, putting a foot on Machine's back,
pulling the clothes line with all his might...

The cord's cutting into Welles' hand, drawing blood.

Machine, face down, lets out a gurgling sound, struggling,
struggling... till he finally stops moving.

Welles releases the cord, takes a step back, breathing hard,
trembling.  He looks around the basement.

Welles walks to pick up his gun, replaces the gun in his
holster.  He stands looking at Machine.

Welles walks to Machine, bends, grasps Machine wrestling
mask, pulling it off.  He rolls Machine over...

Welles stares down at Machine.  We never see Machine's face.

INT.  KITCHEN -- DAY

Welles comes up from the basement, slow, hurting.  He looks
around at the damage done, looks down to see he's still
holding Machine's mask.  He drops it.

EXT.  QUAINT HOUSE -- DAY

Welles crosses the street, going to his car.  He gets into
his car, starts it, pulls out and drives away.


EXT.  WELLES' HOUSE -- DAY

BIRDS SING.  KIDS are kicking around a soccer ball down the
street.  Welles' Ford arrives, pulls into the driveway.

INT.  WELLES' HOUSE, FRONT HALLWAY -- DAY

Welles comes in the front door, still a horrible mess.

 WELLES
Hello?!  Amy?

He waits.  The house is quiet.  No one home.


EXT.  WELLES' HOUSE -- LATER DAY

Dusk.  A CAR comes down the street, slows...

IN THE CAR

Amy sits forward, seeing Welles' car in the driveway.
Cindy's in a child safety seat in back.

INT.  WELLES' HOUSE, FRONT HALLWAY -- DAY

Amy comes in the front door, carrying Amy.

 AMY
Tom?!

No answer.

INT.  WELLES' HOUSE, BEDROOM -- DAY

Any pushes the bedroom door open and looks in.  Welles is
asleep on the bed, still in his clothing and shoes.  Amy
watches him sleep, sad.

Amy backs out of the room, pulls the door shut.


INT.  WELLES' HOUSE, BEDROOM -- NIGHT

Dark.  Welles sleeps, still in bloody clothing.  He's
restless, shifting, MUTTERING under his breath.  Bad dreams.

Welles suddenly sits bolt upright in the bed, looking around
the dark room, breathing hard.

INT.  WELLES' HOUSE, KITCHEN -- NIGHT

Cindy's in her high-chair by the table.  Amy's at the
KITCHEN SINK, washing vegetables, peeling potatoes.

Welles comes to stand in the doorway behind her.  Amy turns
to look at him.  It breaks her heart to see him so wounded,
but she forces herself to continue working in the sink.

 AMY
How much forgiveness do you think I
have in me?

Welles comes into the kitchen, stands beside Cindy, puts his
hand out and clasp's Cindy's tiny hand.

 WELLES
I can't talk about it yet... not
yet.

Amy keeps peeling potatoes, refuses to look at him.  Welles
looks down at Cindy, pats Cindy's head, looks back at Amy.
He stands looking at Amy for a long moment.


EXT.  WELLES' HOUSE, BACKYARD -- DAY

Welles wears his fishing cap, pushing his lawn mower, mowing
his yard.  He has done some healing, though his face is
still swollen and terribly bruised.

INT.  KITCHEN -- NIGHT

Welles feeds Cindy with one hand, eating his own dinner with
the other.  Amy's across the table, eating, watching them.

INT.  BASEMENT -- DAY

Welles works on the WATER HEATER, wrench in hand, reading an
instruction sheet.  He puts the sheet aside, uses the wrench
to begin loosening one of the pipe fittings.

EXT.  WELLES' HOUSE -- NIGHT

Welles drags two GARBAGE CANS from the garage to the street,
leaving them by the mailbox, walking back to the house.

INT.  BEDROOM -- NIGHT

Welles and Amy are in bed.  Amy's asleep, on her side,
facing away from Welles.  Welles lays awake, on his back,
staring up at the ceiling.

INT.  SUPERMARKET AISLE -- DAY

Welles pushes a cart down one aisle.  He looks at his LIST,
takes a BOX of CEREAL off one shelf, puts it in the cart.

INT.  SUPERMARKET CHECK-OUT -- DAY

Welles waits in line with his cart.  It's a long line.
He takes out his wallet, opens it.

In the fold of the wallet, there's a PHOTO folded into
quarters.  Welles unfolds it and looks at it dolefully.
It's the PHOTO of Mary Anne Mathews, the image Welles
printed from early in the snuff film.  Sad girl. 

Welles folds in back up, puts it in another pocket.  He
looks forward in the line to see if it's moving.

EXT.  SUPERMARKET -- DAY

Welles transfers BAGS of GROCERIES from the shopping cart
into the back seat of his Ford.

INT.  WELLES' FORD -- DAY

Welles drives on the HIGHWAY, groceries in back.  He watches
the roadway ahead.  There's little traffic.

Welles glances down, turns on the RADIO.  Some CLASSICAL
MUSIC PLAYS.  Welles stares forward through the windshield.

After a moment, Welles turns the RADIO OFF.  He drives.  The
ONLY SOUND is the DRONE of the ENGINE and TIRES.

Welles is suddenly overwhelmed by emotion, eyes filling with
tears.  He tries to fight it, but can't help himself.  His
face contorts with sorrow and he cannot stop crying, letting
out a loud WAIL of misery...

EXT.  HIGHWAY -- DAY -- CONTINUOUS

Welles' car moves to the shoulder, brakes to a sudden HALT.

INT.  WELLES' FORD -- DAY -- CONTINUOUS

Welles takes great deep breathes and lets them out, over and
over again, wiping at his tears.  He lets out a little high-
pitched WHINE from far back in his throat...

 WELLES
Why... why... ?

He's wracked by SOBBING.


INT.  WELLES' HOUSE, CINDY'S ROOM -- DAY

Amy's in a chair, reading a BOOK, not far from Cindy's crib.
Cindy's asleep.  The FRONT DOOR of the house is HEARD
OPENING and CLOSING from far off in the house.  Amy looks up
momentarily, then returns to reading.

FOOTSTEPS can be HEARD coming through the house, getting
CLOSER.  Amy looks up from her book.  The bedroom door's
open a crack.  The door slowly pushes open.  Welles stands
there, eyes red from crying.

 AMY
Tom... ?

Welles comes into the room, stands before Amy.  He gets to
his knees, puts his head in Amy's lap, wraps his arms around
her waist.  Amy holds him, worried, eyes filling with tears.

 WELLES
I have to tell you... I have to tell
you what happened.  I have to tell
you everything, but we can't tell
anyone else.  No one else can ever
know.

Amy runs her fingers through his hair, bends down to rest
her head on his back, holding him with her eyes closed.
Welles holds tighter.

 WELLES
You're all I've got.  You're all
I've ever had.
(pause)
You're the only one who can save me.






    the end







`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
