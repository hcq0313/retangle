/*
$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $widthValidation = $('#width-validation'),
      $heightValidation = $('#height-validation'),
      $area = $('#arear');
$width.focusout(function(){
  var w1 = $width.val();
  if(w1===''){
    $widthValidation.html('宽度不能为空！');
    return;
  }
});
$height.focusout(function(){
  var h1 = $height.val();
  if(h1 === ''){
    $heightValidation.html('长度不能为空！');
    return;
  }
});
  $btnCal.click(function(){
    var w = Number($width.val()),
        h = Number($height.val());

  var p = 2*(w+h),
      a = w*h;

  $perimeter.val(p);
  $area.val(a);
  });
});
*/
function Rectangle(e,a){
  var t=Number(e),i=Number(a);
  this.area=function(){
    return t*i
  },
  this.perimeter=function(){
    return 2*(t+i)
  }
}
function validate(e){
  var a={isOK:!1,reason:""};
  return""===e?a.reason="不能为空！":/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(e)?Number(e)<0?a.reason="必须大于零":a.isOK=!0:a.reason="必须是数值",a
}
$(function(){
  var a=$("#width"),
  t=$("#height"),
  e=$("#calculate"),
  i=$("#perimeter"),
  r=$("#area"),
  n=$("#width-validate"),
  l=$("#height-validate"),
  s=!1;
  a.focusout(function(){
    var e=validate(a.val());
    s=e.isOK,e.isOK?n.html(""):(n.html("宽度"+e.reason),
      a.select())
  }),
  t.focusout(function(){
    var e=validate(t.val());
    s=e.isOK,e.isOK?l.html(""):(l.html("高度"+e.reason),
      t.select())}),
  e.click(function(){
    if(s){var e=new Rectangle(a.val(),t.val());
      i.val(e.perimeter()),
      r.val(e.area()
        )}
    })
});
