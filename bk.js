<html>
<head>
    <title>url log</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="urlsection">
        <input type="text" placeholder="https://example.com" id="url">
        <button onclick="addurl()" id="myBtn">+</button>
        <button id="myBtn1" onclick="deletemultipleurl(selectcheckbox(`tickurl`))">X</button>
        <ul id="list"></ul>
    </div>
    <script src="url.js"></script>
</body>
</html>