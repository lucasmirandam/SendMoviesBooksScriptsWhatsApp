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

20th Century Women
by
Mike Mills
EXT. OCEAN - DAY
High overhead shot looking down on the Pacific Ocean.
TITLE: SANTA BARBARA, 1979.
EXT. SANTA BARBARA - VONS PARKING LOT - DAY
WIDE ON a plume of black smoke rising high into the air.
CLOSER ON a 1965 Ford Galaxy engulfed in flames.
DOROTHEA (55, short grey hair, Amelia Earhart androgyny) and JAMIE
(15, New-Wave/Punk) jog their shopping cart toward the commotion,
stunned to find their car in flames. Dorothea looks at the car and
then at her son Jamie, concerned. People run for help. Sirens in
the background.
DOROTHEA (V.O.)
That was my husband’s Ford Galaxy. We
drove Jamie home from the hospital in
that car.
JAMIE (V.O.)
My mom was 40 when she had
me. Everyone told her she
was too old to be a mother.
VISUALS
1. BABY IN ISOLETTE
DOROTHEA (V.O.)
I put my hand through the
little window, and he’d
squeeze my finger, and I’d
tell him life was very big,
and unknown;
VISUALS
2. DOROTHEA’S HAND OPENING
ISOLETTE WINDOW AND PUTTING
HAND THROUGH 3. BABY’S
FINGERS HOLDING HAND 4. STARS
IN SPACE
JAMIE (V.O.)
And she told me that there
were animals and sky and
cities,
VISUALS
5. MUYBRIDGE FOOTAGE OF
ANIMALS 6. STILL OF THE SKY
7. CITY FROM DOROTHEA’S ERA
DOROTHEA (V.O.)
Music, movies. He’d fall in
love, have his own children,
have passions, have meaning,
have his mom and dad.
VISUALS
8. BACK TO DOROTHEA’S HAND
OPENING ISOLETTE WINDOW AND
PUTTING HAND THROUGH 9.
BABY’S FINGERS HOLDING HAND.
JAMIE (V.O.)
When they got divorced, my
father moved back east and
left the car with us. He
calls on birthdays and
Christmas. Last time I felt
close to him was on my
birthday in 1974, he bought
me mirrored sunglasses. I saw
the president fall down the
stairs, and I threw up on the
carpet.
VISUALS
1. 15 YEAR OLD JAMIE ON PHONE
DOING A REQUIRED CALL WITH
HIS FATHER 2. HANDS DELIVER
MIRRORED SUNGLASSES TO 8 YEAR
OLD JAMIE ON MINIATURE GOLF
COURSE 3. PRESIDENT FORD
FALLS DOWN STAIRS ON THE TV
AT GOLF AND FUN 4. WORKER
CLEANS STAR FIELD CARPET IN
ARCADE
INT. DOROTHEA’S LIVING ROOM
Dorothea and Jamie slouch on couch, with “JEEVES” the cat,
watching her favorite film CASABLANCA.
DOROTHEA (V.O.)
Since then it’s just been us.
Track in on television playing the famous end of the film.
RICK / BOGART
You’re getting on that plane.
ILSA / BERGMAN
I don’t understand what about you?
RICK / BOGART
I’m staying here with him till the
plane get’s safely away.
ILSA / BERGMAN
No Richard, what has happened to
you, last night....
BACK TO VONS PARKING LOT: THE HULK OF THE CAR SITS IN A FOAMY
WHIPPED CREAM PUDDLE. THE FIRE DEPARTMENT CLEANS UP. POLICE ARE
THERE. DOROTHEA IS GREGARIOUS WITH THE FIREMEN WHO WORK AROUND HER.
JAMIE WATCHES, STILL STUNNED, LIFE’S SURPRISES.
DOROTHEA
Listen, Captain. I am having a
party tonight, it’s my birthday
actually, and I would like you to
drop by so I can feed you
 2.
FIRE CHIEF
It’s not necessary Mrs. Fields.
DOROTHEA
It’s Dorothea - no, I insist,
please? That way I can thank you.
She hands her address to them.
EXT. PARKING LOT - SIDE OF FIRE TRUCK - DAY
Jamie and Dorothea sit on a side bumper of a fire truck,
movement around them. They look small, sit close, groceries
at their feet.
Dorothea watches Jamie. The fire scared her. She looks
vulnerable.
DOROTHEA
That was a beautiful car.
JAMIE
Mom, it smelled like gas and
overheated all the time, and it was
just old...
Dorothea’s surprised, she didn’t know they felt so
differently about the car.
DOROTHEA
(What?) Well it wasn’t always old.
Dorothea goes to touch his hair. He bends away from her hand.
Jamie turns to his mom, trying to explain the contemporary
world to her.
JAMIE
You know, when the firemen come,
people don’t usually invite them
over for dinner.
Camera tracks away, revealing them like refugees in the
parking lot.
DOROTHEA
Yeah? Why not?
MAIN TITLE ON BLACK: 20TH CENTURY WOMEN
 3.
INT. MARY’S THERAPY PLACE - DAY
Camera pans across teen therapy girl (IMPROVISE THERAPY
TALK), sees a circle of 6 other teen girls having therapy,
lands on JULIE (17, Something subversive below her good
looks) similarly bored. The therapist MARY, (40’s academic)
listens. Julie stares at Mary, criticality brewing inside of
her.
EXT. OUTSIDE MARY’S OFFICE
Julie lights up a cigarette, her real self, gets on her bike.
EXT. MONTECITO STREETS - DAY
Julie smokes and rides her bike, her real self more on view.
INT. OBGYN OFFICE
ABBIE (28, Sophisticated NYC art-punk type) stands in gown in
OBGYN office, looking confused, vulnerable, but armed with a
late 70’s clunky Nikon camera. She studies her doctor putting
a swab into a tube, writing her name; she takes a photograph.
Turns and takes a photo of the room, her doctor is used to
this.
She watches an assistant come in and take the swab (and her
future fate) in its plastic container away - go down the
hall, and disappear around a corner.
INT. HOSPITAL HALLWAY
The technician carries the little swab down the hall, in a
clear plastic bag.
INT. DOROTHEA’S SIDE DOOR
Abbie walks in, looking lost, puts her bag down in the
kitchen.
INT. ABBIE’S ROOM
Now in her room, Talking Heads playing loudly, her pain peaks
and she begins to dance alone.
EXT. DOROTHEA’S HOUSE
Julie rides her bike past a line of old VWs and an old 30’s
Chevy.
INT. DOROTHEA’S HOUSE
Julie enters the house, walks towards WILLIAM (Mid 40’s post
hippie type).
 4.
William takes on a major job on his own (tearing down ceiling
in entry way). Reveal that this is a big house, needing
repair under serious renovations.
WILLIAM
Oh, hey, sorry. Jamie’s not here
right now.
Julie walks past this. Follows the sound of music upstairs.
INT. HALLWAY/ABBIE’S ROOM
Julie can see Abbie dancing through a partially opened door,
Abbie captivates her, she walks towards the room, Abbie sees
her, snaps out of her dancing, turns off the record.
Julie enters, Abbie’s still troubled by her OBGYN visit,
Julie can’t really take her eyes off Abbie.
ABBIE
They’re not home.
Abbie takes her picture.
JULIE
Don’t.
That doesn’t stop Abbie. Not mean, just stubborn.
ABBIE
I’m taking pictures of everything
that happens to me in a day.
JULIE
I don’t like having my picture
taken. I didn’t happen to you.
She takes another.
INT. DOROTHEA’S KITCHEN AREA
Dorothea and Jamie make their way to the kitchen with all the
groceries.
DOROTHEA
Hello.
 5.
WILLIAM
Hey.
William enters and helps them, Julie and Abbie enter a beat
later.
DOROTHEA
Hi.
She hands William a bag of groceries.
DOROTHEA
You aren’t going to believe what
happened.
JAMIE
Our car burst into flames in the
parking lot.
JULIE
Seriously?
WILLIAM
You OK?
ABBIE
How did it happen?
DOROTHEA
I don’t know, they said probably
just something electrical. We
walked out and it was just sitting
there, on fire.
Life’s surprises.
WILLIAM
Oh man, I’m sorry.
Everyone’s perplexed.
William helps unload groceries. Julie and Jamie IMPROV in
background.
 6.
DOROTHEA PULLS ABBIE ASIDE, LOOKS AT HER, ABBIE DOESN’T WANT
TO SHARE.
DOROTHEA
So, what happened?
ABBIE
They never tell you anything, I
won’t know for like a week.
Dorothea gives her an encouraging look.
ABBIE (CONT’D)
I’m gonna be late on rent.
DOROTHEA
That’s okay, Don’t worry about
that.
ABBIE
Thanks.
Abbie looks at Dorothea with love and admiration.
INT. JAMIE’S BEDROOM - DAY
Jamie lies flat on his bed. Julie’s next to him, processing,
earnestly worried for him.
JULIE
What if you had been in the car?
He shrugs, gestures with his hand. She lays beside him on her
side. She traces a finger across his hair, his forehead,
nose, chest, their hands touch.
JAMIE
I wouldn’t be here. You would’ve
missed me?
JULIE
(Yeah) Don’t joke.
She traces a finger across his hair, his forehead, nose,
chest, their hands touch. He puts his hand on her bare knee,
starts to slide up her leg. She easily pulls his hand off.
 7.
JULIE (CONT’D)
It was so much easier before you
got all horny.
He’s tried this before, but he is really just her friend.
He leans away from her.
JAMIE (CONT’D)
It’s not like you, don’t -
JULIE
Do it?
She likes that she does it. He smiles, used to her love of
being provocative. Then serious.
JULIE (CONT’D)
Friends can’t have sex and still be
friends.
She snuggles him again innocently, pressing her face into his
arm.
JULIE (CONT’D)
I like us like we are - OK?
JAMIE
OK?
Off screen, from far away.
DOROTHEA O.S.
Jamie ... Can you come help set up
please?
JAMIE
Can my mom just chill out?
JULIE
She’s compensating for her
loneliness.
INT. DOROTHEA’S ENTRY WAY
William takes Dorothea to see the ceiling he worked on. She
loves it. It’s pretty messed up. IMPROVISE ABOUT THE WORK
DONE.
 8.
WILLIAM
Dorothea, all that is beautiful
molding there.
DOROTHEA
It is.
WILLIAM
I want to continue that around the
side.
DOROTHEA
All right so we’re gonna have to rematch that, is that actually wood,
or is that plaster?
WILLIAM
No, the plaster is underneath it,
the molding on the outside there is
wood. It'll take some time...
INT. DOROTHEA’S DINING ROOM - NIGHT
Her party’s in full swing. An eclectic mix of people. 15 plus
the regulars; construction guys, straight looking drafting
men, a few women Dorothea’s age, and 4 firemen from before.
People are all talking and drinking, eating and moving around
the room. WE CROSS BETWEEN MANY SHORT INTERWOVEN MOMENTS
WITHIN THE PARTY. CAMERA MOVES WITH Dorothea showing the FIRE
CHIEF a little of the house. William silently glides with
them.
DOROTHEA
It was built in 1905, the same
family had it forever, but they
lost all their money during the
war, there was a fire - you
should’ve been here for that.
Anyway, so it was just a mess, they
just let it fall apart. Then a
bohemian inherited it in the 60’s, bunch of free spirits lived here,
and they lost it to the bank.
FIRE CHIEF
It’s beautiful.
 9.
DOROTHEA
(I think so) I completely fell in
love with it.
CAMERA FINDS WILLIAM AND ABBIE, sitting on the couch talking.
WILLIAM
We’re connected to the dirt because
we came from the dirt. The dirt is
made of stars and star dust the
same way we are, so when you put
your hands into that dirt and feel
the earth mother...
She laughs.
INT. DOROTHEA’S KITCHEN
Dorothea busily makes her famous angel food and strawberries
messy pile of a cake. Jamie’s putting in the candles.
William’s piling up the plates to take in.
DOROTHEA
William, it looks as though I’m
gonna be in need of a car. Do you
think you have something cheap?
Maybe that ‘49 deluxe?
WILLIAM
I think we can work something out,
maybe we’ll trade for rent or
something.
DOROTHEA
Sure.
He takes the plates into the dining room.
Dorothea finishes lighting the candles, to Jamie.
DOROTHEA
OK, give me a minute, then come in.
She trots off to the party - Jamie waits a minute then heads
in.
INT. DOROTHEA’S DINING ROOM - DAY
Jamie brings the cake into the dining room, applause, cheers,
she’s happy - blows out the candles.
 10.
TITLE: DOROTHEA FIELDS BORN 1924
JAMIE (V.O.)
My mom was born in 1924. When
she was my age people drove
in sad cars to sad houses
with old phones, no money or
food or televisions but the
people were real.
VISUALS
1. REPORTAGE OF DEPRESSION
ERA STREET SCENES 2. CARS 3.
HOUSES, PHONES 4. FOOD 5.
LIVING ROOMS 6. PEOPLE
JAMIE (V.O.)
When she was 16, the war
broke out and she had to
leave school.
VISUALS
7. REPORTAGE OF WW2 SOLDIERS
MARCHING
JAMIE (V.O.)
Her dream was to be a pilot
in the air force. She
actually went to flight
school. But the war ended
before she was done.
VISUALS
8. REPORTAGE OF FEMALE US
AIRFORCE PILOTS. 9. PLANES IN
FLIGHT.
JAMIE (V.O.)
She became the first woman to
work in the Continental Can
Company drafting room. Then
she met my dad. Then I came.
Then they got divorced. But
people from her time never
admit anything went wrong.
VISUALS
10. REPORTAGE OF 40’S ERA
DRAFTING ROOMS.
CUT FROM 40’S DRAFTING REPORTAGE TO:
INT. DOROTHEA’S DRAFTING ROOM - DAY
Dorothea works and smokes.
INT. BANK - DAY
Dorothea and EIGHT YEAR OLD JAMIE are sitting at a bank desk,
talking with a MANAGER.
DOROTHEA
What do you mean?
 11.
