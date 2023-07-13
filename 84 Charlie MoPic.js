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

"84 CHARLIE MOPIC"

Screenplay by

Patrick Sheane Duncan

SHOOTING DRAFT



LIEUTENANT DREWRY -- EL TEE

Bright green, brand new issue tropical fatigues, boots, M-
16, and .45 pistol. Just out of Officer Candidate School. 
Crewcut, clean face, ambitious and full of the wrong ideas. 
24 years old.

SERGEANT O'DONIGAN -- OD

Well-faded tiger fatigues, scuffed boots, a lot of trail 
behind him. A black man from a large family, takes care of 
his team. Carries a CAR-15, carbine model of the M-16, and a 
Model 70 Winchester bolt action sniper rifle with scope, 
both with long black muzzle flash suppressors. A natural 
leader. An intensely serious man on the job, his rare smile 
dazzles. OD is 21.

SPEC/5 -- CRACKER

Spotted camouflage fatigues, worn and faded. He never tans, 
just gets red. Trace of a Southern accent and an old man's 
eyes. Defers to OD. Carries a 12-gauge riot shotgun with 
bandolier, and an M-14 sniper rifle with scope and flash 
suppressor. Dry wit, likes to watch the interplay between 
the others and wait for his opening. He is 24, but looks 
older.

SPEC/4 BALDWIN -- PRETTY BOY

Handsome, all-American, clean cut, easy going, he keeps the 
peace between Easy and Hammer. His tiger fatigues look 
tailored. Carries an M-79 grenade launcher with two bandoliers 
of grenades. Quick to smile, Easy's best friend and audience. 
Pretty Boy is 20.

SPEC/4 THORPE -- HAMMER

Short, stocky, Fu Manchu mustache, too-small tiger fatigues 
accented with black t-shirt and black leather gloves with 
the fingers cut off. Swaggering macho style, carries his M-
60 machine gun like he's seen too many John Wayne movies. 
Half immature teenager, half warrior, he is jealous of the 
affection shown toward Easy. He is 19.

PRIVATE EASELY -- EASY

Skinny, homely, his tiger fatigues look baggy. He carries 
the PRC-25 radio and M-1 carbine. Walks with a bounce, even 
in the jungle, and talks like an urban, rock and roll speed 
freak. Takes nothing seriously, least of all himself. Loves 
Pretty Boy, admires OD, teases Hammer because he's an easy 
target. He's been in the war too long and he is now getting 
scared. Easy is 21.



VIETNAM - The Central Highlands - 1968

The CAMERA STARTS and focuses on the ground where the words --

-- have been scratched.

An M-16 bayonet is jabbed into the ground next to the letters. 
The lettering goes fuzzy then sharp, fuzzy then sharp, as 
the Cameraman focuses.

A hand reaches in and pulls the bayonet out of the ground.

The Camera pulls back and focuses on LIEUTENANT DREWRY. He 
sheaths the bayonet and turns on the tape recorder that is 
next to his rucksack. He fiddles with the dials and looks at 
the Camera.

Sound on.

DREWRY
...turns this thing on? How do you 
tell if it's working? Outstanding.

They stand outside a large tent with a sign in front of it -- 
"S-2/S-3". A soldier whitewashes a line of rocks that form a 
square in front of the tent. Further away a soldier casually 
guards four Vietnamese who are filling sandbags. Music plays 
in one of the tents.

The Camera catches everything, including the rise of ground 
in front of the tent, the helicopter pad.

Drewry finishes a cigarette as he tries to tighten the straps 
on his pack. The Camera dwells on Drewry as he puts out the 
cigarette on the heel of one shiny new boot, field strips 
the butt and scatters the tobacco, balls up the paper and 
pockets it and the filter. He is nervous.

He stands and faces the Camera, adjusts his gig line and 
tries to look serious.

DREWRY
Ah... Drewry, Richard B., First 
Lieutenant... Headquarters and 
Headquarters Company, 173rd Airborne 
Brigade... Vietnam.
(beat)
Lessons Learned Project, DASPO.

He pauses a moment and thinks.

CAMERAMAN (O.S.)
Mission.

DREWRY
Reconnaissance mission, Central 
Highlands. Our goal is to record 
procedures peculiar to this combat 
situation. Uh...

The fluttering of a distant helicopter is heard. It gets 
louder. Drewry looks into the sky and finds the helicopter.

DREWRY
That must be ours.

The Camera finds the helicopter, a Huey. It descends toward 
the pad where a soldier helps it land, using hand signals.

The blades kick up a huge cloud of dust.

Through the dust walks the team with OD in the lead. Packs 
on their backs, weapons in hand.

The Huey engine idles, the whoop-whoosh of the blades a slow, 
steady beat.

OD halts the team and Easy gooses HAMMER with his thumb. 
Hammer just grins.

HAMMER
Damn, Easy, you got a cold nose.

Drewry walks over to the team.

DREWRY
Which one of you is Sergeant 
O'Donigan?

OD
Yo, sir.

The men play for the Camera. Easy cranks up a middle finger. 
Pretty Boy waves, "Hi, Mom". Hammer pretends to jack off. 
Cracker gurns. OD tries to ignore the Camera, but he is wary.

DREWRY
Glad to be working with you, Sergeant. 
I'm your new Officer in Charge. Major 
Nolin has briefed me on the mission. 
We're prepared to move out.

OD looks at Drewry in surprise. He looks at the Cameraman, 
then back to Drewry. The team is stunned.

OD
We'll see about that.

Angrily he drops his pack and weapons and strides into the S-
2 tent. Nonplussed, Drewry hesitates, then follows.

The rest of the team look at the Cameraman.

EASY
TV news?

CAMERAMAN (O.S.)
Army. How about a roll call?

EASY
Easely, Private E-2! Soon to be 
promoted to PFC... Private Fucking 
Civilian! 27 days and a wake up! I'm 
short, sir!

HAMMER/PRETTY BOY/CRACKER
How short are you?

EASY
I'm so short I can parachute off a 
dime, sir!

Easy gives a half-assed salute.

The Camera focuses on Pretty Boy.

PRETTY BOY
Spec 4 Baldwin, San Bernardino, 
California.

He straightens his hair and just stands there.

CAMERAMAN (O.S.)
Don't look at me, look at the camera.
(beat)
Say something.

PRETTY BOY
Something.

Easy grabs the microphone from the Cameraman.

EASY
Testes, testes, one, two.

HAMMER
"Jingle bells, mortar shells...

HAMMER/EASY
...VC in the grass...

TEAM
...You can take your Merry Christmas 
and stick it up your...

They all laugh.

The Camera moves in on Hammer. He steps forward, at stiff 
attention.

HAMMER
Thorpe, William. Specialist 4th Class. 
US 16-848-107. Machine gunner.

EASY
What a lifer.

HAMMER
Put a liplock on my love muscle, 
Easy.

EASY
Let me fuck you in the ear so you 
can hear me coming.

CRACKER
I think they're in love.

EASY
We are, we're engaged.

Easy leaps on Hammer and sticks his tongue in his ear.

HAMMER
That's disgusting, man.

Easy tries to kiss Hammer. Pretty Boy, and Cracker join the 
pile up on Hammer. They roll in the dirt.

The Cameraman singles out Cracker, who is a little worried.

CAMERAMAN (O.S.)
You want to sound off?

CRACKER
Uh, right. Spec 5 Frye, weapons 
specialist. I'm hare-lipped, hump-
backed and half crazy. Not responsible 
for my own actions.

Hammer stands behind Cracker and gives him horns. Easy puts 
a wet finger in his ear, and Pretty Boy raises a clenched 
fist between Cracker's legs.

Cracker ignores them.

OD and Drewry walk out of the tent accompanied by Major Nolin.

OD is looking grim. Drewry salutes Nolin.

OD
(to team)
Let's get our shit together. We got 
a mission.

The team grab their gear and walk toward the helicopter. 
Easy takes off his soft cap and puts on his steel helmet.

The Cameraman moves in on OD.

CAMERAMAN (O.S.)
How about your name and rank? Don't 
look at me, look at the camera.

OD
I'm not talking to the camera, I'm 
telling you. Get that thing out of 
my face.

OD shoulders his gear. Cracker hands him his weapons and 
looks at OD with a question in his eyes. OD shakes his head.

The team boards the Huey easily, they've done it a thousand 
times, a casual ride in the country. Drewry and the Cameraman 
wait to board last.

Drewry looks at OD. OD glares at him.

The Cameraman is helped in and he catches a shot of the S-2 
tent. Major Nolin watches the chopper.

The engine revs and the Huey lifts.

BLACK. Sound off.

STOCK FOOTAGE -- Vietnam countryside from the helicopter 
P.O.V., passing over a fire base.

CAMERA ON.

Hammer tries to talk with the door gunner. Easy blows into 
his thumb, inflating his middle finger. Pretty Boy sleeps. 
The Camera focuses on Easy, who looks nervous, but tries to 
cover it.

The Camera turns and catches a view of the jungle below. 
Rice paddies, peasants working, water buffalo.

STOCK FOOTAGE -- The Central Highlands, mountains, triple 
canopy jungle.

BLACK.

The CAMERA STARTS as the helicopter hits the ground. Sound 
on.

Cracker and Hammer drop first and wait for the rest of the 
men to clear the helicopter. The wind from the helicopter 
blades beats the brush with hard rhythm.

The men run through the brush, OD in the lead, followed by 
Pretty Boy, Easy, Drewry and the Cameraman. The sounds of 
the helicopter fade as it flies away off screen.

Drewry's rucksack and harness rattle and clatter, flopping 
loosely on his back, straps flying.

The Cameraman turns and kneels to capture Cracker and Hammer 
pulling up the rear. They run past him. The Cameraman gets 
to his feet and follows. Cracker stops for a second and grabs 
the Cameraman by the shoulder and shoves him ahead.

CRACKER
Move your ass, troop.

The Cameraman runs on. Branches whip at the lens as it breaks 
through the dense brush. Sometimes the branches obliterate 
the picture completely for a second.

The Cameraman loses sight of Hammer and he tries to catch 
up. The Cameraman suddenly reaches Hammer and the others 
stopped behind some brush at the edge of a clearing ten to 
fifteen meters across.

OD crosses the clearing, running in a low crouch. Easy is on 
the alert, watching intently as OD disappears into the brush 
on the other side of the clearing. Cracker and Hammer watch 
the flanks, Pretty Boy the rear.

Drewry sits on the ground huffing and puffing. He's not used 
to this.

DREWRY
How long... we gotta... run?

PRETTY BOY
This is Indian country, sir. Dime to 
a dollar, Chuck saw or heard that 
chopper. He don't figure the pilot 
stopped to take a piss. Best to put 
some klicks between the LZ and us. 
Can you dig it?

Pretty Boy doesn't look at Drewry, he watches the jungle 
behind them.

OD comes into sight on the other side of the clearing, his 
fist pumping in the air.

EASY
Clear.

Easy runs across the clearing. He makes it safely. Hammer 
goes next.

Pretty Boy hits the top of Drewry's helmet.

PRETTY BOY
Quick, like a bunny fucks.

Drewry takes a deep breath and runs across the clearing. 
Pretty Boy follows.

Cracker covers the rear.

CRACKER
(to Cameraman)
Your turn in the barrel. Go.

The Cameraman runs across the clearing.

The team is clustered together, each man facing a different 
direction, alert. Drewry adjusts his pack straps. The 
Cameraman turns and catches Cracker crossing the clearing, 
then he tries to focus on the entire team.

They are gone. All the Cameraman catches is Pretty Boy's 
back disappearing into the jungle.

The Cameraman runs after them. He trips and almost falls, 
but runs on. Branches blind his lens.

More busting brush, just keeping Pretty Boy's back in sight.

The Camera explodes into a small circular clearing, an open 
pocket in the jungle growth.

Drewry has fallen into a sweaty heap.

Hammer and Pretty Boy stand on alert.

Easy and OD crouch together. Easy is on the radio.

EASY
Stone Hombre, this is Outrider. Down 
and happy. Say again, down and happy. 
Sit Rep Alpha Oscar Kilo. Over.

RADIOMAN
(filtered)
Outrider, Stone Hombre. We read you 
Lima Charlie. Down and happy. Sierra 
Romeo checks Alpha Oscar Kilo. Over.

EASY
Outrider, out.

The Cameraman sits.

OD looks at the Cameraman and Drewry in disgust.

OD
You ever heard of noise discipline? 
Easy, get these FNG's shit together.

OD opens his map. Cracker joins him.

EASY
Pretty Boy, duct tape.

Easy walks over to the Cameraman. Pretty Boy tosses him a 
roll of olive green duct tape and walks over to Drewry.

EASY
OD says your shit's flaky, your shit's 
flaky.
(laughing quietly)
You two are noisier than two skeletons 
fucking on a tin roof...

PRETTY BOY
...using a soup can for a rubber.

CRACKER
Make more noise than a Chinese gang 
bang.

HAMMER
Noisier than a baby in a blender.

EASY
No sweat, GI, we'll just square away 
this load-bearing equipment.

Pretty Boy gets another roll of olive drab duct tape from 
his pack and begins to tape down and tighten the loose straps 
on Drewry's pack. Drewry helps where he can.

In the background, OD and Cracker consult the map and their 
compass.

DREWRY
I didn't have time to do this myself. 
I just reported in and they said I 
was going out into the field. Barely 
had time to go to Quartermaster and 
get my issue and weapon.

