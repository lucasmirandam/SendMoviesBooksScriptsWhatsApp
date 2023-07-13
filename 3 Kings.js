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







THREE KINGS





a screenplay by
David O. Russell
Story by
John Ridley and David O. Russell




                                             Draft Date: 6/22/98




FADE IN:

EXT. IRAQI DESERT - DAY

WIDE ANGLE POV of wide open desert, flat grey sky.

THE CAMERA is running forward, toward a big sand berm in the
distance. There are O.S. sounds: SOLDIER'S EQUIPMENT
CLANKING, BOOTS RUNNING ON SAND. Hear a MAN's BREATHING.

The back of his helmeted head and his uniformed shoulders
APPEAR in the BOTTOM of the FRAME, running. This is TROY
BARLOW, Sargeant, U.S. Army, 25 years old. On his helmet is
a photo-button with a photo of a newborn baby.

Suddenly, on the sand berm 100 meters ahead, an IRAQI SOLDIER
stands. Troy stops in his tracks, out of breath, and stares
at the figure on the berm. The Iraqi flutters a white flag
over his head, then puts it down and picks up a gun. Troy
turns around, we see his face for the first time.

                    TROY
          Are we shooting people, or what?

                    SOLDIER #1 (O.S.)
          Are we shooting?

                    TROY
          That's what I'm asking you.

                    SOLDIER #1 (O.S.)
          What's the answer?

                    TROY
          I don't know the answer. That's
          what I'm trying to find out.

PAN TO THREE SOLDIERS 40 yards away -- ZOOM IN --

SOLDIER #1 unwraps a stick of gum and puts it into his mouth.
TWO OTHER SOLDIERS put out their hands and get pieces of gum.

PAN TO 100 yards away -- ZOOM IN -- SOLDIER #2 stands with
his head tilted back while SOLDIER #3 looks into his eye.

                    SOLDIER #3
          It looks like a grain of sand, but
          I don't know how I'm gonna get it
          out--

CAPTAIN VAN METER, 37, crab-like, is in the far distance.

                    CAPTAIN VAN METER
          If they surrender, don't shoot, if
          they don't surrender, then shoot.

PAN BACK TO Troy, faces the CAMERA, CLOSE, scared, then turns
back to the dune and runs a few yards.

Stops and stares, raises his rifle.  He aims at the figure on
the horizon.

POV THROUGH RIFLE SCOPE

The Iraqi soldier in the cross hairs. Hear Troy's breathing,
loud, as he pulls trigger slowly.  Slow motion RIFLE sound.

Silent pause. The Iraqi soldier stands there, then his neck
explodes like a sack of blood. Silent, except for sound of
Troy's LOUD BREATHING as he walks toward the big berm, and up
to the crest. All we hear are his footsteps and breathing.

                    SOLDIER #3 (O.S.)
          That guy just shot a towel head.

                    SOLDIER #4 (O.S.)
          Bullshit.

YOUNG IRAQI SOLDIER

lies on the ground. A piece of his neck is blown away. He is
rasping, a flag is clasped in one hand; a rifle in the other.
He is looking up at Troy, who looks down at him.

                                         SMASH CUT TO

FANTASY - INT. HOSPITAL, TORRANCE, CAL. - DAY

A WHITE BABY GIRL, covered in blood and placenta, is pulled
from between the legs of Troy's WIFE, DARLENE. THE NURSE
holds the SCREAMING BABY aloft, proud and happy.

                    VIG (V.O.)
                 (deep southern accent)
          Congratulations, you got yourself
          a rag head, my man.

EXT. IRAQI DESERT - DAY (PRESENT)

The rasping Iraqi dies.

PAN TO CONRAD VIG, 18 or 20, wiry, intense, deep south,
wearing Army issue glasses, out of breath.

                    VIG
          Dag.

Troy turns, upset, murmurs "I Get Around" by the Beach Boys.

                    TROY
          "Gettin' bugged drivin' up and
          down the same old strip, gotta
          find a new place where the kids
          are hip, I get around --"

                    SOLDIER #1
          I didn't think I'd see anyone get
          shot over here.

                    VIG
          It looked like the guy's head blew
          three feet into the air --

FANTASY SEQUENCE IN SLOW MOTION

The Iraqi's head pops three feet into the air.

BACK TO THE SCENE

                    SOLDIER #1
          Bullshit, that's not what happened.

                    VIG
          I said it looked like that
          happened, but then we got here and
          he was still breathing.

                    SOLDIER #2
          Oh, my God, it's just like
          'Predator,' where the guy, the
          black guy --

                    SOLDIER #3
          Carl Weathers. His arm gets shot
          off.

                    VIG
          And when it hits the ground, his
          hand keeps on firing.

SCENE FROM 'PREDATOR'

Carl Weathers arm is shot off and keeps firing.

BACK TO THE SCENE.

                    SOLDIER #5
          Take my picture.

                    VIG
          Do you still want to sell pictures?

                    TROY
                 (distracted monotone)
          For twenty.

                    SOLDIER #5
          Twenty dollars, man, what's the
          meaning of life?

                    TROY
          You're lucky you got to see
          anybody shot in this war.

                    VIG
          War's been over five days, Jim,
          ain't gonna be much more of this.

                    SOLDIER #5
          Bobby, take my picture.

He holds the camera out.

                    SOLDIER #4
          If he shot the guy, it's up to him.

                    SOLDIER #5
          It's not like he shot a fucking
          deer. It's the enemy.

                    VIG
          Troy's enemy, yours for twenty.

Soldiers get their cash out, Troy takes it.

                    TROY
          Accept no substitute, this is the
          real thing, oh, Jesus [winces] --

                    VIG
          What's wrong?

                    TROY
          I got a really bad headache all of
          a sudden--

SOLDIER #7 bends next to the corpse and holds his camera out
at arm's length.

                    VIG
          No free pictures, motherfucker.

Vig shoves the soldier away and the two wrestle as they roll
down the sand berm.

"I Just Want to Celebrate" by Rare Earth comes on LOUD.

Troy walks away holding his temple in pain; SOLDIERS gather
to stare at the dead Iraqi, getting their cameras out.

EXT. IRAQI DESERT ROAD - AMERICAN SOLDIERS IN COMBAT GEAR

dance on a road in the desert. "I Just Want to Celebrate"
BLARES as the CAMERA DOLLIES THROUGH the soldiers.

DOLLY INTO TENT TOWN, past bare chested soldiers pumping free
weights; jogging in formation; sunbathing on big water
storage mattresses; DOLLY OUT OF THE TENT TOWN, past a
soldier taking a makeshift foxhole desert bath, past a dead
Iraqi on the road, a chopper hovering in the distance, to
MORE DANCING SOLDIERS, as music continues --

                    BILL SMITHSON (O.S.)
          Spirits are high and the music is
          boisterous as these young troops
          celebrate -- Shit. Let me try that
          again.

DOLLY AROUND the dancing soldiers to see: hundreds of
stripped Iraqi soldiers lying face down in undershorts.

                    BILL SMITHSON (O.S.)
          Spirits are high and the music is
          fucking motherfucking sand in my
          eye --

PAN PAST CNN REPORTER BILL SMITHSON, 45, in white safari
jacket over Desert Storm fatigues, cleaning his eye; nearby
a cluster of ROWDY SOLDIERS who are mugging into the camera.

DOLLY TO ARCHIE GATES, 55, Lieutenant Colonel, Special
Forces, wearing sunglasses, talking to HAVICHON, a FRENCH
Special Forces Captain on CRUTCHES with a broken leg.

                    ARCHIE GATES
          Is that what you got from this
          experience? A goddamn watch?

                    HAVICHON
          Ees a great fucking watch.

Close up: portrait of a sheik on a Rolex.

                    ARCHIE GATES
          There's 700 million in gold out
          there and you're fucking around
          with a watch?

                    HAVICHON
          Bon dieu de merde, that's a lot of
          gold, man.

                    ARCHIE GATES
          One bunker of gold and we retire
          from this horseshit, Hashy--

                    BILL SMITHSON
          Gates.

                    ARCHIE GATES
          Just a second. The problem, Hash,
          is how do you find it?

                    HAVICHON
          Like one sowsan bunker out sair --

                    ARCHIE GATES
          Maybe two sowsan bunker out sair,
          Hash, how do you find Saddam's
          bullion?

                    BILL SMITHSON
          Could I have some help over here,
          for Chrissakes?

                    ARCHIE GATES
          My goodness, Bill, what seems to
          be the problem?

                    BILL SMITHSON
          I'm trying to do a story here and
          the fucking sand is blowing in my
          face --

                    ARCHIE GATES
          You want me to stop the sand? I
          can't do anything about that.

                    BILL SMITHSON
          No, you're too busy talking about
          the fucking gold, which by the way
          makes a great story if you'd get
          me a goddamn lead on it --

                    ARCHIE GATES
          I think the Saddam story goes more
          for the jugular, journalistically
          speaking, I mean, he's still here
          beating the shit out of his
          country.

                    BILL SMITHSON
          Would you just be my guide and not
          my fucking producer? You're my
          guide.

                    ARCHIE GATES
          OK, go do your celebration story,
          Bill.

SMASH TO: Rowdy soldiers mug for Smithson's camera.

                    SOLDIER #5
          We're number one.

                    SOLDIER #6
          Waaaa-hooooo--

                    BILL SMITHSON
          You're heroes.

                    SOLDIER #6
          We're heroes.

                    SOLDIER #7
          Give war a chance.

                    BILL SMITHSON
          You've exorcised the ghosts of
          Vietnam with a clear moral
          imperative --

                    SOLDIER #5
          Is that what we did?

                    BILL SMITHSON
          Where the hell are you going?

Archie is walking off with CATHY DAITCH a young reporter.

                    ARCHIE GATES
          I'll be right back.

                    BILL SMITHSON
          I don't want you helping other
          reporters, goddamn it.

                    SOLDIER #1
          We kicked ass.

                    SOLDIER #6
          We didn't get rid of fucking
          Saddam --

                    SOLDIER #8
          Which totally sucks a big dick.

                    SOLDIER #6
          Those people are getting reemed --

                    SOLDIER #7
          Bullshit, we saved Kuwait, man.

                    BILL SMITHSON
          Who's getting reemed? The Shiites?

                    SOLDIER #8
          I don't know who they are, man --

                    SOLDIER #6
          We got big firepower but we ain't
          saving them --

                    SOLDIER #5
          Fuck that, we liberated Kuwait.

                    SOLDIER #1
          Weehaaaaaaa.

Five soldiers chant Lee Greenwood's anthem, "Proud to Be An
American" into Smithson's camera --

                    SOLDIERS (CHANT)
          'If tomorrow all the things were
          gone that I worked for all my life
          and I had to start again with just
          my children and my wife--'

WIDE, HIGH ANGLE DOLLYING CRANE OF BIG TENT CITY

                    SOLDIERS (CHANT OS)
          'I'd thank my lucky stars to --

Dissolve to POV from chopper - night - of twinkling lights of
vast U.S. Army camp below.

"Proud to Be An America" blasts. CHOPPER PILOTS sing off key.

                    CHOPPER PILOTS
          '--be livin' here today because
          the flag still stands for freedom
          and they can't take that
          awayyyyy --'

INT. LARGE ARMY TENT - NIGHT

"Proud To Be An American" BLASTS on as

Troy, wearing a checked Arab headdress is paraded on
shoulders. He holds up a Coke can in one hand and a Bud can
in the other, like torches.

                    TROY
                 (screaming the song)
          And I'm proud I to be an American,
          where at least I know I'm free.
          And I won't forget the men who
          died, who gave that right to me.
          And I'd gladly stand up; next to
          you and defend her still today.
          Cause there ain't no doubt I love
          this land, God bless the U S A --

Soldiers scream and go nuts.

Beer is sputtered from soldiers' mouths.

"I Can't Do Nothing For Ya Man" by Public Enemy blasts.

WALTER WOGOMAN, 19, quiet, tall, Southern operates two
parallel boom boxes like a DJ.

A Soldier rapidly peels down one Bruce Lee poster on top of
another, like a flip-book animating Bruce Lee. Vig wearing
a bandage across his nose from the fight on the berm does a
series of cheerleader-like karate arm movements.

Soldiers whip brightly painted toy footballs at Troy. He
whips the balls back, is tackled over a table, crashes.

Soldiers -- Vig, Walter, others -- scream viscerally as the
music blasts.  Two soldiers fire their fingers like pistols
at Troy on the floor screaming like a fierce animal.

                    TROY
          Rahhhhhhhhhhhhhh.

Vig screams into Troy's face at point blank range.

                    VIG
          Rahhhhhhhhh.

                    TROY
          Rahhhhhhhhhhhhh.

                    CAPTAIN VAN METER
          Goddamn it, where the fuck did
          this beer come from we gotta take
          more Iraqis prisoner tomorrow.

EXT. IRAQI DESERT - DAY

WIDE SHOT -  HUNDREDS OF IRAQIS walking in the desert, hands
raised above their heads.

                    TRANSLATOR (MEGAPHONE)
          Hasnala shi aluno quibaan --

                    CAPTAIN VAN METER
          We will not hurt you. Lay down
          your weapons, get on the ground --

TWO IRAQIS with bad face wounds get medical help.

FIVE IRAQIS

on their knees, plead for mercy in Arabic as they disrobe.
They grab and kiss Troy Barlow's hand, as he holds his M-16
on the begging Iraqis.

                    TROY
          It's cool, no one's gonna hurt
          you --

Vig whips out his big Thunder 5 pistol and points it in their
faces.

                    VIG
          Did you rape and torture anybody
          in Kuwait, Abdul?

The Iraqis wail for mercy. Troy pushes Vig's pistol away.

                    TROY
          You're making them all hysterical.

Vig points the big pistol at an OLDER IRAQI OFFICER who is
the only one not taking his clothes off.

                    VIG
          Take your fucking rags off, take
          this off. No comprende English,
          motherfucker?

                    TROY
          What is your fucking problem,
          Conrad?

                    VIG
          I'm trying to git him to obey the
          spirit of things but he won't take
          his rags off.

                    TROY
                 (leans down)
          Sir? We need you to disrobe like
          all the other towel heads, OK?

The Officer does not move, Troy punches his head once. Vig
and Walter forcibly pull the Iraqi Officer's pants off. Troy
takes out a bottle of aspirin, eats two.

                    VIG
          Whoa, it's a freaky thing, Troy.

Vig points to the Officer's bare buttocks, where a rolled up
piece of paper is sticking out --

                    TROY
          There's a document in that guy's
          ass, Conrad.

                    VIG
          That's the freaky thing.

                    WALTER
          Do you think he ate it?

                    TROY
          It wouldn't come out perfect like
          that if he ate it.

Troy pulls out a latex glove out of his pocket.

                    TROY
          Go get it, Private.

                    IRAQI OFFICER
          Hasa man timal!

The Officer screams in protest and is forcibly subdued by
Walter as Vig, wearing the glove, slowly pulls the rolled up,
greasy paper from the Officer's ass -- Troy looks disgusted.

                    TROY
          Open it up.

                    VIG
          You only gave me one glove.

                    TROY
          I'm sorry I don't have another,
          but you gotta open it up. That's
          how the chain of command works.

Vig takes out a U.S. Army pen and uses it to unroll the
greasy paper and lie it flat on the sand.

CLOSE UP - THE RUMPLED PAPER

is a handwritten map, with scant Arabic writing, a few spare
roads, numbers, and three small boxes.

                    VIG
          What the hell is that?

                    TROY
          Important enough to squeeze your
          cheeks for.

INT. TELEVISION TRUCK - DAY

In the half-light of dozens of TV monitors playing Iraqi news
from around the world, Archie Gates madly humps CATHY DAITCH
on a lawn chair which is slamming into the monitors.

                    CATHY DAITCH
          You are a trained warrior, trained
          warrior, trained warrior, Jesus
          Christ, Colonel!

TV monitors crash to the floor as she climaxes. Archie lays
on the floor catching his breath, stares at a sideways
monitor of soldiers celebrating; she stands, dresses.

                    CATHY DAITCH
                 (breathless)
          What's Bill got?

                    ARCHIE GATES
          Just the celebration story.

                    CATHY DAITCH
          That's it?

                    ARCHIE GATES
          That's it --

                    ARCHIE GATES
          How about you? Did you find
          anything?

                    CATHY DAITCH
          It could be another bullshit lead
          but I need you to help me find a
          guy who might have something on
          the gold --

                    ARCHIE GATES
          Who's the guy?

                    CATHY DAITCH
          Somebody Barlow, maybe in Company
          B--

                    ARCHIE GATES
          Barlow.

                    CATHY DAITCH
          Got a map out of a prisoner's head.

                    ARCHIE GATES
          Out of a prisoner's head?

                    CATHY DAITCH
          Or his ear, or his ass, or his
          dick, and they got like a fifty
          page full-color mini atlas of
          Saddam's bunkers --

                    ARCHIE GATES
          Out of a guy's dick?

The door explodes open and two MPs grab Archie, pants around
his ankles, and drag him from the truck.

EXT. TELEVISION TRUCK - DAY

Archie is faced by an OLDER TWO STAR GENERAL (GENERAL PYE),
a YOUNGER ONE STAR GENERAL (GENERAL HORN).

                    GENERAL PYE
          This is not the way we service the
          media, Major. Stop her --

WHIP PAN TO Cathy runs away as she dresses, MPs grab her.

                    MP
          You are in violation of code 37D,
          grinding Major Gates.

They let her go. Soldiers in gas suits laugh.

                    ARCHIE GATES
          You guys have no manners
          whatsoever --

Bill Smithson runs up, agitated.

                    BILL SMITHSON
          I told you he was with her --

                    GENERAL PYE
          We're handling this, OK?

The MP pushes Smithson away.

                    BILL SMITHSON
          I wanted help with the gold story,
          and he took off on me--

                    ARCHIE GATES
          That's a lot of bullshit.

Smithson is walked away. Archie pulls his pants up.

                    GENERAL PYE
          I give you a prestige job in the
          media war of the century and the
          guy feels neglected.

                    ARCHIE GATES
          I'm helping him plenty with his
          big celebration feature -- Where
          did you get this fucking star?

Archie suddenly reaches out and grabs the corner of General
Horn's collar, with its one star.

                    GENERAL HORN
          They made me a general, pal.

                    ARCHIE GATES
          For what? I don't even know what
          we did over here, but Schwartzkopf
          gets a book deal, you get a star,
          Powell gets to be fucking
          president--

                    GENERAL HORN
          Are you high? This is a huge win
          for us.

                    ARCHIE GATES
          Running the press pool's a real
          big win for me.

                    GENERAL PYE
          You want us to kill more Americans
          to occupy Iraq?

                    ARCHIE GATES
          I'm just saying it's ironic,
          that's all.

                    GENERAL HORN
          What the fuck is ironic?

                    ARCHIE GATES
          We got the biggest army in the
          world here but Iraq still has the
          d-bag dictator in power, but
          that's how the world works I guess.

                    GENERAL PYE
          Just take care of Smithson and
          maybe he'll hook you up to consult
          on movies.

                    GENERAL HORN
          It's either that or be a security
          guard when you retire.

                    ARCHIE GATES
          Fuck you, Ron.

                    GENERAL HORN
          I'm a general now, you can't say
          fuck you to me.

                    ARCHIE GATES
          OK, sir, but there's another thing
          I'd like to say, if you don't mind.

                    GENERAL HORN
          Go right ahead, Colonel.

Archie leans wild-eyed into Horn's face and whispers --

                    ARCHIE GATES
          Fuuuuuck yooouuuu, Ronnnnn.

INT. CAPTAIN'S TENT - DAY

SPLASH -- rubbing alcohol is poured over Vig's extended hand
by DOC ELGIN, 25, stocky, black, no nonsense.

                    TROY
          You've washed your hands like a
          thousand times, Conrad.

                    VIG
          Lord knows what vermin live in the
          butt of a dune koon.

                    DOC
          Why do you let this cracker follow
          you around?

                    TROY
          He's a good kid.

                    DOC
          He's a wall-eyed cracker.

                    TROY
          He's got no high school, man, he's
          from a group home in Jackson --

                    DOC
          I don't give a shit if he's from
          Johannesburg. I don't want to hear
          dune koon or sand nigger from him
          or anybody.

                    VIG
          Captain uses those terms.

                    TROY
          The point is, Conrad, 'towel head'
          and 'camel jockey' are perfectly
          good substitutes.

                    DOC
          Exactly.

                    VIG
          I'm sorry, man, it's a little
          confusing is all.

                    DOC
          What can I do for your headache?

Doc Elgin opens a case full of pill bottles.

                    TROY
          Got any Vicadan?

                    DOC
          All gone. How about Caffergot?

                    TROY
          Excellent. Let's translate my
          Iraqi ass map.

