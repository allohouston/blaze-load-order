import './landing.html';
import './landing.less';

Template.Landing.events({
    'click .js-goToPage': function (event, template) {
        FlowRouter.go('/nest0');
    },
});


Template.Landing.helpers({});


Template.Landing.onRendered(function () {
});


Template.Landing.onCreated(function () {
});


Template.Landing.onDestroyed(function () {
});