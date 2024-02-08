<?php

    get_header();

?>
<div class="container">
    <div>
        <div class="mt-title">
            <h1>海外FX業者リアルタイムスプレッド比較</h1>
            <h2>複数業者・複数通貨ペアを比較するグラフです。4業者・4通貨ペアまで比較可能です。</h2>
        </div>
    </div>

    <div class="select-container">
        <select id="currencyDropdown" onchange="showDropdownMultiple()">
            <option disabled selected value="nothing">通貨ペアを選択</option>
            <option value="USDJPY">USDJPY</option>
            <option value="EURJPY">EURJPY</option>
            <option value="GBPJPY">GBPJPY</option>
            <option value="AUDJPY">AUDJPY</option>
            <option value="NZDJPY">NZDJPY</option>
            <option value="EURUSD">EURUSD</option>
            <option value="GBPUSD">GBPUSD</option>
            <option value="AUDUSD">AUDUSD</option>
            <option value="AUDNZD">AUDNZD</option>
            <option value="XAUUSD">XAUUSD</option>
        </select>
    </div>

    <div id="broker_name" class="broker_name">
        <p>業者を選択（4つまで選択可能）</p>
        <div class="broker">
            <button id="brokerbutton1" class="brokerbutton">a</button>
            <button id="brokerbutton2" class="brokerbutton">b</button>
        </div>
        <div class="broker">
            <button id="brokerbutton3" class="brokerbutton">c</button>
            <button id="brokerbutton4" class="brokerbutton">d</button>
        </div>
        <div class="broker">
            <button id="brokerbutton5" class="brokerbutton">e</button>
            <button id="brokerbutton6" class="brokerbutton">f</button>
        </div>
        <div class="broker">
            <button id="brokerbutton7" class="brokerbutton">g</button>
            <button id="brokerbutton8" class="brokerbutton">h</button>
        </div>
        <div class="broker">
            <button id="brokerbutton9" class="brokerbutton">i</button>
            <button id="brokerbutton10" class="brokerbutton">j</button>
        </div>
        <div class="broker">
            <button id="brokerbutton11" class="brokerbutton">k</button>
            <button id="brokerbutton12" class="brokerbutton">l</button>
        </div>
    </div>
    <div id="brokers" class="brokers" style="height: 400px; width: 500px"></div>
    <button onclick="removeLine(0)">Remove Line</button>
    <button onclick="removeLine(1)">Remove Line</button>
    <!-- <canvas id="container" style="width:100%;max-width:700px"></canvas> -->
    <div id="broker1" class="broker1" style="height: 400px; width: 500px"></div>

</div>
<?php

    get_footer();

?>