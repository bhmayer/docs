(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{683:function(e,t,n){"use strict";n.r(t);var o=n(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"cw721-spec-non-fungible-tokens"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cw721-spec-non-fungible-tokens"}},[e._v("#")]),e._v(" CW721 Spec: Non Fungible Tokens")]),e._v(" "),n("p",[e._v("cw721 package source code: "),n("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/blob/master/packages/cw721/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/CosmWasm/cosmwasm-plus/blob/master/packages/cw721/README.md"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("CW721 is a specification for non-fungible tokens based on CosmWasm.\nThe name and design is based on Ethereum's ERC721 standard,\nwith some enhancements. The types in here can be imported by\ncontracts that wish to implement this  spec, or by contracts that call\nto any standard cw721 contract.")]),e._v(" "),n("p",[e._v("The specification is split into multiple sections, a contract may only\nimplement some of this functionality, but must implement the base.")]),e._v(" "),n("h2",{attrs:{id:"base"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#base"}},[e._v("#")]),e._v(" Base")]),e._v(" "),n("p",[e._v("This handles ownership, transfers, and allowances. These must be supported\nas is by all CW721 contracts. Note that all tokens must have an owner,\nas well as an ID. The ID is an arbitrary string, unique within the contract.")]),e._v(" "),n("h3",{attrs:{id:"messages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),n("p",[n("code",[e._v("TransferNft{recipient, token_id}")]),e._v(" -\nThis transfers ownership of the token to "),n("code",[e._v("recipient")]),e._v(" account. This is\ndesigned to send to an address controlled by a private key and "),n("em",[e._v("does not")]),e._v("\ntrigger any actions on the recipient if it is a contract.")]),e._v(" "),n("p",[e._v("Requires "),n("code",[e._v("token_id")]),e._v(" to point to a valid token, and "),n("code",[e._v("env.sender")]),e._v(" to be\nthe owner of it, or have an allowance to transfer it.")]),e._v(" "),n("p",[n("code",[e._v("SendNft{contract, token_id, msg}")]),e._v(" -\nThis transfers ownership of the token to "),n("code",[e._v("contract")]),e._v(" account. "),n("code",[e._v("contract")]),e._v("\nmust be an address controlled by a smart contract, which implements\nthe CW721Receiver interface. The "),n("code",[e._v("msg")]),e._v(" will be passed to the recipient\ncontract, along with the token_id.")]),e._v(" "),n("p",[e._v("Requires "),n("code",[e._v("token_id")]),e._v(" to point to a valid token, and "),n("code",[e._v("env.sender")]),e._v(" to be\nthe owner of it, or have an allowance to transfer it.")]),e._v(" "),n("p",[n("code",[e._v("Approve{spender, token_id, expires}")]),e._v(" - Grants permission to "),n("code",[e._v("spender")]),e._v(" to\ntransfer or send the given token. This can only be performed when\n"),n("code",[e._v("env.sender")]),e._v(" is the owner of the given "),n("code",[e._v("token_id")]),e._v(" or an "),n("code",[e._v("operator")]),e._v(".\nThere can multiple spender accounts per token, and they are cleared once\nthe token is transfered or sent.")]),e._v(" "),n("p",[n("code",[e._v("Revoke{spender, token_id}")]),e._v(" - This revokes a previously granted permission\nto transfer the given "),n("code",[e._v("token_id")]),e._v(". This can only be granted when\n"),n("code",[e._v("env.sender")]),e._v(" is the owner of the given "),n("code",[e._v("token_id")]),e._v(" or an "),n("code",[e._v("operator")]),e._v(".")]),e._v(" "),n("p",[n("code",[e._v("ApproveAll{operator, expires}")]),e._v(" - Grant "),n("code",[e._v("operator")]),e._v(" permission to transfer or send\nall tokens owned by "),n("code",[e._v("env.sender")]),e._v(". This approval is tied to the owner, not the\ntokens and applies to any future token that the owner receives as well.")]),e._v(" "),n("p",[n("code",[e._v("RevokeAll{operator}")]),e._v(" - Revoke a previous "),n("code",[e._v("ApproveAll")]),e._v(" permission granted\nto the given "),n("code",[e._v("operator")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"queries"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),n("p",[n("code",[e._v("OwnerOf{token_id}")]),e._v(" - Returns the owner of the given token,\nas well as anyone with approval on this particular token.\nIf the token is unknown, returns an error. Return type is\n"),n("code",[e._v("OwnerResponse{owner}")]),e._v(".")]),e._v(" "),n("p",[n("code",[e._v("ApprovedForAll{owner, include_expired}")]),e._v(" - List all operators that can\naccess all of  the owner's tokens. Return type is "),n("code",[e._v("ApprovedForAllResponse")]),e._v(".\nIf "),n("code",[e._v("include_expired")]),e._v(" is set, show expired owners in the results, otherwise,\nignore them.")]),e._v(" "),n("p",[n("code",[e._v("NumTokens{}")]),e._v(" - Total number of tokens issued")]),e._v(" "),n("h3",{attrs:{id:"receiver"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#receiver"}},[e._v("#")]),e._v(" Receiver")]),e._v(" "),n("p",[e._v("The counter-part to "),n("code",[e._v("SendNft")]),e._v(" is "),n("code",[e._v("ReceiveNft")]),e._v(", which must be implemented by\nany contract that wishes to manage CW721 tokens. This is generally "),n("em",[e._v("not")]),e._v("\nimplemented by any CW721 contract.")]),e._v(" "),n("p",[n("code",[e._v("ReceiveNft{sender, token_id, msg}")]),e._v(" - This is designed to handle "),n("code",[e._v("SendNft")]),e._v("\nmessages. The address of the contract is stored in "),n("code",[e._v("env.sender")]),e._v("\nso it cannot be faked. The contract should ensure the sender matches\nthe token contract it expects to handle, and not allow arbitrary addresses.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("sender")]),e._v(" is the original account requesting to move the token\nand "),n("code",[e._v("msg")]),e._v(" is a "),n("code",[e._v("Binary")]),e._v(" data that can be decoded into a contract-specific\nmessage. This can be empty if we have only one default action,\nor it may be a "),n("code",[e._v("ReceiveMsg")]),e._v(" variant to clarify the intention. For example,\nif I send to an exchange, I can specify the price I want to list the token\nfor.")]),e._v(" "),n("h2",{attrs:{id:"metadata"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[e._v("#")]),e._v(" Metadata")]),e._v(" "),n("h3",{attrs:{id:"queries-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#queries-2"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),n("p",[n("code",[e._v("ContractInfo{}")]),e._v(" - This returns top-level metadata about the contract.\nNamely, "),n("code",[e._v("name")]),e._v(" and "),n("code",[e._v("symbol")]),e._v(".")]),e._v(" "),n("p",[n("code",[e._v("NftInfo{token_id}")]),e._v(" - This returns metadata about one particular token.\nThe return value is based on "),n("em",[e._v("ERC721 Metadata JSON Schema")]),e._v(", but directly\nfrom the contract, not as a Uri. Only the image link is a Uri.")]),e._v(" "),n("p",[n("code",[e._v("AllNftInfo{token_id}")]),e._v(" - This returns the result of both "),n("code",[e._v("NftInfo")]),e._v("\nand "),n("code",[e._v("OwnerOf")]),e._v(" as one query as an optimization for clients, which may\nwant both info to display one NFT.")]),e._v(" "),n("h2",{attrs:{id:"enumerable"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enumerable"}},[e._v("#")]),e._v(" Enumerable")]),e._v(" "),n("h3",{attrs:{id:"queries-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#queries-3"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),n("p",[e._v("Pagination is acheived via "),n("code",[e._v("start_after")]),e._v(" and "),n("code",[e._v("limit")]),e._v(". Limit is a request\nset by the client, if unset, the contract will automatically set it to\n"),n("code",[e._v("DefaultLimit")]),e._v(" (suggested 10). If set, it will be used up to a "),n("code",[e._v("MaxLimit")]),e._v("\nvalue (suggested 30). Contracts can define other "),n("code",[e._v("DefaultLimit")]),e._v(" and "),n("code",[e._v("MaxLimit")]),e._v("\nvalues without violating the CW721 spec, and clients should not rely on\nany particular values.")]),e._v(" "),n("p",[e._v("If "),n("code",[e._v("start_after")]),e._v(" is unset, the query returns the first results, ordered by\nlexogaphically by "),n("code",[e._v("token_id")]),e._v(". If "),n("code",[e._v("start_after")]),e._v(" is set, then it returns the\nfirst "),n("code",[e._v("limit")]),e._v(" tokens "),n("em",[e._v("after")]),e._v(" the given one. This allows straight-forward\npagination by taking the last result returned (a "),n("code",[e._v("token_id")]),e._v(") and using it\nas the "),n("code",[e._v("start_after")]),e._v(" value in a future query.")]),e._v(" "),n("p",[n("code",[e._v("Tokens{owner, start_after, limit}")]),e._v(" - List all token_ids that belong to a given owner.\nReturn type is "),n("code",[e._v("TokensResponse{tokens: Vec<token_id>}")]),e._v(".")]),e._v(" "),n("p",[n("code",[e._v("AllTokens{start_after, limit}")]),e._v(" - Requires pagination. Lists all token_ids controlled by\nthe contract.")])])}),[],!1,null,null,null);t.default=a.exports}}]);