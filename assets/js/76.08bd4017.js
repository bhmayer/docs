(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{661:function(c,d,t){"use strict";t.r(d);var a=t(0),l=Object(a.a)({},(function(){var c=this,d=c.$createElement,t=c._self._c||d;return t("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[t("h1",{attrs:{id:"uploading-and-interacting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uploading-and-interacting"}},[c._v("#")]),c._v(" Uploading and Interacting")]),c._v(" "),t("p",[c._v("We have the binary ready. Now it is time to see some wasm action. You can use "),t("a",{attrs:{href:"#go-cli"}},[c._v("Go CLI")]),c._v(" or\n"),t("a",{attrs:{href:"#node-console"}},[c._v("Node Console")]),c._v(" as you wish.")]),c._v(" "),t("h2",{attrs:{id:"go-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-cli"}},[c._v("#")]),c._v(" Go CLI")]),c._v(" "),t("p",[c._v("We generated a wasm binary executable in the previous chapter. Let's put it into use. Now, we will\nupload the code to the blockchain. Afterwards, you can download the bytecode to verify it is proper:")]),c._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"IyBzZWUgaG93IG1hbnkgY29kZXMgd2UgaGF2ZSBub3cKY29yYWwgcXVlcnkgd2FzbSBsaXN0LWNvZGUKCiMgZ2FzIGlzIGh1Z2UgZHVlIHRvIHdhc20gc2l6ZS4uLiBidXQgYXV0by16aXBwaW5nIHJlZHVjZWQgdGhpcyBmcm9tIDEuOE0gdG8gYXJvdW5kIDYwMGsKIyB5b3UgY2FuIHNlZSB0aGUgY29kZSBpbiB0aGUgcmVzdWx0ClJFUz0kKGNvcmFsIHR4IHdhc20gc3RvcmUgY29udHJhY3Qud2FzbSAtLWZyb20gZnJlZCBcCiAgICAtLWdhcy1wcmljZXM9JnF1b3Q7MC4wMjV1c2hlbGwmcXVvdDsgLS1nYXM9JnF1b3Q7YXV0byZxdW90OyAtLWdhcy1hZGp1c3RtZW50PSZxdW90OzEuMiZxdW90OyAteSkKCiMgeW91IGNhbiBhbHNvIGdldCB0aGUgY29kZSB0aGlzIHdheQpDT0RFX0lEPSQoZWNobyAkUkVTIHwganEgLXIgJy5sb2dzWzBdLmV2ZW50c1swXS5hdHRyaWJ1dGVzWy0xXS52YWx1ZScpCgojIG5vIGNvbnRyYWN0cyB5ZXQsIHRoaXMgc2hvdWxkIHJldHVybiBgbnVsbGAKY29yYWwgcXVlcnkgd2FzbSBsaXN0LWNvbnRyYWN0LWJ5LWNvZGUgJENPREVfSUQKCiMgeW91IGNhbiBhbHNvIGRvd25sb2FkIHRoZSB3YXNtIGZyb20gdGhlIGNoYWluIGFuZCBjaGVjayB0aGF0IHRoZSBkaWZmIGJldHdlZW4gdGhlbSBpcyBlbXB0eQpjb3JhbCBxdWVyeSB3YXNtIGNvZGUgJENPREVfSUQgZG93bmxvYWQud2FzbQpkaWZmIGNvbnRyYWN0Lndhc20gZG93bmxvYWQud2FzbQo="}}),c._v(" "),t("h3",{attrs:{id:"instantiating-the-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instantiating-the-contract"}},[c._v("#")]),c._v(" Instantiating the Contract")]),c._v(" "),t("p",[c._v("We can now create an instance of this wasm contract. Here the verifier will fund an escrow, that\nwill allow fred to control payout and upon release, the funds go to bob.")]),c._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"IyBpbnN0YW50aWF0ZSBjb250cmFjdCBhbmQgdmVyaWZ5CklOSVQ9JChqcSAtbiAtLWFyZyBmcmVkICQoY29yYWwga2V5cyBzaG93IC1hIGZyZWQpIC0tYXJnIGJvYiAkKGNvcmFsIGtleXMgc2hvdyAtYSBib2IpICd7JnF1b3Q7YXJiaXRlciZxdW90OzokZnJlZCwmcXVvdDtyZWNpcGllbnQmcXVvdDs6JGJvYn0nKQpjb3JhbCB0eCB3YXNtIGluc3RhbnRpYXRlICRDT0RFX0lEICZxdW90OyRJTklUJnF1b3Q7IFwKICAgIC0tZnJvbSBmcmVkIC0tYW1vdW50PTUwMDAwdXNoZWxsICAtLWxhYmVsICZxdW90O2VzY3JvdyAxJnF1b3Q7IFwKICAgIC0tZ2FzLXByaWNlcz0mcXVvdDswLjAyNXVzaGVsbCZxdW90OyAtLWdhcz0mcXVvdDthdXRvJnF1b3Q7IC0tZ2FzLWFkanVzdG1lbnQ9JnF1b3Q7MS4yJnF1b3Q7IC15CgojIGNoZWNrIHRoZSBjb250cmFjdCBzdGF0ZSAoYW5kIGFjY291bnQgYmFsYW5jZSkKY29yYWwgcXVlcnkgd2FzbSBsaXN0LWNvbnRyYWN0LWJ5LWNvZGUgJENPREVfSUQKQ09OVFJBQ1Q9JChjb3JhbCBxdWVyeSB3YXNtIGxpc3QtY29udHJhY3QtYnktY29kZSAkQ09ERV9JRCB8IGpxIC1yICcuWzBdLmFkZHJlc3MnKQplY2hvICRDT05UUkFDVAoKIyB3ZSBzaG91bGQgc2VlIHRoaXMgY29udHJhY3Qgd2l0aCA1MDAwMHVzaGVsbApjb3JhbCBxdWVyeSB3YXNtIGNvbnRyYWN0ICRDT05UUkFDVApjb3JhbCBxdWVyeSBhY2NvdW50ICRDT05UUkFDVAoKIyB5b3UgY2FuIGR1bXAgZW50aXJlIGNvbnRyYWN0IHN0YXRlCmNvcmFsIHF1ZXJ5IHdhc20gY29udHJhY3Qtc3RhdGUgYWxsICRDT05UUkFDVAoKIyBub3RlIHRoYXQgd2UgcHJlZml4IHRoZSBrZXkgJnF1b3Q7Y29uZmlnJnF1b3Q7IHdpdGggdHdvIGJ5dGVzIGluZGljYXRpbmcgaXQncyBsZW5ndGgKIyBlY2hvIC1uIGNvbmZpZyB8IHh4ZCAtcHMKIyBnaXZlcyA2MzZmNmU2NjY5NjcKIyB0aHVzIHdlIGhhdmUgYSBrZXkgMDAwNjYzNmY2ZTY2Njk2NwoKIyB5b3UgY2FuIGFsc28gcXVlcnkgb25lIGtleSBkaXJlY3RseQpjb3JhbCBxdWVyeSB3YXNtIGNvbnRyYWN0LXN0YXRlIHJhdyAkQ09OVFJBQ1QgMDAwNjYzNmY2ZTY2Njk2NyAtLWhleAoKIyBOb3RlIHRoYXQga2V5cyBhcmUgaGV4IGVuY29kZWQsIGFuZCB2YWwgaXMgYmFzZTY0IGVuY29kZWQuCiMgVG8gdmlldyB0aGUgcmV0dXJuZWQgZGF0YSAoYXNzdW1pbmcgaXQgaXMgYXNjaWkpLCB0cnkgc29tZXRoaW5nIGxpa2U6CiMgKE5vdGUgdGhhdCBpbiBtYW55IGNhc2VzIHRoZSBiaW5hcnkgZGF0YSByZXR1cm5lZCBpcyBub24gaW4gYXNjaWkgZm9ybWF0LCB0aHVzIHRoZSBlbmNvZGluZykKY29yYWwgcXVlcnkgd2FzbSBjb250cmFjdC1zdGF0ZSBhbGwgJENPTlRSQUNUIHwganEgLXIgJy5bMF0ua2V5JyB8IHh4ZCAtciAtcHMKY29yYWwgcXVlcnkgd2FzbSBjb250cmFjdC1zdGF0ZSBhbGwgJENPTlRSQUNUIHwganEgLXIgJy5bMF0udmFsJyB8IGJhc2U2NCAtZAoKIyBvciB0cnkgYSAmcXVvdDtzbWFydCBxdWVyeSZxdW90OywgZXhlY3V0aW5nIGFnYWluc3QgdGhlIGNvbnRyYWN0CmNvcmFsIHF1ZXJ5IHdhc20gY29udHJhY3Qtc3RhdGUgc21hcnQgJENPTlRSQUNUICd7fScKIyAoc2luY2Ugd2UgZGlkbid0IGltcGxlbWVudCBhbnkgdmFsaWQgUXVlcnlNc2csIHdlIGp1c3QgZ2V0IGEgcGFyc2UgZXJyb3IgYmFjaykK"}}),c._v(" "),t("p",[c._v("Once we have the funds in the escrow, let us try to release them. First, failing to do so with a key\nthat is not the verifier, then using the proper key to release.")]),c._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"IyBleGVjdXRlIGZhaWxzIGlmIHdyb25nIHBlcnNvbgpBUFBST1ZFPSd7JnF1b3Q7YXBwcm92ZSZxdW90Ozp7JnF1b3Q7cXVhbnRpdHkmcXVvdDs6W3smcXVvdDthbW91bnQmcXVvdDs6JnF1b3Q7NTAwMDAmcXVvdDssJnF1b3Q7ZGVub20mcXVvdDs6JnF1b3Q7dXNoZWxsJnF1b3Q7fV19fScKY29yYWwgdHggd2FzbSBleGVjdXRlICRDT05UUkFDVCAmcXVvdDskQVBQUk9WRSZxdW90OyBcCiAgICAtLWZyb20gdGhpZWYgXAogICAgLS1nYXMtcHJpY2VzPSZxdW90OzAuMDI1dXNoZWxsJnF1b3Q7IC0tZ2FzPSZxdW90O2F1dG8mcXVvdDsgLS1nYXMtYWRqdXN0bWVudD0mcXVvdDsxLjImcXVvdDsgLXkKCiMgbG9va2luZyBhdCB0aGUgbG9ncyBzaG91bGQgc2hvdzogJnF1b3Q7ZXhlY3V0ZSB3YXNtIGNvbnRyYWN0IGZhaWxlZDogVW5hdXRob3JpemVkJnF1b3Q7CiMgYW5kIGJvYiBzaG91bGQgc3RpbGwgYmUgYnJva2UgKGFuZCBicm9rZW4gc2hvd2luZyB0aGUgYWNjb3VudCBkb2VzIG5vdCBleGlzdCBFcnJvcikKY29yYWwgcXVlcnkgYWNjb3VudCAkKGNvcmFsIGtleXMgc2hvdyBib2IgLWEpCgojIGJ1dCBzdWNjZWVkcyB3aGVuIGZyZWQgdHJpZXMKY29yYWwgdHggd2FzbSBleGVjdXRlICRDT05UUkFDVCAmcXVvdDskQVBQUk9WRSZxdW90OyBcCiAgICAtLWZyb20gZnJlZCBcCiAgICAtLWdhcy1wcmljZXM9JnF1b3Q7MC4wMjV1c2hlbGwmcXVvdDsgLS1nYXM9JnF1b3Q7YXV0byZxdW90OyAtLWdhcy1hZGp1c3RtZW50PSZxdW90OzEuMiZxdW90OyAteQoKY29yYWwgcXVlcnkgYWNjb3VudCAkKGNvcmFsIGtleXMgc2hvdyBib2IgLWEpCgojIGNvbnRyYWN0IGNvaW5zIG11c3QgYmUgZW1wdHkKY29yYWwgcXVlcnkgYWNjb3VudCAkQ09OVFJBQ1QK"}}),c._v(" "),t("h2",{attrs:{id:"node-console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-console"}},[c._v("#")]),c._v(" Node Console")]),c._v(" "),t("p",[c._v("If you set up the Node Console / REPL in the "),t("a",{attrs:{href:"./setting-env#setup-node-repl"}},[c._v("client setup section")]),c._v(", you can use\nthat to deploy and execute your contract. I think you will find that JSON manipulation and parsing\nis a bit nicer in JavaScript than in Shell Script.")]),c._v(" "),t("p",[c._v("First, go to the cli directory and start up your console:")]),c._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bnB4IEBjb3NtanMvY2xpQF4wLjIyIC0taW5pdCBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQ29zbVdhc20vdGVzdG5ldHMvbWFzdGVyL2NvcmFsbmV0L2NsaV9oZWxwZXIudHMK"}}),c._v(" "),t("p",[c._v("Now, we make all the keys and initialize clients:")]),c._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgZnJlZFNlZWQgPSBsb2FkT3JDcmVhdGVNbmVtb25pYygmcXVvdDtmcmVkLmtleSZxdW90Oyk7CmNvbnN0IHthZGRyZXNzOiBmcmVkQWRkciwgY2xpZW50OiBmcmVkQ2xpZW50fSA9IGF3YWl0IGNvbm5lY3QoZnJlZFNlZWQsIHt9KTsKCi8vIGJvYiBkb2Vzbid0IGhhdmUgYSBjbGllbnQgaGVyZSBhcyB3ZSB3aWxsIG5vdAovLyBzdWJtaXQgYW55IHR4IHdpdGggdGhpcyBhY2NvdW50LCBqdXN0IHF1ZXJ5IGJhbGFuY2UKY29uc3QgYm9iU2VlZCA9IGxvYWRPckNyZWF0ZU1uZW1vbmljKCZxdW90O2JvYi5rZXkmcXVvdDspOwpjb25zdCBib2JBZGRyID0gYXdhaXQgbW5lbW9uaWNUb0FkZHJlc3MoJnF1b3Q7Y29yYWwmcXVvdDssIGJvYlNlZWQpOwoKY29uc3QgdGhpZWZTZWVkID0gbG9hZE9yQ3JlYXRlTW5lbW9uaWMoJnF1b3Q7dGhpZWYua2V5JnF1b3Q7KTsKCmNvbnN0IHthZGRyZXNzOiB0aGllZkFkZHIsIGNsaWVudDogdGhpZWZDbGllbnR9ID0gYXdhaXQgY29ubmVjdCh0aGllZlNlZWQsIHt9KTsKCmNvbnNvbGUubG9nKGZyZWRBZGRyLCBib2JBZGRyLCB0aGllZkFkZHIpOwo="}}),c._v(" "),t("p",[c._v("Hit the faucet it needed for fred , so he has tokens to submit transactions:")]),c._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"ZnJlZENsaWVudC5nZXRBY2NvdW50KCk7Ci8vIGlmICZxdW90O3VuZGVmaW5lZCZxdW90OywgZG8gdGhlIGZvbGxvd2luZwpoaXRGYXVjZXQoZGVmYXVsdEZhdWNldFVybCwgZnJlZEFkZHIsICZxdW90O1NIRUxMJnF1b3Q7KQpmcmVkQ2xpZW50LmdldEFjY291bnQoKTsKCnRoaWVmQ2xpZW50LmdldEFjY291bnQoKTsKLy8gaWYgJnF1b3Q7dW5kZWZpbmVkJnF1b3Q7LCBkbyB0aGUgZm9sbG93aW5nCmhpdEZhdWNldChkZWZhdWx0RmF1Y2V0VXJsLCB0aGllZkFkZHIsICZxdW90O1NIRUxMJnF1b3Q7KQp0aGllZkNsaWVudC5nZXRBY2NvdW50KCk7CgovLyBjaGVjayBib2JBZGRyIGhhcyBubyBmdW5kcwpmcmVkQ2xpZW50LmdldEFjY291bnQoYm9iQWRkcik7CgovLyBnZXQgdGhlIHdvcmtpbmcgZGlyZWN0b3J5IChuZWVkZWQgbGF0ZXIpCnByb2Nlc3MuY3dkKCkK"}}),c._v(" "),t("h3",{attrs:{id:"uploading-with-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uploading-with-js"}},[c._v("#")]),c._v(" Uploading with JS")]),c._v(" "),t("p",[c._v("Now, we go back to the Node console and upload the contract and instantiate it:")]),c._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3Qgd2FzbSA9IGZzLnJlYWRGaWxlU3luYygnY29udHJhY3Qud2FzbScpOwovLyB5b3UgY2FuIGFkZCBleHRyYSBpbmZvcm1hdGlvbiB0byBjb250cmFjdCBkZXRhaWxzIHN1Y2ggYXMgc291cmNlIGFuZCBidWlsZGVyLgpjb25zdCB1cCA9IGF3YWl0IGZyZWRDbGllbnQudXBsb2FkKHdhc20sIHsgc291cmNlOiAmcXVvdDtodHRwczovL2NyYXRlcy5pby9hcGkvdjEvY3JhdGVzL2N3LWVzY3Jvdy8wLjYuMC9kb3dubG9hZCZxdW90OywgYnVpbGRlcjogJnF1b3Q7Y29zbXdhc20vcnVzdC1vcHRpbWl6ZXI6MC45LjAmcXVvdDt9KTsKCmNvbnNvbGUubG9nKHVwKTsKY29uc3QgeyBjb2RlSWQgfSA9IHVwOwoKY29uc3QgaW5pdE1zZyA9IHthcmJpdGVyOiBmcmVkQWRkciwgcmVjaXBpZW50OiBib2JBZGRyfTsKY29uc3QgeyBjb250cmFjdEFkZHJlc3MgfSA9IGF3YWl0IGZyZWRDbGllbnQuaW5zdGFudGlhdGUoY29kZUlkLCBpbml0TXNnLCAmcXVvdDtFc2Nyb3cgMSZxdW90OywgeyBtZW1vOiAmcXVvdDttZW1vJnF1b3Q7LCB0cmFuc2ZlckFtb3VudDogW3tkZW5vbTogJnF1b3Q7dXNoZWxsJnF1b3Q7LCBhbW91bnQ6ICZxdW90OzUwMDAwJnF1b3Q7fV19KTsKCi8vIGNoZWNrIHRoZSBjb250cmFjdCBpcyBzZXQgdXAgcHJvcGVybHkKY29uc29sZS5sb2coY29udHJhY3RBZGRyZXNzKTsKZnJlZENsaWVudC5nZXRDb250cmFjdChjb250cmFjdEFkZHJlc3MpOwpmcmVkQ2xpZW50LmdldEFjY291bnQoY29udHJhY3RBZGRyZXNzKTsKCi8vIG1ha2UgYSByYXcgcXVlcnkgLSBrZXkgbGVuZ3RoIHByZWZpeGVkICZxdW90O2NvbmZpZyZxdW90Owpjb25zdCBrZXkgPSBuZXcgVWludDhBcnJheShbMCwgNiwgLi4udG9Bc2NpaSgmcXVvdDtjb25maWcmcXVvdDspXSk7CmNvbnN0IHJhdyA9IGF3YWl0IGZyZWRDbGllbnQucXVlcnlDb250cmFjdFJhdyhjb250cmFjdEFkZHJlc3MsIGtleSk7CkpTT04ucGFyc2UoZnJvbVV0ZjgocmF3KSkKLy8gbm90ZSB0aGUgYWRkcmVzc2VzIGFyZSBzdG9yZWQgaW4gYmFzZTY0IGludGVybmFsbHksIG5vdCBiZWNoMzIsIGJ1dCB0aGUgZGF0YSBpcyB0aGVyZS4uLiB0aGlzIGlzIHdoeSB3ZSBvZnRlbiBpbXBsZW1lbnQgc21hcnQgcXVlcmllcyBvbiByZWFsIGNvbnRyYWN0cwo="}}),c._v(" "),t("h3",{attrs:{id:"executing-contract-with-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#executing-contract-with-js"}},[c._v("#")]),c._v(" Executing Contract with JS")]),c._v(" "),t("p",[c._v('Once we have properly configured the contract, let\'s show how to use it, both the proper "approve"\ncommand:')]),c._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgYXBwcm92ZSA9IHthcHByb3ZlOiB7cXVhbnRpdHk6IFt7YW1vdW50OiAmcXVvdDs1MDAwMCZxdW90OywgZGVub206ICZxdW90O3VzaGVsbCZxdW90O31dfX07CgovLyB0aGllZiBjYW5ub3QgYXBwcm92ZQp0aGllZkNsaWVudC5leGVjdXRlKGNvbnRyYWN0QWRkcmVzcywgYXBwcm92ZSkKCi8vIGJ1dCBmcmVkIGNhbiAoYW5kIG1vdmVzIG1vbmV5IHRvIGJvYikKZnJlZENsaWVudC5leGVjdXRlKGNvbnRyYWN0QWRkcmVzcywgYXBwcm92ZSk7Ci8vIHZlcmlmeSBib2IgZ290IHRoZSB0b2tlbnMKZnJlZENsaWVudC5nZXRBY2NvdW50KGJvYkFkZHIpOwovLyB2ZXJpZnkgY29udHJhY3QgbG9zdApmcmVkQ2xpZW50LmdldEFjY291bnQoY29udHJhY3RBZGRyZXNzKTsK"}})],1)}),[],!1,null,null,null);d.default=l.exports}}]);