MANAGER
He’s too young to have an account
in his name only - little guy.
DOROTHEA
He’s a person, not a half person,
not some cute little guy, he has
volition and autonomy and privacy
and he needs a bank account. Can
you do that for us?
MANAGER
I’m sorry, he’s too young.
INT. JAMIE’S SCHOOL - DAY
Dorothea and 13 YEAR-OLD JAMIE are sitting in a school office
being scolded by a principal type. He hands her a note, she
resents this authority figure.
PRINCIPAL
Jamie, you can’t just keep skipping
school and making excuses.
DOROTHEA
Well wait a minute, why not? Why
can’t he skip school? If he has a
legitimate need to be away?
PRINCIPAL
Then I need a legitimate real note
from you with your real signature.
Hands her Jamie’s forged note.
DOROTHEA
Okay, wow, how did you forge my
signature so well?
INT. DOROTHEA’S 1977 HOUSE - DAY
CUT TO: 12 year-old hands holding a check with Dorothea’s
signature against a window, then placing the note over it and
tracing the signature.
DOROTHEA (CONT’D)
That’s really ingenious. But, never
forge someone’s signature, or do
something behind their back.
 12.
INT. SCHOOL - ADMINISTRATION OFFICE - DAY
12 year old Jamie walks in and hands a note to the secretary.
CLOSE ON the note.
DOROTHEA (V.O.)
Please excuse Jamie from school
this morning, he was doing
volunteer work for the Sandinistas.
The secretary looks incredulous, but files the note and let’s
Jamie head to class.
DIFFERENT DAY: Jamie walks in, hands over a note. CLOSE ON
note.
DOROTHEA (V.O.)
Please excuse Jamie from school
this morning, he was involved in a
small plane accident, fortunately
he was not hurt.
The secretary looks up at Jamie and files the note.
INT. DOROTHEAS HALLWAY - NIGHT - 1979
William tries to teach Jamie how to help out around the house
with Dorothea’s encouragement. IMPROVISE TALKING ABOUT
RENOVATIONS.
WILLIAM
You’re going to be in for a
legendary surprise. It’s mahogany
underneath.
JAMIE V.O.
She’s always trying to bring a man
into my life.
WILLIAM
This is probably Honduran mahogany,
really fine grain...
CUT TO Dorothea and Jamie whispering away from William.
JAMIE
This is like, really boring,
he’s talking about wood and
stuff.
DOROTHEA
Hey watch it, he’s helping me
out, restore the house O.K.?
 13.
INT. DOROTHEA’S 1975 KITCHEN - MORNING - 1975
JAMIE (V.O.)
She writes down her stocks every
morning,
10 YEAR OLD Jamie’s and Dorothea’s backs as they’re hunched
over the stock reports, writing down the day’s numbers.
DOROTHEA
IBM?
JAMIE
$213.20
DOROTHEA
GE?
JAMIE
$51.62
JAMIE
She smokes Salems because
they’re healthier, wears
Birkenstocks because she’s
contemporary. She read
Watership Down and learned
how to carve rabbits out of
wood. And she never dates a
man for very long.
VISUALS
11. SALEMS 12. HER
BIRKENSTOCKS 13. DOROTHEA
WORKS IN HOME OFFICE 14.
DOROTHEA READING ALONE IN BED
SMOKING.
INT. DOROTHEA’S FRONT DOOR / BACK TO DOROTHEA’S BIRTHDAY PARTY
The partygoers are heading out, Dorothea saying her good-byes. In
foreground Julie whispers with Jamie.
JULIE
See you later?
JAMIE
Just don’t hang out with that Chris
guy anymore, okay? He’s a skeez and
he’s kind of dumb.
JULIE
Exactly.
 14.
Turns to Dorothea as she leaves,
JULIE
Happy birthday.
DOROTHEA
Bye Julie.
She leaves Jamie and Dorothea alone on the doorstep.
JAMIE
Stop.
DOROTHEA
What?
JAMIE
Thinking you know everything that’s
going on.
DOROTHEA
Having your heart broken is a tremendous
way to learn about the world.
INT. DOROTHEA’S KITCHEN - CONTINUOUS
They’re alone now, doing the dishes together, he studies her.
JAMIE
Do you think you’re happy, like as
happy as you thought you’d be when
you were my age?
DOROTHEA
Seriously, you don’t just ask people
questions like that.
JAMIE
You’re my mom.
DOROTHEA
Especially your mom. Look,
wondering if you’re happy is a
great shortcut to being depressed.
 15.
He looks at her disappointed.
INT. KITCHEN - NIGHT
Dorothea is alone. Lost in thought. An ironing board in the
background. Just smoking and thinking. Then, from above, PUNK
plays. She looks up, in the direction of the sound. Rises.
INT. ABBIE’S ROOM - NIGHT
Jamie and Abbie sit together, listening to The Raincoats -
Fairytale In The Supermarket. Abbie’s looking at the cover,
Jamie’s looking through her other records.
Dorothea appears in the doorway, observing her son, and his
obvious love of this. She enters, sits down and listens with
them, an awkward moment.
DOROTHEA
What is that?
ABBIE
It’s The Raincoats.
She nods awkwardly to the beat, trying to relate.
DOROTHEA
Can’t things just be pretty?
JAMIE
“Pretty” music’s used to hide how
unfair and corrupt society is.
DOROTHEA
Ah, okay so... they’re not very
good, and they know that, right?
He just looks at her - ‘why’re you still here’ - she looks at
him confused by his pushing her away. Seriously curious.
ABBIE
Yea, it’s like they’ve got this
feeling, and they don’t have any
skill, and they don’t want skill,
because it’s really interesting
what happens when your passion is
bigger than the tools you have to
deal with it. It creates this
energy that’s raw. Isn’t it great?
 16.
CU on Dorothea feeling like an outsider, lost.
INT. DOROTHEA’S BEDROOM
Dorothea sits at the edge of her bed, smoking and thinking.
DOROTHEA
My son was born in 1964.
DOROTHEA V.O. CONTD.
He grew up with a meaningless
war, with protests, with
Nixon, with nice cars and
nice houses, computers,
drugs, boredom.
VISUALS
1. VIET NAM BURNING ON
TELEVISION 2. 1968 PROTEST ON
TELEVISION 3. NIXON ON
TELEVISION 4. CAR SALESMAN ON
TV 5. FAST FOOD COMMERCIAL ON
TV 6. 1979 PERSONAL COMPUTERS
7. DRUGS 8. BORED 1979 KIDS
INT. JAMIE’S BEDROOM
Jamie dances wildly alone, to punk music.
DOROTHEA V.O.
I know him less every day.
EXT. MONTECITO STREETS - DAY
Jamie skateboards down San Leandro, free, like he’s flying.
DOROTHEA V.O.
He said it was just a game.
EXT. MONTECITO RAMP AREA - DAY
Jamie watches other kids do “the fainting game”. One kid
hyperventilates, another pulls on his diaphragm from behind.
The kid faints and gets up, everyone laughs.
DOROTHEA V.O.
You breathe real hard and another
kid pulls on your diaphragm and you
faint.
Now Jamie tries it. He breathes heavily, kid pulls on his
diaphragm from behind, FILM BEGINS TO SPEED UP, Jamie faints,
he falls, he doesn’t wake up.
 17.
DOROTHEA V.O.
He said you’re supposed to come to
a few seconds later, but it took
Jamie almost a half an hour to wake
up.
Julie runs from the ramp where she’s been watching all this.
She tries to wake him, tell’s others to get help, she’s
panicked.
EXT. MONTECITO STREETS - DAY
Julie runs for help.
ALL IN FAST MOTION
INT. ABBIE’S CAR - DAY
Jamie is still unconscious, his head in Dorothea’s lap. She
looks terrified. Abbie and Julie are there, William drives.
EXT. HOSPITAL - EMERGENCY ENTRANCE
William runs, carries Jamie’s limp body into the hospital,
everyone follows.
INT. HOSPITAL - EMERGENCY AREA - DAY
LOOKING DOWN ON Jamie. STILL IN FAST MOTION.
They all watch nurses and doctors take his vitals. It’s a
confusing blur.
DOCTOR
(Tech talk - he’s stable - We just
have to wait - EKG)
Nurses
(Nurse tech talk, he’s stable)
They turn to rush Jamie to a bed. A doctor takes Dorothea by
the arm.
DOCTOR
Can you tell me what happened?
A parent’s wild guilt and fear on her face.
NEARBY: Jamie’s on a gurney, put into a small screened-in
area, still limp, unconscious, swarmed by nurses and techs.
 18.
Abbie and Julie get swept-up in the screened off area. These
two would never be together if it weren’t for Dorothea and
Jamie; Abbie, an older punk, Julie, a younger AP student.
The girls watch nurses take off his shirt, put on EKG nodes,
his body is limp, Abbie starts to silently cry, Julie too?
Dorothea finds Jamie’s screened in area. William sits
politely outside. His concern is for Dorothea.
NOW Behind the screen, DOROTHEA FREEZES when she sees the
wires all over his bare chest. Abbie and Julie are squished
into a corner. Dorothea moves around the nurses and
technicians still working, she finds his hand, puts it in
both of hers, presses her forehead against it.
She takes his hand, like she did when he was a baby in the
isolette, closes her eyes.
JAMIE REGAINS CONSCIOUSNESS - disorientated and confused, he
clumsily tries to pull off the oxygen canula.
DOROTHEA
He’s back.
The nurses and doctor scramble around him, doing vitals,
asking questions.
DOCTOR
What’s your name?
Confused, but present.
JAMIE
Jamie... Jamie Fields.
Dorothea looks on relieved but destroyed by this.
FAST MOTION ENDS.
INT. JAMIE’S HOSPITAL ROOM NIGHT
Jamie’s asleep in hospital bed, Dorothea sits next to him
worried, touching his hair. She gets up.
INT. HOSPITAL HALLWAY - NIGHT - CONTINUOUS
She exits his room, exhausted, she finds Julie and Abbie
waiting in the hallway. This means a lot to Dorothea, she
sit’s next to them.
 19.
INT. STAIRS - DAY
Jamie walks ahead going up the stairs. She walks behind,
eying him. Her worry and fear rising, until she says...
DOROTHEA
Why did you do something so -
stupid (dangerous).
JAMIE
I don’t know mom, everyone was
doing it.
Escalating fear and anger with each line.
DOROTHEA
So you just went along with it?
JAMIE
It looked like fun.
DOROTHEA
That’s just dumb. Why would you do
something so stupid? Just following
along? You know you almost died,
right?
He gets very defensive, feels attacked.
JAMIE
You don’t need to worry about me.
She doesn’t buy it.
DOROTHEA
Why don’t you think?
He turns away from her.
DOROTHEA (CONT’D)
Jamie, hey. What’s going on with
you?
He walks off to his room. She follows.
INT. JAMIE’S ROOM - CONTINUOUS
She storms into his room, when she enters he heads to the
other side. Dorothea’s quite angry now.
 20.
DOROTHEA
(Jamie?!) What? You won’t talk to
me now?
He confronts her like he never has before.
JAMIE
I’m not the one who doesn’t talk.
Dorothea’s surprised.
DOROTHEA
What? Come on, you scared the hell
out of me. Why did you hurt
yourself like that?
JAMIE
Why do you smoke yourself to death?
(Some specificity) Why don’t you go on dates?
DOROTHEA
(Shocked)
HeyJamie is terrified, but he can’t stop.
JAMIE
Why’re you fine being sad and
alone?
DOROTHEA
We don’t talk to each other like
that. (What’s happening to you.)
He storms off, she’s struck, she sits alone, she cries.
INT. DOROTHEA’S LIVING ROOM - NIGHT
Dorothea, still struggling, enters the living room, a movie plays
blankly on the TV, she’s surprised to find Jamie asleep on the
couch.
She sits and looks at him, something she doesn’t get to do in peace
anymore - thinking as she looks at him.
 21.
EXT. EAST BEACH - DAY
WIDE ON a beautiful beach in afternoon sun. In street
clothes, they look out of place surrounded by bikini-shorts
clad happy beachgoers. Dorothea looks at the girls, nervous.
She starts walking.
DOROTHEA
I think history’s been tough on men, they
can’t be what they were, and they cant
figure out what’s next.
ABBIE
What’re we talking about?
Dorothea struggles, wants them just to understand.
JULIE
Men?
ABBIE
I think history and men?
They stand talking on the beach...
CONVERSATION PRELAPS...
DOROTHEA
I think maybe you guys...
INT. KITCHEN - DAY
CLOSE on Dorothea - conversation continues. She is
vulnerable. Seated at the table with Abbie and Julie.
DOROTHEA
...could help me - with Jamie.
Julie and Abbie look to each other and Dorothea. What’s she
asking?
DOROTHEA (CONT’D)
He needs help figuring out how to
be himself in all this mess. And I
can’t be there, I can’t be there
with him, I need to let go.
 22.
JULIE
Is this because of the fainting
thing? He’s fine.
DOROTHEA
(No) it’s because of everything.
ABBIE
I don’t understand what you’re
asking.
DOROTHEA
How do you be a good man? I don’t
know how you do that nowadays. He’s
only got me, I mean, it’s not
enough.
JULIE
You’re serious?
ABBIE
What about William? He’s a guy,
wouldn’t he be better for this?
The girls look at each other, they take this more seriously.
DOROTHEA
Have you ever seen them have a
conversation?
Very vulnerable for Dorothea, like a failure.
DOROTHEA (CONT’D)
He doesn’t connect to men. He likes
you two... he likes you two a lot.
ABBIE
But what if I’m not good at it?
 23.
JULIE
He’s my friend, I don’t want to be
his mom.
DOROTHEA
No, I’m his mom.
JULIE
Don’t you need a man to raise a
man?
DOROTHEA
I don’t think so. I think you’re
what’s gonna work for him.
The girls don’t know what to think.
DOROTHEA (CONT’D)
He just has me, think about it,
that’s not enough.
I/E. MONTECITO STREETS - DOROTHEA’S CAR - DAY
From inside Dorothea’s car we watch Jamie skateboarding down a
steep street. Dorothea loves this, we see her smile at his taking
flight.
MOMENTS LATER: The car is parked at the bottom of the hill. She’s
just delivered the news. Jamie’s angry, mortified, confused. She’s
more vulnerable and scared than she knows.
JAMIE
Help me with what?
DOROTHEA
Go through this part of your life,
it’s not easy, it’s not easy for
anybody.
JAMIE
You asked them to help me?
He gets out of the car, slams the door, but doesn’t know exactly where
to go. She’s heartbroken but sticking with her plan.
 24.