Troy pops the pills, Doc pulls a document from a folder and
opens it as he hovers over a table with Troy and Vig.

                    TROY
          Van Meter's at the big pow wow?

                    DOC
          We're cool for at least three
          hours, but keep Walter on the door.

Walter stands by the door wearing night vision goggles.


                    TROY
          Would you take those fucking
          things off?

                    WALTER
          I never got to use night vision.

                    TROY
          They don't work during the day and
          stand outside the tent.

Doc unfolds a big aerial-photo map of the Iraqi desert, next
to the rumpled ass map.

                    DOC
          These are definitely Saddam's
          bunkers near Karbala.

                    TROY
          What's inside?

                    DOC
          According to Intelligence --
          Picasso, Armani, Rolex, Mercedes,
          Sony you name it --  Kuwait was
          Muslim Beverly Hills and Saddam
          sacked it.

                    VIG
          Man, get an awesome stereo system
          with like ten BOS speakers  --

                    TROY
          Silver Lexus convertible.

                    DOC
          Lexus doesn't make a convertible.

                    TROY
          Yes, they do.

                    DOC
          Infiniti has one coming.

                    TROY
          You're wrong.

                    DOC
          You can't get a car home from here
          anyway.

                    TROY
          If I get enough Rolexes I could
          buy one when I got home.

                    VIG
          One gold Rolex, I get a very fine
          split level outside Jackson.

                    TROY
          My one problem, see, is the risk
          here --

                    DOC
          What risk? We already did the
          risk. I signed up last year to
          bank some computer training--

                    TROY
          Tell me about it.

                    DOC
          Next thing I know I'm sitting here
          waiting to get hit by a Scud. I
          put my life on the line for what
          purpose I'm not sure, and now the
          good Lord puts this map in my
          path --

                    TROY
          He could put a land mine in your
          path if we try to find this
          place --

                    DOC
          You're safe with me.

                    TROY
          Cuz you have a galactic plutonium
          forcefield.

                    DOC
          I don't talk about it. But I do
          have a ring of Jesus fire.

                    TROY
          You have a ring of Jesus fire.

                    DOC
          I was fire baptized.

                    VIG
          I was baptized in water.

                    DOC
          I'm fire baptized.

                    TROY
          I don't even know what water
          baptism means.

                    DOC
          For those who understand, no
          explanation is necessary; for
          those who don't, no explanation
          will suffice. You can benefit from
          my Jesus ring if you do right by
          me, you got that?

                    TROY
          OK.

                                         CUT TO

POV WALTER'S NIGHT VISION --

BLURRY IMAGE OF ARCHIE WALKING right up to Walter.

                    WALTER
          This tent is restricted --

                    ARCHIE GATES
          Get the fuck out of my way.

                    WALTER
          May day, may day --

                                         CUT TO

Troy and Doc scramble to put the maps under the table.

                    ARCHIE GATES
          Good afternoon.

He walks up to them.

                    ARCHIE GATES
          Would this be the proctology tent?

                    DOC
          Yes, sir, I mean, no, sir.

                    ARCHIE GATES
          Then maybe it's the urology tent.

                    TROY
          Captain's at a staff meeting.

                    ARCHIE GATES
          That's OK, I'm not looking for a
          proctologist or a urologist I'm
          looking for Sargeant Barlow.

Archie fixes his gaze on Troy, walks up, reaches under the
table, and takes the map, smells his fingers.

                    ARCHIE GATES
          You're on the path to truth when
          you smell shit, isn't that what
          they say?

                    VIG
          I don't recognize you, sir. Are
          you in this division?

                    DOC
          He's not in this division. He's
          Special Forces.

Troy and Vig are impressed.

                    DOC
          He's the guy taking Bill Smithson
          around.

                    ARCHIE GATES
          And you would be the Three Wise
          Men, right, Mappy, Slappy, and
          Pappy -- 

He points in order to Doc, Vig, and Troy, who picks up his
family photo button.

                    ARCHIE GATES
          That leaves Cappy outside.

                                         CUT TO

Walter, outside the tent, practices blocking positions.

                    WALTER
          Damn. Freeze. Do not pass. Hold
          it, freeze. Stop. Freeze.

                                         CUT TO

                    VIG
          His name is Walter.

                    ARCHIE GATES
          Did you good soldiers present this
          map to Captain Van Meter?

                    TROY
          Not yet.

                    ARCHIE GATES
          Then I'll take it to him.

Troy stands and grabs the map.

                    TROY
          We'll take it to him. Sir.

                    ARCHIE GATES
          It won't do either of us any good
          then, will it?

                    TROY
          He's our commander, sir. We'd have
          to tell him you took it.

Both Troy and Archie hold the map, staring at each other.
Everyone is tense.

                    ARCHIE GATES
          It could be nothing but a sandy
          love letter from one Eye-raqi to
          another --

                    TROY
          It's a series of bunkers near
          Karbala.

                    ARCHIE GATES
          Maybe.

                    TROY
          Not maybe, definitely. Recon
          photos match the map.

                    ARCHIE GATES
          May I look at the goddamn map?

Troy lets go. Archie holds the map up to the light. He then
pours some of Doc's rubbing alcohol on the map, and holds it
to the light again. He puts the map on the table, turns the
light off and clicks on an infra-red flashlight he pulls out.
A completely different map appears in green markings.

                    VIG
          Dag.

                    ARCHIE GATES
          That's what makes Rangers badass,
          we get the best flashlights.

They stare at the new map in the infrared glow, captivated.

                    ARCHIE GATES
          Still looks like a series of three
          bunkers in three villages. A bit
          farther to the west.

                    DOC
          Seventy-five klicks north.

                    ARCHIE GATES
          More like 65.

                    TROY
          Much closer to Karbala.

                    ARCHIE GATES
          Leave at dawn, back by lunch, not
          a big deal. Of course --

He turns the overhead light back on.

                    ARCHIE GATES
          -- there could be nothing inside
          but starving Arabs and stolen
          watches, but I think it's worth
          checking out, even if I have to do
          it with clueless reservists like
          you.

They look at him.

                    ARCHIE GATES
          I mean, I could take the map, but
          you could talk, it starts to
          become a pain in the ass for me,
          so we'll do the gold together.

                    DOC
          What gold?

                    ARCHIE GATES
          You don't even know what's inside
          these bunkers, do you?

                    VIG
          Rolexes.

                    ARCHIE GATES
          Rolexes are swell, but I'm talking
          about Kuwaiti bullion.

                    VIG
          You mean the little cubes you put
          in hot water for soup?

                    ARCHIE GATES
          No. Not the little cubes you put
          in hot water for soup.

                    TROY
          Gold bricks.

                    ARCHIE GATES
          5 kilos each, $50,000 in today's
          market.

                    VIG
          For one gold brick?

                    ARCHIE GATES
          I'm sure Mr. Hussein has divided
          his bricks. into many different
          hiding places, but just one hiding
          place should be easy to take, and
          that would be enough to get us out
          of our day jobs. Unless the three
          kings are in love with their day
          jobs.

Dolly: Troy, Doc, Vig stare at Archie.

FANTASY - EXT. LOS ANGELES - DAY

SILENT - Troy walks in white shirtsleeves, dark tie, pulling
a cart with a salesman's black case on it over a curb.

FANTASY - INT. OFFICE

SILENT - Troy kneels at a disassembled photocopier, tools and
parts all around him, opens a bag of toner, which spills
black dust all over his white shirt

FANTASY - INT. KENNEDY AIRPORT

SILENT - Doc is a red cap. He lifts suitcases from the trunk
of a black Mercedes while a rich white father (mother and two
small children behind) tells him to be careful.

FANTASY - EXT. MISSISSIPPI WOODS

Vig fires his pistols with fury at a series of stuffed
animals on logs -- blowing the stuffed animals to
smithereens.

                                         BACK TO

                    VIG
          I don't really have a day job.

                    TROY
          What about the risk of taking a
          Humvee and all that --

                    ARCHIE GATES
          We do this shit all the time.

                    VIG
          What else did you do, sir?

                    ARCHIE GATES
          In Panama we went sailing in
          Noriega's boats.

                    TROY
          Wow.

                    ARCHIE GATES
          In Vietnam, we got a big gold
          Buddha, which we unfortunately
          dropped in a swamp by accident.

                    DOC
          What about Iraqi soldiers?

                    ARCHIE GATES
          Let's see. They had the shit
          bombed out them for two months,
          they're deserting all over the
          place, and they've completely
          surrendered to us. That's a beaten
          army in every sense of the word.

He looks at them.

                    ARCHIE GATES
          You are now under my command,
          salute --

They salute him. He straightens Troy's salute.

                    ARCHIE GATES
          What's the guy's name outside?

                    TROY
          Walter.

                    ARCHIE GATES
          Cappy.

Walter comes in.

                    ARCHIE GATES
          You will take Bill Smithson on a
          special mission to find the gold
          story, but it will be a
          meaningless ride that lasts all
          morning and takes him nowhere near
          Karbala, is that clear?

                    WALTER
          How am I gonna get out of the
          company?

                    ARCHIE GATES
          Your captain will be detained by
          a friend of mine.

                    VIG
          Is it true you got to take an
          enemy ear to be Special Forces?

                    ARCHIE GATES
          No, but if you talk to anybody
          about this, I'll kill you.

Vig smile fades as he looks into Archie's cold stare.

EXT. DESERT CAMP - WIDE SHOT - DAWN

Three figures in fatigues crouch low to the ground as they
run to a motorcycle and side car. Walter kickstarts the
motorcycle. PACO the cameraman sits behind Walter with a
video camera. Walter's face is painted beige and brown with
camouflage spots, so is Bill Smithson's, as he crouches in
the sidecar and dramatically gives Walter the thumb's up.

EXT. VAN METER'S TENT - DAY

Cathy Daitch stands next to a cameraman filming Van Meter
while another man holds a boom over Van Meter's head.

                    CAPTAIN VAN METER
          How about if I lean on it, like
          this?

                    CATHY DAITCH
          Very dashing.

                    CAPTAIN VAN METER
          Does it look too posed?

                    CATHY DAITCH
          Would you ever stand like that?

Van Meter tries a couple of poses.

                    CAPTAIN VAN METER
          I think I might, Jesus, this feels
          stupid.

                    CATHY DAITCH
          You'll get used to it. First
          question: did you dream as a boy
          you'd be commanding an infantry
          company in a desert war?

                    CAPTAIN VAN METER
          As a boy, I wanted to be either a
          veterinarian or a CIA
          sharpshooter --

EXT. DESERT - MOVING HUMVEE - MORNING

Bach's Gloria, from Mass in B Minor plays as

Pow pow pow, Vig fires his big pistol into the desert.

                    DOC
          Pull.

Troy throws a painted football into the desert. Doc fires the
M-16 and blows the ball to pieces.

Archie drives and moves his hand to the Bach.

The convertible Humvee is loaded with weaponry and gear, a
mounted 60 mm machine gun, a Bart Simpson doll on the grill.

The Humvee rolls into the vast desert, littered with burned
out tanks, black craters, overturned vehicles, no people.

                    DOC
          Pull.

Troy throws another ball, Doc blows it away.

                    TROY
          Pull.

Doc throws a football from the moving Humvee, Troy fires a
pistol and misses the ball as it bounces to the desert.

                    TROY
          I gave you a better arc, Doc.

                    DOC
          What are you talking about?

                    TROY
          I threw the ball in a higher arc
          that was easier for you to hit.

                    DOC
          Bullshit.

                    VIG
          Blacks make better receivers than
          quarterbacks.

                    TROY
          Stop speaking right now, Conrad.

                    DOC
          Warren Moon is an excellent
          quarterback.

                    VIG
          The Oilers have gone nowhere
          behind Warren Moon.

                    DOC
          Randall Cunningham.

                    TROY
          Don't get down in the mud with
          him, Doc.

                    VIG
          The Eagles will never get to the
          Superbowl with him.

Archie moves his hand to the Bach.

                    DOC
          Doug Williams took the Redskins to
          the Superbowl and won, OK?

                    TROY
          We can all agree there are many
          excellent black quarterbacks.

Doc throws a ball. Vig fires his giant pistol twice and
misses.

                    DOC
          Hit it, you sorry-assed cracker --

                    VIG
          This gun's too heavy to shoot
          one-handed like a movie star --

Vig fires: blam, blam, bam. The Humvee stops abruptly.

                    ARCHIE GATES
          Shut the fuck up.

They sit in embarrassed silence; the joyous Bach choir plays.

EXT. DESERT DAY

No more music. Troy, Doc, and Vig stand spread apart. They
wear white anti-gas suits and hold pistols and drink from
plastic water bottles. A bomb crater is nearby, a wrecked,
burned truck to the side, a SKINNY COW meanders.

                    ARCHIE GATES
          When we pull up to the bunker, the
          approach is something called
          violence of action, which is
          standard in special operations. It
          means your movement is so fast and
          decisive that the guards are
          frozen and we haven't fired a
          single shot.

Troy kicks at something in the sand -- and a decayed human
arm springs out, attached to a body with a half-rotted face.

                    TROY
          Shit.

                    ARCHIE GATES
          We dropped a lot of bombs out here
          and we buried some guys alive --

                    VIG
          What do you mean?

                    ARCHIE GATES
          Bradleys with big plows cut
          through the berms and covered the
          trenches --

FANTASY - A HUGE PLOW

on the front of a Bradley pushes sand right TOWARD THE CAMERA

                    ARCHIE GATES (O.S.)
          They had the option to surrender,
          but they chose to die for their
          country.

DOLLY INTO five terrified Iraqis, eyes open with fear, as the
sand rolls over them.

BACK TO THE SCENE

                    ARCHIE GATES
          Let's rehearse.

EXT. DESERT - LATER

They sit in the Humvee and hold their pistols ready.

                    ARCHIE GATES
          We'll say the cow is the primary
          guard outside the bunker. We pull
          up fast, and stop short.

                    TROY
          Got it.

                    ARCHIE GATES
          And -- Go.

The cow stares as the Humvee pulls up to it fast. Troy and
Doc jump out, pistols drawn, flank the cow --

The cow steps back, and explodes.

Troy and Doc stand splattered with cow entrails. The cow's
head lands with a thud on the hood of the Humvee.

                    ARCHIE GATES
          Who's hurt?

                    DOC
          It's all cow, I think.

                    VIG
          Yeah, it's all cow.

He picks cow entrails off himself.

                    DOC
          They said this was swept for mines.

                    ARCHIE GATES
          Mines are forever, Doc. They never
          get all of 'em.

                    TROY
                 (low murmur)
          'If you could, help me Rhonda,
          help help me Rhonda --'

Archie watches Troy.

                    ARCHIE GATES
          Did you guys see any action at all?

                    VIG
          Only night bombing on CNN, except
          for Troy's supercool shooting that
          guy in the neck--

Archie takes Vig's BIG PISTOL and EMPTIES THE SHELLS and puts
them into his pocket.

                    ARCHIE GATES
          Is sepsis cool?

                    VIG
          What's sepsis?

                    DOC
          Infection of the blood.

                    ARCHIE GATES
          As in septic tank, because that's
          what happens when a bullet hits
          you. The lead tears in there --

FANTASY - INT. STOMACH MUSCLE AND TISSUE

Slow motion, a bullet pierces flesh, makes a cavity --

                    ARCHIE GATES (O.S.)
          Makes a cavity of dead tissue that
          closes down in a convulsive motion
          typical of all gunshot wounds. The
          cavity fills up with bile and
          bacteria and you're fucked.

Bile fluid fills the cavity.

BACK TO THE SCENE

                    ARCHIE GATES
          But other than a wound that
          blinds, paralyzes, or castrates,
          the worst wound I've ever seen is
          something called tension pneumo
          thorax --

                    DOC
          I heard something about that --

                    VIG
          Tension pneumo what?

                    ARCHIE GATES
          A bullet, or a blade doesn't kill
          you, but makes a little hole in
          the lung, so every time you
          breathe, a little air leaks into
          the chest cavity, which starts to
          fill up like a balloon. And that
          balloon starts to push your organs
          to the side, crushing your lung,
          your liver, your heart. Your own
          breathing kills you, one breath at
          a time -- kinda like a job you
          can't stand or a bad lie you once
          told.

                    DOC
          That's not fatal, they can stop it.

                    ARCHIE GATES
          If you know how to make another
          little hole in the chest to let
          the air out, just like you would
          with an overinflated tire.

They look at Archie, scared by this.

                    TROY
          Can we play the Beach Boys when we
          go in?

                    DOC
          The goddamn Beach Boys.

                    TROY
          I'm not ashamed of liking the
          Beach Boys. It calms me down.
          Better than Mozart.

                    ARCHIE GATES
          Bach.

EXT. DESERT - DAY - HIGH WIDE SHOT

'I Get Around' by The Beach Boys BLASTS as the Humvee speeds
along. A big American flag flaps in the breeze from a pole at
the back of the Hummer.

The Humvee drives fast into the central square of a small
village of low, sand-colored stucco buildings and shanties.

Vig drives as the Humvee speeds around the town square,
zooming past scared Shiites in black robes, a few skinny
dogs, a few bewildered Iraqi soldiers.

                    VIG
          Where's the bunker?

                    ARCHIE GATES
          It should be right --

He studies the map and points to a decayed green building.

                    ARCHIE GATES
          There.

Vig jerks the wheel right.  They drive fast.

                    ARCHIE GATES
          No -- there.

Archie points left. Vig jerks the wheel left, drives straight
toward a low cement building with two Iraqi soldiers in front.

Iraqi soldiers look scared as the Humvee drives up, like it's
going to hit them, and stops, flag fluttering in the breeze.

Vig stands and speaks into a megaphone.

                    VIG
          We are the Army of the United
          States of America. We are here to
          protect you. Remain calm.

Troy and Doc leap from the Humvee with pistols drawn and
their free hands held up in a 'halt' sign. The TWO IRAQI
GUARDS look stunned as Troy and Doc simply take their machine
guns and put the Iraqis face down on the ground. Troy and Doc
pull out plastic twist hand-cuffs, as used in urban riots.

Archie bounds forward holding up a thick white document.

                    ARCHIE GATES
          Orders from President Bush, step
          aside.

Troy finishes handcuffing one of the Iraqi soldiers, as a
gaunt mother, with a baby in her arms, opens her blouse,
revealing her small breasts. Other peasants gather.

                    IRAQI MOTHER
          No milk. Baby milk.

Troy looks shocked until Archie suddenly pushes him past the
Iraqi mother and to the door of the bunker, which Doc holds.

INT. BUNKER - DAY

Five IRAQI SOLDIERS look disoriented and scared as they hold
their hands up in the air.

                    ARCHIE GATES
          Do not panic.  Step outside --

EXT. BUNKER - DAY

                    VIG
                 (into the megaphone)
          We are here for your protection
          and safety.

Iraqi women and children kiss Vig's feet.

The five Iraqi soldiers exit the bunker with their hands
raised, and the starved Shiite civilians spit and throw
stones at them while 'I Get Around' keeps playing.

                    VIG
          Ya'll be cool now, this is the
          U.S. Marines in charge here.

INT. STAIRWELL - BUNKER

Archie runs down the narrow stairs of the bunker, followed by
Troy and Doc.

INT. BASEMENT OF BUNKER - DAY

Doc lashes an Iraqi's hands behind his back and cuffs him.

Troy shoots the door lock with his pistol.  Then backs up and
gives it a running shoulder. The door doesn't budge.

                    TROY
          Shit.

He holds his shoulder in pain.  Archie kicks the door
repeatedly.  Troy joins him, it finally flies open.

                    TROY
          Freeze.

Troy is embraced by an Iraqi soldier, about 25.

                    FRIENDLY IRAQI
          I am love United States of
          Freedom. I am hate Saddam.

Troy tries some karate moves, jerking his elbows to dislodge
the Iraqi from the bear hug --

                    TROY
          Ya -- ya -- ha --

Doc points his pistol in the Iraqi's face.

                    DOC
          Let him go.

The Iraqi throws his hands in the air.

                    FRIENDLY IRAQI
          No problem, my friend.

Archie goes to a series of WOODEN CRATES the size of file
cabinets, where Doc helps Archie take off his back pack.
Archie pulls out a bolt cutter and a pneumatic saw, both
attached to a small air tank - and opens the crate, which is
filled with hundreds of Kuwaiti passports.

                    FRIENDLY IRAQI
          You look for the chemical weapon?

                    TROY
          No. We look for the gold.

They use the power tools to open the second crate -- also
filled with hundreds of passports.

                    ARCHIE GATES
          Where's the gold?

                    FRIENDLY IRAQI
          They move the gold.

Archie pulls out the infrared map and shows it to the Iraqi,
who says nothing.

                    DOC
          Kill him.

                    ARCHIE GATES
          Not yet.

                    TROY
          Kill him now.

