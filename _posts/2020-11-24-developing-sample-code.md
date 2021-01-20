---
title: Developing Sample Project
description: 15
---

<p><strong>1. BASLIK GELECEK </strong></p>
<pre><div id="copy-button10" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>//TODO Create a text box detection/correction analyzer.
<span class="pln">
</span></code></pre>

<p><strong>2. Locate following line for creating text box detection/correction analyzer and complete the code.</strong></p>
<pre><div id="copy-button11" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>
<span class="kwd">val </span><span class="pln">settings = </span><span class="typ">MLDocumentSkewCorrectionAnalyzerSetting</span><span class="pln">.Factory().create()</span>
<span class="kwd">val </span><span class="pln">analyzer = </span><span class="typ">MLDocumentSkewCorrectionAnalyzerFactory</span><span class="pln">.getInstance().getDocumentSkewCorrectionAnalyzer </span><span class="pun">{</span>
  <span class="pln">setting</span>
<span class="pun">}</span>
<span class="pln">
</span></code></pre>

<p><strong>3. BASLIK GELECEK</strong></p>
<pre><div id="copy-button12" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>//TODO Create an MLFrame object by using android.graphics.Bitmap for the analyzer to detect images
</code></pre>

<p><strong>4. Locate TODO for creating ML frame object by using Bitmap and complete the code.</strong></p>
<pre><div id="copy-button13" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>
<span class="kwd">val </span><span class="pln">frame = </span><span class="typ">MLFrame</span><span class="pln">.fromBitmap(bitmapImage)</span>
</code></pre>
<aside class="special">
  <lu>
    <li>JPG, JPEG and PNG are supperted image resources.</li>
    <li>It is recommended that the image size be within the range of 320x320 px to 1920x1920 px.</li>
  </lu>
</aside>

<p><strong>5. BASLIK GELECEK</strong></p>
<pre><div id="copy-button14" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>//TODO Call the analyseFrame synchronous method to detect the text box.
</code></pre>

