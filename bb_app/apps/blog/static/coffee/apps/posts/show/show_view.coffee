@BambooApp.module "PostsModule.Show", (Show, App, Backbone, Marionette, $, _) ->

  class Show.Comment extends App.Views.ItemView
    template : "posts/show/_comment"

    initialize: ->
      @timer = setInterval =>
        @model.trigger "change:created_at", @model
      , 30000

    bindings:
      ".title"      : "title"
      ".content"    : "content"
      ".created_at" :
        observe: "created_at"
        onGet: (value) -> "created #{moment(value).fromNow()}"

    events:
      "click .delete" : -> @trigger "delete:post:clicked", @model

    onRender: ->
      @stickit()

    onClose: ->
      clearInterval(@timer)

  class Show.Post extends App.Views.CompositeView
    template: "posts/show/show_view"
    className: "container"
    itemViewContainer : '#comments'
    itemView : Show.Comment
    bindings:
      '#title'  : 'title'
      '#content': 'content'
    onRender: -> @stickit()