CRACKER
You never been on line, sir?

DREWRY
No.

EASY
I can't believe they gave us an El 
Tee, but, shit, a cherry El Tee.

HAMMER
Just what we need, an FNG. No offense, 
sir.

DREWRY
FNG?

CRACKER
Fucking New Guy, sir.

Drewry has two grenades hooked to his harness suspenders. 
Pretty Boy unhooks them and puts them into a pouch.

PRETTY BOY
A vine or branch could pull the pin. 
Never "John Wayne" your grenades, 
sir.

EASY
Yeah, the last thing you want to do 
is blow yourself away, El Tee. A 
chest wound is nature's way of saying 
you fucked up.

DREWRY
What I heard, they had a man assigned 
to you from one of the line units, 
but his chopper crashed. So they 
grabbed me.

OD looks at Drewry and shakes his head. Pretty Boy unclips 
one of Drewry's dog tags and hooks it behind his boot laces.

PRETTY BOY
Just in case you get separated.

EASY
How long you been in-country, fresh 
meat?

CAMERAMAN (O.S.)
48 days down, 308 to go.

DREWRY
26 days. You?

EASY
Oh, El Tee, you're so new you ain't 
been born yet. Me, I am short.

PRETTY BOY
(to Easy)
How short are you?

EASY
I'm so short you have to dig a hole 
to kick my ass.
(to Cameraman)
What's your MOS?

CAMERAMAN (O.S.)
84 Charlie MoPic.

EASY
No shit? 84 Charlie. Gotta be better'n 
11 Bravo. MoPic? What's that stand 
for? Like Motown?

PRETTY BOY
Maybe MoPower.

HAMMER
Or MoFucker.

CAMERAMAN (O.S.)
Motion picture.

Easy tapes the Cameraman's film cans together so they won't 
rattle.

EASY
Damn, Breeze. Must be a nice getting 
over job.

CAMERAMAN (O.S.)
I used to handle "grip and grins", 
award ceremonies, change of command, 
stuff like that...

Hammer starts to smile at the Cameraman, but he suddenly 
hears something and freezes. Everyone but Drewry and the 
Cameraman also freeze. Hammer is at the center, tense, braced 
to fire, machine gun at the ready.

Easy slowly, noiselessly picks up his M-1 carbine and eases 
the safety off. Pretty Boy looks around the brush. OD creeps 
over to Hammer. Cracker is scanning the jungle on the other 
flank.

DREWRY
What...?

OD's CAR is instantly at Drewry's forehead. Their eyes meet. 
OD is hard, warning him to be quiet. Drewry looks at the 
Camera, then away, embarrassed.

OD watches Hammer. Easy watches OD. Cracker and Pretty Boy 
scan the jungle.

Hammer relaxes and grins foolishly.

HAMMER
Fuck-you-lizard.

Everyone relaxes.

OD
Let's saddle up.

Everyone gets ready to move out. Drewry glares at OD, anger 
taking the place of his initial fear.

Cracker walks over to the Cameraman.

CRACKER
Don't ever get behind me. I pull the 
rear.
(beat)
You don't want to be left alone out 
here.

HAMMER
Roger that shit.

The Cameraman lowers the Camera to pick up his pack.

BLACK. Sound off.

Sound on.

DREWRY (O.S.)
I want this on the record.

CAMERA ON.

The team is stopped, guns outboard. OD is getting a compass 
reading. Drewry walks over to OD followed by the Cameraman.

DREWRY
I won't let anything like that happen 
again. You point a gun at me again 
and I'll have you up in front of a 
court martial.

OD
Dig this, Lieutenant, we ain't in 
the rear no more. In order to have a 
court martial you need more than one 
officer. I don't see anyone with 
brass, but you. Out here the bush is 
the boss.

The team remains on guard, but takes in every word of the 
confrontation.

DREWRY
I'm not walking in here off the 
street. I've had infantry training.

OD
That stateside Mickey Mouse shit 
don't cut it here, sir. This is 
Charlie's game, his rules. We learned 
how to play it, that's why we're out 
here.

DREWRY
And that's why I'm here.
(indicating Camera)
And why he's here. To take back some 
of that training.
(beat)
I'm ready to learn, but not at 
gunpoint.

OD pauses. Drewry has made a peace offering.

OD
All right. Pay attention, El Tee, 
we'll teach you. But we don't grade 
on a curve, it's pass or fail. I 
have to point my gun at you again 
I'll pull the fucking trigger.

OD starts off into the jungle.

Drewry hits the Nagra switch viciously.

Sound off.

Drewry follows the team.

BLACK.

Sound on.

EASY (O.S.)
You don't want to hump all these 
C's, MoPic. We'll lighten you up.

CAMERA ON.

Easy is rummaging through the Cameraman's pack.

Pretty Boy is preparing food.

Hammer is leaning against a tree, wary and on guard. OD and 
Cracker aren't to be seen, just their rifles against a tree.

The team is stopped on a slope halfway up a hillside.

DREWRY
(to Camera)
Catch the food preparation.
(to the team)
Show the camera everything you do, 
how you do it. DASPO wants all the 
film it can get.

Easy holds up a can from the Cameraman's pack.

EASY
Lookit this, ham and limas. Number 
ten, GI. MoPic, why you humping ham 
and motherfuckers? You don't like 
'em, do you? Even God don't like ham 
and motherfuckers.

Drewry digs through his pack and takes out some rations.

PRETTY BOY
Lessons Learned, sheeit.

DREWRY
What do you men know about your 
mission?

HAMMER
(shrugging)
Same old shit. Find Charlie, get S-2 
their intell, shoot some gooks, put 
the rest in a world of hurt.

EASY
Ham and motherfuckers. Looks like 
cows ate it and tossed their cookies.

Easy starts fixing his own meal by opening a small can of 
white bread and another of jam.

DREWRY
Same old shit? You people don't have 
much respect for rank or your mission.

HAMMER
Don't get froggy, El Tee.
(beat)
You still pissed at OD?

Pretty Boy giggles.

Easy slices the bread lengthwise, puts jam on both halves, 
water on the top and heats it over a fire he's made from a 
white, clay-like substance.

EASY
(to Cameraman)
C-4, plastic explosive.

DREWRY
He put a gun to my head and threatened 
to kill me. I don't forget that kind 
of shit.

Easy makes himself a cup of hot chocolate using two packs. 
Pretty Boy fixes pre-sweetened Kool-Aid. They both heat canned 
rations over their own fires.

PRETTY BOY
You don't fuck with OD, he's a walking 
razor blade. You only take a run at 
him if you're thinking about suicide. 
One tough dude.

Drewry eats his food cold. Pretty Boy feeds his fire with 
more pieces of C-4.

EASY
He thinks you'll get in our way.

Easy eats his food and prepares more.

HAMMER
OD's so tough he eats the boogers 
out of a dead man's nose.

PRETTY BOY
You're a gross fucker.

EASY
OD's a righteous dude. He was just 
telling you to be quiet. Like "sshh".

HAMMER
Gross? You hear me rapping about 
canned cow vomit? OD pulls a lot of 
slack for us. We're all brothers.

Pretty Boy finishes eating and takes Hammer's place on guard. 
Hammer crouches over the fire and fixes food for two.

EASY
Fucking "A".

PRETTY BOY
Family.

HAMMER
There it is.

They slap palms. Drewry looks around and shakes his head.

DREWRY
Hell, you guys act like this is a 
picnic in the park.

PRETTY BOY
Man's got to eat, sir. You catch 
your pecks when you can. Never know 
when you can't.

EASY
Ain't no big thing, sir.

Easy repacks the Cameraman's pack.

HAMMER
There it is.

Easy holds up a ziploc bag of grass toward the Camera.

EASY
(to Cameraman)
I better hold this for you. OD's 
death on the dew.

HAMMER
"Hold this for you"? Don't try to 
shit me, Easy.

EASY
I wouldn't shit you, Hammer, you're 
my favorite turd.

There is some real antagonism between Hammer and Easy that 
underlies the joking. Drewry is uncomfortable.

DREWRY
(to Easy)
If you're RTO, why do you have that 
carbine? I thought SOP for a radioman 
was only a .45.

EASY
Shit, El Tee, everybody needs a gook 
shooter.

CRACKER (O.S.)
Only trouble is, Easy can't shoot as 
straight as I can piss.

Easy looks up. Cracker and OD have reappeared as if from 
nowhere.

EASY
Hey, OD, chow's still hot.

Easy goes back over to his fire.

HAMMER
Cracker.

Cracker walks over to Hammer and takes some of the food. OD 
spots the plastic bag of grass sticking out of Easy's pocket 
and he pulls it out.

OD
We don't do dew when we do business, 
right, Easy? You trying to get me 
killed?

EASY
Aw, Breeze...
(quickly)
Been waiting on you. Food's on the 
table and getting cold, Ward.

OD
So sorry, June. Has the Beaver been 
acting up again?

They laugh. OD empties the bag of grass on the ground.

EASY
Aww, fuck. I'm coming back here in 
six months to harvest.

Drewry pulls a pack of cigarettes from his pocket. Before he 
can get one out of the pack Cracker grabs them out of his 
hand, digs a hole in the ground with his heel and buries 
them.

CRACKER
Sorry, sir, smoking light's out for 
this operation.

DREWRY
(pissed)
Don't ever do that again, soldier.

OD
Don't get all bent out of shape, 
sir. It's a habit. You'd forget and 
one match at night could waste all 
of us. On a good day you can smell 
cigarette smoke a quarter mile away. 
Especially menthols.
(beat)
Pretty Boy, salt tablets for the El 
Tee, he's sweating like a fat whore. 
No offense, sir. Lessons Learned.

CRACKER
MoPic, too.

Easy pushes some food toward the Cameraman, then gets a 
container of salt tablets from his pack.

EASY
(to Cameraman)
Take two salt tablets and drive on. 
Best chow down.

BLACK. Sound off.

CAMERA ON. Sound on.

The team humps the brush. Drewry has a lot of trouble. He is 
sweating, tired, and looking haggard. The others still look 
fresh.

They go up a steep incline. The team works as one, helping 
each other automatically.

Their rhythm is interrupted to help Drewry and the Cameraman.

HAMMER
(to Camera)
Hey, man, why don't you DX that 
motherfucker?

BLACK. Sound off.

CAMERA ON. Sound on.

The team moves through heavy brush. The team moves easily, 
each man threading his way through the jungle. Drewry is 
stumbling along, each vine and branch grabbing him by the 
shoulder or catching his foot.

Pretty Boy pauses long enough to show Drewry how to walk, 
using his gun to probe ahead and make a path to move with 
the terrain.

BLACK. Sound off.

CAMERA ON. Sound on.

The team rests. Everyone is hot and sweaty. Drewry shows it 
most. Pretty Boy hands out salt tablets.

DREWRY
I can't even taste the salt.

PRETTY BOY
That means you need it.

EASY
27 days. I'm a double digit midget.

HAMMER
Pretty Boy, how about me and you 
hitting Sin City when we get back?

PRETTY BOY
You know my motto. Never fuck a duck 
or duck a fuck.

Easy makes a quieting motion. He listens to the handset.

EASY
Devil Dog Six is getting their shit 
blown away.

HAMMER
(to Drewry)
6-1-6 Battallion, South Vietnamese, 
our dinks. American advisors.

EASY
They're giving coordinates for Med 
Evac.

OD pulls out a map and Easy checks his code book.

EASY
All their green monkeys skyed up.

DREWRY
How far away are they? Can we help 
them?

OD
We don't have enough fire power to 
do any good.

CRACKER
If we could get there in time.

DREWRY
But...

OD
Our primary mission is recon, sir. 
Let's move out.

The team moves out.

BLACK. Sound off.

Sound on.

PRETTY BOY (V.O.)
I love the sunset in Nam.

DREWRY (V.O.)
It's gorgeous.

CAMERA ON.

Sunset.

Drewry and the Cameraman watch Pretty Boy string trip wires 
around their camp. He uses the ration cans he stuffed in his 
socks earlier. He drops a couple pebbles in each can and 
hooks them to the wire and tests the rattle, then camouflages 
everything.

PRETTY BOY
Fuck "gorgeous", it means the day's 
almost over and I'm one day shorter. 
I hate this fucking place. They ought 
to DX the whole fucking country, 
north and south. Turn it in to the 
big quartermaster in the sky. Say, 
"Hey, motherfucker, this place is 
beyond repair."

DREWRY
It looks pretty some times.

PRETTY BOY
You should have seen it when I first 
came over. You could still see tigers 
and elephants on the Ho Chi Minh 
Trail. Fucking elephants.

Pretty Boy shakes his head in disbelief.

They walk back to the main camp area on a steep slope. Drewry 
stumbles.

PRETTY BOY
We night camp on a slope, away from 
the trail. Even Chuck sticks to the 
trails at night, so he ain't likely 
to trip over us.

Hammer is boiling water in his canteen cup. Easy is monitoring 
the radio. Cracker is on guard. OD is opening a pack of Lurp 
rations.

PRETTY BOY
Line's strung.

HAMMER
Water's boiling.

OD tosses two Lurps to Drewry.

OD
Spaghetti and chili.

Everyone gathers around Hammer with their Lurps. He pours 
water into the plastic bags.

OD has him fill two and he gives one to Cracker.

EASY
Number one chop chop.

Hammer boils more water for coffee and cocoa.

