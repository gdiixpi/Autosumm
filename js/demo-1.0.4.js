
$(window).on('load', function () {
    $('#loading-sm').hide();
    $('#loading-sa').hide();
    $('#loading-la').hide();
    $('#loading-it').hide();
    $('#loading-lr').hide();
    $('#loading-fn').hide();
    $('#loading-ns').hide();
    $('#loading-ae').hide();
    $('#loading-as').hide();
    var url = document.location.toString();
    if (url.match('#')) {
        try {
            document.getElementById(url.split('#')[1]).click();
        }
        catch (err)
        {
            document.getElementById("sm").click();
        }
    }
    else
    {
        document.getElementById("sm").click();
    }
    var placeholder = 'buy property gurgaon\ncashew nuts online india\nwhere can i buy nebulizer machine\nwilliam woods university fulton mo\ncheap flight to malaga\ntop rated gas fireplace\nused wardrobe mumbai\nshell helix hx7 review\ndiet for people with gout\ntrain time information\nqueensland phone numbers australia\nphillips 66 account\nwhat is the best shampoo\nwho owns car registration\nworcester highflow 440 problems\nactivity for kids\npage arizona antelope canyon tours\ncross website\npete and pedro hair products\nonline shopping clothes pakistan\nluggage ratings and reviews\nmarine power international\nclairol frost and tip reviews\ncheap seafood\nwinter safety driving tips\ntop stocks 2016 martin roth\nmanual land rover\nnew zealand toll free number\nlow speed floor buffer\nproblems in ford ecosport\ncost of living compare by city\nprices for bmw x3\nnylon vs polyester carpet\nhollister official website\nanne of green gables doll\ncheap tea pots\nhigh gloss epoxy resin\npros and cons of smart meters\nmap of saco river maine\ncalories in mcdonald\'s\nfan out credit card holder\nwhere is sahara desert\nswimming lessons for seniors\nnavy ships for sale\nsymptoms of pneumonia in elderly\nfree songs to download\nrome international airport\nstriiv activity tracker reviews\nbank of baroda home loan eligibility\nbaseball facility software\njanuary 2017 calendar with holidays\nbrookdale corporate office\nabout keyboard and mouse\nbackpack wheels\nswindon to oxford bus\nadelaide womens health centre\nexample of financing companies\ncn tower ticket prices\nis there anything after death\nnottingham university\nmercedes gla for sale south africa\njobs in crows nest qld\nthe hamilton beach villas & spa\ndays in winter\nhardware tools list\ndunlop green flash\nhouse for sale miyapur\ncraftsman front doors with glass';
    $('#intent-text').attr('placeholder', placeholder);
    $('#intent-text').focus(function(){
    if($(this).val() === placeholder){
        $(this).attr('placeholder', '');
    }
    });
    $('#intent-text').blur(function(){
        if($(this).val() ===''){
            $(this).attr('value', placeholder);
        }    
    });
    
    var keywords = '115 kilograms to pounds\n12 df kalksandstein\n24sata najnovije vijesti\nadresse comité entreprise\namazon logowanie\nautobusai anglija lietuva\nautopůjčovna luxusních vozů\nbezplatné právní poradenství\nbottiglie di plastica per acqua\ncalentador de agua de gas butano\ncarros com teto solar a venda\ncase vendita piani resinelli\ncena protezy górnej szczęki\nchá para prisão de ventre em idosos\nchucks boots in fenton mo\nзаработать в скайпе\nкак правильно составлять резюме\nсостав краски для волос\nточки при головной боли\nчай гринфилд зеленый\nインターネット テレビ 地 デジ\nビックカメラ エアコン\nファスナー 金具\n京都 美術館 おすすめ\n面白い パズル ゲーム\n공인중개사 학원\n난간대 가격\n무선 스위치\n세금 계산서 발행\ndéclaration de revenus rsi\ndesa dunia beda gili trawangan\ndouleurs de dos causes\ne devlet giriş şifre\neinfache schnelle blechkuchen\nenganches para pulseras\nentreprise de robotique\nfabrikadan evlere iş\nfactura electronica la rioja\nfaja para hernia lumbar\nfecha de siembra de avena\ngarderobe jugendstil garderoben\ngefäßfüller heizung\ngroupon şehir fırsatları\nhabilitação promoção sp\nhidalgo hollande fille\nhow do solar systems work\niisakki järvenpää\nilla fantasia entradas\ninformes la caixa\njardim botanico sousas campinas sp\nkapalı kedi tuvaleti en ucuz\nkawalerka na sprzedaż bydgoszcz\nkhóa giàn giáo\nkompas surat kabar hari ini\nkurkuma kao lijek\nled světelné pásky\nlloguer casa rural cap de setmana\nmeilleur vtc electrique\nmetales para bisuteria\nmitä lahjaksi 70 vuotiaalle miehelle\nmoderne tafelservice\nmyytävät omakotitalot\npłyty kartonowe\npeter hvidt & orla mølgaard\npisos en fabra i puig barcelona\nplauku priauginimas vilniuje\npompa per pulizia caldaia usato\nrutes en moto per catalunya\nsamsung hafıza kartı\nsant climent de llobregat pisos\nsezionatori elettrici\nsiuntos is vokietijos\nstanovi rijeka\nstanovi u zadru\ntagesmutter herford\ntemario oposiciones archivos gratis\ntemppeliaukio kirkko\ntexte für geburtstagseinladungen 80\ntom gibbs used cars\nvendita appartamento lago maggiore\nviking line fi risteilyvaraukset\nweiss markets\nwet brain alcoholism\nwykonawcy domów szkieletowych\nzásnubní prsteny';
    $('#recognition-text').attr('placeholder', keywords);
    $('#recognition-text').focus(function(){
    if($(this).val() === keywords){
        $(this).attr('placeholder', '');
    }
    });
    $('#recognition-text').blur(function(){
        if($(this).val() ===''){
            $(this).attr('value', keywords);
        }    
    });
    
    $('textarea[data-limit-rows=true]')
    .on('keypress', function (event) {
        var textarea = $(this)
        text = textarea.val()
        numberOfLines = (text.match(/\n/g) || []).length + 1
        if (event.which === 13 && numberOfLines === 100)
        {
          return false;
        }
    });
    
});

