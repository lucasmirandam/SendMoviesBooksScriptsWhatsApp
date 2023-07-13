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




                1492: CONQUEST OF PARADISE


                             by

                       Roselyne Bosch





                                        REVISED

                                        September 23, 1991






	FADE IN:

	CREDITS AND MUSIC OVER:

	INT.  AUDIENCE ROOM - GRANADA - DAY

	We start on a man's elegant slipper.  He is seated in a
	splendid chair.  Moving up the stocking leg, we pass the
	garter of Castile, coming to rest on a pair of delicate
	hands.  His fore finger impatiently plays with a large
	topaz ring.  Over this, we hear distant footsteps, echoing
	on marble floors.

									CUT TO:

	A Castilian face:  aquilaine profile, olive complexion,
	dark eyebrows and meticulously sculpted beard.  This is
	TREASURER SANCHEZ.

	A door slams somewhere, the footsteps getting closer.  We
	can now here a subdued conversation.

	TREASURER SANCHEZ stands up as:

	The door opens at the far end of the large gilded room.
	A WOMEN, magnificent in somber taffeta, enters.  QUEEN
	ISABEL OF SPAIN moves towards him.

	He bows slightly as she sits at the end of the large
	table.  She is followed by a PRIEST, BROTHER BUYL, and
	three dignitaries of Church and State.

	All sit beside her.  TREASURER SANCHEZ takes a document
	and starts to read aloud.

	On screen the words:  GRANADA - SPAIN - 1500

					SANCHEZ
			Your Majesty would wish to know the
			true facts concerning the island of
			Hispanola, our first settlement in
			the New World, and the activities
			there of your servant, Christopher
			Columbus, Admiral of the Ocean Sea,
			Governor of that Island.  You will
			remember with what hopes and
			promises he beguiled us -- the truth
			is that he now presides over a state
			of chaos, degradation and madness
			beyond imagining.

	SANCHEZ punctuates each word carefully.

					SANCHEZ
			From the beginning, Columbus proved
			himself incapable of managing the
			affairs of the island.  He appointed
			his brothers to important positions,
			at once injuring the pride and
			dignity of the nobles who had gone
			with him.  He promised to build a
			city, the City of Isabel, named
			after Your Majesty.  What he
			actually built was nothing but a
			collection of huts, and that in the
			wrong place, for all of it was
			easily swept away by rain and mud.
			Is that not so, Brother Buyl?

	The PRIEST nods.

					BROTHER BUYL
			Yes, Your Honor.

					SANCHEZ
			He promised gold.  Not finding the
			easy quantities he promised,
			Columbus commanded each Indian to
			pay an annual tribute.  Most being
			unable to, they were barbarously
			punished, against the express wish
			of Your Christian Majesties...

	ISABEL lowers her eyes.

					SANCHEZ
			Since provocation and injustice
			never ceases, many of the Indians
			have fled to the forests, or have
			begun to slay the Christians.

	ISABEL looks over at BROTHER BUYL.

					ISABEL
			Could it be so?

					BROTHER BUYL
			Yes, Your Majesty.

					SANCHEZ
			But there is worse.  From the
			beginning, he forced the nobles to
			undergo physical labor, treating
			them equally with the Indians, all
			of them reduced to slavery.  When
			the nobleman Adrian de Moxica
			protested against such treatment...
				(he pauses)
			... he was executed.
				(pause)
			Is that not true also, Brother
			Buyl?

					BROTHER BUYL
			Yes, Your Honor.  It is all true.
			All of it.  I saw it with my own
			eyes.

					SANCHEZ
			He has lost control.  His great
			arrogance has led him into
			depravity.  He encourages our
			soldiers to marry the native women.
			He promised a paradise, but he has
			made a hell full of all its horrors.

	Silence.

					ISABEL
			Is that the man I knew, Treasurer
			Sanchez?

					SANCHEZ
			Yes, Your Majesty.

									CUT TO:

	INT.  HUT - ISLAND - DAY

	CLOSE ON the FACE:  COLUMBUS is stretched on a bed,
	sweating heavily in fever, clearly delirious.  Insects
	crawl over his face, he makes no effort to swat them away.
	There is a dripping sound of water.

					FERNANDO (V.O.)
			Of all the words my Father wrote and
			there were many, I remember these
			the most.  "Nothing that results
			from human progress is achieved with
			unanimous consent..."

	Rain is falling into the room over documents spread on a
	table.  COLUMBUS stands up and moves to the table.  Some
	of the walls have been blackened with smoke and flames.  A
	lizard scuttles into the shadows.

					FERNANDO (V.O.)
			"And those who are enlightened
			before the others are condemned to
			purse that light in spite of
			others..."

	COLUMBUS stares down at the documents, moving them away
	from the rain drips.  He stares out by the window, and we
	see:

	A devastated landscape.  Flooded roads, half-destroyed
	huts, broken trees... A dog picks its way through the mud.

					FERNANDO (V.O.)
			There was a time when the New World
			didn't exist...

									DISSOLVE TO:

	EXT.  OCEAN - DAY

	A vast stretch of ocean.  It fills the screen.  Unbroken,
	infinite, luminous, mysterious -- it stretches away,
	meeting and blending with the sky in pale ribbons of pearl
	and misty light.

					FERNANDO (V.O.)
			... The sun set in the west on an
			ocean where no man had dared to
			venture.  And beyond that,
			infinity...

	Pulling back, we discover:

	A TEN-YEAR-OLD BOY and a strongly built man in his middle
	thirties, are riding a mule.  The MAN'S weather-beaten
	face frames unusually bright eyes.

	On the screen these words:  ANDALUSIA, 1491

	COLUMBUS AND HIS SON are following a windthrashed path at
	the top of the hill.  COLUMBUS hums a song, and FERNANDO
	looks up at him in adoration.

					FERNANDO (V.O.)
			Once I asked my Father where he
			wanted to go.  And he replied:  "I
			want to travel all over the seas.  I
			want to get behind the weather..."

	FERNANDO laughs.  He then starts to hum along with his
	FATHER.

									CUT TO:

	EXT.  HILLSIDE APPROACH TO LA RABIDA - DAY

	A rugged landscape, remote and steep, with lines of stone
	walls and thousands of sheep.

	FERNANDO, rushes down a slope, barking like a dog, chasing
	the sheep who fan out in droves in front of him.  High-
	spirited and wild, FERNANDO laughs and tumbles over.

	COLUMBUS rides his mule along the narrow track, watching
	his SON'S antics with amusement.  In the distance, the
	solitary figure of A MONK SHEPHERD.

	COLUMBUS calls out to his son:

					COLUMBUS
			Fernando!

	FERNANDO runs over.  COLUMBUS lifts him up onto the mule.

	As they move along the track we now see, perched on a
	distant hill, isolated and austere, the Monastery of La
	Rabida, their destination.


	EXT.  CLOISTER - LA RABIDA - DAY

	As they dismount and walk into the quiet cloisters,
	FERNANDO suddenly spots a familiar FIGURE, standing under
	the ROMAN arches.

					FERNANDO
			Diego!

	He rushes over, full of joy, to kiss his BROTHER -- an
	adolescent dressed in the novice-robe, with a solemn,
	delicate face.  DIEGO'S response is constrained.

					COLUMBUS
			Diego!  Aren't you going to kiss
			your brother?

	DIEGO smiles a little, and kisses FERNANDO -- who is
	immediately distracted by a procession of hooded MONKS,
	hurrying to the refectory, as a bell begins to chime.

	The MONKS all turn to greet ANTONIO DE MARCHENA, a white-
	haired, elderly man -- and a monk cosmographer.
	MARCHENA'S gesture is broad and elegant as he opens his
	arms to greet COLUMBUS.  He pats FERNANDO'S head and turns
	to DIEGO.

					MARCHENA
			Diego, take Fernando to the dining
			hall.  He must be hungry.

					DIEGO
			Yes, Father.

	Both CHILDREN leave under the arched roof.  COLUMBUS and
	MARCHENA begin to walk across the cloister.

					MARCHENA
			Diego is a bright boy -- a pleasure
			to teach -- but so serious...
			Brothers should be raised together,
			Colon.  Even brothers from different
			mothers...

					COLUMBUS
			Father, I am doing what I think is
			the best for him.  And he has the
			teacher I would have chosen for
			myself.

	MARCHENA laughs at the compliment.

					MARCHENA
			Just be careful you don't lose him.

	They have crossed the cloister.  MARCHENA pushes open a
	door.


	INT.  A HUGE LIBRARY - LA RABIDA - DAY

	Hundreds of books lined up on the shelves, displaying the
	miracle of printing, a recent German discovery.  Several
	MONKS, perched on high stools behind lecterns, are busily
	"ILLUMINATING" some of these massive volumes, delicately
	painting around the letters in bright colors and gold
	leaf.

	Rays of light fall diagonally through high openings,
	projecting geometric patterns on the tiled floor.  As
	MARCHENA and COLUMBUS move forward their conversation is
	punctuated by light and shadow.

					MARCHENA
				(fumbles in a pocket
				under his robe)
			I have something for you.

	Almost casually, he hands COLUMBUS a letter.

					MARCHENA
			You will be heard at the University
			of Salamanca...

	COLUMBUS stops dead in his tracks.  Almost frantically he
	tears open the letter, hardly able to believe his eyes.

					COLUMBUS
			God... That's in a week!

					MARCHENA
			That's what it says.

					COLUMBUS
			How did you manage it?

					MARCHENA
				(smiling)
			With some difficulty.  I had to
			promise them you were not a total
			fool.

	MARCHENA pushes open a second door, hidden behind a wooden
	panel.


	INT.  STUDY - LA RABIDA - DAY

	MARCHENA is not a tidy man.  Books are piled up on the
	floor, the desk, on every shelf, along with maps,
	instruments of astronomy... the visible evidence of an
	inquiring mind.

	With practiced familiarity, as if they had done this a
	hundred times -- which indeed they have -- MARCHENA sits
	behind his desk, and COLUMBUS opposite him.  MARCHENA
	lights a candle and considers the mess.  Then
	methodically, he slowly sweeps it from in front of him
	with his sleeve, exposing a large map underneath.

	When he looks up again, there is a new severity in his
	expression.  He turns over an hourglass.

					MARCHENA
			Why do you wish to sail west?

					COLUMBUS
			To open a new route to Asia.  At the
			moment there are only two ways of
			reaching it...

	He leans forward, and points to the map spread out on the
	desk.

					COLUMBUS
			By sea, sailing around the African
			Continent -- the journey takes a
			year...

	His finger traces the journey, from west to east.

					COLUMBUS
			Or by land...

	We are CLOSE now on the map, as we watch his finger
	tracing a line between Europe and the Far East.

					COLUMBUS (O.S.)
			... But the Turks have closed this
			route to all Christians.  Trading
			with the Orient has become arduous,
			if not dangerous.
				(he pauses)
			There is a third way...

	We notice that the outline of the European continent is
	familiar.  But we also notice that, in that great expanse
	of ocean, the whole American continent is missing.

					COLUMBUS
			By sailing West across the Ocean
			Sea.

	CLOSE ON MARCHENA'S FACE, touched by the mystery.

					MARCHENA
			How can you be so certain?  The
			Ocean is said to be infinite.

					COLUMBUS
			Ignorance!  I believe the Indies are
			no more than 750 leagues west of the
			Canary Islands.

					MARCHENA
			How can you be so certain?

					COLUMBUS
			The calculations of Toscanelli Marin
			de Tyr, Esdras...

					MARCHENA
				(interrupting)
			Esdras is a Jew.

					COLUMBUS
			So was Christ!

	MARCHENA throws his quill in the air in frustration.  He
	glances at the hourglass:

					MARCHENA
			Two minutes... and already you're a
			dead man.  Don't let passion
			overwhelm you, Colon.

					COLUMBUS
				(mockingly)
			I'll try to remember that,
			Marchena...

					MARCHENA
			Father Marchena!

					COLUMBUS
				(ignoring this)
			Passion is something one cannot
			control!

					MARCHENA
				(heatedly)
			You get so carried away when you are
			being contradicted!

					COLUMBUS
			I've been contradicted all my
			life... Eternity!

					MARCHENA
				(amused)
			Only God knows the meaning of such
			words, my son.


	EXT.  COURTYARD - LA RABIDA - EVENING

	DIEGO and FERNANDO wait in the courtyard.  COLUMBUS
	appears and lifts FERNANDO onto the mule.  DIEGO turns to
	go.

					COLUMBUS
			Diego.

	COLUMBUS walks over to him, squats down so their eyes
	meet.  He looks at his SON for a moment.

					COLUMBUS
			Would you like to come and stay with
			us?

	Uncomfortable with the proposition, DIEGO cannot find an
	answer.

					COLUMBUS
			I'll do whatever makes you happy.

					DIEGO
			I am happy, Father.

	COLUMBUS reaches out -- and touches his shoulder.

	He climbs up behind FERNANDO, who waves back to his
	BROTHER as they ride off.


	EXT.  CADIZ - STREETS AND CATHEDRAL SQUARE - NIGHT

	COLUMBUS leads the mule, carrying the sleeping FERNANDO,
	through narrow streets.  There's a clamorous noise in the
	air.  Suddenly a large group of YOUNG MEN, shouting with
	excitement, run up the street and brush past them.  Then
	more people.  FERNANDO sits up straight.  The noise grows,
	rowdy, rumbling, sharp with excitement and violence.

	Huge CROWDS have thronged the massive old square outside
	the cathedral.  Holding the mule by its reins, COLUMBUS
	tries to push his way through... Suddenly, as a gap opens
	in the crowd, we see the cause of the excitement:  in the
	center of the square stand three pyres, already alit.
	HOODED EXECUTIONERS are busy around the fires.

					FERNANDO
			Look, Father!

	Before COLUMBUS can stop him, FERNANDO has slipped off the
	mule and into the crowd.   

					COLUMBUS
			Fernando!

	But the BOY has been swallowed into the mass of people.
	COLUMBUS tries to follow him.  Flames leap into the night
	sky with a terrible crackling, lighting up the square with
	a lurid glow.  Prayers are being chanted somewhere.

	FERNANDO has elbowed his way to the front of the crowd.

	A PRIEST brandishes a crucifix in front of the face of a
	MAN bound to a post.  The heretic wears the "sambenito", a
	robe made of coarse fabric on which his sins have been
	crudely illustrated -- we see cabalistic signs,
	indicating that the man is Jewish.

	THE MAN'S eyes are mad with fear.  But he refuses to kiss
	the crucifix, as a sign of his repentance.

	FERNANDO is transfixed by the scene, but still doesn't
	realize what is happening.  He is too close to the
	platform to see what is in the flames of the other pyres.

					COLUMBUS
			Fernando!

	He motions to his son, takes the BOY'S hand, and drags him
	away from the scene.  But FERNANDO looks back.  The
	distance now allows him to see inside the flames.

	A HALF-CHARRED FIGURE -- THE MAN'S face is distorted in a
	silent scream... The neck snaps like burning wood, and the
	head falls on one shoulder.  Then the whole body collapses
	into the fire.


	INT.  BEATRIX'S HOUSE - HALLWAY AND STABLE - NIGHT

	COLUMBUS and FERNANDO lead the mule into the white-washed,
	stone-floored hallway of the modest house.  FERNANDO is
	mute, shocked by what he just witnessed.  COLUMBUS takes
	the mule into its stall, and as he does so, his mother,
	BEATRIX, appears from the kitchen to greet them.  She is a
	beautiful woman in her twenties, a calm, strong, domestic
	personality.  COLUMBUS tousles the BOY'S hair.  FERNANDO
	glances at his MOTHER but looks subdued and doesn't say
	anything.


	INT.  BEATRIX'S HOUSE - KITCHEN - NIGHT

	COLUMBUS joins BEATRIX in the kitchen, where a MAID is
	cooking.  He explains Fernando's subdued manner.

					COLUMBUS
			Executions.  In the square.

	BEATRIX nods.  He goes to the stone butt and pours water
	on his hands.

					COLUMBUS
			They've agreed to see me in a week.

	BEATRIX puts the candle on the table.  Her face lights up
	with a smile.  He walks to her, and kisses her.

					COLUMBUS
			I could be gone for years.

					BEATRIX
			I know.

					COLUMBUS
			I haven't given you much of a life.

					BEATRIX
				(amused)
			Well... that's true.  I have a child
			by a man who won't marry me!  Who's
			always leaving...

					COLUMBUS
			Are we going to argue?

					BEATRIX
			I'd love to argue with you
			sometimes.  But you're never here!

	They laugh and kiss.

					COLUMBUS
			Perhaps I was never meant to live
			with a woman...

					BEATRIX
				(still kissing him)
			I find that hard to believe.

									DISSOLVE TO:

	INT.  BEATRIX'S HOUSE - KITCHEN - NIGHT

	They are eating around the table, and FERNANDO is
	unusually silent and thoughtful.  COLUMBUS pours a little
	wine into FERNANDO'S water, to distract him.  FERNANDO
	looks up at him, surprised.  COLUMBUS smiles, then looks
	over at BEATRIX.

					COLUMBUS
			Fernando, don't you think we are
			lucky to live with such a beautiful
			woman?

	He winks at FERNANDO.  BEATRIX smiles.


	INT.  BEATRIX'S HOUSE - BEDROOM - NIGHT

	The room is dark.  As COLUMBUS approached the bed with a
	candle, it illuminates the naked body of BEATRIX.  BEATRIX
	looks up at him intently.  A drop of wax falls on her
	skin.  She flinches, murmurs...

	They make love.


	EXT.  SALAMANCA UNIVERSITY - DAY

	A medieval "campus".  Students-novices are playing
	"pelote", with basket-gloves and a hard ball.  They run
	with their robes tucked around their waist, revealing
	white legs.  Others are studying, reading, hurrying to
	their class.

	We find COLUMBUS watching the game from the steps above
	the court.  Others are waiting with him.  A MONK comes
	from a door, and looks around the group.

					MONK
				(hesitant)
			Christopher Columbus?


	INT.  AUDIENCE ROOM - UNIVERSITY OF SALAMANCA - DAY

	An El Greco painting.  A tableau of twenty MEN sitting on
	dark, sculpted seats.  Candles throw a gloomy light on
	their faces.  Some are Churchmen, others are dressed in
	bourgeois outfits.

	Only one of them is richly dressed in the grand Spanish
	fashion -- he is SANCHEZ, Treasurer of the House of
	Aragon.  A MONK (Don AROJAZ) holds a stick with an ivory
	claw at the top.  Languidly, he scratches his back -- his
	off-hand manner only makes him more impressive than his
	peers.

					AROJAZ
			You say Asia can be found by sailing
			west?

					COLUMBUS
			Yes, your Eminence.  The voyage
			should not take more than six or
			seven weeks.

					AROJAZ
			Unfortunately, Don Colon, that is
			precisely where our opinions
			differ...
				(pause)
			Are you familiar with the work of
			Aristotle?  Erathostene?  Ptolemeus?

					COLUMBUS
			I am, Your Eminence

					AROJAZ
			Then you cannot ignore that
			according to their calculations, the
			circumference of the Earth is
			approximately...
				(he leans forward)
			22,000 leagues or more.  Which makes
			the ocean... uncrossable.

	He leans back, satisfied, and pauses for effect.

					AROJAZ
			But you may have found new evidence
			proving that these men of knowledge
			are totally mistaken!

	A ripple of mirthless laughter.

					COLUMBUS
			Your Excellencies are aware of the
			statements of Marin de Tyr?

					HERNANDO DE TALAVERA
			We are.

					COLUMBUS
			Then you are also aware that his
			theories contradict Ptolemeus... De
			Tyr believes the Ocean to be only
			750 leagues...

	A murmur of protest spreads among the members of the
	Commission.  But Columbus is determined to press his
	theories.

					COLUMBUS
			The Florentine Toscanelli and the
			French Cardinal Pierre d'Ailly both
			think that Marin de Tyr is accurate
			in his calculations.  And therefore,
			that the ocean can be crossed.

	Indignant and amused murmurs.  DIEGO DE DEZA raises his
	voice to quiet the assembly.

					DIEGO DE DEZA
			Gentlemen, let us suppose Marin de
			Tyr is right...
				(the laughter
				subsides)
			Are we here to examine this proposal
			or not?

	Silence.

					DIEGO DE DEZA
				(to Columbus)
			In your opinion, how long would the
			voyage be?

					COLUMBUS
			Seven weeks.  Six, during the summer
			months.

	The murmur increases.

					AROJAZ
			Marin de Tyr is wrong -- and has
			been corrected many times over the
			centuries by the finest geographers.
			Your voyage, Don Colon, would take a
			year!

	A MAN of simple bearing, that COLUMBUS identifies as
	being a seaman, interrupts.

					VICUNA
			How would the crew survive without
			being able to land for fresh water?
			Water is undrinkable after six
			weeks!  You'd never be able to turn
			back!

					COLUMBUS
			We wouldn't have to turn back!  We
			would find land at this point!

					AROJAZ
			Senor Colon, an experienced captain
			such as yourself will understand our
			concern with the crew.  I am not
			willing to have on my conscience the
			loss of men who would have relied
			upon our judgment.

					COLUMBUS
			Excellency, you are right.

	Instantly, the protests stop.

					COLUMBUS
			I am a seaman, not a scholar... But
			as a simple man craving for
			knowledge, I have read all the work
			of these renowned geographers and
			discovered that none of them could
			agree on the exact width of this
			ocean...

	He pauses, and starts walking in front of the experts, as
	a lawyer before a grand jury.

					COLUMBUS
			Therefore, as a modest man, I
			wonder:  who is right?

	The experts listen.  CLOSE ON SANCHEZ'S FACE, impressed by
	the boldness.

					COLUMBUS
			Who is right?  This question remains
			unanswered.

	He walks and stops before TALAVERA, and catches the look
	of SANCHEZ, sitting just behind him.

					COLUMBUS
			Your Eminence, there is only one way
			to settle the matter.  And that is
			to make the journey.
				(to the assembly,
				with passion)
			I am ready to risk my life to prove
			it possible.

					AROJAZ
			Your life, and that of others!

					COLUMBUS
			If they agree to follow me, yes.

					SANCHEZ (O.S.)
			Suppose you cross this ocean.
			Suppose you reach Asia.  What would
			Spain do there?

	Conscious of a friendlier voice, COLUMBUS sees the
	Treasurer SANCHEZ, an imposing man in his fifties.

					COLUMBUS
			Trade, Your Excellency.  According
			to Marco Polo, the Kingdom of China
			is one of the richest of the world.
			Even the meanest buildings are
			roofed with gold.

					AROJAZ
				(interrupting)
			Is that all that interests you?
			Gold?

					COLUMBUS
			No.  The Portuguese have already
			discovered black-skinned people.  I,
			too, will find other populations --
			and bring them to the word of God.

	THE MONK smiles thinly.

					AROJAZ
			Christopher -- Christo Ferens -- the
			Bearer of the Cross!

					MONK
				(ironic)
			And Colon -- the one who populates!

	Another small rill of laughter.

					AROJAZ
			If God intended our proximity to
			Asia, do you believe he would have
			waited for you to show it to the
			world?

					COLUMBUS
			Did He not choose a carpenter's son
			to reveal Himself to the world?

	A hum of interest.  CLOSE ON SANCHEZ -- watching COLUMBUS
	intently, a hint of an admiring smile on his lips.

					AROJAZ
			So you consider yourself the chosen
			one?

	A pause.

					AROJAZ
			Don't you realize your words could
			be considered heretical?

					COLUMBUS
				(calmly)
			Blind faith is what I consider
			heresy!

	The murmur turns to an audible gasp.  AROJAZ gets to his
	feet and leans forward, threateningly, the flame of a
	candle only inches from his face.

	There is absolute silence.  COLUMBUS meets the MONK'S gaze
	unflinchingly.

					COLUMBUS
				(quietly)
			Asia can be found to the west -- and
			I will prove it.

					AROJAZ
			IF-GOD-WILLS-IT!


	EXT.  TERRACE - UNIVERSITY - DAY

	The JURY is alone to deliberate.  Food and wine has been
	laid out on tables.  In the distance, students' cries
	carry over the conversation.

	SANCHEZ approaches.

					AROJAZ
			The Treasurer of Spain honors us
			with his presence.

	SANCHEZ bows slightly.

					SANCHEZ
			The State has some reason to be
			interested in this man's
			proposition, Your Eminence...

					AROJAZ
			The Judgment is ours!

					SANCHEZ
			Naturally.  But I would really
			deplore the loss of such a potential
			opportunity for Spain for a...
			dispute over a point of geography.

	SANCHEZ helps himself to some grapes, looks round at the
	other members of the committee, who pretend not to be
	listening.

					AROJAZ
				(interrupting)
			He is a mercenary!  Did he not
			already try to convince the King of
			Portugal of his absurd notions?

					SANCHEZ
			Indeed.  The world is full of
			mercenaries -- and states often make
			use of them, when it benefits them.
				(casually)
			My only concern is the welfare and
			prosperity of Spain.

	AROJAZ understands the hint, and stops smiling.

					AROJAZ
			You would use your influence to
			assist this... intriguer?

	SANCHEZ reaches for a decanter of sherry.

					SANCHEZ
			You know, Your Eminence, the
			fascinating thing about power, is
			that what can be given so
			effortlessly...

	He offers the decanter to AROJAZ, who automatically lifts
	his glass.  But instead, SANCHEZ pulls back the decanter,
	pours himself a drink, and replaces it on the table,
	leaving AROJAZ staring at his own empty glass.

					SANCHEZ
			... can so easily be taken away.

	And he drinks with a smile.


	INT.  LA RABIDA - MARCHENA'S STUDY - EVENING

	MARCHENA reads aloud the Commission's letter.

					MARCHENA
			... and therefore nothing could
			justify the participation of Your
			Highnesses in the venture that
			relies upon such feeble assumptions,
			and which any man of knowledge
			would take to be impractical... if
			not impossible.

	He shakes his head, puts the letter down.  COLUMBUS looks
	appalled; devastated.

					COLUMBUS
			They didn't listen.  They didn't
			want to listen!

	He paces about the book-lined room.

					MARCHENA
			You mustn't give way to despair.
			You must wait.

					COLUMBUS
			Wait!  I've waited seven years
			already!  How much longer do you
			want me to wait?

					MARCHENA
			If God intends you to go, then you
			will go.

					COLUMBUS
				(angrily)
			Damn God!

	MARCHENA is shocked.

					MARCHENA
			Colon!

					COLUMBUS
			Damn all of you!  You all set up
			theories based on what?  You never
			leave the safety of your studies!
			Go out!  Find out what the world is
			about and then tell me something I
			can listen to!

	He seizes a beautiful book from MARCHENA'S desk.

					COLUMBUS
			These don't mean anything!  They're
			full of assumptions!  Out of the
			heads of old men who've never been
			past the end of their gardens!

	He hurls the book across the room.  MARCHENA is horrified.

					MARCHENA
			No...!  My books...!

	COLUMBUS seizes more books from the shelves, just sweeping
	them to the floor.

					COLUMBUS
			All of them!  Just lies!

					MARCHENA
			Colon!  Don't!

	MARCHENA tries to stop him.  In his fury, COLUMBUS
	accidentally knocks the poor old MAN to the ground.  His
	cries bring three MONKS rushing into the room.

	As COLUMBUS continues to rage and scatter books
	everywhere, they try to stop him, struggling with this
	big, powerful man -- to almost comical effect.  Finally, a
	short, muscular MONK delivers a quick punch that sends
	COLUMBUS crashing to the floor.


	INT.  CHAPEL OF LA RABIDA - EVENING

	COLUMBUS lies face down on the stone floor.  He is dressed
	in a homespun robe.  His arms are stretched out in
	penance.  FERNANDO and DIEGO look down at him.

					FERNANDO
			Father?

					DIEGO
			Sssshhhh...!  One can't speak to a
			man doing penance.

					FERNANDO
			What can you do?

					DIEGO
			Nothing.  That's the point,
			Fernando.

	A pause -- and then FERNANDO lies face down on the floor
	beside his FATHER, and stretches out his arms in the same
	way.  DIEGO is left looking on, unable to bring himself to
	join them.


	EXT.  CLOISTER - LA RABIDA - DAY

	Along the cloister, maps are drying, hanging like laundry
	in the light breeze.  COLUMBUS pins up a new addition.
	Another MONK works nearby, in silence.

					PINZON (O.S.)
			Senor Colon?

	COLUMBUS turns, to see a small, stocky MAN approaching:  a
	middle-class gentleman.  He nods.

					PINZON
			Ah, thank God!  I've been looking
			all over Seville for you!  Never
			expected to find a sailor in a
			monastery, eh?

	He laughs.  COLUMBUS smiles, but doesn't say anything.
	PINZON is clearly a little surprised.

					PINZON
			Name's Pinzon, by the way.  Martin
			Alonzo Pinzon.  I'm a ship owner
			from Palos...

	COLUMBUS glances around cautiously, and walks a little way
	down the cloister, away from the other MONK, gesturing for
	PINZON to follow him.  PINZON is yet more surprised by
	this strange behavior.

					PINZON
				(indicating the
				monk)
			Is he a spy?

	COLUMBUS shakes his head.  PINZON stares at him,
	perplexed.

					PINZON
			What is it?  Are you a Trappist?

	COLUMBUS shakes his head again.

					PINZON
			Vow of silence...?  Penance?

	COLUMBUS nods vigorously.

					PINZON
			Jesus!  Just my luck!

	He takes off his hat, wiping his forehead with a silk
	cloth.

					PINZON
			Listen.  I'll do the talking for
			both of us.  You just nod.  Agreed?
			Just as I do with the wife.

	COLUMBUS nods.

					PINZON
			I know that the Commission turned
			you down, right?  What do you
			expect?  You're a foreigner... But I
			want to help you.

	COLUMBUS gives him a glance like one throws a question in
	the air.

					PINZON
			You wonder why I believe in you?
			Hey, I am a seaman.  And we don't
			like to be told where to go, and
			where not to go.

	COLUMBUS looks at him, and bursts out laughing.  The other
	MONK looks round severely.  COLUMBUS ducks behind a map,
	PINZON following him.  PINZON lowers his voice.

					PINZON
			I don't look like it, but I have
			friends at the Court.  The Treasurer
			of Aragon, for example.  He finances
			me.  His name's Santangel.  Ever
			heard of him?

	COLUMBUS shakes his head, but looks increasingly
	interested by what he's hearing.

					PINZON
			He can get you an audience with the
			Queen!  You know why...?  She owes
			him money.  That's how it is.  You
			-- me -- the Queen -- the world and
			his mistress -- agreed?

	COLUMBUS nods.

					PINZON
			So.  What do you say?

	COLUMBUS looks around, catches the disapproving face of
	the MONK, crosses himself, then speaks:

					COLUMBUS
			Where can I meet this man?

					PINZON
				(indicating with a
				nod)
			Immediately.

	COLUMBUS turns and sees an elegant Lord in his fifties,
	examining the maps.


	EXT.  STREETS OF GRANADA - DAY

	A huge Islamic Crescent being pulled down from the minaret
	of a mosque.  SOLDIERS are holding back a crowd at the
	foot of the tower.  To the ecstatic cries of the crowd, a
	Cross is hoisted up in its place... Astride horses,
	COLUMBUS and the Treasurer SANTANGEL are watching the
	scene.

	They push through an extraordinary scene.  The city of
	Granada has just been reclaimed from the moors after
	several years of siege.  All around them, SPANISH SOLDIERS
	are herding, bedraggled columns of the defeated MOORS,
	bearing only a few possessions.  Ragged, half-starved men,
	women and children.

					SANTANGEL
			These people built Granada...
			Centuries ago!  It is a great
			victory over the Moors, Don Colon --
			and yet what a tragedy it is!

	The THREE HORSEMEN pass a procession of grateful
	PENITENTS, who are crawling on their knees, chanting
	psalms and flagellating themselves.  At the head of the
	procession, HOODED PRIESTS carry a statue of the Virgin
	Mary swathed in silk and lace.

	The gates of the Alhambra Palace are in sight.

					COLUMBUS
			Is this a good time to meet her?

					SANTANGEL
			It couldn't be better.  Victors
			can't say no.

	Bells are pealing triumphantly.  The noise is tumultuous.
	They ride towards the magnificent palace.


	EXT.  ALHAMBRA PALACE - GARDENS - DAY

	Fabulous Moorish gardens:  ponds filled with golden carp;
	exotic bird cages hang from lemon trees... The distant
	sounds of victory.

	SANTANGEL and COLUMBUS walk through the gardens, escorted
	by HALBERDIERS.  SOLDIERS pass by, carrying coffers or
	piles of documents.

	As they approach the inner sanctum, however, there are
	fewer people.  They stop by the Lion's Fountain, where
	several DIGNITARIES are waiting patiently for an audience.

	SANCHEZ appears.  They bow.  SANTANGEL approaches to
	murmur a compliment.

					SANTANGEL
			Your Excellency... truly grateful...
			your help... as ever...

	SANCHEZ protests softly, and looks over at COLUMBUS, a
	half-smile forming on his lips.  Then a DUENA appears, and
	motions for COLUMBUS to follow.


	INT.  ALHAMBRA PALACE - THRONE ROOM - DAY

	An ornate Moorish door is pushed open by the DUENA'S hand.
	We enter the Throne Room -- sculptured colonnades,
	mosaics... At the far end, windows open onto a view of
	Granada's rooftops.

	Against this dazzling light, the delicate silhouette of
	QUEEN ISABEL OF SPAIN.  The light in her blonde hair
	creates a halo around her head as she turns.  COLUMBUS
	falls to his knees.

					ISABEL
			Rise...!  Come forward!

	He approaches the window, stopping close to her.  ISABEL
	scrutinizes him quickly.

					ISABEL
			I should not even be listening to
			you, since my council said no.  But
			Santangel tells me you are a man of
			honor and sincerity... And Sanchez,
			that you are not a fool.

					COLUMBUS
				(bold)
			No more than the woman who said she
			would take Granada from the Moors.

	ISABEL smiles, enjoying the lack of obsequiousness.

					ISABEL
			The ocean is uncrossable?

					COLUMBUS
			What did they say about Granada
			before today?

					ISABEL
				(a beat)
			That she was impregnable.

	ISABEL smiles again.

					ISABEL
			I cannot ignore the verdict of my
			council.

					COLUMBUS
			Surely you can do anything you want.

	A direct challenge.  She doesn't know what to make of this
	man.

					ISABEL
			How little you know.

	This little hint of vulnerability subtly reverses their
	positions for a moment.  Now we sense COLUMBUS
	scrutinizing her.

					COLUMBUS
			May I speak freely?

					ISABEL
				(with a smile)
			You show no inclination to speak
			otherwise!

					COLUMBUS
			I know what I see.  I see someone
			who doesn't accept the world as it
			is.  Who's not afraid.  I see a
			women who thinks... "What if?"...

					ISABEL
				(amused at his
				familiarity)
			A woman?

	A slight pause.

					COLUMBUS
			Forgive me... but you're the only
			Queen I know.

	She bursts out laughing.

					ISABEL
			Then we are equal... since you are
			the only sailor I know!

	A beat.

					ISABEL
			How old are you, Senor Colon?

					COLUMBUS
			Thirty seven, Your Majesty... And
			you?

	Once again taken off guard, ISABEL flushes, and turns away
	slightly to hide it.

					ISABEL
			Thirty eight...

	A pause.

					ISABEL
			You will be informed of our
			decision.

	COLUMBUS bows and goes to leave.  As the DUENA opens the
	door for him, he turns back.

					COLUMBUS
			Actually, I thought you were younger
			than me!

	And he goes out, leaving her stunned.


	EXT.  SANCHEZ'S ESTATE - TREE-LINED ROAD - DAY

	A chalk white road, lined with trees.  Two liveried
	SERVANTS are walking down the road, one carrying a large
	silver tray, the other a smaller tray.

	They are overtaken by an ADMINISTRATOR who hurries along
	the road, with documents under his arm.


	EXT.  SANCHEZ'S ESTATE - STABLE BLOCK AND PADDOCK - DAY

	The CLERK enters an imposing stable block.

	In the paddock, SANCHEZ is training a magnificent young
	horse, making it step sideways, bending it to his will.
	The ADMINISTRATOR watches him, unable to interrupt.

	Behind him the two SERVANTS can be seen bringing in the
	silver trays, with covered dishes of food, a decanter of
	wine.  They begin to lay them out on a table.


	EXT.  SANCHEZ'S ESTATE - STABLE BLOCK AND PADDOCK - LATER

	SANCHEZ pours himself some wine, tucks into his his food,
	while the ADMINISTRATOR, clearly working himself up into a
	frenzy, reads from a document.

					ADMINISTRATOR
			... and he demands... he DEMANDS to
			be made a Knight, with the right to
			bear the Golden Spurs!  He will
			receive the title of Don Cristobal
			Colon -- which will be extended to
			his descendants for ever more...

	The ADMINISTRATOR looks up.  He is reading the contract
	that COLUMBUS has proposed.  SANCHEZ, his mouth full,
	gestures for him to continue.

					SANCHEZ
			Go on!

					ADMINISTRATOR
			He will be named Great Admiral of
			the Ocean Sea.  Viceroy of the West
			Indies... Governor of all islands or
			lands discovered or as will be
			discovered with his help...

	The ADMINISTRATOR looks up again.

					ADMINISTRATOR
			The highest titles of nobility, Your
			Excellency!  To an immigrant
			sheltered by monks!

	SANCHEZ gestures for the document.  Wipes his mouth.
	Continues reading, calmly:

					SANCHEZ
			Furthermore he will receive one
			eight of all wealth or monies,
			precious gems, pearls, metals,
			spices and other lucrative sources
			conquered within the boundaries of
			his admiralty...

	He smiles, hands the document back.

					SANCHEZ
			It's very underdone.

					ADMINISTRATOR
				(exploding)
			Underdone!  It's monstrous,
			Excellency!

					SANCHEZ
			No, the pheasant.  It's almost raw.

	And he carries on eating.

					SANCHEZ
			You worry too much, Carvajal... The
			man will have to lower his demands.
			Believe me, he WILL!


	INT.  ALHAMBRA PALACE - A RECEPTION ROOM - DAY

	Close up on COLUMBUS.

					COLUMBUS
			I WON'T!

	A WOMAN'S HAND quietly, carefully opens a cover of a spy
	hole in the wall.  Two beautiful eyes peer through a
	grille, into the next room.

	What they see:

	SANCHEZ and COLUMBUS together.  COLUMBUS is visibly upset.

					SANCHEZ
				(calmly)
			We have considered your -- demands
			very carefully, Senor Colon... Your
			expectations are... excessive, in
			every way.

	COLUMBUS tightens his fists, tries to remain calm.

					COLUMBUS
			If I am right, my requests are fair!

	SANCHEZ holds up a document.

					SANCHEZ
			We have prepared our own contract...

	He offers the document to COLUMBUS, who takes it, scans it
	quickly, shakes his head.

					COLUMBUS
			No...

					SANCHEZ
			No?

					COLUMBUS
			NO...!  I have waited too long,
			fought too hard.  Now you expect me
			to take all the risks while you take
			the profit!  No... I will not be
			your servant!

	The eyes behind the screen -- the mouth, forming a little
	smile.

					SANCHEZ
			I remind you, Senor Colon, that you
			are in no position to bargain with
			me.

					COLUMBUS
			I'm not bargaining!

					SANCHEZ
				(steely)
			Then you are too ambitious.

	COLUMBUS leans over the table, faces him.

					COLUMBUS
			And were you never ambitious,
			Excellency?  Or is ambition only a
			virtue among the nobles, a fault for
			the rest of us?

					SANCHEZ
				(abrupt)
			If you won't accept our proposal,
			we'll simply find someone who will.

	COLUMBUS smiles.

					COLUMBUS
			If you can do that, Excellency --
			I'll become a monk!

	He turns, strides towards the door.  We hear a WOMAN'S
	muffled laughter.

	As COLUMBUS goes out, ISABEL appears through a secret
	door.  SANCHEZ bows.

	ISABEL goes over to the window and looks out.

					ISABEL
			You were right, Don Sanchez... His
			demands could never be granted.

					SANCHEZ
			Never, Your Majesty.  Although...

	She turns, questioningly, towards him.

					SANCHEZ
			... Although one may always
			renegotiate a contract.  Especially
			signed by Royal Hands.


	EXT.  ALHAMBRA PALACE GARDENS - POV - DAY

	SANCHEZ joins ISABEL at the window.  They see COLUMBUS
	striding out and away.


	INT.  ALHAMBRA PALACE - A RECEPTION ROOM - DAY

	BACK TO SANCHEZ

					SANCHEZ
				(quietly)
			... Into a monk...

					ISABEL
				(with a smile)
			Yes.  It would be a pity, wouldn't
			it?
				(turning to Sanchez)
			Call him back!


	EXT.  STREET - EVENING   

	Teeming life.  COLUMBUS pushing his way through crowds.
	He is expressionless and distracted.

	He looks around him, stops walking.  And then,
	unexpectedly, shouts.

					COLUMBUS
			YEEEEEEES!

	All heads turn as if he were totally insane.  He walks on
	as if nothing happened.


	INT.  BEATRIX'S HOUSE - NIGHT

	COLUMBUS is sitting at the kitchen table, by himself, with
	a glass of wine.  There is a movement behind him.  BEATRIX
	is standing at the foot of the stairs, in a night-shirt.

	COLUMBUS turns and looks at her, almost sad.

					COLUMBUS
			She said yes.

					BEATRIX
				(moved)
			Thank God...

	She smiles.  But he seems to be unable to share her
	happiness.

					COLUMBUS
			If I ever come back, I swear I
			will...

	She crosses to him quickly, placing her hand gently on his
	mouth.

					BEATRIX
				(softly)
			I'm not asking you to swear to
			anything.

					COLUMBUS
			I don't want you to wait for me.

					BEATRIX
				(smiling)
			That's something you can't decide.

	COLUMBUS kisses her.


	INT.  CORRIDOR - BEATRIX'S HOUSE - NIGHT

	Strange, unearthly music... A flickering light in a dark
	tunnel.  FERNANDO, holding a candle in front of him, walks
	slowly down the dark corridor.

	Quietly opening a door, he walks into COLUMBUS' study.


	INT.  COLUMBUS' STUDY - NIGHT

	CLOSE ON:  A huge illustrated map of western Europe and
	Asia.  FERNANDO'S candle moves slowly across the Atlantic
	Ocean, to the edge of the map.  There, the illustrator's
	imagination has created monsters:  terrifying demons;
	creatures half-human, half-animal.

	Sitting at his desk, COLUMBUS is looking at the map.

					FERNANDO (O.S.)
			You can't go there!

	Turning, COLUMBUS finds his son beside him.

					COLUMBUS
			Why not?

	FERNANDO points at the monsters.  He pulls the boy to him.

					COLUMBUS
			There aren't any monsters, Fernando.
			The only monsters are in here...
				(he taps his own
				forehead)
			Watch!

	He takes a pen, and draws a smile on one of the terrible
	monsters, transforming it at once.  FERNANDO laughs
	immediately.

					FERNANDO
			I want to go with you!

					COLUMBUS
			There'll be a time.

					FERNANDO
			You promise?
				(Columbus nods his
				head)
			Do you swear on St. Christopher...?

	FERNANDO pulls the chain with the St. Christopher medal
	from under COLUMBUS' shirt.

					FERNANDO
			Do you swear on all the Holy Saints
			in heaven?

					COLUMBUS
				(laughing)
			Yes... Yes, I do... On all of them!

	And he hugs his SON tightly.


	EXT.  HILLSIDE AND GATE - PRE-DAWN

	A luminous procession passes through a Moorish stone gate,
	down to the harbor.  We see the faces of the SAILORS and
	their FAMILIES -- COLUMBUS, PINZON AMONGST THEM -- We
	sense the fervor and apprehension of the departure.  The
	procession is lead by MARCHENA and four young NOVICES
	carrying the Madonna.  All hold long, burning tapers,
	saying the rosary.  A SAILOR pushes through the crowd, and
	kisses the Madonna's feet.


	EXT.  PALOS HARBOR - DAWN

	Hundreds of candles flicker in the pre-dawn light, held by
	the FAMILIES and FRIENDS of the SAILORS.

	The SANTA MARIA the PINTA and the NINA nestle against the
	quayside.  Dwarfed by the hulls, a flotilla of smaller
	fishing craft, returning from night fishing, accidentally
	witness this event.


	EXT.  MAKESHIFT CONFESSIONAL - DOCKSIDE - DAWN

	MARCHENA sits on a barrel and crosses himself.  Behind a
	curtain sits COLUMBUS.

					MARCHENA
			In Nomine Patris et Filius, et
			Spiritus Sancti.

					COLUMBUS
			Forgive me, Father.  For I have
			sinned.

	MARCHENA recognizes COLUMBUS' voice.

					MARCHENA
			I am listening, my son.

					COLUMBUS
			Father, I have betrayed my family.
			I betrayed my men.  And I betrayed
			you.

					MARCHENA
			What are you saying?

					COLUMBUS
			I lied.  The journey will be longer
			than I said.

					MARCHENA
			How long?

					COLUMBUS
			I am not sure... It could be twice
			the distance.

	A pause.

					MARCHENA
			May God forgive you...!  You must
			tell them!  You must tell your men!

					COLUMBUS
			If I tell them, they won't follow
			me.  You know that I am right,
			Father.  You trust me...

					MARCHENA
			My son, my son...
				(he shakes his head)
			Your certitudes are sometimes
			frightening...
				(pause)
			Christopher, you must speak to them.
			And if you don't I will.

					COLUMBUS
			You are bound by an oath, Father.

	A long silence.

					MARCHENA
			I believed in you...

					COLUMBUS
			Give me absolution.

	No response.

					COLUMBUS
			Give me absolution, Father!

	Devastated, MARCHENA reluctantly makes the sign of the
	cross.


	EXT.  HARBOR AND SHIPS - PALOS - DAWN

	COLUMBUS walks over to where BEATRIX and FERNANDO are
	waiting.  He kisses and hugs FERNANDO.

					MARCHENA (O.S.)
			Ispo Te Absoluto.  May God forgive
			you and have mercy on your soul,
			Christopher Columbus.  Go in peace.

									DISSOLVE TO:

	EXT.  HARBOR AND SHIPS - DAWN - LATER

	The CROWDED QUAYSIDE.  COLUMBUS stands in front of
	FERNANDO.

					COLUMBUS
			Be good to your mother, Fernando.
			Do you promise?

	FERNANDO nods, tears in his eyes.  Then COLUMBUS embraces
	BEATRIX tightly.  She whispers into his ear.

					BEATRIX
			Speak to Diego.

	But COLUMBUS and DIEGO are unable to find words, and
	instead they clumsily hug.  Someone taps COLUMBUS'
	shoulder.  He turns around to see SANTANGEL.  Wordlessly,
	they hug.

									CUT TO:

	Activity on the ships, orders are being shouted, ropes
	fore and aft are cast off, splashing into the water... Now
	the SHIPS are slowly moving parallel to the quayside.  The
	CROWD starts walking abreast to the VESSELS.  WOMEN
	holding up babies, blowing kisses, old PARENTS crying...
	BEATRIX, HER SONS, AND SANTANGEL are among them.

	COLUMBUS suddenly unties the chain around his neck, and
	throws it at DIEGO.

					COLUMBUS
			Diego!  Here!

	DIEGO catches it.  Opening his hand he looks at the
	medallion.  Then looks up at his FATHER, elated.

	THE SANTA MARIA is now two meters from the QUAY.
	SANTANGEL is now opposite COLUMBUS.

					SANTANGEL
				(casually)
			Take care of my investment, wherever
			you're going!

					COLUMBUS
				(ambiguous)
			I have to tell you Santangel.  I
			don't know where on earth I am
			going!

	They both laugh.

	A FISHERMAN, standing in his shrimp-boat lets his hand
	slide gently along the gigantic hull.  He stares up at the
	SAILORS leaning on the rail.

					SAILOR
			Vaya con Dios!  (Go with God!)

	They wave back.

									CUT TO:

	MARCHENA walking towards the Moorish gate.  He finally
	turns, sad and distraught.  He sees:

									CUT TO:

	EXT.  SHIPS AT SEA - WHALES - DAY

	THREE SHIPS ON A BOUNDLESS OCEAN.

	The sea resembling a DORMANT MONSTER, holding its breath.
	A living being, all powerful, capable of unpredictable
	metamorphosis.  Music reflects the loneliness, the anxiety
	of the crew, the fear of the unknown...

	ENORMOUS WHALES moving slowly alongside, surging
	majestically through the waves.  Sinking back,
	disappearing, their cries taking precedent over the music.


	EXT.  DECK - DAY

	A SHIP'S BOY is throwing buckets of water on the deck.

	A SAILOR is busy clearing the ropes around the mast.

	A COOK is blowing life into a brazier, in preparation of
	the evening meal.

	TEN MEN heaving on a heavy rope, raising the top sail,
	punctuating their efforts with a sailor's chant.


	EXT.  SANTA MARIA - NIGHT

	The crystalline north star -- as if seen through an
	instrument.

	COLUMBUS' silhouette, by an oil lamp, standing at the
	prow.  Holding a quadrant he is aiming at the stars.

	SOME SAILORS are watching with curiosity.  One of them is
	ALONSO, a rough, stocky Basque.

	Near COLUMBUS, on a tressel, various books and charts.  He
	makes an entry in the log.  Then goes back to his
	quadrant.  He senses MENDEZ standing next to him.

					COLUMBUS
				(softly)
			Due west, Captain Mendez.  And may
			God be with us...

					MENDEZ
			God be with us admiral.

	MENDEZ doesn't move, continuing to observe COLUMBUS.

					COLUMBUS
			What is it Mendez?  Speak!

	MENDEZ is hesitant.  He nervously clears his throat.

					MENDEZ
			Well... It's the men, Sir.  They
			wonder how you know our position.
			We've lost sight from land days
			ago...

					COLUMBUS
				(still taking
				readings)
			And what do you think Mendez?

					MENDEZ
			Well, I surely know what a quadrant
			is!  But I've never seen it used at
			night before.

					COLUMBUS
			Come over here.

	MENDEZ hesitates, then motions to COLUMBUS.  The SAILORS
	are watching, and some approach to hear the conversation.

					COLUMBUS
			Now, find the North Star.  Do you
			have it?

									CUT TO:

	The picture swims across the heavens, until we see the
	north star.

					COLUMBUS (O.S.)
			Steady yourself...!  Keep the plumb
			line vertical...

	The picture steadies.

									CUT TO:

	MENDEZ nods -- and loses equilibrium.  The plumb line
	swings.

					COLUMBUS
			Don't move!  A mistake of one degree
			and we'll be off 6,000 leagues!

	MENDEZ tries again.

					COLUMBUS
			What do you read?

					MENDEZ
			Twenty eight.

	MENDEZ turns to COLUMBUS.

					COLUMBUS
			That's it.  The twenty eighth
			parallel.  And we'll follow it until
			we reach land.

	ALONSO does not seem convinced.

					ALONSO
			How do you know land is on the
			twenty eighth parallel?


	EXT.  SANTA MARIA - DECK - DAY

	A blazing sun.  The ship is like a furnace, its brass
	fittings too hot to touch, the blistering heat making the
	air shimmer over the decks.

	Desperate for shade, sailors are sheltering under the
	sagging prow sail.

	The SHIP'S BOY throws an empty bucket attached to a rope
	over the side and hauls it back up again, brimming with
	water.  As he turns, we see his face, disfigured by a hair
	lip.  He drenches himself... From the shade, ALONSO
	watches him.

					ALONSO
			Chicken-ass face!

	The others laugh.  The BOY, ashamed, tries to ignore them.
	ALONSO'S hand accidentally touches a brass fitting; he
	reacts like he was burnt.

					ALONSO
			Shit!

	He sucks his blistered fingers.

					ALONSO
			I never seen heat like this!  Not
			even in Las Minas!

					SAILOR
			The water's going putrid in the
			barrels.

					ALONSO
			You'll be drinking your own piss...
			For the glory of Spain... and
			Admiral Colon...!  Bastard!

	The SHIP'S BOY glances round at them.

					ALONSO
			What are you listening to, chicken
			ass?

					SAILOR
			Ah, leave him alone.  He's doing no
			harm.

					ALONSO
			With a face like that?
				(to boy)
			I don't want you looking at me.  You
			hear?

	The BOY turns away, dropping the bucket back into the sea.

					ALONSO
			He's the devil's child...

					SAILOR
			We'll all go crazy...

	The BOY throws more water over the deck.  A SAILOR takes
	his guitar, and starts singing an improvised song.

					SAILOR
			Culo de galina es el hijo del
			demonio... (Chicken ass mouth is the
			devil's child... Born from the loins
			of a stinky old goat etc...)

	They all laugh.  The BOY, hearing this, climbs to the
	crow's-nest like a monkey.


	EXT.  SANTA MARIA - RIGGING AND CROW'S-NEST - DAY

	We experience a sense of vertigo as we near the top of the
	main mast, high above the rolling deck.

	The BOY curls like a fetus in the swinging crow's-nest,
	exhausted by the heat, and scared.  His eyes are turning
	white.  He begins to piss himself...

									CUT TO:

	EXT.  SANTA MARIA - DECK - DAY

	Piss is dripping on the deck.  THE SAILORS do not seem to
	care.  THE COOK takes a chicken from a cage.  He breaks
	its neck, and starts plucking it.  The OTHERS continue
	their bitter conversation.

					ALONSO
			We should have seen land.

					SAILOR
			We left three weeks ago, Alonso.
			Can't be that near.

					ALONSO
			Can't be that far, I say.  Also, I
			don't like the smell of the sea
			around here.  Smells like a cunt.
			Bad sign...

	The COOK starts laughing.  They turn to him.

					COOK
				(shaking his head)
			Of course it smells like it!  That's
			why sailors take to the sea!

	They all laugh.  Alonso looks up at COLUMBUS standing on
	the poop deck, scrutinizing the horizon, waiting for the
	land to appear.

					ALONSO
			And why does this one take to the
			sea?  Nobody knows.  Never says a
			word...

	MENDEZ has sensed the danger of this lack of respect.  He
	approaches them.

					MENDEZ
			To your post!  At once!

	They split in silence.


	EXT.  SANTA MARIA - DECK - NIGHT

	The SHIP is plowing on, pushed by a hot wind -- SAILORS
	sleep on deck.

	The SHIP'S BOY is singing to himself.  Despite his hair
	lip he has a pure, melancholy voice...

	COLUMBUS, leaning over the prow rail, staring ahead, hears
	it carry over the darkness.


	EXT.  SANTA MARIA - DECK - DAY

	CLOSE UP ON AN HOUR-GLASS, nearly through its time.

	The SHIP'S BOY throws an "ampoulette" over board.  We
	follow the bulb attached to a rope, passing the full
	length of the hull.  As it reaches the poop deck, another
	SAILOR shouts "MARK".  A very primitive system of
	calculation for distance and speed.

	Sitting near the SHIP'S BOY, COLUMBUS is making entries in
	a log-book, watching the hourglass.

					SHIP'S BOY
			Mark.  Twenty nine, Sir!

	THE HOUR-GLASS runs out.  COLUMBUS converts the mark into
	a daily average for distance and speed.

					COLUMBUS
			Six hundred and twenty nine.

	THE SHIP'S BOY cups his hands to his mouth to shout.

									CUT TO:

	EXT.  PINTA - DAY

	PINZON, his OFFICERS beside him, looks across at the SANTA
	MARIA.

					SHIP'S BOY
			Six hundred and twenty nine!

	AN OFFICER turns to PINZON to repeat the message.

					OFFICER
			Six hundred and twenty nine, Sir!

	PINZON does not seem too pleased.

					PINZON
			I heard.

	THE OFFICER examines his own calculations.

					OFFICER
			Captain, I don't understand.

					PINZON
			I think I do.

	He goes back to his cabin.

									CUT TO:

	EXT.  SHIPS - SARGASSO SEA - DAY

	ABSOLUTE STILLNESS.  A FURNACE.  The three ships like
	dots, on what seems to be a prairie of weed.

	The caravels are being towed by three rowing boats.

	CLOSE ON THE MEN, rowing, drenched with sweat.

	FROM THE PROW, COLUMBUS is staring at the horizon.

	ALONSO pulling at his oars stares at COLUMBUS' distant
	figure with hate and resentment.

	ALONSO suddenly ships his oars, throwing the whole boat
	into disarray.  Chaos.

	Total silence.  MENDEZ and ALONSO stare at each other.

					MENDEZ
			Continue rowing!

					ALONSO
			To where?

	ALONSO defiantly stares at MENDEZ.  He then starts to beat
	a rhythm on the hull with his fist, followed by the
	others.  In the two other boats, the MEN begin to follow
	suit, beating a rhythm of protest on the hulls.

	MENDEZ looks up to COLUMBUS, in panic.

	ON BOARD PINZON'S SHIP, an OFFICER cups his hands to his
	mouth.

					OFFICER
			Captain Pinzon requests permission
			to board.

									CUT TO:

	EXT.  SANTA MARIA - DAY

					COLUMBUS
			Granted.


	INT.  COLUMBUS' CABIN - DAY

	PINZON enters.  He looks furious.

					PINZON
			You lied!  You cheated!  We're way
			past 750 leagues!

					COLUMBUS
				(calmly)
			Six days ago, yes.

					PINZON
			You must be mad...!

					COLUMBUS
			We have to keep the hopes of these
			men alive!

					PINZON
			We're on the verge of a mutiny,
			Colon!

					COLUMBUS
			You think I don't know that?

					PINZON
			We're lost!

					COLUMBUS
			The land is there.  I know it!

					PINZON
			You don't know anything!  Listen
			Colon, these are my ships, right?
			So I'm telling you we're turning
			back!

					COLUMBUS
			And then what?  Half of the water
			has gone, the rest is nearly putrid!
			You know that!

					PINZON
				(apoplectic)
			Jesus Maria!  I should have never
			listened to you!

					COLUMBUS
			You never did.  You did all the
			talking for both of us, remember?

					PINZON
			You bloody...

					COLUMBUS
			Pinzon, Pinzon... All we can do now
			is go forward!  Think about that!

					PINZON
			You tell that to them!

					COLUMBUS
			You're right.  Let the men decide.

	COLUMBUS moves to the door.  As an afterthought, he takes
	his scarlet-embroidered jacket from a hook.


	EXT.  SANTA MARIA - DECK - DAY

	Most of the men are now back on board.

	They go silent as COLUMBUS appears.  He walks slowly over
	to them.  All, including ALONSO, are surly, threatening...

					COLUMBUS
			Who gave you the order to come on
			board?

	He looks up and down the line, finishing on ALONSO.  They
	stare at one another.

					ALONSO
			God doesn't want us to cross the
			ocean...!  This voyage is cursed!

	Some of the MEN murmur their agreement.

					COLUMBUS
			Cursed?

					ALONSO
			We set sail for greed.  God has
			abandoned us.  The voyage is cursed.
			There are signs...

	ALONSO glances towards the SHIP'S BOY, with his hair lip.
	The BOY lowers his eyes.  COLUMBUS moves towards him,
	pulls him forward, stands him in front of ALONSO.

					COLUMBUS
			This boy has the voice of an angel.
			What comes out of his mouth is
			blessed, Alonso.  What comes out of
			your is evil.

	Some of the men laugh at this statement.  ALONSO is ill at
	ease.  COLUMBUS pauses, looks around at all the MEN.

					COLUMBUS
			Listen to me!  Every man is afraid
			who does something for the first
			time.  But those who overcome their
			fears, will find their rewards.  I
			do not know if it is God's will that
			we cross this ocean -- but I am
			certain it is the devil who puts
			fears into our hearts...

	The MEN are listening.  We sense a subtle change of
	mood...

					COLUMBUS
			This jacket to the first man who
			sights land!  I want a man up that
			mast day and night.

	COLUMBUS points at the SHIP'S BOY.

					COLUMBUS
			You start first.

	The SHIP'S BOY rushes up the mast.  As he climbs, the
	mainsail starts to fill with wind.  The deck begins to
	move under their feet.

	This movement under their feet seems to imperceptibly
	erase the fears and the angers.

					MENDEZ
			Alonso!  Jaime!  Don't let this wind
			escape us.

	CRIES from the other ships, as the sails snap taut,
	filling with wind.  MEN rush to their posts.  PINZON
	stares at COLUMBUS, shaking his head in disbelief.

					PINZON
				(murmuring)
			You lucky bastard...

	COLUMBUS walks away to his cabin, then turning back to
	PINZON.

					COLUMBUS
			Pinzon, the more I sail, the luckier
			I get.

	Turning abruptly, he enters his cabin.


	EXT.  SANTA MARIA - PROW - MISTY NIGHT

	COLUMBUS is seated, isolated at the prow, wrapped in his
	cape, struggling against the sleep.  MENDEZ approaches him
	with a bowl of soup.

					MENDEZ
			Shall I take my turn?

	COLUMBUS shakes his head no, and starts drinking from the
	bowl.

									CUT TO:

	COLUMBUS' head nods lower and lower to his chest.  He is
	asleep.  We become aware of a sharp buzzing sound.  It
	becomes louder as we move closer to COLUMBUS' face.

	A mosquito lands on his temple.  COLUMBUS reflexively
	slaps it.  He wakes up, and looks at his fingers -- a spot
	of blood, a crushed mosquito.  He stares at it for a
	moment.  Then slowly gets to his feet.


	EXT.  SANTA MARIA - DECK - NIGHT

	In the luminous moonlight, COLUMBUS is standing, staring
	up at thousands of insects that wheel around the mast
	lantern.  We hear the flutter of their wings and see the
	bats as they swoop and dive in a feeding frenzy.

	COLUMBUS turns, stares into the darkness, desperate to see
	the land that must be close.

	He kneels by MENDEZ, wrapped in a blanket.  He touches his
	shoulder.

					COLUMBUS
				(murmuring)
			Mendez!  Mendez!

	MENDEZ grimaces, and opens one eye.

					COLUMBUS
			Land...

									CUT TO:

	EXT.  SHIP - DAWN   

	An opaque dawn.  COLUMBUS, riveted, staring forward as if
	to pierce the mist.  The entire crew are clinging to the
	rail, and standing on the shrouds.

	Suddenly, the SHIP BOY'S voice cracking with emotion.

					SHIP'S BOY
			TIERRA...!  TIERRA!

	COLUMBUS strains his eyes; he still can not see anything.

	The entire CREW stand and stare, silent, holding their
	breath.

	As the sun begins to rise, the fog dissipates -- slowly,
	exquisitely, revealing a single palm, so close it seems
	almost as though they could touch it.  Then a white slash
	of beach.

	Near COLUMBUS, a SAILOR falls to his knees and burst into
	tears.  Others laugh with joy.  COLUMBUS watches this
	vision in disbelief, his mouth open as if it were
	difficult for him to breathe.  Tears come to his eyes.  He
	closes them.  Then opens them again.  The land is there --
	a green paradise.

	On screen the words:  OCTOBER 12, 1942.  GUANAHAN ISLAND


	EXT.  BOATS - DAY

	Three row boats plunging through the surf towards the
	beach.  COLUMBUS stands in the prow of the first boat.
	MENDEZ is in the second.  PINZON the third.  They stare
	entranced at the lushness of the foliage, and the blue
	clarity of the water...

	As the first boat beaches, COLUMBUS leaps out and wades
	ashore.  Behind him the rest of the landing party splash
	through the sun-dazzled water, carrying the banner of
	Castille and Aragon.


	EXT.  BEACH - DAY

	They stand on the beach, almost in a dream.  There is
	silence.  The ROYAL NOTARY, ludicrously overdressed, now
	wet through, stumbles over to COLUMBUS and holds out his
	contract and a pen.  COLUMBUS scrawls his name.

	The MEN stare at him, filled not only with new respect,
	but with something amounting to awe.

	COLUMBUS turns to them, tries to speak.

					COLUMBUS
			By the... by the Grace of... God...

	He swallows.  Tears have sprung to his eyes.  He is so
	moved he cannot continue.  Coming to his rescue -- THE
	SHIP'S BOY starts to roll the drum.  He then stops.

					COLUMBUS
				(pulling himself
				together)
			In the name of their Gracious
			Majesties of Castille and Aragon,
			and by all the powers vested in me,
			I claim this island and name it San
			Salvador.

	The MEN cheer as the flags are rammed into the sand,
	flapping in the wind.

	COLUMBUS starts to walk towards the jungle, and in silence
	the rest follow.


	EXT.  JUNGLE - DAY

	Immediately they are met by an incredible wall of SOUND!
	The jungle is filled with NOISE.  The impossibly-loud
	CRIES of EXOTIC BIRDS, the CHATTERING of MONKEYS.  The
	SPANIARDS are overwhelmed.

	They move forward.  Rays of sunlight pierce through the
	high canopy of leaves, like the roof of a magnificent
	cathedral.  The sounds and smells intoxicate their senses.
	They are filled with wonder.

	Then PINZON stops.  He has seen something.  Another stops,
	then a third, staring ahead of them...

					MENDEZ
				(whispering
				urgently)
			Arquebuses!

	Several of them raise their weapons to their shoulders,
	pointing them into the jungle.

	From COLUMBUS' POV we slowly scan the face of the thick
	jungle ahead.  For a moment we don't see anything -- and
	then, with a shock, we see the first INDIAN.  Naked,
	painted like an idol, carrying a hunting lance.

	As if they had materialized from nowhere:  the rest of the
	HUNTING PARTY, with their bows and spears.  Silent.
	Watchful.  They stare back at us.

	The SPANIARDS nervously finger their weapons.

	COLUMBUS slowly lifts his hand into the air:  a clear
	signal not to fire.  Then, removing his sword, he drops it
	on the ground, and starts to walk forward, fixing his gaze
	upon the first INDIAN he saw.

					PINZON
				(warningly)
			Colon!

	COLUMBUS ignores him, even though some of the INDIANS have
	raised their weapons.  He stops in the no-man's land
	between them.  The INDIANS don't move -- but something
	excites them.

	The SHIP'S BOY, wearing COLUMBUS' embroidered jacket and
	the drum, has followed COLUMBUS and now stands close to
	him.  He is the cause of their interest.  COLUMBUS puts
	his arm around the BOY, and this gesture of affection
	seems to put the INDIANS at their ease.  They start
	talking and pointing.  They come forward slowly, start to
	tentatively touch the BOY'S jacket.  Then, now laughing,
	they touch COLUMBUS, pulling at his beard.  COLUMBUS
	laughs too.

	Sensing their innocence, the rest of the MEN lower their
	weapons.  Some of them laugh.

	An apparition:  a beautiful young INDIAN GIRL, totally
	naked, walks out of the jungle.

	She is pregnant and holds a child.  We begin to hear
	Indian music, played on a flute.

									CUT TO:

	EXT.  INDIAN VILLAGE - DAY

	A large post is lifted from the ground by two SPANIARDS
	pulling on ropes.  The post is fixed into position -- and
	then we see that it is a large wooden cross... The INDIAN
	VILLAGERS watch the ceremony with some interest and
	amusement.

	COLUMBUS looks over at the men and gestures at the
	INDIANS.

					COLUMBUS
			We have come here in peace, and we
			will behave with honor.  They are
			not savages and neither will you be.
			Treat these people as you would your
			own wives and your own children.
			Neither are you free to take what
			you will; for a seashell you give a
			bandana.  You will respect their
			beliefs.  Pillage will be punished
			by the whip.  Rape by the sword.


	EXT.  VILLAGE - SUNSET

	The smoke from fires.  Laughter.  Music playing.  The
	INDIANS have prepared food for the SPANIARDS, who are
	drinking and enjoying themselves in this strange world.

	COLUMBUS sits with MENDEZ, PINZON, the INDIAN CHIEF,
	ELDERS OF THE VILLAGE.  Other INDIANS stand around,
	smiling, curious.

	The INDIANS talk among themselves.  The ELDERS smoke
	primitive cigars -- and offer them, with good humor, to
	their guests.  The SPANIARDS cough and choke at first...
	and laugh.  In return, they offer the INDIANS wine...

	Dogs roam around the campfires.  The WOMEN openly suckle
	their babies.  The MEN are entranced.

	PINZON draws out attention, for the first time, to a small
	gold ornament on the nose of one of the INDIANS.  He
	points to it, indicates his interest in it.

					PINZON
			Gold...!  Gold!

	The INDIANS says the word in his own language, laughing.
	We see that some of the other INDIANS also have small gold
	ornaments.

	PINZON repeats the INDIAN word for gold.  The INDIAN
	removes the ornament from his nose, gives it to PINZON,
	who indicates that he wants to have it.  The INDIAN nods
	-- but points to PINZON'S dagger, indicating that he wants
	it in return.  PINZON shakes his head, stops the INDIAN
	from taking it.

					COLUMBUS
				(to Pinzon)
			Give it to him!

	PINZON looks at him, about to argue -- but COLUMBUS
	insists.  PINZON takes out the dagger and offers it to the
	INDIAN.

					PINZON
				(irritated)
			By God!  That's the worst trade of
			my life!

	His friends laugh.  Innocently, the INDIAN has taken it by
	the blade.  He yelps, looks down at the blood welling
	up... A moment of tension... Then MENDEZ laughs at his
	clumsiness, and the ELDERS laugh too... and the INDIAN
	laughs.

	Just outside this circle, we see the first INDIAN we saw,
	squatting on his haunches, watching.  This is UTAPAN.


	INT.  TENT - DAWN

	The first light outside -- the strange, wonderful sounds
	of the jungle all around.  COLUMBUS writes in his journal.

					COLUMBUS (V.O.)
			October 21st, 1492.  I think we have
			returned to Eden.  Surely this is
			how the world once was, before the
			beginning of time.  I believe no man
			will ever see this land again as we
			do, for the first time...

	He looks up.  UTAPAN is squatting in the doorway of the
	hut.  He's been there all night.  COLUMBUS takes more ink
	on his quill and begins to sketch UTAPAN'S face in the
	margin of his log-book.  He draws well.

	He gets up and walks over to UTAPAN and shows him the
	drawing.  It's an electrifying moment.  UTAPAN is shocked
	and amazed.  At first he is rather frightened of his own
	image... Then he is happy, and laughs... and COLUMBUS
	laughs with him and puts a hand on his shoulder in a
	gesture of friendship.

	UTAPAN gets up, and indicates that he too has something he
	wishes to offer.


	EXT.  JUNGLE - MORNING

	UTAPAN expertly scampering through the jungle.  COLUMBUS
	follows him.

	UTAPAN orders COLUMBUS to sit.  COLUMBUS obeys.  UTAPAN
	looks up at the tops of the trees.  The sun is rising, and
	filters through the foliage.  As if the time had come,
	UTAPAN stands up, and COLUMBUS does the same.

	A gap in the dense vegetation.  Something is glittering.
	Gold.  A mass of gold.  As they approach, COLUMBUS
	discovers --

	A large pool of fresh water.  The morning sunlight has
	turned the water into liquid gold.  The surface ripples
	with the breeze.  UTAPAN smiles.  It the stranger
	satisfied?  Isn't this what he came for?

	COLUMBUS plunges into the pool.  As he emerges, he fills
	his palms with liquid gold.

									DISSOLVE TO:

	EXT.  RIVER - DAY

	Wide shot -- A flotilla of canoes are going upstream.

	INDIANS AND SPANIARDS are traveling together in the
	canoes.  UTAPAN leads the expedition in COLUMBUS' craft.
	THE SHIP BOY'S cranium is shaved like UTAPAN'S, and we
	notice that some other crew members are beardless, some
	even wearing tribal patterns.


	EXT.  RIVERSIDE - DAY

	INDIAN VILLAGERS confronting the SPANIARDS, UTAPAN talks
	to an ELDER MAN, watched by COLUMBUS, MENDEZ and PINZON.

	UTAPAN repeats several times the word for GOLD, showing
	some artifacts.  The OLD INDIAN shakes his head no,
	indicating another distant place.

					OLD INDIAN
			Cuba!  Cuba!

	THE OLD MAN nods, points into the distance, chatters away
	to UTAPAN.

					UTAPAN
			Say not here!  Cuba!

					COLUMBUS
			What is it?  A tribe?  An island?

					UTAPAN
			Island.  Far.


	EXT.  SANTA MARIA - DECK - DAY

	Standing at the prow of the ship, his long dark hair
	floating in the wind, UTAPAN rejoicing at the speed.


	EXT.  THICK JUNGLE - CUBA - DAY

	Led by UTAPAN, the SPANIARDS hack their way through thick
	jungle.  It's hard work.  The MEN sweat.  This is
	inhospitable terrain.  Even the noises of the jungle seem
	somehow more sinister...

									CUT TO:

	RESTING PLACE - ALONSO is seated under a tree.  He takes
	off his boot, and grabs his foot, examining the blisters
	on his toes.  As he puts his foot back into the boot, he
	jumps screaming in pain.

	ALONSO yelps, grasping his ankle.

	CLOSE ON a snake sliding out of the empty boot.

	While his COMPANIONS rush to him, a SAILOR spots the
	snake, and decapitates it with his sword.  UTAPAN glances
	at the dead snake.  He then goes and kneels -- he sees the
	bite on ALONSO'S ankle.

					COLUMBUS
			Help him!

	ALONSO is quiet and silent.  His eyes are looking around
	at his companions.  UTAPAN shakes his head.  There is
	nothing he can do.

	ALONSO is now leaning back, supported by one of his
	friends.  He has grabbed the forearm of a SAILOR.  His
	look is already far away.  His companion shouts at UTAPAN.

					SAILOR
			Do something!  Help him!

					UTAPAN
			He dead.

	ALONSO starts convulsing.  HIS FRIENDS hold him, desperate
	in their helplessness.  Others simply move away,
	horrified.  One of them cries.


	EXT.  RIVER - DAY

	Standing in the stream up to his thighs, A SPANIARD (a
	gold expert) examines some stones.  He then looks up at
	COLUMBUS and PINZON and just throws the stones back into
	the water without a word.

	The group of SPANIARDS are resting, exhausted by the
	humidity.  Some are drinking from the river, others soak
	bandanas, and tie them around their necks...

	One after another, they stand up slowly -- they look
	discouraged, tired, and beaten.


	EXT.  MOUNTAINOUS JUNGLE - DAY

	UTAPAN and the SPANIARDS are trekking in the hills.  Fully
	armed, they are now suffering intensely from the heat and
	the vicious insect bites.

	COLUMBUS doggedly keeps up with UTAPAN, who tirelessly
	trots forward.

	Finally, COLUMBUS turns around and sees... nobody.  He
	calls out to UTAPAN.

					COLUMBUS
			Utapan!  Wait!

	UTAPAN stops obediently, and rushes back to COLUMBUS with
	comical energy.

	On their way back, they find one SOLDIER sitting, leaning
	against a tree.  He has removed his helmet.  His hair
	sticking to his forehead.

	As COLUMBUS and UTAPAN walk back, they find another
	SAILOR, then another, then the whole group gathered around
	PINZON.  Ashen, he burns with fever.  He attempts a smile.

					PINZON
			Well... You'll have to continue
			without me...

	COLUMBUS looks around him -- what he sees:  exhausted men
	and jungle, as far as one can see.

					COLUMBUS
			No.  It's enough.  What would you
			say to a drop of Jerez, Pinzon?

	PINZON grins.

					PINZON
			And a nice slice of Santa Fe lamb!
			I'd sell my soul for it.
				(to his officer)
			Help me up.  I've got to piss, gold.

	They all laugh as the OFFICER helps PINZON to his feet.

	PINZON walks a few yards into the jungle -- starts to
	urinate.  It is red.  Suddenly dizzy, he reels and
	collapses.


	EXT.  JUNGLE - DAY

	A line of SPANIARDS and INDIANS threading their way down a
	mountainside.  PINZON is being carried on a makeshift
	stretcher.  His eyes are closed, his face thick with
	sweat.

	They enter a village, to the surprise of the INDIANS.
	UTAPAN once again at the front as the ambassador.


	INT.  HUT - NIGHT

	A INDIAN SHAMAN is forcing a milky fluid into PINZON'S
	mouth.  COLUMBUS attempts a gesture to prevent him.  But
	UTAPAN stops him.

					UTAPAN
			He cures.

	COLUMBUS nods -- he obviously trusts UTAPAN.


	INT.  CHIEF GUARIONEX'S HUT - NIGHT

	In the half-light, figures wreathed in smoke -- COLUMBUS,
	MENDEZ and UTAPAN watch the CHIEF GUARIONEX putting a
	Spanish helmet on his head.  The helmet is too big, almost
	covering his eyes.  The ELDERS appraise the gift with
	solemn wonder.

	In return, GUARIONEX hands COLUMBUS a parcel made of
	leaves.  COLUMBUS unwraps them.  Inside:  a GOLD grimacing
	mask.  The first real piece of gold.  COLUMBUS is unable
	to conceal his excitement at this first real evidence of
	the metal.

	He waits for the CHIEF to speak, but the CHIEF only looks
	at him.  On the ground, we see other presents offered by
	the SPANIARDS -- trinkets, and necklaces...

					UTAPAN
				(to Columbus)
			You come!  You speak first!

					COLUMBUS
			Tell the Chief we thank him.

					UTAPAN
			Chief knows.

					COLUMBUS
			Tell him his country is very
			beautiful.  Tell him we are leaving
			men here -- to build a fort.

	UTAPAN translates.

					COLUMBUS
			Tell him we will return very soon.
			Many of us.

	UTAPAN translates.  The CHIEF GUARIONEX asks a simple
	question.

					UTAPAN
			Chief says -- how many?

					COLUMBUS
			Thousands.

					UTAPAN
			Why?

	COLUMBUS doesn't seem to understand the question.  For the
	first time he seems to be caught short.

					COLUMBUS
			To bring the word of God.

					UTAPAN
			Chief says -- he has a God.

					COLUMBUS
				(pursuing)
			... and also to bring medicine.

					UTAPAN
			Chief says...

					COLUMBUS
				(interrupting)
			He has medicine.
				(pause)
			Tell him we admire his people.

	UTAPAN translates.

					UTAPAN
			Chief says he knows you like his...
				(searches for the
				word)
			Women...

	And the CHIEF gets up, awards COLUMBUS with a smile, and
	walks out of the hut, the ELDERS following, leaving
	COLUMBUS alone.

					COLUMBUS
				(with a little
				smile)
			That's a beginning...


	EXT.  SHORE - DAY

	Watched from the shore by the INDIANS and by about forty
	of the SPANIARDS, who are staying behind, the boats pull
	out towards the two remaining ships.

	PINZON is laid out in the bottom of the boat.  COLUMBUS,
	UTAPAN, and four other INDIANS are in the same boat.

					COLUMBUS (V.O.)
			March 1493... Thirty nine of my men
			volunteered to stay behind.  God
			willing we will be back in less than
			a year...

	The boats continue to pull away, the figures on the shore
	growing smaller.

									CUT TO:

	EXT.  COLUMBUS' CABIN - NIGHT

	CLOSE ON:  a golden mask... the lamp in the cabin swings
	violently back and forth, creating strange shadows, as if
	the mask was alive... COLUMBUS is writing with difficulty
	in his log-book.

					COLUMBUS (V.O.)
			... Several men are ill.  We did not
			find signs of civilization.  No
			cities, no temples... Nothing that
			resembles Marco Polo's descriptions.
			My ships are not filled with the
			spices and the gold that Spain was
			hoping for.  But this land
			intoxicates the senses like the
			strongest of perfumes... And all I
			can think of, is to return to these
			untamed lands...

	Suddenly the cabin seems to lurch over.  Things fall from
	the table, smashing on the floor... COLUMBUS nearly falls.


	EXT.  SEA - NIGHT

	We are in the middle of a violent storm -- of terrifying
	proportions.  The thunder is deafening.  Light irradiates
	the darkness.  We see the two caravels, dwarfed by the
	massive seas.


	EXT.  DECK - NIGHT

	Five MEN are struggling to lash down the tiller.  The deck
	jumps and rolls.  It rises five meters into the air then
	falls into space and hits the water with a terrible crack.
	Waves sweep over the decks.  We hear desperate cries for
	mercy from the terrified crew, loud enough to be heard
	above the storm.

	COLUMBUS and MENDEZ are crawling towards the mast, along a
	lifeline.

					COLUMBUS
				(screaming to the
				sailors)
			Get below!  All of you!  Go!

	The MEN start to scramble below decks.

					COLUMBUS
				(to Mendez)
			Stay with me!

	The ship rolls again.  COLUMBUS and MENDEZ crawl towards
	the mast.  Another gigantic wave crashes over them, tons
	of water falling like cement.  They reach the mast.  The
	wood groans.

					COLUMBUS
			We may have to cut it!

	MENDEZ nods... COLUMBUS grabs some rope.  The ship rises
	into the air again, crashes down, the deck disappearing
	beneath them for a moment.

					COLUMBUS
				(screaming out)
			I'll stay here -- to decide if we
			cut it.  Help me!

	With MENDEZ'S help, COLUMBUS is tied to the mast:  one
	rope under his arms, the other around his waist.  MENDEZ
	hands him a horn.

					COLUMBUS
				(screaming)
			Now go!

	MENDEZ seems to hesitate.  COLUMBUS screams at him again.

					COLUMBUS
			I said -- below deck, Mendez!

	MENDEZ crawls away.

	Another huge wave washes over COLUMBUS.  He emerges,
	almost suffocated.  The storm rages, its eerie light
	making it seem at times like bright daylight.  But as the
	lightning flashes, COLUMBUS begins to count:

					COLUMBUS
			One... two... three... four...

	There's an enormous thunderclap on "four" -- it indicates
	how close they are to the eye of the storm.

	The ship keels over again, dropping down and down, seeming
	never to rise... COLUMBUS lifts his head to the heavens,
	screams out:

					COLUMBUS
			Damn you!

	As if in answer, another flash of lightning that
	illuminates the sky and the sea.  COLUMBUS starts counting
	again.

					COLUMBUS
			One... two... three... four...
			five...

	Another terrible clap of thunder on "five" -- COLUMBUS
	starts laughing, knowing the storm is moving on.

	Then, in the strange light, something seems to move
	through the air towards him; it looks like some kind of
	projectile, a craft, with a trail of vapor.

	COLUMBUS stares up at it... amazed.  We start to hear the
	"Te Deum", majestic and heavenly.

									CUT TO:

	INT.  CATHEDRAL OF CORDOBA - SPAIN - DAY

	COLUMBUS looks up at the vast roof, to see an incense
	burner, swinging, gliding swiftly across the ceiling,
	trailing a think vapor of incense.

	A magnificent "Te Deum" is being sung -- in honor of
	COLUMBUS' achievements and return.  The whole cathedral is
	packed with nobles and dignitaries in their gorgeous
	robes.

	BEATRIX, FERNANDO and DIEGO are staring in fascination at
	COLUMBUS' triumph -- somewhat separated by the grandeur of
	this occasion.  COLUMBUS passes by, walking proudly down
	the long central alley, beside KING FERDINAND and QUEEN
	ISABEL and other GRANDEES.  He turns to his family,
	keeping his eyes on BEATRIX until she is out of his
	vision.

	The procession is followed by UTAPAN, and other INDIANS in
	tribal regalia...

	As they move through the crowds, all eyes are upon
	COLUMBUS.

									CUT TO:

	INT.  ROOM - SEVILLE (PINZON'S DEATH) - DAY

	In a simple room, a PRIEST finishes giving the Last Rites
	and a sheet is pulled over the head of MARTIN PINZON.  His
	WIFE and CHILDREN weep at the bedside.

									CUT TO:

	INT.  CATHEDRAL - DAY

	A stool passes from hands to hands.  It is placed at the
	Queen and King's side.  COLUMBUS sits on it -- a supreme
	privilege.

	To one side sit AROJAZ and SANCHEZ.  AROJAZ leans over to
	whisper to him.

					AROJAZ
			It won't be easy to get rid of your
			prophet now, Don Sanchez.

					SANCHEZ
				(whispering)
			On the contrary, Your Eminence.  It
			seems to me the man is preparing his
			own cross.


	INT.  ALCAZAR'S PALACE IN SEVILLE - DINING ROOM - NIGHT

	CLOSE ON:  the face of a young, SPANISH NOBLEMAN, ADRIAN
	DE MOXICA.  Hesitantly, he brings a lighted cigar to his
	lips -- then pauses.

	We discover other people around the magnificent candle-lit
	table.  NOBLE MEN and NOBLE WOMEN.  SANCHEZ.  COLUMBUS.
	QUEEN ISABEL.

	COLUMBUS takes the cigar from MOXICA.  The rest watch him
	with rapt curiosity.  COLUMBUS inhales deeply then, to
	their astonishment, blows out the smoke through his nose.

					COLUMBUS
			You must not inhale, but simply
			allow the palate to enjoy the flavor
			of the Tobacco...

	He hands the cigar back to MOXICA.  With a casual air,
	MOXICA himself inhales deeply -- almost chokes to death.
	He gulps down a glass of wine... much to the amusement of
	the others.

					MOXICA
				(deeply embarrassed)
			And you say this is an Indian vice?
			By God!  I don't see any kind of
			pleasure that would make this a sin.

					COLUMBUS
			The Indians have no such word, Don
			Moxica.

					ISABEL
			Do they have such thoughts?

					COLUMBUS
			They come and go as naked as the day
			God created them...

	ISABEL blushes slightly.

					COLUMBUS
			They don't see sin in their
			nakedness.  They live according to
			nature, in a never ending summer.
			The islands are covered with trees,
			filled with blossoms and fruits.
			And...

					SANCHEZ
				(interrupting)
			Forgive me, Don Colon.  But what
			about gold?

	COLUMBUS nods, turns and whispers something to a SERVANT
	standing just behind his chair.  The SERVANT goes to open
	the door -- and in comes UTAPAN, dressed as a tribesman,
	carrying a casket.  The WOMEN around the table fan
	themselves furiously at the sight.  UTAPAN puts the casket
	down in front of the QUEEN, and steps back.

					COLUMBUS
			These are gifts for Your Majesty.

	ISABEL opens the casket, revealing the gleam of gold
	inside.  She takes out some of the little golden
	ornaments... a bracelet and then the mask.

	She holds it, somehow moved by its crude beauty.

	ISABEL raises the mask to her face, looking across at
	COLUMBUS.

	The image is somehow powerful enough to reduce even the
	ARISTOCRATS to silence.  She speaks from behind the mask.

					ISABEL
			We are more than gratified.

	The guests laugh obsequiously.  COLUMBUS bows a little --
	looks up and meets the eyes of SANCHEZ, who is staring at
	him, coldly.


	INT.  ROTUNDA - DAY

	A SWORD MASTER advances towards us with determination, his
	sword flashing.  He is fighting an adversary we do not
	see, and comments his movements.

					MASTER
			Si!  Si!  Muy bien!  Excellente!
			(Yes!  Yes!  Good!  Excellent!)

	We discover the SWORD MASTER is fencing with COLUMBUS.  A
	dozen duellists are practicing in the magnificent rotunda,
	surrounded with a two-tiered colonnade.

	Out of breath, COLUMBUS stops the exercise, and removes
	his protective canvas padding.  He bows at his teacher,
	who salutes him in return.

	COLUMBUS walks to a tressel laden with food and beverages.
	SANCHEZ, in a fencing outfit and boots, is having a glass
	of wine.  Upon seeing COLUMBUS approaching, he hands him a
	glass.

					SANCHEZ
			You defend yourself admirably...

					COLUMBUS
			... for a commoner?

	SANCHEZ laughs and raises his glass.

					SANCHEZ
			To your second expedition.

	They drink.  A short, somewhat ugly man, with some kind of
	imposing energy, approach them.

					SANCHEZ
			Don Colon -- Don Alonso de
			Bobadilla.  A man who knows our
			laws.

	BOBADILLA bows.

					BOBADILLA
			I understand that you will soon be
			appointing Governors for the
			islands?  Is it not so?

					COLUMBUS
			Forgive me, Don Bobadilla -- those
			positions have already been taken.

					BOBADILLA
				(disappointed)
			May I ask by whom?

					COLUMBUS
			Bartolome and Giacomo Colon.

	SANCHEZ looks at him in surprise.  BOBADILLA reddens.

					BOBADILLA
			I trust they are men of quality.

	BOBADILLA glances at SANCHEZ.

					COLUMBUS
			But we do have a lack of notaries.
			You should contact my
			administration.

					SANCHEZ
				(amused)
			Don Bobadilla is already a judge, my
			Dear Don Cristobal.

					COLUMBUS
			Good!  We are also in need of
			judges.  Except there are no
			thieves!

	A grin disfigures the face of BOBADILLA.

					BOBADILLA
				(to Sanchez)
			I see I was mistaken.  Don Colon
			has no need for my services...

	And he walks off.  SANCHEZ fills his mouth with a slice of
	ham.

					SANCHEZ
				(amused)
			You seem to have a special talent
			for making friends.

					COLUMBUS
			What...?  Do I have so many already?

					SANCHEZ
				(seriously)
			To rise so high, in so short a time,
			is a dangerous occupation.
				(kindly)
			A little hypocrisy goes a long way.


	INT.  ROOM - ADMINISTRATION - DAY

	COLUMBUS with two MEN:  the oldest, around thirty, is a
	strong-looking man.  The youngest, no more than twenty
	five, is thin and fit.  There is obvious tension in the
	room.  These are BARTOLOME and GIACOMO COLON, COLUMBUS'
	brothers.  BARTOLOME is angry, and GIACOMO thoughtful.

					BARTOLOME
			You might have given us a choice!

					GIACOMO
			Bartolome is stronger, more capable
			than I will ever be...

					COLUMBUS
			I need both of you.  What are you
			afraid of?  We are living what we
			always dreamt of.

					GIACOMO
			You know I never shared those dreams
			with you.

					COLUMBUS
			Are you saying you refuse to help?

	COLUMBUS looks at them with such pained surprise...

					BARTOLOME
				(amused)
			You bastard... you always had your
			own way...

					COLUMBUS
			Let me show you something.

	He opens the door to a terrace.

									CUT TO:

	EXT.  GALLERY - DAY

	The large gallery courtyard is crowded with PEOPLE --
	applicants for the voyage.  As COLUMBUS appears, they all
	press forward, calling out his name, trying to get his
	attention, touching his sleeves as if he were a saint.
	They crowd around COLUMBUS and his BROTHERS.  COLUMBUS
	nods, murmurs vaguely, here and there...

					COLUMBUS
			Of course... Of course... We'll see
			to it... Yes... Thank you... Soon...
			Soon...

	Fighting their way through, the BOTHERS press their way,
	reaching the other side of the gallery.  We get glimpses
	of the incredible activity down below.  ADMINISTRATORS,
	MILITARIES, MERCHANTS are busy around tressels covered
	with documents, plans, maps... preparing the second
	expedition.

	COLUMBUS puts his arms around them.

					COLUMBUS
				(indicating the
				applicants)
			Now -- you tell me.  Who can I
			trust?
				(almost amused)
			We're brothers!  We must be a House.
			A bloodline!  In this country one
			can't exist alone!  I need you...!
			Both of you!

	He walks then to the balustrade.  The cries from the
	courtyard down below subside... some of the applicants
	begin to look up, aware of his presence.

					SOLDIER
			Where is the Admiral?  Has anyone
			seen the Admiral?

	Everybody laughs.

					COLUMBUS
			He is here!  What is it?

	He leans over the balcony.  In the middle of the
	overcrowded courtyard, the SOLDIER who was shouting is
	brandishing a document.

					MAN
			Admiral!  The horses have arrived.

					COLUMBUS
			I know.  I saw them!  Who did we
			hire today?

	ANOTHER ASSISTANT raises his eyes.

					ASSISTANT
			Thirty blacksmiths, twenty eight
			halberdiers, twenty carpenters, a
			hundred farmers, twenty miners...
			and Doctor Chanca, the royal
			surgeon.

					COLUMBUS
			The royal surgeon?  Then we can
			count on royal health!

	The whole courtyard bursts out laughing.


	EXT.  ORANGERY - VICEROY'S HOUSE - DAY

	UTAPAN is lying in his hammock.  FERNANDO turns him over.
	UTAPAN falls to the ground.

	COLUMBUS walks beside BEATRIX.

					COLUMBUS
				(looking at his son)
			He's growing up!

	BEATRIX smiles, nods.  They walk on.

					COLUMBUS
			Beatrix, I want to ask you
			something.

					BEATRIX
				(with a smile)
			You don't usually ask.

					COLUMBUS
				(after a pause)
			I can arrange for the Queen to take
			Fernando and Diego into her service.

	BEATRIX stops in her tracks, looks at him.

					COLUMBUS
			It is a great honor.  We could not
			hope for anything better.

	BEATRIX nods, but bites her lip, and looks back at
	FERNANDO.

					BEATRIX
			For once I wish you weren't right.

	COLUMBUS puts his arm around her waist, pulling her
	closer, they move away.


	EXT.  FAR END OF THE ORANGERY - DAY

	FERNANDO is now swinging expertly in the hammock.  UTAPAN
	is pushing him gently.  He slowly straightens up to watch
	COLUMBUS and BEATRIX disappear, somehow sensing there is a
	dilemma.  FERNANDO noticing UTAPAN'S reaction, turns to
	his parents.  The arbor is empty.  FERNANDO becomes
	pensive.

	We become aware of the rustling of the jungle.

									 SLOW DISSOLVE TO:

	EXT.  BEACH AND EDGE OF JUNGLE - DAY

	FIFTEEN HUNDRED MEN spread along the beach, looking
	towards the jungle.  COLUMBUS stands beside his BROTHERS,
	and MENDEZ, and UTAPAN.

	MOXICA, astride a magnificent black horse, prances back
	and forth across the sand.  All are waiting.

	A signal cannon is fired from one of the ships.  Birds
	scatter into the air from the jungle -- but then silence,
	complete and ominous.  COLUMBUS stares into the jungle.
	Nothing.  No one to greet them -- no welcoming party from
	the MEN they left behind.

	COLUMBUS glances at MENDEZ.

	MENDEZ looks at him, but can't answer.

	MOXICA suddenly spurs on his horse, and guides it into the
	trees.  The order is given for the rest to follow, fanning
	out as they do so, weapons at the ready.


	EXT.  CLEARING - JUNGLE - DAY

	Ruins.  The camp has been burned to ashes.  A strange
	sight:  arrows are stuck vertically into the ground, each
	with a moldering tuft of human hair attached to the
	flight.

	In silence the SOLDIERS pick their way through the
	devastation.

	The ground is littered with coconuts.  Kicking one over
	with his shoe, a SOLDIER discovers that his coconut is
	actually a human skull.  The gaping mouth has been filled
	to the brim with gold.

	But of the living, there is no sign.

					MOXICA
			Is this your new world, Don Colon?

	COLUMBUS looks around in dismay.  A YOUNG NOBLEMAN,
	HERNANDO DE GUEVARA, takes out his sword.

					GUEVARA
			These animals should be shown what
			savagery can be!

	Other SPANIARDS join in, repeating this last word.

					NOBLEMAN
			Three heads for every life taken.
			No mercy before God!

					GUEVARA
			No mercy!  Let's find them.

					COLUMBUS
			No Guevara.  There will be no
			revenge.

	Silence.  Everyone looks at COLUMBUS.

					MOXICA
			We lost cousins, friends.  We will
			wash this in blood.

					COLUMBUS
			If you want to keep your head on
			your shoulders, you'll do as I say.

	They are all listening.

					COLUMBUS
			Moxica, I lost friends too... Thirty
			nine brave men who trusted me.

	He walks among them.

					COLUMBUS
			You want a war?  Fine.  We are a
			thousand.  They outnumber us by ten!
			Who will you kill?  Which tribe?

					MOXICA
			We don't need to know.

					COLUMBUS
			We came here to stay!  To build!
			Not to start a crusade.  In this
			forest, there is enough danger to
			sweep us away in days!  So we will
			be brave and swallow our grief.  And
			in the name of those who died, we
			will accomplish what we came for.


	EXT.  INDIAN VILLAGE - DAY

	MOXICA mounted on his magnificent BLACK STALLION canters
	to the edge of the deserted village and enters the
	village.  UTAPAN is terrorized by the absence of anything
	living.

	All we can hear is the breathing of the horse.  The
	animal, an impressive mass of muscle, prances nervously.

	UTAPAN calls out in dialect.

					UTAPAN
			They here.

	Slowly, they begin to appear, one after the other --
	materializing from the jungle.  Shy and scared.

	They stare at this "Centaur" (the HORSE and the HORSEMAN
	seem to be one -- a God).

	To impress them even more, MOXICA makes the beast move
	sideways and backwards, rearing, its front hoofs pawing
	the air.  THE INDIANS retreat in terror, except for one,
	who stands his ground, brandishing his lance.

	UTAPAN encourages the YOUNG WARRIOR to approach the
	centaur.  He places his hand onto the shoulder of the
	animal.  The muscles shudder.  THE INDIAN jumps back
	comically, accompanied by the rest of the tribe.

	Without warning, MOXICA climbs down from the saddle.  More
	INDIANS step back in fear and absolute astonishment.  Now
	more have ventured from the jungle.  The bravest of them
	approach MOXICA, daring to touch him, and the horse,
	retreating then touching until they fill the compound.

	At this moment, COLUMBUS and his SOLDIERS appear all
	around them, pointing their muskets, and their crossbows.
	A moment of tension.

	COLUMBUS walks forward, towards the CHIEF (GUARIONEX) we
	meet before.

					COLUMBUS
			Ask the Chief what happened to my
			men?

	The CHIEF answers.

					UTAPAN
			Another tribe made war on them...
			came by sea... took them away...

					BROTHER BUYL
			God have mercy on their souls...

					MOXICA
			The monkey is lying.

	A pause.  The SPANIARDS shifting, eager for blood.

					MOXICA
			We should kill them, Don Colon.

	UTAPAN looks anxiously at COLUMBUS.

					COLUMBUS
			No...!  you'll do it my way.
				(to Utapan)
			Tell the Chief we will not harm his
			people, even though we have the
			power to do it.

	UTAPAN translates.  The CHIEF listens in silence.

					COLUMBUS
			We will work with his people.  We
			want peace.  Ask the Chief if he
			understands?

					UTAPAN
			He understands.

					COLUMBUS
			Ask him if he will help.

									CUT TO:

	EXT.  WATERMILL AND DAM UNDER CONSTRUCTION - DAY

	It is raining hard.  COLUMBUS is floundering in the mud,
	supervising a mixed work-force of SPANISH and INDIANS.
	They are attempting to raise the huge wheel of a
	watermill.

	Despite COLUMBUS' shouts of encouragement, it's clear the
	wheel is far too heavy and the mud too deep.

	Close by, on horseback, MOXICA watches the scene.
	COLUMBUS, plastered with wet mud, clambers out of the pit
	and approaches him.

					COLUMBUS
			Don Moxica -- we need your horse.

	MOXICA looks down at the sodden, dirty figure.

					COLUMBUS
			We can't raise the wheel without it.

					MOXICA
			My horse doesn't work.

	A beat.  COLUMBUS wipes some mud from his eyes.

					COLUMBUS
			Don Moxica -- we all have to work.

					MOXICA
			You did not hear me, Don Colon.  Not
			my horse.

	He starts to turn away; COLUMBUS grabs hold of the reins.

					COLUMBUS
			Forgive me, Don Moxica.  But it was
			your horse I was talking about.

	A beat.  MOXICA stares down at an equally determined
	COLUMBUS.  Then, in front of everyone, MOXICA has to
	dismount, and suffer the disgrace of it.

					COLUMBUS
			Thank you, Don Moxica.

	COLUMBUS leads the horse away.

									CUT TO:

	EXT.  WATERMILL AND DAM UNDER CONSTRUCTION - DAY

	Harnessed, the horse pulls, with COLUMBUS and the MEN.
	The wheel is raised into position.

									CUT TO:

	EXT.  WATERMILL AND DAM - DAY

	Water thundering into the new canal.  The huge wheel
	begins to turn.  The MEN cheer and congratulate each
	other.  MOXICA looks at his mud-splattered and foaming
	horse, his eyes full of hatred.


	EXT.  CITY OF ISABEL - TWILIGHT

	A wide, high shot of the new "City", dominated by a huge
	wooden cross -- no more than a muddy main street bordered
	by a hundred bamboo and stone shanties, with candles
	burning in the doorways.  A main square with the
	Governor's Mansion, and the foundations of a church.

	In the twilight, COLUMBUS and the other WORKERS returning,
	dirty and tired.


	EXT.  VERANDA OF MOXICA'S HOUSE - TWILIGHT

	MOXICA and GUEVARA sit out on the "veranda", watching the
	MEN return.  MOXICA raises his glass in an ironic salute.

					MOXICA
			To the Governor of the Mosquitoes!

	They laugh.  We see the smoke and flames from a fire.
	Four or five INDIANS are squatting on the earth nearby,
	cooking for them, talking quietly in their own language.

	MOXICA calls out something in their language, and a naked
	YOUNG INDIAN GIRL comes out of the house, bringing more
	wine.  GUEVARA stares at her lasciviously.  MOXICA,
	letting his hand casually brush against her flank, smiles
	at him.

					MOXICA
			Do you want her?

	He turns the GIRL round so that GUEVARA can admire her
	properly.  GUEVARA nods.  MOXICA lets the GIRL go with a
	peremptory order, and she disappears back inside.

	GUEVARA suddenly stands up -- unsteadily -- and sweeping
	his arm round in a broad gesture, says ironically:

					GUEVARA
			To the new world, my friend!  To the
			new world!


	INT.  DINING ROOM - GOVERNOR'S MANSION - NIGHT

	In an already Spanish-colonel dining room, COLUMBUS is
	having dinner with his brothers, BARTOLOME and GIACOMO,
	served by an INDIAN WOMAN -- NIMA.  GIACOMO eats with
	gusto.

					GIACOMO
				(as Nima pours the
				wine)
			Nima's a good cook!

					BARTOLOME
			She's more than that!

	Seeing GIACOMO'S sudden blush and discomfort, as NIMA
	smiles at him, the other BROTHERS laugh.

	To cover his embarrassment, GIACOMO returns to the topic
	of the food.

					GIACOMO
			What is it?

					COLUMBUS
			Eat!  I'll tell you later.

	As he sees BARTOLOME stifling a laugh, GIACOMO pauses.

					GIACOMO
			I'd like to know what I'm eating.

	COLUMBUS eats a mouthful, glances at BARTOLOME.

					COLUMBUS
			Iguana.

	A look of horror crosses GIACOMO'S face; he wretches
	slightly, puts down his fork, and gulps down some wine.
	The BROTHERS laugh again.

					COLUMBUS
			What wrong with it?  The Indians eat
			it!

					GIACOMO
			I'm not an Indian.

					BARTOLOME
			He wishes he were back in the
			seminary.  Priests always eat well.
				(tasting his wine,
				grimacing)
			And they have very good cellars.

					GIACOMO
			Nothing grows here!  Everything rots
			in the ground.  The wheat and vines
			wither before we can harvest them.

					COLUMBUS
			We've got to learn to live like the
			Indians.
				(pause)
			Eat your Iguana!

	Reluctantly this time, GIACOMO goes back to his dinner.


	EXT.  BALCONY - GOVERNOR'S MANSION - NIGHT

	They are drinking and smoking cigars.  From the balcony
	they can see the dark mass of the jungle stretching away.
	GIACOMO is already dozing in his chair.  BARTOLOME sees
	it, and elbows COLUMBUS.  They both smile at their younger
	brother's exhaustion.  Then COLUMBUS gets up and leans on
	the balustrade, looking down at the city, the jungle
	beyond.

					COLUMBUS
			How much gold have we found?

					BARTOLOME
			Not enough to justify a single
			shipment.

					COLUMBUS
			Perhaps it doesn't exist anywhere
			but in my imagination.

					BARTOLOME
			Then let's hope not...
				(pause)
			What will happen if we can't find
			enough gold?

	They begin to hear the sound of a flute -- a melancholy
	sound.  COLUMBUS looks out over the jungle, and kills a
	mosquito by slapping his arm.

					COLUMBUS
				(jokingly)
			Then I'm Governor of the Mosquitoes.

									CUT TO:

	INT.  INFIRMARY - CITY OF ISABEL - NIGHT

	An INDIAN is playing the flute.

	In the gloomy interior of the long hut, in the most
	primitive conditions, DOZENS OF SPANIARDS lie sick.  On a
	segregated part of the room are the INDIANS, several
	coughing.

	They are attended by a doctor, DOCTOR CHANCA, BROTHER
	BUYL, and other NOVICES.

	A NOVICE attends to an INDIAN, gently lifting his head,
	helping him to drink -- there is so little they can do.

	BROTHER BUYL looks down at the body of a SPANIARD, covered
	in open sores.  The NOVICE joins him.

					BROTHER BUYL
			What kind of disease is this?

					DOCTOR CHANCA
			I don't know.  It seems almost as if
			we have exchanged diseases with the
			Indians.  They die of our most
			common cold, and we of their plague.

					BROTHER BUYL
			God forgive us!

									CUT TO:

	EXT.  ROYAL HOSPITAL - COURTYARD - SPAIN - DAY

	A MAN covered with sores is screaming, thrashing in his
	agony.  He is held down, his voice muffled.  ISABEL turns
	away, shocked.

	She is in a ward full of patients, attended by a DOCTOR,
	SANCHEZ and other members of her court.

	The patients are emaciated, their faces and bodies covered
	with virulent sores.  NUNS move between the beds.

					DOCTOR
			It seems to be caused by intimacy
			with the native women, Your Majesty.

					ISABEL
			Will he survive?

					DOCTOR
			No, Your Majesty.  They go mad --
			then they die.  There is nothing we
			can do.

	ISABEL looks around at SANCHEZ, appalled.

					SANCHEZ
			Every ship returns with a cargo of
			sick and dying.  But with no gold!
			The new world proves expensive, Your
			Majesty.

					ISABEL
			We weren't expecting immediate
			profits, were we?  We must have
			faith.  We must give time for time.

	SANCHEZ bows in acknowledgement.  But ISABEL, despite her
	words, looks distressed.


	EXT.  MINE - NEW WORLD - DAY

	Excavations carved into a hillside.

	It is a blisteringly hot day.  At the foot of the hill,
	GIACOMO sits at a table beneath an awning, with MOXICA and
	several CLERKS.  ONE HUNDRED FIFTY INDIANS standing in
	line at the table.

	In turn, they hand over a small quantity of gold.  The
	CLERK weighs it on a scale, and notes down each
	contribution.

	MOXICA impatiently gestures the INDIANS to move faster
	with a thonged crop.  An INDIAN approaches the table.  He
	is nervous.  He doesn't produce anything.  The INDIAN
	shakes his head, gesticulates, starts to speak rapidly.

					TRANSLATOR
			He says he has not found any!

					MOXICA
			He's lying!

	Again the INDIAN pleads and gesticulates.  MOXICA hits him
	across the face with the thonged crop.  The INDIAN tries
	to run away -- but is held by a SPANISH SOLDIER.

					MOXICA
			Bring him here!

	The frightened INDIAN is brought back to the table.  One
	of the CLERKS slips away.

					MOXICA
			Tell him to put his hands on the
			table.  Like this!

									CUT TO:

	EXT.  OTHER SIDE OF THE SITE - DAY

	At the other end of the site, the CLERK sprinting to
	GIACOMO, who was talking to a FOREMASTER.

					CLERK
			Don Giacomo, you'd better come at
			once!


	EXT.  MINE - DAY

	MOXICA turns, looks back at the long line of INDIANS,
	still passively waiting.

					MOXICA
			Tell them I want them to watch this!

	The terrified TRANSLATOR speaks to the INDIANS.

					CLERK
			Don't Moxica!  You can't...

									CUT TO:

	GIACOMO and the CLERK running to the scene.

									CUT TO:

					MOXICA
				(to the clerk)
			I can't?  I can't?

	With a single swift action, MOXICA draws his sword and
	cuts off the INDIAN'S hands.

	ALL HELL BREAKS LOOSE.  The INDIANS flee, disappearing
	into the jungle.  GIACOMO arrives at this moment.  He
	stares at the dismembered hands in horror.


	INT.  GOVERNOR'S MANSION - EVENING

	A tribunal.  Sitting behind a table with his brothers, and
	flanked by his council, COLUMBUS presides.  MOXICA stands
	before them.

					COLUMBUS
			In one act of brutality, you have
			created chaos.  Tribes who were
			fighting each other are now joining
			forces against us!  All that because
			of your criminal savagery!

					MOXICA
				(casually)
			Savagery is what monkeys understand.

					COLUMBUS
			You'll be held in detention,
			deprived of your privileges and
			possessions.  Until you are returned
			to Spain where you will be judged.
			Have you anything to say?

					MOXICA
				(with exquisite
				insolence)
			You will regret this.

	He strolls to the GUARDS at the back of the room.


	EXT.  BARRACKS - NIGHT

	Everything is quiet on the mine site.

	On the terrace, TWO SOLDIERS are drinking in turn, and
	cracking jokes.  One of them leans against the wooden
	wall.  He laughs as he hears repeated banging behind him.

									CUT TO:

	INT.  BARRACKS - NIGHT

	A THIRD SOLDIER is fucking an INDIAN WOMAN against the
	wall.

									CUT TO:

	EXT.  BARRACKS - NIGHT

	On the terrace, his two COMPANIONS laugh and encourage
	his efforts.

	A whooshing sound.  An arrow embeds itself in the chest of
	the SOLDIER who was leaning against the wall.  He is
	nailed to the wood behind him.

	THE OTHER SOLDIER stares at him, transfixed, until an
	arrow pierces his throat.  He collapses, unable to cry
	out for help.


	INT.  BARRACKS - NIGHT

	FOUR INDIANS in full warrior outfit, their faces painted,
	burst into the room.  Still busy with the WOMAN, his eyes
	facing the wall, the SOLDIER believes the intruders to be
	his friends.

					SOLDIER
				(without stopping)
			You animals!  Can't you wait!

	Discovering the FOUR TERRIFYING FIGURES staring at her,
	the INDIAN WOMAN starts screaming and pushes back the
	SOLDIER.  He turns around, jumps off the WOMAN, and starts
	to scramble to the front door, trying to put on his
	trousers.

	THE FOUR INDIANS catch him, and force him to lay on the
	ground.  THE MAN struggles, his eyes rolling in terror.
	TWO INDIANS force his mouth open.  A THIRD ONE kneels and
	starts stuffing it with gold dust.  THE SOLDIER chokes and
	suffocates.

	THE WOMAN still stands half naked against the wall,
	terrified.  AN INDIAN takes his knife from his leggings,
	slowly.  She starts sobbing and imploring in her language.
	THE INDIAN slowly walks to her, and plants the knife in
	the lower part of her belly.


	EXT.  MINE - DAY

	PAIRS of bloody red legs hanging still, high in the air.

	Pulling back, we discover:

	A DOZEN SPANIARDS have been crucified on the scaffolding
	of the excavations.  Some hands and noses have been
	removed.

	UTAPAN is standing, uncomfortable among the SPANIARDS.

	A SOLDIER removes a huge iron nail from a wrist.  One of
	the CRUCIFIED BODIES is gently laid on the ground.  He is
	still alive -- not for long.

	COLUMBUS and BARTOLOME are silent with rage.

					BARTOLOME
				(aggressively)
			Moxica is right.  Our ways don't
			work!

	BARTOLOME turns to UTAPAN.

					BARTOLOME
				(aggressively)
			Can you find them?

	UTAPAN looks distraught -- this is the first time he is
	being asked to do something against his own people.  He
	looks up at COLUMBUS for help in confusion.

					COLUMBUS
			You have to find them, Utapan.  Look
			what they did!

					UTAPAN
			You did the same to your God!

	COLUMBUS is caught short.

					COLUMBUS
			We have to stop this war.

	UTAPAN nods.  He walks and takes an arrow.  He examines
	it.

					COLUMBUS
			Do you know them?

	UTAPAN nods, uncomfortable.

									CUT TO:

	EXT.  HILL AND VALLEY - DAY

	Around a campfire, two dozen INDIANS are squatting.  They
	are arguing over a musket and some woolen hats they stole
	from the mine.  CLICK!  CLICK!  The INDIANS raise their
	heads.  All around them, crossbows and muskets are pointed
	at them.  Two INDIANS try to run away.  They are shot.

	This sound triggers the SPANIARDS' response.  They start
	shooting at random.  UTAPAN is horrified.  COLUMBUS stands
	up shouting.

					COLUMBUS
			Stop!  Stop this!

									CUT TO:

	EXT.  GOVERNOR'S MANSION - NIGHT

	MOXICA and a group of rebels (GUEVARA among them),
	silently approach the entrance of the mansion.

	A GUARD is stabbed and falls on his knees with a cry.


	INT.  COLUMBUS' STUDY - GOVERNOR'S MANSION - NIGHT

	MOXICA tears COLUMBUS' plans of the city from the wall.
	On the table, the model of the future city.

	Watched by the other ARISTOCRATS, MOXICA sets fire to the
	parchment he has rolled up.  He blows the flames from the
	torch onto the model.  Fire races up and down the streets
	of the miniature, as if burning the city of Isabel.

	A mad gleam in MOXICA'S eyes...


	EXT.  SQUARE OF ISABEL - NIGHT

	The half-burnt remains of the Mansion.  COLUMBUS stands in
	the square, looking up at it.  Behind him, his SOLDIERS,
	his BROTHERS and about thirty captured INDIANS.

	GIACOMO walks slowly across the square.  COLUMBUS looks at
	him in disbelief.

					GIACOMO
				(through cracked
				lips)
			Moxica...


	EXT.  RIVER BANK - JUNGLE - DAWN

	COLUMBUS leads his party of SOLDIERS through the jungle,
	looking for the MUTINEERS.

	They reach the river -- scan the far bank.  Nothing.
	COLUMBUS nods.  His MEN start to enter the river, led by a
	HALBERDIER.

	Others follow, wading across, their weapons held above
	their heads.

	A crossbow arrow pierces the HALBERDIER.  Without a cry he
	falls forward into the water, and is carried away by the
	current.

	Two more MEN are hit.  One cries out, thrashes around in
	the water, an arrow protruding from his side.  The river
	stained with blood.

	Still no sign of the enemy.  COLUMBUS' MEN nevertheless
	start to return fire from the bank, creating a shield...
	others continue to wade across the river.  A MUTINEER is
	shot down from the branches of a tree...

	The first MEN come ashore.  Musket fire.  An exchange of
	arrows.  COLUMBUS is now wading across.  The MAN next to
	him is killed, and carried away by the current.

	Now, on the far shore, the enemy have shown themselves.
	There is hand to hand fighting, with swords and other
	weapons.  MOXICA kills one of COLUMBUS' men -- but his own
	are outnumbered and outmatched.  Already, some are
	beginning to surrender.

	In the midst of the fighting, COLUMBUS, sword drawn, pulls
	himself out of the river:  A MUTINEER lunges at him.
	COLUMBUS kills him with a thrust of his sword -- and walks
	forward into the jungle.  He spots MOXICA at the foot of a
	cliff.


	EXT.  JUNGLE CLIMB TO CLIFF TOP - DAY

	MOXICA starts scrambling up the rocks behind him, with
	COLUMBUS following.  The climb through the dense
	undergrowth is so exhausting, they are now almost climbing
	in slow motion.


	EXT.  TOP OF CLIFF - DAY

	MOXICA bursts out of the undergrowth.  He is at the edge
	of emptiness, swept by a violent offshore wind.  He turns
	frantically, to see COLUMBUS coming up behind him.

	Knowing he is lost, MOXICA regains his natural arrogance.
	He steps backwards towards the edge.

					MOXICA
			You know what they will say in Spain
			about my death -- don't you?

	He takes another step backwards, as COLUMBUS moves towards
	him.

					MOXICA
			You are nothing!  You bastards will
			never inherit your titles.  We are
			everything.  We are immortal!

	He smiles, and steps back into space.


	EXT.  ROCKS BELOW CLIFF TOP - DAY

	His body falls, bounces off the rocks below, crashes into
	the water.


	EXT.  TOP OF CLIFF - DAY

	COLUMBUS stares down as his body is swept away.

									CUT TO:

	EXT.  SQUARE OF ISABEL - DAY

	CLOSE ON COLUMBUS' expressionless face.

									CUT TO:

	A MUTINEER -- his face is white, he is crying and
	trembling.  His arms are tied behind his back.  He is held
	fast, a rope is put around his neck.

	COLUMBUS, sitting not far away beside his BROTHERS, gives
	a signal.

	Drums begin to beat.  BROTHER BUYL looks on impassive.

	A grimace suddenly transform THE YOUNG MAN'S face.  He is
	being garroted -- his throat crushed with a rope.  The
	YOUNG MAN'S feet dance frenziedly.  We hear the choking.

	The drums cease.  BROTHER BUYL crosses himself and murmurs
	a prayer, deeply distraught.  GIACOMO has covered his
	eyes.

	A wider view shows the bodies of three other ARISTOCRATS
	from the rebellion, attached to chairs affixed to a pole,
	their heads straight, the rope still tight around their
	necks.

	Justice has been done.  The members of the COUNCIL rise in
	silence, COLUMBUS stands up.

									CUT TO:

	EXT.  ISABEL - QUAYSIDE - DAY

	CLOSE ON several large wooden cages.  Inside we see the
	INDIANS that COLUMBUS captured.  They are packed together.
	They stare out with vacant eyes.  SOLDIERS guard them.  A
	ship against the pier.  BUYL at his side, COLUMBUS stares
	at the INDIANS.

					BROTHER BUYL
			I wish to go back with them, Don
			Colon.  I have no desire to remain
			in this godless place.

					COLUMBUS
			You may do as you please, Brother
			Buyl -- though your departure will
			not help me to make it more Godly.

	BROTHER BUYL looks at him, almost with astonishment.

					BROTHER BUYL
			You treat Christians equally with
			heathen savages.  You execute
			members of the nobility.  And what
			do you offer in return?

					COLUMBUS
				(quietly)
			A new world, Brother Buyl.

					BROTHER BUYL
			Nobody wants one...!  Only you!

	And he walks away.


	EXT.  ISLAND - EVENING

	Against the livid horizon, three black waterspouts join
	the sky to the sea.  A gust of wind disturbs the roof of
	the jungle.


	INT.  GOVERNOR'S MANSION - EVENING

	The wind grows stronger.  Doors bang inside the
	building... a melancholy sound.

	COLUMBUS sits on the balcony with his BROTHERS.  They are
	silent.  After a few moments, COLUMBUS begins to speak
	quietly, almost as if he were speaking to himself.

					COLUMBUS
			Perhaps hope only exists in the
			journey.  When it begins, everything
			is still possible -- every
			expectation; every dream...

	The BROTHERS do not answer.

					COLUMBUS
			This is not how I imagined it to be.

									CUT TO:

	EXT.  JUNGLE - NEAR ISABEL - NIGHT

	UTAPAN begins to shave his head...


	EXT.  BALCONY - GOVERNOR'S MANSION - DAWN

	The sky is dark and threatening, the wind even stronger.
	We find COLUMBUS where we left him, but now alone.  He has
	sat here all night.

	Shutters bang violently.

	He looks up -- and sees a few yards from him:  the naked
	FIGURE OF AN INDIAN, his face and body painted, staring at
	him.  COLUMBUS realizes who it is...

					COLUMBUS
			Utapan!

	UTAPAN is still and silent.  A strange and mysterious
	figure now.

					COLUMBUS
			Utapan, won't you speak to me?  You
			used to know how to speak to me.

					UTAPAN
				(sadly, in his own
				language)
			You never learned how to speak my
			language.

	UTAPAN is gone.


	EXT.  SQUARE - DAWN

	The wind is whipping the trees now, stronger and stronger.
	Groups of INDIANS look up at the sky.  Then, above the
	sound of the wind, they hear another noise.  Like a
	collective murmur, almost in one voice, the INDIANS
	repeat, over and over.

					INDIANS
			Urracan... Urracan... Urracan...
			Urracan...
				(the wrath of God)

	With a loud thunderclap, the storm suddenly breaks.  In a
	few seconds it has risen to violent proportions, and the
	landscape is drenched in torrential rain.  The wind
	doubles its strength... and all hell breaks loose...


	EXT.  CITY OF ISABEL - DAY

	The hurricane is full force.  Trees are being ripped up by
	their roots.  Rivers of mud are washed down from the
	hills, carrying everything away in their paths:  houses,
	carts, equipment, horses...


	EXT.  MINE - ISABEL - DAY

	The mine workings flooded with mud...


	EXT.  APPROACH TO DAM AND WATERFALL - DAY

	COLUMBUS, BARTOLOME and MENDEZ struggle through the teeth
	of the hurricane towards the dam.


	EXT.  DAM - DAY

	Timbers creak and strain.  COLUMBUS, BARTOLOME, MENDEZ and
	a DOZEN other MEN are trying to save the dam.

	Suddenly, frighteningly, the dam begins to crash.

					COLUMBUS
				(screaming)
			Let it go!  Let it go!

	The MEN scramble away as the dam wall buckles, and burst
	open.  Water floods over them; a roaring torrent.  From
	the bank, MENDEZ, BARTOLOME and COLUMBUS survey the ruins
	of their dreams.

									CUT TO:

	INT.  GOVERNOR'S PALACE - BEDROOM - DAY

	COLUMBUS is stretched out on his bed, in his devastated
	bedroom.  A column of ants is threading its way across the
	floor, each ant carrying a piece of leaf.  Rain falls over
	a table covered with documents.

	COLUMBUS' face is covered in dried mud.

					SANCHEZ (V.O.)
			He promised us gold but has failed
			to find it.  He subjects the natives
			to violence, provocation and
			injustice.  He sent them to Spain
			against the express wishes of Your
			Majesty...


	INT.  AUDIENCE ROOM - ALHAMBRA PALACE - DAY

	We are back to the first scene.  In the vast, opulent,
	glittering room, ISABEL listens impassively to the voice
	of SANCHEZ.  Also present, other GRANDEES, representatives
	of the church and state.

					SANCHEZ
			... But there is worse.  He ordered
			the execution of five members of the
			nobility...

					ISABEL
			Is this true, Brother Buyl?

					BROTHER BUYL
			Yes, Your Majesty.  It is all true.
			I saw it with my own eyes.

	A pause.  ISABEL seems to struggle inwardly with her
	emotions.  SANCHEZ waits, expressionless, but on the point
	of victory.

					ISABEL
			Then, what do you suggest, Don
			Sanchez?

					SANCHEZ
			He must be replaced.

					ISABEL
			And who would you think of, for such
			a task?

									CUT TO:

	EXT.  QUAYSIDE - ISABEL - DAY

	We see a buckled shoe -- as it rises, it slips into a
	stirrup.  The horse is mounted.  The shoe digs into its
	flank.  The sound of hoofbeats...

					SANCHEZ (V.O.)
			I am thinking of a man.  A devotee
			to Your Majesties.  A man extremely
			motivated...

									DISSOLVE TO:

	EXT.  STREETS OF ISABEL - DAY

	FIVE MEN on HORSEBACK, dressed in fashionable clothes,
	canter down what used to be the main street of Isabel.
	Through some has been rebuilt, the effects of the
	hurricane are still visible...

	People look at them curiously.  We see them stop near the
	Governor's mansion.  The MEN dismount and walk into the
	Palace.


	INT.  GOVERNOR'S MANSION - DAY

	One of the MEN in black clothes removes his hat and steps
	forward.  We recognize him as ALONSO DE BOBADILLA, the man
	COLUMBUS humiliated at the rotunda.

	COLUMBUS is sitting at his desk, studying plans with
	GIACOMO.  Some other MEMBERS of the COUNCIL are with them.

					BOBADILLA
			Don Alonso de Bobadilla.

					COLUMBUS
			Yes... I remember...

	BOBADILLA turns, gestures to one of the other MEN, who
	comes forward and gives him a roll of parchment, bearing
	the royal seal.

					BOBADILLA
			My letters of appointment.

					COLUMBUS
			Appointment to what?

					BOBADILLA
			Viceroy of the West Indies.

					COLUMBUS
			Congratulations.  Then I am free to
			search for the mainland.

	BOBADILLA smiles wickedly, happy to give COLUMBUS a low
	blow.

					BOBADILLA
			Didn't you learn?  The mainland was
			discovered.  Weeks ago.  By another
			Italian.  I forgot his name.

					A MAN IN BLACK
			Amerigo Vespucci, Excellency.

	COLUMBUS pales.  Then...

					COLUMBUS
			How far from here?

					BOBADILLA
			I am not a seaman.  But I heard it
			is no more than a week at sea.  I
			hope you are not too disappointed.

					COLUMBUS
			How could I be?  The mainland has
			been found.  Exactly as I said it
			would.

					BOBADILLA
			I am afraid this is not the worst
			news.

									CUT TO:

	INT.  CELL - SEVILLE PRISON - DAY

	All is dark.  We can just make out COLUMBUS' face as he
	lies on the hard bed.  He is sweating heavily; his beard
	is filthy and matted, like his hair.  He looks feverish.

	A key turns in the lock.

	The JAILER lets in two fashionably dressed YOUNG MEN.
	COLUMBUS, blinking in the light, turns his head to stare
	at them.  His eyes are reddened with infection at the
	corners.  The YOUNG MEN come forward into the light.

					FERNANDO
				(quietly)
			Father?

	Unable to believe it, COLUMBUS slowly sits up.

					COLUMBUS
			Fernando...!  My God...!

	He laughs, overcome with joy.  Embraces DIEGO.

					COLUMBUS
			A man!  Diego, how did this happen?

					DIEGO
			Santangel is going to see the Queen.
			We are going to get you out of here.

					COLUMBUS
			Good!  I have to go back!

	DIEGO and FERNANDO look at one another, then back at
	COLUMBUS, incredulously, seeing his filthy clothes, his
	eyes rimmed with dried mucus.

					DIEGO
			Go back?

	There's a new excitement in COLUMBUS' voice.  He walks
	over to the table.  The candlelight illuminates maps,
	charts, drawings, figures...

					COLUMBUS
			I have to explore the mainland.

					FERNANDO
			This time with me!

	COLUMBUS laughs and DIEGO looks at them both in
	astonishment.

					DIEGO
			In your present state it is madness,
			Father!

	FERNANDO glances at DIEGO.

					FERNANDO
			Nobody is forcing you to come with
			us.

	DIEGO is hurt.

					DIEGO
			I can't go anyway.

	A pause.

					FERNANDO
			She's very beautiful!  The Queen has
			very good taste.  Diego is getting
			married.

	DIEGO seems saddened by his brother's attitude.  Once
	again DIEGO feels like the outsider.

	COLUMBUS hugs him.

					COLUMBUS
			I am happy for you, Diego.


	INT.  ALHAMBRA - AUDIENCE ROOM - DAY

	Like Lucifer and Gabriel, SANTANGEL and SANCHEZ sit on
	either side of ISABEL.

					SANTANGEL
			Granted his faults.  Yes, a hundred
			times!  But the man is still
			remarkable.

	ISABEL looks at him, then at SANCHEZ, MOVED BUT CLEARLY
	UNDECIDED.  SANTANGEL presses his point.

					SANTANGEL
			All he asks is a chance to explore
			this... mainland.

					SANCHEZ
			It does not belong to him.

					SANTANGEL
				(quietly)
			In a way, it does, Don Sanchez.
				(to the Queen)
			I beg Your Majesty to receive him.
			To hear him... He will make no more
			demands.  He has changed.  He is
			penitent.

					SANCHEZ
			Penitent...?  He is suing us for
			breach of contract!

					ISABEL
			Is he?

	She starts to laugh.

					ISABEL
			Really?

	SANTANGEL tries to stop himself laughing.


	INT.  AUDIENCE ROOM - ALHAMBRA PALACE - DAY

	COLUMBUS is shown into the room.  ISABEL is waiting for
	him.

	He drops to his knees before her.  This time she walks
	towards him, clearly moved by his white-hair, and other
	signs of physical deterioration.

	Her hand hovers over his head, as if it means to console
	him.  Her hand is dying to comfort.  But instead, she
	offers her hand for him to kiss.

					ISABEL
			Rise... Please...

	COLUMBUS gets slowly to his feet -- but his eyes, as they
	meet hers, are as clear as before.  ISABEL smiles with
	relief to see it.  He looks back at her.

					COLUMBUS
			Now I do look older than you.

	She smiles -- then again, tries to restrain it, and keeps
	her dignity.

					ISABEL
			We have decided to allow you to
			undertake another voyage to the new
			world...

	COLUMBUS starts to interrupt; she stops him with a
	gesture.

					ISABEL
			But without your brothers.  Nor are
			you to return to Santo Domingo or
			any of the other colonies.  You may
			explore the continent.

					COLUMBUS
			Thank you.

					ISABEL
			There is one thing I'd like to
			understand... Why do you want to go
			back, after all this?

					COLUMBUS
			Your Majesty -- some men are content
			to read about things.  I must see
			them with my own eyes.  I cannot be
			other than I am.

	She almost bursts out laughing -- only pauses, turns
	slightly, then goes out.


	INT.  ALHAMBRA PALACE - ROOM NEXT TO THRONE ROOM - DAY

	SANCHEZ is standing alone in the next room; he has
	obviously been listening.  He looks at her.

					ISABEL
			I know, I should not tolerate his
			impertinence.

					SANCHEZ
			Then why?

					ISABEL
			Because he is not afraid of me.


	INT.  ALHAMBRA PALACE - CORRIDOR - DAY

	SANCHEZ, in another direction, along a corridor, towards
	his office.  As he reaches a corner with a wide window, a
	hand seizes him.  COLUMBUS.

					SANCHEZ
			All I have to do is call the guards.

					COLUMBUS
			Call them.

	SANCHEZ looks at him -- and doesn't call.  COLUMBUS lets
	go of him.

					SANCHEZ
			I am not afraid of you.  You are
			nothing but a dreamer.

					COLUMBUS
			Look out of that window.

	Surprised, SANCHEZ nevertheless turns, looks out.

					COLUMBUS
			What do you see?

					SANCHEZ
			Roofs... towers, palaces...
			spires...

					COLUMBUS
			All of them created by people like
			me.

	SANCHEZ turns round again to face him.

					COLUMBUS
			No matter how long you live,
			Sanchez, there's something that will
			never change between us.  I did it!
			You didn't!

	COLUMBUS turns abruptly and walks away, vanishing down the
	echoing corridor.


	EXT.  COLUMBUS' MANOR HOUSE - DAY

	COLUMBUS dismounts in the courtyard.  Everything seems
	deserted.  There's no one about, no sign of life...


	INT.  MANOR HOUSE - DAY

	COLUMBUS walks slowly through the great rooms.  There is
	nothing left:  no furniture, rugs, pictures... nothing.

	He turns, sees BEATRIX standing in a doorway, looking back
	at him.  They are both moved.

					COLUMBUS
			God... you're so beautiful!  I can't
			believe no other man has ever taken
			you away from me...

					BEATRIX
			They tried... but I didn't let them.

	She smiles.  They don't dare to touch.  BEATRIX looks
	round the empty room.

					BEATRIX
			They took everything...

					COLUMBUS
				(looking at her)
			Not everything... Do you think I
			care?  I'm a free man again.  Riches
			don't make a man rich, they only
			make him busier...

	They laugh.  There's a pause.

					COLUMBUS
			God, how much I've missed you!

	And they throw themselves into each other's arms.

									CUT TO:

	INT.  DINING ROOM - MANOR HOUSE - EVENING

	All that has been left is a simple table and one chair.
	They are having supper by candlelight in the vast, empty
	room, though the candles throw a warm, sensuous glow on
	the figs and hams and wine... and on their faces, as
	BEATRIX sits on his lap.

					SANTANGEL (O.S.)
			One chair.  One table.  What more
			can a man expect, when he tries to
			sue the Crown?

	They laugh.  With only a little embarrassment, BEATRIX
	gets off COLUMBUS' knee.  SANTANGEL comes forward, and
	COLUMBUS embraces him like an old friend.  BEATRIX goes to
	the kitchen.

					COLUMBUS
			I owe you everything, Santangel...
			but as you see, I can't repay you.

					SANTANGEL
			On the contrary.  It is I who owe
			you everything.  Through you, I have
			been an adventurer, an explorer!
			It's true I shall never see the new
			world... but it's here...
				(he points to his
				head)
			And here...
				(pointing to his
				heart)

	COLUMBUS smiles.  BEATRIX returns with a plate and glass
	for SANTANGEL.

					SANTANGEL
			What you are, Colon, is a sailor, a
			discoverer, a man of imagination...
			not a politician.  You weren't meant
			to govern -- You cannot be all
			things to all men.

	He takes the wine BEATRIX offers, and raises his glass.

					SANTANGEL
			I wish you could have compromised.
			It would have made your life
			easier...

					COLUMBUS
			But as least we haven't been bored,
			have we?

	They all laugh, and drink.


	EXT.  SHIP'S DECK - FERNANDO'S POV - NIGHT

	Night on the open sea -- the moon shines on the waves and
	we hear the creaking of ropes and timbers -- the
	loneliness and mystery of the night passage.

					SAILOR'S VOICE
			West... southwest, Captain Mendez...

					MENDEZ (O.S.)
			Steady as she goes...

	COLUMBUS walks over to FERNANDO, who is leaning against
	the rail.  He is smoking a cigar... as the smoke blows
	over FERNANDO'S face, FERNANDO wretches... It's clear he's
	feeling seasick, trying to control it.

	COLUMBUS leans against the rail next to him, staring out
	at the darkness.  Then looks at his SON again.  FERNANDO
	won't give in to the sickness, but COLUMBUS knows he'd
	feel better if he did.

					COLUMBUS
			How are you feeling, Fernando?

					FERNANDO
				(in a strangled
				voice)
			Not bad.

	COLUMBUS nods meditatively, puffs out some smoke.
	FERNANDO winces, gags slightly.

					COLUMBUS
				(almost casually)
			You know what I always used to do?

	FERNANDO shakes his head.

					COLUMBUS
			Swallow a piece of pork fat on a
			string.  It always worked.

	At the thought of the pork fat, FERNANDO jerks his head
	over the side, and vomits copiously.  COLUMBUS smiles,
	pats him on the back.


	EXT.  SHIP'S DECK - DAY

	As it plows through heavy seas.  COLUMBUS, a coat wrapped
	around him, is sitting on a chair topside, directing
	operations despite an obvious fever.

	Suddenly a cry from the mast head:

					SAILOR (O.S.)
			Tierra...!  Tierra!

	SAILORS and FERNANDO rush to the side of the ship, peering
	through the spray.  FERNANDO wipes his eyes, and then he
	sees it:  there in the distance, a speck of land.

	FERNANDO and his FATHER stand together, watching the low
	cloud formation sitting on the horizon.

					COLUMBUS
			The mainland...

	FERNANDO looks excited.  Discreetly, COLUMBUS watches his
	SON, enjoying his happiness.


	EXT.  PANAMA (SURREAL IMAGES) - DAY

	A most wonderful and surreal image.  A heavy mist lies
	over the forest.  We move above it slowly.

	A FIGURE emerges from the mist.  At first only a
	silhouette -- then, slowly, a golden figure... an INDIAN,
	covered in gold... gold artifacts, golden paste on his
	body.

	The GOLDEN FIGURE turns, and points, into an unknown
	distance.


	EXT.  TREEHOUSE - DAY

	From the INDIAN treehouse, COLUMBUS, FERNANDO, MENDEZ and
	several INDIANS are gazing west over a necklace of
	magnificent lakes.

	The INDIANS point and talk gently.  FERNANDO has never
	seen anything so fresh, so beautiful.


	EXT.  CAMP - SUNSET

	A magnificent sunset.  A fire is burning, food cooking.
	COLUMBUS looks over his maps, trying to figure out where
	they are.  We see the outline of the continent of Asia.
	An OLD INDIAN squats beside him, silent, also looking at
	the map.  Then, slowly and very deliberately, he takes a
	piece of charcoal from the fire and begins to draw on the
	map.  Ignoring the Asian continent, he sketches the
	Panamanian coastline -- an isthmus.  MENDEZ and FERNANDO
	gather round.  COLUMBUS watches the OLD INDIAN with
	initial puzzlement, then growing excitement.

					MENDEZ
			What's he doing?

					COLUMBUS
			He's drawing an isthmus... He's
			saying we're on an isthmus.

					MENDEZ
			We can't be.

	FERNANDO is still confused.  The OLD INDIAN continues to
	sketch, talking quietly all the time.  An INDIAN
	TRANSLATOR listens.

					COLUMBUS
			Tell me what he's saying.

					TRANSLATOR
			He says -- water on the other side.

					COLUMBUS
			Ask him if he means a lake.  A big
			lake.

	The TRANSLATOR asks.  The OLD INDIAN shakes his head,
	laughs, points to the west, way beyond the other lakes,
	emphatically.

					TRANSLATOR
			No.  Says those are lakes.  Water on
			other side big -- as wide as here.
			Above and below, much land.

					COLUMBUS
				(stunned)
			An ocean...?  He's says it's an
			ocean?

					FERNANDO
			I don't understand.

	COLUMBUS is too stunned for a moment to explain.  The
	INDIANS laugh.

	Then COLUMBUS takes the charcoal, and begins to draw on
	the map, for his son.

					COLUMBUS
			Here is Europe... and over here, the
			continent of Asia.  But there's
			something in between!  Another
			continent!  We've found... another
			continent!

	FERNANDO stares west, then back at his FATHER.  COLUMBUS
	looks very feverish, his face bathed with sweat.

					FERNANDO
			Father...

					COLUMBUS
			There must be a passage to that
			other ocean.

									CUT TO:

	INT.  SHIP - COLUMBUS' CABIN - NIGHT

	COLUMBUS, feverish, lies on the bunk.  He shivers
	violently.  FERNANDO anxiously watches over him, bathes
	his eyes.

	Suddenly THE TRANSLATOR enters.

					TRANSLATOR
			I help.

	A little reluctantly, FERNANDO lets him go to his FATHER.
	The INDIAN crouches over the bed, takes out a handful of
	leaves from a pouch.  He chews the leaves himself for a
	moment, until they form a sticky pulp, then opens
	COLUMBUS' mouth and puts the pulp inside, encouraging
	COLUMBUS to chew with the motions of his hands.

	COLUMBUS chews, quickly falling asleep.


	EXT.  MOONLIT VISION OF VAST LAND MASS - NIGHT

	We see things from COLUMBUS' hallucination.  We are
	plunging through layers of clouds, the speed accelerating,
	giving us a sickening sensation of falling to land, closer
	and closer...

	COLUMBUS wakes up with a jolt.  Everything is silent.
	COLUMBUS walks outside.


	EXT.  DECK - NIGHT

	COLUMBUS' fever has subsided.  He raises his head and
	stares at the mainland passing in the night.  He smiles.

									CUT TO:

	EXT.  JUNGLE AND BAY - HIGH WIDE SHOT - DAY

	The roof of the jungle, the bay beyond, the caravel at
	anchor.

									CUT TO:

	EXT.  RIVER - DAY

	Two canoes going upstream, deeper and deeper into the
	jungle.


	EXT.  JUNGLE AND VILLAGE - DAY

	Smoke rises lazily above the trees.

									CUT TO:

	The boats reaching the bank.  THE FIRST HUTS of a village.
	THE SOLDIERS spread out into the empty village.

	FERNANDO, COLUMBUS and MENDEZ preceded by TWO ARMED
	SOLDIERS enter one of the huts.  The remains of a meal is
	still warm in bowls on the matted floor.

	A famished SOLDIER dips his hand in one of the bowls and
	devours its contents:  some kind of stew.  Stepping back
	accidentally, FERNANDO bumps into a large earthen jar
	behind him.  It rolls and crashes, revealing the remains
	of meat marinating in liquid.  There is something
	disturbing about the appearance of the content.

					FERNANDO
			Oh my God...

	The remains of human beings.

					COLUMBUS
				(approaching)
			What is...?

	He stares at the remains, stunned.  THE SOLDIER stops
	chewing.  He drops the half-empty bowl he was still
	holding.  He runs at the back door, rams his fingers deep
	in the back of his throat, and vomits.

					SOLDIER
			Oh Virgen Maria... Oh Madre de
			Dios...
			(Oh Virgin Mary... Oh Mother of
			 God...)

	But as he vomits and cries, he notices:

	A HEADLESS HUMAN TRUNK spread open, like a sheep carcass.
	Disturbed flies rise in clouds.

					SOLDIER
			Jesus, Maria, y todos los Santos...
			(Jesus, Mary, and all the Saints...)

									CUT TO:

	COLUMBUS and the SPANIARDS meet in the center of the
	village.  All have made the same horrific discovery.

					COLUMBUS
				(urgently)
			Out!  Get out!

	THE SPANIARDS back out of the village, crossbows pointed
	at the invisible enemy hidden in the jungle.

	They are running through the dense forest for the river
	bank.

	The CANNIBALS materialize among the trees, running
	alongside.  Bounding, skipping, frightening FIGURES, their
	brutal faces painted in black.  They release arrows at the
	running SOLDIERS.  A SOLDIER stops, kneels to the ground,
	fires his crossbow and kills one of the CANNIBALS... but
	he is pierced by a spear.  TWO CANNIBALS drag him and cut
	his throat to finish him.

	ELSEWHERE IN THE JUNGLE -- CRIES AND CONFUSION, SPANIARDS
	and CANNIBALS moving in hand to hand combat.

	A CANNIBAL comes sprinting at FERNANDO, brandishing his
	lance.

	COLUMBUS jumps on the man, and plants a knife in his
	abdomen.  Blinded in sweat, he stabs the CANNIBAL, who
	collapses.  Frenzied, COLUMBUS stabs over and over again.

	He stops and looks at his forearm -- soaked in blood.
	Shocked by his own fury, he raises his hand and stares at
	it.

	A GIANT BLACK BUTTERFLY alights gently on his bloody
	fingers, COLUMBUS staring fascinated at its palpitating
	wings.  FERNANDO, screaming at his FATHER, drags him to
	his feet.  They run...

									CUT TO:

	THE SPANIARDS, COLUMBUS, MENDEZ, FERNANDO... all running
	hard to the boat.  ARROWS whistle around them as they leap
	into the canoes, nearly capsizing them, launching them
	into the current.

	SOME CANNIBALS still follow them along the riverbank.  But
	the canoes are faster, and soon, they are left behind.


	EXT.  SHIP AT SEA - DAY

	Endless seascape, the caravel plowing.


	EXT.  SHIP'S DECK - DAY

	FERNANDO is crouched on the poop deck, wrapped in a
	blanket.  He seems in a state of shock:  he is pale and
	shaking.  As COLUMBUS goes and sits near his son, he hands
	him a flask of alcohol.

					COLUMBUS
				(kindly)
			Take it.  Come on.  Drink.

	As COLUMBUS insists, brandishing the flask, FERNANDO
	notices that his hands are shaking too.  His FATHER'S
	forehead is dripping with sweat.

	FERNANDO drinks a gulp and grimaces.  He drinks again and
	hands the flask back to his FATHER, who does the same.
	FERNANDO notices dried blood on his FATHER'S fingers.
	COLUMBUS immediately hides his hand and stands.

					COLUMBUS
			I... I have to see Mendez.

	Then, with sudden anger.

					COLUMBUS
			Your brother was right.  I should
			have never taken you with me.  I'll
			never forgive myself.  Never!

	He walks a few steps, lurches, and has to lean against the
	rail.  He raises his hand to his eyes, grimacing in pain,
	as if they were burning.  FERNANDO scrambles to his feet
	and rushes to him.  COLUMBUS' eyes are already fixed
	somewhere -- fever is eating him up.

					COLUMBUS
			Will you ever forgive me?

	FERNANDO turns around for help.

					COLUMBUS
			Captain Mendez!


	INT.  SHIP'S CABIN - DAY

	COLUMBUS is lying on his couch.  FERNANDO is bathing his
	eyes, sweeping off the pus that continuously forms in
	them.  COLUMBUS is drenched in sweat.

									CUT TO:

	FERNANDO is writing under his FATHER'S dictation.

					COLUMBUS
			I came to Your Highness with honest
			purpose and sincere zeal.  I did not
			undertake these voyages for honor or
			wealth -- that is certain.  After
			years of service to the Crown, I do
			not have a roof to put over my
			head... Your Majesty allowed me to
			explore the continent, believed to
			be Asia.  I now believe that it is
			an new Land, of unknown proportions
			and wealth... Life has more
			imagination than we carry in our
			dreams...

									DISSOLVE TO:

	INT.  ALCAZAR PALACE - GARDENS - DAY

	The DUENA, sitting beside ISABEL, quietly continues to
	read COLUMBUS' letter aloud.

					DUENA
			"I should be judged as a Seaman who
			by Divine Will discovered a New
			World, and thereby placed it under
			the sovereignty of Your Majesties.
			I humbly beseech Your Majesties that
			if it pleases God to remove me
			hence, you will help the name of
			Columbus to be remembered with
			honor... Weep for me, whoever has
			charity, truth and justice."

	She stops reading.  ISABEL turns her face away.


	INT.  UNIVERSITY OF SALAMANCA - DAY

	An ivory-sculptured hand -- the end of the back scratcher
	belonging to AROJAZ -- indicates a line across a large
	globe:  the route between Europe and America.

					AROJAZ (O.S.)
			The sunset route to the new
			continent is now well-established...

	We see a large amphitheater, filled with PEOPLE attending
	a lecture of "Nova Geographica" -- the new geography.

	AROJAZ stands in front of the assembly.  Facing him,
	enthroned, is KING FERDINAND, surrounded by COURTIERS,
	including SANCHEZ.

	We slowly move across the arena, passing attentive faces.

					AROJAZ
			... West by south west for 750
			leagues to Santo Domingo.  From
			there, west north west, leaving San
			Juan to the north, reaching the
			island of Hispanola on the northern
			cape of San Raphael... Then onto the
			mainland, at the Cape called Gracias
			a Dios...

	We continue to rise up the tiers of seats...

					AROJAZ
			Spain -- by Your Majesty's grace --
			has confirmed for all humanity the
			existence of an unknown continent...
			Tierra Incognita...

	On a highest tier, we stop on the face of CHRISTOPHER
	COLUMBUS, listening impassively.

					AROJAZ
			... This continent was first
			discovered by a sailor commissioned
			by your Majesty...

	CLOSE ON COLUMBUS' eyes.

					AROJAZ
			His name... Amerigo Vespucci...

	On COLUMBUS.


	EXT.  UNIVERSITY OF SALAMANCA - DAY

	Around the KING, on horseback, surrounded by the KNIGHTS,
	a CROWD is kept back by SOLDIERS.  AROJAZ is mounting his
	horse.  SANCHEZ is waiting for him.

	COLUMBUS stands among the students at the back of the
	CROWD.

									CUT TO:

	AROJAZ rides next to SANCHEZ.  AROJAZ suddenly spots
	COLUMBUS in the crowd, as they move off.

					AROJAZ
			My God...!  I thought he was dead.

	They pass close enough to touch COLUMBUS.  But he does not
	see them.

					SANCHEZ
			You can see for yourself.

					AROJAZ
			What a tragedy... what a waste of a
			life...

					SANCHEZ
			A waste...?  Let me tell you
			something, Arojaz.  If your name, or
			mine, is ever remembered -- it will
			only be because of his.

	AROJAZ looks at SANCHEZ in surprise -- then cranes his
	neck round, and looks back at COLUMBUS -- now a FACE IN
	THE CROWD.


	EXT.  LA RABIDA MONASTERY - KITCHEN GARDEN - DAY

	ANTONIO DE MARCHENA, a very old man now, is taking a
	siesta next to his grapes.  He is sitting in a simple
	armchair, a rosary wrapped around his fingers.

	The presence of someone wakes him.  After a moment, he
	recognizes COLUMBUS and smiles.  Both MEN are very moved.

					MARCHENA
			I suppose we're both old men now.

					COLUMBUS
			You'll always be older than me,
			Father.

	They laugh.  COLUMBUS sits down.  Bees drone lazily in the
	sunlight.

					COLUMBUS
			Have you ever forgiven me?

	MARCHENA nods his head.

					MARCHENA
			Yes.  I forgave you a long time ago.
			You see, I was proud of you.  You
			were like a willful child.  You
			wouldn't accept what others told
			you.  You had to find things out for
			yourself, hurting yourself -- and
			others -- in the process.

	MARCHENA looks at his plants, sighs contentedly.

					MARCHENA
			Do you remember when you said that
			people talk about the world, but
			never leave their gardens.

	COLUMBUS nods.

					MARCHENA
			More than ever I wonder what it is
			we do achieve by leaving our
			gardens... The world changes -- and
			yet it seems the same.  We find new
			worlds, but fill them with the same
			people...

	He pauses, looks across at COLUMBUS, smiles again gently.
	MARCHENA, tiring, leans back in his chair, and looks up
	towards the sun.

					COLUMBUS
			I have to disagree.

					MARCHENA
			I knew you would.

					COLUMBUS
			New worlds create new people.

					MARCHENA
			Oh?  So you are a new man?

					COLUMBUS
			I don't know... I have the
			impression that I didn't change that
			much.  I still can't accept the
			world as it is!

	MARCHENA starts laughing.

					MARCHENA
			God bless you, and those like you!

	They both laugh.


	EXT.  BEATRIX'S HOUSE BALCONY - EVENING

	FERNANDO is sitting in front of his FATHER, examining
	documents and letters.  COLUMBUS has wrapped a shawl
	around his legs.  He looks even older now, with his mass
	of pure white hair.

	BEATRIX comes out with a tray, carrying grapes and a
	decanter of water.  She places it on a small table near
	COLUMBUS and touches his shoulder.

	As she is ready to return inside the house, he holds her
	back.

					COLUMBUS
			Can't you stay with us a little?

					BEATRIX
			I am busy inside.

	He smiles.  She looks at him smiling, intrigued.

					BEATRIX
			What is it, now?  Tell me...

					COLUMBUS
			I can't keep my eyes off you.  I
			would like to catch up with all the
			moments I didn't spend with you.

	FERNANDO looks up at them above his letters, amused and
	slightly embarrassed.  COLUMBUS looks at him with a fake
	air of reproach.

					COLUMBUS
			What are you listening to?

					FERNANDO
			I am not listening, Father.  But I
			can't help hearing.

	FERNANDO opens a letter and reads it quickly.

					FERNANDO
			It's Diego... He is at the Court,
			with Santangel... He says they hope
			to get your privileges restored...
			And maybe the house.

	COLUMBUS smiles and nods -- all this seems to be of very
	little importance to him now.

					COLUMBUS
			But how is he?  And Dona Maria?

	FERNANDO continues to read.

					FERNANDO
			Fine, it seems.  Diego is thinking
			of starting a pearl trade, in Santo
			Domingo... He says he received many
			letters for you.  Some of your men,
			mostly.

	He opens one of them, glances at it.

					FERNANDO
			This one is from Mendez!

	COLUMBUS' eyes brighten with joy.

					COLUMBUS
			What does he say?

					FERNANDO
			He asks when he can come to visit
			you.  He left his address.

					COLUMBUS
				(smiling)
			He never had one... except aboard my
			ships!

	FERNANDO laughs -- then, suddenly serious.

					FERNANDO
			I want you to tell me everything you
			remember, Father.  From the
			beginning.  Everything.

					COLUMBUS
			Really?
				(pause)
			God... I wouldn't know where to
			start... and yet...

					FERNANDO
			Tell me the first thing that comes
			to your mind.

	COLUMBUS sighs, and leans back on his chair.  His eyes are
	fixed somewhere, searching.  Then, almost in a murmur.

					COLUMBUS
			I remember...

	We see the page.  FERNANDO writes: ... I REMEMBER...

	A drop of ink falls from the quill onto the page and the
	words.

	FERNANDO is waiting.

									CUT TO:

	COLUMBUS' eyes.

									CUT TO:

	EXT.  BEACH AND JUNGLE - FIRST LANDING - DAY

	A MOVING IMAGE, as seen from the rolling deck of a ship.
	We see:

	A majestic forest, resting on a slash of white sand, and
	deep blue sea...

									MUSIC BEGINS:

	THE LONE SILHOUETTE of an INDIAN emerges from the dense
	foliage.  He runs down the beach towards the surf.  He
	stops and seems to be staring at us.

	These words appear on the screen:

			THE BIOGRAPHY FERNANDO WROTE ABOUT
			HIS FATHER WAS FOUND BY CHANCE IN
			VENICE.  ITS PUBLICATION IN 1571
			CONTRIBUTED TO RESTORING THE NAME OF
			CHRISTOPHER COLUMBUS, WHICH HAD BEEN
			FORGOTTEN.

			IN 1511 DIEGO COLUMBUS BECAME
			GOVERNOR OF SANTO DOMINGO.

			COLUMBUS RESTS IN THE CATHEDRAL OF
			SEVILLE, IN ANDALUSIA.

	END AND CREDITS.



`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
