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

"48 HRS."

by

Roger Spottiswoode and
Walter Hill

&

Larry Gross and
Steven E. De Souza

FADE IN:

OPEN COUNTRY - DAY

Endless green hills bisected by a ribbon of highway. A road
gang clearing brush by the side of the road... Twenty-five
men in prison fatigues sweating through their mid-afternoon
labor.

THREE GUARDS

Flank the working prisoners... Mountie hats, shotguns,
sidearms, sunglasses; they look like they mean it.

HIGHWAY

A battered pickup appears...approaches. Suddenly, it coughs,
shudders, stalls. A big Blackfoot Indian named BILLY BEAR
gets out and starts cursing and kicking the vehicle.Then he
begins walking toward the road gang...

ROADSIDE

BRADY is the Guard near the center of the work gang; he
smiles at the oncoming man, pokes a prisoner beside him.

BRADY
Wonder what reservation they let
him off of...

The prisoner is GANZ who looks up, grins at Brady...

GANZ
Yeah, there goes the neighborhood.

Brady laughs as Billy Bear closes in on him.

BILLY
Say, buddy, my engine's
overheating and I got 30 miles
before the next station... Could
I get some water out of your
cooler?

Ganz leans on his hoe, speaks as Billy passes...

GANZ
Maybe you shoulda stole a better
truck, Tonto.

BILLY
You got a real big mouth, convict.

BRADY
It's okay, chief.  He's just
joking...

BILLY
How about the water...

GANZ
Firewater, Tonto?  Is that what
you...

Billy whirls, swings at Ganz. Both men roll to the ground.

BRADY
Hey! Jesus Christ!

THE OTHER GUARDS

Seeing the commotion, they run toward it.

GANZ AND BILLY

As they struggle, Billy slips a pistol into Ganz' hand.

BRADY
That's a state prisoner,
asshole...! Back off...

ROADSIDE

Brady pulls Billy away from Ganz just 'as one of the other
officers arrives... Ganz suddenly whips out a pistol, shoots
Brady at point-blank range. Before the other Guards can even
react, Billy comes out with his own pistol, caps the Second
Guard.

THIRD GUARD

Still forty yards away... In mid-draw, be howls as a bullet
from Ganz breaks the nearby ground. He fires, then turns and
runs for the prison bus.

GANZ

Smiling, fires twice. but the range is too great for pistol
work...

THE OTHER PRISONERS

Watching....Then they all scatter in different directions...

GANZ

Hefts his weapon...

GANZ
Come on...

He and the big Indian run to the pickup, climb in and roar
away.

INT. BUS

The THIRD GUARD making a call on the police radio...

OFFICER
APO 657, Unit 25 to APO 478t APO
657t Unit 25 to APO 478.

RADIO RESPONSE
Go ahead, Unit 25.

OFFICER
Escape in progress. Two officers
shot off rail crossing 31.
Prisoners escaping. Two men, one
six-four, 200 pounds, dark, an
Indian, the other, Albert Ganz,
five-ten...

FURTHER DOWN THE HIGHWAY

Several miles from the escape... A big semi parked by the
side of ttie road; back doors to the closed trailer open. A
station wagon parked across the road. The pickup appears,
approaches the semi, slows down and drives up the ramp into
the van. Ganz and Billy jump out, shove the ramp up inside
the truck and close the big doors.

STATION WAGON

Ganz and Billy climb inside ancl roar off, back in the
direction of the road gang.

BILLY BEAR

Takes off his hat, puts on a baseball cap and sunglasses...

BILLY
Get ready to duck.

Ganz dives for the floor. Three police cars go by, sirens
blaring, lights flashing. They pass the road gang. Ganz
reappear, smiles...

GANZ
You know something? I'm having a
real good time.

HIGHWAY

The station wagon blasts down the pavement... Becomes a small
dot on the landscape.

TRANSITION.

A DOORWAY - NIGHT

the portal slams open revealing a man holding a huge
pistol,jack cates, s.F.P.D., a large and powerful man... He
stealthily moves up a stairwell.

CORRIDOR

He stops at the top of the stairs... Listens gun still ready.
A continuous sound of running water... Cates moves toward the
bathroom. Rips the door open.

BATHROOM

The shape behind the shower curtain freezes. Cates, gun held
level, moves forward... Rips the shower curtain open.
Revealing a young and very beautiful woman, ELAINE MARSHALL.

CATES
Inspector Jack Cates, S.F.P.D....
And you're wanted.

Elaine stares at him as Cates turns off the water.

ELAINE
What am I wanted for?

CATES
I don't answer questions, I ask
'em...

A moment as she continues to stare at his pistol.

ELAINE
I don't think your gun's loaded...

CATES
This is a .44 Magnum, the most
powerful handgun in the world. You
gotta ask yourself just one
question. Are you feelin' lucky?

ELAINE
I still don't think it's loaded.

Elaine shakes her head and smiles, folds her arms over her
breasts, shivers a little... Cates looks at the cylinder,
spins it...

CATES
Hey, you're right.

ELAINE
You're hopeless.

CATES
That's the way I see it, too.

Be puts the gun down on the edge of the sink, embraces her.

ELAINE
I'm all wet.

CATES
What's wrong with that?

They both smile.

TRANSITION.

BEDROOM

Cates in bed with Elaine.  She wears his shirt.

ELAINE
A guy in the bar called me a dumb
bitch today.

CATES
What'd you do?

ELAINE
Irrigated his face with the shot
of J and B I'd just poured him.
Then I tried to deck the sucker.

CATES
I guess he got the message...

ELAINE
Then I sit back and I think, I
mean, who's to say I'm not a dumb
bitch.  I work in a bar, right?
I can't read a list of my academic
credentials to every booze-hound
that comes in the place... You are
what you do...

CATES
Positive self-image problem all
over again ... You are who you
decide you are unless you're the
type that lets assholes decide for
you.

ELAINE
Aren't you the one that thinks all
psychotherapy is bullshit?

CATES
I do think all psychotherapy is
bullshit. But just because I think
it's bullshit doesn't mean I don't
know something about it.

ELAINE
If this is your idea of
sympathetic interest in my
problems, I'll take brutal
indifference.

CATES
Hey, you know what I really think?

ELAINE
Tell me--I'm dyin' to hear it.

CATES
I think you're ashamed to tend bar
which is sad because you look
great in that outfit they make you
wear... You pull down four bills
a week which is damn good, and you
mix the best Pina Coladas I've
ever had... I think that if you
need bigger and better things ...
then go for em.

She smiles at him after this. It looks like they'll kiss.
Their faces are close.  Then she lightly moves back.

ELAINE
You oversimplify every...

He stops her in the middle of the sentence by kissing her,
then pulls back...

CATES
Some things are simple, right?

Their faces are very close ... but they don't touch for
another second.

ELAINE
Right...

TRANSITION.

SAN FRANCISCO - DAWN

Titles continue.

Tugs churning across the bay... Quiet city streets. Parked
cars covered with early morning dew... A newspaper truck
slowly grinds by, drops a bundleand moves on.

EMBARCADERO - DAWN

The station wagon pulls up to a young punk, HENRY WONG, on a
motorcycle.

Billy Bear smiles and leans out the driver's side window.

BILLY
You got somethin' for us, Henry?

Henry produces some credit cards.  Billy passes them to Ganz
for inspection.

GANZ
How hot are they?

HENRY
Hot?  Hey, they're not even room
temperature.

Ganz snorts derisively.

GANZ
How ya doin'?

HENRY
Can't complain.

GANZ
We got a lot to talk about.

HENRY
Yeah, old times.

GANZ
We'll follow you.  Take it
slow,okay?

HENRY
Sure, right.

Ganz pockets the credit cards as Henry wheels away.

INT.  STATION WAGON

GANZ
I want to drive awhile.

BILLY
I ain't tired yet.

INT.  STATION WAGON

GANZ
Maybe after we get done with him
I'm gonna buy us some girls.

BILLY
Whaddya mean, buy?

GANZ
Pros.

Ganz stares at Billy.

BILLY
Pay money?

GANZ
Yeah, dummy.  Money.

BILLY
I never paid for it in my life.

GANZ
It's better when you pay... they
let you do anything.

BILLY
They always let me do anything. I
don't want to pay for it.  I never
paid for it in my life.

GANZ
Just do what I say, okay? We'll
pay for the girls and have a good
time... Don't you trust me?

Billy smiles.

BILLY
Sure, I trust ya.

They drive off.

NORTH BEACH - RESIDENTIAL STREET - DAWN

First light breaks over Telegraph Hill. A quiet row of
Victorian townhouses now converted into apartments.

APARTMENT BEDROOM - EARLY MORNING

Cates is sprawled across the double bed; Elaine is on the
verge of falling off the edge. Cates' eyes snap open.  A
second later, his wrist watch alarm goes off.  He turns it
off, gets out of bed and begins pulling on his pants. Elaine
sits up in bed, still wearing Cates' blue shirt... Cates
picks up a robe as Elaine gets out of bed on the opposite
side, throws the robe to Elaine... She takes off the shirt,
swaps it for the robe and throws the shirt to Jack.

ELAINE
You know, if you let me come over
to your place once in a while, you
could put on a clean shirt in the
morning.

CATES
What makes you think I have any
clean shirts at my place?

He buttons his shirt and heads for the kitchen.

KITCHEN

Cates brushing his teeth at the sink, Elaine making coffee.

ELAINE
You know, that's my toothbrush,
Jack.

He keeps brushing.

CATES
Maybe you ought to buy me one.

ELAINE
Maybe I would if I knew when you
were coming back.

He stops brushing, turns and looks at her.

CATES
I'm here.  And I've been coming
back for quite awhile... Let's not
hassle, okay?  And can I have a
cup of coffee?  Please.

She pours some coffee, hands him a cup and saucer... Cates
pours some whiskey into it from a flask.

ELAINE
That's a fairly crummy way to
start a morning.

CATES
Maybe I got a fairly crummy day
ahead.

ELAINE
Maybe that makes a nice excuse.

CATES
Maybe you don't know what the hell
you're talking about.

Cates picks his holstered .44 off a chair back and begins
strapping it on.

ELAINE
When you start with that
attitude... it's like I don't know
who you are.

CATES
What do you want to know?  What
difference does it make?  I'm the
guy in your bed the last three
months.  I make you feel good. You
make me feel good.  What the hell
else do you want from a guy?

ELAINE
I wish you'd stop trying to make
me mad so I won't care for you...
I wish you'd give me a little more
of a chance.

He turns away, moves into the corridor near the stairwell.

CATES
I don't have time for this. I
gotta go to work.

She stands frozen... He turns back and looks at her; it's
hard to apologize.

CATES
(continuing)
Look, I'm glad I'm in your life...
and hell, with an ass like yours,
I figure anything might be
possible.

She is warmed up by the first part, amused by the second; she
approaches...

ELAINE
You know something, Jack, you
really are hopeless.

CATES
That's the way I see it, too.

ELAINE
Call me later.

CATES
You sure you want me to?

ELAINE
Yeah, for some reason, I'm sure...

He moves closer, kisses her..

CATES
Thanks for the coffee.

ELAINE
I think you forgot this. Hands him
his wallet and badge...

CATES
Guess people ought to know who I
am...

He turns to go down the stairwell...

ELAINE
Jack, wait.  Here...

She puts a scarf around his neck.

ELAINE
(continuing)
It's cold as hell out these
mornings, and you know what the
man said, the coldest winter I
ever spent was the summer I spent
in San Francisco...

They don't kiss.  He nods appreciately, the scarf in hand as
he turns and goes.

STREET - NORTH BEACH - MORNING

Cates comes out of Elaine's apartment building, crosses to
his whipped and battered  64 Cadillac convertible, notices a
parking ticket stuck under the windshield wiper...

CATES
Son of a bitch.

Shoves the ticket in his coat pocket, gets into the Caddie
puts the scarf around the rear view mirror, starts the engine
and guns away...

CITY STREET

Cates driving the convertible; he comes down a hill and turns
toward the East Bay...

TRANSITION.

GOLDEN GATE PARK - MORNING

Henry Wong, seated on a park bench. Now very dead, a bullet
hole in the middle of his forehead. Billy Bear is seated next
to him on the bench reading the race form.

GANZ

Using the telephone at an outdoor booth a few feet beyond the
bench.

STREET - BROADWAY DISTRICT - DAY

LUTHER and ROSALIE, a young couple, turn a corner.  A dark
parody of all-American young marrieds.  They are bickering as
usual.

ROSALIE
I liked that carpet we saw.

LUTHER
We can't afford it.

ROSALIE
Don't remind me.

LUTHER
Whaddya want me to do, go out and
steal for the money?  I hated the
color anyway; the color sucked...

Suddenly, Billy and Ganz descend on Luther and Rosalie and
pull them into their station wagon..

INT.  STATION WAGON

Billy has Rosalie by the mouth, gagging her with his big
paw... Ganz has his gun at Luther's neck.

GANZ
Surprise, Luther.

LUTHER
Whaddya want?  I thought you were
locked up-

GANZ
I want the money, asshole, what do
you think?  The money that Reggie
hid...

LUTHER
I don't know what you're talkin'
about.

GANZ
You want that Indian to snap her
neck?

He mimes the gesture... snap...

GANZ
(continuing)
Instead of worryin' about Reggie,
you better worry about me...

LUTHER
Don't give me this, we were
partners.

GANZ
Billy, go ahead, break it...

LUTHER
No! Don't kill her.  I can get you
the money.

GANZ
When?

LUTHER
I can't get it until Monday.
Honest.

GANZ
You chickenshit punk...

LUTHER
Honest. The place we stashed it
opens Monday morning. I can't get
it till then. Monday morning,
that's when it opens. After that,
I'll get the money to you right
away...

Ganz finally takes the gun from the neck.

GANZ
I always liked you, Luther. You
were always a lotta fun to hang
out with...

Rosalie is rubbing her neck now that she's been released...
Ganz gestures to Billy.

GANZ
(continuing)
We're gonna keep her.

Luther desperately doesn't like this.

LUTHER
Come on, you can trust me. Please.

GANZ
You try to mess with us or go to
the cops, I promise you, I'll put
holes in her you wouldn't believe.

He smiles at Luther, pinches him on the cheek, shoves him out
of the car.

LUTHER

Stands shivering as it powers away.

WALDEN HOTEL - DAY

A small hotel on one of the quiet streets behind Union Square.

A GREEN COUGAR

Pulls up across the street.

INT. CAR

Tha car arrives in front of the hotel.

GANZ
Nice place, huh?

Rosalie is very nervous.

ROSALIE
What are you gonna do to me in
there?

Ganz gives her a casual smile.

GANZ
Maybe that's where I'm gonna cut
your throat.

BILLY
He's just kiddin', you just keep
doin' what I tell ya, you'll be
okay.

They move out of the car, head for the hotel.

LOBBY

A FRIZZY YOUNG BLONDE sits behind the desk in a mirrored
entrance hall.  She reads a lurid paperback. Morning traffic
streams by outside as Ganz, Billy and Rosalie enter and
approach the desk.

GANZ
We need some rooms for a couple of
nights...Okay?