function openTab(evt, tabName, tabId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function summarization(evt) {
    txt = $('#summarization-url')[0].value;
    if (txt == "") {
        txt = $('#summarization-url')[0].placeholder;
    }
    $('#summarization-url')[0].value = txt;
    options = {size : $('#summary-size')[0].value, domain : $('#summary-domain')[0].value};
    processdata(txt, "sm", options);
}

function sentiment(evt) {
    txt = $('#sentiment-text')[0].value;
    if (txt == "") {
        txt = $('#sentiment-text')[0].placeholder;
    }
    $('#sentiment-text')[0].value = txt;
    processdata(txt, "sa");
}

function linganalysis(evt) {
    txt = $('#linguistic-text')[0].value;
    if (txt == "") {
        txt = $('#linguistic-text')[0].placeholder;
    }
    $('#linguistic-text')[0].value = txt;
    processdata(txt, "la");
}

function intentanalysis(evt) {
    txt = $('#intent-text')[0].value;
    if (txt == "") {
        txt = $('#intent-text')[0].placeholder;
    }
    $('#intent-text')[0].value = txt;
    processdata(txt, "it");
}

function languagerecognition(evt) {
    txt = $('#recognition-text')[0].value;
    if (txt == "") {
        txt = $('#recognition-text')[0].placeholder;
    }
    $('#recognition-text')[0].value = txt;
    processdata(txt, "lr");
}

function fakenewsdetection(evt) {
    txt = $('#fake-news-url')[0].value;
    if (txt == "") {
        txt = $('#fake-news-url')[0].placeholder;
    }
    $('#fake-news-url')[0].value = txt;
    processdata(txt, "fn");
}

function newssearch(evt) {
    query = $('#search-query')[0].value;
    if (query == "") {
        query = $('#search-query')[0].placeholder;
    }
    $('#search-query')[0].value = query;
    processdata(query, "ns");
}

function articlesearch(evt) {
    query = $('#article-search-query')[0].value;
    if (query == "") {
        query = $('#article-search-query')[0].placeholder;
    }
    $('#article-search-query')[0].value = query;
    processdata(query, "as");
}

function extract(evt) {
    url = $('#extraction-url')[0].value;
    if (url == "") {
        url = $('#extraction-url')[0].placeholder;
    }
    $('#extraction-url')[0].value = url;
    processdata(url, "ae");
}

// return sentiment object based on polarity
function getSentimentByPolarity(polarity)
{
    var nm = "neu"
    switch (polarity)
    {
        case "negative":
            nm = "neg";
            break;
        case "positive":
            nm = "pos";
            break;
        default:
            nm = "neu";
            break;
    }
    return nm;
}

function getSentimentByWeight(w)
{
    if (w < 0)
    {
        return "neg";
    }
    if (w > 0)
    {
        return "pos";
    }
    return "neu";
}

function showSM(response)
{
    var res = "<h1 class=\"doc-sentiment summary-header\">Keywords and key phrases</h1>";
    res = res + "<p class=\"demo-sentence\">";
    var keywords = response[1]['keywords']
    for (i = 0; i < keywords.length; i++)
    {
        var end = ""
        if (i != keywords.length - 1)
        {
            end = ", ";
        }
        res = res + "<span class=\"obj\">" + keywords[i]['keyword'] + end;
    }
    res = res + "</span></p>";
    res = res + "<h1 class=\"doc-sentiment summary-header\">AI-powered summary</h1>";
    var summary = response[0]['summary']
    for (i = 0; i < summary.length; i++)
    {
        res = res + "<p class=\"demo-sentence\">" + summary[i]['sentence'] + "</p>";
    }
    $("#sm-results").html(res);
}

function showSA(response)
{
    var res = "<h1 class=\"doc-sentiment\">Document sentiment: <span class=\"";
    var debug = ""
    // get document polarity
    var class_nm = getSentimentByPolarity(response[0]['document sentiment']['polarity']);
    res = res + class_nm + "\">" + response[0]['document sentiment']['polarity'] + "</span></h1>"
    var aspects = response[1]['sentiment aspects'];
    if (aspects.length != 0)
    {
        res = res + "<h1 class=\"doc-sentiment sent-sentiment\">Sentence level sentiment, opinion phrases and objects</h1>"
        for (i = 0; i < aspects.length; i++)
        {
            var sent_weight = 0;
            var features = aspects[i]['features'];
            var sentence = aspects[i]['sentence'];
            var arr = [];
            for (j = 0; j < features.length; j++)
            {
                arr.push({type : "phrase", phrase : features[j]["phrase"], start_offset : features[j]["start offset"], end_offset : features[j]["end offset"], weight : features[j]["weight"]});
                if ('sentiment object' in features[j])
                {
                    arr.push({type : "object", phrase : features[j]["sentiment object"]["object"], start_offset : features[j]["sentiment object"]["start offset"], end_offset : features[j]["sentiment object"]["end offset"], weight : 0});
                }
            }
            
            // sort array by offsets
            arr.sort(function (a, b) {
                return a.start_offset - b.start_offset;
            });
            //mark sentiment words and objects
            var shift = 0;
            var last_end_offset = 0;
            for (j = 0; j < arr.length; j++)
            {
                sent_weight = sent_weight + arr[j].weight;
                if (last_end_offset == arr[j].end_offset)
                {
                    // already processed
                    continue;
                }
                var phr = sentence.substring(arr[j].start_offset + shift, arr[j].end_offset + shift);
                var addon = "";
                if (arr[j].type == "phrase") {
                    addon = "<span class=\"" + getSentimentByWeight(arr[j].weight) + "\" title=\"" + arr[j].weight + "\">" + phr + "</span>";
                }
                else {
                    addon = "<span class=\"obj\">" + phr + "</span>";
                }
                sentence = sentence.substring(0, arr[j].start_offset + shift) + addon + sentence.substring(arr[j].end_offset + shift, sentence.length);
                shift = shift + addon.length - phr.length;
                last_end_offset = arr[j].end_offset;
            }
            res = res + "<p class=\"demo-sentence\"><span class=\"sent-score\">Score: <span class=\"" + getSentimentByWeight(sent_weight) +"\">" + Number(sent_weight.toFixed(2)) + "</span></span>" + sentence + "</p>";
        }
    }
    $("#sa-results").html(res);
    //$('#sentiment-text')[0].value = debug;
}

function showLA(response)
{
    var res = "<h1 class=\"la-description\">Sentences, tokens, part of speech tags, lemmas, chunks and relations</h1>"
    for (i = 0; i < response.length; i++) {
        tokens = response[i]['tokens'];
        var sent = "<p class=\"demo-sentence\">"
        for (j = 0; j < tokens.length; j++)
        {
            sent = sent + tokens[j]['word'] + ' ' + "<span class=\"bld\">[<span class=\"obj\">" + tokens[j]['tag'] + "</span></span>; <span class=\"bld\">" + tokens[j]['lemma'] + "]</span>" + ' ';
        }
        res = res + sent + "</p>";
        chunks = response[i]['chunks'];
        if (chunks.length > 0)
        {
            res = res + "<h1 class=\"la-description la-subheader\">Detected chunks</h1>";
            var chunk = "<p class=\"demo-sentence\">"
            for (j = 0; j < chunks.length; j++)
            {
                chunk = chunk + "{<span class=\"obj bld\">" + chunks[j]['type'] + "</span> : <span class=\"bld\">" + chunks[j]['chunk'] + "</span>}, ";
            }
            res = res + chunk + "</p>";
        }
        relations = response[i]['relations'];
        if (relations.length > 0)
        {
            res = res + "<h1 class=\"la-description la-subheader\">Extracted subject-verb-object (S-V-O) relations</h1>";
            for (j = 0; j < relations.length; j++)
            {
                var subj = "\"\"";
                var obj = "\"\"";
                var verb = "\"\"";
                if ('subject' in relations[j])
                {
                    subj = relations[j]['subject']['phrase'];
                }
                if ('object' in relations[j])
                {
                    obj = relations[j]['object']['phrase'];
                }
                if ('verb' in relations[j])
                {
                    verb = relations[j]['verb']['phrase'];
                }
                var rel = "<p class=\"demo-sentence\">" + "<span class=\"obj bld\">S</span>: <span class=\"bld\">" + subj + "</span>  <span class=\"obj bld\">V</span>: <span class=\"bld\">" + verb + "</span>  <span class=\"obj bld\">O</span>: <span class=\"bld\">" + obj + "</span>";
                res = res + rel + "</p>";
            }
        }
        res = res + "<hr>";
    }
    $("#la-results").html(res);
}

function showFN(response)
{
    var res = "<h1 class=\"la-description\">Fake News Detection Predictions</h1>"
    //var jsonStr = JSON.stringify(response);
    res = res + "<p class=\"demo-sentence\">";
    res = res + '<span class=\"pos bld\">' + response['predictions'][0]['type'] + '</span>: ' + Number(response['predictions'][0]['confidence'].toFixed(3)) + "</p>"; 
    res = res + "<p class=\"demo-sentence\">";
    res = res + '<span class=\"neg bld\">' + response['predictions'][1]['type'] + '</span>: ' + Number(response['predictions'][1]['confidence'].toFixed(3)) + "</p>";
    if ("categories" in response['predictions'][1])
    {
        cat = response['predictions'][1]["categories"];
        for (i = 0; i < cat.length; i++)
        {
            var w = Number(cat[i]['confidence'].toFixed(3));
            res = res + '<p class=\"fake-sub-category\"><span class=\"bld\">' + cat[i]['type'] + '</span>: ' + w + "</p>";
        }
    }
    $("#fn-results").html(res);
}

function showIT(response)
{
    var res = "<div class=\"table-responsive\"><table class=\"table\"><thead><tr><th id=\"Transactional\" style=\"background-color: #56aecd;\">Transactional</th><th id=\"Commercial>Opinion/Quality\" style=\"background-color: #a5db6a;\">Commercial>Opinion/Quality</th><th id=\"Commercial>Comparison\" style=\"background-color: #d74d57;\">Commercial>Comparison</th><th id=\"Commercial>Reviews/Complain\" style=\"background-color: #9400d3;\">Commercial>Reviews/Complain</th><th id=\"Informational\" style=\"background-color: #f7b357;\">Informational</th><th id=\"Navigational\" style=\"background-color: #9ba4ac;\">Navigational</th></tr></thead><tbody>";
    var categories = [{'Transactional' : []}, {'Commercial>Opinion/Quality' : []}, {'Commercial>Comparison' : []}, {'Commercial>Reviews/Complain' : []}, {'Informational' : []}, {'Navigational' : []}];
    var results = response['keywords'];
    var cnt_rows = 0;
    for (i = 0; i < results.length; i++)
    {
        var keyword = results[i]['keyword'];
        var category = results[i]["category"];
        for (j = 0; j < categories.length; j++)
        {
            if (category in categories[j])
            {
                categories[j][category].push(keyword);
                if (categories[j][category].length > cnt_rows)
                {
                    cnt_rows = categories[j][category].length;
                }
                break;
            }
        }
    }
    for (i = 0; i < cnt_rows; i++)
    {
        res = res + "<tr>";
        for (j = 0; j < categories.length; j++)
        {
            for(var key in categories[j]) {
                if (categories[j][key].length <= i) 
                {
                    res = res + "<td> </td>";
                }
                else 
                {
                    res = res + "<td>" + categories[j][key][i] + "</td>";
                }
            }
        }
        res = res + "</tr>";
    }
    res = res + "</tbody></table></div>";
    $("#it-results").html(res);
}

function showLR(response, data)
{
    var res = "<div class=\"table-responsive lr-table\"><table class=\"table\"><thead><tr><th>#</th><th>Keyword</th><th>Detected language</th></tr></thead><tbody>";
    var results = response['documents'];
    var cnt_rows = 1;
    var keys = data.split("\n")
    for (i = 0; i < results.length; i++)
    {
        res = res + "<tr>";
        res = res + "<td>" + cnt_rows.toString() + "</td><td>" + keys[i] + "</td><td>" + results[i]["language"] + "</td>";
        res = res + "</tr>";
        cnt_rows = cnt_rows + 1
    }
    res = res + "</tbody></table></div>";
    $("#lr-results").html(res);
}


function showNS(response)
{
    var res = "<h1 class=\"la-description\">Search Results</h1>";
    var results = response['results']
    for (i = 0; i < results.length; i++)
    {
        var title = results[i]['title'];
        var url = results[i]['url'];
        var img_url = results[i]['image_url'];
        res = res + "<div class=\"demo-sentence search-result\">";
        if (img_url != null)
        {
            res = res + "<img src=\"" + img_url + "\" width=\"96px;\" class=\"news-image\"/>";
        }
        res = res + "<a href=\"" + url + "\" target=\"_blank\">" + title + "</a></div>";
    }
    $("#ns-results").html(res);
}

function showAS(response)
{
    var res = "<h1 class=\"la-description\">Search Results</h1>";
    var results = response['results']
    for (i = 0; i < results.length; i++)
    {
        var title = results[i]['title'];
        var description = results[i]['description'];
        if (description.length > 500)
        {
            description = description.slice(0, 500) + '...';
        }
        var url = results[i]['url'];
        var pub_date = results[i]['publication_date'];
        res = res + "<div class=\"demo-sentence search-result\">";
        res = res + "<a href=\"" + url + "\" target=\"_blank\">" + title + "</a>";
        res = res + "<p class=\"article-element\"><span class=\"element-header\">Publication date: </span>" + pub_date + "</p>";
        res = res + "<p class=\"article-element\">" + description + "</p></div>";
    }
    $("#as-results").html(res);
}


function showAE(response)
{
    var res = "<h1 class=\"la-description\">Extraction results</h1>";
    res = res + "<p class=\"demo-sentence\"><span class=\"obj\">Article title: </span>" + response['article title'] + "</p>";
    if ("meta description" in response['meta information'])
    {
        if (response['meta information']['meta description'] != null) 
        {
        res = res + "<p class=\"demo-sentence\"><span class=\"obj\">Meta description: </span>" + response['meta information']['meta description'] + "</p>";
        }
    }
    if ("publish date" in response['meta information'])
    {
        if (response['meta information']['publish date'] != null) 
        {
            res = res + "<p class=\"demo-sentence\"><span class=\"obj\">Publish date: </span>" + response['meta information']['publish date'] + "</p>";
        }
    }
    if ("image" in response['meta information'])
    {
        if (response['meta information']['image'] != null) 
        {
            res = res + "<p class=\"demo-sentence\"><span class=\"obj\">Main image: </span><a href=\"" + response['meta information']['image'] + '\" target="_blank">' + response['meta information']['image'] + "</a></p>";
        }
    }
    
    if ("authors" in response['meta information'] && response['meta information']['authors'].length > 0)
    {
        res = res + "<p class=\"demo-sentence\"><span class=\"obj\">Authors: </span>";
        var authors = response['meta information']['authors'];
        for (j = 0; j < authors.length; j++)
        {
            var end = "";
            if (j != authors.length - 1)
            {
                end = ", ";
            }
            res = res + authors[j] + end;
        }
        res = res + "</p>";
    }
    if ("meta keywords" in response['meta information'])
    {
        if (response['meta information']['meta keywords'] != null && response['meta information']['meta keywords'] != "") 
        {
            res = res + "<p class=\"demo-sentence\"><span class=\"obj\">Meta keywords: </span>" + response['meta information']['meta keywords'] + "</p>";
        }
    }
    var article_text = response['text'];
    res = res + "<p class=\"demo-sentence\"><span class=\"obj\">Article text: </span>" + response['text'] + "</p>";
    $("#ae-results").html(res);
}

function processdata(data, tabName, options = {}) 
{
    $('#loading-' + tabName).show();
    $("#" + tabName + "-results").html("");
    $.ajax({
        url: './scripts/analysis.py',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8',
        cache: false,
        data: JSON.stringify({'text': data, 'tab': tabName, 'options' : options}),
        success: function (response) 
        {
            $('#loading-' + tabName).hide();
            if (response.error)
            {
                $("#" + tabName + "-results").html("<div class=\"error\">Sorry, something went wrong! Try another text.</div>");
            }
            else
            {
                switch (tabName)
                {
                    case "sm":
                        showSM(response);
                        break;
                    case "sa":
                        showSA(response);
                        break;
                    case "la":
                        showLA(response);
                        break;
                    case "fn":
                        showFN(response);
                        break;
                    case "ns":
                        showNS(response);
                        break;
                    case "ae":
                        showAE(response);
                        break;
                    case "as":
                        showAS(response);
                        break;
                    case "it":
                        showIT(response);
                        break;
                    case "lr":
                        showLR(response, data);
                        break;
                    default:
                        showSA(response);
                        break;
                }
            }
        },
        error: function (response) {
                $('#loading-' + tabName).hide();
                $("#" + tabName + "-results").html("<div class=\"error\">Sorry, something went wrong! Try another text.</div>");
        }
    });
}

