#!/bin/bash

OF="homegym_generated.html"

echo "<html>" > $OF
echo "<body>" >> $OF
echo "<!-- this photo-grid node is referenced later by JS in a way that depends on it being  a direct child of the <main> element -->" >> $OF
echo "<div class='photo-grid' id='homeGymPhotoGrid01'>" >> $OF
echo "<div class='photo-gutter'></div>" >> $OF

TOTAL=`cat homegym.data | wc -l`
let "index=1"
while read p; 
do
  echo working on $p

  ds="data-src"
  let "prev=index-1"
  let "next=index+1"

  echo "<div class='photo'>" >> $OF
  echo "<label class="photoviewer" for='photoViewer_homeGym_$index'><div class='pending' data-img='$p'></div></label>" >> $OF
  echo "<input type='radio' name='photoViewer' id='photoViewer_homeGym_close_$index' class='photoViewer' />" >> $OF
  echo "<input type='radio' name='photoViewer' id='photoViewer_homeGym_$index' class='photoViewer' />" >> $OF
  echo "<div class='photoViewer'>" >> $OF
  if [ $index != "1" ]; then
    echo "<label for='photoViewer_homeGym_$prev'><div class='prev'></div></label>" >> $OF
  fi
  if [ $index != "$TOTAL" ]; then
    echo "<label for='photoViewer_homeGym_$next'><div class='next'></div></label>" >> $OF
  fi
  echo "<label for='photoViewer_homeGym_close_$index'><div class='close'></div></label>" >> $OF
  echo "<div class='pending' data-img='$p'></div>" >> $OF
  echo "</div>" >> $OF
  echo "</div>" >> $OF

  let "index=next"
done <homegym.data

echo "</div>" >> $OF

cat >> $OF <<END
<script type="text/javascript" language="javasript">
  var target = document.getElementById('homeGymPhotoGrid01');
   (function() {
     var mason = new Masonry(
        target,
        {
           panelClass: 'photo',
           visEle: target.parentNode
        }
    );
    mason.listenResize();
    mason.listenNewImageLoad();
    mason.listenHashChange();
  })();
</script>
END

echo "  </body></html>" >> $OF
