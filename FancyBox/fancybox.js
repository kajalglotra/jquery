$(".fancybox").fancybox({
    helpers : {
        overlay : {
            css : {
                'background' : 'rgba(58, 42, 45, 0.95)'
                
            }
        }
    }
});
    $(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        beforeLoad: function() {
            this.title = $(this.element).attr('caption');
        }
});