She smiles at Ganz.

FRIZZY
Sure.  We don't get many real
customers, ya know?  Most people
only stay an hour or two...

Passes a form across. Ganz signs it, Frizzy glances at his
signature then takes a key from the rack behind.

GANZ
I want her young.  And tall. Nice
legs. Legs are important. Then,
real thin.  Yeah.  NO jeans-A
dress? a nice summer dress.  You
know I want her fresh... I'll tell
you why, because I been hoein'
weeds and makin' license plates
for a couple of years... Yeah, I
know you don't get it...

BILLY BEAR

Sees a couple approaching, he shoves the dead man down on the
bench and spreads the newspaper over his head.  The body now
looking like a typical park bum who has spent the night.
Billy walks over to Ganz.

BILLY
Hey, what about me?

GANZ
And I need one more for my pal.
Yeah. Make her an Indian. No, not
a turban, you know, a squaw.

Billy smiles, takes the Polaroid...

POLAROID

A close shot of the dead man with the bullet hole in his
forehead.

GANZ

Takes the photograph back from Billy and slips it into his
jacket pocket...

GANZ
Walden Hotel. Third near Broadway.
Tell them to ask for ... uh...

He takes the hot credit cards out of his pocket, the name
embossed on the plastic..

GANZ
(continuing)
G.P. Polson...P.O.L.S.O.N....Just
be a couple of hours.

Hangs up. The two men head for a green Plymouth...

TRANSITION.

FRIZZY
Number twenty-seven, Mr. Polson.

GANZ
Put them next door, okay.

She gives him a slightly knowing look.

FRIZZY
Sure, hey, you got the whole floor
to yourself...

Ganz sends her back a sharp look.

GANZ
Keep your filthy ideas to
yourself, lady.

Ganz picks up his suitcase, walks over to the nearest
stairwell.  Billy and Rosalie follow...

TRANSITION.

STREET

Bars starting to fill up with mid-day customers... A black
Chevy cruises past and stops further up the block. Two
Plainclothesmen, VANZANT and ALGREN, get out of the car. As
they start toward the Walden...

THE CADILLAC CONVERTIBLE

Pulls up near the two men. Cates climbs out of his car and
walks over to them.

CATES
Hey, fellas, what's happening?
Radio said you guys had something
on...

ALGREN
Not much, Jack ... Salesman named
Polson had his credit cards
lifted...

Algren nods over to the parking lot opposite.

ALGREN
(continuing)
One of Polson's cards rented that
green coupe.

VANZANT
Not too much for a big rough tough
gunfighter like you to do on this
one...

Cates smiles at the verbal positioning he's used to with his
colleagues.

CATES
Suspect packed or is this a
laugher?

ALGREN
Five and dime stuff. Polson said
a kid with a switchblade mugged
him and drove off on a motorcyle.

CATES
Yeah, well, I guess you two are
experts at taking boy scout knives
away from teenagers...

VANZANT
Yeah, we are, that means you can
stay outta this one. We don't have
any big need for the artillery

Vanzant's turn to smile.

CATES
Hey, I'm just offering to help
out... I like to watch real pros
work.

VANZANT
Help, huh?  Sometimes your kind of
help tends to leave the suspect in
bad shape.

Algren...mediator... soothes the competitive situation.

ALGREN
Hey, relax ... Jack, you wanna
come inside, fine... You can stake
out the lobby...

Cates, a bit disgusted at the politics of this moment, nods...

CATES
Fine, it's your show...

The three men move toward the Walden.

WALDEN HOTEL LOBBY

Frizzy Blonde still behind the desk. Still reading the lurid
paperback. Unaware as Vanzant and Algren approach... She
looks up as they flash their badges.

FRIZZY
Aw, you guys were in last week.
You better ask around.  I'm not
supposed to be hassled... I got
friends.

VANZANT
Hey, park the tongue for a second,
sweetpants, we just want to search
a room.

FRIZZY
Not unless you got a warrant.

CATES
Maybe you should of been a lawyer
instead of a dumb skirt workin'
behind a register.

Frizzy turns to find Cates standing beside her. He nudges her
aside. Starts going throught the register book.

FRIZZY
Aw, come on, what the shit is this?

ALGREN
We're looking for a guy going
under the name Polson...

Frizzy sits back down in defeat.

FRIZZY
Okay, big deal.  Get it over with.

Cates finds the name.

CATES
Mr. Polson, room 27...

ALGREN
Is he alone?

FRIZZY
Naw, his sister went up an hour
ago.

Vanzant turns to Cates.

VANZANT
Okay, like we said, you stake out
the lobby.

CATES
Sure. Great. Whatever.

VANZANT
You're not missing out on
Dillinger. This punk just stole
some credit cards.

Cates watches the two Detectives head for the elevator.

SECOND FLOOR CORRIDOR

Vanzant and Algren move down the hallwayStop at the far end.
Both Detectives draw their pistols and approach a door.

ROOM

Summer dress and undergarments scatteredon the floor. LISA,
lies naked under the covers.

She matches Ganz's earlier requirements.Smoking a cigarette,
staring at the ceiling. Ganz remains on top of the blanket.
Still in his shirt and pants watching TV. Three sharp knocks
at the door. Ganz reacts as if he's received an electric
shock. His hand goes under the pillow... Comes up with an
automatic. Shoves it hard into Lisa's stomach.

LISA
Hey...

GANZ
Shut up.

LISA
What the hell's wrong?  I didn't
do anything.

Another knock. Ganz makes her move to the door.

LISA
(continuing)
What do you want?  What's goin' on?

GANZ
Shut up.

She grabs her dress and tries to pull it on.

GANZ
(continuing)
Now ask who it is.

Shoves harder with the pistol.

GANZ
(continuing)
Come on, ask.

She calls out.

LISA
Who is it?

CORRIDOR

Vanzant and Algren stand back from the door. Guns held ready.

ALGREN
Police... open up.

R00M

Lisa looks from the door back to Ganz. Then at the gun held
against her. She's petrified.

GANZ
Stall.

LISA
What do you want?

VANZANT
Police business. Come on, open up.

A smile on Ganz' face. Almost as if he's enjoying the moment.

GANZ
Keep stallin'.

LISA
Alright, I'm coming...hold on.

I'll just be a minute.

CORRIDOR

Vanzant and Algren waiting. Sounds of movement from within
the room.

LOBBY

Cates moves toward the foot of the stairwell. Looks across at
mirror on the wall opposite. The entire lobby covered from
this spot. Every angle, including Frizzy.

ROOM

Ganz gestures to Lisa.

LISA
Just a second.

Ganz belts her with his gun; she falls..Ganz goes through the
connecting door. Slips into the adjacent room.

BILLY'S ROOM

Another Hooker cowers in the corner, pulling on her clothes.
She's a Mexican girl in a ridiculous 'Indian' outfit.

MEXICAN GIRL
Que paso? Que esta pasando? No
entiendo...

BILLY
Shut up.

Billy goes to where Rosalie is awkwardlytied to a chair with
an electric dord.  He pulls her to her feet as Ganz moves by.

BILLY
(continuing)
When I say jump, girl, you better
jump.

BILLY
(continuing)

CORRIDOR

Vanzant reaches down, tries the knob.  Locked. Algren moves
back, preparing to kick the door down.

ADJACENT ROOM

Ganz opens the door behind the two cops. Raises his pistol
and fires. Billy's shots follow immediately. Hits Vanzant.
Algren rolls just as Ganz fires again. Wounded, he gets off
three shots, then moves inside Ganz' room. Ganz and Billy run
for the elevator... Exchange two more shots with Algren. The
Mexican Girl begins screaming in Spanish...

LOBBY

Cates draws his .44. Races up the stairs three at a time.
Frizzy starts to frantically call the police.

CORRIDOR

Cates stops at the landing. Vanzant's body sprawled across
the hallway. Algren back in the corridor, still losing
blood... Leans against the wall for support... Lisa staggers
out of the room, screams. Algren points the gun toward the
elevator. Indicating where Ganz and Billy have just fled.
Cates starts back down toward the lobby.

ELEVATOR

Ganz and Billy, guns ready as the carriage jolts downward.
Rosalie is terrified, sobbing...

CATES

Arrives at the halfway turn of the second staircase. He takes
the next flight in two jumps.

ELEVATOR

As the doors open, Ganz gestures for Billy and Rosalie to
wait as he heads for the lobby.

LOBBY

Cates literally flies into the lobby just as Ganz appears. He
slams Ganz against a column, belts him across the neck with
his pistol. Ganz screams with pain, drops his gun... Cates
again slams him with his pistol, felling him...

GANZ

Slides across the floor.

CATES Senses something ... moves just as Billy appears behind
and fires at him. The bullet takes out a window. Cates dives
over the desk. Another bullet chews up the wood.

LOBBY

Frizzy has been standing beside her desk, screaming... Cates'
move and the accompanying bulletspanic her. She dashes for
safety... Cates gets to his feet behind cover. Sees Billy
holding Rosalie by the throat. Frizzy begins to scream.

GANZ
He'll blow her goddamn head off.

Cates doesn't miss a beat. He slowly levels his .44. Takes
careful aim and starts to fire at Billy.

ROSALIE
No. No.

Cates' shot narrowly misses Rosalie. The bullet smashes into
a mirror above Billy's head. Cates keeps moving closer, gun
pointed straight ahead. Billy pushes the pistol against
Rosalie'temple. For the first time, Cates hesitates. They
face each other across the length of the lobby.

ALGREN

Struggles down the remaining steps into the lobby. He still
holds his revolver. Dares not raise it towards Billy and
Rosalie.

BILLY BEAR

Covers Algren from near the entrance.  He's confused, doesn't
know what to do... He keeps hold of Rosalie.

GANZ

His eyes catch Algren's...

GANZ
You.  Drop it and we won't kill
her.

Algren tosses his gun to the floor.

GANZ
(continuing)
Now, tell him to drop his Goddamn
piece.

ALGREN
Do it, Cates.

No response.

ALGREN
(continuing)
Do it, Cates.  Goddamn it, do it.

Cates lowers his gun. Finally lets it drop to the floor.

GANZ
Kick it over here.

Cates does; Ganz picks it up, smiles, looks at Billy.

GANZ
(continuing)
Get the car.

Then back to Cates as Billy runs out the entrance with
Rosalie.

GANZ
(continuing)
Your gun's just like mine.

He's going to kill Cates. But first be glances at Algren.
Then, almost casually, shoots him twice with Cates' .44.
Algren staggers back. Dead before he hits the floor. Cates
twists sideways just as Ganz fires. The bullet misses. Again
Frizzy starts screaming and struggling. Ganz swipes the woman
across the head with the gun. Her body slumps to the floor.
Police sirens can be heard in the distance. Cates makes an
attempt for Algren's gun. A bullet splatters against the
floor only inches from his outstretched fingers. The gun
skitters out of reach.

CATES
You lying son of a bitch...

GANZ
What are you talking about? We
didn't kill her ...

Ganz smiles.

With your own gun, cop. How does it feel? Cates leaps into a
wooden phone booth. Ganz leisurely blasts away at the booth
with both his and Cates' gun. Two bullets crash into the
booth. Ganz moves to check inside the booth but sirens are
ominously near. Ganz finally retreats out the entrance.

STREET

Billy and Rosalie weave their way across street to the
Cougar. They make a U-turn. Ganz runs out. Car pulls out,
then the police cars and vans begin to arrive.

PHONE BOOTH

Chunks of wood on the floor. Shafts of light through a dozen
bullet holes. Shattered receiver dangling from a cord. Cates,
wedged tight into the very top of the cubicle. He drops to
the floor.

LOBBY

The police arrive. Swarm into the hotel. All eyes on Cates as
he rushes to Algren. Too late... Cates realizes Algren is
dead. He cradles Algren's head as he stares at the arriving
TAC Squad and Patrolmen.

TRANSITION.

SQUAD ROOM DAY

Cates walks in. Several Detectives gather around him.

FAT COP
What happened?

CATES
Read the report.

OLD COP
Two cops blown away by a credit
card booster... that don't figure.

CATES
No shit.

FAT COP
They were good cops.

CATES
They were good cops who fucked up
and got careless.

A snotty YOUNG COP paces.

YOUNG COP
That's what you say, Cates...

CATES
Yeah.

YOUNG COP
But that's what you say about all
of us all the tine ... we're
always the ones fucking up when
you tell it...

CATES
The truth hurts, doesn't it, buddy?

Cates looks at the Old Cop.

OLD COP
It don't figure.

CATES
I need to borrow a piece.

The OLD COP shrugs... looks in his desk...

YOUNG COP
Somebody steals your gun, you're
supposed to file a report.

CATES
Are you gonna tell me about police
procedure?  Do me a favor, don't
give me a bunch of crap.

YOUNG COP
I guess when two cops die on
account of your fuck up you want
to keep it as quiet as possible...

Cates loses it for a second, lands on him with both hands,
pushes him against a wall... The room goes quiet. Cates cools
down.

CATES
Just shut the fuck up.

The other cops don't intervene. They just watch.  Cates cools
down, straightens up. HADEN walks by, or, rather, speeds by.

HADEN
Cates, I'll need to see you in
five minutes, exactly five.

The Old Cop hands Cates a gun, a traditional Army .45...

OLD COP
Best I can do.

HADEN
D'you read me, Cates...

Haden continues moving away.

CATES
Five minutes.  I heard you, your
voice carries...

As Cates is examining the gun, RUTH, a lab technician, enters
and drops three 8 x 10's on the desk near Cates.

RUTH
They're still wet.

Cates lifts the blow-ups, each one showing a different aspect
of a spent bullet.

RUTH
(continuing)
Lots of people getting shot with
.44's lately ... Last year, it was
Saturday Night Specials..now it's
heavy stuff. People must be
getting madder about something.

Cates starts pinning the blow-ups onto a large bulletin board
on the wall. Nearby, at the same time (within Cates' line of
sight, within earshot), Lisa, the Hooker, is being
interrogated by a POLICE-WOMAN who pulls the statement off
the typewriter. Nearby, the Indian Hooker is being
interrogated in Spanish.

POLICEWOMAN
You're an accessory to Murder One,
so you're going to have to do a
whole lot better than what we got
down here, honey...

LISA
Gimme a break, huh? ... Look, I
got there.  He was a trick just
like any other for all I knew.
That's all there is.  He didn't
feel like sitting and talking. He
was in a big hurry to get laid.
I was with him about an hour...

Cates has gotten interested in the last part of this ...
drifts toward her... A DETECTIVE comes through, begins
distributing I.B.M. printouts to Cates, the other nearby
officers..

DETECTIVE
We got a print from the hotel
room.  Guy's real name is Ganz,
Albert Ganz.  A hitter from back
East but he worked out here a few
years back.  Armed robbery. Broke
out of prison two days ago and
capped two of the guards. A real
animal.  Wait'll you see this...

Cates reads the printout, then smoothly,imperiously, he takes
over the questioning of Lisa.

CATES
Did he give you a return match?

LISA
He wasn't interested.

CATES
Maybe he didn't like your
performance.

LISA
Fuck you.

CATES
I'll take a raincheck...

