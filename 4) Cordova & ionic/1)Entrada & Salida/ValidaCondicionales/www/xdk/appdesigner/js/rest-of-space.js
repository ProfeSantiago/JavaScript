/*
 *  Copyright (C) 2014-2015 Intel Corporation. All rights reserved.
 */
/*global window, document, $, restOfSpace, uib_sb */


/*
 * This script determines the correct height for widgets that must take the 'rest of height'
 *
 * Currently this only works with a single column laying using a upage-content as the inital
 * node and urow and the secondary node.
 *
 * It will go through all of the pages and determine how much height rows and widgets are
 * taking up and add this to the total height.  It will use these numbers to calculate the
 * correct spacing for all of Rest of Height widgets/rows.
 *
 */


(function () {

    'use strict';
    window.restOfSpace = {};



    /**
     * Calls the first calculateSpace function and then creates a handler to trigger calculateSpace
     * on a window resize.
     */
    function init() {
        distributeSpace();
        $(window).on('resize',   distributeSpace);
        $(document)
            .on('pagechange',    distributeSpace)
            .on('sidebar-event', distributeSpace)
            .on('servicesEvent', distributeSpace);
    }

    document.addEventListener("app.Ready", init, false);

    function distributeSpace()
    {
        // get current page and any other visual contexts (visible only)
        // for each
        // - get the base height
        // - sum the height of _non_ .rest-of-height elements
        // - subtract and distribute the remaining among .rest-of-height elements

        var contexts = findCurrentContext(); //[ (sub)page, alt1, atl2, ...]
        contexts.forEach(function(item, index){
            var $context    = $(item);
            var baseHeight  = calcBaseHeight($context);
            var otherHeight = calcOtherHeight($context, index === 0);
            var remainingHeight = baseHeight - otherHeight;
            //console.log("baseHeight / otherHeight / remaininigHeight", baseHeight, otherHeight, remainingHeight);
            distributeRemainingHeight($context, remainingHeight);
        });
    }
    restOfSpace.distributeSpace = distributeSpace;

    function findCurrentContext()
    {
        var $upage = $(".upage:not(.hidden)");
        var $subpage = $upage.find(".upage-content:not(.hidden)");
        var $alts = $upage.find(".inner-element .sidebar-content, .outer-element .sidebar-content");
        var $res =  $subpage.length ? $subpage : $upage;

        //return $res.add($alts);
        return $res.toArray().concat($alts.toArray());
    }
    restOfSpace.findCurrentContext = findCurrentContext;


    function calcBaseHeight($context)
    {
        return $context.parent().is('.outer-element') ? $context.parent().outerHeight(true) : $(window).height();
    }
    restOfSpace.calcBaseHeight = calcBaseHeight;

    function calcOtherHeight($context, includeHeader)
    {
        var headerFooterHeight = includeHeader ? calcHeaderFooterHeight($context) : 0;
        var $area = $context.find('.afScrollPanel').length ? $context.find('.afScrollPanel') : $context;
        var others = getOtherChildren($area);
        var otherHeight = others.reduce(function(sum, el){ return sum + $(el).outerHeight(true); }, headerFooterHeight);
        return otherHeight;
    }
    restOfSpace.calcOtherHeight = calcOtherHeight;

    function calcHeaderFooterHeight($context)
    {
        var h = 0;
        var af = false;
        var $upage = $(".upage:not(.hidden)");
        //AF
        var headerid = $upage.attr("data-header");
        var footerid = $upage.attr("data-footer");
        if(headerid){ h += $("#" + headerid).outerHeight(true); af = true; }
        if(footerid){ h += $("#" + footerid).outerHeight(true); af = true; }
        //OTHERS
        var prefixes   = ["layout", "framework7", "ionic", "ratchet", "jquery_mobile"];
        var headers    = prefixes.map(function(str){ return "[data-uib='" + str + "/header']";});
        var im_headers = headers.map(function(str){ return "> "+ str; });
        var footers    = prefixes.map(function(str){ return "[data-uib='" + str + "/footer']";});
        var im_footers = footers.map(function(str){ return "> "+ str; });
        var $im_header = $context.find(im_headers.join(","));
        var $header    = $im_header.length ? [] : $upage.find(headers.join(","));
        var $im_footer = $context.find(im_footers.join(","));
        var $footer    = $im_footer.length ? [] : $upage.find(footers.join(","));

        h += $header.length ? $header.outerHeight(true)  : 0;
        h += $footer.length ? $footer.outerHeight(false) : 0;


        //crossbar
        var $topcrossbar = $upage.find("[data-uib='layout/top_crossbar']");
        if($topcrossbar.length && (!$header.length || af)){   //if $header will already have accounted for this, except in AF
          try{
            var tc_data = JSON.parse(uib_sb.dquote($topcrossbar.attr("data-anim")));
            if(tc_data.style == "push" && parseInt($topcrossbar.css('top')) === 0){
              h += $topcrossbar.outerHeight(true);
            }
          }catch(e){}
        }

        return h;
    }
    restOfSpace.calcHeaderFooterHeight = calcHeaderFooterHeight;

    function getOtherChildren($area)
    {
        var $others = $area.children().not('.rest-of-height').filter(function(){
            var position = $(this).css('position');
            return ( position != 'absolute' ) ; // && (position != 'fixed') ;
        });
        return $others.toArray();
    }
    restOfSpace.getOtherChildren = getOtherChildren;

    function getExtra($item)
    {
        //var sizing = $item.css('box-sizing'); //(sizing == 'border-box') ? ['margin-top', 'margin-bottom'] :
        var props =  ['margin-top', 'margin-bottom', 'padding-top', 'padding-bottom', 'border-top', 'border-bottom'];
        var extra = props.reduce(function(total, prop){ return total + parseInt($item.css(prop)); }, 0);
        //console.log("extras / $item", extra, $item);
        return extra;
    }
    restOfSpace.getExtra = getExtra;

    function distributeRemainingHeight($context, remainingHeight)
    {
        var $rest = $context.find('.rest-of-height').filter(function(key, item){
              return $(item).parents('.rest-of-height').length === 0;
        });
        if($rest.length)
        {
            var itemHeight = Math.max(50, remainingHeight / $rest.length);
            $rest.each(function(key, item){
                var $item = $(item);
                var itemMargins = getExtra($item);


                var $textarea = $item.find('textarea');
                if($textarea.length !== 0){
                    var toMinus = itemMargins;
                    var $label = $textarea.siblings('label');
                    if($label.hasClass('label-top-left') || $label.hasClass('label-top-right')) {
                        toMinus += ($label.outerHeight(true) + getExtra($label));
                    }

                    $textarea.css('height', itemHeight - toMinus);
                }
                else
                {
                    $item.height(itemHeight - itemMargins).css('overflow-x', 'auto');
                }
            });
        }
    }

})();