They point their guns. It's a show. Archie holds the map.

                    ARCHIE GATES
          Where?

                    FRIENDLY IRAQI
                 (points to map)
          This bunker. I'll take you.

EXT. BUNKER - DAY

FOUR NEW IRAQI SOLDIERS, armed with rifles, run from the far
side of the square and start shooting.

30 rock-throwing Shiite scatter at the gunfire. TWO MEN fall
to the ground as they are shot.

                    CHILD
          Ma-Maa.

Vig looks terrified as the crowd scatters, leaving him alone
as he points his big unloaded pistol. The soldiers point
their rifles as they come towards Vig, when suddenly two of
them look to the side and shout.

                    ARMED IRAQI SOLDIER
          Ganan azwar!

PAN TO a shiny METAL TANKER TRUCK three hundred yards out,
bearing down fast on the village square.

The soldiers open fire on the truck.

INT - THE CAB OF THE TANKER TRUCK

The Shiite riding shotgun fires back, as the windshield
shatters on the truck. The driver is dead. The other Shiite
grabs the wheel.

BACK TO THE SCENE

Archie bursts out the front door, followed by Troy and Doc.
They freeze as --

The tanker truck careens sideways toward them, 50 feet away.

An Iraqi soldier fires a grenade-launcher off his shoulder
which explodes the container on the back of the truck --

Milk explodes everywhere, gushing around the wheels of the
Humvee and the feet of Archie and the others.

Shiite women with plastic containers and ceramic jugs rush
out from alleys and try to scoop up the milk. Other Shiites
crowd the Humvee and climb in.

Iraqi soldiers drag two bodies from the cab of the truck.
Troy and Doc point their guns in the crowd.

                    ARCHIE GATES
          Move. Out of the way.

Archie shoves Shiite peasants out of the Humvee.

                    SHIITE WOMAN
          Hos-pital.

She holds a SHIRTLESS BOY of 7 with a bandage around his
entire chest. Doc pushes her off the Humvee.

                    SHIITE MAN
          America help.

He grabs Archie. Troy shoves the man off the vehicle. Vig
starts the engine.

                    ARCHIE GATES
          Give them MRE's.

Troy rips open a large duffel and starts handing out Army
Meal Rations to the crowd -- Vig leans on the horn.

The friendly Iraqi jumps into the rear of the Hummer as it
starts to pull away. Archie shoves the friendly Iraqi out,
and he lands on his ass in the swarm of chasing Shiites.

Archie and Troy look back at the debacle as they pull away.

EXT. DESERT MARSH - DAY

Raging oil fires, 50 feet high -- billowing black smoke.
Walter drives the motorcycle through the smoke. Paco the
Cameraman sits on back. Bill Smithson sits in the sidecar.

                    BILL SMITHSON
          This is boring, I already did this
          damn story, goddamn it, where the
          hell is the gold?

                    WALTER
          How about rare pelican migration
          out by the marshes?

                    BILL SMITHSON
          What?

                    WALTER
          These brave pelicans are migrating
          in spite of massive pollution --

                    BILL SMITHSON
          Fuck that. Stop the bike.

Walter keeps driving.

EXT. DESERT - DAY

Doc gets out of the stopped Humvee, shaken, and walks around.

                    DOC
          I'm all right, I'm cool.

He lies down and breathes heavily with a hand on his chest.
Archie gets out and walks around, agitated, clearly upset.

                    ARCHIE GATES
          What is the art of war, because it
          is not for killing people, it's a
          stratagem to give life to many by
          killing the evil perpetrated by a
          few -- I am burning up in this
          goddamn suit --

He angrily takes off his gas suit; boxers and sweat-drenched
green T-shirt underneath.  Troy and Vig guzzle water.

                    ARCHIE GATES
          Discriminating use of violence as
          a last resort, and even then,
          carefully, surgically, that's what
          I learned, that's what I'm good
          at. But now they underestimate all
          this, bomb the same towns for six
          weeks  and still leave the scumbag
          dictator to starve and butcher his
          own people.

The others, all drenched in sweat, take off their gas suits.

                    TROY
                 (agitated)
          I don't even know what happened
          back there. Civilians were
          spitting on their own soldiers;
          the soldiers were shooting the
          civilians and ignoring us --

                    DOC
          They already surrendered to us.
          Now they're after Shiites.

                    VIG
          What exactly is a Shiite?

                    ARCHIE GATES
          They make up the ethnic majority
          but they don't have any power.
          When Bush pulled us out, he told
          them to start a civil war to bring
          Saddam down, and now they're
          getting wasted.

                    VIG
                 (totally puzzled)
          The civil war? How could it be the
          civil war?

FANTASY - STOCK FOOTAGE: UNION SOLDIERS FIGHT DIXIE REBELS

BACK TO THE SCENE

Vig looks puzzled.

                    TROY
          It's a war inside the same
          country, Conrad. That's a civil
          war.

Archie chucks each of them MARINE UNIFORMS without name tags
which everyone puts on, except Troy.

                    ARCHIE GATES
          Put these on, we are now U.S.
          Marines.

                    TROY
          I can't do this, OK? Because I've
          got a family and if I shit in a
          bag the rest of my life cuz I got
          shot after the war's already over
          that would be pretty fucking
          stupid, wouldn't it?

                    ARCHIE GATES
          What is the most important thing
          in life?

                    TROY
          What the fuck are you talking
          about?

                    ARCHIE GATES
          What is it?

                    TROY
          Did you hear anything I said.

                    VIG
          Respect is the most important.

                    ARCHIE GATES
          Too dependent on other people.

                    DOC
          Money.

                    ARCHIE GATES
          Comes and goes, man.

                    TROY
          What is this bullshit?

                    DOC
          What's the most important thing?

                    ARCHIE GATES
          Necessity. That's what dictates
          what will happen at any given time
          in life. Necessity says we don't
          spend American lives taking out
          Saddam,  which leaves Saddam the
          necessity of taking out the
          Shiites so he can stay in power,
          which leaves us to take the gold.

                    TROY
          We could've been shot.

                    ARCHIE GATES
          Did you notice they didn't touch
          us?  We decimated their entire
          country. They're scared shitless
          of us. [looks at his watch]
          There's time to try another
          bunker. I say we go.

                    DOC
          Let's do it.

                    VIG
          Rock and roll.

                    TROY
          OK. And I'll be wearing
          fashionable kevlar. As a necessity.

He pulls a vest out of the Humvee.

EXT. MARSH

The motorcycle is stopped by the marsh. Siberian pelicans fly
all around. Many lie dead on the ground.  Bill Smithson paces
with a cell phone.

                    BILL SMITHSON
                 (on cell phone)
          I'm at some goddamn marsh, all
          we've seen are Russian cranes.

                    WALTER
          Pelicans.

                    BILL SMITHSON
                 (on the cell phone)
          I think the Saddam story goes more
          for the jugular, journalistically
          speaking, Al. Let's grow some
          balls and do the Shiite uprising,
          for Christ's sake.

Bill Smithson closes the cell phone.

                    BILL SMITHSON
          We're going north to do the
          Shiites.

                    WALTER
          I thought the gold was the hot
          spot.

                    BILL SMITHSON
          Karbala's the new hotspot, and
          I'm driving.

                    WALTER
          Military regulations, you cannot
          drive.

Smithson mounts the bike. The cameraman sits on back. Walter
points his pistol at Smithson.

                    WALTER
          Get off the vehicle, sir.

Smithson starts the bike.

                    WALTER
          Don't make me shoot you, sir.

The bike pulls out, leaving him behind. He runs after the
bike and jumps into the side car.

EXT. COMPANY B CAMP - DAY

Captain Van Meter strolls, handling an M-16.

                    CAPTAIN VAN METER
          The M-16 is the basic weapon of
          the infantry. During Vietnam, it
          was fully automatic.

                    GENERAL HORN (O.S.)
          Doug?

                    CAPTAIN VAN METER
          Yes, General.

                    GENERAL HORN
          What the fuck are you doing?

                    CAPTAIN VAN METER
          Well, I'm giving an interview to
          CBS.

                    GENERAL HORN
          Do you have authorization?

Van Meter pulls out a folded paper and gives it to the
general, who looks at it.

                    GENERAL HORN
          No.

                    CAPTAIN VAN METER
          No?

                    GENERAL HORN
          Who gave you this?

                    CAPTAIN VAN METER
          Major Gates.

                    GENERAL HORN
          Archie Gates gave you this? Jesus
          Christ, Doug, come with me.

                    CAPTAIN VAN METER
          I don't get to do the interview?

                    GENERAL HORN
          No, you don't get to do the
          interview.

EXT. DESERT - DAY

                    ARCHIE GATES
          Faster.

Bach's 'Gloria' plays loud as Vig drives and Archie stares
straight ahead as the Humvee picks up speed.

EXT. ANOTHER VILLAGE OUTSIDE KARBALA - DAY

The Hummer zips into a bigger village piazza with an old
fortress at one end, and races straight to the entrance to an
underground bunker in the middle of the piazza.

                    ARCHIE GATES
                 (into the megaphone)
          United States Marine Corps. Put
          your weapons down.

Troy and Doc leap out, hold pistols out at arm's length as
they accost TWO IRAQI SOLDIERS pointing rifles at them.

                    TROY
          Drop your weapon.

                    DOC
          Put it down.

Troy and Doc shove the two Iraqis face down in the dirt and
cuff their hands behind their backs.

                    VIG
          Don't make me smoke your ass,
          Abdul.

INT. SECOND IRAQI BUNKER - DAY

Archie runs down a narrow cement corridor, pistol held at
arm's length, white document in the other hand; followed by
Troy and Doc, pistols drawn.

An IRAQI SOLDIER steps into the corridor at the far end, sees
Archie coming, looks terrified, and runs back. Archie and
Troy run right past the scared Iraqi. Doc comes third,
slamming the Iraqi face down and cuffing him.

Archie kicks a door open and goes in, followed by Troy.

INT. INNER ROOM, SECOND IRAQI BUNKER - DAY

Archie and Troy burst in, pointing their guns aggressively.

                    TROY
          Freeze.

A large room; walls lined with shelves full of brand new
appliances: blenders, cuisinarts, CD players, small TVs. A
huge portrait of Saddam Hussein covers one wall.

A television plays a rerun of 'Happy Days' in Arabic.

Another TV: CNN's first reports of the Rodney King beating.

An IRAQI CAPTAIN sits in a chair in front of the TVs.

TWO IRAQIS sit loading rifles. Two others sit at a radio.

They all jump to their feet when Archie bursts in, except for
the officer watching 'Happy Days' and CNN..

                    ARCHIE GATES
          By order of the cease-fire signed
          in Safwan, March 3, the United
          States Marines hereby confiscate
          all material stolen by Iraq from
          the Emirate of Kuwait --

One of the rifle-loading Iraqis tries to run. Troy heads him
off with his pistol --

                    TROY
          Down.

The other rifle-loader stands looking scared.

                    IRAQI RIFLE-LOADER
          Isnam panan fatwa aznir --

WHIP PAN TO Doc, who turns the shortwave radio off, pushes
the TWO IRAQIS to the ground. One goes peacefully, the other
resists; Doc smacks him in the side of the head with his
pistol, which fires accidentally. Everyone grabs their heads
and ducks -- except Archie.

                    ARCHIE GATES
          Never hit anyone with your pistol,
          Doc.

                    DOC
          Sorry about that.

Archie is offered a cuisinart by the Iraqi Captain.

                    IRAQI CAPTAIN
          For wife.

                    ARCHIE GATES
          I've been divorced three times.

Troy has one rifle Iraqi on the ground, but the second is on
his knees, putting a CD into a mini-stereo.

                    RIFLE IRAQI #2
          Newest and best.

                    TROY
          No, newest and best has better
          noise reduction.

The Iraqi looks puzzled.

                    TROY
          Less distortion. Get down on the
          floor, OK?

He pushes the man face down, cuffs his hands. Olivia Newton-
John's "I Wanna Get Physical" PLAYS.

                    TROY
          This is bad music, understand?
          It's bad for you.

                    DOC (O.S.)
          Hey --

WHIP PAN TO the resistant Iraqi struggles to break away and
Doc punches him in the head twice, the Iraqi starts crying.

                    ARCHIE GATES
                 (to Iraqi Captain)
          Where's the gold, Captain? Tell us
          so we don't have to kill you.

                    TROY
          There's another room over here.

PAN TO Troy pointing to a narrow door in a corner of the
room. Archie kicks it open.

INT. INNER ROOM - DAY

A bound, naked SHIITE MAN IN GLASSES, clean shaven, sits on
the floor in a five foot square shallow metal box, four
inches deep, filled with water. There is an electric cable
going into the water. The naked Shiite in glasses shakes.

Troy watches Archie walk over and yank the cable out.

                    IRAQI SARGEANT
          I am just do my job, buddy.

Archie pauses, then gives the Sargeant a backhand that sends
him flying to the corner. Archie steps on the man's wrist,
takes the pistol out of his hand. Troy watches.

Archie turns and sees TEN SHIITES across the room: 3 MEN, 3
WOMEN, 4 CHILDREN. The men and women are bound and GAGGED.

Archie steps toward the Shiites, but the INTERROGATOR, 35,
also a captain, steps in his way.

                    INTERROGATOR
          These Shiite. Iraq problem. United
          States is out now.

Archie stares at the INTERROGATOR with contempt.

                    INTERROGATOR
          We take them outside, so it don't
          bother you, OK, sir? Kata fanam.

The disarmed Iraqi Sargeant NODS and opens a small rear door
and pushes the Shiites out. Archie walks back to the main
room and points his pistol in the Captain's face.

                    ARCHIE GATES
          Take us to the basement.

EXT. FRONT OF BUNKER TWO - DAY

Vig keeps the TWO CUFFED IRAQI GUARDS on the ground at gun
point as 15 SHIITES with crude clubs and sling shots encircle.

One of the Shiites shoots a rock from the slingshot and nails
a handcuffed Iraqi in the back of the head.

                    VIG
          Don't start this shit again.

The Shiites back away as Vig motions with his big pistol.

                    VIG
          I know ya'll Shiite gettin' yer
          asses whipped --  Hey, what the
          hell is going on here?

PAN TO the ten Shiites, and the naked Man with Glasses, who
is getting dressed, exiting the side of the bunker, ushered
by the unarmed Iraqi Sargeant.

                    VIG
          Git on the fucking ground, Arab.

                    IRAQI SARGEANT
          Prisoner stay. Gabar matan.

                    VIG
          What the fuck are you talking
          about?

Suddenly a SHIITE WOMAN runs up to the tortured Shiite Man
with Glasses and embraces him, sobbing. A LITTLE GIRL with
dirty casts on both broken arms runs up and hugs his legs.

The bound Shiite prisoners start to walk away from the
bunker, and the unarmed Sargeant has a fit.

                    IRAQI SARGEANT
          Kinam vanir! Vanir!

He chases the prisoners, pushes them back. The free Shiites
shoot rocks and club him.

                    VIG
          Goddamn it everybody calm down.

INT. BUNKER NUMBER TWO - DAY

Archie runs down several narrow sets of cement stairs,
followed by the Interrogator, the other Iraqi Captain, Troy,
and Doc. (SUBTITLED IN ENGLISH)

                    IRAQI CAPTAIN
          It's my ass, donkey dick, Saddam
          will shoot me dead.

                    INTERROGATOR
          Saddam worries more about the
          Shiite than the gold.

EXT. BUNKER - DAY

The Shiite crowd curses and spits on the Iraqi soldiers. The
Sargeant is beaten.

Suddenly an Iraqi armored truck with a mounted machine gun
races up and SEVEN IRAQI SOLDIERS pour out swinging clubs,
followed by an IRAQI MAJOR, about 45. The Iraqi soldiers
savagely beat the Shiites.

Vig looks horrified as he watches.

TWO SOLDIERS grab the Woman from the Man With Glasses, and
drag her into a circle with three other soldiers; the ten
year-old girl with dirty casts on both arms, screams and
punches at them.

The Man With Glasses is held down at knife point.

                    VIG
                 (into the megaphone)
          This is the United States Military.

The Iraqi Major glances over at Vig, but the soldiers do not
stop brutalizing the Shiites -- they round up eight more
Shiites and make them lay face down.

INT. BASEMENT

Troy and Doc disarm TWO GUARDS outside a door in the basement.

Archie goes through the door, followed by the Iraqi
Interrogator and Captain.

INT. ROOM OF BUNKER 2 - DAY

Bright white cement, many overhead lights and a high ceiling.
empty but for 15 brand new, jumbo-sized Louis Vuitton
suitcases standing neatly in a row in the center of the room.

Archie stands looking at the suitcases with Troy and Doc.

Several of the big Vuitton suitcases are laid on their sides
by Archie, Troy and Doc.

The Iraqi Captain paces frantically punching and kicking the
walls and talking (SUBTITLED in ENGLISH).

                    IRAQI CAPTAIN
          It's Saddam's gold.

                    INTERROGATOR
          Shut up, he signed the treaty.

The suitcases are quickly unzipped. One suitcase is full of
gleaming antique silverware. One suitcase is full of jewelry.

Archie opens one full of hundreds of gold Cartier watches.

Troy and Doc slip a handful of jewelry into their pockets.

The Iraqi Captain goes nuts, throwing himself on Doc's back,
choking Doc, who flails about. Troy punches the Iraqi in the
head and rips him off Doc.

Archie puts his pistol in the man's face.

                    ARCHIE GATES
          Listen to me: we leave you alone
          to kill your Shiites, but
          everything you took from Kuwait,
          that belongs to us now, understand?

He turns to Doc.

                    ARCHIE GATES
          Put it back.

                    DOC
          Why?

                    ARCHIE GATES
          Stick to the plan. The plan is for
          gold.

Doc and Troy, out of breath, empty their pockets of jewelry.

Archie opens another Vuitton suitcase and pushes it aside -
it's full of Kuwaiti passports.

When Doc opens the next suitcase, he freezes. Archie looks
over and freezes. Troy closes cuffs behind the Captain's back
and looks over his shoulder -- wide-eyed.

The very large Vuitton suitcase is filled with five-kilo
bricks of gold. They all stare. Troy picks one up.

                    TROY
          Is this five kilos?

Archie holds another brick.

                    ARCHIE GATES
          Yeah, that's five kilos.

                    TROY
          Five, six, seven, eight, there's
          sixty bricks in this suitcase.

                    DOC
          Times 50K each --

                    TROY
          Three million dollars.

Archie opens another large Vuitton suitcase, and it is also
filled with sixty bars. Troy opens another suitcase, there's
another sixty bars. Doc opens another, another sixty bars.
They frantically check all of the suitcases. The handcuffed
Captain is crying.

                    ARCHIE GATES
          Ten suitcases; sixty bricks each.
          That's thirty million dollars.

Archie, Doc and Troy look at each other in shock.

With effort, Doc and Troy help Archie pick up the heavy,
jumbo-sized suitcase sideways, like a table top.

                    TROY
          I'm gonna get a fleet of Lexus
          convertibles in different colors.

                    DOC
          I told you Lexus doesn't make a
          convertible.

                    TROY
          I'll bet you a Lexus they do.

                    DOC
          OK, you're on for a Lexus, but it
          won't be a convertible.

Suddenly the suitcase rips apart and gold bars fall to the
floor; one lands on Troy's foot. He jumps in pain.

                    TROY
          Shit.

Archie, Troy, and Doc hoist another suitcase sideways and the
bricks rip through and fall to the floor --

                    ARCHIE GATES
          They didn't get it here in these
          bags.

                    DOC
          The tensilary strength goes to 200
          pounds.

                    TROY
          The what?

                    DOC
          Tensilary strength, it's what the
          suitcase can hold.

                    ARCHIE GATES
          Why would you know that?

                    TROY
          He works at an airport.

                    DOC
          60 bars, 13 pounds each is like --
          800 pounds. The smaller Vuittons
          handle 65.

                    ARCHIE GATES
          You got any more luggage here?

The Interrogator looks at him.

INT. BUNKER BASEMENT - LATER

120 small, round, Vuitton overnight bags, laid out and
opened, cover the entire floor of the basement.

Troy and Doc finish putting 5 bars in each bag. Archie paces,
sweating, speedy like he's on cocaine.

                    ARCHIE GATES
          It's crazy to take it all, we're
          not prepared for it. It's crazy
          not to take it all, how can we
          leave it?

Troy and Doc look nervous.

                    TROY
          What's the shipping plan?

                    ARCHIE GATES
          I told you that's handled.

                    TROY
          How is it handled? You have to
          tell us now.

                    DOC
          Yeah, tell us now.

                    ARCHIE GATES
                 (pacing)
          I've got a friend, he's in French
          Special Forces. He's gonna put it
          in barrels filled with oil and
          bury it. In a few weeks, he'll
          drive it to Yanbu --

                    TROY
          Where's Yanbu?

                    ARCHIE GATES
          It's a port in Saudi.

