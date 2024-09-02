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

# Read links from the text file
with open("all_links.txt", "r") as f:
    links = f.readlines()

# Process each link
for i, link in enumerate(links):
    link = link.strip()  # Remove any leading/trailing whitespace

    # Navigate to the URL
    driver.get(link)

    # Wait for the div with class 'judgments' to be present and visible
    wait = WebDriverWait(driver, 100)
    judgments_div = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'judgments')))

    # Scroll to the bottom (if needed)
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    # Extract the content and write to a file
    with open(f"case{i + 1}.txt", "w", encoding="utf-8") as outfile:
        outfile.write(judgments_div.text)

# Close the browser
driver.quit()