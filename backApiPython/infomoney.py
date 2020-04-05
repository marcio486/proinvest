import requests
from utils import retornaAtivos
from bs4 import BeautifulSoup
import pandas as pd
def getFalcs():
    content = requests.get('https://statusinvest.com.br/acoes/RANI4')
    soup = BeautifulSoup(content.text, 'html.parser')
    
    indicatior = soup.find(class_='top-info m-0 width-auto text-left info-5 sm d-flex justify-between')
    indicadores = indicatior.find_all(class_='info')
    falcs = []
    for i in indicadores:
        try:
            falcs.append(i.find(class_='title').get_text())
        except: continue
    falcs.pop()
    return falcs

cols = ['ativo','precoDia','min52','max52','Dividend','Val12']
cols = cols + getFalcs()

df = pd.DataFrame(columns = cols)

siglas = retornaAtivos()
for sigla in siglas:
    print(sigla)
    content = requests.get('https://statusinvest.com.br/acoes/'+sigla)
    soup = BeautifulSoup(content.text, 'html.parser')
    
    try:
        prices = soup.find(class_='top-info has-special d-flex justify-between flex-wrap')
        prices2 = prices.find_all(class_='value')
    except: continue

    insert = [sigla]
    for i in prices2:
        insert.append(i.get_text())
        
    indicatior = soup.find(class_='top-info m-0 width-auto text-left info-5 sm d-flex justify-between')
    indicadores = indicatior.find_all(class_='info')
    
    for i in indicadores:
        try:
            insert.append(i.find(class_='value').get_text())
        except: continue
    insert.pop()
    
    df = df.append(pd.DataFrame(columns = cols,data =[insert]))
    
df = df.reset_index(drop = True)
df['Dividend'] = df['Dividend'].apply(lambda x : float(x.replace(',','.') if '-' not in x else 0))
df['P/L'] = df['P/L'].apply(lambda x : float(x.replace(',','.') if '-' not in x else 0))
df['P/VP'] = df['P/VP'].apply(lambda x : float(x.replace('.','').replace(',','.') if '-' not in x else 0))
for col in df.columns:
    if '%' in str(df[col].iloc[0]):
        df[col] = df[col].apply(lambda x : float(x.replace('%','').replace('.','').replace(',','.'))/100 if str(x) != '-%' else -90000)
        df = df.rename(columns={col: col+'%'})
#RruHnheVlCHrek-8r2igpOSG