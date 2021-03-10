(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{669:function(t,e,a){"use strict";a.r(e);var o=a(0),c=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cw2-spec-contract-info-for-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cw2-spec-contract-info-for-migration"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/tree/master/packages/cw2",target:"_blank",rel:"noopener noreferrer"}},[t._v("CW2 Spec"),a("OutboundLink")],1),t._v(": Contract Info for Migration")]),t._v(" "),a("p",[t._v("Most of the CW* specs are focused on the "),a("em",[t._v("public interfaces")]),t._v("\nof the contract. The APIs used for "),a("code",[t._v("HandleMsg")]),t._v(" or "),a("code",[t._v("QueryMsg")]),t._v(".\nHowever, when we wish to migrate from contract A to contract B,\ncontract B needs to be aware somehow of how the "),a("em",[t._v("state was encoded")]),t._v(".")]),t._v(" "),a("p",[t._v("Generally we use Singletons and Buckets to store the state, but\nif I upgrade to a "),a("code",[t._v("cw20-with-bonding-curve")]),t._v(" contract, it will only\nwork properly if I am migrating from a "),a("code",[t._v("cw20-base")]),t._v(" contract. But how\ncan the new contract know what format the data was stored.")]),t._v(" "),a("p",[t._v("This is where CW2 comes in. It specifies on special Singleton to\nbe stored on disk by all contracts on "),a("code",[t._v("init")]),t._v(". When the "),a("code",[t._v("migrate")]),t._v("\nfunction is called, then the new contract can read that data and\nsee if this is an expected contract we can migrate from. And also\ncontain extra version information if we support multiple migrate\npaths.")]),t._v(" "),a("h3",{attrs:{id:"data-structures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-structures"}},[t._v("#")]),t._v(" Data structures")]),t._v(" "),a("p",[a("strong",[t._v("Required")])]),t._v(" "),a("p",[t._v("All CW2-compliant contracts must store the following data:")]),t._v(" "),a("ul",[a("li",[t._v("key: "),a("code",[t._v("\\x00\\x0dcontract_info")]),t._v(' (length prefixed "contract_info" using Singleton pattern)')]),t._v(" "),a("li",[t._v("data: Json-serialized "),a("code",[t._v("ContractVersion")])])]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"cHViIHN0cnVjdCBDb250cmFjdFZlcnNpb24gewogICAgLy8vIGNvbnRyYWN0IGlzIGEgZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBjb250cmFjdC4KICAgIC8vLyBpdCBzaG91bGQgYnVpbGQgb2ZmIHN0YW5kYXJkIG5hbWVzcGFjaW5nIGZvciB3aGljaGV2ZXIgbGFuZ3VhZ2UgaXQgaXMgaW4sCiAgICAvLy8gYW5kIHByZWZpeCBpdCB3aXRoIHRoZSByZWdpc3RyeSB3ZSB1c2UuIAogICAgLy8vIEZvciBydXN0IHdlIHByZWZpeCB3aXRoIGBjcmF0ZXMuaW86YCwgdG8gZ2l2ZSB1cyBlZy4gYGNyYXRlcy5pbzpjdzIwLWJhc2VgCiAgICBwdWIgY29udHJhY3Q6IFN0cmluZywKICAgIC8vLyB2ZXJzaW9uIGlzIGFueSBzdHJpbmcgdGhhdCB0aGlzIGltcGxlbWVudGF0aW9uIGtub3dzLiBJdCBtYXkgYmUgc2ltcGxlIGNvdW50ZXIgJnF1b3Q7MSZxdW90OywgJnF1b3Q7MiZxdW90Oy4KICAgIC8vLyBvciBzZW1hbnRpYyB2ZXJzaW9uIG9uIHJlbGVhc2UgdGFncyAmcXVvdDt2MC42LjImcXVvdDssIG9yIHNvbWUgY3VzdG9tIGZlYXR1cmUgZmxhZyBsaXN0LgogICAgLy8vIHRoZSBvbmx5IGNvZGUgdGhhdCBuZWVkcyB0byB1bmRlcnN0YW5kIHRoZSB2ZXJzaW9uIHBhcnNpbmcgaXMgY29kZSB0aGF0IGtub3dzIGhvdyB0bwogICAgLy8vIG1pZ3JhdGUgZnJvbSB0aGUgZ2l2ZW4gY29udHJhY3QgKGFuZCBpcyB0aWVkIHRvIGl0J3MgaW1wbGVtZW50YXRpb24gc29tZWhvdykKICAgIHB1YiB2ZXJzaW9uOiBTdHJpbmcsCn0K"}}),t._v(" "),a("p",[t._v("Thus, an serialized example may looks like:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7Y29udHJhY3QmcXVvdDs6ICZxdW90O2NyYXRlcy5pbzpjdzIwLWJhc2UmcXVvdDssCiAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDt2MC4xLjAmcXVvdDsKfQo="}}),t._v(" "),a("h3",{attrs:{id:"queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[t._v("#")]),t._v(" Queries")]),t._v(" "),a("p",[t._v('Since the state is well defined, we do not need to support any "smart queries".\nWe do provide a helper to construct a "raw query" to read the ContractInfo\nof any CW2-compliant contract.')])],1)}),[],!1,null,null,null);e.default=c.exports}}]);