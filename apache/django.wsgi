import os
import sys

path = '/var/websites'
if path not in sys.path:
    sys.path.append(path)
    
path = '/var/websites/naturalis'
if path not in sys.path:
    sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'naturalis.settings'

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()