OD
First guard, Cracker, Hammer, me, 
then Pretty Boy and Easy.

DREWRY
I can pull a shift.

OD
I don't know you.

Drewry and OD stare at each other for a moment. Drewry wants 
to make something of the rejection.

OD
You're not used to humping, you're 
beat. You'll need the sack time.

Drewry accepts the conciliatory gesture.

EASY
MoPic's got a can of fruit cocktail 
and one of peaches that I saved.

PRETTY BOY
You sorry-assed motherfucker, you 
let the poor dude hump those cans, 
you're lower'n whale shit.

EASY
Bite my ass, Pretty Boy. It's good 
training for him. Hey, MoPic, souvenir 
me your pack.

OD
Peaches and fruit cocktail all around.

The Cameraman tosses Easy his pack, but before Easy can look 
for the canned fruit, something calls him back to his radio. 
He hears something through the static.

Easy holds the handset to his ear and listens intently. Pretty 
Boy gets the cans of fruit from the Cameraman's pack.

EASY
Echo Company. Getting mortared, 
calling in arty.
(beat)
Still haven't gotten their Med Evac, 
weather's real bad inland. Choppers 
can't get off the ground.

HAMMER
Monsoon season. A rat fuck.

Pretty Boy opens the canned fruit. He takes a spoonful of 
fruit cocktail and passes the can to Hammer.

PRETTY BOY
Save a cherry for Easy.

Pretty Boy slurps up a peach slice and hands that can to OD. 
Each man takes his share and passes it along.

CRACKER
Number one.

HAMMER
Not too shabby.

OD starts eating his Lurp ration, a sign for the others to 
start. Easy and the Cameraman are the only ones not eating.

EASY
HQ's saying they might get choppered 
out tomorrow, late. A definite maybe 
so.

CRACKER
Better scarf up your pecks, MoPic.

The Camera starts to lower, but catches Easy taking two pills 
from a ziploc bag and swallowing them. No one but the Camera 
sees it. Easy sees the Camera on him.

EASY
Tetracycline. Got the clap last time 
in Sin City.

HAMMER
There it is, the Nam. Where else in 
the world can you get a contagious 
disease for only five bucks a pop.

PRETTY BOY
Clap's no sweat, better'n crotch 
crickets.

CRACKER
Crabs are no big deal. You get 
yourself a bayonet and a can of 
lighter fluid. Set fire to your pubic 
hair and when the little fuckers run 
to the high ground, like your dick, 
you stab 'em to death.

The Camera starts to lower again, but...

HAMMER
Better'n the black syph.

The Camera reacts.

Hammer knows a sucker when he sees one.

HAMMER
(too seriously)
The black syph. You only get it in 
Nam. It rots your dick off, like 
leprosy. Just drops off. One day 
you're walking along and you feel 
something like a turd drop down your 
pant leg. Next thing you know, you're 
squatting to piss like a girl.

EASY
Yeah, and if you get it you can't go 
home. They keep you here so you don't 
infect the rest of the world. You 
spend the whole rest of your life in 
the Nam. No shit, the whole rest of 
your life in the Nam.

Pretty Boy can't take it anymore, he bursts out laughing.

OD
Better chow down, MoPic.

BLACK. Sound off.

CAMERA ON. Sound on.

Drewry snaps his fingers in front of the Camera.

DREWRY
Sound.

It is dark and the men are gathered around inside their night 
perimeter. Easy fiddles with the radio. The others prepare 
their sleeping areas.

Drewry approaches OD.

DREWRY
We need to do some background 
interviews on each man. I thought 
we'd start with you.

OD
What kind of interviews?

DREWRY
Where you're from? What you did before 
the Army? Background stuff.

OD glares at the Cameraman.

OD
I ain't telling you none of that 
stuff, that's my private life. The 
Army's got no business in my private 
life.

The Camera holds a tenuous moment and then focuses on Drewry, 
who wonders whether to push it.

Drewry decides to drop it and he shifts his attention to 
Cracker.

DREWRY
We'll do Sergeant Frye then.

CRACKER
Spec 5.

He looks at OD, then at Drewry.

CRACKER
Maybe later if it's all right with 
you, sir.

DREWRY
Sure, soldier.

Drewry looks at the other members of the team and fixes on 
Easy. Easy is smiling at him. Drewry walks over to Easy with 
the Cameraman.

DREWRY
All right, Private. Let's talk.

EASY
Let me tell a joke first. C'mon, 
just one. It's good training.

Easy grins into the Camera.

EASY
I could be the next Shelley Berman. 
Is this on now? Sound.

He raps a magazine against his helmet.

EASY
How do you eat a frog?

There is laughter off screen.

EASY
C'mon, how do you eat a frog?

DREWRY (O.S.)
I don't know.

EASY
You put one leg over one shoulder, 
then you put the other leg over the 
other shoulder...

Easy laughs. He might be high. He is changing the battery in 
his radio and cleaning it.

DREWRY (O.S.)
How long have you been in-country?

EASY
One year minus 28, 27 days. I worked 
RTO for a line company first, then 
with Forward Observers. I love my 
Prick 25.

PRETTY BOY (O.S.)
Tell him how many FO's you went 
through, Easy.

EASY
FO's don't have much of a life 
expectancy here. Don't even come 
with warranties. I lost eight in six 
months. Three dead, two went home 
all messed up, lost track of the 
rest. That's the real bummer over 
here. When your buddies get hit, not 
zapped, but wounded bad, Medevaced 
and gone, you don't know if they 
die, or what... People you were real 
close to, sort of gone into the 
Twilight Zone...

Easy pauses a moment, his usual nervous energy subdued, but 
he brightens.

EASY
You know why shit's tapered at the 
ends?

DREWRY
No.

EASY
So your asshole don't slam shut.

Pretty Boy laughs off screen.

EASY
Did I tell you I was a drummer back 
in the Real World? Lead vocals, too. 
Boy, did we ever do some dope when 
we were on the road. Stayed all fucked 
up. But nothing like the Nam.

DREWRY
How long were you on line?

EASY
Forever. Got 4 Purple Hearts, two 
Bronze Stars with "V". I got enough 
Green Weenies to open a hot dog stand. 
This radio antenna is like wearing a 
target on your back.
(beat)
You know why pubic hair is curly? So 
it don't poke you in the eye.

DREWRY
So, what will you do when you get 
home?

EASY
I don't know. Hang out. Get high. 
Check out my wife.
(beat)
She's probably fucking every Jody 
that passes the house. That's okay, 
though. She was 17 when we got 
hitched, dead meat in the sack. Maybe 
Jody can teach her how to fuck.

DREWRY
Why'd you join up?

EASY
The judge volunteered me. Either 
that or he'd lock me up. Do you know 
how you can tell the Nam sucks? It 
leaves hickeys on the bottom of your 
feet.

Pretty Boy laughs again.

DREWRY
The judge blackmailed you.

EASY
He did me a favor. Army saved me 
from jail, unless I wind up in the 
stockade. So far, they've just Article 
15'd me to death, took my rank ad 
pay. I can handle that.
(beat)
The bush saved me from the stockade 
and OD's saved me from the bush. 
Only thing I hate is the night. It's 
starting to spook me. I'm too short 
for this shit. You get short, you 
get paranoid beaucoup.
(laughing)
Is it paranoid to think people are 
trying to kill you when people are 
trying to kill you?

DREWRY
Then why do you do it?

EASY
Why does a dog lick his penis?
(beat)
'Cause he can!
(beat)
And to be with my buddies out here. 
They'd be shit out of luck without 
me on the horn. My buddies.

Easy starts, he hears something on the radio.

EASY
Hey, hey. Dig this.

He cranks up the volume and faint music can be heard, Clarence 
Carter's "Steal Away".

Static flickers through the music.

DREWRY
Is that the States?

EASY
Armed Forces Radio. VietNam, probably 
Saigon.

PRETTY BOY
Nah, we're too far away. An Khe.

HAMMER
Nope. Sappers wasted An Khe radio 
last Tet.

EASY
Now that pisses me off.

CRACKER
Shhh!

The men listen and lean unconsciously toward the radio. The 
Cameraman focuses on each face in turn, half-shadowed in the 
faint light. The song fades away before it is done.

The men settle into disappointed silence. Drewry turns off 
the tape recorder.

Sound off.

BLACK.

Sound on.

DREWRY (O.S.)
Wake up and catch this. C'mon, c'mon.

The Camera comes on, jerking and swaying. It is night. Drewry 
crouches near OD and Easy at the radio. The others are asleep.

EASY
(to Drewry)
Devil Dog's been getting NVA probes 
all night. Sounds like sappers have 
infiltrated their lines.

Easy turns up the volume.

RADIO
(ADVISOR)
...one giant cluster fuck. My green 
monkeys are shooting the hell out of 
each other trying to waste the 
sappers.

There is the sound of gunfire and artillery explosions over 
the radio. Men scream.

RADIO
(ADVISOR)
Werewolf One, tell the cannon cockers 
to pop another illumination round. 
Over.

RADIO
(HQ)
Devil Dog Six, this is Werewolf. One 
illumination round on the way. How 
many caps you got left? Status please. 
Illumination round shot. Over.

RADIO
(ADVISOR)
I don't know, I don't even know how 
many men are left. Right now I'm 
doing...

The gunfire increases.

RADIO
(ADVISOR)
Oh, shit! Fuck! We're getting overrun!

Nothing but static.

