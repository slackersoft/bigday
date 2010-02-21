#!/usr/bin/python2.5

from index import BaseHandler

class RegistryHandler(BaseHandler):
    def contents(self):
        return 'registry'

if __name__ == '__main__':
    RegistryHandler().render()