DOROTHEA
I think they get it, Jamie. They like
you.
JAMIE
They said yes?
Well, not exactly.
DOROTHEA
Yeah.
JAMIE
Fuck.
DOROTHEA
Hey?!
JAMIE
You just feel guilty - cause it’s just
you and me.
DOROTHEA
You don’t know what I’m feeling.
JAMIE
Right, exactly, tell me.
That’s complicated for her.
DOROTHEA
Jamie...
JAMIE
You never tell me what’s going on
with you, you just do things.
He skates off - his face filled with anger.
She’s not used to him being this mad at her. She watches him get
further and further away.
EXT. SKATE DITCH OR SKATE RAMP - DAY
Jamie skates with other kids. 7-10 kids hang out, some skating,
some watching, smoking, talking.
Jamie’s still angry. He overhears some older, tougher looking punk
kids talking about going to a punk show in LA.
Jamie approaches them, they look at him.
 25.
JAMIE
You guys going to LA?
I/E. 101 FREEWAY - CAR - LATE AFTERNOON DUSK
Jamie’s in the far back. The older punk kids are driving, talking
excitedly about their adventure. Jamie mostly watches, but he loves
this adventure.
EXT. SUNSET BLVD - NIGHT
A seedy section of Sunset, Jamie finishes a call and hangs up a
payphone.
INT. DOROTHEA’S DINING ROOM - NIGHT
Dorothea, Abbie, and William are eating. Jamie’s conspicuously
absent, a place set for him. William returns to the table from the
phone.
WILLIAM
That was Jamie. He’s in LA, him and some
friends went to a show.
DOROTHEA
O.K.
She lights up, she doesn’t look worried.
ABBIE
Aren’t you worried?
DOROTHEA
He’s mad at me. This is his way of
dealing with it, it’s his right to be
mad.
ABBIE
If it made him this mad, maybe it
wasn’t a good idea?
Dorothea looks at Abbie, smokes, inscrutable.
INT. PUNK CLUB
We see and intense swirling mosh pit, amidst all this action
we see Jamie’s body whirling by, his face ecstatic.
CUT TO REPORTAGE FROM MID-LATE 1970’S LOS ANGELES PUNK SCENE.
THE GERMS, BLACK FLAG, THE WEIRDOS, THE MASQUE CLUB.
 26.
INT. DOROTHEA’S HOUSE - NIGHT - CONTINUOUS
Hard cut to Dorothea working on the house late at night. William
sees Dorothea down the hall, working away, hard on herself. She
looks up and sees him. Why is it easy for her to be vulnerable with
William?
DOROTHEA
Maybe I did do the wrong thing?
WILLIAM
Jamie’s energy’s very unstable, I think
that’s why he does all this.
DOROTHEA
Well there’s an energy crisis, that must
be playing into it.
He just looks at her sincerely, why joke?
DOROTHEA
You don’t have a lot of funny lines do
you?
He doesn’t react. She leaves the room, seemingly fine.
INT. DOROTHEA’S BEDROOM
She sits in bed and smokes, and thinks, and worries.
EXT. DOROTHEA’S HOUSE - NIGHT
Camera finds Julie, sneaking up to Dorothea’s house in the
dark.
INT. JAMIE’S BEDROOM - NIGHT - CONTINUOUS
Julie sneaks into his window. The way she does it tells us
she’s done it a lot.
She whispers for him but he’s not there. Has this ever
happened? She sits on his bed, lonely.
JULIE
Jamie.
She decides to get undressed, get’s into bed.
 27.
INT. ABBIE’S ROOM
Abbie’s taking photographs in her room, listening to Siouxsie
And The Banshees. She takes a photo of her red shoes on a
grey backdrop, she’s excited.
INT. WILLIAM’S BEDROOM - NIGHT
William’s still recovering from Dorothea’s rejection. Abbie pops
in, filled with energy.
ABBIE
Hey.
WILLIAM
Hey.
ABBIE
I had a new idea, for my work.
Maybe just shoot all my stuff,
everything I own, or everything
that’s important to me. A portrait
of myself through all the objects I
own? Can I show you?
WILLIAM
Yeah?
She lays out polaroids for him to see.
ABBIE
Bra, birth control, “On
Photography” by Susan Sontag, my
shoes, underwear, a picture of a
picture of my mom... I’m gonna do a
bunch of them.
He looks through some of her test Polaroids. Sort of
immediately engrossed.
WILLIAM
It’s sad in a way isn’t it? All this
stuff? You know what I mean?
She didn’t expect him to get it. She’s looking at one of her
objects as she talks.
Longer eye contact than usual.
 28.
He sits, looks at her, his hand is next to her hand. Something’s
going on for her, takes a beat to say it.
ABBIE
You want to fool around, with me?
WILLIAM
Really? Yeah.
He touches her hair. She closes her eyes, melts more than she
thought she would, just to be wanted is nice. She never tells
people about her cancer.
ABBIE (CONT’D)
You know I’m recovering from cervical
cancer?
WILLIAM
I know.
She can’t believe he still wants to fool around. Everyone
else treats her like a leper. Takes her a beat to assess
what she feels capable of.
He kisses her. She smells his hair.
ABBIE (CONT’D)
Your hair smells good.
WILLIAM
I make my own shampoo.
ABBIE
Of course you do.
How did she get so far off course? She closes her eyes and kisses
him again.
EXT. 101 FREEWAY - CAR - NIGHT
Jamie and his friends drive back from LA. He takes a beer
from one of his passed out friends, drinks from it.
INT. DOROTHEA’S HOUSE - NIGHT
Jamie enters the front door, buzzed. He makes his way down the
hallway, tipsy. Puts his beer on a chair. His ears ringing.
 29.
INT. DOROTHEA’S BEDROOM - NIGHT
Dorothea’s smoking in bed, pretending to read, petting Jeeves.
DOROTHEA
It's OK Jeeves, he’s home now, you can
relax.
INT. JAMIE’S ROOM - NIGHT
Jamie sits on the edge of his bed, looking at Julie. How strange,
how great. A bit tipsy.
JULIE
Where were you?
He thinks this is wild.
JAMIE
I went to LA. We went to the Starwood,
saw a show.
She looks upset, he studies her.
JULIE
Are you drunk?
He sits down next to her, tries to kiss her.
JULIE
Don’t.
JAMIE
What’s wrong?
JULIE
Tim Drammer came inside of me.
JAMIE
I don’t want to hear this shit.
INT. EMPTY SWIMMING POOL - NIGHT
Abandoned empty Olympic size swimming pool, Julie and friends
are drinking, fucking around, some one skateboards through it
all.
 30.
JULIE (V.O.)
We broke into that old pool at the
rec center. Got loaded. Fucked
around.
JULIE (V.O.)
Me and Tim ended up in his mom’s
Maverick.
EXT. EMPTY PARKING LOT - NIGHT
Camera pushes in on a lone Maverick, we hear the sounds of
sex, we hear Tim orgasm.
JULIE
Did you just cum?
INT. TIM’S MOM’S MAVERICK - NIGHT
Tim’s getting up off of Julie in the back seat, she sits up.
JULIE
You said you were gonna pull out?
TIM
Yeah, sorry.
Julie plays it like it’s not a big deal, but it is a big
deal.
JULIE
I thought we had a deal there?
CUT BACK TO JAMIE’S BEDROOM
He hates hearing this.
JAMIE
Fuck. What’re you gonna do?
 31.
JULIE
It'll be fine.
She’s actually very worried. Her mind spins, disturbed. She changes
the subject.
JULIE
Your mom asked me to like, help, like,
raise you.
JAMIE
Yea I know. She was raised in the
Depression, everyone helped everyone. The
whole neighborhood raised the kids -
Sorry.
She let’s him know it’s O.K. But she’s still disturbed.
JULIE
Can we do therapy?
JAMIE
Jesus, I don’t want to do
therapy right now....
JULIE
Let’s role play.
JAMIE
Please no.
JULIE
I’ll be your mom, you can tell her what
you want to tell her.
JAMIE
I don’t want to talk to my mom.
JULIE
What would you say to her?
It takes him a beat to work up to it.
JAMIE
Well, mom, I don’t need any help, I’m OK.
INT. WILLIAM’S ROOM - NIGHT - CONTINUOUS
Abbie and William are kissing, shirts off, she pulls back,
stops. Looks at him strange.
ABBIE
I’m gonna need a story.
 32.
WILLIAM
A what?
ABBIE (CONT’D)
A story, like, you’re a
photographer taking pictures of me,
I’m like a very normal woman or
something, you have to photograph
me, but you can’t control yourself
and you start touching me, and you
shouldn’t, but you can’t stop and
you keep apologizing, ‘I’m sorry,
I’m sorry, I’m sorry...’
WILLIAM
Can’t I just be me?
ABBIE
No... sorry.
This isn’t William’s usual comfort zone, not his trip. But
something about Abbie’s strength has him.
CUT TO: William stands beside the bed, pretending to be her
photographer. He wants to play her game, doesn’t really know
how.
ABBIE
Okay, so do I just?
WILLIAM
Hey, nice to meet you.
They shake hands.
ABBIE
Oh, Hi. Do I just look in the
camera, or should I look off to the
side?
WILLIAM
Let’s start that way, looking in
the camera.
ABBIE
Okay, should I smile?
 33.
WILLIAM
Do you like to smile?
ABBIE
Yeah.
WILLIAM
Okay.
He pretends to take a picture.
ABBIE
Oh, you took it. I thought you
would say like 1, 2, 3...
WILLIAM
No, I just wait for the moment.
ABBIE
Okay.
WILLIAM (CONT’D)
I just have to fix something.
He leans in and fixes her bra strap. She melts.
WILLIAM
Sorry.
ABBIE
Oh, no, it’s fine. I’ve just never
done this before so I’m a little
bit nervous. But I can wear my
hair differently if you want.
WILLIAM
Abbie.
ABBIE
Yeah?
He breaks their role playing and talks to her sincerely.
 34.
WILLIAM
I’m sorry. I’m really sorry.
She doesn’t know what to say, what to feel, not where she
expected to be. He kisses her.
INT. JAMIE’S ROOM - NIGHT - CONTINUOUS
Julie and Jamie are in bed, listen to Abbie’s moaning through
the walls. It’s more real and adult than what Julie’s ever
experienced.
Camera tracks out as Jamie looks at Julie.
JAMIE (V.O.) PRELAP
Julie and I have been friends since
we were little.
TITLE: JULIE BOWEN BORN 1962
INT. HIGH SCHOOL CHOIR ROOM: CAMERA TRACKS DOWN A LINE OF
SINGING FACES, THEY’RE ALL HAPPY AND ENGAGED - THEN JULIE,
REMOVED, GOING THROUGH THE MOTIONS.
JAMIE (V.O.) CONTD
She likes to say she’s self
destructive.
JAMIE (V.O.) CONTD
Her mother is a therapist. She
makes Julie attend her teen group
sessions.
INT. JULIE’S HOUSE: IMPROVISE, MARY TRIES TO RECONNECT WITH
HER DAUGHTER, BUT SHE’S TALKING TO A WALL.
INT. MARY’S THERAPY OFFICE: CAMERA TRACKS IN ON MARY’S TEEN
GIRL GROUP THERAPY. THE GIRLS IN A CIRCLE. JULIE RELUCTANTNLY
THERE.
CLOSE UP ON MARY: She talks to Julie as if she weren’t her
daughter.
MARY
How about the possibility... that
you’re choosing boys who are
inappropriate - unconsciously.
 35.
This is humiliating for Julie, she hides it as best as she
can.
INT. JULIE’S HOME: FAMILY DINNER WITH MARY, JULIE’S STEP DAD,
AND AMANDA. MARY DOTES ON AMANDA AND JULIE’S STEP DAD. JULIE
LOOKS ON IN DISBELIEF.
JAMIE (V.O.)
When her mother remarried, Julie
changed. When her half sister
Amanda was born with Cerebral
Palsy, she changed more.
INT. JULIE’S BEDROOM: AMANDA DOES JULIES MAKE UP. THEY
IMPROVISE.
AMANDA
It looks really pretty on you, it
just makes your face pop, like pop.
Amanda’s sweet and Julie’s very far away emotionally.
EXT. JULIE’S BEDROOM WINDOW: JULIE SNEAKS OUT AT NIGHT.
INT. HESHER ROOM: JULIE DOES A BONG HIT WITH SOME SKETCHY
GUYS.
JAMIE V.O.
She started fooling around. She
started sneaking into my house.
Sleeping over.
INT. DIFFERENT HESHER ROOM: JULIE MAKES OUT ON TOP OF ONE OF
THE BOYS.
EXT. JAMIE’S HOUSE NIGHT - JULIE SNEAKS ACROSS THE YARD AND
UP THE SIDE OF HIS HOUSE TO JAMIE’S WINDOW.
INT. JAMIE’S BEDROOM - NIGHT
Jamie and Julie lay next to each other, mid conversation.
JAMIE
Why’d you do it?
JULIE
Cause I’m crazy.
 36.
JAMIE
You wish you were crazy.
JULIE
Scratch me.
She lays her arm across him, something she does. He scratches
her.
JAMIE
We should go up the coast
somewhere. Just me and you.
INT. HIGH SCHOOL CHOIR ROOM - SAME SHOT DIFFERENT DAY.
Julie sings the same song with the other girls.
JAMIE (V.O.) PRELAP
Julie works at the La Cumbre Plaza
mall.
INT. CRABTREE AND EVELYN: JULIE HELPS A WOMAN PICK POTPOURRI.
SHE WANTS THE MONEY, SHE’S SMART, SHE COMPARTMENTALIZES.
JULIE
Spring rain features cinnamon,
jasmine, lily-of-the-valley and
rose.
INT. JULIE’S BEDROOM: JULIE READS FROM
FOREVER BY JUDY BLUME, 1975
JULIE (V.O.)
Sex is commitment, once you’re
there, you cant go back to holding
hands, and once you give yourself
both mentally and physically, well
you’re completely vulnerable.
INT. MARY’S THERAPY BUNGALOW: JUMP CUT THROUGH TEEN GIRLS
TALKING IN GROUP SESSION LED BY JULIE’S MOTHER MARY.
 37.
