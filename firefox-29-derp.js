if (Meteor.isClient) {

  Template.hello.greeting = function () {
    return "Welcome to firefox-29-derp.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

    Deps.autorun(function() {
	this.stop();
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
