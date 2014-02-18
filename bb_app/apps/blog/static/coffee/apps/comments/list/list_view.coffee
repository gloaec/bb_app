@BambooApp.module "CommentsModule.List", (List, App, Backbone, Marionette, $, _) ->

  ###
  class List.Layout extends App.Views.Layout
    template: "posts/list/list_layout"

    regions:
      resultsRegion: 		"#results-region"
      postsRegion:		  "#posts-region"
      paginationRegion:	"#pagination-region"
  ###

  class List.Comment extends App.Views.ItemView
    template: "comments/list/_comment"

    initialize: ->
      @timer = setInterval =>
        @model.trigger "change:updated_at", @model
        @model.trigger "change:created_at", @model
      , 30000

    bindings:
      ".title"      : "title"
      ".content"    : "content"
      ".created_at" :
        observe: "created_at"
        onGet: (value) -> "created #{moment(value).fromNow()}"

    events:
      "click .delete" : -> @trigger "delete:comment:clicked", @model

    onRender: ->
      @stickit()

    onClose: ->
      clearInterval(@timer)


  class List.Comments extends App.Views.CompositeView
    template: "comments/list/comments"
    itemView: List.Comment
    itemViewContainer: "#comments"