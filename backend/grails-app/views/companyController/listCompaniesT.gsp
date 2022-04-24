<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <title>List of Companies</title>
    <asset:stylesheet src="listCompanies.css"/>
</head>
<body>
    <table class="customTable">
        <tr>
            <th><b>Nome</b></th>
            <th><b>Segmento</b></th>
        </tr>
        <g:each var="item" in="${ companies }">
            <tr>
                <td>${item.name} </td>
                <td>${item.segment} </td>
            </tr>
        </g:each>
    </table>
</body>
</html>