
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


f = open("all_links.txt","a")

options = Options()
options.add_argument("--headless=new")

# Initialize the webdriver
driver = webdriver.Chrome(options=options)

# Base URL for search results
base_url = "https://indiankanoon.org/search/?formInput=commercial%20court%20%20%20doctypes%3A%20judgments"

# Initialize a list to store all extracted links
all_links = []

# Loop through multiple pages (adjust the number of pages as needed)
for page_num in range(40, 50):  # Example: Scrape the first 4 pages

    # Construct the URL for the current page
    if page_num == 0:
        url = base_url
    else:
        url = base_url + "&pagenum=" + str(page_num)

    # Navigate to the URL
    driver.get(url)

    # Wait for the results to load (you might need to adjust the wait condition)
    wait = WebDriverWait(driver, 20)
    wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'result')))

    # Get the page source
    page_source = driver.page_source

    # Parse the HTML with BeautifulSoup
    soup = BeautifulSoup(page_source, 'html.parser')

    # Find all result divs
    result_divs = soup.find_all('div', class_='result')

    # Extract links from each result div
    for div in result_divs:
        link_element = div.find('a', href=True)  # Find the first <a> tag with an href attribute
        if link_element:
            link = link_element['href']
            all_links.append(link)

# Print all extracted links
driver.quit()

for link in all_links:
    link = link.split("/")
    f.write("https://indiankanoon.org/doc/"+link[2]+"\n")