INT. CRABTREE AND EVELYN: JULIE HELPS A WOMAN PICK POTPOURRI.
SHE WANTS THE MONEY, SHE’S SMART, SHE COMPARTMENTALIZES.
JULIE
Spring rain features cinnamon,
jasmine, lily-of-the-valley and
rose.
EXT. JULIE’S CREEK: JULIE READS THE ROAD LESS TRAVELED, BY M.
SCOTT PECK, 1978.
JULIE (V.O.)
Of all the misconceptions about
love, the most powerful and
persuasive is the belief that
falling in love is love, or at
least one of the manifestations of
love.
EXT. ABANDONED PERGULA AREA: JULIE MESSES AROUND WITH A NEW
BOY.
INT. JAMIE’S BEDROOM NIGHT: JULIE TALKS TO JAMIE IN BED.
JULIE
Love is supposed to be a feeling
that you feel. People say that
they’re falling in love, but
they’re not actually falling in
love. It’s a fake connection that
you feel with someone, and marriage
should never happen.
INT. MARY’S THERAPY BUNGALOW: A GIRL BEATS A WOOD STUMP WITH
A ROLLED UP MAGAZINE, “YOU SHOULD HAVE DIED, IT SHOULD HAVE
BEEN YOU”.
It’s very cathartic and emotional. Mary watches the girl
approvingly, Julie can’t stand the whole situation.
EXT. DOROTHEA’S HOUSE - MORNING
Julie quietly escapes Jamie’s window.
WE FOLLOW her around the house, ducking under windows until she
gets to the front door, neatens a little, knocks and lets herself
in.
INT. DOROTHEA’S KITCHEN - MORNING
Dorothea is preparing breakfast for the family. Julie walks
in and helps bring dishes to the table.
 38.
DOROTHEA
Hey Julie, come in, Jamie’s still
asleep, he got home late.
JULIE
Yeah.
DOROTHEA
Help me bring this stuff in OK?
INT. DOROTHEA’S DINING ROOM - CONTINUOUS.
Julie, Abbie, Dorothea and William are having a very awkward
breakfast. Dorothea eyes William and Abbie.
ABBIE
So, is Jamie okay?
DOROTHEA
Yeah, he’s okay. I heard him come
in last night. I was awake.
ABBIE
Right.
DOROTHEA
Yea, I couldn’t sleep, so I was,
listening for him.
It’s clear she knows what happened, Julie really enjoys
herself.
Jamie finally enters, a bit sheepish, he did run away.
DOROTHEA
How was the show?
JAMIE
Good.
DOROTHEA
Next time you take a trip just tell
me, I won’t make too much dinner.
Jamie’s pissed to have his delinquency dismissed so. Wasn’t
she afraid?
 39.
CUT TO: Everyone cleaning up and heading off.
DOROTHEA
Hey, do the stocks with me?
Really?
DOROTHEA
C’mon.
CUT TO: Dorothea and Jamie are seated at the table, paper and pad
and more tension than before. Everyone else is gone.
DOROTHEA
IBM...Xerox...GE...
JAMIE
$69.73...$53.92...
DOROTHEA
Abbie’s got her appointment today. I have
to work, maybe you can be here when she
gets back, in case she needs support.
JAMIE
What if it’s like, bad news?
DOROTHEA
You can handle it. Or if you can’t, you
just gotta start somewhere.
He’s not so sure.
DOROTHEA CONTD
Men feel like you have to fix everything
for women, or you’re not doing anything.
But some things can’t be fixed. Just be
there. Somehow, that’s hard for you all.
JAMIE
I’m not all men, I’m just me.
 40.
DOROTHEA
Well, yes and no.
INT. ABBIE’S BATHROOM - DAY
Jamie watches a nervous, distraught Abbie re-dying her hair.
ABBIE
What if I have to do chemo, or have a
hysterectomy? You know what that is?
JAMIE
I should go with you.
She’s touched by his willingness.
ABBIE
Your mom did tell me to share my
life with you...
JAMIE
I know. I’m sorry, she’s from The
Depression.
INT. OB-GYN - EXAM ROOM - DAY
CLOSE ON Abbie’s confused, wide open face, hanging there. REVEAL
she’s in a paper gown.
DOCTOR (O.S.)
It’s good news Abbie.
ABBIE
Yeah?
DOCTOR
No malignant cells, your biopsy’s benign.
She tries to be happy. It takes a while to ask...
ABBIE
What about in the future?
 41.
DOCTOR
There was damage to the muscle wall, from
the surgery. You have an incompetent
cervix.
ABBIE
Incompetent?
DOCTOR
It may not be strong enough to go full
term during pregnancy. As the baby grows,
the cervix widens. If it’s weakened,
it’s likely to open prematurely.
INT. HOSPITAL - HALLWAY - DAY
Abbie and Jamie walk down the hall. She looks at him, a swirl of
pain and confusion.
ABBIE
He said I probably can’t have kids. But
I’m gonna be OK.
INT. DOROTHEA’S KITCHEN
ABBIE (CONT’D)
Having Jamie, was that the biggest
thing that happened to you?
What can Dorothea say? Abbie can see this is true.
DOROTHEA
I guess so. You’ll get through
this. You will get through it.
You will do it. This is the really
hard part. And then what happens
is, there’s a hard part but then it
gets better. Then it gets hard
again.
She cries and laughs.
JUMP CUT TO DOROTHEA NOTICING ABBIE’S NEW BIRDS IN A CAGE.
DOROTHEA
You got birds?
ABBIE
That OK?
 42.
She gets up for a closer look.
DOROTHEA
Yeah, do they have names?
ABBIE
(No) It’s a boy and a girl. The
guy at the store said they’re
monogamous for life, if one dies
the other one will die like a week
later.
DOROTHEA
What about Maximilian and Carlotta?
They deserve something grand, if
they’re gonna be monogamous their
whole lives.
Dorothea hugs her, about to leave.
ABBIE (V.O.)
Max and Carlotta are really good
names.
INT. DOROTHEA’S KITCHEN - DAY
Jamie’s looking distraught after his visit to the doctor,
with Abbie. It’s a lot to take in.
AFTER A BEAT OF THAT - Dorothea comes to the door. She
pauses, processing all that she just heard from Abbie.
Dorothea enters the room.
DOROTHEA
So, you went to her doctor’s office
with her, and waited there?
JAMIE
Yeah.
DOROTHEA
I told you to just wait here?
JAMIE
I thought it would be better to
just go with her, really be there.
 43.
DOROTHEA
Well, are you OK, sweetie?
Then, awkward, out of character.
DOROTHEA (CONT’D)
She’s really upset, that must have
been a lot to deal with.
JAMIE
No, not really.
Already feeling her plan slipping away from her. A little
regret.
JAMIE
I’m fine. I’m good. I learned a
lot.
Off Dorothea, not sure how to take this.
NOW IN FAST MOTION, WE GO BACK IN TIME TO THE OBGYN OFFICE.
Abbie and Jamie look out of place sitting with five pregnant
women and a couple of kids.
NURSE
Abigail Porter?
ABBIE
(whispers)
Punch me.
He does in slow motion, softly. She liked that. She leaves.
He picks up a magazine and does his best imitation of an
adult who belongs there, but he’s really just a nervous 15
year old punk kid pretending to read TIME.
A VERY PREGNANT TEENAGE GIRL enters, the weight of the world
on her face. Jamie can’t stop looking at her.
 44.
JAMIE (V.O.) PRELAP
Home pregnancy tests that women use
safely and easily, a small
revolution for women seeking to
take control of their lives.
INT. PHARMACY - DAY
Jamie searches through the shelves in the women’s section. He
finds what he’s looking for: an early E.P.T. pregnancy test.
At the counter, the PHARMACIST looks at it, perplexed. It’s
new to him. He figures out what it is. The pharmacist,
appalled, BUT lets him buy it.
EXT. ROAD - DAY CONTINUOUS
Jamie skateboards down a long Montecito street.
INT. JULIE’S BEDROOM - DAY
Jamie and Julie sit in her bedroom. She unpacks the E.P.T
kit. A lot of glass, hard angles, and mirrors, it looks very
space-age. She’s never seen anything like it before, glances
at the instructions.
JULIE
Fuck, what is that?
JAMIE
It’s a pregnancy test.
LATER: The door to Julie’s attached bathroom is closed. She’s
in the bathroom, not happy about peeing in a cup. Jamie sits
on the bedroom floor. Quiet, then the sound of pee in a cup.
They speak through the door.
JAMIE
The doctor said, Abbie won’t be
able to have kids.
Look of confusion and heaviness on Julie. She opens the door,
tube filled with urine in her hand.
JULIE
Why’d she take you?
Julie’s jealous.
 45.
We watch her follow Jamie’s instructions, it all gets more
and more real for her.
JULIE
Now what?
JAMIE
Um, shake for 10 seconds.
She shakes the vial. Counts to ten, very nervous. He inspects
it, reads the next part of the instructions.
JAMIE
Leave undisturbed for 2 hours.
She’s shocked.
JULIE
Two hours?
JAMIE
Yeah, that’s what it says. If it
appears then you’re positive, if no
ring appears then the test is
negative.
JAMIE CONTD
What do we do for two hours?
EXT. JULIE’S SAN YSIDRO CREEK, UNDER BRIDGE - DAY
Jamie and Julie stand in front of a long circular tunnel and
smoke. Jamie holds the cigarette wrong, inhales wrong. He
inhales, coughs. Looks at the cigarette.
JULIE
That’s not how guys smoke. Don’t
hold it like that.
She imitates a real guy smoking.
JULIE
Like this. Hold it like this.
He echoes her smoking moves. Still off.
JULIE
Okay now walk, do like a cool
cigarette walk.
 46.
He walks.
JULIE
Guys don’t look like they’re
thinking about what they look like.
JULIE IMPROVS acting like a man: holding a cigarette,
posture, walking. Jamie follows, mostly thinking this is just
a laugh.
JULIE
See?
He continues imitating her, but then he coughs. He throws his
cigarette away, grossed out. She teases him playfully.
JAMIE
Smoking’s gross.
JULIE
No it’s not.
JAMIE
Gives you cancer.
EXT. JULIE’S SAN YSIDRO CREEK, UNDER BRIDGE - LATER
Julie and Jamie sit and talk. She smokes.
JULIE
It’s just my opinion, I think being
strong is the most important
quality, it’s not being vulnerable,
not being sensitive, it’s not even
about being happy, it’s about
strength and your durability
against the other emotions.
INT. JULIE’S BEDROOM - DAY
They come back into the room. Julie’s upset, Jamie looks into
the EPT test.
JAMIE
No ring.
She looks at him, uncomfortably vulnerable.
JULIE
No ring.
 47.
INT. JAMIE’S ROOM - NIGHT
Jamie’s alone in his room. Abbie enters sits next to him, she
seems changed, a little lighter.
ABBIE
Thanks for coming with me.
JAMIE
Yeah.
ABBIE
I made you this.
She hands him a mix tape.
JAMIE
A mix tape.
CUT TO - ABBIE’S GIVING JAMIE AN IMPROV DANCE LESSON.
ABBIE (V.O.)
These are a bunch of songs that I
think my life would have been
better if they would have been
around when I was a teenager. And
I’m hoping that if you listen to
them now, you’ll be a happier and
more realized person than I could
ever hope to be.
TITLE: ABBIE PORTER BORN 1955
JAMIE (V.O.)
From that night on, Abbie
started telling me
everything.
VISUALS
1. ABBIE AND JAMIE, LAYING ON
THE BED, LAUGHING
JAMIE (V.O.)
She grew up in Santa Barbara,
where everyone is happy, but
that made her feel crazy.
VISUALS
2. ABBIE AND JAMIE TALK AT
DOROTHEA’S SMALL KITCHEN
TABLE.
 48.
JAMIE (V.O.)
In 1973 she moved to New York
City and went to art school.
New York City made her feel
sane. It was so fucked up.
She fell in love with
photography, she learned to
dance when she got sad. She
saw The Man Who Fell To Earth
and died her hair red.
VISUALS
3. EXT EAST VILLAGE: ABBIE
WALKS DOWN THE STREET,
ENTHRALLED 4. EXT. EAST
VILLAGE: ABBIE TAKES PICTURES
OF TRASH, HAPPY. 5. JUMP CUTS
OF ABBIE GETTING DRESSED IN
HER NYC MIRROR, SHE’S
DISCOVERING A MORE SEXUALIZED
LOOK.
INT. ABBIE’S ROOM - DAY
Abbie and Jamie are laying down - she tells him her story.
ABBIE
I figured out being looked at, you
know? Making guys excited,
uncomfortable. I was so cocky, and
I was so angry, and I was so happy.
EXT. JERSEY CITY APARTMENT - DAY
Abbie and DANIEL (her teacher) sit on the front steps.
JAMIE (V.O.)
She fell in love with her
teacher. Then she went to
Planned Parenthood. Her
friends couldn’t deal with
her having cancer, so she
went home to her mom.
VISUALS
5. ABBIE AND DANIEL WALKING
AROUND NYC 6. DANIEL PLAYING
VIOLIN 7. ABBIE WAITS WITH
OTHER YOUNG WOMEN IN PLANNED
PARENTHOOD 8. LAB TECHNICIAN
LOOKS AT ABBIE’S CELLS 8.
MAGNIFIED CANCEROUS CELLS
EXT. NEW YORK CITY STREET - DAY
Abbie calls her mom from a phone booth on street.
ABBIE
Mom?
INT. S.B. OBGYN OFFICE: OBGYN TALKS TO GAIL AND ABBIE.
OBGYN
Gail, did you ever take DES? When
you were pregnant with Abbie?
Confused, why is the question directed at her?
 49.
