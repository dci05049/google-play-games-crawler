from flask import Flask, render_template

from selenium import webdriver 
from selenium.webdriver.common.by import By 
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC 
from selenium.common.exceptions import TimeoutException

app = Flask(__name__)

browser = webdriver.Chrome();
browser.get("https://play.google.com/store/apps/category/GAME/collection/topselling_free?hl=en");

game_titles = browser.find_elements_by_xpath('//a[@class="title"]')

num_pages_titles = len(game_titles)

for i in range(num_pages_titles):
	print(game_titles[i].text)

@app.route('/')
def index():
	return render_template('home.html', game_titles = game_titles)

if __name__ == '__main__':
	app.run(debug=True)