from flask import Flask, render_template
from flask_bootstrap import Bootstrap

from models.GameCategories import Category
from models.GameInfo import GameInfo

import time
import collections

from selenium import webdriver 
from selenium.webdriver.common.by import By 
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import TimeoutException, StaleElementReferenceException

def WaitforElement(browser, timeout, xpathElement):
	try:
	    WebDriverWait(browser, timeout).until(EC.visibility_of_element_located((By.XPATH, xpathElement)))
	except TimeoutException:
	    print("Timed out waiting for page to load")
	    browser.quit()

app = Flask(__name__)
Bootstrap(app) # use bootstrap

action_url = "https://play.google.com/store/apps/category/GAME_ACTION?hl=en"

browser = webdriver.Chrome()
browser.get(action_url)



#game categories objects of all game titles and category
all_game_categories = collections.OrderedDict()
game_infos = []

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
	max_link = 4
	i = 0
	for link in card_links:
		if (i == max_link):
			break
		i += 1
		browser.get(link)
		#get the game information here 
		infos = browser.find_elements_by_xpath('//span[@class="htlgb"]')
		info_texts = [(x.get_attribute('innerText')) for x in infos]
		for x in info_texts:
			print (x)

		#installs = browser.find_elements_by_xpath("//*[contains(text(), 'Installs')]")[0].get_attribute('innerText')
		#current_version = browser.find_elements_by_xpath("//*[contains(text(), 'Current Version')]")[0].get_attribute('innerText')
		#content_rating = browser.find_elements_by_xpath("//*[contains(text(), 'Content Rating')]")[0].get_attribute('innerText')
		#game_rate = browser.find_elements_by_xpath('.//div[@class="BHMmbe"]')[0].get_attribute('innerText').get_attribute('innerText')
		#developer = browser.find_elements_by_xpath("//*[contains(text(), 'Offered By')]")[0].get_attribute('innerText')

		#game_info = GameInfo(title, size, developer, current_version, game_rate, content_rating, installs)
		#game_infos.append(game_info)
	break


@app.route('/')
def index():
	return render_template('home.html', game_infos = game_infos)

if __name__ == '__main__':
	app.run()