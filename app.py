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
browser.get(action_url);

#game categories objects of all game titles and category
all_game_categories = []
increment = 0;

action_categories = browser.find_elements_by_xpath('//a[contains(text(), "See more")]') # get all the see more buttons
for category in action_categories:
	category_titles = category.find_elements_by_xpath('//a[@class="title-link id-track-click"]') # get the category title
	category.click() # click see more button
	time.sleep(1) #might need to fix

	game_title_elements = browser.find_elements_by_xpath('//a[@class="title"]')

	game_titles = []
	for elem in game_title_elements:
		print(elem.text)
		game_titles.append(elem.text)

	browser.execute_script("window.history.go(-1)")
	time.sleep(1)



@app.route('/')
def index():
	return render_template('home.html', all_game_categories = all_game_categories)

if __name__ == '__main__':
	app.run()