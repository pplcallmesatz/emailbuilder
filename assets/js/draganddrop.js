
(function () {
	'use strict';
    Sortable.create(document.getElementById('cards-title'), {
			sort: false,
			group: {
                    name: 'cards-box',
                    pull: 'clone',
                    put: false
                },
			animation: 150
		});
    Sortable.create(document.getElementById('cards'), {
			sort: true,
			group: {
                name: 'cards-box',
                pull: false,
                put: true
            },
            handle: '.drag-handle',
			animation: 150,
            onAdd: function (evt) {
                if($(evt.item).closest('#cards').length){
                    var target = $(evt.item).data('card');
                    (evt.item).innerHTML = $(target).html();
                    $(evt.item).removeClass('hide-card').addClass("parent-div");
                    $(evt.item).removeClass('card-chip');
//                    $(evt.item).addClass('show-card');
                }
            }
		});
})();



