# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in frappe_apps/__init__.py
from frappe_apps import __version__ as version

setup(
	name='frappe_apps',
	version=version,
	description='Sample Applications Development',
	author='Yuan-Yao Lou',
	author_email='yuanyao.lou@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
