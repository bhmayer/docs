(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{651:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"subkeys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subkeys"}},[e._v("#")]),e._v(" Subkeys")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw1-subkeys",target:"_blank",rel:"noopener noreferrer"}},[e._v("CW1 Subkeys"),a("OutboundLink")],1),e._v("\nis inspired by "),a("a",{attrs:{href:"https://forum.cosmos.network/t/proposal-adding-subkey-feature-to-cosmos-sdk-and-apply-it-to-the-hub/2358",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK feature proposal"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("This is a basic proxy contract. Initiated contract with some tokens inside,\nallowed accounts can execute "),a("code",[e._v("CosmosMsg::Bank(BankMsg::Send{})")]),e._v(" within the\nallowance("),a("code",[e._v("spender, denom")]),e._v(") limits per account basis. Allowance logic is similar\nto "),a("a",{attrs:{href:"../cw20/spec"}},[e._v("CW20")]),e._v(". After authorization their allowance will be reduced, and\nthe send message will be relayed. If they don't have sufficient authorization,\nor if they try to proxy any other message type, then the attempt will be rejected.\nAdmin can add an allowance for an account during init msg broadcast or after\ninit.")]),e._v(" "),a("p",[e._v("The contract consists permissioning logic that allows and disallows specified keys to execute\nspecific messages. For now these messages are staking messages (covers "),a("em",[e._v("Delegate, Undelegate, Redelegate, Withdraw")]),e._v(" for now),\nbut it is just few lines of code to add new message types. Allowance and permission checks works separately, meaning a subkey can have allowance to spend tokens,\nbut no permissioned message execution and vice versa.")]),e._v(" "),a("h2",{attrs:{id:"contract-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contract-demo"}},[e._v("#")]),e._v(" Contract demo")]),e._v(" "),a("p",[e._v("First, initialize node repl:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bnB4IEBjb3NtanMvY2xpQF4wLjIyIC0taW5pdCBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQ29zbVdhc20vY29zbXdhc20tcGx1cy92MC4yLjEvY29udHJhY3RzL2N3MS1zdWJrZXlzL2hlbHBlcnMudHMK"}}),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[e._v("Helper code is compatible with cw1-subkeys smart contract version "),a("strong",[e._v("v0.2.1")])])]),e._v(" "),a("p",[e._v("Load wallet:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"ts",base64:"Y29uc3QgY2xpZW50ID0gYXdhaXQgdXNlT3B0aW9ucyhjb3JhbG5ldE9wdGlvbnMpLnNldHVwKFBBU1NXT1JEKTsKY29uc3QgZmFjdG9yeSA9IENXMShjbGllbnQpOwo="}}),e._v(" "),a("p",[e._v("Upload the code and the contract:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"ts",base64:"Ly8gdXBsb2FkIHVzaW5nIGNvZGUgYmVsb3cKLy8gaWYgdGhlIGNvZGUgaXMgYWxyZWFkeSB1cGxvYWRlZCB1c2UgY29kZSBpZCB0byBpbml0aWF0ZQpjb25zdCBjb2RlSWQgPSBhd2FpdCBmYWN0b3J5LnVwbG9hZCgpCi8vIGNvbnRyYWN0IGlzIGFscmVhZHkgdXBsb2FkZWQgb24gY29yYWxuZXQ6IGNvZGVJZCAtJmd0OyAxMgpjb25zdCB7IGFkZHJlc3MgfSA9IGF3YWl0IGNsaWVudC5nZXRBY2NvdW50KCkKY29uc3QgY29udHJhY3QgPSBhd2FpdCBmYWN0b3J5Lmluc3RhbnRpYXRlKDEyLCB7IGFkbWluczogW2FkZHJlc3NdLCBtdXRhYmxlOiB0cnVlfSwgJnF1b3Q7TXkgR2lmdCB0byBhIEZyaWVuZCZxdW90OykKCi8vIHByaW50IG91dCBjb250cmFjdC5jb250cmFjdEFkZHJlc3MgZm9yIGxhdGVyCmNvbnRyYWN0LmNvbnRyYWN0QWRkcmVzcwovLyBhZGRyZXNzIC0mZ3Q7ICdjb3JhbDEyNjd3cTJ6azIya3Q1anV5cGRjenczazR3eGhjNHo0N211ZzlmZCcK"}}),e._v(" "),a("p",[e._v("We created a contract from a code with only "),a("code",[e._v("address")]),e._v(" as admin. Update admins\nfor demonstration.")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"ts",base64:"Ly8gVXNlIGEga2V5IHlvdSBjb250cm9sIHRvIHRlc3Qgb3V0IGV4ZWN1dGUgd2l0aCBzdWJrZXkKY29uc3QgZnJpZW5kQWRkciA9ICZxdW90O2NvcmFsMXh4NzlsNXEzMmVxdmtrM2hjNTRrOTJkcHE5MDl6aDY1Mmd3NzB2JnF1b3Q7CgovLyBnZW5lcmF0ZSBzZWNvbmQgYWRkcmVzcyBpZiB5b3UgZG9uJ3QgaGF2ZSBvbmU6Ci8vIGNvbnN0IGZyaWVuZENsaWVudCA9IGF3YWl0IHVzZU9wdGlvbnMoY29yYWxuZXRPcHRpb25zKS5zZXR1cChQQVNTV09SRCwgS0VZX0ZJTEUpOwovLyBjb25zdCBmcmllbmRBZGRyID0gYXdhaXQgZnJpZW5kQ2xpZW50LmdldEFjY291bnQoKS50aGVuKHggPSZndDsgeC5hZGRyZXNzKTsKCmNvbnRyYWN0LnVwZGF0ZUFkbWlucyhbYWRkcmVzcywgZnJpZW5kQWRkcl0pOwo="}}),e._v(" "),a("p",[e._v("After the last line, two admins have control over the sub key master contract.\nYou can see the new admin added by running "),a("code",[e._v("contract.admins()")]),e._v("\nLet's delete friends address from admins, you would not want him to\nrun away with the funds. Remove his address from admins and freeze the contract.\nFreezing means admins cannot be modified afterwards.")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"ts",base64:"Y29udHJhY3QudXBkYXRlQWRtaW5zKFthZGRyZXNzXSkKY29udHJhY3QuZnJlZXplKCkK"}}),e._v(" "),a("h3",{attrs:{id:"allowance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allowance"}},[e._v("#")]),e._v(" Allowance")]),e._v(" "),a("p",[e._v("Let's give some allowance to your friends account, so he can buy a lambo:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"ts",base64:"Ly8gbGV0cyBwb3VyIHNvbWUgbW9uZXkgdG8gdGhlIGFjY291bnQKY2xpZW50LnNlbmRUb2tlbnMoY29udHJhY3RBZGRyZXNzLCBbe2Rlbm9tOiAmcXVvdDt1c2hlbGwmcXVvdDssIGFtb3VudDogJnF1b3Q7MTAwMDAwMCZxdW90O31dKQovLyB2ZXJpZnkgdG9rZW5zIGFyZSB0cmFuc2ZlcnJlZApjbGllbnQuZ2V0QWNjb3VudChjb250cmFjdEFkZHJlc3MpCgpjb250cmFjdC5pbmNyZWFzZUFsbG93YW5jZShmcmllbmRBZGRyLCB7ZGVub206ICZxdW90O3VzaGVsbCZxdW90OywgYW1vdW50OiAmcXVvdDs5MDAwMCZxdW90O30pCmNvbnRyYWN0LmFsbG93YW5jZShmcmllbmRBZGRyKQo="}}),e._v(" "),a("p",[e._v("Now test if he can execute the message. Open another terminal screen:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"ts",base64:"Y29uc3QgZnJpZW5kQ2xpZW50ID0gYXdhaXQgdXNlT3B0aW9ucyhjb3JhbG5ldE9wdGlvbnMpLnNldHVwKFBBU1NXT1JELCBLRVlfRklMRSk7CmNvbnN0IGZhY3RvcnkgPSBDVzEoZnJpZW5kQ2xpZW50KQpjb25zdCBjb250cmFjdCA9IGZhY3RvcnkudXNlKCdjb3JhbDEyNjd3cTJ6azIya3Q1anV5cGRjenczazR3eGhjNHo0N211ZzlmZCcpCgpjb250cmFjdC5leGVjdXRlKFt7YmFuazoge3NlbmQ6IHtmcm9tX2FkZHJlc3M6IGNvbnRyYWN0QWRkcmVzcywgdG9fYWRkcmVzczogYWRkcmVzcywgYW1vdW50OiBbe2Rlbm9tOiAmcXVvdDt1c2hlbGwmcXVvdDssIGFtb3VudDogJnF1b3Q7MjAwMDAmcXVvdDt9XX19fV0pCg=="}}),e._v(" "),a("p",[e._v("Allowed account can spend the tokens. Lets prank your friend with decreasing\nhis allowance on admin terminal:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"ts",base64:"Y29udHJhY3QuZGVjcmVhc2VBbGxvd2FuY2UocmFuZG9tQWRkcmVzcywge2Rlbm9tOiAmcXVvdDt1c2hlbGwmcXVvdDssIGFtb3VudDogJnF1b3Q7Njk5OTkmcXVvdDt9LCB7IGF0X2hlaWdodDogeyBoZWlnaHQ6IDQwMDAwfX0pCg=="}}),e._v(" "),a("p",[e._v("After these operations he will only have "),a("em",[e._v("1 ushell")]),e._v(" to spend. The prank's\nbest part is "),a("code",[e._v("at_height")]),e._v(" field. After height 40000 his allowance will become\ninactive meaning he can't spend the tokens anymore.")]),e._v(" "),a("h3",{attrs:{id:"permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[e._v("#")]),e._v(" Permissions")]),e._v(" "),a("p",[e._v("Initially keys do not have any permission to send permissioned messages and needs to be set key basis:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"ts",base64:"bGV0IHBlcm1pc3Npb25zOiBQZXJtaXNzaW9ucyA9IHsgZGVsZWdhdGU6IHRydWUsIHVuZGVsZWdhdGU6IGZhbHNlLCByZWRlbGVnYXRlOiB0cnVlLCB3aXRoZHJhdzogdHJ1ZX0KCmNvbnRyYWN0LnNldFN0YWtpbmdQZXJtaXNzaW9ucyhyYW5kb21BZGRyZXNzLCBwZXJtaXNzaW9ucykKCmxldCBkbXNnOiBEZWxlZ2F0ZU1zZyA9IHtzdGFraW5nOiB7ZGVsZWdhdGU6IHt2YWxpZGF0b3I6JnF1b3Q7Y29yYWx2YWxvcGVyMWhmNTB0cmo3cGx6MnNkOGNtY3ZuN2M4cnVoM3RqaGMydWNoNGdwJnF1b3Q7LCBhbW91bnQ6e2Rlbm9tOiZxdW90O3VyZWVmJnF1b3Q7LGFtb3VudDomcXVvdDs5OTkmcXVvdDt9fX19CmNvbnRyYWN0LmV4ZWN1dGUoW2Rtc2ddKQovLyB3aWxsIGJlIGFwcHJvdmVkCgpsZXQgdW5tc2c6IFVuZGVsZWdhdGVNc2cgPSB7c3Rha2luZzoge3VuZGVsZWdhdGU6IHt2YWxpZGF0b3I6JnF1b3Q7Y29yYWx2YWxvcGVyMWhmNTB0cmo3cGx6MnNkOGNtY3ZuN2M4cnVoM3RqaGMydWNoNGdwJnF1b3Q7LCBhbW91bnQ6e2Rlbm9tOiZxdW90O3VyZWVmJnF1b3Q7LGFtb3VudDomcXVvdDs5OTkmcXVvdDt9fX19CmNvbnRyYWN0LmV4ZWN1dGUoW3VubXNnXSkKLy8gd2lsbCBiZSByZWplY3RlZAoK"}}),e._v(" "),a("h2",{attrs:{id:"contribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contribution"}},[e._v("#")]),e._v(" Contribution")]),e._v(" "),a("p",[e._v("This contracts logic can be improved by adding different message types,\nvarious permissions for message types, daily spendable amount etc. Check\n"),a("a",{attrs:{href:"https://forum.cosmos.network/t/proposal-adding-subkey-feature-to-cosmos-sdk-and-apply-it-to-the-hub/2358",target:"_blank",rel:"noopener noreferrer"}},[e._v("the cosmos sdk proposal"),a("OutboundLink")],1),e._v(" for\nmore ideas.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);