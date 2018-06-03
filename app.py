from flask import Flask, render_template
from models import GameCategories
import time

from selenium import webdriver 
from selenium.webdriver.common.by import By 
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC 
from selenium.common.exceptions import TimeoutException

app = Flask(__name__)

action_url = "https://play.google.com/store/apps/category/GAME_ACTION?hl=en"

browser = webdriver.Chrome();
browser.get("https://play.google.com/store/apps/category/GAME_ACTION?hl=en");

#game categories objects of all game titles and category
all_game_categories = []

action_categories = browser.find_elements_by_xpath('//h2[@class="single-title-link"]')
for category in action_categories:
	category_titles = category.find_elements_by_xpath('//a[@class="title-link id-track-click"]')
	print(category_titles[0].text)
	category_buttons = category.find_elements_by_xpath('//a[@class="see-more play-button small id-track-click apps id-responsive-see-more"]')
	category_buttons[0].click()
	game_title_elements = browser.find_elements_by_xpath('//a[@class="title"]')

	game_titles = []
	for elem in game_title_elements:
		print(elem.text)
		game_titles.append(elem.text)

	game_category = Category(category_title, game_titles)
	all_game_categories.append(game_category)

	delay = 1 # wait before doing the next scrae on another category
	time.sleep(10)

	driver.execute_script("window.history.go(-1)")



@app.route('/')
def index():
	return render_template('home.html', all_game_categories = all_game_categories)

if __name__ == '__main__':
	app.run(debug=True)