GAIL
Yes...I had two miscarriages before
Abbie...My doctor told me to take
it?
Abbie didn’t know her mom had miscarriages. Gail’s face
stiffens.
ABBIE (V.O.)
DES was a fertility medication they
gave to women, doctors prescribed
it to women. Later they figured out
it gave the daughters of those
women who took it cervical cancer.
CUT TO SINGLE DES PILL ON GREY.
INT. SANTA BARBARA HOSPITAL CORRIDOR: GAIL AND ABBIE LEAVE
OFFICE; ABBIE’S LOOKING AT HER MOM CONCERNED.
ABBIE
I didn’t know you had miscarriages.
GAIL FEELS TRESPASSED IN MANY WAYS, NO WARMTH, ABBIE’S
SURPRISED.
INT. HOSPITAL ROOM: CLOSE ON DETAILS: THE CEILING, FLOWERS,
GAIL’S FACE.
REVEAL Abbie waking from her surgery, bleary, looking at
Gail.
JAMIE (V.O.)
When her mom found out it was
because she took that drug, she
wouldn’t talk about it. And
everything Abbie did made her mad.
INT. ABBIE’S HOSPTIAL ROOM DAY: ABBIE LOOKS IN PAPER FOR A
ROOM TO RENT.
JAMIE V.O.
So Abbie looked for another place
to live.
 50.
INT. DOROTHEA’S HOUSE: ABBIE MEETS DOROTHEA FOR THE FIRST
TIME. ABBIE AND DOROTHEA TALK WARMLY IN THE KITCHEN. ABBIE
UNPACKS IN HER NEW ROOM, SHE MEETS JAMIE FOR THE FIST TIME -
HE LOOKS IN LOVE.
JAMIE V.O.
And she started renting the room
upstairs.
EXT. SANTA BARBARA BEACH - DAY
Abbie, with a reporter friend, takes a picture of long-winded
county supervisor for her work, how did her life end up like
this?
END OF SEQUENCE
INT. MOTEL 6 DRAFTING ROOM - DAY
All the men have their heads down drawing. Dorothea, the only
woman, is sitting up, looking around.
LATER IN THE BREAK ROOM: DOROTHEA SMOKES ALONE. CHARLIE
ENTERS, DOROTHEA SALUTES HIM. HE LIGHTS UP, LOOKS AT HER.
CHARLIE
Hey Dorothea.
DOROTHEA
Hey Charlie.
CHARLIE
You wanna go out sometime? Get a
drink?
Surprised, sincere.
DOROTHEA
Yeah? What the heck, Charlie.
CHARLIE
Oh, great, funny, I wasn’t sure.
DOROTHEA
Of what?
 51.
CHARLIE
Some of the guys thought you’re a
lesbian, you know, which is no
problem with me if you are, but you
aren’t.
DOROTHEA
Yeah, no, not a lesbian.
CHARLIE
OK, well then, let’s go out?
DOROTHEA
Maybe come to dinner at my house
again sometime? We could do that.
She leaves blasé, once out of sight, real hurt on her face.
INT. DOROTHEA’S BEDROOM - THAT NIGHT
Dorothea looks lost in bed alone.
INT. EXT. DOROTHEA’S WINDOW - MORNING
Dorothea’s up early, tidying up the house. She sees Julie making
her escape out of Jamie’s window, climbing down the scaffolding,
making her get away.
Dorothea is as impressed as she’s angry.
DOROTHEA
Shit Julie.
Dorothea takes off.
EXT. SAN LEANDRO STREET/OAK TREE GLENN - DOROTHEA’S CAR - DAY
Julie walks down the street. In the distance we see Dorothea’s VW
BUG catching up, pulling up alongside Julie.
Julie sees the car, walks on the little trail in to the oaks.
Dorothea parks and catches up to her.
DOROTHEA
I saw you, leaving. Please don’t turn me
into the cop here, that’s so boring you
know?
Julie feels horrible but decides to stand her ground.
 52.
JULIE
It’s nothing, I just end up there
sometimes.
DOROTHEA
What do you guys do?
JULIE
I just sleep there. We talk.
CUT TO: They’re sitting in the car. Dorothea lights up.
JULIE
Can I have one?
DOROTHEA
It’s really bad for you.
JULIE
You smoke all the time.
DOROTHEA
When I started they weren’t bad for you,
they were stylish and sort of edgy, so
it’s different for me.
Dorothea gives her one, Julie lights up like a seasoned smoker.
DOROTHEA
You’re good at hiding stuff, huh?
JULIE
My mom calls it “compartmentalizing”,
apparently I do that a lot.
DOROTHEA
Are you helping him?
JULIE
I’m trying.
 53.
DOROTHEA
Really?
JULIE
What about you? Have you thought
about your impact on him?
DOROTHEA
Me?
JULIE
It’s always about the mother. Like, do
you think you’ve moved on, since his dad?
DOROTHEA
You know, you’re not actually a
therapist.
Julie’s not easy to intimidate. She stares Dorothea down.
DOROTHEA
I’ve had new guys.
JULIE
No one appropriate.
DOROTHEA
Appropriate?
JULIE
Guys you’re not going to risk anything
with. Men you don’t even really like.
DOROTHEA
Seriously, you’re 17, maybe you can’t see
what’s good in some of my guys?
JULIE
I’m talking about you. You never seem
into it. Except for William, but he’s...
inappropriate.
That gets her.
 54.
DOROTHEA
Jesus. O.K. Yeah, hard to find a guy I
really like. I had my chance, I had it
twice, that part of life just never
worked out right.
A reflective beat, they say goodbye and Julie gets out of the
car.
Dorothea drives off, more unnerved than she expected.
INT. DOROTHEA’S HOUSE - DAY
Dorothea re-enters. Jamie’s finishing the stocks - surprising
Dorothea a little.
JAMIE
Where were you?
He’s been lying to her, so why would she tell him the truth?
DOROTHEA
I had some errands... You did the whole
list? You know all the stocks?
JAMIE
Yeah.
That means a lot to her. She’s processing their life together a
bit. William’s watching them.
DOROTHEA
IBM’s down again huh?
Jamie leaves. Dorothea watches him go down the hall. She lights up.
Observes William.
DOROTHEA
William?
WILLIAM
Yes?
DOROTHEA
Do I seem, stuck, to you?
WILLIAM
How do you mean?
 55.
DOROTHEA
I guess I wouldn’t know would I?
Abbie enters, awkwardly avoiding William, he’s not used to being
treated that way. Dorothea clocks all of this, amused, bit of a
trouble maker.
DOROTHEA
Let’s go out tonight? I’d like to see
this modern world.
On Abbie’s surprise.
WILLIAM
Can I come?
INT. BAUDELAIRES - NIGHT
Abbie leads Dorothea and William into the grungy, graffiti-lined
club filled with Santa Barbara’s punks. A local post-punk band
blares from the stage.
Dorothea would never appear intimidated, but this is a strange and
loud new world for her. William too.
Dorothea and William get a drink at the bar.
DOROTHEA
I don’t know if I’m going to find an
appropriate man here.
WILLIAM
You might.
He’s looking right at her. He touches her hand on the bar, she
looks at his hand like it’s a foreign object.
DOROTHEA
Hello -
He leans in and gently kisses her on the lips, hoping she will get
him out of the traps he’s made. She seems completely unstirred.
DOROTHEA
What was that? What does that mean?
WILLIAM
...
 56.
DOROTHEA
Don’t just kiss a woman if you don’t have
some idea what you mean by it.
WILLIAM
...
DOROTHEA
Aren’t you sleeping with Abbie?
WILLIAM
It’s nothing serious.
DOROTHEA
Then why do it?
She turns away from him coldly, but we see the kiss affected her.
A band begins to play, a distorted WALL OF SOUND. Kids head toward
the stage, some begin to dance. Dorothea walks through the crowd,
curious about this world. Dorothea makes her way to the front, into
the sea of noise and strobe light. William watches, impressed by
Dorothea’s willingness.
CLOSE ON Dorothea, strobe lit, her expressions searching for
hope and meaning in this music, as her face goes ON...OFF...
ON...OFF the music cross fades to score.
DOROTHEA (V.O.)
It’s 1979. I’m 55 years old. This
is what my son believes in.
WE SEE: The band playing on stage.
CUT TO: REPORTAGE OF DIFFERENT 1979 PUNK PERFORMERS ON STAGE.
THEIR CHARISMA, THEIR ABANDON, THAT’S WHAT WE SEE.
DOROTHEA (V.O.)
These people, with this hair, and
these clothes, making these
gestures, making these sounds.
 57.
BACK IN BAUDELAIRES: DOROTHEA OPENS HER EYES, THERE’S THE
BAND, SHE LOOKS PAINED.
DOROTHEA V.O.
It’s 1979 I’m 55 years old. In 1999 I
will die of cancer, from the smoking.
SHE HAS TO LEAVE. WILLIAM’S STILL WATCHING, HE CATCHES UP WITH HER.
WILLIAM
You’re going?
DOROTHEA
Yeah. Do me a favor, stay here, take care
of Abbie.
She points him to Abbie, begins to head out, turns back and looks
at the 79 punks and the band in the distance.
DOROTHEA V.O.
They don’t know this is the
end of punk. They don’t know
that Reagan’s coming. It’s
impossible to imagine that
kids will stop dreaming about
nuclear war, and have
nightmares about the weather.
It’s impossible to imagine
HIV and AIDS, what will
happen with skateboard
tricks, the internet.
VISUALS
1. REPORTAGE OF REAGAN IN
OFFICE. 2. FOOTAGE OF NUCLEAR
WAR FROM THE FILM “THE DAY
AFTER” 3. 2010 GRAPHICS OF
CLIMATE CHANGE AND RISING SEA
LEVELS 4. MICRO-BIOLOGICAL
SHOTS OF HIV 5. TECHNICAL
SKATEBOARD TRICKS FROM
2000’S. 8. GRAPHIC
VISUALIZATION OF THE
INTERNET.
EXT. BAUDELAIRES
Dorothea exits, disturbed. Julian the doorman is there.
DOROTHEA
Julian, you got a cigarette?
Surprised she knew his name, he gives her one, lights it. She
stares him down, he feels awkward and intimidated.
DOROTHEA
Thanks.
JULIAN
Did you have a good time?
DOROTHEA
Yeah, it was interesting.
 58.
She leaves, we follow her walking home, struggling inside.
DOROTHEA
Abbie’s got your number? Maybe you
can come over for dinner some
night?
INT. DOROTHEA’S HOUSE - NIGHT
Dorothea enters, lost in her thoughts, walks through the rooms.
Jamie’s half asleep, watching TV in the living room, half
waiting up for her, a role reversal.
JAMIE
It’s late.
A strange, aloof look.
JAMIE
How was it?
DOROTHEA
Life changing.
She smiles through her lost feelings and walks off.
INT. DOROTHEA’S BEDROOM - NIGHT
Dorothea smokes, pets Jeeves, thinks.
CLOSE ON the smoke slowly rising into the air.
DOROTHEA (V.O.)
Before I die I will prepare for
Y2K. Canned food and water in the
garage. I put 16 thousand dollars
worth of gold coins into a safe
deposit box at the Bank of
Montecito. I died before the new
year, Dolphin shaped balloons
floated over my head, they were
playing Louis Armstrong on a boom
box.
LOUIS ARMSTRONG’S “BASIN STREET BLUES” PLAYS
INT. DOWNSTAIRS HALLWAY - NIGHT
Abbie stumbles in with a busted lip, disgusted with her
night. She doesn’t know what to do, then decides to go up to
Jamie’s room.
 59.
INT. JAMIE’S BEDROOM - NIGHT
There’s a KNOCK. Julie hides under the covers.
JAMIE
Yeah?
Abbie enters, distraught. She sits on the edge of Jamie’s bed.
ABBIE
I’m sorry, you awake?
JAMIE
Yeah.
ABBIE
I wanted to tell you, you just have to
get out of this town, If you want to have
any chance at an interesting life where
you can move forward.
JAMIE (CONT’D)
What happened?
She sees Julie.
ABBIE
Oh, shit. I’m sorry.
JULIE
We don’t have sex. I just sleep here.
She looks at Jamie for verification, he nods, ‘sad but true’.
JAMIE
What happened?
ABBIE
Can I lay down?
JAMIE
Yeah, here, lay down.
He makes room, Julie’s pissed. Half just to not be bossed around by
Julie, Abbie lays down. Jamie’s surrounded by two of the women he
loves.
 60.
JULIE
We were sleeping.
ABBIE
I’m talking to Jamie for a sec, OK?
She composes herself on the bed,
ABBIE CONTD
Lynette Winters spit on me.
CUT BACK TO BAUDELAIRES - LYNETTE SPITS ON ABBIE. WILLIAM
TRIES TO INTERVENE.
ABBIE (V.O.)
So then I hit her.
THEN ABBIE PUSHES LYNETTE TO THE FLOOR.
JAMIE (V.O.)
Why’d she spit on you?
ABBIE (V.O.)
Because I spit on her.
TO ABBIE’S SURPRISE LYNETTE LUNGES BACK AT ABBIE, KNOCKING
HER TO THE FLOOR, STRADDLING HER, HITTING HER.
ABBIE V.O.
Right before I was going to New
York and I thought I was never
coming back. It felt very
liberating at the time.
WILLIAM FINALLY PULLS OFF LYNETTE - ABBIE, BLOODY LIP OR
NOSE, IS ENRAGED AT EVERYTHING THAT’S HAPPENED TO HER, GRABS
A CHAIR AND AWKWARDLY TRIES TO DESTROY IT AGAINST THE GROUND,
OVER AND OVER.
ABBIE V.O.
And somehow I ended up breaking a
chair.
 61.
