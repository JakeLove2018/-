function bindEvent() {
    $('#btn').on('click', (e, index) => {
        var val = $('input').val();
        if (val) {
            renderDom('mine', val);
            $('#inp-box').val('');
            getData(val);
        } else {
            alert('请求出错')
        }
    })
    $('#inp-box').keyup(function (e) {
        if (e.keyCode === 13) {
            $('button').click()
        }
    })
}
function getData(val) {
    $.ajax({
        url: 'https://developer.duyiedu.com/edu/turing/chat',
        type: 'GET',
        dataType: 'json',
        data: {
            text: val,
        },
        success: (data) => {
            console.log(data)
            renderDom('robot', data.text)
        }
    })
};
function renderDom(who, text) {
    var oDiv = $('<div></div>');
    oDiv.addClass(who);
    oDiv.append($('<div class="avitor"></div>'))
        .append($('<div class="text"></div>').text(text))
        .appendTo($('.container'));
        var scrolltop = $('.container')[0].scrollHeight - $('.container').innerHeight();
        $('.container').scrollTop(scrolltop);
}
bindEvent()
