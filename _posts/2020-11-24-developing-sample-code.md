---
title: Developing Sample Project
description: 15
---

<p><strong>1. Locate following line for creating text box detection/correction analyzer and complete the code.</strong></p>
<pre><div id="copy-button10" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>//TODO Create a text box detection/correction analyzer.
<span class="kwd">val </span><span class="pln">settings = </span><span class="typ">MLDocumentSkewCorrectionAnalyzerSetting</span><span class="pln">.Factory().create()</span>
<span class="kwd">val </span><span class="pln">analyzer = </span><span class="typ">MLDocumentSkewCorrectionAnalyzerFactory</span><span class="pln">.getInstance().getDocumentSkewCorrectionAnalyzer </span><span class="pun">{</span>
  <span class="pln">setting</span>
<span class="pun">}</span>
<span class="pln">
</span></code></pre>

<p><strong>2. Locate TODO for creating ML frame object by using Bitmap and complete the code.</strong></p>
<pre><div id="copy-button11" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>//TODO Create an MLFrame object by using android.graphics.Bitmap for the analyzer to detect images
<span class="kwd">val </span><span class="pln">frame = </span><span class="typ">MLFrame</span><span class="pln">.fromBitmap(bitmapImage)</span>
</code></pre>
<aside class="special">
  <lu>
    <li>JPG, JPEG and PNG are supperted image resources.</li>
    <li>It is recommended that the image size be within the range of 320x320 px to 1920x1920 px.</li>
  </lu>
</aside>
<p><strong>3. Locate TODO for creating analyseFrame method and complete the code for detecting the text box synchronously.</strong></p>
<pre><div id="copy-button12" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>//TODO Call the analyseFrame synchronous method to detect the text box.
<span class="kwd">val </span><span class="pln">detectTask = SparseArray<</span><span class="typ">MLDocumentSkewDetectResult</span><span class="pln">> = analyzer.analyseFrame(frame)</span>
<span class="kwd">if </span><span class="pln">(detectTask.get(0).</span><span class="typ">resultCode</span><span class="pln"> == MLDocumentSkewCorrectionConstant.</span><span class="type">SUCCESS</span><span>)</span) <span class="pun">{</span>
  <span class="pln">//Detection Success</span>
<span class="pun">} else </span><span class="pun">{</span>
  <span class="pln">//Detection Failure</span>
<span class="pun">}</span>
<span class="pln"></span>
</code></pre>
<aside class = "special">
<p><strong>Note:</strong> If text box needs to be detected asynchronously, following way can be used.</p>
</aside>


<p><strong>9. Locate following line in Play Activity.</strong></p>
<pre><div id="copy-button19" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code> //TODO Callback Listener
<span class="pln">
</span></code></pre>
<p><strong>10. Set the Callback Listener in Play Activity.</strong></p>
<pre><div id="copy-button20" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>  surfaceView.holder.addCallback(this)
<span class="pln">
</span></code></pre>
<p><strong>11. Locate following line in Play Activity.</strong></p>
<pre><div id="copy-button21" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code> //TODO Callback Listener
<span class="pln">
</span></code></pre>
<p><strong>12. Set the Seekbar Listener in Play Activity.</strong></p>
<pre><div id="copy-button22" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>  seekBar.setOnSeekBarChangeListener(this)
<span class="pln">
</span></code></pre>
<p><strong>13. Locate following line in Play Activity.</strong></p>
<pre><div id="copy-button23" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>  //TODO Starting the Player
	<span class="pln">
</span></code></pre>
<p><strong>14. Start Wise Player in Play Activity.</strong></p>
<pre><div id="copy-button24" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>  player?.start()
<span class="pln">
</span></code></pre>
<p><strong>15. Locate following line in Play Activity. </strong></p>
<pre><div id="copy-button25" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>  //TODO Surface Change
<span class="pln">
</span></code></pre>
<p><strong>16. Set surface change to Wise Player.</strong></p>
<pre><div id="copy-button26" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>  player.setSurfaceChange()
<span class="pln">
</span></code></pre>
<p><strong>17. Locate following line in Play Activity. </strong></p>
<pre><div id="copy-button27" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>  //TODO Surface Destroy
<span class="pln">
</span></code></pre>
<p><strong>18. Suspend the Wise Player if surface is destroyed.</strong></p>
<pre><div id="copy-button28" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>  player.suspend()
<span class="pln">
</span></code></pre>
<p><strong>19. Locate following line in Play Activity. </strong></p>
<pre><div id="copy-button29" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>  //TODO Surface Create
<span class="pln">
</span></code></pre>
<p><strong>20. Resume Wise Player with the current time when app is sent to foreground.</strong></p>
<pre><div id="copy-button30" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>  player.setView(surfaceView)
  player.resume(PlayerConstants.ResumeType.KEEP)
<span class="pln">
</span></code></pre>
<p><strong>21. Locate following line in Play Activity.</strong></p>
<pre><div id="copy-button31" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>  //TODO Release Wise Player
<span class="pln">
</span></code></pre>
<p><strong>22. Release Wise Player and listeners in Play Activity. </strong></p>
<pre><div id="copy-button32" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>  player.setErrorListener(null)
  player.setEventListener(null)
  player.setResolutionUpdatedListener(null)
  player.setReadyListener(null)
  player.setLoadingListener(null)
  player.setPlayEndListener(null)
  player.setSeekEndListener(null)
  player.release()
<span class="pln">
</span></code></pre>
