window.JST = window.JST || {};
window.JST['static/coffee/components/flash/templates/flash_view'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('%button.close{data:{dismiss:"alert"},aria:{hidden:"true"}} &times;\n= @message\n');
window.JST['static/coffee/apps/docs_commands/list/templates/commands'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('  .col-md-3\n    .bb-sidebar.hidden-print{role:"complementary"}\n      %ul#commands-nav.nav.bb-sidenav\n        %li.nav-header Out of context commands\n        %li\n          %a{href:"#bamboo-new"} \n            bamboo new\n        %li.nav-header Application context commands\n        %li\n          %a{href:"#bamboo-server"} \n            bamboo server\n        %li\n          %a{href:"#bamboo-console"} \n            bamboo console\n        %li\n          %a{href:"#bamboo-generate"} \n            bamboo generate\n          %ul.nav\n            %li\n              %a{href:"#bamboo-generate-model"}\n                bamboo generate model\n            %li\n              %a{href:"#bamboo-generate-view"}\n                bamboo generate view\n            %li\n              %a{href:"#bamboo-generate-api"}\n                bamboo generate api\n            %li\n              %a{href:"#bamboo-generate-scaffold"}\n                bamboo generate scaffold\n            %li\n              %a{href:"#bamboo-generate-icons"}\n                bamboo generate icons\n        %li\n          %a{href:"#bamboo-db"} \n            bamboo db\n          %ul.nav\n            %li\n              %a{href:"#bamboo-db-init"}\n                bamboo db init\n            %li\n              %a{href:"#bamboo-db-revision"}\n                bamboo db revision\n            %li\n              %a{href:"#bamboo-db-migrate"}\n                bamboo db migrate\n            %li\n              %a{href:"#bamboo-db-upgrade"}\n                bamboo db upgrade\n            %li\n              %a{href:"#bamboo-db-downgrade"}\n                bamboo db downgrade\n            %li\n              %a{href:"#bamboo-db-history"}\n                bamboo db history\n            %li\n              %a{href:"#bamboo-db-current"}\n                bamboo db current\n            %li\n              %a{href:"#bamboo-db-stamp"}\n                bamboo db stamp\n            %li\n              %a{href:"#bamboo-db-seed"}\n                bamboo db seed\n            %li\n              %a{href:"#bamboo-db-empty"}\n                bamboo db empty\n            %li\n              %a{href:"#bamboo-db-drop"}\n                bamboo db drop\n        %li\n          %a{href:"#bamboo-routes"} \n            bamboo routes\n        %li\n          %a{href:"#bamboo-assets"} \n            bamboo assets\n          %ul.nav\n            %li\n              %a{href:"#bamboo-assets-build"}\n                bamboo assets build\n        %li\n          %a{href:"#bamboo-clean"} \n            bamboo clean\n        %li.separator\n        %li\n          %a{onclick:\'window.history.back()\'}\n            %i.icon-reply\n            Back\n\n  .col-md-9{role:"main"}\n    /%h1.Out of context commands\n    .bb-section\n      .page-header\n        %h1#bamboo-new bamboo new\n      %p\n        Bla bla bla\n    /%h1 Application context commands\n    .bb-section\n      .page-header\n        %h1#bamboo-server bamboo server\n      %p\n        Bla bla bla\n    .bb-section\n      .page-header\n        %h1#bamboo-console bamboo console\n      %p\n        Bla bla bla\n    .bb-section\n      .page-header\n        %h1#bamboo-generate bamboo generate\n      %h3#bamboo-generate-model bamboo generate model\n      %p\n        Bla bla bla\n      %h3#bamboo-generate-view bamboo generate view\n      %p\n        Bla bla bla\n      %h3#bamboo-generate-api bamboo generate api\n      %p\n        Bla bla bla\n      %h3#bamboo-generate-scaffold bamboo generate scaffold\n      %p\n        Generates the following files :\n      %ul\n        %li\n          %code\n            app/models/<b>resource</b>.py\n          %i.icon-arrow-right\n          Database model of the resource\n\n      Using Jinga Templates\n\n      %ul\n        %li\n          %code\n            app/views/<b>resource</b>s.py\n          %i.icon-arrow-right\n          CRUD + index routes for serving Jinga2 templates\n        %li\n          %code\n            app/templates/<b>resource</b>s/\n          %i.icon-arrow-right\n          Jinga2 Templates\n          %ul\n            %li\n              %code\n                index.[html|haml]\n              %i.icon-arrow-right\n              Lists all records of the model\n            %li\n              %code\n                show.[html|haml]\n              %i.icon-arrow-right\n              Display one record\n            %li\n              %code\n                new.[html|haml]\n              %i.icon-arrow-right\n              New record form\n            %li\n              %code\n                edit.[html|haml]\n              %i.icon-arrow-right\n              Edit existing record form\n\n      Using Backbone Marionette :\n\n      %ul\n        %li\n          %code\n            app/apis/<b>resource</b>s.py\n          %i.icon-arrow-right\n          RESTful Api for the resource\n        %li\n          %code\n            app/static/js/models/<b>resource</b>.py\n          %i.icon-arrow-right\n          Backbone Model of the resource synced with Api\n        %li\n          %code\n            app/static/js/views/<b>resource</b>s/\n          %i.icon-arrow-right\n          Backbone Marionette Views of the resource\n          %ul\n            %li\n              %code\n                index.[js|coffee]\n              %i.icon-arrow-right\n              List all records of a model\n            %li\n              %code\n                <b>resource</b>.[js|coffee]\n              %i.icon-arrow-right\n              Row template of one single record in a list\n            %li\n              %code\n                show.[js|coffee]\n              %i.icon-arrow-right\n              Display of one record\n            %li\n              %code\n                new.[js|coffee]\n              %i.icon-arrow-right\n              New record form\n            %li\n              %code\n                edit.[js|coffee]\n              %i.icon-arrow-right\n              Edit existing record form\n        %li\n          %code\n            app/static/templates/<b>resource</b>s/\n          %i.icon-arrow-right\n          JST templates\n          %ul\n            %li\n              %code\n                index.[html|hamlc]\n              %i.icon-arrow-right\n              List all records of a model\n            %li\n              %code\n                <b>resource</b>.[html|hamlc]\n              %i.icon-arrow-right\n              Row template of one single record in a list\n            %li\n              %code\n                show.[html|hamlc]\n              %i.icon-arrow-right\n              Display of one record\n            %li\n              %code\n                new.[html|hamlc]\n              %i.icon-arrow-right\n              New record form\n            %li\n              %code\n                edit.[html|hamlc]\n              %i.icon-arrow-right\n              Edit existing record form\n\n      %h3#bamboo-generate-icons bamboo generate icons\n      %p\n        Generates the webfonts from svg icons in \n        %code\n          app/static/img/vectors/<b>name</b>.svg\n      %p\n        Icons are then ready to use with the class\n        %code\n          icon-<b>name</b>\n    .bb-section\n      .page-header\n        %h1#bamboo-db bamboo db\n      %h3#bamboo-db-init bamboo db init\n      %p\n        Bla bla bla\n      %h3#bamboo-db-revision bamboo db revision\n      %p\n        Bla bla bla\n      %h3#bamboo-db-migrate bamboo db migrate\n      %p\n        Bla bla bla\n      %h3#bamboo-db-upgrade bamboo db upgrade\n      %p\n        Bla bla bla\n      %h3#bamboo-db-downgrade bamboo db downgrade\n      %p\n        Bla bla bla\n      %h3#bamboo-db-history bamboo db history\n      %p\n        Bla bla bla\n      %h3#bamboo-db-current bamboo db current\n      %p\n        Bla bla bla\n      %h3#bamboo-db-stamp bamboo db stamp\n      %p\n        Bla bla bla\n      %h3#bamboo-db-seed bamboo db seed\n      %p\n        Bla bla bla\n      %h3#bamboo-db-empty bamboo db empty\n      %p\n        Bla bla bla\n      %h3#bamboo-db-drop bamboo db drop\n      %p\n        Bla bla bla\n    .bb-section\n      .page-header\n        %h1#bamboo-routes bamboo routes\n      %p\n        Bla bla Bla\n    .bb-section\n      .page-header\n        %h1#bamboo-assets bamboo assets\n      %h3#bamboo-assets-build bamboo assets build\n      %p\n        Bla bla bla\n    .bb-section\n      .page-header\n        %h1#bamboo-clean bamboo clean\n      %p\n        Bla bla Bla\n');
window.JST['static/coffee/apps/docs_commands/list/templates/_command'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('%td\n  -if @posters\n    .thumbnail\n      %img{src: @posters.thumbnail}\n%td= @title\n%td= @mpaa_rating\n%td= @release_dates?.theater\n');
window.JST['static/coffee/apps/events/list/templates/_event'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('%td= @id\n%td= @date\n%td= @name\n%td= @description\n%td\n	%button.btn.btn-small{type:"button"}\n		%i.icon-edit\n		Edit\n');
window.JST['static/coffee/apps/events/list/templates/events'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('.row\n	%h2 Event Schedule\n	%table.table.table-striped.table-hover\n		%thead\n			%tr\n				%th ID\n				%th Date\n				%th Name\n				%th Description\n				%th Actions\n		%tbody\n	.pull-right\n		%ul.pagination\n			%li.disabled\n				%a{href:"#"} &laquo;\n			%li.active\n				%span 1\n			%li.disabled\n				%a{href:"#"} &raquo;\n');
window.JST['static/coffee/apps/events/edit/templates/edit_event'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('%form.form-horizontal\n  .modal-header\n    %button.close{type:"button",data:{dismiss:"modal"},aria:{hidden:"true"}} &times;\n    .modal-title Modal title\n  .modal-body\n  	.control-group\n  		%label.control-label ID\n  		.controls\n  			%span.help-inline= @id\n    .control-group\n  		%label.control-label{for:"event-date"} Date\n  		.controls\n  			%input#event-date{type:"text", value:@date, name:"date"}\n  	.control-group\n  		%label.control-label{for:"event-name"} Name\n  		.controls\n  			%input#event-name{type:"text", value:@name, name:"value"}\n  	.control-group\n  		%label.control-label{for:"event-description"} Description\n  		.controls\n  			%textarea#event-description{name:"description"}= @description\n  .modal-footer\n    %button.btn.btn-default{type:"button", data:{dismiss:"modal"}} Close\n    %button.btn.btn-primary{type:"button"} Save changes\n');
window.JST['static/coffee/apps/header/list/templates/list_layout'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('#header\n  .navbar-header\n    %button.navbar-toggle{type:"button",data:{toggle:"collapse",target:".nav-collapse-1"}}\n      %span.sr-only Toggle Navigation\n      %span.icon-bar\n      %span.icon-bar\n      %span.icon-bar\n    %a.navbar-brand{href:"/"}\n      %i.icon-bamboo\n      Bamboo-App\n  .collapse.navbar-collapse.nav-collapse-1\n    %ul.nav.navbar-nav\n      %li\n        %a{href:"/docs"}\n          %i.icon-book\n          Documentation\n\n      %li.dropdown\n        %a.dropdown-toggle{data:{toggle:"dropdown"}}\n          %i.icon-film\n          Movies\n          %b.caret\n        %ul.dropdown-menu\n          %li\n            %a{href:"/dashboard"}\n              %i.icon-home\n              Dashboard\n          %li\n            %a{href:"/search"}\n              %i.icon-search\n              Search\n          %li\n            %a{href:"/rentals"}\n              %i.icon-list-alt\n              Rentals\n      %li\n        %a{href:"/events"}\n          %i.icon-calendar\n          Events\n      %li\n        %a{href:"/posts"}\n          %i.icon-list\n          Blog\n    %ul.nav.navbar-nav.pull-right\n      %li\n        %a{href:"/settings/profile", data:{reload:true}}  \n          %i.icon-cogs\n          Settings\n      %li\n        %a{href:"/logout", data:{reload:true}} \n          %i.icon-signout\n          Log out\n');
window.JST['static/coffee/apps/docs/show/templates/show_layout'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('.row\n  #tabs-region\n  .tab-content\n    #contents-region.tab-pane.active\n');
window.JST['static/coffee/apps/docs/show/templates/_hero'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('.jumbotron\n  %h2 Go on! Get searching...\n  %p Type in the search input above to find movie results.\n');
window.JST['static/coffee/apps/docs/show/templates/_tabs'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('%ul.nav.nav-tabs\n  %li\n    %a{href:"/docs/getstarted"} \n      %i.icon-home\n      Get Started\n  %li\n    %a{href:"/docs/architecture"} \n      %i.icon-sitemap\n      Architecture\n  %li\n    %a{href:"/docs/commands"} \n      %i.icon-terminal \n      Commands\n\n');
window.JST['static/coffee/apps/footer/show/templates/show_layout'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('#footer\n  .container\n    %p.text-muted Bamboo Application\n');
window.JST['apps/blog/static/coffee/apps/posts/show/templates/show_view'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('.col-md-12\n  .row\n    .page-header\n      %h1#title\n    %p#content\n');
window.JST['apps/blog/static/coffee/apps/posts/list/templates/list_layout'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('.col-md-12\n  .row\n    #results-region\n    #posts-region\n    #pagination-region\n');
window.JST['apps/blog/static/coffee/apps/posts/list/templates/_post'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('.panel.panel-default\n  .panel-heading.clearfix\n    %a.title{href:"/posts/#{@id}"}\n    .pull-right\n      %small\n        by\n        %a{href:"/user/#{@author_id}/profile", data:{reload:true}}\n          = @author.name\n      - if @author_id == BambooApp.current_user.id\n        %a.btn.btn-xs.btn-default.edit{href:"/posts/#{@id}/edit"}\n          %i.icon-edit\n          Edit\n        %a.btn.btn-xs.btn-default.delete{href:"/posts/#{@id}/delete"}\n          %i.icon-remove\n          Delete\n  .panel-body\n    %p.content\n  .panel-footer.clearfix\n    %small.pull-left.created_at\n    %small.pull-right.updated_at \n');
window.JST['apps/blog/static/coffee/apps/posts/list/templates/_pagination'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('.pull-right\n  %ul.pagination\n    %li.disabled\n      %a{href:"#"} &laquo;\n    %li.active\n      %span 1\n    %li.disabled\n      %a{href:"#"} &raquo;\n');
window.JST['apps/blog/static/coffee/apps/posts/list/templates/_posts'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('#posts\n');
window.JST['apps/blog/static/coffee/apps/posts/list/templates/_results'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('%section.lead\n  %h3 \n    Posts\n    %small\n      Listing\n      %span.badge.badge-info= @items.length\n      posts\n    %span.pull-right\n      %a.btn.btn-success.new{href:"/posts/new"}\n        %i.icon-plus\n        New Post\n');
window.JST['apps/blog/static/coffee/apps/posts/edit/templates/edit_post'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('%form.form-horizontal{role:"form"}\n  .modal-header\n    %button.close{type:"button",data:{dismiss:"modal"},aria:{hidden:"true"}} &times;\n    .modal-title Edit Post\n      %span= "##{@id}"\n  .modal-body.clearfix\n    .col-md-12\n      .form-group\n        %label{for:\'title\'} Title\n        %input#title.form-control{type:\'text\', placeholder:\'Post Title...\'}\n        %p.help-block\n      .form-group\n        %label{for:\'content\'} Content\n        %textarea#content.form-control{rows:10, placeholder:\'Post Content...\'}/\n        %p.help-block\n  .modal-footer\n    %button.btn.btn-default{type:"button", data:{dismiss:"modal"}} \n      %i.icon-remove \n      Close\n    %button.btn.btn-primary{type:\'submit\'}\n      %i.icon-ok\n      Update Post\n');
window.JST['apps/blog/static/coffee/apps/posts/new/templates/new_post'] =                          function(template){                             return haml.compileHaml({                                 source: template, generator: "coffeescript"                            });                         }('.col-md-12\n  .row\n    %section.lead\n      %h3 \n        %i.icon-plus\n        New Post\n    %form.form{role:\'form\'}\n      .form-group\n        %label{for:\'title\'} Title\n        %input#title.form-control{type:\'text\', placeholder:\'Post Title...\'}\n        %p.help-block\n      .form-group\n        %label{for:\'content\'} Content\n        %textarea#content.form-control{rows:10, placeholder:\'Post Content...\'}/\n        %p.help-block\n      %button.btn.btn-default{type:\'submit\'}\n        %i.icon-ok\n        Create Post\n');