SILENT FANTASY

Havichon talks to an EGYPTIAN MAN in Lacoste sportswear

                    ARCHIE GATES (O.S.)
          Where another friend will ship it
          on a Turkish boat up the Red Sea
          to Perpignan, where a French boat
          will take it to Baltimore --

BACK TO THE SCENE

                    TROY
          I don't know about getting them to
          Baltimore, but these hat boxes
          ain't gonna fit in the Humvee.

                    ARCHIE GATES
          We need a trailer.

                    TROY
          OK, I'll call U-Haul in Karbala to
          see what they have on the lot
          today.

                    ARCHIE GATES
          See what you can get, Barlow.

INT. NARROW CEMENT STAIRCASE OF BUNKER

Troy runs up the stairs.

EXT. BUNKER - DAY

Troy runs out the front door.

                    TROY
          Conrad, we need a trailer --

The Iraqi Major stares coldly at Troy. Troy stares at the two
soldiers beating Shiites; five others clustered around the
woman on the ground.

                    VIG
          Did you get it? Troy, did you get
          it?

                    TROY
          Yeah, we got it.

                    VIG
          Is it a lot?

                    TROY
          Yeah, it's a lot.

LATER

Troy and Vig untangle, with difficulty, an ox cart from a
messy pile of old ox carts against a bombed out building.
Troy looks troubled --

                    TROY
                 (under his breath)
          'Little deuce coupe with a fiat
          head mill, she'll walk a
          Thunderbird like it's standin'
          still --'

CLOSE UP A SHIITE MAN is smashed in the face with a club.

CLOSE UP TROY pulls a heavy chain from the Humvee.

                    TROY
          'She'll do a hundred and forty
          with the top end floored --'

The Little Girl with arm casts is screaming while her father,
the Man In Glasses, tries to hold her.

Troy and Vig quickly chain the ox cart to the Humvee.

                    TROY
          'She's my little deuce coupe --'

INT. NARROW CEMENT STAIRCASE OF BUNKER

Archie, Doc, the Interrogator run up carrying Vuitton cases.

INT. UPSTAIRS ROOM OF BUNKER - DAY

They hurry past the huge poster of Saddam, the TVs playing
'Happy Days' and Rodney King, the many shelves of stereos,
etc., and past the soldiers lying face down, handcuffed.

EXT. BUNKER NUMBER TWO - DAY

Archie, Doc, and the Interrogator charge out of the bunker
with Vuitton luggage and put it onto the ox cart Troy has
rigged. Archie and Doc stop and stare in shock --
Soldiers 6 & 7 drag and beat Shiites; 5 wounded men and women
lie on the ground bleeding. A cuffed Iraqi Guard kneels with
a bleeding head. Five soldiers continue to encircle someone
(the Shiite woman). The Man In Glasses and the Little Girl
PRAY in ARABIC as they bow on the ground.

Troy and Vig stare back at Archie, looking tense.

The Iraqi Major greets the Interrogator warmly and they
embrace. Then the Major salutes Archie.

                    IRAQI MAJOR
          You take the Kuwaiti gold, yes?

                    ARCHIE GATES
          We take the Kuwaiti gold. Yes.

                    IRAQI MAJOR
          Saddam cannot keep.

                    ARCHIE GATES
          No, Saddam cannot keep.

                    IRAQI MAJOR
          Saddam have too many problem today.

                    ARCHIE GATES
          He certainly does.

Shiites run past throwing rocks at Iraqi soldiers 6 & 7 who
tackle and pummel them to the ground.

                    IRAQI MAJOR
          You need help to load?

                    ARCHIE GATES
          We can do it ourselves.

The Major turns and shouts --

                    IRAQI MAJOR
          Hazal jarat finan.

Iraqis 6 & 7 jog over. The soldiers are out of breath.

                    IRAQI MAJOR
          These man help you.

                    INTERROGATOR
          You go away fast from this
          bullshit.

Archie looks at one soldier's hands.

CLOSE UP: BLOOD on the Iraqi Soldier's knuckles and wrists.

PAN UP TO THE FACES of the Iraqi soldiers.

                    ARCHIE GATES
          Let's load up and get out of here.

INT. STAIRWELL

Iraqi Soldiers 6 & 7 carry suitcases up the narrow stairs.

EXT. BUNKER NUMBER TWO - DAY

Luggage is loaded into the Humvee and the cart while Troy
directs Iraqis 6 & 7; Doc and Vig help.

                    TROY
          Lay that one flat; OK, sideways --

                    ARCHIE GATES
          This isn't gonna work.

                    TROY
          Sure it is --

The cart collapses from the weight into a pile of broken wood.

The Vuitton bags roll onto the debris-cluttered ground, one
goes through a pool of blood. Doc picks the case up.

                    IRAQI MAJOR
          You need a truck.

                    ARCHIE GATES
          We'll rig two carts.

                    TROY
          Let's take the truck.

                    ARCHIE GATES
          We're not taking their truck.

                    TROY
          Why not?

                    IRAQI MAJOR
          We cooperate with peace accord.
          Please take truck.

                    TROY
          Let's take the truck.

Archie looks vaguely disgusted.

Troy backs the truck up.

Vuitton hat cases are loaded into the back of the truck,
which is completely full.

Archie sits behind the wheel of the Humvee. Vig sits next to
him. Archie starts the engine. Iraqi 6 taps on the door of
the Humvee by way of saying goodbye. Archie nods.

The Iraqi Major points to the Shiite Woman.

                    IRAQI MAJOR
          Nazaran yafit haisul.

Archie watches as Iraqis 6 & 7 walk directly to the circle of
soldiers around the woman -- it is now clear she has been
raped. They pull her from the group, they stand the Woman in
an open area and shoot her dead.

Troy jerks slightly in his seat and turns away. Doc stares.

Archie bows his head to the steering wheel and leans there
for a second as Vig looks wide-eyed at the dead woman.

The Girl in arm casts screams. She is grabbed by the hair and
pulled away by an Iraqi soldier, but the Man In Glasses
punches him and takes the girl. The soldier chases them with
a knife and jabs at the man, cutting him, but not lethally.

Archie gets out of the Humvee and slams the door, walks
slowly toward the Iraqi soldiers.

                    ARCHIE GATES
          This has to stop.

The Iraqis look at him. The soldier with the knife continues
to slash the Man In Glasses.

                    INTERROGATOR
          You get your ass kick in a war, it
          feel good to be strong again.

                    ARCHIE GATES
          What did you say?

                    IRAQI MAJOR
          You go now, please.

He salutes Archie.

                    ARCHIE GATES
          I don't think so. I'm sure you
          know about the Geneva Convention,
          right?

                    INTERROGATOR
          Geneva convention? You bomb my
          house, man.

                    IRAQI MAJOR
          That Shiite man is leader of
          uprising. He kill my man.

                    TROY
          Archie, let's stick to the plan,
          sir. The plan is for gold, right?

                    DOC
          We can help them first, then be on
          our way.

                    TROY
          No, we can't. It's not what we're
          here for.

                    ARCHIE GATES
          How much?

                    IRAQI MAJOR
          What?

                    ARCHIE GATES
          How much gold do you want to let
          these people come with us?

The Iraqi Major smiles. The Interrogator laughs.

                    INTERROGATOR
          Cannot do.

                    ARCHIE GATES
          What do you mean, cannot do? I'm
          offering you a lot of money.

The Iraqi Major continues smiling.

                    IRAQI MAJOR
          Cannot let Shiite go --

                    INTERROGATOR
          Saddam kill us.

                    IRAQI MAJOR
          Saddam kill to me if we let them
          go, OK? Now you go.

                    ARCHIE GATES
          Cover me.

                    TROY
          Jesus Christ, we can't save
          everybody.

                    ARCHIE GATES
          Are you listening? I said cover me.

Troy and Doc stare at Archie, then Troy gets out of the
truck, Doc gets out of the Humvee, and they nervously point
their pistols. Troy points his gun at Iraqi 6, who has come
forward with a rifle; Doc points at Iraqi 7, who has also
come forward. To the rear, Iraqi 6 stands with a rifle, near
Iraqis 2,3,4 and the Sargeant stand over the eight
prone Shiite prisoners laying face down.

Vig nervously sits for a moment, then jumps to his feet and
mans the mounted machine gun in the rear of the Hummer.

                    ARCHIE GATES
          No unnecessary shots, Conrad, is
          that clear?

                    VIG
          Yes, sir.

                    ARCHIE GATES
          Because we know what bullets do to
          vital organs, don't we?

                    VIG
          Make infected pockets filled with
          bile, sir.

                    ARCHIE GATES
          That's right, that's what they do.

Troy, Doc, Vig watch with trepidation as Archie walks toward
the soldier slashing the Man In Glasses, who carries the Girl.

Archie reaches over and grabs the slasher's wrist, pulling
the blade away from the man's body. He holds the soldier's
wrist up. The soldier grabs for Archie's throat with his free
hand, but Archie grabs this hand and twists it away, putting
the Iraqi into a choke hold. The soldier drops the knife in
the dirt.

The bloodied Man In Glasses collapses to the ground,
clutching the Little Girl in arm casts.

Troy, Doc, Vig point their guns. The Iraqi Major is pissed.

Archie sweeps the soldier's feet out, pins the soldier face
down on the ground, and throws the soldier's gun away. Archie
helps the Shiite Man In Glasses to his feet, takes the Girl,
and walks them over to the Humvee.

Two Shiite prisoners try to stand up, the Iraqi guards kick
them back down.

                    IRAQI MAJOR
                 (pissed)
          U.S.A. is out of Shiite war.

The Iraqi Major raises his machine gun as he stands next to
the Humvee, but Archie grabs the barrel and holds it down.

                    ARCHIE GATES
          No shooting.

Troy looks scared as he points his pistol at the Iraqi
soldiers, who point their rifles back at Troy and Doc.

CUT BACK TO the Major pauses, then smashes the barrel of his
machine gun, with Archie's hand, against the Humvee.

Archie winces, but doesn't let go. The Major does it again,
smashing Archie's hand. Archie winces, doesn't let go. The
Major tries to jerk the barrel up, but Archie pushes it down,
and it fires by accident, into the Major's leg. The Major
howls with pain. Blood dribbles out the bottom of his pants
leg like piss.

Troy covers Iraqi 6 with his rifle.

                    TROY
          What's happening?

                    ARCHIE GATES
          Accident. Stay cool.

Vig nervously swings the mounted machine gun from one Iraqi
in the rear to another, but doesn't shoot. Iraqi soldiers
point their rifles at the Americans.

ANGLE ON TROY

                    TROY
          No.

WHIP PAN TO Iraqi 6 jerks his rifle toward Archie and fires.

The sound cuts out.

SLIGHTLY SLOW MOTION: WHIP PAN from Iraqi rifle to Archie.

The only SOUND is the BULLET PIERCING THE FLESH of Archie's
lower left arm and tearing his muscle as it passes through.
Archie grimaces violently in pain.

SLIGHTLY SLOW MOTION: Troy fires his pistol. NO SOUND except
for the SLOW MOTION SOUND of the BULLET EXPLODING.

SLOW MOTION: The bullet tears through Iraqi 6's chest.

THE ONLY SOUND is the IRAQI'S HEARTBEAT, the bullet tearing
flesh and crushing bone, and the heartbeat stopping with a
VIOLENT SPLASH. Iraqi 6 falls to the ground with only a dull
thud and the slow clank of his gear.

REGULAR SPEED: Vig swings the mounted machine gun from one
Iraqi to another, but still doesn't shoot. He looks terrified
as his thumbs twitch on the triggers.

Iraqi 7 FIRES twice.

SLIGHTLY SLOW MOTION: a bullet tears into Troy's chest with
a DULL SNAP. He winces in pain.

PAN TO the windshield of the Humvee shatters behind Doc; he
turns and fires his pistol.

PAN TO -- slightly slow motion: NO SOUND EXCEPT THE BULLET
TEARING INTO IRAQI 7'S KNEE, smashing through bone. He falls
to the ground clutching his leg.

SLIGHTLY SLOW MOTION: Vig swings the mounted machine gun and
FIRES. NO SOUND BUT THE SLOW CRACKS OF THE RED TRACER BULLETS
EXPLODING from the gun.

SLOW MOTION: tracer bullets slice across the face of Iraqi 5
and Iraqi 2 in the rear, NO SOUND BUT THE BULLETS BREAKING
THROUGH BONE AND FLESH.

SLOW MOTION: Archie jams his pistol under the Major's chin
and FIRES -- the ONLY SOUND IS THE. SLOW EXPLOSION OF THE GUN,
and the slow tearing of tissue, ending with a sharp SNAP as
the tissue, bone, and the bullet CRACK out the top of the
Iraqi Major's head.

HIGH ANGLE LOOKING DOWN -- replay of entire shoot out at
REGULAR SPEED. Ending on the wide-eyed Little Girl with her
hand in her mouth, staring.

ANOTHER ANGLE -- replay of entire shoot out at REGULAR SPEED.
Ending on Troy wincing as he holds his chest.

The dead Iraqi Major lies face down in sand with eyes open;
the Interrogator holds his hand and WEEPS.

Archie's lightly blood-flecked face stares down at the dead
Major, clouds pass overhead.

Dead Iraqi 6 lies with legs twisted under his body.

A rivulet of blood trickles through the sand. A spider runs
across it and gets stuck.

LOW ANGLE up at Doc, stone still, staring straight ahead as
clouds pass slowly above him in the sky.

Vig nervously swings the mounted machine gun back and forth.

Troy, drenched in sweat, looks pained as he unbuttons his
shirt: there's a gunshot in his kevlar vest. The slug drops
out of the dent, into his hand -- he exhales.

Iraqis 2, 3, 4, and the Sargeant, throw their hands up in
surrender and drop their weapons.  Big Iraqi 2 walks toward
the Humvee in surrender, and bows down.

Archie points.

                    ARCHIE GATES
          Cover these three.

Vig swings the mounted machine gun toward the three remaining
Iraqi soldiers who stand over eight terrified Shiites.

                    ARCHIE GATES
          Doc.

Doc follows Archie over to the three Iraqi soldiers.

                    DOC
          Down.

The soldiers get on their knees, pleading for mercy.

                    IRAQI SOLDIER
          Kazal stan hamir in fatar.

Doc takes the Iraqi soldiers' guns and pushes them down.

                    ARCHIE GATES
          Put the Shiites in the Humvee.

                    TROY
          There's no room.

                    ARCHIE GATES
          Make room.

                    TROY
          What the fuck happened to
          necessity?

                    ARCHIE GATES
          It just changed.

                    TROY
          Not for me.

Shiites and Iraqi soldiers watch the debate nervously.

                    ARCHIE GATES
          Obey the fucking order, Barlow.

                    TROY
          This is fucked up.

Doc points to the Shiites.

                    DOC
          What if that was you?

Troy displays the gunshot in the Kevlar.

                    TROY
          What if this was you not wearing
          Kevlar?

Suddenly, THE SOUND of an APPROACHING TANK. They turn.

A tank rolls toward them fast, down a narrow side street,
followed by a truck with a rocket launcher.

                    TROY
          Great, a fucking tank. That should
          send us on our way.

                    VIG
          Grenade launcher, sir.

Vig struggles to lift the grenade launcher.

                    ARCHIE GATES
          No. Let's get out of here.

                    TROY
          It's about fucking time.

Troy jumps into the luggage-packed truck, starts the engine.
Vig starts the Humvee; Archie jumps in next to Vig.

PAN TO the eight Shiites, plus the Man In Glasses and the
Little Girl, jam into the crowded Humvee. Doc jumps in.

The tank approaches. The Humvee pulls away. The tank rolls in
from the side, but the tank turret WHINES and CLICKS, stuck
in place. An Iraqi pops out the top of the tank.

                    TANK IRAQI
          Hazal mafan.

He gestures to the whining, stuck, turret. Another Iraqi
tries pushing the turret. The truck with the small rocket
launcher pulls up.

INT./EXT. HUMVEE

as it bounces along fast. Archie is in pain while Doc pours
disinfectant over Archie's gunshot wound in his lower left
arm, and wraps it. Vig looks terrified as he drives.

INT. TRUCK

Troy, driving alone, speeds the truck as fast as it will go,
bouncing along the road.

                    TROY
          We were home free, you stupid son
          of a bitch.

WIDE AERIAL SHOT

the truck is 60 yards behind the Humvee

                    ARCHIE GATES (O.S.)
          What's the tank doing?

POV

through Doc's jiggling binoculars of the tank turning.

                    DOC (O.S.)
          Lining us up --

BACK TO THE SCENE

Vig pushes the Humvee's accelerator to the floor.
    
The Shiite Man In Glasses and his Little Girl cling to the
Humvee as they sit on top of the Vuitton hat cases with eight
other Shiites, including TWO FIVE YEAR OLDS, A BOY AND GIRL.

EXT. BUNKER NUMBER TWO - DAY

Two Iraqi soldiers take a THIN ROCKET, four feet long, and
load a clear plastic canister of brown fluid into it. A
GUNSHOT RINGS OUT, a soldier is hit in the arm.

WHIP PAN TO a Shiite boy with an old rifle in the third floor
window of a small stone building. Iraqis shout and point at
the sniper. The tank turns to the building.

EXT. DESERT - DAY

The Humvee drives fast over the bumpy two-lane road.

EXT. BUNKER NUMBER TWO - DAY

The tank fires a round at the building which COLLAPSES.

INT. SHIITE BUILDING - DAY

A SHIITE MOTHER, FATHER, AND TWO CHILDREN pray at a crude
table when the ceiling collapses.

EXT. BUNKER NUMBER TWO - DAY

The Iraqi soldiers fire the rocket launcher.

                    DOC (O.S.)
          Incoming.

EXT. DESERT -  DAY

Vig turns the speeding Humvee off the road. Archie jerks the
wheel back.

                    ARCHIE GATES
          Stay on the road.

                    VIG
          I don't wanna get hit.

SLOW MOTION: Doc looks straight up with the binoculars.

SLOW MOTION: a rocket streaks a squiggly white line of smoke
across the sky.

REAR OF HUMVEE, SLOW MOTION: half the Shiites hunch down,
bracing for an explosion while the other half crane their
necks, looking straight up into the sky. They cower when
there is an EXPLOSION above.

PAN UP TO - REGULAR SPEED: the ROCKET EXPLODES in the sky a
hundred yards above the Humvee -- INTO A BROWN CLOUD.

                    DOC
          Gas.

Troy leans out the window of the moving truck and squints up
at the brown gas cloud above as he drives fast.

Archie and Doc grapple to put on their gas masks. Vig reaches
around behind him for his mask as he drives.

                    VIG
          Where's my mask?

He accidentally veers off the road into the open desert.

ZOOM IN TO a field of mines sitting right on top of the sand,
20 yards ahead. [Iraqi mines were often placed this way]

ZOOM IN ON Archie's alarmed face

                    ARCHIE GATES
          Mine.

Archie dives from the Humvee followed by Vig, Doc, the Man In
Glasses holding the Little Girl, the other Shiites, including
the Two Five Year Olds. The Hummer drives ten yards, hits the
first mine with an explosion and flies into the air --

INT. TRUCK DRIVEN BY TROY

Flying debris smashes the windshield. Troy instinctively
jerks the wheel and the truck flips onto its side and slides
across the sand.

EXT. MINEFIELD

The airborne Humvee lands on its side, hits another mine, is
blown into the air, lands on its back, and is blown to pieces.

Troy sits sideways as the truck slides across the sand to a
halt inches before a mine, 30 yards behind the wrecked Humvee.

SILENCE. A wheel on the wrecked Humvee spin in the air,
squeaking.

Louis Vuitton suitcases are scattered all over. One has
opened and the gold bars are spilled around.

Shiites stagger to their feet, some cut and bleeding, some
limping. They cover their faces with their clothes as the
dense brown fog descends around them.

Vig's right eye has taken shrapnel and is bloody mess -- he
gropes in the sand for his glasses as blood drips down.

Archie puts his gas mask on the Little Girl with arm casts.
Doc takes his mask off when he sees what Archie has done and
gives it to the Shiite Man in Glasses.

Doc picks up Vig's glasses and hands them to Vig, who stands,
blinking his one good eye, while blood streams down his face.

                    DOC
          Cover your face, Conrad. Cover
          your mouth, man.

Vig is in shock. Doc lifts Vig's bloody hand to Vig's mouth.
Unseen in the fog, Troy climbs out of the overturned truck.

He picks up two Vuitton hat cases, looks up, sees the TWO
LITTLE CHILDREN from the Humvee, running across a mine field
SCREAMING.

                    TROY
          Hey. Stop.

Troy stands watching as the children run farther away, crying.

                    TROY
          Goddamn it.