From the side, Ruth is pointing at the photos...

RUTH
This'll interest you, Jack...we've
got something here from your
gun... and these are from the
first weapon Ganz used...

CATES
I don't get it.

RUTH
Here.

CATES

She turns, produces the third photo.  Pins it beside the one
from the Walden Hotel.

RUTH
A perfect match for the markings
from the first gun he used... but
not from the Walden Hotel... fired
at least six hours earlier...at
point blank range... right between
the eyes.  Found him on a park
bench...

She shows him two more pictures.  Police forensics shots of
Henry Wong ... very dead on the park bench...

RUTH
(continuing)
Ya know, there are some very bad
people out there in the world.

CATES
Look at it this way, Ruth.  If
there weren't, what would there be
for us to do?

Lisa continues with the Policewoman.

LISA
Anyway... so I got there and took
him down.  He started watching
television and then you
sensational people started banging
on the door... that's all...
except ... he's gonna give you
guys a hard time.

CATES

Cates looks up as he hears that remark.  Notices KEHOE,
another Detective, entering with a long suitcase.

POLICEWOMAN
What makes you think so?

LISA
I think he liked shooting cops a
lot more than getting laid.

Cates watches Kehoe unpack the box.

CATES
Is that what this guy Ganz had in
the hotel?

KEHOE
Every last bit of it.  The big
guy's room was empty.

CATES
I'll help you out.

Cates and Kehoe start going through the suitcase.  Kehoe
produces a speed loader for a .44...

KEHOE
This guy must have had a .44 like
yours, Jack. Now he's got yours.

CATES
Shit.

Kehoe next produces several boxes of shells.

KEHOE
This cat was real serious about
his artillery.

An Attendant comes through, hands Kehoe a file. He opens it,
shows the file to Cates who reads the name under the mug shot.

CATES
Billy Bear...

KEHOE
Backup man from the East Bay.
Worked with Ganz a few years ago
and sprung him from the road gang.

Kehoe opens the second file.  Four mug shots are inside.

CATES
Who are all these?

KEHOE
They all pulled a bunch of jobs
with Ganz about four years ago.

CATES
Wait a minute, wait a minute...
who's this?

KEHOE
Uhh ... Wong, Henry Wong.  He was
in on the same job.

Cates spins the file around so that both Ruth an Kehoe can
see it, throws the forensic shots down beside it.

CATES
Tell me that's not the same guy.

KEHOE
Hey ... Dick Tracy.

RUTH
Did Ganz have a grudge against his
old friends?

Haden comes out of his office.

HADEN
Get in here, Cates.

Cates ignores him.

CATES
I think I wanna have a discussion
about it with any of the ones
still walking.  Can we find them?

KEHOE
Here's the file. Cates checks the
file.

CATES
One of  em's in the slam.

HADEN
Damn you, Cates ... Get in here.

Cates walks into Haden's cubicle.

CATES
I want to be left alone on this
one. Algren was killed with my gun.

HADEN
Yeah, I read the report...

Haden shuffles some papers, seems to ignore Cates.

CATES
Hey, the bastard's got my gun.  I
want it back.

HADEN
Jack, come on, there is an
official department policy about
cop killings. Cop killers
represent a special priority
because any man crazy enough to
kill a cop is a greater threat to
an unarmed civilian... In other
words, we can't seen like we're in
the revenge business... I know, we
all know the truth's a little
different.

Cates almost smiles at Haden.

CATES
Yeah...

HADEN
Anthing botherin' you besides
losin' your gun?

CATES
Yeah.  It bothers me when cops get
hurt while I'm makin' a play. I
don't like it.

HADEN
You might be more of a team player
and a little less of a hot dog on
this one, Jack.

CATES
Being a hot dog's worked pretty
well for me so far... Besides, I
got a lead...

HADEN
Okay.  You're not a team player.
You gotta do things your own way.
Fine.  Nail this guy and make us
all look good.  But you better
watch your ass.  If you screw up,
I can promise you, you're goin'
down.

CATES
You really know how to send a guy
out with a great attitude. He
starts to go.

HADEN
Jack?

CATES
Yeah?

HADEN
Try not to get your ass shot to
pieces. We got enough dead cops on
this one.

CATES
I'll keep it in mind.

Leaves.

TRANSITION.

CITY STREET

Heavy vehicle and pedestrian traffic. Cates stands near a hot
dog stand. Elaine joins him. Cates is eating a hot dog and
studying a police file.

ELAINE
Great place for lunch.

CATES
Yeah, one of my favorites.

ELAINE
You made the front page.

He hands her a dog.

CATES
Yeah, Guess it must have been a
slow news day...

ELAINE
Jack, are you okay?

CATES
Sure, okay, fine, no problem...
See, there's this kid in jail ...
First thing I got to do is go up
and see what he knows ...

He points to the file.

ELAINE
I thought you might come over to
my place to recuperate.  I don't
have to go to work until the day
after tomorrow.

They begin to stroll down the street.

CATES
I got nothing to recuperate from.
There's a guy out there with my
gun, and I want it back.

She's not happy with this attitude.

ELAINE
Look, spare me the macho bullshit
about your gun...

CATES
Bullshit?  I'll tell you about
bullshit.  My gun's a real weapon
in the hands of a real maniac who
knows how to use it.  It isn't my
macho bullshit that's killing
people, my gun is ...

ELAINE
Look, Jack, if you make everything
your personal responsibility,
you'll turn into a bad cop.  It's
not a practical way to function...

CATES
I didn't get burned, two cops did.
Listen, I'll tell you about
personnel responsibility.  I like
to get the job done right.  And if
I don't get my job done right...
I'm for shit.

ELAINE
Here it comes again ... the sacred
job...

CATES
That's right.  I'm not like you.
I'm not gonna sit on my ass
wondering what's right and what's
wrong... There's a psycho out
there killing people with my gun
and I'm gonna get him.  Because
it's my job. And if you don't get
that...

ELAINE
I get that. The job first.
Everything else, especially me,
second. I get it. I don't like it.

Pause.

CATES
No one asked you to like it... But
that's the way it is.

TRANSITION.

PRISON CELL BLOCK - DAY

Cates and a GUARD on the upper deck approaching the door to
the cell block... The Guard shouts upward.

GUARD
Open Nine.

With a huge metal clatters the door to the cell block opens.

CELL BLOCK - NEAR ENTRANCE

Cates and the Guard go through the door.

GUARD
Close Nine.

They move forward together.

GUARD
(continuing)
It's Number Twenty-two... You want
company?

CATES
No, no thanks.

The Guard shrugs, stays by the door.

CATES

He walks down the cell block. Inmates stare at him from
inside the stark cells. They don't know who he is, but they
can smell a cop. Cates stops at Twenty-two, looks inside...
a bit startled. Obviously, Reggie Hammond has connections and
taste. The paint is fresh; there's framed prints on the wall
instead of pin-ups, and the overall feeling is that of a
graduate school dorm rather than a prison. Cates turns, nods
to the Guard at the end of the cell block. He throws a switch
and the door opens.

HAMMOND'S CELL

Cates steps inside. Hammond is at a table wearing a Sony
Walkman and writing in some detailed ledgers with a fountain
pen. He's boogeying in his seat to the music. Sprawled on a
bunk nearby is LEROY, another black inmate close to Hammond's
age. Leroy is leafing through a copy of a skin magazine. He
doesn't even look at Cates.

CATES
Hammond.

Cates steps inside the cell.

CATES
(continuing)
Hammond!

No answer. Cates leans over, hits the override button on the
Sony.

CATES
(continuing)
Hammond!

Hammond jumps, grabs his ears in pain ... He pulls the
headset off and glares at Cates.

HAMMOND
You got a name, cop?

CATES
Try Cates.  And let's talk in
private, okay?

HAMMOND
Sure, anything you want.

He tosses the Walkman to Leroy who dutifully puts it on.

CATES
Look, convict, I know all about
you. Single.  No fixed address. No
known relatives.

One previous conviction. Armed
robbery... six months to go on a
three-year sentence.

HAMMOND
You here to write my life story?

CATES
Not likely, Reggie.  Maybe I just
need some help.

Cates takes the forensic photo out of his pocket, passes it
across the table to Hammond.  He looks at it, hardly reacts.

HAMMOND
Henry Wong... My old pal.  He's
looked better...

He passes the photo back.

HAMMOND
(continuing)
Look, I got just six months before
gettin' out of here.  Six months
between me and freedom after bein'
here three years... And I'm not
gonna do anything to screw it up,
includin' pee in the prison yard,
knock up the Warden's daughter or
rat on my old partners...

Cates swings the cell door back open.

CATES
Too bad, Reggie.  I thought maybe
you were a smart boy.  But I guess
if you were real smart you
wouldn't be a convict.

He smiles, decides to play his card.

CATES
(continuing)
I can see a second-rater like you
wouldn't be any help at all goin'
up against a real hard case like
Ganz.

Hammond jerks his head around.

HAMMOND
Ganz?

Pause.

HAMMOND
(continuing)
Ganz the one who shot Henry?
Cates, I asked you a question...

Cates smiles.

CATES
Yeah, I noticed...

HAMMOND
Ganz is in jail.  He's gonna be
there two years after I'm on the
street.

CATES
Didn't work out that way.  He
busted out with a big Indian.
They capped two guards on a road
gang. Nice meeting you Reggie.

He turns, goes out. The door clangs behind him. Hammond jumps
up and bangs on the bars, shouts at Cates' back...

HAMMOND
Cates, Come back here.

Cates turns, saunters back, leans against the door.

CATES
Yeah?

HAMMOND
I can deliver Ganz.  But you gotta
get me outta here first.

CATES
You're crazy.

HAMMOND
I can help you, man, but you gotta
get me out.  I got to be on the
street.  Get me outta here.

CATES
What's the big deal about you
bein' on the street?

HAMMOND
I got a lot to protect.

CATES
Bullshit.

HAMMOND
It's the only way you're gonna get
Ganz.

CATES
I'll think about it.

TRANSITION.

Cates typing several of official looking documents while
seated across from a rather dour-looking bureaucrat named BOB.

CATES
Let me borrow your pen, Bob.

Handed over by Bob.

BOB
You going to use your own name?

CATES
Shit, no.

CANDY

He begins signing the documents.

BOB
Jack, just remember one thing. If
all this comes down, you don't
know me.  I'm not gonna burn for
you.  And I'll tell you something
else.  If it all comes down, your
ass is new-mown grass.

CATES
Right.  Hey, no sweat.

He hands over the papers. Smiles.

BOB
BOB You got him for 48 hours.

Bob studies the sheet.

BOB
(continuing)
You got a big career as a forger
if you decide to go that way,
Jack...   I'll ring security.

TRANSITION.

PROCESS ROOM - PRISON - DAY

The GUARD leads Hammond to a steel cage. Harmnond's now
wearing a beautifully tailored plaid suit.

The Guard shouts to ANOTHER GUARD on the far side.

GUARD
Prisoner G21355 ... Hammond.

SECOND GUARD
Okay.  Send him through.

The gate slides open. The Guard geztures for Hairmond to
enter. Hammond walks to the far side of the pen.  The first
gate closes, the second one opens.

Hammond turns and walks over to Cates. The Guard comes up to
Cates, double checks his orders then unlocks Hammond's cuffs.

GUARD
Gotta sign for him.

CATES
Sure thing...

He looks over at Hammond who smiles at him.  Then looks at
Harmond's clothes...

CATES
(continuing)
This prison gives out $400 suits?

HAMMOND
What are you talkin' about?  This
suit's mine.  It cost $900.

Hammond dusts off a sleeve.

CATES
We're supposed to be after a
killer, not a string of hookers...

HAMMOND
Listen, it may be a little out of
date. You know, I got a reputation
for lookingreal sharp with the
ladies...

Cates hands some papers to the Guard.

GUARD
He's all yours.

The Guard walks away as Hammond feels Cates' lapel.

HAMMOND
We could change this for something
good...Get you lookin' sharp for
pussy.

Cates gives him a look.

CATES
I don't need to hear your jive. I
already got that department taken
care of...

HAMMOND
You got a girl... shit... the
generosityof women never ceases to
amaze me.

Cates slaps a cuff on Hammond's outstrethand, then puts the
other on his own wrist.

HAMMOND
(continuing)
Hey, no way.  Take off the
bracelets or no deal.

CATES
You just don't get it, do your
Reggie?  There isn't any deal. I
own your ass.

HAMMOND
No way to start a partnership.

CATES
Get this.  We ain't partners. We
ain't brothers.  We ain't friends.
I'm puttin' you down and keepin'
you down until Ganz is locked up
or dead.  And if Ganz gets away,
you're gonna be sorry we ever met.

HAMMOND
Shit.  I'm already sorry.

Cates yanks on the cuffs.  They move away.

?
TRANSITION.

OUTSIDE THE JAIL - DAY

CATES LEADS HAMMOND OUT.  THEY HEAD FOR CATES' BATTERED
CADILLAC.

HAMMOND
This your car, man?

CATES
Yeah.

HAMMOND
It looks like you bought it off
one of the brothers.

As they approach the car...

CATES
Okay, let's get down to it.  I did
my part and got you out.  So now
you tell me where we're goin'?

HAMMOND
Don't worry, I got a move for ya.
An awesome move. A guy named
Luther. Ganz'll be paying him a
visit.  We go to him right away.

CATES
Luther was part of the gang?

HAMMOND
What gang you talkin' about, Jack?

CATES
I can read a police file,
shithead, and quit calling me Jack.

HAMMOND
Just an expression man, don't mean
nothin'.

Cates gets behind the wheel and kicks the engine over.

CATES
I don't give a damn.  It happens
to be my name.

HAMMOND
Then what're you complainin'
about? At least nobody's calling
you shithead....

CATES
I may call you worse than that.

Cates drives off.

EXT. STREET - MISSION DISTRICT - DAY

Cates' Cadillac purrs into view, entering a deserted street
within a rundown neighborhood.

INT. CADDY

Hammond seated next to Cates.

HAMMOND
Just up the street, the other
side, over there ... Now, don't
bother knockin' on the door.
Luther ain't the kind of guy that
looks for company.

CATES
Your pal nuts enough to take a
shot at me?

HAMMOND
Luther ain't the reliable type. I
don't want you shot yet, Cates ...
not before you been a help to me.

CATES
I'm helpin' you, huh?

Hammond smiles.

HAMMOND
Yeah. Didn't you know that?

STREET

The Caddy pulls to a stop.

HAMMOND
Over there...232...

Cates double-checks his .38.

HAMMOND
(continuing)
You better let me borrow one of
those.

Cates smiles.

CATES
Sure thing, asshole.

Handcuffs Hammond to the door handle.  Grabs the car keys.

CATES
(continuing)
You just hang on.  And hope this
big move of yours turns out to be
something. Opens the car door.

CATES
(continuing)

LUTHER'S VICTORIAN

Cates knocks at the door. Nothing. Knocks again ... no
response.. From inside, he hears a faint noise but no
response to the knock. Holding the .38 in one hand, Cates
tries the knob with the other. The door opens. Cautiously,
Cates steps inside.

INT. LUTHER'S VICTORIAN

