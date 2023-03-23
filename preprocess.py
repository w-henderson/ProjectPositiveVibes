import json
import datetime
import time

files = ["client/src/data/report_2.json", "client/src/data/report_3.json", "client/src/data/report_6.json"]

categories = [
    "BULLYING",
    "VIOLENCE",
    "RELATIONSHIP_SEXUAL_CONTENT",
    "VULGARITY",
    "DRUGS_ALCOHOL",
    "IN_APP",
    "ALARM",
    "FRAUD",
    "HATE_SPEECH",
    "RELIGIOUS",
    "WEBSITE",
    "CHILD_GROOMING",
    "PUBLIC_THREAT",
    "EXTREMISM",
    "SUBVERSIVE",
    "SENTIMENT",
    "POLITICS"]

nameMap = json.load(open("client/src/data/name_map.json"))["name"]

for file in files:
    data = json.load(open(file))
    newData = []
    flaggedMessage = None
    for message in data:
        newMessage = {
            "id": str(message["index"]),
            "content": message["raw_message"],
            "author": nameMap[message["account_id"]],
            "timestamp": datetime.datetime.strptime(message["timestamp"][:15], "%Y%m%dT%H%M%S").timestamp() * 1000
        }

        maxRisk = -1
        c = None

        for category in categories:
            if message[category] > maxRisk:
                maxRisk = message[category]
                c = category

        if maxRisk >= 5 and flaggedMessage is None:
            flaggedMessage = newMessage
            newMessage["flag"] = {
                "category": c,
                "severity": maxRisk
            }

        newData.append(newMessage)
    context = {
      "id": "12345678",
      "user": flaggedMessage["author"],
      "reports": 2,
      "game": "Clash Royale",
      "alliance": "TODO",
      "allianceDescription": "TODO",
      "created": 1580511600000,
      "lastSeen": 1682114400000,
      "device": "TODO",
      "ip": "TODO",
      "averageGameTime": 23
    }
    done = {
        "context": context,
        "messages": newData
    }
    json.dump(done, open(file.replace(".json", "_processed.json"), "w"))
    

#20230301T151638.861Z