He runs, hard, after the children, who are now 70 yards away,
the Vuitton hat cases banging against his legs.

Doc pulls a syringe from a sterile packet, is about to stick
it into his leg when Archie grabs his hand.

                    ARCHIE GATES
          Don't do it, this isn't sarin.
          We'd be dead by now.

                    DOC
          Is it mustard?

                    ARCHIE GATES
          It's C.S.

                    DOC
          What's that?

                    ARCHIE GATES
          Tear gas times ten, but it's not
          lethal. Where's Barlow?

                    DOC
          I don't know.

EXT. DESERT - MINEFIELD

Troy chases the children through the brown fog, he drops one
of the suitcases, catches up to the Girl and scoops her up in
his left arm and covers her face with her coat.

TROY'S POV

as he runs between land mines after the Boy, who is way ahead.

BACK TO THE SCENE

Troy drops the other Vuitton bag, catches the Boy and has
both children under his arms like footballs -- when suddenly
Troy is grabbed from behind with a cord around his neck -- he
lands on his back with the two children in his arms.

TROY'S POV LOOKING UP

the Iraqi Interrogator, wearing a gas mask, kicks Troy in the
head. The screaming Children are torn from Troy's arms by
Iraqi soldiers. Troy reaches for his pistol and it is ripped
from his hand as he is dragged to an Iraqi jeep.

EXT. DESERT - NEAR ARCHIE AND DOC

                    ARCHIE GATES
          Does anybody see Barlow?

Archie and Doc circle through the thick haze carrying a
Vuitton hat case and cover their mouths and noses.

                    DOC
          I can't even see the truck.

About five Shiites wander around, confused.

                    VIG
          Look out.

Archie spins around, drops the bag and points his pistol.

TWO BLACK ROBED FIGURES pick up Vuitton hat cases.

                    ARCHIE GATES
          Don't move.

A Black Robed Figure walks right past Archie, takes a scared
Shiite man by the arm and leads him to the side.

More black cloaked figures appear. There are THIRTY IN ALL.

Archie, Doc, and Vig look disoriented, point their pistols
around as black robes appear and lead the Shiites away.

                    VIG
          What's going on?

The robes lead the Shiites to a 4 FOOT HIGH TUNNEL ENTRANCE
in a mound of desert earth and disappear into it.

Vig stands and rubs his one good eye. Doc grabs Vig by the
arm and pulls him back toward the tunnel.

                    DOC
          Get in the tunnel.

Vig jerks his arm away.

                    VIG
          Troy.

Doc grabs Vig.

                    DOC
          You're gonna die.

Vig punches Doc in the side of the head. Doc punches Vig in
the stomach. They fall to the ground, fighting.

Archie searches for Troy in the brown haze.

                    ARCHIE GATES
          Barlow.

Two black-robed figures pull Vig off Doc and drag him to the
tunnel. Another robed figure pulls Doc to the tunnel.

Archie walks, looks for Troy, chokes, vomits into the sand.
A black robed figure takes him by the arm and pulls him back
to the tunnel, where they disappear inside.

INT. TUNNEL - DAY

Chaos. People choking and vomiting. GAS LANTERNS SWING. The
tunnel is 6 feet tall. Buckets are passed, filled with oiled
rags that people use to wipe their faces. Archie takes a
dripping rag and wipes his eyes, nose, mouth.

                    VIG
          We have to go back. We can't leave
          him there.

Vig's mutilated right eye is bleeding.

                    ARCHIE GATES
          We have to wait until it clears.

                    VIG
          You made the choice and we lost
          Troy --

                    ARCHIE GATES
          I had no choice.

                    VIG
          You had a choice.

                    ARCHIE GATES
          I had no fucking choice.

He screams at Vig, who looks scared.

                    ARCHIE GATES
          I can't walk away from a crime
          like that and take the gold and
          live my life like nothing
          happened, and if you can, then I
          hope you die right now.

Vig starts crying. Doc hands a bandage to Archie, who puts it
over Vig's wounded eye socket.

                    VIG
          What about Troy? What choice does
          he have now?

PAN ACROSS the Man In Glasses wipes his daughter's face.

EXT. OASIS BUNKER - DAY

Iraqi soldiers strip Troy's clothes as he stands in front of
Oasis Bunker surrounded only by fortress ruins in the desert.
The Iraqi Interrogator pulls off his gas mask.

Two Iraqi tanks are parked to the side. Small numbers of
soldiers and civilians mill about.

                    IRAQI SOLDIER (SUBTITLES)
          Can we shoot him?

                    IRAQI SOLDIER #2 (SUBTITLES)
          We're not even supposed to have
          American prisoners.

                    INTERROGATOR (SUBTITLES)
          He's proof they broke the cease-
          fire.

A GUN SHOT RINGS OUT. The Iraqis turn to look.

                    INTERROGATOR
          They're taking the tank.

PAN TO 7 Shiites with rifles climb the unmanned Iraqi tank.
4 Iraqi soldiers FIRE back at the Shiites.

Troy, naked, tries to break away in the chaos. He runs a few
feet, is tackled and dragged toward the bunker.

EXT. FAR SIDE OF THE TANK

Bill Smithson drives the motorcycle up and stops.

                    BILL SMITHSON
          Start shooting, Paco.

                    WALTER
          I don't like this, we gotta go--

Iraqi soldiers pull them off the motorcycle.

                    WALTER
          Hey.

                    BILL SMITHSON
          Let me handle this.

INT. NARROW CORRIDOR OF OASIS BUNKER

Troy is led, naked, down the corridor by two soldiers.

EXT. OASIS BUNKER - DAY

Shiites rebels sit on top of the captured tank with rifles as
it drives toward the bunker. Iraqi soldiers FIRE on them, but
the turret aims at the bunker and FIRES -- blasting a hole.

INT. BUNKER - CRUDE CEMENT BATHROOM - DAY

Troy is thrown onto the floor of a cluttered cement bathroom
with two crude toilets. His clothes are thrown on top of him.

                    IRAQI SOLDIER
          Get dress.

                    TROY
          OK.

                    IRAQI SOLDIER
          Get dress.

                    TROY
          I said OK.

The door is slammed. Stolen blenders, radios, CDs, stacks of
new Levis litter the floor. Troy kicks all the crap angrily
and hundreds of cell phones tumble from a box.

Troy looks at the pile of cell phones, picks one up, tries it
for a dial tone, drops it, tries another, until he gets one
that gives him a tone and dials.

                    OPERATOR (O.S.)
          Jalam nafad.

Troy looks stunned.

                    TROY
                 (into the cell phone)
          Um. Do you speak English?

                    OPERATOR (O.S.)
                 (British accent)
          Yes.

                    TROY
                 (into cell phone)
          Can you -- I need --

He frantically pushes stuff on the floor to block the door.

                    OPERATOR (O.S.)
          What number, please.

                    TROY
          Operation Desert Storm.

                    OPERATOR (O.S.)
          I'm sorry?

                    TROY
          The big army in the desert, come
          on, it's an emergency.

                    OPERATOR (O.S.)
          I don't have that number.

                    TROY
          Maybe you could -- hello?

The phone is dead.

                    TROY
          Fuck.

He throws it to the ground, tries another, no dial tone,
throws it, tries another, no dial tone, throws it.

                    TROY
          Come on, come on, come on.

He tries another, chucks it, another, gets a dial tone,
dials, and waits. Troy dials a number.

He waits while the PHONE RINGS.

INT. TROY'S HOME - TORRANCE, CAL.- NIGHT

Darlene, Troy's wife, tired from the pregnancy, picks up the
RINGING TELEPHONE. She has a crying baby in her arm.

INTERCUT with bunker:

                    DARLENE
                 (Southern accent)
          Hello?

                    TROY
          Honey, it's me.

                    DARLENE
          Troy?

                    TROY
          It's me, honey.

                    DARLENE
          My God, the baby's crying.

                    TROY
          I can hear her.

                    DARLENE
          That's our little Krystal.

                    TROY
          How's she doing?

                    DARLENE
          She hasn't been sleeping good, and
          Mamma had to go back to work, so
          I'm real, real tired, baby.

                    TROY
          I wish I was there to help, gooney-
          bird.

                    DARLENE
          Oh, gooney-bird, when are you
          coming home?

                    TROY
          I'm working on that right now,
          baby.

                    DARLENE
          I saw an ad for a computer job.
          You want me to call and set up an
          interview for my war hero?

                    TROY
          Listen, honey --

                    DARLENE
          What date are you coming home?

                    TROY
          They haven't given us an exact
          date yet. Listen --

                    DARLENE
          I'm henpecking you.

                    TROY
          No, you're not.

                    DARLENE
          I'm lonely and tired and most of
          all, I miss you.

                    TROY
          I miss you, too.

FIRE and CONCRETE EXPLODE into one wall of the bathroom.

                    DARLENE
          What was that?

                    TROY
          The wall just exploded.

                    DARLENE
          I thought the war was over, honey.

                    TROY
          It is and it isn't, babe. Can you
          do me a favor and call the C.O. on
          base?

                    DARLENE
          You want me to call the C.O.?

                    TROY
          Tell him I'm stuck in a bunker
          near 223 north outside Karbala --

                    DARLENE
          What do you mean 'stuck'? I
          thought the war was over.

                    TROY
          I'm gonna be fine, honey, I don't
          want you to worry, I tried to do
          something for the family,  and I
          want you to know --

                    DARLENE
          Know what?

Another MORTAR SMASHES through the wall, covers Troy in dust.

                    TROY
          That I love you.

                    DARLENE
          What's happening, Troy?

                    TROY
          Tell Krystal --

Soldiers push at the door, trying to open it.

                    DARLENE
          Troy?

                    TROY
          Tell Krystal I'm a rich man and if
          things work out she'll be taken
          care of no matter what --

                    DARLENE
          What are you talking about?

The door is kicked open and soldiers enter.

                    TROY
          Gotta go, gooney-bird, I love you--

The soldiers punch Troy in the face, drag him from the room.

                    DARLENE
          Troy?

She waits for a moment, tears in her eyes, and hangs up.

INT. TV ROOM OF OASIS BUNKER - DAY

A MORTAR ROCKS THE ROOM; soldiers frantically exit.

'CNN' is left playing in the empty room with Bill Smithson's
report from the previous day. "I Just Want to Celebrate"
PLAYS:

                    BILL SMITHSON
          Spirits are high and the music is
          soaring as these young troops
          celebrate --

EXT. OASIS BUNKER - DAY

Iraqi soldiers shoulder-launch a rocket at the tank,
EXPLODING it. Soldiers shoot into the flaming wreck.

PULL BACK TO Bill Smithson and PACO, the cameraman.

                    BILL SMITHSON
          I'm being held captive by Iraqi
          troops in the gritty city of
          Karbala, where Shiite --

                    PACO
          You said gritty city again.

                    BILL SMITHSON
          OK, we'll go again.

                    PACO
          What about Private Wogoman, Bill?

                    BILL SMITHSON
          Let's lay a few of these down
          first. In three, two, and, I'm
          being held captive in a gritty
          suburb of Karbala, where Shiite
          fundamentalists are rising up --

PAN TO Walter is stripped naked by Iraqi soldiers. Their
CONVERSATION is in ARABIC and SUBTITLED in ENGLISH.

                    IRAQI CAPTAIN
          You better not let that fucking
          reporter see you doing this.

                    IRAQI SARGEANT
          Hey, that's the CNN guy.

                    IRAQI CAPTAIN
          Wow. He's much shorter in person.

                    IRAQI CAPTAIN
          Get them out of here now.

LATER

Walter sits on the bike, naked. Bill Smithson in the sidecar,
Paco in the back. Iraqi soldiers pull the tape out.

                    BILL SMITHSON
          At least let me keep the tape.

                    WALTER
          Could I have my helmet, please?

They hand him his socks.

                    WALTER
          Helmet. On my head.

They give Walter his helmet, with built-in radio headset.

EXT. U.S. COMPANY B CAMP - MESS AREA - DAY

                    GENERAL HORN
          Who's missing?

                    CAPTAIN VAN METER
          Is Doc here?

The White Assistant shakes his head 'NO.'

                    CAPTAIN VAN METER
          Doc's not here?

                    GENERAL HORN
          You don't know where one of your
          own fucking aides is?

                    CAPTAIN VAN METER
          How about Barlow?

The White Assistant shakes his head 'NO.'

                    GENERAL HORN
          Check all the radio transmissions.

                    CAPTAIN VAN METER
          I run a tight company, Ron. Don't
          break my bails.

                    GENERAL HORN
          I'm not breaking your balls, Doug,
          I want to find these guys.

INT. TUNNEL - DAY

Archie, Doc, Vig, and dozens of Shiites crouch as they walk
through the tunnel, single file.

Dissolve

They are still walking in the long tunnel.

EXT. OPEN DESERT - DAY

Archie climbs out of a small mound in the desert, squints in
the light and looks around.

A strange minaret stretches skyward from the flat desert, 200
yards away. The minaret is made of yellow stone, it twists
150 feet into the air, like a twisting wedding cake.

Archie leads the others toward the minaret. No one is around,
except for a few black robes. Archie, Doc, and Vig enter the
old wooden doorway of the ancient Minaret.

INT. MINARET HALLWAY - DAY

A line of TEN CHILDREN with missing limbs and bandages stand
and watch Archie, Doc, and Vig enter. They make eye contact.

INT. INTERROGATION ROOM, OASIS BUNKER - DAY

CLOSE UP: the hands of an Iraqi soldier carefully wrap a bare
wire around Troy's right ear.

                    INTERROGATOR
                 (heavy accent)
          What is your rank, bro?

                    TROY
          Master sargeant.

                    INTERROGATOR
          Your company?

                    TROY
          B Company, infantry, United States
          Army.

The wire is wrapped under Troy's chin around his other ear.

                    INTERROGATOR
          My main man. Tell me something,
          OK? What is problem with Michael
          Jackson?

                    TROY
          What do you mean?

                    INTERROGATOR
          The King of Pop. 'I'm bad, I'm
          bad, you know it --'

                    TROY
          Yeah, Michael Jackson.

                    INTERROGATOR
          He is fahking the small boys, man.

                    TROY
          What are you talking about?

                    INTERROGATOR
          He come to Egypt with the small
          boys. I see picture in newspaper,
          always he is with the small boys
          in the hotel window. Hello with
          the white glove. I am King of Pop
          in my hotel with the small boys.
          No girls. Just the boys.

                    TROY
          He likes kids.

                    INTERROGATOR
          Yeah, he like to fahk them up the
          ass.

                    TROY
          Bullshit.

Troy is smashed in the face with a clipboard.  He looks
angry, and like he could cry at the same time.

                    INTERROGATOR
          You are the blind bullshit, my
          main man.  It is so obvious he
          like the small boy so he all the
          time travel with them.

                    TROY
          Fine.

                    INTERROGATOR
          And if it really true? You say --

                    TROY
          I say it's sick.

                    INTERROGATOR
          That's because you got a sick
          country, bro, you got no respect
          for the children. That's why you
          bomb them over here, right?

                    TROY
          I don't think so.

                    INTERROGATOR
          Michael Jackson is Pop King of
          sick fahking country.

                    TROY
          Wrong.

Troy is smashed in the face with the clip board.  Blood drips
from his nose.

                    INTERROGATOR
          Bullshit wrong, dude. A black man
          make the skin white and the hair
          straight. You know why?

                    TROY
          No.

                    INTERROGATOR
          Your sick fahking country make the
          black man hate hisself, just like
          you hate the Arab and the children
          you bomb.

                    TROY
          I don't hate children.

                    INTERROGATOR
          Do they care, buddy?

                    TROY
          Does who care?

                    INTERROGATOR
          Do your army care about the Shiite
          children? Do they come to help?

                    TROY
          No, they're not coming.

The Interrogator signals someone O.S. and suddenly voltage
races through the wire, causing Troy to gnash his teeth
together so hard they chip. He writhes in pain.

                    INTERROGATOR
                 (in subtitles)
          That seemed like too much volts.
          You got to build it up slow.

A SECOND IRAQI gestures defensively at a console that is
connected to the wire around Troy's jaw.  A THIRD IRAQI
reaches forward and turns a dial.  The SECOND IRAQI murmurs
defensively and turns the dial back.

                    INTERROGATOR
          Just figure it out.

The Interrogator turns back to Troy.

                    INTERROGATOR
          Are they coming to help the Shiite?

                    TROY
          No.

He is jolted again -- his face contorts, he bites his lip.

                    INTERROGATOR
          Tell the truth, dudesky. Save us
          the big bummer.

Troy starts to cry, represses it. His lip is bleeding.

                    INTERROGATOR
          Does it hurt?

Troy says nothing.

                    INTERROGATOR
          I ask you question, bro.

                    TROY
          Yes, it hurts.

                    INTERROGATOR
          You bomb my family. Do you know
          that?

Troy starts shaking slightly.

                    INTERROGATOR
          You blow up my home. The whole
          street. My wife is crush by big
          fahking block of concrete. She
          lose her legs, bro, and she got
          nice legs, too. Those legs cut off
          now.

Emotion comes into the INTERROGATOR'S VOICE as he says this.

                    TROY
                 (whispers)
          That's horrible.

                    INTERROGATOR
          What?

                    TROY
                 (whispers)
          I said, that's horrible.

                    INTERROGATOR
          Oh, my God, buddy. I didn't even
          told you the horrible part yet.

The other two guards listen sadly.

                    INTERROGATOR
          My son was kill in his bed. Did
          you heard that, dude?

                    TROY
          Yes.

                    INTERROGATOR
          He is one years old. He is
          asleeping with his toy doll when.
          the bomb come. You see that guy
          over there?  He lose his daughter
          same way: big USA bomb.

CLOSE UP the two guards -- one of them wipes away a tear.

FANTASY - CONCRETE AND PLASTER

falls onto the bed of a sleeping child.

BACK TO THE SCENE

                    TROY
          I have a daughter.

                    INTERROGATOR
          Very nice for you, bro. She is
          safe in Ohio without the bombs and
          concrete and all this shit--

FANTASY - DARLENE

pushes a baby carriage down an idyllic tree-lined sidewalk.

                    INTERROGATOR (OS)
          How old is she?

                    TROY (OS)
          Ten days old.

                    INTERROGATOR (OS)
          What's her name?

BACK TO THE SCENE

                    TROY
          Krystal.

                    INTERROGATOR
          What makes you decide to tell me
          about Krystal, my main man?

                    TROY
          Because we're both fathers.

                    INTERROGATOR
          I'm not a father no more, dude,
          remember? My son is dead now.

INT. LARGE ROOM OF MINARET - DAY

TWO DOZEN PEOPLE are laying down, being treated by SHIITE
CLERICS in black who squeeze aloe onto facial blisters.

At the end of the hall, Archie grits his teeth in pain as a
CLERIC uses a turkey baster to shoot alcohol into his
infected wound. Archie SCREAMS in pain.

Doc paces, exhaling; he has white ointment on his face.

                    DOC
          I'm OK. I'm cool. I'm a survivor.

A Shiite changes Vig's bloody bandage, while a DEAD BODY is
laid next to Vig and wrapped in cloths; two clerics chant.

                    VIG
          Is that guy dead? Where you gonna
          put him?

                    SHIITE CLERIC
          A shrine.

                    VIG
          What kind of shrine ya'll got?

                    SHIITE CLERIC
          Shrine that wash 700 year of sin.

                    VIG
          Hey, that's a pretty good shrine,
          right, Doc?

Doc stares at Vig.

                    VIG
          I'm sorry I hit you, man. I was
          scared for Troy, I don't want
          nothing to happen to him, he's my
          friend. Doc? Come on, man, I know
          you was comin' to help me --

Vig reaches out blindly for Doc's hand. Doc looks for a
moment at Vig's hand in the air, reaching, then takes it.
They remain silent for a moment, hands clasped.

                    VIG
          Maybe we got kicked out of the
          ring of Jesus fire, on account of
          stealing.

                    DOC
          That's not how it works.

                    VIG
          How does it work?

                    DOC
          I take care of what Jesus puts in
          front of me. That's what we did
          with the gold.

                    VIG
          What about now?

                    DOC
          I'm gonna see.

Archie walks up, his arm bandaged, and inspects Vig's face.

                    ARCHIE GATES
          How you doing, Conrad?

                    VIG
          I'm good to go, chief.

                    ARCHIE GATES
          Let's check the suitcases.

Archie, Doc, and Vig check the Vuitton suitcases, opening
them, looking at the gold, shutting them.

PAN TO children in bandages watch Archie inventory the gold.

                    DOC
          We're missing 28.

                    ARCHIE GATES
          That leaves 92 suitcases, five
          bars each --

They think.

                    ARCHIE GATES
          23 million dollars. Not bad for a
          disaster, provided we can find
          Barlow, get back before dark and
          not get busted.

