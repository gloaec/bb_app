@BambooApp.module "PostsModule.Show", (Show, App, Backbone, Marionette, $, _) ->

  class Show.Comment extends App.Views.ItemView
    template : "posts/show/_comment"
    tagName : 'tr'		  

  class Show.Post extends App.Views.CompositeView
    template: "posts/show/show_view"
    className: "container"
    itemViewContainer : 'tbody'
    itemView : Show.Comment
    bindings:
      '#title'  : 'title'
      '#content': 'content'
    onRender: -> @stickit()

