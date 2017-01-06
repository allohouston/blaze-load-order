import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

import '/imports/ui/landing/landing.js';
import '/imports/ui/nest_i/nest_i.js';

FlowRouter.route('/', {
    name: 'landing',
    action() {
        BlazeLayout.render('Landing');
    },
});

FlowRouter.route('/nest0', {
    name: 'nest0',
    action() {
        BlazeLayout.render('Nest0');
    },
});