Long corridor ahead. No sign of Luther.

CATES

Moves down the corriaor, checks the rooms off to one sides.

LUTHER LUTHER

slips into the hallway behind Cates... Cates turns just as he
gets to the kitchen. Luther holds a gun. Cates drops to a
crouch and aims the .38. Luther whirls and fires at Cates. As
wood and plaster fly out all round him, Cates makes a running
dive for the floor. Luther runs out before Cates has
regainehis feet.

STREET

Luther rushes out the front door and heads toward the
Cadillac.

HAMMOND

Watches as Luther heads down the sidewaltoward him. As he
starts to pass by... Hammond steps out suddenly... Flattens
him with the car door. Luther drops, stunned. Hammond, still
restricted by being cuffed to the door handle, reaches and
grabs his pistol.

CATES
Hammond, Drop the Goddamn gun.

Hammond looks up. He sprints across the pavement. Aims his
gun at Hammond.

HAMMOND
Quit playin' cop and undo this
cuff, Jack, I need to talk to this
man.

CATES
I'm tellin' you to drop the Goddam
gun.

HAMMOND
I got a whole thing about people
pointin' guns at me.

CATES
Just throw me the Goddamn gun.

Long moment. Then Hammond smiles and tosses him Luther's
pistol.  Luther groans. Cates puts his foot on Luther's belly
and pulls himself into a standing position, cuffs him.

HAMMOND
Luther, I always told you the
physical side of life wasn't your
gig.  Look at you, all messed
up... Course you never were much
in the snappy dresser department,
were you?

Cates now has Luther ready to be questioned.

CATES
Come on, talk to him.

Hammond turns to smile at Luther.

HAMMOND
What's happening, Luther?

LUTHER
I thought you were inside...

HAMMOND
Meet my travel Agent.

Luther leans forward, looks straight at Cates.

LUTHER
A cop...

CATES
I sure ain't his fairy
godmother... now I'm looking for
Ganz...where is he?

LUTHER
Haven't seen him for years. That's
the truth.

CATES
You just took a shot at me,
asshole. I think you do know where
he is.

LUTHER
Who gives a fuck what you think?

Cates grabs the still open Cadillac door, slams it into
Luther. He falls backwards. Cates looks at Hammond.

CATES
Hey, this works pretty good.

HAMMOND
Thank you.

CATES
Want to try it again?

Luther sits up again, glares at Cates.

LUTHER
Ganz and Billy got my girl,
Rosalie.

CATES
I think I met her.  Now tell us
something we don't know, like
where they stashed her.

LUTHER
I don't know.

Cates slams the car door agains him again.

HAMMOND
I gotta tell you he's having a
ball with this car door, Luther...
You'd better think of somethin' to
tell him.

Luther besitates...flashes a look at Hammond, who sends him
a silent fleeting reply.  Maybe Cates sees this. Maybe not.

LUTHER
He ... he wants me to help him
skip town.

CATES
When? How?

LUTHER
I dunno ... he's gonna call me...

Another look at Hammond.

LUTHER
(continuing)
He's gonna call me on...Tuesday.

Something's wrong with all this.  Cates isn't sure just what.
Not yet. He looks at Hammond.

CATES
What do you think?

HAMMOND
I think you better put him on ice,
man.

CATES
He's gotta take that call ... if
there is one.

HAMMOND
If you let him run around till
Tuesday, he's gonna run right to
Ganz and warn him. Ain't you,
motherfucker?

Luther makes a play toward Hammond, who laughs, doesn't even
flinch.

HAMMOND
(continuing)
Luther, are you angry with me?

Cates wrestles Luther into the back seat, turns to Hammond.

CATES
I don't know what the hell you're
smiling about, watermelon. Your
big move turned out to be shit.

HAMMOND Just stares at Cates, keeps smiling...

TRANSITION.

BOOKING - POLICE PRECINCT - NIGHT

Two Uniforms follow a sullen Luther, Cates and Hammond to the
DUTY SERGEANT... Cates speaks to him through the small
window.

CATES
Assault on a police officer with
a deadly weapon.  Carrying a
concealed weapon.  Resisting
arrest, Disturbing the peace.
Public nuisance...

The Sergeant begins typing out an arrest form.

CATES
(continuing)
I'll think up a few more and file
the report tomorrow.

Cates looks back at Hammond as Luther is hauled away.

CATES
(continuing)
Come on, I gotta make a phone call.

As they move through the honeycomb of office partitions.

CATES
(continuing)
You stay with me.

Cates picks up the phone on the other side of the booking
desk. Dials ... waits for a response as TWO HOOKERS are led
past by an Arresting Officer. Hammond gives them the eye.

CATES
(continuing)
This is Jack Cates. Any messages?

ELAINE'S APARTMENT

Elaine is on the kitchen phone, speakingwhite putting her
coat on over her uniform for the evening.  One look at the
way it is cut and you know why she hates her job.

ELAINE
Just one.  Some lady called.  Said
she's a little hot-headed
sometimes... But she still wants
her occasional roommate. She'd
like to talk it over after she
gets off work tonight... if it's
humanly possible....

CATES
Elaine, look, I'm in the middle of
sone stuff right now... I'm not
gonna have time to come by. I
don't know when I can get there.

Her face falls. Making the offer was hard enough.

ELAINE
Come on, Jack ... you're making me
work too Goddamn hard at this...

Jack is very irritated by this turn of events.

CATES
Listen, Goddamn it if you think
I'm happy about it, you're nuts.
I just gotta take care of a few
things, okay?

ELAINE
This is not the way people who
care for each other are supposed
to behave.

Cates says nothing.  She hangs up angrily.

BOOKING

Hammond is working on the girls.

HAMMOND
Excuse me, ladies, you seem to be
in need of assistance.

HOOKER TWO
Look, we got enough problems, we
don't need no tight-ass court-
appointed lawyer trying to
bullshit us!

HAMMOND
Sweetheart, I'm not trying to
bullshit you. I don't know whether
or not you ladies heard but the
city is coming down real hard on
people practicing unlawful carnal
knowledge.

HOOKER ONE
So what are you trying to say,
fella?

HAMMOND
I'm trying to say that you're not
just walk in that courtroom and
get gonna slapped with a $50 fine
and be back on the street turning
tricks tonight. You both are going
to do some time. About 30 days
each... Unless, of course,we talk
real business.

HOOKER TWO
So where do you want to do it,
honey? You wanna hop up on the
counter?

HAMMOND
No, we can go to the back room.

Cates walks over and pulls him by the shoulder.

CATES
We're on the move. Let's go. As
they walk toward a corridor.

HAMMOND
Do you know how close I was to
getting some trim.  And you
fucked' it up.

CATES
Yeah, well, my ass bleeds for you.
And I didn't get you out so you
could go on a Goddamn "trim"
hunt... stop moaning.

HAMMOND
Speakin' of moans my Stomach is
startin' to growl.

CATES
We eat when I say we eat.

HAMMOND
Bullshit ... I ain't moving  till
I get something to eat. You've
been treating me like shit ever
since I came out here.  If you
don't like it, you can take me
back to the penitentiary and kiss
my hungry black ass good-bye.  And
I want some food some place nice..
Some good people, nice music...

CATES
Yeah, I'm hungry too. I know of a
place. Let's go eat.

HAMMOND
Yeah, I want mandolins, flowers...
They move off down the corridor.

TRANSITION.

UNDERGROUND PARKING LOT - NIGHT

INT.  POLICE HEADQUARTERS

Cates and Hammond at a candy machine.  Cates drops in a
quarter, throws Hammond a candy bar...

CATES
There's your God-damn dinner. Now,
let's go.

They move toward a row of parked cars.

AT THE CADDY

HAMMOND
Who'd you call on the phone back
at the booking station?

CATES
Just get in the car and keep your
mouth shut.

Hammond gets in the car as Cates readjusts Elaine's scarf on
the mirror.

HAMMOND
Must of been your lady friend...

Cates frowns at him.

HAMMOND
(continuing)
You really do have onoe, huh,
Jack... what's her problem besides
you?

CATES
She's got the same complaint as
half the Goddamn population.  She
can't get the job she's trained
for and it pisses her off...
Anyway, what the fuck do you care?

Cates climbs in behind the wheel of the Cadillac.

HAMMOND
No, man, tell me about her.  In
jail they got me surrounded by
guys wearin' blue suits twenty-
four hours a day.  And I ain't
built for that. Really?  With the
clothes you got on you look like
you'd love it.

Cates takes a belt from his flask.

CATES
Now, where we goin', convict?

HAMMOND
Mission District.  Gonna find us
an Indian.

Cates starts the motor, slams it into gear.  Accelerates out
to the street.

TRANSITION.

EXT.  CITY STREET NIGHT

Cates and Hammon booming along in the Caddy.

HAMMOND
Come on, Jack.  I want to hear
about your girl.  When were you
with her last ... You get what I
mean?

Smiles. Cates smiles back at him, almost cruelly

CATES
I don't give out the details.

HAMMOND
Last night, two nights ago, three?

Cates keeps smiling.

CATES
Last night.

HAMMOND
You have a good time?

Pained expression on Cates' face as he comes back to reality.

CATES
Sure.  Then we had a fight this
morning.

HAMMOND
At least you took care of business
and got the important part in
before she came down on you...Tell
me a little about her.  She got
great tits?

Cates gives him a hard look.

CATES
I get the feeling it's going to be
real long night.

They keep driving.

TRANSITION.

MISSION DISTRICT - STREET - NIGHT

The Cadillac drives slowly past a bar called Torchie's.
Stops at the end of the block.

CATES
Well?

HAMMOND
It's a long shot, but...Billy used
to tend bar here a few years back.
I heard him talk about it.

CATES
This part of town, they'll make us
for heat the second we walk in.
Just back me up like you've got a
piece...

HAMMOND
Back you up?  Now why would I
wanna do that?

CATES
If they kick my ass, they'll sure
as hell carve yours up...

HAMMOND
But you can handle it all right,
huh? Real amazin' how far a gun
and a badge can carry some cats...

CATES
Bullshit.  Attitude and experience
get you through...

Cates and Hammond step out, glance toward the bar.

HAMMOND
I been in a lot of bars where a
white cop rousted me and some of
the brothers. All those clowns
ever had going for 'em was a gun
and a badge...

CATES
You need five years training to
handle a joint like...

Hamnond's had enough of this debate.

HAMMOND
Hey, you wanna bet?

CATES
I got two problems.  Number one,
I'm not playin' games.  Number
two, you got nothin' to bet with.

HAMMOND
If we come outta this joint with
Ganz' phone number, or a dead
Indian, or anything else useful,
then you could turn the other way
for half an hour while I get
laid...

CATES
Why?  Anybody that talks about
women as much as you do probably
can't get it up anyway.

HAMMOND
That's never been one of my
problems.

Now, stop stallin', man, or else
admit all this professional stuff
you're talkin' about is a crock of
shit.

CATES
I'll tell you what happens if you
lose... you tell the truth for
once.

HAMMOND
What are you talkin' about?

CATES
You tell me what Ganz busted out
for, he's after a lot more than
just gettin' out of jail.  And
whatever it is, you're part of it.

HAMMOND
I don't know what you're talking
about. I just wanna see Ganz
nailed.

CATES
The bet's off.

Hammond thinks it over..

HAMMOND
Okay, if I lose, I'll tell you
anything you want to know...

Cates reaches into his pocket.

CATES
I'm gonna enjoy this ... here,
I'll even loan you my badge.

HAMMOND
I thought you said bullshit and
experience are all it takes.

He takes the badge anyway as they head for the entrance.

TORCHIE'S WESTERN BAR

They step inside. Hammond reacts to...

REDNECK CITY

Longhorns mounted over the bar, Rebel Flags, Lone Star Beer,
armadillo posters. Even the waitresses wear Stetsons.
Rockabilly pounding from the jukebox. A Cowgirl Stripper is
doing the grind on a small podium.

HAMMOND
This place don't seem real popular
with the brothers.

CATES
My kind of place. I always liked
country boys.

Cates smiles, finds a table in the corner. A Cowgirl comes
over to take his order.

HAMMOND

Takes a deep breath, moves toward the bar. Smiles at the good
ol' boys. They don't smile back. He sits down at the bar.

BARTENDER
Yeah.

HAMMOND
Vodka.

BARTENDER
Maybe you better have a Black
Russian.

HAMMOND
No, man, I think I'll have a vodka.

Hamnond looks around the room.

THE BARTENDER

places a glass in front of him, picks up the dollar as
Harmond flashes Cates' shield.

HAMMOND
You know a big Indian named Billy
Bear?  He used to work here.

The Bartender shakes his head, gives him a scowl.

BARTENDER
Never heard of him.

Hammond lifts the shot glass and throws it through the mirror
behind the bar. Sudden silence throughout the room.

HAMMOND
Now how's your memory doin'?

BARTENDER
Fuck off.  I don't know what the
hell you're talkin' about.

HAMMOND
Maybe I better ask around, see
what your pals think.

BARTENDER
I don't give a shit who you ask.

The Bartender walks down toward Cates.

HAMMOND

Moves away from the bar. He stops at a booth occupied by

FOUR COWBOY PUNKS,

one a very big man.  Hammond grabs him by the arm and pulls
him up.

HAMMOND
Up against the wall, cowboy.

The Punk breaks free, aims a massive haymaker at Hammond.
Gets a right to the stomach for his trouble.

HAMMOND
(continuing)
Now, I said get over there by that
wall ... You hear me,
motherfucker...

Looks at the others.

HAMMOND
(continuing)
Move it, rednecks.  On your feet...

He grabs the next by the arm, yanks him up.

HAMMOND
(continuing)
Over there...move your ass. Some
of you rednecks seem a little hard
of hearing, so I'll repeat it for
everybody... I need word on the
whereabouts of an Indian that goes
by the name of Billy Bear. It's a
police matter and you all look
like you'd just love to
cooperate...

CATES Quietly sips his beer. The other occupants of the bar
watch Hammond herd the four Punks to the end wall.

A BIG COWBOY

when Hammond isn't looking, he dashes toward the exit, Cates
puts out a leg. Sends the Cowboy crashing into a crowdedtable.

HAMMOND

Turns around at the noise.

HAMMOND
(continuing)
That wasn't necessary, buddy. I
got this under control.

CATES
Some of us citizens are with you
all the way, Officer.

The Redneck Punks are now spread-eagled against the wall.
Hammond searches the first. He drops a wallet on the floor
and moves to the second. A switchblade, some credit cards and
another wallet fall to the floor. The last Punk has only a
roll of bills.  Hammond holds the money up to his face.

HAMMOND
You're in trouble, big trouble, so
you better start talking. Where'd
a boy like you make a score like
this?

PUNK
It's mine, what the hell...

HAMMOND
You must a rolled somebody.  They
don't let punks like you take jobs
that pay this much ... you sure
you don't know a dangerous Indian,
because unless you start talkin'
I may just have to start looking
down your pants with a
flashlight...

PUNK
What kind of cop are you, anyway?

HAMMOND
I am your most terrible nightmare
... a bad nigger with a badge that
entitles him to kick your ass...

