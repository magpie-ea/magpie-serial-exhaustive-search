config_views.beginExp = {
    "text": "Now that you have acquainted yourself with the procedure of the task, the actual experiment will begin. Press SPACE to begin the experiment."
};

// creates Begin experiment view
var initBeginExpView = function() {
	var view = {};
	view.name = 'beginExp';
	view.template = $('#begin-exp-view').html();
	$('#main').html(Mustache.render(view.template, {
		text: config_views.beginExp.text
	}));

    instructionScreen = true

    addEventListener('keydown', function(event) {
        if(event.keyCode == 32 && instructionScreen === true) {
            instructionScreen = false
            exp.findNextView()
        }
    })


    showNextView();

    return view;
};
