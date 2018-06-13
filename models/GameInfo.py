class GameInfo:
	title = ""
	size = 0
	developer = ""
	current_version = ""
	content_rating = ""
	game_rate = ""
	installs = ""
	all_reviews = []

	def __init__(self, title, size, developer, current_version, game_rate, content_rating, installs):
		self.title = title
		self.size = size
		self.developer = developer
		self.current_version = current_version
		self.game_rate = game_rate
		self.content_rating = content_rating
		self.installs = installs