Hammond turns to the Bartender...

HAMMOND
(continuing)
One of them is under-age.  Another
attacked a police officer. And you
know I ain't found what I came
lookin' here for yet...

Walks back to the Bartender.

HAMMOND
(continuing)
The tall one had a weapon ... you
want me to keep on makin' a list,
or you got the picture yet?

He reaches for a towel under a pyramid of bar glasses. Jerks
the towel, the pyramid capsizes onto the floor. Huge crash as
the glasses break into a million fragments.

HAMMOND
(continuing)
Looks like you're on your way to
bein' outta business, redneck...
Now, let's see what can we fuck
with next?

The Bartender doesn't have the look of a happy man.

BARTENDER
Okay, okay.  The Indian hangs out
with a girl down the block. Right
where Chinatown starts.  She lives
on top of the hardware store.

Hammond turns, grins at Cates. As far as he's concerned, he's
won the bet.  Cates nods, slips out the door.

HAMMOND
I don't give a damn about his
girl...

BARTENDER
Look, give me a break, you're
going to have to settle for her
place.  It's the only thing I know.

He looks desperate.

BARTENDER
(continuing)
I'm tellin' ya, I'm giving you all
I know.

HAMMOND
Try obeyin' the law once in
awhile, and I won't have to hassle
you...

Turns to go, then turns back.

HAMMOND
(continuing)
But remember this, cowboy, there's
a new sheriff in town.

Smiles, turns and goes.

TRANSITION.

STREET - ACROSS FROM TORCHIE'S - NIGHT

Hammond steps out of the bar.  He crosses to Cates by the car.

CATES
I think you got something for me.

Pause.

CATES
(continuing)
The gun you took off that redneck
in there.

Hammond smiles.

HAMMOND
You made that move, huh?

CATES
While you're at it, You can give
me the switchblade, too.

Hammond reluctantly takes out a .22 automatic, slams it down
on the hood of the car.

CATES
(continuing)
Credit cards?

Hammond hands them over with the knife.

HAMMOND
You already got a gun and you owe
me a piece of ass.  I'll settle
for the gun you just took.

A long moment. Then Cates slowly lifts the .22 automatic.

CATES
You did a real good job... Guess
you deserve a reward.

Removes the clip.  Throws it across the street. Hands Hammond
the automatic.

HAMMOND
Motherfucker.

He throws the gun away.

CATES
I sure am. Now let's go get us an
Indian.

They walk up the block.

TRANSITION.

STREET - CHINATOWN - NIGHT

Neon signs with Sino lettering.

CATES AND HAMMOND

Walk down the street, spot a shop with a window display of
tools.  Look up at the darkened apartment windows. They walk
to the end of the block.

ALLEY

Stairwells lead to each apartment above the shops. Cates and
Hammond move along the buildings... Arrive at the back of the
hardware store. Quietly, they start to ascend the stairs.

STAIRWELL

The metal steps extend onto a platform by the back door.
Cates leans over the railings to look through the adjacent
window. Between the drawn curtains, a flickering glimmer from
a TV set. On the tube, various poses from stridently
exercising women.

HAMMOND
What the shit is that?

Looks again. A female form passes by, goes out of the room.

CATES
There.

HAMMOND
Must be billy's girl.

CATES
Come on.

DOORWAY

Cates gestures to the door lock. Hammond fiddles with it for
several moments. The door swings open. They step into a
darkened room.

APARTMENT

Cates takes the .38 from his pocket. He stops near the open
bedroom doorway. He looks at Hammond and then both men step
quickly into the room.

CATES
Police! Nobody move!

Hammond reaches for the light switch. Takes a heavy blow.
Slumps against the door. A Woman's voice screams out.

CATES
(continuing)
Stay where you are!

The light goes on. Cates' gun points at a YOUNG WOMAN (CASEY)
in a flimsy dressing gown. Saturday Night Special held
between her palms, police style... A SECOND WOMAN (SALLY)
stands beside Hammond at the light switch. Larger and
slightly older than the first, she wears a man's shirt. Holds
a baseball bat in her right hand.

SALLY
You better drop it or he's gonna
get another one.

HAMMOND
Hey, talk to here jack.  I don't
feel like gettin' number two along
side of the head.

CATES
I said police.  Now drop the
goddamn gun.

CASEY
Don't give me that police shit.
You drop it.

Pause.

CATES
Okay, look, don't shoot.  I'm just
reachin' for my badge.

Cates takes out his badge-Shows it to Casey.

CASEY
I don't like this bullshit. I've
seen fake badges before.

HAMMOND
I'll tell you something lady, this
guy is a real nervous cop - He's
just liable to pull the trigger.

Cates takes two steps toward Casey...

CATES
Naw, I'm the calm type.  I know
you don't want me to shoot you,
and I know that you don't want to
shoot me.

He takes two more steps toward her.

CATES
(continuing)
Shooting a cop puts you away for
a long time.

Holds out his hand.

CASEY
You assholes better be real.

She hands Cates the gun. Sally prods Hammond with the
baseball bat.

SALLY
Just wait a Goddamn second here,
let's see your badge...

He snatches the bat out of her hands.

HAMMOND
Don't have one.

SALLY
I knew it.  Call the cops.

Casey walks over to the phone.

CATES
Tell them it's Cates, Detective
31st District.  Then put your
clothes on. If you don't answer
some questions I'm taking both
your asses in.

After a moment, Casey puts down the phone.

CATES
(continuing)
Now, let's cut out the crap, which
one of you sees Billy Bear?

SALLY
None of your business, cop.  The
son of a bitch isn't here, and he
isn't coming back.

CATES
You can do better than that.

Turns to Casey.

CATES
(continuing)
How about it?

CASEY
I used to go with him...I don't
know where the hell he is.  I
haven't seen him for two weeks.
And I don't think I will.  He owes
me money...

SALLY
He's a Goddamn lowlife, the way he
treated her.

CATES
Sounds like a real stormy romance.

CASEY
I don't much care what it sounds
like to you, Cop. All I know is
that I went a few laps around the
track with him and I ended up with
nothin' but the short end of the
stick.

Cates looks over at Hammond.

CATES
Let's go.

HAMMOND
Wait a minute.  Maybe these ladies
would like to go a few laps with
us.  How about it? I been nearly
three years in prison and...

SALLY
Fuck off.

CATES
Come on...

Hannond starts for the door with Cates.

CASEY
If you find that bastard, Billy,
tell him to stay out of my life.
I don't need any more of his macho
bullshit.

TRANSITION.

STREET  CHINATOWN - NIGHT

The two men walk among the bright neon lights. Neither of
them very happy.

CATES
This sucks.  A maniac gets hold of
my gun and goes all over the
streets killing people with it.
So, instead of me being where I
oughta be, which is in bed giving
my girl the high, hard one, I'm
out here doing this shit, roaming
around with some overdressed,
charcoal-colored loser like you.

HAMMOND
You wanna leave, man?  Let me take
care of Ganz all by myself.

CATES
You?  Don't make me laugh.  You
can't take care of shit.  You've
been dicking me around since we
started on this turd-hunt.  All
you're good for is games... So
far, what I got outta you is
nothin'...

HAMMOND
I'm impressed with you too, Jack
you did a real good job of busting
up a couple of dykes bedded down
for the night.

CATES
Luther knew more than he told me
and so do you...Now you better
tell we what the fuck this is all
about.  I gave you 48 hours to
come up with something and the
clock's runnin' ...

A long look at Hammond.

HAMMOND
Maybe I don't like the way you ask.

CATES
Who gives a Goddamn what you
think? You're just a crook that's
got a weekendpass ... You're not
even a name anymore. Just a spear-
chucker with a Goddamn number
stenciled on the back of his
prison fatigues...

They walk past.

TRANSITION.

STREET ACROSS FROM TORCHIE'S - NIGHT

They two men walk toward the Cadillac.

CATES
Okay, Reggie, I'm done playing
around. I want to know what's
going on and I'm going to beat the
living shit out of you until you
tell me.

Hammond goes into a street rap.

HAMMOND
You beat the shit out of me?
Don't make me laugh, sucker.  You
don't know how I'd dance on your
face?  I'll hit you so hard, so
many times, you'll wish you'd
never been hatched.  I'll turn
your face into cottage cheese.
I'll make your girl think you been
takin' ugly pills.  She won't even
know who you are, sucker.

They stop by the car. Cates takes the gun out, lays it on the
hood.  Hammond stares at him. Cates next takes out his
wallet, shows Hammond his badge, then lays the badge on the
car fender... Smiles.

CATES
I guess the first thing I ought,
to explain to you, nigger, is I
fight dirty.

Hits Hammond a tremendous right hand full in the face.
Hammond sags, grabs onto the car fender for support. Cates
hesitates ... and Hammond kicks out, sending the partially
open car door slamming into Cates. Cates sprawls.

HAMMOND
So do I.

Hammond aims a kick at Cates' head.  Cates blocks it with
crossed forearms, grabs, twists.  Hammond tumbles, rolls away
from Cates.  Both men struggle to their feet, circle each
other.

Hammond moves in only to receive twoquick blows from Cates,
a bit sooner than he expected.  Cates smiles.

Hammond dances in and out... Cates' breathing becomes more
labored. His windmill attack penetrates Cates' defense. Cates
clears his head, charges, bull-like ... His rush and greater
bulk send both of them crashing into some trash cans and a
brick wall.

Hammond is faster...

Cates is much stronger; Both men on their knees. They look at
one another. Silently, they move to their feet. Hammond's
back is to a wall... Cates keeps him there, negates the
lighter man's agility. They slug away, each now arm-weary...
Exchange a dozen blows. Finally, Cates steps back, arms at
his side... Breath coming like a bellows...

Hammond has to hold on to the wall; one more punch would put
him out.

CATES
Now, you bastard, you going to
tell me what's going on...

Puffing away.

CATES
(continuing)
... Do I have to kick the shit out
of you some more.

They stand facing one another. Hammond smiles. A black-and-
white comes roaring up the street. Sirens howling, red lights
flashing, it slides to a stop. TWO UNIFORMED COPS jump out,
guns drawn.

FIRST COP
All right, you two.  Don't move.

CATES
NO, no...it's okay...I'm police.

SECOND COP
Yeah, sure.  Get your hands above
your head.

He keeps his gun trained on Cates,and Hammond.

CATES
My gun and badge are over there.
And I'm too fucking tired to raise
my hands...

Hammond rubs the side of his face. Cates falls back against
the patrol car. Still fighting for breath. The First Cop
lifts Cates' wallet off the Cadillac and looks at his badge,
shows it to the other cop.

FIRST COP
What the hell's going on here?

Cates walks over, pockets his gun.

SECOND COP
I've got a burglary call.  Two
women say a couple of hoods broke
into their place posing as cops.

CATES
I was following a lead.  We
rousted them... Go up and sweet
talk 'em.  You can straighten it
out.

The First Cop checks out Cates' badge and I.D.

FIRST COP
Why don't you do it?  We got
better things to do than
straighten out your messes.

CATES
So do I. I'll file a report
tomorrow.

The First Cop takes out his book, starts writing.  He's
pissed.

FIRST COP
I gotta file a..Report tonight
asshole...

CATES
Goes with the territory.

He grabs Hammond and they head for the Cadillac.

TRANSITION.

ALL-NIGHT GAS STATION

Cadillac parked behind the service area.

RESTROOM

Hammond looks' up at his bruised face in the mirror, then
washes up.  Cates is one step ahead of him. He rolls up a
piece of the wet towel and inserts it over his bleeding gum.

HAMMOND
Too bad we got interrupted when we
did.  I was getting ready to
finish you off.

Cates straightens up from the wash basin.

CATES
Yeah, right.  You want to try
again?

HAMMOND
Naw, you'd just call your pals
back to bail you out one more time.

CATES
They saved your ass, convict.

HAMMOND
One thing's for sure, Jack.
That's how you'll tell the story.

Cates dries off his face, starts out of the washroom.

CATES
I'll even put it in my report that
way.

The door closes behind Cates. Hammond leans back toward the
mirror, nudges a tooth with his finger.

HAMMOND
Motherfucker.

GAS STATION PARKING LOT

Cates leans on the Cadillac as Hammond emerges. Hammond
starts for the passenger side.

CATES
Wait a minute.

Hammond stops.

CATES
(continuing)
You come clean or we're going to
go again.  Right here, right now.

Pause.

A long moment; Hammond decides be has no choice.

HAMMOND
I been waiting a long time for
some money.

CATES
How much?

HAMMOND
Half a million.

CATES
Jesus.

Hammond smiles his meanest smile.

HAMMOND
How's that for a number to give
you heart failure? Guess you might
start to get the picture after
all. Mlaybe you're on the wrong
side of the old law and order
business..

Cates is unmoved.

CATES
Just tell me about the money.

HAMMOND
Me and my bunch hit a dealer in
the middle of a sale. It's the
kind of money nobody ever reports
stolen. I was sittin' pretty,
livin' in the high cotton, then
somebody fingered me for another
job. ... Some psycho who's out
there capping people with some
cop's gun.

CATES
He's after your money.

HAMMOND
You catch on real fast...Okay,
Jack, let's talk deal. How much of
my money you gonna let me keep?

Cates just looks at him.

HAMMOND
(continuing)
We split 50-50?

CATES
Not likely, convict.

HAMMOND
You gonna let me keep any of it?

CATES
Depends on how things work out. I
believe in the merit system. So
far you haven't built up any
points.

He smiles.

HAMMOND
Okay, from now on, I'm gonna be
real good, Jack.

Cates smiles back.

CATES
Where's the money?

HAMMOND
In the trunk of a car.  A lot
better than under a mattress,
right?

Cates smiles.

CATES
Right, partner.

HAMMOND
Get this. We ain't partners. We
ain't brothers. We ain't friends.
If Ganz gets away with my money,
you're gonna be sorry we ever met.

CATES
Yeah.  Right.

They get into the Caddy. Boom away.

TRANSITION.

The Cadillac moving through the city... Clock on the
dashboard showing 4 a.m. Cates at the wheel.

CATES
(continuing)
Where's the goddamn car?

HAMMOND
You're a real case, you know that,
Jack?

Smiles.

HAMMOND
(continuing)
This'll show you how smart I am.
I got it parked.

CATES
...For three years?  Let's hope it
wasn't a tow-away zone.

HAMMOND
You just drove by it.

The Cadillac makes a screeching U-turn,i swings into the curb.

Cates leans out, looks at...

PARKING BUILDING

Narrow, multi-storied, with a garage-like opening and
signals... proclaiming 'Weekly-Monthly-Long Term."

CADILLAC

CATES
Okay, now what?

Hammond gets out of the car.

Stands on the sidewalk.

Stretches.

Then gets into the back seats.

HAMMOND
Since you're wired on benniest you
get to stay up and stare at the
building. I'm  tired, so I'm going
to sleep. They take Sunday off.
Place opens at seven o'clock
Monday morning. Wake me up at a
quarter till...

Cates stares at the place.

CATES
You son of a bitch. You knew where
the money was all along and all we
had to do was come here and wait.
I almost got my ass blown off
twice tonight for nothing.

