let nodes = []
let selected_nodes = []
let n_selected_nodes = 3
let teams = []
let index_active = -1

function setup() {
	noCanvas()

	setup_nodes()

	display_title(true)
	display_divider()
	display_add_teams()
}

function setup_nodes() {

	// Erdkunde
	nodes.push(new Node('Erdkunde', 'Welcher Fluss fließt durch Hamburg?', 'Elbe'))
	nodes.push(new Node('Erdkunde', 'Welches Land hat die meisten Einwohner?', 'China'))
	nodes.push(new Node('Erdkunde', 'Wie heißt der längste Fluss Deutschlands?', 'Rhein'))
	nodes.push(new Node('Erdkunde', 'Wie heißt der höchte Berg Deutschlands?', 'Zugspitze'))
	nodes.push(new Node('Erdkunde', 'Wie heißt das kleinste Bundesland Deutschlands?', 'Bremen'))
	nodes.push(new Node('Erdkunde', 'Wie heißt das größte Bundesland Deutschlands?', 'Bayern'))
	nodes.push(new Node('Erdkunde', 'Welches deutsche Bundesland hat die meisten Einwohner?', 'Nordrhein-Westfalen'))
	nodes.push(new Node('Erdkunde', 'Das Blatt welches Laubbaums ist auf der Staatsflagge Kanadas zu sehen?', 'Ahorn'))
	nodes.push(new Node('Erdkunde', 'Wie nennt man die Zeichenerklärung auf Landkarten?', 'Legende'))

	// Allgemeinwissen
	nodes.push(new Node('Allgemeinwissen', 'Wie viele Tage hat ein Schaltajhr?', '366'))
	nodes.push(new Node('Allgemeinwissen', 'Nach welcher Zeit feiert man die "Petersilienhochzeit"?', '12 1/2 Jahre'))
	nodes.push(new Node('Allgemeinwissen', 'Mit wie vielen Figuren startet ein Schachspiel?', '32'))
	nodes.push(new Node('Allgemeinwissen', 'Wie hieß die deutsche Währung vor dem Euro?', 'Deutsche Mark'))
	nodes.push(new Node('Allgemeinwissen', 'Wie viele Karten hat ein Skatspiel?', '32'))
	nodes.push(new Node('Allgemeinwissen', 'Welche Farbe hat den ersten Zug beim Schach?', 'weiß'))
	nodes.push(new Node('Allgemeinwissen', 'An welchem Tag feiert man in Deutschland den Tag der Arbeit?', '1. Mai'))
	nodes.push(new Node('Allgemeinwissen', 'Wie lautet das Ergebnis, wenn man die gegenüberliegenden Augenzahlen eines Würfels addiert?', '7'))
	nodes.push(new Node('Allgemeinwissen', 'Wie hoch ist die Richtgeschwindigkeit auf deutschen Autobahnen?', '130 km/h'))
	nodes.push(new Node('Allgemeinwissen', 'Wie nennt man unerwünschte Werbung per E-Mail?', 'Spam'))
	nodes.push(new Node('Allgemeinwissen', 'Wie nennt man das Entladen eines Schiffes?', 'löschen'))
	nodes.push(new Node('Allgemeinwissen', 'Wovor hat jemand Angst, der unter Arachnophobie leidet?', 'Spinnen'))
	nodes.push(new Node('Allgemeinwissen', 'Wie heißt das höchste Blatt beim Pokern?', 'Royal Flush'))
	nodes.push(new Node('Allgemeinwissen', 'Wie heißt das Büro des Präsidenten der USA im Weißen Haus?', 'Oval Office'))
	nodes.push(new Node('Allgemeinwissen', 'Was wird mit der Richterskala gemessen?', 'Erdbeben'))
	nodes.push(new Node('Allgemeinwissen', 'Wie wird ein zerfallendes Bauwerk genannt?', 'Ruine'))
	nodes.push(new Node('Allgemeinwissen', 'Was wird in Deutschland am 3. Oktober gefeiert?', 'Tag der Deutschen Einheit'))
	nodes.push(new Node('Allgemeinwissen', 'Wie nennt man ein Segelboot mit zwei Rümpfen?', 'Katamaran'))
	nodes.push(new Node('Allgemeinwissen', 'Wie werden japanische Comics auch bezeichnet?', 'Manga'))
	nodes.push(new Node('Allgemeinwissen', 'Wie wird eine auf beiden Seiten von Bäumen begrenzten Straße bezeichnet?', 'Allee'))

	// Film & Fernsehen
	nodes.push(new Node('Film & Fernsehen', 'Wie heißt der Schauspieler von Harry Potter?', 'Daniel Radcliffe'))
	nodes.push(new Node('Film & Fernsehen', 'Wie heißt der Schauspieler von Iron Man?', 'Robert Downey Jr.'))
	nodes.push(new Node('Film & Fernsehen', 'Was fehlt Hook aus "Peter Pan"?', 'Hand'))
	nodes.push(new Node('Film & Fernsehen', 'Wie heißt die Schwester von Elsa, der Eiskönigin?', 'Anna'))
	nodes.push(new Node('Film & Fernsehen', 'Wie heißt das Haus von Pippi Langstrumpf?', 'Villa Kunterbunt'))
	nodes.push(new Node('Film & Fernsehen', 'Wie heißt der Hund von Obelix?', 'Idefix'))
	nodes.push(new Node('Film & Fernsehen', 'In welcher TV-Straße wohnen Elmo und Graf Zahl?', 'Sesamstraße'))
	nodes.push(new Node('Film & Fernsehen', 'Wie heißt dieser Moderator?', 'Kai Pflaume', 'https://i.postimg.cc/L6cfqzQT/kai-pflaume.jpg'))
	nodes.push(new Node('Film & Fernsehen', 'Wie heißt dieser Komiker?', 'Teddy Teclebrhan', 'https://i.postimg.cc/4nk6TtrB/teddy.jpg'))
	nodes.push(new Node('Film & Fernsehen', 'Wie heißt diese Komikerin?', 'Carolin Kebekus', 'https://i.postimg.cc/pdX17bQy/carolin-kebekus.jpg'))
	nodes.push(new Node('Film & Fernsehen', 'Wie heißt dieser Film?', 'Avatar', 'https://i.postimg.cc/cLRqfVw6/avatar.jpg'))
	nodes.push(new Node('Film & Fernsehen', 'Wie heißt dieser Film?', 'Herr der Ringe', 'https://i.postimg.cc/vBcb70Gj/herr-der-ringe.jpg'))
	nodes.push(new Node('Film & Fernsehen', 'Wie heißt dieser Film?', 'Titanic', 'https://i.postimg.cc/rmBX1cn0/titanic.jpg'))

	// Musik
	nodes.push(new Node('Musik', 'Wer komponierte "Eine kleine Nachtmusik"?', 'Wolfgang Amadeus Mozart'))
	nodes.push(new Node('Musik', 'Welche schwedische Band veröffentlichte 2021 nach 40 Jahren Pause das Album "Voyage"?', 'ABBA'))
	nodes.push(new Node('Musik', 'Welche Sängerin singt das Lied "Atemlos durch die Nacht"?', 'Helene Fischer'))
	nodes.push(new Node('Musik', 'Wie heißt dieser Komponist?', 'Ludwig van Beethoven', 'https://i.postimg.cc/sDcGwtTM/Beethoven.jpg'))
	nodes.push(new Node('Musik', 'Wie heißt dieser Musiker?', 'Harry Styles', 'https://i.postimg.cc/63JCDCnq/harry-styles-217668.jpg'))

	// Sport
	nodes.push(new Node('Sport', 'Welches Land wurde 2018 im Herrenfußball Weltmeister?', 'Frankreich'))
	nodes.push(new Node('Sport', 'Welches Land wurde 2019 im Frauenfußball Weltmeister?', 'USA'))
	nodes.push(new Node('Sport', 'Wie nennt man den Kampfbereich beim Boxen?', 'Ring'))
	nodes.push(new Node('Sport', 'Für welche Sportart ist Boris Becker bekannt?', 'Tennis'))
	nodes.push(new Node('Sport', 'Wie lang ist ein Marathon?', '42 km'))
	nodes.push(new Node('Sport', 'Wie nennt man beim Bowling das komplette Abräumen aller zehn Pins mit einem Wurf?', 'Strike'))
	nodes.push(new Node('Sport', 'Wie nennt sich die Hartgummischeibe beim Eishockey?', 'Puck'))
	nodes.push(new Node('Sport', 'Wie viele Löcher hat ein Billardtisch?', '6'))

	// Tiere
	nodes.push(new Node('Tiere', 'Wie heißt das größte Tier der Welt?', 'Blauwal'))
	nodes.push(new Node('Tiere', 'Wie nennt man das männliche Schwein?', 'Eber'))
	nodes.push(new Node('Tiere', 'Wie viele Mägen hat eine Kuh?', '4'))
	nodes.push(new Node('Tiere', 'Wie nennt man eine Gruppe von Delphinen?', 'Schule'))
	nodes.push(new Node('Tiere', 'Wie nennt man die schnellste Gangart eines Pferdes?', 'Galopp'))

	// Sehenswürdigkeiten
	nodes.push(new Node('Sehenswürdigkeiten', 'In welcher Stadt steht diese Sehenswürdigkeit?', 'Paris', 'https://i.postimg.cc/yxtpkVxx/louvre.jpg'))
	nodes.push(new Node('Sehenswürdigkeiten', 'In welcher Stadt steht diese Sehenswürdigkeit?', 'Pisa', 'https://i.postimg.cc/fbD23qzc/pisa.jpg'))
	nodes.push(new Node('Sehenswürdigkeiten', 'In welcher Stadt steht diese Sehenswürdigkeit?', 'Köln', 'https://i.postimg.cc/NMGznJZs/koelndom1130.jpg'))
	nodes.push(new Node('Sehenswürdigkeiten', 'In welcher Stadt steht diese Sehenswürdigkeit?', 'London', 'https://i.postimg.cc/0NYTFJQf/big-ben-2.jpg'))
	nodes.push(new Node('Sehenswürdigkeiten', 'In welcher Stadt steht diese Sehenswürdigkeit?', 'Hamburg', 'https://i.postimg.cc/VsG3xwY3/elbphilharmonie.jpg'))

	// Medizin
	nodes.push(new Node('Medizin', 'Wie heißt das größte Organ vom Menschen?', 'Haut'))
	nodes.push(new Node('Medizin', 'Wie nennt man das Instrument zum Abhören der Herztöne? ', 'Stethoskop'))
	nodes.push(new Node('Medizin', 'Welches Hormon ist für die Senkung des Blutzuckerspiegels zuständig? ', 'Insulin'))
	nodes.push(new Node('Medizin', 'In welchem Körperteil liegt der menschliche Gleichgewichtssinn? ', 'Ohr'))

	// Essen & Trinken
	nodes.push(new Node('Essen & Trinken', 'Woraus wird Popcorn gemacht?', 'Mais'))
	nodes.push(new Node('Essen & Trinken', 'Woraus wird Tofu hergestellt?', 'Soja'))
	nodes.push(new Node('Essen & Trinken', 'Wie werden die bekannten schwäbischen Eiernudeln genannt?', 'Spätzle'))
	nodes.push(new Node('Essen & Trinken', 'Womit ist eine Pizza Tonno belegt?', 'Thunfisch'))
	nodes.push(new Node('Essen & Trinken', 'Was wird auch als Erdapfel bezeichnet?', 'Kartoffel'))
	nodes.push(new Node('Essen & Trinken', 'Was für ein Gemüse ist ein Hokkaido?', 'Kürbis'))

	// Geschichte
	nodes.push(new Node('Geschichte', 'In welchem Jahr sank die Titanic?', '1912'))
	nodes.push(new Node('Geschichte', 'In welchem Jahr war die erste Mondlandung?', '1969'))
	nodes.push(new Node('Geschichte', 'In welchem Jahr war der Mauerfall?', '1989'))

	// Kunst
	nodes.push(new Node('Kunst', 'Wer hat die Mona Lisa gemalt?', 'Leonardo Da Vinci'))
	nodes.push(new Node('Kunst', 'Wie nennt man gesprayte Kunstwerke?', 'Graffiti'))
	nodes.push(new Node('Kunst', 'Wer hat dieses Bild gemalt?', 'Vincent van Gogh', 'https://i.postimg.cc/D0yNVV3x/Van-Gogh-Starry-Night-Google-Art-Project.jpg'))

	// Weltraum
	nodes.push(new Node('Weltraum', 'Wie heißt der größte Planet im Sonnensystem?', 'Jupiter'))
	nodes.push(new Node('Weltraum', 'Unter welcher Abkürzung ist die Internationale Raumstation bekannt?', 'ISS'))
	nodes.push(new Node('Weltraum', 'Wodurch wird die Sonne bei einer Sonnenfinsternis verdeckt?', 'Mond'))

	// Chemie
	nodes.push(new Node('Chemie', 'Was ist H2O?', 'Wasser'))
	nodes.push(new Node('Chemie', 'Womit werden Luftballons gefüllt, damit sie fliegen?', 'Helium'))
	nodes.push(new Node('Chemie', 'Wie nennt man dieses Gerät?', 'Bunsenbrenner', 'https://i.postimg.cc/cJm9XWFk/bunsenbrenner.png'))

	// Märchen
	nodes.push(new Node('Märchen', 'In was wird die Hexe von Gretel in dem Märchen Hänsel und Gretel geschubst?', 'Ofen'))
	nodes.push(new Node('Märchen', 'Wie lange schläft Dornröschen?', '100 Jahre'))
	nodes.push(new Node('Märchen', 'Wessen kranke Großmutter wohnt im Wald?', 'Rotkäppchen'))
	nodes.push(new Node('Märchen', 'Mit welchem Obst wurde Schneewittchen vergiftet?', 'Apfel'))

	// Religion
	nodes.push(new Node('Religion', 'Wer übersetzte als Erster die Bibel ins Deutsche?', 'Martin Luther'))
	nodes.push(new Node('Religion', 'Wie viele Weltreligionen gibt es?', '5'))

	console.log(nodes.length)

	nodes = nodes.sort(() => Math.random() - 0.5)

	for (let i = 0; i < 1000; i++){
		a = int(random()*nodes.length)
		b = int(random()*nodes.length)
		temp = nodes[a]
		nodes[a] = nodes[b]
		nodes[b] = temp
	}

	for (let i = 0; i < n_selected_nodes; i++){
		node = nodes.pop()
		selected_nodes.push(node)
	}
}

