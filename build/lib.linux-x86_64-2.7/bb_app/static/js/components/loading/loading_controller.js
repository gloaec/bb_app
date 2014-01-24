var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

this.BambooApp.module("Components.Loading", function(Loading, App, Backbone, Marionette, $, _) {
  Loading.LoadingController = (function(_super) {

    __extends(LoadingController, _super);

    function LoadingController() {
      LoadingController.__super__.constructor.apply(this, arguments);
    }

    LoadingController.prototype.initialize = function(options) {
      var config, loadingView, view;
      view = options.view, config = options.config;
      config = _.isBoolean(config) ? {} : config;
      _.defaults(config, {
        loadingType: "spinner",
        entities: this.getEntities(view),
        debug: false
      });
      switch (config.loadingType) {
        case "opacity":
          this.region.currentView.$el.css("opacity", 0.5);
          break;
        case "spinner":
          loadingView = this.getLoadingView();
          this.show(loadingView);
          break;
        default:
          throw new Error("Invalid loadingType");
      }
      return this.showRealView(view, loadingView, config);
    };

    LoadingController.prototype.showRealView = function(realView, loadingView, config) {
      var _this = this;
      return App.execute("when:fetched", config.entities, function() {
        switch (config.loadingType) {
          case "opacity":
            _this.region.currentView.$el.removeAttr("style");
            break;
          case "spinner":
            if (_this.region.currentView !== loadingView) return realView.close();
        }
        if (!config.debug) return _this.show(realView);
      });
    };

    LoadingController.prototype.getEntities = function(view) {
      return _.chain(view).pick("model", "collection").toArray().compact().value();
    };

    LoadingController.prototype.getLoadingView = function() {
      return new Loading.LoadingView;
    };

    return LoadingController;

  })(App.Controllers.Base);
  return App.commands.setHandler("show:loading", function(view, options) {
    return new Loading.LoadingController({
      view: view,
      region: options.region,
      config: options.loading
    });
  });
});