HAMMOND
I wasn't sure the money was still
there until we saw Luther. You
almost got your ass shot off for
nothing once, not twice, Jack.

CATES
Shit.

THE CITY

Beyond the skyline, grey streaks of dawn etch the sky.

TRANSITION.

The Cadillac is pulled up facing the streets down the block
from the parking sections Cates walks in through the lot
entrance. Threads his way between the lines of parked
vehicles Tired and haggard, he carries a paper bag filled
with quick-order food.

CADILLAC

Hammond stretches on the back seat.  Cates slams the door
shut.

CATES
I don't want you sleeping on the
job.

Hammond yawns, eases himself into a sitting position.

HAMMOND
The place opens in five minutes.
Ganz ought to be here soon...

Cates tears the paper bag open. Passes a cup of coffee and
donut back. He sips his own coffee, adds some whiskey from
his flask... pops another bennie.

CATES
You took a big chance, leaving
this here all this time.

HAMMOND
Not really.  I figured Ganz was
put down for a long time.  And I
knew Luther would never job me on
his own.  He's too chickenshit.

CATES
Guess what?  Luther just got in
line.

Hammond sits up.

HAMMOND
What?

CATES
Musta got some primo bondsman.

HAMMOND
Jesus Christ.  That's a disgrace
The guy pulls a gun on a cop and
he's out in 24 hours.  I tell you
some of the courts these days are
just a fucking revolving door.

INT. PARKING LOT BUILDING

Luther walks up to the window where a bored ATTENDANT reads
a comic book.

ATTENDANT
Yeah?

LUTHER
I want to pick up my car.

He passes across a faded form.

ATTENDANT
Name?

LUTHER
Hammond.

The Attendant examines the form, surprised.

ATTENDANT
This is three years old.

LUTHER
Yeah, I've been busy.

The Attendant opens a key file, begins rummaging in it.

ATTENDANT
We don't wash 'em, ya know.

LUTHER
How about chargin' the battery?

ATTENDANT
That we do. And we put air in the
tires. I'll even sell you some gas
if you need it.

LUTHER
Great, just great.

The Attendant finds the key, exits the booth. Luther follows
to an elevated stack of cars. The Attendant throws a switch,
the stack of cars begins to move.

STREET

Luther drives down the exit ramp in a dated Porsche
convertible.

The car is covered with a uniform coat of dust, except for
the windshield which has been wiped hastily clean.

Luther waits for a break in the flow of traffic, drives out.

Another street

Luther turns onto a side street and then suddenly Cate's
Cadillac appears ... starts to tail the Porsche.

CADILLAC

Cates follows Luther through several turns.

The Porsche jerks whenever it speeds up or slows down.

HAMMOND
Jesus Christ, look at all the dust
on my car...why in the hell don't
he take it to a car wash?

CATES
Didn't know you darker people went
in for foreign jobs.

HAMMOND
I had no choice. Some white
asshole bought the last piece of
shit skyblue Cadillac.

ANOTHER STREET

The Caddy follows the Porsche.

INT. CADDY

As they follow Luther.

CATES
You'd think the guy'd be smart
enough to know he was being tailed.

HAMMOND
Tryin' to save his girl, man. He's
in another world.

CATES
If I was his size and had Ganz on
my ass, I'd  just leave town.

HAMMOND
I'm tellin' you the man's in
love... he wants to be a hero for
his girl.

CATES
Oh, yeah, does bein' in love make
you stupid?

ANOTHER STREET

The Caddy follows the Porsche.

As they follow Luther.

CATES
I suppose you'd never be like
Luther and let a woman get to
you...

HAMMOND
I let women get to me.  The quest
for pussy is the meaning of life
... I got my own personal
philosophy about 'em.  Keep women
separate from guns, money and
business ... women are for
spending money.  They got nothing
to do with helping you make it.

CATES
That ain't philosophy.  That's
common sense.

ANOTHER STREET

The Caddy follows the Porsche.

INT. CADDY

As they follow Luther.

HAMMOND
Say, do you always work people
over like you did Luther?

CATES
If they don't tell me what I need
to know...

HAMMOND
Doesn't it get... Tiring?

CATES
I'm not in this 'cause it's fun.
I'm not into hitting guys 'cause
it makes me feel good either... I
do it 'cause it works-...

HAMMOND
You got a very depressing view of
life, man... you gotta smile once
in awhile...

ANOTHER STREET

The Caddy follows the Porsche.

INT. CADDY

As they follow Luther.

CATES
Maybe Luther hopes Ganz'll give
him a piece of your money...

HAMMOND
If he's hoping that then he's
dumber than I think he is, which
would be amazin', cause I already
think he's real dumb.

ANOTHER STREET

The Caddy follows the Porsche.

INT. CADDY

As they follow Luther.

HAMMOND
A long time agb Luther must of got
the shit beat out of him so bad it
just rattled his brain ... that
would account for him making so
many wrong moves in a row...

CATES
Yeah, it doesn't look like he's
gonna make it as a dangerous tough
guy...

ANOTHER STREET

The Caddy follows the Porsche.

INT. CADDY

As they follow Luther,

HAMMOND
You know, I'd be embarrassed if I
let my wheels go the way you've
done with this job.

CATES
What you don't understand is, I
don't give a damn about how this
thing looks.

HAMMOND
No class...

CATES
Class isn't somethin' you buy,
punk. Look at you, five hundred
dollar suit and you're still a
lowlife.

ANOTHER STREET

The Caddy follows the Porsche.

INT.  CADDY

As they follow Luther.

HAMMOND
We're getting too close ... Cates,
what's the matter, you been takin'
dumb pills?

CATES
Yeah, most cops are pretty dumb...
But since you're the one that
landed in jail what's that make
you?

ANOTHER STREET

Luther pulls over to curb and parks.

CADILLAC

suddenly swings over several lanes of traffic and parks in
driveway of parking lot.

LUTHER - CATES & HAMMOND'S P.O.V.

He goes to the trunk. Rummages there ... picks up a flaming
red suit.

INT. CADILLAC

CATES
That Goddamn suit is yours?

Hammond winces.

HAMMOND
That was in style a couple years
back, man.

CATES
Right. if you ever switch from
armed robbery to pimping, then
you're all set.

Under the suit is a nondescript attache case. Luther takes
it, closes the trunk. Beads down the sidewalk.

CADILLAC

HAMMOND
That's the money, Jack.

They jump out of the car, follow on foot.

STREET

Luther hurries along the sidewalk.

He reaches the corner, turns quickly...

CATES AND HAMMOND

Following a little way behind.

They pause at the corner, watching the pedestrian traffic
move by. Then turn down the cross street after Luther. Follow
him down a stairwell.

SUBWAY STATION - LOBBY

Escalators and open stairwells. Luther enters and pauses by
the doorway. Commuters crowd the counters and congregate near
the stairwells. More people are seated along hard plastic
seats. But no Ganz.  And no Billy.

Luther moves further into the station.  Cates and Hammond
enter. They keep Luther fixed between them, 50 feet ahead.
Luther seems to be wandering He walks through the shop area
and back toward the escalator. Hammond remains near the
arcade while Cates blends in with the commuters. Luther puts
the briefcase down at his feet and leans against a counter.
Next to him, a loud troop of Boy Scouts marches by.  A crowd
of people from the train area below flows through the lobby
obscuring Luther from Hammond and Cates for a moment.  Cates
steps out to get a better view and suddenly spots Ganz moving
through the crowd toward Luther. Be looks over at Hammond
across the station and motions.  Then they both start moving
in on Ganz, trying to intercept him before he gets deeper
into the crowd.

Ganz moves cautiously through the station. A crumpled
newspaper held absently in his hand. He scans the faces of
the commuters and spots Luther. Fails to notice Cates and
Hammond closing in on him from two directions.

A PATROLMAN comes up. Starts chatting amiably with a Boy
Scout next to Luther. Ganz hesitates in his approach. He
motions Luther to move awaye, but Luther starts to panic when
he sees Cates and Hammond closing in...

Ganz reacts to Luther, turns and spots the two men. He makes
an immediate break for open ground. The Patrolman sees Ganz
start to run. The newspaper is thrown to the floor... Ganz
swings Cates' .44 toward Hammond.

PATROLMAN
Hey--you!

Ganz whirls, his feet slipping on the marble floor. His shot
at Hammond goes plowing into the ceiling. The crowd starts to
panic and run in all directions.

The Patrolman has al ready brought his own gun out. Levels it
at Ganz.

PATROLMAN
(continuing)
Put it down.

BILLY BEAR

Suddenly appears, Rosalie at his side. Billy Bear's .44
blasts the Patrolman onto his back.

Ganz comes up and scrambles through the screaming patrons.
He, Billy and Rosalie head toward the escalator. Cates has
already brought out his .38... Can't get a clean shot through
the chaos.

Hammond pushes his way through the crowd to Cates.

HAMMOND
Shoot the sons of bitches.

Cates can't risk it...

HAMMOND
(continuing)
You don't want to chance it, then
give me the gun...

A moment.

HAMMOND
(continuing)
Bullshit. Then i'm staying with
the money.

CATES
You stay with me...

HAMMOND
No way...

Hammond starts after Luther. Cates turns, starts to aim at
Hammond. Hesitates...

PASSENGER WALKWAY

Panic has overtaken everyone as they try to escape the madman
with the gun.

Ganz and Billy elbow and kick their way through the crowd,
tugging Rosalie along...

Cates, gun in hand, creates further-panic as he moves after
Ganz.

Ganz grabs a man beside him.

Shoves him hard into the passengers in back.

The man knocks over several more people creating a roadblock.

Ganz vaults over the railing and starts for the trains.
Cates loses a few more precious seconds grappling through the
terrorized passengers...

TRAIN AREA

The usually jammed area looks like an empty stockyard. The
patrons huddle in fear against any available wall.

Cates bursts out of the stairwell...

TUNNEL

Red and green signal lights. The light goes red, a train
roars up and the doors hiss open.

Billy and Ganz fight through the passengers getting off the
train, jump on board; Billy pulls Rosalie behind him.

CATES

Running for the doors...

Suddenly, a SECURITY OFFICER appears, riot gun in hand.

SECURITY OFFICER
Freeze!

CATES
No! No!  There they are!

SECURITY OFFICER
Just put it down real slow.

The train doors close.

CATES
I'm a policeman, you asshole!

SECURITY OFFICER
Don't even try... now drop it
or - you're all done.

He means it, points the riot gun even closer... The train in
front of him moves away.

Cates carefully places the .38 on the pavement. Then raises
his hands in the air.

CATES
Shit.

TRAIN STATION - LOBBY

Witnesses stand in nervous little knots. Give versions of
what happened to notepad-toting patrolmen. Hospital
Attendants minister to various and sundry complaints.

Cates sits on a passenger bench, obviously dejected.  A
voice comes echoing from behind.

HADEN
Cates.

Haden, silhouetted against the light from the street.

HADEN
(continuing)
What the bell happened?

CATES
I lost them, that's what happened.

HADEN
How did they get away?

CATES
They ran.  As fast as they could.
Caught a train.

Haden watches the Morgue Personnel wheel out the body of the
Patrolman.

HADEN
Which one pulled the trigger?

CATES
The Indian.  I was about 30 yards
away.

HADEN
You couldn't get to him?

Cates shrugs.

HADEN
(continuing)
What a screw-up.

CATES
Right.  I screwed up.  I fucked
up. I messed up.  Anybody could
have done better, especially you.
I bet you're real good at hitting
targets through crowds.

Haden starts toward the street. Looks back at Cates.

HADEN
Don't duck the bullet Cates. Why
didn't you call in for backup
instead of makin' a grandstand
play?

CATES
I didn't have the time.

HADEN
Too bad, it would've covered your
ass.  Now you're in the shit and
so's the department. In case you
haven't noticed, this wasn't our
finest hour... I told you everyone
was watchin' on this one. Maybe
you better start thinkin' about
writin' tickets off a three wheel
bike.

Cates looks at Haden for a moment...

Turns and walks away.

TRANSITION.

PREDMORE HOTEL - NIGHT

Hammond across the street from Predmore.

Standing in a phone booth talking into the receiver...

He turns and looks acain at the hotel...

Hangs up.

Walks into a nearby bar.

TRANSITION.

VROMAN'S ROCK CLUB

HAMMOND

Punk Dancers all over the floor.

A rock group blasting away...("NEW SHOES" - Vocal)

HAMMOND

At a back booth...

A MAN (SOSNA) approaches carrying a small suitcase.

HAMMOND
How you doing, man?

SOSNA
Not bad, not bad.

Puts the suitcase down on the table.

SOSNA
(continuing)
You want to go outside?

HAMMOND
Naw, right here's okay.

Dancers sliding and jerking in front of them.

SOSNA
You sure?

HAMMOND
I'm sure.  Everybody here's
looking at everybody else's ass.

Sosna pops open the suitcase. Lid shielding the contents from
the patrons...

SOSNA
I got some real nice merchandise.
All of it's clean.

Suitcase arranged like q salesman's display case. Tightly
spaced rows of handguns mounted in their holsters.

HAMMOND
I like this one...

Pockets a revolver with a deft move.

HAMMOND
(continuing)
How about some ammo?

SOSNA
It's loaded... I got some shells
in here.

Opens another compartment. Hammond helps himself to two
boxes...

HAMMOND
How much?

SOSNA
This is clean shit.  No serial
numbers and never been used...

HAMMOND
Don't mess with me. How much?

SOSNA
Five bills.

HAMMOND
Five.  On credit.

SOSNA
This ain't a credit business.

You know that.

HAMMOND
Yeah, I know that, but this is me
and we're old friends. I haven't
got the money so what are you
gonna do about it?

SOSNA
Give it back.

HAMMOND
Try and take it.

A long moment.

SOSNA
Fuck you.  You got no right for
this kind of play.

HAMMOND
I'll got your money to you. No
sweat.

Hammonds heads for the bar.

Stands next to a good-looking woman (RITA). Nods to the
barkeep.

HAMMOND
(continuing)
Vodka. With a twist. And I want to
run a tab.

Served up. He knocks half of it back, turns to the woman.

HAMMOND
(continuing)
My name's Reggie Hammond.

Big personality smile.

RITA
So what?

She turns away as he takes a drink. He looks at another
pretty girl (ANGELA).

HAMMOND
Hi there. I'm Reggie Hammond.

ANGELA
I'm with somebody.

She turns away.

HAMMOND
This ain't my night.

He drinks up.

TRANSITION.

SQUAD ROOM - NIGHT

Several Detectives are working at desks. Kehoe walks into the
office. He moves slowly to Cates' desk and slumps down in a
nearby chair.

KEHOE
You look awful.

CATES
So do you...been a long day.

KEHOE
Long night, too, from what I heard
... Word's going around that in
addition to losing Ganz for the
second time, and in addition to
Haden busting you back to
Patrolman, some jig beat the crap
out of you.

CATES
Aw, bullshit, you heard wrong.

KEHOE
Doesn't look like it.

CATES
Nothing came in for me yet?  No
calls?

KEHOE
Nothing.

Kehoe's phone begins to ring.  Cates watches hopefully.

