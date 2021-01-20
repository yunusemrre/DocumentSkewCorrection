---
title: Advanced Information
description: 2
---

<ol type="1">
  <li>user installs your app from HUAWEI AppGallery, if you add following statement to the <strong>AndroidManifest.xml</strong>, the machine learning model is automatically updated to the user’s device.
    <pre><div id="copy-button29" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code><span class="pun"><</span><span class="pln">application</span><span class="pun">></span>
    <span class="pln">...</span>
      <span class="pun"><</span><span class="pln">meta-data</span><span class="pun">></span>
        <span class="pln">...</span>
        <span class="pln">android:name="com.huawei.hms.ml.DEPENDENCY"</span>
        <span class="pln">android:value= "dsc"</span>
        <span class="pln">...</span>
      <span class="pun"><</span><span class="pln">/meta-data</span><span class="pun">></span>
      <span class="pln">...</span>
  <span class="pln">...</span>
<span class="pun"><</span>/application<span class="pun">></span>
  </code></pre>
  </li>
</ol>