He looks at Doc and Vig.

                    ARCHIE GATES
          It was my choice today. So you can
          head back if you want. I'll find
          Barlow myself.

                    DOC
          What about the gold?

                    ARCHIE GATES
          Take what you can carry. Try to
          find a vehicle. Bury what you have
          outside camp. Be careful about it.

They look at Archie.

                    VIG
          I want to find Troy.

Doc thinks.

                    DOC
          I'm in.

                    ARCHIE GATES
          OK, where does that leave us? We
          don't have any water, we're
          dehydrated. You got a radio here?

The Shiite Man In Glasses puts oils on his Little Girl's face.

                    ARCHIE GATES
          How is she?

The Shiite Man In Glasses does not answer.

                    DOC
          How -- is -- your -- little
          girl?

Vig wears glasses over his eye bandage; he mimes the Girl.

                    VIG
          Broken -- arms. Girl.

                    MAN IN GLASSES
          She's traumatized, what the fuck
          do you expect?

They look at him, surprised.

                    MAN IN GLASSES
          I went to b-school at Bowling
          Green.

                    VIG
          What's b-school? Is that like
          terrorist training?

                    DOC
          Business school, Conrad.

                    MAN IN GLASSES
          I came back to open a couple of
          hotels near Karbala. I'm almost in
          the black when Saddam starts this
          stupid fucking war and you guys
          bomb the shit out of my cafes. Now
          we try to get rid of Saddam, Bush
          leaves us twisting in the wind, Un-
          be-fucking-lievable man.

                    ARCHIE GATES
          You got a radio?

                    MAN IN GLASSES
          No radio. No water.

He wipes bits of white foam from the corners of his mouth.

                    ARCHIE GATES
          Where's Barlow?

                    MAN IN GLASSES
          They got him, I saw it happen. And
          they won't take him back to the
          same place.

                    ARCHIE GATES
          Where would they take him?

                    MAN IN GLASSES
          Oasis Bunker. It's full of
          Saddam's hard core guys.

                    DOC
          Where's that?

                    MAN IN GLASSES
          Like 17 - 18 klicks from here.

                    ARCHIE GATES
          Take us there.

                    MAN IN GLASSES
          We got no wheels.

                    ARCHIE GATES
          We'll walk until we find some.

                    MAN IN GLASSES
          Why don't you call in the Marines?

                    ARCHIE GATES
          With what? We don't have a radio.

                    MAN IN GLASSES
          OK, we'll find a vehicle. You
          drive back to get the choppers,
          they fly in to get your man.

Doc and Vig look at Archie.

                    ARCHIE GATES
          We can't do that.

                    MAN IN GLASSES
          Why not? You got a huge army here.

                    ARCHIE GATES
          We're not supposed to be involved
          with Shiites. We killed Iraqi
          soldiers. We broke the peace-
          accord.

                    MAN IN GLASSES
          Tell them it happened when you
          reclaimed the gold. Don't tell
          them it was about us.

                    ARCHIE GATES
          They'd find out, we'd go to jail.

                    MAN IN GLASSES
          You know what I think? I think
          maybe you're boosting the gold.
          That's what I think.

Archie looks at him.

                    ARCHIE GATES
          You're wrong.

                    MAN IN GLASSES
          They got half a million men in the
          desert, they send four guys to
          pick up all this bullion? I don't
          think so.

Archie looks at Vig and Doc.

                    ARCHIE GATES
          We need to find our man. How much
          do you want to take us there?

                    MAN IN GLASSES
          Fifteen suitcases.

                    ARCHIE GATES
          That's too much.

                    VIG
          Give it to him. We've got a lot.

                    ARCHIE GATES
          We're gonna need it to buy our way
          back today, so we better spend it
          wisely. I'll give you eight.

                    MAN IN GLASSES
          You need some guns, right? You
          lost your gear.

                    ARCHIE GATES
          Yeah, we need some guns.

                    MAN IN GLASSES
          You need some fighters, too. I
          mean, you can try to take Oasis on
          your own, but look at these
          grunts --

Doc and Vig look pissed. Archie's arm is in pain.

                    ARCHIE GATES
          Yeah, OK, we need some fighters.

                    MAN IN GLASSES
          So that's worth more than eight
          suitcases.

                    ARCHIE GATES
          Ten.

                    MAN IN GLASSES
          Fifteen.

Archie looks at him.

                    ARCHIE GATES
          That's four million dollars.

                    MAN IN GLASSES
          I think we need it more than you,
          John Doe, don't you?

He extends his hand. They shake.

                    ARCHIE GATES
          Archie Gates.

                    IMAM (MAN IN GLASSES)
          Imam Katar. I'll give you back
          five suitcases to get us over the
          Iranian border.

                    ARCHIE GATES
          What?

                    IMAM
          We gotta get to a refugee camp or
          we're dead. The camps are in Iran.

                    DOC
          We can't go to the Iranian border.

                    IMAM
          Then we don't have a deal.

                    VIG
          Give me a fucking break, man.

                    DOC
          We saved your life.

                    IMAM
          And we saved yours.

                    ARCHIE GATES
          We lost a man for you.

                    IMAM
          What good is it if you leave us to
          get wasted? The big army of
          democracy beats the ugly dictator,
          saves the rich Kuwaitis, but you
          go to jail if you help us escape
          the same dictator.  You saw what
          happened to my wife. Look at my
          daughter.

Archie looks around. He sees Imam's daughter, other bandaged
children looking at him. A few mothers.

                    ARCHIE GATES
          Who's going?

                    IMAM
          Everyone but the priests. That's
          55.

                    VIG
          Fuck it. We'll find this place on
          our own.

                    IMAM
          It's not on a map. You can look.

                    DOC
          Somebody else will take us.

Doc pulls gold bars from a case and holds them up

                    DOC
          Who will take us to Oasis bunker?

Fifty Shiites turn and look at him silently. Doc dumps a
whole suitcase of gold bars. Imam translates.

                    IMAM
          Jarat yalam fantam uraz.

People stare at the gold and say nothing.

                    IMAM
          I don't think so.

                    VIG
          This is a human life we're talking
          about.

                    IMAM
                 (laughs)
          Tell me about it.

His daughter looks at him and laughs -- until her laughter
becomes scary, hysterical and Imam tries to hold her still
and she won't stop as Archie, Doc, Vig watch.

INT. OASIS BUNKER - DAY

CLOSE ON -- Head of a golf clubdriver: "Made in USA."
Interrogator holds the golf club near the head, paces.

                    INTERROGATOR
          I only join Saddam Hussein army to
          make good living for family, good
          car, good house, and now my son is
          dead.

                    TROY
          I signed up for the extra cash,
          too.

                    INTERROGATOR
          We got a lot in common, dude. I
          got training and guns from America.

                    TROY
          Not from America.

                    INTERROGATOR
          Oh, yeah, specialist guys come to
          Iraq, train us when we fight Iran.

                    TROY
          What did they train you in?

                    INTERROGATOR
          Weapons, sabotage. Interrogation.

                    TROY
          Great.

The Interrogator lights a Marlboro, exhales.

PUSH IN TO CLOSE UP on TROY'S FACE as the smoke envelopes him.

FANTASY -- INT. TROY'S BEDROOM - TORRANCE

Darlene looks up and beams as Troy walks into the room, they
embrace on the bed.

                    INTERROGATOR (O.S.)
          So what we get from this dirty
          Iraq war you and me, huh?

FANTASY - TROY

holds the naked baby against his naked chest.

                    TROY
                 (whispers)
          I don't know.

BACK TO SCENE

                    INTERROGATOR
                 (laughs)
          You don't fahking know, right?! We
          all scahmbag soldier who get
          fahked, right?

                    TROY
          Right.

Interrogator laughs and takes a practice golf swing.

                    TROY
          So why are you doing this to me?

                    INTERROGATOR
          It's my job, man, for Saddam, just
          like your job when you bomb my
          house.

                    TROY
          It's not just a job, it still
          matters what you do.

                    INTERROGATOR
          Bullshit. It's all a job.

                    TROY
          It still matters what you do, what
          you're doing right now matters.

                    INTERROGATOR
          Bullshit.

                    TROY
          The art of war is not for killing
          people, it's a stratagem to give
          life to many with minimum
          violence, minimum --

                    INTERROGATOR
          Then why you bomb my fahking house
          and kill my son? Can you think how
          it feels inside your heart if I
          bomb your daughter?

FANTASY - SLOW MOTION - A MISSILE

silently destroys Troy's suburban house.

BACK TO SCENE

                    TROY
          Worse than death --

                    INTERROGATOR
          It feels like this --

Holding the driver at the head, he raps the bridge of Troy's
nose.

                    TROY
          Don't --

                    INTERROGATOR
          Everyday, inside my heart --

He raps Troy's nose repeatedly to make his point.

                    INTERROGATOR
          Like this, like this, like this --

He breaks Troy's nose with a crack.

INT. MINARET

A rug is pulled off the old stone floor, a panel is lifted.
Old pistols and rifles are pulled out.

Doc and Vig load and handle the old pistols.

                    ARCHIE GATES
          Did we save anything from the
          Humvee?

                    DOC
          This bag.

Archie pulls two of the colored footballs from the beat up
pack. He looks at Doc as if to say "Great."

LATER

Archie's arm is in pain as he carefully wraps a thin layer of
light blue plastic explosive around a football, presses small
nails sideways into the plastique and inserts a fuse in the
end of the ball. Another ball-bomb just like it has already
been constructed.

EXT. DESERT -  DAY

Archie leads a line of 55 Shiites across the desert. Everyone
carries at least one Vuitton bag. Imam carries his daughter.

                    VIG
          You got the same name as the tall
          model who does David Bowie.

                    DOC
          That's Im-an, with an 'n.' He's
          Imam with an 'm.'

                    VIG
          That's the same name.

                    DOC
          It's not the same name.

                    VIG
          Whatever. They're both attractive
          names.

EXT. DESERT - LATER

Archie crouches low to the ground, moving quickly,
secretively. He turns and makes a hand signal to, Doc, 20
yards away, who turns and makes a hand signal to Vig.

HIGH WIDE SHOT: A lone Iraqi military truck, mint condition.'

Archie, Vig, and Doc form a semicircle, surrounding the
truck. They are all 40 yards back from the truck.

                    ARCHIE GATES
          This is the United States Army.
          Come out of the truck with your
          weapons in the air.

No response. Suddenly Vig's pistol FIRES.

                    VIG
          Shit. Sorry.

His gunshot blows a hole in the Iraqi truck -- which deflates
like a huge beach ball, circling wildly until it lies in a
heap of collapsed camouflage canvass while 50 yards away --
55 SHIITES flip sand-colored blankets off and stand up in the
desert to look. Doc lifts the limp canvass of the deflated
truck.

                    ARCHIE GATES
          They used a lot of decoys to throw
          off our bombers.

                    DOC
          Where are we gonna get a vehicle?

                    IMAM
          I know a place that's full of
          deserters. Maybe they got
          something.

HIGH WIDE SHOT: They walk in a single file line in the
desert.  Archie in front, carries a Vuitton bag.

EXT. DESERTER'S BUNKER - DAY

Archie now walks among Shiites toting old rifles. There are
bomb craters, destroyed cars, a few mud dwellings nearby.

                    SHIITE
          America!

                    SHIITE #2
          America! Friend!

                    SHIITE
          Freedom! Thank you to America!

Shiites cheer and pat Archie, Doc and Vig on the back as they
walk to a bunker built into the side of a small hill. TWO
IRAQI SOLDIERS come out smiling to embrace a disoriented
Archie and Doc.

INT. IRAQI BUNKER - DAY

They pass through a cluttered room with six cots, down a
hallway, to a larger room where two more YOUNG IRAQI SOLDIERS
sit watching CNN. There is a defaced poster of Saddam, two
peacocks and three monkeys in the room, and the half-eaten
carcass of a zebra. The soldiers rise and half-bow to Archie.

                    FRIENDLY IRAQI SOLDIER
          Food? You give food?

                    ARCHIE GATES
          We don't have any food.

                    DOC
          Where'd you get these animals from?

                    IMAM
                 (translates)
          Kishan tramai jahal?

                    FRIENDLY IRAQI SOLDIER
          Kuwait Zoo. Nabal hazala fan taq.

                    IMAM
          This is for you, my friend, to eat
          if you are hungry.

The Iraqi Soldier offers a live monkey to Archie.

                    ARCHIE GATES
          No, thank you.

                    IMAM
          They're not barbarians, they're
          starving.

                    DOC
          I'm getting really dizzy, man.

Vig sticks out a WHITE TONGUE and nods.

                    ARCHIE GATES
          We need water.

                    FRIENDLY IRAQI SOLDIER
          Water all gone. No one have water.

                    ARCHIE GATES
          Radio?

                    FRIENDLY IRAQI
          No radio.

                    ARCHIE GATES
          No radio, no water, but yes CNN.

The other Iraqis nod their heads and laugh nervously.

                    FRIENDLY IRAQI SOLDIER
          George Bush get rid Saddam.

                    ARCHIE GATES
          Not exactly.

                    FRIENDLY IRAQI SOLDIER
          Congratulation!

He embraces Archie, who looks at Imam.

                    ARCHIE GATES
          Would you explain to these
          gentlemen that we need a vehicle
          of some kind?

INT. BUNKER GARAGE - DAY

It is dark. With a click, several bare ceiling lights come
on. Archie, Doc, Vig, stare in amazement: It's an underground
garage filled with nine luxury cars: A ROLLS ROYCE, a JAGUAR,
a MERCEDES, an INFINITI CONVERTIBLE, FOUR CADILLACS, a WHITE
STRETCH LIMOUSINE. The friendly Iraqi smiles.

                    FRIENDLY IRAQI SOLDIER
          From Kuwait.

Doc stops at the convertible.

                    DOC
          Could I ask a question?

The Iraqi deserters look at him.

                    DOC
          Does Lexus make this model?

                    FRIENDLY IRAQI SOLDIER
          No. Infiniti convertible only.

                    FRIENDLY IRAQI 2
          No Lexus convertible.

                    DOC
          Exactly what I said.

                    ARCHIE GATES
          Listen. We use these cars to go
          fight Saddam soldiers.

The Friendly Iraqi looks at Doc and laughs.

                    DOC
          What's so funny?

                    FRIENDLY IRAQI SOLDIER
          Cannot take.

                    DOC
          What do you mean, cannot take? We
          kicked Saddam's ass. We definitely
          take.

                    ARCHIE GATES
          We are the United States military.

The Iraqi laughs.

                    IMAM
          You're three guys with a bunch of
          Shiites and no Humvee.

                    FRIENDLY IRAQI SOLDIER
          Need money. Have no money. To eat.
          To live. Kish falan azar yat imal
          tanat.

                    IMAM
          He says the Americans have many
          tanks, many airplanes. We have
          nothing.

The Iraqis do not look happy. Imam does simultaneous
translation as Archie holds forth.

                    ARCHIE GATES
          We will rise up together.

                    IMAM
          Jihala vamat.

                    ARCHIE GATES
          Rise up together.

Doc and Vig look taken aback as Archie goes messianic.

                    ARCHIE GATES
          Look at us. Working together. Many
          races, many nations. Tell him, Doc.

                    DOC
          We are united.

They raise their joined hands together.

                    ARCHIE GATES
          United. George Bush wants YOU --

                    DOC
          To stand up for yourself.

                    FRIENDLY IRAQI SOLDIER
          George Bush.

                    ARCHIE GATES
          He wants YOU --

                    DOC
          You.

                    VIG
          Praise Jesus.

                    ARCHIE GATES
          Make the fight for freedom on your
          own.

                    DOC
          Oh, yes, you can.

                    VIG
          Go, baby, go.

Archie walks around, looking into the eyes of each Iraqi
soldier, touching them on the shoulders.

                    ARCHIE GATES
          Then America will follow.

                    IMAM
          Jahal yaqat.

                    DOC
          Jahal yaqat, brothers.

                    ARCHIE GATES
          God bless America, and God bless
          a free Iraq.

Iraqis burst into cheers.

                    ARCHIE GATES
          What do you say now, my friend?

                    FRIENDLY IRAQI
          Cannot give car.

                    ARCHIE GATES
          Then I guess we'll have to buy
          them.

EXT. DESERT - DAY

The luxury cars ride across the desert, single file, Vuitton
bags strapped to the roofs.

INT. ROLLS ROYCE - DAY

                    VIG
          Judas Priest will pump you, Doc --

                    DOC
          I already had it with the Beach
          Boys today.

                    VIG
          One song.

Doc slams in a CD-- TRADITIONAL IRAQI FOLK WAILING PLAYS.
The Shiite riflemen in back smile as Vig scowls.

INT. INFINITI

Archie drives. Imam sits in passenger seat with his daughter
on his lap. They listen to Iraqi music.

EXT. DESERT - DAY

Shiites finish passing 92 Vuitton suitcases into a trench.
The bags are buried. Archie drives a stake to mark the spot.

                    ARCHIE GATES
          We get our man, we come back to
          pick up the gold --

                    IMAM
          And my people.

                    ARCHIE GATES
          My gold isn't here, and I mean all
          of it, your people will not
          survive.

Doc and Vig pull off distributor caps from the Cadillacs and
Limousine (but not the Jaguar) and put them in Doc's pack.

                    IMAM
          I understand.

                    ARCHIE GATES
          OK. Let's load and go.

Imam hugs and kisses his daughter goodbye and tries to put
her, crying, into the arms of an older woman.

                    VIG
          Wait a second, I want to talk
          about this plan some more --

                    ARCHIE GATES
          We're going to drive in and get
          Troy, exactly like we discussed.

                    VIG
          I have a bad feeling like we're
          gonna get wasted.

                    ARCHIE GATES
          You're scared. It's good to be
          scared when there's guns around.

Vig looks uneasy. Archie hums Bach's 'Gloria' and moves a
hand in the air, then puts his hands on Vig's shoulders and
SINGS THE BACH LOUD. Vig eventually joins in the chorus.

                    DOC
          I'm cool. I'm all right.

He lies down and breathes with a hand on his chest as Archie
and Vig keep singing.

EXT. OPEN DESERT - DAY

Bach's B Minor Mass plays as the Mercedes, Infiniti, and
Rolls Royce Drive across the desert.

INT. INTERROGATION ROOM - OASIS BUNKER - DAY

The Interrogator finishes putting tissue in Troy's bleeding
nose.

                    TROY
          Your son wouldn't be dead if
          Saddam didn't invade Kuwait.

FANTASY - IRAQI SOLDIERS

smash the windows of a Benneton store, then a Cartier store.

                    INTERROGATOR (O.S.)
          I know.

                    TROY (O.S.)
          I heard about some bad shit that
          happened there.

FANTASY - IRAQI SOLDIERS

drag patients from their hospital beds and AN IRAQI SOLDIER
dives on top of a crying NURSE and starts to rape her while
a BABY is taken from an incubator, which is stolen.

BACK TO THE SCENE

                    TROY
          Who's got the sick country?

                    INTERROGATOR
          Maybe Saddam is very crazy, right?
          And then you are crazy to bomb all
          of Iraq.

                    TROY
          Too much bombing is crazy, but not
          saving Kuwait.

                    INTERROGATOR
          You come here to save Kuwait
          people?

                    TROY
          Yes.

                    INTERROGATOR
          Really?
                 (to the Second Iraqi)
          Jahaza fan.

The Second Iraqi dips a bucket into an oil drum.

                    INTERROGATOR
          Lots of people in trouble around
          this world, my man. You don't
          fight no fahking war for them.

                    TROY
          You invaded another country. You
          can't do that.

                    INTERROGATOR
          Why not, dude?

                    TROY
          It makes the world crazy. You got
          to keep it stable.

                    INTERROGATOR
          For what? Your pick up truck?

                    TROY
          No, for stability. Stabilize the
          region.

The Interrogator pulls a CD from Troy's pocket and jams it
into Troy's mouth.

                    INTERROGATOR
          This is your fahking stability, my
          main man.

The Interrogator uses the CD as a funnel to force-feed the
crude oil into Troy's mouth as he pours it from the bucket.

EXT. RIM OF DUNE OVERLOOKING OASIS BUNKER

Archie, Doc, Vig, stand on a sand ridge and look down on the
Oasis bunker in the distance. Behind them are the three cars,
Imam, and a handful of Shiite gunmen. They get into the cars.

EXT. DUNES

An empty ridge. The Infiniti, Rolls, Mercedes shoot over it,
arcing down toward the bunker, engines roaring.

EXT. OASIS BUNKER

It is quiet. A Slim Jim is unwrapped as an IRAQI GUARD slowly
raises it to his mouth, bites it, chews, and looks puzzled at
the cars approaching in the distance.

HIGH WIDE SHOT - looking straight down.

