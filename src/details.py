#!/usr/bin/python2.5

from index import BaseHandler

class DetailsHandler(BaseHandler):
    def contents(self):
        return 'details'

if __name__ == '__main__':
    DetailsHandler().render()