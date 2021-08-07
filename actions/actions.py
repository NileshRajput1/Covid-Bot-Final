# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"


from rasa_sdk.events import EventType, UserUtteranceReverted
from typing import Any, Text, Dict, List,Union
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from .getData import needOxygen
from .getData import needHospital
from .getData import needPlasma
from .getData import needRemdesivir
from .getData import needAmbulance


class Get_Data(Action):

    def name(self) -> Text:
        return "Get_Oxygen"

    @staticmethod
    def required_slots(tracker: "Tracker") -> List[Text]:
        return ["city"]

    def slot_mappings(self) -> Dict[Text, Union[Dict, List[Dict[Text, Any]]]]:
        return {
            "city": [self.from_text()]

        }
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        payload = needOxygen(tracker.get_slot('city'))

        for i in payload:
            dispatcher.utter_message("Contact person: {} , PhoneNumber:{}".format(i[0],i[-1]))


        return []


class Get_Data1(Action):

    def name(self) -> Text:
        return "Get_Plasma"

    @staticmethod
    def required_slots(tracker: "Tracker") -> List[Text]:
        return ["city"]

    def slot_mappings(self) -> Dict[Text, Union[Dict, List[Dict[Text, Any]]]]:
        return {
            "city": [self.from_text()]

        }
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        payload = needPlasma(tracker.get_slot('city'))

        for i in payload:
            dispatcher.utter_message("Contact person: {} , PhoneNumber:{}".format(i[0],i[-1]))


        return []







class Get_Data2(Action):

    def name(self) -> Text:
        return "Get_REMDESIVIR"

    @staticmethod
    def required_slots(tracker: "Tracker") -> List[Text]:
        return ["city"]

    def slot_mappings(self) -> Dict[Text, Union[Dict, List[Dict[Text, Any]]]]:
        return {
            "city": [self.from_text()]

        }
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        payload = needRemdesivir(tracker.get_slot('city'))

        for i in payload:
            dispatcher.utter_message("Contact person: {} , PhoneNumber:{}".format(i[0],i[-1]))


        return []




class Get_Data3(Action):

    def name(self) -> Text:
        return "Get_Hospital"

    @staticmethod
    def required_slots(tracker: "Tracker") -> List[Text]:
        return ["city"]

    def slot_mappings(self) -> Dict[Text, Union[Dict, List[Dict[Text, Any]]]]:
        return {
            "city": [self.from_text()]

        }
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        payload = needHospital(tracker.get_slot('city'))

        for i in payload:
            dispatcher.utter_message("Contact person: {} , PhoneNumber:{}".format(i[0],i[-1]))


        return []


class Get_Data4(Action):

    def name(self) -> Text:
        return "Get_Ambulance"

    @staticmethod
    def required_slots(tracker: "Tracker") -> List[Text]:
        return ["city"]

    def slot_mappings(self) -> Dict[Text, Union[Dict, List[Dict[Text, Any]]]]:
        return {
            "city": [self.from_text()]

        }
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        payload = needAmbulance(tracker.get_slot('city'))

        for i in payload:
            dispatcher.utter_message("Contact person: {} , PhoneNumber:{}".format(i[0],i[-1]))


        return []