function display_divider() {
	br = createElement('br')
	div_card_divider = createDiv()
	div_card_divider.addClass('card')
	div_card_divider.addClass('divider')
	br = createElement('br')
}

function display_title(do_animation=false) {
	div_card_title = createDiv()
	div_card_title.class('card')

	header_title = createElement('h1', 'Titel')
	header_title.parent(div_card_title)

	if (do_animation) {
		animate(header_title, 'animate__jackInTheBox')
	}
}

function display_add_teams() {
	div_card_add_team = createDiv()
	div_card_add_team.class('card')

	header_add_team = createElement('h1', 'Teams')
	header_add_team.parent(div_card_add_team)

	input = createInput('')
	input.parent(div_card_add_team)

	br = createElement('br')
	br.parent(div_card_add_team)

	br = createElement('br')
	br.parent(div_card_add_team)

	button_add_team = createButton('Team hinzufügen')
	button_add_team.parent(div_card_add_team)
	button_add_team.mousePressed(function() {
		team = new Team(input.value())
		teams.push(team)
		removeElements()
		display_title()
		display_divider()
		display_add_teams()
		display_divider()
		display_teams()
		display_divider()
		display_start_game()
	})
}

function display_start_game() {
	div_card_start_game = createDiv()
	div_card_start_game.class('card')

	button_start_game = createButton('Spiel starten')
	button_start_game.parent(div_card_start_game)
	button_start_game.mousePressed(function() {
		index_active = int(random()*10000)
		removeElements()
		display_selected_nodes()
		display_divider()
		display_teams()
	})
}