The cars drive three abreast down the approach road to the
bunker. The Infiniti is in the middle, flanked by the Rolls
on the left and the Mercedes on the right.

INT. INFINITI

Vig looks scared as he drives the Infiniti straight toward
the bunker. A Shiite sits up front with him. Fifty yards from
the bunker, Vig turns sharply and drives in circles.

EXT. BUNKER

TWO IRAQI GUARDS, one chewing a Slim Jim, look bewildered as
they stare at the circling Infiniti fifty yards away.

INT. MERCEDES

Archie, with Imam in the passenger seat, two Shiites in back,
speeds the Mercedes past the guards, around the right side,
to the back side of the bunker, skidding across the sand.

AERIAL VIEW

The Mercedes and the Rolls diverge around the bunker on
either side: Rolls on the left, Mercedes on the right.

INT. ROLLS ROYCE

Doc drives the Rolls around the left, to the bunker's rear.

EXT. BUNKER

Iraqi soldiers fire a grenade that blows up right behind the
Rolls as Doc skids right up to a rear entrance of the bunker,
the grill touching the metal door. Doc parks, blockading the
rear door shut, and, with three Shiite riflemen, jumps out.

INT. INFINITI

A Shiite helps Vig wedge a piece of wood onto the gas pedal.
Vig suddenly grabs his hand in PAIN. The Shiite looks at him.

                    VIG
          Splinter.

                    SHIITE
          Come on.

EXT. INFINITI

Vig and the Shiite bail out of the moving Infiniti. Wads of
plastic explosive are taped to the grill of the car as it
speeds towards the bunker, then drifts to the side --

                    VIG
          Go straight, go straight --

He jumps up and down and points, but the Infiniti goes far to
the side of the bunker and explodes into some ruins. The two
guards point their guns at Vig and the Shiite and they run
into the desert as bullets pop around them.

EXT. RIGHT SIDE OF BUNKER

Archie skids the Mercedes to a halt on the right side of the
bunker, jumps out, slams the door, followed by Imam and the
two other Shiites.

They run toward the bunker, Archie with a wad of plastic
explosive and nails in one hand and a cigarette lighter in
the other. He HEARS the CHIRP of a car alarm being activated
as he runs to the bunker.

Imam finds a vent hole on the low facade of the bunker, pulls
off a grill. Archie lights a fuse sticking out of the plastic
explosive, and drops it into the vent.

INT. INTERROGATION ROOM - DAY

Troy gags and spits, his front is covered in oil. The
Interrogator raises the bucket.

                    INTERROGATOR
          Are you feeling stable enough for
          more?

An EXPLOSION elsewhere in the bunker causes the lights to
flicker out.

INT. BUNKER CORRIDOR

Iraqi soldiers scurry in the darkness with flashlights. They
go to the rear door, pile up in the dark, pushing.

EXT. REAR OF BUNKER

The parked Rolls Royce blockades the rear door.

EXT. SIDE OF BUNKER

Archie and Imam run back to the Mercedes, but the car is
locked, his pistol sits inside on the front seat. A GUNSHOT
from the bunker roof shatters the window of the Mercedes,
setting off THE CAR ALARM.

Archie reaches in, grabs his pistol, and bolts as a launched
grenade blows the Mercedes.

EXT. FRONT OF BUNKER - DAY

12 Iraqi soldiers pour out of the smoking bunker as 3 Shiite
riflemen with Doc fire on them. Two Iraqis go down, with only
the sound of bullets piercing their flesh.

6 Iraqis run for it, into the desert. 2 Iraqis throw their
hands up in surrender while 2 look ambivalent, one holds a
stack of new Levis. Doc raises a hand to stop his Shiite
gunmen from firing, but they fire anyway and 3 Iraqis fire
back -- the Shiite next to Doc is hit in the face.

                    DOC
          Stop shooting, what's the matter
          with you?

He reaches out and holds the rifle of a Shiite. Everyone
stops firing, slowly the Iraqis drop their guns. Doc has WET
HIS PANTS.

Archie runs up from the right, grabs Doc's arm and they run
past surrendering Iraqi soldiers and into the front entrance.
of the bunker. Imam takes cover on the side of the bunker
while Shiites and Iraqis aim at each other.

Vig approaches cautiously from the desert, HEARS AN AIRCRAFT,
and looks up. An Iraqi helicopter comes in fast and opens
FIRE with MACHINE GUNS --

                    VIG
          Shit.

Vig runs toward the bunker for cover, but is cut off by
MACHINE GUN FIRE from THE CHOPPER. Shiites FIRE rifles up at
the chopper.

INT. IRAQI CHOPPER

Chips of metal and plastic fly off as bullets hit the
chopper. Arabic chatter is heard over a crackling radio.

POV - FROM INSIDE THE CHOPPER

100 feet below -- Vig and six remaining Shiite riflemen are
running into the desert away from the chopper.

EXT. DESERT -  DAY

Vig and the six Shiites frantically search for cover.

The chopper FIRES and one of the Shiites running with Vig is
hit in the head, thrown by the force of the gunshot into Vig,
who goes down, faking it.

Vig lies face down, out of breath, with the dead Shiite on
top of him while the chopper hovers above.

                    VIG
          Jesus God, I don't wanna get hit,
          please Jesus, watch over me --

INT. BUNKER

It is dimly lighted by a few mounted emergency lights.

Archie and Doc run down the empty stairs, through the big
main room -- it is empty. Archie goes down the right side,
kicks open a door --

It's the bathroom full of stolen stuff and cell phones --

Doc goes down the left side of the room -- kicks in a door --
a room full of Benneton sweaters in all colors.

Archie kicks in a door -- a room with shelves full of large
snow globes, thousands of them.

Doc kicks in a door -- a room cluttered with debris, but
there is another door at the far side of the room. He
approaches and kicks it repeatedly, without success.

Archie kicks in a door -- it is pitch black -- an emergency
light flickers on and off -- revealing the two Iraqi
torturers at the control table, where one tries to fix the
emergency light with a screwdriver --

In flickering light -- Archie SHOOTS one Iraqi guard squarely
in the chest, then the other -- the only SOUND IS THE GUN
POPPING and the BULLETS TEARING into their bodies.

Archie turns to the Interrogator, who stands next to Troy.

                    INTERROGATOR
          It's OK, buddy, we are just
          talking now --

SLIGHTLY SLOW MOTION -- Archie shoots the Interrogator in the
thigh. THE ONLY SOUND IS GUN SHOOTING, FLESH TEARING --

Blood thinly splatters across Troy's face as the Interrogator
grimaces and falls to the floor. The light flicks on a few
beats, then off a few beats.

Archie rips the wires from the table controls, goes to Troy,
unhinges the wire from his jaw.

The Interrogator writhes in pain on the ground. Archie takes
the Interrogator's pistol, snaps open a knife, cuts the cord
binding Troy to the chair and gives Troy the pistol.

Troy sits, stained with oil, blood, tears. He gets up, looks
down at the interrogator on the floor, points the pistol into
the Interrogator's face.

The Interrogator stares at Troy, who stares back. Archie
watches, out of breath. Troy FIRES the gun just to the side
of the Interrogator's face, into the ground. The Interrogator
looks terrified, crying. Troy stares back, looks unhappy,
lowers the gun.

Troy and Archie look at each other for an intense moment.

                    ARCHIE GATES
          Let's go.

INT. ANOTHER BUNKER ROOM

Doc shoots the lock on the inner door and it finally opens.
He looks inside and sees, in a sunken room, 50 more Shiite
civilians huddled together. Archie rushes by with Troy.

                    ARCHIE GATES
          Come on.

INT. FRONT DOOR OF BUNKER - DAY

Archie and Troy run out of the bunker --

EXT. FRONT DOOR OF BUNKER - DAY

The chopper hovers right there. It FIRES A GRENADE which
EXPLODES next to Archie and Troy. They scramble back into the
bunker.

INT. FRONT DOOR OF BUNKER - DAY

Archie and Troy run into Doc at the door, knocking him over.
They crouch inside the door; the chopper hovers low outside.

EXT. DESERT - DAY

Vig gropes the sand for his glasses, crawling on his hands
and knees with the dead Shiite on his back.

                    VIG
          You gotta be my disguise, Mr.
          Shiite, cuz they need my help over
          there --

EXT. DESERT - DAY

The six Iraqis who took oft from the bunker are still
running. Their CONVERSATION is in ARABIC and SUBTITLED in
ENGLISH.

                    TOUGH IRAQI
          Let's go back and get them.

                    IRAQI #2
          Fuck a donkey, no way.

                    TOUGH IRAQI
          There's a chopper, we can do it.

He and another Iraqi stop while the other two keep running.

                    TOUGH IRAQI
          They killed your families, you
          fucking cowards.

The Tough Iraqi and his partner, sweating profusely, out of
breath, split up and head back toward the bunker.

INT. FRONT DOOR OF BUNKER - DAY

Archie's in great pain. He grimaces as he tightens the
bandage around his forearm. Troy is shaking uncontrollably.
Doc grabs Troy's shoulders firmly.

                    ARCHIE GATES
          We're gonna get out of here alive,
          just do what I say, do you hear me?

Troy nods. Archie pulls one of the football bombs wrapped in
C-4 from his small pack, and hands it to Doc.

Archie pretends to throw with nothing in his hand.

                    ARCHIE GATES
          Step, throw, one-two -- I'm gonna
          give it a five second fuse. That
          gives you two steps out the door.

PAN ACROSS Troy and Doc listen intently.

Archie cuts the fuse on the ball with his knife.

The three of them stand at the door, ready. Archie holds his
pistol ready. Doc holds the football, Troy holds the lighter.

                    ARCHIE GATES
          Wait --

EXT. BUNKER

Imam, lying in a ditch, is concealed on the side of the
bunker, and aims an old rifle at the chopper.

GUNSHOTS ring off the side of the chopper, chipping plastic.
The chopper banks toward Vig in response.

Vig watches the chopper turn toward him.

                    VIG
          God help me.

INT. BUNKER

Troy flicks the lighter and with a shaking hand tries to
light the fuse. Archie steadies Troy's hand. The fuse is lit.

                    ARCHIE GATES
          Go.

EXT. FRONT DOOR OF BUNKER - DAY

Archie FIRES his pistol as he goes out the door with Troy,
also FIRING a pistol. Doc follows with the ball, fuse burning.
Doc throws the ball hard at the chopper, hovering 40 feet up.

INT. CHOPPER

The chopper turns to face the ball just as it hits the
plexiglas window and bounces off, not exploding. The pilots
look perplexed. The ball hits the ground and EXPLODES.

EXT. BUNKER

Archie, Troy, Doc, stunned -- turn back to the bunker.

INT. BUNKER DOORWAY - DAY

They run inside and take cover, catch their breath. Troy and
Doc look terrified.

                    ARCHIE GATES
          OK.  Shorter fuse this time.

He pulls out the second ball, cuts another fuse, affixes it.
They wait at the door again, watching the chopper.

EXT. BUNKER

Imam, from the side of the bunker, FIRES again, the chopper
swivels toward him to RETURN FIRE --

INT. BUNKER

Troy lights the second fuse. They bolt out the door, Troy and
Archie FIRING pistols, Doc in the middle with the ball.

EXT. BUNKER

SLOW TO FREEZE FRAME MID-STRIDE -- with just THE SOUND OF THE
CHOPPER: Archie, Doc, Troy, three abreast, mid-stride.

RESUME REGULAR SPEED -- Doc unleashes the football.

PAN TO - SLIGHTLY SLOW MOTION -- the ball hits the chopper
broadside and THE CHOPPER EXPLODES INTO A BALL OF FIRE.

SLIGHTLY SLOW MOTION: The chopper comes crashing to the
ground in a heap of metal. The rotary spins off, whips over
Archie, Troy, and Doc's heads and smashes into the bunker.

Silence.

Troy and Doc look at each other, and punch their fists
together. Troy notices that he's wet his pants.

                    ARCHIE GATES
          We're not done. Check every Iraqi
          here.

Archie rolls over bodies lying on the ground, pulls out their
weapons. Troy and Doc take rifles from wounded Iraqis.

                    TROY
                 (agitated)
          Where's Conrad?

                    ARCHIE GATES
          Don't let your guard down.

Doc nervously scans the area with his pistol pointed.

50 Shiite prisoners start streaming out of the bunker.

                    ARCHIE GATES
          Stay there, don't move.

Imam directs the Shiites to stay clustered near the bunker.

                    IMAM
          Jakar yizam ut naral --

                    TROY
          How are we getting back?

                    DOC
          We got the Rolls.

An IRAQI SOLDIER jumps up just as Archie knocks him to the
ground from behind and twists the gun away. Doc binds the
soldier's hands with a plastic cuff.

                    TROY
          You got a Rolls?

                    ARCHIE GATES
          It's been a busy day.

Archie pulls pistols from the bloody bodies of the two Iraqis
in the chopper.

                    TROY
          Hey. That's a convertible.

He points to the flaming wrecked Infiniti.

                    ARCHIE GATES
          Keep your fucking guard up.

                    TROY
          Is that leather interior?

                    DOC
          I think he's in shock.

                    TROY
          It's a fucking Infiniti
          convertible, isn't it?

                    DOC
          Yes.

                    TROY
          OK. So I owe you a car. I'm not in
          shock.

                    ARCHIE GATES
          We can talk about cars later, OK?

                    TROY
          Freeze --

He points his pistol at Imam.

                    IMAM
          Take it easy.

                    TROY
          Who is this guy?

                    ARCHIE GATES
          He's with us.

Troy and Imam look at each other a moment, Troy still points
his pistol at Imam.

                    TROY
          You're the guy with the little
          girl.

                    IMAM
          That's right.

                    TROY
          What are you doing here?

                    ARCHIE GATES
          He helped us find you.

                    TROY
          All right. You're all right.

He hugs Imam.

                    TROY
          How's your girl?

                    IMAM
          She's safe. For the moment.

                    TROY
          All right. Excellent. How can we
          help?

                    DOC
          Calm down, man.

                    TROY
          I'm calm. Don't I look calm?

                    IMAM
          We had a deal to get us to the
          border, but we need more vehicles
          for these people.

Troy moves nervously.

                    TROY
          We're gonna work it out. We can do
          it. We have to work it out.

                    DOC
          I'm not sure how. This is a lot of
          people.

                    TROY
          OK, you choose who we take. You
          tell the others it's not
          convenient, they'll have to die.

                    DOC
          Take it easy, man.

                    TROY
          You think I don't know what I'm
          saying. I know what I'm saying.
          We're gonna do more than steal,
          that's what I'm saying. We're
          gonna help these people out.

                    IMAM
          This guy was worth saving.

                    ARCHIE GATES
          He's a soldier.

Troy and Archie look at each other, smile slightly.

                    VIG (O.S.)
          Yes. Yes. All right.

They all turn to look.

WIDE SHOT -- Vig pops up in the desert, 150 yards away.

                    VIG
          You made it.

Vig comes running.

                    VIG
          I thought that was you. Yeah.

Troy smiles as he steps in the direction of Vig. Suddenly a
RIFLE SHOT RINGS OUT, Troy jumps.

SLIGHTLY SLOW MOTION -- Vig is hit in the collar bone, ONLY
THE SOUND OF THE BULLET SMASHING HIS FLESH AND BONE. He is
jerked, falls to his knees, but gets up, keeps staggering
toward Troy, 125 yards away.

Troy looks stunned.

Archie turns sharply to his right and FIRES a rifle.

An IRAQI SOLDIER, 150 yards to the side, drops to the ground
as Archie and Doc continue to hit him with gunfire.

Troy runs as hard as he can toward Vig.

                    ARCHIE GATES
          Cover him.

Doc looks around frantically with his pistol pointed. Archie
scans the area and directs 3 SHIITE RIFLEMEN to spread out.

                    ARCHIE GATES
          Lock it down. Shoot anything that
          moves.

                    IMAM
                 (translates)
          Haza janav yasat.

Troy runs, catches the staggering Vig in his arms and
embraces him. Blood runs from Vig's mouth, onto Troy's
shoulder, as Vig tries to talk.

                    VIG
          You made it, man --

Troy cries as he runs with Vig in his arms.

                    TROY
          Help him.

Doc takes Vig from Troy's arms and carefully lays him on the
ground, cradling his head in his lap. Vig spits blood.

                    VIG
          What happened to the Jesus fire,
          Doc?

                    DOC
          It's around you right now, man, it
          works on this side or the other
          side.

                    VIG
          You never told me that part. I
          guess I could go to one of them
          shrines that erase the bad you
          did --

                    TROY
          We made the right choice today,
          Conrad.

                    VIG
          We did good, right?

                    TROY
          We made the right choice.

The hole in Vig's collar bone is pumping out blood. Troy puts
his hands over it. Doc looks sad and scared as he tries to
turns Vig's head to help him breathe.

                    DOC
          Dear Lord watch over this man,
          help him if you can. Our father
          who art in heaven --

50 Shiites -- children and adults -- sit on the ground near
the bunker watch from afar.

Troy stands up looking around helplessly.

                    TROY
          Help.

                    DOC
          -- hallowed be thy name, thy
          kingdom come, thy will be done --

A gunshot rings out and -- slightly slow motion -- hits Troy
in the lower right chest -- and comes out again three inches
over, piercing a thin piece of his side -- with only the
sound of tearing tissue. Troy looks stunned as he is spun
around by the shot.

Archie spins around in the desert and looks at Troy.

                    ARCHIE GATES
          Goddamn it.

He runs hard across the desert toward Troy.

Troy falls next to Vig and they look at each other.

Troy's eyes are wide with pain as he breathes with great
difficulty -- RASPING.

INT. TROY'S RIB CAGE

His breathing creates an air pocket, crushing his organs to
the left side.

TROY'S POV

looking up at Doc, who is saying something to Troy, but
there's NO SOUND EXCEPT TROY'S LABORED BREATHING

The POV turns to the side -- Vig is no longer breathing.

FLASHBACK TO THE OPENING SCENE, but with weird, MUFFLED
SOUND

                    SOLDIER #5
          Take my picture.

                    VIG
          Do you still want to sell pictures?

                    TROY
                 (distracted monotone)
          For twenty.

                    SOLDIER #5
          Twenty bucks?

                    VIG
          War's been over five days, ain't
          gonna be any more of this, Jim.

                    SOLDIER #5
          Twenty dollars, man, what's the
          meaning of life?

                    TROY
          You're lucky you got to see
          anybody shot in this war.

                    SOLDIER #5
          Bobby, take my picture.

He holds the camera out.

                    SOLDIER #4
          If he shot the guy, it's up to him.

                    SOLDIER #5
          It's not like he shot a fucking
          deer. It's the enemy.

                    VIG
          It's Troy's enemy, yours for
          twenty.

BACK TO THE SCENE - CLOSE UP

Troy lies on the ground, trying to breathe, eyes wide.

TROY'S POV

Archie and Imam step into frame. Archie looks down at Troy,
opens his waist pack, pulls out a sterile wrapped scalpel.

TROY'S POV TURNS TO THE SIDE --

FISH EYE LENS - The Jaguar pulls up in SLIGHTLY SLOW MOTION.

Imam's Little Girl gets out of the passenger side, SLIGHTLY
SLOW MOTION, NO SOUND. Imam scolds her and gesticulates,
indicating she should be back with the others where it is
safe. The Little Girl embraces Imam and stares down at Troy
over her father's shoulder.

EXT. DESERT

Troy's eyes are wide, staring up at the Girl as he has great
difficulty breathing. Archie rolls Troy's shirt up, exposing
Troy's chest, with the bullet wound. Archie points to a spot
on Troy's upper chest, near the collar bone --

Doc squeezes a small tube of brown disinfectant gel onto this
spot -- the only sounds are the squirt of the ointment and
Troy's breathing.

Archie looks nervous, then focussed as he brings the shiny
metal scalpel down. Troy is in great pain as he watches
Archie plunge the scalpel into his upper chest. Archie twists
the scalpel to open the incision wide --

There is a pronounced HISSING as trapped air rushes out. Huge
relief comes over Troy's face as he breathes normally.

Regular sound FADES BACK IN, THE FIRST SOUND IS THE GIRL'S
THIN, INTERMITTENT HUMMING --

TROY'S POV FROM THE GROUND, LOOKING UP

                    ARCHIE GATES
          I've been waiting 18 years to get
          that right.

He tears open a short I.V. tube and plunges the I.V. into the
scalpel hole. There is a small valve on the end of the tube,
which he tightens.

A GUNSHOT SOUNDS -- Archie turns and looks over --

EXT. DESERT

FIVE SHIITE RIFLE MEN chase down and shoot, at 30 yards, the
last Iraqi gunner in the desert.

Troy sits up slowly and watches for a moment.

EXT. FRONT OF THE BUNKER - LATER

