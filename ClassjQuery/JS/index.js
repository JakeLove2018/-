var tableData = [];

function bindEvent() {
    $('#menu-list').on('click', 'dd', function () {
        $('.active').removeClass('active');
        $(this).addClass('active')
        var id = $(this).attr('data-id');
        $('.content').fadeOut()
        $('#' + id).fadeIn();
        if (id == 'student-list') {
            getTableData()
        }
    });
    $('#add-student-btn').on('click', bind);
    $('#table-body').on('click', '.edit', function (e) {
        $('#modal').slideDown();
        var index = $(this).parents('tr').index();
        renderEditForm(tableData[index]);
    })
    $('#mask').on('click', function () {
        $('#modal').slideUp()
    })
    $('#edit-submit-btn').click(function (e) {
        e.preventDefault();
        var data = $('#add-student-form').serializeArray();
        // data = formateData(data);
        if (!data) {
            alert('请将信息填写完成提交')
        } else {
            transfData('/api/student/updateStudent',data,function(res){
                alert('修改成功')
                $('#modal').slideUp()
            })
            // $.ajax({
            //     url: 'http://open.duyiedu.com/api/student/updateStudent',
            //     type: 'GET',
            //     data: {
            //         appkey: 'changlin_clmer_1564063408086',
            //     },
            //     // dataType: 'json',
            //     success: function (res) {
            //         if (res === 'success') {
            //             alert('修改成功')
            //             $('#modal').slideUp()
            //             // $('#menu-list> dd[data-id = student-list]').click()
            //         } else {
            //             alert(res.msg)
            //         }
            //     },
                
            // })
        }
    })
}
function bind(e) {
    e.preventDefault();
    var data = $('#add-student-form').serializeArray();
    data = formateData(data);
    if (!data) {
        alert('请将信息填写完成提交')
    } else {
        $.ajax({
            url: 'http://open.duyiedu.com/api/student/addStudent',
            type: 'GET',
            data: $.extend({
                appkey: 'changlin_clmer_1564063408086',
            }, data),
            dataType: 'json',
            success: function (res) {
                if (res === 'success') {
                    alert('提交成功')
                    $('#add-student-form')[0].reset();
                    $('#menu-list> dd[data-id = student-list]').click()
                } else {
                    alert(res.msg)
                }
            },

        })
    }
}
function formateData(data) {
    var obj = {};
    for (let i = 0; i < data.length; i++) {
        var item = data[i];
        if (!item.value) {
            return false;
        } else {
            obj[item.name] = item.value;
        }
    }
    return obj;
}
function getTableData(data) {
    $.ajax({
        url: 'http://open.duyiedu.com/api/student/findAll',
        type: 'GET',
        dataType: 'json',
        data: {
            appkey: 'changlin_clmer_1564063408086',
        },
        success: function (res) {
            if (res.status === 'success') {
                renderTable(res.data);
                tableData = res.data;
            } else {
                alert(res.msg)
            }
        },
    });
};
function renderTable(data) {
    var str = '';
    data.forEach(function (item, index) {
        str += '<tr>\
        <td>'+ item.sNo + '</td>\
        <td>'+ item.name + '</td>\
        <td>'+ (item.sex ? '女' : '男') + '</td>\
        <td>'+ item.eamil + '</td>\
        <td>'+ (new Date().getFullYear() - item.birth) + '</td>\
        <td>'+ item.phone + '</td>\
        <td>'+ item.address + '</td>\
        <td>\
            <button class="btn edit">编辑</button>\
            <button class="btn del">删除</button>\
        </td>\
    </tr>'
    });
    $('#table-body').html(str);
}
//原生
function renderEditForm(data) {
    var form = $('#edit-form')[0];
    for (var prop in data) {
        console.log(prop)
        if (form[prop]) {
            form[prop].value = data[prop]

        }
    }
}

function transfData(path,data,cb){
    $.ajax({
        url: 'http://open.duyiedu.com ' + path,
        type: 'GET',
        data: $.extend({
            appkey: 'changlin_clmer_1564063408086',
        },data),
        dataType: 'json',
        success: function (res) {
            if (res === 'success') {
               cb(res.data);
            } else {
                alert(res.msg)
            }
        },
        
    })
}
bindEvent()