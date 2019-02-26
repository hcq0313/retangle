$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#arear');

  $btnCal.click(function({
    var w = Number($width),
        h = Number($height);

  var p = 2*(w+h),
      a = w*h;

  $perimeter.val();
  $area.val();
  }));
});
