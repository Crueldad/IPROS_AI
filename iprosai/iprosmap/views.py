from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
import geopandas as gpd
import pandas as pd 
import matplotlib.pyplot as plt
import pyodbc
import json


conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=LAPTOP-7RKBGQFC;'
                      'Database=Master;'
                      'Trusted_Connection=yes;')

cursor = conn.cursor()
data = []
cursor.execute("SELECT PlanID, PlanName, PlanEffecDate, MBIorHIC, MembLastName, MembFirstName, DOB, Gender, Phone, PermAddr1, Addr2, City, State, Zip, AgentID, Agent_Name, SubAgentID, SubAgentName FROM dbo.EZSALES")
rows = cursor.fetchall()
for row in rows:
    data.append([str(x) for x in row])
json_output = json.dumps(data)

with open('data.json', 'w') as outfile:
    json.dump(data, outfile)


    # fp = 'C:/Users/cruel/Downloads/california_natural/california_natural.shp'
    # map_df = gpd.read_file(fp)
    # map_df
    # map_df.head()
    # a = map_df.plot()


def home(request):
    return render(request, 'iprosmap/home.html',{'sql_query':json_output} )