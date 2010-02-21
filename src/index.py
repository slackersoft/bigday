#!/usr/bin/python2.5

from __future__ import with_statement
import re
from shpaml import convert_text

class BaseHandler:
    def contents(self):
        return 'index'
    
    def title(self):
        return "Jen and Gregg&apos;s Big Day!"
    
    def runMethod(self, match):
        m = match.group('var')
        
        if (hasattr(self, m)):
            if (callable(getattr(self, m))):
                return eval('self.' + m + '()')
            else:
                return eval('self.' + m)
        
        return match.group()
    
    def fromShpaml(self, file, tabs=''):
        if (not file):
            return ""
        
        results = []
        path = self._shpamlDir + file + '.shpaml'
        
        with open(path) as f:
            for line in f:
                exploded = self._shpamlVars.sub(self.runMethod, line)
                parse = self._shpamlExec.match(exploded)
                if (parse):
                    fullTabs = tabs + parse.group('tabbed')
                    exploded = self.fromShpaml(parse.group('file'), fullTabs)

                results.append(tabs + exploded)
        
        s = "".join(results)
        
        return convert_text(s)

    def render(self):
        print 'Content-Type: text/html\n'
        print self.fromShpaml('base')
    
    def __init__(self):
        self._basePath = '/bigday'
        self._shpamlDir = '/home/whiteguy013/bigdayShpaml/'
        self._shpamlVars = re.compile('\$~(?P<var>.*)~\$')
        self._shpamlExec = re.compile('^(?P<tabbed>\s*)\$#parse\((?P<file>.*)\)$')

if __name__ == '__main__':
    BaseHandler().render()
        