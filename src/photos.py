#!/usr/bin/python2.5

from index import BaseHandler

class PhotoHandler(BaseHandler):
    def contents(self):
        return 'photos'

if __name__ == '__main__':
    PhotoHandler().render()