function display_teams() {
	div_row = createDiv()
	div_row.class('row')

	p_points = Array(teams.length)

	for (let i = 0; i < teams.length; i++){
		div_column = createDiv()
		div_column.addClass('column')
		div_column.addClass('column' + str(teams.length))
		div_column.parent(div_row)

		div_card_team = createDiv()
		div_card_team.class('card')
		div_card_team.parent(div_column)
		if (index_active >= 0 && i == (index_active % teams.length)) {
			div_card_team.addClass('active')
		}

		header = createElement('h1', teams[i].name)
		header.parent(div_card_team)

		div_points_row = createDiv()
		div_points_row.class('points_row')
		div_points_row.parent(div_card_team)

		button_minus = createButton('-')
		button_minus.class('points_column')
		button_minus.parent(div_points_row)
		button_minus.mousePressed(function() {
			if (teams[i].points > 0) {
				teams[i].points -= 1
				p_points[i].html(str(teams[i].points) + ' Punkte')
			}
		})

		p_points[i] = createP(str(teams[i].points) + ' Punkte')
		p_points[i].class('points_column')
		p_points[i].parent(div_points_row)

		button_plus = createButton('+')
		button_plus.class('points_column')
		button_plus.parent(div_points_row)
		button_plus.mousePressed(function() {
			teams[i].points += 1
			p_points[i].html(str(teams[i].points) + ' Punkte')
		})
	}
}

