# frozen_string_literal: true

# Copyright (C) 2021 Akihiro MATOBA <matobaa+github@gmail.com>
# All rights reserved.

# This software is licensed as described in the file LICENSE, which
# you should have received as part of this distribution.

Redmine::Plugin.register :redmine_edit_cf_at_issues_index do
  name 'redmine_edit_cf_at_issues_index'
  author 'Akihiro MATOBA'
  description 'enables editing a customfield at issues_index page'
  version '0.0.1'
  url 'https://github.com/matobaa/redmine_edit_cf_at_issues_index'
  author_url 'https://www.github.com/matobaa'
end

class EditCfAtIssuesIndexHooks < Redmine::Hook::ViewListener
  def view_issues_index_bottom(context = { })
    javascript_include_tag('enable.js', :plugin => 'redmine_edit_cf_at_issues_index')
  end
end
