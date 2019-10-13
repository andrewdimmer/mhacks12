# importing the requests library 
import requests 
import sys

# defining the api-endpoint 
API_ENDPOINT = "https://us-central1-mhacks12-gcp.cloudfunctions.net/addSpace"

# data to be sent to api 
data = {"spaceOptionName": str(sys.argv[1])} 

# sending post request and saving response as response object 
r = requests.post(url = API_ENDPOINT, data = data) 

print(r.content)