function display_selected_nodes() {
	div_card_info = createDiv()
	div_card_info.class('card')

	p_info = createP(teams[index_active % teams.length].name + ', wählt eine Kategorie aus.')
	p_info.parent(div_card_info)

	display_divider()

	div_row = createDiv()
	div_row.class('row')

	for (let i = 0; i < selected_nodes.length; i++){
		div_column = createDiv()
		div_column.addClass('column')
		div_column.addClass('column' + str(n_selected_nodes))
		div_column.parent(div_row)

		div_card_selected_node = createDiv()
		div_card_selected_node.class('card')
		div_card_selected_node.parent(div_column)

		header_selected_node = createElement('h1', selected_nodes[i].category)
		header_selected_node.parent(div_card_selected_node)
		animate(header_selected_node, 'animate__zoomIn')

		button_select_node = createButton('auswählen')
		button_select_node.parent(div_card_selected_node)
		button_select_node.mousePressed(function() {
			removeElements()
			display_question(selected_nodes[i])
			display_divider()
			display_teams()
			if (nodes.length){
				selected_nodes[i] = nodes.pop()
			}else{
				selected_nodes.splice(i, 1)
			}
		})
	}
}

function display_question(node) {
	div_card_question = createDiv()
	div_card_question.class('card')

	header = createElement('h1', node.category)
	header.parent(div_card_question)

	p_question = createP(node.question)
	p_question.parent(div_card_question)
	animate(p_question, 'animate__zoomIn')

	if (node.image_url) {
		img = createImg(node.image_url)
		img.parent(div_card_question)
		animate(img, 'animate__zoomIn')

		br = createElement('br')
		br.parent(div_card_question)
	}

	button_display_answer = createButton('Antwort anzeigen')
	button_display_answer.parent(div_card_question)
	button_display_answer.mousePressed(function() {
		button_display_answer.remove()
		p_answer = createP(node.answer)
		p_answer.parent(div_card_question)
		animate(p_answer, 'animate__zoomIn')
		button_display_selected_nodes = createButton('weiter')
		button_display_selected_nodes.parent(div_card_question)
		button_display_selected_nodes.mousePressed(function() {
			index_active += 1
			removeElements()
			display_selected_nodes()
			display_divider()
			display_teams()
		})
	})
}

function animate(element, animation){
	element.addClass('animate__animated  ' + animation)
	let wait = setTimeout(function(){
		element.removeClass('animate__animated')
		element.removeClass(animation)
	}, 1000)
}

class Node {
	constructor(category, question, answer, image_url=undefined) {
		this.category = category
		this.question = question
		this.answer = answer
		this.image_url = image_url
	}
}

class Team {
	constructor(name) {
		this.name = name
		this.points = 0
	}
}
