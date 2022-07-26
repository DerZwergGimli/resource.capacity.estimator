"use strict";(self["webpackChunkresource_capacity_estimator"]=self["webpackChunkresource_capacity_estimator"]||[]).push([[795],{4195:function(e,t,s){s.d(t,{c0:function(){return i},vj:function(){return n}});var o=s(3538);function n(e,t){const s=(0,o.e)(),n=s.assignmentsList.filter((t=>t.host_uuid===e)).flatMap((e=>e.vm_uuid)),i=[];for(const o of n)i.push(s.vmsList.find((e=>e.uuids.find((e=>e===o))))?.[t].rec??0);return i.reduce(((e,t)=>e+t),0)}function i(e,t,s){const n=(0,o.e)(),i=n.assignmentsList.filter((t=>t.host_uuid===e)).flatMap((e=>e.vm_uuid)),r=[];for(const o of i)r.push(n.vmsList.find((e=>e.uuids.find((e=>e===o))))?.[t][s]??0);return r.reduce(((e,t)=>e+t),0)}},5011:function(e,t,s){s.d(t,{G:function(){return r},c:function(){return i}});var o=s(5733);function n(e,t){return e*t/1.073741824}function i(e,t,s){return n(e,t).toFixed(s)}function r(e,t,s,i){switch(console.log(e),s){case o.gj.R0:return parseFloat(n(e,t).toFixed(i));case o.gj.R1:if(e>=2)return parseFloat((n(e,t)/2).toFixed(i));break;case o.gj.R5:if(e>=3)return parseFloat((n(e,t)*(1-1/e)).toFixed(i));break;case o.gj.R6:if(e>=4)return parseFloat((n(e,t)*(1-2/e)).toFixed(i));break;case o.gj.R10:if(e>=4)return parseFloat((n(e,t)/2).toFixed(i));break;default:console.log("Raid-Config not implemented");break}return console.log("Error calculating RAID Storage size"),0}},5733:function(e,t,s){var o,n,i,r;s.d(t,{SE:function(){return n},W5:function(){return i},gj:function(){return r}}),function(e){e["min"]="min",e["rec"]="rec",e["max"]="max"}(o||(o={})),function(e){e["vcpu"]="vcpu",e["vram"]="vram",e["vstorage"]="vstorage"}(n||(n={})),function(e){e["cpu"]="cpu",e["ram"]="ram",e["storage"]="storage"}(i||(i={})),function(e){e["R0"]="RAID0",e["R1"]="RAID1",e["R5"]="RAID5",e["R6"]="RAID6",e["R10"]="RAID10"}(r||(r={}))},7795:function(e,t,s){s.r(t),s.d(t,{default:function(){return oe}});var o=s(3396),n=s(4870),i=s(7139),r=s(9242),a=s(3538);const u={key:0,class:"flex flex-row w-full space-x-4 bg-base-100 rounded-2xl px-3 items-center"},c={class:"basis-2/5 text-lg w-full"},l={class:"basis-1/5 justify-end flex flex-row space-x-1"},d=(0,o._)("i",{class:"bi bi-cpu"},null,-1),m={class:"basis-1/5 justify-end flex flex-row space-x-1"},f=(0,o._)("i",{class:"bi bi-memory"},null,-1),_={class:"basis-1/5 justify-end flex flex-row space-x-1"},v=(0,o._)("i",{class:"bi bi-device-hdd"},null,-1),p=(0,o._)("i",{class:"bi bi-trash"},null,-1),g=[p],h={name:"AssignmentVMElement"};var w=(0,o.aZ)({...h,props:{show_button:{type:Boolean,default:!1},vm:{type:Object,default:void 0},system_recommendation:{type:String,default:"rec"}},setup(e){return(t,s)=>e.vm?((0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("p",c,(0,i.zw)(e.vm.name),1),(0,o._)("div",l,[(0,o._)("p",null,(0,i.zw)(e.vm.vcpu[e.system_recommendation]),1),d]),(0,o._)("div",m,[(0,o._)("p",null,(0,i.zw)(e.vm.vram[e.system_recommendation]),1),f]),(0,o._)("div",_,[(0,o._)("p",null,(0,i.zw)(e.vm.vstorage[e.system_recommendation]),1),v]),e.show_button?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:s[0]||(s[0]=e=>t.$emit("clk_remove")),class:"btn btn-xs"},g)):(0,o.kq)("",!0)])):(0,o.kq)("",!0)}});const y=w;var b=y,x=s(5733),S=s(4195),k=s(5011);const U={class:"flex flex-col"},D={class:"flex flex-row self-center"},j=(0,o.Uk)(" / "),z={key:0},E={key:1},R={key:2},W={name:"HostUsageElement"};var A=(0,o.aZ)({...W,props:{host_uuid:{type:String,default:"none"},virtual_hw_conf:{type:Object,default:x.SE.vcpu},hw_conf:{type:Object,default:x.W5.cpu},host:{type:Object,default:null}},setup(e){function t(e,t){return console.log("used: "+t+" available: "+e),(t/e*100).toFixed(0)}return(s,r)=>((0,o.wg)(),(0,o.iD)("div",U,[e.hw_conf===(0,n.SU)(x.W5).cpu?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"radial-progress bg-primary text-primary-content border-4 border-primary",style:(0,i.j5)("--value: "+t(e.host.cpu.sockets*e.host.cpu.cores*2,(0,n.SU)(S.vj)(e.host_uuid,(0,n.SU)(x.SE).vcpu)))},(0,i.zw)(t(e.host.cpu.sockets*e.host.cpu.cores*2,(0,n.SU)(S.vj)(e.host_uuid,(0,n.SU)(x.SE).vcpu)))+" % ",5)):(0,o.kq)("",!0),e.hw_conf===(0,n.SU)(x.W5).ram?((0,o.wg)(),(0,o.iD)("div",{key:1,class:"radial-progress bg-primary text-primary-content border-4 border-primary",style:(0,i.j5)("--value: "+t(e.host.ram.slots*e.host.ram.size,(0,n.SU)(S.vj)(e.host_uuid,(0,n.SU)(x.SE).vram)))},(0,i.zw)(t(e.host.ram.slots*e.host.ram.size,(0,n.SU)(S.vj)(e.host_uuid,(0,n.SU)(x.SE).vram)))+" % ",5)):(0,o.kq)("",!0),e.hw_conf===(0,n.SU)(x.W5).storage?((0,o.wg)(),(0,o.iD)("div",{key:2,class:"radial-progress bg-primary text-primary-content border-4 border-primary",style:(0,i.j5)("--value: "+t((0,n.SU)(k.G)(e.host.storage.amount,e.host.storage.size,e.host.storage.raid,1),(0,n.SU)(S.vj)(e.host_uuid,(0,n.SU)(x.SE).vstorage)))},(0,i.zw)(t((0,n.SU)(k.G)(e.host.storage.amount,e.host.storage.size,e.host.storage.raid,1),(0,n.SU)(S.vj)(e.host_uuid,(0,n.SU)(x.SE).vstorage)))+" % ",5)):(0,o.kq)("",!0),(0,o._)("div",D,[(0,o._)("i",{class:(0,i.C_)("bi self-center pr-2"+(e.virtual_hw_conf===(0,n.SU)(x.SE).vcpu?" bi-cpu":e.virtual_hw_conf===(0,n.SU)(x.SE).vram?" bi-memory":" bi-device-hdd"))},null,2),(0,o._)("p",null,(0,i.zw)((0,n.SU)(S.vj)(e.host_uuid,e.virtual_hw_conf)),1),j,e.hw_conf===(0,n.SU)(x.W5).cpu?((0,o.wg)(),(0,o.iD)("p",z,(0,i.zw)(e.host.cpu.sockets*e.host.cpu.cores*2),1)):(0,o.kq)("",!0),e.hw_conf===(0,n.SU)(x.W5).ram?((0,o.wg)(),(0,o.iD)("p",E,(0,i.zw)(e.host.ram.slots*e.host.ram.size),1)):(0,o.kq)("",!0),e.hw_conf===(0,n.SU)(x.W5).storage?((0,o.wg)(),(0,o.iD)("p",R,(0,i.zw)((0,n.SU)(k.G)(e.host.storage.amount,e.host.storage.size,e.host.storage.raid,1)),1)):(0,o.kq)("",!0)])]))}});const L=A;var F=L;const q={key:0,class:"flex flex-col"},C={class:"flex flex-row self-center pb-2"},H={class:"text-2xl font-bold"},I={class:"badge badge-sm"},O={class:"flex flex-row justify-evenly m-2 p-2 rounded-lg"},M={name:"AssignmentHostElement"};var Y=(0,o.aZ)({...M,props:{host_uuid:{type:String,default:""},host:{type:Object,default:void 0},system_recommendation:{type:String,default:"rec"},host_index:{type:Number,default:0}},setup(e){return(0,o.aZ)({HostUsageElement:F}),(t,s)=>e.host?((0,o.wg)(),(0,o.iD)("div",q,[(0,o._)("div",C,[(0,o._)("p",H,(0,i.zw)(e.host.name),1),(0,o._)("span",I,(0,i.zw)(e.host_index),1)]),(0,o._)("div",O,[(0,o.Wm)(F,{host_uuid:e.host_uuid,virtual_hw_conf:(0,n.SU)(x.SE).vcpu,hw_conf:(0,n.SU)(x.W5).cpu,host:e.host},null,8,["host_uuid","virtual_hw_conf","hw_conf","host"]),(0,o.Wm)(F,{host_uuid:e.host_uuid,virtual_hw_conf:(0,n.SU)(x.SE).vram,hw_conf:(0,n.SU)(x.W5).ram,host:e.host},null,8,["host_uuid","virtual_hw_conf","hw_conf","host"]),(0,o.Wm)(F,{host_uuid:e.host_uuid,virtual_hw_conf:(0,n.SU)(x.SE).vstorage,hw_conf:(0,n.SU)(x.W5).storage,host:e.host},null,8,["host_uuid","virtual_hw_conf","hw_conf","host"])])])):(0,o.kq)("",!0)}});const Z=Y;var K=Z;const G=e=>((0,o.dD)("data-v-f03a4c7e"),e=e(),(0,o.Cn)(),e),T=G((()=>(0,o._)("div",{class:"grid m-4 h-20 card bg-base-300 rounded-box place-items-center"},[(0,o._)("h1",null,"Assignment")],-1))),V={class:"flex flex-col w-auto m-4 lg:flex-row"},B={class:"flex flex-grow space-y-2 p-2 card bg-base-300 rounded-box place-items-center"},N=["onDragstart"],$=G((()=>(0,o._)("div",{class:"divider lg:divider-horizontal"},"OR",-1))),J={class:"flex flex-auto space-y-2 card p-2 bg-base-300 rounded-box place-items-center"},P=["onDrop"],Q={key:0,class:"space-y-1"},X={name:"AssignmentView"};var ee=Object.assign(X,{setup(e){(0,o.aZ)({AssignmentVMElement:b,AssignmentHostElement:K});const t=(0,a.e)();function s(e,t){e.dataTransfer.dropEffect="move",e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("vm_uuid",t),console.log(t)}function u(e,s){const o=e.dataTransfer.getData("vm_uuid");s&&o&&t.make_assignment(s,o)}function c(e,s){t.remove_assignment(e,s)}function l(){t.assignmentsList=[]}return t.init(),(e,a)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[T,(0,o._)("button",{class:"btn m-4",onClick:a[0]||(a[0]=e=>l())},"Reset"),(0,o._)("div",V,[(0,o._)("div",B,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,n.SU)(t).vmsList,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"flex flex-col space-y-1 w-full px-10",key:e},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.uuids,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,n.SU)(t).assignmentsList.find((t=>t.vm_uuid.find((t=>t===e))))?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",{key:0,draggable:"true",onDragstart:t=>s(t,e)},[(0,o.Wm)(b,{id:"dragComponent",vm:(0,n.SU)(t).vmsList.find((t=>t.uuids.find((t=>t===e)))),system_recommendation:(0,n.SU)(t).system_recommendation},null,8,["vm","system_recommendation"])],40,N))])))),128))])))),128))]),$,(0,o._)("div",J,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,n.SU)(t).hostsList,(s=>((0,o.wg)(),(0,o.iD)("div",{class:"space-y-2 w-full px-2",key:s},[(0,o.Uk)((0,i.zw)(e.index)+" ",1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.uuids,((e,s)=>((0,o.wg)(),(0,o.iD)("div",{class:"border-2 border-primary p-2 rounded-xl drop-zone",onDrop:t=>u(t,e),onDragover:a[1]||(a[1]=(0,r.iM)((()=>{}),["prevent"])),onDragenter:a[2]||(a[2]=(0,r.iM)((()=>{}),["prevent"])),key:e},[(0,o.Wm)(K,{host_uuid:e,host:(0,n.SU)(t).hostsList.find((t=>t.uuids.find((t=>t===e)))),system_recommendation:(0,n.SU)(t).system_recommendation,host_index:s},null,8,["host_uuid","host","system_recommendation","host_index"]),(0,n.SU)(t).assignmentsList.find((t=>t.host_uuid===e))?((0,o.wg)(),(0,o.iD)("div",Q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,n.SU)(t).assignmentsList.find((t=>t.host_uuid===e)).vm_uuid,(s=>((0,o.wg)(),(0,o.iD)("div",{class:"flex flex-row",key:s},[(0,o.Wm)(b,{vm:(0,n.SU)(t).vmsList.find((e=>e.uuids.find((e=>e===s)))),system_recommendation:(0,n.SU)(t).system_recommendation,show_button:!0,onClk_remove:t=>c(e,s)},null,8,["vm","system_recommendation","onClk_remove"])])))),128))])):(0,o.kq)("",!0)],40,P)))),128))])))),128))])])],64))}}),te=s(89);const se=(0,te.Z)(ee,[["__scopeId","data-v-f03a4c7e"]]);var oe=se}}]);
//# sourceMappingURL=795.94ac138d.js.map