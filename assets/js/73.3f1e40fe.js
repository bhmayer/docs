(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{648:function(t,e,a){"use strict";a.r(e);var o=a(0),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("In this section we will explain how to join testnets, where to find testnet configurations and some scripts to demonstrate make the process faster.")]),t._v(" "),a("h1",{attrs:{id:"select-your-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-your-network"}},[t._v("#")]),t._v(" Select Your Network")]),t._v(" "),a("p",[t._v("You can find active and in-active testnet information such as configs and endpoints on "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmWasm/testnets"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h1",{attrs:{id:"connect-your-validator-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-your-validator-node"}},[t._v("#")]),t._v(" Connect Your Validator/Node")]),t._v(" "),a("p",[t._v("Let's start rolling your node and start producing blocks in live testnet environment.")]),t._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("p",[t._v("First of all make sure you followed the installation steps in "),a("RouterLink",{attrs:{to:"/testnets/build-requirements.html"}},[t._v("build requirements section")]),t._v(". You should have the required binaries. If you just want to copy and execute the scripts below, make sure to set up environment variables:")],1),t._v(" "),a("p",[t._v("Below is the "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets/blob/master/demo-09/config",target:"_blank",rel:"noopener noreferrer"}},[t._v("demonet configuration"),a("OutboundLink")],1),t._v(".\nYou can find the other networks configurations at "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmWasm/testnets"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ZXhwb3J0IENIQUlOX0lEPXRlc3RpbmcKZXhwb3J0IFRFU1RORVRfTkFNRT1kZW1vLTA5CmV4cG9ydCBSUEM9aHR0cHM6Ly9ycGMuZGVtby0wOS5jb3Ntd2FzbS5jb206NDQzCmV4cG9ydCBGQVVDRVQ9aHR0cHM6Ly9mYXVjZXQuZGVtby0wOS5jb3Ntd2FzbS5jb20KZXhwb3J0IFNFRURfTk9ERT0yNmM5Yzc5ZGM2MmI1ZGRjNzUzYmI5ZmNjZTAyMmZjYzk4YjVhOGNmQHAycC5kZW1vLTA5LmNvc213YXNtLmNvbToyNjY1Ngo="}}),t._v(" "),a("p",[t._v("Also install "),a("code",[t._v("jq")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"initialize-your-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize-your-wallet"}},[t._v("#")]),t._v(" Initialize your wallet")]),t._v(" "),a("p",[t._v("Initialize "),a("code",[t._v("wasmcli")]),t._v(" and generate validator account:")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"d2FzbWNsaSBjb25maWcgY2hhaW4taWQgJENIQUlOX0lECndhc21jbGkgY29uZmlnIHRydXN0LW5vZGUgdHJ1ZQp3YXNtY2xpIGNvbmZpZyBub2RlICRSUEMKd2FzbWNsaSBjb25maWcgb3V0cHV0IGpzb24Kd2FzbWNsaSBjb25maWcgaW5kZW50IHRydWUKIyB0aGlzIGlzIGltcG9ydGFudCwgc28gdGhlIGNsaSByZXR1cm5zIGFmdGVyIHRoZSB0eCBpcyBpbiBhIGJsb2NrLAojIGFuZCBzdWJzZXF1ZW50IHF1ZXJpZXMgcmV0dXJuIHRoZSBwcm9wZXIgcmVzdWx0cwp3YXNtY2xpIGNvbmZpZyBicm9hZGNhc3QtbW9kZSBibG9jawoKIyBjaGVjayB5b3UgY2FuIGNvbm5lY3QKd2FzbWNsaSBxdWVyeSBzdXBwbHkgdG90YWwKd2FzbWNsaSBxdWVyeSBzdGFraW5nIHZhbGlkYXRvcnMKd2FzbWNsaSBxdWVyeSB3YXNtIGxpc3QtY29kZQoKIyBjcmVhdGUgd2FsbGV0Cndhc21jbGkga2V5cyBhZGQgbXl3YWxsZXQK"}}),t._v(" "),a("p",[t._v("In order to join the network as validator, you need some staking tokens. We have a faucet running for that.")]),t._v(" "),a("p",[t._v("Request some tokens from faucet:")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"SlNPTj0kKGpxIC1uIC0tYXJnIGFkZHIgJCh3YXNtY2xpIGtleXMgc2hvdyAtYSBteXdhbGxldCkgJ3smcXVvdDt0aWNrZXImcXVvdDs6JnF1b3Q7Q09TTSZxdW90OywmcXVvdDthZGRyZXNzJnF1b3Q7OiRhZGRyfScpCmN1cmwgLVggUE9TVCAtLWhlYWRlciAmcXVvdDtDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24mcXVvdDsgLS1kYXRhICZxdW90OyRKU09OJnF1b3Q7IGh0dHBzOi8vJEZBVUNFVC9jcmVkaXQKCkpTT049JChqcSAtbiAtLWFyZyBhZGRyICQod2FzbWNsaSBrZXlzIHNob3cgLWEgbXl3YWxsZXQpICd7JnF1b3Q7dGlja2VyJnF1b3Q7OiZxdW90O1NUQUtFJnF1b3Q7LCZxdW90O2FkZHJlc3MmcXVvdDs6JGFkZHJ9JykKY3VybCAtWCBQT1NUIC0taGVhZGVyICZxdW90O0NvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbiZxdW90OyAtLWRhdGEgJnF1b3Q7JEpTT04mcXVvdDsgaHR0cHM6Ly8kRkFVQ0VUL2NyZWRpdAo="}}),t._v(" "),a("h2",{attrs:{id:"run-wasmd-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-wasmd-node"}},[t._v("#")]),t._v(" Run wasmd node")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ZXhwb3J0IE1PTklLRVI9bmV3X3ZhbGlkYXRvcgojIGluaXRpYWxpemUgd2FzbWQgY29uZmlndXJhdGlvbgp3YXNtZCBpbml0ICRNT05JS0VSCiMgZ2V0IHRoZSB0ZXN0bmV0cyBnZW5lc2lzIGZpbGUKY3VybCAkUlBDL2dlbmVzaXMgfCBqcSAucmVzdWx0LmdlbmVzaXMgJmd0OyB+Ly53YXNtZC9jb25maWcvZ2VuZXNpcy5qc29uCiMgWW91IG5lZWQgdG8gY29uZmlndXJlIHAycCBzZWVkcwojIEVpdGhlciB5b3UgY2FuIGluc2VydCB0aGUgc2VlZCBhZGRyZXNzZXMgaW4gJEhPTUVESVIvLndhc21kL2NvbmZpZy9jb25maWcudG9tbCB0byAmcXVvdDtzZWVkcyZxdW90OwojIEZvciBzaW1wbGljaXR5IHdlIHdpbGwgcGFzcyB0aGUgc2VlZCBJRCBhbmQgZG9tYWluIGFzIGFyZ3VtZW50CiMgWW91IGNhbiBnZXQgdGhlIHNlZWQgaXQgdXNpbmcgY29tbWFuZDoKIyMgU3RhcnQgd2FzbWQKd2FzbWQgc3RhcnQgLS1wMnAuc2VlZHMgJFNFRURfTk9ERQo="}}),t._v(" "),a("p",[t._v("Now you should be seeing blocks being replayed and your node is catching up with the testnet. This could take a while.")]),t._v(" "),a("h2",{attrs:{id:"become-an-active-validator-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#become-an-active-validator-optional"}},[t._v("#")]),t._v(" Become an active validator(optional)")]),t._v(" "),a("p",[t._v("If you want to participate in active block building, you need some coins staked to your validators address. If you are interested in validator tech stack, "),a("a",{attrs:{href:"https://kb.certus.one/",target:"_blank",rel:"noopener noreferrer"}},[t._v("certus one blog"),a("OutboundLink")],1),t._v(" is a good resource to begin with.")]),t._v(" "),a("p",[t._v("**Note: make sure your validator is synced before upgrading to validator")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"d2FzbWNsaSB0eCBzdGFraW5nIGNyZWF0ZS12YWxpZGF0b3IgXAogIC0tYW1vdW50PTEwMDAwMDB1c3Rha2UgXAogIC0tcHVia2V5PSQod2FzbWQgdGVuZGVybWludCBzaG93LXZhbGlkYXRvcikgXAogIC0tbW9uaWtlcj0kTU9OSUtFUiBcCiAgLS1jaGFpbi1pZD10ZXN0aW5nIFwKICAtLWNvbW1pc3Npb24tcmF0ZT0mcXVvdDswLjEwJnF1b3Q7IFwKICAtLWNvbW1pc3Npb24tbWF4LXJhdGU9JnF1b3Q7MC4yMCZxdW90OyBcCiAgLS1jb21taXNzaW9uLW1heC1jaGFuZ2UtcmF0ZT0mcXVvdDswLjAxJnF1b3Q7IFwKICAtLW1pbi1zZWxmLWRlbGVnYXRpb249JnF1b3Q7MSZxdW90OyBcCiAgLS1nYXM9JnF1b3Q7YXV0byZxdW90OyBcCiAgLS1nYXMtYWRqdXN0bWVudD0mcXVvdDsxLjEmcXVvdDsgXAogIC0tZnJvbT1teXdhbGxldAo="}}),t._v(" "),a("h2",{attrs:{id:"run-the-light-client-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-light-client-daemon"}},[t._v("#")]),t._v(" Run the Light Client Daemon")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"d2FzbWNsaSByZXN0LXNlcnZlcgojIGlmIHRoZSBub2RlIGlzIHJ1bm5pbmcgb24gYW5vdGhlciBtYWNoaW5lIHVzZToKd2FzbWNsaSByZXN0LXNlcnZlciAtLW5vZGUgdGNwOi8vJmx0O2hvc3QmZ3Q7OiZsdDtwb3J0Jmd0Owo="}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);