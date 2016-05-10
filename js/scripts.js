var init = function(){
    
    var setSameHeight = function(start){
        articles = jQuery('div#infos section#main_content article');
        for(loop = start, len = articles.length; loop < len; loop+=2){
            if(jQuery(articles[loop]).height() >= jQuery(articles[loop+1]).height()){
                jQuery(articles[loop+1]).height(jQuery(articles[loop]).height());
            } else {
                jQuery(articles[loop]).height(jQuery(articles[loop+1]).height());
            }
            jQuery(articles[loop+1]).css('margin-right','0');
        }
    }
    
    jQuery('body').css('min-height', jQuery(window).height());
    
    articles = jQuery('div#infos section#main_content article');
    if(articles.length % 2 !== 0){
        jQuery(articles[0]).attr('id', 'single');
        setSameHeight(1);
    } else {
        setSameHeight(0);
    }
    
    jQuery('div#infos section#main_content article div.logo img').each(function(){
        divHeight = jQuery(this).parent().height();
        imgHeight = jQuery(this).height();
        marginTop = Math.ceil((divHeight - imgHeight) / 2);
        if(marginTop > 0){
            jQuery(this).css('margin-top', marginTop);
        }
    });
};