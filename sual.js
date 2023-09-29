var i = 0;
var dcvb = 0;
var scvb = 0;
$(document).ready(function () {
    $('#daxilol').click(function () {
        if ($('.daxil2 input').eq(0).val() == 'memmedovaslan' && $('.daxil2 input').eq(1).val() == 'nantech') {
            window.open("sual-cavab.html");
        } else {
            $('.daxil2 input').css('border', '3px solid red')
        }
    })


    var suallarr = [
        { sual: '5+6=?', cvb1: '9', cvb2: '10', cvb3: '11', cvb4: '12', cvb: 'c' },
        { sual: '1+2=?', cvb1: '2', cvb2: '3', cvb3: '4', cvb4: '5', cvb: 'b' },
        { sual: '5+4=?', cvb1: '9', cvb2: '11', cvb3: '13', cvb4: '10', cvb: 'a' },
        { sual: '5-4=?', cvb1: '4', cvb2: '2', cvb3: '1', cvb4: '5', cvb: 'c' },
        { sual: '6*3=?', cvb1: '18', cvb2: '16', cvb3: '21', cvb4: '1', cvb: 'a' },
        { sual: '15/3=?', cvb1: '2', cvb2: '5', cvb3: '4', cvb4: '12', cvb: 'b' },
        { sual: '5*3+2=?', cvb1: '3', cvb2: '7', cvb3: '19', cvb4: '17', cvb: 'd' },
        { sual: '100/20*3=?', cvb1: '15', cvb2: '11', cvb3: '13', cvb4: '10', cvb: 'a' },
        { sual: '10-2+5=?', cvb1: '2', cvb2: '14', cvb3: '21', cvb4: '13', cvb: 'd' },
        { sual: '7+3=?', cvb1: '2', cvb2: '5', cvb3: '6', cvb4: '10', cvb: 'd' },
    ]

    var deqiqe = 4;
    var saniye = 60;

    $('#next, .bitir').hover(funknan1, funknan2)
    function funknan1() {
        $(this).animate({ 'width': '100px' }, 500);
    }
    function funknan2() {
        $(this).animate({ 'width': '80px' }, 500);
    }

    var e;
    $('.start').click(function () {
        $(this).hide()
        $('.suallar').show()
        $('#next').show()
        $('.bitir').show()
        var e = setInterval(zaman, 1000)
    })
    function zaman() {
        
            saniye--
            $('.zaman').html(`<h1>${deqiqe}:${saniye}</h1>`)
            if (deqiqe == 0 && saniye == 0) {
                clearInterval(this)
                i == 10
                neticee()
                clearInterval(e)
            }
            else if (saniye == 0) {
                deqiqe--
                saniye = 59
            }
            else if (saniye >= 60) {
                deqiqe++
                saniye = saniye - 60;
            } 
    }

    funk()

    $('#next').click(function () {
        if (i == 9) {
            neticee()
        }
        else{
            i++
            funk()
        }

    })

    function funk() {

        // $('.cavablar button').css('background-color', 'white')

        $('.sual p').text(suallarr[i].sual)
        $('.cavablar button').eq(0).text(suallarr[i].cvb1)
        $('.cavablar button').eq(1).text(suallarr[i].cvb2)
        $('.cavablar button').eq(2).text(suallarr[i].cvb3)
        $('.cavablar button').eq(3).text(suallarr[i].cvb4)

    }

    $('.cavablar button').click(function () {

        $('.cavablar button').addClass('disablebutton')
        $(`.cavablar [id!="${suallarr[i].cvb}"]`).css('background-color', 'red')
        $(`.cavablar [id="${suallarr[i].cvb}"]`).css('background-color', 'green')

        if ($(this).attr('id') == suallarr[i].cvb) {
            dcvb++
            i++
            saniye += 20;
        $('.cavablar button').removeClass('disablebutton')

            if (i == 10) {
                neticee()
            }
            $('.cavablar button').css('background-color', 'transparent')
            funk()

        } else {
            // $(this).css('background-color', 'red')
            scvb++
        }

    })

    $('.nomreler button').each(function () {
        $(this).click(function () {
            i = $(this).attr('id') - 1
            funk()

        })
    })

    $('.bitir').click(function () {
        i == 10
        neticee()
    })
})
function neticee() {
    $('.netice').show()
    $('.netice h1:first-child span').text(dcvb)
    $('.netice h1:last-child span').text(scvb)
}