EXT. BAUDELAIRES - NIGHT
Abbie quickly exits, bloody lip, torn up shirt. She rushes
past Julian, “Hey, what happened?” She’s running down the
street.
It takes a block for William to catch up to her, he has to
pull her to a stop. He has something to tell her.
ABBIE (V.O.)
And then William told me he didn’t
want to sleep with me anymore. Not
that I ever really wanted to sleep
with him.
She yells at William.
ABBIE
What are you saying? I don’t like
you, I don’t like you, I don’t like
you, I don’t like you.
BACK IN JAMIE’S BEDROOM: Abbie changes her mood again. Abbie
gestures for Julie to look away.
ABBIE
(To Julie) I’m just gonna talk to
Jamie for a second.
Set gets very close to him, almost sexual.
ABBIE (CONT’D)
Don’t let her sleep here without having
sex with you, it’s disempowering. And get
out of this town before you end up
working in a sunglasses shop.
She looks at Julie.
ABBIE
That goes for you too.
And with that she gets up and leaves. Julie’s jealous.
INT. DOROTHEA’S BREAKFAST TABLE
Julie, Jamie, Dorothea and William eat breakfast. Abbie shows up
with a busted lip. Dorothea’s curious - Abbie waves her off and
glares at William. Abbie has some books for Jamie.
 62.
ABBIE
Here’s some books from my feminism class.
I thought they might be good for you, a
woman’s perspective.
JAMIE
Thanks.
DOROTHEA
What happened to your lip?
ABBIE
There was a fight.
DOROTHEA
What?
ABBIE
It was ridiculous.
William picks up “Our Bodies Our Selves”.
WILLIAM
I read this. The chapter on home birth.
It was pretty helpful.
He digs into it, he’s a mystery to them. Does he read something
aloud?
JULIE
Home births actually stunts the
baby’s growth personality.
ABBIE
What is a growth personality?
JAMIE
It’s a real term.
 63.
WILLIAM
“And who knows what it means for a
newborn to see wood walls and
carpeted floors and to smell real
human smells and to feel wool and
cotton and flannel clothes instead
of starchy, white, deodorized...”
to me, that meant, what else?
Dorothea looks on, perplexed, what is this world?
INT. JAMIE’S BEDROOM - NIGHT
Jamie in bed looks through the book SISTERHOOD IS POWERFUL.
TITLE: THE POLITICS OF ORGASM - SUSAN LYDON, 1970
He finds the essay, begins to read.
JAMIE (V.O.)
‘Women’s sexuality, defined by men
to benefit men, has been downgraded
and perverted, repressed and
channeled...
EXT. BACK YARD - SKATE RAMP - DAY
Good 1979 style ramp skating. Punk on a boombox. Jamie and other
skaters sit on the roll-out deck. MATT, hardcore punk style, holds
court.
JAMIE (V.O.)
Anatomically, all orgasms are
centered in the clitoris, whether
they result from direct manual
pressure applied to the clitoris,
indirect...(fades out)
MATT
I fucked Heather so hard, she came like
three times.
JAMIE
How did you stimulate her clitoris?
What?
MATT
With my dick.
 64.
JAMIE
Women need direct clitoral stimulation,
with fingers or a vibrator or something.
She probably faked it, women fake it all
the time.
All the boys feel betrayed on a deep level. Matt focuses on Jamie’s
TALKING HEADS 77 shirt.
MATT
Talking Heads’re a bunch of fags.
JAMIE
There’s a girl in the band and she goes
out with the drummer, so...
CUT TO: Jamie and Matt FIGHTING AT THE BOTTOM OF THE RAMP. Matt is
stronger, he rubs Jamie’s face in the dirt.
EXT. SANTA BARBARA STREET - DAY
Jamie skateboards home after the fight.
INT. DOROTHEA’S HOUSE - DAY
In the bathroom, Dorothea cleans up Jamie’s face.
DOROTHEA
What was the fight about?
JAMIE
Clitoral stimulation.
Dorothea’s stung by him saying that. Drops the washcloth.
DOROTHEA
Why do you need to fight about that?
JAMIE
I want to be a good guy.
She’s lost.
JAMIE
I want to be able to satisfy a woman.
DOROTHEA
I’m sure you will.
 65.
She exits.
EXT. DOROTHEA’S HOUSE - MORNING
Dorothea’s on her way to work. “ART FAG” is spray painted on one
side of her car. “BLACK FLAG” on the other side.
DOROTHEA
Jesus.
CUT TO: Dorothea drags Jamie, Abbie and William out.
JAMIE
That’s what Matt called me. Cause I like
the Talking Heads.
Dorothea lashes out at Jamie and Abbie.
DOROTHEA
What’s Black Flag?
ABBIE
They’re a hardcore band, people who like
them hate the Talking Heads.
DOROTHEA
What?
ABBIE
The punk scene’s very divisive.
DOROTHEA
You all’re so advanced, aren’t you?
She gets in the car and heads out.
INT. ABBIE’S ROOM - NIGHT
Abbie’s taking Jamie’s portrait.
ABBIE
When dudes tell you their sex
stories, don’t contradict them,
trust me, just go with their
fantasy of what happened.
Jamie laughs. Abbie smiles, but is sad underneath.
 66.
JAMIE
How are you holding up with
everything?
ABBIE
You’re very sweet to me.
She plops back on her bed. Referring to everything that’s
happened to her.
ABBIE (CONT’D)
Whatever you think your life is
going to be like, just know, it’s
not going to be anything like that.
JAMIE
Right.
She smiles at his attempt to be her equal.
JAMIE (CONT’D)
Take me to that club.
INT. HALLWAY - UNDER CONSTRUCTION - NIGHT
Dorothea is in work clothes, sanding. She looks up. Sees
Jamie leaving.
DOROTHEA
Kid?
Jamie looks back.
DOROTHEA (CONT’D)
Where are you going?
JAMIE
Out. With Abbie.
Jamie, “See ya.” He heads out of the house. On Dorothea,
longing for her boy.
INT. BAUDELAIRES CLUB - NIGHT
Abbie and Jamie walk through the club, dingy, graffiti, bare
bulbs. Jamie’s enthralled.
 67.
Abbie takes a sip of beer, pushes it to Jamie, he gulps. She
watches him take all this in, so young and alive, it makes
her feel good to be helping him.
CUT TO: Abbie and Jamie standing in the crowd with TRISH
(Abbie’s punk friend). Abbie whispers in his ear, he
repeats.
JAMIE
I’m into older women.
TRISH
Oh? How old are you?
Abbie whispers, he repeats.
JAMIE
Age is a bourgeois construct.
TRISH
Good answer.
JAMIE
Age is a bourgeois construct.
ABBIE
OK, OK.
All in front of Trish...
ABBIE (CONT’D)
If she asks any questions, just say
as little as you can. Let me see
your most inscrutable face.
He kind of makes one.
CLOSE ON Jamie and Trish on the dance floor, punk music
blaring.
Abbie has found a moment of freedom.
INT. DOROTHEA’S HOUSE - NIGHT
William and Dorothea sit at the kitchen table, drinking a
beer after working on the house.
Dorothea’s feeling pretty mixed up, hurt and lost. William
can see it.
We enter mid conversation.
 68.
WILLIAM
I don’t really choose...
certain women, just...
DOROTHEA
Come to you.
He’s not proud of it.
DOROTHEA
You’re so hard working and talented
- cars, carpentry, electrical,
plumbing, you can do anything. You
could have more than that.
WILLIAM
That’s not how most people see
it... What about you? What happened
to Jamie’s father?
DOROTHEA
He didn’t turn out like I thought
he would.
WILLIAM
Must’ve been something good about
him.
She stops and thinks.
DOROTHEA
He was left handed.
She acts it out.
DOROTHEA
I’m right handed, so in the
morning, we could go through the
stock reports together, he could
write with his left hand and
scratch my back with his right.
WILLIAM
That’s it?
DOROTHEA
I liked that.
She slips into memory, looks sad, goes back to work. He pulls
the plug on her sander.
 69.
WILLIAM
You ever meditate?
INT. WILLIAM’S ROOM - NIGHT
He’s sitting on the edge of his bed, eyes closed. Dorothea’s
in a chair across from him, sneaking peeks at him.
There is something calming about it, and his strange little
room with his pottery in it. She finds her cigarettes, lights
up. The sound wakes him up, she mimes ‘keep going, I’m fine,
I’m just gonna smoke while I meditate.’
William laughs, enjoys her humor, they share a look.
He smiles at her.
DOROTHEA
You’re such an odd bird sweetie.
How’d you get like that anyways?
TITLE: WILLIAM SAUNDERS BORN 1939
EXT. WILLIAM’S CAR AREA
William works on a car - he does not love this work.
DOROTHEA V.O.
William’s dad managed an auto
repair shop in Cleveland.
DOROTHEA V.O. (v.o.)
Engines always made sense to
him. He tried to put himself
through college, but couldn’t
afford it. He met Theresa in
1963, she was smart, brave,
better off, they were in
love. They moved to Oakland,
then to a commune in
Sebastopol.
VISUALS
1. CONTEMPORARY WILLIAM
WORKING ON A CAR. 2. PERSONAL
PHOTOS OF THERESA IN 1960’S -
BEAUTIFUL, LAUGHING AT
CAMERA, AN ANIMATED SOUL. 3.
STILLS OF BERKELEY IN 1960’S
4. STILLS OF NORTHERN
CALIFORNIA COMMUNES.
INT. WILLIAM’S ROOM - WHERE THEY WERE MEDITATING
Now they’re both talking and smoking, drinking wine.
WILLIAM
I learned to be like them, you
know? As it turns out, it was a lot
easier than I thought it would be,
but it wasn’t really me, I was
doing it so I wouldn’t lose
Theresa.
 70.
Dorothea smiles.
DOROTHEA
Sounds horrible.
DOROTHEA V.O.
He started looking like them,
talking like them, but they
made him feel old and
uneducated and poor. Theresa
started thinking he was
uptight and possessive and
she left him.
VISUALS
5. REPORTAGE OF 60’S COMMUNAL
LIFE AND EVENTS - STILL AND
MOTION 6. WILLIAM AT THE
DINING TABLE, TRYING TO JOIN
THE GROUP.
WILLIAM (V.O.)
After Theresa women didn’t
have to look one way or the
other, or be a certain way. I
think that I just want to win
them over so that I won’t be
lonely. But once I have them
don’t really know what to do
with them.
VISUALS
7. DIFFERENT WOMEN ON THE BED
LOOKING INTO CAMERA 8.
WILLIAM WASHES GREASE AND
DIRT OFF HIS HANDS, DIRTYING
THE SINK 9.WILLIAM FIXING A
PRETTY BLONDE’S CAR AND HAS
SEX WITH HER. SHE LEAVES.
DOROTHEA V.O.
What he likes is making
bowls. He doesn’t smell like
oil and grease, his hands
don’t look like a dumb
mechanic’s hands.
VISUALS
10. WILLIAM HAPPILY MAKING A
BOWL.
INT. DOROTHEA’S KITCHEN - SAME NIGHT
William and Dorothea are drinking wine, William has just finished
his story. They’re both looking at a bowl he’s made on the table.
Silence for a beat then...
DOROTHEA
That’s beautiful.
EXT. DOROTHEA’S SIDE YARD - NIGHT
The 1939 Ford is in the front of the line of cars. William’s
inside, he’s not sure it’s going to work, turns the key, the
engine starts.
DOROTHEA
You fixed it?
 71.
WILLIAM
Maybe? It’s part Volkswagon now. I
had to improvise.
DOROTHEA
Can we take it for a ride?
WILLIAM
I think so.
EXT. SANTA BARBARA STREETS - NIGHT
They cruise in the old Ford.
INT. MEL’S BAR - NIGHT
Dorothea at the juke box, she selects an old GENE AUSTIN song. She
sways alone on the empty dance floor. William appears and dances,
fluid hippie style. She looks at him in disbelief.
DOROTHEA
My, dear. How can you learn about a
person over there?
He stops, OK, how do you do it?
DOROTHEA
First, you introduce yourself to her, a
little small talk, then you ask her to
dance.
WILLIAM
I’m William, I live downstairs, with all
the cars.
DOROTHEA
Hello William.
WILLIAM
Would you like to dance?
She reaches out and takes his hand, awkwardly pulls him in.
 72.
DOROTHEA
This hand goes here, this one round here.
And just, be with her, all she really
wants is some company.
CLOSE ON William, it’s still mysterious what he feels, but he’s
definitely happy. They dance to Gene Austin. CLOSE ON Dorothea, the
contact, the dancing affects her more than she planned.
40’s music is taken over by DAVID BOWIE’S 1979 SONG “DJ”
INT. BAUDELAIRES - NIGHT - CONTINUOUS
BOWIE’S “DJ” BLARES: Jamie, Trish, Abbie and some older guys
dance to chaotic, intense music.
CLOSE ON ABBIE: feeling some of the freedom she’s been
missing, some of the liberation this world used to give her.
EXT. AROUND BANDSHELL PARK - NIGHT
Everyone piles out of the car, running across the empty dark park.
Abbie lays down in the wet grass. Jamie comes over, trying to
make her feel better.
JAMIE
I understand you. We should go away, just
you and me, get up the coast, be alone
somewhere.
ABBIE
Hey - Jamie. You’re in love with
Julie. Don’t let her just run over
you. Tell her what you want.
JAMIE
I know.
But he’s heartbroken for Abbie. They share a look of love and
regret. She touches him sweetly, somehow older than she was an hour
ago, more alive to how complicated it all is.
She punches him in slow motion.
INT. DOROTHEA’S ENTRY WAY
Dorothea and William return home from the bar. Having passed
the “Art Fag” car on the way in, they discuss.
 73.
DOROTHEA
If you were to listen to it, what
does that mean, “Art Fag”? What is,
think about it, from more like a
sociological prospective. What is
that?
WILLIAM
Abbie understands it.
DOROTHEA
Abbie does not understand it, she’s
just a part of it.
INT. ABBIE’S ROOM - NIGHT
Dorothea and William find the BLACK FLAG record. Dorothea puts
NERVOUS BREAKDOWN on the turntable. They jolt with the first guitar
blast. Dorothea’s trying to understand it. William doesn’t get her
efforts, he takes the needle off.
WILLIAM
We don’t need to like this.
Dorothea needs to know why this works, she puts the needle back on,
the music starts up again.
DOROTHEA
What’s he saying?
With love, William talks them out.
WILLIAM
‘Head on my shoulders, it’s going
berserk.’
DOROTHEA
Is that interesting?
WILLIAM
I don’t know either Dorothea.
He takes her hand, stands her up.
WILLIAM
Maybe we’re over thinking it.
 74.
