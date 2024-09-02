from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Set up headless Chrome options
options = Options()
options.add_argument("--headless=new")

# Initialize the webdriver
driver = webdriver.Chrome(options=options)

# Navigate to the URL
driver.get("https://indiankanoon.org/doc/143184125/")

# Wait for the div with class 'judgments' to be present and visible
wait = WebDriverWait(driver, 100)  # Adjust the timeout as needed
judgments_div = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'judgments')))


driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
# wait.until(your_expected_condition)
# Extract the content of the 'judgments' div
f = open("case1.txt", "w")
f.write(judgments_div.text)

judgments_content = judgments_div.text 


# Close the browser
driver.quit()