ajax({
  url: '',
  type: '',
  dataType: ''
}).done(() => {});

// 做一层适配器
var $ = {
  ajax: function(options) {
    return ajax(options);
  }
};

// 测试
$.ajax(...)
