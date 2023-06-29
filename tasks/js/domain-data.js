document.querySelector("select").addEventListener('change', function (e){
    setData(e.target.value)
})

let map = new Map()
setYandexDomainMap()
setGoogleDomainMap()
setNgsDomainMap()

function setYandexDomainMap(){
    let yandexDomainMap = new Map()
    yandexDomainMap.set("YANDEX.RU", "domain:")
    yandexDomainMap.set("ns1.yandex.ru. 213.180.193.1, 2a02:6b8::1", "nserver:")
    yandexDomainMap.set("ns2.yandex.ru. 93.158.134.1, 2a02:6b8:0:1::1", "nserver:")
    yandexDomainMap.set("ns9.z5h64q92x9.net", "nserver:")
    yandexDomainMap.set("REGISTERED, DELEGATED", "state:")
    yandexDomainMap.set("https://www.nic.ru/whois/send-message/?domain=yandex.ru", "admin-contact:")
    yandexDomainMap.set("YANDEX, LLC.", "org:")
    yandexDomainMap.set("RU-CENTER-RU", "registrar:")
    yandexDomainMap.set("1997.09.23", "created:")
    yandexDomainMap.set("2023.10.01", "paid-till:")
    yandexDomainMap.set("RU-CENTER", "source:")

    map.set("yandex.ru", yandexDomainMap)
}

function setGoogleDomainMap(){
    let googleDomainMap = new Map()
    googleDomainMap.set("GOOGLE.COM", "Domain Name:")
    googleDomainMap.set("2138514_DOMAIN_COM-VRSN", "Registry Domain ID:")
    googleDomainMap.set("whois.markmonitor.com", "Registrar WHOIS Server:")
    googleDomainMap.set("http://www.markmonitor.com", "Registrar URL:")
    googleDomainMap.set("2019-09-09T15:39:04Z", "Updated Date:")
    googleDomainMap.set("1997-09-15T04:00:00Z", "Creation Date:")
    googleDomainMap.set("2028-09-14T04:00:00Z", "Registry Expiry Date:")
    googleDomainMap.set("MarkMonitor Inc.", "Registrar:")
    googleDomainMap.set("292", "Registrar IANA ID:")
    googleDomainMap.set("abusecomplaints@markmonitor.com", "Registrar Abuse Contact Email:")
    googleDomainMap.set("+1.2086851750", "Registrar Abuse Contact Phone:")
    googleDomainMap.set("clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited", "Domain Status:")
    googleDomainMap.set("clientTransferProhibited https://icann.org/epp#clientTransferProhibited", "Domain Status:")
    googleDomainMap.set("clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited", "Domain Status:")
    googleDomainMap.set("serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited", "Domain Status:")
    googleDomainMap.set("serverTransferProhibited https://icann.org/epp#serverTransferProhibited", "Domain Status:")
    googleDomainMap.set("serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited", "Domain Status:")
    googleDomainMap.set("NS1.GOOGLE.COM", "Name Server:")
    googleDomainMap.set("NS2.GOOGLE.COM", "Name Server:")
    googleDomainMap.set("NS3.GOOGLE.COM", "Name Server:")
    googleDomainMap.set("NS4.GOOGLE.COM", "Name Server:")
    googleDomainMap.set("unsigned", "DNSSEC:")
    googleDomainMap.set("https://www.icann.org/wicf/", "URL of the ICANN Whois Inaccuracy Complaint Form:")

    map.set("google.com", googleDomainMap)
}

function setNgsDomainMap(){
    let ngsDomainMap = new Map()
    ngsDomainMap.set("NGS.RU", "domain:")
    ngsDomainMap.set("ns1.ngs.ru 195.19.220.238", "nserver:")
    ngsDomainMap.set("ns.hsdrn.ru", "nserver:")
    ngsDomainMap.set("REGISTERED, DELEGATED", "state:")
    ngsDomainMap.set("https://www.nic.ru/whois/send-message/?domain=ngs.ru", "admin-contact:")
    ngsDomainMap.set("INTERNET TEHNOLOGII LLC", "org:")
    ngsDomainMap.set("RU-CENTER-RU", "registrar:")
    ngsDomainMap.set("1999.11.05", "created:")
    ngsDomainMap.set("2023.12.01", "paid-till:")
    ngsDomainMap.set("RU-CENTER", "source:")

    map.set("ngs.ru", ngsDomainMap)
}

function setData(value){
    let empty = document.getElementById("none")
    if (empty !== null){
        empty.remove()
    }

    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')

    table.appendChild(thead)
    table.appendChild(tbody)

    let t = document.querySelector('table')
    if (t !== null){
        t.remove()
    }

    document.getElementById('table').appendChild(table)

    let domain = map.get(value)
    domain.forEach((value, key) => {
        let row = document.createElement('tr')
        let heading1 = document.createElement('th')
        heading1.innerHTML = value
        let heading2 = document.createElement('th')
        heading2.innerHTML = key
        row.appendChild(heading1)
        row.appendChild(heading2)
        thead.appendChild(row)
    });
}