<p><strong>6. Locate TODO for creating analyseFrame method and complete the code for detecting the text box synchronously.</strong></p>
<pre><div id="copy-button15" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>
<span class="kwd">val </span><span class="pln">detectTask = SparseArray<</span><span class="typ">MLDocumentSkewDetectResult</span><span class="pln">> = analyzer.analyseFrame(frame)</span>
<span class="kwd">if </span><span class="pln">(detectTask.get(0).</span><span class="typ">resultCode</span><span class="pln"> == MLDocumentSkewCorrectionConstant.</span><span class="type">SUCCESS</span><span>)</span> <span class="pun">{</span>
  <span class="pln">//Detection Success</span>
<span class="pun">} else </span><span class="pun">{</span>
  <span class="pln">//Detection Failure</span>
<span class="pun">}</span>
<span class="pln"></span>
</code></pre>
<aside class = "special">
<p><strong>Note:</strong> If text box needs to be detected asynchronously, following way can be used.</p>
</aside>
<pre><div id="copy-button16" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>//TODO Call the analyseFrame asynchronous method to detect the text box.
<span class="kwd">val </span><span class="pln">detectTaskAsync = Task<</span><span class="typ">MLDocumentSkewDetectResult</span><span class="pln">> = analyzer.asyncDocumentSkewDetect(frame)</span>
<span class="pln">detectTaskAsync?.addonSuccessListener (OnSuccessListener() </span><span class="pun">{ </span>
  <span class="pln">//Detection Success</span>
<span class="pun">})</span><span class="pun">{</span>
<span class="pun">detectTaskAsync?.addOnFailureListener (OnFailureListener() </span><span class="pun">{ </span>
  <span class="pln">//Detection Failure</span>
<span class="pun">})</span>
<span class="pln"></span>
</code></pre>
<p>When the return code is success, the coordinates of the four vertices of text box are returned.</p>

<p><strong>7. BASLIK GELECEK</strong></p>
<pre><div id="copy-button17" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>//TODO If detection is success get detection result.
</code></pre>

<p><strong>8. Locate TODO to get first result if detection is success and complete the code.</strong></p>
<pre><div id="copy-button18" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>
<span class="kwd">val </span><span class="pln">detectResult : MLDocumentSkewDetectResult = detectTask.get(0) </span>
<span class="pln">
</span></code></pre>

<p><strong>9. BASLIK GELECEK</strong></p>
<pre><div id="copy-button19" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>//TODO Obtain the coordinate data for the four vertices of the text box and create an MLDocumentSkewCorrectionCoordinateInput object
</code></pre>

<p><strong>10. Locate TODO to obtain the coordinates of detection result and complete the code to create MLDocumentSkewCorrectionCoordinateInput result.</strong></p>
<pre><div id="copy-button20" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>
<span class="kwd">val </span><span class="pln">leftTop : Point = detectResult.</span><span class="kwd">leftTopPosition</span>
<span class="kwd">val </span><span class="pln">rightTop : Point = detectResult.</span><span class="kwd">rightTopPosition</span>
<span class="kwd">val </span><span class="pln">leftBottom : Point = detectResult.</span><span class="kwd">leftBottomPosition</span>
<span class="kwd">val </span><span class="pln">rightBottom : Point = detectResult.</span><span class="kwd">rightBottomPosition</span>

<span class="kwd">val </span><span class="pln">coordinates : MutableList<</span><span class="kwd">Point</span><span class="pln">> = <i>mutableListOf</i>()</span>

<span class="pln">coordinates.add(leftTop)</span>
<span class="pln">coordinates.add(rightTop)</span>
<span class="pln">coordinates.add(leftBottom)</span>
<span class="pln">coordinates.add(rightBottom)</span>

<span class="kwd">val </span><span class="pln">coordinateData = </span><span class="typ">MLDocumentSkewCorrectionCoordinateInput(</span><span class="pln">coordinates</span><span class="typ">)</span>

<span class="pln">
</span></code></pre>

<aside class="special">
  <p>Data contains coordinate of the four vertices in the text box. Upper left vertex is start point and add the upper left vertex, upper right vertex, lower right vertex and lower left vertex to List object.</p>
</aside>

<p><strong>11. BASLIK GELECEK</strong></p>
<pre><div id="copy-button21" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>//TODO Call the syncDocumentSkewCorrect synchronous method to correct the text box.
</code></pre>

<p><strong>12. Locate TODO to call synchronized syncDocumentSkew method and complete the code to correct the text box.</strong></p>
<pre><div id="copy-button22" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>
<span class="kwd">val </span><span class="pln">correct: SparseArray<</span><span class="kwd">MLDocumentSkewCorrectionResult</span><span class="pln">> = analyzer.syncDocumentSkewCorrect(frame,coordinateData)</span>

<span class="kwd">if</span><span class="pln"> (correct.get(0)?. </span><span class="kwd">resultCode</span><span class="pln"> == </span><span class="typ">MLDocumentSkewCorrectionConstant></span><span class="pln">.</span><span class="kwd">SUCCESS</span><span class="pln">) { </span>
  <span class="pln"> // Correction success & Get bitmap. </span>
  <span class="kwd">val</span><span class="pln"> correctedBitmap : </span><span class="typ">Bitmap</span><span class="pln"> correct.get(0).</span><span class="kwd">corrected</span>
<span class="pln">}</span><span class="kwd"> else </span><span class="pln">{</span>
  <span class="pln"> // Correction failure.</span>
<span class="pln">}</span>
<span class="pln">
</span></code></pre>
<aside class="special">
  <p><strong>Note</strong>: If text box needs to be corrected asynchronously, following way can be used. </p>
</aside>
<pre><div id="copy-button23" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>
<span class="kwd">val </span><span class="pln">correctAsync : Task<</span><span class="typ">MLDocumentSkewCorrectionResult</span><span class="pln">> = analyzer.asyncDocumentSkewCorrect(frame,coordinateData)</span>

<span class="pln">correctAsync?.addOnSuccessListener(OnSuccessListener { </span>
  <span class="pln"> //Correction Success</span>
<span class="pln">})</span>

<span class="pln">correctAsync?.addOnFailureListener(OnFailureListener { </span>
  <span class="pln"> //Correction Failure</span>
<span class="pln">})</span></code>

<aside class="special">
  <p>When the return code is success, data contains bitmap image that corrected document image.</p>
</aside>

<p><strong>13. BASLIK GELECEK</strong></p>
<pre><div id="copy-button24" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>//TODO After the detection is complete, stop the analyzer to release detection resources.
</code></pre>

<p><strong>14. Locate TODO for stopping the analyzer if detection is complete for releasing detection resources</strong></p>
<pre><div id="copy-button25" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>
<span class="pln">analyzer.stop()</span>
<span class="pln"></span></code>
