(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{652:function(t,a,e){"use strict";e.r(a);var n=e(0),c=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"sending-cw20-tokens"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sending-cw20-tokens"}},[t._v("#")]),t._v(" Sending CW20 Tokens")]),t._v(" "),e("p",[t._v("Now that you have set up your client, let's get going and try out the\n"),e("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-base",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("cw20-base")]),e("OutboundLink")],1),t._v("\ntoken contract, which implements the\n"),e("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/blob/master/packages/cw20/README.md",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("cw20")]),t._v(" spec"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("We will show how to upload the compiled wasm code, instantiate your own contract (possibly\nreusing code), and then mint and transfer tokens on that contract.")]),t._v(" "),e("h2",{attrs:{id:"upload-and-instantiate-a-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upload-and-instantiate-a-contract"}},[t._v("#")]),t._v(" Upload and Instantiate a Contract")]),t._v(" "),e("p",[t._v("I will walk you though how to set up an example CW20 contract on CoralNet.")]),t._v(" "),e("h3",{attrs:{id:"example-star"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-star"}},[t._v("#")]),t._v(" Example: STAR")]),t._v(" "),e("p",[t._v('The first contract I uploaded was STAR tokens, or "Golden Stars" to be distribute to the\n'),e("a",{attrs:{href:"https://bigdipper.coralnet.cosmwasm.com/validators",target:"_blank",rel:"noopener noreferrer"}},[t._v("first 7 validators"),e("OutboundLink")],1),t._v(" on the network.")]),t._v(" "),e("p",[t._v("Please do not copy this verbatum, but look to see how such a contract is setup and deployed the first time.")]),t._v(" "),e("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgY2xpZW50ID0gYXdhaXQgdXNlT3B0aW9ucyhjb3JhbG5ldE9wdGlvbnMpLnNldHVwKFlPVVJfUEFTU1dPUkRfSEVSRSk7Cgpjb25zdCBjdzIwID0gQ1cyMChjbGllbnQpOwpjb25zdCBjb2RlSWQgPSBhd2FpdCBjdzIwLnVwbG9hZCgpOwpjb25zb2xlLmxvZyhgQ29kZUlkOiAke2NvZGVJZH1gKTsKLy8gb3V0cHV0OiA0CgovLyBlbmFibGUgUkVQTCBlZGl0b3IgbW9kZSB0byBlZGl0IG11bHRpbGluZSBjb2RlIHRoZW4gZXhlY3V0ZQouZWRpdG9yCmNvbnN0IGluaXRNc2c6IEluaXRNc2cgPSB7CiAgbmFtZTogJnF1b3Q7R29sZGVuIFN0YXJzJnF1b3Q7LAogIHN5bWJvbDogJnF1b3Q7U1RBUiZxdW90OywKICBkZWNpbWFsczogMiwKICAvLyBsaXN0IG9mIGFsbCB2YWxpZGF0b3Igc2VsZi1kZWxlZ2F0ZSBhZGRyZXNzZXMgLSAxMDAgU1RBUnMgZWFjaCEKICBpbml0aWFsX2JhbGFuY2VzOiBbCiAgICB7IGFkZHJlc3M6ICZxdW90O2NvcmFsMWV4dGE4aHpyZ2h5dDV1bWQ0amg1NWtma21wMHR2M2h5ZzhrcmM1JnF1b3Q7LCBhbW91bnQ6ICZxdW90OzEwMDAwJnF1b3Q7fSwKICAgIHsgYWRkcmVzczogJnF1b3Q7Y29yYWwxM21jZWp1dDhlNXRuY3M1OXpjczR5bjRlbnZjZDk4dng2ODJmcmsmcXVvdDssIGFtb3VudDogJnF1b3Q7MTAwMDAmcXVvdDt9LAogICAgeyBhZGRyZXNzOiAmcXVvdDtjb3JhbDEwem4wZDJlZXVzdDA0OTVjcnRyM3pxejd0Njg4aGcwczUzYWZyaCZxdW90OywgYW1vdW50OiAmcXVvdDsxMDAwMCZxdW90O30sCiAgICB7IGFkZHJlc3M6ICZxdW90O2NvcmFsMXF2cmNhc2hxcGVtbGtocnFwaHp2OW41bnV0ZHhwYWZtZGVmZ2NsJnF1b3Q7LCBhbW91bnQ6ICZxdW90OzEwMDAwJnF1b3Q7fSwKICAgIHsgYWRkcmVzczogJnF1b3Q7Y29yYWwxNGY4bnZ5eTRjOXB5bjc4ZGd2MGs2c3llazNqampya3l6NzQ3a2omcXVvdDssIGFtb3VudDogJnF1b3Q7MTAwMDAmcXVvdDt9LAogICAgeyBhZGRyZXNzOiAmcXVvdDtjb3JhbDFlODZ2Nzc0ZGNoNXV3a2tzMGNlcHc4bWR6OGE5ZmxoaGFwdmY2dyZxdW90OywgYW1vdW50OiAmcXVvdDsxMDAwMCZxdW90O30sCiAgICB7IGFkZHJlc3M6ICZxdW90O2NvcmFsMWhmNTB0cmo3cGx6MnNkOGNtY3ZuN2M4cnVoM3RqaGMybmh5bDdsJnF1b3Q7LCBhbW91bnQ6ICZxdW90OzEwMDAwJnF1b3Q7fSwKICBdLAogIG1pbnQ6IHsKICAgIG1pbnRlcjogY2xpZW50LnNlbmRlckFkZHJlc3MsCiAgfSwKfTsKLy8gZXhpdCBlZGl0b3IgdXNpbmcgYF5EYCBhbmQgZXhlY3V0ZSBlbnRlcmVkIGNvZGUKXkQKCmNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY3cyMC5pbnN0YW50aWF0ZShjb2RlSWQsIGluaXRNc2csICZxdW90O1NUQVImcXVvdDspOwpjb25zb2xlLmxvZyhgQ29udHJhY3Q6ICR7Y29udHJhY3QuY29udHJhY3RBZGRyZXNzfWApOwovLyBDb250cmFjdDogY29yYWwxNnQ3eTB2cnRwcWp3MmQ3anZjMjIwOXlhbjkwMDIzMzltZzRtcnYKCmNvbnNvbGUubG9nKGF3YWl0IGNvbnRyYWN0LmJhbGFuY2UoJnF1b3Q7Y29yYWwxM21jZWp1dDhlNXRuY3M1OXpjczR5bjRlbnZjZDk4dng2ODJmcmsmcXVvdDspKTsKLy8gMTAwMDAKY29uc29sZS5sb2coYXdhaXQgY29udHJhY3QuYmFsYW5jZSgpKTsKLy8gMAo="}}),t._v(" "),e("p",[t._v("If you want to see this is real, just check out\n"),e("a",{attrs:{href:"https://coralnet.wasm.glass/#/codes/4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code ID 4"),e("OutboundLink")],1),t._v("\nand "),e("a",{attrs:{href:"https://coralnet.wasm.glass/#/contracts/coral16t7y0vrtpqjw2d7jvc2209yan9002339mg4mrv",target:"_blank",rel:"noopener noreferrer"}},[t._v("contract "),e("code",[t._v("coral16t7y0vrtpqjw2d7jvc2209yan9002339mg4mrv")]),e("OutboundLink")],1),t._v("\non the wasm.glass code explorer.")]),t._v(" "),e("h3",{attrs:{id:"try-this-at-home-mine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#try-this-at-home-mine"}},[t._v("#")]),t._v(" Try this at home: MINE")]),t._v(" "),e("p",[t._v("Now that we have that uploaded, we can easily make a second contract. This one, please\ndo run through and customize the field names and token amounts before entering them.")]),t._v(" "),e("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgY2xpZW50ID0gYXdhaXQgdXNlT3B0aW9ucyhjb3JhbG5ldE9wdGlvbnMpLnNldHVwKFlPVVJfUEFTU1dPUkRfSEVSRSk7CmNvbnN0IGFkZHJlc3MgPSBjbGllbnQuc2VuZGVyQWRkcmVzczsKCmNvbnN0IGN3MjAgPSBDVzIwKGNsaWVudCk7CgouZWRpdG9yCmNvbnN0IGluaXRNc2c6IEluaXRNc2cgPSB7CiAgbmFtZTogJnF1b3Q7TXkgQ29pbiZxdW90OywKICBzeW1ib2w6ICZxdW90O01JTkUmcXVvdDssCiAgZGVjaW1hbHM6IDYsCiAgLy8gbGlzdCBvZiBhbGwgdmFsaWRhdG9yIHNlbGYtZGVsZWdhdGUgYWRkcmVzc2VzIC0gMTAwIFNUQVJzIGVhY2ghCiAgaW5pdGlhbF9iYWxhbmNlczogWwogICAgeyBhZGRyZXNzLCBhbW91bnQ6ICZxdW90OzEyMzQ1Njc4MDAwJnF1b3Q7fSwKICBdLAogIG1pbnQ6IHsKICAgIG1pbnRlcjogYWRkcmVzcywKICAgIGNhcDogJnF1b3Q7OTk5MDAwMDAwMDAmcXVvdDsKICB9LAp9OwpeRAoKY29uc3QgY29kZUlkID0gNDsKY29uc3QgbWluZSA9IGF3YWl0IGN3MjAuaW5zdGFudGlhdGUoY29kZUlkLCBpbml0TXNnLCAmcXVvdDtNSU5FJnF1b3Q7KTsKY29uc29sZS5sb2coYENvbnRyYWN0OiAke21pbmUuY29udHJhY3RBZGRyZXNzfWApOwovLyBDb250cmFjdDogY29yYWwxM25rZ3FyZnltdWc3MjRoOHBwcnBleHFqOWg2MjlzYTN5emNxZmsKCi8vIG5vdywgY2hlY2sgdGhlIGNvbmZpZ3VyYXRpb24KbWluZS5iYWxhbmNlKCk7Cm1pbmUudG9rZW5JbmZvKCkKbWluZS5taW50ZXIoKQo="}}),t._v(" "),e("p",[t._v("Look, you're rich now! Time to share the wealth.")]),t._v(" "),e("h2",{attrs:{id:"using-a-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-a-contract"}},[t._v("#")]),t._v(" Using a contract")]),t._v(" "),e("p",[t._v("In this section, we will show you how to use your newly constructed token.\nYou can keep typing along in the same REPL that you used to create the "),e("code",[t._v("MINE")]),t._v("\ntokens (or whatever better name you invented), but if you closed it down and\ncome back, here's how to re-connect:")]),t._v(" "),e("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgY2xpZW50ID0gYXdhaXQgdXNlT3B0aW9ucyhjb3JhbG5ldE9wdGlvbnMpLnNldHVwKFlPVVJfUEFTU1dPUkRfSEVSRSk7CmNvbnN0IGN3MjAgPSBDVzIwKGNsaWVudCk7CgovLyBpZiB5b3UgZm9yZ290IHlvdXIgYWRkcmVzcywgYnV0IHJlbWVtYmVyIHlvdXIgbGFiZWwsIHlvdSBjYW4gZmluZCBpdCBhZ2Fpbgpjb25zdCBjb250cmFjdHMgPSBhd2FpdCBjbGllbnQuZ2V0Q29udHJhY3RzKDQpCmNvbnRyYWN0cwpjb25zdCBjb250cmFjdEFkZHJlc3MgPSBjb250cmFjdHMuZmlsdGVyKHggPSZndDsgeC5sYWJlbCA9PT0gJ01JTkUnKVswXS5hZGRyZXNzOwoKLy8gb3RoZXJ3aXNlLCB5b3UgY2FuIGp1c3QgY3V0IGFuZCBwYXN0ZSBmcm9tIGJlZm9yZQpjb25zdCBjb250cmFjdEFkZHJlc3MgPSAmcXVvdDtjb3JhbDEzbmtncXJmeW11ZzcyNGg4cHBycGV4cWo5aDYyOXNhM3l6Y3FmayZxdW90OwoKLy8gbm93LCBjb25uZWN0IHRvIHRoYXQgY29udHJhY3QgYW5kIG1ha2Ugc3VyZSBpdCBpcyB5b3Vycwpjb25zdCBtaW5lID0gY3cyMC51c2UoY29udHJhY3RBZGRyZXNzKTsKbWluZS50b2tlbkluZm8oKQptaW5lLm1pbnRlcigpCm1pbmUuYmFsYW5jZSgpCg=="}}),t._v(" "),e("p",[t._v("Okay, you are connected to your contract. Let's see what cw20 is capable of.\nHere I will show you how you can mint tokens (you did give yourself\nthat special permission on init, right?) and transfer tokens to other\nusers.")]),t._v(" "),e("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3Qgc29tZW9uZSA9ICZxdW90O2NvcmFsMWh6bGxuYWY5dGV6djU3OHAzeXNtbWw2ajAweXNkYWM0eHdseTl3JnF1b3Q7Owpjb25zdCBvdGhlciA9ICZxdW90O2NvcmFsMWR5dWFsMDRxOW0zZjBhN3FzdmZ4NGh2dThjZXlyeHc5eWxkcDh3JnF1b3Q7OwoKLy8gcmlnaHQgbm93LCBvbmx5IHlvdSBoYXZlIHRva2VucwptaW5lLmJhbGFuY2UoKQptaW5lLmJhbGFuY2Uoc29tZW9uZSkKbWluZS5iYWxhbmNlKG90aGVyKQovLyBhbmQgd2F0Y2ggdGhlIHRvdGFsCm1pbmUudG9rZW5JbmZvKCkKCi8vIGxldCdzIG1pbnQgc29tZSB0b2tlbnMgZm9yIHNvbWVvbmUKbWluZS5taW50KHNvbWVvbmUsICZxdW90Ozk5OTg4ODAwMCZxdW90OykKLy8gQm9udXMsIHRha2UgdGhlIHR4IGhhc2ggcHJpbnRlZCBvdXQgYW5kIGN1dC1wYXN0ZSB0aGF0IGludG8gaHR0cHM6Ly9iaWdkaXBwZXIuY29yYWxuZXQuY29zbXdhc20uY29tCi8vIGVnIDI2RDU1MTRDRjQzN0VFNTg0NzkzNzY4QjU2Q0I0RTYwNUYxRjZFNjFGQzAxMjMwMzBEQzY0RTA4RTJFRTk3RkEKCi8vIFNlZSBiYWxhbmNlcyB1cGRhdGVkCm1pbmUuYmFsYW5jZShzb21lb25lKQptaW5lLmJhbGFuY2UoKQovLyBhbmQgdGhlIHN1cHBseSBnb2VzIHVwCm1pbmUudG9rZW5JbmZvKCkKCi8vIE9rYXksIG5vdyBsZXQncyB0cmFuc2ZlciBzb21lIHRva2Vucy4uLiB0aGF0IGlzIHRoZSBtb3JlIG5vcm1hbCBvbmUsIHJpZ2h0PwptaW5lLnRyYW5zZmVyKG90aGVyLCAmcXVvdDs0NTY3MDAwJnF1b3Q7KTsKLy8gZWcuIDRBNzZFRkZFQjA5QzgyRDBGRUI5N0MzQjVBOUQ1QkFEQjZFOUJENzFGNEVGMjQ4QTNFRjhCMjMyQzJGNzI2MkEKbWluZS5iYWxhbmNlKG90aGVyKQptaW5lLmJhbGFuY2UoKQo="}}),t._v(" "),e("p",[t._v("Great, you are moving stuff around and see it in your queries and in the block explorer.\nTime to act like a pro.")])],1)}),[],!1,null,null,null);a.default=c.exports}}]);