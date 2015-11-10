<%--
  Created by IntelliJ IDEA.
  User: yangzhao.lyz
  Date: 15/11/10
  Time: 10:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>ZtechTree</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }
        ul{
            list-style: none;
        }
    </style>
</head>
<body>
<script src="../js/jquery-2.1.4.min.js"></script>
<script src="../js/lib.js"></script>
<script src="../js/main.js"></script>
<style scoped>
    #MainTable{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    button{
        -webkit-box-sizing: border-box;
        border: black 4px solid;
    }
</style>
<script>
    var main=new Main();
</script>
<table id="MainTable" cellpadding="0" cellspacing="0">
    <tr>
        <td style="width: 360px;vertical-align:top;background-color: aqua">
            <style scoped>
                li{
                    text-align: center;
                }
            </style>
            <ul>
                <li><button>1</button></li>
                <li><button>2</button></li>
                <li><button>3</button></li>
            </ul>
        </td>
        <td style="background-color: beige">

        </td>
    </tr>
</table>
</body>
</html>
