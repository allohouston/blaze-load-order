import './nest_i.html';
import './nest_i.less';

var speed = 100;


Template.Nest0.events({
    'click .js-back': function (event, template) {
        FlowRouter.go('/');
    },
});


// *************************
// ******** Nest0 **********
// *************************
Template.Nest0.helpers({
    helper_N0_1: function () {
        sleep(speed); //Simulates computations
        console.log('helper_N0_1');
        return "helper_N0_1";
    },
    helper_N0_2: function () {
        sleep(speed); //Simulates computations
        console.log('helper_N0_2');
        return "helper_N0_2";
    },
});

Template.Nest0.onRendered(function () {
    console.log('Start-OnRendered-N0');
    Meteor.setTimeout(function () {
        console.log('Start-ASYNC-OnRendered-N0');
        sleep(speed); //Simulates computations
        console.log('End-ASYNC-OnRendered-N0');
    }, 0);
    sleep(speed); //Simulates computations
    console.log('End-OnRendered-N0');
});

Template.Nest0.onCreated(function () {
    console.log('Start-OnCreated-N0');
    Meteor.setTimeout(function () {
        console.log('Start-ASYNC-OnCreated-N0');
        sleep(speed); //Simulates computations
        console.log('End-ASYNC-OnCreated-N0');
    }, 0);
    sleep(speed); //Simulates computations
    console.log('End-OnCreated-N0');
});


// *************************
// ******** Nest1 **********
// *************************
Template.Nest1.helpers({
    helper_N1_1: function () {
        sleep(speed); //Simulates computations
        console.log('   helper_N1_1');
        return "helper_N1_1";
    },
    helper_N1_2: function () {
        sleep(speed); //Simulates computations
        console.log('   helper_N1_2');
        return "helper_N1_2";
    },
});

Template.Nest1.onRendered(function () {
    console.log('   Start-OnRendered-N1');
    Meteor.setTimeout(function () {
        console.log('   Start-ASYNC-OnRendered-N1');
        sleep(speed); //Simulates computations
        console.log('   End-ASYNC-OnRendered-N1');
    }, 0);
    sleep(speed); //Simulates computations
    console.log('   End-OnRendered-N1');
});

Template.Nest1.onCreated(function () {
    console.log('   Start-OnCreated-N1');
    Meteor.setTimeout(function () {
        console.log('   Start-ASYNC-OnCreated-N1');
        sleep(speed); //Simulates computations
        console.log('   End-ASYNC-OnCreated-N1');
    }, 0);
    sleep(speed); //Simulates computations
    console.log('   End-OnCreated-N1');
});


// *************************
// ******** Nest2 **********
// *************************
Template.Nest2.helpers({
    helper_N2_1: function () {
        sleep(speed); //Simulates computations
        console.log('       helper_N2_1');
        return "helper_N2_1";
    },
    helper_N2_2: function () {
        sleep(speed); //Simulates computations
        console.log('       helper_N2_2');
        return "helper_N2_2";
    },
});

Template.Nest2.onRendered(function () {
    console.log('       Start-OnRendered-N2');
    Meteor.setTimeout(function () {
        console.log('       Start-ASYNC-OnRendered-N2');
        sleep(speed); //Simulates computations
        console.log('       End-ASYNC-OnRendered-N2');
    }, 0);
    sleep(speed); //Simulates computations
    console.log('       End-OnRendered-N2');
});

Template.Nest2.onCreated(function () {
    console.log('       Start-OnCreated-N2');
    Meteor.setTimeout(function () {
        console.log('       Start-ASYNC-OnCreated-N2');
        sleep(speed); //Simulates computations
        console.log('       End-ASYNC-OnCreated-N2');
    }, 0);
    sleep(speed); //Simulates computations
    console.log('       End-OnCreated-N2');
});