CUT TO: The MUSIC’s LOUDER. William and Dorothea dance hesitatingly,
sort of a light mosh, awkward. They slowly stop.
DOROTHEA
What about the other one? The art fag
one?
CUT TO: William and Dorothea listening to TALKING HEADS “THE BIG
COUNTRY.” The music is odd, but spacious.
William does a more fluid, semi-hippie dance. Dorothea does an
imitation of him, half mocking him. He smiles.
DOROTHEA
I guess we’re more art fag types.
They continue to dance, free, awkward, filled with life.
EXT. SANTA BARBARA STREET - NIGHT
Jamie, Abbie and the others make their way down the beach, lit only
by Abbie’s flashes. They’re drinking, rowdy. Trish has her arm around
Jamie.
CUT TO: Trish and Jamie are away from the group. Her cut-up T-shirt
reveals her cleavage, Jamie can’t help but notice.
TRISH
What’re you looking at - inscrutable boy.
She kisses him and then pushes him away.
Abbie’s seen this happen with very mixed feelings.
They all run down the beach at night.
ABBIE (V.O.) PRELAP
I gave him beer, taught him how to
verbally seduce women, we drove
drunk, but I stopped that, and then
he kissed Trish? Then we walked
home.
CUT TO: ABBIE’S BEDROOM
Abbie’s talking to Dorothea in her room. Looking guilty.
Dorothea cringes in motherly fear, but this is what she wanted.
DOROTHEA
Ah. Is he OK?
 75.
To Abbie’s surprise.
ABBIE
You’re not mad? You’re mad. You should be
mad.
It’s not that - Dorothea’s processing a lot.
DOROTHEA (CONT’D)
You get to see him out in the world as a
person, I never will.
Abbie feels for Dorothea. She hands him one of the Polaroids from
the night, Jamie looking wild eyed, having fun.
ABBIE
There, there he is.
Dorothea looks at the stranger in the picture.
INT. DOROTHEA’S BEDROOM - NIGHT
Dorothea lays in bed, worrying.
EXT. EUCALYPTUS AREA - DAY
Julie and Jamie are alone. Reading. Julie with “Forever” and
Jamie with “Our Bodies Our Selves.”
Julie looks to him. Critical. Takes the book from him.
JULIE
I can’t believe that Abbie gave you
this.
He looks at it with her.
JAMIE
It’s interesting.
He takes it back. Reads a little more.
JAMIE (CONT’D)
What’s it like, for girls?
She looks to him.
 76.
JULIE
What, sex?
JAMIE
Orgasms.
She rolls her eyes. She goes back to reading. So does he.
JULIE
You really want to know?
JAMIE
Yeah.
JULIE
I don’t have them. None of my
friends do.
JAMIE
What? Why do you do it?
JULIE
There’s other reasons.
The way they look at me, the way
they all get a little desperate at
some point. The little sounds they
make.
She begins to imitate the sexual grunts of one of her guys.
JULIE (CONT’D)
And their bodies.
CUT TO REPORTAGE OF SEXUALIZED TEEN BOYS FROM 1970’S;
PHOTOGRAPHS BY JOSEPH SZABO.
JULIE V.O.
You don’t know exactly how they’re
gonna look, or smell, or feel or
whatever until you do it. But yeah,
half the time I regret it.
JAMIE
So why do you do it??
 77.
JULIE
Half the time I don’t regret it.
Off Jamie, “Women are even more of a trip that I thought.”
INT. JAMIE’S BEDROOM
He’s reading again from SISTERHOOD IS POWERFUL.
TITLE: IT HURTS TO BE ALIVE AND OBSOLETE: THE AGING WOMAN BY
ZOE MOSS, 1970.
JAMIE (V.O.)
I am gregarious, interested in
others, and I think intelligent.
JAMIE (V.O.)
All I ask is to get to know
people and to have them
interested in knowing me.
VISUALS
1. JAMIE’S POV: DOROTHEA AT
ONE OF HER PARTIES, HOLDING
COURT 2. DOROTHEA HELPING
WILLIAM LEARN HOW TO COOK,
LOOKING AT HIM, WONDERING
WHAT HE THINKS OF HER
JAMIE (V.O.)
I doubt whether I would marry
again and live that close to
another individual. But I
remain invisible.
VISUALS
3. JAMIE WALKS UP TO DOROTHEA
AT WORK WITH ALL THE MEN THAT
DON’T GET HER 4. JAMIE
REMEMBERS DOROTHEA WITH YOUNG
DOCTOR FROM BEGINNING
JAMIE (V.O.)
Don’t pretend for a minute,
as you look at me that I’m
not as alive as you are, and
I do not suffer from the
category of which you are
forcing me.I think stripped
down I look more attractive
than my ex-husband, but I am
sexually and socially
obsolete and he is not.
VISUALS
5. DOROTHEA IN HER BATH - SHE
AVOIDS HER OWN NAKED BODY 6.
DOROTHEA LOOKS AT A 1979 PORN
MAGAZINE SHE FOUND IN JAMIE’S
ROOM
INT. DOROTHEA’S BEDROOM - DAY
Jamie’s reading SISTERHOOD IS POWERFUL to Dorothea - she’s
interested, but truly uncomfortable with all that she’s heard. We
set up him reading to her, then do a long track in on her face as
she hears all this.
 78.
JAMIE
I have a capacity now for taking people
as they are, which I lacked at twenty; I
reach orgasm in half the time and I know
how to please. Yet I do not even dare
show a man that I find him attractive. If
I do so, he may react as if I had
insulted him. I am supposed to fulfill my
small functions and vanish.
He’s feeling for her and trying to connect with her situation. He
stops, long pause.
DOROTHEA
What do you think of all that?
JAMIE
Maybe, I’m a feminist?
DOROTHEA
That’s easy for men to say.
She looks at him, yearning for something she’s not getting.
DOROTHEA
You think that’s me?
JAMIE
I don’t know.
DOROTHEA
You think you know me better cause you
read that?
JAMIE
No.
DOROTHEA
Then why’re you reading this to me?
JAMIE
I just thought it was interesting.
 79.
DOROTHEA
I don’t need to read a book to know
about me.
He’s pushed out of the room by her vibe. Dorothea’s becoming angry.
INT. BEACH - DAY
Dorothea sits alone on the beach. Smoking and thinking,
feelings brewing.
INT. DOROTHEA’S KITCHEN - DAY
Dorothea finds Abbie in the kitchen, something’s on her mind.
DOROTHEA
I appreciate you trying to help, I
do, but just think you’re taking it
too far. And this stuff, with the
women’s movement, I respect but
It’s complicated for him.
Abbie’s confused.
ABBIE
What?
DOROTHEA
He’s fifteen. This hardcore
feminism stuff is going too far.
Abbie’s surprised at Dorothea’s change, she feels she was
really helping, she’s excited by what’s been happening.
ABBIE
(What’re you talking about?) He’s
getting so much out of it. He loves
it. It’s helping him a lot.
Dorothea sounds more angry.
DOROTHEA
Helping him what?
Abbie tries to reach out, only making things worse.
ABBIE
Helping him become a man, like you
were talking about.
 80.
DOROTHEA
Learning about a female orgasm is
helping him be a man?
ABBIE
Well what man do you know who cares
anything about that? It’s a
miracle!
DOROTHEA
But he’s a high school kid, okay?
It’s too much. I’m telling you.
ABBIE
I think he seems really okay with
it.
DOROTHEA
It’s not like you actually know
what you’re doing here.
Abbie’s stung - hurt, betrayed.
INT. DOROTHEA’S DINING ROOM - NIGHT
Dorothea, Jamie, Julie, Abbie, William, Julian the doorman, a couple
of carpenters from Dorothea’s crew and Charlie from her work are
gathered around the television, watching Jimmy Carter’s Crisis of
Confidence speech.
JIMMY CARTER O.S.
As you know, there is a growing
disrespect for government. The
schools, the news media, and other
institutions. This is not a message
of happiness or reassurance. But
it is the truth. And it is a
warning.
TITLE: CRISIS OF CONFIDENCE SPEECH, JIMMY CARTER, 1979.
JIMMY CARTER CONTD.
It is a crisis of confidence. We can see
this crisis in the growing doubt about
the meaning of our own lives...
 81.
TITLE: KOYAANISQATSI; DIRECTED BY GODFREY REGGIO, FILMED 1975-
1979, RELEASES 1982.
JIMMY CARTER CONTD.
...and in the loss of a unity
of purpose of our nation. Too
many of us now tend to
worship self indulgence and
consumption. But we’ve
discovered that owning things
and consuming things does not
satisfy our longing for
meaning. We always believed
that we were part of a great
movement of humanity itself,
involved in the search for
freedom. We are at a turning
point in our history. The
path that leads to
fragmentation and selfinterest, down that road lies
a mistaken idea of freedom.
It is a certain route to
failure. Thank you, and good
night.
VISUALS
1. KOYAANISQATSI 2. JULIE
SHRINK WRAPPING A GIFT BASKET
3. JAMIE VACUUMING 4.
DOROTHEA AT WORK 5. WILLIAM
FIXING A CAR 6. ABBIE PLAYING
WITH HER BIRDS 7. JULIE
SMOKING UNDER THE BRIDGE 8.
DOROTHEA SMOKING AT THE
DINNER TABLE 9. HOUSE PARTY
10. JAMIE SLEEPING ON THE
COUCH 11. DOROTHEA LAYING IN
BED.
INT. DOROTHEA’S LIVING ROOM - NIGHT
All our main characters watching his strangely vulnerable speech.
JIMMY CARTER (V.O.)
Thank you and good night.
Everyone, in different ways, is surprised by that speech. It takes
a minute for anyone to talk.
CARPENTER
Oh, he’s screwed. It’s over for him.
DOROTHEA
That was a beautiful speech.
They all look at her.
INT. DOROTHEA’S KITCHEN
Everyone’s gathered around the table, busy, messy, helping
themselves to Dorothea’s food as she finishes getting the big meal
ready. Through all the people, Camera finds Julie and William
having an intense conversation - Jamie’s eavesdropping one person
away. We come in mid conversation.
 82.
DOROTHEA
Jamie, please bring Abbie back to life.
Jamie pretends to push on her back.
ABBIE
Ugh, stop, I’m menstruating.
Some winces and moans. Abbie’s surprised.
DOROTHEA
Do we need to know everything
that’s happening to you?
ABBIE
I’m menstruating.
More winces. Abbie’s not going to stop helping Jamie.
ABBIE
You want to have an adult relationship
with a woman you need to be comfortable
with a woman having her period. Say
menstruation like there’s nothing wrong
with it - menstruation.
JAMIE
Menstruation.
DOROTHEA
Abbie?!
ABBIE
(to everyone)
C’mon...
JULIAN
Menstruation.
CARPENTERS
Menstruation.
JULIE
Gross.
Abbie focuses on Julie and Jamie.
ABBIE
It’s a very important time for a woman.
It can be very deep creatively speaking,
emotionally transformative.
The crew guys are uncomfortable. William tries to save it.
 83.
WILLIAM
Sex during menstruation can be very
pleasurable for a woman, even provide
relief from cramps. Jamie, I also want to
say, never have sex with just the vagina,
have sex with the whole woman.
DOROTHEA
You too?
Julie’s mad at Dorothea for trying to control her relationship with
Jamie - she looks straight at Jamie...
JULIE
My first one started while I was
watching One Flew Over The Cuckoo’s
Nest with some guy. I told him I
had to go, went to the market, got
a box of tampons, went home, read
the instructions on the box in my
bathroom, figured out how to put
them in. I never told my mom, she
never asked, I never saw the end of
Cuckoo's Nest.
Silence. Jamie and Dorothea are getting more and more
uncomfortable.
WILLIAM
Jack Nicholson’s character gets a
lobotomy so the big Indian guy, like
suffocates him with a pillow - so he’ll
be, I don’t know, free.
More long looks at William.
DOROTHEA
Let’s talk about something else.
William’s hurt. Julie’s buzzed with attention, can’t stop lashing
out.
JULIE
First time I had sex I was 14...
JAMIE
Julie?!
 84.
JULIE
I just decided one night I was going to
lose my virginity, didn’t matter who.
Jamie’s mad or protective, or both. He tries to stop her.
JAMIE
Can you chill out?
ABBIE
Let her talk.
JULIE
I picked this guy I didn’t know at
a party, had fairly painful sex in
his van parked in the street, just
spit in his hand for lubrication,
got home in time for my curfew. The
carpet in his van smelled like
spilled bong water.
The men are awkwardly mute. Julie wakes up to what she’s done,
surprised she hurt Jamie. Dorothea’s had it with these girls as
well.
DOROTHEA
Okay, lets call it a night. C’mon guys.
Dorothea herds the men from the table. Abbie examines Julie anew.
Julie’s finally become interesting to her, sympathetic.
Dorothea pushes them out of the living room.
DOROTHEA
Show’s over girls.
Everyone’s leaving the party.
INT. DOROTHEA’S KITCHEN
Abbie helps Dorothea clean up. It’s hard for Abbie to get
Dorothea’s attention.
DOROTHEA
Jamie, we need to, there’s a lot of
stuff happening, I’d like to know
what’s going on with you. This has
all been a lot for us to deal with.
She just lost him, he makes an exasperated gesture.
 85.
JAMIE
I’m dealing with everything, you
are dealing with nothing.
He leaves, wildly pissed. Abbie and Dorothea share an angry
look themselves, Abbie leaves. Reveal William was there, he
looks disappointed, avoids Dorothea.
INT. JAMIE’S BEDROOM - NIGHT
Julie comes through the window. He’s angry with her, sitting
on the bed.
JULIE
Hey?
JAMIE
I can’t believe you told everyone
all that.
JULIE
I can say what I want to say.
JAMIE
They’re just gonna think you’re
some... they’re gonna get the wrong
idea about you.
That’s not like him, she’s surprised, hurt.
JULIE
(A slut?) Is that what you think?
Jamie’s truly confused by it all.
JAMIE
You can’t sleep here and just want
to talk with me anymore.
Pause, that really scares Julie.
JULIE
Really?
JAMIE
Yea.
 86.
