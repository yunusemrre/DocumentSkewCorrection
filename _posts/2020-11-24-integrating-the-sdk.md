---
title: Integration the Document Skew Correction SDK
description: 5
---

<p>You can download the codelab project from: <strong>URL WILL BE HERE</strong></p>

<h2><strong>Creating a Project</strong></h2>
<p><strong>Step 1</strong>: Start Android Studio.</p>
<p><strong>Step 2</strong>: Choose <strong>File</strong> &gt; <strong>Open</strong>, go to the directory where the sample project is decompressed, and click <strong>OK</strong>.<br><img style="width: 376.00px" src="https://raw.githubusercontent.com/yunusemrre/DocumentSkewCorrection/master/assets/DocumentSkewCorrectionProject.PNG" onclick="imageclick(src)"></p>  
<p><strong>Step 3</strong>: Configure the AppGallery Connect plug-in, Maven repository address, build dependencies, obfuscation scripts, and permissions. (These items have been configured in the sample code. If any of them does not meet your requirements, change it in your own project.)</p>
<p><strong>1. Configure the Maven repository address and AppGallery Connect plug-in in the project's build.gradle file.</strong></p>
<ul>
	<li>Go to <strong>allprojects</strong> &gt; <strong>repositories</strong> and configure the Maven repository address for the HMS Core SDK.<pre><div id="copy-button1" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code><span class="pln">allprojects </span><span class="pun">{</span><span class="pln">
		repositories </span><span class="pun">{</span><span class="pln">
			maven </span><span class="pun">{</span><span class="pln"> url </span><span class="str">'https://developer.huawei.com/repo/'</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
			</span><span class="pun">...</span><span class="pln">
		</span><span class="pun">}</span><span class="pln">
	</span><span class="pun">}</span><span class="pln">
	</span></code></pre>
	</li>
	<li>Go to <strong>buildscript</strong> &gt; <strong>repositories</strong> and configure the Maven repository address for the HMS Core SDK.<pre><div id="copy-button2" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code><span class="pln">buildscript </span><span class="pun">{</span><span class="pln">
		  repositories </span><span class="pun">{</span><span class="pln">
		    maven </span><span class="pun">{</span><span class="pln">url </span><span class="str">'https://developer.huawei.com/repo/'</span><span class="pun">}</span><span class="pln">
			  </span><span class="pun">...</span><span class="pln">
		  </span><span class="pun">}</span><span class="pln">
		  </span><span class="pun">...</span><span class="pln">
	  </span><span class="pun">}</span><span class="pln">
	</span></code></pre>
	</li>
	<li>Go to <strong>buildscript</strong> &gt; <strong>dependencies</strong> and add build dependencies.<pre><div id="copy-button3" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code><span class="pln">buildscript </span><span class="pun">{</span><span class="pln">
		dependencies </span><span class="pun">{</span><span class="pln">
     </span><span class="str">                   //Replace {agconnect_version} with the actual AGC plugin version number.</span><span class="pln">
     </span><span class="str">                   //Example: classpath 'com.huawei.agconnect:agcp: 1.4.1.300'</span><span class="pln">
			classpath </span><span class="str">'com.huawei.agconnect:agcp:{agconnect_version}'</span><span class="pln">
		</span><span class="pun">}</span><span class="pln">
	</span><span class="pun">}</span><span class="pln">
	</span></code></pre>
	</li>
</ul>
<p><strong>2. Configure the dependency package in the app's build.gradle file.</strong></p>
ML Kit provides two SDK integration modes: full SDK and base SDK. You can select either one based on your needs.
For details, see <a href="https://developer.huawei.com/consumer/en/doc/HMSCore-Guides-V5/overview-sdk-0000001051070278-V5" target="_blank">Full SDK and base SDK in Overview</a>.
<ul>
	<li>Verify if Document Skew Correction dependency that selected integration mode has been added.If not select one of these two mode and add it as following to the <strong>dependencies</strong> section in the app level <strong>build.gradle</strong> file.
    <ol type="1">
      <li>Mode 1: Full SDK Integration (Recommended)
      <pre><div id="copy-button4" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code><span class="pln">dependencies </span><span class="pun">{</span><span class="pln">
		</span><span class="pun">...</span><span class="pln">
    </span><span class="str">            //Import the base SDK</span><span class="pln">
		implementation </span><span class="str">'com.huawei.hms:ml-computer-vision-documentskew:2.0.2.300'</span><span class="pln">
    </span><span class="str">            //Import the document detection/correction model package</span><span class="pln">
		implementation </span><span class="str">'com.huawei.hms:ml-computer-vision-documentskew-model:2.0.2.300'</span><span class="pln">
		</span><span class="pun">...</span><span class="pln">
	</span><span class="pun">}</span><span class="pln">
	</span></code></pre>
      </li>
      <li>Mode 2: Base SDK Integration
      <pre><div id="copy-button5" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code><span class="pln">dependencies </span><span class="pun">{</span><span class="pln">
		</span><span class="pun">...</span><span class="pln">
    </span><span class="str">            //Import the base SDK</span><span class="pln">
		implementation </span><span class="str">'com.huawei.hms:ml-computer-vision-documentskew:2.0.2.300'</span><span class="pln">
		</span><span class="pun">...</span><span class="pln">
	</span><span class="pun">}</span><span class="pln">
	</span></code></pre>
      </li>
    </ol>
	</li>
  <li>Configure the <strong>minSDKVersion</strong> in the app level build.gradle file.
    <pre><div id="copy-button6" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code><span class="pln">android </span><span class="pun">{</span><span class="pln">
  </span><span class="pun">...</span><span class="pln">
    </span><span class="pln">android </span><span class="pun">{</span><span class="pln">
      </span><span class="pun">...</span><span class="pln">
          </span><span class="str">minSdkVersion 19</span><span class="pln">
      </span><span class="pun">...</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">...</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
</span></code></pre>
  </li>
			<li>Check if AGC plugin is applied. If not enable the AGC plug-in in the app level <strong>build.gradle</strong> file.
      <pre><div id="copy-button7" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code><span class="pln">apply plugin: 'com.huawei.agconnect'
      </span></code></pre>
  </li>
  <p><strong>Note</strong>: Make sure that you configure apply plugin: 'com.huawei.agconnect' <mark>after</mark> apply plugin: 'com.android.application'</p>
</ul>  
<p><strong>3. Configure obfuscation scripts.</strong></p>
<ul>
	<li>Configure the following information in the <strong>app/proguard-rules.pro</strong> file:<pre><div id="copy-button8" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>                <span class="pun">-</span><span class="pln">ignorewarnings</span><span class="pln">
		</span><span class="pun">-</span><span class="pln">keepattributes </span><span class="pun">*</span><span class="typ">Annotation</span><span class="pun">*</span><span class="pln">
		</span><span class="pun">-</span><span class="pln">keepattributes </span><span class="typ">Exceptions</span><span class="pln">
		</span><span class="pun">-</span><span class="pln">keepattributes </span><span class="typ">InnerClasses</span><span class="pln">
		</span><span class="pun">-</span><span class="pln">keepattributes </span><span class="typ">Signature</span><span class="pln">
		</span><span class="pun">-</span><span class="pln">keepattributes </span><span class="typ">SourceFile</span><span class="pun">,</span><span class="typ">LineNumberTable</span><span class="pln">
		</span><span class="pun">-</span><span class="pln">keep </span><span class="kwd">class</span><span class="pln"> com</span><span class="pun">.</span><span class="pln">hianalytics</span><span class="pun">.</span><span class="pln">android</span><span class="pun">.**{*;}</span><span class="pln">
		</span><span class="pun">-</span><span class="pln">keep </span><span class="kwd">class</span><span class="pln"> com</span><span class="pun">.</span><span class="pln">huawei</span><span class="pun">.</span><span class="pln">updatesdk</span><span class="pun">.**{*;}</span><span class="pln">
		</span><span class="pun">-</span><span class="pln">keep </span><span class="kwd">class</span><span class="pln"> com</span><span class="pun">.</span><span class="pln">huawei</span><span class="pun">.</span><span class="pln">hms</span><span class="pun">.**{*;}</span><span class="pln">
		</span></code></pre>
	</li>
	<li>If you are using AndResGuard, add it to the allowlist in the obfuscation script file.<pre><div id="copy-button9" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code>               <span class="str"> "R.string.hms*"</span><span class="pun">,</span><span class="pln">
		</span><span class="str">"R.string.connect_server_fail_prompt_toast"</span><span class="pun">,</span><span class="pln">
		</span><span class="str">"R.string.getting_message_fail_prompt_toast"</span><span class="pun">,</span><span class="pln">
		</span><span class="str">"R.string.no_available_network_prompt_toast"</span><span class="pun">,</span><span class="pln">
		</span><span class="str">"R.string.third_app_*"</span><span class="pun">,</span><span class="pln">
		</span><span class="str">"R.string.upsdk_*"</span><span class="pun">,</span><span class="pln">
		</span><span class="str">"R.layout.hms*"</span><span class="pun">,</span><span class="pln">
		</span><span class="str">"R.layout.upsdk_*"</span><span class="pun">,</span><span class="pln"> 
		</span><span class="str">"R.drawable.upsdk*"</span><span class="pun">,</span><span class="pln">
		</span><span class="str">"R.color.upsdk*"</span><span class="pun">,</span><span class="pln"> 
		</span><span class="str">"R.dimen.upsdk*"</span><span class="pun">,</span><span class="pln">
		</span><span class="str">"R.style.upsdk*"</span><span class="pun">,</span><span class="pln">
		</span><span class="str">"R.string.agc*"</span><span class="pln">
		</span></code></pre>
	</li>
</ul>
<p><strong>4. Configure permissions in the AndroidManifest.xml file.</strong></p>
<pre><div id="copy-button10" class="copy-btn" title="Copy" onclick="copyCode(this.id)"></div><code><span class="tag">&lt;uses-permission</span><span class="pln"> </span><span class="atn">android:name</span><span class="pun">=</span><span class="atv">"android.permission.CAMERA"</span><span class="tag">/&gt;</span><span class="pln">
</span><span class="tag">&lt;uses-permission</span><span class="pln"> </span><span class="atn">android:name</span><span class="pun">=</span><span class="atv">"android.permission.WRITE_EXTERNAL_STORAGE"</span><span class="tag">/&gt;</span><span class="pln">
</span></code></pre>
<p><strong>Step 4</strong>: In the Android Studio window, choose <strong>File</strong> &gt; <strong>Sync Project with Gradle Files</strong> to synchronize the project.</p>
<p><strong>Step 5</strong>: Complete the essentials in code; locate and open the <strong>MainActivityPresenter.kt</strong>.</p>
