
from googleapiclient.discovery import build
from google.oauth2 import service_account

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
# SERVICE_ACCOUNT_FILE = 'keys.json'
SERVICE_ACCOUNT_FILE = 'E:/Covid Bot Final/actions/keys.json'
creds=None
SAMPLE_SPREADSHEET_ID="1vPwge2mXT6c-fXGQnuoYZcH_5MQYIqP59in3brsVPp0"
creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
service = build('sheets', 'v4', credentials=creds)
sheet = service.spreadsheets()
result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID,
                                range="covid!A1:M10000").execute()

values= result.get('values', [])
data1=values[1::]
def needOxygen(city):
            outputData=[]
            for data in data1:
                if(data[3]=="Y" and city.lower() in data[1].lower()):
                    requiredData=(data[0],data[-1])
                    outputData.append(requiredData)
                    print("Contact person: {} , PhoneNumber:{}".format(data[0],data[-1]))


            return outputData

def needPlasma(city):
    outputData = []
    for data in data1:
        if (data[4] == "Y" and city.lower() in data[1].lower()):
            requiredData = (data[0], data[-1])
            outputData.append(requiredData)
            print("Contact person: {} , PhoneNumber:{}".format(data[0], data[-1]))

    return outputData



def needRemdesivir(city):
    outputData = []
    for data in data1:
        if (data[5] == "Y" and city.lower() in data[1].lower()):
            requiredData = (data[0], data[-1])
            outputData.append(requiredData)
            print("Contact person: {} , PhoneNumber:{}".format(data[0], data[-1]))

    return outputData

def needHospital(city):
    outputData = []
    for data in data1:
        if (data[7] == "Y" and city.lower() in data[1].lower()):
            requiredData = (data[0], data[-1])
            outputData.append(requiredData)
            print("Contact person: {} , PhoneNumber:{}".format(data[0], data[-1]))

    return outputData


def needAmbulance(city):
    outputData = []
    for data in data1:
        if (data[6] == "Y" and city.lower() in data[1].lower()):
            requiredData = (data[0], data[-1])
            outputData.append(requiredData)
            print("Contact person: {} , PhoneNumber:{}".format(data[0], data[-1]))

    return outputData