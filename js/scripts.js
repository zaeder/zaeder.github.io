jQuery('body').ready(function(){
    jQuery('body').css('min-height', jQuery(window).height());
    
    articles = jQuery('div#infos section#main_content article');
    if(articles.length % 2 !== 0){
        jQuery(articles[articles.length - 1]).attr('id', 'single');
    }
    
    jQuery('div#infos section#main_content article div.logo').each(function(){
        divHeight = jQuery(this).height();
        imgHeight = jQuery(this).find('img').height();
        marginTop = Math.ceil((divHeight - imgHeight) / 2);
        if(marginTop > 0){
            jQuery(this).find('img').css('margin-top', marginTop);
        }
    });
});