from flask import Flask, render_template
from flask_bootstrap import Bootstrap

from models.GameCategories import Category
from models.GameInfo import GameInfo

import time
import collections
import os

from selenium import webdriver 
from selenium.webdriver.common.by import By 
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import TimeoutException, StaleElementReferenceException

from flask_sqlalchemy import SQLAlchemy

def WaitforElement(browser, timeout, xpathElement):
	try:
	    WebDriverWait(browser, timeout).until(EC.visibility_of_element_located((By.XPATH, xpathElement)))
	except TimeoutException:
	    print("Timed out waiting for page to load")
	    browser.quit()

app = Flask(__name__)
Bootstrap(app) # use bootstrap


# Setting up database
db_path = os.path.join(os.path.dirname(__file__), 'db' + os.sep + 'data.db')
db_uri = 'sqlite:///{}'.format(db_path)
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
db = SQLAlchemy(app)

class DataTable(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	title = db.Column(db.String(255))
	size = db.Column(db.Integer)
	developer = db.Column(db.String(255))
	current_version = db.Column(db.String(255))
	game_rate = db.Column(db.String(255))
	content_rating = db.Column(db.String(255))
	installs = db.Column(db.String(255))






action_url = "https://play.google.com/store/apps/category/GAME_ACTION?hl=en"

browser = webdriver.Chrome()
browser.get(action_url)



#game categories objects of all game titles and category
all_game_categories = collections.OrderedDict()
game_infos = []
database_game_infos = []

title_categoryElements = browser.find_elements_by_xpath('//a[@class="title-link id-track-click"]') # get all the Title buttons
title_categories = [(x.text, x.get_attribute('href')) for x in title_categoryElements]
for title in title_categories:
	browser.get(title[1]) # go into category

	game_title_elements = browser.find_elements_by_xpath('//a[@class="title"]')
	gameTitles = [elem.text for elem in game_title_elements]
	all_game_categories[title[0]] = gameTitles


	small_card_elements = browser.find_elements_by_xpath('//div[@class="card-content id-track-click id-track-impression"]')
	card_links = [(x.find_elements_by_xpath('.//a[@class="card-click-target"]')[0].get_attribute('href')) for x in small_card_elements]
	#for testing
	max_link = 10
	i = 0
	for link in card_links:
		if (i == max_link):
			break
		i += 1
		browser.get(link)
		#get the game information here 
		title = browser.find_elements_by_xpath('//h1[@class="AHFaub"]')[0].get_attribute("innerText")
		game_rate = browser.find_elements_by_xpath('//div[@class="BHMmbe"]')[0].get_attribute("innerText")
		#get game data
		infos = browser.find_elements_by_xpath('//span[@class="htlgb"]')
		info_texts = [(x.get_attribute('innerText')) for x in infos]
		# print (info_texts)
		last_updated = info_texts[0]
		game_size = info_texts[2]
		installs = info_texts[4]
		current_version = info_texts[6]
		content_rating = info_texts[10]
		developer = "" if len(info_texts) < 21 else info_texts[20]

		game_info = GameInfo(title, game_size, developer, current_version, game_rate, content_rating, installs)
		game_infos.append(game_info)

		newItem = DataTable(
			title = title, 
			size = game_size, 
			developer = developer, 
			current_version = current_version,
			game_rate = game_rate, 
			content_rating = content_rating, 
			installs = installs)
		database_game_infos.append(newItem)
	
	# I am going to comment out this break so I can just get top 10 games from each category
	# break


db.session.add_all(database_game_infos)  
db.session.commit()


@app.route('/')
def index():
	return render_template('home.html', game_infos = game_infos)

if __name__ == '__main__':
	app.run()