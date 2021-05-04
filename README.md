redmine_edit_cf_at_issues_index Plugin
======================================

This plugin enables editing a custom field value at the issues_index page.

distributed under BSD 3-clause License

# Installation

1. Go to your Redmine installation's plugins/ directory.
2. `git clone https://github.com/matobaa/redmine_edit_cf_at_issues_index`
3. Restart Redmine.

# Uninstallation
1. Go to your Redmine installation's plugins/ directory.
2. `rails redmine:plugins:migrate name=redmine_edit_cf_at_issues_index version=0`
3. `rm -r redmine_edit_cf_at_issues_index`