JULIE
I’m sorry. I’m sorry. OK?
She feels horrible, and surprised, reeling.
Jamie’s silent.
JULIE (CONT’D)
Let’s get out of here, like you
said, let’s go up the coast. Just
the two of us.
Off Jamie, looking like he’s going to shut her down.
INT. KITCHEN - DAY
Dorothea finds the note Jamie left.
JAMIE (V.O.)
Mom. Julie and I took the car.
We’re taking a trip up the coast.
Just to get away. You don’t need
to worry about us.
I/E. 101 FREEWAY - DAY - MONTAGE
Dorothea’s VW bug makes its way up the 101.
Classic California coast. Half painted over “ART FAG” still
visible on the side of the car. Inside the car, Julie smokes
and drives, punk cassette on the radio.
Jamie stares out the window, his arm around the back of her
neck. They look like a couple in love.
EXT. RUGGED COASTLINE
Julie and Jamie explore the rugged rocks along ocean.
They sit on some rocks, the rough ocean down below.
EXT. BAUDELAIRES CLUB - NIGHT
Weeknight at the club, only the usual denizens are dancing.
After a beat we reveal Dorothea entering the punk club alone.
She’s not really looking for jamie, she’s looking for his
world.
EXT. S.L.O. LIQUOR STORE PARKING LOT - NIGHT
Jamie and Julie eye a skeezy middle aged man on his way in.
 87.
JULIE
Excuse me sir, maybe you’d buy us some
wine coolers? You can keep the change.
The man takes the money, walks in.
JULIE
Strawberry, or anything berry.
I/E. S.B. STREETS - 39 FORD - NIGHT
Dorothea smokes and drives - dealing with her frustration.
Then cops lights behind her.
CUT TO: Cop asking her questions.
DOROTHEA
What’s the matter?
COP
You changed lanes in the
intersection back there.
DOROTHEA
Seriously, that’s all?
COP
Yes. I need to see your license.
Dorothea’s anti-authority thing kicks in.
DOROTHEA
Well what if I don’t have my
license?
COP
What’s your name, address and date
of birth.
DOROTHEA
Those are personal questions, I
mean we’ve just met. What’s your
name? Where do you live? Right?
It’s a little forward.
She looks at him mischievously.
 88.
INT. HOTEL ROOM - NIGHT
Julie smokes in bed and undresses. Jamie comes in and sits
on the bed. Something’s brewing in Julie. Jamie’s looking
confused, out of body himself.
JAMIE
I love you.
He tries to be sweet and caress her, she pulls away.
 JAMIE
What’s wrong?
JULIE
Nothing.
JAMIE
What is it?
JULIE
I think I’m too close to you to have sex
with you, it confuses me. I’m sorry.
JAMIE
I can help you get over that.
JULIE
I don’t want to get over it.
JAMIE
Yeah you do.
JULIE
You’re being like the other guys.
JAMIE
I don’t want to just, have sex with you,
I want...you.
JULIE
But that’s like, your version of
me, that’s not me... It’d be better
if you just wanted sex... You are
like the others, you just pretend
to be all modern about it.
 89.
Jamie rises, hurt and angry, gets dressed.
JULIE
Jamie?
He doesn’t talk. He leaves in a rush.
EXT. SAN LUIS OBISPO HOTEL
Jamie exits the room, and takes off.
EXT. SAN LUIS OBISPO - NIGHT
Jamie hurriedly walks the streets of this sleepy town alone.
INT. S.B. POLICE STATION - NIGHT
Dorothea waits on a bench, after being processed. Long shot down
the hall, Abbie walks up to her and sits by her. Dorothea, hair a
mess and kind of sweaty looks at her confused, down the hall she
can see William waiting patiently, not wanting to add to her pain.
DOROTHEA
These people have no sense of
humor.
ABBIE
Let’s get out of here.
Abbie neatens Dorothea’s hair, tidies her up a little bit, takes
her arm and they walk out past the male cops, who don’t get out of
the way, Abbie has to shoulder butt one as they pass, holding their
dignity together.
INT. ABBIE’S CAR - NIGHT
Abbie drives her home. She’s exhausted, doesn’t want any pity or
judgement.
INT. DOROTHEA’S BEDROOM - NIGHT
Abbie helps Dorothea into bed, gets her a glass of water.
ABBIE
Having a kid seems like the hardest
thing.
DOROTHEA
How much you love the kid is the
hardest thing. You’re just pretty
screwed.
 90.
Abbie feels the loss of what she can’t have.
EXT. SLO AGRARIAN FIELD - DAWN
Jamie, strung out and tired is walking down a dirt road next to an
agrarian field. As he walks, a group of 30 or so Latino migrant
workers cross the road and the frame. They’re heading to work, some
are as young as Jamie it seems, he stops as they all cross him,
none of them look at him. Two different worlds.
INT. DOROTHEA’S KITCHEN - MORNING
Dorothea enters, finds Abbie and William at the table. She looks at
them, not sure, mixed feelings, anger and vulnerability.
DOROTHEA
Julie called, they’re in San Luis
Obispo, but she can’t find him.
She looks at them, more open and real.
DOROTHEA
Will you guys please come with me?
Up there?
I/E. 101 FREEWAY - 1939 FORD - MORNING
William drives Dorothea and Abbie up the 101 freeway.
EXT. CENTRAL COAST - SAME LOCATIONS AS THE BUG
Beautiful landscape, the Ford makes its way up the coast.
EXT. HOTEL ROOM PARKING LOT - DAY
The Ford pulls up, Julie’s waiting, smoking. Dorothea comes to her
concerned. Julie’s totally torn up, she looks like she knows she
fucked up.
DOROTHEA
Where is he?
Julie points to the edge of the hotel, down by the oak tree.
To Julie’s surprise, Dorothea touches her sweetly.
DOROTHEA
Thanks for calling me.
 91.
EXT. DRY CREEK BED - DAY
Dorothea finds Jamie, alone, angry, at first not wanting to talk to
her. They’ve both been up most the night, they both look rough. He
walks away, she follows.
DOROTHEA
Julie’s a really complicated woman. I’m
impressed in a way, but that’s a lot to
take on.
He keeps walking, heads into the connecting vineyard. She calls after
him, he doesn’t look back, she follows. Catches up with him.
JAMIE
Aren’t you going to get Julie? To
come talk with me?
DOROTHEA
Jamie!
JAMIE
What?
DOROTHEA
I thought they’d help.
That stops him, changes him.
JAMIE
It just seemed like you couldn’t
deal with me anymore.
DOROTHEA
Look. I wanted. I. I don’t want
you to end up in the same place as
me.
JAMIE
What does that mean?
DOROTHEA
Well, I wanted you to be happier. I
just didn’t think I could do it by
myself.
 92.
JAMIE
Okay..I thought we were fine
though, just me and you.
DOROTHEA
Yeah?
JAMIE
Yeah.
INT. HOTEL ROOM - NIGHT
Dorothea, Abbie, Julie, Jamie and William sitting in the room
eating take out dinner. JUMPS CUTS; Dorothea finds an oldies
station, 30’s-40’s music plays.
Dorothea teaches Jamie to dance, Abbie joins in, then Julie
and William, they all find a partner.
A small moment of grace between these 5 people.
EXT. HOTEL PARKING LOT - DAY
Abbie, Julie and William are loaded up in Dorothea’s car, waving,
heading off. IMPROV GOODBYES.
Dorothea and Jamie are alone now, they have to face each other.
DOROTHEA
Maybe we don’t go back yet?
JAMIE
O.K.
INT. SLO SUPERMARKET - DAY
Dorothea and Jamie walk down the aisle.
JAMIE
I want to dye my hair.
She’s not really comfortable with that.
DOROTHEA
Really?
JAMIE
Well, yeah.
Dorothea can’t relate, but wants to relate.
 93.
INT. S.L.O RESTAURANT - DAY
Jamie and Dorothea have a picnic.
JAMIE
Were you and dad ever in love?
DOROTHEA
At first. Or maybe I was just supposed to
be in love. Or scared that I’d never be
in love. So I picked the best solution I
had at the time.
INT. MOTEL BATHROOM - DAY
JUMP CUTS: Dorothea washes Jamie’s hair / rubs in the dye / waits
with the little plastic baggy over his head / washes it out / dries
his hair. She feels deep bittersweet heartbreak, loves him so much,
understands him so little.
JAMIE
Are you lonely?
DOROTHEA
Well, in my next life, I might marry
Bogart, we’ll see.
JAMIE
He’s... dead.
DOROTHEA
I’m talking about next life right? So he
may be around, and we might meet and
something might happen between us, OK?
JAMIE
What about having that in the real world?
DOROTHEA
This is no time to get rational sweetie,
can you just go with this?
JAMIE
O.K. - keep going.
 94.
DOROTHEA
He knows what I’m thinking, and what
makes me laugh - he can really see me.
And, you know he’s gonna do what he says
he’s gonna do, so it’s easy.
JAMIE
He sounds great.
EXT. MID-COAST LONELY ROAD - DAY
Dorothea drives. REVEAL that Jamie is on his skateboard
hanging onto the passenger door, window down.
JAMIE (V.O.)
I thought that was just the beginning of
a new relationship with her, where she’d
really tell me stuff. But maybe it was
never really like that again. Maybe that
was it.
INT. NONDESCRIPT ROOM: SMOKE RISES
DOROTHEA (V.O.)
In March of 1999, I’ll start
to feel tired and confused.
When I finally go to the
doctor, he will say that the
cancer in my lungs had
already travelled to my
breast and brain. I’ll try
to teach Jamie what to do
with my stocks, but my
instructions will be
impossible to understand.
VISUALS
1. STOCKS IN NEWSPAPER 2.
JAMIE AND DOROTHEA SITTING ON
THE COUCH WATCHING TV
INT. DESKTOP: DOROTHEA’S VERY OLD HAND IS WRITING A NOTE, BUT
HER HANDWRITING IS INDECIPHERABLE.
 95.
INT. JAMIE’S BEDROOM: JULIE AND JAMIE LAY IN BED AND TALK
JULIE (V.O.)
Abbie will take me to Planned
Parenthood. And I will go on
the pill. I will go to NYU
and lose touch with Jamie and
Dorothea, and I will stop
talking to my mom, I will
fall in love with Nicholas,
we will move to Paris, and
choose not to have children.
VISUALS
1. ABBIE AND JULIE AT PLANNED
PARENTHOOD 2. JULIE ALONE IN
PLANNED PARENTHOOD ROOM,
LEARNING ABOUT BIRTH CONTROL.
3. JULIE LOOKING AT CAMERA 4.
JULIE’S MOTHER LOOKING AT
CAMERA 5. JULIE STARING AT
CAMERA SMOKING IN HER CREEK.
INT. ABBIE’S ROOM: JAMIE AND ABBIE DANCING - REPEAT SCENE
ABBIE (V.O.)
I will stay in Santa Barbara.
INT. BIRD CAGE: CARLOTTA THE FINCH LIES LIFELESS ON THE FLOOR OF
THE CAGE. MAX FLIES AROUND.
EXT. SUBURBAN YARD: ABBIE DIGS A HOLE, PUTS SOMETHING IN IT. WE SEE
DEAD BIRD IN ABBIE’S HAND.
ABBIE (V.O.)
A month after I get married Carlotta will
die. A week later, Max will die too.
INT. GARAGE: PORTRAIT OF ABBIE IN HER STUDIO.
ABBIE
I will work out of my garage and show in
local galleries.
EXT. SUBURBAN STREET: ABBIE STANDS IN FRONT OF A HOUSE, NEXT
TO A MAN, THE REPORTER SHE WORKED WITH BEFORE. A BABY IN HER
ARMS, 2 YEAR OLD BY HER SIDE.
ABBIE
Against my doctor’s advice, I will
get pregnant, and by the time I’m
30 I’ll have two boys.
INT. DORTHEA’S KITCHEN - DAY
Dorothea sits down to do her stocks. William comes and sits on her
left, picks up a pen with his left hand, scratches her back with
his right, like they do.
 96.
WILLIAM (V.O.)
I’ll live with Dorothea for another year.
Then I’ll open a pottery store in Sedona
Arizona.
EXT. WILLIAM’S POTTERY AREA: WILLIAM TALKS TO CAMERA.
WILLIAM
I will marry Laurie, a singersongwriter. We’ll get divorced in a
year. Then I’ll meet Sandy, we will
marry, and I will continue to do my
pottery.
VISUALS
1. STILL OF SEDONA LANDSCAPE 2. RUSTIC
CLAY POT 3. LAURIE WITH GUITAR 4. CAT
SCAN OF BRAIN TUMOR 5. WILLIAM WITH SANDY
6. RUSTIC CLAY POT
EXT. AIRPORT: DOROTHEA IS WALKED TO A BIPLANE BY A SWEET, ROUNDISH
JIM BROADBENT TYPE OF MAN. HE HELPS HER INTO THE PLANE. KISSES HER,
AND WATCHES AS SHE TAKES OFF.
JAMIE (V.O.)
My mom will meet Jim in 1983,
they’ll be a couple until she dies.
On her birthday each year, he will
buy her a trip on a biplane.
INT. DOROTHEA’S LIVING ROOM: SHE AND JAMIE DANCING
JAMIE (V.O.)
Years after she’s gone I’ll finally
get married and have a son.
I/E OLD BIPLANE HEADS DOWN THE RUNWAY, LIFTS INTO THE AIR -
DOROTHEA LOOKS HAPPY AND FREE.
JAMIE (V.O.)
I’ll try to explain to him what his
grandmother was like - but it will
be impossible.
CLOSE ON DOROTHEA’S FACE AS THE PLANE FLIES ABOVE THE SANTA
BARBARA COAST, THE EXCITEMENT OF FLIGHT IN HER EXPRESSION.
AS TIME GOES BY PLAYS.
 97.

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