Shiite women and children chant and pray around Vig's corpse
as it lies in the open trunk of the Jaguar. Archie, Troy and
Doc stand together watching. Troy and Doc do a muted version
of Vig's Karate arm dance as they look down at his corpse.

                    TROY
          He's got no family.

Archie sadly takes Vig's big pistol from Vig's clenched hand.

                    ARCHIE GATES
          We're his family now.

                    DOC
          He wanted to go to one of those
          shrines.

                    IMAM
          Kajatar in Iran. We can take him.

Archie takes Vig's glasses off.

                    ARCHIE GATES
          Good. Take him.

EXT. DESERT - LATER

Archie fills a single rusted oil drum with gold bars and
tapes it shut. Troy sits in a folding chair nearby. He looks
pained and uncomfortable.

                    ARCHIE GATES
          Air pressure will build up about
          every fifteen minutes. Release the
          valve, close it up again.

Archie unscrews the valve on the tube in Troy's chest, and
air hisses out. Troy looks relieved. Archie closes the valve.

                    TROY
          How long can I keep doing this?

                    ARCHIE GATES
          Maybe four hours, if you're not
          bleeding too bad inside.

                    TROY
          I'm really thirsty.

                    DOC
          There's no water anywhere.

                    IMAM
                 (to Archie)
          I got you hooked up if you want to
          call your man.

EXT. DESERT - LATER

Archie operates a radio hooked up to a car battery.

                    ARCHIE GATES
                 (into the radio)
          Tar Baby, this is Brer Rabbit, do
          you read me?

                    DOC
          We're gonna be court-martialed.

                    ARCHIE GATES
          No, we're not.

Troy watches, tense.

                    ARCHIE GATES
                 (into the radio)
          Tar Baby, this is Brer Rabbit, are
          you reading this?

EXT. DESERT - DAY

Walter drives the motorcycle, nude, wearing his helmet with
radio attachment. Smithson and Paco ride along.

Archie is heard in a crackling radio transmission inside
Walter's helmet. Walter speaks into the small mouthpiece.

                    WALTER
                 (into radio)
          This is Tar Baby, come in.

                    ARCHIE GATES (O.S.)
          Where are you?

                    WALTER
                 (into radio)
          About two clicks outside camp.

                    ARCHIE GATES (O.S.)
          We're about ready for the briar
          patch, over.

                    WALTER
                 (into the radio)
          Right.

He looks uncertain, worried.

                    ARCHIE GATES (O.S.)
          You got me, Tar Baby?

                    WALTER
          I think so -- who handles the
          briar patch?

                    ARCHIE GATES (O.S.)
          You do.

                    WALTER
          Oh, OK, and the Tar Baby goes to
          the briar patch if everything's
          OK, right?

                    ARCHIE GATES (O.S.)
          No, the other way around.

                    WALTER
          Shit, I'm sorry, sir, I don't
          remember how the code goes --

INTERCUT WITH Archie, who looks exasperated. He is sweating
with a fever and his arm hurts.

                    ARCHIE GATES
          Six personnel trucks and a Humvee.

                    WALTER
          Wow. That's a tall order for a
          secret operation, sir.

                    ARCHIE GATES
          Talk to my friend Hash. Each
          driver will get 100K.

                    WALTER
          Did you say 100K?

                    ARCHIE GATES
          Roger. Brer Rabbit at 239 North.
          Add one medavac pack to the order,
          and dump the reporter.

                    WALTER
          Roger. Give me two hours.

INT. COMPANY B RADIO TENT - DAY

TWO DECODERS sit at a table wearing headphones. One writes
down: "BRER RABBIT AT 239 NORTH, DUMP THE REPORTER."

INT. BUNKER - DAY

CLOSE UP A SNOW GLOBE is shaken and little green dollars
swirl inside the little world, settling upon an early desert
oasis, old buildings, palm trees, donkeys, Three Kings,
peasants carrying the baby Jesus, and a Mobil gas station.

WIDER TO REVEAL HUNDREDS OF SNOW GLOBES are pulled from the
shelves and put into old cloth bags.

EXT. BUNKER - DAY

Doc cracks open a snow globe with pliers as all the water and
dollars drain out. Imam filters the water through a cheese
cloth held above an urn.

CLOSE ON the plastic Three Kings and Baby Jesus with the
Mobil gas station glisten in the wet palm of Archie's hand.

Archie looks at the Three Kings in his hand.

Troy cracks open a snow globe, filters water with a Shiite.

Dozens of Shiites are doing the same.

Archie passes an urn to some parched Shiites who drink the
water thirstily. Troy, Doc do the same.

EXT. B COMPANY RADIO TENT - DAY

Captain Van Meter, General Horn, and two radio decoders stand
looking at logs of transmissions.

                    CAPTAIN VAN METER
          There's so many transmissions --

                    GENERAL HORN
          Narrow it down to what sounds like
          Archie Gates and a Humvee.

A Humvee with HAVICHON and Walter drives by behind the
oblivious General, leading a convoy of several trucks.

                    GENERAL HORN
          I want a direction, we're not
          gonna comb the whole goddamn
          desert --

A PRIVATE runs up and hands General Horn a paper.

                    PRIVATE
          This is from Barlow's C.O. at Fort
          Bragg, something with his wife.

                    GENERAL HORN
                 (reads)
          Fort Bragg? I'll be damned.

Walter and Hash drive past Smithson and Paco and Cathy.

                    BILL SMITHSON
          Where the hell is he going now?

                    CATHY DAITCH
          I say we keep watching the General.

She takes off and Smithson follows her.

EXT. DESERT -  DAY

Imam pours gasoline on a pile of Vuitton suitcases,
Troy throws a match, the suitcases go up in a rush of fire.

EXT. DESERT - LATER

Imam hands two gold bars to a Shiite peasant, who takes them
and moves on. There are two long lines of Shiite peasants
patiently waiting to get their gold, as it is handed out by
Imam and another Shiite while, Archie, Troy, and Doc watch.
Shiites stash their gold bars inside their clothing and bags.

LATER

Everyone sits and waits: Archie, Troy, Doc, Imam, his
daughter, 105 Shiite peasants.

Troy looks pained, then releases the valve on the tube
sticking through his chest bandage and there is a hiss of
air. He looks relieved.

There is the SOUND OF DISTANT MOTORS RUMBLING. An approaching
convoy in the desert: six open U.S. personnel trucks, led by
a Humvee.

Archie, Troy, Doc, Imam, his daughter, dozens of Shiites
watch the convoy approaching -- they hold their guns ready.

The U.S. Military trucks and the Humvee pull up to the bunker.

Walter stands in the front of the Humvee with Hash, both
wearing sand goggles as they pull up -- Walter salutes.

                    HAVICHON
          Quelle gonzesse, Archie, you got
          yourself shot.

                    ARCHIE GATES
          Those better be words of sympathy.

6 ARMY DRIVERS, among them the disillusioned infantrymen
interviewed by Bill Smithson earlier, get out of their
vehicles, greeted by Doc, Archie, and Imam.

Walter walks up, carrying a medical pack.

                    WALTER
          Watcha doing out here, Troy?

They bang fists in greeting.

                    TROY
          Protecting the free peoples of the
          world, Walter, you know how it is.

                    WALTER
          We better get you fixed up to go
          home to the land of the brave.

Walter pushes an I.V. needle into Troy's arm.

                    TROY
          Give me that penicillin, baby.

Doc pushes an I.V. needle into Archie's arm and tapes the
penicillin sack to Archie's shirt.

                    HAVICHON
          Where ees bullion at, my man?

                    ARCHIE GATES
          Bullion ees buried. I'll show you
          after we get these people to the
          border.

                    HAVICHON
          Iranian border?

                    ARCHIE GATES
          Part of the deal.

                    HAVICHON
          C'est super, Archie, you got
          yourself a pain in the ass mission
          of mercy.

                    WALTER
          Sorry I fucked up the code, sir.

                    ARCHIE GATES
          It means we gotta move. They might
          be coming for us.

Bach's "Gloria" plays powerfully.

Shiites pile into the six open trucks. The lone oil can full
of gold is loaded, as well. Imam and his daughter are helped
into a truck by Doc. Archie whistles loud from the front seat
of the Humvee -- which leads the way as the convoy pulls out.

Doc, in the back of a truck with Shiites, waves.

Troy smiles as he sits in the back of a crowded truck with
Imam, his daughter, and other Shiites.

HIGH, WIDE CURVING HELICOPTER SHOT

The six truck convoy, led by the Humvee, rolls across the two-
lane desert road.

EXT. BASE CAMP - B COMPANY - DAY

SIX APACHE CHOPPERS are ROARING on the ground as Captain Van
Meter, his White Assistant, and General Horn board a chopper.
Smithson, Paco, and Cathy and her CAMERA MAN rush aboard the
last chopper in the line.

EXT. DESERT - DAY

The Humvee slows to a halt.

Archie stands in the front of the Humvee with a rifle at his
side -- looking straight ahead -- concerned. Troy, Doc, Imam,
and daughter stare ahead, concerned

EXT. THE IRANIAN BORDER

50 yards ahead -- a low wall of razor wire.

100 yards beyond it, dozens of Iraqi tanks are lined up along
the border, 100 feet apart, stretching into the distance
either way. There are 50 IRAQI GROUND TROOPS standing at the
border station, marked by razor wire on the one-lane road.

On the far side of the border, IRANIAN SOLDIERS with RELIEF
WORKERS wearing RED CRESCENTS wait by white school buses and
stare at the American convoy.

EXT. IRAQI SIDE OF THE BORDER

Archie stares at the border, thinking.

Imam helps Troy down from the truck. Doc carries the Little
Girl.

                    HAVICHON
          What are you seenking?

                    ARCHIE GATES
          I see an opening we can walk
          through. But it's not wide enough
          for a truck.

Archie gets out of the Humvee and looks at the border.

                    ARCHIE GATES
          We'll walk them to the border. The
          Iranians will take them. We'll
          walk back to the trucks and get
          out of here.

Doc turns and signals to the drivers to come up.

Troy takes the safety off his M-16.

5 U.S.Drivers get out with their rifles ready. They release
the safeties. Havichon, with his leg in a cast, stays back to
man the mounted machine gun on the Humvee. Iraqi soldiers on
the border nervously watch the Americans and the Shiites,
holding their machine guns.

INT. IRAQI TANK - DAY

POV THROUGH IRAQI GUN SIGHT -- cross hairs pan from Doc, to
Troy, to Imam, to Archie.

EXT. BORDER

                    ARCHIE GATES
          Make a close group.

                    IMAM
                 (translates)
          Jihad yamat -- yamat.

105 Shiites empty the trucks and gather in a crowd that walks
toward the border. Two Shiite men carry Vig's body, wrapped
in Arabic cloths.

Archie, Troy, Doc, lead the crowd single file through a
narrow opening in the razor wire. On the other side, the
crowd spreads out and keeps walking. Archie, Troy, and Doc
walk three abreast, 7 feet apart, rifles ready.

Imam and Walter are behind, flanking them.

FACES: CLOSE DOLLY - SHIITE Children, Women, Men, as they
fearfully walk toward the border. The five U.S. Drivers flank
the Shiites on either side, rifles ready.

PAN TO - Troy suddenly drops to one knee.

                    DOC
          Let the air out.

                    TROY
          It's not the air, I don't know
          what it is --

                    DOC
          Stay back.

                    TROY
          I'm all right. I'm just dizzy or
          something --

EXT. IRAN SIDE OF THE BORDER

Iranian soldiers and relief workers stand watching.

PAN AROUND TO - IRANIAN SIDE POV

The backs of the Iraqi troops and tanks, and the approaching
Shiites and Americans, walking in the distance.

EXT. IRAQI SIDE OF THE BORDER

Archie helps Troy as they walk three abreast with Doc.

CHOPPERS ARE HEARD in the distance. They grow LOUDER. Imam
turns and looks back. Archie turns around and looks.

SIX APACHE CHOPPERS approach from the distance

CLOSE DOLLY Archie.

                    ARCHIE GATES
          Double time.

He lets go of Troy and starts jogging toward the border. Troy
cannot jog, he crouches down, and is passed by the others.
The Shiites look up at the choppers as they jog. Doc and
Walter look up also. Archie does not.

Havichon in the Humvee swings the mounted gun up to the
choppers as they pass overhead, loud.

PAN UP TO Six Apaches hover over everyone's heads and land in
the 50 yards between Archie and the border, blocking his
path, blowing up dust.

Archie, Troy, Doc, Imam, the Shiites turn and wince in the
blowing sand.

10 U.S. MILITARY POLICE jump from the landing choppers,
followed by another TEN U.S. TROOPS with rifles.

Iraqi soldiers watch apprehensively.

M.P.S grab Archie, Troy, And Doc, and pull them away from
the Shiites.

Troy shouts over the choppers.

                    TROY
          Wait.

U.S. soldiers push the Shiites toward the border.

The Shiites, including two who carry Vig's body, run toward
the border unaccompanied by American protection.

                    ARCHIE GATES
          Let them get over the border.

Troy pulls away from MPS, resisting arrest.

                    TROY
          Let them get over, wait --

Plastic handcuffs are put onto Troy, behind his back.

                    TROY
          I have to reach this --

Archie and Doc, not resisting, are handcuffed in front --

                    ARCHIE GATES
          Put his cuffs in front.

He and Doc are pulled away from Troy.

Iraqi soldiers take the Shiites prisoner, grabbing them,
throwing some to the ground. Troy looks over his shoulder at
this as Imam's daughter is ripped from his arms and he is
thrown to the ground and dragged.

                    TROY
          Look what's happening.

He collapses to one knee.

                    CAPTAIN VAN METER
          Not our mission, Barlow.

Troy grimaces on the ground, he can't breathe, but the cuffs
prevent him from releasing his valve. Troy struggles.

                    TROY
          Cut my cuffs --

Captain Van Meter leans down to Troy. He shouts over the
choppers.

                    CAPTAIN VAN METER
          You fucked me and you're fucked
          now, so shut your goddamn mouth.

Shiites are lined up in a firing squad.

                    DOC
          He's gonna die.

Troy lies on the ground suffocating. Archie drags the MP
holding him as he goes to General Horn.

                    ARCHIE GATES
          Goddamn it, Ron, give him medical
          attention, don't let him die --


                    GENERAL HORN
          We are not involved in the Shiite
          problem, do you understand
          me? You are AWOL, you are a
          fugitive, you are under arrest.

                    ARCHIE GATES
          Cut his cuffs.

General Horn walks away as MPS stare at Troy on the ground,
concerned.

A US SOLDIER stares -- upset by what's happening, reaches in
his pocket, pulls out a hunting knife, pops the blade,
crouches down to Troy, exchanges a look with the MP standing
by, and cuts Troy's plastic cuffs. Troy reaches with
difficulty to the valve on his chest turns it -- and breathes.

Archie looks at Troy, then up at the border.

Imam and the Shiites are lined up in a firing squad. Vig's
body is dropped in the sand.

                    ARCHIE GATES
          We got the gold.

                    GENERAL HORN
          What?

                    ARCHIE GATES
          We got the Kuwaiti bullion.

                    GENERAL HORN
          Bullshit.

Archie pulls away from the MPs holding him and runs toward
the lead truck -- where MPs grab and wrestle him down.

                    ARCHIE GATES
          Pull that barrel.

                    GENERAL HORN
          Pull it.

An MP jumps into the truck, pushes the barrel over; 30 gold
bars spill to the sand.

The General looks at the gold. Troy and Doc, held in custody,
watch.  The General makes a 'CUT' signal to the choppers --
and the chopper engines cut off and whir down; it grows QUIET.

THE U.S. Soldiers -- holding Walter and the Drivers in
custody -- stand and watch Archie.

                    GENERAL HORN
          How much do you have?

                    ARCHIE GATES
          4 tons.

General Horn picks up a gold brick.

                    GENERAL HORN
          Where's it at?

                    TROY
          Get them over first.

                    ARCHIE GATES
          They helped us get it, Ron. I made
          a deal, and that's soldier's
          honor. You can't fuck them now.

General Horn looks at Archie.

                    ARCHIE GATES
          You can return this gold, be a big
          hero, get another star maybe.

Everyone stares at General Horn. After a pause, the General
fires his pistol into the air.

Iraqi soldiers freeze as they are about to fire on the
Shiites.

                    GENERAL HORN
          Let's go, Doug.

Captain Van Meter and General Horn walk 40 yards to the
frozen Iraqi soldiers and the terrified Shiites.

Archie, Troy, Doc in handcuffs with MPS, watch.

Walter and the other U.S. Soldiers watch from afar as
Captain Van Meter and General Horn walk into the midst of
Iraqi soldiers.

                    GENERAL HORN
          Who's in charge here?

An OLDER IRAQI GENERAL steps forward and salutes.

                    GENERAL HORN
          We have to talk about this
          situation.

Archie, Troy, Doc, U.S. soldiers watch from a distance.

ARCHIE'S POV FROM AFAR

General Horn talks to the Iraqi general.

BACK TO THE SCENE

U.S. Soldiers watch.

TROY'S POV FROM AFAR

General Horn and Captain Van Meter walk back toward them.

It is QUIET. No one says anything.

Pan across Paco taping.

                    BILL SMITHSON
          In a morbid tableau these men have
          recovered some of the gold bullion
          stolen from Kuwait --

                    CATHY DAITCH
          --in violation of American policy,
          saved over a hundred Shiite
          refugees while recovering stolen
          Kuwaiti gold --

                    GENERAL HORN
          Turn that damn camera off.

He walks up and forcibly pushes the camera to the ground, Van
Meter pushes Cathy's camera down.

                    BILL SMITHSON
          That's a 75 thousand dollar
          camera --

                    GENERAL HORN
          What the fuck are they doing here?

                    SARGEANT
          I thought they were authorized --

                    GENERAL HORN
          They are not fucking authorized,
          for Christ's sake --

MPs take the tapes from the cameras.

                    GENERAL HORN
          Haven't I taken care of you,
          dammit?

He signals the choppers to start up.

THE CHOPPER ENGINES SLOWLY WHINE into gear.

                    CATHY DAITCH
          I'm gonna get that tape back.

General Horn walks over to Troy, Archie, and Doc.

                    GENERAL HORN
          You are under arrest. You are
          going to be court-martialed. And
          you will show us where the bullion
          is right now.

He walks into a chopper, which is now revving at full speed.

PAN TO Troy, Archie, Doc turn to the border and watch.
Walter, the handcuffed Drivers, the MPS and other U.S.
Soldiers also watch.

The Shiites are released by the Iraqis. They collect
themselves and gather in a group. The group walks over the
border and is received by the relief workers.

Troy, Archie, Doc watch. A U.S. Soldier WHISTLES through the
loud choppers.

                    SOLDIER #10
          Yeah.

Then another Soldier joins in, WHISTLING and CLAPPING.

Then another soldier, until all twenty U.S.
Soldiers and MPs present are whistling and cheering Troy,
Archie, and Doc as they stand there while the choppers throb.

50 yards away: Imam holds his daughter, on the Iran side,
about to get into a Red Crescent bus.

Imam and his daughter wave.

Archie raises his handcuffed wrists to wave back; Troy and
Doc follow, raising their cuffed hands to wave.

Freeze frame.

"I Get Around" by the Beach Boys KICKS ON.

                                         CUT TO

Text over black: Troy Barlow, Archie Gates, and Doc Elgin
were court-martialed and convicted of disobeying orders and
the wrongful death of Conrad Vig.

They each served eighteen months in a military prison.  Bill
Smithson and Cathy Daitch's testimony resulted in reduced
sentences.

Troy Barlow runs his own carpet company in Torrance, Cal.

INT. TROY'S CARPET COMPANY - (MOS)

"I Get Around" CONTINUES. Troy excitedly gives instructions
to workers carrying out big rolls of carpet. He wears a short
sleeved white shirt and a dark tie. His wife gives his two
year old daughter to him as she holds a new baby and Troy
uses a respiratory inhaler.

                                         CUT TO

Text over black: Doc Elgin applied to the U.S. Army Rangers,
but was denied. He then turned down Troy Barlow's offer to
partner in the carpet business and plans to join Archie
Gates' company.

EXT. KENNEDY AIRPORT - CURBSIDE (MOS)

MUSIC CONTINUES: Doc Elgin takes Vuitton bags curbside at
Kennedy airport and is given a ten dollar tip.

                                         CUT TO

Text over black: Archie gates became a military consultant in
Hollywood.

FILM SET - (MOS)

MUSIC CONTINUES: Archie on a film set, wearing sunglasses,
shows an action star how to push away the barrel of a bad
guy's rifle.

                                         CUT TO

Text over black: Saddam Hussein is still in power. Shiite
refugees are still in Iran. Late in 1991, Iraq returned the
gold to the government of Kuwait . . . which claimed that
some was missing.









`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
