<!DOCTYPE html>
<html>

<head>
    <meta charset=utf-8>
    <meta name=viewport content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1">
    <title>人生900格</title>
</head>
<style type="text/css">
.divpass {
    width: 12px;
    height: 12px;
    border: solid #000;
    border-width: 0px 1px 1px 0px;
    float: left;
    background: #bdbdbd;
}

.divleft {
    width: 12px;
    height: 12px;
    border: solid #000;
    border-width: 0px 1px 1px 0px;
    float: left;
    background: #72d572;
}

.divId {
    width: 12px;
    height: 12px;
    border: solid #000;
    border-width: 0px 1px 1px 0px;
    float: left;
    background: #a7ffeb;
}

.divbody {
    border: solid #000;
    border-width: 1px 0px 0px 1px;
    float: left;
}

body {
    margin: 16px;
    font-size: 10px;
    text-align: center;
}
</style>

<body>
    <div class="divbody">
        <script>
        var year = {{year}};
        var month = {{month}};
        var myDate = new Date();
        var currentMonth = myDate.getMonth();
        var currentYear = myDate.getFullYear();

        var lostYear = currentYear - year - 1;
        var lostMonth = lostYear * 12 + currentMonth - month + 1;

        var line = '<div class="divId">1</div>';
        for (var i = 0; i < 960; i++) {
            if (i % 24 == 0 && i > 0) {

                line += '<br/><div class="divId">' + (i / 12 + 1) + '</div>';
            } else if (i % 12 == 0 && i > 0) {
                line += '<div class="divId">' + (i / 12 + 1) + '</div>';
            }

            if (i < lostMonth) {
                line += '<div class="divpass">*</div>';
            } else {
                line += '<div class="divleft"></div>';
            }
        }
        document.write(line);
        </script>
    </div>
</body>

</html>