KEHOE
(continuing)
Kehoe... Okay, hang on.

Offers the phone to Cates.

KEHOE
(continuing)
It's for you... Ordinance.

Cates' excitement vanishes. He takes the receiver. Kehoe
begins to clean off his desk.

CATES
Hello... Yeah, okay.  I'll be in
tomorrow. That's right, you can
depend on it.  Okay?

He slams down the receiver, leans back in the chair.

CATES
(continuing)
Bullshit red tape.

KEHOE
I'm heading out. How about you?

Cates shakes his head.

CATES
I got to wait for a call.

KEHOE
Okay.  See you in the morning...
you know, you ought to get some
rest...

He walks out the door. Cates stares fixedly at the phone on
the desk. Hoping Hammond will call... Across the room another
phone starts to ring. Cates stares at the PLAINCLOTHESMAN who
answers.

PLAINCLOTHESMAN
Yeah, he's here.

Cates stiffens.

PLAINCLOTHESMAN
(continuing)
Cates... line twelve.

Cates snatches up the phone, shouts into it...

CATES
You motherfucker, where are you?

ELAINE

In the Chronicle Restaurant and Bar, a well appointed
establishment off Montgomery Street.

ELAINE
I'm at work, asshole.  Where else?

CATES
Elaine! I... I'm sorry... I was
expecting somebody else... police
business.

ELAINE
No wonder you're so popular.

CATES
No, it's I'm just surprised you
called.

ELAINE
So am I.

ELAINE				CATES
Jack, this afternoon...	  Hey, look, when...

ELAINE
You first.

CATES
Look, I'm sorry about ... the way
things have been lately.  I know
I haven't been acting real great...

Behind Cates, Kehoe steps back into the room.

KEHOE
Hey, Cates...

Cates swings around.

KEHOE
(continuing)
I almost forgot.  That pal of
yours from the Vice Squad wants
you to call him.

CATES
What?

ELAINE
Jack, are you still there?

KEHOE
Yeah.  He said he rousted a bar
with you last night.

CATES
Jesus Christ.  Why the hell didn't
you tell me before?

KEHOE
I'm not paid to take your personal
calls.  He was in some bar. .. off
duty.

Cates interrupts.

CATES
The number ... what's the Goddamn
number?

ELAINE
Jack?  What was that?

KEHOE
Find it yourself.  It's on my desk.

Cates speaks back into the receiver.

CATES
Elaine, I gotta put you on hold...

ELAINE
Jack, wait...

CATES
Just a second, that's all!

He hits the bold button, starts rummaging through the desk.
Paperwork scatters in all directions.

Kehoe watches him in silence for awhile then leaves. Cates
begins to dial.

CATES
(continuing)
Hammond... you son of a bitch,
where are you?

Listens for a moment.

VROMAN'S ROCK CLUB

Hammond on the phone as the band rocks away.   (MONKEY
MASH - Track only)

HAMMOND
Hey, Jack, how ya doin'? What took
you so long to call, man? I been
waitin' ... I'm at Vroman's up in
the Fillmore. Yeah, Vroman's...
'Course you don't hang out here;
it's for the brothers.

SQUAD ROOM

CATES
I'll be there in a minute. You
don't move your ass, right?

Slams down the phone. Starts toward the door. Remembers...

He dashes back to the phone, hits the other line. Hears only
a buzz.

CATES
(continuing)
Oh, shit.

TRANSITION.

VROMAN'S ROCK CLUB

Band blasting away on another number (THE BOYS ARE BACK IN
TOWN - VOCAL)

Hammond now in the middle of the floor dancing his ass off
with a girl named CANDY. As the song ends...

HAMMOND
My name's Reggie Hammond.

Tries his big personality smile.

This time gets one back.

CANDY
I'm candy...

HAMMOND
Excuse me, baby, but if i don't
get some action tonight, I'm gonna
bust.  You interested?

CANDY
Hey, what kind of talk is that?

HAMMOND
Oh ... You're a schoolteacher...

CANDY
No, I go to a school to learn how
to do hair. It's a government
program. But really I want to be
a model - and I am definitely not
sellin'.

HAMMOND
(humorously)
Goodbye.

She stops him.

CANDY
Hey, don't you think a hair
stylists got any interest in
gettin' it on?

HAMMOND
Here you go sweetheart, throw it
my way.

He gives her a kiss.

CANDY
You're in a hurry.

HAMMOND
Yeah, i been waiting three years.

CANDY
You just quit bein' a priest or
somethin'?

HAMMOND
No, baby, nothin' like that.
Look, there's a place across the
street. We can go right over
there...

CANDY
What's the matter with my place?

HAMMOND
No, it's gotta be here and now.
Believe me. Only I don't have the
damn money for a room...

The band starts up again. ("LOVE SONGS ARE FOR CRAZIES" -
VOCAL)

CANDY
Yeah, well, even us non-pros
expect the guy to pay for the
room...

Cates suddenly appears... steps between them. Yells above the
band's noise.

CATES
Where's luther?

HAMMOND
Be polite. Say hello.  This is
Candy.

CATES
Hello. And goodbye.

She looks at Hammond. He nods.

CANDY
Well, maybe I'll see you later ...

HAMMOND
Here's hoping, baby...

Candy leaves and melts into the crowd on the dance floor.

CATES
What about Luther?

HAMMOND
What about Ganz?

Cates shrugs.

CATES
We missed.

HAMMOND
You missed ... Luther took a taxi
to the hotel across the street.
Made a phone call.

CATES
Maybe we should pay Luther a
visit.

HAMMOND
Let him get some sleep.  He's
going to need it.

They move to the bar.

HAMMOND
(continuing)
They must have set up a meeting
for the morning; Luther left an 8
am wake-up and put up the "Don't
Disturb" sign.  He's trading his
girl for the money.  All we have
to do to grab Ganz is not go blind.

CATES
So you took the rest of the night
off...

Hammond smiles.

HAMMOND
We don't have too many
cheerleaders in prison. I though
I might indulge myself in a little
trim.

Cates orders two drinks.

CATES
Tell me something.  Why didn't you
just take the money off Luther and
split?

HAMMOND
Forget it. I want Ganz as bad as
you do and I got some other news
for you...

He opens his jacket slightly. Reveals a shoulder holster and
accompanying .45.  A long moment.

CATES
I don't know why, but I'm going to
let you keep it. Maybe because you
told me you had it, or maybe just
because I'm too tired to argue...

HAMMOND
You sure that's the reason?

Pause.

CATES
Thanks for callin' in... and I
guess Maybe... Look, I'm sorry I
called you Watermellon nigger...
those kinds of things. I was just
leanin' on ya, doin' my job.

HAMMOND
Bein' good at your job don't
explain everything, Jack ...

CATES
Yeah. Guess not.

Hammond gives him a big smile.

HAMMOND
As long as you're feeling like Abe
Lincoln, how about payin' me on
our bet?  We got time and all this
pussy around here's drivin' me
crazy. See that one over there,
the one I was with...

He nods at Candy across the way.

CATES
Yeah, I see her.

HAMMOND
I can just take her right across
the street to Luther's hotel.  All
I need is some money for the room.

HAMMOND
(continuing)

Big smile as Cates produces some cash. Hammond counts it
eagerly. Looks around. Candy suddenly appears like a trout
seeing a lure.  She grabs the money.

CANDY
Hello, again.

HAMMOND
I just struck it rich... I think
we can do a little business.  As
a matter of fact, I think we can
have a party.

Hammond smiles, leads her out of the bar.

CATES
Hurry back.

Cates watches them go, downs his drink. He fishes in his
pocket for a coin, moves to a wall phone. Dials...

CHRONICLE RESTAURANT BAR - NIGHT

A COCKTAIL WAITRESS answers the phone as Elaine pours a drink.

COCKTAIL WAITRESS
It's for you.

Hands her the receiver.

ELAINE
Hello.

CATES
Hi, it's me...

ELAINE
Fuck you.

She slams down the receiver.

SIDEWALK - FRONT OF VROMAN'S - NIGHT

Hammond and Candy exit the rock club. A line of young Punkers
waiting to get inside... Hammond and Candy are in a tight
clinch, a little giggly.

CANDY
So... what did you have in mind?

Suddenly, Hammond sees Luther emerge from the Predmore across
the street.

HAMMOND
Oh no, not now!

Luther moves down the street with the briefcase.  Hammond
pulls Candy back inside Vroman's.

VROMAN'S ROCK CLUB - BAR

Rock group still blasting away... (LOVE SONGS ARE FOR
CRAZIES - Vocal continues)

Hammond and Candy reappear, knocking aside a waitress about
to refill Cates' drink.

CATES
That was quick.

HAMMOND
When you been in prison three
years, it don't take long. Let's
go.

CATES
Why?

HAMMOND
Luther's on the move...

Cates jumps up, runs out. Hammond looks at Candy.

HAMMOND
(continuing)
I'll be back. Trust me.

He kisses her.

Runs off after Cates. She stares at him in disbelief.

STREET LIGHT

Luther checking over his shoulder for shadows, walks down the
block. Turns into a narrow street.

A BUS STOP

Luther waits, impatient.

Checks his watch.

Looks up and down the street.

He double-checks the bus stop sign over his head.

Just as a bus pulls to a stop, air brakes hissing ...

LUTHER

Gets in.

Sees that the driver is Billy Bear...

BUS

The bus starts up. Luther hesitates in the front. On the wide
rear seat is Ganz. Rosalie beside him.

GANZ
Open your coat. Both sides.

He shows he's not packed.

LUTHER
Let her go.

GANZ
First, the money.

Luther takes a step.

GANZ
(continuing)
Just show me.

Luther puts the case on a side seat, opens it for display.

ANOTHER BUS STOP

Commuters look up expectantly. One of two drift toward the
curb. Jump back in alarm as the bus roars by.

BUS

Ganz is satisfied. Luther closes the case.

LUTHER
Rosalie, you okay?

GANZ
What are you talkin' about? I said
I wouldn't hurt her.

And then he shoots Luther. Right between the buttons.

GANZ
(continuing)
I never break my word.

Laughs as Rosalie begins to scream.

CATES' CADDY

Barreling down the street, ignoring red lights.

Hammond shouts over the wind.

HAMMOND
Notice something funny about that
bus?

CATES
Yeah. It missed the last four
stops.

Cates pours on the gas.

BILLY BEAR

His eyes fall on the rear view mirror. A white Caddy dances
in the vibrating glass. Billy looks over his shoulder at Ganz.

BILLY
Ganz!

THE CADDY

Swerves into cross traffic, makes a big press forward. Comes
abreast of the driver's side of the bus.

GANZ

Smashes a side window with the two handguns.

Blasts away.

Cates driving with one hand as he draws his gun.

CATES

Looks up as glass shards sparkle down.

He speeds up ... he is neck and neck with the bus.

Hammond has a clear shot of Billy Bear who gives a side
glance at him;

Hammond doesn't shoot...

Cates slows down and fires...

Billy is hit in the shoulder. Ganz runs up and fires again...
Hammond is hit in the arm. Cates grabs Hammond by the shirt.
Yanks him close. Throws the wheel over ...

CADDY

Swerves as bullets pepper the passenger side. Stuffing flies
out of Hammondis still warm seat. The right hand windows
explode. Then the Caddy spins out.

THE BUS

Roars away...

THE CADDY

Skids into a traffic sign, demolishing some newspaper
machines. Cates curses, tries to start the car. The engine
won't turn over. He looks at the distant bus.

CATES
Goddamn! Goddamn!  Goddamn!

Pounds on the dash. What's left of the windshield falls in at
the impact.

TRANSITION.

SQUAD ROOM - NIGHT

Cates at his desk. Hammond seated nearby, now with a bandaged
arm.  Haden in front of Cates, furious.

HADEN
A bus, you goddamn whiskey mick
cop, you lost a stolen bus... We
got five deaths related to Ganz,
all of 'em law enforcement
related, and you blow it for a
lousy nigger convict...

Cates says nothing...

HADEN
(continuing)
That's rights I called him a
nigger.  You bet I did ... I saw
the report on that little piece of
shit.  If he spent one legal day
in his whole life, it'd be a
record...This is it for you...
suspension, review board... you've
had it.  When it gets 'round you
protect a con rather than nail a
cop killer...

Cates stands up.

CATES
He's got more brains and more guts
in one corner of his asshole than
any cop I've worked with.

HADEN
Just cause you say it with
conviction don't mean shit to
me... How you gonna take to a pink
slip, huh?.

Cates stands. Moves to Hammond. Handcuffs himself to him.

HADEN
(continuing)
Where the Christ do you think
you're going?

CATES
I'm taking my prisoner back to
jail.

Hammond looks at Haden.

HAMMOND
Goin' a little hard on him, aren't
you?

HADEN
Go fuck yourself convict.

HAMMOND
You know for a man, you have very
pretty brown eyes.

Cates and Hammond walk out.

UNDERGROUND PARKING LOT - POLICE STATION - NIGHT

Cates and Hammond walk stoically along a row of cars, arrive
at Hammond's Porsche.

HAMMOND
Hey, how'd my car get here?

CATES
I had it impounded.  Come on,
we'll use it for haulin' you back
to the slam.

HAMMOND
Back to jail in my own car.  Ganz
got away. Got all my money. It
just don't seem right.

CATES
I don't know about you, but I
could use a drink... I'll buy you
one.  It'll be my good-bye present.

Takes off Hammond's cuffs.  Looks at them.. Throws them away.

HAMMOND
Sorry we didn't do better, Jack.
I feel like I let you down.

CATES
Naw, you didn't let me down.  It
was a long shot all the way.  We
gave 'em a good run at it.

HAMMOND
Yeah, but we didn't get 'em.

They get in and drive off.

TRANSITION.

EXT.  CITY STREET - NIGHT

The Porsche blasts by ... These men want a drink.

TRANSITION.

CHRONICLE RESTAURANT AND BAR - NIGHT

Cates and Hammond walk in. It's late, the place is almost
empty. The Bartender is a woman with her back to them
conferring with a waitress about something.

HAMMOND
It's late, they're closing...

CATES
Don't worry about it.

The barmaid turns around to take their order.  It's Elaine.

ELAINE
Hey, I don't believe it.

CATES
Hiya, kid.

ELAINE
I ought to have you and your
friend thrown out...

CATES
Don't.  We've had a hard night.

ELAINE
I can see that.  Pardon me for
saying so, but you look like
shit.  What happened?

CATES
We and my pal here have been
taking it on the chin for the last
few hours...

Hammond looks at her. He nudges Cates.

ELAINE
Who the hell are you?

HAMMOND
Name's Hammond, Reggie Hammond.
I heard a lot about you. And any
friend of Jack's is a friend of
mine.

Gives her a big smile.

ELAINE
I'm not so sure I can say the same
thing...You don't look like a cop.

HAMMOND
Well, I been workin' the other
side of the street for the last
few years.  And you don't exactly
look like a shrink, wearin' that
dress...

ELAINE
Shrink major, not a shrink.

She pours three glasses of cognac. A STRAGGLER at the end of
the bar pipes up.

STRAGGLER
Hey, lady, a drink here.

