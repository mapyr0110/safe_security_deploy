#!/bin/bash
set -o errexit

# Install backend dependencies when Render uses this file as Build Command.
pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --no-input
