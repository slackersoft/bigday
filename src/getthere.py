#!/usr/bin/python2.5

from index import BaseHandler

class GetThereHandler(BaseHandler):
    def contents(self):
        return 'getthere'

if __name__ == '__main__':
    GetThereHandler().render()