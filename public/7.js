(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{191:function(t,a,e){"use strict";var n=e(77);e.n(n).a},192:function(t,a,e){(t.exports=e(37)(!1)).push([t.i,'\n.modal-mask {\r\n  position: fixed;\r\n  z-index: 9998;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: table;\r\n  -webkit-transition: opacity 0.3s ease;\r\n  transition: opacity 0.3s ease;\n}\n.modal-wrapper {\r\n  display: table-cell;\r\n  vertical-align: middle;\n}\n.modal-container {\r\n  width: 80%;\r\n  margin: 0px auto;\r\n  padding: 20px 30px;\r\n  background-color: #fff;\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\r\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\r\n  -webkit-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\n}\n.modal-header h3 {\r\n  margin-top: 0;\r\n  color: #42b983;\n}\n.modal-body {\r\n  margin: 20px 0;\n}\n.modal-default-button {\r\n  float: right;\n}\r\n\r\n/*\r\n * The following styles are auto-applied to elements with\r\n * transition="modal" when their visibility is toggled\r\n * by Vue.js.\r\n *\r\n * You can easily play with the modal transition by editing\r\n * these styles.\r\n */\n.modal-enter-from {\r\n  opacity: 0;\n}\n.modal-leave-to {\r\n  opacity: 0;\n}\n.modal-enter-from .modal-container,\r\n.modal-leave-to .modal-container {\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\n}\r\n',""])},501:function(t,a,e){"use strict";e.r(a);var n=e(55),o=e(2),s=e.n(o),i={components:{Modal:n.a},data:function(){return{Selectnamapelanggan:[],Selectnamaproduk:[],produkselect:[],showApaini1:!1,showmodaledit:!1,showmodalhapus:!1,itemas:"",items:[],recordsPerPage:2,fields:[{key:"invoice_id",label:"Invoice",sortable:!0,class:"text-center"},{key:"nama_produk",label:"Nama produk",sortable:!0,class:"text-center"},{key:"nama_pelanggan",label:"nama pelanggan",sortable:!0,class:"text-center"},{key:"qty",label:"qty",sortable:!0,class:"text-center"},{key:"total_harga",label:"total harga",sortable:!0,class:"text-center"},{key:"date",label:"Tanggal",sortable:!0,class:"text-center"},{key:"status",label:"Status",sortable:!0,class:"text-center"},{key:"actions",label:"Actions"}],totalRows:"",nama_produk1:"",nama_pelanggan1:"",qty1:"",nama_produk2:"",nama_pelanggan2:"",qty2:"",idpesanan2:"",idpesanan3:"",currentPage:"",perPage:"",pageOptions:[5,10,15,{value:100,text:"Show a lot"}],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],infoModal:{id:"info-modal",title:"",content:"",item:""}}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){this.totalRows=this.items.length},created:function(){this.getPesanan(),this.showSelectnamaproduk(),this.showSelectnamapelanggan()},watch:{currentPage:{handler:function(t){this.params="page=".concat(t,"&size=").concat(this.PerPage),this.getPesanan()}},perPage:{handler:function(t){this.params="page=".concat(this.currentPage,"&size=").concat(t),this.getPesanan()}}},methods:{hapus1:function(t){var a=this;s.a.post(this.$apiAdress+"/api/pesanan/destroy/"+t+"?token="+localStorage.getItem("api_token")).then((function(t){a.showmodalhapus=!1,a.getPesanan(),a.infoModal.title="Success",a.infoModal.content="Data berhasil dihapus",a.showInfoModal()})).catch((function(t){console.log(t.response.data)}))},format1:function(t,a){return a+t.toFixed(0).replace(/./g,(function(t,a,e){return a>0&&"."!==t&&(e.length-a)%3==0?","+t:t}))},buttonshowapaini1:function(){this.showApaini1=!0},getPesanan:function(){var t=this;s.a.get(this.$apiAdress+"/api/pesanan?token="+localStorage.getItem("api_token"),{params:{page:this.currentPage,per_Page:this.perPage}}).then((function(a){t.totalRows=a.data.total,t.items=a.data.data;for(var e=0;e<t.items.length;e++)t.items[e].total_harga=t.format1(Number(t.items[e].total_harga),"Rp. ");for(var n=0;n<=t.items.length;n++)if("selesai"==t.items[n].status){var o={status:"success"};t.items[n]._cellVariants=o}else if("proses"==t.items[n].status){o={status:"warning"};t.items[n]._cellVariants=o}else if("baru"==t.items[n].status){o={status:"info"};t.items[n]._cellVariants=o}else if("dikirim"==t.items[n].status){o={status:"primary"};t.items[n]._cellVariants=o}})).catch((function(t){console.log(t)}))},store:function(){var t=this;s.a.post(this.$apiAdress+"/api/pesanan/store?token="+localStorage.getItem("api_token"),{nama_produk:this.nama_produk1,nama_pelanggan:this.nama_pelanggan1,qty:this.qty1}).then((function(a){t.getPesanan(),t.showApaini1=!1,t.nama_produk1="",t.nama_pelanggan1="",t.qty1="",t.infoModal.title="Success",t.infoModal.content="Data berhasil ditambahkan",t.showInfoModal()})).catch((function(t){console.log(t)}))},showSelectnamaproduk:function(){var t=this;s.a.get(this.$apiAdress+"/api/produkselect1?token="+localStorage.getItem("api_token")).then((function(a){t.Selectnamaproduk=a.data})).catch((function(t){console.log(t)}))},showSelectnamapelanggan:function(){var t=this;s.a.get(this.$apiAdress+"/api/produkselect2?token="+localStorage.getItem("api_token")).then((function(a){t.Selectnamapelanggan=a.data})).catch((function(t){console.log(t)}))},edit:function(t,a,e){this.showmodaledit=!0,this.nama_produk2=t.nama_produk,this.nama_pelanggan2=t.nama_pelanggan,this.qty2=t.qty,this.status2=t.status,this.idpesanan2=t.invoice_id},hapus:function(t,a,e){this.showmodalhapus=!0,this.idpesanan3=t.invoice_id},info:function(t,a,e){this.infoModal.title="Info Data Pesanan",this.infoModal.content=JSON.stringify(t,null,2),this.infoModal.item=t,this.$root.$emit("bv::show::modal",this.infoModal.id,e)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},storeedit:function(){var t=this;s.a.post(this.$apiAdress+"/api/pesanan/update/"+this.idpesanan2+"?token="+localStorage.getItem("api_token"),{nama_produk:this.nama_produk2,nama_pelanggan:this.nama_pelanggan2,qty:this.qty2,status:this.status2,invoice_id:this.idpesanan2}).then((function(a){t.getPesanan(),t.showmodaledit=!1,t.nama_produk2="",t.nama_pelanggan2="",t.qty2="",t.status2="",t.idpesanan2="",t.infoModal.title="Success",t.infoModal.content="Data berhasil diubah",t.showInfoModal()})).catch((function(t){console.log(t)}))},showInfoModal:function(){this.$root.$emit("bv::show::modal",this.infoModal.id)}}},r=e(1),l=Object(r.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CRow",[e("CCol",{attrs:{col:"12",lg:"12"}},[e("h3",[t._v("Pesanan")]),t._v(" "),e("CCard",{attrs:{no:"",header:""}},[e("CCardBody",[e("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.buttonshowapaini1()}}},[t._v("Tambah Pesanan")]),t._v(" "),e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Sort","label-for":"sort-by-select","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.ariaDescribedby;return[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-select",{staticClass:"w-75",attrs:{id:"sort-by-select",options:t.sortOptions,"aria-describedby":n},scopedSlots:t._u([{key:"first",fn:function(){return[e("option",{attrs:{value:""}},[t._v("-- none --")])]},proxy:!0}],null,!0),model:{value:t.sortBy,callback:function(a){t.sortBy=a},expression:"sortBy"}}),t._v(" "),e("b-form-select",{staticClass:"w-25",attrs:{disabled:!t.sortBy,"aria-describedby":n,size:"sm"},model:{value:t.sortDesc,callback:function(a){t.sortDesc=a},expression:"sortDesc"}},[e("option",{domProps:{value:!1}},[t._v("Asc")]),t._v(" "),e("option",{domProps:{value:!0}},[t._v("Desc")])])],1)]}}])})],1),t._v(" "),e("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Initial sort","label-for":"initial-sort-select","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[e("b-form-select",{attrs:{id:"initial-sort-select",options:["asc","desc","last"],size:"sm"},model:{value:t.sortDirection,callback:function(a){t.sortDirection=a},expression:"sortDirection"}})],1)],1),t._v(" "),e("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(a){t.filter=a},expression:"filter"}}),t._v(" "),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.filter},on:{click:function(a){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),t._v(" "),e("b-col",{staticClass:"my-1",attrs:{sm:"5",md:"6"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Per page","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[e("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(a){t.perPage=a},expression:"perPage"}})],1)],1)],1),t._v(" "),e("b-table",{attrs:{striped:"",bordered:"",hover:"",noCollapse:"",items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":0,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(a){t.sortBy=a},"update:sort-by":function(a){t.sortBy=a},"update:sortDesc":function(a){t.sortDesc=a},"update:sort-desc":function(a){t.sortDesc=a},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(name)",fn:function(a){return[t._v("\n                "+t._s(a.value.first)+" "+t._s(a.value.last)+"\n            ")]}},{key:"cell(actions)",fn:function(a){return[e("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(e){return t.info(a.item,a.index,e.target)}}},[t._v("\n                Info\n                ")]),t._v(" "),e("b-button",{staticClass:"mr-1 btn btn-warning",attrs:{size:"sm"},on:{click:function(e){return t.edit(a.item,a.index,e.target)}}},[t._v("\n                Edit\n                ")]),t._v(" "),e("b-button",{staticClass:"mr-1 btn btn-danger",attrs:{size:"sm"},on:{click:function(e){return t.hapus(a.item,a.index,e.target)}}},[t._v("\n                Hapus\n                ")]),t._v(" "),e("b-button",{attrs:{size:"sm"},on:{click:a.toggleDetails}},[t._v("\n                "+t._s(a.detailsShowing?"Hide":"Show")+" Detil\n                ")])]}},{key:"row-details",fn:function(a){return[e("b-card",[e("ul",t._l(a.item,(function(a,n){return e("li",{key:n},[t._v(t._s(n)+": "+t._s(a))])})),0)])]}}])}),t._v(" "),e("b-col",{staticClass:"my-1",attrs:{sm:"7",md:"6"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.recordsPerPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(a){t.currentPage=a},expression:"currentPage"}})],1),t._v(" "),e("b-modal",{attrs:{id:t.infoModal.id,title:t.infoModal.title,"ok-only":""},on:{hide:t.resetInfoModal}},[e("b-card",[e("div",{staticClass:"card-body"},t._l(t.infoModal.item,(function(a,n){return e("p",{key:n},[e("ul",[e("li",[e("strong",[t._v(t._s(n)+":")]),t._v(" "+t._s(a))])])])})),0)])],1)],1)],1)],1),t._v(" "),e("modal",{attrs:{show:t.showApaini1,name:"modal1",id:"modal1"},on:{close:function(a){t.showApaini1=!1}},scopedSlots:t._u([{key:"header",fn:function(){return[e("h3",[t._v("Tambah Pesanan")]),t._v(" "),e("CButton",{attrs:{color:"danger"},on:{click:function(a){t.showApaini1=!1}}},[t._v("X")])]},proxy:!0},{key:"body",fn:function(){return[e("CRow",{staticClass:"inline-block"},[e("CCard",{staticClass:"inline-block",staticStyle:{width:"100%"},attrs:{"no-header":""}},[e("CCardBody",[e("CForm",[e("div",[e("label",{staticStyle:{"font-weight":"bold"},attrs:{name:"8"}},[t._v("Nama Produk")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.nama_produk1,expression:"nama_produk1"}],staticClass:"form-control",attrs:{name:"nama_produk1",id:"nama_produk1",required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.nama_produk1=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:""}},[t._v("Pilih Produk")]),t._v(" "),t._l(t.Selectnamaproduk,(function(a){return e("option",{domProps:{value:a.nama_produk}},[t._v(t._s(a.nama_produk))])}))],2)]),t._v(" "),e("div",[e("label",{staticStyle:{"font-weight":"bold"},attrs:{name:"9"}},[t._v("Nama Pelanggan")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.nama_pelanggan1,expression:"nama_pelanggan1"}],staticClass:"form-control",attrs:{name:"nama_pelanggan1",id:"nama_pelanggan1",required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.nama_pelanggan1=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:""}},[t._v("Pilih Pelanggan Terdaftar")]),t._v(" "),t._l(t.Selectnamapelanggan,(function(a){return e("option",{domProps:{value:a.nama_pelanggan}},[t._v(t._s(a.nama_pelanggan))])}))],2)]),t._v(" "),e("div",[e("label",{staticStyle:{"font-weight":"bold"},attrs:{name:"9"}},[t._v("Jumlah Barang")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.qty1,expression:"qty1"}],staticClass:"form-control form-inline",staticStyle:{width:"100%"},attrs:{type:"number"},domProps:{value:t.qty1},on:{input:function(a){a.target.composing||(t.qty1=a.target.value)}}})])])],1)],1)],1)]},proxy:!0},{key:"footer",fn:function(){return[e("CButton",{attrs:{color:"primary"},on:{click:function(a){return t.store()}}},[t._v("Tambah Pesanan")])]},proxy:!0}])}),t._v(" "),e("modal",{attrs:{show:t.showmodaledit,name:"modaledit",id:"modaledit"},on:{close:function(a){t.showmodaledit=!1}},scopedSlots:t._u([{key:"header",fn:function(){return[e("h3",[t._v("Edit Pesanan")]),t._v(" "),e("CButton",{attrs:{color:"danger"},on:{click:function(a){t.showmodaledit=!1}}},[t._v("X")])]},proxy:!0},{key:"body",fn:function(){return[e("CRow",{staticClass:"inline-block"},[e("CCard",{staticClass:"inline-block",staticStyle:{width:"100%"},attrs:{"no-header":""}},[e("CCardBody",[e("CForm",[e("div",[e("label",{staticStyle:{"font-weight":"bold"},attrs:{name:"9"}},[t._v("Invoice")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.idpesanan2,expression:"idpesanan2"}],staticClass:"form-control form-inline",staticStyle:{width:"100%"},attrs:{type:"text",readonly:"readonly"},domProps:{value:t.idpesanan2},on:{input:function(a){a.target.composing||(t.idpesanan2=a.target.value)}}})]),t._v(" "),e("div",[e("label",{staticStyle:{"font-weight":"bold"},attrs:{name:"8"}},[t._v("Nama Produk")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.nama_produk2,expression:"nama_produk2"}],staticClass:"form-control",attrs:{name:"nama_produk1",id:"nama_produk1",required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.nama_produk2=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:""}},[t._v("Pilih Produk")]),t._v(" "),t._l(t.Selectnamaproduk,(function(a){return e("option",{domProps:{value:a.nama_produk}},[t._v(t._s(a.nama_produk))])}))],2)]),t._v(" "),e("div",[e("label",{staticStyle:{"font-weight":"bold"},attrs:{name:"9"}},[t._v("Nama Pelanggan")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.nama_pelanggan2,expression:"nama_pelanggan2"}],staticClass:"form-control",attrs:{name:"nama_pelanggan1",id:"nama_pelanggan1",required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.nama_pelanggan2=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:""}},[t._v("Pilih Pelanggan Terdaftar")]),t._v(" "),t._l(t.Selectnamapelanggan,(function(a){return e("option",{domProps:{value:a.nama_pelanggan}},[t._v(t._s(a.nama_pelanggan))])}))],2)]),t._v(" "),e("div",[e("label",{staticStyle:{"font-weight":"bold"},attrs:{name:"9"}},[t._v("Jumlah Barang")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.qty2,expression:"qty2"}],staticClass:"form-control form-inline",staticStyle:{width:"100%"},attrs:{type:"number"},domProps:{value:t.qty2},on:{input:function(a){a.target.composing||(t.qty2=a.target.value)}}})]),t._v(" "),e("div",[e("label",{staticStyle:{"font-weight":"bold"},attrs:{name:"9"}},[t._v("Status")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.status2,expression:"status2"}],staticClass:"form-control",attrs:{name:"status2",id:"status2",required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.status2=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"baru"}},[t._v("Baru")]),t._v(" "),e("option",{attrs:{value:"proses"}},[t._v("Proses")]),t._v(" "),e("option",{attrs:{value:"dikirim"}},[t._v("Dikirim")]),t._v(" "),e("option",{attrs:{value:"selesai"}},[t._v("Selesai")])])])])],1)],1)],1)]},proxy:!0},{key:"footer",fn:function(){return[e("CButton",{attrs:{color:"primary"},on:{click:function(a){return t.storeedit(t.idpesanan2)}}},[t._v("Update Pesanan")])]},proxy:!0}])}),t._v(" "),e("modal",{attrs:{show:t.showmodalhapus,name:"modalhapus",id:"modalhapus"},on:{close:function(a){t.showmodalhapus=!1}},scopedSlots:t._u([{key:"header",fn:function(){return[e("h3",[t._v("Hapus Pesanan")]),t._v(" "),e("CButton",{attrs:{color:"danger"},on:{click:function(a){t.showmodalhapus=!1}}},[t._v("X")])]},proxy:!0},{key:"body",fn:function(){return[e("p",[t._v("Apakah anda yakin ingin menghapus pesanan ini?")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.idpesanan3,expression:"idpesanan3"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.idpesanan3},on:{input:function(a){a.target.composing||(t.idpesanan3=a.target.value)}}})]},proxy:!0},{key:"footer",fn:function(){return[e("CButton",{attrs:{color:"primary"},on:{click:function(a){return t.hapus1(t.idpesanan3)}}},[t._v("Hapus")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);a.default=l.exports},55:function(t,a,e){"use strict";var n={props:{show:Boolean}},o=(e(191),e(1)),s=Object(o.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Transition",{attrs:{name:"modal"},on:{click:function(a){return a.target!==a.currentTarget?null:t.close(a)}}},[t.show?e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[t._t("header",[t._v("default header")])],2),t._v(" "),e("div",{staticClass:"modal-body"},[t._t("body",[t._v("\n          default body\n          ")])],2),t._v(" "),e("div",{staticClass:"modal-footer"},[t._t("footer",[t._v("\n            default footer\n            "),e("button",{staticClass:"modal-default-button",on:{click:function(a){return t.$emit("close")}}},[t._v("OK")])])],2)])])]):t._e()])}),[],!1,null,null,null);a.a=s.exports},77:function(t,a,e){var n=e(192);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(38)(n,o);n.locals&&(t.exports=n.locals)}}]);