ELAINE
We're closed.

STRAGGLER
Hey, what the hell?

Elaine turns to him; it's short and sweet.

ELAINE
Drink your drink, pay up and get
out.

STRAGGLER
You can't do this.  It's against...

ELAINE
Hey, just fuck off.  My friends
have guns.

Cates holds up his pistol. The man's eyes widen and he turns
his angry move toward her into a skedaddle out of the bar.
Elaine finishes drying a glass and approaches.

ELAINE
(continuing)
You real down?

CATES
I've been better...Dead end.  No
Ganz, no Indian.

He finishes his drink, puts down the glass.

CATES
(continuing)
I gotta call the station.

Looks back at Hammond...

CATES
(continuing)
Don't run off anywhere, okay?
I've already got enough to worry
about.

Moves away.

HAMMOND
Hard man to live with.

ELAINE
How would you know?

HAMMOND
Hey, two days with him is enough.

ELAINE
That's no bull.

She looks at him carefully. They both grin.

CATES

In the phone booth.

CATES
Is there any report ... No ...
Just tell me... nothing..Yeah I
figured... Okay, sure.

Hangs up.

ELAINE AND HAMMOND

Cates returns...

CATES
Nothing.  No sign of Ganz.  No
sign of the Indian.  Airport's
clean.  Train station. Bus
station.  Docks... Shit...

ELAINE
Ganz is going to be hard to track.
Just a pure schizo ... wires all
crossed... totally without any
pattern... kill anybody... The
Indian... himself... anybody...

CATES
How do you know?

ELAINE
Jack, it's all over the papers.
He's an obvious type.  But this
Indian...

Hammond cuts in.

HAMMOND
He was the only one of my bunch
that was my friend... He was
loyal, went all the way for you...

ELAINE
In all due respect, he sounds kind
of pathetic to me.  The kind of
guy that runs home to his momma or
some girlfriend.  Have you two ace
detectives checked that out?

CATES
Yeah, well the only woman of the
Indian's we ran into was shacked
up with her dyke girlfriend.  I
guess she went with him before she
came outta the Closet ... They
both looked mad enough to kill
him...

HAMMOND
Yeah, too bad.  They were real
nice lookin' too...In bed
together, hardly any clothes one
watching TV...

ELAINE
What makes you think they were
lesbians, or as you so quaintly
put it, dykes?

CATES
Come on, they were a little old
for a slumber party.

ELAINE
It might pay to reexamine a few of
your more primitive notions.  I
was in bed with a girlfriend
watching TV last week, Jack, and
one thing we know about me is I
happen not to be a lesbian ...
Now, if this Indian's girlfriend
got upset when you came looking
for him, it could just be she's
still vulnerable to him.

CATES
So what?

ELAINE
When a guy hurts you, then comes
back bleeding on his hands and
knees, who knows, he might just be
irrestible.

CATES
Hey, Come on, shrink time's over.
They wouldn't go see some old
girlfriend.

ELAINE
Oh, yeah, well look where you came
when you were down and out.

HAMMOND
She's got a point there, Jack.

Smiles. Cates reflects for a moment.

CATES
It's the only thing we got.

He looks at Elaine.

CATES
(continuing)
Whaddya think?

ELAINE
What do I know?  I'm just a
bartender.

CATES
Let's go, Reggie.

He kisses Elaine.

HAMMOND
Do I get to kiss her too?

CATES
If she's right, and if you don't
screw up.

They exit the bar.

TRANSITION.

EXT.  STREET - CHINATOVIN - NIGHT

Cates and Hammond hidden in a doorway which affords them a
good view of the alley landing to Casey and Sally's apartment.

HAMMOND
What if your girl's theory turns
out to be bullshit?  I mean, they
could be in Rio de Janeiro.

CATES
I've got to play it rough with
them. If they know anything, I'm
gonna know it.

A woman appears, turning out to be Casey carrying a shopping
bag.

HAMMOND
Hey, there she is...

CATES
Whatever play I maker just back me
up.

HAMMOND
If we run into Billy first, let me
try and talk him in.

CATES
Sure, I'll give you a shot at it,
but Ganz is mine.  You know, that
big Indian plays it for keeps...

HAMMOND
Yeah, and I know Ganz sure ain't
no sweetheart... I wouldn't like
it if this partnership ended
before it gets started.

CATES
Partnership?

HAMMOND
Well, you got to admit we come a
long way.

Cates gives him a smile.

CATES
Let's just do it.

APARTMENT STAIRWELL

As Casey opens the door and starts toward the.stairs, Cates
and Hammond come through the door and grab her. They are now
on the ground floor stairwell.

CATES
I hear you've got visitors.

CASEY
Would you guys...

CATES
No time for any of that crap any
more, lady... I'll rip your lungs
out if you don't answer fast.

Cates has her by the shoulder and arm; he twists her like a
vise...

HAMMOND
He means it...

She looks at Cates, knows Hammond's correct.

CASEY
Don't kill him.  Please, just
don't kill him.

A long moment.

CATES
You and the other one, you're
still Billy's girls. You always
were his girls...

CASEY
Yeah.  Sure, i'm crazy in love
with him, who wouldn't be...

CATES
You're gonna help us take him.

CASEY
No chance.

CATES
He can live or die ... You let us
in and he's got a chance to make
it.  Otherwise, he gets ventilated.

Casey's face is seared with pain at the thought of Billy
dying.

HAMMOND
If you help use he's got a chance,
lady.

CASEY
Billy's in the first room off the
hall ... With rosalie ... He's
makin' her happy tonight.  You
don't understand about the way it
is with him, do ya?

CATES
Where's ganz?

CASEY
In the back.  Down the other
corridor.

Cates looks at Reggie.

CATES
Looks like you're gonna get your
chance.

They move upward...

INT. APARTMENT - NIGHT

Cates is stealthily going to the end of the second corridor
of the kitchen and living room area. That corridor turns at
a sharp angle and goes to the back. Hammond is at the very
front of that first corridor..at a door ... he shoves it back.

INT. FIRST BEDROOM

There is a bed and  Rosalie, undressed, is in it... Billy is
seated on the edge of it... pants on, shirt off, pulling on
his boots. Suddenly, Hammond is pointing a gun at him...

HAMMOND
Give it up, Billy.  You got no
shot at it.

Billy stands.

ROSALIE
Don't let him hurt met Billy.
You're not gonna let 'em hurt me,
are ya?

BILLY
He won't hurt you.  He ain't gonna
do nothin' to you, he's just after
me.

HAMMOND
I'm tellin' ya, Billy, give it up.

BILLY
I never was much for bein'
rehabilitated.

Billy looks at Hammond.  With lightning sudden quickness, he
reaches and produces a huge Bowie knife from behind his back.
Billy smiles, laughs...then with a sudden, awful roar, he
leaps at Hamnond who unflinchingly fires his pistol.  The big
slugs stop Billy cold and throw him back against the bed as
Rosalie shrieks.

INT. BACK BEDROOM

Ganz, half-dressed, asleep, gun in hand, throws himself off
the bed, pushes Sally out of the way ... opens the door and
starts firing furiously down the corridor... He grabs the
briefcase and runs to the window.

INT. CORRIDOR/DOOWAY TO BACK BEDROOM

Cates has ducked the bullets ... he is inching toward the
door...

He pulls it open...Ganz from the window fires another shot
which almost gets him then vanishes down the fire escape...

INT. BACK BEDROOM

Sally gets to her feett yelling, runs at Cates as he appears
and futilely tries to hit him....He throws her down on the
bed as if she were a doll ... He goes to the window...

EXT. FIRE ESCAPE

Ganz peels down the fire escapes hits the ground. He stops
for a second... Then Cates appears, Ganz fires a shot then
starts to run. Cates keeps coming...

INT. FIRST BEDROOM

Hammond hears the gunfire, runs out of the room...

CATES

Dives down the fire escape.

BATHROOM

Hammond enters to find it empty of Ganz and Cates, only Sally
crying hysterically ... He runs out.

EXT. CHINATOWN STREET

Ganz runs out the back alley ...Cates pursues...

ALLEY

Hammond runs down the stairs toward the front of the building.

EXT. STREET

Ganz runs, turns out of an alley onto a street baked with
neon light. Cates pursues.

EXT. FRONT OF CASEY'S BUILDING

Hammond runs out, turns down the adjoining street.

CATES

Following Ganz, holding him in sight, but unable to get a
shot off...

PARALLEL STREET

Hammond running down a street near the one where Ganz is
being chased...

MAIN STREET

Cates fires at Ganz ... Ganz ducks in a doorway...

HAMMOND

on his street hears the shot... he runs toward it, down a
narrow alley between two buildings....

EXT. DOORWAY AT END OF ALLEY

Ganz hears footsteps approach from the opposite direction of
Cates.  They move very close to where be is crouched... it is
Hammond coming toward him... Ganz suddenly rolls a garbage
can in his path, dropping him like a stone.

CATES

Comes toward where he expects to find Ganz... Ganz has his
arm around Hammond's throat and his gun to his ear...

GANZ
Drop it... you come up against me,
you're gonna lose...

Hammond drops his gun.

GANZ
(continuing)
Hey, cop, come on...l got
something for ya... come on...

EXT.  MAIN STREET

Cates comes out of the doorway from which he's fired...and
comes into the middle of the street, gun up ... he puts it
down when he sees Ganz with Hammond in jeopardy.  The hand
that's around Hammond's throat also holds the black bag.
Cates walks forward, his gun down at his side...

GANZ
After I get outta this, cop...I'm
gonna live forever...

CATES
I don't think you're gonna make it.

GANZ
Whaddya mean...I got your gun ...
I got his money... I got
everything...

HAMMOND
Give up.  He's crazy.  He'll kill
us both.

Cates still walking...

GANZ
He won't try it. He's a fucking
chickenshit cop. They're all
fucking wimps, right, Cates?

They are now closer to each other. Ganz holding Hammond and
the money...

GANZ
(continuing)
Okay, cop ... give me your gun and
I'll let him live. Come on, Cates,
you're real good at giving up your
gun.

Cates keeps the same methodical pace...

CATES
Sure...

Suddenly, he crouches and fires twice. Hammond twists as Ganz
also fires. Ganz is hit in the collarbone and driven ten feet
backward. His grip on Hammond drops, Hammond dives to the
ground, looks at Cates.

HAMMOND
Jesus Christ, I didn't think you'd
really do it. You are crazy.

Ganz' gun still in his hand, but his arm useless at his side.
Cates is frozen in the crouch, ready to fire again.

Ganz is in enormous pain holding his bleeding chest... A look
of childish disbelief passes over his face.

GANZ
I got hit.  I can't believe it. I
got shot.

CATES
You're done.  End of story.

GANZ
I ain't gonna beg for my life. It
ain't cool.

He runs at Cates full-speed, screaming, roaring, then is
stopped by two more bullets that tear fist-sized holes in his
chest. Cates rises from his crouch. Takes his gun out of
Ganz' now lifeless hand. Then goes over to Hammond...

HAMMOND
Yours?

Cates raises the pistol.

CATES
Mine...

Pause.

CATES
(continuing)
You okay?

HAMMOND
Yeah.  But I wasn't there for a
second.

CATES
You did pick a real strange time
to go and be brave all on your
own...

Hammond smiles.

HAMMOND
Just tryin' to get the money,
Jack.  Just tryin' to build up a
few points on that merit system.

Cates smiles back, picks up the black bag as they move off.

TRANSITION.

ELAINE'S BATHROOM

Cates in the tub, steam rushing from the water.

Elaine sits on the porcelain edge as he splashes and soaps...

ELAINE
How'd they take it back at
headquarters?

CATES
Usual bullshit.  You make one
smart move and everybody wants to
be your friend... You know
somethin', shootin' guys sucks.
Especially compared to this.

ELAINE
I've been waiting a long time to
hear you say that.

CATES
Yeah, bein' a hard-ass all the
time is a real drag, but it works.

He reaches out, lifts his watch from his pile of clothes on
the floor.

CATES
(continuing)
Three more hours...

ELAINE
Where is he?

CATES
Promised I'd turn my back while
he... ah, never mind...

ELAINE
Tell me.

CATES
He's takin' care of the same
business I'll be takin' care of -
soon as I dry off.

Elaine smiles, leans close.

ELAINE
You're impossible...

CATES
That's what I always say.

TRANSITION.

CANDY'S ROOM - NIGHT

Minimal crummy hotel room accommodations... Hammond is
kissing her at the door, finishing buttoning all his buttons.

He reaches for a wallet, gives her several bills.

HAMMOND
Here you go, baby.

CANDY
Hey, don't do that.  I said I
wasn't a pro, remember?

HAMMOND
Hey, no, I'm tryin' to be nice.
Buy yourself something pretty.
I'd do it, but I got to go.  I got
this cop waitin' for me...

They kiss... it's pretty romantic... She opens the door for
him.

CORRIDOR

She stands at the top of the stairs; as Hammond walks down,
he calls back to her over his shoulder ...

HAMMOND
I'll be back in six months...
Maybe I'll make an honest woman of
you.

He gives her a big sniile.

HAMMOND
(continuing)
I'll buy ya the best dinner in San
Francisco...how'd that be? Then
we'll go dancin', okay?

CANDY
Now you're talkin'. See ya...

He moves off, still smiling, holding the black briefcase...

STREET - NIGHT

on a picturesque hill above the Haight. Cates standing near
the wheel of Hammond's Porsche.  Hammond comes down the porch
steps from the hotel.

CATES
Okay, reggie, start bustin' my
chops... Tell me how great you
were with that chick.

HAMMOND
Hey, Jack, real men don't have to
go in for that macho bullshit ...
but I was fantastic.

As a riatter of fact, I was so
good, I may have my cock done in
bronze.

Cates holds up the black briefcase.

CATES
I guess this is what you want to
talk about...All the pretty money
that's inside here.

Cates takes the case to the trunk, opens it, deposits the
case, locks the trunk.

HAMMOND
Wait a minute, Cates.  I've been
waitin' three years for that.  I
don't think it's fair, man. What
about the merit system.? You were
gonnna give me a few thousand.

CATES
There's nothin' to talk about.

Another long exchange of looks. Then be hands Hammond the
keys to the trunk.

CATES
(continuing)
It's your money.  It'll be here in
six months when you get out.

HAMMOND
And you're tellin' me you don't
want any of this cash?

CATES
That's right. Not my style,
Reggie..

HAMMOND
You are an awesomely weird cop.
Sure wish there were more like you
runnin' around out here.

CATES
No, you don't. If I ever get word
of you steppin' over the line
again, I'm gonna ventilate that
suit of yours.

HAMMOND
Spare met Jack. I'm into legit
investments from here on in.

Cates gives him a very skeptical look, as they head for the
car.

Hammond gets in behind the wheel, Cates on the passenger side.

Cates takes out a cigarette, starts to light it.

Hammond takes the match does it for him.

CATES
Thanks.

HAMMOND
No trouble, Jack. But, listen,
suppose I stay a crook?  Where'd
you get the idea that you could
catch me?

They both smile. Hammond socks it into gear and they drive
off into the far distance...

		 END.



`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
