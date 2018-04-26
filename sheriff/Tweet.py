"""
Author: Maskani Filali Mohamed
"""

import json
from datetime import datetime

START_DEBATE = datetime(2018, 2, 22, 2, 0, 0)
END_DEBATE = datetime(2018, 2, 22, 4, 0, 0)


class Tweet():
    def __init__(self):
        self.id = None
        self.timestamp = None
        self.date = None
        self.seconds_debate = None
        self.uid = None
        self.location = None
        self.text = None
        self.hashtags = None
        self.likes = None
        self.rt_count = None

    def __repr__(self):
        return (
        "======= Tweet ID: {0} =======\n"
        "Seconds Debate: {1}\n"
        "Hashtags: {2}\n"
        "Location: {3}\n"
        "Likes: {4}\n"
        "RT count: {5}\n"
        "Text: {6}\n".format(self.id, self.seconds_debate, self.hashtags,
                             self.location, self.likes, self.rt_count,
                             self.text))

    def load_from_json(self, json):
        self.id = json["id"]
        self.text = json["text"]
        self.timestamp = json["created_at"]
        self.uid = json["user"]["id"]
        try:
            self.location = [d["region"] for d in json["user"]["derived"]["locations"]][0]
        except:
            self.location = "Uknown"
        try:
            self.geoloc = [x["geo"]["coordinates"] for x in
                           json["user"]["derived"]["locations"]][0]
            self.geoloc = tuple(self.geoloc)
        except:
            self.geoloc = None
        try:
            hashtags = json["quoted_status"]["extended_tweet"]["entities"]["hashtags"]
            if hashtags:
                self.hashtags = [h["text"] for h in hashtags]
        except:
            self.hashtags = None
        try:
            self.rt_count = json["quoted_status"]["extended_tweet"]["retweet_count"]
            self.likes = json["quoted_status"]["extended_tweet"]["favorite_count"]
        except:
            self.rt_count, self.likes = 0, 0

        # Parse time to get seconds from beginning of debate
        self.seconds_debate = self.parse_time()

        return self

    def parse_time(self):
        """
        Parse the raw timestamp given by the API to get the number
        of seconds from the beginning of the debate
        :return: integer | number of seconds form the beginning of the debate
        """
        time_split = self.timestamp.split()
        formatted = " ".join(time_split[i] for i in [1, 2, 3, 5])
        date = datetime.strptime(formatted, '%b %d %H:%M:%S %Y')
        return (date - START_DEBATE).seconds


class Tweets():
    def __init__(self):
        self.tweets = []
        self.files = []

    def load(self, list_paths):
        """
        Loads Tweets form a list of file paths containing the json
        descriptions of the tweets.
        :param list_paths: list | list of json file paths
        :return: None
        """
        for file_path in list_paths:
            with open(file_path, "r") as f:
                content = json.load(f)
            for json_ in content:
                try:
                    self.tweets.append(Tweet().load_from_json(json_))
                except:
                    continue
            self.files.append(file_path)

    def sort_tweets(self):
        """
        Sorts the tweets by their "seconds_debate" attribute
        :return:
        """
        self.tweets = sorted(self.tweets, key=lambda t: t.seconds_debate)

    def get_tweets_between(self, time1, time2):
        """
        Get tweets that have been created in the time interval [time1, time2]
        :param time1: int | seconds
        :param time2:  int | seconds
        :return: list(Tweet)
        """
        return [t for t in self.tweets if
                    (t.seconds_debate > time1) and (time2 > t.seconds_debate)]