RADIO
(VOICE #2)
Werewolf, this is Devil Dog Three. 
We're in deep shit here. Help us! 
Please!
(VOICE #3)
The Lieutenant's hit! Oh, God! Medic! 
Medic!
(VOICE #2)
Oh, no! Colonel, Colonel! Six is 
down! Again I say, our Six is down. 
We got gooks inside our perimeter! 
We need help!
(beat)
What, sir?
(beat)
Yes, sir. Werewolf One, request big 
guns drop one hundred. Say again, 
drop one hundred. Over.

EASY
They're calling artillery in on their 
own position.

The other members of the team are awake now and looking at 
the radio. Drewry reaches for his cigarettes.

RADIO
(VOICE #2)
Where's the fucking medic?! Somebody 
give me a compress! Oh, Jesus, Jesus, 
Jesus...

BOOM! An explosion, then static.

Everyone is silent for a moment.

EASY
Poor fuckers.

RADIO
(HQ)
Devil Dog Three, this is Werewolf. 
Status report, over.

Silence.

DREWRY
We should have done something.

RADIO
(HQ)
Devil Dog Three, this is Werewolf. 
Report status. Over.

OD just looks at Drewry.

DREWRY
We could have been there.

RADIO
(HQ)
Devil Dog, Werewolf. Please report 
status.

OD
And gotten wasted with them.

RADIO
(HQ)
Devil Dog Three? Jimmy?
(beat)
For God's sake, Jimmy, report your 
fucking status!

OD ignores Drewry. He reaches over and turns off the radio 
and walks over to a tree. He leans against the trunk and 
closes his eyes.

DREWRY
Go ahead, sleep. A hundred and twenty 
men just died.

OD
I have a lot of dead men in here. 
Plenty of room for more. Maybe even 
room for one smartass lieutenant.

Drewry looks at Easy. Easy turns the radio back on and cruises 
the frequencies. He pops a couple more pills.

EASY
Ladybird's getting scattered mortar. 
Sixty mike-mike. Ruff Puff Advisor. 
Texas Hat is cool, though. Ice cubes 
in his armpits.
(to OD)
Everybody's catching some kind of 
flack. Probes all over. Shit, sounds 
like Tet again.

OD
Major offensive?

EASY
Little shit, ti ti action. Beaucoup 
noise. Chuck's feeling everybody 
out.

OD
Lot of over-reaction at night.

EASY
Night's the worst. I hate the night 
like a motherfucker. Trees walk at 
night if you stare at them long 
enough. The Nam's a motherfucker if 
you got any imagination.

BLACK. Sound off.

CAMERA ON.

Morning. The Cameraman follows OD across the camp. OD and 
the Camera stop next to Drewry, who is heating water in two 
canteen cups. Drewry slips on his boots and turns on the 
recorder.

Sound on.

OD
Oughta shake those boots out before 
you put 'em on. All sorts of nasty 
critters love to crawl in your boots 
at night.

Drewry looks at his feet, stands up and stamps them.

DREWRY
I've heated water for coffee or cocoa 
for everyone.

OD
You're our Mess Sergeant now, El 
Tee.

DREWRY
Figured it's better than riding free.

OD nods, smiles, and leads Drewry and the Cameraman over to 
Cracker.

Cracker is still asleep. Pretty Boy is awake, but still laying 
down. He rolls over to watch.

Hammer is brushing his teeth. Easy is on watch, his rifle in 
his lap, radio at his side.

OD stops next to Cracker and strikes a lecturer's pose.

OD
Lessons Learned. The first thing a 
grunt learns is to be ready at all 
times, night or day, asleep or awake, 
to encounter the enemy.

OD brandishes a long stick. Cracker sleeps soundly, his mouth 
open.

PRETTY BOY
Watch this.

OD
It's night. Bangedy, bangedy, rattle, 
rattle, the enemy trips your early 
detection devices. You don't have 
time to wake up, stand and wander 
around with your dick in your hands 
looking for your weapon. The enemy 
is ten yards away ready to waste 
your ass.

HAMMER
OD oughta be a Drill Instructor.

EASY
Fucking Cracker sleeps like the dead.

OD
So you train yourself to wake with a 
rolling motion, providing the enemy 
with a low silhouette and, thusly, a 
minimal target. You sleep with your 
weapon in the same position every 
night, to the right or left of you 
depending on your preference, so 
when the shit hits...

WHAP! OD whacks Cracker with the stick.

OD
BOOM!

Cracker rolls to his right, picks up his shotgun in mid-roll 
and lands on hs stomach, sighting down the barrel and clicking 
off the safety.

OD
...you land in a prone firing 
position, ready to engage the enemy.

Everyone claps and laughs. Cracker looks pissed as he wakes 
more and gets up slowly.

CRACKER
OD, the payback on this is gonna be 
a motherfucker. I'm gonna shove that 
stick up your ass and roast you over 
a fucking fire. You wait.

OD laughs.

EASY
Oooooh, wolf talk.

Cracker glares at the Camera.

CRACKER
Turn that fucking thing off.

BLACK.

EASY (O.S.)
Hey, Cracker, 26 and a wakeup. I'm 
so short I could tickle a pissant 
under the chin.

CRACKER (O.S.)
If you live, you dinky dau 
motherfucker.

Everyone laughs. Sound off.

CAMERA ON. Sound on.

Pretty Boy brushes his teeth with salt from a packet sprinkled 
on his brush. The rest of the team are preparing to move 
out. Drewry interviews Pretty Boy.

PRETTY BOY
Hygiene. Clean mind, clean body, 
take your choice. Let's see, I was 
hanging out. Went to college for a 
year, real drag. All those classes 
got in the way of partying and pussy.

Pretty Boy grins and changes his socks.

PRETTY BOY
Work was worse, no fun there. Me and 
a couple buddies joined together. 
Army said they'd keep us together. 
That lasted through Basic. One's in 
Germany now, freezing his balls off. 
Glenn's somewhere with the First 
Cav, Engineers. lucky fucker.

Pretty Boy ties the dirty socks to the back of his pack.

PRETTY BOY
(to Camera)
Dry 'em out during the day.

EASY (O.S.)
Gas warfare, kills all the mosquitoes 
for miles around.

PRETTY BOY
Some dudes get away without socks, 
not me. During monsoon, dry socks 
are better than sex.

DREWRY
You spent a lot of time in the field?

PRETTY BOY
Three months of hell. Every kind of 
shit you can imagine, and a lot you 
can't. I was Medevaced three times 
when they thought I was dead. Once 
they even zipped me into a body bag. 
We'd get hit, you know, and I'd be 
in a hole with three other guys. A 
mortar round would come right in the 
hole, blow everyone else to mincemeat. 
Concussion would knock me out, I'd 
have blood coming out of my ears and 
nose, blood all over me, not all 
mine... The medics would figure I 
was dead and throw me on the chopper 
with the bodies. No fun waking up 
there.
(beat)
My luck is unfucking believable. 
We're running across a paddy, fifty 
caliber opens up and catches the 
dudes on my left and right, wasted 
them. Me, I was skipped.
(beat)
I got a hundred stories... scary. 
Took a round in my helmet once, cut 
a groove in my hair. Weird shit.

DREWRY
Luck.

PRETTY BOY
Luck... God... Karma. My karma ran 
over my dogma.

There is laughter off screen.

PRETTY BOY
Got to be a pain in the ass. Dudes 
hanging close like it would rub off. 
Boonie voodoo. People get strange in 
the bush, believe all sorts of things. 
Lucky scarves, bibles over their 
hearts, some ain't ever been to 
church. Baldwin's luck. The Company, 
the whole Brigade talked about it. 
We get mortared, dudes stick around 
me like a steel umbrella.

I even started believing it. I do. Makes you think God's got 
something special planned for you.

DREWRY
Something special good, or special 
bad?

Pretty Boy shrugs.

BLACK. Sound off.

CAMERA ON.

The team has stopped. OD is talking to Hammer. A message is 
passed from one man to the other. Drewry is last. He turns 
to the Cameraman and switches on the Nagra.

Sound on.

DREWRY
Something he wants us to look at. 
Sound.

Drewry snaps his fingers at the Camera and walks to the front 
with the Cameraman. OD is kneeling on the trail. Drewry and 
the Cameraman bend down to get a better look.

OD
Trip wire. See the old, dead 
camouflage.

OD indicates a dead branch, then a wire. He follows the wire 
with his fingers into the brush. There is a Chinese Communist 
grenade tied to a stick with the wire in the pull string.

OD
Booby trap.

He gingerly releases the brush back into position. He stands 
and walks back to Cracker. Drewry and the Camera follow.

OD
Point man trips the wire, the grenade 
goes off, takes out him and maybe 
his slack. The rest of the patrol 
dives into the brush.

OD stops at the side of the trail and pulls the brush aside. 
There are pointed bamboo stakes with barbs planted in the 
earth.

OD
And they get perforated. Chuck's got 
his shit together.

OD leads the team off the trail at a right angle.

BLACK. Sound off.

CAMERA ON. Sound on.

The team is stopped by a stream. Everyone is on guard while 
Pretty Boy fills their canteens.

PRETTY BOY
Always try for running water. Still 
water's full of all sorts of ugly 
stuff. Drop in your halizon tablets 
and drive on.

HAMMER
Once we filled our canteens, then 
found five dink bodies further 
upstream, rotted all to hell, pieces 
floating around. By then we'd drunk 
half the water.

DREWRY
What'd you do?

HAMMER
Said, "fuck it", and drove on. No 
big thing.

EASY
Called it soup.

DREWRY
That's a war story, isn't it?

PRETTY BOY
El Tee, you're all right.

BLACK. Sound off.

CAMERA ON. Sound on.

The team is moving through the jungle at a good pace, but as 
quietly as possible. There is heavy breathing, branches 
slapping at the men, a muted rattle of equipment. The brush 
is dense, visibility no more than five meters.

The team halts.

OD raises his hand and dives to the ground. The others hit 
the ground after him. The Cameraman crouches.

Drewry raises up to look around. Hammer pushes him back to 
the ground, hard. Drewry gasps, then mews with pain.

Someone pushes the Cameraman down and the lens hits the dirt.

BLACK.

Fast, heavy breathing from Drewry.

Footsteps and the swish of brush as something else moves 
through the jungle nearby.

The Camera is raised and set horizontal. Feet in Ho Chi Minh 
sandals walk by. Low Vietnamese voices. Drewry's prone body 
is in view. A bamboo stake pierces his forearm. His face is 
tense with pain.

Drewry's breathing seems to get louder.

A pair of feet stop a few feet from Drewry. Drewry holds his 
breath. Louder Vietnamese voices.

A stream of yellow water trickles to the ground as the NVA 
soldier pisses. He moves on.

Drewry's breath rushes out.

The noise fades as the soldiers move out of the area.

Soundlessly, the team rises and continued along the trail, 
faster and quieter in a low crouch.

Drewry clutches his forearm.

BLACK. Sound off.

Sound on.

CRACKER (O.S.)
...get me a Ford, LTD or something.

HAMMER (O.S.)
I'm getting a speed monster, Dodge 
Four-Forty.

CAMERA ON.

Rest stop. Pretty Boy is bandaging Drewry's arm. Hammer and 
Cracker are on guard. Easy moves with nervous energy.

PRETTY BOY
Through and through. Looks like you're 
Purple-Hearted, El Tee.

EASY
Man, that was something. I mean, 
fuck me, Alice. First the booby traps, 
last night the ARVN's shit gets flaky. 
Now we just about get a Ho Chi Minh 
sandal on our backs.

DREWRY
What about infection?

HAMMER
Can't hack it, Easy?

PRETTY BOY
No sweat, GI, I put on some sulfa. 
And here's some Tetracycline, take a 
couple every four hours, or four 
every two hours.

EASY
Smoke my pole, Hammer. It's just... 
there seem to be gooks everywhere. 
I'm too short for this shit.

Pretty Boy uses a Kotex to cover the wound. Drewry looks at 
it curiously.

PRETTY BOY
Kotex. My mom sends 'em. They're 
better'n bandage packs.

CRACKER
I tell you, it gave me one mean pucker 
factor.

CAMERAMAN (O.S.)
Pucker factor?

HAMMER
Pucker factor. It's...

EASY
That's when...

CRACKER
When the shit hits, you kinda feel 
your asshole pucker up, like it starts 
sucking wind you're so scared.

EASY
Yeah, like an ambush. That's a pucker 
factor of ten.

HAMMER
Hearing a mortar tube go "bloop" and 
waiting for the shell to hit, that's 
a six maybe.

EASY
Sniper is ten.

CRACKER
Back there on the trail, that was an 
eight.

HAMMER
Seven.

EASY
Nine.

PRETTY BOY
Three.

They all look at him in disbelief.

PRETTY BOY
I fell asleep.

EASY
What a fucking John Wayne.

CRACKER
Hey, El Tee, you're the first man 
ever blooded on one of our missions. 
The first ever.

EASY
Bad omen.

Drewry looks down at the bandage. He pops two, then four 
Tetracycline tablets.

PRETTY BOY
We'll be out of the boonies before 
it gets too infected.

HAMMER
The only thing that's fast in this 
country is rot.

EASY
And bullets.
(beat)
You know, this mission... This shit 
ain't fun no more. Nam's giving war 
a bad name.

There is a noise so slight it's almost indistinguishable. 
The team grab their guns and face outward. Cracker calls out 
quietly.

CRACKER
Swamp.

OD (O.S.)
Fever.

OD appears quietly out of the jungle. The team relaxes.

OD
Cracker.
(beat)
El Tee.

OD and Cracker confer over a map. Drewry joins them.

HAMMER
Fucking Cracker wants an LTD. Car's 
such a pig they twist the antenna 
into a curlicue.

OD
Never seen so many gooks around. 
Mostly NVA regulars, FNG's like the 
El Tee. We can get over on them easy.

EASY
Getting me a Mach One. 351, four-
barrel, Hurst four-speed, 
positraction. Red on red. Ordered it 
already at the PX. Be waiting for me 
at home.

HAMMER
I want a Four-Forty. Big fucking 
Chrysler engine. You see "Bullitt"?

CRACKER
Didn't have trouble finding them?

OD
Just stopped one and asked directions.

DREWRY
I could have done that.

PRETTY BOY
Fucking Chrysler's suck green donkey 
dicks, fifteen cents a herd.

EASY
Trade my Boss 302 for the Mach One.

OD looks at Drewry's wound. Drewry tries to smile.

HAMMER
Thought you had a jacked '54 Ford 
with a 390 hemi.

EASY
I do, I let my brother drive it. 
Boss 302 he can't touch.

HAMMER
Yeah, I suppose you bought it when 
you toured with the Four Seasons? 
Man, you can always tell when Easy 
is lying, his lips move.

PRETTY BOY
I want a Jag, XKE.

EASY
It was the McCoys, doofus. I want 
any shit from you I'll squeeze your 
head.

OD
We can camp here, or here. I figure 
we recon and do it tomorrow, real 
quick. Get this job done.

CRACKER
I don't like the high ground.

OD
Affirm. El Tee, where you figure we 
can squat for the night?

HAMMER
You feel froggy, jump. You wanna 
throw some hands?

EASY
I'll tear off your leg and beat you 
roundly about the head and shoulders 
with it.

HAMMER
I'll tear off your head and shit in 
the hole.

The argument is starting to get serious. Hammer smacks Easy's 
helmet. OD gives them the evil eye and they calm down.

DREWRY
This looks like it has a good back 
door. We can camp on the hump.

OD nods and rewards Drewry with a smile.

Pretty Boy interrupts the argument between Hammer and Easy 
and gets the conversation back to cars.

PRETTY BOY
El Tee, what kind of car you got?

DREWRY
Volkswagon Beetle. 65.

Everyone looks at Drewry like he's from Mars.

PRETTY BOY
Automatic?

DREWRY
Stick.
(beat)
But I'd like to get a Camaro or a 
Firebird.

OD
Okay, let's get you hoodlums off the 
streets for the night.

The team moves out.

HAMMER
VW Beetle. Stick. El Tee, you got 
hair on your ass.

PRETTY BOY
One hard corps motherfucker.

DREWRY
My folks gave it to me for graduation.

There is a round of stifled laughter.

OD
Cool it.

Everyone shuts up.

BLACK. Sound off.

CAMERA ON. Sound on.

The team moves through the jungle, slower, more cautiously. 
Drewry is traveling with less effort and he is quiet.

The men are beginning to move as a unit again.

BLACK. Sound off.

CAMERA ON. Sound on.

The men are extremely alert. OD and Cracker aren't with them.

PRETTY BOY
(softly)
That booby trap was old. Left over 
from the French. So were the punji 
sticks I suppose. Any gook in the 
last year or two would have left a 
nice, new Chinese "Bouncing Betty".

HAMMER
Those Bouncing Betty's'll tear you a 
new asshole. You trip 'em, they shoot 
out of the ground and go off waist 
high. Blow your balls off. That spooks 
me the most.

EASY
Can't miss what you don't got.

Easy looks around the jungle nervously and pops a pill.

DREWRY
How long are they usually gone?

PRETTY BOY
Don't sweat it, El Tee. Cracker and 
OD got beaucoup jungle smarts. Better 
than those little rice propelled 
bastards, right?

HAMMER
They can out-Chuck Chuck.

EASY
Dig it.

Silence. No one is convinced.

BLACK. Sound off.

CAMERA ON. Sound on.

The team is gathered around OD. OD inserts small sticks in 
the ground as he talks.

OD
First, intelligence. Regiment size 
unit, NVA regulars. New uniforms, 
new weapons, SKS's mostly. One AK 
for every eight or ten SKS's. RPG's, 
looks like one to a squad. Mortar 
platoon. Plenty of ammo, haven't 
cached it yet. Pretty green. NCO's, 
officers, everything on down. Led by 
a squad of hard corps VC.
(to Drewry)
Everyone's briefed in case we get 
separated or something happens. The 
intelligence has a better chance of 
getting back.

PRETTY BOY
Army intelligence, now there's a 
contradiction in terms.

Easy laughs.

OD
Here's the mission by the numbers.

CRACKER
OD does everything by the numbers. 
He even fucks by the numbers. One, 
insert member, two, thrust, three, 
retract member, four, repeat two and 
three rapidly.

OD
(smiling)
We move out just before dawn. There's 
a hill on the east side of their 
camp, we'll have the morning sun 
behind us.

CRACKER
They'll be just waking up, slow and 
sluggish before they have their 
morning tea. Security's real lax.

OD
We'll set up at the military crest. 
Easy will call the FDC. Range for 
our long rifles is about 450 meters. 
Primary targets are as follows -- 
CO, Radioman, First Pig, XO, Radio, 
Mortar, then targets of opportunity.

DREWRY
Why shoot at all if you're going to 
have Easy call in artillery?

OD
Confuse 'em, shake 'em up. If they 
sit there and see that smoke round 
coming they could get their shit 
together and sky up. And...

DREWRY
And...

OD
If the Fire Direction Center fucks 
up at least we get a few of the 
bastards.

CRACKER
That's for damn sure.

OD
By the numbers. One, Easy calls fire 
mission. Hold fire. Two, I commence 
firing, CO.

OD knocks over the sticks one at a time.

OD
Cracker fires. Primary targets hit. 
Targets of opportunity. Pretty Boy 
pops a few blooper rounds for effect. 
Easy lets go his smoke. Adjust. We 
sky up.

CRACKER
Like a stripe-ed assed zebra.

OD
We head back to our camp here, make 
a 90 here, about 50 meters before 
the camp, and head for Ladybird. 
Compass reading for Ladybird is 132 
degrees. Got that, Hammer?

OD draws the route on the ground.

HAMMER
One-three-two.

OD
Questions?

DREWRY
What do I do?

OD
Stay out of our way.

OD picks up the sticks and throws them into the brush and 
wipes the drawings from the dirt.

DREWRY
How about I walk on over to Thailand 
and get laid? I promise to be back 
in time for the pick up.

EASY
Hey, El Tee, dig it. Check it out.

HAMMER
We gotta get you a new name.

PRETTY BOY
How about "Big D"?

Drewry looks down at his crotch.

DREWRY
Somebody looked.

The men laugh.

BLACK.

HAMMER (O.S.)
I'm cleaning the M-60. Cover me.

PRETTY BOY (O.S.)
You got it.

DREWRY (O.S.)
You still have film?
(beat)
Turn it on.

CAMERA ON.

Hammer gets out his oil and shaving brush and starts to break 
down the machine gun.

DREWRY
Feel like talking?

HAMMER
What the fuck, sure.

Hammer strips, cleans and reassembles his M-60. He even cleans 
the belt of ammunition.

DREWRY
You enlist?

HAMMER
Nah, I'm a fucking US. Worked for my 
old man. Couldn't cut that nine to 
five Mickey Mouse shit. Rammed around. 
I'm from a small town, but me and my 
buddies own it. Nobody gives a shit. 
We get a little static from the 
Sheriff, but just little shit.
(beat)
I think my old man suggested to the 
draft board it was my turn. Make a 
man of me, he said. Shit. Drafted.
(beat)
I wasn't doing anything anyway. All 
my buddies started copping out. Larry 
got married. Ed went to Junior 
College. I was painting houses, laying 
linoleum, little of everything.

DREWRY
You volunteered for this unit, too?

HAMMER
The Green Line was getting to me. 
Too much dope. Figured I might start 
taking the hard stuff. Trip on LSD, 
hash. It was so fucking boring. They 
were starting inspections, spit-shined 
boots in the Nam! See, we got it 
dicked in the rear, this team. Nobody 
fucks with us, no KP, details or 
inspections. Nobody fucks with us, 
not even officers. They think we're 
crazy. Dinky dau, mad killers.

DREWRY
Are you?

HAMMER
We're the only sane killers the Army's 
got, OD says.

DREWRY
You're a hard corps dude.

HAMMER
Damn right. Mercenaries kill for 
money. Sadists kill for fun. 
Paratroopers kill for both.

Hammer winks at the Camera.

BLACK. Sound off.

CAMERA ON. Sound on.

Night camp. Drewry signals the Cameraman to follow him over 
to where the team are talking.

EASY
The question is, did you get laid? 
What I want to do, there's this 
asshole where I live, owns all the 
parking lots. In the morning he drives 
to them all in his Continental, sees 
that all his dollar-an-hour doofus 
mother-fuckers are on the job. Then 
he goes to the country club for the 
rest of the day, rubs elbows with 
all the other rich assholes. End of 
the day, he drives by his lots again, 
collects the money and makes his 
deposit.
(beat)
What a fucking life. When I get back 
the first thing I'm gonna do is buy 
me a fucking parking lot. No building, 
no maintenance, paint a few lines 
once a year. I'm gonna get me a 
parking lot, no shit, and lay back.

DREWRY
What about you, Cracker?

HAMMER
Cracker's a lifer. He ain't never 
leaving the Army.

PRETTY BOY
He's been in since Christ was a 
corporal.

EASY
Pulled KP at the Last Supper.

Cracker is cleaning and checking his M-1 sniper rifle.

DREWRY
(to Cracker)
You like the Army?

CRACKER
Yeah, been in six years. I come from 
South Carolina. Up north they call 
us hillbillies, but we ain't. 
Dictionary defines hillbilly as a 
Michigan farmer. We're white trash, 
dirt poor, big family. I got four 
kids myself, two boys, two girls 
last time I checked.
(beat)
The Army helps a poor man pull himself 
up. Feeds my family, good retirement, 
gives me an education. I got my GED. 
Black people, Puerto Ricans who don't 
even speak English, Army's the only 
equal opportunity employer I ever 
saw. I could get to be First Sergeant, 
even a Warrant Officer. Good money.

DREWRY
You figure what you're doing here is 
right?

CRACKER
I don't figure right or wrong about 
it. People like me go day to day, 
spend our time figuring how to get 
food on the table.
(beat)
My daddy was the best cabinetmaker 
you ever saw. Didn't get a lot of 
work 'cause of his hands, arthritis 
twisted them up, but whenever he 
made something, a cabinet, a three-
legged stool, it was the best goddamn 
three-legged stool he could make. He 
taught the same to me. You do your 
job the best you can, no matter you 
like it or not.
(beat)
Once he made a black oak china 
cabinet, black oak, and when the 
lady said he should paint it white 
to match her floorboard trim, well, 
my daddy painted it white. Beautiful 
black oak, grain like running water. 
He painted it the smoothest, cleanest 
white you ever saw. Milk ain't that 
white.
(beat)
You do your job, let the right or 
wrong to others. You earn your pay. 
OD feels the same. That's why me and 
OD are this close.

Cracker holds up two fingers horizontally, one on top of the 
other.

CRACKER
That's me on top.

DREWRY
Being from South Carolina, how does 
it feel, being led by a black man?

Cracker's eyes narrow.

CRACKER
We don't ask those questions out 
here, that's a Real World question. 
Ask me that in South Carolina. Right 
now ask me if OD isn't the best 
fucking boonie rat I ever met. Ask 
me if OD ain't the best human being 
I ever humped a ruck with. Ask me if 
I love him like a brother and if I'd 
kill for him. I do and I have. If 
I'd lay my life on the line for him... 
I have. And if he ain't done the 
same for me.
(beat)
We're finished here.

Cracker gets up and walks away.

Drewry sees the Camera on him. He looks away, embarrassed.

DREWRY
Turn that fucking thing off.

BLACK. Sound off.

Sound on.

EASY (O.S.)
Before it gets dark you lay in your 
position, check out your fire lanes, 
and most of all you memorize the 
terrain in front of you.

CAMERA ON.

Easy lies on the ground and looks into the night. He talks 
nervously.

EASY
Every tree, bush, and rock. Sometimes 
you draw a picture in the dirt in 
front of you. Then at night, those 
shadows, you know what they are. 
They're not the bad guys, you know?
(laughing nervously)
But then you think, the little dink 
fucker replaced the bush with himself. 
You know it moved, you know it did.
(beat)
I hate it just before a mission. See 
that little berm, looks like a 
crawling gook, don't it? Freaky shit. 
Stare at it long enough, it'll move, 
I wouldn't shit you.

Pretty Boy appears and lays a hand on Easy's shoulder.

PRETTY BOY
Hey, Breeze, what does the Jolly 
Green Giant fear the most?

EASY
What?

PRETTY BOY
Avocado pickers.

They both laugh. The laughter fades and they stare out into 
the darkness.

BLACK. Sound off.

CAMERA ON. Sound on.

Easy grins into the Camera. He motions to the Cameraman to 
follow him. Easy picks up Drewry's Nagra and walks across 
the camp.

It is dark. There is some fog. OD is cleaning his long rifle. 
Easy fiddles with the Nagra's knobs.

EASY
Like my TEAC fifteen hundred.

Easy and the Cameraman walk over to Drewry. Easy points the 
microphone at him. Drewry looks worried.

EASY
Your turn in the barrel, El Tee.

Pretty Boy and Hammer laugh off screen.

DREWRY
I see. I've thrown some punches at 
you guys and now it's your turn.

EASY
Now, El Tee, how long you been in-
country? Oh, never mind. How long 
you been on line? Ooops. Wait, wait. 
How long you been in the Army?

DREWRY
Active? Close to two years. I was 
National Guard in college. Wanted 
West Point, but I couldn't get in, 
politics.

EASY
Ohhh, Regular Army. El Tee, I didn't 
take you for a lifer.

Easy shakes his head and smiles.

EASY
So, El Tee, why you being such a 
hard ass on us? We're just some 
regular assholes trying to do a dirty 
job.

Silence. OD gets up and walks over to Easy.

OD
That's enough, Easy.

DREWRY
No, it's a fair question. I think 
you people treat the war like some 
game. You dress up like GI Joe or 
Sergeant Rock, play hard corps.

Pretty Boy and Hammer join them.

EASY
Bull-fucking-shit.

PRETTY BOY
Dig it.

HAMMER
Sergeant Rock, my ass.

OD
And how do you see the war, El Tee?

DREWRY
Business. Big business. The Army is 
one big corporation, like Gulf and 
Western.

PRETTY BOY
Engulf and Devour.

OD
And we're just cogs in the big 
machine.

DREWRY
If you want. But there's opportunity, 
like Cracker said. You can be a peon, 
or, if you see yourself as executive 
material, the advancement potential 
is enormous.

Cracker, on guard, turns and looks at the other men.

CRACKER
You some kind of junior executive?

DREWRY
Exactly. In twelve months I can go 
from Second Louie to First. And if I 
play it right, I can leave Nam as a 
Captain, with Major around the corner.

OD
If you play it right.

DREWRY
That's why I volunteered for this 
unit.

EASY
You volunteered?

DREWRY
Volunteered and finagled. See, with 
a line unit I'm just another shavetail 
lieutenant. My only chance was if we 
got hit bad and I pulled it through. 
But there were too many people above 
me making the decisions and they'd 
take the credit.

OD
Of course.

DREWRY
With this unit I can show my stuff, 
and spend a lot of hours in the rear 
mingling with my superiors. Like 
they say, it's who you know.

EASY
Or who you blow.

DREWRY
Of course, I could take you guys 
with me. You watch, promotions, 
medals, I'll get them for you. Slip 
in a recommendation. Hooch maids, 
more R&R.

OD
You're using the Nam to punch your 
ticket.

DREWRY
It's the chance of a lifetime for a 
career officer. Wars don't come along 
very often. Combat duty is the 
foundation for a successful career.

CRACKER
That's what's wrong with this war, 
all that ticket punching. How can 
you win when everybody's just passing 
time for 12 months? Who ever heard 
of a part-time war?

HAMMER
Who ever heard of a war where you 
couldn't cross enemy borders? We 
oughta invade. If you're gonna be a 
bear, be a grizzly.

PRETTY BOY
It's like they're doing everything 
they can to keep from winning this 
one.

EASY
We're just rearranging furniture on 
the Titanic.

There is a moment of silence.

OD
Better cut some "Z's", mission 
tomorrow.
(to Easy)
Get your act together. Who's 
monitoring the radio?

EASY
I was just having some fun.

OD
Is this fun?

EASY
Not even close.

Easy gives the Nagra to OD and walks away.

OD
(to Drewry)
There it is.

OD flicks off the sound and hands the recorder to Drewry.

BLACK.

CAMERA ON. Sound on.

Night. The team is sleeping. Pretty Boy is on guard. OD sits 
near him.

They talk softly, unaware of the Camera.

OD
...big family. Lots of brothers and 
sisters.

PRETTY BOY
Why don't you set me up with one of 
your sisters?

OD
And you can set me up with your mama.

PRETTY BOY
I want to find a girl. Quit fucking 
around. Just... you know... forget 
all this shit.

OD
I had a girl. We were even engaged. 
But... I've been over here two tours 
and... every time I go home... The 
land of the big PX... Things sure 
change quick.

PRETTY BOY
You ain't a lifer are you, OD?

OD
Say what? You know what they say NCO 
stands for... No Chance Outside.
(beat)
No. No future for me in it.

PRETTY BOY
There it is.

Easy starts in his sleep. Pretty Boy and OD look at him in 
concern. Easy settles down.

PRETTY BOY
You know, OD, I can't handle much 
more of this. My shit's getting flaky.

OD
Just one more time. So you just roll 
your shit up into a tight little 
ball and flick it in Charlie's eyes.

OD notices the Camera and looks at it with surprise, offended 
at the intrusion. He gives the Cameraman the evil eye.

BLACK. Sound off.

CAMERA ON. Sound on.

Dawn at the camp. The Camera is shaky and out of focus. It 
centers on a new man, the Cameraman, leaning against a tree 
and taking a leak.

HAMMER (O.S.)
Okay, MoPic, don't piss on me, piss 
on the camera.

The Cameraman turns, surprised and embarrassed. He buttons 
up. Pretty Boy and Easy laugh.

HAMMER (O.S.)
Wa, c'mon, MoPic, give the folks at 
home a thrill. Haul it out. Let 'em 
see a real soldier's weapon.

EASY/PRETTY BOY
This is my weapon, this is my gun. 
With this I kill people, with this I 
have fun.

They show the difference by brandishing their weapons and 
cupping their crotch. They laugh.

The Cameraman tries to retrieve his Camera from Hammer. Hammer 
backs away.

HAMMER (O.S.)
Hey, soldier, how'd you wind up in 
this circle jerk?

CAMERAMAN
I was working in the lab back in the 
rear, post-production. We used to 
get these cans of film in, no 
cameraman, just the reels. We'd hear 
he got shot, or was dead. Spookiest 
thing in the world, waiting for that 
film to develop. Wondering what you 
were going to see. Sometimes you saw 
nothing. Other times... Real scary.

EASY
You think that's scary.

PRETTY BOY
Another volunteer. We're all crazy 
on this bus.

Pretty Boy and Easy start grab-assing. Hammer follows.

BLACK.

HAMMER (O.S.)
What happened?

CAMERAMAN (O.S.)
You ran out of film.

HAMMER (O.S.)
Shit.

Sound off.

CAMERA ON. Sound on.

Hammer and Cracker drag their rucksacks across the ground, 
making obvious marks.

Easy walks over to Drewry. Pretty Boy is rebandaging his 
arm.

EASY
El Tee, Big D, give me all your bubble 
gum wrappers.

Drewry is puzzled, but he complies. Easy scatters the wrappers 
around the campsite.

OD leaves a full magazine on the ground.

OD
First two rounds are good. Third 
round, gunpowder's been replaced 
with C-4. Bang, bang, boom! Scratch 
one enemy and one enemy gun.
(to Camera)
We're making it look like fifteen 
men were here. Makes the gooks chase 
us with a larger unit. The larger 
the unit, the slower and noisier it 
is. We need every edge we can get.

Cracker digs a small hole. He takes a smoke grenade and a 
regular grenade from his pack and unscrews the fuses. He 
swaps fuses and screws them down.

CRACKER
Regular grenade's got a three-second 
fuse, gives you time to throw it. 
Smoke grenade's instantaneous, better 
for booby traps.

Cracker straightens the pin on the grenade, puts it in the 
hole spoon up and hooks a wire to the pin.

CRACKER
(to Drewry)
Sir, you've been wearing that steel 
pot too long. May I borrow it?

Drewry takes off his helmet and hands it to Cracker. Cracker 
puts a couple handfuls of dirt inside the helmet to steady 
it and sets it on top of the spoon. He checks the balance of 
the helmet, the tension on the spoon, and carefully pulls 
the wire and the pin.

DREWRY
I signed for that thing.

CRACKER
If you want it, sir, you'll have to 
get it the way Mister Charlie will. 
And I guarantee it'll ruin your whole 
day.

Cracker wipes away all traces of his footprints and the trail 
of wire. He stands back and admires his work.

Easy hands Drewry his own soft cap. Drewry puts it on.

OD
Let's do it to it.

The team slides into the jungle.

BLACK. Sound off.

CAMERA ON. Sound on.

Further along the trail. Cracker strings a wire across the 
trail to a grenade that has been inserted into a C-ration 
can. He attaches the wire to the grenade and pulls the pin. 
The can restrains the spoon.

Cracker and the Cameraman walk about fifteen feet up the 
trail. Cracker takes off his bandana and ties it conspicuously 
to a branch.

CRACKER
You stay here long enough and you 
can out-Chuck Chuck.

BLACK. Sound off.

CAMERA ON. Sound on.

The team is setting up on the side of a ridge. OD and Cracker 
set up their long rifles using their rucksacks as gun rests. 
They load their ammunition one round at a time, cleaning 
each one with a rag. Everyone else wears their packs.

Pretty Boy and Hammer set up as spotters next to OD and 
Cracker and get out their binoculars. Pretty Boy lines up 
his M-79 ammunition in a neat row of six rounds.

Easy sits behind them with the radio.

The sun is rising at their backs.

Everyone whispers.

OD and Cracker look through their scopes.

OD
I see One, dead center, the tent. 
Three and Six about two o'clock.

CRACKER
I see Two at nine o'clock, Five at 
eleven o'clock and moving.

OD
Anyone spot Four?

Drewry takes out his binoculars and looks.

DREWRY
Sweet Mary, Mother of Jesus, there's 
hundreds of them.

The Cameraman gets behind OD and zooms down the rifle barrel 
and focuses on the target area.

One hundred and fifty men, most sleeping in tents or bed-
rolls, a few on guard. In the center of the camp eight men 
are performing tai-chi, graceful and uncaring.

OD
They must have gotten reinforced 
overnight. Pretty Boy, see that 
antenna? Can you reach it with your 
Thumper?

The focus comes back to the team.

Drewry looks at OD, then back through the binoculars.

PRETTY BOY
No sweat, but I'm not sure of the 
mortar. Really reaching.

DREWRY
That must be a quarter mile.

OD
More like a third of a mile, El Tee. 
Secondary targets?

CRACKER
That dude wandering around, the VC 
guide. People seem to listen to him. 
I think the dude's got his shit 
together. Lotta men down there, OD.

OD and Cracker get into position behind their rifles, prone, 
and snuggle into the dirt.

EASY
(into radio)
Thunderbird Control, this is Outrider. 
How do you read me? Over.
(beat)
I read you Lima Charlie. I have a 
fire mission. Request artillery HE. 
Stand by for coordinates.

OD and Cracker go through a silent run, making "pow" sounds 
with their lips, jerking their rifles with each faked shot.

EASY
(into radio)
Enemy in the trees, single canopy. 
Size, regiment. In my funny book I 
read Delta Oscar Lima Echo November 
Golf Foxtrot India Papa Tango Tango 
Echo. Say back.
(beat)
Affirm. Fire one smoke on my order.

They plug their ears with plastic earplugs, cigarette filters, 
whatever they have. Easy and Drewry use cartridges. OD 
hesitates.

OD
Wait one.

Everyone looks at OD.

OD
Most of those dudes ain't the ones I 
saw yesterday.

Cracker takes the binoculars and looks.

CRACKER
Must be out humping. Keeping a low 
profile for air recon?

OD
I say we don't shoot. Call in arty 
and just didi mau.

OD looks at each man in turn. Easy and Pretty Boy nod. Hammer 
shrugs. OD looks at Drewry.

DREWRY
You're the boss of the bush.

OD nods to Easy.

EASY
(into radio)
Fire one.

Pretty Boy launches five quick rounds while OD and Cracker 
get up and put their packs on. Hammer keeps his binoculars 
on the camp. Everyone gets ready to move out.

Muffled explosions sound.

HAMMER
Got 'em! Chuck's hurtin'! Smoke round. 
Drop one hundred, left fifty.

EASY
(into radio)
Drop one hundred, left fifty. Fire 
for effect. HE and Wicked Picket.

HAMMER
Shake and bake.

OD
Move it.

The team moves out, fast.

The crest the ridge and the air above them is ripped by 
artillery shells. Hammer looks up.

HAMMER
Get some.

Explosions sound in the distance.

BLACK. Sound off.

CAMERA ON. Sound on.

The team runs down slope, OD leading. He spots Cracker's 
bandana and grabs it off the branch on the run. He makes an 
immediate left off the trail and the men pass the bandana 
back to Cracker.

CRACKER
I hate it when we don't shoot. Get 
all the juices going...

BLACK. Sound off.

CAMERA ON. Sound on.

The team is stopped. They look behind them. Drewry is out of 
breath. The others are all hyper.

DREWRY
...tripped your wire?

CRACKER
Sounds like. Wait one to see if your 
helmet bounces.

Jets roar overhead. The men look up.

PRETTY BOY
Get some.

EASY
(listening on radio)
Fuck me, Alice. OP Ladybird's been 
hit again. Texas Hat's on the horn 
going apeshit.

OD
Then we make it the ville. Hammer?

HAMMER
The village. Got it, OD.

There are muffled explosions. Hammer looks back.

HAMMER
The jets are putting the damn damn 
on the dinks.

EASY
Oh, Jesus. They're getting overrun.

DREWRY
I should call in my situation report.

OD looks at Drewry and nods to Easy. Easy gives Drewry the 
handset and changes the frequency.

DREWRY
(into radio)
Stone Hombre, this is Outrider Six. 
How do you hear me?
(beat)
Same here, Hombre. Sit Rep, mission 
completed. Enemy sighted, now under 
fire, arty, HE and fly boys.

CRACKER
I just hate it when we don't shoot.

EASY
Not me. Kind of like a personal risk 
avoidance policy.

HAMMER
It's like a fucking dry hump. Gives 
me the blue balls.

CRACKER
Not that. Just... every one of those 
gooks we cut slack on might dust 
some GI.

PRETTY BOY
I can dig that.

OD
Move 'em out.

The team moves out. There is another muffled boom. Cracker 
grins at Drewry and flips his hat into the air.

BLACK. Sound off.

CAMERA ON. Sound on.

The team waits and catches their breath. Drewry reaches into 
Pretty Boy's pack and gets salt tablets. Hammer is still 
hyper. They all whisper.

PRETTY BOY
You get hungry, just chew on your 
lurp rations. Eat it dry and suck up 
some water. Not too much, you'll 
swell your belly.

HAMMER
We won't be stopping long enough to 
chow down 'til we hit the ville.

A click in the jungle. Cracker responds with a toy cricket. 
Click, click.

OD appears.

OD
Gooks ahead, across our trail. Six 
of 'em.

DREWRY
Ambush?

OD
Breakfast.

CRACKER
We go around 'em or through 'em?

HAMMER
Through 'em. Time to waste a few.

DREWRY
Can we go around?

OD
It won't be easy, and it'll be slow.

HAMMER
Let's hit 'em. It's our last gig, 
let's take back some heads.

OD looks at the others.

CRACKER
What the fuck, can't dance.

HAMMER
You want to live forever?

EASY
You know me, Breeze, anything for a 
joke.

Pretty Boy just smiles. OD looks at Drewry.

DREWRY
I can handle it.

OD sketches a diagram in the dirt.

OD
Okay. They're by the stream, about 
50 meters up. We do an "L", me here, 
Easy, Pretty Boy, and Hammer. Cracker 
at the elbow, the El Tee.

PRETTY BOY
What about MoPic?

OD
He waits back here. I start, a 
grenade, then we hit 'em. Hammer, 
one carries an RPG, you waste that 
motherfucker. Careful of the 
crossfire.

EASY
Let's do it to it.

They move out.

BLACK. Sound off.

CAMERA ON. Sound on.

The packs are on the ground. OD and Cracker lay their rifles 
on the packs. Easy tapes two magazines back to back. Pretty 
Boy arranges his grenades.

OD
We get split up, rally on the ville.

The men are stripped down and ready to move. OD looks them 
over and nods. They start to move out.

DREWRY
(to Cameraman)
Stay here, just hang loose.

The men disappear into the jungle.

The Cameraman waits for a moment, then follows them into the 
brush. He catches a few glimpses of Cracker's back.

Nothing but brush. The Cameraman moves slowly.

Suddenly, he is upon OD, Easy and Hammer. OD forces him down 
fiercely. Vietnamese voices can be heard. OD, Easy and Hammer 
crawl toward the voices.

The men wait. Easy looks scared. Hammer winks at him.

OD pulls out a grenade, then pulls the pin. He waits, pops 
the spoon, silently counts to two and throws the grenade.

An explosion, a scream, and the team is up at the same 
instant, charging and firing.

They burst into the clearing.

Two VC are prone. One kneels to fire, three are running away.

The team pours a rain of gunshots into the area. Mass 
confusion. The three running VC fall. The kneeling soldier 
is blown down.

Quiet.

Easy and Pretty Boy go on guard. OD and Cracker check bodies 
and take papers. Hammer, pumped up, starts picking up the 
enemy weapons.

OD
Hammer, guard 12 o'clock.

HAMMER
War souveniers, OD. First come, 
first... This one's alive.

Hammer aims his machine gun at the VC's head. Drewry, a little 
dazed by the shooting, wakes up and bumps Hammer aside.

DREWRY
Wait a second.

The Cameraman moves closer to catch the VC. The VC is coming 
to. Blood comes from his nose and ears. His left leg is 
wasted.

HAMMER
Let me waste him, sir. Sin Loi 
motherfucker.

Hammer aims at the VC again, but Drewry blocks him.

DREWRY
He's a prisoner. We take him with 
us.

HAMMER
Bullshit. No way.

OD
Can it, Hammer.

DREWRY
We don't murder.

OD
We kill. We just did a mess of it.

DREWRY
It's not the same, you know it.

OD looks at the VC, then at Drewry.

OD
Bring him back to the rear. We'll 
decide there.

Drewry ties the VC's hands and he and Easy drag the prisoner 
into the jungle.

DREWRY
We've decided.

OD
Move it, move it.

The team leaves the area.

BLACK. Sound off.

Sound on.

PRETTY BOY (O.S.)
Bac se. Doctor, Medic. Bac se.

CAMERA ON.

The men shoulder their gear. Pretty Boy bandages the VC's 
leg. The prisoner's mouth is now taped shut.

DREWRY
We take him back to S-2 for 
interrogation. Intelligence, that's 
what we're out here for.

Pretty Boy is very gentle with the VC.

HAMMER
Are we bad motherfuckers, or what. 
See that shit? We cleaned up. I ain't 
shitting you. Zap!

EASY
Let's have a hymn for the Major.

EASY/HAMMER/PRETTY BOY
Hymmmn, hymmmn, fuck... himmmm.

OD looks at the VC.

HAMMER
Shit, sir, who's gonna carry the 
fucker. It'll slow us down like... 
He resists and it's a bitch and a 
half. If you cold cock the sucker 
he's dead weight. He can't walk. 
We've done this before.

DREWRY
I'll carry him.

PRETTY BOY
I'll help.

Drewry and Pretty Boy strap two rifle slings to the VC's 
shoulders and legs.

OD
He goes with us.

EASY
El Tee... "Big D", we're gonna get 
you a medal. First time out.

CRACKER
Most grunts spend a whole year getting 
shot at and shit on and never see 
Chuck. You got one to take home.

OD
Let's go.

Drewry and Pretty Boy grab the VC. The team moves out.

BLACK. Sound off.

CAMERA ON. Sound on.

The team is stopped. Drewry cuts a thick bamboo stalk.

HAMMER
(looking at VC guns)
Bet I get me a hundred bucks apiece 
for these from some raggedy assed 
chairborne commando.

EASY
How about you souvenier me one, 
Hammer?

HAMMER
How about you kiss my hairy ass?

PRETTY BOY
For a little shit, ol' Luke the Gook 
is fucking heavy.

CRACKER
Don't let him fool you. They stand 
small, but fight tall. He's probably 
playing possum.

OD
C'mon, we're losing time. You know 
they're looking for us.

DREWRY
Done.

Drewry finishes trimming the bamboo and he and Pretty Boy 
slip it through the VC's bindings.

They lift the pole onto their shoulders.

BLACK. Sound off.

CAMERA ON. Sound on.

The team moves quietly and quickly through the jungle. OD is 
on point, Hammer, Easy, then Drewry and Pretty Boy carrying 
the NVA between them. Drewry no longer carries the Nagra, 
the Cameraman does.

There is a small break in the trees.

Easy spins in place and falls to the ground. A shot cracks 
the air.

Pretty Boy's right leg collapses under him and he falls. 
There is another crack.

The Cameraman runs. Cracker passes the Cameraman and grabs 
Easy by the harness and drags him to cover with OD and Hammer. 
Drewry pulls the NVA behind some cover with him.

OD and Hammer are already looking down their guns, searching 
for the sniper.

Hammer fires his machine gun.

OD
Enough! Wait 'til you get a target!

Hammer stops.

OD looks at Easy. There is a big ragged hole in the radio.

EASY
I'm okay! I'm okay!

He says it to reassure himself.

CRACKER (O.S.)
OD! Pretty Boy!

They look down the trail.

Pretty Boy is about ten feet away, trying to get up on his 
good leg. The other one is bloody at the knee. He gets partly 
up and his other leg is shot out from under him. There is a 
brief delay and another crack.

Pretty Boy screams.

HAMMER
Jesus, that guy is good. Did you 
hear that delay? Must be 500 meters.

EASY
OD, you gotta help Pretty Boy!

HAMMER
Cover me, Cracker.

Hammer tosses his machine gun to Cracker. Cracker fires into 
the jungle.

Hammer ducks down like a runner in the starting blocks and 
jumps into the clearing.

A bullet tears into Hammer's shoulder and stops him dead. OD 
and Easy grab his feet and pull him back. Crack!

Cracker stops firing.

They all look at Pretty Boy. He raises himself up by his 
elbows and tries to drag himself over to the others, inch by 
painful inch.

EASY
C'mon, Pretty Boy.

OD
You can do it, Baldwin.

Another shot tears Pretty Boy's right elbow to meat and 
slivers of bone. He screams again. Crack!

EASY
Leave him alone! Goddammit! Leave 
him alone!

Easy is about to cry.

Smack! Another bullet hits Pretty Boy in the thigh. Crack! 
Hs body jerks with the impact and he screams again, a high 
piercing wail that fades into a guttural moan.

CRACKER
Lord have mercy.

EASY
I'm giving it another try.

Easy gets up, but OD grabs him by the shoulder and pulls him 
back.

OD
No.

OD
Get me FDC. Maybe we can get some 
fire support.

EASY
Radio ain't working.

DREWRY
Look.

Pretty Boy is still alive. He reaches slowly behind him with 
his left hand and gets a grenade from his canteen cover. He 
tries to loosen the pin with one hand.

EASY
Pretty Boy, no! OD, do something!

OD
Cracker, give me your harness.

EASY
Pretty Boy, wait!

OD
Hold on, Baldwin.

Pretty Boy stops. OD links his belt with Cracker's, then 
Drewry's. He creeps toward the edge of the clearing.

OD tosses the lengths of belt toward Pretty Boy. The end 
lands about a foot from his head.

Pretty Boy reaches for the belt and a bullet tears through 
his palm, throwing his arm in an arc. Crack! Pretty Boy 
whimpers.

EASY
(crying)
Oh, goddamn. Fuck. Shit. Cocksucker. 
COCKSUCKER!

Pretty Boy's face lies in the dirt. He painfully turns his 
head so he can see the team. He wets his lips.

PRETTY BOY
(whispering)
OD, please.

Smack! A bullet hits him in the hip. He screams again.

DREWRY
(watching OD)
What are you doing?

EASY
OD, no, don't. OD.

OD takes Drewry's .45 from his holster and pulls back the 
slide and makes sure it is loaded. Easy watches through his 
tears. The slide snaps forward with an ominous click.

OD aims at Pretty Boy's head.

Pretty Boy looks at the gun and OD and smiles.

CRACKER
(softly)
OD, not in the head.

BOOM!

Pretty Boy's body jerks with the impact of OD's bullet. He 
is dead.

Silence. Then the sound of Easy crying softly.

BLACK. Sound off.

CAMERA ON. Sound on.

Pretty Boy's body is on a poncho. Cracker takes the dog tag 
from around his neck, untapes them and puts one in Pretty 
Boy's mouth and tapes it shut. He does it gently, as if it 
were a ceremony.

Cracker pulls the poncho over Pretty Boy's face. Easy cries 
off screen. He snaps the poncho shut, one at a time. The 
sound of the snaps is very loud.

OD bandages Hammer's shoulder while Hammer remains on guard.

Easy shivers uncontrollably a couple of times and looks at 
his dead radio.

Drewry looks at the NVA. OD finishes with Hammer and walks 
over to Drewry.

OD
Gut shot. Looks like your gook's 
broke, El Tee.

DREWRY
Will he make it to Brigade?

OD
No. We ain't taking him.

DREWRY
What?

OD
We got a choice. We carry your gook 
or Pretty Boy. We can't take both.

DREWRY
But... he's dead.

Silence. The team looks coldly at Drewry.

HAMMER
Americans never leave their dead 
behind.

Drewry looks at the team, the NVA, Pretty Boy, the NVA again.

DREWRY
You're not going to kill him.

OD
No, you are, El Tee.

Everyone looks at OD. His face is filled with anger.

DREWRY
You can't make me.

OD
We're leaving Luke the Gook. If his 
people get to him before he dies he 
can tell them all about us. We're 
almost out of ammo, one of us is 
hurt, everything. Intelligence, El 
Tee, intelligence.

Drewry reaches reluctantly for his gun.

OD
No gun, El Tee. Noise discipline. 
Your knife makes it personal.

OD takes Drewry's bayonet and slaps it into his hand. The 
NVA stares up at Drewry, his eyes wide with fear and pain.

OD
It's time you were blooded, El Tee. 
Your own private KIA.

Drewry looks down at the NVA.

DREWRY
He's going to die anyway.

OD
Maybe. C'mon, El Tee. No, wait a 
second.

OD reaches into Drewry's shirt and pulls out the NVA's papers. 
OD's eyes burn with cold, hard fury. Cracker reaches out to 
stop him, but OD jerks away.

OD
You might want to know who you're 
killing.
(reading)
His name's Truong, Nguyen Truong. 
He's 19. Got a family, looks like, 
wife, cute kid.

OD throws the papers onto the NVA's chest as he reads them. 
The last is a black and white photograph of a woman and child.

OD
C'mon, El Tee, what're you waiting 
for?

OD's voice has an edge of hysteria.

CRACKER
OD.

HAMMER
Kill the fucker, El Tee.

Drewry raises the bayonet and stabs the NVA clumsily in the 
chest. He pulls it back out quickly and turns away.

OD
Damn, El Tee, can't you even kill a 
man right?

The NVA's chest rises with shallow breaths and blood pumps 
from the wound.

OD bends over the NVA with his Gerber knife and shoves it up 
under his ribcage and slices the heart. The NVA dies.

OD wipes the blade on the NVA's sleeve. He cuts the ropes 
from his hands and feet and slices the tape off his mouth. 
Blood gushes out.

OD drapes the NVA flag over the dead man's face and kneels 
there for a moment, almost like he is praying.

Cracker puts a gentle hand on OD's shoulder.

CRACKER
OD, we better move out. I'm going to 
destroy the long rifles, Pretty Boy's 
gear.
(to Hammer)
Give me a Willy Peter.
(beat)
OD?

OD nods and gets up slowly.

OD
Better melt down the radio, too.

Easy takes off the radio and gets a white phosphorous grenade 
from his pack.

Drewry sits on the ground looking at his bayonet.

BLACK. Sound off.

CAMERA ON. Sound on.

The team is stopped, all out of breath, facing outward on 
guard. Easy and Drewry have been carrying Pretty Boy's body 
between them, the pole through the poncho. OD's jaw muscles 
flex as he stares into the jungle.

HAMMER
How much farther to the ville?

OD
Three, four klicks. Seven-niner 
degrees. Remember that, Hammer, seven-
niner.

HAMMER
I got it, OD, no sweat. Anyhow, I 
just follow you.
(beat)
Damn, I'd like a cold brew.

EASY
I could use some dew. No, no, hash. 
Quick toke of hash, dreamland. Grass 
makes me paranoid.

Easy laughs. It is forced. OD looks at him and almost smiles.

OD
You're one dinky dau ditty bopper.

EASY
And I'm short. 25 and a wake-up. I'm 
so short I could parachute off a 
dime.

HAMMER
I wish I had a cold brew.

CRACKER
Wish in one hand, shit in the other, 
see which hand's full first.
(beat)
What kind of job you gonna get us in 
the rear, OD?

OD looks at Drewry, who is self-absorbed and quiet.

OD
I don't know, some ghost job. One 
thing I do know, it'll be air-
conditioned.

Their conversation is strained.

CRACKER
With my own little refrigerator.

HAMMER
For cold brew.

OD
There's a slot open at the rec room. 
We'll sent Easy to Thailand on R&R 
so he don't get into trouble before 
he takes that freedom bird back to 
the Real World.

EASY
Can you do that for me, OD? I'd dig 
it. Love that Thai pussy, cheap, 
too. Me and Pretty Boy... What about 
Hammer?

CRACKER
Hammer's too tough for the rear.

HAMMER
Got muscles in my shit.

EASY
Bites the heads off animal crackers.

CRACKER
Last time I was in the rear I called 
home on the MARS line. Got the wife 
on the horn, she didn't believe it 
was me calling from the Nam. After 
we talked about that we didn't have 
shit to say to each other. Dead 
silence. Not word one.

BLACK. Sound off.

CAMERA ON. Sound on.

The Camera looks over OD's shoulder as he consults his 
compass.

OD
The tree, the big pine.

OD pockets the compass and Hammer hands him his CAR-15.

OD starts walking. The Cameraman stands to one side and lets 
OD and Hammer walk by him. Drewry and Easy follow with the 
body.

Suddenly, out of the trees, walk three NVA.

The NVA freeze, as startled as the Americans.

Drewry and Easy drop Pretty Boy. It's like a signal. The 
team fires. The NVA fire back, but it's too late.

The Cameraman hits the ground as the team charges the NVA. 
Drewry hits the ground, too, but he faces the rear, gun ready.

BLACK.

Gunfire.

The Cameraman lifts the Camera. OD and Easy come out of the 
brush. Hammer stays behind and fires a slug or two into each 
of the NVA bodies.

OD is furious. He heads over to Drewry, who is getting off 
the ground. OD is holding his stomach and blood leaks through 
his fingers.

OD
What the fuck are you doing?! Don't 
they teach you shit in fucking OCS?! 
You attack, fucker! Attack!

DREWRY
I was guarding our rear! That's what 
I was taught. In an ambush... Fuck 
it!

OD
That was Pretty Boy's job.

The fire in OD is suddenly gone. He looks off screen and 
runs. The Camera follows.

Cracker is laying on the ground, three bloody holes in his 
chest.

CRACKER
It hurts, Godalmighty, it hurts. 
Hurts like nothing ever did, OD.

OD
Pretty Boy! Morphine!

Cracker grabs OD's sleeve and pulls him closer.

CRACKER
OD, Pretty Boy's dead.

Cracker's words are soft and gentle. OD chokes up.

OD
Cracker, don't you dare die on me, 
motherfucker. I need you, you're my 
friend. Frye?

Easy and Hammer join OD. There is blood pouring down Hammer's 
leg.

CRACKER
No sweat, GI. Three slugs ain't 
nothing. Guys catch worse and live, 
I seen it. Funny, I counted them 
when they hit. One, two, three. I 
just fell back real slow, thinking, 
"Shit, I been hit three fucking 
times". AK?

OD
I guess.

Cracker lifts his head and looks at the foaming blood pumping 
from his chest.

CRACKER
Jesus, looks like a sucking chest 
wound, OD. Get something to plug it.

Easy rips the plastic cover from a bandage and OD places it 
over the wound.

HAMMER
I got a morphine vial.

Hammer hands the morphine to OD. OD prepares it.

HAMMER
We gotta move it, OD. The gunfire, 
the gooks must have heard it.

OD
You're gonna be okay, Cracker. We 
been through some shit together, 
huh, Frye? We'll get through this 
one.

CRACKER
Three slugs ain't nothing, I seen 
guys a lot worse.

OD pulls up Cracker's sleeve to inject the morphine.

CRACKER
Save it, OD, don't hurt no more. 
Can't feel a fucking thing.

Cracker dies.

OD bends over Cracker's body, tears dripping onto Cracker's 
face.

OD tips his head back to scream, but all that comes out is a 
tortured rasp.

BLACK. Sound off.

CAMERA ON. Sound on.

The bodies of Cracker and Pretty Boy lay next to each other 
under a tree. OD marks the spot on his map.

OD
We'll send a chopper back.

DREWRY
Americans never abandon their dead.

No one pays any attention to Drewry.

The team moves out.

BLACK. Sound off.

CAMERA ON. Sound on.

Drewry is cleaning his M-16 carefully, methodically. Easy is 
bandaging OD's stomach wound, wrapping duct tape around his 
middle. He watches OD's face, trying not to hurt him.

Easy finishes and hands the tape to Hammer. Hammer tapes his 
thigh while he remains on guard.

HAMMER
Gonna be a beaut of a scar.
(beat)
I been thinking, I think I got Pretty 
Boy's luck. You figure that happens? 
You know, that luck just visits 
someone and then up and jumps onto 
someone else?

He grins and looks at everyone. There is a bloody patch near 
his ear.

The smile fades as he looks into the jungle. He thinks 
something over, chewing his cheek. He looks into the Camera.

HAMMER
In case... if I don't... If my luck 
jumps, you know...
(beat)
I want my folks, especially my old 
man, my dad, to know I did a damn 
good job. Maybe I wasn't any hero, 
but I did the best job I could.

Hammer turns away, embarrassed. He looks back into the jungle.

HAMMER
But I got Pretty Boy's luck, I won't 
worry none. You know, I could almost 
feel it come onto me when Pretty Boy 
got...

There is silence.

OD gets up, wincing with pain. Easy watches him, feeling the 
same pain. Drewry watches them all, deep in thought.

EASY
Best I can do.

OD
It'll work.

EASY
OD, I'm scared. We're in deep shit.

OD
Stevie Wonder could see that, Easy.

Easy restlessly, unconsciously, works the bolt of his carbine, 
jacking the rounds out of the magazine.

EASY
No, I mean, really, my shit's gotten 
all flaky. I'm not cut out for this 
shit no more. You gotta cut me some 
slack, OD, I can't hack it no more.

Easy is intently serious, but on the verge of tears, trying 
to express his sincerity through his panic.

EASY
I don't wanna die. I didn't give a 
rat fuck before, but I do now. Maybe 
I'm too short. OD, you gotta cover 
my ass.

Tears fall from Easy's eyes. He sniffs and wipes his nose 
with the back of his hand. He looks like a little kid.

OD
You out of pills?

EASY
(smiling)
Can't get nothing by you, OD.

Easy sees Hammer looking at him.

EASY
Don't look at me like that, 
motherfucker. I'll kill you.

HAMMER
(softly)
It's okay, Easy.

OD hugs Easy, but gingerly because of his wound.

OD
I'll take care of you, Easy, I will. 
I ever lie to you?

EASY
No sweat. I'm just a little fucked 
'cause of Pretty Boy and Cracker, 
you know.

Easy takes a deep breath and pulls back from OD.

EASY
Hey, OD, what's the difference between 
fish and meat?

OD
What?

EASY
If you beat your fish it'll die.

OD smiles and playfully slaps Easy on the cheek.

OD
Dinky dau motherfucker. Now pick up 
that brass.

Easy looks down and sees the cartridges and he's surprised. 
He picks them up.

DREWRY
Easy, here. Maybe this'll make you 
feel more secure.

OD and Easy look at Drewry. Drewry has taken off his flak 
vest. He offers it to Easy. Easy takes it and shrugs off his 
LBE to put it on.

Drewry and OD look at each other.

DREWRY
I think I should take over now, you're 
incapacitated.

OD
Like shit.

DREWRY
I don't want to argue. You'll hardly 
be able to walk with that wound.

OD is angry. He takes a step toward Drewry, refusing to show 
the pain. Easy tries to help, but OD pushes him away with 
Cracker's shotgun.

DREWRY
See. I'll take point.

OD
And get us all greased. No way, GI.

OD looks at Easy and Hammer for their reaction. Easy's fear 
is evident. Hammer gives him an "I don't give a shit" look.

OD
Hammer'll walk point. And we move 
now and fast. We got a pickup to 
meet.

HAMMER
Out-fucking-standing. You're one 
hard corps dude, OD.

EASY
And you're one silly, gung-ho fucker, 
Hammer.

HAMMER
Yeah, no shit. Like Cracker says... 
said... if you're gonna be a bear, 
be a grizzly.

Hammer moves out first. The Cameraman waits for OD, who is 
leaning on Easy. OD motions the Cameraman ahead of him.

DREWRY
I'll bring up the rear.

They follow Hammer.

OD
Watch out for booby traps, stay off 
the trails. Stop every few meters 
just to listen.

HAMMER
I can handle it, OD, cut me some 
slack.

Hammer talks without stopping his progress through the jungle.

HAMMER
I ain't no cherry. I... Oh, shit.

BOOM!

Hammer is blown backward by the blast from a mine.

The Cameraman dives for the ground. BLACK.

The Cameraman starts to get up. Hammer's body is close to 
the lens, face and chest torn by shrapnel. His mouth is open 
and his wide, dead eyes stare at the Camera.

The Cameraman scuttles away from the body. Easy bends over 
Hammer.

EASY
Oh, Hammer, I'm sorry, man. I'm sorry.

Drewry is suddenly standing over Hammer's body. He picks up 
the M-60.

DREWRY
He's dead. C'mon.

Drewry leads the way. OD and Easy walk past the Cameraman, 
looking at Hammer's body. Easy drops his rifle. OD picks it 
up.

The Cameraman gets up and hurries after the others.

BLACK. Sound off.

CAMERA ON. Sound on.

Drewry, OD and Easy are crouched at the base of a tree on 
the edge of a small, burned village. There is nothing moving, 
just smoke curling into the sky from the burned huts.

OD
Let's check it out. Choppers'll be 
here soon.

OD gets up to lead the way, but Easy has to help him stand. 
Drewry leads the way, his M-16 slung, carrying Hammer's M-60 
at the ready.

They enter the village slowly and cautiously. Easy drags his 
carbine behind him.

There are bodies of old men and women here and there, a few 
children. There is a dead chicken, a dog. Drewry bends over 
one of the bodies. Mortar craters pock the ground.

OD
Careful, El Tee, booby traps.

Drewry backs away from the body.

The three men stick close together, carefully checking each 
body.

DREWRY
I wonder who did this, us or them.

OD
Does it make a difference?
(beat)
We wouldn't leave this much standing. 
Must be Chuck's work.

OD tries to walk forward by himself as Drewry and Easy 
continue checking bodies.

OD
Keep an eye out. Chuck's crowding 
our ass.

OD collapses. Easy and Drewry run over to him.

DREWRY
(to Camera)
Put that thing down and give me a 
hand.

BLACK. Sound off.

CAMERA ON. Sound on.

A lean-to made from a poncho has been propped over OD. Easy 
watches him. Easy's tears have dried, but he is on the edge. 
Maybe over.

OD
I'm not saying all gooks look the 
same.
(coughing laugh)
It's just... I go to Sin City, all 
the gook faces look like some gook I 
shot. You know, spooky like. Ghosts.

OD is silent a long moment. Easy turns away. Drewry looks at 
Easy with concern.

EASY
How about that morphine, El Tee?

DREWRY
No, we have to keep him conscious 
for the chopper.

EASY
(joking feebly)
How about for me?

Drewry smiles.

OD
That ain't counting the other dead 
men. GI's. The ones I didn't kill.

OD jerks his head up, suddenly alert, and looks at Drewry.

OD
I'll be okay, El Tee. Don't worry 
about me, just keep an ear out for 
the chopper.

EASY
OD? Am I gonna die?

OD
Who'd want to kill a doofus ditty 
bopper like you?

Drewry looks at his watch.

DREWRY
Half hour to pickup. The NVA will 
try something.

EASY
Chuck ain't shot his wad yet.

OD
We better prepare, set some fire 
lanes. You got a red smoke, El Tee?

DREWRY
No.

OD
You pop a red smoke for a hot LZ. We 
gotta let the choppers know Chuck's 
waiting, too. Here.

OD hands Drewry one of his smoke grenades.

Drewry looks at the grenade.

EASY
Don't sweat it, El Tee. Hell, what 
you want to do, live forever?

OD tries to get up. A spasm of pain runs through him and he 
falls back down.

The Cameraman runs over to help OD.

BLACK. Sound off.

CAMERA ON. Sound on.

Easy and the Cameraman are inside a hut. OD sits in the 
doorway with the M-60, his back to the Camera.

Across the village, Drewry is getting into position with the 
M-16 and CAR-15.

EASY
How you doing, OD?

OD
Can't feel my legs, but it don't 
hurt much if I don't move too quick. 
Should be hearing the choppers soon.

EASY
One good thing about the Nam. You 
hear a chopper, you know it's ours.

There is a moment of silence.

OD
Here they come.

Drewry starts firing.

OD fires.

Bullets rip through the hut. Easy and the Cameraman hit the 
ground.

There is another sound that breaks through the gunfire.

EASY
Choppers! Pop smoke, El Tee! Pop 
smoke!

Drewry readies the smoke grenade, but before he can throw it 
another one lands in the middle of the village. Green smoke.

EASY
Oh, shit!

Drewry looks up at the sky and runs into the clearing toward 
the green smoke grenade. OD increases his fire to cover him. 
Bullets tear up the earth around him, but Drewry manages to 
kick the green smoke grenade away.

Drewry dodges for cover and throws the red smoke grenade.

The sound of helicopters increases and the firing of mini-
guns is heard.

The helicopters fire rockets. There are sounds of battle all 
around the village. Easy crouches down, his hands over his 
head.

The ground fire ceases. There is the sound of helicopters 
and the mini-guns firing in spurts.

The sound of helicopters is very loud. Easy is crying and 
hugging the ground.

Drewry runs across the village and into the hut.

DREWRY
C'mon, move it! Move it! The choppers!

Drewry manhandles Easy out the door and toward a helicopter 
hovering above the ground.

The Cameraman pauses next to OD, who fires sporadically into 
the jungle. OD looks up.

OD
Move it, troop.

The Cameraman follows Drewry and Easy.

More gunfire sounds. The door gunner fires into the jungle. 
The door gunner is hit and he slumps in his retaining sling.

The pilot waves Drewry and the others on.

They get to the chopper and Drewry pushes Easy aboard. Drewry 
looks back and sees OD sprawled in front of the hut, trying 
to get up. OD falls.

EASY
OD!

Drewry runs back for OD.

The Cameraman puts down his Camera inside the chopper and 
runs after Drewry.

Easy mans the chopper machine guns and fires into the jungle.

Drewry and the Cameraman lift OD and drag him toward the 
chopper. OD screams in pain.

The Cameraman is hit and falls, but he gets up and continues 
toward the chopper.

Easy is screaming as he fires.

They reach the chopper and manhandle OD inside. The Cameraman 
is hit again and he screams. Drewry steps onto the skid.

The Cameraman is hit again and falls back, dead.

The chopper lifts as Drewry, hanging onto the skid, reaches 
hopelessly for the Cameraman. He finally climbs inside.

The helicopter lifts out of sight of earth. Only sky.

BLACK.

Sound off.

   THE END

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
